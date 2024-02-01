// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Animated } from 'react-native';
// import Swiper from 'react-native-deck-swiper';
// import { useState } from 'react';
// import Icon from 'react-native-vector-icons/AntDesign';
// import Icons from 'react-native-vector-icons/FontAwesome5';

// export default function App() {

//   const [index , setIndex]=useState(0);


  const cards = [
    { id: 1, text: 'Card 1', color: '#FF6347' }, // Red color
    { id: 2, text: 'Card 2', color: '#87CEFA' }, // Light Blue color
    { id: 3, text: 'Card 3', color: '#90EE90' }, // Light Green color
    { id: 4, text: 'Card 4', color: '#FFD700' }, // Gold color
    { id: 5, text: 'Card 5', color: '#DA70D6' }, // Orchid color
  ];

//   const rotate = new Animated.Value(0);

//   function onSwiped() {
//     setIndex(index + 1);
//     rotate.setValue(0);
//   }

//   const rotateCard = rotate.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '15deg'],
//   });


//   return (
//     <View style={styles.container}>
//     <Swiper
//       cards={cards}
//       cardIndex={index}
//       renderCard={(card) => (
//         <View style={[styles.card, { backgroundColor: card.color } ]}>

//           <Text>{card.text}</Text>
//         </View>
//       )}
  
//       stackSize={3}
//       stackScale={7}
//       stackSeparation={30}
//       onSwiper={onSwiped}
//       disableTopSwipe
//       verticalSwipe={false}
//       horizontalThreshold={200}

//       // inputRotationRange={[-15,0, 15]}
//       outputRotationRange={[ '-0deg', '0deg', '0deg' ]}
//       disableBottomSwipe
//       // rotate={false} 
//       animateOverlayLabelsOpacity
//       animateCardOpacity
//       infinite
//       overlayLabels={{
//        right:{
//           title:<Icon name="checkcircle" size={70} color="green"/>,
//           // title:'hello',
//           style:{
//           label:{
//             // backgroundColor:red,
//             // color:'#000'
//           },
//           wrapper:{
//             flexDirection:'column',
//             alignItems:'flex-start',
//             justifyContent:'flex-start',
            
//           }

//         }
//         },
//         left:{
//           title:<Icon name="closecircle" size={70} color="red"/>,
//           // title:'hello',
//           style:{
//           label:{
//             // backgroundColor:red,
//             // color:'#000'
//           },
//           wrapper:{
//             flexDirection:'column',
//             alignItems:'flex-end',
//             justifyContent:'flex-start',
//             marginLeft:-20
  
//           }

//         }
//         },
       
//       }}
      
//     />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   card:{
//     flex:0.9,
//     borderRadius:8,
//     // shadowRadius:25,
//     shadowColor:'#000',
//     shadowOpacity:0.08,
//     shadowOffset:{width:0 , height:0 },
//     justifyContent:'center',
//     alignItems:'center',
//     backgroundColor:'#fff',
//     width: 300,
//     height: 300,
//   },



// });





import React, {useState, useRef } from 'react'
import { View, Text , Animated } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { photoCards } from './constants'
import { Card,  OverlayLabel } from './components'
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './App.styles'

const App = () => {
  const useSwiper = useRef(null).current


 


  


  

  return (
    <View
      style={styles.container}
    >
      <View style={styles.swiperContainer}>
        <Swiper
          ref={useSwiper}
          animateCardOpacity
          containerStyle={styles.container}
          cards={photoCards}
          renderCard={card => <Card card={card} />}
          backgroundColor="white"
          stackSize={3}
          stackScale={5}
          stackSeparation={24}
          verticalSwipe={false}
          infinite
          // horizontalThreshold={20}
          showSecondCard
          animateOverlayLabelsOpacity
          overlayLabels={{
            left: {
              title: <Icon name="closecircle" size={70} color="red"/>,
              style: {
                wrapper: styles.overlayWrapper,
              },
            },
            right: {
              title: <Icon name="checkcircle" size={70} color="green"/>,
              style: {
                wrapper: {
                  ...styles.overlayWrapper,
                  alignItems: 'flex-start',
                  marginLeft: 10,
                },
              },
            },
          }}
        />
      </View>

     
    </View>
  )
}

export default App
