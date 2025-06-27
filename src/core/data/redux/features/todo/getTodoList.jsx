import { baseApi } from "../../baseApi";


const getTodoListApi = baseApi.injectEndpoints({
// tagTypes:['getTodo'],
    endpoints: (builder) => ({
        
        getTodoList: builder.query({
            query: () => ({
                url: 'show/all/todo',
                method: 'GET',
                  providesTags: ['getTodo'],
                    
            }),
      
      
        })



    })




})

export const { useGetTodoListQuery } = getTodoListApi;