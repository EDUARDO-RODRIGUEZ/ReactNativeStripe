import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton } from 'react-native-paper';
import { DetailPage } from '../page/DetailPage';
import { HomePage } from '../page/HomePage';


const Stack = createStackNavigator();

export const StackNavigation = ({ navigation }) => {

    const IconMenu = () => {
        return <IconButton icon={"menu"} size={30} onPress={() => navigation.openDrawer()} />
    }

    const options = { headerLeft: IconMenu };

    return (
        <Stack.Navigator initialRouteName={"Home"}>
            <Stack.Screen name={"Home"} component={HomePage} options={options} />
            <Stack.Screen name={"Detail"} component={DetailPage} options={options} />
        </Stack.Navigator>
    )
}
