export function login(payload) {
  return {
    type: "LOGIN_REQUEST",
  };
}

export function login_success(payload) {
  return {
    type: "LOGIN_SUCCESS",
    user: payload,
  };
}

export function login_failure() {
  return {
    type: "LOGIN_FAILURE",
  };
}
