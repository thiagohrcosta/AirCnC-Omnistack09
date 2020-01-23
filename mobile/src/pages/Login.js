import React from 'react';
import { View, Image, Text, TextInput, StyleSheet } from 'react-native';

import logo from '../assets/logo.png';

export default function Login(){
    return ( 
    <View style={styles.container}>
        <Image source={logo} />

        <View sytle={styles.form}>        
            <Text style={styles.label}>SEU E-MAIL *</Text>
            <TextInput 
                style={styles.input}
                placeholder="Seu e-mail"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <Text style={styles.label}>Tecnologias *</Text>
            <TextInput 
                style={styles.input}
                placeholder="Tecnologias de interesse"
                placeholderTextColor="#999"
                autoCapitalize="words"
                autoCorrect={false}
            />

        </View>
    </View> 
    );   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,

    },

    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },
});



