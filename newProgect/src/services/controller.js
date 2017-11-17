import { Link, browserHistory } from 'react-router';
import superagent from 'superagent';
import { message } from 'antd';

export function request(options) {
  
  let {
    url,
    method,
    params,
    headers,
    timeout,
  } = options;

  if (!method) {
    method = 'get';
  }

  if (!headers) {
    headers = {};
  }

  timeout = timeout || 120000;
    return new Promise((resolve, reject) => {
    superagent
      [method](url)
      .set(headers)[method === 'get' ? 'query' : 'send'](params)
      .withCredentials()
      .timeout(timeout)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          reject(err);
        }

        if (!res.body) {
          try {
            res.body = JSON.parse(res.text)
          } catch (err) {
            return reject(err);
          }
        }

        if (!res.body) {
          return reject(res);
        }

        res = res.body;

        if (res.code == 0 || res.code === 200) {
          if (res.data !== undefined) {
            resolve(res.data);
          } else {
            resolve(res.msg || res.result || res.r || res.rs);
          }
        }

        reject(res);
      });
  });
}