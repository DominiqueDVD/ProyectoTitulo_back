const variables = {
  host:
  process.env.NODE_ENV === "production"
  ? "https://evaluacionaccesible.netlify.app"
  : "",
     
};

module.exports = variables;