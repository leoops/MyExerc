import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, StyleSheet } from 'react-native';
import { colors, fonts } from '../../assets';

/**
 * Componente de detalhe de item.
 *
 * @version 0.0.1
 * @author Leonardo Pereira da Silva
 */
class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    const { text, image, separator } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.detail}>
          <Image
            source={image}
            style={styles.icon}
            resizeMode="contain"
            resizeMethod="scale"
          />
          <Text style={styles.text}>{text}</Text>
        </View>
        {separator && <View style={styles.separator} />}
      </View>
    );
  };
}

ItemDetail.propTypes = {
  /** @param {boolean} separator - Separador lateral */
  separator: PropTypes.bool,
  /** @param {string} text - Texto de detalhe */
  text: PropTypes.string,
  /** @param {number} image - Image  */
  image: PropTypes.number.isRequired,
};

ItemDetail.defaultProps = {
  separator: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  detail: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 14,
    width: 14,
  },
  text: {
    marginLeft: 3,
    color: colors.WHITE,
    fontFamily: 'Montserrat-Bold',
    fontSize: fonts.SMALL,
  },
  separator: {
    margin: 3,
    width: 1,
    height: 15,
    backgroundColor: colors.WHITE,
    opacity: 0.2,
  },
});

export default ItemDetail;
