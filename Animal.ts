abstract class Animal {
    protected name: string;
    protected age: number;
    protected sound: string;
  
    constructor(name: string, age: number, sound: string) {
      this.name = name;
      this.age = age;
      this.sound = sound;
    }
  
    abstract makeSound(): void;
  }
  

  class Mammal extends Animal {
    constructor(name: string, age: number, sound: string = 'roar') {
      super(name, age, sound);
    }
  
    makeSound(): void {
      console.log(`${this.name} (${this.age} years old) makes a ${this.sound} sound.`);
    }
  }
  
  class Bird extends Animal {
    constructor(name: string, age: number, sound: string = 'chirp') {
      super(name, age, sound);
    }
  
    makeSound(): void {
      console.log(`${this.name} (${this.age} years old) makes a ${this.sound} sound.`);
    }
  }
  
  class Fish extends Animal {
    constructor(name: string, age: number, sound: string = 'blub') {
      super(name, age, sound);
    }
  
    makeSound(): void {
      console.log(`${this.name} (${this.age} years old) makes a ${this.sound} sound.`);
    }
  }
  
  // Example usage
  const lion = new Mammal('Lion', 5);
  const sparrow = new Bird('Sparrow', 2);
  const goldfish = new Fish('Goldfish', 1);
  
  lion.makeSound(); // Lion (5 years old) makes a roar sound.
  sparrow.makeSound(); // Sparrow (2 years old) makes a chirp sound.
  goldfish.makeSound(); // Goldfish (1 years old) makes a blub sound.
  