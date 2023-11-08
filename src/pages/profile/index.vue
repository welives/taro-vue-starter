<template>
  <view class="flex flex-1 flex-wrap flex-col items-center justify-center gap-4 h-full">
    <text>Profile Page</text>
    <view class="text-center">
      <button type="warn" @tap="counter.decrement">Dec</button>
      <text>{{ counter.count }}</text>
      <button type="primary" @tap="counter.increment">Inc</button>
    </view>
  </view>
</template>

<script setup>
import { useCounterStore } from '@/stores'
import './index.scss'
const counter = useCounterStore()
</script>
