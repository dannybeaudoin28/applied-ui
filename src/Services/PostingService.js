import React, { useState } from 'react'
import axios from 'axios'


export default function fetchPostings() {
    //const queryClient = new QueryClient;

    let baseUri = "http://192.168.0.102:8888/api/postings";
    const data = axios.get(baseUri).then((res) => res.data)
    return data
}