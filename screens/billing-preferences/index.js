import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, SafeAreaView, ScrollView, Image } from "react-native";

const BillingPreferencesScreen = params => {
  const [billingAddress, setBillingAddress] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [todayHistory, setTodayHistory] = useState([]);
  useEffect(() => {
    setTodayHistory([{
      id: 1,
      title: "Sports Center",
      price: "$125.90"
    }, {
      id: 2,
      title: "Shopping",
      price: "$552.68"
    }, {
      id: 3,
      title: "Income",
      price: "$345.00"
    }]);
  }, []);
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        
        
        
      </ScrollView>
    </SafeAreaView>;
};

const HistoryItem = ({
  transaction
}) => {
  return <View style={styles.historyItem}>
      <View style={styles.description}>
        <Text style={styles.titleText}>{transaction.title}</Text>
        <Text style={styles.QZfAZriA}>
          Invoice
        </Text>
      </View>
      <View style={styles.pricing}>
        <Text style={styles.pricingText}>{transaction.price}</Text>
        <Image source={require("./assets/download.png")} />
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#90EE90",
    position: "absolute"
  },
  cardIcon: {
    width: 30,
    height: 20,
    marginLeft: 20,
    resizeMode: "contain"
  },
  paletteContainer: {
    flexDirection: "row",
    backgroundColor: "#F1F1F1",
    // height: 60,
    // width: 250,
    // width: '70%',
    height: 60,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 15
  },
  selected: {
    backgroundColor: "#fff",
    padding: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e6e6e6"
  },
  unSelected: {
    padding: 10,
    paddingHorizontal: 25
  },
  cardInfo: {
    padding: 20,
    position: "absolute"
  },
  card: {
    alignSelf: "center"
  },
  threeDots: {
    alignSelf: "center",
    marginVertical: 10
  },
  inputContainer: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 5
  },
  inputText: {
    fontSize: 16,
    marginLeft: 20,
    color: "#111112"
  },
  input: {
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    marginVertical: 10,
    width: "100%"
  },
  history: {
    paddingHorizontal: 20
  },
  historyDate: {
    fontSize: 16,
    marginVertical: 10,
    color: "#9B9B9B",
    marginLeft: 20
  },
  historyList: {
    marginVertical: 10,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: "#e6e6e6",
    borderRadius: 10
  },
  historyItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "#e6e6e6",
    height: 80
  },
  description: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 16,
    color: "#111112"
  },
  pricing: {
    marginRight: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  pricingText: {
    marginRight: 10,
    fontSize: 16,
    color: "#111112",
    fontWeight: "bold"
  },
  QZfAZriA: {
    color: "grey"
  }
});
export default BillingPreferencesScreen;