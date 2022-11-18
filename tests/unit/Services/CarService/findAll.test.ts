import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';

import Car from '../../../../src/Domains/Car';
import CarService from '../../../../src/Services/CarService';
import { findAllOutput } from './mocks/Car';

describe('Deveria retornar todos os carros', function () {
  it('Retorna todos os carros com SUCESSO', async function () {
    const output: Car[] = findAllOutput.map((car) => new Car(car));

    sinon.stub(Model, 'find').resolves(findAllOutput);

    const service = new CarService();
    const result = await service.findAll();

    expect(result).to.be.deep.equal(output);

    sinon.restore();
  });
});
