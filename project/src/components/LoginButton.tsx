import { signInWithGoogle } from '../services/authService';

const LoginButton = () => {
  return (
    <button
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      onClick={signInWithGoogle}
    >
      Sign in with Google
    </button>
  );
};

export default LoginButton;
