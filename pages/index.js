import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Page from './GeneralPostings'

const inter = Inter({ subsets: ['latin'] })
import {db} from "./../config/firebase"
import {getDocs, collection} from "firebase/firestore"
import { useEffect, useState } from 'react'
import {useCollection} from "react-firebase-hooks/firestore"
import HousingDetails from './components/housingDetails'
import GeneralPosting from './components/GeneralPosting'


export default function Home() {
  const [houseListings, houseListingsLoading, houseListingsError] = useCollection(collection(db, "houseListings"), {});

  return (
    <div>
      <Page />
    </div>
  )
}
/*

 <Page />
      {houseListings?.docs.map((houseListing) => (
        <div>
          <h1>{houseListing.data().address}</h1>
          <h2>{houseListing.data().propertyType}</h2>
        </div>
      ))}
*/