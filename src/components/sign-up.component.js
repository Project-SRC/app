import React from 'react';
import {View, ImageBackground} from 'react-native';
import {
  Button,
  CheckBox,
  Input,
  StyleService,
  Text,
  useStyleSheet,
  Icon,
} from '@ui-kitten/components';
import {ProfileAvatar} from './profile-avatar.component';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const EmailIcon = (props) => <Icon {...props} name="email" />;

const EyeIcon = (props) => <Icon {...props} name="eye" />;

const EyeOffIcon = (props) => <Icon {...props} name="eye-off" />;

const FacebookIcon = (props) => <Icon {...props} name="facebook" />;

const GoogleIcon = (props) => <Icon {...props} name="google" />;

const PersonIcon = (props) => <Icon {...props} name="person" />;

const PlusIcon = (props) => <Icon {...props} name="plus" />;

const TwitterIcon = (props) => <Icon {...props} name="twitter" />;

export const SignUpScreen = ({navigation}) => {
  const [userName, setUserName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [termsAccepted, setTermsAccepted] = React.useState(false);
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const styles = useStyleSheet(themedStyles);

  const onSignUpButtonPress = () => {
    navigation && navigation.goBack();
  };

  const onSignInButtonPress = () => {
    navigation && navigation.navigate('SignIn');
  };

  const onPasswordIconPress = () => {
    setPasswordVisible(!passwordVisible);
  };

  const renderPhotoButton = () => (
    <Button style={styles.editAvatarButton} size="small" accessoryRight={PlusIcon} />
  );

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{x: 0, y: 0}}
      contentContainerStyle={styles.container}
      scrollEnabled={false}>
      <ImageBackground
        style={styles.container}
        source={require('../assets/images/image-background.jpg')}>
        <View style={styles.headerContainer}>
          <ProfileAvatar
            style={styles.profileAvatar}
            source={require('../assets/images/image-person.png')}
            editButton={renderPhotoButton}
          />
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.signUpLabel} category="s1" status="control">
            Create your Project SRC account!
          </Text>
        </View>
        <View style={styles.formContainer}>
          <Input
            style={styles.shadowInput}
            status="control"
            autoCapitalize="none"
            placeholder="User Name"
            accessoryRight={PersonIcon}
            value={userName}
            onChangeText={setUserName}
          />
          <Input
            style={styles.formInput}
            status="control"
            autoCapitalize="none"
            placeholder="Email"
            accessoryRight={EmailIcon}
            value={email}
            onChangeText={setEmail}
          />
          <Input
            style={styles.formInput}
            status="control"
            autoCapitalize="none"
            secureTextEntry={!passwordVisible}
            placeholder="Password"
            accessoryRight={passwordVisible ? EyeIcon : EyeOffIcon}
            value={password}
            onChangeText={setPassword}
            onIconPress={onPasswordIconPress}
          />
          <CheckBox
            status="control"
            style={styles.termsCheckBox}
            textStyle={styles.termsCheckBoxText}
            children="I read and agree to Terms &amp; Conditions"
            checked={termsAccepted}
            onChange={(checked) => setTermsAccepted(checked)}
          />
        </View>
        <Button
          style={styles.signUpButton}
          size="giant"
          onPress={onSignUpButtonPress}>
          SIGN UP
        </Button>
        <View style={styles.socialAuthContainer}>
          <Text style={styles.socialAuthHintText} status="control">
            Or Register Using Social Media
          </Text>
          <View style={styles.socialAuthButtonsContainer}>
            <Button
              appearance="ghost"
              size="giant"
              status="control"
              accessoryRight={FacebookIcon}
            />
            <Button
              appearance="ghost"
              size="giant"
              status="control"
              accessoryRight={GoogleIcon}
            />
            <Button
              appearance="ghost"
              size="giant"
              status="control"
              accessoryRight={TwitterIcon}
            />
          </View>
        </View>
        <Button
          style={styles.signInButton}
          appearance="ghost"
          status="control"
          onPress={onSignInButtonPress}>
          Already have account? Sign In
        </Button>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 146,
  },
  labelContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileAvatar: {
    width: 92,
    height: 92,
    borderRadius: 46,
    alignSelf: 'center',
    backgroundColor: 'background-basic-color-1',
    tintColor: 'text-hint-color',
  },
  editAvatarButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  formContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  formInput: {
    marginTop: 16,
    backgroundColor: 'color-basic-transparent-600',
  },
  shadowInput: {
    backgroundColor: 'color-basic-transparent-600'
  },
  termsCheckBox: {
    marginTop: 24,
    marginBottom: 16,
  },
  termsCheckBoxText: {
    fontWeight: 'bold',
    textShadowColor: '#222222',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  signUpButton: {
    marginHorizontal: 16,
  },
  signInButton: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  signUpLabel: {
    marginTop: 16,
    textShadowColor: '#222222',
    textShadowOffset: {width: 1, height: 1},
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
  },
});
