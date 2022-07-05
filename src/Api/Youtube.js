import axios from "axios";


const KEY="AIzaSyBsAVLEXpdvev9qvrSgofhj-YD3IK0SJ00";

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:{
       part: 'snippet', 
       maxResults: 5,
       key:KEY
    }
});





