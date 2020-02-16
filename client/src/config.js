module.exports = {
  BASE_URL:
    process.env.NODE_ENV === "production"
      ? `${window.location.protocol}//${window.location.host}/api/v1`
      : "http://localhost:8000/api/v1"
};
