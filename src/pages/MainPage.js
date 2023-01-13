import React from 'react'
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { CustomText, CustomView, CustomHeader } from '../components'
import color from '../constant/color'

export default function MainPage({ navigation }) {

    const menuList = [
        {
            id: "01",
            title: "Custom Notification Sound",
            action: () => navigation.push("custom_notification_sound")
        },
    ]

    const _renderMenuHeader = () => (
        <CustomText style={{ fontSize: 16 }} bold>Menu list : </CustomText>
    )

    const _renderMenuItem = ({ item }) => (
        <TouchableOpacity onPress={() => item?.action()} style={styles.menuItemStyle}>
            <CustomText>{item?.id + " "}</CustomText>
            <CustomText>{item?.title}</CustomText>
        </TouchableOpacity>
    )

    return (
        <CustomView>
            <CustomHeader navigation={navigation} headerText={"My Expo Playground"} headerTextBold={true} showBackButton={false} />
            <FlatList
                data={menuList}
                keyExtractor={(item, index) => `${index}_${item}_menu`}
                ListHeaderComponent={_renderMenuHeader}
                renderItem={_renderMenuItem}
                contentContainerStyle={{ padding: 10 }}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            />
        </CustomView>
    )
}

const styles = StyleSheet.create({
    menuItemStyle: {
        backgroundColor: color.white,
        borderWidth: 1,
        borderColor: color.gray2,
        borderRadius: 5,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
    }
})