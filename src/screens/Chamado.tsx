import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import CustomButton from "../components/CustomButtom";
import { RootStackParamList } from "../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type ChamadoProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Chamado">;
};

export default function Chamado({ navigation }: ChamadoProps) {
  const [setor, setSetor] = useState("");
  const [solicitante, setSolicitante] = useState("");
  const [problema, setProblema] = useState("");

  const enviarChamado = () => {
    if (!setor || !solicitante || !problema) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    navigation.navigate("Acompanhar", {
      resumo: problema,
      status: "Em aberto",
      setor,
      solicitante,
    });

    console.log("Chamado enviado:", { setor, solicitante, problema });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Abrir um novo chamado</Text>

      <Text style={styles.label}>Selecione o Setor</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={setor}
          onValueChange={(itemValue) => setSetor(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Selecione um setor..." value="" />
          <Picker.Item
            label="Secretaria acadêmica"
            value="Secretaria acadêmica"
          />
          <Picker.Item label="Administrativo" value="Administrativo" />
          <Picker.Item label="Direção" value="Direção" />
          <Picker.Item label="Coordenação" value="Coordenação" />
          <Picker.Item label="Lab1" value="Lab1" />
          <Picker.Item label="Lab2" value="Lab2" />
          <Picker.Item label="Lab3" value="Lab3" />
          <Picker.Item label="Lab4" value="Lab4" />
          <Picker.Item label="Lab5" value="Lab5" />
          <Picker.Item label="Lab6" value="Lab6" />
        </Picker>
      </View>

      <Text style={styles.label}>Solicitante</Text>
      <TextInput
        style={styles.input}
        value={solicitante}
        onChangeText={setSolicitante}
        placeholder="Digite o nome"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Descreva o problema</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={problema}
        onChangeText={setProblema}
        placeholder="Descreva o problema"
        placeholderTextColor="#999"
        multiline
        numberOfLines={4}
      />

      <CustomButton label="Enviar" onClick={enviarChamado} />

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
    backgroundColor: "#7678ED",
    padding: 20,
    justifyContent: "center",
  },
  titulo: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 30,
    alignSelf: "center",
  },
  label: {
    color: "#fff",
    fontWeight: "500",

    marginBottom: 12,
    flexWrap: "wrap",
    fontSize: 16,
  },
  pickerContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 20,
  },
  picker: {
    height: 50,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    height: 40,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
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
