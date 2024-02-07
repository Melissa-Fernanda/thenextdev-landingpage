import Link from 'next/link';
import Image from "next/image";
import {
    GitHubIcon,
    InstagramIcon,
    LinkedInIcon,
    YoutTubeIcon,
  } from '@/components/ui/social-icons'


  function SocialLink({ icon: Icon, ...props }: any) {
    return (
      <Link className='group -m-1 p-1' {...props}>
        <Icon className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300' />
      </Link>
    );
  }

function SinopseSection() {
    return (
        <section id="sinopse" className="container flex flex-col md:max-w-[64rem] md:py-12 lg:py-24">
           <div className="grid grid-cols-1 gap-y16 lg:grid-cols-2 gap-y-12 lg:grid-rows-[auto-1fr]">
                <div className="lg:pl-6 flex justify-center">
                    <div className="max-w-max px-1 lg:max-w-none items-center">
                    <Image src="/avatar.jpg" alt="O Menino e a Garça" width={700} height={700} quality="95" priority={true} className="aspect-square rounded-lg bg-zinc-100 dark:bg-zinc-800 object-cover"/>
                    </div>
                </div>
                <div className="lg:order-first lg:row-span-2 text-center md:text-start">
                    <h1 className="font-heading text-3xl leading-(1.1) sm:text-3xl md:text-6xl">
                    Sinopse
                    </h1>
                    <p className="mt-1 text-base text-muted-foreground">
                    Um jovem garoto chamado Mahito, ansiando por sua mãe, se aventura em um mundo compartilhado pelos vivos e os mortos. Ali, a morte encontra um fim e a vida encontra um começo.
                    <br/>
                    Uma semi-autobriografia fantástica sobre vida, morte e criação, em homenagem à amizade, da mente de Hayao Miyazaki.
                    </p>
                    <h2 className="font-heading text-3xl leading-(1.1) sm:text-3xl md:text-4xl pt-5">
                    Extra
                    </h2>
                    <p className="mt-1 text-base text-muted-foreground">
                    Este é o filme que marca o retorno de Hayao Miyazaki às telonas, após a sua então despedida com Vidas ao Vento, lançado em 2013. O diretor é considerado uma lenda viva da animação, sendo responsável por obras como Meu Amigo Totoro, Princesa Mononoke, e A Viagem de Chihiro, que lhe rendeu o Oscar de Melhor Animação, o primeiro de sua carreira.
                    </p>
                    <div className="mt-3 flex justify-center md:justify-start gap-4">
                        <SocialLink
                        href='https://instagram.com/https_melissaaaa'
                        icon={InstagramIcon}
                        />
                        <SocialLink
                        href='https://https://github.com/Melissa-Fernanda'
                        icon={GitHubIcon}
                        />
                        <SocialLink
                        href='https://linkedin.com/in/melissa-fernanda-ux-ui-designer/'
                        icon={LinkedInIcon}
                        />
                    </div>
                </div>
           </div>
        </section>

    )
}

export default SinopseSection;