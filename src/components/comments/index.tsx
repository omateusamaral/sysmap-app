import { useEffect } from "react";
import { useAsyncCallback } from "react-async-hook";
import { FlatList } from "react-native";
import { Text } from "react-native-paper";
import { listComments } from "../../api";
import Background from "../common/Background";

export function Comments(route: unknown) {
  const props = route as {
    route: {
      params: {
        postId: number;
      };
    };
  };
  const listCommentsCallback = useAsyncCallback(listComments);

  useEffect(() => {
    listCommentsCallback.execute(props.route.params.postId);
  }, [props.route.params.postId]);
  return (
    <Background>
      <FlatList
        data={listCommentsCallback.result ?? []}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <Text>{item.body}</Text>}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 69, paddingTop: 50 }}
        snapToAlignment="start"
        decelerationRate="fast"
      />
    </Background>
  );
}
