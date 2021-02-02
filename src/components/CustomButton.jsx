import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LoadingButton from '@material-ui/lab/LoadingButton';
import { executeBlend } from '../services/backend'
import { selectAllItems } from '../states/formsSlice'
import { useSelector, useDispatch } from 'react-redux';

export default function CustomButton({block}) {
  const dispatch = useDispatch();
  const useStyles = makeStyles((theme) => ({
    button: {
      width: `${block.width}%`,
      marginBottom: 12
    }
  }));
  const classes = useStyles();
  const items = useSelector(selectAllItems)
  const [loading, setLoading] = React.useState(false)

  const onButtonClick = async () => {
    try {
      setLoading(true)
      await executeBlend(block.blend, items)
      setLoading(false)
    }
    catch(err) {
      setLoading(false)
      console.error(err)
    }
  };

  return (
    <LoadingButton
      disabled={block.blend.length > 1 ? false : true}
      className={classes.button}
      pending={loading}
      pendingIndicator={block.loadingMsg}
      variant="contained" 
      color="primary" 
      onClick={onButtonClick}>
        {block.label}
    </LoadingButton>
  );
}