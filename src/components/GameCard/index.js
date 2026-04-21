import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './style';

export default function GameCard({ game }) {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri:
            game.image ||
            'https://via.placeholder.com/300x180.png?text=Sem+Imagem',
        }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{game.name}</Text>
        <Text style={styles.rating}>Nota: {game.rating}</Text>
      </View>
    </View>
  );
}
