import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const {height, width} = Dimensions.get('window');
export function Categories(props) {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#fcba03',
      },
      //   headerTintStyle: {
      //       fontSize: height * 0.04
      //   }
    });
  }, [props.navigation]);

  const renderItem = ({item, index}) => (
    <View
      style={{
        width: width * 0.9,
        height: height * 0.15,
        marginTop: height * 0.02,
        borderTopLeftRadius: width * 0.5,
        borderBottomLeftRadius: width * 0.5,
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255,1)',
        shadowColor: '#000',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
      }}>
      <View
        style={{
          width: width * 0.87,
          height: height * 0.13,
          backgroundColor: '#f56',
          borderTopLeftRadius: width * 0.1,
          borderBottomLeftRadius: width * 0.1,
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Details', {dataProp: item})}
          style={{
            width: width * 0.84,
            alignItems: 'center',
            justifyContent: 'center',
            height: height * 0.1,
            backgroundColor: '#0f6',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: height * 0.04,
            }}>
            {item}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <ImageBackground
      blurRadius={0.4}
      source={require('../assets/bg2.jpg')}
      style={{width: width, height: height}}>
      <View
        style={{
          width: width,
          height: height * 0.9,
          justifyContent: 'flex-end',
          //   backgroundColor: 'rgba(0,0,0,0.6)',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            width: width,
            backgroundColor: '#000',
            textAlign: 'center',
            color: '#fff',
            paddingBottom: 10,
            textDecorationLine: 'underline',
            fontSize: height * 0.04,
          }}>
          {' '}
          Choose Category
        </Text>

        <View style={{height: height * 0.8}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={[
              'Protein',
              'Fats',
              'Vitamins',
              'Minerals',
              'Fiber and Water',
            ]}
            style={{height: height}}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
