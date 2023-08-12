import { FunctionalComponent } from 'vue'
import { Case } from './case.tsx'
import { getConditionResult } from './getConditionResult.ts'
import { Default } from './default.tsx'

export const Switch: FunctionalComponent = (_props, { slots }) => {
  const children = slots.default?.()
  const matchedChild = children?.find((c) => c.type === Case && getConditionResult(c.props?.condition))
  const defaultChild = children?.find((c) => c.type === Default)
  return matchedChild ?? defaultChild ?? null
}
