import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {SwipeListView} from 'react-native-swipe-list-view';
import {useIsFocused} from '@react-navigation/native';
import {FoodieStockManagerContext} from './context';
const {height, width} = Dimensions.get('window');
export function Details(props) {
  const {state, setState} = React.useContext(FoodieStockManagerContext);
  const {dataProp} = props.route.params;

  const isFocused = useIsFocused();
  const getInitialData = async () => {};
  React.useEffect(() => {
    getInitialData();
  }, [props.navigation, isFocused]);
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#fcba03',
      },
    });
  }, [props.navigation]);

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: '#ebc144',
          borderBottomRightRadius: height * 0.05,
          borderTopLeftRadius: height * 0.05,
          alignSelf: 'center',
          marginBottom: height * 0.015,
          marginTop: height * 0.015,
          width: width * 0.85,
          height: height * 0.2,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#000',
            borderBottomRightRadius: height * 0.04,
            borderTopLeftRadius: height * 0.04,
            alignItems: 'center',
            justifyContent: 'center',
            width: width * 0.8,
            height: height * 0.18,
          }}>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() =>
              props.navigation.navigate('Form', {indexProp: index, data: dataProp})
            }
            style={{
              backgroundColor: '#fff',
              borderBottomRightRadius: height * 0.04,
              borderTopLeftRadius: height * 0.04,
              width: width * 0.75,
              height: height * 0.16,
              //   justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: width * 0.25,
                height: width * 0.25,
                backgroundColor: '#ffd',
                borderWidth: 1,
                borderRadius: height * 0.3,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {item.image ? (
                <Image
                  style={{
                    width: width * 0.25,
                    height: width * 0.25,
                    borderRadius: height * 0.3,
                  }}
                  source={{uri: item.image}}
                />
              ) : (
                <Text>No Image</Text>
              )}
            </View>
            <View>
              <View
                style={{
                  width: width * 0.5,
                  borderRadius: height * 0.03,
                  borderWidth: 1,
                  borderBottomWidth: 2,
                  height: height * 0.05,
                  backgroundColor: '#c2fff1',
                  marginBottom: height * 0.01,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>Name: {item.food}</Text>
              </View>
              <View
                style={{
                  width: width * 0.5,
                  height: height * 0.05,
                  borderWidth: 1,
                  borderBottomWidth: 2,
                  backgroundColor: '#c2fff1',
                  borderRadius: height * 0.05,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: height * 0.01,
                }}>
                <Text>Date: {item.DateOfFoodPlan}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <ImageBackground
      source={require('../assets/bg4.jpg')}
      style={{width: width, height: height}}>
      <View
        style={{
          width: width,
          height: height,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Form', {data: dataProp})}
          style={{height: height * 0.1}}>
          <Icon
            name="plus"
            type="font-awesome"
            raised
            reverse
            activeOpacity={0.3}
          />
        </TouchableOpacity>
        <View
          style={{
            width: width * 0.95,
            height: height * 0.9,
            backgroundColor: 'rgba(0,0,0,0.8)',
          }}>
          {state[dataProp].length ? (
            <View style={{height: height * 0.85}}>
              <SwipeListView
                data={state[dataProp]}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                renderHiddenItem={(data, rowMap) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setState({
                          ...state,
                          [dataProp]: state[dataProp].filter(
                            (e, idx) => idx !== data.index,
                          ),
                        });
                        rowMap[data.index].closeRow();
                      }}
                      style={{
                        height: height * 0.2,
                        marginTop: height * 0.015,
                        borderTopRightRadius: height * 0.05,
                        borderBottomRightRadius: height * 0.05,
                        borderTopLeftRadius: height * 0.05,
                        alignSelf: 'center',
                        width: width * 0.8,
                        backgroundColor: 'darkred',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          paddingRight: width * 0.05,
                          fontSize: height * 0.03,
                          fontWeight: 'bold',
                          color: '#fff',
                        }}>
                        Delete
                      </Text>
                    </TouchableOpacity>
                  );
                }}
                disableRightSwipe
                rightOpenValue={-105}
              />
            </View>
          ) : (
            <View
              style={{
                width: width * 0.95,
                height: height * 0.9,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: height * 0.04,
                  textAlign: 'center',
                }}>
                No Data found, Please Click on + to add data
              </Text>
            </View>
          )}
        </View>
      </View>
    </ImageBackground>
  );
}
