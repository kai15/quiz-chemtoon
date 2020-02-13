import React from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    StyleSheet,
    Dimensions
} from 'react-native';

class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    componentWillMount () {
        setTimeout (() => {
            this.props.navigation.navigate('Petunjuk')
        }, 2000); 
    }

    componentDidMount() {
        // const firebase = require("firebase");
        // let config = {
		// 	apiKey: "AIzaSyBKUy8DNRMiiEnwabNm2DyimT2qPZnrEok",
		// 	authDomain: "chemtoon-id.firebaseapp.com",
		// 	databaseURL: "https://chemtoon-id.firebaseio.com",
		// 	projectId: "chemtoon-id",
		// 	storageBucket: "chemtoon-id.appspot.com",
		// 	messagingSenderId: "462143218534",
		// };
		// if (!firebase.apps.length) {
		// 	firebase.initializeApp(config);
		// }

		// firebase.auth().signInAnonymously().catch(function(error) {});
    }

    render() {
        return(
            <View style = {styles.container}>
                <Image
                    style = {styles.image}
                    source = {require('../assets/splashscreen.png')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: Dimensions.get("screen").width,
		// height: Dimensions.get("screen").height,
    },
	image: {
        flex: 1,
		width: undefined,
        height: undefined,
        resizeMode: 'stretch'
	},
});

export default SplashScreen;