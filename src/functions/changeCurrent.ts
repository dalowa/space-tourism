interface ChangeCurrent {
    (current:string, list: string[], setCurrent:any, select?:boolean, sum?:boolean):void
}

const changeCurrent:ChangeCurrent = (current, list, setCurrent, select=true, sum) => {
    let newCurrent;
    if(select){
        list.forEach((e, i) => e === current?newCurrent=i:false)
        return setCurrent(newCurrent)
    }else if(!select){
        const  theindex = list.findIndex((e)=>e==current)
        
        if(sum){
          
          if(theindex<list.length-1){
            return setCurrent(theindex+1)
          }
          
        }
        if(!sum){
            if(theindex > 0){
              setCurrent(theindex-1)
            }
          }
    }
    
}


export default changeCurrent