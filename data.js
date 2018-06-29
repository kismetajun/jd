let express=require('express')
let jd=express()

function setMyHeader(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By",' 3.2.1')
  res.setHeader("Content-Type", "application/json;charset=utf-8");
}

let hotImg=[{title:'电风扇',isclick:false,id:1,src:'https://img20.360buyimg.com/focus/jfs/t17962/238/2678578741/19614/71205ad3/5b056472N771896da.png'},
  {title:'手机',isclick:false,id:2,src:"https://img11.360buyimg.com/focus/jfs/t21388/146/237407622/26923/221da1b3/5b054fedN2ba90518.jpg"},
  {title:'空调',isclick:false,id:3,src:'https://img30.360buyimg.com/focus/jfs/t22051/318/235303191/9297/c5ea2761/5b055000N410a7553.png'},
  {title:"充电宝",isclick:false,id:4,src:'https://img20.360buyimg.com/focus/jfs/t22300/73/231945461/4142/40db87e3/5b055011Nb89b2bda.png'},
  {title:'蓝牙耳机',isclick:false,id:5,src:'https://img30.360buyimg.com/focus/jfs/t19705/34/2693294559/3094/5f38bd0b/5b05507eN6a4152bc.jpg'},
  {title:'蚊帐',isclick:false,id:6,src:'https://img20.360buyimg.com/focus/jfs/t17347/267/2693789922/24957/5e2ff705/5b056485N5ff83ec1.png'},
  {title:'凉席',isclick:false,id:7,src:'https://img13.360buyimg.com/focus/jfs/t19792/196/2650240166/22152/3cade383/5b05648bN0b429032.png'},
  {title:'耳机',isclick:false,id:8,src:'https://img20.360buyimg.com/focus/jfs/t20128/208/216721929/9242/472993da/5b05522dNa2aae1bb.png'},
  {title:'电饭煲',isclick:false,id:9,src:"https://img30.360buyimg.com/focus/jfs/t19654/268/2639299825/8766/1224c568/5b055225N991ebfb0.png"},
  {title:'空调挂机',isclick:false,id:10,src:'https://img30.360buyimg.com/focus/jfs/t19654/268/2639299825/8766/1224c568/5b055225N991ebfb0.png'},
  {title:'路由器',isclick:false,id:11,src:'https://img20.360buyimg.com/focus/jfs/t21715/149/246679831/16257/ddbf2036/5b0565a7N8dbc0017.png'},
  {title:'空调扇',isclick:false,id:12,src:'https://img11.360buyimg.com/focus/jfs/t19963/2/695987521/18365/702605d5/5b0552f2Nac9a0c92.png'},
  {title:'男鞋',isclick:false,id:13,src:'https://img13.360buyimg.com/focus/jfs/t18037/160/2694437684/22707/4ab8fe1a/5b0552eaNbc8f1bda.png'},
  {title:'热水器',isclick:false,id:14,src:'https://img10.360buyimg.com/focus/jfs/t21889/345/237339526/13219/a0f0704/5b055235Nf8fb2d6c.png'},
  {title:'防晒',isclick:false,id:15,src:'https://img30.360buyimg.com/focus/jfs/t20047/53/692421098/24627/f9785550/5b055644Nf0b93238.jpg'}]
let hotImg1=[{id:16,src:'https://img20.360buyimg.com/focus/jfs/t21115/83/225125274/13856/5473fb3f/5b0567c1N59d53b27.png',isclick:false,title:'冰箱'},
  {id:17,title:'洗衣机',isclick:false,src:'https://img14.360buyimg.com/focus/jfs/t21664/15/237213959/24996/a3c6c7d6/5b0567c7N9cc1c355.png'},
  {id:18,title:'电视',isclick:false,src:'https://img12.360buyimg.com/focus/jfs/t18106/218/2672347202/29951/3618e960/5b0567cdN275fbcdd.png'}]
let hotImg2=[{isclick:false,id:19,src:'https://img30.360buyimg.com/focus/jfs/t16333/58/1091559738/36108/3a56903e/5a4f4872Ndb69555f.png',title:'华为手机'},
  {isclick:false,title:'小米手机',id:20,src:'https://img20.360buyimg.com/focus/jfs/t16366/16/1307996090/39842/dbaa3c73/5a4f4867Ncb588473.png'},
  {title:'苹果',isclick:false,id:21,src:'https://img30.360buyimg.com/focus/jfs/t14245/137/2069922478/30524/1e8fc597/5a69d582N25086304.png'}]
