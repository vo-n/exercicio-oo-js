function Weapons(name, category, credits) {
  this.name = name;
  this.category = category;
  this.credits = credits;
}

function Pistol(name, cost) {
  Weapons.call(this, name, "Pistol", cost)
}

function SMG(name, cost) {
  Weapons.call(this, name, "SMG", cost)
}

function Shotgun(name, cost) {
  Weapons.call(this, name, "Shotguns", cost)
}

function Rifle(name, cost) {
  Weapons.call(this, name, "Rifle", cost)
}

function SniperRifle(name, cost) {
  Weapons.call(this, name, "Sniper Rifle", cost)
}

function MachineGun(name, cost) {
  Weapons.call(this, name, "Machine Gun", cost)
}

const classic = new Pistol("Classic", 0);
const sheriff = new Pistol("Sheriff", 800);
const stinger = new SMG("Stinger", 1100);
const judge = new Shotgun("Judge", 1850);
const vandal = new Rifle("Vandal", 2900);
const operator = new SniperRifle("Operator", 4700);
const odin = new MachineGun("Odin", 3200);


console.log(classic);
console.log(sheriff);
console.log(stinger);
console.log(judge);
console.log(vandal);
console.log(operator);
console.log(odin);