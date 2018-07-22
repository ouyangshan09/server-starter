// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import Home from '../../../app/controller/home';
import News from '../../../app/controller/news';
import Sql from '../../../app/controller/sql';

declare module 'egg' {
  interface IController {
    home: Home;
    news: News;
    sql: Sql;
  }
}
