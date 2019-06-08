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

  /**
   * @memberof ActivitiesLIst
   * @method keyExtractor
   * @description Método de definição de chave para item de lista
   * @param {string} name - Nome do item.
   * @param {number} index - Posição do item na lista.
   * @returns {string}
   */
  keyExtractor = (item, index) => {
    const { name } = item;
    return `${name}.${index}`;
  };

  /**
   * @memberof Item
   * @method defineImage
   * @description Método de definição de imagem
   * @param {string} image - Referência de imagem a ser exibida
   * @returns {number}
   */
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

  /**
   * @memberof ActivitiesLIst
   * @method renderItem
   * @description Método de montagem de item para lista.
   * @param {string} name - Nome do item.
   * @param {string} image - Referência da image.
   * @param {string} calories - Calorias gastas.
   * @param {string} time - Tempo gasto.
   * @param {string} weight - Peso do usuário.
   * @param {string} when - Dia da atividade.
   * @returns {node}
   */
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
