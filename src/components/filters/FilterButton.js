import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../assets';
import { CheckCircle } from '..';

/**
 * Componente de botão para filtro.
 *
 * @version 0.0.1
 * @author Leonardo Pereira da Silva.
 */
class FilterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  onPress = () => {
    const { selected } = this.state;

    this.setState({ selected: !selected }, this.onChange);
  };

  onChange = () => {
    const { name, onChange } = this.props;
    if (onChange) {
      onChange(name);
    }
  };

  render = () => {
    const { image } = this.props;
    const { selected } = this.state;
    return (
      <TouchableOpacity onPress={this.onPress} style={styles.container}>
        <LinearGradient
          start={{ x: 0, y: 0.25 }}
          end={{ x: 0.95, y: 1.3 }}
          colors={[colors.VIOLET, colors.RED]}
          style={styles.gradientContainer}
        >
          <Image
            source={image}
            style={styles.image}
            resizeMode="contain"
            resizeMethod="scale"
          />
        </LinearGradient>
        {selected && (
          <View style={styles.marker}>
            <CheckCircle />
          </View>
        )}
      </TouchableOpacity>
    );
  };
}

FilterButton.propTypes = {
  /** @param {function} onChange -Função invocada em mudança de estado */
  onChange: PropTypes.func,
  /** @param {image} image - Image exibida no botão */
  image: PropTypes.number.isRequired,
};

FilterButton.defaultProps = {
  onChange: undefined,
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
  gradientContainer: {
    padding: 14,
    borderRadius: 50,
  },
  image: {
    height: 36,
    width: 36,
  },
  marker: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
});

export default FilterButton;
