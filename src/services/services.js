import * as httpRequest from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
  try {
    const res = await httpRequest.get(`users/search`, {
      params: {
        q,
        type,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const suggestedAccount = async ({ page, perPage }) => {
  try {
    const res = await httpRequest.get(`users/suggested?page=${page}&per_page=${perPage}`, {
      page,
      per_page: perPage,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
