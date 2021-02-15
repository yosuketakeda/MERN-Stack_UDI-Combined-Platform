export const setItemsLocalStorage = (accessToken, username) => {
  let day = new Date();
  day.setDate(day.getDate() + 1);
  window.localStorage.setItem("exp", day);
  window.localStorage.setItem("access_token", accessToken);
  window.localStorage.setItem("username", username);
};

export const deleteItemsLocalStorage = () => {
  window.localStorage.removeItem("exp");
  window.localStorage.removeItem("access_token");
  window.localStorage.removeItem("username");
  // window.location.replace('/');
};
