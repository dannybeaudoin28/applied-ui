import axios from 'axios';

let baseUri = "http://192.168.0.102:8888/api/postings";

export default function fetchPostings() {    
    const data = axios.get(baseUri).then((res) => res.data);
    return data;
}

export function deletePosting(id){
    axios.delete(baseUri + '/${id}')
    console.log(baseUri, '/1')
    //const res = axios.delete(baseUri + '/${id}').then((res) => res.data);
}