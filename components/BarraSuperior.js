import { React } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BarraSuperior = () => {
    return (
        <View style={estilos.barra}>
            <View style={estilos.links}>
                <Text style={estilos.link}>Meu perfil</Text>
                <Text style={estilos.link}>Contato</Text>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    barra: {
        height: 80, // Altura
        backgroundColor: '#0000FF', // Cor de Fundo
    },
    links: {
        flexDirection: 'row', // Alinha os itens na horizontal
        justifyContent: 'space-around', // Espaçamento entre os itens
        marginTop: 40, // Espaçamento do topo
    },
    link: {
        color: '#FFFFFF', // Cor do texto
        borderBottomWidth: 2, // Largura da borda
        borderBottomColor: '#FFFFFF', // Cor da borda
        fontSize: 20, // Tamanho do texto
        fontWeight: 'bold', // Negrito
    },
});

export default BarraSuperior;