import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Comments } from "../components/comments";
import { Posts } from "../components/posts";
export type RootStackParamList = {
  Posts: undefined;
  Comments: {
    postId: number;
  };
};
const Stack = createNativeStackNavigator<RootStackParamList>();
function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Posts" component={Posts} />
      <Stack.Screen
        name="Comments"
        component={Comments}
        initialParams={{
          postId: 0,
        }}
      />
    </Stack.Navigator>
  );
}

export default function Navigation(): JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
