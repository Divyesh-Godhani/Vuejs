console.log("divyesh godhani");

const App = {
    data(){
        return{
            holdMyItem:[],
            courselist : [ {
                id: "lco1",
                courseName: "Django Full stack",
                subtitle: "Learn Django with postgres",
                price: 199,
                coureseimage:"django.jpg",
                url: ""

            }, {
                id: "lco2",
                courseName: "interview preparation",
                subtitle: " Crack the faang interview",
                price: 299,
                coureseimage:"interview.jpg",
                url: ""
            }, {
                id: "lco3",
                courseName: "React Native",
                subtitle: "build mobile",
                price: 1599,
                coureseimage:"reactnative.jpg",
                url: ""
            }]
        }
    },
    computed:{
        finalBill(){
            return this.holdMyItem.reduce((accumulator,course) => Number(course.price) + accumulator, 0)
        }
    },
    methods:{
        addToHolder(course){
            this.holdMyItem.push(course)
        }
    }
}
Vue.createApp(App).mount("#vapp");