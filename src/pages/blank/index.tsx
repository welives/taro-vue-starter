import { defineComponent } from 'vue'
import { useLoad } from '@tarojs/taro'
import { useUserStore } from '@/stores'
import router from '@/routes'

export default defineComponent({
  setup() {
    const userStore = useUserStore()
    useLoad(() => {
      if (userStore.isLogged) {
        router.switchTab({ url: '/pages/home/index' })
      } else {
        router.reLaunch({ url: '/pages/index/index' })
      }
    })
    return null
  },
})
