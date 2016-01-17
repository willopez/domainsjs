import actionTypes from './types';
import request from '../util/request';

export function getMainView({ query, variables }) {
  return (dispatch) => {
    return request({
      dispatch,
      type: actionTypes.getMainView,
      query: `
        query domainQuery {
          domain {
            id
            name
          }
        }
      `,
      variables: {

      }
    });
  };
}
