import AntDesign from '@expo/vector-icons/AntDesign';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, FlatList, Image, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { router } from 'expo-router';

interface IList {
    image: string[];
    id: number;
    name: string;
    description: string;
    years: number;
    contact: string;
    address: string;
    gender: any;
    size: any;
}

export const Home = () => {
    const [valueApi, setValueApi] = useState<IList[]>([])
    const [match, setMatch] = useState<IList[]>([])
    const [showMatchs, setShowMatchs] = useState(false)

    const requestAPI = async () => {
        await axios.get("http://localhost:3000/dogs/getAllDogs").then((resp) => {
            setValueApi(resp.data)
        })
    }

    useEffect(() => {
        requestAPI()
    }, [])

    const handlePressNo = () => {
        setValueApi((prevState) => prevState.slice(1))
    }

    const handlePressYes = () => {
        setMatch((prevState) => [...prevState, valueApi[0]])
        setValueApi((prevState) => prevState.slice(1))
    }

    return (
        <View style={styles.container}>
            {
                showMatchs ? 
                <>
                    <FlatList
                        data={match}
                        renderItem={({item}) => {
                            return (
                                <Image
                                    source={{uri: item?.image[0]}}
                                    style={{
                                        height: 200,
                                        width: 200
                                    }}
                                    resizeMode='contain'
                                />
                            )
                        }}
                    />
                </>
                :
                <>
                    <TouchableOpacity onPress={() => router.navigate('/details')} style={styles.content}>
                        <Image
                            source={{uri: valueApi[0]?.image[0] }}
                            style={{
                                height: '90%',
                                width: '90%'
                            }}
                        />
                    </TouchableOpacity>
                    <View style={styles.contentButtons}>
                        <TouchableOpacity onPress={handlePressNo} style={styles.buttonNo}>
                            <AntDesign name="close" size={32} color="#fff" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handlePressYes} style={styles.buttonYes}>
                            <AntDesign name="heart" size={32} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </>
            }
            <Button
                title={!showMatchs ? 'Ver Matchs': 'Dar likes'}
                onPress={() => setShowMatchs(!showMatchs)}
            />
        </View>
    )
}