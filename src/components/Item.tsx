import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";

interface Prop {
    id: number;
    name: string;
    details: string;
    success: boolean;
    images: string[];
}

const Item = (prop: Prop) => {
    const renderItem = ({item} : any) => {
        return (
            <Image style={styles.image}
                source={{uri: item}}/>
        )
    }
    const success = `This Launch Resulted In a ${prop.success ? 'Success' : 'Failure'}`;
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{prop.name}</Text>
            <Text style={styles.details}>{prop.details}</Text>
            <Text style={styles.success}>{success}</Text>
            <FlatList
                data={prop.images}
                renderItem={renderItem}
                key={prop.id}/>
        </View>
    )
}

export {Item, Prop};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    header: {
        fontSize: 24,
        margin: 5
    },
    details: {
        fontSize: 16,
        margin: 10
    },
    success: {
        fontSize: 16,
        textDecorationLine: 'underline',
        textDecorationColor: '#000',
        marginBottom: 10
    },
    image: {
        width: 300,
        height: 300
    }
})