import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { BASE_URL } from '@env';
import { RootState } from '~/store';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const {
      authReducer: { access_token },
    } = getState() as RootState;

    if (access_token) {
      headers.set('Authorization', `Bearer ${access_token}`);
    }

    return headers;
  },
});

const metaBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  try {
    let result = await baseQuery(args, api, extraOptions);
    return result;
  } catch (err: any) {
    console.error(err);
    return err;
  }
};

export const api = createApi({
  baseQuery: metaBaseQuery,
  endpoints: () => ({}),
});
