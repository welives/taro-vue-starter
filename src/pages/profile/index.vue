<script setup lang="ts">
import { useCounterStore } from '@/stores'
import { useAuth } from '@/hooks'
import './index.scss'

useAuth()
const counter = useCounterStore()
</script>

<template>
  <view class="flex flex-1 flex-wrap flex-col items-center justify-center gap-4 h-full">
    <text>Profile Page</text>
    <view class="text-center">
      <button @tap="counter.decrement">
        Dec
      </button>
      <text>{{ counter.count }}</text>
      <button @tap="counter.increment">
        Inc
      </button>
    </view>
  </view>
</template>
