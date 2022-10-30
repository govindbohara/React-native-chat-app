/* eslint-disable react-native/no-inline-styles */
import {Link} from '@react-navigation/native'
import {
  View,
  Text,
  Box,
  Button,
  Container,
  Center,
  Image,
  useToast,
} from 'native-base'
import {color} from 'native-base/lib/typescript/theme/styled-system'
import {useForm} from 'react-hook-form'
import {StyleSheet} from 'react-native'
import useFirebaseLogin from '../hooks/use-firebase-login'
import {zodResolver} from '@hookform/resolvers/zod'
import {FormInput} from '../src/components/common'
import {LoginPayload} from '../validation/LoginValidationSchema'

const Login = () => {
  const {
    control,
    getValues,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(LoginPayload),
  })
  const toast = useToast()
  const {loading, error, login} = useFirebaseLogin()
  const onSubmit = handleSubmit(data => {
    const {email, password} = data
    login(email, password, message => {
      toast.show({
        description: message,
        placement: 'bottom',
      })
    })
    if (error) {
      toast.show({
        description: error,
        placement: 'bottom',
      })
    }
  })
  return (
    <View style={styles.Container}>
      <Center style={styles.ImageContainer}>
        <Image
          source={require('../assets/images/login.png')}
          alt="Login"
          width={144}
          borderRadius={100}
          height={139}
        />
      </Center>
      <View style={styles.TextContainer}>
        <Text style={styles.Welcometext}>Hi, Wecome Back! 👋</Text>
        <Text style={styles.HelloText}>
          Hello again, you&apos;ve been missed!
        </Text>
      </View>
      <View style={styles.FormContainer}>
        <FormInput
          name="email"
          label="Email"
          control={control}
          placeholder="Enter your email"
          keyboardType="email-address"
          error={errors.email?.message}
        />
        <View style={{marginTop: 10}}>
          <FormInput
            name="password"
            label="Password"
            control={control}
            placeholder="Enter your password"
            error={errors.password?.message}
            type="password"
          />
        </View>
      </View>

      <Button
        onPress={onSubmit}
        style={styles.Button}
        size="lg"
        isLoading={loading}
        isLoadingText="Loading">
        Login
      </Button>
      <Center style={styles.AlreadyContainer}>
        <Text style={styles.Alreadytext}>
          Have not signed Up?{' '}
          <Link to={'/Signup'} style={{color: '#160062', fontWeight: '400'}}>
            Sign up
          </Link>
        </Text>
      </Center>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: 10,
  },
  ImageContainer: {
    marginTop: 7,
    // backgroundColor: 'red',
  },
  TextContainer: {
    paddingTop: 25,
    marginBottom: 32,
    marginLeft: 32,
    // backgroundColor: '#ccc',
  },
  Welcometext: {
    fontSize: 25,
    fontWeight: '600',
    color: '#000',
    // backgroundColor: 'green',
    paddingTop: 10,
  },
  HelloText: {
    fontSize: 14,
    color: '#999EA1',
    fontWeight: '600',
  },
  FormContainer: {
    marginHorizontal: 27,
  },
  Button: {
    marginHorizontal: 27,
    borderRadius: 5,
    marginTop: 25,

    borderColor: '#000000',
    borderWidth: 1,
  },
  AlreadyContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  Alreadytext: {
    fontSize: 16,
    fontWeight: '600',
    color: '#999EA1',
  },
})
