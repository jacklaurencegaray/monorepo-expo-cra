import React from "react"
import { StyleSheet, Text, View } from "react-native"

import test from "core/test"

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Test is: {test}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
