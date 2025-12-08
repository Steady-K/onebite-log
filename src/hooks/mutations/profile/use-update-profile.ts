import { updateProfile } from "@/api/profile";
import { QUERY_KEYS } from "@/lib/constants";
import type { ProfileEntiry, UseMutationCallback } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateProfile(callback?: UseMutationCallback) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProfile,
    onSuccess: (updatedProfile) => {
      if (callback?.onSuccess) callback.onSuccess();
      queryClient.setQueryData<ProfileEntiry>(
        QUERY_KEYS.profile.byId(updatedProfile.id),
        updatedProfile,
      );
    },
    onError: (error) => {
      if (callback?.onError) callback.onError(error);
    },
  });
}
