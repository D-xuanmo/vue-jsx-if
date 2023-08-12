import { ExtractPropTypes, PropType } from 'vue'

export const COMMON_PROPS = {
  condition: {
    type: [Boolean, String, Number] as PropType<BooleanLike>,
    required: true
  }
}

export type CommonProps = ExtractPropTypes<typeof COMMON_PROPS>

export type BooleanLike = boolean | string | number | undefined | null
