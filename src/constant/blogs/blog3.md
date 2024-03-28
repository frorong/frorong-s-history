---
id: 3
title: Process와 Thread가 무엇일까?
description: 개발자라면 무조건 알아야하는 OS의 Process와 Thread에 대해 알아보자!
date: '2024-01-10'
category: CS
---

# \[CS\] Process와 Thread가 무엇일까?

## Process와 Thread

process는 수행할 작업의 관리 단위이다. 이 관리의 주체는 OS이다.

연산이라는 연속적인 흐름에서 process 하나가 존재한다면, thread 또한 하나가 존재한다. process는 최소 1개의 thread를 가진다. 그리고 연산은 thread 단위로 이루어진다.

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmO2tI%2FbtsDkDFxxlt%2FjtMEZOsSG3a2ZElyhwbFL1%2Fimg.png'/>

cpu는 한 번에 한 가지의 동작만 할 수 있기 때문에 한 process가 cpu를 점유하면 다른 process들은 실행할 수 없다. 때문에 여러 개의 process들을 동시에 실행하기 위해 여러 개의 process가 짧은 텀으로 번갈아 cpu를 점유하며 동시에 실행되는 것처럼 보이게한다보이게 한다. 이 것이 multi process인데, 아래에서 더 정확히 설명하겠다.

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbngNtM%2FbtsDj3kfMLg%2FC5K0SvcczaFk1VWdk03pc1%2Fimg.png'/>

이 process의 context switching은 process 전체를 갈아 끼우기 때문에 무거운 작업이다. 따라서 경량화된 프로세스 버전인 thread가 등장했다. thread의 context switching은 공용으로 필요한 자원을 관리하고 스레드 각각의 자원은 각각 관리하기 때문에 부담이 적다.

<br/>

OS는 가상 메모리라는 제한된 공간을 process에 할당한다. 따라서 process에 속한 모든 thread는 process에 할당된 가상 메모리로 공간이 제약된다.

<br/>

processs 내부에 연산 코드들이 존재하고 이 연산은 cpu를 전산자원으로 필요로 한다.

<br/>

피지컬 메모리나 cpu에 직접 접근할 수 없다는 process의 특성상 OS는 process에게 가상 메모리를 할당해준다. process는 자신의 공간에 해당하는 메모리에 액세스 하고 OS는 가상 주소를 물리 주소로 변환하여 해당하는 메모리에 액세스 할 수 있게 된다.

<br/>

가상 메모리는 ram과 hard disk를 합쳐서 추상화되어있다.

<br/>

process 내부에 존재하는 thread의 작동 영역은 이 가상 메모리 안으로 제한된다.

## Multi Process와 Muilti Thread

어플리케이션이 동시에 여러 가지 일을 수행해야할 상황이 있다. 한 process는 하나의 작업만 수행할 수 있기 때문에 여러 작업을 동시에 처리하기 위해선 부모 process가fork 하여자식 process를 여러 개 만들어 일을 수행해야 한다. 이 때 자식 process는 부모와 별개의 메모리 영역을 할당받는다.

<br/>

여러 개 만들어진 process들이 짧은 텀으로 cpu를 점유하여 작업을 수행하고, 이 것이 multi process이다.

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F881XV%2FbtsDh8GnZW9%2FwBysOA82kHsvK8lQjmkQ5K%2Fimg.png'/>

한 process 내부에 흐름이 2개가 존재한다면 각각 동시에 작용한다. 각각의 흐름이 thread이고, 한 process가 여러 개의 thread로 구분되어 실행된다면 그것을 것을 multi thread라고 한다.

<br/>

한 어플리케이션에서 여러 작업을 할 때에 그 작업들을 각각의 thread가 담당한다. 여기서 동시성이라는 특성을 띄게 되는데, 동시성 때문에 동기화라는 이슈가 따라온다. 이 동시성은 한순간에 여러 가지 일이 일어나는 것이 아니라 짧은 전환으로 인하여 여러가지 일이 빠르게 전환되기 때문에 동시에 일을 처리하는 것처럼 보이는 것이다.

<br/>

한 process에 해당하는 각각의 thread는 각각의 역할을 하는데, 이때 메모리를 나눠서 쓰게 된다. 이 메모리는 두 가지로 분류된다. 각 thread마다 쓰는 고유한 공간인 thread local storage와 공용으로 사용하는 공간인 heap이다.

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqOtT7%2FbtsDj3khzLV%2F0DcpJLWIZzM1fuLUbBop9k%2Fimg.png'/>

## Multi Process와 Muilti Thread의 장단점

multi process는 개별적으로 메모리를 차지하기 때문에 context switching 비용이 크지만 독립적이기 때문에 동기화가 어렵지 않다.

<br/>

multi thread는 자원을 공유하여 관리하기 때문에 메모리 비용이 효율적이지만 서로 긴밀하게 연결되어 동기화에 신경써야한다. 또한 서로 긴밀하게 연결 되어있기 때문에 한 thread에 문제가 생기면 전체 process에 영향이 간다.

<br/>

하나의 process에서 각각의 thread가 하나의 가상메모리를 사용하는 게 나을지 각각의 thread가 각각의 가상메모리를 사용하는게 나을지 에 대한 고민도 생기는데..

<br/>

Window 계열은 전자, Linux는 후자의 정책을 구사한다. 정답은 없다.

## Multi Core

multi core라는 개념도 있다. Multi core는 물리적으로 여러 코어를 동시에 사용하여 다수의 실행 단위를 처리하는 것이다. multi thread나 process는 소프트웨어적인 개념이고 multi core는 하드웨어적인 개념이다.

## 마치며

cs적인 부분은 상당히 중요한 것 같다. 안타깝게도 내 머리는 Multi Processing과 Multi Threading을 잘하지 못해서 이 개념을 이해하기 위해 이 부분만 잡고 있었다. 하하.
