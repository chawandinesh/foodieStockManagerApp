import Carousel from 'react-native-snap-carousel';
 
export class MyCarousel extends Component {
 
    _renderItem = ({item, index}) => {
        return (
            <View >
                <Text>{ item }</Text>
            </View>
        );
    }
 

    render () {
        return (
            <Carousel
            //   ref={(c) => { this._carousel = c; }}
              data={[1,2,3,4]}
              renderItem={this._renderItem}
              sliderWidth={300}
              itemWidth={240}
            />
        );
    }
}