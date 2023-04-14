import React from "react";
import logo from '../images/logo.png';

export default function GeneralPosting(){
    return (
        <div className="ml-[77px] mt-[31px] float-left w-[800px] border-2 border-black box-border">
            <p>Posted By @user0102312 18 hours ago</p>
            <div>
                <button className="float-left mr-5 text-black hover:text-gray-900 font-medium bg-cp-purple py-1 px-2 rounded-full">
                    #tag
                </button>
                <p>Welcome to General Feed!</p>
                <p>Hello people lorem ipsum</p>
                <div className="justify-center w-[600px] h-[200px]">
                    <img src={logo} alt="User img" className="m-auto" />
                </div>
            </div>
            <div className="float-right">
                <span>3 up votes</span>
                <span className="ml-2 mr-2">2 comments</span>
            </div>
        </div>
    )
}