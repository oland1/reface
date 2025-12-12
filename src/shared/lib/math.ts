export const calculateAverage = (arr: number[]): number => {
  if (arr.length === 0) return 0;
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
};

export const calculateMedian = (arr: number[]): number => {
  if (arr.length === 0) return 0;

  const sortedArr = [...arr].sort((a, b) => a - b);
  const middle = Math.floor(sortedArr.length / 2);

  if (sortedArr.length % 2 !== 0) {
    return sortedArr[middle];
  }

  return (sortedArr[middle - 1] + sortedArr[middle]) / 2;
};

export const calculateAge = (date: string): number => {
  const birthday = new Date(date);
  const today = new Date();

  let age = today.getFullYear() - birthday.getFullYear();

  const m = today.getMonth() - birthday.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }

  return age;
};