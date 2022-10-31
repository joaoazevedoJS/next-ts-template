const isDevelopment = process.env.NODE_ENV === "development";

export const myBackendAPI = isDevelopment ? "http://localhost:3000" : "http://localhost:3001";
