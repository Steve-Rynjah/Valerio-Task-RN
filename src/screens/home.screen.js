import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import {Header} from '../components/header.component';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const {width, height} = Dimensions.get('window');

const DUMMY = [
  {
    type: 1,
    img: require('../assets/PP.png'),
    img_1: require('../assets/tick.png'),
    img_2: require('../assets/nav.png'),
    img_3: require('../assets/charge.png'),
    title: 'PlugIn India',
    available: 'Available',
    a: '₹17.5/kwH',
    b: '1.3km',
    description: 'Rohini Community Charging Station, B-5/30, 2nd Floor, Delhi',
    nav: 'Navigate',
    charge: 'Charge Now',
  },
  {
    type: 2,
    img: require('../assets/PP.png'),
    img_1: require('../assets/tick.png'),
    img_2: require('../assets/nav.png'),
    img_3: require('../assets/charge.png'),
    title: 'PlugIn India',
    available: 'Available',
    a: '₹17.5/kwH',
    b: '1.3km',
    description: 'Rohini Community Charging Station, B-5/30, 2nd Floor, Delhi',
    nav: 'Navigate',
    charge: 'Charge Now',
  },
  {
    type: 3,
    img: require('../assets/PP.png'),
    img_1: require('../assets/tick.png'),
    img_2: require('../assets/nav.png'),
    img_3: require('../assets/charge.png'),
    title: 'PlugIn India',
    available: 'Available',
    a: '₹17.5/kwH',
    b: '1.3km',
    description: 'Rohini Community Charging Station, B-5/30, 2nd Floor, Delhi',
    nav: 'Navigate',
    charge: 'Charge Now',
  },
];

const DUMMY_2 = [
  {
    type: 1,
    img_1: require('../assets/tick.png'),
    img_2: require('../assets/nav.png'),
    img_3: require('../assets/charge.png'),
    title: 'PlugIn India',
    available: 'Available',
    a: '₹500',
    b: '7.4kWh',
    description: 'Rohini Community Charging Station, B-5/30, 2nd Floor, Delhi',
    nav: 'Navigate',
    charge: 'Charge Now',
    last: 'Last charged :',
    day: '3 days ago',
    opt: 'Operator :',
    operator: 'veCharge Community',
  },
  {
    type: 2,
    img_1: require('../assets/tick.png'),
    img_2: require('../assets/nav.png'),
    img_3: require('../assets/charge.png'),
    title: 'PlugIn India',
    available: 'Available',
    a: '₹500',
    b: '7.4kWh',
    description: 'Rohini Community Charging Station, B-5/30, 2nd Floor, Delhi',
    nav: 'Navigate',
    charge: 'Charge Now',
    last: 'Last charged :',
    day: '3 days ago',
    opt: 'Operator :',
    operator: 'veCharge Community',
  },
  {
    type: 3,
    img_1: require('../assets/tick.png'),
    img_2: require('../assets/nav.png'),
    img_3: require('../assets/charge.png'),
    title: 'PlugIn India',
    available: 'Available',
    a: '₹500',
    b: '7.4kWh',
    description: 'Rohini Community Charging Station, B-5/30, 2nd Floor, Delhi',
    nav: 'Navigate',
    charge: 'Charge Now',
    last: 'Last charged :',
    day: '3 days ago',
    opt: 'Operator :',
    operator: 'veCharge Community',
  },
];

