import { images } from "@/assets/images";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, Text } from "react-native";
function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          TabBarIcon: ({ focused }) => (
            <>
              <ImageBackground source={images.highlight}>
                {" "}
                <Image
                  source={images.home}
                  tintColor="#151312"
                  className="size-5"
                />
                <Text>Home</Text>
              </ImageBackground>
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Profile", headerShown: false }}
      />
      <Tabs.Screen
        name="saved"
        options={{ title: "Saved", headerShown: false }}
      />
      <Tabs.Screen
        name="search"
        options={{ title: "Search", headerShown: false }}
      />
    </Tabs>
  );
}

export default _layout;
