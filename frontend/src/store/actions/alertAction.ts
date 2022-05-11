import { AppDispatch } from "../store";

const alertActions = {
  OPEN_ALERT_MESSAGE: 'ALERT.OPEN_ALERT_MESSAGE',
  CLOSE_ALERT_MESSAGE: 'ALERT.CLOSE_ALERT_MESSAGE'
};

export const openAlertMessage = (content: string) => {
  return {
    type: alertActions.OPEN_ALERT_MESSAGE,
    content
  }
};

export const closeAlertMessage = () => {
  return {
    type: alertActions.CLOSE_ALERT_MESSAGE
  }
};

export const getActions = (dispatch: AppDispatch) => {
  return {
    openAlertMessage: (content: string) => dispatch(openAlertMessage(content)),
    closeAlertMessage: () => dispatch(closeAlertMessage()),
  }
};

export default alertActions;