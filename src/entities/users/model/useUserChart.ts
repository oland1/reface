import {useMemo} from 'react';
import type {User} from "../types.ts";

const getYearOfBirth = (date: string): number | null => {
  const yearStr = date.split('-')[0];
  const year = parseInt(yearStr, 10);
  return isNaN(year) ? null : year;
};

export const useUserChart = (users: User[]) => {
  return useMemo(() => {
    if (!users || users.length === 0) {
      return [];
    }

    const counts: { [year: number]: number } = {};

    users.forEach(user => {
      if (user.birthDate) {
        const year = getYearOfBirth(user.birthDate);
        if (year !== null) {
          counts[year] = (counts[year] || 0) + 1;
        }
      }
    });

    const data = Object.keys(counts).map(year => ({
      year: parseInt(year, 10),
      count: counts[parseInt(year, 10)]
    }));

    data.sort((a, b) => a.year - b.year);

    return data;
  }, [users]);
};