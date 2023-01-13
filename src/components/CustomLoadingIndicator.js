import React from 'react'
import color from '../constant/color'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

const CustomLoadingIndicator = ({ isLoading }) => {
	return (
		isLoading &&
		<View style={styles.modalBackground}>
			<View style={styles.activityIndicatorWrapper}>
				<ActivityIndicator size='large' color={color.primary} />
			</View>
		</View>
	)
}

export default CustomLoadingIndicator

const styles = StyleSheet.create({
	modalBackground: {
		flex: 1,
		top: 0,
		right: 0,
		left: 0,
		bottom: 0,
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'space-around',
		backgroundColor: color.modalBg,
		position: 'absolute',
		zIndex: 999
	},
	activityIndicatorWrapper: {
		backgroundColor: color.loadingBg,
		height: 100,
		width: 100,
		borderRadius: 10,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		zIndex: 999
	}
})