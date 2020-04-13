const baseUrl = "http://localhost:3000";
const loginUrl = baseUrl + "/login";
const validateUrl = baseUrl + "/validate";
const userUrl = baseUrl + "/users";

const get = (url) =>
  fetch(url, {
    headers: {
      Authorization: localStorage.token,
    },
  }).then((resp) => resp.json());

const post = (url, data) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accepts: "application/json",
    },
    body: JSON.stringify(data),
  }).then((resp) => resp.json());

const patch = (url, id, data) =>
  fetch(`${url}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accepts: "application/json",
    },
    body: JSON.stringify(data),
  }).then((resp) => resp.json());

const destroy = (url, id) =>
  fetch(`${url}/${id}`, {
    method: "DELETE",
  });

const login = (username, password) =>
  post(loginUrl, { user: { username: username, password: password } });

const createAccount = (user) => post(userUrl, user);

const validate = () => get(validateUrl);

export default { login, validate, createAccount, post, patch, destroy };
