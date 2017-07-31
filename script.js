function add(items) {
  const sum = items.reduce((total, amount) => total + amount);
  // console.log(sum);
  return sum;
}

// Returns random number between 1 and 100
function randomNumber() {
  const number = Math.floor(Math.random() * 100 + 1);
  return number;
}

class Fighter {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.power = []
  }
  wasHit() {
    this.health -= 40;
    if (this.health <= 0) {
      console.log(`${this.name} is dead ☠️`);
    } else {
      console.log(`Ouch ${this.name} got hit 🔪 ${this.health}hp left 😵`);
    }
    return this.health;
  }
  powerUp(powerType) {
    this.power.push(powerType);
    return this.power;
  }
  info() {
    if (this.health <= 0) {
      console.log(`${this.name} is dead but here is his stats: ${add(this.power)} power points 💫 and has ${this.health}hp ⛑`);
    } else {
      console.log(`${this.name} has ${add(this.power)} power points 💫 and has ${this.health}hp ⛑`);
    }
  }
  win() {
    if (this.health <= 0) {
      console.log(`${this.name.toUpperCase()} is dead... RIP ${this.name} ⚰️`);
    } else {
      console.log(`${this.name.toUpperCase()} is a survivor 🏆 With ${add(this.power)} power points 💫 and ${this.health}hp the true warrior is ${this.name} 🎉`);
    }
  }
}

class Wizard extends Fighter {
  constructor(name, type) {
    super(name);
    this.type = type;
    this.staff = '';
  }
  equipStaff() {
    this.staff = 'Great Staff';
    console.log(`${this.name} has a mighty staff!! ⚡️`);
    return this.staff;
  }
}

const ozen = new Fighter('Ozen');
const chanzin = new Wizard('Chanzin', 'Mage');
chanzin.equipStaff();
ozen.powerUp(randomNumber());
chanzin.powerUp(432);
chanzin.powerUp(112);
ozen.powerUp(43);
ozen.wasHit();
ozen.info();
ozen.wasHit();
chanzin.wasHit();
ozen.wasHit();
ozen.wasHit();
chanzin.info();
ozen.info();
ozen.win();
chanzin.win();

const fighterText = `
  <h3>The First Viking</h3>
`;

const fighterElement = document.getElementById('viking1');

fighterElement.innerHTML = fighterText;
console.log(fighterElement);
