<script setup lang="ts">
const count = ref(0)
const appStore = useAppStore()
console.log('cc')
</script>

<template>
	<div class="h-screen flex flex-col items-center justify-center">
		<HelloWorld msg="Vite + Vue" v-model:count="count" />
		<p>store count: {{ appStore.count }}</p>
	</div>
</template>

<style scoped></style>
