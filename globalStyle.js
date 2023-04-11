import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  containerPage: {
    backgroundColor: "#5D52DD",
    flex: 1,
    height: "100%",
  },
  containerNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    margin: 28,
  },
  containerContent: {
    backgroundColor: "white",
    flex: 1,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    // overflow: "hidden",
  },
  textNav: {
    color: "white",
    fontSize: 26,
    width: 240,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 8,
    marginBottom: 8,
    padding: 10,
    fontSize: 14,
  },
  pageTitle: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 26,
  },
  logo: {
    display: "flex",
    height: 100,
    width: 100,
    alignSelf: "center",
    marginVertical: 28,
  },
  card: {
    height: 100,
    width: 280,
    marginRight: 40,
  },
  cardBox: {
    height: 100,
    width: 280,
    marginRight: 40,
  },
  cardTitle: {
    width: 280,
    height: 100,
    borderRadius: 10,
    marginLeft: 10,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  cardImg: {
    width: 40,
    height: 40,
  },
  scrollView: {
    height: 100,
    marginHorizontal: 20,
    marginTop: 20,
    flexGrow: 0,
  },
  root: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
