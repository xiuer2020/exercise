const url = 'http://localhost:4000'
const getData = (path) => fetch(url + path).then(res => res.json())

//推荐歌单
export const RECOMMEND_MUSIC = function (limit = 6) {
    return getData('/personalized?limit=' + limit)
}

// 推荐新音乐
export const RECOMMEND_NEWSONG = function () {
    return getData('/personalized/newsong')
}