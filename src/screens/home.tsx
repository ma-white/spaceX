import React, {useEffect, useState} from "react";
import { View, StyleSheet, FlatList } from 'react-native';
import Button from '../components/Button';
import { fetchData } from '../requests/request';

const App = (props: any) => {
    const [data, setData] = useState<any | null>([]);

    useEffect(() => {
        if(data.length === 0){
            fetchData(setData);
        }
    }, []);

    const renderItem = ({ item } : any) => {
        return (
            <Button title={item.name} onPress={() => props.navigation.navigate("Detail", {detail: item})}/>
        )
    }
    return (
        <View style={styles.container}>
            {data && (
                <FlatList
                    contentContainerStyle={styles.list}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </View>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'column',
        flexGrow: 1,
        alignItems: 'flex-start',
        alignContent: 'flex-start'
    },
    list: {
        display: "flex",
        justifyContent: 'space-between',
        marginHorizontal: 15
    }
})