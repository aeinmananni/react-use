import { useState, useEffect } from "react";

export const useNetworkState = () => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    const handelOnline = () => setIsOnline(true);
    const handelOffline = () => setIsOnline(false);
    window.addEventListener("online", handelOnline);
    window.addEventListener("offline", handelOffline);

    return () => {
      window.removeEventListener("online", handelOnline);
      window.removeEventListener("offline", handelOffline);
    };
  }, [isOnline]);

  return { isOnline };
};
