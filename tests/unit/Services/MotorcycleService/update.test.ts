import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';

import Motorcycle from '../../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../../src/Services/MotorcycleService';
import { updateInput, updateOutput } from './mocks/Motorcycle';

describe('Deveria atualizar uma moto pelo seu id', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Não é possível atualizar uma moto que não existe', async function () {
    const idInput = '6377d2c8e2da058801650da5';
    const objInput: IMotorcycle = updateInput;

    sinon.stub(Model, 'findByIdAndUpdate').resolves(null);

    try {
      const service = new MotorcycleService();
      await service.update(idInput, objInput);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Motorcycle not found');
    }
  });

  // it('Não é possível atualizar um carro quando o formato do id esta inválido', async function () {
  //   const idInput = 'abc123';
  //   const objInput: ICar = updateInput;

  //   try {
  //     const service = new CarService();
  //     await service.update(idInput, objInput);
  //   } catch (error) {
  //     expect((error as Error).message).to.be.equal('Invalid mongo id');
  //   }
  // });

  // it('Atualiza um carro com SUCESSO', async function () {
  //   const idInput = '634852326b35b59438fbea31';
  //   const objInput: ICar = updateInput;

  //   const output: Car = new Car(updateOutput);

  //   sinon.stub(Model, 'findByIdAndUpdate').resolves(updateOutput);

  //   const service = new CarService();
  //   const result = await service.update(idInput, objInput);

  //   expect(result).to.be.deep.equal(output);
  // });
});
