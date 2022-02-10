/**
 * Tool to update two items to test update api endpoint.
 */
const axios = require('axios');

const url = 'http://localhost:3000';

Promise.all([
  axios.post(url + '/api/update', {
    name: 'Ternium Argentina',
    value: 20000,
  })
    .catch((_err) => {
      if (_err.response) return console.log(_err.response.status, _err.response.data);
      console.log(_err);
    }),

  axios.post(url + '/api/update', {
    itemId: 'a3',
    value: 25000,
  })
    .catch((_err) => {
      if (_err.response) return console.log(_err.response.status, _err.response.data);
      console.log(_err);
    }),
])
  .then((_resultPromiseAll) => {
    console.log('Items updated.')
  })
  .catch((_err) => {
    console.log(_err);
  });
