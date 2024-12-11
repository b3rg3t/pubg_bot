export const formatString = (param: string, args: string[]) => {
console.log( param.replace(/{(\d)}/g, (_, index) => args[index]));

  return param.replace(/{(\d)}/g, (_, index) => args[index]);
};
