import { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export const Home = () => {
    const [textoAgua, setTextoAgua] = useState("")
    const [list, setList] = useState<string[]>([])

    const adicionaNaLista = () => {
        if(textoAgua.length === 0){
            alert("O campo de texto está vazio")
            return
        }
        setList([...list, textoAgua])
        setTextoAgua("")
    }

    return (
        <View style={estilo.container}>
            <TextInput 
                style={estilo.styleInput}
                onChangeText={setTextoAgua}
                value={textoAgua}
            />

            <ScrollView>
                {
                    list.map((item) => {
                        return (
                            <View>
                                <Text>{item}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
            
            {/* <FlatList
                data={list}
                renderItem={({item}) => {
                    return (
                        <View>
                            <Text>{item}</Text>
                        </View>
                    )
                }}
            /> */}

            <TouchableOpacity onPress={adicionaNaLista} style={estilo.styleButton}>
                <Text style={estilo.styleTextButton}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    )
}


const estilo = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24
    },
    styleInput: {
        height: 53,
        width: "100%",
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 12
    },
    styleButton: {
        height: 53,
        width: '100%',
        backgroundColor: "green",
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    styleTextButton: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    }
})