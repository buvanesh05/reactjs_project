import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  NewRetailersData: [],
};

const retailersSlice = createSlice({
  name: 'retailers',
  initialState,
  reducers: {
    addRetailer: (state, action) => {
      state.NewRetailersData.push(action.payload);
    },

  },
});

export const { addRetailer } = retailersSlice.actions;
export default retailersSlice.reducer;
