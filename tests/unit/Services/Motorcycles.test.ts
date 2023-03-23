import { Model } from 'mongoose';
import Sinon from 'sinon';
import { expect } from 'chai';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import Motorcycle from '../../../src/Domains/Motorcycle';

describe('Testa a rota /motorcycles', function () {
  const model = 'Honda Cb 600f Hornet';
  it('cadastra uma moto com sucesso', async function () {
    const input = {
      model,
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    const output: Motorcycle = new Motorcycle({
      id: '641cb350c32a1c9bdcc6b777',
      model,
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    });

    Sinon.stub(Model, 'create').resolves(output);

    const service = new MotorcycleService();
    const newMotor = await service.createMotorcycle(input);

    expect(newMotor).to.be.deep.equal(output);
  });

  it('Envia o body sem a chave status', async function () {
    const input = {
      model,
      year: 2005,
      color: 'Yellow',
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    const output: Motorcycle = new Motorcycle({
      id: '641cb350c32a1c9bdcc6b777',
      model,
      year: 2005,
      color: 'Yellow',
      status: false,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    });

    Sinon.stub(Model, 'create').resolves(output);

    const service = new MotorcycleService();
    const newMotor = await service.createMotorcycle(input);

    expect(newMotor).to.be.deep.equal(output);
  });
  afterEach(function () {
    Sinon.restore();
  });
});