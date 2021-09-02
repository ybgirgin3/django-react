import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View , FlatList} from 'react-native'
import { ListItem, Button } from 'react-native-elements'

const HomeScreen = () => {
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
        .then((response) => setData(response.data))
        .catch((error) => {
            console.log('[ERROR] -  Error while fetching todo data');
            console.log(error);
        })
        
    }, []);

    if (!data) return null;


    const renderData = (item) => {
        return (
            <ListItem.Swipeable 
                bottomDivider
                leftContent={
                    <Button
                      title="Complete"
                      icon={{ name: 'done', color: 'white' }}
                      buttonStyle={{ height: '100%' }}
                      onPress={complete_task}

                    />
                  }
                  rightContent={
                    <Button
                      title="Delete"
                      icon={{ name: 'delete', color: 'white' }}
                      buttonStyle={{ height: '100%', backgroundColor: 'red' }}
                      onPress={delete_task}

                    />
                  }
            >
                <ListItem.Content>
                    <ListItem.Title>{ item.title }</ListItem.Title>
                    <ListItem.Subtitle>{ item.description } </ListItem.Subtitle>
                    <ListItem.CheckBox checked={(item.completed) ? true : false}>{ item.completed }</ListItem.CheckBox>
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
