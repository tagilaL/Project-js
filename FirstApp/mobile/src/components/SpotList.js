import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import api from '../services/api';
//useState => é usado para salvar algo para ser manipulado depois
//useEffect => é usado para quando se quer retornar uma funcao assim que um componente é exibido em tela.
export default function SpotList({ tech }){
    const [ spots, setSpots ] = useState([]);
    
    useEffect(() => {
        async function loadSpots(){
            const response = await api.get('/spots', {
                params: { tech }
            })

            setSpots(response.data);
        } 

        loadSpots();
    }, []);

    return (
        <View style={styles.container} >
            <Text style={styles.title}>Companies that use <Text style={styles.bold}>{tech}</Text> </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },

    title: {
        fontSize: 20,
        color: '#444',
        paddingHorizontal: 20,
        marginBottom: 15,

    },

    bold: {
        fontWeight: 'bold',
    }
})