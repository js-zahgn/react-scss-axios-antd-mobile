import axios from 'axios'

const BaseUrl = 'https://www.easy-mock.com/mock/5b3cbb92eaf38c457dee360d/example'
const LocalUrl = 'http://localhost:2018'

export const Url = {
  getTotalData: `${BaseUrl}/getData`,
  getGoodsInfo: `${BaseUrl}/getGoodsInfo`,
  registerUser: `${LocalUrl}/user/register`,
  changePassword: `${LocalUrl}/user/changePassword`,
  login: `${LocalUrl}/user/login`,
  testDataList: `${LocalUrl}/list/getList`,
  getDetailGoodsInfo: `${LocalUrl}/goods/getDetailGoodsInfo`,
  getCategoryList: `${LocalUrl}/goods/getCategoryList`,
  getCategorySub: `${LocalUrl}/goods/getCategorySub`,
  getGoodsByCategorySubId: `${LocalUrl}/goods/getGoodsListByCategorySubID`,
  getGoodsListByName: `${LocalUrl}/goods/getGoodsListByName`
}

axios.interceptors.request.use(config =>{
  config.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  return config
}, error => {
  return Promise.reject(error)
});

axios.interceptors.response.use(data => {
  return data;
}, error => {
  // switch (error.response.status){
  //   case 400:
  //   case 500:
  //     break;
  //   case 401:
  //     break;
  //   default:
  //     alert('网络出错，请稍后重试');
  //     break;
  // }
  return Promise.reject(error)
});

export const Http = axios;