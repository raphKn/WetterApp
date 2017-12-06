import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: '#BDBDBD',
        marginTop: 8,
        marginBottom: 8,
        paddingBottom: 8,
    },
    text: {
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
        return (<View style={styles.container}>
            <TextInput
                returnKeyType={this.props.returnKeyType}
                style={styles.text}
                underlineColorAndroid={'transparent'}
                onSubmitEditing={() => this.props.onSubmitEditing(this.state.text)}
                onChangeText={text => this.setState({ text })}
            />
        </View>);
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
}

export default CustomTextInput;
