<template>
  <div id="app">
    <h1>Tarefas</h1>
    <TaskGridComponent :tasks="tasks"
                       @tasksDeleted="deleteTask"
                       @taskStateChanged="toggleTaskState"
    />
    <NewTaskComponent @taskAdded="addTask"/>
    <TasksProgessComponent :progess="progess" />

  </div>
</template>

<script>
import TaskGridComponent from './components/TaskGridComponent.vue';
import NewTaskComponent from './components/NewTaskComponent.vue';
import TasksProgessComponent from './components/TasksProgessComponent.vue';

export default {
    components: {TaskGridComponent, NewTaskComponent, TasksProgessComponent},
    data(){
      return {
        tasks: []
      }
    },
    methods: {
        addTask(task){
          const sameName = t => t.name === task.name
          const reallyNew = this.tasks.filter(sameName).length === 0
          if(reallyNew){
              this.taks.push({
                name: task.name,
                pending: task.pending || true
              })
          }
        },
        deleteTask(i){
          this.tasks.splice(i, 1)
        },
        toggleTaskState(i){
          this.task[i].pending = !this.task[i].pending
        }

    },
    computed: {
      progress(){
          const total = this.tasks.length
          const done = this.tasks.filter(t => !t.pending).length
          return Math.round(done / total * 100) || 0
      },
    }
};
</script>
