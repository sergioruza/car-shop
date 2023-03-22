import { model, Model, models, Schema } from 'mongoose';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected modelName: string;
  protected schema: Schema;
  constructor(modelName: string, schema: Schema) {
    this.modelName = modelName;
    this.schema = schema;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(info: T): Promise<T> {
    return this.model.create({ ...info });
  }
}