import { ModeToggle } from "./mode-togle";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

function IntroSection() {
    return(

        <section id='intro' className='space-y-6 pt-8 md:pt-12 lg:pt-32 relative'>
      <svg
        viewBox='0 0 1024 1024'
        className='absolute left-1/3 top-full md:left-1/2 md:top-1/2 -z-10 h-[16rem] w-[16rem] md:h-[54rem] md:w-[54rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0'
        aria-hidden='true'>
        <circle
          cx='512'
          cy='512'
          r='512'
          fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
          fillOpacity='0.2'
        />
        <defs>
          <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
            <stop stopColor='#0d72ea' />
            <stop offset='1' stopColor='#3d91f4' />
          </radialGradient>
        </defs>
      </svg>
        <div className="container flex max-w-[64rem] flex-col items-center text-center gap-4">
          <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium flex items-center">
            📅 Lançameto dia 22 de fevereiro de 2024.
            <ModeToggle/>
          </span>
            <h1 className="font-heading text-5xl md:text-7xl lg:textxl">
            The Boy and 
            The<span className="text-primary"> Heron</span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leadign-8">
            Baseado no livro de Genzaburo Yoshino de 1937, conta a história de um menino de 15 anos em uma jornada para descobrir o crescimento espiritual, a pobreza e o significado da vida com a ajuda de seu tio, cujo conselho é comunicado a ele por um diário.
          </p>
          <div className="space-x-4">
            <a href="#extra" 
            className='bg-primary py-2 px-4 text-md text-white rounded shadow-lg font-bold'>Saiba Mais</a>
            <a href="#sobre" 
            className={cn(buttonVariants({variant: 'outline', size: 'lg'}))}>Conhercer Studio Ghibli</a>
          </div>
        </div>
      </section>

    );
}

export default IntroSection;

