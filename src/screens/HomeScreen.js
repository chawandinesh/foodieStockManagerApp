import React from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  StyleSheet,
  BackHandler,
  Modal,
  Alert,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  Divider,
  Rating,
  AirbnbRating,
  Overlay,
  Button,
} from 'react-native-elements';
import {FoodieStockManagerContext} from '../screens/context'

const {height, width} = Dimensions.get('window');
export function HomeScreen(props) {
  const {state,setState} = React.useContext(FoodieStockManagerContext)
  const flatListRef = React.useRef();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [visible, setVisible] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerShown: false,
      headerTitleAlign: 'center',
      headerTitle: 'Home',
    });
  }, [props.navigation]);

  React.useEffect(() => {
    props.navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
      Alert.alert(
        'Exit',
        'Are You sure want to Exit?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => {
            setState({...state,"welcome": false})
            BackHandler.exitApp()}
          }
        ],
        {cancelable: false},
      );
    });
  }, []);

  return (
    <ImageBackground
      source={require('../assets/bg1.jpg')}
      style={{width: width, height: height}}>
      <View
        style={{
          width: width,
          height: height,
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <View
          style={{
            width: width,
            height: height * 0.5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#825c33',
              width: width * 0.7,
              height: height * 0.2,
              borderRadius: height * 0.05,
              borderBottomWidth: height * 0.02,
              borderTopWidth: height * 0.02,
              borderColor: '#eb872f',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: height * 0.045,
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#fff',
              }}>
              Foodie Stock Manager
            </Text>
          </View>
        </View>
        <View
          style={{
            width: width,
            height: height * 0.5,
            alignItems: 'center',
            // justifyContent:'space-around'
            // justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Categories')}>
            <ImageBackground
              // imageStyle={{opacity: 0.8}}
              style={{
                width: width * 0.8,
                height: height * 0.1,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: height * 0.02,
              }}
              source={require('../assets/textbg1.png')}>
              <Text style={{fontSize: height * 0.04, fontWeight: 'bold'}}>
                Add Detail
              </Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('AllDetails')}>
            <ImageBackground
              // imageStyle={{opacity: 0.8}}
              style={{
                width: width * 0.8,
                height: height * 0.1,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: height * 0.02,
              }}
              source={require('../assets/textbg1.png')}>
              <Text style={{fontSize: height * 0.04, fontWeight: 'bold'}}>
                All Detail
              </Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleOverlay}>
            <ImageBackground
              style={{
                width: width * 0.8,
                height: height * 0.1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              source={require('../assets/textbg1.png')}>
              <Text style={{fontSize: height * 0.04, fontWeight: 'bold'}}>
                About Us
              </Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={{position: 'absolute', bottom: height * 0.05, right: 0}}>
            <ImageBackground
              source={require('../assets/rateusbg.png')}
              style={{
                height: height * 0.08,
                width: width * 0.5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  paddingTop: height * 0.02,
                  fontSize: height * 0.03,
                }}>
                Rate Us
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        visible={visible}
        // onBackdropPress={toggleOverlay}
        animationType="fade"
        transparent={true}>
        <View
          style={{
            height: height,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: height * 0.7,
              width: width * 0.9,
              backgroundColor: '#fff',
              backgroundColor: 'rgba(0,0,0,0.9)',

              borderTopRightRadius: height * 0.05,
              borderBottomLeftRadius: height * 0.05,
              padding: height * 0.02,
              alignItems: 'center',
              justifyContent: 'space-between',
              alignSelf: 'center',
              alignItems: 'center',
              marginTop: 22,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: height * 0.04,
                fontWeight: 'bold',
                color: '#eb872f',
              }}>
              About Us
            </Text>

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                // height: height * 0.9,
              }}>
              <View
                style={{
                  // height: height * 0.7,
                  width: width * 0.9,
                  // backgroundColor: 'rgba(0,0,0,0.7)',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    paddingHorizontal: height * 0.02,
                  }}>
                  <Text
                    style={{
                      fontSize: height * 0.03,
                      fontWeight: 'bold',
                      color: '#ebe459',
                      textAlign: 'center',
                    }}>
                    This is simple, amazing and ads free app for functions.
                  </Text>
                  <Text
                    style={{
                      fontSize: height * 0.03,
                      fontWeight: 'bold',
                      color: '#fff',
                      textAlign: 'center',
                      paddingTop: height * 0.04,
                    }}>
                    In this app, there are various types of Healthy Food
                    categories Proiein, Fats, Vitamins, Minerals and fiber.
                  </Text>
                  <Text
                    style={{
                      fontSize: height * 0.03,
                      fontWeight: 'bold',
                      color: '#fff',
                      textAlign: 'center',
                      paddingTop: height * 0.05,
                    }}>
                    Also in this app, you can manage your function details.
                    {'\n'}
                  </Text>
                  <Text
                    style={{
                      fontSize: height * 0.03,
                      fontWeight: 'bold',
                      color: '#f66',
                      textAlign: 'center',
                      paddingTop: height * 0.01,
                    }}>
                    Enjoy the App
                  </Text>
                </View>
              </View>
            </View>
            <Text
              onPress={() => setVisible(false)}
              style={{
                textAlign: 'center',
                padding: height * 0.005,
                backgroundColor: 'red',
                width: width * 0.5,
                alignSelf: 'center',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: height * 0.03,
              }}>
              {' '}
              Close{' '}
            </Text>
          </View>
        </View>
      </Modal>
      {/* </View> */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          console.log('closed');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              style={{
                width: width * 0.2,
                height: width * 0.2,
                margin: height * 0.01,
              }}
              resizeMode="stretch"
              source={require('../assets/bg2.jpg')}
            />
            <Text
              style={[{...styles.modalText, fontSize: 20, fontWeight: 'bold'}]}>
              Enjoying Foodie Stock Manager?
            </Text>
            <Text style={{fontSize: 15}}>Tap a star to rate it on the</Text>
            <Text style={{fontSize: 15}}>App Store.</Text>
            <Divider
              style={{backgroundColor: 'black', height: 1, width: width * 0.8}}
            />

            <View style={{paddingVertical: 10}}>
              <AirbnbRating showRating={false} />
            </View>
            <Divider
              style={{backgroundColor: 'black', height: 1, width: width * 0.8}}
            />

            {/* <View style={{borderWidth:1,width: width * 0.9, borderColor:'gray'}}></View> */}
            <TouchableOpacity
              // style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text
                style={[
                  {
                    ...styles.textStyle,
                    color: '#000',
                    fontSize: height * 0.024,
                    paddingTop: height * 0.012,
                  },
                ]}>
                Not Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  // rest of the styles
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    // change the color property for better output
    color: '#fff',
    textAlign: 'center',
    marginTop: 35,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: width * 0.9,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
