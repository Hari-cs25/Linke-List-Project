function List(){// FOACTORY FUNCTION...
    let obj = {};
    let strOut = ``;
    
    const append = (value)=>{
//console.log('append fun runs..,befor append fun-> ', obj);
        if(Object.keys(obj).length === 0){
//console.log('object empty condition...');
            obj = {value, next:null};
//console.log('after object empty condition runss obj value is-> ', obj);
        }
        else{
            trev(obj)
            function trev(ob){
//console.log('treversel fun runss...');
                Object.entries(ob).forEach(([key, val])=>{
                   // console.log('trevesel fun Key value ->', key);
                    if(val === null)
                        ob.next = {value, next:null}; 
                    else if(typeof val==='object'&& val != null)
                        trev(val)
                });
            }
        }
console.log('after append fun -> ',obj)
    }

    function toString(ob = obj){

        if(Object.keys(ob).length === 0)
            return null;
        else
            Object.entries(ob).forEach(([key,val])=>{
                if(typeof val === 'object' && val != null && !Array.isArray(ob))
                    toString(val);
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
    return {append, toString, prepend};
}

const list = List();
list.append('one');
list.append('two');
list.append('three');
list.append('four');
list.prepend('beta')
list.prepend('alpha');

console.log(`"${list.toString()}"`);
