import React from 'react'

function Card({ display }) {
    const { urlToImage, description, title, url
    } = display

    if(!display.urlToImage) return
    else return (
        <>
            <div>
                <div class="card max-w-sm bg-gray-400 border border-gray-800 rounded-lg hover:-translate-y-2 transition-all duration-300 shadow-black shadow-md" style={{height:"70vh"}}>
                    <a href={url} target='_blank'>
                        <img class="rounded-t-lg h-64 w-full text-white " src={`${urlToImage}`} alt="image not found" />
                    </a>
                    <div class="p-5 ">
                        <a href={url} target='_blank'>
                            <h5 class="mb-2 h-24 overflow-hidden text-2xl font-bold tracking-tight text-black">{title}</h5>
                        </a>
                        <p class="mb-3 font-normal h-12 overflow-hidden text-black">{description}</p>
                        <a href={`${url}`} target='_blank' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                            Read more➡️
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
