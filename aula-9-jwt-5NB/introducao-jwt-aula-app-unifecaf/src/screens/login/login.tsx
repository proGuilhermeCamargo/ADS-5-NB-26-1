import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import api from "@/src/api/api";
import { router } from "expo-router";
import { storeToken } from "@/src/utils/storage";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validaAcesso = async () => {
    await api.post("auth/login", {
      email: email,
      password: password
    }).then(async (resposta) => {
      console.log("RESPOSTA DA API", resposta.data)
      if(resposta.status == 200){
        const token = resposta.data.token
        await storeToken(token)
        return router.navigate("/(stacks)/home-screen")
      }
    }).catch((err) => {
      alert("Erro no login")
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login com JWT</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Entrar" onPress={validaAcesso} />
    </View>
  );
};
