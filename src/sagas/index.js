import wetter from './wetter/wetterSaga';

function* rootSaga() {
    yield [wetter(),
    ];
}

export default rootSaga;
