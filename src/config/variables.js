const variables = {
  host:
    process.env.NODE_ENV === "development" ? "https://backevaluacionaccesible.netlify.app/" : ""
     
};

module.exports = variables;
