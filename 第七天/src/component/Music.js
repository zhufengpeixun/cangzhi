import React from 'react';

let dreamJPG = require('../static/images/dream.jpg'),
    dreamAUDIO = require('../static/audio/dream.m4a');

export default class Music extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div>
            <img src={dreamJPG} alt="" className="backgroundImg"/>
            <div className="backgroundMark"></div>

            <audio src={dreamAUDIO} preload="none"></audio>

            <header className="headerBox">
                <img src={dreamJPG} alt="" className="pic"/>
                <div className="title">
                    <h1>我的梦（华为铃声）-Live</h1>
                    <h2>张韶涵</h2>
                </div>
                <a href="javascript:;" className="playBtn"></a>
            </header>

            <section className="contentBox">
                <div className="wrapper">

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