let nav=[
  {title:'热门推荐',id:1,to:'/minapp/classify/one'},
  {title:'手机数码',id:2,to:'/minapp/classify/two'},
  {title:'家电用器',id:3,to:'/minapp/classify/thr'},
  {title:'电脑办公',id:4,to:'/minapp/classify/four'},
  {title:'计生情趣',id:5,to:'/minapp/classify/five'},
  {title:'美妆护肤',id:6,to:'/minapp/classify/six'},
  {title:'个护清洁',id:7,to:'/minapp/classify/seven'},
  {title:'汽车用品',id:8,to:'/minapp/classify/seven'},
  {title:'京东超市',id:9,to:'/minapp/classify/seven'},
  {title:'男装',id:10,to:'/minapp/classify/seven'},
  {title:'男鞋',id:11,to:'/minapp/classify/seven'},
  {title:'女装',id:12,to:'/minapp/classify/seven'},
  {title:'女鞋',id:13,to:'/minapp/classify/seven'},
  {title:'母婴童装',id:14,to:'/minapp/classify/seven'},
  {title:'运动户外',id:15,to:'/minapp/classify/seven'},
  {title:'内衣配饰',id:16,to:'/minapp/classify/seven'},
  {title:'食品生鲜',id:17,to:'/minapp/classify/seven'},
  {title:'酒水饮料',id:18,to:'/minapp/classify/seven'},
  {title:'家具家装',id:19,to:'/minapp/classify/seven'},
  {title:'家居厨具',id:20,to:'/minapp/classify/seven'},
]


