import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { Item } from '..';

/**
 * Componente de lista de atividades realizadas pelo usuário.
 *
 * @version 0.0.1
 * @author
 */
class ActivitiesLIst extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // key extractor
  keyExtractor = (item, index) => {
    const { name } = item;
    return `${name}.${index}`;
  };

  defineImage = image => {
    switch (image) {
      case 'img/running.png':
        return require('../../../img/running.png');
      case 'img/cycling.png':
        return require('../../../img/cycling.png');
      case 'img/bodybuilding.png':
        return require('../../../img/gym.png');
      case 'img/yoga.png':
        return require('../../../img/yoga.png');
      default:
        return require('../../../img/yoga.png');
    }
  };

  // render item
  renderItem = ({ item: { name, image, calories, time, weight, when } }) => {
    const srcImage = this.defineImage(image);
    return (
      <Item
        label={name}
        image={srcImage}
        calories={calories}
        time={time}
        weight={weight}
        when={when}
      />
    );
  };

  render = () => {
    const { data } = this.props;
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={data}
        renderItem={this.renderItem}
      />
    );
  };
}

ActivitiesLIst.propTypes = {
  /** @param {arrayOf} data - Conjunto de atividades realizadas */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      /** @param {string} name - Nome da atividade física */
      name: PropTypes.string.isRequired,
      /** @param {string} image - Imagem exibida no item */
      image: PropTypes.string.isRequired,
      /** @param {number} calories - Quantidade de calorias gastas pelo usuário */
      calories: PropTypes.number.isRequired,
      /** @param {number} time - Tempo gasto na atividade */
      time: PropTypes.number.isRequired,
      /** @param {number} weight - Distância percorrida */
      weight: PropTypes.number.isRequired,
      /** @param {string} when - Quando a atividade aconteceu */
      when: PropTypes.string,
    })
  ),
};

ActivitiesLIst.defaultProps = {
  data: [],
};

export default ActivitiesLIst;
