import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, StyleSheet } from 'react-native';
import { colors } from '../../assets';
import { FilterButton } from '..';

/**
 * Componente de lista de filtros.
 *
 * @version 0.0.1
 * @author Leonardo Pereira da Silva
 */
class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * @memberof Filters
   * @method defineImage
   * @description Método de definição de imagem para item de filtro
   * @param {string} image - Nome da image;
   * @returns {number}
   */
  defineImage = image => {
    switch (image) {
      case 'img/ic_yoga.png':
        return require('../../../img/ic_yoga.png');
      case 'img/ic_upper_body.png':
        return require('../../../img/ic_upper_body.png');
      case 'img/ic_lower_body.png':
        return require('../../../img/ic_lower_body.png');
      case 'img/ic_dance.png':
        return require('../../../img/ic_dance.png');
      case 'img/ic_time.png':
        return require('../../../img/ic_time.png');
      case 'img/ic_balance.png':
        return require('../../../img/ic_balance.png');
      case 'img/ic_bike.png':
        return require('../../../img/ic_bike.png');
      default:
        return require('../../../img/ic_yoga.png');
    }
  };

  /**
   * @memberof Filters
   * @method keyExtractor
   * @description Método de definição de chave para item de lista
   * @param {string} name - Nome do item.
   * @param {number} index - Posição do item na lista.
   * @returns {string}
   */
  keyExtractor = ({ name }, index) => {
    return `${name}.${index}`;
  };

  /**
   * @memberof Filters
   * @method renderItem
   * @description Método de montagem de item para lista.
   * @param {string} name - Nome do item.
   * @param {string} image - Referência da image.
   * @returns {node}
   */
  renderItem = ({ item: { name, image } }) => {
    const { onPress } = this.props;
    const srcImage = this.defineImage(image);
    return <FilterButton name={name} image={srcImage} onChange={onPress} />;
  };

  render = () => {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          keyExtractor={this.keyExtractor}
          data={data}
          renderItem={this.renderItem}
          horizontal
          style={styles.list}
        />
      </View>
    );
  };
}

Filters.propTypes = {
  /** @param {arrayOf} data - Dados de filtros */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      /** @param {string} name - Nome do item */
      name: PropTypes.string.isRequired,
      /** @param {image} image - Imagem do item de filtro */
      image: PropTypes.image,
    })
  ),
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.GRAY_SHADOW,
    marginHorizontal: 20,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  list: {
    overflow: 'visible',
  },
});

export default Filters;
