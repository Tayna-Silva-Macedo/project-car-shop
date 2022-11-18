import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';

import CarService from '../../../../src/Services/CarService';
import { deleteOutput } from './mocks/Car';

describe('Deveria deletar um carro pelo seu id', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Não é possível deletar um carro que não existe', async function () {
    const idInput = '6377d86a83e61d159c277381';

    sinon.stub(Model, 'findByIdAndDelete').resolves(null);

    try {
      const service = new CarService();
      await service.delete(idInput);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }
  });

  it('Não é possível deletar um carro quando o formato do id esta inválido', async function () {
    const idInput = 'abc123';

    try {
      const service = new CarService();
      await service.delete(idInput);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });

  it('Deleta um carro com SUCESSO', async function () {
    const idInput = '6376922a90cf9e9467abd2b6';

    sinon.stub(Model, 'findByIdAndDelete').resolves(deleteOutput);

    const service = new CarService();
    const result = await service.delete(idInput);

    expect(result).to.be.equal(undefined);
  });
});
