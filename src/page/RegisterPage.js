import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Title, TextInput, Button } from 'react-native-paper';

export const RegisterPage = () => {
    return (
        <ScrollView contentContainerStyle={styles.screen}>


            <Title style={styles.title}>Register</Title>

            <View style={styles.form}>

                <View style={styles.input}>
                    <TextInput
                        label={"nombre"}
                        keyboardType={"default"}
                    />
                </View>

                <View style={styles.input}>
                    <TextInput
                        label={"email"}
                        keyboardType={"email-address"}
                    />
                </View>

                <View style={styles.input}>
                    <TextInput
                        label={"password"}
                        keyboardType={"default"}
                        secureTextEntry={true}
                    />
                </View>

                <Button
                    mode="contained"
                    style={styles.btn}
                    onPress={(e) => console.log("registrar")}
                >
                    Registrarme
                </Button>

            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flexGrow: 1,
        justifyContent: "center"
    },
    title: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30,
    },
    form: {
        minHeight: 400,
        padding: 10
    },
    input: {
        height: 30,
        marginVertical: 25
    },
    btn: {
        marginTop: 30,
    }
});
