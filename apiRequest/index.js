import axios from "axios";

const defaultUrl = '';


const request = async ({ method, url, headers, body }) => {
    const config = {
        method: method,
        url: url,
        headers: {
            // Authorization: `Bearer ${accessKey}`,
            ...headers
        },
        data: body,
    };

    return axios(config);
};


export const post = async ({ url, headers, body }) => {
  const config = {
    method: "post",
    url: defaultUrl + "/" + url,
    headers: headers,
    body: body,
  };

  return request(config);
};

export const get = async ({ url, headers }) => {
    const config = {
        method: "get",
        url: defaultUrl + '/' + url,
        headers: headers
    };

    return request(config);
}