import { api } from '~/services';
import {
  ILoginPayload,
  ILoginResponse,
} from '~/services/modules/auth/_auth.types.ts';

export const authApi = api.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<ILoginResponse, ILoginPayload>({
      query: ({ email, password }) => ({
        url: '/auth/login',
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
    }),
  }),
});
