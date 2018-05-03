//导入数据
import bannerImgData from "./bannerImg.json"
import patitionImgData from "./patition.json"
import liveData from "./live.json"
import spColData from "./spCol.json"
import groupVideosData from "./groupVideosData.json"
import videosData from "./videos.json"
import commentData from "./comments.json"
import articlesData from "./articles.json"

//事先把编译后的资源作为一个模板加载进来
var banner_images = require.context('./pic/banner', false, /\.(png|jpg|gif|svg)$/)
var patition_images = require.context('./pic/patition', false, /\.(png|jpg|gif|svg)$/)
var groupVideos_images = require.context('./pic/videos', false, /\.(png|jpg|gif|svg)$/)
var videos_videos = require.context('./videos',false,/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/)
var videos_images = require.context('./pic',false, /\.(png|jpg|gif|svg)$/)
var comments_images = require.context('./pic',false, /\.(png|jpg|gif|svg)$/)
var articles_images = require.context('./pic',false, /\.(png|jpg|gif|svg)$/)

//相对路径拼接
bannerImgData.forEach((x)=> {
    x.url = banner_images('./' + x.url)
})
patitionImgData.forEach((x)=> {
    x.img_url = patition_images('./' + x.img_url)
})
groupVideosData.forEach((x)=> {
    Object.keys(x.lists).forEach((y) =>{
      console.log(x.lists[y]);
      x.lists[y].forEach((e)=>{
        e.img_url = groupVideos_images('./' + e.img_url)

      })
    })
})
videosData.url = videos_videos('./'+videosData.url)
videosData.author.img_url = videos_images('./'+videosData.author.img_url)
commentData.forEach((x)=> {
    x.img_url = comments_images('./' + x.img_url)
})
articlesData.author.img_url = articles_images('./' + articlesData.author.img_url)

//输出对象里面包含的方法
export default{
    bannerImgData() {
        return bannerImgData
    },
    patitionImgData() {
      return patitionImgData
    },
    liveData(){
      return liveData
    },
    spColData(){
      return spColData
    },
    groupVideosData(){
      return groupVideosData
    },
    videosData(){
      return videosData
    },
    commentData(){
      return commentData
    },
    articlesData(){
      return articlesData
    }

}
