import { baseApi } from "../../baseApi";




export const addTodoApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addTodo: builder.mutation({
            query: (submitData) => ({
                url: 'store/todo',
                method: 'POST',
                body: submitData,
            }),
            invalidatesTags: ['storeTodo'],
        }),
    }),
});

export const { useAddTodoMutation } = addTodoApi;