import { StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  swiperContainer: {
    height: 400,
  },
  buttonsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '15%',
  },
  copyright: {
    textAlign: 'center',
    fontSize: 10,
    color: 'black',
    paddingBottom: 20,
  },
  overlayWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginTop: 50,
    marginLeft: -10,
  },
})
