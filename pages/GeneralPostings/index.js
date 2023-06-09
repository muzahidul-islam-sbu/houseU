import React from "react";
import Header from '../components/Header'
import Sidebar from "../components/Sidebar";
import GeneralPosting from "../components/GeneralPosting";

import {db} from "../../config/firebase"
import {getDocs, collection} from "firebase/firestore"
import { useEffect, useState } from 'react'
import {useCollection} from "react-firebase-hooks/firestore"



// create contents and map them on the page.js
export default function Page(){
    const [generalFeedPosts, generalFeedPostsLoading, generalFeedPostsError] = useCollection(collection(db, "generalFeedPosts"), {});
    return(
        <>
            <Header />
            <Sidebar />
            <div className="float-left justify-center w-[800px] ml-[77px] mt-[31px]  px-[22px] py-[10px] border-2 border-solid border-black box-border ">
                <div className="float-left">
                    <button className="float-left mr-5 text-cp-purple hover:text-gray-900 font-medium bg-cp-green py-2 px-4 rounded-lg">
                        Latest
                    </button>
                    <button className="mr-5 text-cp-purple hover:text-gray-900 font-medium bg-cp-green py-2 px-4 rounded-lg">
                        Tag:All
                    </button>
                </div>
                <button className="float-right mr-5 text-cp-purple hover:text-gray-900 font-medium bg-cp-green py-2 px-4 rounded-lg">
                    Start a Discussion
                </button>
            </div>
            <br></br>
            <div>
                <GeneralPosting />
            </div>
        </>
    );
}


