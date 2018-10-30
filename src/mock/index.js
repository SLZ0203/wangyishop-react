import Mock from 'mockjs'
import home from './msite.json'
import shiWu from './shiwu.json'
import category from './category.json'

//home页面头部导航数据
Mock.mock('/homeNav',{code:0,data:home.headCateList})
//轮播图数据
Mock.mock('/homeCarousel',{code:0,data:home.focusList})
//品牌制造商数据
Mock.mock('/homeBrand',{code:0,data:home.tagList})
//新品收发数据
Mock.mock('/homeNew',{code:0,data:home.newItemList})
//人气好物数据
Mock.mock('/homeGood',{code:0,data:home.popularItemList})
//专题精选数据
Mock.mock('/homeSpecial',{code:0,data:home.topicList})
//居家好物及其他
Mock.mock('/homeShops',{code:0,data:home.cateList})


//shiWu组件中头部大图轮播数据
Mock.mock('/swiperContainer',{code:0,data:shiWu.banner})
//shiWu组件中头部小图轮播数据
Mock.mock('/shiWuCarouselScroll',{code:0,data:shiWu.column})
//为你推荐数据
Mock.mock('/shiWuRecommend',{code:0,data:shiWu.recommend})
//十点一刻数据
Mock.mock('/shiWuShiDian',{code:0,data:shiWu.tenfifteen})
//严选甄品数据
Mock.mock('/shiWuZhenPin',{code:0,data:shiWu.zhenpin})
//严选LOOK数据
Mock.mock('/shiWuLook',{code:0,data:shiWu.yxLook})
//跟多精彩数据
Mock.mock('/shiWuMore',{code:0,data:shiWu.findMore})

//分类页数据
Mock.mock('/categorys', {code:0, data: category})
