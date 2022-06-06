const app = Vue.createApp({
  
    methods: {
        leftClick() {
            alert('left click is clicked')
        },
        rightClick() {
            alert('right click is clicked')
        },
        keymonitor: function(event) {
            console.log(event.key)
        },
    },
})

app.mount('#app')