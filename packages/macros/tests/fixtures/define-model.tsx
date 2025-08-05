
import { defineVaporComponent, unref } from 'vue'

const $ = unref

export const Comp = defineVaporComponent(({ bar }: { bar: string }) => {
  const foo = defineModel<string, 'm1' | 'm2'>('foo', { default: bar })
  return <div>{foo.value}</div>
})

export default function () {
  const modelValue = $(defineModel<string>()!)
  return (
    <Comp v-model:foo_m1={modelValue} bar="bar">
      {modelValue}
    </Comp>
  )
}
