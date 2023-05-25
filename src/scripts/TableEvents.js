class TableEvents {

    static parseTableObject(data, tableConfig){
        
        const accessors = tableConfig.map((item) => {return item.accessor});
    
        const someObjs = data.map((item) => {
    
            const obj = {};
    
            accessors.forEach(key => {
                if (item.hasOwnProperty(key)){
                    obj[key] = item[key];
                }
            });
    
            return obj;
        })
    
        
    
        return someObjs;
    }
    
    static getHeaders(tableConfig){

        const headers = tableConfig.map((item) => {return item.header});
    
        return headers
    }
    
    static getAccessors(tableConfig){
        const accessors = tableConfig.map((item) => {return item.accessor});
    
        return accessors
    }
    
    static getData(data, specificKey){
        
        const holder = data.map((item) => {
            return item[specificKey]
        })
    
        return holder;
    }
    
}


export default TableEvents;