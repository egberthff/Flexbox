import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Text, View } from 'react-native';
import {Image} from 'react-native';

const PP = () => {
  return (
    <Image 
    source={{
      uri: 'https://i.pinimg.com/564x/e7/e1/02/e7e1021183597e0bee2811e0b1d3fcd4.jpg'
    }} 
      style={{width: 100, height: 100, borderRadius: 100/ 2, marginLeft: '20px'}} 
    />
  )
};

const Name = () => {
  const Fname = 'Jeeve  Lyn'
  const Lname = 'Lunzon'
    return(
      <Text style={styles.headerFont}>{Fname} {Lname}</Text>
    )
};

const Course = () => {
  const Cname = 'Information Technology 3'
    return(
      <Text style={styles.headerFont1}>{Cname}</Text>
    )
};

const Subject = props => {
    return (
      <Text style={styles.subHeaderFont}>{props.list}</Text>
    )
};

const Cname = props => {
  return (
    <Text style={styles.bodyFont}>{props.details}</Text>
  )
};

const Unit = props => {
  return(
    <Text style={styles.bodyFont}>UNIT: {props.num}</Text>
  )
}

export default function App() {
  return (
    <View style={styles.background}>
      <View style={styles.header}>
      <PP/>
      </View>
      <Name/>
      <Course/>
     

      <Text style={styles.mySubFont}>My Subjects</Text>
////////////////////////////////////////////////89
      <View style = {styles.subjectOfferings}>
        <View>
          <Text >ELEC 3</Text>
          </View>
          <View>
          <Text  style = {styles.subjectDescriptionAndUnits}>Mobile Application</Text>
          <Text style = {styles.subjectDescriptionAndUnits}> Units: 3</Text>
        </View>
        </View>

///////////////////////////////////////////////78
<View style = {styles.subjectOfferings}>
        <View>
          <Text >ELEC 3</Text>
          </View>
          <View>
          <Text  style = {styles.subjectDescriptionAndUnits}>Mobile Application</Text>
          <Text style = {styles.subjectDescriptionAndUnits}> Units: 3</Text>
        </View>
        </View>

/////////////////////////////////////////////
<View style = {styles.subjectOfferings}>
        <View>
          <Text >ELEC 3</Text>
          </View>
          <View>
          <Text  style = {styles.subjectDescriptionAndUnits}>Mobile Application</Text>
          <Text style = {styles.subjectDescriptionAndUnits}> Units: 3</Text>
        </View>
        </View>

/////////////////////////////////////////////
<View style = {styles.subjectOfferings}>
        <View>
          <Text >ELEC 3</Text>
          </View>
          <View>
          <Text  style = {styles.subjectDescriptionAndUnits}>Mobile Application</Text>
          <Text style = {styles.subjectDescriptionAndUnits}> Units: 3</Text>
        </View>
        </View>

/////////////////////
<View style = {styles.subjectOfferings}>
        <View>
          <Text >ELEC 3</Text>
          </View>
          <View>
          <Text  style = {styles.subjectDescriptionAndUnits}>Mobile Application</Text>
          <Text style = {styles.subjectDescriptionAndUnits}> Units: 3</Text>
        </View>
        </View>

      //////////////////////////
      <Text style={styles.clickHereFont}>Click here to see more</Text>
    
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    marginLeft: '10px',
    backgroundColor: '#F0FFFF'
  },
  header: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      backgroundColor: '#24469C',
      alignItems: 'left',
      justifyContent: 'center',
      height: 260,
      width: 350,
      borderTopRightRadius: 40,
      borderBottomRightRadius: 40,
      marginTop:'30px',
      marginBottom:'20px',
      marginRight: '15px',
      marginLeft: '15px' 
    },
  headerFont: {
    fontFamily: 'lucida grande',
    fontSize: '25px',
    fontWeight: 'bold',
    color: 'white',
    marginLeft: '20px',
    marginTop: '5px'
    },
  headerFont1: {
    fontFamily: 'lucida grande',
    fontSize: '15px',
    fontWeight: 'bold',
    color: 'white',
    marginLeft: '20px',
    marginTop: '5px'
  },  
  subHeader: {
    backgroundColor: '#DADBDD',
    opacity: 0.7,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: 'left',
    marginBottom:'20px',
    marginLeft: '15px',
    marginRight: '15px'
  },
  subsubHeader: {
   alignItems: 'left',
   marginLeft: '15px',

  },
  subHeaderFont: {
    color: 'black',
    padding: 5,
    fontWeight: 'bold',
    marginLeft: '10px'
  },
  bodyFont: {
    fontFamily: 'Arial',
    fontSize: '10px',
    color: 'black',
    textAlign: 'right',
    marginLeft: '20px',
    marginTop: '5px'
  },
  mySubFont: {
    marginBottom: '5px',
    marginLeft: '20px'
  },
  clickHereFont: {
    color: '#24469C',
    marginBottom: '30px',
    textAlign: 'right',
    marginRight: '20px'
  } ,
  subjectOfferings:{
    flex: 1,
   flexDirection: 'row',
   justifyContent: 'flex-start',
   alignItems: 'center',
   with: 150,
   backgroundColor: '#DCDCDC',
   borderTopRightRadius: 10,
   borderTopLeftRadius: 10,
   borderBottomRightRadius: 10,
   borderBottomLeftRadius: 10,
   marginBottom:'8px',
   marginTop:'8px',
   },
   subjectDescriptionAndUnits:{
    marginLeft:'150px',
    borderBottomRightRadius: 10,
  },
   
});
