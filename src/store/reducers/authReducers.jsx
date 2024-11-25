import { LOGIN_CONFIRMED_ACTION, LOGIN_FAILED_ACTION, LOGOUT_ACTION } from "../actions/authActions";


const initialState = {
    login_request: false,
    auth: {
      email: "",
      accessToken: "",
      localId: "",
      expiresIn: "",
      refreshToken: "",
      user:{
        name:undefined,
        email:undefined,
        role: undefined
      },
    },
    errorMessage: "",
    successMessage: "",
    showLoading: false,
}


const authReducer = (state = initialState,action) =>{
 
//   if (action.type === SIGNUP_CONFIRMED_ACTION) {
    
//     return {
//       ...state,
//       auth: {
//         email: `${action.payload}`
//       },
//       errorMessage: "",
//       successMessage: "Signup Successfully Completed",
//       showLoading: false,
//     };
//   }
  if (action.type === LOGIN_CONFIRMED_ACTION) {
   
    
    return {
      ...state,
      auth: {
       ...state.auth,
        email: action.payload.user.email,
        accessToken: action.payload.accessToken,
        // user: action.payload.user.name
        user:{
          ...state.auth.user,
          name: action.payload.user.name,
          email: action.payload.user.email,
          role: action.payload.user.role
        }
      },
      errorMessage: "",
      successMessage: action.payload.message,
      showLoading: false,
    };
  };
  if (
    action.type === LOGIN_FAILED_ACTION
  ) {
    return {
      ...state,
      errorMessage: action.payload,
      successMessage: "",
      showLoading: false,
    };
  }
  if (action.type === LOGOUT_ACTION) {
    return {
      ...state,
      auth: {
        email: "",
        idToken: "",
        localId: "",
        expiresIn: "",
        refreshToken: "",
        user: undefined,
      },
    errorMessage: "",
    successMessage: "",
    showLoading: false,
    };
  }
  return state;

  
}

export default authReducer;