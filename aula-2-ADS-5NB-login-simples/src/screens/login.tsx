import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Input } from '../components/input'


export const Login = () => {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    return (
        <View style={estilo.container}>
            <Input
                name='E-mail'
                setValue={setEmail}
                value={email}
            />

            <Input
                name='Senha'
                setValue={setSenha}
                value={senha}
            />
        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    styleInput: {
        height: 52,
        width: 200,
        borderWidth: 1,
        borderRadius: 8
    }
})