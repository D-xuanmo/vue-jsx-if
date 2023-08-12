import { FunctionalComponent } from 'vue'
import { CommonProps } from '../common.ts'
import { Render } from './render.tsx'

export const Case: FunctionalComponent<CommonProps> = (props, { slots }) => {
  return <Render {...props}>{slots.default?.()}</Render>
}
