// const barker = state => ({
//     bark: () => console.log(`Woof, I am ${state.name}`)
// });

// const driver = state => ({
//     drive: () => state.position = state.position + state.speeed
// });

// barker({ name: 'Karo' }).bark();

// const murderRobotDog = name => {
//     let state = {
//         name,
//         speed: 100,
//         position: 0
//     }
//     return Object.assign(
//         {},
//         barker(state),
//         driver(state)
//     )
// }

// murderRobotDog('sniffles').bark();
// ---------------------------------------------
// function Dog (name, energy, breed) {
//     let dog = {
//         name,
//         energy,
//         breed
//     }

//     return Object.assign(
//         dog,
//         eater(dog),
//         sleeper(dog),
//         player(dog),
//         barker(dog)
//     )
// }

// const leo = Dog('Leo', 10, 'Goldendoodle');
// leo.eat(10);
// leo.bark();