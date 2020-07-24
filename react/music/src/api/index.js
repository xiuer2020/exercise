// 基础url
const url = "localhost:4000";
// 获取数据
const getData = path => fetch(url + path).then(res => res.json);
// 推荐歌单
const RECOMMEND_PLAYLIST  = getData('/personalized?limit=6');
// 推荐音乐
const RECOMMEND_NEWSONGS  = getData('/personalized/newsong');
// 导出
export {RECOMMEND_PLAYLIST, RECOMMEND_NEWSONGS};