<template>
  <view class="flex flex-col items-center justify-center gap-2 h-full">
    <button type="primary" @tap="login">Go Home</button>
  </view>
</template>

<script setup>
import Taro from '@tarojs/taro'
import { request } from '@/api'
import { useUserStore } from '@/stores'
import './index.scss'
const { setToken } = useUserStore()
const login = async () => {
  const res = await request('https://mock.mengxuegu.com/mock/64f5ddc4e70b8004a69e9c4c/expo-starter/login', {
    method: 'POST',
  })
  setToken(res.data)
  Taro.switchTab({ url: 'pages/home/index' })
}
</script>
