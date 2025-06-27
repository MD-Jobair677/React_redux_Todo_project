import { baseApi } from "../../baseApi";


export const updateTodoApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        updateTodo: builder.mutation({
            query: ({ id, submitData }) => ({
                url: `/update/todo/${id}`,
                method: 'POST',
                body: submitData,
            }),
            invalidatesTags: ['Todo'],
        }),

          getTodoById: builder.query({
            query: (id) => ({
                url: `/single/todo/${id}`,
                method: 'GET',
            }),
            providesTags: ['getTodoById'],
        }),

    }),




   


})

export const { useUpdateTodoMutation,useGetTodoByIdQuery} = updateTodoApi;