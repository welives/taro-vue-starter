import { defineStore } from 'pinia'
import { ref } from 'vue'
import { StorageSceneKey, piniaStorage } from '../libs'

export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('')
    const isLogged = ref(false)
    const setToken = (value: string) => {
      token.value = value
      isLogged.value = true
    }
    const removeToken = () => {
      token.value = ''
      isLogged.value = false
    }
    return { token, isLogged, setToken, removeToken }
  },
  {
    persist: {
      // ! 注意这里的key是当前这个Pinia模块进行缓存时的唯一key, 每个需要缓存的Pinia模块都必须分配一个唯一key
      key: StorageSceneKey.USER,
      // pinia-plugin-persistedstate 插件的默认持久化方案只支持web端，在Taro里使用需要自定义进行覆盖
      storage: piniaStorage,
    },
  },
)
