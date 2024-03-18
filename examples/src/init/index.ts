declare global {
  type PartialPick<T, K extends keyof T> = Partial<Pick<T, K>>;
  type PartialOmit<T, K extends keyof T> = Partial<Omit<T, K>>;

  function ll(message?: any, ...optionalParams: any[]): void;
  function getName(prefix: string, resetSeq?: boolean): string;
}

globalThis.ll = function (message?: any, ...optionalParams: any[]) {
  console.log(message, ...optionalParams);
};

let nameSeq = 0;
globalThis.getName = (prefix: string, resetSeq?: boolean): string => {
  if (resetSeq) {
    nameSeq = 0;
  }
  nameSeq += 1;
  return `${prefix}_${nameSeq}`;
};

export {};
