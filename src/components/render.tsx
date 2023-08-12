import { FunctionalComponent } from 'vue'
import { CommonProps } from '../common.ts'
import { getConditionResult } from './getConditionResult.ts'

export const Render: FunctionalComponent<CommonProps> = (props, { slots }) => {
  if (getConditionResult(props.condition)) return slots.default?.()
  return null
}
