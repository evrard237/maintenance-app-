import { toast } from "react-toastify";
// import { API } from "services/axios";

import SecureLS from "secure-ls";

var ls = new SecureLS({ encodingType: "aes" });

export const LOGIN_CONFIRMED_ACTION = "[login action] confirmed login";
export const LOGIN_FAILED_ACTION = "[login action] failed login";
export const LOADING_TOGGLE_ACTION = "[Loading action] toggle loading";
export const LOGOUT_ACTION = "[Logout action] logout action";

export async function logout(navigate) {
  try {
    await AUTHAPI.post("/auth/logout", {
      withCredentials: true,
      data: {
        email: ls.get("user-details").user.email,
      },
    }).then((response) => {
      console.log(response);
      if (response.data.message === "cookie cleared") {
        document.cookie =
          "username=jwt; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        localStorage.clear();
        console.log("localStorage", ls.get("user-details"));

        window.location.reload();
        // navigate('/');
      }
    });

    // navigate('/');
  } catch (error) {
    console.log(error);
  }

  return {
    type: LOGOUT_ACTION,
  };
}

export function loginFailedAction(data) {
  return {
    type: LOGIN_FAILED_ACTION,
    payload: data,
  };
}

export function loginConfirmedAction(data) {
  return {
    type: LOGIN_CONFIRMED_ACTION,
    payload: data,
  };
}
