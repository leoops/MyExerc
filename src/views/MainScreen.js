import React, { Component } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { exercices as exercises, filters } from '../../data.json';
import { Filters, ActivitiesList, Header } from '../components/index.js';
import { colors } from '../assets/index.js';

const YOGA = 'Yoga';
const DANCE = 'Dance';
const UPPER_BODY = 'Upper Body';
const LOWER_BODY = 'Lower Body';

/**
 * Tela de listagem de atividades físicas.
 *
 * @version 0.0.1
 * @author Leonardo Pereira da Silva.
 */
class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: filters,
      list: exercises,
      filterParams: [],
    };
  }

  /**
   * Método de seleção de item de filtro
   * @instance
   * @memberof MainScreen
   * @param {string} name - Item clicado pelo usuário
   */
  onHandlerFilter = name => {
    switch (name) {
      case value:
        break;

      default:
        break;
    }
  };

  render = () => {
    const { list, filters } = this.state;
    return (
      // list

      <SafeAreaView style={styles.container}>
        <Header
          label="MEU PERFIL"
          left={
            <Icon.Button
              backgroundColor={colors.TRANSPARENT}
              name="sort"
              color={colors.WHITE}
              onPress={() => {
                console.warn('luz');
              }}
              size={24}
            />
          }
          right={
            <Icon.Button
              backgroundColor={colors.TRANSPARENT}
              name="brightness-7"
              color={colors.WHITE}
              onPress={() => {
                console.warn('menu');
              }}
              size={24}
            />
          }
        />
        <Filters data={filters} onPress={this.onHandlerFilter} />
        <ActivitiesList data={list} />
      </SafeAreaView>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.GRAY_IRON,
  },
});

export default MainScreen;
