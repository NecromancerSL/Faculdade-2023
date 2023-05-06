import React,{ useMemo } from 'react';
import {Text, StyleSheet} from 'react-native';

const calcularQuadrado = (numero) => {
    return numero * numero;
};

//numero é passado entre chaves pois ela é uma prop
const Quadrado = ({numero}) => {
    const resultado = useMemo(() => calcularQuadrado(numero),[numero]);
    return <Text style={styles.text}>O quadrado de {numero} é igual a {resultado}</Text>
};

const styles = StyleSheet.create({
    text: {
        fontSize: 24
    }
});

export default Quadrado;