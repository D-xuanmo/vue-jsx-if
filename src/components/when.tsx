import { FunctionalComponent } from 'vue'
import { CommonProps } from '../common.ts'
import { Render } from './render.tsx'

export const When: FunctionalComponent<CommonProps> = (props, { slots }) => {
  return <Render {...props}>{slots.default?.()}</Render>
}
