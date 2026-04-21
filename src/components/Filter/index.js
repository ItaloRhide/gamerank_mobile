import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import styles from './style';

const genres = [
  { label: 'Populares', value: '' },
  { label: 'Action', value: 'action' },
  { label: 'Adventure', value: 'adventure' },
  { label: 'RPG', value: 'role-playing-games-rpg' },
  { label: 'Sports', value: 'sports' },
];

export default function Filter(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Buscar por nome</Text>
      <TextInput
        value={props.search}
        onChangeText={props.onChangeSearch}
        placeholder="Digite o nome do jogo"
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={props.onSearchPress}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Filtrar por genero</Text>
      <View style={styles.genreList}>
        {genres.map((genre) => (
          <TouchableOpacity
            key={genre.value || 'popular'}
            style={[
              styles.genreButton,
              props.selectedGenre === genre.value && styles.genreButtonActive,
            ]}
            onPress={() => props.onSelectGenre(genre.value)}
          >
            <Text
              style={[
                styles.genreText,
                props.selectedGenre === genre.value && styles.genreTextActive,
              ]}
            >
              {genre.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