export const HomeScreen = () => {
  const [active, setActive] = useState(0);
 
  onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != active) {
        setActive(slide);
      }
    }
  };


  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#333" />
      <Header title="Hello Steve," subTitle="Let's charge your vehicle" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={{color: '#FFF', letterSpacing: 2}}>BECOME A HOST</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Text
            style={{
              color: '#000',
              fontSize: 17,
              fontWeight: '600',
              marginLeft: 35,
            }}>
            Charging Points Near Me
          </Text>
          <View style={styles.moreContainer}>
            <TouchableOpacity>
              <Text style={{color: '#000', fontSize: 10}}>More</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <ScrollView
            horizontal
            onScroll={({nativeEvent}) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            contentContainerStyle={{left: width/2 - 217}}
            style={styles.scrollContainer}>
            {DUMMY.map((e, index) => (
              <View key={index}  style={{marginLeft: width/2 - 195, right: width/2 - 200}}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={e.img}
                    style={{
                      width: 50,
                      height: 50,
                      marginTop: 15,
                      marginLeft: 15,
                    }}
                  />
                  <Text
                    style={{
                      color: '#000',
                      marginTop: 15,
                      marginLeft: 15,
                      fontSize: 17,
                    }}>
                    {e.title}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: 85,
                    marginTop: -15,
                  }}>
                  <Image source={e.img_1} style={{width: 15, height: 12}} />
                  <Text
                    style={{
                      color: '#555',
                      fontSize: 12,
                      marginTop: -5,
                      marginLeft: 5,
                    }}>
                    {e.available}
                  </Text>
                  <View
                    style={[
                      styles.moreContainer,
                      {marginLeft: 20, marginTop: -5},
                    ]}>
                    <Text
                      style={{color: '#000', fontSize: 10, fontWeight: 'bold'}}>
                      {e.a}
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.moreContainer,
                      {marginLeft: 5, marginTop: -5},
                    ]}>
                    <Text
                      style={{color: '#000', fontSize: 10, fontWeight: 'bold'}}>
                      {e.b}
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    color: '#555',
                    fontSize: 10,
                    marginTop: 15,
                    marginLeft: 25,
                  }}>
                  {e.description}
                </Text>
                <View
                  style={{flexDirection: 'row', marginLeft: 15, marginTop: 15}}>
                  <View style={styles.ovalButton}>
                    <Image
                      source={e.img_2}
                      style={{width: 15, height: 15}}
                      resizeMode="contain"
                    />
                    <TouchableOpacity>
                      <Text
                        style={{color: '#FFF', marginLeft: 10, fontSize: 11}}>
                        {e.nav}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={[styles.ovalButton, {marginLeft: 25}]}>
                    <Image
                      source={e.img_3}
                      style={{width: 20, height: 20}}
                      resizeMode="contain"
                    />
                    <TouchableOpacity>
                      <Text
                        style={{color: '#FFF', marginLeft: 3, fontSize: 11}}>
                        {e.charge}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
          <View
            style={{flexDirection: 'row', alignSelf: 'center', marginTop: 5}}>
            {DUMMY.map((e, index) => (
              <Text
                key={index}
                style={active == index ? styles.doActive : styles.dot}>
                ●
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.container}>
          <Text
            style={{
              color: '#000',
              fontSize: 17,
              fontWeight: '600',
              marginLeft: 35,
            }}>
            Recent Sessions
          </Text>
          <View style={[styles.moreContainer, {marginLeft: 120}]}>
            <TouchableOpacity>
              <Text style={{color: '#000', fontSize: 10}}>More</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <ScrollView
            horizontal
            // onScroll={({nativeEvent}) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            contentContainerStyle={{left: width/2 - 217}}
            style={styles.scrollContainer}>
            {DUMMY_2.map((e, index) => (
              <View key={index} style={{marginLeft: width/2 - 190, right: width/2 - 200}}>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: '#000',
                      marginTop: 15,
                      marginLeft: 15,
                      fontSize: 17,
                    }}>
                    {e.title}
                  </Text>
                </View>
                <View
                  style={{flexDirection: 'row', marginLeft: 15, marginTop: 10}}>
                  <Image source={e.img_1} style={{width: 15, height: 12}} />
                  <Text
                    style={{
                      color: '#555',
                      fontSize: 12,
                      marginTop: -5,
                      marginLeft: 5,
                    }}>
                    {e.available}
                  </Text>
                  <View
                    style={[
                      styles.moreContainer,
                      {marginLeft: 75, marginTop: -5},
                    ]}>
                    <Text
                      style={{color: '#000', fontSize: 10, fontWeight: 'bold'}}>
                      {e.a}
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.moreContainer,
                      {
                        marginLeft: 5,
                        marginTop: -5,
                        backgroundColor: '#05C07D',
                      },
                    ]}>
                    <Text
                      style={{color: '#000', fontSize: 10, fontWeight: 'bold'}}>
                      {e.b}
                    </Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={{width: width / 2 - 50}}>
                    <Text
                      numberOfLines={2}
                      style={{
                        color: '#555',
                        fontSize: 10,
                        marginTop: 15,
                        marginLeft: 25,
                      }}>
                      {e.description}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'column'}}>
                  <View style={{flexDirection: 'row'}}>
                      <Text style={{
                        color: '#555',
                        fontSize: 10,
                        marginTop: 15,
                        marginLeft: 10,
                      }}>{e.last}</Text>
                      <Text style={{
                        color: '#555',
                        fontSize: 10,
                        marginTop: 15,
                        marginLeft: 5,
                      }}>
                        {e.day}
                      </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                      <Text style={{
                        color: '#555',
                        fontSize: 10,
                        marginLeft: 10,
                      }}>{e.opt}</Text>
                      <Text style={{
                        color: '#555',
                        fontSize: 10,
                        marginLeft: 5,
                      }}>
                        {e.operator}
                      </Text>
                  </View>
                  </View>
                </View>
                <View
                  style={{flexDirection: 'row', marginLeft: 15, marginTop: 15}}>
                  <View style={[styles.ovalButton, {marginTop: -7}]}>
                    <Image
                      source={e.img_2}
                      style={{width: 15, height: 15}}
                      resizeMode="contain"
                    />
                    <TouchableOpacity>
                      <Text
                        style={{color: '#FFF', marginLeft: 10, fontSize: 11}}>
                        {e.nav}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={[styles.ovalButton, {marginLeft: 25, marginTop: -7}]}>
                    <Image
                      source={e.img_3}
                      style={{width: 20, height: 20}}
                      resizeMode="contain"
                    />
                    <TouchableOpacity>
                      <Text
                        style={{color: '#FFF', marginLeft: 3, fontSize: 11}}>
                        {e.charge}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
          {/* <View
            style={{flexDirection: 'row', alignSelf: 'center', marginTop: 5}}>
            {DUMMY_2.map((e, index) => (
              <Text
                key={index}
                style={active == index ? styles.doActive : styles.dot}>
                ●
              </Text>
            ))}
          </View> */}
        </View>
        
        <View style={{marginTop: 25}}/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: width / 2 + 75,
    height: height / 15,
    borderRadius: 5,
    backgroundColor: '#069DFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    alignSelf: 'center',
    elevation: 16,
    shadowColor: '#069DFF',
  },
  ovalButton: {
    width: 120,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#6BC5FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: width,
    height: height / 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  moreContainer: {
    width: 75,
    height: 20,
    backgroundColor: '#CAEAFF',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 50,
  },
  scrollContainer: {
    width: width / 2 + 140,
    height: height / 5 + 20,
    alignSelf: 'center',
    backgroundColor: '#FFF',
    borderRadius: 15,
    marginLeft: -2,
    elevation: 10,
    marginTop: 10,
  },
  doActive: {
    margin: 3,
    color: '#069DFF',
  },
  dot: {
    margin: 3,
    color: '#DBDBDB',
  },
});

