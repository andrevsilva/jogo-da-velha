import { useState, useEffect, useRef } from 'react';

export default function useTimer(durationSeconds, onExpire) {
  const [timeLeft, setTimeLeft] = useState(durationSeconds);
  const timerRef = useRef(null);

  useEffect(() => {
    setTimeLeft(durationSeconds);
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          onExpire();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [durationSeconds, onExpire]);

  const reset = () => {
    setTimeLeft(durationSeconds);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  return { timeLeft, reset };
}
