import { Button, Text, View } from '@tarojs/components'
import { defineComponent } from 'vue'
import { useCounterStore } from '@/stores'
import { useAuth } from '@/hooks'
import './index.scss'

export default defineComponent({
  setup() {
    useAuth()
    const counter = useCounterStore()
    return () => (
      <View class="flex flex-1 flex-wrap flex-col items-center justify-center gap-4 h-full">
        <Text>Home Page</Text>
        <View class="text-center">
          <Button type="warn" onClick={counter.decrement}>
            Dec
          </Button>
          <Text>{counter.count}</Text>
          <Button type="primary" onClick={counter.increment}>
            Inc
          </Button>
        </View>
      </View>
    )
  },
})
