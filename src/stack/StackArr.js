import AddCartScreen from '../components/CartContainer/AddCartScreen';
import ProductDetails from '../components/ItemScreen/ProductScreen/ProductDetails';
import LoginScreen from '../components/Login/LoginScreen';
import ProfileScreen from '../components/UserProfile/ProfileScreen';
import HomeScreen from '../navigation/HomeScreen';
import SearchScreen from '../navigation/SearchScreen';

const StackArr = () => {
  return [
    {
      name: 'HomeScreen',
      component: HomeScreen,
      headerShown: false,
    },
    {
      name: 'Search',
      component: SearchScreen,
      headerShown: false,
    },
    {
      name: 'Product Details',
      component: ProductDetails,
      headerShown: false,
    },
    {
      name: 'Login',
      component: LoginScreen,
    },
    {
      name: 'My Cart',
      component: AddCartScreen,
    },
    {
      name: 'Profile',
      component: ProfileScreen,
    },
  ];
};
export default StackArr;
