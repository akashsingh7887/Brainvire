const initialState = {
    isLoggedIn: false,
    email:"",
    password:""
  };
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN': {
        return {
          ...state,
          isLoggedIn: action.payload.isLoggedIn,
          email: action.payload.email,
          password: action.payload.password,

        }
      }
      default: {
        return state;
      }
    }
  };
  export default authReducer;