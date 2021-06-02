class Propulsor {
  idPropulsor: string;
  potenciaMax: number;
  potenciaActual: number = 0;

  constructor(
    idPropulsor: string,
    potenciaMax: number,
    potenciaActual: number
  ) {
    this.idPropulsor = idPropulsor;
    this.potenciaMax = potenciaMax;
    this.potenciaActual = potenciaActual;
  }
}

// máximas propulsores
// 10,30,80

// 30,40,50,50,30,10
