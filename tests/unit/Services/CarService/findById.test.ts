import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';

import Car from '../../../../src/Domains/Car';
import CarService from '../../../../src/Services/CarService';
import { findByIdOutput } from './mocks/Car';

describe('Deveria retornar um carro pelo seu id', function () {
  afterEach(function () {
    sinon.restore();
  });
  
  it('Não é possível retornar um carro que não existe', async function () {
    const input = '634852326b35b59438fbea31';

    sinon.stub(Model, 'findById').resolves(null);

    try {
      const service = new CarService();
      await service.findById(input);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }
  });

  it('Não é possível retornar um carro quando o formato do id esta inválido', async function () {
    const input = 'abc123';

    try {
      const service = new CarService();
      await service.findById(input);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });

  it('Retorna um carro específico com SUCESSO', async function () {
    const input = '6376922a90cf9e9467abd2b6';

    const output: Car = new Car(findByIdOutput);

    sinon.stub(Model, 'findById').resolves(output);

    const service = new CarService();
    const result = await service.findById(input);

    expect(result).to.be.deep.equal(output);
  });
});
