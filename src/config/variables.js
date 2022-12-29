const variables = {
  host:
  process.env.NODE_ENV === "development"
  ? "" : "https://evaluacionaccesible.netlify.app"
     
};

module.exports = variables;