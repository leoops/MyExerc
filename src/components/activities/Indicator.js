import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../assets';

/**
 * Componente de item de indicativo de dia de exercícios.
 *
 * @version 0.0.1
 * @author Leonardo Pereira da Silva
 */
class Indicator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    const { selectedColor, label, selected } = this.props;
    return (
      <View
        style={[
          styles.container,
          selected &&
            (selectedColor && {
              backgroundColor: selectedColor,
              opacity: 1,
              borderColor: colors.TRANSPARENT,
            }),
        ]}
      >
        <Text style={styles.label}>{label}</Text>
      </View>
    );
  };
}

Indicator.propTypes = {
  /** @param {string} label - Titulo do indicador */
  label: PropTypes.string.isRequired,
  /** @param {string} selectedColor - Color do indicador */
  selectedColor: PropTypes.string,
  /** @param {bool} selected - Indicativo de item estar selecionádo */
  selected: PropTypes.bool,
};

Indicator.defaultProps = {
  selectedColor: undefined,
  selected: false,
};

styles = StyleSheet.create({
  container: {
    borderColor: colors.WHITE,
    borderWidth: 0.5,
    paddingVertical: 2,
    paddingHorizontal: 15,
    borderRadius: 20,
    opacity: 0.7,
    marginRight: 10,
  },
  label: { fontSize: 10, color: colors.WHITE },
});

export default Indicator;
