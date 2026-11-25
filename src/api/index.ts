import getEndpoints from '../server/db';

const endpoints = getEndpoints();

type ENDPOINTS = keyof typeof endpoints;

export type RESPONSE_DATA = {
  greeting: string;
};

const getJson = async <T>(endpoint: ENDPOINTS): Promise<T> => {
  const baseUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3001/api/'
      : 'https://raw.githubusercontent.com/scattered-ttit/gh-pages-demo/gh-pages/static/db/';

  const fullUrl = baseUrl + endpoint + (process.env.NODE_ENV === 'development' ? '' : '.json');

  const response = await fetch(fullUrl);
  return await response.json();
};

type API = {
  get: {
    data: () => Promise<RESPONSE_DATA>;
  };
};

const api: API = {
  get: {
    data: () => getJson<RESPONSE_DATA>('data'),
  },
};

export default api;