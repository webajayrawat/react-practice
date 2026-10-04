import React from 'react'

const Map = () => {
    const cards = [
        {
            id: 1,
            heading: "Card Title One",
            src: "https://flowbite.com/docs/images/blog/image-1.jpg",
            content: "This is the content of the card.",
            button: "Click Me",
        },
        {
            id: 2,
            heading: "Card Title Two",
            src: "https://flowbite.com/docs/images/blog/image-2.jpg",
            content: "This is the content of the card.",
            button: "Read More",
        },
    ]

    return (
        <>

            {
                cards.map((card) => {
                    return (
                        <div key={card.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                            <img src={card.src} alt="" />
                            <div className="p-5">
                                <h2>{card.heading}</h2>
                                <p className="text-gray-700 dark:text-gray-300 my-4">{card.content}</p>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{card.button}</button>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}

export default Map
