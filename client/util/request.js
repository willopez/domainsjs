import request from 'superagent-bluebird-promise';

export default function doRequest (body) {
  const {dispatch: callback, query, variables, type, params} = body;

  request
    .post('/graphql')
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .send({query, variables})
    .then((res) => {
      let data = res.body.data;
      callback({type, data, null, params});
      return data;
    }, (err) => {
      callback({type, null, err, params});
    });
}
