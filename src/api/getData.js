import axios from 'axios'


axios.defaults.baseURL='http://localhost:10086'


function getHotImg(){
  return axios.get('/getHotImg')
}
function getHotImg1(){
  return axios.get('/getHotImg1')
}
function getHotImg2(){
  return axios.get('/getHotImg2')
}

function getNav(){
  return axios.get('/getNav')
}

function getFan(num,isclick) {
  return axios.get('/getIsclick?num='+num+'&isclick='+isclick)
}

function getOld() {
  return axios.get('/getOld')
}

function clearOld() {
  return axios.get('/clearOld')
}

//获取一类的商品的后台
function getClass(num) {
  return axios.get('/getSomeClass?id='+num)
}

//传递数据获取详细的页面
function getDetail(num) {
  return axios.get('/getMany?id='+num)
}

//加入购物车
function addFollow(number,num) {
  return axios.get('/addCar?id='+number+'&num='+num)
}

//通过判断条件添加购物车
function addBuy() {
  return axios.get('/foundTrue')
}

//修改购物车的数量
function makeNum(v1,v2) {
  return axios.get('/makeNum?value1='+v1+'&value2='+v2)
}

//删除购物车
function delBuy(n1,n2) {
  return axios.get('/delBuy?id='+n1+'&+is'+n2)
}

//编辑购物车
function changeBuy(nm) {
   return axios.get('/changBuy?id='+nm)
}

export {getHotImg,getNav,getHotImg1,getHotImg2,getFan,getOld,clearOld,getClass,getDetail,addFollow,addBuy,makeNum,delBuy,changeBuy}
