import supabase from "@/lib/supabase";
import type { Provider } from "@supabase/supabase-js";

export async function signUp({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw error;
  return data;
}

export async function signInWithPassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;

  return data;
}

export async function signInWithOAuth(provider: Provider) {
  const options =
    provider === "kakao"
      ? {
          redirectTo: window.location.origin,
          scopes: "profile_nickname profile_image", //  Kakao 전용 스코프
        }
      : {
          redirectTo: window.location.origin,
        };
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options,
  });

  if (error) throw error;
  return data;
}

export async function requestPasswordResetEmail(email: string) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${import.meta.env.VITE_PUBLIC_URL}/reset-password`,
  });

  if (error) throw error;
  return data;
}

export async function updatePassword(password: string) {
  const { data, error } = await supabase.auth.updateUser({
    password,
  });
  if (error) throw error;
  return data;
}
