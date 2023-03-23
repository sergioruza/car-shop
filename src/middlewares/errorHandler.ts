import { Request, Response, NextFunction } from 'express';

class ErrorHandler {
  static handle(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err.message === 'Invalid mongo id') {
      res.status(422).json({ message: err.message });
      return next();
    } if (err.message === 'Car not found') {
      res.status(404).json({ message: err.message });
      return next();
    }
    next();
    
    // switch (err.message) {
    //   case 'Invalid mongo id':
    //     res.status(422).json({ message: err.message });
    //     next();
    //   case 'Car not found':
    //     return res.status(422).json({ message: err.message });
    //   default:
    //     return res.status(422).json({ message: err.message });
    // }
  }
}

export default ErrorHandler;