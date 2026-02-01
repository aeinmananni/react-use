/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect } from "react";
import { BatteryDivais } from "./models";

export const useBattery = () => {
  const [batteryInfo, setBatteryInfo] = useState<BatteryDivais>({
    level: null,
    charging: null,
    chargingTime: null,
    dischargingTime: null,
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBatteryInfo = async () => {
      if ("getBattery" in navigator) {
        try {
          const battery = await (navigator as any).getBattery();

          const updateBatteryInfo = () => {
            setBatteryInfo({
              level: Math.round(battery.level * 100).toString(),
              charging: battery.charging,
              chargingTime: battery.chargingTime,
              dischargingTime: battery.dischargingTime,
            });
          };

          updateBatteryInfo();

          battery.addEventListener("levelchange", updateBatteryInfo);
          battery.addEventListener("chargingchange", updateBatteryInfo);
          battery.addEventListener("chargingtimechange", updateBatteryInfo);
          battery.addEventListener("dischargingtimechange", updateBatteryInfo);

          return () => {
            battery.removeEventListener("levelchange", updateBatteryInfo);
            battery.removeEventListener("chargingchange", updateBatteryInfo);
            battery.removeEventListener(
              "chargingtimechange",
              updateBatteryInfo
            );
            battery.removeEventListener(
              "dischargingtimechange",
              updateBatteryInfo
            );
          };
        } catch (e) {
          setError("An error occurred while fetching battery information.");
          console.error(e);
        }
      } else {
        setError("Battery Status API is not supported in this browser.");
        console.error("Battery Status API is not supported in this browser.");
      }
    };

    fetchBatteryInfo();
  }, []);

  return { batteryInfo, error };
};
