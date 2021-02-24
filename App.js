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
import LogFood from './components/LogFood'
import SearchFood from './components/SearchFood';
import FoodInformation from './components/FoodInformation'

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
      name="Dashboard"
      component={Dashboard}
      options= {{headerShown: false}}
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
    <AuthStack.Screen
      name="BarcodeScanner"
      component={BarcodeScanner}
      options= {{headerShown: false}}
      />
    <AuthStack.Screen
      name="AddItem"
      component={AddItem}
      options= {{headerShown: false}}
      />

    <AuthStack.Screen
      name="LogFood"
      component={LogFood}
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

  </AuthStack.Navigator>
);

const Tabs = createBottomTabNavigator();

const TabsScreen = () => (
  <Tabs.Navigator initialRouteName={'Dashboard'}>
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

    // if(!IsLoggedIn){
    //   return ( 
    //     <AuthContext.Provider value={authContext}>
    //       <NavigationContainer theme={MyTheme}>
    //         <TabsScreen/>
    //       </NavigationContainer>
    //     </AuthContext.Provider>
    //   );
    // }

    return ( 
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={MyTheme}>
          <RootStackScreen userToken={userToken}/>
        </NavigationContainer>
      </AuthContext.Provider>
    );
};