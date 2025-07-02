const user = {
    Slava: {
        Name: 'Slava',
        Age: 200,
        Height: 200,
        Weight: 200,
        SayHello(name) {
            console.log(`Hello ${name}`)
        } 
    }
}

user.Slava.SayHello('Slava')


const users = [
    {
        Name: 'Slava',
        Age: 200,
        Height: 200,
        Weight: 200,
        IsAdmin: true,
    },
    {
        Name: 'Tom',
        Age: 200,
        Height: 200,
        Weight: 200,
        IsAdmin: false,
    },
    {
        Name: 'John',
        Age: 200,
        Height: 200,
        Weight: 200,
        IsAdmin: false,
    },
    {
        Name: 'Tim',
        Age: 200,
        Height: 200,
        Weight: 200,
        IsAdmin: false,
    },
]

users.push({
    Name: 'ivan',
    Age: 200,
    Height: 200,
    Weight: 200,
    IsAdmin: false,
})
let simpleUser = 0;

for(let i = 0; i < users.length; i++) {
    if(users[i].IsAdmin !== true) {
        simpleUser++;
    }
}

console.log(`Количество простых пользователей: ${simpleUser}`)