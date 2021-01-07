import React, {useEffect, useState} from 'react'
import sanityClient from "../client"
import {useParams} from "react-router-dom"
import imageUrlBuilder

export default function SinglePost() {
    const [singlePost, setSinglePost] = useState(null)
    const {slug} = useParams();

    return (
        <h1>
           SinglePost Page 
        </h1>
    )
}
