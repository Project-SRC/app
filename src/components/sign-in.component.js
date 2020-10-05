import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {Button, Input, Text, Icon} from '@ui-kitten/components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const EyeIcon = (props) => <Icon {...props} name="eye" />;

const EyeOffIcon = (props) => <Icon {...props} name="eye-off" />;

const FacebookIcon = (props) => <Icon {...props} name="facebook" />;

const GoogleIcon = (props) => <Icon {...props} name="google" />;

const PersonIcon = (props) => <Icon {...props} name="person" />;

const TwitterIcon = (props) => <Icon {...props} name="twitter" />;

export const SignInScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const onSignInButtonPress = () => {
    navigation && navigation.goBack();
  };

  const onSignUpButtonPress = () => {
    navigation && navigation.navigate('SignUp');
  };

  const onForgotPasswordButtonPress = () => {
    navigation && navigation.navigate('ForgotPassword');
  };

  const onPasswordIconPress = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={false}>
      <ImageBackground
        style={styles.container}
        source={require('../assets/images/image-background-1.jpg')}>
        <View style={styles.headerContainer}>
          <Text category="h1" status="control" style={styles.shadowText}>
            Welcome Driver!
          </Text>
          <Text style={styles.signInLabel} category="s1" status="control">
            Sign in to your Project SRC account
          </Text>
        </View>
        <View style={styles.formContainer}>
          <Input
            status="control"
            placeholder="Email"
            accessoryRight={PersonIcon}
            value={email}
            onChangeText={setEmail}
          />
          <Input
            style={styles.passwordInput}
            status="control"
            placeholder="Password"
            accessoryRight={passwordVisible ? EyeIcon : EyeOffIcon}
            value={password}
            secureTextEntry={!passwordVisible}
            onChangeText={setPassword}
            onIconPress={onPasswordIconPress}
          />
          <View style={styles.forgotPasswordContainer}>
            <Button
              style={styles.forgotPasswordButton}
              appearance="ghost"
              status="control"
              onPress={onForgotPasswordButtonPress}>
              Forgot your password?
            </Button>
          </View>
        </View>
        <Button
          style={styles.signInButton}
          size="giant"
          onPress={onSignInButtonPress}>
          SIGN IN
        </Button>
        <View style={styles.socialAuthContainer}>
          <Text style={styles.socialAuthHintText} status="control">
            Or Sign In using Social Media
          </Text>
          <View style={styles.socialAuthButtonsContainer}>
            <Button
              appearance="ghost"
              status="control"
              size="giant"
              accessoryRight={FacebookIcon}
            />
            <Button
              appearance="ghost"
              status="control"
              size="giant"
              accessoryRight={GoogleIcon}
            />
            <Button
              appearance="ghost"
              status="control"
              size="giant"
              accessoryRight={TwitterIcon}
            />
          </View>
        </View>
        <Button
          style={styles.signUpButton}
          appearance="ghost"
          status="control"
          onPress={onSignUpButtonPress}>
          Don't have an account? Sign Up
        </Button>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    minHeight: 216,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadowText: {
    textShadowColor: '#222222',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  signInLabel: {
    marginTop: 16,
    textShadowColor: '#222222',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  passwordInput: {
    marginTop: 16,
  },
  signInButton: {
    marginHorizontal: 16,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
    textShadowColor: '#222222',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  signUpButton: {
    marginVertical: 12,
    textShadowColor: '#222222',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  socialAuthContainer: {
    marginTop: 32,
  },
  socialAuthButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialAuthHintText: {
    alignSelf: 'center',
    marginBottom: 16,
    textShadowColor: '#222222',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});
