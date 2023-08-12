import { FunctionalComponent } from 'vue'
import { Render } from './render.tsx'

export const Default: FunctionalComponent = (_props, { slots }) => {
  return <Render condition={true}>{slots.default?.()}</Render>
}
