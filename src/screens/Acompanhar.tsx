import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../navigation/types";
import { RouteProp } from "@react-navigation/native";

type AcompanharScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Acompanhar"
>;
type AcompanharScreenRouteProp = RouteProp<RootStackParamList, "Acompanhar">;

type Props = {
  navigation: AcompanharScreenNavigationProp;
  route: AcompanharScreenRouteProp;
};

export default function Acompanhar({ navigation, route }: Props) {
  const { resumo, status, setor, solicitante } = route.params;
  const isConcluido = status.toLowerCase() === "concluído";

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resumo do chamado:</Text>
      <Text style={styles.texto}>{resumo}</Text>

      <Text style={styles.titulo}>Setor:</Text>
      <Text style={styles.texto}>{setor}</Text>

      <Text style={styles.titulo}>Solicitante:</Text>
      <Text style={styles.texto}>{solicitante}</Text>

      <Text style={styles.titulo}>Status:</Text>
      <Text
        style={[
          styles.statusTexto,
          isConcluido ? styles.concluido : styles.aberto,
        ]}
      >
        {isConcluido ? "Chamado concluído ✅" : "Chamado em aberto ⏳"}
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.voltar}
      >
        <Text style={styles.voltarTexto}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7A71F9",
    padding: 20,
    justifyContent: "center",
  },
  titulo: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
    marginBottom: 8,
    marginTop: 12,
  },
  texto: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },
  statusTexto: {
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 20,
  },
  concluido: {
    color: "#4CAF50",
  },
  aberto: {
    color: "#FFC107",
  },
  voltar: {
    marginTop: 40,
    alignItems: "center",
  },
  voltarTexto: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
