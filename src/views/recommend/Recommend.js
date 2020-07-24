import React, {Component} from "react";
import {Flex, List} from "antd-mobile";
import MusicListItem from "../../widget/musiclist/MusicListItem";
import './recommend.scss'
import {RECOMMEND_MUSIC, RECOMMEND_NEWSONG} from '../../api'

function getPlayCount(count) {
    let num = count / 10000
    if (num < 1) {
        return num
    } else if (num >= 1 && num < 10000) {
        return Math.floor(num * 10) / 10 + '万'
    } else {
        return Math.floor(num / 1000) / 10 + '亿'
    }
}

class Recommend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            music: [],
            songs: []
        }
    }

    async getRecommendData() {
        let music = await RECOMMEND_MUSIC(6)
        // console.log(data.result)
        this.setState({
            music: music.result
        })

        let songs = await RECOMMEND_NEWSONG()
        console.log(songs.result)
        this.setState({
            songs: songs.result
        })

    }

    componentDidMount() {
        // 使用 fetch
        this.getRecommendData()
    }

    render() {
        const {music, songs} = this.state
        return (
            <div className="app-view">
                <div className="recommend-title">
                    推荐歌单
                </div>
                <Flex wrap="wrap" justify="between" align="start">
                    {music.map(m => (
                            <div key={m.id} className="grid-item">
                                <div className="grid-icon">
                                    <span className="play-count">{getPlayCount(m.playCount)}</span>
                                    <img className="grid-img" alt={m.copywriter} src={m.picUrl}/>
                                </div>
                                <p className="grid-name">{m.name}</p>
                            </div>
                        )
                    )}
                </Flex>
                <div className="recommend-title">
                    最新音乐
                </div>
                <List>
                    {
                        songs.map(s => (
                            <MusicListItem
                                key={s.id}
                                id={s.id}
                                name={s.name}
                                alias={s.song.alias}
                                artists={s.song.artists}
                            />))
                    }
                </List>
            </div>
        )
    }
}

export default Recommend