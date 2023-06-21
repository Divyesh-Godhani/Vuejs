console.log("Divyesh Godhani");

const App = {
    data(){
        return{
            heading : "A trip to japan",
            subhead : "Nature park in Japan",
            myimg: "japan.jpg"
        }
    }

}
Vue.createApp(App).mount(".vapp");