import axios from 'axios';

let baseUri = "http://192.168.0.102:8888/api/postings";

export default function ApiCalls() {
    function addPosting(posting) {
        axios.post(baseUri, {
            title: posting.title,
            company: posting.company,
            url: posting.url,
            desc: posting.desc,
            platform: posting.platform,
            interviewNo: posting.interviewNo,
            hadTask: posting.hadTask
        });
    }

    function fetchPostings() {    
        const data = axios.get(baseUri).then((res) => res.data);
        return data;
    }
    
    function deletePosting(id){
        const intId = parseInt(id);
        axios.delete(baseUri + '/' + intId);
    }

    return {
        addPosting,
        fetchPostings,
        deletePosting
    };
}