import { useLayoutEffect, useMemo, useState } from "react";

export const useCountDownDate = (targetTimeStamp: number) => {
  const countDownTimestamp = new Date(targetTimeStamp).getTime();

  const [countDown, setCountDown] = useState(countDownTimestamp - new Date().getTime());
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>(null)

  const dateValues = useMemo(() => {
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    if (days + hours + minutes + seconds < 0 ) {
      clearInterval(intervalId);
    }
    
    return { 
      days: days <= 0 ? 0 : days,
      hours: hours <= 0 ? 0 : hours,
      minutes: minutes <= 0 ? 0 : minutes,
      seconds: seconds <= 0 ? 0 : seconds,
    };
  }, [countDown]);

  useLayoutEffect(() => {
    const id = setInterval(() => {
      setCountDown(countDownTimestamp - new Date().getTime());
    }, 1000);

    setIntervalId(id);

    return () => {
      clearInterval(id);
      clearInterval(intervalId);
    };
  }, [countDownTimestamp]);

  return dateValues;
};

export default useCountDownDate;
