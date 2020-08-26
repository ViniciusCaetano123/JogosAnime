function formatarDataBR(dados){    
    for(let d of dados){
        let dat = d.dataCad
        dat = dat.substring(0,10).split('-') 
        dat = dat[2]+'/'+dat[1]+'/'+dat[0]
        d.dataCad = dat
    }
    return dados
}

module.exports ={
    formatarDataBR
}