import { useEffect, useState } from "react";

export function usePageVisibility(): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(!document.hidden);
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return isVisible;
}
