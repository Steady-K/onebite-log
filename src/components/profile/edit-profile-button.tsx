import { useOpenProfileEditorModal } from "@/store/profile-editor-modal";
import { Button } from "../ui/button";

export default function EditProfileButton() {
  const openProfileEditorModal = useOpenProfileEditorModal();

  return (
    <Button
      onClick={openProfileEditorModal}
      className="cursor-pointer"
      variant={"secondary"}
    >
      프로필 수정
    </Button>
  );
}
