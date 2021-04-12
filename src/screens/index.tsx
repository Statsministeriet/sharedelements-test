import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'

import Home from './Home'
import { RootStackParams } from './RootStackParams'

const Root = createStackNavigator<RootStackParams>()

const Index: React.FC = () => (
    <Root.Navigator
        screenOptions={{
            headerShown: false,
        }}>
        <Root.Screen name="Home" component={Home} />
    </Root.Navigator>
)

export default Index
