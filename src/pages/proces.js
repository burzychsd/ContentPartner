// DEPENDENCIES
import React, { memo } from 'react'
import loadable from '@loadable/component'

// COMPONENTS
import Page from '../components/templates/Page'
const StageInfo = loadable(() => import('../components/molecules/StageInfo'))

const Proces = ({ style, minHeight, status }) => {

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

    return (
        <Page footer style={style} minHeight={minHeight} status={status}>
            <StageInfo graphicNum={1} title={stageContent[0].title} text={stageContent[0].text} /> 
            <StageInfo graphicNum={2} title={stageContent[1].title} text={stageContent[1].text} />
            <StageInfo graphicNum={3} title={stageContent[2].title} text={stageContent[2].text} />
            <StageInfo graphicNum={4} title={stageContent[3].title} text={stageContent[3].text} />
            <StageInfo graphicNum={5} title={stageContent[4].title} text={stageContent[4].text} />
        </Page>
    )
}

export default memo(Proces)