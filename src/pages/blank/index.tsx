import { defineComponent } from 'vue'
import { useLoad } from '@tarojs/taro'
import { useUserStore } from '@/stores'
import router from '@/router'

export default defineComponent({
  setup() {
    const isLogged = useUserStore().isLogged
    useLoad(() => {
      if (isLogged)
        router.switchTab({ url: '/pages/home/index' })
      else
        router.reLaunch({ url: '/pages/index/index' })
    })
    return null
  },
})
