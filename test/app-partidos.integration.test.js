import { expect, fixture } from '@open-wc/testing';
import sinon from 'sinon';
import {MiServicio} from '../src/miServicio.js';
import { html } from 'lit';

var body = [
  {
    "nombre":"PP",
    "dipu":89,
    "imagen":"logotipo-pp.png"
  },
  {
    "nombre":"PSOE",
    "dipu":120,
    "imagen":"logotipo-psoe.png"
  },
  {
    "nombre":"Podemos",
    "dipu":35,
    "imagen":"logotipo-podemos.png"
  },
];
function mockServiceResponse(body = {}) {
  return JSON.stringify(body);
}

let miService;
describe('MiServicio', () => {
  beforeEach(() => {
    miService = new MiServicio();
    sinon.stub(miService, 'logJSONData');
    miService.logJSONData.returns(Promise.resolve(mockServiceResponse(body)));
  });

  afterEach(() => {
    miService.logJSONData.restore();
  });
  it('probar e componente que accede al servicio', async () => {
    console.log(miService);
    const el = await fixture(html`<app-partidos .miServicio='${miService}'></app-partidos>`);
    console.log(el.miServicio)
    expect(el.miServicio).to.not.be.null;
    el.listado = await el.miServicio.logJSONData();
    console.log(el.listado);
  });
});
