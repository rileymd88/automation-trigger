import React from 'react';
import { Modal } from '@qlik/sprout-react';
import { setDialog, selectDialog } from '../states/formsSlice'
import { useSelector, useDispatch } from 'react-redux';
import { mapDialogWidth } from './component-utils';

export default function CustomDialog({ dialog, customButton }) {
  const dispatch = useDispatch();
  const dialogOpen = useSelector(selectDialog)

  const onClose = (e) => {
    dispatch(setDialog(false))
  };

  return (
    <Modal.Root
      onClose={onClose}
      visible={dialogOpen}
      width={mapDialogWidth(dialog.width)}
    >
      <Modal.Header onClickClose={onClose}>
        {dialog.title}
      </Modal.Header>
      <Modal.Content padding>
        {dialog.formItems}
      </Modal.Content>
      <Modal.Actions onClickClose={onClose}>
        {customButton}
      </Modal.Actions>
    </Modal.Root>
  );
}
