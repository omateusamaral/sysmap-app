import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CommentList } from "../screen/CommentList";
import { PostList } from "../screen/PostList";
export type RootStackParamList = {
  Posts: undefined;
  Comments: {
    postId: number;
    userId: number;
  };
};
const Stack = createNativeStackNavigator<RootStackParamList>();
function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Posts" component={PostList} />
      <Stack.Screen
        name="Comments"
        component={CommentList}
        initialParams={{
          postId: 0,
          userId: 0,
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
