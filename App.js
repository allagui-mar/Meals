import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategorieScreen from "./screens/CategorieScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351442" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}>
          <Stack.Screen
            name="Meals Categories"
            component={CategorieScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="Meals Overview"
            component={MealsOverviewScreen}
            // options={({route,navigation})=>{
            //   const catId=route.params.categoryId
            //   return{
            //     title:catId,

            //   }
            // }}
          />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
