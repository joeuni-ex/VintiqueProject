import store from "../store/configStore";

const authHeader = () => {
  const currentUser = store.getState().user;

  return {
    "Content-Type": "application/json",
    authorization: "Bearer " + currentUser?.token,
  };
};

const authFormDataHeader = () => {
  const currentUser = store.getState().user;

  return {
    "Content-Type": "multipart/form-data",
    authorization: "Bearer " + currentUser?.token,
  };
};

export { authHeader, authFormDataHeader };
