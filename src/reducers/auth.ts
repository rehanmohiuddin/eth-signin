import { SIGN_IN_SUCCESS } from "../actions/auth";
import { actionType, authState } from "../types/auth";

const authReducer = (
  state = {
    walletId: "string",
    blockchain: "string",
    network: "string",
    isAuthenticated: false,
  },
  action: actionType
) => {
  const { type, payload } = action;
  switch (type) {
    case SIGN_IN_SUCCESS: {
      return {
        ...state,
        walletId: payload.walletId,
        blockchain: payload.blockchain,
        network: payload.network,
        isAuthenticated: true,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
