import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import { Colors } from "../Themes/colors.ts";
import { styles as GlobalStyles } from "../Themes/global_styles.tsx";

import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from "react-native-safe-area-context";

import GoBackButton2 from "../Komponenty/DodajStudioPanel/GoBackButton2.tsx";
export default DodajStudioPanel;
function DodajStudioPanel() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View style={[GlobalStyles.body, { paddingTop: insets.top }]}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.backButton}>
              <GoBackButton2 />
            </View>

            <Text style={styles.title}>Dodaj salon</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  backButton: {
    position: "absolute",
    left: 0,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
  },
});
