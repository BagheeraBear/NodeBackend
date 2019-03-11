// Arrow functions

// A normal function
// const square = function(x){
//   return x * x
// }

// An Arrow function
// const square = (x) => x * x
// console.log(square(3));

// Objektmetoder!
const event = {
    name: "Wedding",
    guestList: ["Uffe", "Mari, Thompa"],
    printGuestList: function (){
        console.log("Guestlist for " + this.name);

        this.guestList.forEach(function (guest) {
            console.log(guest + " is attending " + this.name)
        })
    }
}

event.printGuestList()


