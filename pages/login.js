import { auth } from '../lib/firebase'
import { useRouter } from 'next/router'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import Button from 'react-bootstrap/Button'
import toast from 'react-hot-toast'

export default function Login() {
  const router = useRouter()
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((userCred) => {
        router.push(`/${userCred.user.uid}/dashboard`)
      })
      .catch((error) => {
        toast.error('there was an error logging you in :(')
      })
  }

  return (
    <>
      <h3>Login Component</h3>
      <Button onClick={handleGoogleLogin} variant='primary'>Login With Google</Button>
    </>
  )
}