import * as httpRequest from '../utils/httpRequest';

export const search = async (q, type = 'less') => {
  try {
    const res = await httpRequest.get('users/search', {
      params: {
        q,
        type,
      },
    });
    return res.data;
  } catch (err) {
    throw new Error('Fetch search data error: ', err);
  }
};

export const suggestAccounts = async (q = '', type = 'more') => {
  try {
    const res = await httpRequest.get('users/search', {
      params: {
        q,
        type,
      },
    });
    return res.data;
  } catch (err) {
    throw new Error('Fetch search data error: ', err);
  }
};
