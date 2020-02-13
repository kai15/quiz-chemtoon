import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'

class Petunjuk extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ textAlign: "center", fontSize: 20, marginTop: 20, marginBottom: 20 }}> Petunjuk Penggunaan </Text>
                <View style={{ textAlign: "justify", margin: 15, borderWidth: 2, borderColor: "#000", padding: 20, borderRadius: 5 }}>
                    <Text style={{ textAlign: "justify", lineHeight: 30 }}>
                        Aplikasi ini merupakan aplikasi permainan komik kimia yang memodifikasi dari webtoon.
                        Setiap chapter komik akan ada soal sesuai dengan topik yang ada pada komik.
                        Jawablah pertanyaan sesuai dengan jawaban yang paling tepat menurut anda.
                        Diakhir sesi akan disediakan hasil dan kunci jawaban serta  .
                </Text>
                </View>
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{
                            borderRadius: 15,
                            padding: 10,
                            marginTop: 420,
                            width: Dimensions.get("window").width / 2,
                            backgroundColor: '#F61415'
                        }}
                        onPress={() => this.props.navigation.navigate('WelcomeScreen')}
                    >
                        <Text style={{ fontSize: 15, color: '#FFFFFF', textAlign: "center", fontWeight: "bold" }}>Lanjutkan ... </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Petunjuk