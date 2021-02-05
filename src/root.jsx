import ReactDOM from "react-dom";
import React from "react";
import Components from "./components/Components";
import CustomButton from "./components/CustomButton";
import store from "./store";
import { Provider } from "react-redux";
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

export function render(element, items, blendGlobalTheme, blend, refs, getData) {
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
      text: {
        primary: 'rgba(0, 0, 0, 0.87)'
      }
    },
  });
  const formItems = items.map((item) => Components(item, blendGlobalTheme, blend));
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <Grid container flexDirection='column' height='100%'>
        {formItems}
        <div className={{flexGrow: 1}}></div>
        <CustomButton blend={blend} refs={refs} getData={getData}></CustomButton>
      </Grid>
      </ThemeProvider>
    </Provider>,
    element
  );
}

export function teardown(element) {
  ReactDOM.unmountComponentAtNode(element);
}
