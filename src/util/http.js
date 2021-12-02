var axios = require('axios');

class Http {
  constructor(url) {
    this.url = url;
  }
  get = function() {
    return axios.get(this.url);
  }
}