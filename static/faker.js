//导入数据
import bannerImgData from "./bannerImg.json"
import patitionImgData from "./patition.json"

//事先吧编译后的资源作为一个模板加载进来
var banner_images = require.context('./pic/banner', false, /\.(png|jpg|gif|svg)$/)
var patition_images = require.context('./pic/patition', false, /\.(png|jpg|gif|svg)$/)

//相对路径拼接
bannerImgData.forEach((x)=> {
    x.url = banner_images('./' + x.url)
})
patitionImgData.forEach((x)=> {
    x.img_url = patition_images('./' + x.img_url)
})


//输出对象里面包含的方法
export default{
    bannerImgData() {
        return bannerImgData
    },
    patitionImgData() {
      return patitionImgData
    }
}
