import React, { useEffect } from "react"
import { View , 
  Text , 
  BackHandler, 
  Alert, 
  TouchableWithoutFeedback,
  Image,
  TextInput,
  StatusBar,} from "react-native"

const Home = ({navigation}) => {
    
    useEffect(() => {

        // const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
        //   Alert.alert("Yakin dek?", "Afa kamu yakin mau keluar di luar?", [
        //     {
        //       text: "Cancel",
        //       onPress: () => false
        //     },
        //     { text: "YES", onPress: () => BackHandler.exitApp() }
        //   ]);
        //   return true;
        // });
        
        // return () => backHandler.remove();
      }, [])

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 80}}>
            <StatusBar backgroundColor="#000" />
            <Image source={require('../asset/saber-chibi.png')} style={{ width: 150 , height: 150 , marginBottom: 10 }} />
            <Text style={{ fontSize: 24 , fontWeight: '600' , marginBottom: 7 }}>ARIE<Text style={{ color: '#40DFEF' }}>AR</Text></Text>
            <Text style={{ fontSize: 17 , fontWeight: '500' , marginBottom: 10 }}>Login</Text>

            <View style={{ flexDirection: 'row' , 
                          alignItems: 'center',
                          backgroundColor: 'white', 
                          width: '90%' ,
                          paddingHorizontal: 10,
                          borderRadius: 10,
                          elevation: 2 ,
                          marginBottom: 10}}>
              <Image source={require('../asset/icon/email-icon.png')} style={{ width: 30 , height: 30 , marginRight: 10 }} />
              <TextInput 
                keyboardType="email-address" 
                placeholder="Masukkan email" 
                style={{ 
                width: '80%',
                borderLeftWidth: 1 ,
                borderColor: '#D9D9D9',
                paddingHorizontal: 10}} />
            </View>

            <View style={{ flexDirection: 'row' , 
                          alignItems: 'center',
                          backgroundColor: 'white', 
                          width: '90%' ,
                          paddingHorizontal: 10,
                          borderRadius: 10,
                          elevation: 2 ,
                          marginBottom: 20}}>
              <Image source={require('../asset/icon/lock-icon.png')} style={{ width: 30 , height: 30 , marginRight: 10 }} />
              <TextInput 
                placeholder="Masukkan password" 
                secureTextEntry={true}
                autoCorrect={false}
                style={{ 
                width: '80%',
                borderLeftWidth: 1 ,
                borderColor: '#D9D9D9',
                paddingHorizontal: 10}} />
            </View>

            <TouchableWithoutFeedback onPress={() => navigation.navigate('LearnBasic', 'Data ini diambil dari navigate')}>
              <View style={{ backgroundColor: '#40DFEF', 
                        width: '90%' , 
                        alignItems: 'center' , 
                        paddingVertical: 14 , 
                        borderRadius: 40  ,
                        marginBottom: 20}}>
                  <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>Login</Text>
              </View>
            </TouchableWithoutFeedback>

            <View style={{ justifyContent: 'space-between' , flexDirection: 'row' , width: '90%' }}>
              <Text>Signup</Text>
              <Text>Forgot Password?</Text>
            </View>
        </View>
    )
}

export default Home