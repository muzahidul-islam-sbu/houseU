import React from 'react'
import Image from 'next/image'
//import samplevid from 'public/samplehousevideo.mp4'
import imgplaceholder from 'public/WF_Image_Placeholder.jpg'


export default function HousingDetails() {
  return (
    <>
        <div title='contents' className='overflow-auto mx-auto w-2/3 h-screen bg-white'>
            <div title='Photos/Videos' className='container md:ml-auto items-center flex flex-wrap my-5 mx-auto w-2/3'>
                <div className='w-2/5 h-1/2 mx-auto'>
                    <Image src={imgplaceholder} alt="Sample Image" placeholder={imgplaceholder}
                    ></Image>
                    <p className='text-center text-sm'>Photos</p>
                </div>
                <div className='w-2/5 h-1/2 mx-auto'>
                    <Image src={imgplaceholder} alt="Sample Video" placeholder={imgplaceholder}></Image>
                    <p className='text-center text-sm'>Videos</p>
                </div>  
            </div>
            <div title='Address and Rent' className="flex items-end justify-between my-5 mx-auto w-2/3">
                <span className="flex-1 font-semibold text-lg">2000 Stony Brook Rd.</span>
                <span className="flex-1 text-right text-sm">$1,000 month</span>
            </div>
            <div title='Housing Details' className='my-5 mx-auto w-2/3'>
                <p className='font-bold mb-2'>Details</p>
                <div className='border-2 border-black rounded-lg h-auto overflow-auto'>
                    <div className='ml-2' >
                        <p className='font-bold text-sm'>Features</p>
                        <div className="flex items-end my-5">
                            <button className='float-left mr-5 text-black hover:text-gray-900 font-medium bg-cp-purple py-1 px-2 rounded-full'>
                                #Pet Friendly
                            </button>
                            <button className='float-left mr-5 text-black hover:text-gray-900 font-medium bg-cp-purple py-1 px-2 rounded-full'>
                                #Quiet
                            </button>
                            <button className='float-left mr-5 text-black hover:text-gray-900 font-medium bg-cp-purple py-1 px-2 rounded-full'>
                                #Utility Included
                            </button>
                        </div>
                    </div>
                    <div className='ml-2'>
                        <p className='font-bold text-sm'>Amenities</p>
                        <div className="flex items-end my-5">
                            <button className='float-left mr-5 text-black hover:text-gray-900 font-medium bg-cp-purple py-1 px-2 rounded-full'>
                                Communal Kitchen
                            </button>
                            <button className='float-left mr-5 text-black hover:text-gray-900 font-medium bg-cp-purple py-1 px-2 rounded-full'>
                                A/C
                            </button>
                            <button className='float-left mr-5 text-black hover:text-gray-900 font-medium bg-cp-purple py-1 px-2 rounded-full'>
                                Parking Lot
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div title='housing description' className='my-5 mx-auto w-2/3'>
                <p className='font-bold text-sm mb-2'>Description</p>
                <div className='border-2 border-black rounded-lg h-auto overflow-auto px-2 py-5'>
                    <div className='break-all'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
            </div>
            <div title='Maps' className='my-5 mx-auto w-2/3'>

            </div>
            <div title='Reviews' className='my-5 mx-auto w-2/3'>
                <p className='font-bold mb-2'>Reviews</p>
                <div className='border-2 border-black rounded-lg h-auto overflow-auto px-2 py-5'> 
                    <div className='border-2 border-black rounded-lg h-auto overflow-auto px-2 py-5 mb-2'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </div>
                    <div className='border-2 border-black rounded-lg h-auto overflow-auto px-2 py-5 mb-2'>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    </div>
                    <div className='border-2 border-black rounded-lg h-auto overflow-auto px-2 py-5 mb-2'>
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

/*<div className='float-left'>
                    <video src={require({samplevid})} />
                </div>    
*/