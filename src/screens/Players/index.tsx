import { useState } from 'react';
import { FlatList } from 'react-native';
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

export function Players() {
  const [team, setTeam] = useState('')
  const [players, setPlayers] = useState(['teste', 'banana'])

  return (
    <Container>
      <Header
        showBackButton
      />

      <Highlight
        title='Nome da turma'
        subtitle='Adicione a galera e separe os times'
      />

      <Form>
        <Input
          placeholder='Nome da pessoa'
          autoCorrect={false}
        />
        <ButtonIcon icon='add' color='PRIMARY' />
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
      />
    </Container>
  )
}
