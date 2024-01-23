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
      
    }

});

app.mount('#root');