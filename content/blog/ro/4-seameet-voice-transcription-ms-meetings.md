---
title: "De la demo la succes: capcanele întâlnirilor moderne (2/5)"
metatitle: "De la demo la succes (2/5): capcanele întâlnirilor moderne"
date: 2021-07-30
author: Cody Kim
image: "images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif"
draft: false
description: "În partea a doua a acestei serii de blog-uri, urmați călătoria Seasalt.ai de a crea SeaMeet, soluția noastră colaborativă pentru întâlniri moderne."
tags: ["SeaMeet"]
weight: 1  
canonicalURL: "/blog/seameet-voice-and-microsoft-modern-meetings/"
url: "/blog/seameet-voice-and-microsoft-modern-meetings/"
aliases:
    - /blog/4-seameet-voice-intelligence-meeting-transcription-pitfalls-of-microsoft-modern-meetings/
modified_date: 2024-12-19T10:30:00Z
---

*În această serie de blog-uri, urmați călătoria Seasalt.ai de a crea o experiență completă de întâlniri moderne, de la începuturile sale modeste, până la optimizarea serviciilor noastre pe diferite hardware și modele, până la integrarea celor mai avansate sisteme NLP, culminând cu SeaMeet, soluția noastră colaborativă pentru întâlniri moderne.*

## Capcanele întâlnirilor moderne

În procesul nostru de dezvoltare, am întâlnit multe obstacole imprevizibile, fără cauze clare sau soluții.

### Pornirea rapidă

Primul obstacol a fost să facem instrumentele noastre să funcționeze. Azure a oferit un exemplu de întâlniri moderne și am fost încântați că era compatibil cu Linux, dar am descoperit că era mult mai ușor să rulăm demo-ul folosind SDK-ul pe Windows - la urma urmei, este un produs Microsoft. După mai multe încercări eșuate de a face exemplul furnizat să funcționeze pe Linux, am fost nevoiți să abandonăm această cale și să trecem la Windows. În final, am avut un transcriber vocal complet funcțional, ceea ce a fost un început imens.

### Întârzierea

Una dintre problemele pe care le-am întâlnit a fost o întârziere de aproximativ cinci secunde când primeam rezultatele de recunoaștere pe interfața frontend. Deși 5 secunde pot părea destul de rapide, această întârziere era semnificativ mai lentă decât o soluție convenabilă și utilă, în special pentru comunicarea în timp real.

<center>
<img src="/images/blog/4-seameet-voice-intelligence-meeting-transcription-pitfalls-of-microsoft-modern-meetings/default_ui.png" style="width:400px;" alt="Interfața implicită de transcriere vocală furnizată de Azure Speech SDK"/>

*Interfața implicită de transcriere vocală furnizată de Azure Speech SDK*
</center>

Întârzierea era și o problemă serioasă pe backend. La începutul fiecărei întâlniri, rezultatele apăreau instantaneu (așa cum era promis!), dar pe măsură ce întâlnirea progresa, întârzierea creștea periodic până la treizeci de secunde înainte ca textul să apară pe ecran. Până atunci, tot ce se spusese era deja irelevant pentru conversație. După nenumărate teste, am început să observăm că întârzierea varia pe tot parcursul zilei, pe care am atribuit-o încărcării serverelor Azure la acea vreme. Ne dedicăm creării de produse consistente și de încredere, astfel încât aceste fluctuații și întârzierile imprevizibile erau inacceptabile. Aceasta a oferit și mai multe motive pentru a ne baza pe propriile noastre modele și servere.

### Dialectele

Unul dintre motivele speciale pentru care am folosit inițial serviciile vocale Azure a fost suportul lor extins pentru diverse limbi și dialecte. Am fost deosebit de încântați să putem folosi modelul de engleză singaporeză al serviciilor vocale Azure. Dar imaginați-vă surpriza noastră când am descoperit că, pentru dialectul singaporez, modelul american de engleză performa în mod constant mai bine decât modelul de engleză singaporeză. În plus, chiar și cele mai bune modele nu au reușit să facă față provocărilor din lumea reală.

<center>
<img src="/images/blog/4-seameet-voice-intelligence-meeting-transcription-pitfalls-of-microsoft-modern-meetings/bad_result.png"/>

*Rezultatul transcrierii pentru "Felicitări! Este băiat sau fată?"*
</center>

Rezultatul pe care l-am văzut a fost "ola regulations may be boiled baby cool", în timp ce ceea ce se spunea de fapt era "Felicitări! Este băiat sau fată?". Un model de limbă antrenat ar trebui să elimine astfel de transcrieri. Deși acesta este un exemplu extrem, în general, erori apăreau la fiecare transcriere. Indiferent cât de mici erau erorile, cum ar fi articole lipsă sau cuvinte înțelese greșit, orice eroare distrage atenția și poate deteriora ușor reputația serviciului de transcriere.

### Actualizările Windows

Câteva săptămâni mai târziu, echipa lucra zi și noapte pentru a ne asigura că produsul nostru era pregătit pentru demonstrația cu clienții din câteva zile. Transcriberul nostru de întâlniri funcționa fluid pe trei laptop-uri Windows independente. Apoi, într-o zi, am rămas brusc cu doar un computer disponibil, deși nimeni nu atinsese codul. Am testat rețeaua noastră, am verificat firewall-ul nostru, orice am putut gândi care ar fi putut cauza brusc eșecul produsului nostru. Ultima noastră ghicire a fost că o actualizare neașteptată Windows a făcut ca Azure Speech SDK să fie incompatibil cu două dintre computerele noastre, când am comparat bit cu bit aceste trei sisteme. Cu demonstrația noastră aproape, stresul și tensiunea au atins punctul critic. Cu doar un sistem rămas, echipa a ajuns la un acord: nicio modificare a codului, nicio actualizare. După această încercare, am avut destul.

### Dincolo de întâlnirile moderne

Pentru a scăpa de aceste obstacole, echipa Seasalt.ai a început să antreneze propriile noastre modele acustice și lingvistice pentru a rivaliza cu transcriberul de conversații al Azure. Pe tot parcursul procesului, ne-am întrebat constant: ce urmează? Cum putem extinde acest produs deja util?

Întâlnirile moderne au demonstrat potențialul puternic al conversiei voce-text, dar asta era tot. Ne poate auzi vorbind, dar ce-ar fi dacă am putea să-l facem să gândească pentru noi? Bazându-ne doar pe transcriere, deși produsul era impresionant, aplicațiile sale erau oarecum limitate. Trecerea de la transcrierea vocală la inteligența vocală ne va deschide uși vaste pentru ceea ce putem crea. Exemple de inteligență includ rezumarea întâlnirilor, abstractizarea temelor și extragerea acțiunilor. În final, proiectarea unei interfețe frumoase care să integreze totul într-un pachet uimitor.

Aceasta este povestea până acum, începutul călătoriei Seasalt.ai de a aduce cele mai bune soluții de afaceri pe piața în dezvoltare rapidă și de a le livra lumii. Dacă doriți să aflați mai multe detalii, continuați să citiți restul acestei serii de blog-uri. 