import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ForgotPassword from './components/ForgotPassword';
import VerifyCode from './components/VerifyCode';
import NewAccount from './components/NewAccount';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import SetGoal from './components/SetGoal';
import Signup2 from './components/Signup2';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Splash from './components/Splash';
import { AuthContext } from './components/AuthContext';
import BarcodeScanner from './components/BarcodeScanner';
import AddItem from './components/AddItem';
import LogFood from './components/LogFood'
import SearchFood from './components/SearchFood';
import FoodInformation from './components/FoodInformation'
import Firebase from './components/Firebase'
import MyAccount from './components/MyAccount'
import UpdateGoal from './components/UpdateGoal'
import UpdateDetails from './components/UpdateDetails'
import MealSettings from './components/MealSettings'
import Nutrition from './components/Nutrition'
import ChangePassword from './components/ChangePassword'
import AddFood from './components/AddFood'

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#C2DFFB',
  },
};

var userStatus = Firebase.getUserLogInStatus()
const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const RootStack = createStackNavigator();

const TabsScreen = () => (
  <Tabs.Navigator initialRouteName={'Dashboard'}>
    <Tabs.Screen name="Summary" component={Dashboard}/>
    <Tabs.Screen name="Log food" component={LogFood}/>
    <Tabs.Screen name="SetGoal" component={SetGoal}/>
    <Tabs.Screen name="NewAccount" component={NewAccount}/>
</Tabs.Navigator>
);

export default () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null);    

    const authContext = React.useMemo(() => {
      return {
        signIn: () => {
          setIsLoading(false);
          setUserToken("asdf");
        },
        signUp: () => {
          setIsLoading(false);
          setUserToken("asdf");
        },
        signOut: () => {
          setIsLoading(false);
          setUserToken(null);
        }
      };
    }, []);
    
    React.useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, []);

    if (isLoading) {
      return <Splash/>;
    }

console.log("status: " + userStatus)

if(userStatus == false){
  return ( 
    <AuthContext.Provider value={authContext}>
      <NavigationContainer theme={MyTheme}>
        <RootStack.Navigator>
          <RootStack.Screen 
            name = "Login"
            component = { Login }
            options= {{headerShown: false}}
          />
          {/* <AuthStack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options= {{headerShown: false}}
          />
          <AuthStack.Screen
            name="SetGoal"
            component={SetGoal}
            options= {{headerShown: false}}
          />
          <AuthStack.Screen
            name="Signup2"
            component={Signup2}
            options= {{headerShown: false}}
          />
          <AuthStack.Screen
            name="VerifyCode"
            component={VerifyCode}
            options= {{headerShown: false}}
          />
          <AuthStack.Screen
            name="NewAccount"
            component={NewAccount}
            options= {{headerShown: false}}
          />
          <AuthStack.Screen
            name="ChangePassword"
            component={ChangePassword}
            options= {{headerShown: false}}
          /> */}
          <AuthStack.Screen
            name="Dashboard"
            component={Dashboard}
            options= {{headerShown: false}}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  )
}
else{
  return ( 
    <AuthContext.Provider value={authContext}>
      <NavigationContainer theme={MyTheme}>
        <RootStack.Navigator>
          <RootStack.Screen 
            name = "Calories Counter"
            component = { TabsScreen }
          />
          <AuthStack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options= {{headerShown: false}}
          />
          <AuthStack.Screen
            name="SetGoal"
            component={SetGoal}
            options= {{headerShown: false}}
          />
          <RootStack.Screen
            name="BarcodeScanner"
            component={BarcodeScanner}
            options= {{headerShown: false}}
          />
           <AuthStack.Screen
            name="LogFood"
            component={LogFood}
            options= {{headerShown: false}}
          />
           <AuthStack.Screen
            name="AddItem"
            component={AddItem}
            options= {{headerShown: false}}
          />
          <AuthStack.Screen
            name="SearchFood"
            component={SearchFood}
            options= {{headerShown: false}}
          />
          <AuthStack.Screen
            name="FoodInformation"
            component={FoodInformation}
            options= {{headerShown: false}}
          />
           <AuthStack.Screen
            name="Login"
            component={Login}
            options= {{headerShown: false}}
          />
          <AuthStack.Screen
            name="Signup2"
            component={Signup2}
            options= {{headerShown: false}}
          />
          <AuthStack.Screen
            name="VerifyCode"
            component={VerifyCode}
            options= {{headerShown: false}}
          />
          <AuthStack.Screen
            name="NewAccount"
            component={NewAccount}
            options= {{headerShown: false}}
          />
          <AuthStack.Screen
            name="MyAccount"
            component={MyAccount}
            options= {{headerShown: false}}
          />
          <AuthStack.Screen
            name="UpdateGoal"
            component={UpdateGoal}
            options= {{headerShown: false}}
          />
          <AuthStack.Screen
            name="UpdateDetails"
            component={UpdateDetails}
            options= {{headerShown: false}}
          />
          <AuthStack.Screen
            name="MealSettings"
            component={MealSettings}
            options= {{headerShown: false}}
          />
          <AuthStack.Screen
            name="Nutrition"
            component={Nutrition}
            options= {{headerShown: false}}
          />
          <AuthStack.Screen
            name="ChangePassword"
            component={ChangePassword}
            options= {{headerShown: false}}
          />
           <AuthStack.Screen
            name="AddFood"
            component={AddFood}
            options= {{headerShown: false}}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  )
}
}