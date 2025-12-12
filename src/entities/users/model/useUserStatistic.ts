import {useMemo} from "react";
import {calculateAge, calculateAverage, calculateMedian} from "@/shared/lib/math.ts";
import type {User} from "../types.ts";

export const useUserStatistic = (users: User[]) => {

  return useMemo(() => {
    if (!users || users.length === 0) {
      return {
        medianAge: 0,
        avgWeight: 0,
        avgHeight: 0,
        avgAge: 0,
      };
    }

    const ages = users.map((item: User) => calculateAge(item.birthDate));
    const weights = users.map(item => item.weight);
    const heights = users.map(item => item.height);

    const medianAge = calculateMedian(ages);
    const avgWeight = calculateAverage(weights);
    const avgHeight = calculateAverage(heights);
    const avgAge = calculateAverage(ages);

    return {
      medianAge: Number(medianAge.toFixed(2)),
      avgWeight: Number(avgWeight.toFixed(2)),
      avgHeight: Number(avgHeight.toFixed(2)),
      avgAge: Math.floor(avgAge)
    };
  }, [users]);
};