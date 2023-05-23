import { html, css, LitElement } from 'lit';
import {MiServicio} from './miServicio.js';

export class AppPartidos extends LitElement {


  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--app-partidos-text-color, #000);
    }
    img{
      height: 40px;
    }
  `;

  static properties = {
    header: { type: String },
    counter: {type: Number},
    listado: {type: Array },
    miServicio: {type: MiServicio}
  };

  constructor() {
    super();
    this.header = 'Hey there';
    this.counter= 0;
    this.listado = [];
    this.miServicio = new MiServicio();
    this.miServicio.logJSONData().then(data => {
      this.listado = data;
    });
  }


  render() {
    return html`
      <h2>${this.header} Nr. ${this.counter}!</h2>
      <ul>
        ${this.listado.map((partido) =>
          html`<li id="part-${partido.nombre}">
            ${partido.nombre} -> ${partido.dipu}
            <img alt='logo partido ${partido.nombre}' src='https://cursosdedesarrollo.com/pactometro/img/${partido.imagen}'/>
          </li>`
        )}
      </ul>
    `;
  }
}
