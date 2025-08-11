const o=`---
title: "Texto para Fala no Discord: Um Estudo de Caso do Bot TTS do Discord"
metatitle: "Texto para Fala no Discord: Um Estudo de Caso do Bot TTS do ..."
date: 2022-12-27 17:04:20-08:00
modified_date: 2025-07-29 20:45:17+00:00
author: Kim Dodds
description: "Neste blog, discutiremos nossas descobertas sobre como os usuários reais do Discord utilizam nossos serviços após revisar vários meses de dados autênticos de texto para fala."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/29-tts-case-study/discord-tts-accessibility.jpg
url: /blog/discord-tts-case-study/
---


*Após o lançamento do SeaVoice, um dos bots de texto para fala e fala para texto mais rápidos e precisos no Discord, queríamos entender como os usuários estavam realmente interagindo com os serviços. Neste blog, discutiremos nossas descobertas após revisar vários meses de dados reais de usuários de texto para fala.*

# SeaVoice: Um Bot Discord de Texto para Fala e Fala para Texto

O Discord, sendo uma plataforma usada principalmente para uma combinação de áudio e bate-papo baseado em texto, é um fantástico campo de testes para serviços de inteligência de voz e processamento de linguagem natural.
Nós implantamos o Bot SeaVoice, equipado com comandos de texto para fala e fala para texto, no Discord em agosto de 2022.
Para saber mais sobre como o bot funciona, ou ver uma pequena demonstração em vídeo, você pode visitar o [Wiki do Bot Discord SeaVoice](https://wiki.seasalt.ai/seavoice/discord/6-community/).
Em novembro do mesmo ano, lançamos uma nova versão com melhorias significativas no backend (conforme descrito em nossa postagem anterior no blog: [Bot Discord SeaVoice: Melhorias de Backend e Estabilidade](https://seasalt.ai/blog/27-seavoice-discord-backend-improvements/)) que nos permitem registrar dados anônimos sobre como os usuários estão interagindo com o bot SeaVoice.
Neste blog, daremos uma olhada em 1 mês de dados de usuário do comando de texto para fala.

## Uso do SeaVoice TTS

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-usage.jpg" alt="Uso diário de texto para fala do Bot Discord SeaVoice ao longo de 7 semanas."/>

*Uso diário de texto para fala do Bot Discord SeaVoice ao longo de 7 semanas.*
</center>

No momento da escrita, o Bot SeaVoice foi adicionado a quase 800 servidores!
Desde que começamos a registrar os dados de uso em novembro, descobrimos que o número total de solicitações por dia pode flutuar de apenas 150 para mais de 1.300 (com uma média de cerca de 560).
Cerca de 650 usuários experimentaram o comando TTS pelo menos uma vez.
No entanto, a maioria dos usuários não continua a usá-lo regularmente depois de experimentá-lo.
Dos 650 usuários que experimentaram o comando TTS, cerca de 200 o usaram 20 vezes ou mais, e apenas 100 o usaram 50 vezes ou mais.
Dito isso, aqueles que gostam e dependem do comando TTS o usam extensivamente!
Nossos 5 principais usuários enviaram mais de 1.000 solicitações cada nos últimos dois meses, e o usuário principal enviou quase 2.500 solicitações sozinho!

## Observações

### Por que as pessoas usam texto para fala

<center>
<img src="/images/blog/29-tts-case-study/why-mute-on-discord.jpg" alt="Razões pelas quais os usuários do Bot Discord SeaVoice utilizam texto para fala."/>

*Razões pelas quais os usuários do Bot Discord SeaVoice utilizam texto para fala.*
</center>

Então, nossa primeira pergunta depois de ver os dados de uso é: **por que os usuários frequentes estão utilizando o TTS em primeiro lugar?**
Nós procuramos no banco de dados para encontrar algumas explicações.
As seguintes são comandos TTS reais de alguns de nossos usuários.

__*Por que você não está falando?*__

    - também não consigo falar porque estou comendo
    - Eu realmente falaria, mas estou no trabalho no momento.
    - se eu falar, acordarei minha família
    - desculpe, não vou falar muito. a garganta dói muito.
    - eu conseguiria falar, mas minha mãe está aqui
    - estou com muita preguiça de falar hoje
    - não consigo falar porque estou doente, mas queria entrar de qualquer maneira :)
    - não totalmente mudo, apenas exige esforço para falar. Muito esforço em alguns dias
    - desculpe, estou mudo, minha avó está falando ao telefone e está alto
    - Porque meu microfone estava quebrado

Depois de encontrar essas explicações, podemos resumi-las em algumas razões principais:
- há uma barreira física (microfone quebrado, dificuldade para falar, doença, etc.),
- eles estão ocupados fazendo outra coisa (comendo, no trabalho, etc.),
- o ambiente deles é muito barulhento ou eles precisam ficar quietos, ou
- porque é conveniente e eles gostam de usá-lo.

Mas, independentemente do motivo exato pelo qual eles usam o serviço TTS, muitos usuários expressaram entusiasmo por poderem participar das conversas do canal de voz quando, de outra forma, não seriam capazes.
Acreditamos que o serviço TTS torna os canais de voz do Discord mais acessíveis, e essa é a principal razão pela qual nossos usuários regulares continuam utilizando o serviço.

### Uso do idioma

Uma coisa que me chamou a atenção ao revisar as conversas foi que muitos usuários tentaram usar o comando de texto para fala com idiomas diferentes.
Enquanto alguns usuários apenas queriam ver se funcionaria ou acharam a pronúncia engraçada, outros, no entanto, continuaram a usar o TTS em idiomas não ingleses por longos períodos de tempo!

<center>
<img src="/images/blog/29-tts-case-study/discord-spanish-tts-test.png" alt="Um usuário testa a pronúncia em espanhol do modelo TTS SeaVoice em inglês."/>

*Um usuário testa a pronúncia em espanhol do modelo TTS SeaVoice em inglês.*
</center>

Este foi particularmente o caso com falantes de espanhol, embora (como o usuário acima observa) o desempenho do TTS não seja bom para o espanhol, já que o modelo é treinado apenas em inglês.
Comecei a anotar cada vez que encontrava um usuário tentando usar o comando TTS em um idioma diferente do inglês.

<center>
<img src="/images/blog/29-tts-case-study/discord-non-english-tts.jpg" alt="Contagem de tentativas de envio de solicitações não inglesas para TTS."/>

*Contagem de tentativas de envio de solicitações não inglesas para TTS.*
</center>

A tabela acima mostra a contagem de cada conversa que encontrei que tinha pelo menos uma instância de alguém usando o idioma correspondente no comando TTS.
Obviamente, o espanhol é de longe o mais comum, e o fato de muitos usuários continuarem a usar a função TTS em espanhol, embora o desempenho fosse ruim, me faz pensar se não há uma alternativa viável já existente no Discord para TTS em espanhol.
Em ambos os casos, as pessoas estão tentando usar nosso serviço TTS para outros idiomas, então podemos acompanhar quais idiomas estão em maior demanda e usar esses dados para informar o treinamento de nossos novos modelos.

### Comentários sobre o Bot

Outro tópico interessante encontrado nos logs foram os comentários sobre o próprio bot.
Felizmente, vimos vários comentários muito positivos sobre o bot e seu desempenho.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-inclusive-accessibility-user-comment.png" alt="Um usuário comenta que o bot o faz sentir mais incluído."/>

*Um usuário comenta que o bot o faz sentir mais incluído.*
</center>

Os comentários mais tocantes foram daqueles que se sentiram excluídos dos canais de voz, mas agora podem participar graças à acessibilidade adicional que o bot oferece.

Também encontramos algumas sugestões construtivas.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-speed.png" alt="Um usuário comenta que a velocidade do TTS é um problema."/>

*Um usuário comenta que a velocidade do TTS é um problema.*
</center>

Um usuário mencionou que, como os usuários precisarão primeiro digitar a frase inteira e depois enviá-la, o TTS é mais lento do que a fala normal, então às vezes sua fala TTS é pronunciada um pouco tarde na conversa.
Conforme mencionado na seção anterior, também vimos solicitações de suporte a idiomas adicionais, bem como um usuário que esperava poder traduzir entre idiomas usando o bot.
Ficar de olho nesse tipo de feedback nos ajudará a planejar e melhorar os recursos no futuro.

### Novidade

Depois de examinar toda a coleção de comandos TTS, eu diria que cerca de dois terços das falas são usadas em conversas gerais com amigos e outras pessoas no servidor.
A maioria das pessoas está jogando e apenas conversando com seus amigos, e esses usuários tendem a ser aqueles que usam o serviço TTS regularmente.
Por outro lado, o terço restante das falas se enquadra na categoria de “apenas brincar”.
Quando você tem poder total para fazer uma voz dizer o que quiser, acredito que é da natureza humana escolher a coisa mais boba ou obscena que você pode pensar apenas para rir.
Lembro-me de sentar no laboratório de informática da escola primária e me divertir por horas a fio com o Microsoft Sam (muito alta tecnologia na época), vendo se conseguíamos fazê-lo dizer coisas como “cocô” ou “bunda”.
Bem, suponho que crianças como eu cresceram, ganharam um vocabulário mais rico e acabaram encontrando o mesmo entretenimento com nosso serviço TTS no Discord.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-stress-test.png" alt="Exemplos de solicitações TTS estranhas enviadas por usuários."/>

*Exemplos de solicitações TTS estranhas enviadas por usuários.*
</center>

Às vezes, os usuários apenas tentam quebrar o bot digitando coisas como: strings excessivamente longas, caracteres especiais, emojis, URLs, etc.
Este é um exemplo clássico de pessoas testando os limites do software, e realmente nos ajuda a garantir que nossos serviços sejam robustos e possam lidar com qualquer entrada que os usuários joguem nele.

Outras vezes, os usuários encontram entretenimento fazendo o serviço TTS dizer as coisas mais obscenas e ofensivas que eles podem inventar.
Nos logs do TTS, acho que vi todas as palavras de baixo calão que conheço (e talvez algumas que nunca ouvi antes), insultos raciais e conteúdo sexual explícito.

## A Questão da Ética

Infelizmente, existem muitas maneiras pelas quais um aplicativo de texto para fala pode ser usado de forma desagradável: como para promover discurso de ódio ou cyberbullying.
Além disso, embora os clipes de áudio sejam sintetizados a partir de um modelo, os dados para treinar o modelo vêm de uma pessoa real e a saída de um bom modelo pode soar quase indistinguível do original.

Então, esses pontos, juntamente com a forma como vimos usuários reais usarem (ou abusarem) de nosso serviço TTS, levantam algumas questões muito importantes para a Seasalt.ai como empresa e para o Bot Discord SeaVoice:

- *Nós, como empresa, queremos que nosso produto seja usado de maneiras potencialmente ofensivas ou prejudiciais?*
- *Que direitos os dubladores têm sobre como sua voz é utilizada em aplicativos de texto para fala?*
- *Temos o direito ou a responsabilidade de censurar como nosso serviço é usado?*

Essas são perguntas que não podem ser respondidas, ou mesmo totalmente exploradas, em uma única postagem de blog.
No entanto, a empresa sente a obrigação de considerar continuamente essas questões à medida que avançamos com nosso projeto Discord e continuamos trabalhando com nossos dubladores.

Obrigado pelo seu interesse em nosso Bot Discord e projetos de Inteligência de Voz! Você pode aprender mais sobre nosso produto STT em nossa [Página inicial de Fala para Texto](https://suite.seasalt.ai/tts). Para uma demonstração individual de qualquer um de nossos produtos de Inteligência de Voz, preencha o [Formulário de Agendamento de Demonstração](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).

No lado do Discord, você pode aprender mais sobre nosso bot e adicioná-lo ao seu servidor no [Wiki do Bot Discord SeaVoice](https://wiki.seasalt.ai/seavoice/discord/6-community/). Sinta-se à vontade para se juntar ao nosso [Servidor Oficial do Discord SeaVoice](https://discord.gg/dfAYfwBQ).

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>
`;export{o as default};
