import AntDesign from '@expo/vector-icons/AntDesign';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export const Home = () => {
    const [valueApi, setValueApi] = useState([])

    const requestAPI = async () => {
        await axios.get("http://localhost:3000/dogs/getAllDogs").then((resp) => {
            setValueApi(resp.data)
        })
    }

    useEffect(() => {
        requestAPI()
    }, [])

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.content}>
                <Image
                    source={{uri: valueApi[0]?.image[0] }}
                    style={{
                        height: '90%',
                        width: '90%'
                    }}
                />
            </TouchableOpacity>
        
            <View style={styles.contentButtons}>
                <TouchableOpacity style={styles.buttonNo}>
                    <AntDesign name="close" size={32} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonYes}>
                    <AntDesign name="heart" size={32} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    )
}