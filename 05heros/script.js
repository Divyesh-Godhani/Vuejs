Vue.createApp({
    data(){
        return{
            heroselect: "",
            avangerselect:[],
            myDynamic: "",
            myBonds: [{
                text:'james bond',value:7
            },{
                text:'jammy bond',value:7
            },{
                text:'velry bond',value:7
            }]
        }
    }
}).mount("#vapp");