export const getAccessToken = () => {
  return sessionStorage.getItem("accessToken");
};

export const getRefreshToken = () => {
  return sessionStorage.getItem("refreshToken");
};

export const setAccessToken = (accessToken) => {
  sessionStorage.setItem("accessToken", `Bearer ${accessToken}`);
};

export const setRefreshToken = (refreshToken) => {
  sessionStorage.setItem("refreshToken", `Bearer ${refreshToken}`);
};

// function allows to construct an object based on the nature of the operation (params or query) and the provided data.
export const getType = (value, body) => {
  if (value.params) {
    return { params: body };
  } else if (value.query) {
    if (typeof body === "object") {
      return { query: body._id };
    } else {
      return { query: body };
    }
  }
  return {};
};

/*
Use Case Scenarios:

Scenario 1 (params):

If you want to provide specific instructions or parameters for an operation, you might use value.params. For example, if you're updating a user and need to send user data, value.params could be set to true.

Scenario 2 (query):

If you're querying or asking the system for information, you might use value.query. For example, if you want to get details about a specific entity identified by an ID, you could set value.query to true.
*/
