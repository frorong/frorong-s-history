---
id: 9
title: CORS의 credentialed request와 cookie의 same site 정책은 뭐가 다를까? CORS에 대해 본격적으로 알아보자!
description: CORS 오류는 어떻게 뜨는 건가요? SOP 정책에 대한 CORS? CORS와 SOP에 대해 파해쳐보자!
date: '2024-02-14'
category: CS
---

# **\[CS\] CORS의 credentialed request와 cookie의 same site 정책은 뭐가 다를까? CORS에 대해 본격적으로 알아보자!**

2년 전. 내가 처음으로 서버 측 api 연결을 시도하였을 때에 있었던 일이다. 로컬 환경에서 서버 측에 요청을 하였더니 이러한 에러가 발생하였다. 처음 보는 오류였고 굉장히 당황스러워 무엇이 문제인지 서버 측 팀원들과 함께 고민했다.

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FQFFNU%2FbtsEKExzW0t%2FbMw2KsExTCXulVGQ49RUZ1%2Fimg.png'/>

서버 측 코드로 이 문제를 해결하지 못해 도메인을 구매하여 같은 origin을 만들어주었다. 일시적으로는 해결되었지만 여전히 로컬에서는 같은 문제가 있었다. 이후 컨트롤러에 @CrossOrigin 어노테이션을 사용하여 문제를 해결할 수 있었다.

<br/>

당시에는 cors에 대한 이해가 부족하여 왜 이런 오류가 발생했고, 어떻게 해서 문제가 해결되었는지 확실하게 이해할 수 없었다.

<br/>

이제부터 cors가 무엇인지, 어떻게 해결할 수 있는지에 대해 알아보자.

## CORS

CORS는 Cross-Origin Resource Sharing의 약자로, 웹 어플리케이션에서 보안상의 이유로 다른 origin의 접근을 제어하는 정책이다.

<br/>

CORS과 함께 SOP도 같이 아는 것이 좋은데, 잠깐 SOP로 갔다가 다시 돌아오자.

### SOP

SOP는 Same-Origin Policy의 약자로, 즉 동일 출처 정책이다. 다른 origin으로부터 로드된 문서나 스크립트가 접근하지 못하도록 제어하는 정책이다.

<br/>

여기서 origin을 알지 못한다면 이 두 정책에 대해 잘 이해할 수 없다.

#### Origin

origin은 protocol + host + port를 의미한다.

<br/>

예를 들면 아래와 같은 것이 origin이다.

<br/>

http://newhost:8080

<br/>

만약 [https://abcd.site](https://abcd.site) 에서 [https://dcba.site](https://dcba.site) 로 api 요청을 한다면, 서로 다른 출처이기 때문에 위 정책에 걸리는 것이다.

<br/>

정리하자면 SOP는 같은 origin 끼리의 요청만 허용하는 것이고, CORS는 다른 origin의 요청이라도 일부 허용 해주는 정책이다.

<br/>

따라서 처음으로 돌아가 로컬 환경에서 서버 측에 요청을 하였더니 발생한 cors오류는 cors 때문에 발생한 오류가 아니라 sop 때문에 발생한 오류인 것이다. "sop 때문에 요청이 막히니 cors 설정을 해라." 라고 알려주는 오류이다.

## 그래서 어떻게 해결하는가

프론트에서 보내는 요청은 브라우저를 거쳐서 전달된다. sop, cors 정책은 브라우저에 해당하는 것이지만, 서버 측에서 cors 응답 header를 설정하여 해결할 수 있다.

<br/>

바로 Access-Control-Allow-Origin header에 허용할 origin을 지정하는 것이다. 이렇게 하면 브라우저 단에서 요청 header의 origin과 응답 header의 origin을 비교하여 origin이 같다면 요청을 허용한다.

<br/>

CORS 요청에서 주로 발생되는 시나리오는 두 가지가 있다.

<br/>

1\. preflight reuqest

<br/>

2\. credentialed request

<br/>

javascript에서 요청을 보내면, 그 이후에는 브라우저와 서버가 상호작용하여 응답을 반환한다.

<br/>

preflight request는 브라우저에서 서버에게 예비 요청을 보내는데, 이 요청이 허용된 origin인지 확인하는 역할을 한다.

<br/>

credentialed request는 쿠키나 세션 같은 정보가 담겨있는 요청에 해당된다. 기본적으로는 preflight와 같이 동작하지만, 요청 header에 쿠키나 세션과 같은 중요한 정보가 담겨있기 때문에 와일드카드 사용이 불가능하다.

<br/>

추가적으로 Access-Control-Allow-Credentials header도 지정을 해주어야 한다.

<br/>

Spring에서는 여러 방법으로 이를 해결할 수 있다.

<br/>

1\. CorsFilter 설정.

<br/>

2\. @CrossOrigin 어노테이션 사용.

<br/>

3\. application.yml에서 cors 구성.

<br/>

이 외에도 다양한 방법이 있는데, 세부적인 것은 이 글에서는 다루지 않겠다.

## SameSite

cookie에는 same site 정책이라는 것이 존재한다. sop와 같이 같은 origin만 쿠키 전달을 허용한다. 이는 cookie를 이용한 CSRF공격을 막기 위함이다. cors의 credentialed request과는 다른 origin으로부터의 보안을 강화한다는 것은 같지만 목적이 다르다.

<br/>

2년 전에는 CORS에 부딪혔지만, 최근에는 same site에 부딪혔다.

<br/>

내가 개발에 참여하지 않은 프로젝트의 token refresh 문제를 해결하려는데, 로컬에서 테스트가 불가능한 이슈가 발생했다. 해당 프로젝트는 http only cookie에 refresh token을 보관하였고, same site 옵션이 lax로 되어있어 withCredentials를 true로 주어도 다른 origin에서는 요청에 쿠키가 포함되지 않는 것이었다. 따라서 로컬과 서버는 다른 origin이기 때문에 테스트 조차 할 수 없는 상황이었다.

<br/>

보통은 테스트 서버를 두어 same site 옵션을 조정하겠지만, 내가 프로젝트 팀에 속해있는 상황도 아니었고 빠르게 해결하는 것이 중요한 상황인지라 이는 불가능했다.

<br/>

그럼에도 문제를 해결하고 싶은 욕구가 강했기에 nextjs의 rewrites 옵션을 사용하여 이를 해결했다.

<br/>

nextjs의 서버사이드메소드에서 호출하는 request는 브라우저가 아닌, 서버에서 호출하므로 CORS가 발생하지 않는다고 한다. 따라서 rewrites를 사용하면 해당 이슈를 우회할 수 있다.

<br/>

가끔 네이버 open api와 같은 공용 api를 사용하다 보면 cors가 생길 때가 있다. 브라우저에서의 요청을 막아놓은 것인데 proxy로 해결할 수도 있지만, nextjs의 rewrites를 사용한다면 아주 간단하게 우회할 수 있다.

<br/>

해당 내용의 PR 첨부.

[github.com](https://github.com/lucky-pocket/luckyPocket-front/pull/69)

## 마치며

오늘도. 역시나. nextjs는 최고다.
