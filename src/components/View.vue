<script setup lang='ts'>
defineProps<{
  element: string
  ariaLabel?: string
  isDisabled?: boolean
}>()
</script>

<template>
  <component :is=" element " :ariaLabel=" ariaLabel " :disabled=" isDisabled ">
    <slot> </slot>
  </component>
</template>