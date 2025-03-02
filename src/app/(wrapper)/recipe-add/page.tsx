import { Form } from "@/components/pages/profile";
import Image from "next/image";

const RecipeAdd = () => {
  return (
    <main className="font-poppins">
      <div className="w-full h-[200px] flex justify-center items-center flex-col gap-4 border-b border-[#B6B6B6]">
        <Image alt="add" src="/add.svg" width={85} height={85} />
        <p className="text-sm text-[#B6B6B6]">
          Insert your recipe photo here...
        </p>
      </div>

      <Form />
    </main>
  );
};

export default RecipeAdd;
