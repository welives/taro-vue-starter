<template>
  <view class="flex flex-col items-center justify-center gap-2 h-full">
    <button type="primary" @tap="login">Go Home</button>
  </view>
</template>

<script setup>
import { request } from '@/api'
import { useUserStore } from '@/stores'
import router from '@/routes'
import './index.scss'
const { setToken } = useUserStore()
const login = async () => {
  const res = await request('/api/login', {
    method: 'POST',
  })
  setToken(res.data)
  router.switchTab({ url: '/pages/home/index' })
}
</script>
