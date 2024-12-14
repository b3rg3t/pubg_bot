export const formatString = (param: string, args: string[]) => {
  return param.replace(/{(\d)}/g, (_, index) => args[index]);
};
