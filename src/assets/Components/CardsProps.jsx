import React from 'react'

const CardsProps = ({ id, heading, src, content, button }) => {
    return (
        <div key={id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <img src={src} alt="" />
            <div className="p-5">
                <h2>{heading}</h2>
                <p className="text-gray-700 dark:text-gray-300 my-4">{content}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{button}</button>
            </div>
        </div>
    )
}

export default CardsProps
