import ReactDOM from "react-dom";
import React from "react";
import Components from "./components/Components";
import store from "./store";
import { Provider } from "react-redux";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";

export function render(element, items) {
  const formItems = items.map((item) => Components(item));
  ReactDOM.render(
    <Provider store={store}>
      <Grid container direction='column'>{formItems}</Grid>
    </Provider>,
    element
  );
}

export function teardown(element) {
  ReactDOM.unmountComponentAtNode(element);
}
