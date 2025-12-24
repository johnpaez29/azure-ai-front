import { SearchDocument, SearchResponse } from "@/app/types/searchResult";

interface GridCarProps {
    results : SearchResponse<SearchDocument> | null;
}

export default function GridCar({results} : GridCarProps) {


    return (
        <div className="container text-cyan-950!">
                {results != null && results.value.length > 0 &&
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {results?.value?.map((item, index) => (
                        <div
                        key={index}
                        className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition-shadow duration-300"
                        >
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Document {index + 1}
                        </h3>
                        {
                            item.Name &&
                            <p className="text-sm text-gray-600 line-clamp-5">
                                {item.Name}
                            </p>
                        }
                        {
                            item.Url &&
                            <img src={"../"+item.Url} 
                            className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
                            alt="My Image" />
                        }
                        <p className="text-sm text-gray-600 line-clamp-5">
                            {item.content}
                        </p>
                        <p className="text-sm text-gray-600 line-clamp-5">
                            {item.Description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {item.keyPhrases?.slice(0, 5).map((phrase, i) => (
                            <span
                                key={i}
                                className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                            >
                                {phrase}
                            </span>
                            ))}
                        </div>
                        </div>
                    ))}
                    </div>


                }
            </div>
    )
}

