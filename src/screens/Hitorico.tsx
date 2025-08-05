import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type HistoricoProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Historico">;
};

type Chamado = {
  id: string;
  resumo: string;
  status: string;
  setor: string;
  solicitante: string;
};

const chamadosMock: Chamado[] = [
  {
    id: "1",
    resumo: "Computador não liga",
    status: "Concluído",
    setor: "TI",
    solicitante: "João Silva",
  },
  {
    id: "2",
    resumo: "Problema na internet do lab",
    status: "Em aberto",
    setor: "Lab3",
    solicitante: "Maria Oliveira",
  },
  {
    id: "3",
    resumo: "Projetor não funciona",
    status: "Concluído",
    setor: "Coordenação",
    solicitante: "Carlos Souza",
  },
];

export default function Historico({ navigation }: HistoricoProps) {
  const renderItem = ({ item }: { item: Chamado }) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() =>
          navigation.navigate("Acompanhar", {
            resumo: item.resumo,
            status: item.status,
            setor: item.setor,
            solicitante: item.solicitante,
          })
        }
      >
        <Text style={styles.itemResumo}>
          #{item.id} - {item.resumo}
        </Text>
        <Text style={styles.itemStatus}>Status: {item.status}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Chamados</Text>
      <FlatList
        data={chamadosMock}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

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
    padding: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 20,
    alignSelf: "center",
  },
  itemContainer: {
    backgroundColor: "#655ADB",
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
  },
  itemResumo: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  itemStatus: {
    marginTop: 4,
    color: "#FFC107",
    fontWeight: "600",
  },
  voltar: {
    marginTop: 20,
    alignItems: "center",
  },
  voltarTexto: {
    color: "#fff",
    fontWeight: "600",
  },
});