let fan=[
  {
    data:[
      {num:1,is:false,detail:'【风动全城 全民消暑！舒心解意，格力伴你静享品质清凉风】LED触摸显示屏，80度广角送风，附带香薰功能，6m远程遥控，3种风类，3档风速，7h定时预约，便捷拆洗设计，经典贝壳造型，静享清新柔风》》格力风扇专场',title:'格力（GREE）FL-09X61Bh 柔风易拆洗遥控塔扇/无叶风扇/电风扇',isFollow:false,mid:1,say:'5万条评价 好评率98%',price:329.00,good1:'遥控控制',good2:'易拆洗',
        srcz:'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t7792/270/1427377021/1088/6d981d81/599cf545Na1f3ceb4.png',
        src:'https://img12.360buyimg.com/n2/s240x240_jfs/t21394/248/1482816370/114405/2beb8dcf/5b2a5ed4N651f05b1.jpg!q70.jpg',
       src1:'http://m.360buyimg.com/mobilecms/s750x750_jfs/t22183/147/426270487/44518/c68b29a1/5b0d33edNbbd16e12.jpg!q80.dpg',
      src2:'http://m.360buyimg.com/mobilecms/s750x750_jfs/t17323/127/1072020795/33649/3e4270d3/5ab9ec8eNc928f08a.jpg!q80.dpg',
      src3:'http://m.360buyimg.com/mobilecms/s750x750_jfs/t17839/257/1082762998/58382/4f378c12/5ab9ec8eNaf95acac.jpg!q80.dpg',
      src4:'http://m.360buyimg.com/mobilecms/s750x750_jfs/t18874/284/771475030/80128/5c840832/5aa5e1b1N97b069e4.jpg!q80.dpg',},
  {num:1,is:false,detail:'【到手仅199！满199减10元！自营旗舰五叶遥控落地扇！世界500强品质保证】爆售超150万台！9种风量特设静音档！7H遥控预约定时安心省力！5片航空翼型扇叶柔和出风！LED大屏显示更多清凉好货',title:'美的（Midea）FS40-13ER 五叶遥控落地扇/电风扇',isFollow:false,mid:2,say:'49万条评价 好评率98%',price:209.00,good1:'遥控控制',good2:'多叶柔风',
    srcz:'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t7792/270/1427377021/1088/6d981d81/599cf545Na1f3ceb4.png',
    src:'https://img10.360buyimg.com/n2/s240x240_jfs/t23545/212/296776452/187321/72845cc5/5b2b54f0N0af808ed.jpg!q70.jpg.webp',
     src1:'http://m.360buyimg.com/mobilecms/s750x750_jfs/t20671/229/316693511/78876/8015089b/5b092faeNa1e50704.jpg!q80.dpg',
    src2:'http://m.360buyimg.com/mobilecms/s750x750_jfs/t2842/190/1889826552/271512/2e53b8f/574d4c85N6462f7b5.jpg!q80.dpg',
    src3:'http://m.360buyimg.com/mobilecms/s750x750_jfs/t18595/125/2422018682/102220/e1b5a29f/5af26287N15a0de45.jpg!q80.dpg',
    src4:'http://m.360buyimg.com/mobilecms/s750x750_jfs/t16741/315/2340066220/41058/f09b73a5/5af2628cNc1c1074a.jpg!q80.dpg',},
  {num:1,is:false,detail:'【秒杀价299元！风动全城 全民消暑！】上市半年爆售14万台！安全无叶静柔无声，智能遥控，3档风量调节，渐弱式静音睡眠风，特有香薰功能，防倾倒设计，时尚外观点缀家居！更多特惠',title:' 艾美特（Airmate）电风扇 塔扇 无叶风扇 遥控 带香薰功能 FT41R',isFollow:false,mid:3,say:'8万条评价 好评率98%',price:299.00,good1:'',good2:'易拆洗',
    srcz:'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t7792/270/1427377021/1088/6d981d81/599cf545Na1f3ceb4.png',
    src:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t20518/325/545870704/137793/b8b7cdaa/5b0fdce7N35af8b3b.jpg!q80.dpg',
    src1:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t20827/41/879913553/160607/8006660a/5b1a5304N75d4bd48.jpg!q80.dpg',
    src2:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t4189/20/762643775/303080/c8eeefb1/58b95e5cN5fc35cf2.jpg!q80.dpg',
    src3:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t3046/231/7664908200/253097/689a1560/58b95e70N973a0456.jpg!q80.dpg',
    src4:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t5899/101/7132744658/157184/8fd121af/596efbe5Nb5d6065c.jpg!q80.dpg',
  },
  {num:1,is:false,detail:'【风动全城 全民消暑！舒心解意，格力伴你静享品质清凉风】半年爆售25万台，5叶舒爽柔风，6米远程遥控，3档风速，3种风类，1级能效，7.5小时定时！静享睡眠，动享酷暑！》》格力风扇专场',title:'格力（GREE）FD-40X64Bh5 五叶遥控落地扇/电风扇',say:'15万条评价 好评率98%',isFollow:false,mid:4,price:209,good1:'遥控控制',good2:'多页柔风',
    srcz:'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t7792/270/1427377021/1088/6d981d81/599cf545Na1f3ceb4.png',
    src:'https://img14.360buyimg.com/n2/s240x240_jfs/t24514/280/266418579/114159/22f88314/5b2a5cb2Nf6f41805.jpg!q70.jpg.webp',
    src1:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t20683/347/166515740/607259/7c763e9b/5affeee0N82f23bc2.png!q80.webp',
    src2:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t14377/272/1004546345/159674/55e30bfd/5a405310Naebfc87f.jpg!q80.dpg',
    src3:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t16243/26/857596706/153413/b73d5508/5a40530cN00656ce1.jpg!q80.dpg',
    src4:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t12952/321/2456950980/118879/2a7b75ce/5a405315N7abdca20.jpg!q80.dpg',


  },
  {num:1,is:false,detail:'【到手仅199！满199减10元！自营旗舰五叶遥控落地扇！世界500强品质保证】爆售超150万台！9种风量特设静音档！7H遥控预约定时安心省力！5片航空翼型扇叶柔和出风！LED大屏显示更多清凉好货',title:'美的（Midea） FS40-13GR 大风量电风扇/落地扇/智能家用电风扇/遥控风扇电扇',isFollow:false,mid:5,say:'5万条评价 好评率98%',price:239,good1:'遥控控制',good2:'易拆洗',
    srcz:'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t7792/270/1427377021/1088/6d981d81/599cf545Na1f3ceb4.png',
    src:'https://img13.360buyimg.com/n2/s240x240_jfs/t20575/40/1501415497/374201/882a63c3/5b2b0976Nf93613a4.jpg!q70.jpg.webp',
    src1:'https://img13.360buyimg.com/n2/s240x240_jfs/t20575/40/1501415497/374201/882a63c3/5b2b0976Nf93613a4.jpg!q70.jpg.webp',
    src2:'https://img13.360buyimg.com/n2/s240x240_jfs/t20575/40/1501415497/374201/882a63c3/5b2b0976Nf93613a4.jpg!q70.jpg.webp',
    src3:'https://img13.360buyimg.com/n2/s240x240_jfs/t20575/40/1501415497/374201/882a63c3/5b2b0976Nf93613a4.jpg!q70.jpg.webp',
    src4:'https://img13.360buyimg.com/n2/s240x240_jfs/t20575/40/1501415497/374201/882a63c3/5b2b0976Nf93613a4.jpg!q70.jpg.webp',
  },],
    id:1
  }
  ]

