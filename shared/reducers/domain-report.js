import actionTypes from '../../client/actions/types';

const defaultState = {
  data: {},
  errors: 'Not Found',
};

export default function domainReport(state = defaultState, action = {}) {
  switch (action.type) {
    case actionTypes.getDomainStats:
      return Object.assign({}, state, {
        data: action.data,
        errors: action.errors,
      });
    default:
      return state;
  }
}
