<script setup lang="ts">
const count = ref(0)
</script>

<template>
	<div class="h-full flex-center">
		<HelloWorld msg="Vite + Vue" v-model:count="count" />
	</div>
</template>

<style scoped></style>
