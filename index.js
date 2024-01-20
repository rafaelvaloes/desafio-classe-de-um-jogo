//Criando as classes Guerreiro, Mago, Monge e Ninja.

class hero{
    constructor(heroName, heroAge, heroType, heroAttackMode){
        this.heroName = heroName
        this.heroAge = heroAge
        this.heroType = heroType
        this.heroAttackMode = heroAttackMode
    }

//Criando a mensagem de attack.
//Inicialmente havia feito as mensagens com Switch dependendo da classe porem isso limitaria a 4 tipos de ataque então preferi
//criar a variavel heroAttackMode para que possa ser selecionado o que será usado no ataque, deixando livre para criar novos
// tipos de Herois e Modos de Ataque.

    heroAttack(heroName, heroAge, heroType, heroAttackMode){

            console.log(`${this.heroType} ${this.heroName} de ${this.heroAge} anos atacou usando ${this.heroAttackMode}. \n`);

    } 
}

//Criando os Objetos.
let warriorHero = new hero("Raffildzs", 26, "Guerreiro", "Espada")
let mageHero = new hero("Felipe", 28, "Mago", "Magia")
let monkHero = new hero("Theo", 8, "Monge", "Artes Marciais")
let ninjaHero = new hero("Heloísa", 7, "Ninja", "Shuriken")
let teacherHero = new hero("Dio", 4, "Teacher", "Conhecimento")

//Chamando a função dentro da Classe.
warriorHero.heroAttack()
mageHero.heroAttack()
monkHero.heroAttack()
ninjaHero.heroAttack()
teacherHero.heroAttack()