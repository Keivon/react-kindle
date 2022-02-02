import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import { Card, Divider } from "react-native-elements";



export default function App() {

cardarr = [1,2,3,4,5,6,7,8,9]


  return (


    
    <SafeAreaView style={styles.container}>
       <Divider
        style={{ width: "100%", margin: 20 }}
        color="#2089dc"
        insetType="left"
        subHeader="React native elements"
        subHeaderStyle={{}}
        width={1}
        orientation="horizontal"
      />
    <ScrollView style={styles.scrollView}>
   


     
    {  cardarr.map(x =>( 
      <Card containerStyle={{}} wrapperStyle={{}} key={x}>
        <Card.Title>CARD WITH DIVIDER {x}</Card.Title>
        <Card.Divider />
        <View
          style={{
            position: "relative",
            alignItems: "center"
          }}
        >
          <Image
            style={{ width: "80%", height: 100 }}
            resizeMode="contain"
            source={{
              uri:
                "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4"
            }}
          />
          <Text>Pranshu Chittora</Text>
        </View>
      </Card>
    ))}

      <StatusBar style="auto" />

    
    </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    width: "100%",
  },
});
