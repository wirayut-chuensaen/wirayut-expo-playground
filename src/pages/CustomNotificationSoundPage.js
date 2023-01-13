import React from 'react'
import { CustomView, CustomText, CustomHeader } from '../components'

export default function CustomNotificationSoundPage({ navigation }) {
    return (
        <CustomView>
            <CustomHeader navigation={navigation} headerText={"Custom Notification Sound"} />
            <CustomText>CustomNotificationSoundPage</CustomText>
        </CustomView>
    )
}
