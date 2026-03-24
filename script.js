function List(){// FOACTORY FUNCTION...
    let obj = {};
    let strOut = ``;
    let Tail;

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
console.log('after append fun -> ',obj)
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
        else
            return treves(obj,index-1);
    }

    function treves(object, num){
        if(num < 1)
            return object;

        Object.values(object).forEach(value => {
            if((typeof value === 'object' && value != null && !Array.isArray(value)) && num>0)
                return treves(value, num);
        });
        

    }
    return {append, toString, prepend, size, head, tail, at};
}

const list = List();
list.append('one');
list.append('two');
list.append('three');
list.append('four');
list.prepend('beta')
list.prepend('alpha');

console.log(`"${list.toString()}"`);
console.log('number of nodes in this list: ', list.size());
list.append('six')
console.log(list.toString());
console.log(list.size());
list.prepend('first')
console.log(list.toString())
console.log(list.size())
console.log('head ->',list.head())
console.log('Tail ->',list.tail())
console.log('node at 1->',list.at(1));
console.log('node at 2->',list.at(2));
console.log('node at last index->',list.at(list.size()));


