import { baseApi } from "../../baseApi";


export const updateTodoApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        updateTodo: builder.mutation({
            query: ({ id, todo }) => ({
                url: `/update/todo/${id}`,
                method: 'PUT',
                body: todo,
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