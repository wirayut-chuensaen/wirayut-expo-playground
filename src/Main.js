import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, Image, Dimensions } from 'react-native'
import color from './constant/color'
import * as Font from 'expo-font'
import * as Updates from 'expo-updates';
import Routes from './Routes'
import ContextProvider from './contexts/state'

export default function Main() {

	const [isLoading, setIsLoading] = useState(true)
	const [updatingText, setUpdatingText] = useState("Updating...")

	useEffect(() => {
		onInit()
	}, [])

	const onInit = async () => {
		try {
			await Font.loadAsync({
				'PromptRegular': require('../assets/prompt_font/Prompt-Regular.ttf'),
			})
			await Font.loadAsync({
				'PromptSemiBold': require('../assets/prompt_font/Prompt-SemiBold.ttf'),
			})
			if (!__DEV__) {
				const update = await Updates.checkForUpdateAsync();
				if (update.isAvailable) {
					setUpdatingText('New updates available')
					await Updates.fetchUpdateAsync()
					Updates.reloadAsync()
				}
			}
		} catch (e) {
			console.log("Main.js onInit() error : ", e)
		} finally {
			setTimeout(() => {
				setIsLoading(false)
			}, 1500)
		}
	}

	return (
		!isLoading ?
			<ContextProvider>
				<Routes />
			</ContextProvider>
			:
			<View style={styles.container}>
				<Image
					source={require("../assets/app_icon.png")}
					style={{ alignSelf: 'center', height: Dimensions.get('window').height / 5, width: Dimensions.get('window').width / 5 }}
					resizeMode={'contain'}
				/>
				<ActivityIndicator size='large' color={color.primary} />
				<Text style={{ color: color.gray, marginVertical: 20 }}>{updatingText}</Text>
			</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: color.white,
		justifyContent: "center",
		alignItems: "center"
	}
})