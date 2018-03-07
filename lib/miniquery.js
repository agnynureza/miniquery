// let SweetSelector = {
//     select :function(value) {
//         let data = document.querySelector(value)
//         console.log(data)
//     }
// }

// let DOM = {
//     hide : function (value) {
//         return document.querySelector(value).style.visibility = "hidden"  
//     },
//     show : function(value){
//         return document.querySelector(value).style.display = "visible"  
//     },
//     addClass : function(value,add){
//         let data = document.querySelector(value)
//         return data.classList.add(add)
//     },
//     removeClass : function(value,remove){
//         let data = document.querySelector(value)
//         return data.classList.remove(remove)
//     }   
// }

// let EventDispatcher = {
//     on : function(input,event,callback){
//         return document.querySelector(input).addEventListener(event,callback)
//     },
//     trigger : function(input,event){
//         EventDispatcher.on(input,event,function(){console.log("awesome")})
//     }
// }

// let ajaxWrapper = {
//     request : function(obj){
//         let oreq = new XMLHttpRequest()
//         oreq.open(obj.type,obj.url)
//         oreq.addEventListener('load',obj.success)
//         oreq.addEventListener('error',obj.fail)
//         oreq.send() 
//     }
// }

const miniquery = {
    SweetSelector : {
        select :function(value) {
            let data = document.querySelector(value)
            console.log(data)
        }
    },
    DOM : {
        hide : function (value) {
            return document.querySelector(value).style.visibility = "hidden"  
        },
        show : function(value){
            return document.querySelector(value).style.display = "visible"  
        },
        addClass : function(value,add){
            let data = document.querySelector(value)
            return data.classList.add(add)
        },
        removeClass : function(value,remove){
            let data = document.querySelector(value)
            return data.classList.remove(remove)
        }   
    },
    EventDispatcher : {
        on : function(input,event,callback){
            return document.querySelector(input).addEventListener(event,callback)
        },
        trigger : function(input,event){
            EventDispatcher.on(input,event,function(){console.log("awesome")})
        }
    },
    ajaxWrapper : {
        request : function(obj){
            let oreq = new XMLHttpRequest()
            oreq.open(obj.type,obj.url)
            oreq.addEventListener('load',obj.success)
            oreq.addEventListener('error',obj.fail)
            oreq.send() 
        }
    }
}

miniquery.SweetSelector.select('#eyed')
miniquery.SweetSelector.select('.klass')
miniquery.SweetSelector.select('a')
// miniquery.DOM.hide('.klass')
miniquery.DOM.show('.klass')
miniquery.DOM.addClass('.klass','shadi')
miniquery.DOM.removeClass('.klass','shadi')
miniquery.EventDispatcher.on('.klass','click',function(){console.log("awesome")})
miniquery.EventDispatcher.trigger('.klass','click')

miniquery.ajaxWrapper.request({
    url:'https:dog.ceo/api/breeds/list/all',
    type:'GET',
    success: function(data){
        console.log(data)
    },
    fail:function(){
        console.log(error)
    }
})