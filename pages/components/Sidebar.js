import React from "react";

export default function Sidebar(){
    return (
        <div className="w-1/4 bg-header-green bg-opacity-50 h-screen float-left">
            <p className="ml-24 mt-16 font-bold text-cp-purple">All Discussions</p>
            <ul className="ml-28 mt-4 font-normal text-cp-purple list-disc underline-offset-8">
                Communities
                <li className="ml-8 mt-2 font-normal text-cp-purple">South P Lot</li>
                <li className="ml-8 mt-2 font-normal text-cp-purple">East/West Setauket</li>
                <li className="ml-8 mt-2 font-normal text-cp-purple">Tabler</li>
                <li className="ml-8 mt-2 font-normal text-cp-purple">Centreach</li>
                <li className="ml-8 mt-2 font-normal text-cp-purple">Port Jefferson Station</li>
                <li className="ml-8 mt-2 font-normal text-cp-purple">Stony Brook LIRR</li>
            </ul>
        </div>
    )
}