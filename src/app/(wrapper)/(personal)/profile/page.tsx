import { ListItem } from "@/components/shared";
import { recipes } from "@/lib/data";

const ProfilePage = () => {
  return (
    <div className="pb-40">
      <ListItem isProfile data={recipes.slice(0, 6)} />
    </div>
  );
};

export default ProfilePage;
