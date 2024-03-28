---
id: 4
title: 해시 테이블은 무엇일까? 그리고 어떻게 동작할까?
description: 우리가 사용하는 딕셔너리나 오브젝트는 내부적으로 어떻게 된 것인지 알아보자.
date: '2024-01-12'
category: CS
---

# \[CS\] 해시 테이블은 무엇일까? 그리고 어떻게 동작할까?

**\[자료구조\] 해시 테이블은 무엇일까??**

해시 테이블은 자료구조의 종류 중 하나이다.

<br/>

해시 테이블은 index와 value로 구성된다. 해시 테이블의 내부는 Array 구조로 구현되어 있다.

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEd5ZP%2FbtsDnvgI6IT%2FVHqYQLKweVP4jCukpbNuo1%2Fimg.png'/>

해시 함수는 데이터들을 특정 규칙에 의하여 해시 테이블에 삽입할 수 있도록 하는 함수이다. 즉, 임의의 데이터를 array에 접근 가능한 정수(index)로 변환하는 것이다.

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbD9xQj%2FbtsDkFrafms%2FLmnDVLVKvtvzKStsaUHb9k%2Fimg.png'/>

데이터들이 해시 함수에 의해 해시 테이블에 삽입되는 과정을 해싱이라고 한다.

<br/>

해시 함수에 key를 넣어 도출된 index에만 접근하면 해당하는 value를 빠르게 확인 가능하다.

<br/>

하지만 해시 테이블도 단점이 있다. 만약 해시 함수에 의해 도출된 key가 중복된다면 충돌이 일어나게 된다. 예를 들어 해시 함수가 데이터의 길이를 가공하여 index를 도출한다고 하였을 때 길이가 같은 'b'와 'a'는 같은 index에 배정된다.

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb2andf%2FbtsDiRFJfNz%2FR3NyAWHrcAFLebvLZ9uC3K%2Fimg.png'/>

이 충돌에 대처할 수 있는 방법은 다음과 같다.

### 1\. Chaining

만약 해시 함수에 의해 도출된 index에 데이터를 저장하려는데 이미 그 index에 해당하는 데이터가 있다면 기존에 있던 데이터 뒤에 새롭게 저장할 데이터를 삽입한다. 리스트와 같은 자료구조를 사용할 수 있다.

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcV5A9T%2FbtsDnEkb4Hg%2F3iXGzEXgYemFwZkCqcHURK%2Fimg.png'/>

### 2\. Linear Probling

만약 chaining 기법을 사용했는데, 같은 index에 데이터들이 자꾸 할당되어 이어진다면 해시를 사용하는 이점이 줄어들 것이다. linear probling은 만약 해시 함수에 의해 도출된 index에 데이터를 저장하려는데 이미 그 index에 해당하는 데이터가 있다면 다음 버킷에 데이터를 저장하는 기법이다.

<br/>

여기서 테이블이 가득 차 더 이상 데이터를 삽입할 수 없게 된다면, 테이블의 크기를 확장하여 테이블을 재정렬한다.

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FTtcjd%2FbtsDlpamIIg%2FSaPCxKyCqm9ukFG6zqksek%2Fimg.png'/>

데이터를 조회할 때에는 먼저 조회할 index를 찾고, index에 해당하는 key와 조회할 데이터의 key를 비교하여 일치하는지 확인 후 일치하지 않는다면 충돌이 있었을 것을 추측하여 다음 버킷을 조회한다.

<br/>

그림에는 표현되지 않았지만, 데이터의 key와 value모두 버킷에 저장된다.

## 맵? 딕셔너리? 해시 테이블?

해시 테이블의 개념을 공부한 후 헷갈리는 것이 많아졌다.

<br/>

해시테이블? key와 value로 데이터를 저장한다고? 그럼 맵과 딕셔너리와는 뭐가 다른 거지?

<br/>

사실 맵과 딕셔너리 같은 용어들은 프로그래밍 언어마다 다르다고 한다. 하지만 key, value로 데이터들을 관리한다는 특징은 같다. 일반적으로 이 것들을 내부적으로 구현할 때에 해시 테이블이 사용되는 것이다.

<br/>

python에서는 dict, javascript에서는 Object 혹은 Map, java에서는 HashMap처럼 조금씩 다르다.

<br/>

JS의 Object는 겉보기에는 해시 테이블이지만 실제로는 아니라고 한다. 내부적으로는 key와 value를 가진 배열 [key, value] 처럼 구현되어있다고 한다.

## 마치며

해시 테이블을 공부할수록 더욱 헷갈리고 어려웠다.. 하지만 이런 기본적인 자료구조나 cs를 공부하면 전체적인 프로그래밍을 보는 시야가 넓어지는 기분이 든다. 이해하기 쉽지 않고 자꾸 의문이 생기지만 이를 해결하는 과정에서 조금씩이라도 성장하는 게 느껴진다.
