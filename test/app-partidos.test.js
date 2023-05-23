import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../app-partidos.js';

describe('AppPartidos', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture(html`<app-partidos></app-partidos>`);

    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(0);
    expect(el.listado.length).to.equal(0);
  });
  it('simular la llamada  fetch', async () => {
    const el = await fixture(html`<app-partidos></app-partidos>`);
    // cambiar el comportamieto de fetch para que devuelva un dato fijo
    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(0);
    expect(el.listado.length).to.equal(0);
  });
  it('Crea un singleton para los datos', async () => {
    const el = await fixture(html`<app-partidos></app-partidos>`);
    // cambiar el comportamiento del servicio que llama al fetch para que devuelva un dato fijo
    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(0);
    expect(el.listado.length).to.equal(0);
  });

});
