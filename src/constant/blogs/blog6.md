---
id: 6
title: Mutex와 Semaphore는 무엇일까??
description: Mutex, Semaphore, 그리고 동기화에 대해 알아보자.
date: '2024-01-16'
category: CS
---

# **\[CS\] Mutex와 Semaphore는 무엇일까??**

우리의 운영체제는 process와 thread를 사용하여 수행할 작업을 관리한다. 많은 작업을 처리하기 위해서는 여러 process와 thread가 동시에 작업을 해야 할 것이다. (실제로 여러 process가 동시에 cpu를 점유할 수는 없다. 자세한 것은 아래 블로그 참고) 그렇게 되면 여러 process나 thread가 동시에 같은 공유 자원에 접근하는 문제가 생길지도 모른다.

[frorong.tistory.com](https://frorong.tistory.com/entry/OS-Process%EC%99%80-Thread%EA%B0%80-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C)

이러한 상태를 race condition이라고 한다.

<br/>

race condition에서는 일관성 있는 데이터를 보장받기 힘들고, 교착상태가 발생할 수도 있으며, 성능 또한 저하된다.

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FRPKpk%2FbtsDApAbMRg%2FpiFRvoQq6HvcNU0uyFbov0%2Fimg.png'/>

## 동기화

race condition에서는 의도치 않은 동작이 생겨 위험해질 수 있기 때문에 여러 process나 thread가 동시에 공유 자원에 접근하지 못하도록 접근 순서를 제어하는 대책이 필요하다.

<br/>

이 대책을 동기화라고 한다.

<br/>

동기화는 상호 배제를 제공하여 race condition을 방지한다.

<br/>

이 동기화 메커니즘은 크게 두 가지로 구분되는데, 바로 mutex와 semaphore다.

## Mutex

mutex는 상호 배제(mutual exclusion)의 약자로 하나의 process나 thread만 공유 자원에 접근할 수 있도록 한다.

<br/>

어떤 시점이든 하나의 process나 thread만 mutex lock을 걸고 자원을 점유할 수 있다. 점유하고 있던 process나 thread는 작업이 끝난 후 mutex lock을 해제하여 다른 process나 thread가 자원을 점유할 수 있도록 한다. 다른 process나 thread는 mutex lock이 풀릴 때까지 sleep 상태로 기다린다. 이 경우, 계속해서 대기하는 방식인 busy waiting 방식과 대기 큐에서 cpu 자원을 내려놓고 대기하는 방식인 non busy waiting 방식이 있다. mutex는 non busy waiting 방식을 따른다.

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc3W4Fd%2FbtsDyNuMGB4%2FdiEkYAcWfR0KwSCsz1HkRk%2Fimg.png'/>

process나 thread가 mutex lock을 걸고 해제하기 위해서는 aquire, release 메서드를 사용한다.

## Semaphore

semaphore는 정수 변수로, 해당 변수의 값에 따라 process나 thread의 접근을 제어한다.

<br/>

정수로 어떻게 접근을 제어한다는 거지? 의아할 텐데 semaphore의 값이 곧 공유 자원에 접근할 수 있는 process나 thread의 개수를 나타낸다. semaphore에 접근하기 위해서는 wait 연산이 필요하다. wait 연산은 semaphore 값을 감소시키며, 만약 semaphore 값이 0일 경우에는 대기 큐에서 sleep 상태로 대기하도록 한다. semaphore 또한 mutex와 같이 non busy waiting 방식을 따른다. 진행하던 작업이 끝나서 자원 점유를 해제하고 semaphore 값을 감소시키려면 signal 연산을 사용한다. 이는 대기 중인 process나 thread가 있다면 하나를 sleep 상태에서 깨운다.

<br/>

wait 연산은 P 연산, signal 연산은 V 연산이라 불린다.

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbdVgsz%2FbtsDyOUNiSr%2FuVNbzJzVjkdzkXbkN0kVAk%2Fimg.png'/>

semaphore는 여러 개의 타입으로 나뉘는데, 크게는 이진 semaphore와 counting semaphore로 나뉜다.

<br/>

이진 semaphore는 최대 한 개의 process나 thread가 접근 가능하며, counting semaphore는 최대 n 개의 process나 thread가 접근 가능하다.

<br/>

또한 강성 semaphore와 약성 semaphore로 나뉘는데, 이는 대기큐에서 나오는 방식에 따라 갈린다. 강성 semaphore는 FIFO 방식을 따른다. 먼저 대기한 process나 thread가 먼저 자원에 접근하는 것을 말하는데, 이는 교착 상태에 빠질 수도 있다.

<br/>

약성 semaphore는 우선순위에 따라 자원 점근 순서가 결정된다.

## 공통점과 차이점 비교

mutex와 semaphore는 공유 자원에 process나 threa가 동시에 접근하여 생기는 문제를 막기 위해 존재한다는 점이 같다.

<br/>

또한, 두 메커니즘 모두 잘못 사용 시 교착 상태가 생길 수 있다.

mutex는 한 개의 process나 thread만 접근할 수 있지만, semaphore는 타입에 따라 최대 n 개의 process나 thread가 접근 가능하다. mutex는 lock을 건 process나 thread만 해제할 수 있지만, semaphore는 다른 process나 thread도 P, V 연산을 수행할 수 있다.

## 마치며

mutex나 semaphore 대신에 데커, 피터슨, 다익스트라 알고리즘으로 처리할 수도 있지만, 이는 속도가 느리고 구현이 복잡하여 사용을 지양하는 것이 좋다고 한다. 한 개의 자원에 대한 동기화가 필요하다면 mutex, 여러 개의 공유자원에 대한 동기화가 필요하다면 semaphore를 채택할 수 있다.
