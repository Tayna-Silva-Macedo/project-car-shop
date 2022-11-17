type MotorcycleCategoryTypes = 'Street' | 'Custom' | 'Trail';

const createInput = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.0,
  category: 'Street' as MotorcycleCategoryTypes,
  engineCapacity: 600,
};

const createOutput = {
  _id: '6348513f34c397abcad040b2',
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.0,
  category: 'Street' as MotorcycleCategoryTypes,
  engineCapacity: 600,
  __v: 0,
};

export { createInput, createOutput };
