export const getHourMinSec = () => {
  const time = new Date();
  return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
};
