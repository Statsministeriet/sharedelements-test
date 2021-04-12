// eslint-disable-next-line simple-import-sort/sort
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import * as React from 'react'

import { BlueButton } from '../../../components/atoms/BlueButton'
import Container from '../../../components/atoms/Container'
import { HomeStackParams } from '../HomeStackParams'

type ScreenRouteProp = RouteProp<HomeStackParams, 'Profile'>
type ScreenNavigationProp = StackNavigationProp<HomeStackParams, 'Profile'>
type Props = {
    route: ScreenRouteProp
    navigation: ScreenNavigationProp
}

const Profile: React.FC<Props> = ({navigation}) => {

    return (
        <Container background="white">
            <BlueButton text="push to settings" onPress={() => { navigation.push('Settings') }} />
        </Container>
    )
}

export default Profile
