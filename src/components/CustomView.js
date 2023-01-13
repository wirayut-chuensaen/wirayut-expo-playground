import React from 'react'
import { StyleSheet, KeyboardAvoidingView, View, Platform, StatusBar } from 'react-native'
import Constants from 'expo-constants';
import CustomLoadingIndicator from './CustomLoadingIndicator';
import color from '../constant/color';

const CustomView = ({ children, style, isLoading, keyboardVerticalOffset = 1 }) => {
    return (
        <View style={styles.container}>
            {
                Platform.OS === "ios" ?
                    <View style={styles.iosStatusBarStyle} />
                    :
                    <StatusBar backgroundColor={color.primary} />
            }
            <KeyboardAvoidingView
                style={[{ flex: 1 }, style]}
                keyboardVerticalOffset={keyboardVerticalOffset}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                {children}
            </KeyboardAvoidingView >
            <CustomLoadingIndicator isLoading={isLoading ? true : false} />
        </View>
    )
}

export default CustomView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white
    },
    iosStatusBarStyle: {
        width: '100%',
        height: Constants.statusBarHeight,
        backgroundColor: color.primary,
    }
})