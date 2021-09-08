import ajax from "./ajax";

//1.
export const reqAddress = (geohash) => ajax("/position/" + geohash);
//2.
export const reqFoodTypes = () => ajax("/index_category");
//3.
export const reqShopList = (longitude, latitude) =>
  ajax("/shops", { longitude, latitude });
//4.
export const reqSearchShop = (geohash, keyword) =>
  ajax("/search_shops", { geohash, keyword });
//5.
export const reqCaptcha = (captcha) => ajax("/captcha");
//6.
export const reqLogin = (name, pwd, captcha) =>
  ajax("/login_pwd", { name, pwd, captcha }, "POST");
//7.
export const reqSendCode = (phone) => ajax("/sendcode", { phone });
//8.
// export const req
