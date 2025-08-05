---
title: "NLU bazat pe intenții/entități vs NLU bazat pe GenAI/LLM: diferența de milioane (de exemple și dolari)"
metatitle: "NLU bazat pe intenții/entități vs NLU bazat pe GenAI/LLM"
date: 2024-03-14T00:22:19-07:00
draft: false
author: Xuchen Yao
description: "Dezleagă viitorul AI-ului conversațional — de ce trecerea de la NLU bazat pe intenții/entități la NLU bazat pe GenAI/LLM este crucială pentru scalabilitate, eficiența costurilor și adaptabilitate."
weight: 1
tags: ["SeaChat", "AI Tools", "Customer Experience", "Customer Story", "NLU"]
image: /images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU.png
canonicalURL: "/blog/intent-entity-based-nlu-vs-genai-llm-based-nlu/"
url: "/blog/intent-entity-based-nlu-vs-genai-llm-based-nlu/"
modified_date: "2025-01-28T16:56:53Z"
---

Pentru toți directorii de servicii clienți sau marketing, dacă șeful vostru vă întreabă următoarea întrebare, trimiteți-le acest articol:

"**De ce NLU-ul bazat pe intenții/entități este învechit, iar NLU-ul bazat pe LLM/GenAI este tendința evidentă?**"

Sistemele de înțelegere a limbajului natural (NLU) sunt concepute pentru a procesa și analiza inputurile în limbaj natural, cum ar fi textul sau vocea, pentru a extrage semnificația, a extrage informații relevante și a înțelege intențiile potențiale din spatele comunicării. NLU este o componentă fundamentală a diferitelor aplicații AI, inclusiv asistenți virtuali, chatbot-uri, instrumente de analiză a sentimentelor, sisteme de traducere lingvistică și multe altele. Joacă un rol crucial în realizarea interacțiunii om-mașină și în facilitarea dezvoltării sistemelor inteligente capabile să înțeleagă și să răspundă la inputuri în limbaj natural.

