import { createStackNavigator } from "react-navigation";
import LoginScreen from '../../screens/Login/LoginScreen';
import RegisterScreen from '../../screens/Register/RegisterScreen';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

export default createStackNavigator({
    LoginStack: {
        screen: LoginScreen,
        navigationOptions: ({ navigation }) => ({
            header: null
        }),
    },
    RegisterStack: {
        screen : RegisterScreen,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    }   
}, {
        transitionConfig: getSlideFromRightTransition
    });