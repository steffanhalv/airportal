<template>
    <input v-if="typeof value !== 'object'" v-model="value" :placeholder="placeholder">
    <input v-else readonly :value="JSON.stringify(value)" :placeholder="placeholder">
</template>

<script>
export default {
    props: ['modelValue', 'placeholder'],
    data: () => ({
        value: ''
    }),
    created() {
        this.value = this.modelValue
    },
    watch: {
        modelValue(value) {
            if (value !== this.value) this.value = value
        },
        value(value) {
            this.$emit('update:modelValue', value)
        }
    }
}
</script>

<style scoped></style>