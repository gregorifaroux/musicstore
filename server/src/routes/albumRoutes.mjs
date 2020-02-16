import express from 'express';

import { readFileSync } from 'fs';
import path from 'path';

// eslint-disable-next-line no-underscore-dangle
const __dirname = path.resolve();
const data = readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const getAlbums = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: dataObj.length,
    albums: dataObj,
  });
};

const getAlbum = (req, res) => {
  const id = req.params.id * 1;
  const album = dataObj[id];
  if (!album) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  return res.status(200).json({
    status: 'success',
    results: 1,
    album,
  });
};
const router = express.Router();
router.route('/').get(getAlbums);
router.route('/:id').get(getAlbum);

export default router;
