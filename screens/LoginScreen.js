import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 70 }}>
        <Image style={styles.logo} source={require("../assets/64.jpg")} />
      </View>
      <KeyboardAvoidingView>
        <View style={styles.title_wrap}>
          <Text style={styles.title}>Login to your account</Text>
        </View>
        <View style={styles.input_wrap}>
          <View style={styles._input}>
            <Ionicons
              style={{ marginLeft: 5 }}
              name="ios-mail"
              size={25}
              color="black"
            />
            <TextInput
              style={{
                marginVertical: 8,
                color: "gray",
                width: 280,
                fontSize: password ? 16 : 16,
              }}
              placeholder="example@mail.com"
              placeholderTextColor={"gray"}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View style={styles._input}>
            <Ionicons
              style={{ marginLeft: 5 }}
              name="lock-closed"
              size={25}
              color="black"
            />
            <TextInput
              style={{
                marginVertical: 8,
                color: "gray",
                width: 280,
                fontSize: password ? 16 : 16,
              }}
              placeholder="password"
              placeholderTextColor={"gray"}
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
            />
          </View>

          <View style={styles.text_links}>
            <Text>Keep me logged in</Text>
            <Text
              style={{
                color: "#007FFF",
                fontWeight: 500,
              }}
            >
              Forgot password
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
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
  },
  title_wrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginTop: 15,
  },
  input_wrap: {
    marginTop: 35,
  },
  _input: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    gap: 5,
    borderColor: "#D0D0D0",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginBottom: 30,
  },
  text_links: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 3,
    marginTop: -18,
  },
});
