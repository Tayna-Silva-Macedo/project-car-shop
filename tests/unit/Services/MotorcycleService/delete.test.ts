import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';

import MotorcycleService from '../../../../src/Services/MotorcycleService';
import { deleteOutput } from './mocks/Motorcycle';

describe('Deveria deletar uma moto pelo seu id', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Não é possível deletar uma moto que não existe', async function () {
    const idInput = '6377d86a83e61d159c277381';

    sinon.stub(Model, 'findByIdAndDelete').resolves(null);

    try {
      const service = new MotorcycleService();
      await service.delete(idInput);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Motorcycle not found');
    }
  });

  it('Não é possível deletar uma moto quando o formato do id esta inválido', async function () {
    const idInput = 'abc123';

    try {
      const service = new MotorcycleService();
      await service.delete(idInput);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });

  // it('Deleta uma moto com SUCESSO', async function () {
  //   const idInput = '634852326b35b59438fbea2f';

  //   sinon.stub(Model, 'findByIdAndDelete').resolves(deleteOutput);

  //   const service = new CarService();
  //   const result = await service.delete(idInput);

  //   expect(result).to.be.equal(undefined);
  // });
});
