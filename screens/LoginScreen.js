import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 30 }}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://drive.google.com/file/d/1lw_46L9SSMmEhDg0lsJN4uw1Wz5YH_f2/view?usp=share_link",
          }}
        />
      </View>
      <Text>Login to your account</Text>
    </SafeAreaView>
  );
};

export default LoginScreen;
// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    borderBlockColor: "red",
    borderWidth: 3,
  },
});
