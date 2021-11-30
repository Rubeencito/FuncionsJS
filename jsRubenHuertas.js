//EX13

var valor = (numero1,numero2) => {

    if (numero1!=null && numero2==null)
        return numero1
    else if (numero1==null && numero2!=null)
        return numero2
    else if (numero1!=null && numero2!=null)
        return [numero1, numero2]
}   
    console.log(valor(40,null))



    

