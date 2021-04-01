import React, { useContext } from 'react';
import 'react-native-gesture-handler';

import {
    NavigationContainer,
    DarkTheme as DarkThemeNavigation,
} from '@react-navigation/native';

import {
    DarkTheme as DarkThemePaper,
    Provider as ProviderPaper
} from 'react-native-paper';

import { TabNavigator } from './TabNavigator';
import { AuthContex } from '../context/AuthContex';
import { DrawerNavigation } from './DrawerNavigation';


DarkThemeNavigation.colors.background = "#212121";
DarkThemeNavigation.colors.card = "#18202c";
DarkThemeNavigation.colors.primary = "#009be5";

const CombinedDarkTheme = {
    ...DarkThemePaper,
    ...DarkThemeNavigation,
    colors: {
        ...DarkThemePaper.colors,
        ...DarkThemeNavigation.colors
    }
}


export const RouterNavigation = (props) => {


    const { auth } = useContext(AuthContex);
    const { isAuthenticated } = auth;

    return (
        <ProviderPaper theme={CombinedDarkTheme}>
            <NavigationContainer theme={CombinedDarkTheme}>
                {
                    isAuthenticated
                        ? <DrawerNavigation />
                        : <TabNavigator />
                }

            </NavigationContainer>
        </ProviderPaper>
    )

}
