import React from 'react'
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { connect, ConnectedProps } from 'react-redux';
import { getActions } from '../../store/actions/alertAction';
import { AppDispatch, RootState } from '../../store/store';

function AlertNotification({ showAlertMessage, alertMessageContent, closeAlertMessage }: PropsFromRedux) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={showAlertMessage}
      onClose={closeAlertMessage}
      autoHideDuration={6000}
    >
      <Alert severity='info'> {alertMessageContent} </Alert>
    </Snackbar>
  )
};

const mapStateToProps = (state: RootState) => {
  return {
    ...state.rootReducer.alert
  }
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    ...getActions(dispatch)
  }
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(AlertNotification);