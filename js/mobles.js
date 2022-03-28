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
    //Captura-modificación de alto en dimensións
        set setAlto(dato) {
        this.dimensions.alto = dato;
    };
    //Captura-modificacion de ancho en dimensións
    set setAncho(dato) {
        this.dimensions.ancho = dato;
    };
    //Captura-modificacion de longo en dimensións
    set setLongo(dato) {
        this.dimensions.longo = dato;
    };
    //Captura-modificación de prezo en dimensións
      set setPrezo(dato){
        this.prezo = dato;
    };

    //Getters: Obtención de datos
    //Obtención de nome
    get getNome(){
        return this.nome;
    }
    //Obtención de Tipo
    get getTipo(){
        return this.tipo;
    }
    //Obtención de Cor
    get getCor(){
        return this.Cor;
    }
    //Obtención de Altura mediante dimensións
    get getAlto(){
        return this.dimensions.alto;
    }
    //Obtención de anchura mediante dimensións
    get getAncho(){
        return this.ancho;
    }
    //Obtención do longo mediante dimensións
    get getLongo(){
        return this.longo;
    }
    //Obtención do prezo 
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

    imprimirMesa(mob){
        super.imprimirMoble(mob);
        console.log(`======Datos exclusivos Mesa====== \n
        Número de Patas:    ${this.#numero_patas}`);
    }

 }
 //Datos de exemplo

 LakkaV55 ={nome:'lakka', tipo:'Mesa', cor:'Verde', dimensions:{alto:0.55,ancho:0.55,alto:0.55},prezo:7.00};
 imprimirMesa(LakkaV55);