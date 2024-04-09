---
id: 11
title: 코딩 테스트 문제가 너무 어려워? 앞만 보고 달려서 그래! 백 트래킹 Back Tracking.
description: 박병운 선생님께서 알려주신 전설의 비기! 백 트래킹에 대해 알아보자. 참고로 등산이랑 다르다!!
date: '2024-04-07'
category: JS
---

# **\[JS\] 코딩 테스트 문제가 너무 어려워? 앞만 보고 달려서 그래! 백 트래킹 Back Tracking.**

어제 이야기하며 산에서 트레킹을 하다가 백 트래킹이라는 이야기가 나왔다. 백 트래킹이 코딩할 때 쓰는 방법이라고는 알고 있었지만, 정확히 무엇을 의미하는지, 어떤 것인지는 알지 못했다. 오늘은 백 트래킹에 대해 알아보려 한다.
<br/>

! 참고 !
<br/>

오늘 알아볼 트래킹(tracking)과 트레킹(trekking)은 단어 자체가 다르다.

## Back Tracking

백 트래킹은 알고리즘 기법 중 하나이다. 주어진 조건에 따라 문제를 해결 가능한 해가 존재하는지, 존재하지 않은지 판별할 수 있는 알고리즘이다. 이를 결정 문제라고 한다. 주어진 조건에 따라 문제를 해결 가능한 해가 존재하는지, 존재하지 않은지 판별하는 것.
<br/>

백 트래킹은 주어진 모든 가능한 해들을 탐색한다. 주로 DFS를 사용하며, 해가 조건에 일치하지 않는다면, 뒤로 되돌아가 다른 해를 색인한다.
<br/>

백 트래킹을 어떤 경우에 적용할 수 있을지는 아래의 예시를 보고 알아보자.

```js
const array = [1, 2, 3]
```

위와 같은 배열이 있다. 이 배열의 수들을 조합하여 얻을 수 있는 순열들을 구하기 위해서는 어떻게 해야 할까?
<br/>

for문을 쓰는 방법이 있을 것이다. 삼중 for문을 돌리면 가능한 모든 경우의 수를 구할 수 있을 것이다. 2개를 뽑아서 만들 수 있는 순열을 구하는 경우도 이중 for문을 돌리면 쉽게 구할 수 있다.
<br/>

여기서 배열의 원소의 개수를 n이라고 하고, 뽑을 수 있는 원소의 개수를 m이라고 해보자. (3, 3), (3, 2)가 아닌 (n, m)으로 조건이 주어지면 어떻게 해야 할까? for문을 적절하게 설계할 수 있을까? 이러한 조건에 따라 탐색 깊이가 달라질 수 있는 문제 때문에 백 트래킹을 적용하는 것이다.
<br/>

이러한 백 트래킹에서 DFS가 주로 사용되는 이유는, 주어진 조건에 부합하지 않는다면 뒤로 되돌아가야 하기 때문이다. 이는 트리 구조로 구성되기 때문에, 조건에 부합하지 않은 노드에서 뒤로 돌아가는 것을 가지치기라고 부른다. BFS보다 DFS가 뒤로 돌아가기 쉽다. BFS는 보통 queue를 사용하는데 queue는 앞에서부터 탐색되기 때문에 뒤로 돌아가기가 어렵다.

<br/>

그림으로 쉽게 이해해 보자.
<br/>

재귀함수나 stack으로 구현되는 DFS의 경우, 전 상태로 돌아가기 위해 pop()을 하거나 return을 하여 돌아가면 된다.

<img width=200  src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc8XjZB%2FbtsGq3oalyp%2FZuXjhWCgA9P8cA1P8pIAd0%2Fimg.png"/>
<img width=400  src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FKDrwC%2FbtsGp3Js93v%2FApxpReQegIZOBorapTuctk%2Fimg.png"/>
반면, queue로 구현되는 BFS의 경우, 전 상태로 돌아가기 위해 뭘 할 수 있을지 모르겠다. first in first out의 구조이기 때문에 이전으로 돌릴 수가 없다.

<img width=300  src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbFIdv0%2FbtsGsqpoOss%2FuTEV9kVcAVGrR8AiX10mkK%2Fimg.png"/>
<img width=300  src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbxOwc2%2FbtsGrWoyCgU%2FG8THyJtL8yEaTxIFR65mt0%2Fimg.png"/>

이렇기 때문에 백 트래킹을 구현할 때에는 DFS를 사용한다.
<br/>

DFS, BFS에 대해 더 궁금하다면 아래 글을 보자.

[frorong.tistory.com](https://frorong.tistory.com/entry/JS-%EC%BD%94%EB%94%A9-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EB%AC%B8%EC%A0%9C%EA%B0%80-%EB%84%88%EB%AC%B4-%EC%96%B4%EB%A0%A4%EC%9B%8C-%ED%83%90%EC%83%89-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98%EC%9D%84-%EB%AA%B0%EB%9D%BC%EC%84%9C-%EA%B7%B8%EB%9E%98-DFS-BFS)

## 문제와 풀이

gpt에게 백트래킹과 관련된 예시 문제를 달라고 했다.

**예시 문제: 순열의 합 찾기**

문제: 주어진 길이 N의 숫자 배열이 있을 때, 이 배열을 사용하여 주어진 합 S를 만들 수 있는 모든 순열을 찾으세요.
<br/>

조건:

1.  주어진 배열의 숫자는 모두 양의 정수입니다.
2.  모든 순열은 배열의 숫자를 한 번씩만 사용하여 만들어야 합니다.

예시: 배열: \[1, 2, 3\] 합: 3

해결 방법: 배열 \[1, 2, 3\]을 사용하여 합이 3이 되는 모든 순열을 찾습니다. 가능한 순열:

- \[1, 2\]
- \[2, 1\]

순열의 합이 주어진 합과 일치하는 모든 경우를 찾아야 합니다. 이 문제는 백트래킹을 사용하여 풀 수 있습니다.
<br/>

이 문제를 백트래킹으로 해결하는 것은 어렵지 않다.
<br/>

원하는 해를 찾았거나 이상한 해라면 return 해주고, 가능한 모든 경우만 찾아주면 된다.
<br/>

나의 풀이는 아래와 같다.
<br/>

주석의 수를 따라가며 코드를 읽어보자.

```js
function solution(numArray, targetNum) {
  const resultArray = [] // 1. 결과값을 담을 배열 선언

  dfs([], 0, []) // 6. 초기 정보를 담아 함수 호출

  function dfs(
    current,
    count,
    visited
  ) {
    // 2. dfs 함수 선언
    if (count === targetNum) {
      // 3. 조건에 만족하면 리턴
      if (
        !resultArray.includes(current)
      )
        resultArray.push(current) // 중복처리
      return
    } else if (count > targetNum) return // 4. 조건에 만족할 수 없으면 리턴

    numArray.forEach((v, i) => {
      // 5. 가능한 모든 경우로 뻗어가기
      if (!visited.includes(i))
        dfs(
          [...current, v],
          count + v,
          [...visited, i]
        )
    })
  }

  return resultArray.length // 7. 배열의 길이를 반환
}
```

## 주의할 점

백 트래킹으로 문제를 해결하는 것 자체는 어렵지 않다. 다만, 백 트래킹으로 해결할 수 있는 문제는 많지 않다.

백 트래킹은 기본적으로 DFS를 사용하기 때문에 depth가 너무 깊은 문제는 해결할 수 없다. 또한, 무한으로 색인하는 것을 막기 위해 종료 조건을 잘 지정해주어야 한다.
