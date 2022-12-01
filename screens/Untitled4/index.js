import { Pressable } from "react-native";
import { TextInput } from "react-native";
import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled4 = () => {
  return <View style={_styles.uLPMQMwC}>
      <Text style={_styles.dmpzSqsb}>Privacy Policy</Text><ImageBackground style={_styles.oJiXVaqN} source={{
      uri: "data:image/jpeg;base64,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"
    }} resizeMode="cover"></ImageBackground><Text style={_styles.gTxtEglU}>Shinuu</Text><Text style={_styles.TytbkbFY}>Sign up for your e-Wallet and watch your rewards money grow </Text><TextInput style={_styles.BlZoDBFm} spellCheck={true} enablesReturnKeyAutomatically={true}></TextInput><TextInput style={_styles.OXmKLXLY}></TextInput><Text style={_styles.GrQcKnuv}>Email</Text><Text style={_styles.EYPkjfvZ}>Password</Text><Pressable onPress={{}}><Text style={_styles.zwFQKzks}>Create Account</Text></Pressable><Text style={_styles.HJLqANJF}>OR
Log In with </Text><Pressable onPress={{}}><Text style={_styles.auuozdKT}>Gmail </Text></Pressable><Pressable onPress={{}}><Text style={_styles.NgZfsgkc}>Facebook</Text></Pressable><Text style={_styles.DNiRTuxy}>Email</Text></View>;
};

export default Untitled4;

const _styles = StyleSheet.create({
  uLPMQMwC: {
    backgroundColor: "#ffffff",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  dePSsuaf: {
    left: -23,
    top: 126,
    position: "absolute",
    width: 424,
    height: 306
  },
  dmpzSqsb: {
    left: 98,
    top: 580,
    position: "absolute",
    width: 169,
    height: 35,
    lineHeight: 24,
    fontSize: 17,
    borderRadius: 0,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 2,
    color: "#ADD8E6"
  },
  SSfrJHBH: {
    left: 23,
    top: 127,
    position: "absolute",
    width: 131,
    height: 92
  },
  oJiXVaqN: {
    left: 18,
    top: 71,
    position: "absolute",
    width: 105,
    height: 67
  },
  gTxtEglU: {
    left: 131,
    top: 95,
    position: "absolute",
    width: 77,
    height: 28,
    lineHeight: 20,
    fontSize: 16,
    borderRadius: 0,
    letterSpacing: 2,
    fontWeight: "700",
    color: "#00008B"
  },
  TytbkbFY: {
    left: 20,
    top: 163,
    position: "absolute",
    width: 323,
    height: 50,
    lineHeight: 21,
    fontSize: 17,
    borderRadius: 0,
    fontWeight: "500",
    letterSpacing: 2,
    textAlign: "center",
    color: "#00008B"
  },
  BlZoDBFm: {
    left: 125,
    top: 245,
    position: "absolute",
    backgroundColor: "#eae5e5",
    borderColor: "#cccccc",
    width: 150,
    height: 31,
    color: "#ADD8E6"
  },
  OXmKLXLY: {
    left: 128,
    top: 303,
    position: "absolute",
    backgroundColor: "#eae5e5",
    borderColor: "#cccccc",
    width: 147,
    height: 31
  },
  GrQcKnuv: {
    left: 19,
    top: 250,
    position: "absolute",
    width: 60,
    height: 24,
    lineHeight: 14,
    fontSize: 16,
    borderRadius: 0,
    letterSpacing: 2,
    fontWeight: "500"
  },
  EYPkjfvZ: {
    left: 13,
    top: 306,
    position: "absolute",
    width: 90,
    height: 26,
    lineHeight: 16,
    fontSize: 16,
    borderRadius: 0,
    letterSpacing: 2,
    fontWeight: "500"
  },
  QtMfUzpn: {
    width: 221,
    height: 53,
    lineHeight: 17,
    fontSize: 15,
    borderRadius: 0,
    letterSpacing: 2,
    fontWeight: "500",
    textAlign: "center",
    opacity: 1,
    fontFamily: "inherit"
  },
  VcvodKXz: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  zwFQKzks: {
    width: 100,
    height: 28,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 40,
    position: "absolute",
    left: 123,
    top: 368,
    color: "#00008B",
    fontWeight: "700",
    fontFamily: "inherit",
    opacity: 1,
    textAlign: "center"
  },
  HJLqANJF: {
    width: 66,
    height: 43,
    lineHeight: 16,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 147,
    top: 420,
    letterSpacing: 2,
    fontWeight: "700",
    textAlign: "center"
  },
  auuozdKT: {
    width: 65,
    height: 26,
    lineHeight: 16,
    fontSize: 16,
    borderRadius: 0,
    position: "absolute",
    left: 23,
    top: 504,
    letterSpacing: 2,
    fontWeight: "700",
    textAlign: "center"
  },
  NgZfsgkc: {
    width: 97,
    height: 27,
    lineHeight: 16,
    fontSize: 16,
    borderRadius: 0,
    position: "absolute",
    left: 234,
    top: 502,
    textAlign: "center",
    letterSpacing: 2,
    fontWeight: "700"
  },
  DNiRTuxy: {
    width: 69,
    height: 25,
    lineHeight: 16,
    fontSize: 16,
    borderRadius: 0,
    position: "absolute",
    left: 140,
    top: 475,
    fontWeight: "700",
    letterSpacing: 2,
    textAlign: "center"
  }
});