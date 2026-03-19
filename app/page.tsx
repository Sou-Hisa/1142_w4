import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-red-300 h-screen w-full flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg flex justify-center items-center flex-col inline-block">
          <Image src="/next.svg" alt="avatar" width={100} height={100}></Image>

          <div>マキマ</div>
          <div>Makima</div>
        </div>
      </div>
      
    </>
  );
}
<Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />