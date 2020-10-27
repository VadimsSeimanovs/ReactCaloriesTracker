import React from 'react';
import { createMaterailBottomTabNavigation, createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Dashboard from './Dashboard';
import Goals from './SetGoal';

const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => (
<Tab.Navigator
    initialRouteName="Dashboard"
    activeColor="#e91e63"
    style={{ backgroundColor: 'tomato'}}>
        <Tab.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
                title: "Dashboard",
                tabBarLabel: 'Dashboard',
                tabBarIcon:({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26}/>
                ),
            }}
        />
        <Tab.Screen
            name="Goals"
            component={Goals}
            options={{
                title: "Goals",
                tabBarLabel: 'Goals',
                tabBarIcon:({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26}/>
                ),
            }}
        />
</Tab.Navigator>
);

export default BottomTab;