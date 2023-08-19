# Vue JSX If

在 Vue JSX 中，使用组件的形式进行条件渲染。

## 安装

```bash
$ npm i vue-if
```

## 使用

### If

```tsx
import { If, Then, Else } from 'vue-if'

function Example() {
  return (
    <If condition={true}>
      <Then>为真显示</Then>
      <Else>为假显示</Else>
    </If>
  )
}
```

### When

```tsx
import { When } from 'vue-if'

function Example() {
  return (
    <When condition={true}>
      显示内容
    </When>
  )
}
```

### Switch

```tsx
import { Switch, Case, Default } from 'vue-if'

const num = 1

function Example() {
  return (
    <Switch>
      <Case condition={num === 1}>显示</Case>
      <Case condition={num === 2}>不显示</Case>
      <Default>默认显示</Default>
    </Switch>
  )
}
```
