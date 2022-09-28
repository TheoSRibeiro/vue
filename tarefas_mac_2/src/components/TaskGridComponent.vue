<template>
    <div class="task-grid-component">
        <template v-if="tasks.length">
            <TaskComponent v-for="(task,i) in tasks" :key="task.name"
                @taskStateChanged="$emit('taskStateChanged',i)"
                @taskDeleted="$emit('taskDeleted',i)"
                :task="task">                
            </TaskComponent>
        </template>
        <p v-else class="no-task">Sua vida está em dia!! :)</p>
    </div>
</template>

<script>
import TaskComponent from './TaskComponent.vue'

export default{
    components:{TaskComponent},
    props:{
        tasks: {type: Array, required: true}
    }
}
</script>

<style scoped>
    .task-grid-component{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .task-grid-component .task-component{
        margin: 10px;
    }

    .no-task{
        color: #AAA;
        font-size: 1.7rem;
    }
</style>