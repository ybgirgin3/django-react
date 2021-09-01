import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View , FlatList} from 'react-native'
import { ListItem } from 'react-native-elements'
import { Card } from 'react-native-elements/dist/card/Card';

const HomeScreen = () => {
    // const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([])
    // console.log(data);

    useEffect(() => {
        axios
        .get("http://127.0.0.1:8000/api/todos/")
        // .then((response) => setData(response.data))
        .catch((error) => {
            console.log('[ERROR] -  Error while fetching todo data');
            console.log(error);
        })
        
    }, []);

    if (!data) return null;


    const renderData = (item) => {
        return (
            <Card style={styles.cardStyle}>
                <Text style={{fontSize: 25}}>{item.title}</Text>
            </Card>
        )
    }



    return (

        <View style={{ flex: 1, padding: 24 }}>
            <FlatList 
               data={data}
               renderItem={({ item }) => {
                   return renderData(item)
               }} 
               keyExtractor={item => item.id}
            />
        </View>
      );
    };

export default HomeScreen

const styles = StyleSheet.create({})
