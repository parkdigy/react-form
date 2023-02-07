const ll = function (message?: any, ...optionalParams: any[]) {
  console.log(message, ...optionalParams);
};

const nextTick = function (callback: () => void): void {
  setTimeout(callback, 1);
};

export { ll, nextTick };

export * from './compare';
export * from './date_time';
export * from './file';
