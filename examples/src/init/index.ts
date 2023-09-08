import { ReactNode } from 'react';

declare global {
  type PartialPick<T, K extends keyof T> = Partial<Pick<T, K>>;
  type PartialOmit<T, K extends keyof T> = Partial<Omit<T, K>>;
  //--------------------------------------------------------------------------------------------------------------------
  function ll(message?: any, ...optionalParams: any[]): void;
  function empty(v: any): boolean;
  function notEmpty(v: any): boolean;
  function lv<L extends ReactNode, V>(
    label: L,
    value: V,
    other?: { [key: string]: any }
  ): { label: L; value: V } & { [key: string]: any };
  function getName(prefix: string, resetSeq?: boolean): string;
}

globalThis.ll = function (message?: any, ...optionalParams: any[]) {
  console.log(message, ...optionalParams);
};

globalThis.empty = function (v: any) {
  let result = false;
  if (v == null) {
    result = true;
  } else if (typeof v === 'string') {
    result = v === '';
  } else if (typeof v === 'object') {
    if (Array.isArray(v)) {
      result = v.length === 0;
    } else if (!(v instanceof Date)) {
      result = Object.entries(v).length === 0;
    }
  }
  return result;
};

globalThis.notEmpty = function (v: any) {
  return !empty(v);
};

globalThis.lv = <L extends ReactNode, V>(
  label: L,
  value: V,
  other?: { [key: string]: any }
): { label: L; value: V } & { [key: string]: any } => {
  return { label, value, ...other };
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
