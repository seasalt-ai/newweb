const e=`---
title: "De la Demo la Succes: Implementarea întâlnirilor moderne Microsoft și nu numai (1/5)"
metatitle: "De la Demo la Succes (1/5): Dincolo de întâlnirile moderne Microsoft"
date: 2021-07-19
modified_date: 2025-08-01T12:00:00Z
draft: false
author: Cody Kim
description: "În prima parte a acestei serii de bloguri, urmăriți călătoria Seasalt.ai către crearea SeaMeet, soluțiile noastre colaborative pentru întâlniri moderne."
weight: 1
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/microsoft-modern-meetings/
url: /blog/microsoft-modern-meetings/
---

*De-a lungul acestei serii de bloguri, urmăriți călătoria Seasalt.ai către crearea unei experiențe complete de întâlniri moderne, începând cu începuturile sale umile, până la optimizarea serviciului nostru pe diferite hardware și modele, la integrarea sistemelor NLP de ultimă generație și, în final, la realizarea completă a SeaMeet, soluțiile noastre colaborative pentru întâlniri moderne.*

### Viitorul întâlnirilor moderne

[![Demonstrație a serviciului Microsoft speech-to-text de la MS Build 2019](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/ms-build-play.png)](https://www.youtube.com/watch?t=100&v=EYinMnQWgfU&feature=youtu.be)

La Microsoft Build 2019, Microsoft a entuziasmat publicul când a dezvăluit cele mai recente soluții de cloud computing: Azure Speech Services, mai precis aplicația lor de transcriere a întâlnirilor. După introducerea sa, acest transcriptor de conversații a intrat imediat în atenția tuturor și a fost menționat în cele mai importante bloguri și periodice de tehnologie. Demonstrația, ilustrată în videoclipul de mai jos din 2019, a arătat o mulțime de forță din partea Azure Speech Services. Nu știam atunci că a devenit rapid un preludiu al modului în care se vor desfășura întâlnirile moderne într-o pandemie globală și într-un cadru post-pandemic: trecând de la fizic la virtual la hibrid.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-demo.png" alt="Demonstrație live a serviciului Microsoft Azure speech-to-text și identificare a vorbitorului la MS Build 2019"/>
</center>

Promovat ca o platformă de transcriere a conversațiilor, prezentarea Microsoft pentru serviciul de transcriere a întâlnirilor Azure, introdusă în mod adecvat ca „Viitorul întâlnirilor moderne”, a stabilit noul lor serviciu ca o platformă robustă și eficientă de recunoaștere a vorbirii în text (STT), potrivită pentru toate afacerile care caută o modalitate de a capta rapid și ordonat toate conferințele lor importante.

Ce face acest serviciu punctul culminant al transcrierii întâlnirilor? În primul rând, performanța în timp real. Pe măsură ce tehnologia devine din ce în ce mai rapidă, răbdarea devine din ce în ce mai subțire, unde chiar și o întârziere de câteva secunde este mai mult decât suficientă pentru a irita utilizatorul obișnuit. Cu toate acestea, Microsoft a demonstrat că transcriptorul lor de conversații este mai mult decât suficient de rapid, oferind transcrieri precise mai rapid decât unele servicii de subtitrare, făcând complet fezabil să urmărești o conversație concurentă doar cu textul.

În continuare, Microsoft a afișat și capacitățile lor de identificare a vorbitorului. A ajunge la o grămadă de text conversațional neorganizat este frustrant și inutil, dar identificarea vorbitorului etichetează automat fiecare enunț cu vorbitorul, creând un format ușor de consumat.

![Interfața de utilizator a serviciului Microsoft Azure speech-to-text și identificare a vorbitorului](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-ui.png)

În fiecare zi, hardware-ul de calcul devine din ce în ce mai puternic, iar companiile încearcă să stoarcă fiecare ultim nucleu din cele mai recente procesoare și plăci grafice. Adesea, tehnologia mai veche devine depășită, iar clienții sunt forțați să facă upgrade la fiecare câțiva ani doar pentru a rămâne relevanți în societate. În „Viitorul întâlnirilor moderne”, Microsoft a optimizat Azure Speech Service pentru a rula pe hardware de consum, păstrând în același timp calculul greu la ei, extinzând și mai mult populația deja vastă care poate beneficia de acest serviciu.

Serviciul de transcriere a întâlnirilor Azure optimizează modul în care desfășurăm afaceri. Fiecare organizație ar face bine să încorporeze un produs ca acesta în fluxul lor de lucru. Într-o zi obișnuită, informațiile curg constant și fiecare bucată este la fel de semnificativă ca și precedenta, fie că este vorba de mementouri, sarcini sau actualizări. Prea des lucrurile se pierd în fisuri și asta înseamnă timp pierdut și profituri pierdute. Ceea ce oferă soluția Microsoft este o înregistrare completă, generată automat, care delimitează exact ce a fost spus și cine a spus-o, astfel încât au trecut zilele în care informațiile lipseau și se căuta orbește prin înregistrări audio lungi pentru o secțiune specifică. Acum, toate informațiile de care aveți nevoie sunt frumos aranjate pentru a le consulta ori de câte ori aveți nevoie. Această tehnologie este mai importantă ca niciodată. Dacă anul 2020 ne-a învățat ceva, este nevoia de flexibilitate, mai ales la locul de muncă. Oamenii se îmbolnăvesc și apar evenimente neprevăzute, așa că este practic imposibil să ne așteptăm ca angajații să participe la fiecare discuție. Cu întâlnirile moderne, suntem cu un pas mai aproape de a putea acomoda aceste evoluții neașteptate, oferind practic tuturor posibilitatea de a fi acolo fără a fi de fapt acolo.

### Implementarea întâlnirilor moderne

La mijlocul anului 2020, am primit o cerere de propunere de la un client guvernamental din Singapore. Da, era încă pandemie. Dar Singapore o ținea sub control, așa că întâlnirile guvernamentale aveau loc în continuare în sălile de conferințe fizice. Ei doreau o soluție modernă care să poată transcrie vorbirea de la până la 12 vorbitori diferiți. Mai mult, identificarea vorbitorului ar juca un rol important aici.

În ceea ce privește identificarea vorbitorului, o diferență semnificativă între ceea ce oferă Azure și ceea ce are nevoie clientul este „înregistrarea” vocală: Azure necesită o voce preînregistrată de la toți vorbitorii pentru a-și înregistra amprenta vocală în sistem. Cu toate acestea, este imposibil să ceri unor oficiali guvernamentali, probabil foarte importanți, să stea în fața unui microfon pentru a fi înregistrați. Am făcut unele adaptări la proces, efectuând mai întâi o grupare nesupravegheată a vorbitorilor (numită și diarizare a vorbitorilor). Ideea este că, dacă un vorbitor a vorbit o dată în sistemul nostru, îl vom recunoaște data viitoare când vorbește.

![Diagrama fluxului serviciilor Microsoft Azure speech-to-text și identificare a vorbirii](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-diagram.png)

*Arhitectura întâlnirilor moderne de la [Azure Conversation Transcription](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/conversation-transcription). În adaptarea noastră, am relaxat cerința de „Înregistrare utilizator” înainte de întâlnire la după întâlnire.*


Apoi am asamblat rapid arsenalul nostru pentru întregul proiect. Primul pas a fost să procurăm o matrice de microfoane de înaltă calitate care să livreze date audio cristaline modelelor noastre de recunoaștere. Am fost imediat atrași de Azure Kinect: o matrice elegantă, cu 7 microfoane, găzduită într-o carcasă complet din aluminiu, cu bonusul suplimentar al unei camere de înaltă definiție și al senzorilor de adâncime.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/kinect.png" alt="Azure Kinect DK de 400 USD este utilizat pentru întâlnirile moderne"/>

*Azure Kinect DK de 400 USD [Azure Kinect DK](https://azure.microsoft.com/en-us/services/kinect-dk/) este utilizat pentru întâlnirile moderne*
</center>

Doar prin aspect, acesta este un dispozitiv cu adevărat sofisticat care ar completa orice sală de conferințe, dar mai important, puternica matrice de microfoane promitea calitatea pe care o căutam. Cu aranjamentul circular, cele șapte microfoane au deschis posibilitatea utilizării tehnicilor de procesare a semnalului de ultimă generație, cum ar fi localizarea sursei și formarea fasciculului. Acest microfon a fost, de asemenea, perechea perfectă cu backend-ul nostru, care a utilizat Azure Speech Services, o platformă de recunoaștere a vorbirii în text stabilită, oferind produsului nostru puterea de care avea nevoie pentru a fi un transcriptor de întâlniri de top.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/kinect-spec.png" alt="Azure Kinect DK vine cu o matrice de 7 microfoane pentru a capta vocile"/>

*Azure Kinect DK vine cu o matrice de 7 microfoane pentru a capta vocile*
</center>

Deși Azure nu a ajuns în versiunea finală a SeaMeet, ne-a oferit începutul de care aveam nevoie pentru a ne realiza viziunea. În cele din urmă, am legat toate acestea cu o interfață de utilizator. În prima noastră iterație, ne-am mulțumit cu un design generic, bazat pe Java, care, deși simplu, era perfect funcțional. Deoarece dispozitivul Kinect nu poate rula cod extern, toate acestea trebuiau să ruleze pe un laptop Windows suplimentar. Chiar dacă la început a fost puțin brut, am fost mândri să spunem că aveam un produs de transcriere a întâlnirilor complet funcțional.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/seameet-old.png" alt="Configurarea inițială a serviciului SeaMeet al Seasalt.ai folosind o matrice de microfoane Microsoft Kinect"/>

*Implementarea întâlnirilor moderne cu Azure Kinect și un computer Windows, care rulează o interfață de utilizator simplă bazată pe Java pentru a afișa transcrierea întâlnirilor în timp real și identificarea vorbitorului.*
</center>

### Implementarea întâlnirilor moderne

În mai 2021, inginerii noștri au sosit în Singapore pentru a implementa soluția noastră de afaceri modernă ca dovadă de concept. Confruntați cu alte două companii concurente, am fost însărcinați să demonstrăm viziunea noastră asupra viitorului întâlnirilor.

În ciuda faptului că wireless-ul devenise norma în ultimul deceniu, am constatat că concurenții noștri au optat în continuare pentru o soluție cu fir. După cum puteți vedea din imagine, fiecare dintre cei 12 vorbitori era ancorat la un microfon individual. Un vorbitor trebuia să vorbească direct în microfon într-un cadru de discuție apropiată pentru ca sistemul să-i capteze vocea. Acest lucru nu numai că împiedică grav flexibilitatea, dar o astfel de configurație multiplică și complexitatea cu echipamente AV complicate. Soluția noastră, pe de altă parte, este alimentată în întregime de capabilități de câmp îndepărtat, datorită matricei de 7 microfoane și algoritmilor de procesare a semnalului.

Într-o anumită măsură, soluția noastră a fost foarte asemănătoare cu „Alexa For Business”: un singur dispozitiv acoperă întreaga cameră, fiind necesar doar un cablu de alimentare. Comparativ cu soluția concurenților noștri, soluția noastră este cu generații înainte, în sensul că înțelegem cu adevărat nevoile afacerilor moderne, în timp ce ei sunt încă complet legați de generația veche cu fir.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/poc-setup.png"/>

*Configurarea sălii de conferințe PoC. Au fost 12 vorbitori care simulau o întâlnire guvernamentală de 2 ore.*

<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/poc-captioned.png"/>

*O fotografie mai detaliată a tuturor echipamentelor de pe șantier.*
</center>

Echipa a fost entuziasmată văzând diferența uriașă. Cu câteva ore de reglaj, PoC-ul final a decurs foarte bine. Echipa s-a bucurat, de asemenea, de un tur în Singapore după PoC, într-o țară în care Covid-19 a fost strict controlat, astfel încât viața și afacerile au decurs normal.

### Dincolo de întâlnirile moderne

În timpul petrecut în Singapore, gândurile noastre au depășit un PoC de succes: comparativ cu alte soluții concurente, a noastră a fost de 10 ori mai bună. Dar cum am putea face de 10 ori mai bine decât noi înșine? Vă rugăm să urmați pașii noștri către următorul blog din această serie.

`;export{e as default};
