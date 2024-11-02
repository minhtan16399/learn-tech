import {useParams} from "react-router-dom";
import queryString from "query-string";

function useGetQueryId(key:string) {
    const params = useParams();
    const queryStringParams = queryString.parse(params.id??'');
    return queryStringParams[key]
}

export default useGetQueryId;