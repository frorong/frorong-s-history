---
id: 0
title: TCP 원리. 왜 TCP는 UDP보다 느릴까?
description: TCP IP에 대해 알아보고, TCP가 어떻게 보안을 가져갈 수 있는지, 왜 느린지 이해합시다.
date: '2024-02-20'
category: CS
---

# \[CS\] TCP 원리. 왜 TCP는 UDP보다 느릴까?

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYJ7pt%2FbtsE9JX36zT%2Fhb4ymhSFzzitfRO1ACtT91%2Fimg.png'/>

tcp/ip 연결 이후에 클라이언트에서 서버로 어떠한 요청을 한다면, 서버는 그에 대한 응답을 보내준다. 여기까지는 많은 사람들이 알고 있는 내용이다. 그런데, 정확히 어떤 원리로 내부 과정이 이루어질까?

## TCP

먼저 TCP에 대해 간략히 알아보고 들어가자.

TCP는 소프트웨어에서 데이터를 교환할 수 있는 네트워크 프로토콜이다. UDP라는 다른 프로토콜도 존재하지만, TCP는 UDP에 비해 신뢰성 있는 연결이 가능하다.

우리가 데이터를 주고 받을 때에는 패킷이라는 조각으로 쪼개어 주고받는다. 전체의 큰 데이터를 한 번에 보낸다고 가정하자. 가는 도중에 어떠한 문제가 생겼을 때에 보완하기 어렵고, 다시 전송할 때에도 큰 리소스가 소모된다.

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYJ7pt%2FbtsE9JX36zT%2Fhb4ymhSFzzitfRO1ACtT91%2Fimg.png'/>

100kg의 돌덩이를 목적지로 옮긴다고 생각해보자. 단순하게 옮기기도 어려울뿐더러 중간에 돌덩이를 유실한다면, 다시 가져오는 데에도 무지 힘들 것이다. 10kg씩 나눠서 옮긴다면 좀 더 수월하게 옮길 수 있다. 다양한 경로로 돌덩이를 옮길 수 있고, 돌덩이 하나가 유실되어도 다른 90kg 분량의 돌덩이들은 무사히 옮겨질 수 있을 것이다.

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYJ7pt%2FbtsE9JX36zT%2Fhb4ymhSFzzitfRO1ACtT91%2Fimg.png'/>

그런데 우리가 필요한 것은 작은 돌덩이가 아니라 큰 100kg의 돌덩이다. 결국 작은 단위로 나눠서 옮기더라도 다시 큰 돌덩이로 조립하려면 작은 돌덩이의 순서나 상태가 매우 중요하다. 여기서 바로 TCP가 돌덩이들이 정확하게 들어올 수 있도록 해준다. 따라서 TCP는 돌덩이를 보내는 쪽과 받는 쪽의 상황을 모두 알고 있어야 한다. 때문에 TCP를 연결형 프로토콜이라 부른다.

## hand shake

과정을 알아보기 전에 어떻게 서버와 클라이언트가 연결되는지부터 간단하게 알아보자.

1\. 클라이언트가 서버에게 요청 (SYN)

클라이언트는 서버에게 연결을 요청하기 위해 패킷을 보낸다.

2\. 서버의 응답 (SYN-ACK)

서버는 요청 수락과 함께 클리이언트에게 패킷을 보낸다.

3\. 클라이언트의 응답 (ACK)

마지막으로 클라이언트에서 서버에게 응답 패킷을 보낸다.

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYJ7pt%2FbtsE9JX36zT%2Fhb4ymhSFzzitfRO1ACtT91%2Fimg.png'/>

## **과정**

자, 이제 세세히 과정을 알아보자.

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYJ7pt%2FbtsE9JX36zT%2Fhb4ymhSFzzitfRO1ACtT91%2Fimg.png'/>

1\. 어떠한 웹 서버가 존재한다고 가정하자. 웹 서버에는 통신을 위한 소켓이 하나 열려있다. 이 소켓은 파일이고 서버는 프로세스이며, 서버는 소켓에게 읽거나 쓰기의 명령을 내릴 수 있다.

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYJ7pt%2FbtsE9JX36zT%2Fhb4ymhSFzzitfRO1ACtT91%2Fimg.png'/>

