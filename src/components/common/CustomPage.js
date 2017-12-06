import React from 'react';
import { Dimensions, Image, ScrollView, StatusBar, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    headerImage: {
        width: Dimensions.get('window').width,
        height: (Dimensions.get('window').width / 2),
    },
})

const image = require('./Header.png');

const CustomPage = props => (
    <ScrollView>
        <Image resizeMode="contain" style={styles.headerImage} source={image} />
        <StatusBar backgroundColor={'#0288D1'} barStyle="light-content" />
        {props.children}
    </ScrollView>
);

CustomPage.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CustomPage;
