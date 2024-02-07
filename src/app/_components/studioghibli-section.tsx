'use client';
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';


function StudioSection() {
    return (
        <section id="studioghibli" className='bg-slate-50 dark:bg-transparent container space-y-6 py-8 md:py-12 lg:py-24'>
        <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
            <h2 className='font-heading text-3xl leading-(1.1) sm:text-3xl md:text-6xl'>Filmografia</h2>
            <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leadig-7'>Principais obras do Studio Ghibli junto com Hayao Miyazaki</p>
        </div>

        <div className='mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3'>
            <div className='relative overflow-hidden rounded-lg border bg-background p-2'>
                    <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
                        <Image src="/ponyo.svg" width={70} height={70} className='h-16 w-16 fill-current' alt={""}/>
                        <div className='space-y-1'>
                            <h3 className='font-bold'>Ponyo</h3>
                            <p className='text-sm text-muted-foreground'>
                            Ponyo é uma peixinha dourada que conhece o garoto Sosuke. Ele a leva para a sua casa e decide cuidar dela.
                            </p>
                        </div>
                    </div>
            </div>

            <div className='relative overflow-hidden rounded-lg border bg-background p-2'>
                    <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
                        <Image src="/totoro.svg" width={70} height={70} className='h-16 w-16 fill-current' alt={""}/>
                        <div className='space-y-1'>
                            <h3 className='font-bold'>Meu Amigo Totoro</h3>
                            <p className='text-sm text-muted-foreground'>
                            O filme conta a historia das duas jovens filhas de um professor e suas aventuras com espíritos da floresta amigáveis...
                            </p>
                        </div>
                    </div>
            </div>   

            <div className='relative overflow-hidden rounded-lg border bg-background p-2'>   
                    <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
                        <Image src="/pequeninos.svg" width={70} height={70} className='h-16 w-16 fill-current' alt={""}/>
                        <div className='space-y-1'>
                            <h3 className='font-bold'>O Mundos dos Pequeninos</h3>
                            <p className='text-sm text-muted-foreground'>
                            Baseado no romance Os Pequeninos Borrowers, de Mary Norton, com roteiro de Hayao Miyazakk.
                            </p>
                        </div>
                    </div>
            </div>   

            <div className='relative overflow-hidden rounded-lg border bg-background p-2'>
                    <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
                        <Image src="/kiki.svg" width={70} height={70} className='h-16 w-16 fill-current' alt={""}/>
                        <div className='space-y-1'>
                            <h3 className='font-bold'>O Serviço de Entregas da Kiki</h3>
                            <p className='text-sm text-muted-foreground'>
                            Baseado na obra de mesmo nome de Eiko Kadono, e foi a primeira de uma série que foi publicada pela Fukui...
                            </p>
                        </div>
                    </div>
            </div>

            <div className='relative overflow-hidden rounded-lg border bg-background p-2'>
                    <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
                        <Image src="/castelo.svg" width={70} height={70} className='h-16 w-16 fill-current' alt={""}/>
                        <div className='space-y-1'>
                            <h3 className='font-bold'>O Castelo Animado</h3>
                            <p className='text-sm text-muted-foreground'>
                            A história é baseada no livro de mesmo nome da escritora inglesa Diana Wynne Jones.
                            </p>
                        </div>
                    </div>
            </div>

            <div className='relative overflow-hidden rounded-lg border bg-background p-2'>
                    <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
                        <Image src="/chiriro.svg" width={70} height={70} className='h-16 w-16 fill-current' alt={""}/>
                        <div className='space-y-1'>
                            <h3 className='font-bold'>A Viagem de Chihiro</h3>
                            <p className='text-sm text-muted-foreground'>
                            Miyazaki escreveu o roteiro após decidir que a história seria baseada na filha de seu amigo Seiji Okuda...
                            </p>
                        </div>
                    </div>
            </div>  
        </div>  

            <div className="mx-auto text-center md:max-w-[58rem]"> 
                <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-4">
                Sinopse completa de cada filme.</p>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Ponyo</AccordionTrigger>
                        <AccordionContent className="text-left">
                        Certa manhã, quando brinca na praia, o pequeno Sosuke encontra um peixe vermelho preso num frasco de doce. Sosuke liberta o peixinho do frasco, a quem dá o nome de Ponyo, e promete protegê-lo para sempre. Mas o pai de Ponyo, um feiticeiro que vive no fundo do mar, força o pequeno peixe a regressar às profundezas. Decidida a tornar-se humana, Ponyo foge para reencontrar Sosuke e espalha acidentalmente uma poção mágica pelo oceano, transformando as suas irmãs em ondas gigantes que ameaçam inundar a aldeia de Sosuke. O amor e a responsabilidade, o oceano e a vida, num mundo fantástico onde a magia também faz parte das coisas naturais do dia-a-dia.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Meu Amigo Totoro</AccordionTrigger>
                        <AccordionContent className="text-left">
                        Duas meninas se mudam com o pai para o interior do Japão, com o objetivo de ficar perto da mãe, que está internada em um hospital. Lá, elas viverão muitas aventuras ao lado de um simpático espírito protetor da floresta chamado Totoro, que vive em uma canforeira gigante.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>O Mundos dos Pequeninos</AccordionTrigger>
                        <AccordionContent className="text-left">
                        Nos subúrbios de Tóquio, sob o assoalho de uma casa velha, Arrietty vive em seu minúsculo mundo com a família, fazendo de tudo para manter em segredo a existência de todos. Sobrevivendo como pequenos ladrões, eles conhecem as regras para que nunca sejam percebidos pelos verdadeiros – e grandes – donos da casa. Para isso, procuram manter a desconfiança deles em cima dos gatos e ratos e tomam todos os cuidados possíveis para evitar de serem vistos. Contudo, quando um jovem rapaz se hospeda na casa, a pequenina Arrietty acredita que poderá manter uma amizade com ele, apesar da diferença de tamanhos.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>O Serviço de Entregas da Kiki</AccordionTrigger>
                        <AccordionContent className="text-left">
                        Ao completar 13 anos, seguindo a tradição de todas as bruxas, Kiki deve se mudar para uma cidade na qual não haja nenhuma bruxa e passar lá um ano morando sozinha em uma espécie de “estágio”. Após achar uma bela cidade à beira mar, Kiki e seu gatinho Jiji tentam se adaptar à nova vida.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>O Castelo Animado</AccordionTrigger>
                        <AccordionContent className="text-left">
                        Uma bruxa lança uma terrível maldição sobre a jovem Sophie, transformando-a numa velha de 90 anos. Desesperada, ela embarca numa odisseia na qual acaba parando no castelo animado, onde reside um misterioso feiticeiro chamado Howl que poderá ajudá-la a reverter o feitiço.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>A Viagem de Chihiro</AccordionTrigger>
                        <AccordionContent className="text-left">
                        Chihiro é uma garota de 10 anos que descobre um mundo secreto de espíritos estranhos, criaturas e feitiçaria. Quando seus pais são misteriosamente transformados, ela deve recorrer à coragem que nunca soube que tinha para se libertar e devolver sua família ao mundo exterior.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

            </div> 

      </section>
    )
}

export default StudioSection;