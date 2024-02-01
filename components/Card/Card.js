import React from 'react'
import { View, Text, Image, ImageSourcePropType } from 'react-native'
import { shape, string, number } from 'prop-types'
import styles from './Card.styles'

const Card = ({ card }) => (
  <View
    style={styles.card}
  >
    <Image
      style={styles.image}
      source={card.photo}
      resizeMode="cover"
    />
  </View>
)

Card.propTypes = {
  card: shape({
    photo: ImageSourcePropType,
  }).isRequired,
}

export default Card
