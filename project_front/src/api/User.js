import { user } from './index';

function getUserDetail(reqData) {
  return user.post('/getUserDetail', reqData);
}


export {
  getUserDetail,
};
