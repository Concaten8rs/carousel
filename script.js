import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '20s', target: 100 },
    { duration: '20s', target: 500 },
    { duration: '20s', target: 1000 }
    // { duration: '30s', target: 750 },
    // { duration: '30s', target: 1000 },
    // { duration: '30s', target: 1250 },
    // { duration: '30s', target: 1500 },
    // { duration: '30s', target: 1750 },
    // { duration: '30s', target: 2000 },
    // { duration: '30s', target: 2250 },
    // { duration: '30s', target: 2500 },
    // { duration: '30s', target: 2750 }
  ]
}

let randomNum = Math.floor(Math.random() * 10000000);

export default function() {
  let res = http.get(`http://localhost:3000/api/products/${randomNum}`);
  check(res, {'status was 200': r => r.status == 200});
  sleep(1);
}
