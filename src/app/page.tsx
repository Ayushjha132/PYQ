import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import WhyPYQ from "@/components/WhyPYQ";

export default function Home() {
  return (
      <>
    <main className="flex flex-col items-center justify-between pt-24">
      <HeroBanner />
      <WhyPYQ />
    </main>
      </>
  );
}
