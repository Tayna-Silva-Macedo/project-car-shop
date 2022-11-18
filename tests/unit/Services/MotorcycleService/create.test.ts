import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';

import Motorcycle from '../../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../../src/Services/MotorcycleService';
import { createInput, createOutput } from './mocks/Motorcycle';

describe('Deveria cadastrar uma nova moto', function () {
  it('Cria uma nova moto com SUCESSO', async function () {
    const input: IMotorcycle = createInput;

    const output: Motorcycle = new Motorcycle(createOutput);

    sinon.stub(Model, 'create').resolves(createOutput);

    const service = new MotorcycleService();
    const result = await service.create(input);

    expect(result).to.be.deep.equal(output);

    sinon.restore();
  });
});
