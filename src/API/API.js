import axios from 'axios';

const getData = async () => {
  const URL =
    'http://3.6.175.107/hmfinal/admins/api/item_categories/home.json?admin_id=1&customer_id=159';
  const serverResponse = {status: false, data: [], error: ''};
  try {
    const {data} = await axios.get(URL);
    serverResponse.status = true;
    serverResponse.data = await data;
  } catch (error) {
    serverResponse.error = error;
  }
  return serverResponse;
};

export default getData;
