import React from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  Image,
  BackHandler,
  Alert,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {FoodieStockManagerContext} from './context';
const {height, width} = Dimensions.get('window');
export function Welcome(props) {
  const flatListRef = React.useRef();
  const {state, setState} = React.useContext(FoodieStockManagerContext);
  // const [countValue, setCountValue] = React.useState(0);
  const [activeIndex, setActiveIndex] = React.useState(0);
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitleAlign: 'center',
      headerTitle: 'Home',
      headerShown: false,
    });
  }, [props.navigation]);

  const listItems = [
    {
      name: 'Protein',
      image: require('../assets/protien.jpg'),
      pngImage: require('../assets/protien1.png'),
    },
    {
      image: require('../assets/fats.jpg'),
      name: 'Fats',
      pngImage: require('../assets/fats1.png'),
    },
    {
      image: require('../assets/vitamins.jpg'),
      name: 'Vitamins',
      pngImage: require('../assets/vitamins1.png'),
    },
    {
      image: require('../assets/minarals.jpg'),
      name: 'Minerals',
      pngImage: require('../assets/minarals1.png'),
    },
    {
      image: require('../assets/fiber2.jpg'),
      name: 'Fiber',
      pngImage: require('../assets/fiber122.png'),
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <ImageBackground
        source={item.image}
        style={{
          height: height,
          width: width,
        }}>
        <View
          style={{
            width,
            height,
            backgroundColor: 'rgba(0,0,0,0.5)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{position: 'absolute'}}>
            <Image
              source={item.pngImage}
              style={{width: width * 0.5, height: width * 0.5}}
              resizeMode="stretch"
            />
          </View>

          <Text
            style={{
              transform: [{rotate: '0deg'}],
              backgroundColor: 'red',
              position: 'absolute',
              left: index % 2 === 1 ? 1 : null,
              right: index % 2 === 0 ? 1 : null,
              bottom: index % 2 === 1 ? height * 0.1 : null,
              top: index % 2 === 0 ? height * 0.1 : null,
              fontWeight: 'bold',
              fontSize: height * 0.05,
              color: '#fff',
            }}>
            {' '}
            {item.name}
          </Text>
          {index === listItems.length - 1 ? (
            <View style={{height: height * 0.8, justifyContent: 'flex-end'}}>
              <Icon
                name="arrow-forward-sharp"
                type="ionicon"
                size={height * 0.05}
                onPress={() => {
                  setState({...state, welcome: false});
                  props.navigation.navigate('Home');
                }}
                raised
              />
            </View>
          ) : null}
        </View>
      </ImageBackground>
    );
  };

  let countValue = 0;
  React.useEffect(() => {
    console.log(countValue, listItems.length);
    if (countValue < listItems.length - 1) {
      setInterval(function () {
        if (countValue <= listItems.length - 1) {
          flatListRef.current.scrollToIndex({
            animated: true,
            index: countValue,
          });
          countValue++;
        }else{
        }
      }, 3000);
    } else {
      countValue = 0
    }
  }, [countValue]);

  const handleScroll = (event) => {
    let yOffset = event.nativeEvent.contentOffset.x;
    let contentHeight = event.nativeEvent.contentSize.width;
    let value = yOffset / (width * 0.9);
    setActiveIndex(Math.floor(value));
  };

  return (
    <View>
      <StatusBar barStyle="light-content" />
      <FlatList
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        data={listItems}
        style={{width: width, alignSelf: 'center'}}
        pagingEnabled
        renderItem={renderItem}
        keyExtractor={(e, idx) => idx.toString()}
        onScroll={handleScroll}
        horizontal
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 20,
          left: 0,
          right: 0,
        }}>
        {listItems.map((e, idx) => {
          return (
            <View
              key={idx}
              style={{
                marginLeft: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {activeIndex === idx ? (
                <View
                  style={{
                    height: height * 0.015,
                    width: height * 0.015,
                    borderRadius: height * 0.1,
                    backgroundColor: '#fff',
                  }}></View>
              ) : (
                // <Text
                //   style={{
                //     fontWeight: 'bold',
                //     fontSize: 20,
                //     textAlign: 'center',
                //     color: 'red',
                //   }}>

                // </Text>
                <View
                  style={{
                    height: height * 0.015,
                    width: height * 0.015,
                    borderRadius: height * 0.1,
                    backgroundColor: 'gray',
                  }}></View>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
}
