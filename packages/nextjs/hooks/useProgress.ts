import { useState, useEffect, useRef } from "react";

export const useProgress = () => {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const randomProgress = Math.floor(Math.random() * 10) + 1;
        const newValue = prev + randomProgress;

        if (newValue >= 100) {
          clearInterval(intervalRef.current!);
          setIsReady(true);
          return 100;
        }
        return newValue;
      });
    }, 200);

    return () => clearInterval(intervalRef.current!);
  }, []);

  return { progress, isReady };
};
