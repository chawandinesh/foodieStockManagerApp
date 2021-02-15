import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {SwipeListView} from 'react-native-swipe-list-view';
import ImagePicker from 'react-native-image-crop-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {FoodieStockManagerContext} from './context';
const {height, width} = Dimensions.get('window');
export function Form(props) {
  const {state, setState} = React.useContext(FoodieStockManagerContext);
  const {data, indexProp} = props.route.params;
  const [formState, setFormState] = React.useState({
    food: '',
    foodDetails: '',
    DateOfFoodPlan: '',
    mealQuantity: '',
    details: '',
    image: '',
  });
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitleAlign: 'center',
      headerTitle:
        indexProp === 0 || indexProp ? 'Edit Details' : 'Add Details',
      headerStyle: {
        backgroundColor: '#fcba03',
      },
    });
  }, [props.navigation]);

  React.useEffect(() => {
    if (indexProp === 0 || indexProp) {
      setFormState(state[data][indexProp]);
    }
  }, []);

  const pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        setFormState({...formState, image: image.path});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = () => {
    if (
      formState.DateOfFoodPlan.length &&
      formState.details.length &&
      formState.food.length &&
      formState.foodDetails.length &&
      formState.mealQuantity.length
    ) {
      if (indexProp === 0 || indexProp) {
        [...state[data].splice(indexProp, 1, formState)];
        setState(state);
      } else {
        setState({...state, [data]: [...state[data], formState]});
      }
      props.navigation.goBack();
    } else {
      alert('please fill the data');
    }
    // console.log(formState, 'formstate');
  };

  return (
    <KeyboardAwareScrollView style={{height: "100%"}}>
      <ImageBackground
        resizeMode="stretch"
        //   blurRadius={0.4}
        source={require('../assets/bg6.jpg')}
        style={{width: width, height: '100%'}}>
        <View
          style={{
            flex: 1,
            // width: width,
            height: '100%',
            alignItems: 'center',
          }}>
            {/*
          <TouchableOpacity
            onPress={() => pickImage()}
            style={{
              width: width * 0.3,
              borderWidth: 5,
              height: height * 0.15,
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {formState.image ? (
              <Image
                source={{uri: formState.image}}
                resizeMode="stretch"
                style={{height: width * 0.3, width: width * 0.3}}
              />
            ) : (
              <Icon name="image" type="entypo" size={height * 0.05} />
            )}
          </TouchableOpacity>
*/}
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              width: width * 0.9,
              height: height,
              alignSelf: 'center',
              alignItems: 'center',
            }}>
         
            <View
              style={{
                height: height * 0.06,
                width: width * 0.85,
                backgroundColor: '#fff',
                borderColor: 'red',
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 6,
                marginTop: height * 0.03,
                borderRadius: height * 0.03,
              }}>
              <Icon
                name="food"
                color="#f0c435"
                size={height * 0.04}
                type="material-community"
              />
              <TextInput
                placeholder="Food"
                value={formState.food}
                onChangeText={(text) =>
                  setFormState({...formState, food: text})
                }
              />
            </View>
            <View
              style={{
                height: height * 0.06,
                width: width * 0.85,
                backgroundColor: '#fff',
                borderColor: 'red',
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 6,
                marginTop: height * 0.03,
                borderRadius: height * 0.03,
              }}>
              <Icon
                name="food"
                color="#f0c435"
                size={height * 0.04}
                type="material-community"
              />
              <TextInput
                placeholder="Food Details"
                value={formState.foodDetails}
                onChangeText={(text) =>
                  setFormState({...formState, foodDetails: text})
                }
              />
            </View>
            <View
              style={{
                height: height * 0.06,
                width: width * 0.85,
                backgroundColor: '#fff',
                borderColor: 'red',
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 6,
                marginTop: height * 0.03,
                borderRadius: height * 0.03,
              }}>
              <Icon
                name="food"
                color="#f0c435"
                size={height * 0.04}
                type="material-community"
              />
              <TextInput
                placeholder="Date of Food Plan"
                value={formState.DateOfFoodPlan}
                onChangeText={(text) =>
                  setFormState({...formState, DateOfFoodPlan: text})
                }
              />
            </View>
            <View
              style={{
                height: height * 0.06,
                width: width * 0.85,
                backgroundColor: '#fff',
                borderColor: 'red',
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 6,
                marginTop: height * 0.03,
                borderRadius: height * 0.03,
              }}>
              <Icon
                name="food"
                color="#f0c435"
                size={height * 0.04}
                type="material-community"
              />
              <TextInput
                placeholder="Meal Qty."
                value={formState.mealQuantity}
                onChangeText={(text) =>
                  setFormState({...formState, mealQuantity: text})
                }
              />
            </View>
            <View
              style={{
                height: height * 0.15,
                width: width * 0.85,
                backgroundColor: '#fff',
                borderColor: 'red',
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 6,
                marginTop: height * 0.03,
                borderRadius: height * 0.03,
              }}>
              <Icon
                name="food"
                color="#f0c435"
                size={height * 0.04}
                type="material-community"
              />
              <TextInput
                placeholder="Enter Details..."
                value={formState.details}
                onChangeText={(text) =>
                  setFormState({...formState, details: text})
                }
                multiline
                numberOfLines={4}
              />
            </View>

            <TouchableOpacity
            onPress={() => pickImage()}
            style={{
              width: width * 0.3,
              marginTop: height * 0.05,
              borderWidth: 5,
              height: height * 0.15,
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {formState.image ? (
              <Image
                source={{uri: formState.image}}
                resizeMode="stretch"
                style={{height: width * 0.3, width: width * 0.3}}
              />
            ) : (
              <Icon name="image" type="entypo" size={height * 0.05} />
            )}
          </TouchableOpacity>

            <View
              style={{
                height: height * 0.07,
                alignItems: 'center',
                justifyContent: 'center',
                width: width * 0.5,
                backgroundColor: '#f0c435',
                borderColor: 'red',
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 6,
                marginTop: height * 0.03,
                borderRadius: height * 0.03,
              }}>
              <TouchableOpacity
                onPress={handleSubmit}
                style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text
                  style={{
                    fontSize: height * 0.04,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  {' '}
                  Save{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
}
