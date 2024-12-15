export const formatString = (param: string, args?: string[]) => {
  if (args) {
    return param.replace(/{(\d)}/g, (_, index) => args[index]);
  }
  return param;
};
