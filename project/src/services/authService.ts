import { supabase } from './superbaseClient'; 

export const signInWithGoogle = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
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
