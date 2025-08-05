import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButtom";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

const Home: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleAcompanhar = () => {
    navigation.navigate("Acompanhar", {
      resumo: "Exemplo de problema",
      status: "Em aberto",
      setor: "TI",
      solicitante: "Usuário Teste",
    });
  };

  const handleNovoChamado = () => {
    navigation.navigate("Chamado");
  };

  const handleHistorico = () => {
    navigation.navigate("Historico");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chamado Fatec Itu</Text>

      <View style={styles.buttonContainer}>
        <CustomButton label="Acompanhar" onClick={handleAcompanhar} />
        <CustomButton label="Novo Chamado" onClick={handleNovoChamado} />
        <CustomButton label="Histórico de Chamados" onClick={handleHistorico} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#786EFD",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 40,
  },
  buttonContainer: {
    width: "100%",
    maxWidth: 400,
    gap: 16,
  },
});
