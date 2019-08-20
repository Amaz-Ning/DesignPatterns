// 在JavaScript中并没有【类】的概念(es6之前， 在es6中加入了class)，所以我们要实现类 就必须要通过原生实现。
// 我理解的类的概念就是--一类东西。他们可能有相同地方也有不相同的地方，我们可以说【人】就是一个类，我们大家都有四肢，大脑，眼睛鼻子，但是我们的长相、性别却是不尽相同。
// 如果用代码来说的话：

// people1 和 people2 都是人类，但是他们的年龄和性别都不一样
let people1 = {
    age: 28,
    sex: 'man'
}
let people2 = {
    age: 20,
    sex: 'woman'
}

// 那如果我们想创造出多个这一类的东西，我们难道要一直生成以上的那种变量吗？ 显然是不行的，这样的代码很臃肿，很low，这个时候 构造器模式就能派上用场了。
// 首先 我们要有一个制造【人】的机器(当然现实生活中是不会有这种机器的)：
function Person(age, sex) {
    this.age = age
    this.sex = sex
}

// 之后我们可以运行这个机器，创建一个它的实例：
let people3 = new Person(50, 'man')
// 这里说一下new的机制： 1.创建一个空对象: people3 = {}； 2.在空对象中添加一个__proto__属性，指向Person的prototype: people3.__proto__ = Person.prototype；3.将this指向刚创建出的对象，并运行
// Person: Person.call(people3, age, sex); 4. return出这个对象

// 这样我们就不用一次次地去声明对象，只需要new一下这个'机器就可以了'，明天或者一会我会再写下每个人都会有的【行为】会怎么体现在这，以及原型链的知识