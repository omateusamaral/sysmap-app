import { Fontisto } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { useAsyncCallback } from "react-async-hook";
import { FlatList, StatusBar, View } from "react-native";
import { Text } from "react-native-paper";
import { listPosts } from "../../api";
import { theme } from "../../global/styles/theme";
import Background from "../common/Background";
import { ErrorDialog } from "../common/ErrorDialog";
import { PostItem } from "./PostItem";

export function Posts() {
  const listPostsCallback = useAsyncCallback(listPosts);

  useEffect(() => {
    listPostsCallback.execute();
  }, []);

  return (
    <Background>
      <View
        style={{
          marginTop: StatusBar.currentHeight,
          alignItems: "center",
        }}
      >
        <Text
          variant="displayMedium"
          style={{
            color: theme.colors.heading,
          }}
        >
          SysMap <Fontisto name="map" size={24} color="white" />
        </Text>
      </View>
      <FlatList
        data={listPostsCallback.result ?? []}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <PostItem content={item.body} title={item.title} postId={item.id} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 69, paddingTop: 50 }}
        snapToAlignment="start"
        decelerationRate="fast"
      />
      <ErrorDialog
        error={listPostsCallback.error}
        hideDialog={listPostsCallback.reset}
      />
    </Background>
  );
}
