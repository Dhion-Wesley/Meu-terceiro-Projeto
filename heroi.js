// Definição da classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo.toLowerCase()) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque desconhecido';
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criando instâncias da classe Heroi e testando o método atacar
  const heroi1 = new Heroi('Arthas', 30, 'guerreiro');
  const heroi2 = new Heroi('Merlin', 150, 'mago');
  const heroi3 = new Heroi('Bruce', 40, 'monge');
  const heroi4 = new Heroi('Ryu', 25, 'ninja');
  
  heroi1.atacar();
  heroi2.atacar();
  heroi3.atacar();
  heroi4.atacar();
  