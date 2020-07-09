export const login = (payload) => {
    console.log(payload)
    return ({
    type: 'LOGIN',
    payload: payload,
  });}