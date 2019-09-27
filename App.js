import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  CheckBox,
  ToastAndroid,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputOne: '',
      inputTwo: '',
      inputThree: '',
      isOneChecked: false,
      isTwoChecked: false,
      isThreeChecked: false,
    };
  }

  toggleOneCheck = () => {
    this.setState({isOneChecked: !this.state.isOneChecked});
  };
  toggleTwoCheck = () => {
    this.setState({isTwoChecked: !this.state.isTwoChecked});
  };
  toggleThreeCheck = () => {
    this.setState({isThreeChecked: !this.state.isThreeChecked});
  };

  render() {
    const {
      isOneChecked,
      isTwoChecked,
      isThreeChecked,
      inputOne,
      inputTwo,
      inputThree,
    } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Input One"
            style={styles.input}
            onChangeText={text => this.setState({inputOne: text})}
            value={inputOne}
          />
          <CheckBox value={isOneChecked} onValueChange={this.toggleOneCheck} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Input Two"
            style={styles.input}
            onChangeText={text => this.setState({inputTwo: text})}
            value={inputTwo}
          />
          <CheckBox value={isTwoChecked} onValueChange={this.toggleTwoCheck} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Input Three"
            style={styles.input}
            onChangeText={text => this.setState({inputThree: text})}
            value={inputThree}
          />
          <CheckBox
            value={isThreeChecked}
            onValueChange={this.toggleThreeCheck}
          />
        </View>
        <View style={styles.inputContainer}>
          <Button
            color="black"
            title=" + "
            onPress={() =>
              ToastAndroid.show('Plus Button pressed', ToastAndroid.LONG)
            }
          />
          <Button
            color="black"
            title=" - "
            onPress={() =>
              ToastAndroid.show('Minus Button pressed', ToastAndroid.LONG)
            }
          />
          <Button
            color="black"
            title=" x "
            onPress={() =>
              ToastAndroid.show('Multiply Button pressed', ToastAndroid.LONG)
            }
          />
          <Button
            color="black"
            title=" / "
            onPress={() =>
              ToastAndroid.show('Divide Button pressed', ToastAndroid.LONG)
            }
          />
        </View>
        <View style={styles.line} />
        <View style={styles.inputContainer}>
          <Text style={styles.result}>Hasil :</Text>
          <Text style={styles.result}>{inputOne}</Text>
          <Text style={styles.result}>{inputTwo}</Text>
          <Text style={styles.result}>{inputThree}</Text>
        </View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    width: '60%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
  line: {
    width: '80%',
    borderBottomColor: '#333',
    borderBottomWidth: 2,
    marginVertical: 30,
  },
  result: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
