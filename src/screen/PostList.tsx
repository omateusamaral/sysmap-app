import { Fontisto } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { useAsyncCallback } from "react-async-hook";
import { FlatList, StatusBar, View } from "react-native";
import { Text } from "react-native-paper";
import { listPosts } from "../api";
import Background from "../components/common/Background";
import { EmptyList } from "../components/common/EmptyList";
import { ErrorDialog } from "../components/common/ErrorDialog";
import { Loader } from "../components/common/Loader";
import PostItem from "../components/posts/PostItem";
import { theme } from "../global/styles/theme";

export function PostList() {
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
      {listPostsCallback.loading ? (
        <Loader />
      ) : (
        <FlatList
          data={listPostsCallback.result ?? []}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => (
            <PostItem
              content={item.body}
              title={item.title}
              postId={item.id}
              userId={item.userId}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 69, paddingTop: 50 }}
          snapToAlignment="start"
          decelerationRate="fast"
          ListEmptyComponent={EmptyList}
        />
      )}
      <ErrorDialog
        error={listPostsCallback.error}
        hideDialog={listPostsCallback.reset}
      />
    </Background>
  );
}
