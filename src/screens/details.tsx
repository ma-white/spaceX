import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import {Item, Prop} from '../components/Item';

const App = (props: any) => {
    const launch: Prop = {id: props.route.params.detail.id, name: props.route.params.detail.name, details: props.route.params.detail.details, success: props.route.params.detail.success, images: props.route.params.detail.links.flickr.original};
    return (
        <View style={styles.container}>
            <Item {...launch}/>
            <Button title="Back" onPress={() => props.navigation.navigate('Home')}/>
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});