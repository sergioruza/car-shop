import sinon from 'sinon';
import { expect } from 'chai';
import { Model, isValidObjectId } from 'mongoose';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';

describe('Testa todas as rotas de /cars', function () {
  it('Cria um carro com sucesso', async function () {
    const input = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    const output: Car = new Car({
      id: '641b83f73816f4e756286444',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    });

    sinon.stub(Model, 'create').resolves(output);
    const service = new CarService();
    const result = await service.createCar(input);
    expect(result).to.be.deep.equal(output);
  });

  it('Busca todos os carros com sucesso', async function () {
    const output = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Tempra',
        year: 1995,
        color: 'Black',
        status: false,
        buyValue: 39,
        doorsQty: 2,
        seatsQty: 5,
      },
    ];

    sinon.stub(Model, 'find').resolves(output);

    const service = new CarService();
    const result = await service.findAll();
    expect(result).to.be.deep.equal(output);
  });

  it('Erro em caso de não achar nenhum carro', async function () {
    sinon.stub(Model, 'find').resolves([]);

    try {
      const service = new CarService();
      await service.findAll();
    } catch (err) {
      expect((err as Error).message).to.be.equal('Car not found');
    }
  });

  it('Lança um erro ao pesquisar um carro com id inválido', async function () {
    sinon.stub(Model, 'findById').resolves(undefined);

    try {
      const service = new CarService();
      await service.findById('46548647888678');
    } catch (err) {
      expect((err as Error).message).to.be.equal('Invalid mongo id');
    }
  });

  it('Trás um carro buscado por id', async function () {
    const output = {
      id: '641b83f73816f4e756286444',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };
    sinon.stub(isValidObjectId);
    sinon.stub(Model, 'findById').resolves(output);

    const service = new CarService();
    const result = await service.findById('641b83f73816f4e756286444');
    expect(result).to.be.equal(output);
  });

  it('Edita um carro com sucesso', async function () {
    const input = {
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    };
    const output = new Car({
      id: '641b83f73816f4e756286444',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    });
  
    sinon.stub(Model, 'findByIdAndUpdate').resolves(output);

    const service = new CarService();
    const result = await service.updateById('641b83f73816f4e756286444', input);
    expect(result).to.be.deep.equal(output);
  });

  it('Não é possível editar um carro que não existe', async function () {
    const input = {
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    };
  
    sinon.stub(Model, 'findByIdAndUpdate').resolves(undefined);

    try {
      const service = new CarService();
      await service.updateById('641b83f73816f4e756286444', input);
    } catch (err) {
      expect((err as Error).message).to.be.equal('Car not found');
    }
  });

  afterEach(function () {
    sinon.restore();
  });
});