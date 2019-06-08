import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../assets';

/**
 * Componente de cabeçalho para a tela.
 *
 * @version 0.0.1
 * @author Leonardo Pereira da Silva
 */
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    const { label, left, right } = this.props;
    return (
      <View style={styles.container}>
        {left}
        <Text style={{ fontSize: 28, color: colors.WHITE }}>{label}</Text>
        {right}
      </View>
    );
  };
}

Header.propTypes = {};

Header.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    paddingBottom: 20,
    borderBottomColor: colors.WHITE_LIGHT,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 28,
    color: colors.WHITE,
  },
});

export default Header;
