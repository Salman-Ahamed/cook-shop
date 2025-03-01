import { InputSection } from "@/components/pages/edit";
import { Button } from "@/components/shared/button";

const ProfileEdit = () => {
  return (
    <main className="overflow-hidden bg-white rounded-t-[22px]">
      <InputSection label="Name:" value="Maria Clara" />
      <InputSection label="Email:" value="user@teste.com" />
      <InputSection label="Change password" />

      <div className="flex gap-4 pt-14 justify-center items-center md:justify-start md:ps-[10%] xl:ps-[20%]">
        <Button>Cancel</Button>
        <Button isSecondary className="min-w-[120px]">
          Save
        </Button>
      </div>
    </main>
  );
};

export default ProfileEdit;
