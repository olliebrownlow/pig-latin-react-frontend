const baseUrl =
  process.env.NODE_ENV === "production"
    ? "http://localhost:3001"
    : "https://piglatin-backend.herokuapp.com";

export default baseUrl;
