<script setup lang="ts">
import { request } from '@/api'
import { useAuthStore, useUserStore } from '@/stores'
import router from '@/router'

const setToken = useUserStore().setToken
const auth = useAuthStore()
async function login() {
  const res = await request('/api/login', { method: 'post' })
  setToken(res.data)
  if (auth.redirect?.url) {
    const success = () => {
      auth.clear()
    }
    auth.redirect.tab
      ? router.switchTab({
        url: auth.redirect.url,
        success,
      })
      : router.redirectTo({
        url: auth.redirect.url,
        success,
      })
  }
  else {
    router.switchTab({ url: '/pages/home/index' })
  }
}
</script>

<template>
  <view class="flex flex-col items-center justify-center gap-2 h-full">
    <button @tap="login">
      Go Home
    </button>
  </view>
</template>
