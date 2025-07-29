import { supabase } from './supabaseClient'; 

export const signInWithGoogle = async () => {
  await supabase.auth.signOut();
  
  //Add two redirect location app & localhost
   const redirectTo = import.meta.env.DEV
    ? import.meta.env.VITE_REDIRECT_URL
    : 'https://fitofan-test-task-klfq.vercel.app';

  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo },
  });
  if (error) console.error("Google login failed:", error.message);
};

export const getUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.error("Failed to fetch user:", error.message);
  }
  return data.user;
};
