import React from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import Sound from 'react-native-sound'

class WelcomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount = () => this.playSound()

    playSound() {
        let sounds = new Sound(require('../assets/bensound-sunny.mp3'), (error, sound) => {
            if (error) {
                alert('error' + error.message);
                return
            }
            sounds.setNumberOfLoops(-1)
            sounds.play(() => sounds.release())
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require('../assets/welcomescreen.png')}
                />
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{
                            borderRadius: 15,
                            padding: 10,
                            marginTop: 420,
                            width: Dimensions.get("window").width / 2,
                            backgroundColor: '#F61415'
                        }}
                        onPress={() => this.props.navigation.navigate('Quiz')}
                    >
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