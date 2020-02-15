module.exports = {
  BASE_URL:
    process.env.NODE_ENV === "production"
      ? `${window.location.protocol}//${window.location.host}/api`
      : "http://localhost:8000/api"
};
