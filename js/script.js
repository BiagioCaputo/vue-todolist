console.log("Vue ok", Vue)

const {createApp} = Vue;

const app = createApp({
    name:"Vue tasks list",
    data: () => ({
        tasks,
    }),

    computed: {
      
    },

    methods: {
      removeTask(id){
        this.tasks = this.tasks.filter(task => id !== task.id);
      }
    }

});

app.mount('#root');