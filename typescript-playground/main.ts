
class Test {

    constructor(public antwort: number) {
        console.log('Hallo nach Münster, Karlsruhe und München! 😊👋', this.antwort);
    }
}


const test = new Test(42);
console.log(test.antwort);