import actionTypes from '../../client/actions/types';

const defaultState = {
  data: {},
  errors: 'Not Found',
};

export default function domainDetailReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case actionTypes.getDomainDetail:
      return Object.assign({}, state, {
        data: action.data.domain,
        errors: action.errors,
      });
    default:
      return state;
  }
}
