import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Button, Card, CardItem, Icon } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import { Types } from '../../store/ducks/todos';
import { Styles } from './styles';

export function TodoScreen() {
  const [input, setInput] = useState('');

  const todos = useSelector(({ todos }) => todos);

  const dispatch = useDispatch();

  function addTodo(text) {
    dispatch({ type: Types.ADD_TODO, text });
    setInput('');
  }

  function toggleTodo(id) {
    dispatch({ type: Types.TOGGLE_TODO, id });
  }

  function removeTodo(id) {
    dispatch({ type: Types.REMOVE_TODO, id });
  }

  return (
    <View>
      <View style={Styles.viewButton}>
        <TextInput placeholder="To do" value={input} onChangeText={value => setInput(value)} />
        <Button dark style={Styles.button} onPress={() => addTodo(input)}>
          <Text style={Styles.text}>Add Todo</Text>
        </Button>
      </View>
      {todos.map((todo, index) => (
        <View key={index.toString()}>
          <Card>
            <CardItem style={Styles.cardItem}>
              <Icon
                name={todo.complete ? 'ios-checkmark-circle' : 'ios-checkmark-circle-outline'}
                onPress={() => toggleTodo(todo.id)}
              />
              <Text
                onPress={() => toggleTodo(todo.id)}
                style={{ color: todo.complete ? 'green' : 'black' }}
              >
                {todo.text}
              </Text>
              <Button dark style={Styles.button} onPress={() => removeTodo(todo.id)}>
                <Text style={Styles.text}>Remove Todo</Text>
              </Button>
            </CardItem>
          </Card>
        </View>
      ))}
    </View>
  );
}
