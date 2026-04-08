import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import { ThemeProvider } from '@qlik/sprout-react';
import Components from "./components/Components";
import CustomButton from "./components/CustomButton";
import CustomDialog from './components/CustomDialog';
import DialogButton from './components/DialogButton';
import Notification from './components/Notification';
import formsReducer from './states/formsSlice';

const roots = new WeakMap();

function getRoot(element) {
  let root = roots.get(element);

  if (!root) {
    root = createRoot(element);
    roots.set(element, root);
  }

  return root;
}

export function render(element, items, blendGlobalTheme, blend, refs, getData, dialog, app, model) {
  const formItems = items.map((item) => Components(item, blendGlobalTheme, blend));
  let finalFormItems
  let button
  let dialogButton
  let finalDialog

  if (dialog.show) {
    button = <DialogButton blendGlobalTheme={blendGlobalTheme} dialog={dialog}></DialogButton>
    blend.buttonWidth = 'auto'
    dialogButton = (
      <CustomButton
        app={app}
        blend={blend}
        blendGlobalTheme={blendGlobalTheme}
        dialog={dialog}
        getData={getData}
        items={items}
        model={model}
        refs={refs}
      />
    )
    dialog.formItems = formItems
    finalDialog = <CustomDialog dialog={dialog} customButton={dialogButton}></CustomDialog>
  }
  else {
    button = (
      <CustomButton
        app={app}
        blend={blend}
        blendGlobalTheme={blendGlobalTheme}
        dialog={dialog}
        getData={getData}
        items={items}
        model={model}
        refs={refs}
      />
    )
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

  getRoot(element).render(
    <Provider store={store}>
      <ThemeProvider
        asDiv
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        {finalDialog}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            justifyContent: typeof finalFormItems === 'undefined' || finalFormItems.length === 0 || dialog.show ? 'center' : 'flex-start',
            height: '100%',
            paddingRight: '10px',
            paddingLeft: '10px',
            overflowY: 'auto',
            overflowX: 'hidden',
          }}
        >
          {finalFormItems}
          {button}
          {notification}
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export function teardown(element) {
  const root = roots.get(element);

  if (root) {
    root.unmount();
    roots.delete(element);
  }
}
