"use strict";
(function () {
    //定义一个Animal类
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('动物叫');
        }
    }
    /**
     * Dog extends Animal
     * 此时，Animal被称为父类，Dog称为子类
     * 使用继承后，子类会拥有父类所有的方法和属性
     * 通过继承可以将多个类中共有的代码写在一个父类中
     * 这样只需写一次即可让所有子类都同时拥有父类的属性和方法
     * 如果希望在子类中添加一些父类中没有的属性或者方法直接添加
     * 如果在子类中添加了和父类相同的方法，则子类方法会覆盖掉父类的方法
     * 这种子类覆盖掉父类方法的形式，我们称为方法重写
     */
    //定义一个表示狗的类
    //使dog类继承Animal类
    class Dog extends Animal {
        run() {
            console.log(`${this.name}在跑~~`);
        }
        sayHello() {
            console.log('www');
        }
    }
    //表示猫的类
    class Cat extends Animal {
        sayHello() {
            console.log('mmm');
        }
    }
    const dog = new Dog('旺财', 5);
    const cat = new Cat('咪咪', 3);
    console.log(dog);
    dog.sayHello();
    dog.run();
    console.log(cat);
    cat.sayHello();
})();
