import { isValidObjectId, Model } from 'mongoose';
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

  it('Retorna todas as motos com sucesso', async function () {
    const mock = [
      {
        id: '634852326b35b59438fbea2f',
        model,
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Honda Cbr 1000rr',
        year: 2011,
        color: 'Orange',
        status: true,
        buyValue: 59.900,
        category: 'Street',
        engineCapacity: 1000,
      },
    ];

    const output = mock.map((e) => new Motorcycle(e));

    Sinon.stub(Model, 'find').resolves(mock);

    const service = new MotorcycleService();
    const motors = await service.findAll();

    expect(motors).to.be.deep.equal(output);
  });

  it('Retorna uma moto pelo id', async function () {
    const mock = {
      id: '634852326b35b59438fbea2f',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const output = new Motorcycle(mock);
    Sinon.stub(isValidObjectId);
    Sinon.stub(Model, 'findById').resolves(mock);

    const service = new MotorcycleService();
    const motors = await service.findById('634852326b35b59438fbea2f');

    expect(motors).to.be.deep.equal(output);
  });

  it('Retorna um erro ao não encontrar uma moto no database', async function () {
    Sinon.stub(Model, 'findById').resolves(undefined);

    try {
      const service = new MotorcycleService();
      await service.findById('634852326b35b59438fbea2f');
    } catch (err) {
      expect((err as Error).message).to.be.deep.equal('Motorcycle not found');
    }
  });
  afterEach(function () {
    Sinon.restore();
  });
});