import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import SceneNavigator from './components/SceneNavigator';

const Dashboard = (props) => {
  const { navigation, route } = props;
  const [isCameraOpen, setIsCameraOpen] = useState(true);
  const [show360, setShow360] = useState(false);
  const [showText, setShowText] = useState(false);

  return (
    <>
      <View style={styles.outerContainer}>
        <View style={styles.viroContainer}>
          {isCameraOpen ? (
            <SceneNavigator
              show360={show360}
              show3D={false}
              showText={showText}
            />
          ) : null}
        </View>
        <View style={styles.toolbarContaner}>
          {/* <TouchableOpacity
            style={styles.cameraBtn}
            onPress={() => {
              setIsCameraOpen(!isCameraOpen);
            }}
          >
            <Text>Open Camera</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={styles.cameraBtn}
            onPress={() => {
              setShow360(!show360);
            }}
          >
            <Text>360 view</Text>
          </TouchableOpacity>
        </View>
      </View>
      <SafeAreaView />
    </>
  );
};
export default Dashboard;

var styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  viroContainer: {
    flex: 1,
  },
  toolbarContaner: {
    backgroundColor: 'white',
  },
  cameraBtn: {
    backgroundColor: 'white',
    padding: 10,
    borderColor: '#000',
    borderRadius: 8,
    borderWidth: 1,
  },
});
