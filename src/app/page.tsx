import Image from "next/image";
import { ModeToggle } from "./_components/mode-togle";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import IntroSection from "./_components/intro-section";
import SinopseSection from "./_components/sinopse-section";
import StudioSection from "./_components/studioghibli-section"
import SobreSection from "./_components/sobre-section";
import ExtraSection from "./_components/extra-section";
export default function Home() {
  return (
    <main className="">
      <IntroSection/>
      <SinopseSection/>
      <StudioSection/>
      <ExtraSection/>
      <SobreSection/>
    </main>
  );
}
