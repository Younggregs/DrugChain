import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Platform, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Dialog, { DialogContent, SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
import store from './components/store'
//import reducer from './components/reducers'
//import mySaga from './components/sagas'



function blockView(blockNumber: string, drugName: string, drugCategory: string, drugConstituents: string){
  return (
    <View style={styles.blockContainer}>

        <View style={styles.straightLineContainer}> 
        <View style={styles.block}>
          <Text style={styles.textStyleBold}>Drug Name:</Text>
          <Text style={styles.textStyle}>{drugName}</Text>

          <Text style={styles.textStyleBold}>Drug Category:</Text>
          <Text style={styles.textStyle}>{drugCategory}</Text>

          <Text style={styles.textStyleBold}>Drug Constituents:</Text>
          <Text style={styles.textStyle}>{drugConstituents}</Text>
        </View>

        <View style={styles.straightLine}></View>

        </View>

        <View style={styles.blockConnector}></View>

        <View style={styles.blockNumberContainer}>
          <Text style={styles.blockNumber}>{blockNumber}</Text>
        </View>

    </View>
  )
  
}


export default function App() {

  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [constituents, setConstituents] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>

            <View style={styles.inputViewStyle}>
                <Text style={styles.headerText}>DrugChain</Text>
           

            <TouchableOpacity 
                style={{flex: 1, marginTop: 20}}
                onPress={() => {
                  setVisible(true);
                }}>
                  <Ionicons
                    name={ Platform.OS === 'ios' ? `ios-add` : 'md-add'}
                    size={30}
                    color='#fff'
                />
                </TouchableOpacity>
        
        </View>
      </View>

      <View>
        <Dialog
          visible={visible}
          dialogTitle={<DialogTitle title="Add Drug to DrugChain" />}
          dialogAnimation={new SlideAnimation({
            slideFrom: 'bottom',
          })}
          onTouchOutside={() => {
            setVisible(false);
          }}
        >
          <DialogContent>
            <View style={styles.formStyle}>
            <View style={styles.inputContainer}>
                 <TextInput
                   placeholder="Drug name"
                   placeholderTextColor='gray'
                   returnKeyType="next"
                   multiline={true}
                   style={styles.inputStyle}
                   onChangeText={(name) => setName(name)}/>
            </View>

            <View style={styles.inputContainer}>
                 <TextInput
                   placeholder="Drug category"
                   placeholderTextColor='gray'
                   returnKeyType="next"
                   multiline={true}
                   style={styles.inputStyle}
                   onChangeText={(category) => setCategory(category)}/>
            </View>

            <View style={styles.inputAreaContainer}>
                 <TextInput
                   placeholder="Drug constituents"
                   placeholderTextColor='gray'
                   returnKeyType="next"
                   multiline={true}
                   style={styles.inputStyle}
                   onChangeText={(constituents) => setConstituents(constituents)}/>
            </View>

            <TouchableOpacity 
              style={styles.submitButton}
              onPress={() => submitForm(name, category, constituents)}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>

            </View>

          </DialogContent>
        </Dialog>
      </View>
      
      <ScrollView>

      {blockView('Genesis', 'Panadol', 'Analgesics', 'zinc, vitamin e, proteien')}
      {blockView('1', 'Chroloquine', 'Hallucinogens', 'zinc, vitamin e, proteien' )}
      {blockView('2', 'Amartem', 'Analgesics', 'zinc, vitamin e, proteien')}
      {blockView('3', 'Vitamin C', 'Stimulants', 'zinc, vitamin e, proteien')}
      {blockView('4', 'Vitamin E', 'Stimulants', 'zinc, vitamin e, proteien')}
      {blockView('5', 'Codeine', 'Depressants', 'zinc, vitamin e, proteien')}

      </ScrollView>

    </View>
  );

}



function submitForm(name: string, category: string, constituents: string){
   console.log('control reached here', name, category, constituents)
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  submitButton: {
    margin: 5,
    width: 300,
    height: 50,
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'green'
  },
  submitText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  inputContainer: {
    margin: 5,
    width: 300,
    height: 50,
    padding: 5,
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 1,
    borderStyle:'solid',
  },
  inputAreaContainer: {
    margin: 5,
    width: 300,
    height: 150,
    padding: 5,
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 1,
    borderStyle:'solid',
  },
  inputStyle: {
    color: '#000',
    fontSize: 15,
  },
  headerStyle: {
    paddingTop: 20,
    marginTop: 20,
    marginBottom: 10,
    height: 100,
    width: '100%',
    borderBottomColor: '#fff',
    borderWidth: 2,
    borderStyle: 'solid'
  },
  headerText: {
    fontSize: 25,
    color: '#fff',
    flex: 8, 
    marginTop: 20
  },
  blockConnector: {
    width: 50, 
    height: 2,
    backgroundColor: '#fff',
  },
  inputViewStyle: {
    marginLeft: 0,
    paddingLeft: 10,
    width: '100%',
    flexDirection: 'row',
    flex: 1
   },
  blockContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  block: {
    backgroundColor: '#fff',
    width: 200,
    minHeight: 200,
    padding: 5
  },
  blockNumberContainer: {
    backgroundColor: '#fff',
    height: 100,
    width: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  blockNumber: {
    fontSize: 25,
    color: '#000'
  },
  textStyle: {
    color: '#000',
    fontSize: 18,
    textAlign: 'left'
  },
  textStyleBold: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  straightLineContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  straightLine: {
    width: 2, 
    height: 50,
    backgroundColor: '#fff',
  },
  formStyle: {
    width: 300,
    minHeight: 300,
    padding: 5
  }
});
