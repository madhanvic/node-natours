const Tour = require('../model/tourmodel');

const getAllTours = async (request, response) => {
  try {
    const tours = await Tour.find();
    response.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    response.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

const getTour = async (request, response) => {
  try {
    const tour = await Tour.findById(request.params.id);
    //Tour.findOne({_id:request.params.id})
    response.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    response.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

const createTour = async (request, response) => {
  try {
    console.log(request.body);
    const newTour = await Tour.create(request.body);

    response.status(201).json({
      status: 'success',
      data: {
        tours: newTour,
      },
    });
  } catch (error) {
    response.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

const updateTour = async (request, response) => {
  try {
    const tour = await Tour.findByIdAndUpdate(request.params.id, request.body, {
      new: true,
      runValidators: true,
    });
    response.status(200).json({
      status: 'success',
      data: {
        tour: tour,
      },
    });
  } catch (err) {
    response.status(400).json({
      status: 'fail',
      message: 'Invalid data sent!',
    });
  }
};

const deleteTour = async (request, response) => {
  try {
    await Tour.findByIdAndDelete(request.params.id);
    response.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    response.status(404).json({
      status: 'fail',
      message: 'Invalid data sent!',
    });
  }
};

module.exports = {
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
};
