const SIGN_IN = "SIGN_IN";
const SIGN_IN_SUCESS = "SIGN_IN_SUCESS";
const SIGN_IN_FAILED = "SIGN_IN_FAILED";

export const sign_in = account => ({
  type: SIGN_IN,
  payload: {
    account
  }
});

export const sign_in_sucess = account => ({
  type: SIGN_IN_SUCESS,
  payload: {
    account
  }
});

export const sign_in_failed = () => ({
  type: SIGN_IN_FAILED
});

export default (state = {}, action = {}) => {
  switch (action.type) {
    case SIGN_IN_SUCESS:
      return Object.assign({}, state, {
        account: action.payload.account
      });
    default:
      return state;
  }
};
