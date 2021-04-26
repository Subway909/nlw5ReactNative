import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    ScrollView,
    Platform,
    TouchableOpacity
} from 'react-native'
import { SvgFromUri } from 'react-native-svg'

import waterdrop from '../assets/waterdrop.png'
import { Button } from '../components/Button'
import colors from '../styles/colors'

export function PlantSave() {
    return (
        <View style={styles.container}>
            <View style={styles.plantInfo}>
                <SvgFromUri
                    uri=""
                    height={150}
                    width={150} />

                <Text style={styles.plantName}>
                    Nome da Planta
            </Text>
                <Text style={styles.plantAbout}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat ex eum consectetur accusamus aperiam, sit incidunt,
                    erferendis alias eveniet maiores debitis iure quam rem sequi
                    cumque accusantium nostrum rerum ipsum?
            </Text>
            </View>

            <View style={styles.controller}>
                <View style={styles.tipContainer}>
                    <Image
                        source={waterdrop}
                        style={styles.tipImage}
                    />
                    <Text style={styles.tipText}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </Text>
                </View>
            </View>

            <Text style={styles.alertLabel}>
                Escolha o melhor horário para ser lembrado:
            </Text>

            <Button
                title="Cadastrar planta"
                onPress={() => { }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.shape
    },
    plantInfo: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.shape
    },
    plantName: {

    },
    controller: {

    },
    plantAbout: {

    },
    tipContainer: {

    },
    tipImage: {

    },
    tipText: {

    },
    alertLabel: {

    },
})