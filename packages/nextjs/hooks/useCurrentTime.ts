import { useEffect, useState } from "react";
import { formatLocalTime } from "../utils/format"; 

export const useCurrentTime = (refreshInterval: number = 60000): string => {
    const [currentTime, setCurrentTime] = useState<string>(formatLocalTime(new Date()));

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = formatLocalTime(now);
      setCurrentTime(formattedTime);
    };

    updateTime();

    const interval = setInterval(updateTime, refreshInterval);

    return () => clearInterval(interval);
  }, [refreshInterval]);

  return currentTime;
};