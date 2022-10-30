import * as z from 'zod'

// interface LoginInput {
//   email: string
//   password: string
// }
// interface signUpInput {
//   fullName: string
//   email: string
//   password: string
// }
export const LoginPayload = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export const signUpPayload = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})
