/* eslint-disable react-native/no-inline-styles */
import {Link} from '@react-navigation/native'
import {
  View,
  Text,
  useToast,
  Box,
  Button,
  Center,
  Image,
  Alert,
} from 'native-base'
import {useForm} from 'react-hook-form'
import {StyleSheet} from 'react-native'
import {useFirebaseSignUp} from '../hooks/use-firebase-signup'
import {FormInput} from '../src/components/common'
import {signUpPayload} from '../validation/LoginValidationSchema'
import {zodResolver} from '@hookform/resolvers/zod'
import {SvgUri} from 'react-native-svg'

const SignUp = () => {
  const {
    control,
    getValues,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(signUpPayload),
  })
  const {error, loading, signUp} = useFirebaseSignUp()
  const toast = useToast()
  const onSubmit = handleSubmit(data => {
    console.log('abc')

    const {email, password} = data
    signUp(email, password, message => {
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
      <Text>{error}</Text>
      <Center style={styles.ImageContainer}>
        {/* <SvgUri
          uri={'../assets/images/undraw_male_avatar_re_tqsc.svg'}
          width={144}
          height={139}
        /> */}
        <Image
          source={require('../assets/images/login.png')}
          alt="Signup"
          width={144}
          height={139}
          borderRadius={100}
        />
      </Center>
      <View style={styles.TextContainer}>
        <Text style={styles.Welcometext}>Create an account</Text>
        <Text style={styles.HelloText}>Connect with your friends today!</Text>
      </View>

      <View style={styles.FormContainer}>
        <View style={{marginBottom: 10}}>
          <FormInput
            name="fullName"
            label="Full Name"
            control={control}
            placeholder="Enter your name"
            error={errors.fullName?.message}
          />
        </View>
        <View style={{marginBottom: 10}}>
          <FormInput
            name="email"
            label="Email"
            control={control}
            placeholder="Enter your email"
            keyboardType="email-address"
            error={errors.email?.message}
          />
        </View>
        <View style={{marginBottom: 10}}>
          <FormInput
            name="password"
            label="Password"
            control={control}
            placeholder="Enter your password"
            type="password"
            error={errors.password?.message}
          />
        </View>
      </View>

      <Button
        onPress={() => {
          onSubmit()
        }}
        style={styles.Button}
        size="lg"
        isLoading={loading}
        isLoadingText="Loading">
        Sign In
      </Button>
      <Center style={styles.AlreadyContainer}>
        <Text style={styles.Alreadytext}>
          Already have an account?{' '}
          <Link to={'/Login'} style={{color: '#160062', fontWeight: '400'}}>
            Login{' '}
          </Link>
        </Text>
      </Center>
    </View>
  )
}

export default SignUp
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
    marginTop: 5,
  },
  FormContainer: {
    marginHorizontal: 27,
  },
  Button: {
    marginHorizontal: 27,
    backgroundColor: '#351A96',
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
