import React, { useState, useEffect } from 'react'
import { View, ScrollView, TouchableOpacity, Platform } from 'react-native'
import { CustomView, CustomText, CustomHeader, CustomToast } from '../components'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Notifications from "expo-notifications"
import * as Clipboard from 'expo-clipboard'
import color from '../constant/color'
import { expo } from "../../app.json"
import { Audio } from 'expo-av'

export default function CustomNotificationSoundPage({ navigation }) {

    const [pushToken, setPushToken] = useState("")
    const [notiPermissionStatus, setNotiPermissionStatus] = useState("Notification permission accepted.")

    useEffect(() => {
        onInit()
    }, [])

    const onInit = async () => {
        try {
            const { status: existingStatus } = await Notifications.requestPermissionsAsync()
            // console.log('existingStatus : ', existingStatus)
            let finalStatus = existingStatus
            if (existingStatus !== 'granted') {
                const { status } = await Notifications.getPermissionsAsync()
                finalStatus = status
            }
            if (finalStatus !== 'granted') {
                setNotiPermissionStatus("Notification permission denied.")
                return
            }
            const expoToken = (await Notifications.getDevicePushTokenAsync()).data
            // console.log('expoToken : ', expoToken);
            if (Platform.OS === "android") {
                Notifications.setNotificationChannelAsync("default", {
                    name: "default",
                    importance: Notifications.AndroidImportance.MAX,
                    sound: "message_beep.wav",
                    vibrationPattern: [1000, 1000, 1000, 1000],
                });
            }
            setPushToken(expoToken)
        } catch (e) {
            console.log("CustomNotificationSoundPage.js onInit() error : ", e)
        }
    }

    const copyTokenToClipboard = async () => {
        Clipboard.setStringAsync(pushToken.toString())
        CustomToast("Copied token to clipboard.")
    }

    const onPlaySound = async () => {
        const { sound } = await Audio.Sound.createAsync(require("../../assets/sounds/message_beep.wav"))
        // console.log('sound : ', sound);
        await sound.playAsync();
    }

    return (
        <CustomView>
            <CustomHeader navigation={navigation} headerText={"Custom Notification Sound"} />
            <ScrollView style={{ flex: 1, padding: 10 }}>
                <CustomText bold style={{ fontSize: 14 }}>Expo notification permission status : <CustomText>{notiPermissionStatus}</CustomText></CustomText>
                <CustomText bold>Expo notification token :</CustomText>
                <TouchableOpacity onPress={copyTokenToClipboard} style={{ width: "100%", padding: 10, justifyContent: "center", alignItems: "center", borderRadius: 6, borderWidth: 1, borderColor: color.gray2 }}>
                    <CustomText>{pushToken}</CustomText>
                </TouchableOpacity>
                <CustomText>TODO : put this token to FCM server for send notification.</CustomText>
                <View style={{ height: 10 }} />
                <CustomText bold>Current notification sound : <CustomText>{expo?.plugins[0][1]?.sounds[0]}</CustomText></CustomText>
                <TouchableOpacity onPress={onPlaySound} style={{ width: "100%", padding: 10, justifyContent: "center", alignItems: "center", borderRadius: 6, borderWidth: 1, borderColor: color.gray2 }}>
                    <CustomText>Test sound</CustomText>
                </TouchableOpacity>
            </ScrollView>
        </CustomView>
    )
}
