import React from 'react';
import {
  SafeAreaView,
  Image,
  ImageBackground,
  ScrollView,
  View,
} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Divider,
  Layout,
  TopNavigation,
  Icon,
  Text,
  useStyleSheet,
  StyleService,
} from '@ui-kitten/components';
import {ThemeContext} from '../app/theme-context';
import {SvgUri} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';

const FacebookIcon = (props) => <Icon name="facebook" {...props} />;

export const LoginButton = () => (
  <Button accessoryLeft={FacebookIcon}>Login with Facebook</Button>
);

const StarIcon = (props) => <Icon {...props} name="star" />;

export const HomeScreen = ({navigation}) => {
  const themeContext = React.useContext(ThemeContext);
  const styles = useStyleSheet(themedStyles);
  const navigateDetails = () => {
    navigation.navigate('Details');
  };
  const navigateLogin = () => {
    navigation.navigate('SignIn');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient colors={['rgba(0, 0, 0, 1)', 'rgba(255, 68, 68, 0)']}>
        <TopNavigation
          title="Project SRC"
          alignment="center"
          style={[styles.topNavigator]}
        />
      </LinearGradient>
      <Layout style={styles.container}>
        <LinearGradient
          colors={['rgba(25, 130, 196, 1)', 'rgba(255, 68, 68, 0)']}>
          <ImageBackground
            style={[styles.container, styles.topBar]}
            source={require('../assets/images/image-background-3.jpg')}>
            <Avatar
              style={styles.avatar}
              size="giant"
              source={require('../assets/images/profile.jpg')}
            />
            <Text style={[styles.shadowText, {color: '#FFFFFF'}]} category="h1">
              sconetto{"\n"}
              <Text>Welcome Back!</Text>
            </Text>
          </ImageBackground>
        </LinearGradient>
        <Text style={[styles.shadowText, styles.backgroundText]} category="h1">
          Driver's Profile
        </Text>
      </Layout>
      <Layout style={styles.cardContainer}>
        <ScrollView style={{flexDirection: 'column', flexWrap: 'wrap'}}>
          <Card status="primary" style={[styles.card]}>
            <Text category="h4">Name</Text>
            <Text category="h6" style={[styles.floatTextRight]}>
              João Pedro Sconetto
            </Text>
          </Card>
          <Card status="primary" style={[styles.card]} accessoryLeft={StarIcon}>
            <Text category="h4">Nationality</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <Text
                category="h6"
                style={[styles.floatTextRight, {paddingHorizontal: 10}]}>
                Brazil
              </Text>
              <SvgUri
                style={{maxHeight: 30, maxWidth: 30}}
                uri="https://s3.eu-central-1.amazonaws.com/project.src.flags/br.svg"
              />
            </View>
          </Card>
          <Card status="primary" style={[styles.card]}>
            <Text category="h4">Team</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <Text
                category="h6"
                style={[styles.floatTextRight, {paddingHorizontal: 25}]}>
                McLaren Racing
              </Text>
              <SvgUri
                style={{maxHeight: 30, maxWidth: 130, marginBottom: 5}}
                uri="https://upload.wikimedia.org/wikipedia/en/4/45/McLaren_logo.svg"
              />
            </View>
          </Card>
          <Card status="primary" style={[styles.card]}>
            <Text category="h4">Championships Won</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <Text
                category="h6"
                style={[styles.floatTextRight, {paddingHorizontal: 15}]}>
                8
              </Text>
              <SvgUri
                style={{maxHeight: 28, maxWidth: 28}}
                uri="https://www.svgrepo.com/show/241749/trophy-cup.svg"
              />
            </View>
          </Card>
          <Card status="primary" style={[styles.card]}>
            <Text category="h4">Races Won</Text>
            <Text category="h6" style={[styles.floatTextRight]}>
              92
            </Text>
          </Card>
          <Card status="primary" style={[styles.card]}>
            <Text category="h4">Birth date</Text>
            <Text category="h6" style={[styles.floatTextRight]}>
              06/01/1994
            </Text>
          </Card>
          <Card status="primary" style={[styles.card]}>
            <Text category="h4">Number</Text>
            <Text category="h6" style={[styles.floatTextRight]}>
              07
            </Text>
          </Card>
        </ScrollView>
      </Layout>
      <Layout
        style={{
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          padding: 20,
          flexDirection: 'row',
        }}>
        <Button
          status="info"
          appearance="outline"
          style={{marginVertical: 4, marginHorizontal: 10}}
          onPress={themeContext.toggleTheme}>
          Change Theme
        </Button>
        <Button
          style={{marginVertical: 4}}
          onPress={navigateLogin}
          appearance="outline">
          Log Out
        </Button>
      </Layout>
    </SafeAreaView>
  );
};

const themedStyles = StyleService.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardContainer: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    paddingHorizontal: 10,
  },
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: 'color-basic-transparent-300',
    minWidth: '98%',
    maxWidth: '98%',
  },
  cardText: {
    flex: 0,
  },
  button: {
    margin: 2,
  },
  floatTextRight: {
    textAlign: 'right',
  },
  topBar: {
    minHeight: '18%',
    minWidth: '100%',
    opacity: 0.85,
  },
  avatar: {
    margin: 22,
    width: 128,
    height: 128,
  },
  shadowText: {
    textShadowColor: '#222222',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
  },
  backgroundText: {
    margin: 22,
  },
  topNavigator: {
    backgroundColor: '#747474',
    color: 'color-primary-100',
    fontWeight: 700,
  },
});
