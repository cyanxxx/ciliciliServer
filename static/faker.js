import bannerImgData from "./bannerImg.json"

var banner_images = require.context('./pic/banner', false, /\.(png|jpg|gif|svg)$/)


bannerImgData.forEach((x)=> {
    x.url = banner_images('./' + x.url)
})



export default {
    bannerImgData() {
        return bannerImgData
    }
}
