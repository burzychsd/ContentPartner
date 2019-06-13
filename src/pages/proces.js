// DEPENDENCIES
import React, { memo } from 'react'
import shortid from 'shortid'

// COMPONENTS
import Page from '../components/templates/Page'
import StageInfo from '../components/molecules/StageInfo'
import Footer from '../components/organisms/Footer'

const Proces = ({ style, minHeight }) => {

    const stageContent = [
        {
            title: `Etap 1.`,
            text: `Szukasz sposobów na skuteczne budowanie dobrego wizerunku? 
            Martwisz się słabą pozycją w wyszukiwarce Google? Przemyślana, perswazyjna, 
            wyczerpująca treść jest podstawą nowoczesnej strony www, profilu w mediach społecznościowych 
            i wszelkich działań promocyjnych. Dowiedz się, jak mogę pomóc.`
        },
        {
            title: `Etap 2.`,
            text: `Wspólnie ustalamy zakres działań, specyfikację treści, cele, harmonogram i budżet.
            Wystarczy, że do mnie napiszesz lub zadzwonisz – każde zlecenie traktuję indywidualnie,
            jako nowe, rozwijające wyzwanie.`
        },
        {
            title: `Etap 3.`,
            text: `10-letnie doświadczenie w tworzeniu treści sprawia, że szybko i skutecznie wyszukuję oraz
            przetwarzam informacje. Otrzymujesz teksty wyłącznie oryginalne i dopracowane pod
            względem poprawności, stylistyki oraz wytycznych.`
        },
        {
            title: `Etap 4.`,
            text: `Pisałem już (chyba) o wszystkim, a jeśli nie, to chętnie poznam kolejną branżę, w której
            warto wyróżnić się angażującą komunikacją. Zamów to, czego potrzebujesz: treść na stronę
            www, artykuły tematyczne, opisy produktów, wpisy do mediów społecznościowych czy
            branżowego e-booka.`
        },
        {
            title: `Etap 5.`,
            text: `Najważniejsza jest realizacja Twoich celów wizerunkowych i sprzedażowych. Jestem
            otwarty zarówno na pojedynczą, doraźną współpracę, jak i długofalowe, szerokie działania.
            Skoro obok imienia i nazwiska w nazwie firmy znajduje się Content Partner – nie są to puste
            słowa, ale deklaracja partnerskiej współpracy nad treścią dla Twojego biznesu.`
        }
    ]

    const stages = stageContent.map((stage, i) => 
    <StageInfo key={shortid.generate()} graphicNum={i + 1} title={stage.title} text={stage.text} />)

    return (
        <Page footer style={style} minHeight={minHeight}>
            {stages}
        </Page>
    )
}

export default memo(Proces)