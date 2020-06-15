declare namespace NodeJS {
    export interface ProcessEnv {
      SERVER_PORT: string;
      DB_URI: string;
      DB_NAME?: string;
    }
  }