import actionTypes from './types';
import request from '../util/request';

export function getMainView() {
  return (dispatch) => {
    return request({
      dispatch,
      type: actionTypes.getMainView,
      query: `
        query domainQuery {
          domain
          {
          	id
            name
            expiring_date
            registered_date
            name_server
            private_whois
          }
        }
      `,
      variables: {
      },
    });
  };
}

export function updateWhoisPrivacy(id, privacy) {
  return (dispatch) => {
    return request({
      dispatch,
      type: actionTypes.updateWhoisPrivacy,
      query: `
        mutation updateWhoisPrivacyMutation($id: String!, $private_whois: Boolean!) {
          updateWhoisPrivacyMutation(id: $id, private_whois: $private_whois) {
            id
            private_whois
          }
        }
      `,
      variables: {
        id, private_whois: privacy,
      },
    });
  };
}
