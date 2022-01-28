const INITIAL_STATE = {
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOGIN_REQUEST": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "LOGIN_SUCCESS": {
        return {
            ...state,
            isAuthenticated: true,
            isLoading: false,
        };
    } case "LOGIN_FAILURE": {
        return {
            ...state,
            isAuthenticated: false,
            isLoading: false,
            error: action.payload,
        };
    } case "LOGOUT": {
        return {
            ...state,
            isAuthenticated: false,
            isLoading: false,
        };
    }
    default:
      return state;
  }
}

export default auth;
