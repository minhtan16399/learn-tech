import {useParams} from "react-router-dom";
import queryString from "query-string";

export const useQueryParams = (method: 'GET' | 'SET', id: string) => {
    const params = useParams();
    if (method === "GET") {
        return queryString.parse(params.id??'')[id];
    } else {
        return queryString.stringify({id: id})
    }
}