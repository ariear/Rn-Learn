import React, { useEffect, useState } from "react"
import { 
  View ,
  Text , 
  Button , 
  StatusBar , 
  Image , 
  TouchableOpacity,
  Switch,
  TextInput,
  ScrollView,
  StyleSheet,
  FlatList,
  ToastAndroid,
  PermissionsAndroid,
  ActivityIndicator,
  Dimensions,
  Linking,
  RefreshControl,
  ImageBackground,
  TouchableWithoutFeedback} from "react-native"

  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;

const LearnBasic = ({ route, navigation}) => {
  const [color,setColor] = useState('green')
  const [toggle,setToggle] = useState(false)
  const [input, setinput] = useState('')
  const [dimensions] = useState({width, height})
  const [refresh, setRefresh] = useState(false)

  const [data] = useState([
    {
      nama: 'Arie',
      kelas: 'XI-RPL'
    },
    {
      nama: 'Dio',
      kelas: 'XI-RPL'
    },
    {
      nama: 'Hiban',
      kelas: 'XI-RPL'
    },
    {
      nama: 'Fatur',
      kelas: 'XI-RPL'
    },
    {
      nama: 'Ghani',
      kelas: 'XI-RPL'
    },
  ])

  const changeColor = () => {
     return color === 'green' ? setColor('crimson') : setColor('green')
  }

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
  
  const { message } = route.params;

  return (
    <ScrollView 
      refreshControl={<RefreshControl refreshing={refresh} onRefresh={() => setRefresh(false)} /> }
      >
      <StatusBar backgroundColor="#000" />

      <View style={{ padding: 10 }}>

      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <View style={{ backgroundColor: 'lightgreen' , alignSelf: 'baseline' , paddingHorizontal: 20 , paddingVertical: 10, margin: 10, borderRadius: 20 }}>
                <Text>Go Back</Text>
                </View>
      </TouchableWithoutFeedback>
      
      <Text>{message}</Text>

      <View style={{ width: 100 , marginBottom: 10}}>
      <Button title="Click Me" color="#841584" onPress={() => color === 'green' ? setColor('blue') : setColor('green')} />
      </View>

      <TouchableOpacity onPress={() => changeColor()} style={{ backgroundColor: 'lightblue' , alignSelf: 'baseline' , paddingVertical: 10 , paddingHorizontal: 20 , borderRadius: 30 }}>
        <Text style={{ fontSize: 17 , fontWeight: '500' }}>Click Me</Text>
      </TouchableOpacity>
      
      <Text style={{ color: `${color}` , fontSize: 20 , textAlign: 'center', letterSpacing: 2 , marginBottom: 20 }}>Kenalin Banh</Text>

      <View style={{ backgroundColor: 'lightgreen' , height: 100, justifyContent: 'center' , 'alignItems': 'center' , borderRadius: 8 , marginBottom: 20 }}>
          <Text style={{ fontSize: 18 }}>Halo Cuy</Text>
          <Text>{input}</Text>
      </View>

      <TextInput placeholder="Input here" onChangeText={(value) => setinput(value)} style={styles.textinput} />

      <View style={{ alignSelf : 'baseline' , marginBottom: 10}}>
      <Switch value={toggle} onValueChange={() => setToggle(!toggle)} />
      </View>

      <TouchableOpacity onPress={() => requestCameraPermission()} style={{ backgroundColor: 'lightgreen' , alignSelf: 'baseline' , paddingHorizontal: 20, paddingVertical: 10 , borderRadius: 50 }}>
        <Text style={{ fontSize: 17 }}>Allow Camera</Text>
      </TouchableOpacity>

      <View style={{ alignItems: 'center' , paddingVertical: 20 }}>
      <Image source={require('../asset/bronya.jpg')} resizeMode="cover" style={{ width: 250 , height: 400 , borderRadius: 10 , marginBottom: 10}} />
      <Image source={{uri: 'https://wallpaperaccess.com/full/8064379.jpg'}} style={{ width: 250 , height : 400 , borderRadius: 10 }} />
      </View>

      {/* <FlatList
        style={{ marginBottom: 20 }}
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => ToastAndroid.show(`Anda Mencolek ${item.nama}`, ToastAndroid.SHORT)} style={styles.flatlistexamp}>
            <Text style={{ fontSize: 18 }}>{item.nama}</Text>
            <Text>{item.kelas}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index}
      /> */}

      {
        data.map((item, index) => 
          <TouchableOpacity key={index} onPress={() => ToastAndroid.show(`Anda Mencolek ${item.nama}`, ToastAndroid.SHORT)} style={styles.flatlistexamp}>
          <Text style={{ fontSize: 18 }}>{item.nama}</Text>
          <Text>{item.kelas}</Text>
          </TouchableOpacity>  
        ) 
      }

      <TouchableOpacity onPress={() => Linking.openURL('https://reactnative.dev')} style={{ backgroundColor: 'lightblue' , alignSelf: 'baseline' , paddingVertical: 10 , paddingHorizontal: 20 , borderRadius: 30 }}>
        <Text style={{ fontSize: 17 , fontWeight: '500' }}>Click Me</Text>
      </TouchableOpacity>
      </View>
      

      <View style={{ marginBottom: 20 }}>
      <ActivityIndicator size="large" color="blue" />
      </View>

      <ImageBackground source={{ uri : 'https://images.unsplash.com/photo-1653792892136-69825f302a78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' }} style={{ width: dimensions.width , height: dimensions.height , backgroundColor: 'purple' , justifyContent: 'center' , 'alignItems' : 'center' }}>
          <Text style={{ color: 'white', fontSize: 40 , fontWeight: '500' }}>Never Give Up</Text>
      </ImageBackground>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  textinput: {
    borderWidth: 1,
    borderRadius: 8 , 
    paddingHorizontal: 10 , 
    marginRight: 90 , 
    marginBottom: 20
  },
  flatlistexamp: {
    backgroundColor: 'lightblue' , 
    width: 100 , 
    marginBottom: 15 , 
    justifyContent: 'center' , 
    alignItems: 'center' , 
    borderRadius: 8 , 
    paddingVertical: 10
  }
})

export default LearnBasic