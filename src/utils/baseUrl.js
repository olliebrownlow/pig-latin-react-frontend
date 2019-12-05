const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://piglatin-dictionary.herokuapp.com"
    : "http://localhost:3001";

export default baseUrl;