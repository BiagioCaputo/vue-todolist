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

        //funzione per rimuovere una task 
        removeTask(id){
        this.tasks = this.tasks.filter(task => id !== task.id);
        },

        //funzione per aggiungere una task inserita dall'utente
        addTask(){
        const newTask = {
            id: new Date().toISOString(),
            done:false,
            text:this.newTaskText
        }
        this.tasks.push(newTask);

        this.newTaskText = "";
        },
        
        //funzione che setta tutti i valori done ad un valore "value"
        setAllAs(value){
            this.tasks.forEach(task =>{
                task.done = value;
            })
        },
        
        //funzione per svuotare tasks
        clearAll(){
            this.tasks = [];
        }

        
    }

});

app.mount('#root');