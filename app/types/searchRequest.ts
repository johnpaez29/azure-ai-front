export interface SearchRequest {
  search: string;
  filter?: string;
  top?: number;
  skip?: number;
  facets?: string[];
  count?: boolean;
  indexName?: string;
}