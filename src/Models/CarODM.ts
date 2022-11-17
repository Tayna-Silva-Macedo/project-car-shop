import { isValidObjectId, Schema } from 'mongoose';
import HttpException from '../helpers/HttpException';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

export default class CarODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'Car');
  }

  public async create(obj: ICar): Promise<ICar> {
    return this.model.create({ ...obj });
  }

  public async findAll(): Promise<ICar[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<ICar | null> {
    if (!isValidObjectId(id)) throw new HttpException(422, 'Invalid mongo id');

    return this.model.findById(id);
  }

  public async update(id: string, obj: ICar): Promise<ICar | null> {
    if (!isValidObjectId(id)) throw new HttpException(422, 'Invalid mongo id');

    return this.model.findByIdAndUpdate({ _id: id }, { ...obj }, { new: true });
  }
}
