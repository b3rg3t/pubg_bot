import { format } from "date-and-time";

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

/** Format ISO date to YYMMDD HH:MM */
const formatTime = (date: string) => {
  const dateObj = new Date(date);

  return format(dateObj, "YYYY-MM-DD HH:MM");
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

const formatDistance = (distance: number) => {
  const km = distance / 1000;
  return km.toFixed(2) + " km";
};

const addUnderlineToText = (characters: string) => {
  return "^".repeat(characters.length);
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
  formatSecToMinuAndSec,
  formatDistance,
  addUnderlineToText,
};
