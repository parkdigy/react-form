declare const env: {
  mode: 'development' | 'production';
  isDevelopment: boolean;
  isProduction: boolean;
  name: string;
};

declare function ll(message?: any, ...optionalParams: any[]): void;
