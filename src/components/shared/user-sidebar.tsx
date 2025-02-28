import Image from "next/image";

export const UserSidebar = () => {
  return (
    <div className="w-full max-w-[373px] h-[65svh] flex flex-col items-center justify-center bg-gradient-to-l to-primary via-[#FF7A00]/30 from-transparent">
      <div className="flex flex-col items-center justify-center -mt-20 gap-9">
        <Image
          alt="logo"
          src="/demo-user.png"
          width={256}
          height={256}
          className="rounded-full"
        />
        <div className="flex flex-col justify-center items-center w-full gap-2.5 text-[#2D3748]">
          <h5 className="text-2xl">Maria Clara</h5>
          <button className="border border-[#999999] px-2.5 py-1 rounded-[5px] text-sm">
            Editor
          </button>
        </div>
      </div>
    </div>
  );
};
