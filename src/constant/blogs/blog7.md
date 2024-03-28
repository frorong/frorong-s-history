---
id: 7
title: CPU는 어떻게 process를 선택할까? Scheduling에 대해 알아보자! 8가지의 알고리즘을 이해해자!
description: 컴퓨터 시스템 일반 과목에 속하는 scheduling에 대해 이해하자.
date: '2024-01-17'
category: CS
---

# **\[OS\] CPU는 어떻게 process를 선택할까? Scheduling에 대해 알아보자! 8가지의 알고리즘을 이해해자!**

process는 OS에서 수행할 작업을 관리하는 단위이다. cpu는 하나에 한 작업만 할당하여 수행할 수 있기 때문에 여러 작업을 수행하기 위해선 process를 교체하는 context switching을 해야 한다. 그런데 이 과정에서 cpu를 점유하게 되는 process는 어떻게 정해질까에 대한 의문이 생긴다.

<br/>

(process에 대해 잘 모르겠다면 아래 게시글 참고)

[frorong.tistory.com](https://frorong.tistory.com/entry/OS-Process%EC%99%80-Thread%EA%B0%80-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C)

## Scheduling

process가 cpu를 점유하는 우선순위를 결정하는 것을 cpu scheduling이라고 한다. process 간의 우선순위를 관리하고, 얼마나 오랫동안 cpu를 할당할지도 결정한다. scheduling은 크게 두 가지 메커니즘으로 나뉜다. 바로 비선점 알고리즘과 선점 알고리즘이다.

## 비선점 알고리즘

비선점 알고리즘은 어떠한 process가 cpu를 할당받아 작업을 처리하고 있는 상태라면 다른 process가 cpu를 차지할 수 없는 방식이다. 즉, 실행 중인 process를 중간에 강제로 중단하지 않고 작업이 완료될 때까지 cpu를 할당한다.

<br/>

비선점 알고리즘은 여러 개가 존재한다.
<br/>

### 1\. FCFS (First Come First Server)

FCFS는 process가 도착한 순서대로 cpu를 할당받아 사용한다. 이 방식은 평균 대기 시간이나 반환 시간이 크게 증가할 수 있다는 단점이 있다.

<br/>

아래 그림을 보면 p1이 가장 먼저 도착하여 30초 동안 작업을 처리하였고, p2가 다음으로 도착하여 8초, p3가 마지막으로 도착하여 20초를 소모하였다. 이 경우, p1의 처리시간이 긴 것에 반해 p2의 처리시간은 짧은데 p2는 늦게 도착했다는 이유로 p1의 작업이 끝날 때까지 기다려야 한다. 8초면 완료할 수 있는 작업이지만 그 작업을 하기 위해 30초나 더 기다려야 한다는 것이다. 이런 상황을 **콘 보이 효과**라고 한다.

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcc119I%2FbtsDyPtFwIa%2FbxFMdbVBwhOMNfUQP020G1%2Fimg.png'/>

### 2\. SJF (Shortest Job First)

SJF는 실행 시간이 짧은 process에게 cpu를 할당하는 알고리즘이다. 평균 대기시간이 최소화되지만 실행 시간을 예측하기 어렵다.

<br/>

아래 그림과 같이 작업 처리 시간이 적은 p2부터 p3, p1 순서로 cpu가 할당된다. 이 경우, 처리 시간이 긴 process는 우선순위가 계속 뒤로 밀리면서 영원히 작업을 처리하지 못할지도 모른다. 처리 시간이 긴 process가 중요한 작업일 수도 있는데 우선순위가 계속 밀린다면 크리티컬 한 이슈가 될 것이다. 이런 상황을 **starvation 현상**이라고 한다.

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FE4gew%2FbtsDAx0kKIE%2FcJr9kOcxVoNPVvg3mayEjk%2Fimg.png'/>

### 3\. HRN (Highest Response Ratio Next)

HRN은 SJF에서 대기 시간을 고려한 알고리즘이다. 대기 시간이 길수록 우선순위가 높아져, 오래 기다린 process가 cpu를 할당받게 된다. 대기시간과 처리시간을 더하고 처리시간으로 나눈다. 이런 연산을 통해 우선순위를 구한다.

<br/>

아래 그림의 경우, p1이 0초에 도착하여 먼저 할당받고, p1이 종료되었을 때에는 20초가 흘러있다. 모든 process가 도착했는데, p2가 p4보다 실행시간이 길지만 대기시간을 고려하여 먼저 cpu를 할당받는다. 이후 p4, p3 순서로 cpu를 할당받는다.

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F4po2l%2FbtsDA8TAXxJ%2Fdp8O8k4ZAxKMSnWV0CKkHK%2Fimg.png'/>

### 4\. Priority Scheduling

Priority Scheduling은 각 process에 우선순위를 부여하고 우선순위가 높은 process에게 cpu를 할당하는 알고리즘이다. 우선순위를 중요도에 따라 조절할 수 있어 유연성이 높다. 동적인 우선순위 조정이 가능하다.

<br/>

아래 그림의 경우, p2의 우선순위가 10으로 가장 먼저 처리되었고, p3가 8로 다음으로 할당받아 처리했다. p1은 우선순위가 3이라 p4에 밀렸지만 우선순위 조정으로 인해 먼저 cpu를 할당받았다. 이런 Priority Scheduling은 starvation 현상이 생길 수 있지만, 동적인 우선순위 조정으로 인해 일부 해결이 가능하다.

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkLwX3%2FbtsDA5Jmu6Q%2FaYb3hwUYvhZrvsS5lFgaa0%2Fimg.png'/>

## 선점 알고리즘

선점 알고리짐은 비선점 알고리즘과 반대로 어떠한 process가 cpu를 할당받아 작업을 처리 중이라도 다른 process가 cpu를 차지하여 작업을 처리할 수 있는 방식이다. 언제든지 우선순위가 높은 process가 도착하면 cpu를 다른 process에게 넘길 수 있다.

<br/>

선점 알고리즘도 여러 개가 존재한다.

### 1\. Round Robin

Round Robin은 가장 간단하고 많이 사용되는 알고리즘이다. 각 process는 정해진 시간 동안 cpu를 점유하고, 시간이 지났는데도 작업 처리를 완료하지 못했다면 다른 process로 cpu가 넘어간다. 작업을 완료하지 못한 process는 대기 큐의 맨 끝으로 가서 대기한다.

<br/>

아래 그림을 보면 p3의 처리시간은 20이었고, p1의 처리시간은 13이었다. 10초 안에 처리하지 못하는 작업이기 때문에 10초만 먼저 처리되고 남은 작업은 이후에 처리되었다. p4, p2는 한 번에 cpu를 할당받아 처리하였다.

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FoeBJ1%2FbtsDDVThH6h%2FDBaEoPgEV3KmchOUD5khg1%2Fimg.png'/>

### 2\. SRT (Shortest Remaining Time First)

SRT는 남은 처리시간이 가장 짧은 process에게 cpu를 할당하는 알고리즘이다. 실행 중인 process의 남은 처리시간을 확인하고, 더 짧은 실행 시간을 가진 process가 있다면 cpu를 넘긴다.

<br/>

아래 그림을 보자, 조금 복잡하지만 천천히 보면 된다. 0초에 18초의 처리시간을 가진 p3가 들어와 cpu를 점유했다. 9초에 남은 p3의 남은 10초보다 더 짧은 p1의 6초가 들어와 cpu를 빼앗겼다. 3초 후 p1의 남은 처리시간인 3초보다 더 짧은 1초인 p4에게 작업을 넘기고 작업이 끝난 후 처리시간이 8초인 p2가 들어왔지만, p1의 처리시간이 짧았기에 p1의 처리가 끝나고 cpu를 할당받는다. 이후 p3의 남은 작업을 처리한다.

<br/>

SRT도 처리시간이 긴 process는 starvation 현상을 겪게 된다.

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FZdD6O%2FbtsDCWd4VL2%2FeyFKdRRdfryHA6W4wkfXe1%2Fimg.png'/>

### 3\. Multilevel Queue

Multilevel Queue는 process를 여러 개의 queue에 나누어 관리하고, 각 queue에 서로 다른 우선순위를 부여하는 알고리즘이다. 높은 우선순위의 queue의 process가 cpu를 할당받는다. queue 내에서는 round robin 방식이 사용되며, 신규 process는 우선순위가 가장 높은 queue로 들어온다. process가 주어진 time slice를 소진한다면 한 단계 낮은 queue로 이동한다. process가 time slice안에 cpu를 양도하면 현재 queue에 잔류한다.

<br/>

아래 그림을 보자. 좀 많이 복잡하지만 천천히 보면 된다. 16의 처리시간을 가진 p3이 가장 먼저 들어와 q1에서 4초간 cpu를 점유한다. 이후 들어온 p1은 3초의 처리시간을 갖기 때문에 모든 작업을 수행할 수 있다. p3가 q2로 강등되어 남은 5초를 처리하고, 이후 들어온 p2는 바로 q1에서 완전 처리가 가능하다. p3은 q3으로 강등당해 남은 작업을 수행한다.

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FevEgLm%2FbtsDDWknw06%2FCTd6bkP96VO2AfZUpPYODk%2Fimg.png'/>

### 4\. Priority Scheduling

Priority Scheduling은 비선점 알고리즘과 마찬가지로 높은 우선순위대로 cpu를 할당받지만, 실행 중인 process보다 더 높은 우선순위의 process가 들어오면 cpu를 내어주는 방식이다.

<br/>

아래 그림을 보자. 아주 편안하다. p3와 p2가 가장 먼저 들어왔다고 하자. p3이 우선순위가 높아 4초 동안 실행되었지만, 이후 들어온 p1이 10의 우선순위를 갖기 때문에 밀렸다. p3가 남은 작업을 처리하고, p2가 cpu를 할당받았다.

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbTxWgW%2FbtsDDYbqY1Y%2FjQHHHhDGH5B89l72Okvx8k%2Fimg.png'/>

## 마치며

비선점 scheduling은 다른 process가 cpu를 넘볼 수 없기 때문에 비교적 context switching이 적게 발생한다. 하지만 starvation과 같은 현상이 쉽게 생길 수 있다. 각 방식에 따라 특징이 다르다.

<br/>

학교에서 컴퓨터시스템일반 교과 시간에 이 scheduling에 대해 공부했었는데 그때 기억이 나면서 되새김되었다. 이렇게 다양한 방식이 있는 줄은 처음 알았다.
