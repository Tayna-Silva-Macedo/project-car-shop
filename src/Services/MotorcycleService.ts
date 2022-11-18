import Motorcycle from '../Domains/Motorcycle';
import HttpException from '../helpers/HttpException';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

const MOTORCYCLE_NOT_FOUND = 'Motorcycle not found';

export default class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null) {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async create(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.create(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async findAll() {
    const motorcycleODM = new MotorcycleODM();
    const motorcycles = await motorcycleODM.findAll(); 
    const motorcycleArray = motorcycles.map((motorcycle) =>
      this.createMotorcycleDomain(motorcycle));
    return motorcycleArray;
  }

  public async findById(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycle = await motorcycleODM.findById(id);

    if (!motorcycle) throw new HttpException(404, MOTORCYCLE_NOT_FOUND);

    return this.createMotorcycleDomain(motorcycle);
  }

  public async update(id: string, obj: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycleUpdated = await motorcycleODM.update(id, obj);
    
    if (!motorcycleUpdated) throw new HttpException(404, MOTORCYCLE_NOT_FOUND);

    return this.createMotorcycleDomain(motorcycleUpdated);
  }

  public async delete(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycleDeleted = await motorcycleODM.delete(id);

    if (!motorcycleDeleted) throw new HttpException(404, MOTORCYCLE_NOT_FOUND);
  }
}
