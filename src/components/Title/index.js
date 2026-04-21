import React from 'react';
import { Text, View } from 'react-native';

import styles from './style';

export default function Title() {
  return (
    <View style={styles.boxTitle}>
      <Text style={styles.textTitle}>GameRank</Text>
      <Text style={styles.subTitle}>Ranking e recomendacao de jogos</Text>
    </View>
  );
}
