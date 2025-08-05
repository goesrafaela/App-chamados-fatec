import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface CustomButtonProps {
  label: string;
  onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, onClick }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onClick}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: "80%",
    backgroundColor: "#38BAB4",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 8,
  },
  label: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16,
  },
});
