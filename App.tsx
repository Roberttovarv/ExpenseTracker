import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AllExpenses } from './screens/AllExpenses';
import { RecentExpenses } from './screens/RecentExpenses';
import { ManageExpense } from './screens/ManageExpense';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
export default function App() {

  const Stack = createNativeStackNavigator()
  const BottomTab = createBottomTabNavigator()

  const ExpensesOverview = () => {
    return (
      <BottomTab.Navigator>
        <BottomTab.Screen name="Recent Expenses" component={RecentExpenses} />
        <BottomTab.Screen name="All Expenses" component={AllExpenses} />
      </BottomTab.Navigator>
    )
  }
  return (
    <>
    <StatusBar style="auto" />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Expenses Overview" component={ExpensesOverview} options={{headerShown: false}}/>
        <Stack.Screen name='Manage Expense' component={ManageExpense} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
