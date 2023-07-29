function addNumers( a:number , b: number) {
    return a+b;
}

const addNumbersArrow = (a:number, b:number):string => {
    return `${a + b}`;
}


// Para hacer los parametros opcionales podemos usar ?
function multiply( firstNumber:number, secondNumber?:number, base:number = 2) {
    return firstNumber + base;
}


const multiplyResult: number = multiply(5);

const result: string = addNumers(2,2).toString()


interface Character {
    name: string;
    hp:number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount:number) => {
    character.hp += amount;
}

const strider2: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`puntos de vida ${this.hp}`);
    },
    skills: [],
    hometown: ""
}


healCharacter( strider, 10);
healCharacter( strider, 50)

strider.showHp()



