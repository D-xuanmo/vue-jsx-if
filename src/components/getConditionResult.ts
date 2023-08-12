import { BooleanLike } from '../common.ts'

export const getConditionResult = (condition: BooleanLike | ((...args: unknown[]) => BooleanLike)) => {
  return typeof condition === 'function' ? condition() : condition
}
