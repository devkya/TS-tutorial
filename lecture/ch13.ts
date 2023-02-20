// public & private & protected & static
class User2 {
    public name :string; // public keyword는 생략 가능함
    private sex :string;
    constructor(name :string) {
        this.name = name
        this.sex = 'male';
    }
    changeSex() {
        this.sex = 'female'
    }
}

let user1 = new User2('Park')
user1.name
user1.changeSex()
console.log(user1)

