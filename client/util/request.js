import request from 'superagent-bluebird-promise';

export default function doRequest(body) {
  const { dispatch: callback, query, variables, type, params } = body;

  request
    .post('/graphql')
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .send({ query, variables })
    .then((res) => {
      const data = res.body.data;
      callback({ type, data, params });
      return data;
    }, (err) => {
      callback({ type, err, params });
    });
}
