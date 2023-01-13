import React from 'react'
import { Text, StyleSheet } from 'react-native'
import color from '../constant/color'

export default function CustomText(props) {

    const { children, style, bold } = props

    return (
        <Text
            style={[
                styles.defaultTextStyle,
                style,
                bold && { fontFamily: 'PromptSemiBold' },
            ]}
        >{children}
        </Text>
    )
}

const styles = StyleSheet.create({
    defaultTextStyle: {
        color: color.black,
        fontSize: 12,
        fontFamily: 'PromptRegular',
        textAlignVertical: 'center',
    }
})