const n=`---
title: "데모에서 성공까지: Microsoft의 최신 회의 및 그 이상 구현(1/5)"
metatitle: "데모에서 성공까지(1/5): Microsoft의 최신 회의를 넘어서"
date: 2021-07-19
draft: false
author: Cody Kim
description: "이 블로그 시리즈의 첫 번째 부분에서는 공동 작업 최신 회의 솔루션인 SeaMeet을 만드는 Seasalt.ai의 여정을 따라갑니다."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/microsoft-modern-meetings/
url: /blog/microsoft-modern-meetings/
---

*이 블로그 시리즈를 통해 미천한 시작부터 다양한 하드웨어 및 모델에서 서비스를 최적화하고 최첨단 NLP 시스템을 통합하여 마침내 공동 작업 최신 회의 솔루션인 SeaMeet을 완전히 실현하기까지 Seasalt.ai의 여정을 따라가 보세요.*

### 최신 회의의 미래

[![MS Build 2019의 Microsoft 음성-텍스트 서비스 데모](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/ms-build-play.png)](https://www.youtube.com/watch?t=100&v=EYinMnQWgfU&feature=youtu.be)

Microsoft Build 2019에서 Microsoft는 최신 클라우드 컴퓨팅 솔루션인 Azure Speech Services, 특히 회의 녹취록 응용 프로그램을 공개하여 청중을 열광시켰습니다. 소개된 후 이 대화 녹취록은 즉시 모든 사람의 주목을 받았으며 최고의 기술 블로그와 정기 간행물에서 언급되었습니다. 2019년 아래 비디오에 설명된 데모는 Azure Speech Services의 많은 힘을 보여주었습니다. 우리는 그것이 글로벌 팬데믹 및 포스트 팬데믹 환경에서 최신 회의가 어떻게 개최될지에 대한 서곡이 될 것이라고는 거의 알지 못했습니다. 물리적인 것에서 가상적인 것으로, 그리고 하이브리드적인 것으로 전환하는 것입니다.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-demo.png" alt="MS Build 2019에서 Microsoft Azure의 음성-텍스트 및 화자 식별 라이브 데모"/>
</center>

대화 녹취록 플랫폼으로 광고된 Azure의 회의 녹취록 서비스에 대한 Microsoft의 쇼케이스는 "최신 회의의 미래"로 적절하게 소개되었으며, 모든 중요한 회의를 빠르고 깔끔하게 캡처할 방법을 찾는 모든 비즈니스에 적합한 강력하고 효율적인 음성-텍스트(STT) 플랫폼으로 새로운 서비스를 확립했습니다.

이 서비스를 회의 녹취록의 정점으로 만드는 것은 무엇입니까? 첫째, 실시간 성능입니다. 기술이 점점 더 빨라짐에 따라 인내심은 점점 더 얇아지고 있으며, 몇 초의 지연조차도 일반 사용자를 짜증나게 하기에 충분합니다. 그러나 Microsoft는 대화 녹취록이 일부 폐쇄 자막 서비스보다 더 빠르고 정확한 녹취록을 제공하여 텍스트만으로 동시 대화를 따라가는 것이 완전히 가능하다는 것을 증명했습니다.

다음으로 Microsoft는 화자 식별 기능도 선보였습니다. 정리되지 않은 대화 텍스트의 혼란으로 끝나는 것은 실망스럽고 쓸모가 없지만, 화자 식별은 각 발언을 화자와 함께 자동으로 레이블을 지정하여 소비하기 쉬운 형식을 만듭니다.

![Microsoft Azure의 음성-텍스트 및 화자 식별 사용자 인터페이스](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-ui.png)

매일 컴퓨팅 하드웨어는 날마다 더욱 강력해지고 있으며 기업들은 최신 CPU 및 GPU에서 마지막 코어까지 짜내려고 합니다. 종종 오래된 기술은 쓸모없게 되고 고객은 사회에서 관련성을 유지하기 위해 몇 년마다 업그레이드해야 합니다. "최신 회의의 미래"에서 Microsoft는 Azure Speech Service를 소비자급 하드웨어에서 실행하도록 최적화하면서 무거운 계산은 자사 측에서 유지하여 이 서비스의 혜택을 받을 수 있는 이미 방대한 인구를 더욱 확대했습니다.

Azure의 회의 녹취록 서비스는 우리가 비즈니스를 수행하는 방식을 최적화하는 것을 목표로 합니다. 모든 조직은 이러한 제품을 워크플로에 통합하는 것이 좋습니다. 평범한 날에는 정보가 끊임없이 흐르고 있으며, 알림, 작업 또는 업데이트 등 모든 비트가 마지막 비트만큼 중요합니다. 너무 자주 일이 균열 속에서 길을 잃고 이는 시간 낭비와 이익 낭비를 의미합니다. Microsoft의 솔루션이 제공하는 것은 무엇을 말했고 누가 말했는지를 정확하게 묘사하는 완전하고 자동으로 생성된 기록이므로 정보가 누락되고 특정 섹션을 위해 긴 오디오 녹음을 맹목적으로 찾는 시대는 지났습니다. 이제 필요한 모든 정보가 필요할 때마다 참조할 수 있도록 깔끔하게 정리되어 있습니다. 이 기술은 그 어느 때보다 중요합니다. 2020년이 우리에게 무언가를 가르쳐 주었다면 그것은 특히 직장에서의 유연성의 필요성입니다. 사람들은 병에 걸리고 예기치 않은 사건이 발생하므로 직원이 모든 토론에 참석할 것으로 기대하는 것은 사실상 불가능합니다. 최신 회의를 통해 우리는 이러한 예기치 않은 발전에 적응할 수 있는 한 걸음 더 가까워졌으며, 기본적으로 모든 사람에게 실제로 거기에 있지 않고도 거기에 있을 수 있는 능력을 부여합니다.

### 최신 회의 구현

2020년 중반, 우리는 싱가포르의 정부 고객으로부터 제안 요청을 받았습니다. 예, 여전히 팬데믹이었습니다. 그러나 싱가포르는 그것을 통제하고 있었기 때문에 정부 회의는 여전히 실제 회의실에서 열렸습니다. 그들은 최대 12명의 다른 화자의 음성을 녹취할 수 있는 최신 솔루션을 원했습니다. 또한 화자 식별은 여기서 중요한 역할을 할 것입니다.

화자 식별과 관련하여 Azure가 제공하는 것과 고객이 필요로 하는 것 사이의 한 가지 중요한 차이점은 음성 "등록"입니다. Azure는 시스템에 음성 지문을 등록하기 위해 모든 화자로부터 사전 녹음된 음성이 필요합니다. 그러나 아마도 매우 중요한 일부 정부 관리에게 녹음되기 위해 마이크 앞에 앉으라고 요청하는 것은 불가능합니다. 우리는 먼저 비지도 화자 클러스터링(화자 분할이라고도 함)을 수행하여 프로세스에 약간의 조정을 가했습니다. 아이디어는 화자가 우리 시스템에서 한 번 말하면 다음에 말할 때 그들을 인식한다는 것입니다.

![Microsoft Azure의 음성-텍스트 및 음성 식별 서비스의 흐름도](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-diagram.png)

*[Azure 대화 녹취록](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/conversation-transcription)의 최신 회의 아키텍처. 우리의 적응에서 우리는 회의 전 "사용자 등록" 요구 사항을 회의 후로 완화했습니다.*


그런 다음 우리는 전체 프로젝트를 위해 신속하게 무기고를 조립했습니다. 첫 번째 단계는 인식 모델에 선명한 오디오 데이터를 제공할 고품질 마이크 어레이를 소싱하는 것이었습니다. 우리는 즉시 Azure Kinect에 매료되었습니다. 세련된 7개 마이크 어레이가 전체 알루มิเนียม 케이스에 들어 있으며 고화질 카메라와 깊이 센서가 추가 보너스로 제공됩니다.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/kinect.png" alt="$400 Azure Kinect DK는 최신 회의에 사용됩니다."/>

*$400 [Azure Kinect DK](https://azure.microsoft.com/en-us/services/kinect-dk/)는 최신 회의에 사용됩니다.*
</center>

외관만으로도 이것은 모든 회의실을 보완할 진정으로 정교한 장치이지만 더 중요한 것은 강력한 마이크 어레이가 우리가 추구하는 품질을 약속했다는 것입니다. 원형 배열을 통해 7개의 마이크는 소스 위치 파악 및 빔포밍과 같은 최첨단 신호 처리 기술을 사용할 수 있는 가능성을 열었습니다. 이 마이크는 또한 Azure의 Speech Services를 활용하는 백엔드와 완벽한 조화를 이루었으며, 이는 우리 제품에 최고 수준의 회의 녹취록이 되는 데 필요한 힘을 부여하는 확립된 음성-텍스트 플랫폼입니다.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/kinect-spec.png" alt="Azure Kinect DK는 음성을 포착하기 위해 7개의 마이크 어레이와 함께 제공됩니다."/>

*Azure Kinect DK는 음성을 포착하기 위해 7개의 마이크 어레이와 함께 제공됩니다.*
</center>

Azure가 SeaMeet의 최종 버전에 포함되지는 않았지만, 우리의 비전을 실현하는 데 필요한 시작을 제공했습니다. 마지막으로 우리는 이 모든 것을 사용자 인터페이스와 연결했습니다. 첫 번째 반복에서는 평범하지만 완벽하게 기능하는 일반적인 Java 기반 디자인으로 만족했습니다. Kinect 장치는 외부 코드를 실행할 수 없기 때문에 이 모든 것은 추가 단일 Windows 노트북에서 실행되어야 했습니다. 처음에는 약간 거칠었지만, 우리는 완전히 기능하는 회의 녹취록 제품을 가지고 있다고 자랑스럽게 말할 수 있었습니다.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/seameet-old.png" alt="Microsoft Kinect 마이크 어레이를 사용한 Seasalt.ai의 SeaMeet 서비스 초기 설정"/>

*Azure Kinect 및 Windows 컴퓨터를 사용하여 최신 회의를 구현하고 실시간 회의 녹취록 및 화자 식별을 표시하는 간단한 Java 기반 UI를 실행합니다.*
</center>

### 최신 회의 배포

2021년 5월, 우리 엔지니어들은 개념 증명으로 최신 비즈니스 솔루션을 배포하기 위해 싱가포르에 도착했습니다. 다른 두 경쟁사와 경쟁하면서 우리 각자는 회의의 미래에 대한 비전을 보여주는 임무를 받았습니다.

지난 10년 동안 무선이 표준이 되었음에도 불구하고 경쟁사들은 여전히 유선 솔루션을 선택한다는 것을 발견했습니다. 사진에서 볼 수 있듯이 12명의 화자 각각은 개별 마이크에 고정되어 있었습니다. 화자는 시스템이 자신의 음성을 포착하기 위해 근접 대화 환경에서 마이크에 직접 말해야 했습니다. 이것은 유연성을 심각하게 저해할 뿐만 아니라 이러한 설정은 복잡한 AV 장비로 복잡성을 배가시킵니다. 반면에 우리 솔루션은 7개 마이크 어레이와 신호 처리 알고리즘 덕분에 원거리장 기능으로 완전히 구동됩니다.

어느 정도 우리 솔루션은 "Alexa for Business"와 매우 유사했습니다. 하나의 장치가 전체 방을 덮고 전원 케이블만 필요합니다. 경쟁사의 솔루션과 비교할 때 우리 솔루션은 최신 비즈니스의 요구 사항을 진정으로 이해한다는 점에서 여러 세대 앞서 있지만 그들은 여전히 구식 유선 세대에 완전히 묶여 있습니다.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/poc-setup.png"/>

*PoC 회의실 설정. 2시간 동안의 정부 회의를 시뮬레이션하는 12명의 화자가 있었습니다.*

<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/poc-captioned.png"/>

*현장의 모든 장비의 클로즈업 샷.*
</center>

팀은 큰 차이를 보고 흥분했습니다. 몇 시간의 조정 끝에 최종 PoC는 매우 순조롭게 진행되었습니다. 팀은 또한 PoC 이후 싱가포르에서 투어를 즐겼습니다. Covid-19가 엄격하게 통제되어 삶과 비즈니스가 평소와 같이 진행되는 나라였습니다.

### 최신 회의를 넘어서

싱가포르에 있는 동안 우리의 생각은 성공적인 PoC를 넘어섰습니다. 다른 경쟁 솔루션과 비교할 때 우리 솔루션은 10배 더 좋았습니다. 하지만 우리 자신보다 10배 더 잘할 수 있는 방법은 무엇일까요? 이 시리즈의 다음 블로그로 우리의 단계를 따르십시오.

`;export{n as default};
