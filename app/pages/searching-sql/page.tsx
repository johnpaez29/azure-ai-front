"use client";

import GridCar from "@/app/components/gridCard/gridCar";
import SeachBar from "@/app/components/searchBar/searchBar";
import { useLoading } from "@/app/contexts/loadingContext";
import { search } from "@/app/services/searchService";
import { SearchRequest } from "@/app/types/searchRequest";
import { SearchResponse } from "@/app/types/searchResult";
import { useEffect, useState } from "react";

export default function SearchingSql() {
    useEffect(() => {
        onSearch(null,null);
    }, []);

    const [results, setResults] = useState<SearchResponse | null>(null);
    const { startLoading, stopLoading } = useLoading();
    const onSearch = async (query: string | null, selectedLocation: string | null) => {
        const request: SearchRequest = {
            search: query || "*",
            top: 10,
            skip: 0,
            count: true,
            facets: ["Category"],
            indexName: "azuresql-index"
            };

        
        if (selectedLocation) {
            request.filter = `Category eq '${selectedLocation}'`;
        }

        try {
            startLoading();
            const data = await search(request);
            console.log(data, "response");

            setResults(data);
        } finally {
            stopLoading();
        }
    };
    return (
        <div>
            <SeachBar 
                results={results} 
                onSearch={onSearch}
                facetName="Category" 
                showCategory = {true}
            />
            <GridCar 
                results={results}
                showImage={true}
            />
        </div>
    )
}