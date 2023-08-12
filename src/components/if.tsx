import { FunctionalComponent } from 'vue'
import { CommonProps } from '../common.ts'
import { Then } from './then.tsx'
import { Else } from './else.tsx'
import { getConditionResult } from './getConditionResult.ts'

export const If: FunctionalComponent<CommonProps> = (props, { slots }) => {
  const children = slots.default?.()
  if (getConditionResult(props.condition)) {
    return <Then>{children?.find((c) => c.type === Then)}</Then>
  }
  return <Else>{children?.find((c) => c.type === Else)}</Else>
}
