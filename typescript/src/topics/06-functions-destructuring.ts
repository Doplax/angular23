

(() => {
 //Interfaces
interface Product {
    description: string;
    price: number;
}

interface TaxtCalculationOptions {
    products: Product[];
    tax: number;
    
}

// Consts

const phone: Product = {
    description: "Nokia",
    price: 150,
}

const tablet: Product = {
    description: "Ipad",
    price: 150,
}

const shoppingCart = [phone, tablet]


//Functions 

//function taxCalculation ( options: TaxtCalculationOptions):number[] {
//function taxCalculation ( {tax, products}: TaxtCalculationOptions):number[] { // Desestructuracion en los parametros
function taxCalculation ( options: TaxtCalculationOptions):number[] {
    const {tax, products} = options

    let total = 0;



    //options.products.forEach( product => { 
    products.forEach( ({price}) => { // Lo mismo que arriba pero desestructurando
        total += price
    })

    return [total, total * tax]
}



// Desestructuramos el resultado
const [total, totalTax] = taxCalculation({
    products: shoppingCart,
    tax:15
})


  })();
  