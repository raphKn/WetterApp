import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, ViewPropTypes } from 'react-native';
import CustomText from './CustomText';
import { useLightScheme } from '../SchemeUtil';

const styles = StyleSheet.create({
    container: {
        paddingTop: 12,
    },
    childs: {
        paddingVertical: 6,
        backgroundColor: '#E0E0E0',
        paddingHorizontal: 18,
    },
    title: {
        paddingHorizontal: 18,
        fontSize: 18,
    },
});

const Section = props => (<View style={[styles.container, { backgroundColor: props.backgroundColor }]}>
    <View>
        <CustomText lightScheme={useLightScheme(props.backgroundColor)} style={styles.title}>{props.name}</CustomText>
    </View>
    <View style={[styles.childs, props.style]}>
        {props.children}
    </View>
</View>);

Section.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    style: ViewPropTypes.style,
    backgroundColor: PropTypes.string,
};

Section.defaultProps = {
    style: null,
    backgroundColor: '#3770a5',
    lightScheme: false,
};

export default Section;
