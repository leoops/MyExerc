import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { icons } from '../../assets';

/**
 * Componente de check circle.
 *
 * @version 0.0.1
 * @author Leonardo Pereira da Silva
 */
class CheckCircle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    return (
      <View style={styles.container}>
        <Icon
          name={icons.CHECK_CIRCLE}
          size={20}
          color={colors.GREEN_EMERALD}
        />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    padding: 0.5,
    paddingHorizontal: 1,
    borderRadius: 15,
    overflow: 'hidden',
  },
});

export default CheckCircle;
