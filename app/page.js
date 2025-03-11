import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col gap-4 items-center h-[44vh] px-5 md:px-0 text-xs md:text-base text-white">
        <div className="font-bold md:text-5xl flex justify-center items-center gap-2 text-3xl">Get Me a Chai <span><img className="invertImg" src="/tea.gif" width={88} alt="" /></span></div>
        <p className="text-center md:text-left">A crowdfunding platform for creators to fund their projects.</p>
        <p className="text-center md:text-left">A place where your fans can buy you a chai. Unleash the power of your fans and get your projects funded.</p>
        <div>
          <Link href={"/login"}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Start Here
            </button>
          </Link>
          <Link href={"/about"}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Read More
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto pb-32 pt-14 px-10">
        <h1 className="text-3xl font-bold text-center mb-14">Your Fans can buy you a Chai</h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className=" bg-slate-400 rounded-full p-2 text-black" width={88} src="/man.gif" alt="" />
            <p className="font-bold text-center">Fund Yourself</p>
            <p className="text-center">Your fans are avilable for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className=" bg-slate-400 rounded-full p-2 text-black" width={88} src="/coin.gif" alt="" />
            <p className="font-bold text-center">Fund Yourself</p>
            <p className="text-center">Your fans are avilable for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className=" bg-slate-400 rounded-full p-2 text-black" width={88} src="/group.gif" alt="" />
            <p className="font-bold text-center">Fans want to help</p>
            <p className="text-center">Your fans are avilable for you to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
  <h2 className="text-3xl font-bold text-center mb-14">Learn more about us</h2>

  {/* Responsive youtube embed */}
  <div className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:w-[50%] lg:h-[40vh] xl:w-[50%] xl:h-[40vh]">
    <iframe className="w-full h-full" src="https://www.youtube.com/embed/Tb1CLQuJOsE?si=wMUv4DG3ia6Wt4zn"
            title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  </div>
</div>
    </>
  );
}
