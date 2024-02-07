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

function SobreSection() {
    return (
        <section id="sobre" className="container flex flex-col md:max-w-[64rem] md:py-12 lg:py-24">
           <div className="grid grid-cols-1 gap-y16 lg:grid-cols-2 gap-y-12 lg:grid-rows-[auto-1fr]">
                <div className="lg:pl-20 flex justify-center">
                    <div className="mas-w-xs px-2 lg:max-w-none">
                    <Image src="/studio.jpg" alt="Logo Estudio Ghibli" width={700} height={700} quality="95" priority={true} className="aspect-square rounded-lg bg-zinc-100 dark:bg-zinc-800 object-cover"/>
                    </div>
                </div>
                <div className="lg:order-first lg:row-span-2 text-center md:text-start">
                    <h1 className="font-heading text-3xl leading-(1.1) sm:text-3xl md:text-6xl">
                    Studio Ghibli
                    </h1>
                    <p className="mt-6 text-base text-muted-foreground">
                    O Studio Ghibli é um estúdio de animação japonês, sediado em Koganei, Tóquio. Fundado em 1985, o estúdio já produziu 21 longas de animação, sendo o primeiro O Castelo no Céu (1986) e o mais recente As Memórias de Marnie (2014).
                    <br/>
                    O Studio Ghibli foi fundado em 1985 por Hayao Miyazaki, Isao Takahata, Toshio Suzuki e Yasuyoshi Tokuma, logo após o sucesso de Nausicaä do Vale do Vento, no ano anterior. O estúdio lançou seu primeiro filme, O Castelo no Céu, no ano seguinte. O logotipo da empresa é o Totoro, o personagem do filme Meu Amigo Totoro, lançado em 1988. Com exceção de seis produções, todos os filmes do estúdio foram dirigidos por Hayao Miyazaki e Isao Takahata. Toshio Suzuki, por sua vez, é o produtor da maioria deles. Em 2001, o Museu Ghibli, um museu dedicado as obras do estúdio, foi inaugurado.</p>
                </div>
           </div>

           <div className="grid grid-cols-1 gap-y16 lg:grid-cols-2 gap-y-12 lg:grid-rows-[auto-1fr] py-32">
                <div className="lg:pl-0 flex justify-center pr-10">
                    <div className="mas-w-xs px-2 lg:max-w-none">
                    <Image src="/hayao.jpg" alt="Logo Estudio Ghibli" width={700} height={700} quality="95" priority={true} className="aspect-square  rounded-lg bg-zinc-100 dark:bg-zinc-800 object-cover"/>
                    </div>
                </div>
                <div className="lg:row-span-2 text-center md:text-start">
                    <h1 className="font-heading text-3xl leading-(1.1) sm:text-3xl md:text-6xl">
                    Hayao Miyazaki
                    </h1>
                    <p className="mt-6 text-base text-muted-foreground">
                    Hayao Miyazaki é um animador, cineasta, roteirista, escritor e artista de mangá japonês. É co-fundador do Studio Ghibli, uma companhia de cinema e animação, tendo conquistado reconhecimento e aclamação internacional pela qualidade de seus vários longas-metragens de animação, os quais ele normalmente escreve e dirige, sendo amplamente considerado como um dos principais nomes da indústria de animação japonesa.
                    <br/>
                    Os trabalhos de Miyazaki são caracterizados pela recorrência de diversos temas, como a relação da humanidade com a natureza e tecnologia, a integridade de padrões de vida naturais e tradicionais, a importância da arte e perícia e a dificuldade de manter uma ética pacifista em um mundo violento.</p>
                </div>
           </div>
        </section>

    )
}

export default SobreSection;