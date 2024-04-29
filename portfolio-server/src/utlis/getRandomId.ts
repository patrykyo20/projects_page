const getRandomId = () => {
  const min = 1;
  const max = 1000000;

  return Math.floor(Math.random() * (max - min + 1)) + 1
};

export default getRandomId;