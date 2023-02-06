import Toast from 'react-native-toast-message';

const CustomToast = (message) => {
    Toast.show({
        type: "info",
        position: "bottom",
        visibilityTime: 1800,
        // text1: "Alert",
        text2: message,
        onPress: () => Toast.hide(),
    })
}

export default CustomToast