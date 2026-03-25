function LinkedList(){// FOACTORY FUNCTION...
    let obj = {};
    let strOut = ``;
    let Tail;
    let desierNode;

    const append = (value)=>{
        if(Object.keys(obj).length === 0){
            obj = {value, next:null};
            Tail = obj;
        }
        else{
            trev(obj)
            function trev(ob){
                Object.entries(ob).forEach(([key, val])=>{
                    if(val === null){
                        ob.next = {value, next:null};
                        Tail = ob.next;
                    } 
                    else if(typeof val==='object'&& val != null)
                        trev(val)
                });
            }
        }
    }

    function toString(){
        strOut = ``;
        return String();
    }
        function String(ob = obj){

            if(Object.keys(ob).length === 0)
                return null;
            else
                Object.entries(ob).forEach(([key,val])=>{
                    if(typeof val === 'object' && val != null && !Array.isArray(ob))
                        String(val);
                    else{
                        if(val === null){
                            strOut+=`${null}`;
                            return strOut;
                        }
                        else
                            strOut+=`(${val}) -> `;
                    }         
                })
            return strOut;
            }

    function prepend(value){
        if(Object.values(obj).length < 1)
            obj = {value, next:null};
        else{
            let temp = {value, next:obj};
            obj = temp;
        }
    }

    function size(obje = obj){
        let count =1;
        trev(obje);

      function trev(object){
        Object.values(object).forEach(value =>{
            if(typeof value === 'object' && value != null){
                ++count;
                trev(value);
            }
            if(value === null)
                return;  
        });
      }
      return count;
    }

    function head(){
        if(Object.values(obj).length < 1)
            return;
        return obj;
    }

    function tail(){
        return Tail;
    }

    function at(index){
        if(index === size())
            return tail();
        else if(index === 1)
            return head();
        else{
             treves(obj,index-1);
             return desierNode;
        }
    }
    
    function treves(object, num){
       
        if(num < 1){
            desierNode = object;
            return;
        }
        
        Object.values(object).forEach(value => {
            if((typeof value === 'object' && value != null && !Array.isArray(value)) && num>0){
                 treves(value, num-1);
            }
        });
       } 
     
    function pop(){

        if(Object.values(obj).length < 1)
            return;
        let temp = at(1);
        obj = at(2);
        temp.next = null;
        return temp;
    }

    function contains(value){
        return compare();

        function compare(object=obj){
            for(let val of Object.values(object)){
                if(val === value)
                    return true;
                else if(val === null)
                    return false;
                else if(typeof val === 'object' && val != null && !Array.isArray(val))
                    return compare(val);
            }
        }
    }

    function findIndex(value){
        let count =0;
        if(!contains(value))
             return -1;
        else
            return trev();

        function trev(object = obj){
            ++count;
            for(let val of Object.values(object)){
                if(val === value)
                    return count;
                else if(typeof val === 'object'&& val != null&& !Array.isArray(val))
                   return trev(val);
            }
        }   
    }
    return {append, toString, prepend, size, head, tail, at, pop, contains, findIndex};
}

export{LinkedList};