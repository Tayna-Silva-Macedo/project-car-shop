const createInput = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
};

const createOutput = {
  _id: '6376922a90cf9e9467abd2b6',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
  __v: 0,
};

const findAllOutput = [
  {
    _id: '6376922a90cf9e9467abd2b6',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
    __v: 0,
  },
  {
    _id: '634852326b35b59438fbea31',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    buyValue: 39,
    doorsQty: 2,
    seatsQty: 5,
    __v: 0,
  },
];

const findByIdOutput = {
  _id: '6376922a90cf9e9467abd2b6',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
  __v: 0,
};

const updateInput = {
  model: 'Marea',
  year: 1992,
  color: 'Red',
  status: true,
  buyValue: 12.0,
  doorsQty: 2,
  seatsQty: 5,
};

const updateOutput = {
  _id: '6376922a90cf9e9467abd2b6',
  model: 'Marea',
  year: 1992,
  color: 'Red',
  status: true,
  buyValue: 12.0,
  doorsQty: 2,
  seatsQty: 5,
  __v: 0,
};

const deleteOutput = {
  _id: '6376922a90cf9e9467abd2b6',
  model: 'Marea',
  year: 1992,
  color: 'Red',
  status: true,
  buyValue: 12.0,
  doorsQty: 2,
  seatsQty: 5,
  __v: 0,
};

export {
  createInput,
  createOutput,
  findAllOutput,
  findByIdOutput,
  updateInput,
  updateOutput,
  deleteOutput,
};
