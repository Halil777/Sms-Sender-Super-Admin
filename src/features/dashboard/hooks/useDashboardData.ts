import { useState, useEffect } from "react";
import { DashboardData } from "../types/DashboardTypes";

const useDashboardData = () => {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = () => {
      const staticData: DashboardData = {
        clientsCount: 1200,
        dangerCount: 75,
        blacklistCount: 30,
        phoneCount: 450,
      };
      setData(staticData);
    };

    fetchData();
  }, []);

  return data;
};

export default useDashboardData;
