import actionTypes from './types';
import request from '../util/request';

export function getMainView({query, variables}) {
  // Use a thunk(co-routine) to make an asyncronous request
  return (dispatch) => {
    return request({
      dispatch, // pass in redux dispatch function as callback
      type: actionTypes.getMainView,
      query,
      variables
    });
  };
}
