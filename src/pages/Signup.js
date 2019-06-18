import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar, TouchableOpacity, Image, TextInput, DatePickerIOS } from 'react-native'
import Logo from '../components/Logo';
import Form from '../components/Form';
import { Actions } from 'react-native-router-flux';
import DatePicker from 'react-native-datepicker'

export default class Signup extends Component {

  state = {
    username: '', firstname: '', chosenDate: '', password: '', email: '', phone_number: ''
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }

  signUp = async () => {
    const { username, firstname, chosenDate, password, email, phone_number } = this.state
    try {
      // here place your signup logic
      console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }

  goBack() {
    Actions.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image style={styles.headerLogo}
            source={require('../images/logo.png')} />
          <Text style={styles.headerText}>   REGISTRATION FORM </Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder='Username'
            autoCapitalize="none"
            placeholderTextColor='#ffffff'
            onChangeText={val => this.onChangeText('username', val)}
          />
          <TextInput
            style={styles.input}
            placeholder='Name'
            autoCapitalize="none"
            placeholderTextColor='#ffffff'
            onChangeText={val => this.onChangeText('firstname', val)}
          />
          <DatePicker
            style={styles.dtpicker}
            date={this.state.chosenDate}
            mode="date"
            placeholder="DOB"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            format="DD-MM-YYYY"
            minDate="01-05-2016"
            maxDate="01-06-2025"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateInput: {
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderTopWidth: 0,
                borderBottomWidth: 0,
                alignItems: 'flex-start'
              },
              placeholderText: {
                fontSize: 18,
                color: '#ffffff'
              }
            }}
            onChangeText={val => this.onChangeText('chosenDate', val)}
          />
          <TextInput style={styles.input}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder='Email'
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={val => this.onChangeText('email', val)}
          ></TextInput>
          <TextInput style={styles.input}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
            onChangeText={val => this.onChangeText('password', val)}
          />
          <TextInput
            style={styles.input}
            placeholder='Phone Number'
            autoCapitalize="none"
            placeholderTextColor='#ffffff'
            onChangeText={val => this.onChangeText('phone_number', val)}
          />
          <TouchableOpacity style={styles.button} onPress={this.signUp}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flexGrow: 1,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 25
  },
  headerLogo: {
    width: 80,
    height: 80
  },
  headerText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 25,
    fontWeight: 'bold',
    paddingVertical: 25
  },
  input: {
    height: 55,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    margin: 10,
    padding: 8,
    color: '#ffffff',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  dtpicker: {
    width: '95%',
    height: 55,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    margin: 10,
    padding: 8,
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#1c313a',
    borderRadius: 14,
    margin: 10,
    padding: 8,
    paddingVertical: 13
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  }
})
