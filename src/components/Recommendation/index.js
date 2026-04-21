import React from 'react';
import { Text, View } from 'react-native';

import styles from './style';

function calculateScore(game) {
  return (game.rating * 0.7) + (game.ratingsCount * 0.3);
}

export default function Recommendation({ games }) {
  const topGames = [...games]
    .map((game) => ({
      ...game,
      score: calculateScore(game),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top 5 recomendados</Text>

      {topGames.length === 0 ? (
        <Text style={styles.emptyText}>Nenhum jogo encontrado para recomendar.</Text>
      ) : (
        topGames.map((game, index) => (
          <View key={game.id} style={styles.item}>
            <Text style={styles.position}>{index + 1}.</Text>
            <View style={styles.textBox}>
              <Text style={styles.name}>{game.name}</Text>
              <Text style={styles.score}>Score: {game.score.toFixed(2)}</Text>
            </View>
          </View>
        ))
      )}
    </View>
  );
}
