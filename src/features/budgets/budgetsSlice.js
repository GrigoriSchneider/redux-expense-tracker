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
const initialState = CATEGORIES.map((category) => ({
  category: category,
  amount: 0,
}));

const options = {
  name: "budgets",
  initialState: initialState,
  reducers: {
    editBudget: (state, action) => {
      const category = action.payload.category;
      const amount = action.payload.amount;

      // console.log(action.payload);

      state.find((budget) => budget.category === category).amount = amount;
    },
  },
};

const budgetsSlice = createSlice(options);

export const { editBudget } = budgetsSlice.actions;
export default budgetsSlice.reducer;

export const selectBudgets = (state) => state.budgets;
