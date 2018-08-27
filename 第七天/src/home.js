import React from 'react';
import ReactDOM, {render} from 'react-dom';

import './static/css/reset.min.css';
import Nav from "./component/jd_home/Nav";
import Banner from "./component/jd_home/Banner";

render(<main>
    <Nav/>
    <Banner/>
</main>, window.root);