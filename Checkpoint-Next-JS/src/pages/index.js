import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Header from "@/components/header";
import RotatingText from "@/components/RotatingText";
import Social from "@/components/social";
import Button from "@/components/button";

function Home() {
  const words = ['Software Developper 💻', 'Python enthousiast 🐍', 'Web Designer 🎨']
  return (
    <div className="">
      <Header/>
      <section className="flex flex-row-reverse justify-between p-12 text-center items-center mt-[-20px]">
      <Image src="/img.svg" width={500} height={200}/>
      <div>
        <h1 className="text-7xl mt-[8%]">Hi, I'm Baay Meissa</h1>
        <h1 className="text-4xl mt-6"><RotatingText words={words}/></h1>
        <div className="flex justify-center">
        <Social/>
        </div>
      </div>
      </section>
      <div className="flex justify-center mt-[-30px]"> 
      <Button text="See more about me" icon={<FaArrowRightLong/>} href="about"/>
      </div>
    </div>
  );
}

export default Home;