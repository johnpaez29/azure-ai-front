export interface SearchResponse<TDocument = any> {
  oDataContext: string;
  oDataCount: number;
  searchFacets: Record<string, FacetItem[]>;
  value: TDocument[];
}

export interface SearchDocument {
  Name: string;
  Url: string;
  content: string;
  keyPhrases: string[];
  language: string;
  layoutText: string[];
  locations: string[];
  mergedContent: string;
  metadata_storage_path: string;
  organizations: string[];
  people: string[];
  text: string[];
  Description: string;
}

export interface FacetItem {
  value: string;
  count: number;
}
