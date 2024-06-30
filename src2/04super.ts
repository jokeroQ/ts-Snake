(function () {
    class Animal {
        name: string;
        constructor(name: string) {
            this.name = name
        }
        sayHello() {
            console.log('动物叫')
        }
    }
    class Dog extends Animal {
        age: number;
        //如果在子类中写了构造函数，在子类的构造函数中必须对父类的构造函数调用
        constructor(name: string, age: number) {
            super(name);
            this.age = age
        }
        sayHello() {
            //在类的方法中super就表示当前类的父类
            super.sayHello()
        }
    }
    const dog = new Dog('旺财',3)
    dog.sayHello()
})();