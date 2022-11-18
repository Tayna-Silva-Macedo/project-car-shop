type MotorcycleCategoryTypes = 'Street' | 'Custom' | 'Trail';

const HONDA_HORNET = 'Honda Cb 600f Hornet';
const HONDA_CBR = 'Honda Cbr 1000rr';

const createInput = {
  model: HONDA_HORNET,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.0,
  category: 'Street' as MotorcycleCategoryTypes,
  engineCapacity: 600,
};

const createOutput = {
  _id: '6348513f34c397abcad040b2',
  model: HONDA_HORNET,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.0,
  category: 'Street' as MotorcycleCategoryTypes,
  engineCapacity: 600,
  __v: 0,
};

const findAllOutput = [
  {
    id: '634852326b35b59438fbea2f',
    model: HONDA_HORNET,
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.0,
    category: 'Street' as MotorcycleCategoryTypes,
    engineCapacity: 600,
  },
  {
    id: '634852326b35b59438fbea31',
    model: HONDA_CBR,
    year: 2011,
    color: 'Orange',
    status: true,
    buyValue: 59.9,
    category: 'Street' as MotorcycleCategoryTypes,
    engineCapacity: 1000,
  },
];

const findByIdOutput = {
  id: '634852326b35b59438fbea31',
  model: HONDA_CBR,
  year: 2011,
  color: 'Orange',
  status: true,
  buyValue: 59.9,
  category: 'Street' as MotorcycleCategoryTypes,
  engineCapacity: 1000,
};

const updateInput = {
  model: HONDA_HORNET,
  year: 2014,
  color: 'Red',
  status: true,
  buyValue: 45.0,
  category: 'Street' as MotorcycleCategoryTypes,
  engineCapacity: 600,
};

const updateOutput = {
  id: '634852326b35b59438fbea2f',
  model: HONDA_HORNET,
  year: 2014,
  color: 'Red',
  status: true,
  buyValue: 45.0,
  category: 'Street',
  engineCapacity: 600,
};

export {
  createInput,
  createOutput,
  findAllOutput,
  findByIdOutput,
  updateInput,
  updateOutput,
};
