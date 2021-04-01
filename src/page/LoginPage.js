import React, { useContext } from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import { AuthContex } from '../context/AuthContex';

export const LoginPage = () => {

    const { Login } = useContext(AuthContex);

    const HandleSubmitLogin = (e) => {
        const usuario = { id: '111', nombre: 'eduardo' };
        Login(usuario);
    }

    return (

        <ScrollView contentContainerStyle={styles.screen}>

            <View>
                <Title style={styles.title}>Login</Title>
            </View>

            <View style={styles.content}>

                <View style={styles.input}>
                    <TextInput
                        label="email"
                        keyboardType="email-address"
                    />
                </View>

                <View style={styles.input}>
                    <TextInput
                        label="password"
                        secureTextEntry={true}
                    />
                </View>

                <Button
                    mode="contained"
                    style={styles.btn}
                    onPress={HandleSubmitLogin}
                >
                    Aceptar
                </Button>

            </View>

        </ScrollView>

    )
}

const styles = StyleSheet.create({
    screen: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 10
    },
    title: {
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
        marginVertical: 10,
        minWidth: Dimensions.get('screen').width * 0.9
    },
    content: {
        minHeight: 300,
        minWidth: Dimensions.get('screen').width * 0.9,
    },
    input: {
        height: 50,
        padding: 10,
        marginVertical: 15
    },
    btn: {
        margin: 10,
        marginVertical: 30
    }
});
