// 建造者模式
// 在构造器模式中， 我们只关心最后产出的是一个什么对象，而建造者模式， 我们更关注的是细节。

// 假如我们都是学生，学校中有一个奇葩而又充满爱意的规定： 男生的头发长度不能超过2厘米，女生的头发长度不能超过25厘米
// 那么首先 我们得需要一个学生
function Student() {}
// 接下来我们就需要一个建造者，来建造出符合规定的学生, 这里就用es6的语法吧 es5的语法太啰嗦了。。
class Builder {
    // 构造器
    // 我们的学生需要三个属性： 名字name 性别gender 头发的长度hairLength
    constructor(name, gender, hairLength) {
        // 我们需要先将这个学生的肉体创造出来
        // 这里为什么还要new一个对象出来呢？ 我们直接定义一个对象不好吗？
        // 肯定是不好的，因为学生这个类可能有他特有的行为 类似于吃饭唱歌这种，如果我们直接定义一个空对象，那么这个学生就是一个假人了（无法继承原有的行为）
        this.student = new Student()
        // 这里先给一个默认的样子 之后我们再处理
        this.student.name = name
        this.student.gender = gender
        this.student.hairLength = hairLength
    }
    // 我们需要一个方法 去设定这个学生的姓名
    setName(name) {
        this.student.name = name
    }
    // 我们也需要一个方法 去设定这个学生的性别
    setGender(gender) {
        // 这里需要控制学生的性别 除了男就是女 如果是不男不女的 就throw一个错误
        this.student.gender = gender
    }
    // 我们还需要一个方法 去设定这个学生的头发长度
    setHairLenght(hairLength) {
        // 这里需要控制学生头发的长度 如果男生超过2厘米 女生超过25厘米 就throw一个错误
        this.student.hairLength = hairLength
    }
    // 最后我们需要一个方法 去产出我们创造好的学生
    build() {
        return this.student
    }
}

// 这里我们 先实例化创建者 创造出一个学生的肉体
let builder = new Builder()
// 我们给这个学生起一个名字
builder.setName('张三')
// 确定这个学生的性别
builder.setGender('男')
// 确定这个学生头发的长度
builder.setHairLenght('25')
// 之后产出这个学生
let studentA = builder.build()
console.log(studentA)