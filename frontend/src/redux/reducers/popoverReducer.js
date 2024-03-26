const initState = {
  isShowMessage: false,
  isShowLogin: false,
  isShowUpload: false,
  isShowComments: false,
};
const popoverReducer = (state = initState, action) => {
  switch (action.type) {
    case "CHANGE_MESSAGES":
      return { ...state, isShowMessage: true };
    case "HIDE_MESSAGES":
      return { ...state, isShowMessage: false };
    case "SHOW_LOGIN":
      return { ...state, isShowLogin: true };
    case "HIDE_LOGIN":
      return { ...state, isShowLogin: false };
    case "SHOW_UPLOAD":
      return { ...state, isShowUpload: true };
    case "HIDE_UPLOAD":
      return { ...state, isShowUpload: false };
    case "SHOW_COMMENTS":
      return { ...state, isShowComments: true };
    case "HIDE_COMMENTS":
      return { ...state, isShowComments: false };
    default:
      return state;
  }
};
export default popoverReducer;
