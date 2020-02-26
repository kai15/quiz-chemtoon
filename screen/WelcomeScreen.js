import React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    AppState
} from 'react-native';

import Sound from 'react-native-sound'

class WelcomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appState: AppState.currentState,
            sound: true
        }
    }

    componentDidMount() {
        this.playSound()
        AppState.addEventListener('change', this._handleAppStateChange);
    }

    componentWillUnmount() {
        this.stopSound()
        AppState.removeEventListener('change', this._handleAppStateChange);
    }

    playSound() {
        this.setState({ sound: true })
        sounds = new Sound('bensound.mp3', Sound.MAIN_BUNDLE, (error, sound) => {
            if (error) {
                alert('error' + error.message);
                return
            }
            sounds.setNumberOfLoops(-1)
            sounds.play(() => sounds.release())
        })
    }

    stopSound() {
        this.setState({ sound: false })
        sounds.stop(() => console.log("zzzzzz"))
    }

    _handleAppStateChange = (nextAppState) => {
        if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
            this.playSound()
        } else this.stopSound()
        this.setState({ appState: nextAppState });
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require('../assets/welcomescreen.png')} />
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{ borderRadius: 15, padding: 10, marginTop: 350 }}
                        onPress={() => this.state.sound ? this.stopSound() : this.playSound()}>
                        <Image style={{ width: 35, height: 35 }} source={this.state.sound ? require("../assets/icons8-sound-50.png") : require("../assets/icons8-mute-50.png")}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{
                            borderRadius: 15,
                            padding: 10,
                            marginTop: 470,
                            width: Dimensions.get("window").width / 2,
                            backgroundColor: '#F61415'
                        }}
                        onPress={() => this.props.navigation.navigate('Quiz')}>
                        <Text style={{ fontSize: 15, color: '#FFFFFF', textAlign: "center", fontWeight: "bold" }}>Klik Disini Untuk Memulai</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height,
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default WelcomeScreen;