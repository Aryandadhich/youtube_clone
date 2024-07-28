import axios from "axios";

const BASE_URL = 'https://youtube-v3-alternative.p.rapidapi.com';

const options = {
    params: {
      maxResult : 50,},
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_YOUTUBE_API_KEY,
      'x-rapidapi-host': 'youtube-v3-alternative.p.rapidapi.com'
    }
  };

  export const FetchFromAPI = async (url) =>
  {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);

        return data;
  }