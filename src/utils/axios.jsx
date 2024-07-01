import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDdiM2M3OTRmZDJlY2Y4MjgyNjdlMWFhNmQwZjgwMSIsIm5iZiI6MTcxOTg1NjEwMy41MTUwODMsInN1YiI6IjY2ODJlODJkNjQ5YjM5NDE1MzNhZDg2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qAjdUoJoOC9EJLw4E4HWjthQC-nc3qPt-WJeafiBKcQ'
    },
});

export default instance;