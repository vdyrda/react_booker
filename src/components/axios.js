import Axios from 'axios';

const axios = Axios.create({ baseURL: 'https://react-booker-1fd3e.firebaseio.com/' });

export default axios;