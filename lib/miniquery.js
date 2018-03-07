let SweetSelector = {
    select :function(value) {
        let data = document.querySelector(value)
        console.log(data)
    }
}

let DOM = {
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
    
}

SweetSelector.select('#eyed')
SweetSelector.select('.klass')
SweetSelector.select('a')
DOM.hide('.klass')
DOM.show('.klass')
DOM.addClass('.klass','shadi')
DOM.removeClass('.klass','shadi')