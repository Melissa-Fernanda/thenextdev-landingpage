import { Check } from 'lucide-react';
import SaibaMais from './saibamais';
import NewsSection from './newletters-section';
import Image from "next/image";

function ExtraSection(){
    return(
        <section id="extra" className="container flex flex-col gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24"> 
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                O Menino e a Garça quebra recorde de Ponyo nas bilheterias.
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                O filme  O Menino e a Garça (The Boy and the Heron), de Hayao Miyazaki, tem se provado um sucesso de público e crítica nos Estados Unidos. Em sua segunda semana em cartaz no país, o filme se tornou o título do Estúdio Ghibli que mais arrecadou dinheiro nas bilheterias.
                </p>
            </div>

            <div className="grid w-full border rounded-lg items-center gap-10 p-10 md:grid-cols-[1fr_200px] ">
                <div className="grid gap-6">
                    <h3 className="text-xl font-bold sm:text-2xl">Curiosidades</h3>
                    <ul className='grid gap-3 text-sm text-muted-foreground sm:grid-cols-2'>
                        <li className='flex items-center'><Check className='mr-2 h-4 w-4' /> Studio Ghibli apostou em não utilizar nenhum método de divulgação ou sequer sinopse.</li>
                        <li className='flex items-center'><Check className='mr-2 h-4 w-4' /> O filme conquistou a crítica, possuindo 96% de aprovação no Rotten Tomatoes.</li>
                        <li className='flex items-center'><Check className='mr-2 h-8 w-8' /> Venceu como Melhor Animação no Globo de Ouro, superando os favoritos “Homem-Aranha: Além de Aranhaverso” e “Super Mario Bros. – O Filme”.</li>
                    </ul>
                </div>
                    <div className='flex flex-col gap-4 text-center'>
                    <NewsSection/>
                    <SaibaMais/>
                    </div>
                </div>
        </section>

    );
}
export default ExtraSection