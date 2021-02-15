import Config from "../config";

export const getInsightBackendAPI = () =>
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1"
    ? `http://localhost:8000`
    : `${Config.API_URL}`;

export const parseGetParams = (
  filter = "",
  offset = 0,
  limit = 20,
  sort = "",
  customArgs = {}
) => {
  const params = [];

  if (filter) {
    params.push(`filter=${JSON.stringify(filter)}`);
  }

  if (offset >= 0) {
    params.push(`offset=${offset}`);
  }

  if (limit >= 0) {
    params.push(`limit=${limit}`);
  }

  if (sort) {
    params.push(`sort=${sort}`);
  }

  Object.keys(customArgs).forEach((key) => {
    if (customArgs[key]) {
      params.push(`${key}=${customArgs[key]}`);
    }
  });

  return params.length ? "?" + params.join("&") : "";
};
