---
id: 5
title: Block, Non-Block, Sync, Async에 대해 알아보자!
description: block, non-bloc, sync, async에 대한 개념들을 모두 정리하자.
date: '2024-01-13'
category: CS
---

# \[CS\]Block, Non-Block, Sync, Async에 대해 알아보자!

## Block, Non-Block

block과 non-block은 컴퓨터 프로그램에서 작업을 처리하는 두 가지 다른 방식을 말한다. 이름만 들어도 대충 어떤 느낌인지 감이 오는데.. block은 무언가가 막히고, non-block은 막히지 않고.. 여튼 아래에서 더 자세하게 살펴보겠다.

<br/>

block 환경에서는 호출자가 함수를 실행하였을 때에 호출자에게 있던 제어권이 실행된 함수에게 넘어간다. 함수의 실행이 종료되면 다시 호출자로 제어권이 돌아와 다음 코드를 실행한다.

<br/>

non-block 환경에서는 호출자가 함수를 실행하면 호출자에게 있던 제어권이 실행된 함수에게 넘어가지만, 곧바로 다시 돌아온다. 함수가 실행되고있는 상태에서 호출자의 다음 코드가 실행되는 것이다.

<br/>

아래 코드를 보고 더 정확히 알아보자.

<br/>

block 상태에서는 caller가 호출되고 caller에서 addNum 호출 시 addNum으로 넘어간 제어권이 addNum이 종료된 후 다시 caller로 넘어와 subtractNum이 호출된다. addNum이 실행 중인 동안에는 caller는 block 되어 다른 작업을 수행할 수 없는 상태가 된다.

<br/>

non-block 상태에서는 caller에서 addNum 호출 시 addNum으로 넘어간 제어권이 곧바로 caller로 돌아와 subtractNum이 호출된다.

<br/>

addNum이 숫자를 계산하고 있는 중에도 다른 코드들이 동시에 실행될 수 있다는 것이다.

```js
function addNum(a, b) {
  return a + b
}

function subtractNum(a, b) {
  return a - b
}

function caller() {
  addNum(1, 2)

  subtractNum(1, 2)
}

caller()
```

## Synchronous, Asynchronous

sync는 동기를 나타낸다. 즉, 멀티스레드 환경에서 함수의 시작과 끝이 일치한다던가, 함수 하나가 끝난 이후에 다음 함수가 실행된다던가 하는 것이다. 코드가 순차적으로 실행되며, 한 작업이 끝나야 다음 작업을 수행할 수 있다. 함수가 종료될 때에 제어권이 반환된다.

<br/>

a(부정형)sync 비동기에서는 함수가 채 끝나지도 않았는데 다른 함수가 실행될 수 있다. 한 작업이 실행되면 바로 다음 작업이 시작되고, 코드의 실행 여부는 이전 코드의 완료 여부와 상관없다.

## 차이

non-block이면서 sync인 상황, block이면서 async인 상황이 있을 수도 있다. 이게 무슨 말일까? non-block이면 당연히 async 아닌가?

<br/>

예를 들어 non-block 환경에서 caller함수가 addNum을 호출했을 때에 caller에 있던 제어권은 addNum으로 갔다가 다시 돌아온다. 이때 제어권이 돌아오면서 결괏값도 같이 반환될 수 있다.

<br/>

아직 계산이 끝나지 않았는데 결과값을 어떻게 반환하지?라고 생각할 수 있다. 그것이다. 아직 계산중이라는 상태를 결괏값으로 반환하는 것이다. 이렇게 되면 제어권과 결괏값이 동시에 반환되므로 동기적으로 동작하는 것이 된다. 따라서 non-block이면서 sync인 것이다.

<br/>

앞에서 말한 환경에서 계산의 결과값을 가져오려면 지속적으로 addNum함수에 결괏값이 도출되었는지 물어본다. 만약 결과가 나왔다면 계산의 결과를 가져오는 것이고, 아니라면 다시 caller로 돌아와서 다른 동작을 수행한다.

<br/>

이렇게 제어권을 주고받는 과정에서 context switching이 일어나는 것이다. 물론 context switching의 비용이 발생하지만 결괏값을 기다리는 동안 다른 동작을 할 수 있다는 점에서 유리하다.

<br/>

언제나 확정적으로 block이다 sync다 라고 말할 수는 없다. 상황에 따라 판단하기 어려운 상황이 많기 때문이다.

<br/>

예를 들면 프론트엔드 개발을 할 때에 javascript에서 await을 하여 프로미스가 처리될 때까지 기다리게 하여 비동기 환경에서 특정 부분을 동기적으로 작동하게 할 수 있다.

```js
// 비동기적

async function getData() {
  const result = await fetch('...') // 동기적

  console.log(result)
}
```

하지만 await하는 함수가 실행되고 있는 상황에서도 브라우저에서는 여전히 click event가 발생한다. 이 경우, 코드상에서는 동기적이지만 실제로는 비동기적으로 작동하는 것이다. 만약 동기적으로 작동했다면 프로미스가 처리되기 전까지 click event는 발생하지 않을 것이다.

### Multi Thread와 sync/async, block/non-block

멀티 스레드 환경에서는 sync와 async, block과 non-block이 상호작용하여 다양한 작업이 이루어진다.

<br/>

어플리케이션에서는 process가 여러 개 작동할 수 도 있다. process 안에는 여러 개의 thread가 존재할 수 있는데 하나의 업무를 수행하더라도 그 업무를 세분화해서 각각 thread에 분담한다. 하나의 업무를 각각의 thread가 분할하여 수행하기 때문에 동기화라는 과정이 필요하다. 이 동기화는 1번 thread의 결괏값을 2번 thread가 기다리고 2번 thread의 결괏값을 3번 thread가 기다리는 방식으로 큐나 세마포어를 통해 관리된다.

<br/>

동기적인 작업에서는 하나의 thread가 작업을 수행하고 결과를 다음 thread에게 전달하며, 각 thread가 순차적으로 진행된다.

<br/>

비동기적인 작업에서는 각 thread가 독립적으로 작업을 수행하고, 결과를 기다리지 않고 다음 작업을 진행한다.

<br/>

sync/async, block/non-block와 multi thread는 상당히 긴밀한 관계가 있다. process와 thread가 궁금하다면 아래 게시물을 확인하자.

[frorong.tistory.com](https://frorong.tistory.com/entry/OS-Process%EC%99%80-Thread%EA%B0%80-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C)

## 마치며

block과 non-block은 제어의 관점이고 sync와 async는 순서와 결과의 관점이다.

<br/>

block이 좋은지, non-block이 좋은지, 동기적으로 작동하는 것이 더 좋은지 동기적으로 작동하는 것이 더 좋은지에 대한 답은 없다.
