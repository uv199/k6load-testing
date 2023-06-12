const http = require('k6/http');
const { sleep } = require('k6');

export let options = {
  ext: {
    loadimpact: {
      projectID: 3635671,
      // Test runs with the same name groups test runs together
      name: "YOUR TEST NAME"
    }
  }
}

export default function () {
  const res = http.post(' http://localhost:4444/graphql/getAllUser');
  sleep(1);
  console.log("🚀 ~ file: script.js:6 ~ res:", res.body)
}