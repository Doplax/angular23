interface Passenger {
    name: string;
    children?: string[];

}


const passenger1: Passenger = {
    name: 'Fernando',
}

const passenger2: Passenger = {
    name: 'Melisa',
    children: ['Natalia', 'Elisabeth']
}

const printChildren = ( passenger: Passenger):number => {

    const howManyChildren = passenger.children?.length || 0; // Si la propiedad no viene, se asignará un 0
    console.log(howManyChildren);

    return howManyChildren 
}


printChildren(passenger2);