import React from 'react';
import axios from 'axios';

let dreamJPG = require('../static/images/dream.jpg'),
    dreamAUDIO = require('../static/audio/dream.m4a');

export default class Music extends React.Component {
    constructor(props, context) {
        super(props, context);

        //=>构建数据模型：使用组件的状态
        this.state = {
            lyricDATA: []
        };
    }

    async componentDidMount() {
        //=>第一次加载之后：我们只需要获取到数据，并且更新数据模型中的数据内容，组件视图部分会自动刷新，无需我们自己动态操作DOM
        let result = await axios.get('http://localhost:3000/data.json');
        setTimeout(() => {
            let {data} = result;
            this.setState({
                lyricDATA: data
            });
        }, 1000);
    }


    render() {
        let HTML = document.documentElement,
            FONT = parseFloat(HTML.style.fontSize),
            WINH = HTML.clientHeight,
            CONTENT_H = WINH / FONT - 5;

        return <div>
            <img src={dreamJPG} alt="" className="backgroundImg"/>
            <div className="backgroundMark"></div>

            <audio src={dreamAUDIO} preload="none" autoPlay></audio>

            <header className="headerBox">
                <img src={dreamJPG} alt="" className="pic"/>
                <div className="title">
                    <h1>我的梦（华为铃声）-Live</h1>
                    <h2>张韶涵</h2>
                </div>
                <a href="javascript:;" className="playBtn"></a>
            </header>

            {/*展示歌词的部分*/}
            <section className="contentBox" style={{
                height: CONTENT_H + 'rem'
            }}>
                <div className="wrapper">
                    {this.state.lyricDATA.map((item, index) => {
                        let {content, minutes, seconds} = item;
                        return <p key={index}>
                            {content}
                        </p>;
                    })}
                </div>
            </section>

            <footer className="footerBox">
                <div className="progressBox">
                    <span className="already">00:00</span>
                    <div className="progress">
                        <div className="current"></div>
                    </div>
                    <span className="duration">00:00</span>
                </div>
                <a href="javascript:;" className="downLoadBtn">下载这首音乐</a>
            </footer>
        </div>;
    }
}