class mobles{
    
    //atributos
    nome;
    tipo;
    cor;
    dimensions={
        ancho: 0,
        alto: 0,
        longo: 0
    }
    prezo;

    /* Construtor:
     Construímos o obxecto cos atributos:
     tipo:          Tipo de Moble
     cor:           Cor do Moble                   
     dimensions:    Dimensións do Moble, en concreto:
                    -ancho
                    -alto
                    -longo
     prezo:         Prezo do moble en Euros***/

    constructor(nome,tipo, cor, dimensions,prezo){ 
        this.nome = nome;
        this.tipo = tipo;
        this.cor = cor;
        this.dimensions = dimensions;
        this.prezo= prezo;
    }

    //Captura-modificación e obtención de datos

    //Captura-modificación de datos

    //Captura-modificación de Nome
    set setNome (dato){
        this.nome = dato;
    };
    //Captura-modificación de Tipo
    set setTipo (dato){
        this.tipo = dato;
    };
    //Captura-modificación de Cor
    set setCor (dato){
        this.cor = dato;
    };
    //Captura-modificación de Altura en dimensións
    set setAlto(dato) {
        this.dimensions.alto = dato;
    };
    set setAncho(dato) {
        this.dimensions.ancho = dato;
    };
    set setLongo(dato) {
        this.dimensions.longo = dato;
    };
      set setPrezo(dato){
        this.prezo = dato;
    };

    //Getters: Obtención de datos
    get getNome(){
        return this.nome;
    }
    get getTipo(){
        return this.tipo;
    }
    get getCor(){
        return this.Cor;
    }
    get getAlto(){
        return this.alto;
    }
    get getAncho(){
        return this.ancho;
    }
    get getLongo(){
        return this.longo;
    }
    get getPrezo(){
        return this.prezo;
    }

    //Método de saída de datos (impresión por pantalla)
    imprimirMoble(mob){
        console.log(
       `Nome:      ${this.nome} \n 
        Tipo:      ${this.tipo} \n
        Cor:       ${this.cor}  \n 
        ========DIMENSIÓNS==========\n
        Alto:      ${this.dimensions.alto} \n
        Ancho:     ${this.dimensions.ancho} \n
        Longo:     ${this.dimensions.longo} \n
        ====================================\n
        Prezo:     ${this.prezo} €`);
    }
}

    /* Clase Mesa con atributos específicos*/
    class Mesa extends Moble{
        #numero_patas;
        constructor (tipo, cor, dimensions, prezo, numero_patas){
            this.#numero_patas = numero_patas;
        }

    //Getters: métodos de obtención de datos.

    get getNumPatas(){
        return `Patas: ${this.#numero_patas}`;
    }
    //Setters: métodos de captura de datos
    set setNumPatas(nPatas){
       this.#numero_patas=nPatas;
    };

    imprimirNumPatas(mob){
        super.imprimirMoble(mob);

    };

 }