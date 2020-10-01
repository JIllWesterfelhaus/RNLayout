import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Header extends React.Component {

    render() {
        return (
            <View style={styles.header}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f26f85',

    }
});
