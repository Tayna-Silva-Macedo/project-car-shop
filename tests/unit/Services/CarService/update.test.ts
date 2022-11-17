import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';

import Car from '../../../../src/Domains/Car';
import ICar from '../../../../src/Interfaces/ICar';
import CarService from '../../../../src/Services/CarService';
import { updateInput, updateOutput } from './mocks/Car';

describe('Deveria atualizar um carro pelo seu id', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Não é possível atualizar um carro que não existe', async function () {
    const idInput = '634852326b35b59438fbea31';
    const objInput: ICar = updateInput;

    sinon.stub(Model, 'findByIdAndUpdate').resolves(null);

    try {
      const service = new CarService();
      await service.update(idInput, objInput);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }
  });

  it('Não é possível atualizar um carro quando o formato do id esta inválido', async function () {
    const idInput = 'abc123';
    const objInput: ICar = updateInput;

    try {
      const service = new CarService();
      await service.update(idInput, objInput);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });

  it('Atualiza um carro com SUCESSO', async function () {
    const idInput = '634852326b35b59438fbea31';
    const objInput: ICar = updateInput;

    const output: Car = new Car(updateOutput);

    sinon.stub(Model, 'findByIdAndUpdate').resolves(updateOutput);

    const service = new CarService();
    const result = await service.update(idInput, objInput);

    expect(result).to.be.deep.equal(output);
  });
});
