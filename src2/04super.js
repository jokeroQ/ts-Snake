"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('动物叫');
        }
    }
    class Dog extends Animal {
        //如果在子类中写了构造函数，在子类的构造函数中必须对父类的构造函数调用
        constructor(name, age) {
            super(name);
            this.age = age;
        }
        sayHello() {
            //在类的方法中super就表示当前类的父类
            super.sayHello();
        }
    }
    const dog = new Dog('旺财', 3);
    dog.sayHello();
})();
