import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';




const baseQuery = fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api",

})


export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQuery,
    endpoints: () => ({}),


})



// export const {} = baseApi;