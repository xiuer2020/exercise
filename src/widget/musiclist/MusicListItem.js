import React from "react";
import {List} from 'antd-mobile';
import PropTypes from 'prop-types'
import './musiclistitem.scss'

const Item = List.Item;
const Brief = Item.Brief;

function MusicListItem({id, name, alias, artists}) {
    return (
        <Item className="music-list-item"
              onClick={() => console.log(id)}
              multipleLine
              extra={<div className="play-btn"/>}
        >
            {name} {alias[0] && <span className="music-alias">({alias[0]})</span>}
            <Brief>
                {artists.map(art => art.name).join(' / ')}
            </Brief>
        </Item>
    )
}

MusicListItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    alias: PropTypes.array,
    artists: PropTypes.array
}

export default MusicListItem