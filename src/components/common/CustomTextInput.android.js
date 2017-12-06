import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    container: {
        color: '#212121',
    },
});

class CustomTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.defaultText,
        };
    }

    render() {
        return (<TextInput
            style={styles.container}
            returnKeyType={this.props.returnKeyType}
            underlineColorAndroid={'#BDBDBD'}
            onSubmitEditing={() => this.props.onSubmitEditing(this.state.text)}
            onChangeText={text => this.setState({ text })}
        />);
    }
}

CustomTextInput.propTypes = {
    onSubmitEditing: PropTypes.func.isRequired,
    returnKeyType: PropTypes.string,
    defaultText: PropTypes.string,
};

CustomTextInput.defaultProps = {
    defaultText: null,
    returnKeyType: null,
};

export default CustomTextInput;
