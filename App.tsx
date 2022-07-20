import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Video from 'react-native-video';

const styles = StyleSheet.create({
  pressable: {
    alignItems: 'center',
    backgroundColor: '#EEE',
    borderRadius: 8,
    margin: 100,
    padding: 20,
  },
  video: {
    width: Dimensions.get('window').width,
    height: 500,
  },
});

const VideoFrame = () => {
  return (
    <Video
      contentStartTime={3}
      muted
      source={require('./assets/sample-video.mp4')}
      style={styles.video}
    />
  );
};

const App = () => {
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    if (isResetting) {
      setTimeout(() => setIsResetting(false), 500);
    }
  }, [isResetting]);

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      {isResetting ? <View style={styles.video} /> : <VideoFrame />}
      <Pressable onPress={() => setIsResetting(true)} style={styles.pressable}>
        <Text>Reload</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;
