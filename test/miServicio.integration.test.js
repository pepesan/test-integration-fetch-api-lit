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
function mockApiResponse(body = {}) {
  return new window.Response(JSON.stringify(body), {
    status: 200,
    headers: { 'Content-type': 'application/json' }
  });
}
describe('MiServicio', () => {
  beforeEach(() => {
    sinon.stub(window, 'fetch');
    window.fetch.returns(Promise.resolve(mockApiResponse(body)));
  });

  afterEach(() => {
    window.fetch.restore();
  });
  it('prueba fetch', async () => {

    let miServicio = new MiServicio();
    let resultado = await miServicio.logJSONData();
    //console.log(resultado);
    expect(resultado.length).to.equal(3);
  });
});
