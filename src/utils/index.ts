export const getRandomDate = () => {
  const day = (Math.random() * 30 + 1).toFixed(0);
  const month = (Math.random() * 12 + 1).toFixed(0);
  const year = (Math.random() * 24 + 1 + 2000).toFixed(0);
  return `${day}/${month}/${year}`;
};
