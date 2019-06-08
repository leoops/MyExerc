import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors, fonts } from '../../assets';
import { ItemDetail, Indicator } from '..';
import timeIcon from '../../../img/ic_time.png';
import bikeIcon from '../../../img/ic_bike.png';
import balanceIcon from '../../../img/ic_balance.png';

const YESTERDAY = 'yesterday';
const TODAY = 'today';

/**
 * Componente de item de lista de exercícios.
 *
 * @version 0.0.1
 * @author Leonardo Pereira da Silva
 */
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * Método de definição de cor dependendo do dia da atividade física
   *
   * @param {string} when - Dia que a atividade foi realizada
   * @returns {string}
   * @memberof Item
   */
  defineColor(when) {
    switch (when) {
      case TODAY:
        return colors.RED;
      case YESTERDAY:
        return colors.GREEN_EMERALD;
      default:
        return undefined;
    }
  }

  /**
   * Método de calculo de tempo calculado
   *
   * @param {number} time - Tempo levado pelo usuário na atividade
   * @returns {string}
   * @memberof Item
   */
  calculateHours = time => {
    const minutes = time % 60;
    const hours = time / 60;

    if (minutes !== 0) {
      return `${time} m`;
    }
    return `${hours} h`;
  };

  render = () => {
    const { image, label, calories, time, weight, when } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image source={image} style={styles.image} resizeMode="contain" />
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.title}>{label.toUpperCase()}</Text>
          <View style={styles.barItems}>
            <ItemDetail image={bikeIcon} text={`${calories} kcal`} separator />
            <ItemDetail
              image={timeIcon}
              text={this.calculateHours(time)}
              separator
            />
            <ItemDetail image={balanceIcon} text={`${weight} Kg`} />
          </View>
          <View style={styles.indicators}>
            <Indicator
              label="HOJE"
              selectedColor={this.defineColor(when)}
              selected={when === TODAY}
            />
            <Indicator
              label="ONTEM"
              selectedColor={this.defineColor(when)}
              selected={when === YESTERDAY}
            />
          </View>
        </View>
      </View>
    );
  };
}

Item.propTypes = {
  /** @param {number} image - Image do referente a atividade */
  image: PropTypes.number.isRequired,
  /** @param {string} label - Titulo da atividade */
  label: PropTypes.string.isRequired,
  /** @param {number} calories - Quantidade de calorias gastas na atividade */
  calories: PropTypes.number.isRequired,
  /** @param {number} time - Tempo gasto na atividade */
  time: PropTypes.number.isRequired,
  /** @param {number} weight - Peso do usuário */
  weight: PropTypes.number.isRequired,
  /** @param {string} when - Momento em que a atividade foi realizada */
  when: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 16,
    padding: 20,
    borderRadius: 10,
    backgroundColor: colors.GRAY_SHADOW,
  },
  title: {
    fontSize: fonts.BIG,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.WHITE,
  },
  barItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailContainer: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 10,
    justifyContent: 'space-around',
  },
  image: {
    height: 130,
    width: 130,
    bottom: 5,
  },
  containerImage: {
    backgroundColor: colors.GRAY_IRON,
    borderRadius: 45,
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicators: { flexDirection: 'row' },
});

export default Item;
