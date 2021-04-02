import React from 'react';
import {Dimensions, View} from 'react-native';
import {messages} from '../../locales/messages';
import Button from '../../components/Button';
import Container from '../../components/Container';
import {useDispatch, useSelector} from 'react-redux';
import createStyles from '../../utils/createStyles';
import useLogin from '../../hooks/useLogin';
import {TextInput} from '../../components/Input';

const {width, height} = Dimensions.get('screen');

const LoginScreen = ({navigation}) => {
  const styles = getStyles();
  const dispatch = useDispatch();
  const {userLogin, loginStatus, loginError, loginToken} = useLogin();
  const [username, setUsername] = React.useState('nagesh');
  const [password, setPassword] = React.useState('reddy');

  const handleLogin = () => {
    userLogin({username, password});
  };

  React.useEffect(() => {
    if (loginStatus === 'success') {
      navigation.navigate('Home');
    }
  }, [loginStatus, navigation]);

  return (
    <Container
      style={styles.container}
      title={messages.login_title}
      titleProps={{align: 'center', type: 'Headline'}}>
      <TextInput
        size="small"
        label={messages.login_username_input_label}
        value={username}
        onChange={(text) => setUsername(text)}
      />
      <TextInput
        size="small"
        label={messages.login_password_input_label}
        value={password}
        onChange={(text) => setPassword(text)}
      />
      <Button
        disabled={loginStatus === 'loading'}
        position="full"
        size="small"
        onPress={handleLogin}>
        {messages.login_submit_button_text}
      </Button>
    </Container>
  );
};

const getStyles = () => {
  const styles = {
    container: {
      flex: 1,
      width,
      height,
      justifyContent: 'center',
    },
  };
  return createStyles(styles);
};

export default LoginScreen;
