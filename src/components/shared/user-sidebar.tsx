import Image from "next/image";

export const UserSidebar = () => {
  return (
    <div className="w-full md:max-w-[250px] xl:max-w-[373px] h-[65svh] hidden sm:flex flex-col items-center justify-center bg-gradient-to-l to-primary via-[#FF7A00]/30 from-transparent p-5">
      <div className="-mt-20">
        <Profile />
      </div>
    </div>
  );
};

export const Profile = () => (
  <div className="flex flex-col items-center justify-center gap-2 sm:gap-9">
    <Image
      alt="logo"
      src="/demo-user.png"
      width={256}
      height={256}
      className="rounded-full size-[100px] sm:size-[256px]"
    />
    <div className="flex flex-col justify-center items-center w-full gap-1.5 sm:gap-2.5 text-[#2D3748]">
      <h5 className="text-sm sm:text-2xl">Maria Clara</h5>
      <button className="border border-[#999999] px-2.5 py-0.5 sm:py-1 rounded-[5px] text-[11px] sm:text-sm">
        Editor
      </button>
    </div>
  </div>
);
