import actionTypes from '../../client/actions/types';

const defaultState = {
  data: {},
  errors: 'Not Found'
};

export default function userReducer (state = defaultState, action = {}) {
  switch (action.type) {
    case actionTypes.getMainView:
      return Object.assign({}, state, {
        data: action.data.user,
        errors: action.errors
      });
      break;
    default:
      return state;
  }
}
