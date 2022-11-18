import {
  model,
  models,
  Model,
  Schema,
  isValidObjectId,
  UpdateQuery,
} from 'mongoose';
import HttpException from '../helpers/HttpException';

const INVALID_MONGO_ID = 'Invalid mongo id';

export default abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async findAll(): Promise<T[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new HttpException(422, INVALID_MONGO_ID);

    return this.model.findById(id);
  }

  public async update(id: string, obj: T): Promise<T | null> {
    if (!isValidObjectId(id)) throw new HttpException(422, INVALID_MONGO_ID);

    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }

  public async delete(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new HttpException(422, INVALID_MONGO_ID);

    return this.model.findByIdAndDelete(id);
  }
}
