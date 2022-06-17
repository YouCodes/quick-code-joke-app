import React from 'react'
import customUseFetch from './customUseFetch'

function CallOnFetch() {
    const [data, loading, error, refetch] = customUseFetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit")

    if(loading)
        return <h1 className="flex justify-center align-center animate-spin rounded-full h-32 w-32 border-b-2 border-[#2952e3]"></h1>


    if(error){
        console.log(error);
    }
    return (
    <div>
        <h1 className="text-6xl font-bold">{data?.setup}
     </h1>
     {/* react 18.1 issue overlapping h1 no longer work */}
     {/* error will say: runtime error hydration... */}
     {/* if you click too fast it'll fail to fetch because they put a rate limit of 120 per minute due to past DDOS attacks, which means we don't necessarily have to rate limit for this API */}
        <h1 className="text-6xl font-bold text-blue-600 mt-8">{data?.delivery}</h1> 
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mt-8 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={refetch}>
            Click Me!
        </button>
    </div>
  )
}

export default CallOnFetch