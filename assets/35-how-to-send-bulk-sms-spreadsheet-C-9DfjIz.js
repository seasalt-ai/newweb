const n=`---
title: "Excel, Google 스프레드시트, Apple Numbers에서 연락처에 대량 SMS를 올바르게 보내는 방법"
metatitle: "대량 SMS 발송 | Excel, Google 스프레드시트, Apple Numbers"
date: 2023-10-01 10:25:00-08:00
modified_date: 2024-07-01 00:00:00+00:00
draft: false
author: Xuchen Yao
description: "Excel, Google 스프레드시트, Apple Numbers에서 10DLC 규정을 준수하며 안전하게 대량 SMS를 보내는 방법을 안내합니다."
weight: 1
tags:
  - SeaX
  - 튜토리얼
image: images/blog/35-how-to-send-bulk-sms-spreadsheet/35-how-to-send-bulk-sms-spreadsheet.jpg
canonicalURL: /blog/how-to-send-bulk-sms-spreadsheet/
url: /blog/how-to-send-bulk-sms-spreadsheet/
---

연락처 목록에 대량 SMS를 보내는 것은 기업, 이벤트 주최자, 다양한 전문가들이 널리 사용하는 방법입니다. 한 번에 여러 명에게 메시지를 보내면 시간을 절약하고 정보를 효과적으로 전달할 수 있습니다. Excel, Google 스프레드시트, Apple Numbers는 기본적으로 SMS 발송 기능이 없지만, 확장 프로그램이나 서드파티 서비스를 활용하면 가능합니다. 단, 주의해야 할 규정과 리스크가 있습니다.

# 규정 준수: 10DLC 등록

최근 스팸 및 무단 메시지 방지를 위해 대량 SMS 발송에 대한 규제가 강화되었습니다. 단 한 번만 발송하고 규제 리스크가 걱정되지 않는다면 온라인 튜토리얼을 참고해 플러그인을 사용해도 됩니다. 하지만 비즈니스나 마케팅 목적으로 지속적으로 사용하려면 SMS 마케팅 관련 규정을 반드시 숙지해야 합니다.

핵심은 10DLC 제도입니다.

10DLC(10-Digit Long Code)는 미국 A2P(애플리케이션-개인) SMS 발송의 새로운 표준입니다. 주요 포인트:
- 목적: 스팸 및 무단 메시지 증가로 인해 통신사들이 대량 발송에 10DLC 규정을 엄격히 적용
- 비즈니스 준수: 대량 SMS를 보내려는 기업은 10DLC를 등록하고 승인을 받아야 합니다
- 미준수 리스크: 미등록 또는 미승인 10DLC로 발송 시 계정 정지 등 불이익 발생 가능

[이 글](https://support.twilio.com/hc/en-us/articles/1260800720410-What-is-A2P-10DLC-)에서 10DLC 캠페인 등록 방법을 확인할 수 있습니다. Seasalt.ai는 많은 SeaX Messaging 고객의 10DLC 준수를 지원해왔습니다. 궁금한 점이 있으면 언제든 문의해 주세요.

# 스프레드시트에서 연락처 준비하기

10DLC 캠페인 준비가 끝나면 계정 정지 걱정 없이 대량 SMS를 보낼 수 있습니다.

예를 들어, 이벤트 안내를 위해 스프레드시트에 저장된 연락처 전체에 SMS를 보내고 싶다면, 먼저 전화번호를 정리하고 포맷을 통일해야 합니다.

## 1. 데이터 백업 만들기

편집 전에는 반드시 파일 복사본을 만들어 두세요: **파일 > 사본 만들기**.

<center>
<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/1-make-a-copy-for-bulk-sms-contact-spreadsheet.png" alt="대량 SMS 연락처 스프레드시트 백업 만들기"/>
_대량 SMS 연락처 스프레드시트 백업 만들기_
</center>

## 2. 중복 데이터 제거

a. 전체 데이터를 선택
b. 데이터 > 데이터 정리 > 중복 항목 제거 클릭
c. 확인할 열을 선택하고 중복 항목 제거 클릭
d. Google 스프레드시트가 삭제된 중복 개수를 안내

<center>
<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/2-remove-duplicates-for-bulk-sms-contact-spreadsheet.png" alt="대량 SMS 연락처 스프레드시트 중복 제거"/>
_대량 SMS 연락처 스프레드시트 중복 제거_
</center>

## 3. 전화번호 포맷 통일

a. 서비스에서 요구하는 포맷을 확인하고 통일(예: SeaX Messaging은 5551234567, 555-123-4567, +15551234567 등 지원)
b. 찾기 및 바꾸기로 포맷을 통일(예: 마침표를 하이픈으로 변경)
c. 필요시 수식이나 스크립트 활용

<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/3-clean-numbers-for-bulk-sms-contact-spreadsheet.png" alt="대량 SMS 연락처 스프레드시트에서 전화번호 형식 표준화"/>
_대량 SMS 연락처 스프레드시트에서 전화번호 형식 표준화_

### 4. 데이터 검증

a. 전화번호 자릿수가 올바른지 확인하고, 필터나 정렬로 이상값을 찾기
b. 이름란이 비어있거나 잘못된 데이터가 없는지 확인

<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/4-validate-format-for-bulk-sms-contact-spreadsheet.jpeg" alt="대량 SMS 연락처 스프레드시트에서 데이터 유효성 검사"/>
_대량 SMS 연락처 스프레드시트에서 데이터 유효성 검사_

## 5. 빈 셀 확인

이 단계는 선택 사항입니다. SeaX Messaging에서는 빈 셀이 있는 행을 자동으로 건너뜁니다. 하지만 다른 서비스에서는 오류가 발생할 수 있으니 조건부 서식으로 빈 셀을 하이라이트하고 수정하는 것이 좋습니다.

<center>
<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/5-clean-blank-cells-for-bulk-sms-contact-spreadsheet.png" alt="대량 SMS 연락처 스프레드시트 빈 셀 확인"/>
_대량 SMS 연락처 스프레드시트 빈 셀 확인_
</center>

## 추가 데이터 준비 팁

데이터 정리는 반복적인 과정입니다. 데이터 양과 품질에 따라 여러 번 반복해야 할 수 있습니다.

## SMS 발송 시작!

Excel이나 Google 스프레드시트는 기본적으로 SMS 발송 기능이 없지만, ClickSend, Zapier 등 확장 프로그램이나 서드파티 서비스를 활용하면 가능합니다.

본격적인 SMS 마케팅이나 옴니채널 운영을 원한다면 SeaX Messaging과 같은 전문 플랫폼을 추천합니다. 연락처 관리, 채팅/통화, 성과 추적, 10DLC 등록 지원 등 다양한 기능을 제공합니다.

대표적인 서비스:
- SeaX Messaging
- Simple Texting
- Textedly

# 성공적인 SMS 마케팅 운영 팁

<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/6-successful-camapign-bulk-sms-contact-spreadsheet.jpeg" alt="성공적인 SMS 마케팅"/>

아무리 주의해도 문제가 발생할 수 있습니다. 장기적인 성공을 위해서는:
- 10DLC 요건을 정기적으로 확인하고 항상 준수
- 메시지 품질을 유지하고, 스팸성 내용은 피하며, 필수 옵트아웃 옵션 명시
- 신뢰할 수 있는 SMS 서비스를 선택해 전달률을 높이기

# 결론

Excel, Google 스프레드시트 등 도구로 대량 SMS를 보내는 것은 매우 효율적이지만, 10DLC 등 규제를 이해하고 신중하게 운영하는 것이 중요합니다. 올바른 지식으로 안전하고 효과적인 SMS 발송을 실현하세요.

## 문의하기

10DLC나 SMS 마케팅에 대해 더 알고 싶으시면 [데모 예약](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)을 해주세요. 언제든 상담해 드립니다!
`;export{n as default};