Această întrebare vine de la clienții maturi care își reanalizează abordările IVR și chatbot. Sunt blocați în stivele tehnologice NLU de generația anterioară, de obicei furnizate de companii tech mari, cum ar fi: [Microsoft Bot Framework](https://dev.botframework.com/) (sau [luis.ai](https://luis.ai")), [IBM Watson NLU](https://www.ibm.com/products/natural-language-understanding), [Google DialogFlow](https://cloud.google.com/dialogflow), [Meta's wit.ai](https://wit.ai), [Amazon Lex](https://aws.amazon.com/lex/), [SAP Conversational AI](https://cai.tools.sap/), [Nuance Mix NLU](https://www.nuance.com/omni-channel-customer-engagement/ai-for-developers/nuance-mix/mix-nlu.html).

Problema este că clienții principali precum companiile de asigurări, instituțiile financiare, guvernele, companiile aeriene/dealerii auto au deja implementat tehnologia de generația anterioară. Dar din cauza faptului că NLU-ul bazat pe intenții/entități nu poate fi scalat, clienții trebuie să cheltuiască sute de mii până la milioane de dolari anual pentru a-și întreține și actualiza sistemele NLU. Această lipsă de scalabilitate duce la costuri de întreținere în continuă creștere, în final la costul clienților, beneficiind furnizorii NLU de generația anterioară. Deoarece nu pot fi scalate, costurile de întreținere cresc anual.

## De ce NLU-ul bazat pe intenții/entități nu poate fi scalat eficient?

Motivul principal constă în capacitatea discriminatorie limitată a modelului. Iată o defalcare a motivelor:

1. **Cerințe minime de intenții**: Modelele NLU necesită cel puțin două intenții diferite pentru a fi antrenate eficient. De exemplu, când se întreabă despre vreme, intenția poate fi clară, dar fiecare interogare din spate are multiple intenții potențiale, cum ar fi fallback-ul sau interogări nelegate de vreme, cum ar fi "Cum ești?"

2. **Cerințe de date de antrenament**: Companiile tech mari de obicei cer mii de exemple pozitive pentru fiecare intenție pentru antrenament eficient. Acest set de date extins este necesar pentru ca modelul să învețe și să distingă cu acuratețe intențiile diferite.

3. **Echilibrarea exemplelor pozitive și negative**: Adăugarea exemplelor pozitive la o intenție necesită includerea exemplelor negative pentru alte intenții. Această abordare echilibrată asigură că modelele NLU pot învăța eficient din exemplele pozitive și negative.

4. **Seturi diverse de exemple**: Atât exemplele pozitive cât și cele negative trebuie să fie diverse pentru a preveni overfitting-ul și a îmbunătăți capacitatea modelului de a generaliza în contexte diferite.

5. **Complexitatea adăugării de intenții noi**: Adăugarea de intenții noi la un model NLU existent implică un proces laborios. Trebuie adăugate mii de exemple pozitive și negative, apoi modelul trebuie reantrenat pentru a-și menține performanța de bază. Pe măsură ce numărul de intenții crește, acest proces devine din ce în ce mai provocator.

## Efectul de prescripție: capcana NLU-ului bazat pe intenții/entități

<center>
<img height="100%" width="50%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU.png" alt="Efectul de prescripție al NLU-ului bazat pe intenții/entități">

*Efectul de prescripție al NLU-ului bazat pe intenții/entități*
</center>

Similar cu fenomenul din medicină numit "**cascadă de prescripții**", provocările de scalabilitate ale NLU-ului bazat pe intenții/entități pot fi comparate cu o cascadă de prescripții descurajatoare. Imaginați-vă o persoană în vârstă încărcată cu o mulțime de medicamente zilnice, fiecare prescris pentru a rezolva efectele secundare ale medicamentului anterior. Acest scenariu este prea comun - introducerea medicamentului A duce la efecte secundare, necesitând prescrierea medicamentului B pentru a le contracara. Cu toate acestea, medicamentul B introduce propriile sale efecte secundare, necesitând medicamentul C, și așa mai departe. Astfel, persoana în vârstă se găsește gestionând o grămadă de pastile — o cascadă de prescripții.

O altă analogie vizuală este construirea unui turn de jucării, fiecare jucărie reprezentând un medicament. Inițial, medicamentul A este plasat, dar instabilitatea sa (efectele secundare) determină adăugarea medicamentului B pentru a-l stabiliza. Cu toate acestea, această nouă adăugare poate să nu se integreze perfect, ducând la o înclinare suplimentară a turnului (efectele secundare ale lui B). Pentru a corecta această instabilitate, sunt adăugate mai multe jucării (medicamentele C, D, etc.), exacerbând instabilitatea turnului și vulnerabilitatea la prăbușire — aceasta reprezintă complicațiile de sănătate pe care le pot cauza multiplele medicamente.

<center>
<img height="60%" width="60%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/the-prescribing-effect-the-pitfall-of-Intent-entity-based-NLU-02.jpg" alt="O altă analogie vizuală pentru NLU-ul bazat pe intenții/entități este construirea unui turn de jucării">

*O altă analogie vizuală pentru NLU-ul bazat pe intenții/entități este construirea unui turn de jucării*
</center>

Similar, pe măsură ce fiecare nouă intenție este adăugată la sistemele NLU, turnul metaforic de jucării devine din ce în ce mai înalt, crescând instabilitatea. Necesitatea de întărire escaladează continuu, ducând la costuri de întreținere mai mari. Astfel, deși NLU-ul bazat pe intenții/entități poate părea inițial atractiv pentru furnizori, realitatea este că este prea costisitor de întreținut pentru clienți. Aceste sisteme lipsesc de scalabilitate, prezentând provocări semnificative atât pentru furnizori cât și pentru clienți.
În secțiunea următoare, vom explora cum NLU-ul bazat pe GenAI/LLM oferă o alternativă mai durabilă și scalabilă pentru a rezolva eficient aceste provocări.

## NLU bazat pe GenAI/LLM: soluția elastică

NLU-ul bazat pe GenAI/LLM oferă o soluție puternică pentru provocările de scalabilitate cu care se confruntă sistemele bazate pe intenții/entități. Aceasta se datorează în principal la doi factori cheie:

1. **Preantrenament și cunoștințe despre lume**: Modelele GenAI/LLM sunt preantrenate pe volume mari de date, permițându-le să moștenească cunoștințe bogate despre lume. Această cunoaștere acumulată joacă un rol crucial în distingerea diferitelor intenții, îmbunătățind astfel capacitatea discriminatorie a modelului împotriva exemplelor negative.

2. **Învățarea cu puține exemple**: O caracteristică remarcabilă a NLU-ului bazat pe GenAI/LLM este capacitatea sa de a adopta tehnici de învățare cu puține exemple. Spre deosebire de metodele tradiționale care necesită volume mari de date de antrenament pentru a realiza fiecare intenție, învățarea cu puține exemple permite modelului să învețe din doar câteva exemple. Această metodă de învățare eficientă întărește obiectivul dorit cu date minime, reducând semnificativ povara de antrenament.

Luați în considerare acest scenariu: când vi se întreabă ca cititor "Cum este vremea astăzi?", o identificați instinctiv ca o întrebare despre vreme, nu ca una dintre numeroasele propoziții întâlnite zilnic. Această capacitate intrinsecă de a identifica intenția este similară cu conceptul de învățare cu puține exemple.

Ca adulți, creierul nostru este preantrenat pe un vocabular vast, estimat la aproximativ 150 de milioane de cuvinte până la vârsta de 20 de ani. Această expunere lingvistică extinsă ne permite să înțelegem rapid intenții noi, necesitând doar câteva exemple pentru întărire.

Urban Dictionary este o resursă excelentă pentru a explora exemple practice de aplicare a învățării cu puține exemple, ilustrând în continuare eficacitatea sa în facilitarea înțelegerii rapide.

Capacitatea intrinsecă de învățare cu puține exemple în NLU-ul bazat pe GenAI/LLM este crucială pentru reducerea costurilor și realizarea scalabilității. Deoarece majoritatea antrenamentului a fost deja completată în timpul preantrenamentului, focalizarea principală devine finetuning-ul modelului cu numărul minim de exemple, simplificând astfel procesul și îmbunătățind scalabilitatea.

## NLU bazat pe GenAI/LLM: furnizarea rezultatelor și dovezilor

Până în martie 2024, domeniul procesării limbajului natural (NLP) a suferit o schimbare semnificativă, marcată de apariția NLU-ului bazat pe GenAI/LLM. Progresele care odată dominau inovația NLP au stagnat în ultimii 2-3 ani, evident din stagnarea progreselor tehnologice de ultimă generație. Dacă vă uitați la <a href="https://github.com/sebastianruder/NLP-progress">progresele NLP</a> care odată erau foarte populare, veți găsi că s-a oprit practic acum 2-3 ani:

<center>
<img height="80%" width="80%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/nlp-progress.png" alt="Odată urmăream inovația NLP în acest repository Github. Actualizările s-au oprit practic acum 2-3 ani.">

*Odată urmăream inovația NLP în acest repository Github. Actualizările s-au oprit practic acum 2-3 ani.*
</center>

Un benchmark notabil care evidențiază această schimbare de paradigmă este <a href="https://super.gluebenchmark.com/leaderboard/">clasamentul SuperGlue</a>, cu ultima intrare în decembrie 2022. Interesant, acest interval de timp coincide cu introducerea ChatGPT (3.5), care a creat o senzație în întreaga comunitate NLP.

<center>
<img height="80%" width="80%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/superglue-leaderboard.png" alt="Clasamentul SuperGlue era popular înainte de introducerea ChatGPT">

*Clasamentul SuperGlue era popular înainte de introducerea ChatGPT*
</center>

Lucrarea revoluționară GPT-3, numită în mod corespunzător "<a href="https://arxiv.org/abs/2005.14165">Language Models are Few-Shot Learners</a>", oferă dovezi convingătoare ale eficacității învățării cu puține exemple. Figura 2.1 de la pagina 7 ilustrează distincția între metodele de învățare zero-shot, one-shot și few-shot, evidențiind superioritatea acesteia din urmă în eficiența și eficacitatea învățării.

<center>
<img height="80%" width="80%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/few-shot-learners.png" alt="Distincția între metodele de învățare zero-shot, one-shot și few-shot">

*Distincția între metodele de învățare zero-shot, one-shot și few-shot*
</center>

Mai mult, pentru a corobora eficacitatea NLU-ului bazat pe GenAI/LLM, tabelul 3.8 de la pagina 19 compară direct metodele tradiționale NLU supervizate cu învățarea few-shot GPT-3. În această comparație, GPT-3 few-shot depășește Fine-tuned BERT-Large în diverse sarcini, acesta din urmă fiind reprezentantul învățării supervizate adoptate de sistemele NLU bazate pe intenții/entități.

<center>
<img height="100%" width="100%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/gpt-performance.png"  alt="GPT-3 few-shot depășește Fine-tuned BERT-Large în diverse sarcini">

*GPT-3 few-shot depășește Fine-tuned BERT-Large în diverse sarcini*
</center>

Superioritatea GPT-3 few-shot nu se manifestă doar în acuratețea sa, ci și în eficiența costurilor. Comparativ cu metodele tradiționale, costurile inițiale de configurare și întreținere ale NLU-ului bazat pe GenAI/LLM sunt semnificativ reduse.

Dovezile empirice furnizate în comunitatea NLP evidențiază impactul transformator al NLU-ului bazat pe GenAI/LLM. A demonstrat deja acuratețea și eficiența sa de neegalat. În continuare, să verificăm eficiența costurilor.

## Cerințe de date de antrenament: analiză comparativă

O comparație revelatoare între NLU-ul bazat pe intenții/entități și NLU-ul bazat pe GenAI/LLM dezvăluie cerințele lor diferite de date de antrenament. Figura 3.8 de la pagina 20 prezintă un contrast dramatic:

<center>
<img height="100%" width="100%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/superglue-performance.png" alt="NLU-ul bazat pe GenAI/LLM necesită mult mai puține date pentru antrenament">

*NLU-ul bazat pe GenAI/LLM necesită mult mai puține date pentru antrenament*
</center>

- **NLU supervizat**: Această metodă tradițională necesită seturi de date extinse, necesitând peste cinci sute de mii de exemple (630K) pentru antrenament eficient.

- **GPT-3 few-shot**: În contrast, NLU-ul bazat pe GenAI/LLM demonstrează eficiență remarcabilă, necesitând doar 32 de exemple per sarcină pentru finetuning eficient.

Magnitudinea acestei diferențe este șocantă: **630.000 de exemple versus doar 32**. Această reducere dramatică a cerințelor de date de antrenament aduce economii semnificative de costuri pentru întreprinderile care adoptă NLU-ul bazat pe GenAI/LLM.

Mai mult, impactul implicit asupra programelor de dezvoltare este profund. Cu NLU-ul bazat pe GenAI/LLM, procesul de antrenament scurtat accelerează implementarea sistemelor NLU cu mai multe ordine de mărime, facilitând astfel adaptarea rapidă și inovația în domeniul procesării limbajului natural.

În esență, această comparație evidențiază potențialul transformator al NLU-ului bazat pe GenAI/LLM, oferind eficiență și eficiență de costuri de neegalat în ceea ce privește cerințele de date de antrenament și programele de dezvoltare.

## Îmbrățișarea evoluției: de ce NLU-ul bazat pe GenAI/LLM prevalează

În domeniul înțelegerii limbajului natural, tranziția de la sistemele bazate pe intenții/entități la soluțiile bazate pe GenAI/LLM se desfășoară fără îndoială. Această schimbare este determinată de numeroși factori care evidențiază limitările NLU-ului tradițional bazat pe intenții/entități și avantajele convingătoare oferite de abordarea bazată pe GenAI/LLM.

NLU-ul bazat pe intenții/entități este din ce în ce mai considerat învechit din câteva motive convingătoare:

1. **Flexibilitate limitată**: Sistemele NLU tradiționale se bazează pe intenții și entități predefinite, limitând adaptabilitatea chatbot-urilor și IVR-urilor la inputurile utilizatorilor care se abat de la aceste categorii predefinite.

2. **Provocări de întreținere**: Pe măsură ce aceste sisteme se extind și numărul de intenții și entități explodează, complexitatea și timpul necesar pentru întreținere și actualizări cresc exponențial.

3. **Lipsa înțelegerii contextului**: Aceste sisteme de obicei nu pot înțelege nuanțele complexe de context în conversații, ducând la răspunsuri inexacte sau necesitând input suplimentar de la utilizator pentru clarificarea intenției.

4. **Lipsa capacității generative**: Sistemele NLU bazate pe intenții și entități sunt inerent limitate în capacitatea de a genera text, limitându-le la sarcinile centrate pe clasificarea intențiilor și extragerea entităților. Aceasta limitează adaptabilitatea chatbot-urilor și IVR-urilor, de obicei ducând la răspunsuri monotone care nu se aliniază cu contextul conversației.

În contrast, NLU-ul bazat pe GenAI/LLM a devenit tendința dominantă datorită atributelor sale transformatoare:

1. **Învățare adaptivă**: Modelele GenAI au capacitatea de a învăța dinamic din conversațiile în timp real, permițându-le să se adapteze autonom la subiecte noi și comportamente ale utilizatorilor fără actualizări manuale.

2. **Înțelegerea contextului**: Aceste modele sunt pricepute la înțelegerea nuanțelor complexe de context în conversații, producând astfel răspunsuri mai exacte și relevante care rezonează cu utilizatorii.

3. **Învățarea cu puține exemple**: Modelele GenAI pot fi antrenate cu exemple minime, simplificând astfel procesul de antrenament și reducând dependența de definiții explicite de intenții și entități.

4. **Generarea limbajului natural**: GenAI/LLM posedă capacitatea de a genera text, permițându-le să creeze chatbot-uri și alte aplicații NLP care oferă răspunsuri naturale și contextuale.

Viitorul AI-ului conversațional depinde de sisteme capabile să învețe și să se adapteze organic, oferind utilizatorilor experiențe fluide și intuitive. NLU-ul bazat pe GenAI/LLM întruchipează această evoluție, oferind o abordare dinamică și flexibilă care transcende limitările sistemelor tradiționale bazate pe intenții/entități.

În esență, traiectoria principală a NLU-ului este fără îndoială definită de ascensiunea abordărilor bazate pe GenAI/LLM, prefigurând o nouă eră a AI-ului conversațional prioritizând adaptabilitatea, contextualitatea și centrarea pe utilizator. 