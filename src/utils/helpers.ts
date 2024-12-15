const calculateKD = (kills: number, deaths: number) => {
  return formatToFixedTwo(kills / deaths);
};

const calculateKDA = (kills: number, deaths: number, assists: number) => {
  return formatToFixedTwo((kills + assists) / deaths);
};

const formatToPercentage = (value: number) => {
  let percentage = value * 100; // Convert to percentage
  return percentage.toFixed(2) + "%"; // Format to two decimal places
};

const formatToFixedTwo = (value: number) => {
  return value.toFixed(2);
};

const formatString = (param: string, args?: string[]) => {
  if (args) {
    return param.replace(/{(\d)}/g, (_, index) => args[index]);
  }
  return param;
};

export {
  calculateKD,
  calculateKDA,
  formatToPercentage,
  formatToFixedTwo,
  formatString,
};
