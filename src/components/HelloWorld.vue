<script setup lang="ts">
defineProps<{ msg: string }>()

const count = defineModel<number>('count', { required: true })
</script>

<template>
	<div class="text-center">
		<h1 class="mb-4">{{ msg }}</h1>
		<button class="btn-primary" type="button" @click="count++">count: {{ count }}</button>
		<button class="btn-success" type="button" @click="count++">count: {{ count }}</button>
		<button class="btn-gray" type="button" @click="count++">count: {{ count }}</button>
	</div>
</template>

<style lang="scss"></style>
