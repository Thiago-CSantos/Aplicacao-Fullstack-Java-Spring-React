import axios, {AxiosPromise, AxiosResponse} from "axios"
import { FoodData } from "../../interface/FoodData";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const url = 'http://localhost:8080'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const postData = async (data: FoodData): AxiosPromise<any> => {
    const response = axios.post(url + '/food', data)
    return response;
}

export function useFoodDataMutate() {
    const queryClient = useQueryClient();
    const query = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['food-data'])
        }
    })
    return {
        ...query,
        data:query.data?.data
    }
}