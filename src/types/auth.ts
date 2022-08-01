export type authSuccessPayload = {
  walletId: string;
  blockchain?: string;
  network?: string;
};

export type authState = {
  walletId: string;
  blockchain: string;
  network: string;
  error: string;
};

export type actionType = {
  type: string;
  payload: authSuccessPayload;
};
