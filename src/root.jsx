import ReactDOM from "react-dom";
import React from "react";
import Components from "./components/Components";
import CustomButton from "./components/CustomButton";
import CustomDialog from './components/CustomDialog';
import DialogButton from './components/DialogButton';
import Notification from './components/Notification';
import { Provider } from "react-redux";
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { configureStore } from '@reduxjs/toolkit';
import formsReducer from './states/formsSlice';

export function render(element, items, blendGlobalTheme, blend, refs, getData, requiredItems, dialog) {
  const theme = createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: blendGlobalTheme.primaryColor.color,
        contrastText: '#fff',
      },
      secondary: {
        main: blendGlobalTheme.secondaryColor.color,
      },
      success: {
        main: blendGlobalTheme.primaryColor.color
      },
      text: {
        primary: 'rgba(0, 0, 0, 0.87)'
      }
    },
    typography: {
      button: {
        textTransform: 'none'
      }
    }
  });
  const formItems = items.map((item) => Components(item, blendGlobalTheme, blend));
  let finalFormItems
  let button
  let dialogButton
  let finalDialog
  if(dialog.show) {
    button = <DialogButton dialog={dialog}></DialogButton>
    blend.buttonWidth = 'auto'
    dialogButton = <CustomButton blend={blend} refs={refs} getData={getData} requiredItems={requiredItems} dialog={dialog}></CustomButton>
    dialog.formItems = formItems
    finalDialog = <CustomDialog dialog={dialog} customButton={dialogButton}></CustomDialog>
  }
  else {
    button = <CustomButton blend={blend} refs={refs} getData={getData} requiredItems={requiredItems} dialog={dialog}></CustomButton>
    finalFormItems = formItems
  }


const store = configureStore({
  reducer: {
    forms: formsReducer
  },
});

let notification
if(blend.showSuccessMsg) {
  notification = <Notification></Notification>
}

  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {finalDialog}
      <Grid 
        container
        wrap={'nowrap'}
        justifyContent={items.length === 0 || dialog.show ? 'center' : 'flex-start'}
        flexDirection='column' 
        height='100%'
        >
        {finalFormItems}
        {button}
        {notification}
      </Grid>
      </ThemeProvider>
    </Provider>,
    element
  );
}

export function teardown(element) {
  ReactDOM.unmountComponentAtNode(element);
}
