export const convertPmToNumber = (pm: string): number => {
  const pmNumber = Number(pm.replace("pm", ""));
  return pmNumber;
};
