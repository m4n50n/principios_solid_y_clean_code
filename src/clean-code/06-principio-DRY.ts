// Principio DRY: Don't Repeat Yourself

/**
 * Se trata simplemente de evitar tener código duplicado
 * Simplifica las pruebas
 * ES más fácil de mantener
 * Ayuda a centralizar procesos
 * Aplicar el principio DRY, usualmente lleva a refactorizar código
 */
type Size = "" | "S" | "M" | "XL";

class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  isProductReady(): boolean {
    for (const key in this) { // Esto recorre todas las propiedades de la clase. This hace referencia a esta instancia de la clase
      switch (typeof this[key]) {
        case "string":
          if ((<string>(<unknown>this[key])).length <= 0)
            throw Error(`${key} is empty`);
          break;
        case "number":
          if (<number>(<unknown>this[key]) <= 0) throw Error(`${key} is zero`);
          break;
        default:
          throw Error(`${typeof this[key]} is not valid`);
      }
    }

    return true;
  }

  toString() {
    if (!this.isProductReady) return;

    return `${this.name} (${this.price}), ${this.size}`;
  }
}

(() => {
  const bluePants = new Product("Blue Pants", 10, "S");
  console.log(bluePants.toString());
})();
