import Car from '../Domains/Car';
import HttpException from '../helpers/HttpException';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

const CAR_NOT_FOUND = 'Car not found';

export default class CarService {
  private createCarDomain(car: ICar | null) {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async findAll() {
    const carODM = new CarODM();
    const cars = await carODM.findAll();
    const carsArray = cars.map((car) => this.createCarDomain(car));
    return carsArray;
  }

  public async findById(id: string) {
    const carODM = new CarODM();
    const car = await carODM.findById(id);

    if (!car) throw new HttpException(404, CAR_NOT_FOUND);

    return this.createCarDomain(car);
  }

  public async update(id: string, obj: ICar) {
    const carODM = new CarODM();
    const carUpdated = await carODM.update(id, obj);
    
    if (!carUpdated) throw new HttpException(404, CAR_NOT_FOUND);

    return this.createCarDomain(carUpdated);
  }

  public async delete(id: string) {
    const carODM = new CarODM();
    const carDeleted = await carODM.delete(id);

    if (!carDeleted) throw new HttpException(404, CAR_NOT_FOUND);
  }
}
