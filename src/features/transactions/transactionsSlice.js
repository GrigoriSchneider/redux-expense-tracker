import { createSlice } from "@reduxjs/toolkit";

export const CATEGORIES = [
  "housing",
  "food",
  "transportation",
  "utilities",
  "clothing",
  "healthcare",
  "personal",
  "education",
  "entertainment",
];
const initialState = Object.fromEntries(
  CATEGORIES.map((category) => [category, []])
);

const options = {
  name: "transactions",
  initialState: initialState,
  reducers: {
    addTransaction: (state, action) => {
      console.log(action.payload);
      const category = action.payload.category;
      const amount = action.payload.amount;
      console.log(category);
      console.log(amount);

      state[category].push(action.payload);
    },
    deleteTransaction: (state, action) => {
      console.log(action.payload);
      console.log(action.payload.id);

      const category = action.payload.category;
      const deleteId = action.payload.id;
      state[category] = state[category].filter(
        (transactions) => transactions.id !== deleteId
      );
    },
  },
};

const transactionsSlice = createSlice(options);

export const { addTransaction, deleteTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;

export const selectTransactions = (state) => state.transactions;

export const selectFlattenedTransactions = (state) =>
  Object.values(state.transactions).reduce((a, b) => [...a, ...b], []);
