export class MiServicio{

  async logJSONData() {
    const response = await fetch("https://cursosdedesarrollo.com/pactometro/resultados.json");
    const jsonData = await response.json();
    // console.log(jsonData);
    // this.counter = jsonData.length;
    return jsonData;
  }
}
