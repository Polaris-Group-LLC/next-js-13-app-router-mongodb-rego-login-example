/**
 * v0 by Vercel.
 * @see https://v0.dev/t/nDmBHFdEH5D
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import './globals.css';
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

export default function Layout() {
  return (
    <html lang="en">
      <body>
    <div
      key="1"
      className="border-8 border-[#FFFF00] rounded-lg p-1 bg-gradient-to-b from-[#000000] to-[#217CAF] min-h-screen flex flex-row relative pt-20 pb-2 pl-3 pr-3"
    >
      <div className="absolute top-0 left-0 w-full text-white py-2 px-4 z-10 flex justify-between items-center">
      <img
        alt="Logo"
        className="object-contain"
        src="/images/neucleos_logo.png"
        style={{
          transform: "scale(0.4)",
          transformOrigin: "top left", // Adjust the origin as needed
        }}
      />
        <div className="mx-auto">
        </div>
        <Avatar>
          <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
          <AvatarFallback className="ml-auto">CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col w-[40px] mr-0 font-montserrat">
        <div className="flex flex-col bg-[#000000] text-white h-[40px] rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none border-2 border-[#00FF00] p-4 items-center justify-center ml-auto w-full" />
        <div className="flex flex-col bg-[#000000] text-white h-[40px] rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none border-2 border-[#00FF00] p-4 items-center justify-center ml-auto w-full" />
        <div className="flex flex-col bg-[#000000] text-white h-[40px] rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none border-2 border-[#00FF00] p-4 items-center justify-center ml-auto w-full" />
        <div>
          <div className="flex flex-col bg-[#000000] text-white h-[40px] rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none border-2 border-[#00FF00] p-4 items-center justify-center ml-auto" />
          <div />
        </div>
      </div>
      <div className="flex w-[400px] mx-auto rounded-lg flex-col">
        <div className="bg-[#000000] text-white flex-1 rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-none border-4 border-[#FF6A00] mt-[-8px] p-4 flex flex-col justify-between font-montserrat mt-50">
          <div>null</div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex gap-0">
          <div className="bg-[#000000] text-white h-[40px] rounded-tl-lg rounded-tr-lg rounded-bl-none rounded-br-none p-2 flex items-center flex-1 font-montserrat border-4 border-green-500" />
          <div className="bg-[#000000] text-white h-[40px] rounded-tl-lg rounded-tr-lg rounded-bl-none rounded-br-none p-2 flex items-center flex-1 font-montserrat" />
          <div className="bg-[#000000] text-white h-[40px] rounded-tl-lg rounded-tr-lg rounded-bl-none rounded-br-none p-2 flex items-center flex-1 font-montserrat" />
          <div className="bg-[#000000] text-white h-[40px] rounded-tl-lg rounded-tr-lg rounded-bl-none rounded-br-lg p-2 flex items-center w-[25px] font-montserrat" />
        </div>
        <div className="bg-[#000000] text-white flex-1 rounded-lg border-4 border-[#00FF00] mt-[-8px] p-6 rounded-br-lg rounded-bl-none rounded-tl-none font-montserrat grid grid-cols-[100%]" />
      </div>
      <div className="flex flex-col w-[50px] mr-0 font-montserrat">
        <div className="bg-[#000000] text-white h-[40px] flex items-center justify-center" />
        <div className="flex flex-col bg-[#000000] text-white h-[40px] rounded-tl-none rounded-bl-none rounded-tr-lg rounded-br-lg border-2 border-[#ECA902] p-4 items-center justify-center ml-auto">
          <img
            alt="Icon"
            className="icon"
            height={45}
            src="/placeholder.svg"
            style={{
              aspectRatio: "45/45",
              objectFit: "cover",
            }}
            width={45}
          />
        </div>
        <div>
          <div className="flex flex-col bg-[#000000] text-white h-[40px] rounded-tl-none rounded-bl-none rounded-tr-lg rounded-br-lg border-2 border-[#ECA902] p-4 items-center justify-center ml-auto">
            <img
              alt="Icon"
              className="icon"
              height={45}
              src="/placeholder.svg"
              style={{
                aspectRatio: "45/45",
                objectFit: "cover",
              }}
              width={45}
            />
          </div>
          <div>
            <div className="flex flex-col bg-[#000000] text-white h-[40px] rounded-tl-none rounded-bl-none rounded-tr-lg rounded-br-lg border-2 border-[#ECA902] p-4 items-center justify-center ml-auto">
              <img
                alt="Icon"
                className="icon"
                height={45}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "45/45",
                  objectFit: "cover",
                }}
                width={45}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </body>
</html>
  )
}