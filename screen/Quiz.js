import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  BackHandler
} from 'react-native';
import Animbutton from './Animbutton'
const { width, height } = Dimensions.get('window')
let arrnew = []
const jsonData = {
  "quiz": {
    "quiz1": {
      "question1": {
        "title": 'CHAPTER 1:',
        "image": {
          "image0": require('../assets/komik1/komik1-0.jpg'),
          "image1": require('../assets/komik1/komik1-1.jpg'),
          "image2": require('../assets/komik1/komik1-2.jpg'),
          "image3": require('../assets/komik1/komik1-3.jpg'),
          "image4": require('../assets/komik1/komik1-4.jpg'),
          "image5": require('../assets/komik1/komik1-5.jpg'),
          "image6": require('../assets/komik1/komik1-6.jpg'),
          "image7": require('../assets/komik1/komik1-7.jpg'),
          "image8": require('../assets/komik1/komik1-8.jpg')
        },
        "correctoption": "option1",
        "options": {
          "option1": "Melapisi besi menggunakan cat",
          "option2": "Melapisi besi menggunakan kain",
          "option3": "Menaruh besi dalam beras",
          "option4": "Menaruh besi dalam dalam pasir"
        },
        "pilih": "1",
        "question": "Cara yang harus dilakukan supaya besi tidak mudah berkarat adalah..."
      },
      "question2": {
        "title": 'CHAPTER 1:',
        "image": {
          "image0": require('../assets/komik1/komik1-0.jpg'),
          "image1": require('../assets/komik1/komik1-1.jpg'),
          "image2": require('../assets/komik1/komik1-2.jpg'),
          "image3": require('../assets/komik1/komik1-3.jpg'),
          "image4": require('../assets/komik1/komik1-4.jpg'),
          "image5": require('../assets/komik1/komik1-5.jpg'),
          "image6": require('../assets/komik1/komik1-6.jpg'),
          "image7": require('../assets/komik1/komik1-7.jpg'),
          "image8": require('../assets/komik1/komik1-8.jpg')
        },
        "correctoption": "option2",
        "options": {
          "option1": "Adanya kontak dengan alga atau ganggang",
          "option2": "Adanya kontak dengan oksigen dan air",
          "option3": "Adanya kontak dengan virus",
          "option4": "Adanya kontak dengan arus listrik"
        },
        "pilih": "2",
        "question": "Besi bisa berkarat disebabkan..."
      },
      "question3": {
        "title": 'CHAPTER 1:',
        "image": {
          "image0": require('../assets/komik1/komik1-0.jpg'),
          "image1": require('../assets/komik1/komik1-1.jpg'),
          "image2": require('../assets/komik1/komik1-2.jpg'),
          "image3": require('../assets/komik1/komik1-3.jpg'),
          "image4": require('../assets/komik1/komik1-4.jpg'),
          "image5": require('../assets/komik1/komik1-5.jpg'),
          "image6": require('../assets/komik1/komik1-6.jpg'),
          "image7": require('../assets/komik1/komik1-7.jpg'),
          "image8": require('../assets/komik1/komik1-8.jpg')
        },
        "correctoption": "option3",
        "options": {
          "option1": "Tembaga",
          "option2": "Seng",
          "option3": "Emas",
          "option4": "Besi"
        },
        "pilih": "3",
        "question": "Logam di bawah ini yang tidak mengalami pengkaratan adalah..."
      },
      "question4": {
        "title": 'CHAPTER 2:',
        "image": {
          "image0": require('../assets/komik2/komik2-0.jpg'),
          "image1": require('../assets/komik2/komik2-1.jpg'),
          "image2": require('../assets/komik2/komik2-2.jpg'),
          "image3": require('../assets/komik2/komik2-3.jpg'),
          "image4": require('../assets/komik2/komik2-4.jpg'),
          "image5": require('../assets/komik2/komik2-5.jpg'),
          "image6": require('../assets/komik2/komik2-6.jpg'),
          "image7": require('../assets/komik2/komik2-7.jpg'),
          "image8": require('../assets/komik2/komik2-8.jpg')
        },
        "correctoption": "option2",
        "options": {
          "option1": "Natrium",
          "option2": "Helium",
          "option3": "Argon",
          "option4": "Nitrogen"
        },
        "pilih": "4",
        "question": "Gas yang digunakan untuk menerbangkan balon udara adalah..."
      },
      "question5": {
        "title": 'CHAPTER 2:',
        "image": {
          "image0": require('../assets/komik2/komik2-0.jpg'),
          "image1": require('../assets/komik2/komik2-1.jpg'),
          "image2": require('../assets/komik2/komik2-2.jpg'),
          "image3": require('../assets/komik2/komik2-3.jpg'),
          "image4": require('../assets/komik2/komik2-4.jpg'),
          "image5": require('../assets/komik2/komik2-5.jpg'),
          "image6": require('../assets/komik2/komik2-6.jpg'),
          "image7": require('../assets/komik2/komik2-7.jpg'),
          "image8": require('../assets/komik2/komik2-8.jpg')
        },
        "correctoption": "option2",
        "options": {
          "option1": "Na",
          "option2": "He",
          "option3": "Ar",
          "option4": "N"
        },
        "pilih": "5",
        "question": "Simbol kimia gas di bawah ini yang digunakan untuk menerbangkan balon udara adalah..."
      },
      "question6": {
        "title": 'CHAPTER 2:',
        "image": {
          "image0": require('../assets/komik2/komik2-0.jpg'),
          "image1": require('../assets/komik2/komik2-1.jpg'),
          "image2": require('../assets/komik2/komik2-2.jpg'),
          "image3": require('../assets/komik2/komik2-3.jpg'),
          "image4": require('../assets/komik2/komik2-4.jpg'),
          "image5": require('../assets/komik2/komik2-5.jpg'),
          "image6": require('../assets/komik2/komik2-6.jpg'),
          "image7": require('../assets/komik2/komik2-7.jpg'),
          "image8": require('../assets/komik2/komik2-8.jpg')
        },
        "correctoption": "option3",
        "options": {
          "option1": "Golongan 1A periode 3",
          "option2": "Golongan 5A periode 2",
          "option3": "Golongan 8A periode 1",
          "option4": "Golongan 8A periode 3"
        },
        "pilih": "5",
        "question": "Golongan dan periode gas yang digunakan dalam menerbangkan balon udara di bawah ini yang benar adalah..."
      },
      "question7": {
        "title": 'CHAPTER 3:',
        "image": {
          "image0": require('../assets/komik3/komik3-0.jpg'),
          "image1": require('../assets/komik3/komik3-1.jpg'),
          "image2": require('../assets/komik3/komik3-2.jpg'),
          "image3": require('../assets/komik3/komik3-3.jpg'),
          "image4": require('../assets/komik3/komik3-4.jpg'),
          "image5": require('../assets/komik3/komik3-5.jpg'),
          "image6": require('../assets/komik3/komik3-6.jpg'),
          "image7": require('../assets/komik3/komik3-7.jpg'),
          "image8": require('../assets/komik3/komik3-8.jpg')
        },
        "correctoption": "option3",
        "options": {
          "option1": "Angin Pantai",
          "option2": "Oksigen",
          "option3": "Sinar Matahari",
          "option4": "Karbondioksida"
        },
        "pilih": "5",
        "question": "Hal yang dapat membantu pembuatan garam dari air laut adalah..."
      },
      "question8": {
        "title": 'CHAPTER 3:',
        "image": {
          "image0": require('../assets/komik3/komik3-0.jpg'),
          "image1": require('../assets/komik3/komik3-1.jpg'),
          "image2": require('../assets/komik3/komik3-2.jpg'),
          "image3": require('../assets/komik3/komik3-3.jpg'),
          "image4": require('../assets/komik3/komik3-4.jpg'),
          "image5": require('../assets/komik3/komik3-5.jpg'),
          "image6": require('../assets/komik3/komik3-6.jpg'),
          "image7": require('../assets/komik3/komik3-7.jpg'),
          "image8": require('../assets/komik3/komik3-8.jpg')
        },
        "correctoption": "option3",
        "options": {
          "option1": "Memiliki sifat asin",
          "option2": "Terdapat mikroorganisme",
          "option3": "Mengandung mineral",
          "option4": "Terdapat tumbuhan laut"
        },
        "pilih": "5",
        "question": "Penyebab air laut memiliki rasa asin karena..."
      },
      "question9": {
        "title": 'CHAPTER 3:',
        "image": {
          "image0": require('../assets/komik3/komik3-0.jpg'),
          "image1": require('../assets/komik3/komik3-1.jpg'),
          "image2": require('../assets/komik3/komik3-2.jpg'),
          "image3": require('../assets/komik3/komik3-3.jpg'),
          "image4": require('../assets/komik3/komik3-4.jpg'),
          "image5": require('../assets/komik3/komik3-5.jpg'),
          "image6": require('../assets/komik3/komik3-6.jpg'),
          "image7": require('../assets/komik3/komik3-7.jpg'),
          "image8": require('../assets/komik3/komik3-8.jpg')
        },
        "correctoption": "option3",
        "options": {
          "option1": "RbCl",
          "option2": "HCl",
          "option3": "NaCl",
          "option4": "KCl"
        },
        "pilih": "5",
        "question": "Rumus kimia dari garam dapur di bawah yang benar adalah..."
      },
      "question10": {
        "title": 'CHAPTER 4:',
        "image": {
          "image0": require('../assets/komik4/komik4-0.jpg'),
          "image1": require('../assets/komik4/komik4-1.jpg'),
          "image2": require('../assets/komik4/komik4-2.jpg'),
          "image3": require('../assets/komik4/komik4-3.jpg'),
          "image4": require('../assets/komik4/komik4-4.jpg'),
          "image5": require('../assets/komik4/komik4-5.jpg'),
          "image6": require('../assets/komik4/komik4-6.jpg'),
          "image7": require('../assets/komik4/komik4-7.jpg'),
          "image8": require('../assets/komik4/komik4-8.jpg')
        },
        "correctoption": "option2",
        "options": {
          "option1": "Liquid kalsium",
          "option2": "Liquid nitrogen",
          "option3": "Liquid karbon",
          "option4": "Liquid Hidrogen"
        },
        "pilih": "5",
        "question": "Asap yang terdapat di sekililing es krim berasal dari..."
      },
      "question11": {
        "title": 'CHAPTER 4:',
        "image": {
          "image0": require('../assets/komik4/komik4-0.jpg'),
          "image1": require('../assets/komik4/komik4-1.jpg'),
          "image2": require('../assets/komik4/komik4-2.jpg'),
          "image3": require('../assets/komik4/komik4-3.jpg'),
          "image4": require('../assets/komik4/komik4-4.jpg'),
          "image5": require('../assets/komik4/komik4-5.jpg'),
          "image6": require('../assets/komik4/komik4-6.jpg'),
          "image7": require('../assets/komik4/komik4-7.jpg'),
          "image8": require('../assets/komik4/komik4-8.jpg')
        },
        "correctoption": "option2",
        "options": {
          "option1": "Ca",
          "option2": "N",
          "option3": "C",
          "option4": "H"
        },
        "pilih": "5",
        "question": "Simbol unsur kimia yang menjadi asal asap es krim adalah..."
      },
      "question12": {
        "title": 'CHAPTER 4:',
        "image": {
          "image0": require('../assets/komik4/komik4-0.jpg'),
          "image1": require('../assets/komik4/komik4-1.jpg'),
          "image2": require('../assets/komik4/komik4-2.jpg'),
          "image3": require('../assets/komik4/komik4-3.jpg'),
          "image4": require('../assets/komik4/komik4-4.jpg'),
          "image5": require('../assets/komik4/komik4-5.jpg'),
          "image6": require('../assets/komik4/komik4-6.jpg'),
          "image7": require('../assets/komik4/komik4-7.jpg'),
          "image8": require('../assets/komik4/komik4-8.jpg')
        },
        "correctoption": "option4",
        "options": {
          "option1": "Golongan 2A periode 4",
          "option2": "Golongan 4A periode 2",
          "option3": "Golongan 1A periode 1",
          "option4": "Golongan 5A periode 2"
        },
        "pilih": "5",
        "question": "Golongan dan periode unsur kimia yang menjadi asal asap es krim di bawah ini yang benar adalah..."
      },
      "question13": {
        "title": 'CHAPTER 5:',
        "image": {
          "image0": require('../assets/komik5/komik5-0.jpg'),
          "image1": require('../assets/komik5/komik5-1.jpg'),
          "image2": require('../assets/komik5/komik5-2.jpg'),
          "image3": require('../assets/komik5/komik5-3.jpg'),
          "image4": require('../assets/komik5/komik5-4.jpg'),
          "image5": require('../assets/komik5/komik5-5.jpg'),
          "image6": require('../assets/komik5/komik5-6.jpg'),
          "image7": require('../assets/komik5/komik5-7.jpg'),
          "image8": require('../assets/komik5/komik5-8.jpg')
        },
        "correctoption": "option2",
        "options": {
          "option1": "Pasta gigi",
          "option2": "Sabun",
          "option3": "Shampoo",
          "option4": "Abu gosok"
        },
        "pilih": "5",
        "question": "Bahan pembersih yang dapat melarutkan sisa lemak dan minyak adalah..."
      },
      "question14": {
        "title": 'CHAPTER 5:',
        "image": {
          "image0": require('../assets/komik5/komik5-0.jpg'),
          "image1": require('../assets/komik5/komik5-1.jpg'),
          "image2": require('../assets/komik5/komik5-2.jpg'),
          "image3": require('../assets/komik5/komik5-3.jpg'),
          "image4": require('../assets/komik5/komik5-4.jpg'),
          "image5": require('../assets/komik5/komik5-5.jpg'),
          "image6": require('../assets/komik5/komik5-6.jpg'),
          "image7": require('../assets/komik5/komik5-7.jpg'),
          "image8": require('../assets/komik5/komik5-8.jpg')
        },
        "correctoption": "option1",
        "options": {
          "option1": "Memiliki gugus hidrofilik dan hidrofobik",
          "option2": "Memiliki reaksi hidrolisis",
          "option3": "Sabun dapat menetralkan lemak dan minyak",
          "option4": "Sabun bersifat buffer"
        },
        "pilih": "5",
        "question": "Sabun dapat membersihkan lemak dan minyak karena..."
      },
      "question15": {
        "title": 'CHAPTER 5:',
        "image": {
          "image0": require('../assets/komik5/komik5-0.jpg'),
          "image1": require('../assets/komik5/komik5-1.jpg'),
          "image2": require('../assets/komik5/komik5-2.jpg'),
          "image3": require('../assets/komik5/komik5-3.jpg'),
          "image4": require('../assets/komik5/komik5-4.jpg'),
          "image5": require('../assets/komik5/komik5-5.jpg'),
          "image6": require('../assets/komik5/komik5-6.jpg'),
          "image7": require('../assets/komik5/komik5-7.jpg'),
          "image8": require('../assets/komik5/komik5-8.jpg')
        },
        "correctoption": "option4",
        "options": {
          "option1": "KOH",
          "option2": "NaOH",
          "option3": "NaK",
          "option4": "NaOOCR"
        },
        "pilih": "5",
        "question": "Rumus molekul sabun adalah..."
      },
      "question16": {
        "title": 'CHAPTER 6:',
        "image": {
          "image0": require('../assets/komik6/komik6-0.jpg'),
          "image1": require('../assets/komik6/komik6-1.jpg'),
          "image2": require('../assets/komik6/komik6-2.jpg'),
          "image3": require('../assets/komik6/komik6-3.jpg'),
          "image4": require('../assets/komik6/komik6-4.jpg'),
          "image5": require('../assets/komik6/komik6-5.jpg'),
          "image6": require('../assets/komik6/komik6-6.jpg'),
          "image7": require('../assets/komik6/komik6-7.jpg'),
          "image8": require('../assets/komik6/komik6-8.jpg')
        },
        "correctoption": "option1",
        "options": {
          "option1": "Alkyl benzene sulfonat",
          "option2": "Alkyl benzene surfactan",
          "option3": "Alyl benzene selenium",
          "option4": "Alyl benzene sodium"
        },
        "pilih": "5",
        "question": "Kepanjangan dari ABS adalah..."
      },
      "question17": {
        "title": 'CHAPTER 6:',
        "image": {
          "image0": require('../assets/komik6/komik6-0.jpg'),
          "image1": require('../assets/komik6/komik6-1.jpg'),
          "image2": require('../assets/komik6/komik6-2.jpg'),
          "image3": require('../assets/komik6/komik6-3.jpg'),
          "image4": require('../assets/komik6/komik6-4.jpg'),
          "image5": require('../assets/komik6/komik6-5.jpg'),
          "image6": require('../assets/komik6/komik6-6.jpg'),
          "image7": require('../assets/komik6/komik6-7.jpg'),
          "image8": require('../assets/komik6/komik6-8.jpg')
        },
        "correctoption": "option4",
        "options": {
          "option1": "Menghilangkan bau tak sedap",
          "option2": "Menghaluskan pakaian",
          "option3": "Memberikan warna seperti baru",
          "option4": "Mengangkat kotoran pada pakaian"
        },
        "pilih": "5",
        "question": "Fungsi dari ABS yang terdapat dalam detergen adalah..."
      },
      "question18": {
        "title": 'CHAPTER 6:',
        "image": {
          "image0": require('../assets/komik6/komik6-0.jpg'),
          "image1": require('../assets/komik6/komik6-1.jpg'),
          "image2": require('../assets/komik6/komik6-2.jpg'),
          "image3": require('../assets/komik6/komik6-3.jpg'),
          "image4": require('../assets/komik6/komik6-4.jpg'),
          "image5": require('../assets/komik6/komik6-5.jpg'),
          "image6": require('../assets/komik6/komik6-6.jpg'),
          "image7": require('../assets/komik6/komik6-7.jpg'),
          "image8": require('../assets/komik6/komik6-8.jpg')
        },
        "correctoption": "option1",
        "options": {
          "option1": <Image
          style={{width:310, height: 125}}
          source={require('../assets/A.png')}
      />,
          "option2": <Image
          style={{width:315, height: 125}}
          source={require('../assets/B.png')}
      />,
          "option3": <Image
          style={{width:270, height: 150}}
          source={require('../assets/C.png')}
      />,
          "option4": <Image
          style={{width:330, height: 120}}
          source={require('../assets/D.png')}
      />
        },
        "pilih": "5",
        "question": "Rumus struktur ABS di bawah ini yang benar adalah..."
      },
      "question19": {
        "title": 'CHAPTER 7:',
        "image": {
          "image0": require('../assets/komik7/komik7-0.jpg'),
          "image1": require('../assets/komik7/komik7-1.jpg'),
          "image2": require('../assets/komik7/komik7-2.jpg'),
          "image3": require('../assets/komik7/komik7-3.jpg'),
          "image4": require('../assets/komik7/komik7-4.jpg'),
          "image5": require('../assets/komik7/komik7-5.jpg'),
          "image6": require('../assets/komik7/komik7-6.jpg'),
          "image7": require('../assets/komik7/komik7-7.jpg'),
          "image8": require('../assets/komik7/komik7-8.jpg')
        },
        "correctoption": "option3",
        "options": {
          "option1": "Sudah mati",
          "option2": "Penyimpanannya tidak benar",
          "option3": "Hasil penguraian (dekomposisi)",
          "option4": "Memiliki aroma tak sedap"
        },
        "pilih": "5",
        "question": "Ikan memiliki bau amis dikarenakan..."
      },
      "question20": {
        "title": 'CHAPTER 7:',
        "image": {
          "image0": require('../assets/komik7/komik7-0.jpg'),
          "image1": require('../assets/komik7/komik7-1.jpg'),
          "image2": require('../assets/komik7/komik7-2.jpg'),
          "image3": require('../assets/komik7/komik7-3.jpg'),
          "image4": require('../assets/komik7/komik7-4.jpg'),
          "image5": require('../assets/komik7/komik7-5.jpg'),
          "image6": require('../assets/komik7/komik7-6.jpg'),
          "image7": require('../assets/komik7/komik7-7.jpg'),
          "image8": require('../assets/komik7/komik7-8.jpg')
        },
        "correctoption": "option2",
        "options": {
          "option1": "Direndam air hangat",
          "option2": "Menambahkan perasan air jeruk nipis",
          "option3": "Dibekukan dalam air dingin",
          "option4": "Menaburi daun kemangi"
        },
        "pilih": "5",
        "question": "Bau amis pada ikan dapat dikurangi dengan cara..."
      },
      "question21": {
        "title": 'CHAPTER 7:',
        "image": {
          "image0": require('../assets/komik7/komik7-0.jpg'),
          "image1": require('../assets/komik7/komik7-1.jpg'),
          "image2": require('../assets/komik7/komik7-2.jpg'),
          "image3": require('../assets/komik7/komik7-3.jpg'),
          "image4": require('../assets/komik7/komik7-4.jpg'),
          "image5": require('../assets/komik7/komik7-5.jpg'),
          "image6": require('../assets/komik7/komik7-6.jpg'),
          "image7": require('../assets/komik7/komik7-7.jpg'),
          "image8": require('../assets/komik7/komik7-8.jpg')
        },
        "correctoption": "option1",
        "options": {
          "option1": "Amonia dan trimetilamina",
          "option2": "Asam sianida dan asam fosfat",
          "option3": "Barium hidroksida dan asam asetat",
          "option4": "Asam oksalat dan natrium hidroksida"
        },
        "pilih": "5",
        "question": "Senyawa yang terkandung dalam ikan dan dapat menimbulkan bau amis adalah..."
      },
      "question22": {
        "title": 'CHAPTER 8:',
        "image": {
          "image0": require('../assets/komik8/komik8-0.jpg'),
          "image1": require('../assets/komik8/komik8-1.jpg'),
          "image2": require('../assets/komik8/komik8-2.jpg'),
          "image3": require('../assets/komik8/komik8-3.jpg'),
          "image4": require('../assets/komik8/komik8-4.jpg'),
          "image5": require('../assets/komik8/komik8-5.jpg'),
          "image6": require('../assets/komik8/komik8-6.jpg'),
          "image7": require('../assets/komik8/komik8-7.jpg'),
          "image8": require('../assets/komik8/komik8-8.jpg')
        },
        "correctoption": "option1",
        "options": {
          "option1": "Hemodialisis",
          "option2": "Paralisis",
          "option3": "Hemolisis",
          "option4": "Dialisis"
        },
        "pilih": "5",
        "question": "Nama lain cuci darah adalah..."
      },
      "question23": {
        "title": 'CHAPTER 8:',
        "image": {
          "image0": require('../assets/komik8/komik8-0.jpg'),
          "image1": require('../assets/komik8/komik8-1.jpg'),
          "image2": require('../assets/komik8/komik8-2.jpg'),
          "image3": require('../assets/komik8/komik8-3.jpg'),
          "image4": require('../assets/komik8/komik8-4.jpg'),
          "image5": require('../assets/komik8/komik8-5.jpg'),
          "image6": require('../assets/komik8/komik8-6.jpg'),
          "image7": require('../assets/komik8/komik8-7.jpg'),
          "image8": require('../assets/komik8/komik8-8.jpg')
        },
        "correctoption": "option1",
        "options": {
          "option1": "Filtrasi",
          "option2": "Destilasi",
          "option3": "Ekstraksi",
          "option4": "Maserasi"
        },
        "pilih": "5",
        "question": "Metode yang digunakan dalam proses cuci darah adalah..."
      },
      "question24": {
        "title": 'CHAPTER 8:',
        "image": {
          "image0": require('../assets/komik8/komik8-0.jpg'),
          "image1": require('../assets/komik8/komik8-1.jpg'),
          "image2": require('../assets/komik8/komik8-2.jpg'),
          "image3": require('../assets/komik8/komik8-3.jpg'),
          "image4": require('../assets/komik8/komik8-4.jpg'),
          "image5": require('../assets/komik8/komik8-5.jpg'),
          "image6": require('../assets/komik8/komik8-6.jpg'),
          "image7": require('../assets/komik8/komik8-7.jpg'),
          "image8": require('../assets/komik8/komik8-8.jpg')
        },
        "correctoption": "option2",
        "options": {
          "option1": "Tekanan uap",
          "option2": "Tekanan osmosis",
          "option3": "Tekanan udara",
          "option4": "Tekanan air"
        },
        "pilih": "5",
        "question": "Tekanan yang digunakan dalam proses cuci darah adalah..."
      },
      "question25": {
        "title": 'CHAPTER 9:',
        "image": {
          "image0": require('../assets/komik9/komik9-0.jpg'),
          "image1": require('../assets/komik9/komik9-1.jpg'),
          "image2": require('../assets/komik9/komik9-2.jpg'),
          "image3": require('../assets/komik9/komik9-3.jpg'),
          "image4": require('../assets/komik9/komik9-4.jpg'),
          "image5": require('../assets/komik9/komik9-5.jpg'),
          "image6": require('../assets/komik9/komik9-6.jpg'),
          "image7": require('../assets/komik9/komik9-7.jpg'),
          "image8": require('../assets/komik9/komik9-8.jpg')
        },
        "correctoption": "option3",
        "options": {
          "option1": "Beberapa oksigen yang bersatu",
          "option2": "Beberapa oksigen yang menyublim",
          "option3": "Air yang membeku",
          "option4": "Air yang menyublim "
        },
        "pilih": "5",
        "question": "Salju adalah..."
      },
      "question26": {
        "title": 'CHAPTER 9:',
        "image": {
          "image0": require('../assets/komik9/komik9-0.jpg'),
          "image1": require('../assets/komik9/komik9-1.jpg'),
          "image2": require('../assets/komik9/komik9-2.jpg'),
          "image3": require('../assets/komik9/komik9-3.jpg'),
          "image4": require('../assets/komik9/komik9-4.jpg'),
          "image5": require('../assets/komik9/komik9-5.jpg'),
          "image6": require('../assets/komik9/komik9-6.jpg'),
          "image7": require('../assets/komik9/komik9-7.jpg'),
          "image8": require('../assets/komik9/komik9-8.jpg')
        },
        "correctoption": "option1",
        "options": {
          "option1": "18 g/mol",
          "option2": "16 g/mol",
          "option3": "17 g/mol",
          "option4": "20 g/mol"
        },
        "pilih": "5",
        "question": "Massa molar dari salju adalah..."
      },
      "question27": {
        "title": 'CHAPTER 9:',
        "image": {
          "image0": require('../assets/komik9/komik9-0.jpg'),
          "image1": require('../assets/komik9/komik9-1.jpg'),
          "image2": require('../assets/komik9/komik9-2.jpg'),
          "image3": require('../assets/komik9/komik9-3.jpg'),
          "image4": require('../assets/komik9/komik9-4.jpg'),
          "image5": require('../assets/komik9/komik9-5.jpg'),
          "image6": require('../assets/komik9/komik9-6.jpg'),
          "image7": require('../assets/komik9/komik9-7.jpg'),
          "image8": require('../assets/komik9/komik9-8.jpg')
        },
        "correctoption": "option2",
        "options": {
          "option1": "Disiram minyak",
          "option2": "Ditaburi garam",
          "option3": "Dilapisi plastik",
          "option4": "Ditaburi gula"
        },
        "pilih": "5",
        "question": "Cara yang dapat dilakukan supaya jalanan tidak licin akibat adanya salju adalah..."
      },
      "question28": {
        "title": 'CHAPTER 10:',
        "image": {
          "image0": require('../assets/komik10/komik10-0.jpg'),
          "image1": require('../assets/komik10/komik10-1.jpg'),
          "image2": require('../assets/komik10/komik10-2.jpg'),
          "image3": require('../assets/komik10/komik10-3.jpg'),
          "image4": require('../assets/komik10/komik10-4.jpg'),
          "image5": require('../assets/komik10/komik10-5.jpg'),
          "image6": require('../assets/komik10/komik10-6.jpg'),
          "image7": require('../assets/komik10/komik10-7.jpg'),
          "image8": require('../assets/komik10/komik10-8.jpg')
        },
        "correctoption": "option1",
        "options": {
          "option1": "Ditutupi dengan kain basah",
          "option2": "Disiram dengan air",
          "option3": "Ditutupi dengan kain kering",
          "option4": "Memadamkan listrik"
        },
        "pilih": "5",
        "question": "Langkah awal yang dapat dilakukan untuk memadamkan api adalah..."
      },
      "question29": {
        "title": 'CHAPTER 10:',
        "image": {
          "image0": require('../assets/komik10/komik10-0.jpg'),
          "image1": require('../assets/komik10/komik10-1.jpg'),
          "image2": require('../assets/komik10/komik10-2.jpg'),
          "image3": require('../assets/komik10/komik10-3.jpg'),
          "image4": require('../assets/komik10/komik10-4.jpg'),
          "image5": require('../assets/komik10/komik10-5.jpg'),
          "image6": require('../assets/komik10/komik10-6.jpg'),
          "image7": require('../assets/komik10/komik10-7.jpg'),
          "image8": require('../assets/komik10/komik10-8.jpg')
        },
        "correctoption": "option4",
        "options": {
          "option1": "Plastik, cahaya, cermin",
          "option2": "Alumunium foil, plastik, cahaya",
          "option3": "Kayu, nitrogen, minyak",
          "option4": "Bahan bakar, oksigen, dan panas"
        },
        "pilih": "5",
        "question": "Hal-hal di bawah ini yang dapat menimbulkan terjadinya api adalah..."
      },
      "question30": {
        "title": 'CHAPTER 10:',
        "image": {
          "image0": require('../assets/komik10/komik10-0.jpg'),
          "image1": require('../assets/komik10/komik10-1.jpg'),
          "image2": require('../assets/komik10/komik10-2.jpg'),
          "image3": require('../assets/komik10/komik10-3.jpg'),
          "image4": require('../assets/komik10/komik10-4.jpg'),
          "image5": require('../assets/komik10/komik10-5.jpg'),
          "image6": require('../assets/komik10/komik10-6.jpg'),
          "image7": require('../assets/komik10/komik10-7.jpg'),
          "image8": require('../assets/komik10/komik10-8.jpg')
        },
        "correctoption": "option1",
        "options": {
          "option1": "Propana + oksigen → karbon dioksida + uap air + panas",
          "option2": "Propana + nitrogen → karbon dioksida + embun + panas",
          "option3": "Propana + carbon → karbon monoksida + uap air + panas",
          "option4": "Propana + hidrogen → karbon dioksida + embun + panas"
        },
        "pilih": "5",
        "question": "Reaksi pembakaran pada gas propana di bawah ini yang benar adalah..."
      }
    }
  }
}
export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.qno = 0
    this.score = 0

    const jdata = jsonData.quiz.quiz1
    arrnew = Object.keys(jdata).map(function (k) { return jdata[k] });
    this.state = {
      question: arrnew[this.qno].question,
      options: arrnew[this.qno].options,
      correctoption: arrnew[this.qno].correctoption,
      images: arrnew[this.qno].image,
      title: arrnew[this.qno].title,
      pilih: "",
      backButton: 'Back',
      nextButton: 'Next',
      titles: "Chapter 1",
      countCheck: 0,
      benar: 0,
      salah: 0,
      kosong: 0,
      check: null,
      click: false,
      jawaban: ["", "", "", "", "", "", "", "", "", "","", "", "", "", "", "", "", "", "", "","", "", "", "", "", "", "", "", "", ""],
    }

  }

  prev() {
    if (this.qno > 0) {
      this.qno--
      if (this.state.jawaban[this.qno] == "") {
        this.setState({ check: null })
      } else {
        this.setState({ check: Number(this.state.jawaban[this.qno].split("option")[1]) - 1 })
      }
      this.setState({ 
        question: arrnew[this.qno].question, 
        options: arrnew[this.qno].options, 
        correctoption: arrnew[this.qno].correctoption, 
        images: arrnew[this.qno].image,
        title: arrnew[this.qno].title })
    }
    // if(this.qno == 3 || this.qno == 6 || this.qno == 9 || this.qno == 12 || this.qno == 15 || this.qno == 18 || this.qno == 21 || this.qno == 24 || this.qno == 27){
    //   this.refs._scrollView.scrollTo({x: 5, y: 5, animated: false});
    // }
  }
  
  next() {
    if (this.qno < 29 ) {
      this.qno++
      if (this.state.jawaban[this.qno] == "") {
        this.setState({ check: null })
      } else {
        this.setState({ check: Number(this.state.jawaban[this.qno].split("option")[1]) - 1 })
      }

      this.setState({ 
        countCheck: 0, 
        question: arrnew[this.qno].question, 
        options: arrnew[this.qno].options, 
        correctoption: arrnew[this.qno].correctoption, 
        images: arrnew[this.qno].image,
        title: arrnew[this.qno].title
      })

      if(this.qno == 3 || this.qno == 6 || this.qno == 9 || this.qno == 12 || this.qno == 15 || this.qno == 18 || this.qno == 21 || this.qno == 24 || this.qno == 27){
        this.refs._scrollView.scrollTo({x: 5, y: 5, animated: false});
      }

    } else if (this.qno == 28){
      this.setState({
        nextButton: 'Selesai'
      });
    } else if (this.qno == 29){
      this.qno++
      this.generateScore()
    }
  }

  _answer(ans, check) {
    let jawaban = this.state.jawaban;
    if (jawaban[this.qno] != ans) jawaban.splice(this.qno, 1, ans)
    this.setState({ jawaban, check })
    // console.warn(this.state.countCheck)


    // if (status == true) {
      // const count = this.state.countCheck + 1
      // this.setState({ countCheck: count })
      // if (ans == this.state.correctoption) {
      //   this.score += 1
      // }
      // console.warn(status, ans)
    // } else {
      // const count = this.state.countCheck - 1
      // this.setState({ countCheck: count })
      // if (ans != this.state.correctoption) {
      //   this.score -= 1
      // }
      // console.warn(status, ans, count)
    // }
    // console.warn(this.state.countCheck)
  }

  generateScore() {
    let score = this.score
    let nilai = this.state.jawaban.map(function (value, index) {
      if (value == arrnew[index].correctoption) {
        return score+1
      } else if(value == ""){
        return score
      } else {
        return score-1
      }
    })

    var counts = {};
    for (var i = 0; i < nilai.length; i++) {
      var num = nilai[i];
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    this.setState({nilai, benar: counts[1] == undefined ? 0 : counts[1], salah: counts[-1] == undefined ? 0 : counts[-1], kosong: counts[0] == undefined ? 0 : counts[0] })
  }

  render() {
    let _this = this
    const currentOptions = this.state.options
    const currentImages = this.state.images
    const options = Object.keys(currentOptions).map(function (k, index) {
      return (<View key={index} style={{flex:1, flexGrow: 1, margin: 10, flexShrink: 1 }}>
        <Animbutton countCheck={_this.state.countCheck} status={_this.state.click} onColor={_this.state.check == index ? "#00B9FF" : "transparent"} onColorText={_this.state.check == index ? "white" : "#696969"} effect={"rubberBand"} _onPress={() => _this._answer(k, index)} option={_this.qno == 17 ? 'gambar' : null} text={currentOptions[k]} />
      </View>)
    });
  
    const images = Object.keys(currentImages).map(function (k, index) {
      return (
        <Image 
          key={index} 
          style={
            currentImages[k] == 1 || 
            currentImages[k] == 10 ||
            currentImages[k] == 19 ||
            currentImages[k] == 28 || 
            currentImages[k] == 37 || 
            currentImages[k] == 46 || 
            currentImages[k] == 59 || 
            currentImages[k] == 68 || 
            currentImages[k] == 77 || 
            currentImages[k] == 86 || 
            currentImages[k] == 95 ? 
            {resizeMode:'contain', alignSelf: "center", width: 400, height: 80} : styles.image} 
            source={currentImages[k]} /> )
    });

    return (
      <ScrollView ref='_scrollView'>
        <View>
          {this.qno < 30 ?
          <View style={{ flex: 1}}>
            <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20, color: '#000', marginTop: 10, marginBottom: -20}}> {this.state.title} </Text>
            
            {images}

            <View style={{marginLeft: 16}}>
              <Text style={styles.welcome}>
                {this.state.question}
              </Text>
            </View>
            <View>
              {options}
            </View>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
                {this.qno == 0 ? (null) : <TouchableOpacity
                    style = {{
                    borderRadius: 15,
                    padding: 10,
                    marginLeft: 5,
                    marginRight: 10,
                    marginBottom: 20,
                    alignSelf: 'center',
                    width: Dimensions.get("window").width/3,
                    backgroundColor: '#00B9FF'
                    }}
                    onPress={() => this.prev()}
                >
                    <Text style = {{fontSize: 15, color: '#FFFFFF', textAlign: "center", fontWeight: "bold"}}>{this.state.backButton}</Text>
                </TouchableOpacity>}
                
                <TouchableOpacity
                    style = {{
                    borderRadius: 15,
                    padding: 10,
                    marginRight: 10,
                    marginBottom: 20,
                    alignSelf: 'center',
                    width: Dimensions.get("window").width/3,
                    backgroundColor: '#00B9FF'
                    }}
                    onPress={() => this.next()}
                >
                    <Text style = {{fontSize: 15, color: '#FFFFFF', textAlign: "center", fontWeight: "bold"}}>{this.state.nextButton}</Text>
                </TouchableOpacity>
            </View>
          </View> : 
          <View style={{flex: 1, backgroundColor: '#44C7FA', justifyContent: 'center'}}>
            <Text style={{textAlign: "center", marginTop: 30, fontWeight: 'bold', fontSize: 30, color: '#FFFFFF', marginBottom: 20}}> Score </Text>
            <View style={{justifyContent: 'center', alignItems: 'center', alignContent: 'center', alignSelf: 'center', borderWidth: 7, borderColor: '#FFFFFF', width: 320, height: 250, borderRadius: 10}}>
              <Text style={{textAlign: "center", fontWeight: 'bold', fontSize: 27, color: '#FFFFFF'}}>
                  Benar : {this.state.benar}
              </Text>
              <Text style={{textAlign: "center", marginTop: 30, fontWeight: 'bold', fontSize: 27, color: '#FFFFFF'}}>
                  Salah : {this.state.salah}
              </Text> 
              <Text style={{textAlign: "center", marginTop: 30, fontWeight: 'bold', fontSize: 27, color: '#FFFFFF'}}>
                  Tidak dijawab : {this.state.kosong}
              </Text>
            </View>
          <View style={{flexDirection: 'column'}}>
              <TouchableOpacity
                  style = {{
                  borderRadius: 15,
                  padding: 10,
                  alignSelf: "center",
                  marginTop: 40,
                  width: Dimensions.get("window").width/2,
                  backgroundColor: '#fff'
                  }}
                  onPress={() => this.props.navigation.navigate('Score', {nilai: this.state.nilai} )}
              >
                  <Text style = {{fontSize: 15, color: '#0091EA', textAlign: "center", fontWeight: "bold"}}> Score Report </Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style = {{
                  borderRadius: 15,
                  padding: 10,
                  alignSelf: 'center',
                  marginTop: 20,
                  width: Dimensions.get("window").width/2,
                  backgroundColor: '#0091EA'
                  }}
                  onPress={() => this.props.navigation.navigate('WelcomeScreen')}
              >
                  <Text style = {{fontSize: 15, color: '#FFFFFF', textAlign: "center", fontWeight: "bold"}}> Menu Utama </Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style = {{
                  borderRadius: 15,
                  padding: 10,
                  alignSelf: 'center',
                  marginTop: 20,
                  width: Dimensions.get("window").width/2,
                  backgroundColor: '#F61415'
                  }}
                  onPress={() => BackHandler.exitApp()}
              >
                  <Text style = {{fontSize: 15, color: '#FFFFFF', textAlign: "center", fontWeight: "bold"}}> Keluar </Text>
              </TouchableOpacity>
          </View>
          <ImageBackground source={require("../assets/unyil.png")} style={{width: 100, height: 150, alignSelf: "flex-end", bottom: 0}}/>
          </View>
         }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    resizeMode:'contain', 
    alignSelf: "center", 
    width: 340, 
    height: 240
  },
  welcome: {
    fontSize: 16,
    fontWeight: 'bold', 
    marginBottom: 10, 
    color: '#000000',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});