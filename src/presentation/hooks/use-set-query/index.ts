import queryString from "query-string";

function useSetQueryId(params: object) {
    return queryString.stringify(params);
}

export default useSetQueryId;