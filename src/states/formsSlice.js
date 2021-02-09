import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'forms',
  initialState: {
    items: {},
    dialogOpen: false,
  },
  reducers: {
    setForms: (state, action) => {
      state.items = action.payload
    },
    setItem: (state, action) => {
      state.items[action.payload.ref] = action.payload.data
    },
    removeItem: (state, action) => {
      delete state.items[action.payload]
    },
    setDialog: (state, action) => {
      state.dialogOpen = action.payload
    },
  },
});

export const selectAllItems = state => state.forms.items;
export const selectItem = function(state, ref) {
  if(typeof state.forms.items[ref] !== 'undefined') {
    return state.forms.items[ref]
  }
  else {
    return 'undefined'
  }
} 
export const selectDialog = state => state.forms.dialogOpen;
export const { setItem, removeItem, setDialog } = slice.actions;

export default slice.reducer;