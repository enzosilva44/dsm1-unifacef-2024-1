import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  container__icons: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default styles;
