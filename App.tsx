import React from 'react';
import {Dimensions, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Video from 'react-native-video';

const styles = StyleSheet.create({
  video: {
    width: Dimensions.get('window').width,
    height: 500,
  },
});

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <Video
        contentStartTime={3}
        muted
        repeat
        source={require('./assets/sample-video.mp4')}
        style={styles.video}
      />
    </SafeAreaView>
  );
};

export default App;
