import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginPage } from '../page/LoginPage';
import { RegisterPage } from '../page/RegisterPage';
import AntDesign from "react-native-vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {


    const IconLogin = {
        title: "Login",
        tabBarIcon: ({ color }) => (
            <AntDesign name="login" size={20} color={color} />
        )
    }

    const IconRegister = {
        title: "Register",
        tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={20} color={color} />
        )
    }

    return (
        <Tab.Navigator>
            <Tab.Screen name="login" component={LoginPage} options={IconLogin} />
            <Tab.Screen name="register" component={RegisterPage} options={IconRegister} />
        </Tab.Navigator>
    )
}
