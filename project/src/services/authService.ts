import { supabase } from './supabaseClient'; 

export const signInWithGoogle = async () => {
  await supabase.auth.signOut();
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: window.location.origin,
    },
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
