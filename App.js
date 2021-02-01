import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ForgotPassword from './components/ForgotPassword';
import VerifyCode from './components/VerifyCode';
import NewAccount from './components/NewAccount';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme, useRoute } from '@react-navigation/native';
import SetGoal from './components/SetGoal';
import Signup2 from './components/Signup2';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Splash from './components/Splash';
import { AuthContext } from './components/AuthContext';
import BarcodeScanner from './components/BarcodeScanner';
import AddItem from './components/AddItem';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#C2DFFB',
  },
};

const IsLoggedIn = true;
const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Login"
      component={Login}
    />
    <AuthStack.Screen
      name="Signup2"
      component={Signup2}
    />
    <AuthStack.Screen
      name="VerifyCode"
      component={VerifyCode}
    />
    <AuthStack.Screen
      name="NewAccount"
      component={NewAccount}
    />
    <AuthStack.Screen
      name="Dashboard"
      component={Dashboard}
    />
    <AuthStack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
      />
    <AuthStack.Screen
      name="SetGoal"
      component={SetGoal}
      />
    <AuthStack.Screen
      name="BarcodeScanner"
      component={BarcodeScanner}
      />

    <AuthStack.Screen
      name="AddItem"
      component={AddItem}
      />
  </AuthStack.Navigator>
);

const Tabs = createBottomTabNavigator();

const TabsScreen = () => (
  <Tabs.Navigator>
    {/* <Tabs.Screen name="Dashboard" component={Dashboard}/> */}
    <Tabs.Screen name="BarcodeScanner" component={BarcodeScanner}/>
    <Tabs.Screen name="SetGoal" component={SetGoal}/>
    {/* <Tabs.Screen name="Signup2" component={Signup2}/> */}
    <Tabs.Screen name="NewAccount" component={NewAccount}/>
</Tabs.Navigator>
);

const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator>
    {userToken ? (
    <RootStack.Screen
      name="Auth"
      component={AuthStackScreen}
      options={{
        animationEnabled:false
      }}
    />
    ) : (
    <RootStack.Screen
      name="Calories Tracker"
      component={AuthStackScreen}
      options={{
        animationEnabled:false
      }}
    />
    )}
  </RootStack.Navigator>
)

const RootStack = createStackNavigator();

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

    if(!IsLoggedIn){
      return ( 
        <AuthContext.Provider value={authContext}>
          <NavigationContainer theme={MyTheme}>
            <TabsScreen/>
          </NavigationContainer>
        </AuthContext.Provider>
      );
    }

    return ( 
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={MyTheme}>
          <RootStackScreen userToken={userToken}/>
        </NavigationContainer>
      </AuthContext.Provider>
    );
};