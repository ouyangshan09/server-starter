// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import News from '../../../app/service/news';
import Sql from '../../../app/service/sql';

declare module 'egg' {
  interface IService {
    news: News;
    sql: Sql;
  }
}
