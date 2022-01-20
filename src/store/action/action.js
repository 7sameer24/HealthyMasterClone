export const GET_HOME = 'GET_HOME';

const API_URL =
  'http://3.6.175.107/hmfinal/admins/api/item_categories/home.json?admin_id=1&customer_id=159';

export const getHomeData = () => {
  try {
    return async dispatch => {
      const result = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_HOME,
          payload: json,
        });
      } else {
        console.log('Unable to fatch');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
