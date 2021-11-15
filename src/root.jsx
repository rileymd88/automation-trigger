import ReactDOM from "react-dom";
import React from "react";
import Components from "./components/Components";
import CustomButton from "./components/CustomButton";
import CustomDialog from './components/CustomDialog';
import DialogButton from './components/DialogButton';
import Notification from './components/Notification';
import { Provider } from "react-redux";
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, StyledEngineProvider, adaptV4Theme } from '@mui/material/styles';
import { configureStore } from '@reduxjs/toolkit';
import formsReducer from './states/formsSlice';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

export function render(element, items, blendGlobalTheme, blend, refs, getData, requiredItems, dialog) {
  const theme = createTheme(adaptV4Theme({
    palette: {
      mode: 'light',
      primary: {
        main: blendGlobalTheme.primaryColor.color,
        contrastText: blendGlobalTheme.fontColor.color,
      },
      secondary: {
        main: blendGlobalTheme.secondaryColor.color,
      },
      success: {
        main: blendGlobalTheme.primaryColor.color,
        contrastText: blendGlobalTheme.fontColor.color,
      },
      text: {
        primary: 'rgba(0, 0, 0, 0.87)'
      }
    },
    typography: {
      button: {
        textTransform: 'none',
      },
      fontFamily: 'Source Sans Pro,sans-serif'
    },
  }));

  const formItems = items.map((item) => Components(item, blendGlobalTheme, blend));
  let finalFormItems
  let button
  let dialogButton
  let finalDialog
  if (dialog.show) {
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
  if (blend.showSuccessMsg) {
    notification = <Notification></Notification>
  }

  ReactDOM.render(
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            {finalDialog}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                wrap: 'nowrap',
                justifyContent: typeof finalFormItems === 'undefined' || finalFormItems.length === 0 || dialog.show ? 'center' : 'flex-start',
                height: '100%',
                paddingRight: '10px',
                paddingLeft: '10px',
              }}
            >
              {finalFormItems}
              {button}
              {notification}
            </Box>
          </ThemeProvider>
        </StyledEngineProvider>
      </Provider>
    </LocalizationProvider>,
    element
  );
}

export function teardown(element) {
  ReactDOM.unmountComponentAtNode(element);
}
