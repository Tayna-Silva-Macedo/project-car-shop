import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';

import Motorcycle from '../../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../../src/Services/MotorcycleService';
import { findByIdOutput } from './mocks/Motorcycle';

describe('Deveria retornar uma moto pelo seu id', function () {
  afterEach(function () {
    sinon.restore();
  });
  
  it('Não é possível retornar uma moto que não existe', async function () {
    const input = '6377c75de23e1cd0ef5ae88d';

    sinon.stub(Model, 'findById').resolves(null);

    try {
      const service = new MotorcycleService();
      await service.findById(input);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Motorcycle not found');
    }
  });

  // it('Não é possível retornar um carro quando o formato do id esta inválido', async function () {
  //   const input = 'abc123';

  //   try {
  //     const service = new CarService();
  //     await service.findById(input);
  //   } catch (error) {
  //     expect((error as Error).message).to.be.equal('Invalid mongo id');
  //   }
  // });

  // it('Retorna um carro específico com SUCESSO', async function () {
  //   const input = '6376922a90cf9e9467abd2b6';

  //   const output: Car = new Car(findByIdOutput);

  //   sinon.stub(Model, 'findById').resolves(findByIdOutput);

  //   const service = new CarService();
  //   const result = await service.findById(input);

  //   expect(result).to.be.deep.equal(output);
  // });
});