2\. 동시에 하드디스크 속의 파일은 파일 시스템과 드라이버를 거쳐 관리되고 있다. 이 파일을 메모리에 할당해야 하는데, 메모리의 사이즈는 파일의 전체 용량만큼 크지 않다. 따라서 파일을 메모리의 사이즈만큼 분해해서 read 해야 한다. 여기서 사용되는 서버 프로세스 측의 가상 메모리는 주 기억 장치의 일부를 가상의 공간으로 나누고 필요할 때만 로드하는 방식으로 동작한다. 이때의 메모리를 m1이라 하자.

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYJ7pt%2FbtsE9JX36zT%2Fhb4ymhSFzzitfRO1ACtT91%2Fimg.png'/>

3\. 소켓은 TCP/IP를 추상화한 개념이고, 소켓의 TCP 지점에 또다른 메모리가 존재한다. 이때의 메모리를 m2라고 하자. m1에 있던 분해된 파일을 TCP의 m2로 카피를 하여 옮긴다. 이때의 입출력을 Buffered I/O라고 부른다.

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYJ7pt%2FbtsE9JX36zT%2Fhb4ymhSFzzitfRO1ACtT91%2Fimg.png'/>

4\. TCP의 m2로 옮겨진 데이터를 IP로 내려보내기 전에 내려보낼 데이터를 세그먼트라는 더 작은 개념으로 분할한다. 이 세그먼트는 헤더와 페이로드로 구성되는데, 안정적인 전송을 위해 시퀀스 번호와 같은 정보가 포함된다.

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYJ7pt%2FbtsE9JX36zT%2Fhb4ymhSFzzitfRO1ACtT91%2Fimg.png'/>

5\. IP에 도달한 세그먼트는 캡슐화를 위해 패킷으로 감싸져 네트워크를 통해 전송된다. 패킷에는 세그먼트와 함께 IP 헤더가 포함된다. 이 패킷은 돌덩이를 나르는 수레와 같은 프레임이라는 개념에 실어져 보내진다.

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYJ7pt%2FbtsE9JX36zT%2Fhb4ymhSFzzitfRO1ACtT91%2Fimg.png'/>

6\. 프레임이 도착할 클라이언트에도 네트워크 인터페이스 카드와, 드라이버, TCP/IP, 소켓이 존재할 것이다. 물론 여기도 클라이언트 프로세스 측의 메모리와, TCP 측의 메모리가 존재한다. 패킷을 열어 세그먼트를 꺼내고, 세그먼트의 시퀀스 번호를 보고 세그먼트를 조립한다.

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYJ7pt%2FbtsE9JX36zT%2Fhb4ymhSFzzitfRO1ACtT91%2Fimg.png'/>

7\. 여기서 1,2번 정도의 세그먼트를 조립한 후에 도착 여부를 서버에 전달하는데, 이게 ACK이다.

서버에서 ACK를 받으면 이후 세그먼트들을 보낸다. TCP가 UDP보다 느린 이유가 이 것 때문이다. ACK에는 클라이언트 측에서 세그먼트를 조립할 수 있는 공간의 사이즈가 포함된다. 이 사이즈를 window size라고 부르고, 서버에서는 이 사이즈를 보고 다음으로 보낼 세그먼트의 사이즈를 판단하여 전송 여부를 결정한다.

세그먼트의 사이즈가 클라측 공간의 사이즈보다 크다면 클라측에서 소켓의 I/O로 공간을 비울 때까지 wait 한다. 클라측의 read 속도가 네트워크 수신 속도보다 빨라야 어플리케이션이 빠르게 돌아가는 것이다. read가 늦어지면 처리지연에 대한 문제가 발생한다.

## 마치며

네트워크의 개념을 하나씩 이해 해가면서 서버와 클라이언트 사이에서 발생하는 다양한 문제들을 해결할 수 있게 되는 길이 하나씩 보이는 것 같다. 특히 클라이언트 측의 window size가 작기 때문에 빠른 read 속도가 필요하고, 이 속도를 해결해야 더 나은 사용자 경험을 가져올 수 있다는 것이 인상적이다.
