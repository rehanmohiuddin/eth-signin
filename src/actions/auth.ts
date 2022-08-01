import { authSuccessPayload } from "../types/auth";

const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";

const signInSuccess = (payload: authSuccessPayload) => ({
  type: SIGN_IN_SUCCESS,
  payload,
});

export { SIGN_IN_SUCCESS, SIGN_IN_FAILURE, signInSuccess };
