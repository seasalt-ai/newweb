const e=`---
title: "NLU bazat pe intenție/entitate vs. NLU bazat pe GenAI/LLM: Diferența de milioane (de exemple și dolari)"
metatitle: "NLU bazat pe intenție/entitate vs. NLU bazat pe GenAI/LLM"
date: 2024-03-14 00:22:19-07:00
modified_date: 2024-07-30T12:00:00Z
draft: false
author: Xuchen Yao
description: "Dezlănțuiți viitorul AI conversațional – de ce trecerea de la NLU bazat pe intenție/entitate la NLU bazat pe GenAI/LLM este crucială pentru scalabilitate, rentabilitate și adaptabilitate."
weight: 1
tags:
  - SeaChat
  - AI Tools
  - Customer Experience
  - Customer Story
  - NLU
image: /images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU.png
canonicalURL: /blog/intent-entity-based-nlu-vs-genai-llm-based-nlu/
url: /blog/intent-entity-based-nlu-vs-genai-llm-based-nlu/
---

Pentru toți directorii de servicii pentru clienți sau de marketing, dacă șeful dumneavoastră vă pune următoarea întrebare, vă rugăm să le trimiteți acest articol:

"**De ce NLU bazat pe intenție/entitate este depășit, iar NLU bazat pe LLM/GenAI este tendința evidentă?**"

Sistemele de înțelegere a limbajului natural (NLU) sunt concepute pentru a procesa și analiza intrările în limbaj natural, cum ar fi textul sau vorbirea, pentru a extrage sensul, a extrage informații relevante și a înțelege intenția subiacentă din spatele comunicării. NLU este o componentă fundamentală a diferitelor aplicații AI, inclusiv asistenți virtuali, chatbot-uri, instrumente de analiză a sentimentelor, sisteme de traducere a limbajului și multe altele. Joacă un rol crucial în permiterea interacțiunii om-mașină și în facilitarea dezvoltării sistemelor inteligente capabile să înțeleagă și să răspundă la intrările în limbaj natural.

Această întrebare provine de la clienți maturi care își regândesc abordările IVR și chatbot. Aceștia sunt blocați în stivele tehnologice NLU de generație anterioară, adesea furnizate de companii mari de tehnologie, cum ar fi: [Microsoft Bot Framework](https://dev.botframework.com/) (sau [luis.ai](https://luis.ai)), [IBM Watson NLU](https://www.ibm.com/products/natural-language-understanding), [Google DialogFlow](https://cloud.google.com/dialogflow), [Meta’s wit.ai](https://wit.ai), [Amazon Lex](https://aws.amazon.com/lex/), [SAP Conversational AI](https://cai.tools.sap/), [Nuance Mix NLU](https://www.nuance.com/omni-channel-customer-engagement/ai-for-developers/nuance-mix/mix-nlu.html).

Provocarea este că clienții majori, cum ar fi companiile de asigurări, instituțiile financiare, guvernele, companiile aeriene/dealerii auto, au implementat tehnologia de generație anterioară. Dar, deoarece NLU bazat pe intenție/entitate nu se scalează, clienții trebuie să cheltuiască sute de mii până la milioane de dolari anual pentru a-și menține și actualiza sistemele NLU. Această lipsă de scalabilitate duce la costuri de întreținere în creștere, beneficiind în cele din urmă furnizorii NLU de generație anterioară în detrimentul clienților. Deoarece nu se scalează, costurile de întreținere cresc de la an la an.

## De ce NLU bazat pe intenție/entitate nu se scalează eficient?

Motivul principal constă în capacitatea discriminativă limitată a modelului. Iată o defalcare a motivelor:

1.  **Cerințe minime de intenție**: Modelele NLU necesită cel puțin două intenții distincte pentru a fi antrenate eficient. De exemplu, în timp ce intenția poate fi clară atunci când se întreabă despre vreme, există mai multe intenții potențiale în spatele fiecărei interogări, cum ar fi o revenire sau o interogare fără legătură cu vremea, cum ar fi "Ce mai faci?"

2.  **Necesitatea datelor de antrenament**: Companiile mari de tehnologie necesită adesea mii de exemple pozitive per intenție pentru un antrenament eficient. Acest set extins de date este necesar pentru ca modelul să învețe și să distingă cu precizie diferite intenții.

3.  **Echilibrarea exemplelor pozitive și negative**: Adăugarea de exemple pozitive la o intenție necesită includerea de exemple negative pentru alte intenții. Această abordare echilibrată asigură că modelul NLU poate învăța eficient atât din instanțe pozitive, cât și negative.

4.  **Seturi de exemple diverse**: Atât exemplele pozitive, cât și cele negative trebuie să fie diverse pentru a preveni supraînvățarea și a îmbunătăți capacitatea modelului de a generaliza în diferite contexte.

5.  **Complexitatea adăugării de noi intenții**: Adăugarea de noi intenții la un model NLU existent implică un proces laborios. Mii de exemple pozitive și negative trebuie adăugate, iar modelul trebuie apoi reantrenat pentru a-și menține performanța de bază. Acest proces devine din ce în ce mai dificil pe măsură ce numărul de intenții crește.

## Efectul de prescripție: Capcana NLU bazat pe intenție/entitate

<center>
<img height="100%" width="50%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU.png" alt="Efectul de prescripție al NLU bazat pe intenție/entitate">

*Efectul de prescripție al NLU bazat pe intenție/entitate*
</center>

Similar cu fenomenul cunoscut în medicină sub numele de "**cascadă de prescripții**", provocările de scalabilitate ale NLU bazat pe intenție/entitate pot fi comparate cu o cascadă de prescripții descurajantă. Imaginați-vă o persoană în vârstă împovărată de o multitudine de medicamente zilnice, fiecare prescris pentru a aborda efectele secundare ale medicamentului anterior. Acest scenariu este prea comun, unde introducerea medicamentului A duce la efecte secundare, necesitând prescrierea medicamentului B pentru a le contracara. Cu toate acestea, medicamentul B introduce propriul set de efecte secundare, necesitând astfel medicamentul C și așa mai departe. În consecință, persoana în vârstă se trezește gestionând un munte de pastile – o cascadă de prescripții.

O altă analogie evocatoare este construirea unui turn de blocuri, fiecare bloc reprezentând un medicament. Inițial, medicamentul A este plasat, dar instabilitatea sa (efecte secundare) determină adăugarea medicamentului B pentru a-l stabiliza. Cu toate acestea, această nouă adăugare ar putea să nu se integreze perfect, provocând o înclinare suplimentară a turnului (efectele secundare ale lui B). Pentru a corecta această instabilitate, se adaugă mai multe blocuri (medicamentele C, D etc.), exacerbând astfel instabilitatea turnului și vulnerabilitatea la prăbușire – reprezentând complicațiile de sănătate care pot apărea din polifarmacie.

<center>
<img height="60%" width="60%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/the-prescribing-effect-the-pitfall-of-Intent-entity-based-NLU-02.jpg" alt="O altă analogie evocatoare a NLU bazat pe intenție/entitate este construirea unui turn de blocuri">

*O altă analogie evocatoare a NLU bazat pe intenție/entitate este construirea unui turn de blocuri*
</center>

În mod similar, cu fiecare nouă intenție adăugată la un sistem NLU, turnul metaforic de blocuri crește, sporind instabilitatea. Necesitatea de consolidare se intensifică, ducând la costuri de întreținere mai mari. Prin urmare, în timp ce NLU bazat pe intenție/entitate poate fi inițial atractiv pentru furnizori, realitatea este că este prohibitiv de costisitor de întreținut pentru clienți. Aceste sisteme nu au scalabilitate, prezentând provocări semnificative atât pentru furnizori, cât și pentru clienți.
În secțiunile următoare, vom explora modul în care NLU bazat pe GenAI/LLM oferă o alternativă mai durabilă și scalabilă pentru a aborda eficient aceste provocări.

## NLU bazat pe GenAI/LLM: O soluție rezilientă

NLU bazat pe GenAI/LLM oferă o soluție robustă la provocările de scalabilitate cu care se confruntă sistemele bazate pe intenție/entitate. Acest lucru se datorează în principal a doi factori cheie:

1.  **Pre-antrenare și cunoștințe generale**: Modelele GenAI/LLM sunt pre-antrenate pe seturi masive de date, permițându-le să moștenească o bogăție de cunoștințe generale. Această cunoaștere acumulată joacă un rol crucial în distingerea diferitelor intenții, îmbunătățind astfel capacitatea discriminativă a modelului împotriva exemplelor negative.

2.  **Învățare cu puține exemple (Few-shot learning)**: O caracteristică notabilă a NLU bazat pe GenAI/LLM este capacitatea sa de a utiliza tehnici de învățare cu puține exemple. Spre deosebire de abordările tradiționale care necesită cantități mari de date de antrenament pentru fiecare intenție, învățarea cu puține exemple permite modelului să învețe din doar câteva exemple. Această metodă de învățare eficientă consolidează obiectivele dorite cu date minime, reducând semnificativ sarcina de antrenament.

Gândiți-vă la acest scenariu: Când vi se cere "Cum e vremea azi?", ca cititor, o identificați instinctiv ca o întrebare despre vreme, nu ca una dintre numeroasele propoziții pe care le întâlniți zilnic. Această capacitate inerentă de a recunoaște intenția este similară cu conceptul de învățare cu puține exemple.

Ca adulți, creierul nostru este pre-antrenat pe un vocabular vast, estimat la aproximativ 150 de milioane de cuvinte până la vârsta de 20 de ani. Această expunere lingvistică extinsă ne permite să înțelegem rapid noi intenții, cu doar câteva exemple necesare pentru consolidare.

Urban Dictionary este o resursă excelentă pentru a explora exemple practice de aplicații de învățare cu puține exemple, ilustrând în continuare eficacitatea sa în facilitarea înțelegerii rapide.

Capacitatea inerentă de învățare cu puține exemple în NLU bazat pe GenAI/LLM este esențială pentru reducerea costurilor și atingerea scalabilității. Deoarece cea mai mare parte a antrenamentului este finalizată în timpul pre-antrenării, reglarea fină a modelului cu un număr minim de exemple devine punctul central principal, simplificând procesul și sporind scalabilitatea.

## NLU bazat pe GenAI/LLM: Furnizarea de rezultate și dovezi

Începând cu martie 2024, domeniul procesării limbajului natural (NLP) a suferit o schimbare semnificativă, marcată de apariția NLU bazat pe GenAI/LLM. Progresele care au dominat cândva inovația NLP au stagnat în ultimii 2-3 ani, așa cum se vede din stagnarea progreselor de ultimă generație. Dacă vă uitați la <a href="https://github.com/sebastianruder/NLP-progress">progresul NLP</a>, care a fost cândva cel mai fierbinte, veți observa că s-a oprit în mare parte acum 2-3 ani:

<center>
<img height="80%" width="80%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/nlp-progress.png" alt="Am urmărit inovația NLP în acest depozit Github. Actualizările s-au oprit în mare parte acum 2-3 ani.">

*Am urmărit inovația NLP în acest depozit Github. Actualizările s-au oprit în mare parte acum 2-3 ani.*
</center>

Un reper notabil care subliniază această schimbare de paradigmă este <a href="https://super.gluebenchmark.com/leaderboard/">clasamentul SuperGlue</a>, cu cele mai recente intrări în decembrie 2022. Interesant este că acest interval de timp coincide cu introducerea ChatGPT (3.5), care a creat o agitație în întreaga comunitate NLP.

<center>
<img height="80%" width="80%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/superglue-leaderboard.png" alt="Clasamentul SuperGlue a fost popular înainte de introducerea ChatGPT">

*Clasamentul SuperGlue a fost popular înainte de introducerea ChatGPT*
</center>

Lucrarea inovatoare GPT-3, intitulată în mod adecvat "<a href="https://arxiv.org/abs/2005.14165">Modelele lingvistice sunt învățători cu puține exemple</a>", oferă dovezi convingătoare ale eficacității învățării cu puține exemple. Figura 2.1 de la pagina 7 a lucrării descrie distincția dintre metodele de învățare zero-shot, one-shot și few-shot, subliniind superioritatea acestora din urmă în ceea ce privește eficiența și eficacitatea învățării.


<center>
<img height="80%" width="80%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/few-shot-learners.png" alt="Diferența dintre metodele de învățare zero-shot, one-shot și few-shot">

*Diferența dintre metodele de învățare zero-shot, one-shot și few-shot*
</center>

În plus, pentru a valida eficacitatea NLU bazat pe GenAI/LLM, Tabelul 3.8 de la pagina 19 compară direct metodele tradiționale de NLU supravegheate cu învățarea cu puține exemple GPT-3. În această comparație, GPT-3 few-shot a depășit Fine-tuned BERT-Large în diverse sarcini, acesta din urmă fiind reprezentativ pentru învățarea supravegheată utilizată de sistemele NLU bazate pe intenție/entitate.

<center>
<img height="100%" width="100%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/gpt-performance.png"  alt="GPT-3 few-shot a depășit Fine-tuned BERT-Large în diverse sarcini">

*GPT-3 few-shot a depășit Fine-tuned BERT-Large în diverse sarcini*
</center>

Superioritatea GPT-3 few-shot nu se manifestă doar prin acuratețea sa, ci și prin rentabilitatea sa. În comparație cu metodele tradiționale, NLU bazat pe GenAI/LLM prezintă costuri inițiale de configurare și de întreținere semnificativ mai mici.

Dovezile empirice disponibile în comunitatea NLP subliniază impactul transformator al NLU bazat pe GenAI/LLM. Acesta și-a demonstrat acuratețea și eficiența de neegalat. În continuare, să examinăm rentabilitatea sa.

## Cerințe privind datele de antrenament: O analiză comparativă

O comparație revelatoare între NLU bazat pe intenție/entitate și NLU bazat pe GenAI/LLM dezvăluie cerințele lor diferite privind datele de antrenament. Figura 3.8 de la pagina 20 prezintă un contrast puternic:

<center>
<img height="100%" width="100%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/superglue-performance.png" alt="NLU bazat pe GenAI/LLM necesită mult mai puține date de antrenament">

*NLU bazat pe GenAI/LLM necesită mult mai puține date de antrenament*
</center>

-   **NLU cu învățare supravegheată**: Această abordare tradițională necesită seturi de date extinse, cu peste cinci sute de mii de exemple (630K) necesare pentru un antrenament eficient.

-   **GPT-3 cu puține exemple**: În contrast, NLU bazat pe GenAI/LLM demonstrează o eficiență remarcabilă, necesitând doar 32 de exemple per sarcină pentru o reglare fină eficientă.

Magnitudinea acestei discrepanțe este uimitoare: **630.000 de exemple față de doar 32**. Această reducere drastică a cerințelor privind datele de antrenament se traduce prin economii semnificative de costuri pentru întreprinderile care adoptă NLU bazat pe GenAI/LLM.

În plus, implicațiile implicite asupra programelor de dezvoltare sunt profunde. Cu NLU bazat pe GenAI/LLM, procesul de antrenament scurtat accelerează implementarea sistemelor NLU cu mai multe ordine de mărime, facilitând adaptarea rapidă și inovația în domeniul procesării limbajului natural.

În esență, această comparație subliniază potențialul transformator al NLU bazat pe GenAI/LLM, oferind o eficiență și o rentabilitate de neegalat în ceea ce privește cerințele privind datele de antrenament și programele de dezvoltare.

## Îmbrățișarea evoluției: De ce NLU bazat pe GenAI/LLM predomină

În domeniul înțelegerii limbajului natural, trecerea de la sistemele bazate pe intenție/entitate la soluțiile bazate pe GenAI/LLM este, fără îndoială, în curs de desfășurare. Această schimbare este determinată de o multitudine de factori care subliniază limitările NLU tradițional bazat pe intenție/entitate și avantajele convingătoare oferite de abordările bazate pe GenAI/LLM.

NLU bazat pe intenție/entitate este din ce în ce mai mult considerat depășit din mai multe motive convingătoare:

1.  **Flexibilitate limitată**: Sistemele NLU tradiționale se bazează pe intenții și entități predefinite, ceea ce limitează adaptabilitatea chatbot-urilor și IVR-urilor la intrările utilizatorilor care se abat de la aceste categorii predefinite.

2.  **Provocări de întreținere**: Pe măsură ce aceste sisteme se extind și numărul de intenții și entități crește, complexitatea și timpul necesar pentru întreținere și actualizări cresc exponențial.

3.  **Lipsa înțelegerii contextului**: Aceste sisteme nu reușesc adesea să înțeleagă nuanțele contextuale complexe din conversații, ducând la răspunsuri inexacte sau la necesitatea unei intrări suplimentare din partea utilizatorului pentru a clarifica intenția.

4.  **Lipsa capacității de generare**: Sistemele NLU bazate pe intenție și entitate sunt în mod inerent limitate în capacitatea lor de a genera text, ceea ce le restricționează la sarcini centrate pe clasificarea intențiilor și extragerea entităților. Acest lucru limitează adaptabilitatea chatbot-urilor și IVR-urilor, ducând adesea la răspunsuri monotone care nu se aliniază cu contextul conversațional.

În contrast, NLU bazat pe GenAI/LLM a apărut ca o tendință dominantă datorită atributelor sale transformatoare:

1.  **Învățare adaptivă**: Modelele GenAI posedă capacitatea de a învăța din conversații în timp real, permițându-le să se adapteze autonom la noi subiecte și comportamente ale utilizatorilor fără actualizări manuale.

2.  **Înțelegerea contextului**: Aceste modele excelează în înțelegerea nuanțelor contextuale complexe din conversații, rezultând răspunsuri mai precise și mai relevante care rezonează cu utilizatorii.

3.  **Învățare cu puține exemple**: Modelele GenAI pot fi antrenate cu exemple minime, simplificând procesul de antrenament și reducând dependența de definițiile explicite ale intențiilor și entităților.

4.  **Generarea limbajului natural**: GenAI/LLM posedă capacitatea de a genera text, permițându-le să creeze chatbot-uri și alte aplicații NLP care oferă răspunsuri naturale și relevante contextual.

Viitorul AI conversațional depinde de sistemele capabile să învețe și să se adapteze organic, oferind o experiență fluidă și intuitivă utilizatorilor. NLU bazat pe GenAI/LLM întruchipează această evoluție, oferind o abordare dinamică și flexibilă care depășește limitările sistemelor tradiționale bazate pe intenție/entitate.

În esență, traiectoria principală a NLU este, fără îndoială, definită de ascensiunea abordărilor bazate pe GenAI/LLM, prevestind o nouă eră a AI conversațional care prioritizează adaptabilitatea, contextualitatea și centrarea pe utilizator.`;export{e as default};
