import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { RootNavigator } from "./RootNavigator";
export const Main = () => {
  return (
    <PaperProvider>
      <RootNavigator />
    </PaperProvider>
  );
};