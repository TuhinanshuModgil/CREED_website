import React, { useEffect, useState } from "react";

async function getNewsData(){
try {
    const data = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=aFUxLG9lk0q-fSZvdpiiTuyQ5gtiXk2DRXXEpmM5DnOe91slnOUITJkV7hWhhhCjExnZ8ilhPRQUkSXjeduPREGMGQLy_jrDm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKJStgcFLQOoQ5qvQX-MjgQAq_Emc1r2L6laA_tVcQ34-Xq3J8NVVnPJ6k2b45wN70R-NPsiLNvXgPC3tgCHWGuLDSP9kDaApdz9Jw9Md8uu&lib=MSYLcSSsoBRq56Ezg7I6e5-uB6aQWfZai')
    const dataJSON = await data.json()

    return dataJSON.data
} catch (error) {
    console.log(error.message)
}
}

function Announcements() {
    const [news, setNews] = useState([])

    useEffect(()=>{
        getNewsData()
        .then(res => {  
            setNews(res)
            console.log(res)
        })
        .catch(err => {
            console.log(err.message)
        })
        ;     
    }, [])
  return (
    <div className="bg-white border-b">
    <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-4xl flex flex-col">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 mb-8">Announcements 📢</h2>
        <div className="flex flex-col gap-6">
        {
                news.map((data,i )=>{
                    return(
                        <div key={i} className="border-b pb-2">
                        <h1 className="text-base font-semibold leading-6 text-gray-900">
                            {data.title}
                        </h1>
                        <p className="mt-2 text-sm text-gray-500">
                            {data.news}
                        </p>
                        </div>

                    )
                })
            }
        </div>
            
        
      </div>
    </div>
    </div>
  );
}

export default Announcements;
