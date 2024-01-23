console.log("Vue ok", Vue)

const {createApp} = Vue;

const app = createApp({
    name:"Vue tasks list",
    data: () => ({
        tasks,
        newTaskText:"",
    }),

    computed: {
      
    },

    methods: {
      removeTask(id){
        this.tasks = this.tasks.filter(task => id !== task.id);
      },
      addTask(){
        const newTask = {
            id: new Date().toISOString(),
            done:false,
            text:this.newTaskText
        }
        this.tasks.push(newTask);

        this.newTaskText = "";
      }
    }

});

app.mount('#root');