import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LoadingButton from '@material-ui/lab/LoadingButton';
import { executeBlend } from '../services/backend'
import { selectAllItems } from '../states/formsSlice'
import { useSelector, useDispatch } from 'react-redux';

export default function CustomButton({blend, refs, getData}) {
  const dispatch = useDispatch();
  const useStyles = makeStyles((theme) => ({
    button: {
      width: `${blend.buttonWidth}%`,
      alignSelf: blend.alignment,
      height: 'auto'
    }
  }));
  const classes = useStyles();
  const items = useSelector(selectAllItems)
  const [loading, setLoading] = React.useState(false)

  const onButtonClick = async () => {
    try {
      setLoading(true)
      let clone = {...items}
      for(const key in clone) {
        if(!refs.includes(key)) {
          delete clone[key]
        }
      }
      await executeBlend(blend.id, {form: clone, data: getData()})
      setLoading(false)
    }
    catch(err) {
      setLoading(false)
      console.error(err)
    }
  };

  let disabled
  if(blend.id.length > 1) {
    if(blend.useEnabledCondition) {
      if(blend.enabledCondition === 1) {
        disabled = false
      }
      else {
        disabled = true
      }
    }
    else {
      disabled = false
    }
  }
  else {
    disabled = true
  }

  return (
    <LoadingButton
      disabled={disabled}
      className={classes.button}
      pending={loading}
      pendingIndicator={blend.runningBlendLabel}
      variant="contained" 
      color="primary" 
      onClick={onButtonClick}>
        {blend.buttonLabel}
    </LoadingButton>
  );
}