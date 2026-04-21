import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import { getGamesByGenre, getPopularGames, searchGames } from '../../../services/Api';
import Filter from '../Filter';
import GameCard from '../GameCard';
import Recommendation from '../Recommendation';
import styles from './style';

export default function GameList() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [message, setMessage] = useState('Carregando jogos...');

  useEffect(() => {
    loadPopularGames();
  }, []);

  async function loadPopularGames() {
    setMessage('Carregando jogos...');
    const data = await getPopularGames();

    if (data.length === 0) {
      setMessage('Nao foi possivel carregar os jogos.');
    } else {
      setMessage('');
    }

    setGames(data);
    setSelectedGenre('');
  }

  async function handleSearch() {
    const searchValue = search.trim();

    if (!searchValue) {
      await loadPopularGames();
      return;
    }

    setMessage('Buscando jogos...');
    const data = await searchGames(searchValue);

    if (data.length === 0) {
      setMessage('Nenhum jogo encontrado para essa busca.');
    } else {
      setMessage('');
    }

    setGames(data);
  }

  async function handleGenre(genre) {
    setSelectedGenre(genre);
    setSearch('');

    if (!genre) {
      loadPopularGames();
      return;
    }

    setMessage('Filtrando jogos...');
    const data = await getGamesByGenre(genre);

    if (data.length === 0) {
      setMessage('Nenhum jogo encontrado para esse genero.');
    } else {
      setMessage('');
    }

    setGames(data);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={games}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <GameCard game={item} />}
        ListHeaderComponent={
          <>
            <Filter
              search={search}
              onChangeSearch={setSearch}
              onSearchPress={handleSearch}
              selectedGenre={selectedGenre}
              onSelectGenre={handleGenre}
            />
            <Recommendation games={games} />
            {message ? <Text style={styles.message}>{message}</Text> : null}
          </>
        }
        ListEmptyComponent={<Text style={styles.empty}>Sem jogos para exibir.</Text>}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
