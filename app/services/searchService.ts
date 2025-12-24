import http from "./httpClient";
import { SearchResponse } from "../types/searchResult";
import { SearchRequest } from "../types/searchRequest";

export const search = async (request: SearchRequest): Promise<SearchResponse> => {
  const apiResponse = await http.post<any>("/api/Search/GetFilteredData", request
  );

  const mappedResponse: SearchResponse = {
    oDataContext: apiResponse.data["@odata.context"],
    oDataCount: apiResponse.data["@odata.count"],
    searchFacets: apiResponse.data["@search.facets"],
    value: apiResponse.data.value
  };
  return mappedResponse;
  
};