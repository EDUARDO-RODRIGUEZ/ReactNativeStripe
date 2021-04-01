import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Card, Button, Paragraph, Modal, Portal } from 'react-native-paper';
import { ModalPayStripe } from '../components/ModalPayStripe';

export const HomePage = (props) => {

    const [visible, setVisible] = useState(false);

    const HandlePayStripe = () => {
        setVisible(true);
    }

    const hideModal = () => {
        setVisible(false);
    }

    return (
        <ScrollView>

            <Portal style={styles.contentModal}>
                <Modal
                    visible={visible}
                    onDismiss={hideModal}
                    contentContainerStyle={styles.modal}
                >
                    <ModalPayStripe />
                </Modal>
            </Portal>

            <View style={styles.contentProducts}>

                <Card style={styles.product}>

                    <Card.Title title="Hamburguesa Alemana" subtitle="Super Gigante y Deliciosa" />

                    <Card.Cover source={{ uri: 'https://statics-cuidateplus.marca.com/sites/default/files/styles/natural/public/hamburguesas.jpg?itok=7IWO-XYt' }} />

                    <View style={styles.btn}>
                        <Paragraph style={styles.center}>Precio: 100 $</Paragraph>
                        <Button
                            mode={"contained"}
                            onPress={HandlePayStripe}
                        >Comprar</Button>
                    </View>

                </Card>
            </View>

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    contentProducts: {
        padding: 10
    },
    product: {
        borderColor: "#444",
        borderWidth: 1
    },
    btn: {
        margin: 10
    },
    center: {
        textAlign: "center",
        paddingVertical: 10
    },
    contentModal: {
        borderWidth: 1,
        borderColor: "red",
        padding: 20
    },
    modal: {
        position: "absolute",
        width: "100%",
        minHeight: 400,
        backgroundColor: "rgba(135, 138, 131, 0.2)"
    }
});