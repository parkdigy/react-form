let nameSeq = 0;
export const getName = (prefix: string, resetSeq?: boolean): string => {
  if (resetSeq) {
    nameSeq = 0;
  }
  nameSeq += 1;
  return `${prefix}_${nameSeq}`;
};
