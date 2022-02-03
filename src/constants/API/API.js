import axios from 'axios';

const getData = async (URL, params = {}) => {
  const serverResponse = {status: false, data: [], error: ''};
  try {
    const {data} = await axios.get(URL, params);
    serverResponse.status = true;
    serverResponse.data = await data;
  } catch (error) {
    serverResponse.error = error;
  }
  return serverResponse;
};

export default getData;
