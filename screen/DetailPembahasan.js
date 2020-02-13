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

class DetailPembahasanScreen extends React.Component {
    constructor(props) {
        super(props);
    }  
    
    render() {
        return(                  
            <View style={{flex: 1, backgroundColor: '#44C7FA'}}>
                <Text style={{textAlign: 'center', fontSize: 20, padding: 10, color: '#fff', fontWeight: 'bold'}}> PEMBAHASAN </Text>
                <ScrollView>
                    {this.props.navigation.getParam('title') == 'Besi' ? (
                        <View>
                            <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold', backgroundColor: '#44C7FA', padding: 10}}> CHAPTER 1: Besi Karatan </Text>      
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 400}}></View>
                            <View style={{padding: 12}}>
                                <Text style={{fontSize: 15, borderColor: '#fff', color: '#000', borderWidth: 1, borderRadius: 35, backgroundColor: '#fff', padding: 10}}>Penyebab besi karatan (korosi) adalah oksigen dan air. Cat digunakan untuk melapisi besi untuk melindungi besi kontak dengan air dan udara. </Text>
                            </View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 30, height: 30, borderRadius: 50, alignSelf: 'flex-end', marginRight: 40, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 25, height: 25, borderRadius: 50, alignSelf: 'flex-end', marginRight: 70, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 20, height: 20, borderRadius: 50, alignSelf: 'flex-end', marginRight: 100, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 15, height: 15, borderRadius: 50, alignSelf: 'flex-end', marginRight: 130, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 10, height: 10, borderRadius: 50, alignSelf: 'flex-end', marginRight: 160, backgroundColor: '#fff'}}></View>
                            <Image style={{width: 300, height: 300, justifyContent: 'flex-start', marginTop: -85}} source={require('../assets/shotkomik-1.png')} />
                        </View>
                        ) : null
                    }
                    {this.props.navigation.getParam('title') == 'Balon' ? (
                        <View>
                            <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold', backgroundColor: '#44C7FA', padding: 10}}>CHAPTER 2: Balon </Text>      
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 400}}></View>
                            <View style={{padding: 12}}>
                                <Image style={{width: 100, height: 100, justifyContent: 'flex-start', marginBottom: 5}} source={require('../assets/He.jpg')} />
                                <Text style={{fontSize: 15, borderColor: '#fff', color: '#000', borderWidth: 1, borderRadius: 35, backgroundColor: '#fff', padding: 10}}>Helium adalah gas terbanyak kedua di alam semesta. Helium lebih ringan dari udara. Helium juga tidak terbakar dan tidak bereaksi dengan bahan kimia lain. Karena itu, gas ini digunakan untuk mengisi balon udara. </Text>
                            </View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 30, height: 30, borderRadius: 50, alignSelf: 'flex-end', marginRight: 40, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 25, height: 25, borderRadius: 50, alignSelf: 'flex-end', marginRight: 70, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 20, height: 20, borderRadius: 50, alignSelf: 'flex-end', marginRight: 100, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 15, height: 15, borderRadius: 50, alignSelf: 'flex-end', marginRight: 130, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 10, height: 10, borderRadius: 50, alignSelf: 'flex-end', marginRight: 160, backgroundColor: '#fff'}}></View>
                            <Image style={{width: 300, height: 300, justifyContent: 'flex-start', marginTop: -85}} source={require('../assets/shotkomik-2.png')} />
                        </View> 
                        ) : null
                    }
                    
                    {this.props.navigation.getParam('title') == 'Garam' ? (
                        <View>
                            <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold', backgroundColor: '#44C7FA', padding: 10}}> CHAPTER 3: Garam </Text>      
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 400}}></View>               
                            <View style={{padding: 12 }}>
                                <View style={{borderColor: '#fff', borderWidth: 1, borderRadius: 35, backgroundColor: '#fff'}}>
                                    <Text style={{fontSize: 15, color: '#000', padding: 10}}>Natrium klorida, juga dikenal dengan garam dapur, atau halit, adalah senyawa kimia dengan rumus molekul NaCl. Senyawa ini adalah garam yang paling memengaruhi salinitas (kadar garam) laut dan cairan ekstraselular pada banyak organisme multiselular. Penumpukan garam-garam mineral di dalam laut ini menyebabkan air laut terasa asin. Air laut memiliki kadar garam rata-rata 3,5%. </Text>
                                    <Text style={{fontSize: 15, color: '#000', padding: 10}}>Proses pembuatan garam secara tradisional bisa dibilang ada dua jenis yaitu dengan metode penguapan dengan sinar matahari di tambak-tambak garam dan dengan cara teknik perebusan (garam rebus). Air laut dijemur atau diuapkan dengan sinar matahari selama 7 hari lalu dengan sendirinya air tersebut akan berkurang dan menjadi Kristal garam. </Text>
                                </View>
                            </View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 30, height: 30, borderRadius: 50, alignSelf: 'flex-end', marginRight: 40, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 25, height: 25, borderRadius: 50, alignSelf: 'flex-end', marginRight: 70, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 20, height: 20, borderRadius: 50, alignSelf: 'flex-end', marginRight: 100, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 15, height: 15, borderRadius: 50, alignSelf: 'flex-end', marginRight: 130, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 10, height: 10, borderRadius: 50, alignSelf: 'flex-end', marginRight: 160, backgroundColor: '#fff'}}></View>
                            <Image style={{width: 250, height: 250, justifyContent: 'flex-start', marginTop: -85}} source={require('../assets/shotkomik-3.png')} />
                        </View>
                        ) : null
                    }
                    {this.props.navigation.getParam('title') == 'Es' ? (
                        <View>
                            <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold', backgroundColor: '#44C7FA', padding: 10, marginTop: 10}}> CHAPTER 4: Es Krim </Text>     
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 400}}></View>
                            <View style={{padding: 12}}>
                                <Image style={{width: 100, height: 100, justifyContent: 'flex-start', marginBottom: 5}} source={require('../assets/N.jpg')} />
                                <Text style={{fontSize: 15, borderColor: '#fff', color: '#000', borderWidth: 1, borderRadius: 35, backgroundColor: '#fff', padding: 10}}>Pada tabel periodik unsur nitrogen berada pada golongan 5A periode 2. Nitrogen cair merupakan nitrogen dalam wujud cairan bening yang memiliki suhu sangat rendah yaitu mendidih pada suhu -196 derajat celcius. Zat kimia ini dihasilkan secara industri dengan distilasi fraksional udara cair. Nitrogen cair sering disingkat LIN (liquid nitrogen). Nitrogen cair berfungsi untuk mendinginkan makanan secara cepat seperti es krim. Cukup menuangkan nitrogen cair ke dalam adonan es krim yang sedang dikocok dan dalam waktu 2 menit tanpa dimasukkan ke dalam kulkas, es krim sudah jadi. </Text>
                            </View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 30, height: 30, borderRadius: 50, alignSelf: 'flex-end', marginRight: 40, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 25, height: 25, borderRadius: 50, alignSelf: 'flex-end', marginRight: 70, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 20, height: 20, borderRadius: 50, alignSelf: 'flex-end', marginRight: 100, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 15, height: 15, borderRadius: 50, alignSelf: 'flex-end', marginRight: 130, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 10, height: 10, borderRadius: 50, alignSelf: 'flex-end', marginRight: 160, backgroundColor: '#fff'}}></View>
                            <Image style={{width: 200, height: 200, justifyContent: 'flex-start', marginTop: -85}} source={require('../assets/shotkomik-4.png')} />
                        </View>
                        ) : null
                    }
                    
                    {this.props.navigation.getParam('title') == 'Piring' ? (
                        <View>
                            <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold', backgroundColor: '#44C7FA', padding: 10}}> CHAPTER 5: Cuci Piring </Text>      
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 400}}></View>
                            <View style={{padding: 12}}>
                                <View style={{borderColor: '#fff', borderWidth: 1, borderRadius: 35, backgroundColor: '#fff'}}>
                                    <Text style={{fontSize: 15, borderColor: '#fff', color: '#000', borderWidth: 1, borderRadius: 35, backgroundColor: '#fff', padding: 10}}>Sabun adalah garam alkali dari asam lemak dan dihasilkan menurut reaksi asam basa biasa. Basa alkali yang umum digunakan untuk membuat sabun adalah Kalium Hidroksida (KOH) dan Natrium Hidroksida (NaOH) sehingga rumus molekul sabun selalu dinyatakan sebagai RCOOK atau RCOONa. Sabun kalium ROOCK disebut juga sabun lunak dan umumnya digunakan untuk sabun mandi cair, sabun cuci pakaian dan perlengkapan rumah tangga. Sedangkan sabun natrium, RCOONa, disebut sabun keras dan umumnya digunakan sebagai sabun cuci, dalam industri logam dan untuk mengatur kekerasan sabun kalium. </Text>
                                    <Text style={{fontSize: 15, borderColor: '#fff', color: '#000', borderWidth: 1, borderRadius: 35, backgroundColor: '#fff', padding: 10}}>Sabun dalam bantuan media air akan melarutkan lemak atau minyak. Sabun merupakan jenis dari surfaktan, yaitu molekul yang memiliki gugus hidrofilik (suka air) dan gugus hidrofobik (suka minyak). Karena sifat inilah sabun dapat berikatan dengan air dan dapat berikatan dengan minyak sehingga dapat membersihkan minyak dari piring atau benda lain. Selain minyak, sabun juga dapat membersihkan kotoran-kotoran lain yang bersifat hampir sama dengan minyak (tidak larut air). </Text>
                                </View>
                            </View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 30, height: 30, borderRadius: 50, alignSelf: 'flex-end', marginRight: 40, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 25, height: 25, borderRadius: 50, alignSelf: 'flex-end', marginRight: 70, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 20, height: 20, borderRadius: 50, alignSelf: 'flex-end', marginRight: 100, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 15, height: 15, borderRadius: 50, alignSelf: 'flex-end', marginRight: 130, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 10, height: 10, borderRadius: 50, alignSelf: 'flex-end', marginRight: 160, backgroundColor: '#fff'}}></View>
                            <Image style={{width: 250, height: 250, justifyContent: 'flex-start', marginTop: -85}} source={require('../assets/shotkomik-5.png')} />
                        </View>
                        ) : null
                    }
                    
                    {this.props.navigation.getParam('title') == 'Pakaian' ? (
                        <View>
                            <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold', backgroundColor: '#44C7FA', padding: 10}}> CHAPTER 6: Cuci Pakaian </Text>      
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 400}}></View>
                            <View style={{padding: 12}}>
                                <Image source={require('../assets/molekul.gif')} style={{width: Dimensions.get('screen').width, height: 90, alignSelf: "center", marginBottom: 5}} />
                                <View style={{borderColor: '#fff', borderWidth: 1, borderRadius: 35, backgroundColor: '#fff'}}> 
                                    <Text style={{fontSize: 15, color: '#000', padding: 10}}>Senyawa kimia bernama <Text style={{fontStyle: "italic"}}>alkyl benzene sulfonat</Text> (ABS) merupakan surfaktan yang banyak digunakan dalam industri berupa cairan kental berwarna coklat, mudah larut dalam air. ABS digunakan untuk memproduksi deterjen. </Text>
                                    <Text style={{fontSize: 15, color: '#000', padding: 10}}>Surfaktan merupakan zat aktif yang berfungsi menurunkan tegangan permukaan air sehingga dapat melepaskan kotoran yang menempel pada permukaan bahan sehingga pakaian yang bernoda karena kotoran dapat dihilangkan dengan menggunakan detergen. </Text>
                                </View>
                            </View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 30, height: 30, borderRadius: 50, alignSelf: 'flex-end', marginRight: 40, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 25, height: 25, borderRadius: 50, alignSelf: 'flex-end', marginRight: 70, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 20, height: 20, borderRadius: 50, alignSelf: 'flex-end', marginRight: 100, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 15, height: 15, borderRadius: 50, alignSelf: 'flex-end', marginRight: 130, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 10, height: 10, borderRadius: 50, alignSelf: 'flex-end', marginRight: 160, backgroundColor: '#fff'}}></View>
                            <Image style={{width: 200, height: 200, justifyContent: 'flex-start', marginTop: -85}} source={require('../assets/shotkomik-6.png')} />
                        </View>
                        ) : null
                    }
                    
                    {this.props.navigation.getParam('title') == 'Amis' ? (
                        <View>
                            <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold', backgroundColor: '#44C7FA', padding: 10}}> CHAPTER 7: Amis Ikan </Text>      
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 400}}></View>
                            <View style={{padding: 12}}>
                                <Text style={{fontSize: 15, borderColor: '#fff', color: '#000', borderWidth: 1, borderRadius: 35, backgroundColor: '#fff', padding: 10}}>Penyebab pertama bau amis pada ikan disebabkan oleh dekomposisi kandungan amonia (senyawa belerang dan bahan kimia hasil penguraian asam amino). Otot ikan mengandung zat trimetillamin oksida atau TMAO, terurai menjadi trimetilamina dan dimetilamina. Kedua campuran senyawa inilah yang menimbulkan bau amis pada ikan. Hidung manusia dirancang peka terhadap bau kimia dan senyawa tersebut sudah mengurai sejak ikan telah mati walaupun masih segar. Jadi jika dibiarkan semakin lama akan menyengat. Adapun dengan memberikan air perasan jeruk nipis dapat mengurangi bau amis pada ikan. </Text>
                            </View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 30, height: 30, borderRadius: 50, alignSelf: 'flex-end', marginRight: 40, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 25, height: 25, borderRadius: 50, alignSelf: 'flex-end', marginRight: 70, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 20, height: 20, borderRadius: 50, alignSelf: 'flex-end', marginRight: 100, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 15, height: 15, borderRadius: 50, alignSelf: 'flex-end', marginRight: 130, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 10, height: 10, borderRadius: 50, alignSelf: 'flex-end', marginRight: 160, backgroundColor: '#fff'}}></View>
                            <Image style={{width: 200, height: 200, justifyContent: 'flex-start', marginTop: -85}} source={require('../assets/shotkomik-7.png')} />
                        </View>
                        ) : null
                    }
                    
                    {this.props.navigation.getParam('title') == 'Darah' ? (
                        <View>
                            <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold', backgroundColor: '#44C7FA', padding: 10}}> CHAPTER 8: Cuci Darah </Text>      
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 400}}></View>
                            <View style={{padding: 12}}>
                                <View style={{borderColor: '#fff', color: '#44C7FA', borderWidth: 1, borderRadius: 35, backgroundColor: '#fff'}}>
                                    {/* <Text style={{fontSize: 15, color: '#000', padding: 10}}>Sifat koligatif terbagi menjadi 4, yaitu kenaikan titik didih, penurunan titik beku, penurunan tekanan uap, dan tekanan osmosis. </Text> */}
                                    <Text style={{fontSize: 15, color: '#000', padding: 10}}>Pada proses cuci darah, darah dialirkan ke ginjal pengganti (dializer) untuk dibersihkan melalui proses difusi, osmosis, dan ultrafiltrasi menggunakan bantuan sebuah mesin hemodialisa. Darah yang telah bersih dikembalikan ke dalam tubuh. Pada saat proses ultrafiltrasi, ketika cairan dipindahkan saat dialisis yang bergerak akibat beberapa bentuk tekanan. Adapun tekanan yang terjadi adalah tekanan positif, tekanan negatif, dan tekanan osmosis. </Text>
                                </View>
                            </View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 30, height: 30, borderRadius: 50, alignSelf: 'flex-end', marginRight: 40, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 25, height: 25, borderRadius: 50, alignSelf: 'flex-end', marginRight: 70, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 20, height: 20, borderRadius: 50, alignSelf: 'flex-end', marginRight: 100, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 15, height: 15, borderRadius: 50, alignSelf: 'flex-end', marginRight: 130, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 10, height: 10, borderRadius: 50, alignSelf: 'flex-end', marginRight: 160, backgroundColor: '#fff'}}></View>
                            <Image style={{width: 250, height: 250, justifyContent: 'flex-start', marginTop: -85}} source={require('../assets/shotkomik-8.png')} />
                        </View>
                        ) : null
                    }
                    {this.props.navigation.getParam('title') == 'Salju' ? (
                        <View>
                            <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold', backgroundColor: '#44C7FA', padding: 10}}> CHAPTER 9: Salju </Text>      
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 400}}></View>
                            <View style={{padding: 12}}>
                                <View style={{borderColor: '#fff', color: '#44C7FA', borderWidth: 1, borderRadius: 35, backgroundColor: '#fff'}}>
                                    <Text style={{fontSize: 15, borderColor: '#fff', color: '#000', borderWidth: 1, borderRadius: 35, backgroundColor: '#fff', padding: 10}}>Salju adalah air yang jatuh dari awan yang telah membeku menjadi padat dan seperti hujan. Air dengan rumus molekul H2O memiliki massa molar 18,0153 g/mol. Salah satu cara supaya jalanan bersalju tidak licin adalah dengan menaburi garam. </Text>
                                    <Text style={{fontSize: 15, borderColor: '#fff', color: '#000', borderWidth: 1, borderRadius: 35, backgroundColor: '#fff', padding: 10}}>Garam memiliki sifat hidrofilik yang artinya garam akan mengikat molekul air sehingga molekul air tidak membeku kembali. Sifat ini merubah kondisi ekuilibrium pada titik beku air, sehingga mempermudah air es mencair dan mencegah air yang cair membeku. Oleh karena itu, tujuan menambahkan garam ke jalanan bersalju atau es adalah menurunkan titik bekunya sehingga bisa mencair lebih mudah. </Text>
                                </View>
                            </View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 30, height: 30, borderRadius: 50, alignSelf: 'flex-end', marginRight: 40, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 25, height: 25, borderRadius: 50, alignSelf: 'flex-end', marginRight: 70, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 20, height: 20, borderRadius: 50, alignSelf: 'flex-end', marginRight: 100, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 15, height: 15, borderRadius: 50, alignSelf: 'flex-end', marginRight: 130, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 10, height: 10, borderRadius: 50, alignSelf: 'flex-end', marginRight: 160, backgroundColor: '#fff'}}></View>
                            <Image style={{width: 250, height: 250, justifyContent: 'flex-start', marginTop: -85}} source={require('../assets/shotkomik-9.png')} />
                        </View>
                        ) : null
                    }
                    {this.props.navigation.getParam('title') == 'Kompor' ? (
                        <View>                            
                            <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold', backgroundColor: '#44C7FA', padding: 10}}> CHAPTER 10: Kompor </Text>      
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 400}}></View>
                            <View style={{padding: 12}}>
                                <View style={{borderColor: '#fff', color: '#44C7FA', borderWidth: 1, borderRadius: 35, backgroundColor: '#fff'}}>
                                    <Text style={{fontSize: 15, borderColor: '#fff', color: '#000', borderWidth: 1, borderRadius: 35, backgroundColor: '#fff', padding: 10}}>Liquefied Petroleum Gas (LPG) dengan brand Elpiji, merupakan gas hasil produksi dari kilang minyak (Kilang BBM) dan Kilang gas, yang komponen utamanya adalah gas propana (C3H8) dan butana (C4H10) lebih kurang 99 % dan selebihnya adalah gas pentana (C5H12) yang dicairkan. </Text>
                                    <Text style={{fontSize: 15, borderColor: '#fff', color: '#000', borderWidth: 1, borderRadius: 35, backgroundColor: '#fff', padding: 10}}>Ketika kompor meledak akan menimbulkan percikan api. Bila disiram dengan air dalam keadaan panas maka air akan menguap. Uap ini akan membantu api semakin besar. Penggunaan lap basah lebih baik karena mencegah air yang menguap di udara. </Text>
                                    <Text style={{fontSize: 15, borderColor: '#fff', color: '#000', borderWidth: 1, borderRadius: 35, backgroundColor: '#fff', padding: 10}}>Reaksi pembakaran yaitu: Propana atau butana + oksigen → karbon dioksida + uap air + panas </Text>
                                </View>
                            </View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 30, height: 30, borderRadius: 50, alignSelf: 'flex-end', marginRight: 40, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 25, height: 25, borderRadius: 50, alignSelf: 'flex-end', marginRight: 70, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 20, height: 20, borderRadius: 50, alignSelf: 'flex-end', marginRight: 100, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 15, height: 15, borderRadius: 50, alignSelf: 'flex-end', marginRight: 130, backgroundColor: '#fff'}}></View>
                            <View style={{borderWidth: 1, borderColor: '#fff', width: 10, height: 10, borderRadius: 50, alignSelf: 'flex-end', marginRight: 160, backgroundColor: '#fff'}}></View>
                            <Image style={{width: 250, height: 250, justifyContent: 'flex-start', marginTop: -85}} source={require('../assets/shotkomik-10.png')} />
                        </View>
                        ) : null
                    }
                    <TouchableOpacity
                        style = {{
                        borderRadius: 15,
                        padding: 10,
                        alignSelf: 'center',
                        marginTop: 10,
                        marginBottom: 25,
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

export default DetailPembahasanScreen;