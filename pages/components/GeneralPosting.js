import React from "react";
import Image from "next/image";
import logo from 'public/logo.png';
import samplePostPhoto from 'public/samplePostPhoto.jpg';
import {db} from "../../config/firebase"
import {getDocs, collection} from "firebase/firestore"
import { useEffect, useState } from 'react'
import {useCollection, useDocument} from "react-firebase-hooks/firestore"
import { doc, getDoc } from "firebase/firestore";


export default function GeneralPosting(){
    const [generalFeedPosts, generalFeedPostsLoading, generalFeedPostsError] = useCollection(collection(db, "generalFeedPosts"), {});
    const [users, usersLoading, usersError] = useCollection(collection(db,"users"), {})
    let generalFeedPostsData = [];
    let userdata = [];
    if (!generalFeedPostsLoading) {
        generalFeedPostsData = generalFeedPosts.docs.map((doc) => doc.data());
        }
    if (!usersLoading) {
        userdata = users.docs.map((doc) => doc.data());
        }
    /*
    
    */
    return (
        <div>
            <div>
                {generalFeedPostsData?.map((generalFeedPostsData, index) => {
                    const body = generalFeedPostsData.body
                    const title= generalFeedPostsData.title
                    const authorName = userdata[index].firstName + " " + userdata[index].lastName
                    const likes = generalFeedPostsData.likes
                    const dislikes = generalFeedPostsData.dislikes
                return(
                    <div className="ml-[77px] mt-[10px] float-left w-[800px] h-[500px] border-2 border-black box-border">          
                        <p className="ml-2">Posted By {authorName} 18 hours ago</p> 
                        <div>
                            <button className="float-left ml-2 mr-5 text-black hover:text-gray-900 font-medium bg-cp-purple py-1 px-2 rounded-full">
                                #tag
                            </button>
                            <p>{title}</p>
                            <div className="justify-center mx-auto w-[600px] h-[300px]">
                                <p>{body}</p>
                                <Image src={samplePostPhoto} alt="User img" className="m-auto object-fill aspect-auto w-[300px] h-[200px]" />
                            </div>
                        </div>
                        <div className="float-right">
                            <span>{likes} up votes</span>
                            <span className="ml-2 mr-2">{dislikes} down votes </span>
                            <span className="mr-2">2 comments</span>
                        </div>
                    </div>
                )}
                )}
            </div>
        </div>
    )
}