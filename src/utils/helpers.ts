const calculateKD = (kills: number, deaths: number) => {
  return formatToFixedTwo(kills / deaths);
};

const calculateKDA = (kills: number, deaths: number, assists: number) => {
  return formatToFixedTwo((kills + assists) / deaths);
};

const calculateAvgDamage = (matches: number, damageDealt: number) => {
  return (damageDealt / matches).toFixed(0);
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

const renderMessage = (message: { header: string; messages: string[] }) => {
  return `
      ### ${message.header}
      \`\`\`${message.messages.join("\n")}\`\`\`
  `;
};

const formatTime = (date: string) => {
  return `${date.substring(0, 10)}, ${date.substring(11, 16)}`;
};

const formatSecToMinuAndSec = (time: number) => {
  const minutes = Math.floor(time / 60);

  const seconds = time - minutes * 60;

  const hours = Math.floor(time / 3600);
  time = time - hours * 3600;

  function str_pad_left(string: number, pad: string, length: number) {
    return (new Array(length + 1).join(pad) + string).slice(-length);
  }

  const finalTime =
    str_pad_left(minutes, "0", 2) + ":" + str_pad_left(seconds, "0", 2);

  return finalTime;
};

export {
  calculateKD,
  calculateKDA,
  formatToPercentage,
  formatToFixedTwo,
  formatString,
  calculateAvgDamage,
  renderMessage,
  formatTime,
  formatSecToMinuAndSec
};