jd.get('/getHotImg',function (req,res) {
   setMyHeader(res);
   res.send(JSON.stringify(hotImg))
})
jd.get('/getHotImg1',function (req,res) {
  setMyHeader(res);
  res.send(JSON.stringify(hotImg1))
})
jd.get('/getHotImg2',function (req,res) {
  setMyHeader(res);
  res.send(JSON.stringify(hotImg2))
})
jd.get('/getNav',function (req,res) {
  setMyHeader(res)
  res.send(JSON.stringify(nav))
})
jd.get('/getIsclick',function (req,res) {
  let id=req.query.num
  hotImg.forEach((value,)=>{
    show(value,id)
  })
  hotImg1.forEach((value)=>{
    show(value,id)
  })
  hotImg2.forEach((value)=>{
    show(value,id)
  })
  setMyHeader(res),
    res.send('ok')
})

//获取浏览足迹
jd.get('/getOld',function (req,res) {

  let data=[];
  data=[];
  hotImg.forEach((val)=>{
    if(val.isclick){
      data.push(val)
    }
  })
  hotImg1.forEach((val)=>{
    if(val.isclick){
      data.push(val)
    }
  })
  hotImg2.forEach((val)=>{
    if(val.isclick){
      data.push(val)
    }
  })
  if(data.length>0){
    data.push({msg:true})
  }else{
    data.push({msg:false})
  }
  setMyHeader(res)

  res.send(JSON.stringify(data))
})

//清空所有浏览足迹
jd.get('/clearOld',function (req,res) {
  hotImg.forEach((val)=>{
    val.isclick=false
  })
  hotImg1.forEach((val)=>{
    val.isclick=false
  })
  hotImg2.forEach((val)=>{
    val.isclick=false
  })
  setMyHeader(res)
  res.send({msg:'ok'})
})

//获取每个一类商品的详情页
jd.get('/getSomeClass',function (req,res) {
  let data='';
  fan.forEach((val)=>{
    if(val.id==req.query.id){
       data=val.data
    }
  })
  setMyHeader(res)
  res.send(JSON.stringify(data))
})

jd.get('/getMany',function (req,res) {
  let num=req.query.id
  let msg=''
  fan.forEach(val=>{
    if(val.id==1){
      val.data.forEach(v=>{
        if(v.mid==num){
          msg=v
        }
      })
    }
  })
  setMyHeader(res)
  res.send(JSON.stringify(msg))
})

//判断是否收藏
jd.get('/addCar',function (req,res) {
  let numbers=req.query.num
  let id=req.query.id
  fan.forEach(v=>{
    if(v.id==1){
      v.data.forEach(val=>{
        if(val.mid==id){
          val.isFollow=true
          val.num=numbers
        }
      })
    }
  })
  setMyHeader(res)
  res.send({msg:'ok'})
})

//寻找为true的isfollow

jd.get('/foundTrue',function (req,res) {
  let arr=[]
  let n=0;
  arr=[]
  n=0
  fan.forEach(val=>{
    if(val.id==1){
      val.data.forEach(v=>{
        if(v.isFollow){
          arr.push(v)
          n++
        }
      })
    }
  })
  setMyHeader(res)
  res.send(JSON.stringify({msg:arr,ns:n}))
})

//修改数量
jd.get('/makeNum',function (req,res) {
  let v1=req.query.value1
  let v2=req.query.value2
  // console.log(v1,v2)
  fan.forEach(val=>{
    if(val.id==1){
      val.data.forEach(v=>{
        if(v.mid==v2){
          v.num=Number(v1)
          // console.log(v.num)
        }
      })
    }
  })
  setMyHeader(res)
  res.send(JSON.stringify({msg:'ok'}))
})

//取消购物车

jd.get('/delBuy',function (req,res) {
   let id=req.query.id
   // let s=req.query.is
  let s=''
   fan.forEach(val=>{
     if(val.id==1){
       val.data.forEach(v=>{
         console.log(id)
         if(v.mid==id){
           v.is=!v.is
           s=v.is
         }
       })
     }
   })
  // console.log(s,id)
   setMyHeader(res)
   res.send(JSON.stringify({msg:s,n:id}))
})


jd.get('/changBuy',function (req,res) {
  let id=req.query.id
  fan.forEach(c=>{
    if(c.id==1){
      c.data.forEach(v=>{
        if(v.mid==id){
          v.isFollow=false
        }
      })
    }
  })
  setMyHeader(res)
  res.send(JSON.stringify({msg:'ok'}))
})

jd.listen(10086,function () {
  console.log('is running in prot 10086')
})



function show(v,id){
  if(v.id==id){
      v.isclick=true
  }
}


