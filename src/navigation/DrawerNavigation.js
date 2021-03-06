import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigation } from './StackNavigation';
import { DrawerContent } from './DrawerContent';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
    

    return (
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>

            <Drawer.Screen name="app" component={StackNavigation} />

        </Drawer.Navigator>
    )
}
