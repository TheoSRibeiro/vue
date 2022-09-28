<template>
    <div class="tasks-progress">
        <span class="progess-value">{{progress}}%</span>
        <div class="progress-bar" :style="{width: progress + '%'}"></div>
    </div>
    
</template>

<script>
export default {
    props:{
        progess:{type: Number, default: 0}
    }
}
</script>

<style scoped>

</style>