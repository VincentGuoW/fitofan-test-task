import { signInWithGoogle, getUser } from '../services/authService';
import { useEffect, useState } from 'react';

const LoginButton = () => {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmail = async () => {
      const user = await getUser();
      if (user?.email) {
        setEmail(user.email);
      }
    };
    fetchEmail();
  }, []);

  return (
    <button
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs"
      onClick={signInWithGoogle}
    >
      {email ? email : 'Sign in with Google'}
    </button>
  );
};

export default LoginButton;