import { makeAutoObservable, toJS } from 'mobx';

import carsDataBase from '../../models/carsDB';
import { Car, CarForForm, CarUpdated } from '../../types/Car';
import { uniqueId } from '../../utils/generatorId';

class CarsStore {

  cars: Array<Car> = carsDataBase;

  constructor() {
    makeAutoObservable(this);
  }

  deleteCar(id: string) {
    this.cars = this.cars.filter((car: Car) => car.id !== id);
  }

  addCar(car: CarForForm) {
    const newCar: Car = {
      brand: car.brand,
      model: car.model,
      complectation: car.complectation,
      color: car.color,
      year: car.year,
      price: car.price,
      enginePower: car.enginePower,
      engineVolume: car.engineVolume,
      preview: car.preview,
      id: uniqueId(),
    };

    this.cars.push(newCar);
  }

  getCarById(id: string) {
    let result: any;

    this.cars.forEach((car: Car) => {
      if (car.id === id) {
        result = car;
      }
    });

    return toJS(result);
  }

  editCar(carEdited: CarForForm, id: string) {
    const editableCar: CarUpdated = this.getCarById(id);

    const indexInitialCar: Array<number> = [];

    this.cars.map((client: Car, index: number) => {
      if (client.id === editableCar.id) {
        indexInitialCar.push(index);
        return;
      }
    });

    Object.entries(carEdited).forEach(([key, value]: Array<string | number>) => {
      editableCar[key] = value;
    });

    this.cars[indexInitialCar[0]] = editableCar;
  }

}

export default new CarsStore();
