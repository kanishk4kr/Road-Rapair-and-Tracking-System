import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ imageSrc, buttonText, path, handle }) {
  return (
    <div className="bg-[#5a697c] flex flex-col items-center max-w-xs border border-black shadow-md rounded-lg overflow-hidden">
        <img className="w-full" src={imageSrc} alt="Card" />
        <div className="px-4 py-2">
            <button onClick={handle}
            className=" bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
                <Link to={path}>{buttonText}</Link>
            </button>
        </div>
    </div>
  )
}
