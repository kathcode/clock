import { useEffect, useState } from "react";

export const useDate = () => {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0)
  const [isLoadingDate, setIsLoadingDate] = useState(true);

  const getTime = () => {
    const currentDate = new Date();
    setHours(currentDate.getHours());
    setMinutes(currentDate.getMinutes())
    setSeconds(currentDate.getSeconds())
    setIsLoadingDate(false)
  }

  useEffect(() => {
    const intervalID = setInterval(getTime, 1000)

    return (() => clearInterval(intervalID))
  }, [])

  return {
    hours,
    minutes,
    seconds,
    isLoadingDate
  }
}