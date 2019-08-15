import './app.scss';
import TappProject from './tapp';

const init = async () => {
    'use strict';

    try {
        await chayns.ready;
        chayns.ui.initAll();

        TappProject();
    } catch (err) {
        console.error('No chayns environment found', err);
    }
};

init();
