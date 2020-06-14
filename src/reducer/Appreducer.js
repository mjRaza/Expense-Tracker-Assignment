export const Appreducer = (state, { type, payload }) => {
  switch (type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (trans) => trans.id !== payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [payload, ...state.transactions],
      };

    default:
      return state;
      break;
  }
};
