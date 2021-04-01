import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Title, Button } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import Stripe from 'tipsi-stripe';
import { PayStripe } from '../api/paypal/paypal';

Stripe.setOptions({
    publishableKey: "pk_test_51IYfPsErLdKXC5f5tu5UXdDqzfmqKq9cP8ClIPHKChsiRWOFwvucCSLnkbjuqlhLVQfc5yXPmwtVYzHdJ6ULe4wQ00lARECkNb"
});

const amount = 1000;

export const ModalPayStripe = () => {

    const Pay = async () => {
        try {
            const res = await Stripe.paymentRequestWithCardForm();

            const resultPay = await PayStripe(res.id, amount);

            if (resultPay.status == "succeeded") {
                console.log("El pago se realizo correctamente");
                return;
            }

            console.log("Error en el Pago: " + resultPay);

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Animatable.View style={styles.screen} animation="slideInDown">
            <Title style={styles.title}>Pay Stripe</Title>
            <View style={styles.contentPay}>
                <Button
                    onPress={Pay}
                >Card Stripe</Button>
            </View>
        </Animatable.View>
    )
}


const styles = StyleSheet.create({
    screen: {
        position: "relative",
        height: "100%",
        padding: 10
    },
    title: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        backgroundColor: "#18202c",
        padding: 10,
        borderRadius: 10,
    },
    contentPay: {
        borderWidth: 1,
        borderColor: "green",
        minHeight: 400
    }
});