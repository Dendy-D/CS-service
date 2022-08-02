import express from 'express';
import basicAuth from 'basic-auth';

// import { sequelize } from '../database/db';
import Admin from '../models/Admin';
import { UNAUTHORIZED_DATA_ERR } from '../utils/constants';

const adminAuth = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const unauthorized = () => {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return UNAUTHORIZED_DATA_ERR;
  };

  const user = basicAuth(req);

  if (!user || !user.name || !user.pass) {
    return unauthorized();
  }

  // sequelize.sync();

  try {
    const admins = await Admin.findAll({ raw: true});
    admins.forEach((admin: any) => {
      console.log('project name ', admin.login);
    });
  } catch(err) {
    console.log('Oops! something went wrong: ', err);
  }

  // if (user.name === sequelize.query())
  // if (!user || !)
};

export default adminAuth;
