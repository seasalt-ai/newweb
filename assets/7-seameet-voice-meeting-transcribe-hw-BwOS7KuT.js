const e=`---
title: "데모에서 성공까지: 하드웨어를 넘어서 (5/5)"
metatitle: "데모에서 성공까지 (5/5): 하드웨어를 넘어서"
date: 2021-09-15 17:24:32-07:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Cody Kim
description: "이 블로그 시리즈의 마지막 부분에서는 Seasalt.ai가 협업 최신 회의 솔루션인 SeaMeet을 만드는 여정을 따라갑니다."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-hardware/
url: /blog/seameet-voice-hardware/
---

*이 블로그 시리즈를 통해 미천한 시작부터 다양한 하드웨어 및 모델에서 서비스를 최적화하고 최첨단 NLP 시스템을 통합하여 마침내 협업 최신 회의 솔루션인 SeaMeet을 완전히 실현하기까지 Seasalt.ai의 여정을 따라가 보세요.*

## 최신 회의를 넘어서

여기 Seasalt.ai에서 우리는 이 제품의 Build 2019 데모에서 보여준 현재의 능력에 감탄했지만, 우리는 이 제품이 무엇이 될 수 있는지, 대화 전사를 모방을 넘어 어떻게 발전시킬 수 있는지에 더 관심이 있습니다. 그러나 경쟁에서 이기려면 먼저 자신이 하고 있는 게임을 깊이 이해해야 합니다. 그렇게 SeaMeet이 탄생했습니다. 초기에는 Azure를 견고한 전사 서비스를 만드는 기초를 파악하기 위한 모델로 삼았고, 이 확립된 기술을 활용하기 위해 Azure 음성 서비스를 백엔드로 사용했습니다.

다른 젊은 제품과 마찬가지로, 도전 과제는 즉시 나타났습니다. 제품을 빠르게 출시하기 위해 우리는 Microsoft의 Kinect DK 마이크 어레이를 사용하기로 결정했습니다. 이 어레이는 음성 서비스의 하드웨어 대응 제품으로 홍보되었으며, Azure의 자동 음성 인식 모델에서 최적의 성능을 얻기 위해 조정되었다고 합니다. 부인할 수 없이 잘 만들어지고 잘 설계된 장치이지만, 완전한 알루미늄 하우징, 광각 렌즈, 깊이 카메라 및 7개의 마이크 어레이가 함께 제공됩니다. 또한 가격도 400달러에 육박하는 비싼 가격표가 붙어 있습니다. 2021년 4월부터 Kinect DK는 심각한 재고 부족 문제를 겪었습니다. 2021년 9월 현재까지도 재고가 없습니다. 이는 Kinect가 우리에게 적합한 장치가 아니라는 것을 더욱 확고히 했습니다.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/kinect_store_page.png"/>

*Azure Kinect DK는 이 기사가 발행될 당시(2021/9) 2021/4부터 재고가 없었습니다.*
</center>

마이크 어레이는 대화 전사 파이프라인의 첫 번째 구성 요소입니다. 전사 서비스 제공업체로서 우리는 하드웨어를 지속 가능하고 안정적으로 조달할 수 있어야 합니다.

완벽한 마이크 어레이를 찾기 위한 우리의 여정은 두 가지 옵션으로 이어졌습니다: [Respeaker Array v2.0](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html)과 [Respeaker Core v2.0](https://www.seeedstudio.com/ReSpeaker-Core-v2-0.html). 이 두 장치 모두 각각 4개와 6개의 마이크를 가진 원형 어레이이며, 이는 360도 음원 위치 파악을 수행하고 이 새로운 장치들을 기존 시스템에 쉽게 통합할 수 있도록 하는 중요한 기능입니다. 이 장치들의 진정한 아름다움은 노이즈 제거, 에코 제거, 빔포밍을 포함한 온보드 신호 처리 알고리즘이 마이크의 크기에 완벽하게 조정되어 있다는 것입니다.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_array.png" alt="Respeaker Array v2.0의 VAD 및 음원 위치 파악 시연"/>

*Respeaker Array v2.0의 VAD 및 음원 위치 파악 시연*
</center>

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/array_demo.jpg" alt="Respeaker Array v2.0을 사용한 라이브 회의 데모"/>

*Respeaker Array v2.0을 사용한 라이브 회의 데모*
</center>

USB 포트로 완전히 전원이 공급되는 4개 마이크 어레이 v2.0의 경우, 이는 사용자 컴퓨터가 오디오를 서버로 스트리밍하는 데만 집중하면 된다는 것을 의미했습니다. 이는 신호 처리를 마이크 어레이로 오프로드합니다.


<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/core_demo.png" alt="데모와 함께 촬영된 Respeaker Core v2.0"/>

*데모와 함께 촬영된 Respeaker Core v2.0*
</center>

ARM 프로세서와 1GB RAM을 탑재한 Core v2.0은 더욱 매력적입니다. 완전한 Linux 배포판을 실행할 수 있으며 클라이언트 스크립트를 실행하기에 충분한 처리 능력을 갖추고 있어, 이 장치로 사용자 컴퓨터에서 처리를 오프로드했을 뿐만 아니라 마이크에 컴퓨터를 연결할 필요성을 완전히 제거했습니다. 마이크 어레이가 이제 무거운 처리를 수행하므로, 제품을 실행하는 데 필요한 하드웨어 요구 사항을 줄였고, 따라서 SeaMeet의 혜택을 받을 수 있는 고객층을 효과적으로 늘렸습니다.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_core.png" alt="독립형 마이크 배치 Core v2.0 예시"/>

*독립형 마이크 배치 Core v2.0 예시*
</center>

이러한 마이크 어레이의 또 다른 독특한 특징은 하우징이 없다는 것입니다. 둘 다 마이크, 칩 및 포트가 모두 노출된 베어 PCB로 배송됩니다. 많은 사람들이 이것을 불편하다고 생각하겠지만, 우리는 이것을 Seasalt의 독특한 장치를 만들 기회로 봅니다.

    이러한 장치들을 통해 우리는 최첨단 회의 전사 서비스인 SeaMeet의 프로토타입을 완성했습니다. 그리고 이로써 Microsoft 데모에서 영감을 받은 씨앗에 불과했던 SeaMeet이 완전히 독립적인 제품이 되기까지의 5부작 시리즈를 마무리합니다. 아직 초기 단계이지만, SeaMeet은 화자 분리 시스템, 회의 감지 및 언어 모델을 계속 다듬으면서 흥미진진한 여정을 앞두고 있습니다. Seasalt.ai 팀은 세상이 비즈니스를 수행하는 방식을 계속 혁신하기를 열망합니다.
`;export{e as default};
