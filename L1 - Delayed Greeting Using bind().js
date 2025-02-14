function greet() {
    console.log(`Hello, ${this.name}`)
}

function setTimeoutGreeting(person) {
    setTimeout(greet.bind(person), 1000)
}

const user = { name: "Alice" }

setTimeoutGreeting(user)
