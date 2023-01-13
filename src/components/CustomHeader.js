import React from 'react'
import { TouchableOpacity, View, Dimensions, StyleSheet } from 'react-native'
import CustomText from "./CustomText"
import { AntDesign } from '@expo/vector-icons'
import color from '../constant/color'

export default function CustomHeader({ navigation, headerText, headerTextBold = false, showBackButton = true }) {
    return (
        <View style={styles.mainHeaderStyle}>
            <View style={styles.headerStyleL}>
                {
                    showBackButton &&
                    <TouchableOpacity
                        style={[styles.buttonStyle, { paddingHorizontal: 10 }]}
                        onPress={() => navigation.pop()}
                    >
                        <AntDesign name='left' size={20} color={color.bgBlack} />
                    </TouchableOpacity>

                }
            </View>
            <View style={styles.headerStyleM}>
                {
                    headerText && <CustomText style={{ fontSize: 14 }} bold={headerTextBold}>{headerText}</CustomText>
                }
            </View>
            <View style={styles.headerStyleR}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainHeaderStyle: {
        backgroundColor: color.bgWhite,
        width: Dimensions.get('window').width,
        height: 45,
        flexDirection: 'row',
        borderBottomWidth: 0.25,
        borderBottomColor: color.bgGray,
        shadowColor: color.bgBlack,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    headerStyleL: {
        width: Dimensions.get('window').width / 100 * 20,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    headerStyleM: {
        width: Dimensions.get('window').width / 100 * 60,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerStyleR: {
        width: Dimensions.get('window').width / 100 * 20,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonStyle: {
        justifyContent: 'center'
    },
})