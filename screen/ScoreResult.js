import React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ScrollView
} from 'react-native';

class PembahasanScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            nilai: this.props.navigation.getParam('nilai')
        }
    }
    
    data = {
        "Pertanyaan 1": "Besi Berkarat",
        "Pertanyaan 2": "Besi Berkarat",
        "Pertanyaan 3": "Besi Berkarat",
        "Pertanyaan 4": "Balon",
        "Pertanyaan 5": "Balon",
        "Pertanyaan 6": "Balon",
        "Pertanyaan 7": "Garam",
        "Pertanyaan 8": "Garam",
        "Pertanyaan 9": "Garam",
        "Pertanyaan 10": "Es Krim",
        "Pertanyaan 11": "Es Krim",
        "Pertanyaan 12": "Es Krim",
        "Pertanyaan 13": "Cuci Piring",
        "Pertanyaan 14": "Cuci Piring",
        "Pertanyaan 15": "Cuci Piring",
        "Pertanyaan 16": "Cuci Pakaian",
        "Pertanyaan 17": "Cuci Pakaian",
        "Pertanyaan 18": "Cuci Pakaian",
        "Pertanyaan 19": "Amis Ikan",
        "Pertanyaan 20": "Amis Ikan",
        "Pertanyaan 21": "Amis Ikan",
        "Pertanyaan 22": "Cuci Darah",
        "Pertanyaan 23": "Cuci Darah",
        "Pertanyaan 24": "Cuci Darah",
        "Pertanyaan 25": "Salju",
        "Pertanyaan 26": "Salju",
        "Pertanyaan 27": "Salju",
        "Pertanyaan 28": "Kompor",
        "Pertanyaan 29": "Kompor",
        "Pertanyaan 30": "Kompor"
    }

    componentWillMount() {
    }
    
    render() {
        let { navigation } = this.props
        const chapter = this.data
        const hasil = this.state.nilai
    
        const pertanyaan = Object.keys(chapter).map(function(value, index) {
            return (
                <View>                    
                    <TouchableOpacity key={index} style={{padding: 10}} onPress={() => navigation.navigate('Detail', {title: chapter[value] == 'Cuci Piring' || chapter[value] == 'Cuci Pakaian' || chapter[value] == 'Cuci Darah' ? chapter[value].split(" ")[1] : chapter[value].split(" ")[0]})}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontSize: 15, color: '#000', width:'80%'}}> {value} : {chapter[value]}</Text>
                            <Image style={{width: 25, height: 25}} source={hasil[index] == 0 ? require('../assets/dash.png') : hasil[index] == 1 ? require('../assets/correct.png') : require('../assets/wrong.png')} />       
                        </View>
                    </TouchableOpacity>
                    <View style={{borderWidth: 0.5, borderColor: '#0091EA', width: 400}}></View>
                </View>
            )
        })

        return(                  
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Text style={{textAlign: 'center', fontSize: 20, padding: 10, color: '#0091EA', fontWeight: 'bold', marginBottom: 10}}> PEMBAHASAN </Text>
                <ScrollView>
                    {pertanyaan}
                    {/* </View> */}
                    {/* <TouchableOpacity style={{padding: 10}} onPress={() => this.props.navigation.navigate('DetailPembahasanScreen', {title: 'Besi'})}>
                        <Text style={{fontSize: 15, color: '#000'}}> CHAPTER 1: Besi Karatan : {nilai[0] == 0 ? 'kosong' : nilai[0] == 1 ? 'salah' : 'bener' }  </Text>      
                    </TouchableOpacity>
                    <View style={{borderWidth: 0.5, borderColor: '#0091EA', width: 400}}></View>
                    <TouchableOpacity style={{padding: 10}} onPress={() => this.props.navigation.navigate('DetailPembahasanScreen', {title: 'Balon'})}>
                        <Text style={{fontSize: 15, color: '#000'}}> CHAPTER 2: Balon </Text>      
                    </TouchableOpacity>
                    <View style={{borderWidth: 0.5, borderColor: '#0091EA', width: 400}}></View>
                    <TouchableOpacity style={{padding: 10}} onPress={() => this.props.navigation.navigate('DetailPembahasanScreen', {title: 'Garam'})}>
                        <Text style={{fontSize: 15, color: '#000'}}> CHAPTER 3: Garam </Text>      
                    </TouchableOpacity>
                    <View style={{borderWidth: 0.5, borderColor: '#0091EA', width: 400}}></View>                   
                    <TouchableOpacity style={{padding: 10}} onPress={() => this.props.navigation.navigate('DetailPembahasanScreen', {title: 'Es'})}>
                        <Text style={{fontSize: 15, color: '#000'}}> CHAPTER 4: Es Krim </Text>      
                    </TouchableOpacity>
                    <View style={{borderWidth: 0.5, borderColor: '#0091EA', width: 400}}></View>
                    <TouchableOpacity style={{padding: 10}} onPress={() => this.props.navigation.navigate('DetailPembahasanScreen', {title: 'Piring'})}>
                        <Text style={{fontSize: 15, color: '#000'}}> CHAPTER 5: Cuci Piring </Text>      
                    </TouchableOpacity>
                    <View style={{borderWidth: 0.5, borderColor: '#0091EA', width: 400}}></View>
                    <TouchableOpacity style={{padding: 10}} onPress={() => this.props.navigation.navigate('DetailPembahasanScreen', {title: 'Pakaian'})}>
                        <Text style={{fontSize: 15, color: '#000'}}> CHAPTER 6: Cuci Pakaian </Text>      
                    </TouchableOpacity>
                    <View style={{borderWidth: 0.5, borderColor: '#0091EA', width: 400}}></View>
                    <TouchableOpacity style={{padding: 10}} onPress={() => this.props.navigation.navigate('DetailPembahasanScreen', {title: 'Amis'})}>
                        <Text style={{fontSize: 15, color: '#000'}}> CHAPTER 7: Amis Ikan </Text>      
                    </TouchableOpacity>
                    <View style={{borderWidth: 0.5, borderColor: '#0091EA', width: 400}}></View>
                    <TouchableOpacity style={{padding: 10}} onPress={() => this.props.navigation.navigate('DetailPembahasanScreen', {title: 'Darah'})}>
                        <Text style={{fontSize: 15, color: '#000'}}> CHAPTER 8: Cuci Darah </Text>      
                    </TouchableOpacity>
                    <View style={{borderWidth: 0.5, borderColor: '#0091EA', width: 400}}></View>
                    <TouchableOpacity style={{padding: 10}} onPress={() => this.props.navigation.navigate('DetailPembahasanScreen', {title: 'Salju'})}>
                        <Text style={{fontSize: 15, color: '#000'}}> CHAPTER 9: Salju </Text>      
                    </TouchableOpacity>
                    <View style={{borderWidth: 0.5, borderColor: '#0091EA', width: 400}}></View>
                    <TouchableOpacity style={{padding: 10}} onPress={() => this.props.navigation.navigate('DetailPembahasanScreen', {title: 'Kompor'})}>
                        <Text style={{fontSize: 15, color: '#000'}}> CHAPTER 10: Kompor </Text>      
                    </TouchableOpacity> */}
                    {/* <View style={{borderWidth: 0.5, borderColor: '#0091EA', width: 400}}></View> */}
                    <TouchableOpacity
                        style = {{
                        borderRadius: 15,
                        padding: 10,
                        alignSelf: 'center',
                        marginTop: 20,
                        marginBottom: 20,
                        width: Dimensions.get("window").width/2,
                        backgroundColor: '#0091EA'
                        }}
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Text style = {{fontSize: 15, color: '#FFFFFF', textAlign: "center", fontWeight: "bold"}}> Kembali </Text>
                    </TouchableOpacity>
                </ScrollView>
        </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    resizeMode:'contain', 
    alignSelf: "center", 
    width: 340, 
    height: 240
  }
});

export default PembahasanScreen;