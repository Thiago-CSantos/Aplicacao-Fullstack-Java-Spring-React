import axios, {AxiosResponse} from "axios"
import { FoodData } from "../../interface/FoodData";
import { useQuery } from "@tanstack/react-query";

const url = 'http://localhost:8080'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetchData = async (): Promise<AxiosResponse<FoodData[], any>> => {
    const response = axios.get(url + '/food')
    return response;
}

export function useFoodData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['food-data'],
        retry: 2,
    })
    return {
        ...query,
        data:query.data?.data
    }
}