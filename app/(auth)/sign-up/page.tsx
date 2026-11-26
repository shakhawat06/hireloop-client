import AuthForm from '@/components/auth/auth-form';

const SignUpPage = () => {

   const handleSubmit = () => {
      alert('hello form signup page')
   }


   return <AuthForm type="signup" />;
}

export default SignUpPage
