// import { StackNavigator } from 'react-navigation';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Quiz from '../screen/Quiz';
import PembahasanScreen from '../screen/ScoreResult';
import DetailPembahasanScreen from '../screen/DetailPembahasan';
import SplashScreen from '../screen/SplashScreen';
import WelcomeScreen from '../screen/WelcomeScreen';
import Petunjuk from '../screen/Petunjuk';

const Navigation = createStackNavigator({
    SplashScreen: { 
        screen: SplashScreen,
        navigationOptions: {
            header: null
        }
    },    
    Petunjuk: { 
        screen: Petunjuk,
        navigationOptions: {
            header: null
        }
    }, 
    WelcomeScreen: { 
        screen: WelcomeScreen,
        navigationOptions: {
            header: null
        }
    },    
    Quiz: { 
        screen: Quiz,
        navigationOptions: {
            header: null
        }
    },    
    Score: { 
        screen: PembahasanScreen,
        navigationOptions: {
            header: null
        }    
    },
    Detail: { 
        screen: DetailPembahasanScreen,
        navigationOptions: {
            header: null
        }    
    },
},
{
    initialRouteName: 'SplashScreen',
})

export default createAppContainer(Navigation)