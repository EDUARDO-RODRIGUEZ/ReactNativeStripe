import React, { useState } from 'react';

import {
    DrawerContentScrollView
} from '@react-navigation/drawer';

import { Drawer, Avatar } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

export const DrawerContent = ({ navigation }) => {


    const [active, setActive] = useState('Home');

    const HandleNavigationPress = (page) => {
        setActive(page);
        navigation.reset({
            index: 0,
            routes: [{ name: page }],
        });
        navigation.closeDrawer();
    }

    return (
        <DrawerContentScrollView>

            <Drawer.Section>
                <View style={styles.contentAvatar}>
                    <Avatar.Icon size={100} icon={"airballoon"} />
                </View>
            </Drawer.Section>

            <Drawer.Section>
                <Drawer.Item
                    label={"Home"}
                    active={active == "Home"}
                    onPress={(e) => HandleNavigationPress('Home')}
                />
                <Drawer.Item
                    label={"Detail"}
                    active={active == "Detail"}
                    onPress={(e) => HandleNavigationPress('Detail')}
                />
            </Drawer.Section>

        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    contentAvatar: {
        display: "flex",
        alignItems: "center",
        padding: 10
    }
});