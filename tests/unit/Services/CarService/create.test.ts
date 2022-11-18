import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';

import Car from '../../../../src/Domains/Car';
import ICar from '../../../../src/Interfaces/ICar';
import CarService from '../../../../src/Services/CarService';
import { createInput, createOutput } from './mocks/Car';

describe('Deveria cadastrar um novo carro', function () {
  it('Cria um novo carro com SUCESSO', async function () {
    const input: ICar = createInput;

    const output: Car = new Car(createOutput);

    sinon.stub(Model, 'create').resolves(createOutput);

    const service = new CarService();
    const result = await service.create(input);

    expect(result).to.be.deep.equal(output);

    sinon.restore();
  });
});
