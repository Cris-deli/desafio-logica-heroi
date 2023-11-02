
class Heroi {
    
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    
    atacar() {
      let ataque = '';
  
      switch (this.tipo) {
        case 'MAGO':
          ataque = 'usando magia!';
          break;
        case 'GUERREIRO':
          ataque = 'usando espada!';
          break;
        case 'MONGE':
          ataque = 'usando artes marciais!';
          break;
        case 'NINJA':
          ataque = 'usando shuriken!';
          break;
        default:
            ataque = 'Atacou!!';
      }
  
      
      console.log(`O ${this.tipo} atacou ${ataque}`);
    }
  }
  
  
  const heroi1 = new Heroi('ORION', 150, 'MAGO');
  const heroi2 = new Heroi('JETSUM', 75, 'MONGE');
  const heroi3 = new Heroi('HERCULES', 45, 'GUERREIRO');
  const heroi4 = new Heroi('KAGE-MARY', 55, 'NINJA');
  
  heroi1.atacar(); 
  heroi2.atacar(); 
  heroi3.atacar();
  heroi4.atacar();
  