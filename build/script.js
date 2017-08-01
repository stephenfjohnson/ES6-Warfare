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
    this.health -= randomNumber();
    if (this.health <= 0) {
      console.log(`${this.name} is dead ☠️`);
      return `${this.name} is dead ☠️`;
    } else {
      console.log(`Ouch ${this.name} got hit 🔪 ${this.health}hp left 😵`);
      return `Ouch ${this.name} got hit 🔪 ${this.health}hp left 😵` ;
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
      return `${this.name} is dead but here is his stats: ${add(this.power)} power points 💫 and has ${this.health}hp ⛑`;
    } else {
      console.log(`${this.name} has ${add(this.power)} power points 💫 and has ${this.health}hp ⛑`);
      return `${this.name} has ${add(this.power)} power points 💫 and has ${this.health}hp ⛑`;
    }
  }
  win() {
    if (this.health <= 0) {
      console.log(`${this.name.toUpperCase()} is dead... RIP ${this.name} ⚰️`);
      return `${this.name.toUpperCase()} is dead... RIP ${this.name} ⚰️`;
    } else {
      console.log(`${this.name.toUpperCase()} is a survivor 🏆 With ${add(this.power)} power points 💫 and ${this.health}hp the true warrior is ${this.name} 🎉`);
      return `${this.name.toUpperCase()} is a survivor 🏆 With ${add(this.power)} power points 💫 and ${this.health}hp the true warrior is ${this.name} 🎉`;
    }
  }
}

class God extends Fighter {
  constructor(name, type) {
    super(name);
    this.type = type;
    this.staff = '';
  }
  equipWeapon() {
    // this.staff = 'Mjolnir';
    console.log(`${this.name} has ${this.type}! ⚡️`);
    return `${this.name} has ${this.type}! ⚡️`;
    // return this.staff;
  }
}

// const thor = new Fighter('Thor');
const thor = new God('Thor', 'Mjolnir');
const loki = new God('Loki', 'Chitauri Scepter');
thor.equipWeapon();
loki.powerUp(randomNumber());
thor.powerUp(randomNumber());;
loki.wasHit();
thor.wasHit();
loki.info();
thor.info();
thor.win();
loki.win();

const thorText = `
  <p>${thor.equipWeapon()}</p>
  <p>${thor.wasHit()}</p>
  <p>${thor.info()}</p>
  <p>${thor.win()}</p>
  <h3>Thor Odinson</h3>
`;

const thorElement = document.getElementById('viking1');
thorElement.innerHTML = thorText;

const lokiText = `
  <p>${loki.equipWeapon()}</p>
  <p>${loki.wasHit()}</p>
  <p>${loki.info()}</p>
  <p>${loki.win()}</p>
  <h3>Loki of Asgard</h3>
`;

const lokiElement = document.getElementById('viking2');
lokiElement.innerHTML = lokiText;
