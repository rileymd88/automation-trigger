import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'forms',
  initialState: {
    items: {},
    dialogOpen: false,
    snackbarOpen: false,
    message: '',
    severity: 'success'
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
    setSnackbarOpen: (state, action) => {
      state.snackbarOpen = action.payload
    },
    setMessage: (state, action) => {
      state.message = action.payload
    },
    setSeverity: (state, action) => {
      state.severity = action.payload
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
export const selectSnackbarOpen = state => state.forms.snackbarOpen;
export const selectMessage = state => state.forms.message;
export const selectSeverity = state => state.forms.severity;
export const { setItem, removeItem, setDialog, setMessage, setSnackbarOpen, setSeverity } = slice.actions;

export default slice.reducer;