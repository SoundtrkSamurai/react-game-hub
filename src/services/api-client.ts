import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '11e466a1b4d74788b3598f58fc20e622',
  }
});