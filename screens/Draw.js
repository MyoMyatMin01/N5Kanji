import { Button } from "native-base";
import React, { useState, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import RNDrawOnScreen from "react-native-draw-on-screen";
import { Ionicons, Fontisto, MaterialIcons } from "@expo/vector-icons";

function Draw({ navigation }) {
  let [blackBorderColor, setBlackBorderColor] = useState("#ffe600");
  let [redBorderColor, setRedBorderColor] = useState("#fff");
  let [yellowBorderColor, setYellowBorderColor] = useState("#fff");
  let [greenBorderColor, setGreenBorderColor] = useState("#fff");
  let [cyanBorderColor, setCyanBorderColor] = useState("#fff");
  let [blueBorderColor, setBlueBorderColor] = useState("#fff");
  let [violetBorderColor, setVioletBorderColor] = useState("#fff");

  let [color, setColor] = useState("#000");

  let [smallestBorderColor, setSmallestBorderColor] = useState("#ffe600");
  let [smallerBorderColor, setSmallerBorderColor] = useState("#fff");
  let [smallBorderColor, setSamllBorderColor] = useState("#fff");
  let [bigBorderColor, setBigBorderColor] = useState("#fff");
  let [biggerBorderColor, setBiggerBorderColor] = useState("#fff");
  let [biggestBorderColor, setBiggestBorderColor] = useState("#fff");

  let [strokeWidth, setStrokeWidth] = useState(20);

  let [fabActiveColor, setFabActiveColor] = useState(false);
  let [fabActiveStrokeWidth, setFabActiveStrokeWidth] = useState(false);

  let rnDraw = useRef();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Button
          transparent
          style={styles.backArrowStyle}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="md-arrow-back-outline" size={30} color="#616161" />
        </Button>
        <Text style={styles.title}>Practice</Text>
      </View>

      <View style={styles.colorContainer}>
        <Button
          rounded
          onPress={() => rnDraw.current.undo()}
          style={styles.buttonStyle}
        >
          <Ionicons name="arrow-undo-sharp" size={24} color="#fff" />
        </Button>
        <Button
          rounded
          onPress={() => rnDraw.current.clear()}
          style={styles.buttonStyle}
        >
          <MaterialIcons name="cleaning-services" size={24} color="#fff" />
        </Button>
        <Fab
          active={fabActiveColor}
          direction="right"
          containerStyle={{}}
          style={{ backgroundColor: "#616161" }}
          position="topLeft"
          onPress={() => {
            setFabActiveColor(!fabActiveColor);
          }}
        >
          <Ionicons name="md-color-palette-sharp" size={24} color="black" />

          <Button
            onPress={() => {
              setBlackBorderColor("#ffe600");
              setRedBorderColor("#fff");
              setYellowBorderColor("#fff");
              setGreenBorderColor("#fff");
              setCyanBorderColor("#fff");
              setBlueBorderColor("#fff");
              setVioletBorderColor("#fff");

              setColor("#000");
            }}
            style={[
              styles.colorCircle,
              { backgroundColor: "#000", borderColor: blackBorderColor },
            ]}
          />
          <Button
            onPress={() => {
              setBlackBorderColor("#fff");
              setRedBorderColor("#ffe600");
              setYellowBorderColor("#fff");
              setGreenBorderColor("#fff");
              setCyanBorderColor("#fff");
              setBlueBorderColor("#fff");
              setVioletBorderColor("#fff");

              setColor("#fc1c03");
            }}
            style={[
              styles.colorCircle,
              { backgroundColor: "#fc1c03", borderColor: redBorderColor },
            ]}
          />
          <Button
            onPress={() => {
              setBlackBorderColor("#fff");
              setRedBorderColor("#fff");
              setYellowBorderColor("#ffe600");
              setGreenBorderColor("#fff");
              setCyanBorderColor("#fff");
              setBlueBorderColor("#fff");
              setVioletBorderColor("#fff");

              setColor("#fcdf00");
            }}
            style={[
              styles.colorCircle,
              { backgroundColor: "#fcdf00", borderColor: yellowBorderColor },
            ]}
          />
          <Button
            onPress={() => {
              setBlackBorderColor("#fff");
              setRedBorderColor("#fff");
              setYellowBorderColor("#fff");
              setGreenBorderColor("#ffe600");
              setCyanBorderColor("#fff");
              setBlueBorderColor("#fff");
              setVioletBorderColor("#fff");

              setColor("#51ff00");
            }}
            style={[
              styles.colorCircle,
              { backgroundColor: "#51ff00", borderColor: greenBorderColor },
            ]}
          />
          <Button
            onPress={() => {
              setBlackBorderColor("#fff");
              setRedBorderColor("#fff");
              setYellowBorderColor("#fff");
              setGreenBorderColor("#fff");
              setCyanBorderColor("#ffe600");
              setBlueBorderColor("#fff");
              setVioletBorderColor("#fff");

              setColor("#00ffea");
            }}
            style={[
              styles.colorCircle,
              { backgroundColor: "#00ffea", borderColor: cyanBorderColor },
            ]}
          />
          <Button
            onPress={() => {
              setBlackBorderColor("#fff");
              setRedBorderColor("#fff");
              setYellowBorderColor("#fff");
              setGreenBorderColor("#fff");
              setCyanBorderColor("#fff");
              setBlueBorderColor("#ffe600");
              setVioletBorderColor("#fff");

              setColor("#000dff");
            }}
            style={[
              styles.colorCircle,
              { backgroundColor: "#000dff", borderColor: blueBorderColor },
            ]}
          />
          <Button
            onPress={() => {
              setBlackBorderColor("#fff");
              setRedBorderColor("#fff");
              setYellowBorderColor("#fff");
              setGreenBorderColor("#fff");
              setCyanBorderColor("#fff");
              setBlueBorderColor("#fff");
              setVioletBorderColor("#ffe600");

              setColor("#ff00d9");
            }}
            style={[
              styles.colorCircle,
              { backgroundColor: "#ff00d9", borderColor: violetBorderColor },
            ]}
          />
        </Fab>
      </View>
      <View style={styles.colorContainer}>
        <Fab
          active={fabActiveStrokeWidth}
          direction="right"
          containerStyle={{}}
          style={{ backgroundColor: "#616161" }}
          position="topLeft"
          onPress={() => {
            setFabActiveStrokeWidth(!fabActiveStrokeWidth);
          }}
        >
          <Fontisto name="text-width" size={24} color="#fff" />
          <Button
            onPress={() => {
              setSmallestBorderColor("#fff");
              setSmallerBorderColor("#fff");
              setSamllBorderColor("#fff");
              setBigBorderColor("#fff");
              setBiggerBorderColor("#fff");
              setBiggestBorderColor("#ffe600");

              setStrokeWidth(85);
            }}
            style={[
              styles.strokeChoiceCircle,
              {
                width: 39,
                height: 39,
                borderRadius: 39 / 2,
                borderColor: biggestBorderColor,
              },
            ]}
          />
          <Button
            onPress={() => {
              setSmallestBorderColor("#fff");
              setSmallerBorderColor("#fff");
              setSamllBorderColor("#fff");
              setBigBorderColor("#fff");
              setBiggerBorderColor("#ffe600");
              setBiggestBorderColor("#fff");

              setStrokeWidth(70);
            }}
            style={[
              styles.strokeChoiceCircle,
              {
                width: 34,
                height: 34,
                borderRadius: 34 / 2,
                borderColor: biggerBorderColor,
              },
            ]}
          />
          <Button
            onPress={() => {
              setSmallestBorderColor("#fff");
              setSmallerBorderColor("#fff");
              setSamllBorderColor("#fff");
              setBigBorderColor("#ffe600");
              setBiggerBorderColor("#fff");
              setBiggestBorderColor("#fff");

              setStrokeWidth(60);
            }}
            style={[
              styles.strokeChoiceCircle,
              {
                width: 29,
                height: 29,
                borderRadius: 29 / 2,
                borderColor: bigBorderColor,
              },
            ]}
          />
          <Button
            onPress={() => {
              setSmallestBorderColor("#fff");
              setSmallerBorderColor("#fff");
              setSamllBorderColor("#ffe600");
              setBigBorderColor("#fff");
              setBiggerBorderColor("#fff");
              setBiggestBorderColor("#fff");

              setStrokeWidth(50);
            }}
            style={[
              styles.strokeChoiceCircle,
              {
                width: 24,
                height: 24,
                borderRadius: 24 / 2,
                borderColor: smallBorderColor,
              },
            ]}
          />
          <Button
            onPress={() => {
              setSmallestBorderColor("#fff");
              setSmallerBorderColor("#ffe600");
              setSamllBorderColor("#fff");
              setBigBorderColor("#fff");
              setBiggerBorderColor("#fff");
              setBiggestBorderColor("#fff");

              setStrokeWidth(36);
            }}
            style={[
              styles.strokeChoiceCircle,
              {
                width: 19,
                height: 19,
                borderRadius: 19 / 2,
                borderColor: smallerBorderColor,
              },
            ]}
          />
          <Button
            onPress={() => {
              setSmallestBorderColor("#ffe600");
              setSmallerBorderColor("#fff");
              setSamllBorderColor("#fff");
              setBigBorderColor("#fff");
              setBiggerBorderColor("#fff");
              setBiggestBorderColor("#fff");

              setStrokeWidth(26);
            }}
            style={[
              styles.strokeChoiceCircle,
              {
                width: 14,
                height: 14,
                borderRadius: 14 / 2,
                borderColor: smallestBorderColor,
              },
            ]}
          />
        </Fab>
      </View>
      <View style={styles.canvas}>
        <RNDrawOnScreen
          ref={rnDraw}
          penColor={color}
          strokeWidth={strokeWidth}
        />
      </View>
    </View>
  );
}

export default Draw;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    borderWidth: 4,
    borderColor: "#ffe600",
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    width: "100%",
    height: 65,
    backgroundColor: "#ffe600",
    alignItems: "center",
  },
  colorContainer: {
    flexDirection: "row",
    width: "100%",
    height: 80,
    // backgroundColor: "blue",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  canvas: {
    flex: 1,
  },
  colorCircle: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    borderWidth: 3,
  },
  backArrowStyle: {
    alignSelf: "center",
  },
  strokeChoiceCircle: {
    backgroundColor: "#000",
    borderWidth: 3,
  },
  buttonStyle: {
    marginRight: 7,
    backgroundColor: "#616161",
    width: 48,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  title: {
    color: "#616161",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
  },
});
