import express from 'express';

const authRoutes = (): express.Router => {
  const router = express.Router();

  router
    .route('/')
    .get();

  return router;
};

export default authRoutes;
