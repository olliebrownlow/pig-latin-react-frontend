const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : "https://piglatin-backend.herokuapp.com";

export default baseUrl;
