import { SearchResponse } from "@/app/types/searchResult";
import { useState } from "react";

interface SearchBarProps {
    results : SearchResponse | null;
    onSearch : (query : string | null, selectedLocation: string | null) => void;
    facetName : string;
    showCategory : boolean;
}

export default function SeachBar({results, onSearch, facetName, showCategory} : SearchBarProps) {
    const [query, setQuery] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");

    return (
        <div className="container my-3 bg-cyan-900 rounded p-3">
                <div className="grid grid-cols-3 gap-4">
                    <div className="grid grid-rows-2 gap-0">
                        <p>Search: </p>
                        <input type="text" 
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="bg-white rounded! mb-1 p-1 px-3 text-cyan-900" placeholder="search..."></input>
                    </div>
                        <div className="grid grid-rows-2 gap-0">
                        {
                            showCategory &&
                            <>
                            <p className="">Category: </p>
                            <select className="bg-white rounded! mb-1 p-1 px-3 text-cyan-800!" 
                                onChange={(e) => setSelectedLocation(e.target.value)}
                                value={selectedLocation}>
                                <option value={''} >Select one...</option>
                                {
                                    results != null && results?.searchFacets[facetName]?.length > 0 &&
                                    results.searchFacets[facetName]?.map(location => (
                                            <option key={location.value} value={location.value}>
                                                {location.value} ({location.count})
                                            </option>
                                    ))
                            
                                }
                            </select>
                            </>
                        }
                    </div>
                     <div className="grid grid-rows-2 gap-0">
                        <div></div>
                        <button onClick={() => onSearch(query, selectedLocation)} className="bg-green-400 rounded-2xl! mb-1">Send searching</button>
                    </div>
                </div>
            </div>
    );
}

