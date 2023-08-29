import { useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {
  Container,
  Form,
  HeaderList,
  NumberOfPlayers
} from './styles';
import { Header } from '@components/Header';
import { Filter } from '@components/Filter'
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { AppError } from '@utils/AppError';

type RouteParams = {
  group: string;
};

export function Players() {
  const [team, setTeam] = useState('');
  const [players, setPlayers] = useState([]);
  const [addNewPlayer, setAddNewPlayer] = useState('')

  const route = useRoute();
  const { group } = route.params as RouteParams;

  async function handleAddPlayer() {
    if(addNewPlayer.trim().length === 0) {
      return Alert.alert('Nova Pessoa', 'Informe o nome do jogador para add.')
    }

    const newPlayer = {
      name: addNewPlayer,
      team,
    }

    try {
      await playerAddByGroup(newPlayer, group)
    } catch (error) {
      if(error instanceof AppError) {
        Alert.alert('Nova Pessoa', error.message);
      } else {
        console.log(error);
        Alert.alert('Nova Pessoa', 'Não foi possível add, tente novamente.')
      }
    }
  }

  return (
    <Container>
      <Header
        showBackButton
      />

      <Highlight
        title={group}
        subtitle='Adicione a galera e separe os times'
      />

      <Form>
        <Input
          onChangeText={setAddNewPlayer}
          placeholder='Nome da pessoa'
          autoCorrect={false}
        />
        <ButtonIcon 
          icon='add' 
          color='PRIMARY' 
          onPress={handleAddPlayer}
        />
      </Form>

      <HeaderList>
        <FlatList
          data={['time a', 'time b']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard
            name={item}
            onRemove={() => { }}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message='Não há pessoas nesse time.' />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 50 },
          players.length === 0 && { flex: 1 }
        ]}
      />
      <Button
        title='Remover Turma'
        type='SECONDARY'
      />
    </Container>
  )
}
