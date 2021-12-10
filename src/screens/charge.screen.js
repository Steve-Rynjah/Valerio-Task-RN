import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';
import {Header} from '../components/header_2.component';
import LinearGradient from 'react-native-linear-gradient';
import Toggle from 'react-native-toggle-element';

const {width, height} = Dimensions.get('window');

export const ChargeScreen = () => {
  const [toggleValue, setToggleValue] = useState(false);

  const onToggleSwitch = () => setToggleValue(!toggleValue)

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#333" />
      <Header title="Charging Status" />
        <ScrollView contentContainerStyle={{paddingBottom: 50}}>
      
      <View style={styles.container}>
        <LinearGradient colors={['#4B5358', '#545B60']} style={styles.linear}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.innerBox}>
              <Image
                source={require('../assets/clock_1.png')}
                style={{width: 40, height: 40, tintColor: '#FFF'}}
                resizeMode="contain"
              />
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginTop: 35,
                  marginLeft: 15,
                }}>
                Time
              </Text>
              <Text style={{color: 'rgba(255, 255, 255, 0.5)', marginLeft: 15}}>
                Charged
              </Text>
            </View>
            <Text
              style={{
                color: '#FFF',
                fontSize: 20,
                marginTop: 55,
                marginLeft: 25,
              }}>
              2h 35min
            </Text>
          </View>
        </LinearGradient>
      </View>

      <View style={styles.container}>
        <LinearGradient colors={['#03AD70', '#03AD70', '#059863']} style={styles.linear}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.innerBox}>
              <Image
                source={require('../assets/battery_1.png')}
                style={{width: 40, height: 40, tintColor: '#FFF'}}
                resizeMode="contain"
              />
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginTop: 35,
                  marginLeft: 15,
                }}>
                Energy
              </Text>
              <Text style={{color: 'rgba(255, 255, 255, 0.5)', marginLeft: 15}}>
                Consumed
              </Text>
            </View>
            <Text
              style={{
                color: '#FFF',
                fontSize: 22,
                marginTop: 55,
                marginLeft: 10,
              }}>
              17.40kWh
            </Text>
          </View>
        </LinearGradient>
      </View>

      <View style={styles.container}>
        <LinearGradient colors={['#2D9CDB', '#2C93CE']} style={styles.linear}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.innerBox}>
              <Image
                source={require('../assets/rupee_1.png')}
                style={{width: 40, height: 40, tintColor: '#FFF'}}
                resizeMode="contain"
              />
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginTop: 35,
                  marginLeft: 15,
                }}>
                Amount
              </Text>
              <Text style={{color: 'rgba(255, 255, 255, 0.5)', marginLeft: 15}}>
                Payable
              </Text>
            </View>
            <Text
              style={{
                color: '#FFF',
                fontSize: 20,
                marginTop: 55,
                marginLeft: 15,
              }}>
              ₹148.45
            </Text>
          </View>
        </LinearGradient>
      </View>

    
      <View style={{alignSelf: 'center', marginTop: 65}}>
        <Toggle
            value={toggleValue}
            onPress={onToggleSwitch}
            animationDuration={150}
            trackBar={{
              inActiveBackgroundColor: '#2C2C2C',
              activeBackgroundColor: '#069DFF',
              height: 5,
              
            }}
            leftComponent={<Text>{!toggleValue ? "OFF" : ''}</Text>}
            rightComponent={<Text>{toggleValue ? "ON" : ''}</Text>}
            thumbButton={{
              width: 80,
              height: 80,
              radius: 50,
              inActiveBackgroundColor: '#2C2C2C',
              activeBackgroundColor: '#069DFF',
            }}
          />
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2 + 100,
    height: height / 6,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 25,
    backgroundColor: '#333',
  },
  linear: {
    width: width / 2 + 100,
    height: height / 6,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#333',
  },
  innerBox: {
    borderRadius: 10,
    width: 65,
    height: 65,
    marginLeft: 15,
    marginTop: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
