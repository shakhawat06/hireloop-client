export interface AuthFormProps {
  type: "signin" | "signup";
}

export type AuthFormData = {
  email: string
  password: string
  name?: string
  // role?: UserRole
}