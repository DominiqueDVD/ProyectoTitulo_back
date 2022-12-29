const variables = {
  host:
  process.env.NODE_ENV === "production"
  ? "http://127.0.0.1:64578"
  : "https://evaluacionaccesible.netlify.app",
     
};

module.exports = variables;