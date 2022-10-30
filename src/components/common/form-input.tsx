import {
  FormControl,
  Icon,
  IInputProps,
  Input,
  Pressable,
  Text,
  WarningOutlineIcon,
} from 'native-base'
import {Controller, Control, FieldValues} from 'react-hook-form'
import React, {useState} from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export interface FormInputProps<T extends FieldValues = any>
  extends IInputProps {
  label: string
  error?: string
  isRequired?: boolean
  name: string
  control: Control<T, any>
  placeholder?: string
}

export const FormInput = ({
  label,
  isRequired,
  error,
  name,
  control,

  ...rest
}: FormInputProps) => {
  const [show, setShow] = useState(() =>
    rest.type === 'password' ? false : true,
  )
  return (
    <FormControl isRequired={isRequired}>
      {label && <FormControl.Label>{label}</FormControl.Label>}
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, onBlur, value}}) => {
          return (
            <Input
              {...rest}
              variant="outline"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              type={show ? 'text' : 'password'}
              InputRightElement={
                rest.type === 'password' ? (
                  <Pressable onPress={() => setShow(!show)}>
                    <Icon
                      as={
                        <MaterialIcons
                          name={show ? 'visibility' : 'visibility-off'}
                        />
                      }
                      size={5}
                      mr={2}
                      color="muted.400"
                    />
                  </Pressable>
                ) : undefined
              }
            />
          )
        }}
      />

      {
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {error}
        </FormControl.ErrorMessage>
      }
      {error && (
        <Text color="red.400" mt={2}>
          {error}
        </Text>
      )}
    </FormControl>
  )
}
