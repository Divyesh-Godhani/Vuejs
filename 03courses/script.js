console.log("divyesh godhani");

const App = {
    data(){
        return{
            courselist : [ {
                id: "lco1",
                courseName: "Django Full stack",
                subtitle: "Learn Django with postgres",
                price: "199",
                coureseimage:"django.jpg",
                url: ""

            }, {
                id: "lco2",
                courseName: "interview preparation",
                subtitle: " Crack the faang interview",
                price: "299",
                coureseimage:"interview.jpg",
                url: ""
            }, {
                id: "lco3",
                courseName: "React Native",
                subtitle: "build mobile",
                price: "1599",
                coureseimage:"reactnative.jpg",
                url: ""
            }]
        }
    }
}
Vue.createApp(App).mount("#vapp");