import { StyleSheet, Text, TextInput, View } from 'react-native'

interface IProps {
    name: string,
    setValue: (value: string) => void,
    value: string
}

export const Input = ({name, setValue, value}: IProps) => {
    return (
        <View>
            <Text>{name}:</Text>
            <TextInput 
                style={estilo.styleInput}
                onChangeText={setValue}
                value={value}
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