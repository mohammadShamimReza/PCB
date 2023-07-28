import { api } from "@/redux/API/apiSlice";

const CartApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCpu: builder.query({
      query: () => "/cpu",
    }),
  }),
});

export const { useGetCpuQuery } = CartApi;
