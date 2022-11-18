import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';

import Motorcycle from '../../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../../src/Services/MotorcycleService';
import { findAllOutput } from './mocks/Motorcycle';

describe('Deveria retornar todos as motos', function () {
  it('Retorna todos as motos com SUCESSO', async function () {
    const output: Motorcycle[] = findAllOutput.map((motorcycle) => new Motorcycle(motorcycle));

    sinon.stub(Model, 'find').resolves(findAllOutput);

    const service = new MotorcycleService();
    const result = await service.findAll();

    expect(result).to.be.deep.equal(output);
  });
});