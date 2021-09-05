import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View , FlatList} from 'react-native'
import { ListItem, Button } from 'react-native-elements'


const HomeScreen = ({ navigation }) => {
    // const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([])
    // console.log(data);

    const complete_task = () => {

    }

    const delete_task = () => {
        
    }

    useEffect(() => {
        axios
        .get("http://127.0.0.1:8000/api/todos/")
        // .then((response) => setData(response.data))
        .then(response => {
            console.log(response.data)
            setData(response.data)
        })
        .catch((error) => {
            console.log('[ERROR] -  Error while fetching todo data');
            console.log(error);
        })
        
    }, []);

    if (!data) return null;

    const enterDetail = (item => {
        navigation.navigate("Detail", {
            item
        })
    })


    const renderData = (item) => {
        return (
            <ListItem.Swipeable
                leftContent={
                    <Button
                    title="Details"
                    icon={{ name: 'info', color: 'white' }}
                    buttonStyle={{ minHeight: '100%' }}
                    onPress={() => enterDetail()}
                    />
                }
                rightContent={
                    <Button
                    title="Delete"
                    icon={{ name: 'delete', color: 'white' }}
                    buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                    />
                }
                >
                <ListItem.Content>
                    <ListItem.Title>{ item.title }</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
        )
    }



    return (

        <View style={{ flex: 1 }}>
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

const styles = StyleSheet.create({
})
