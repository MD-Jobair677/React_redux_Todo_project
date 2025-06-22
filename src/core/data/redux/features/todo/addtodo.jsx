import { baseApi } from "../../baseApi";




export const addTodoApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addTodo: builder.mutation({
            query: (todo) => ({
                url: 'store/todo/',
                method: 'POST',
                body: todo,
            }),
            invalidatesTags: ['Todo'],
        }),
    }),
});

export const { useAddTodoMutation } = addTodoApi;