/// <reference path="../../Scripts/jquery.d.ts" />


class Animal {
    constructor(private name: string) { }

    get sound() { return "Bark"; }

}


var a = new Animal("Dog");

class SuperAnimal extends Animal {
    constructor(name: string) {
        super(name);
    }

}

//a.name = "Cat";


//interface IFoo {
//    bar(): number;
//}

//var foo: IFoo;


//module demo.stuff {

//    function f1() { };

//    export function f2() { };
//}


//module demo {

//    export function more() { }

//}





//var setting: JQueryAjaxSettings = {};

//setting.url="http://...";
//setting.cache = false;
//$.ajax(setting);


//function add(...numbers: any[]) {
//}


//[].forEach(function () { });

//add(1, 2);

//add(1, "");
