import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';
import reducers from './ducks';

const logger = createLogger({ collapsed: true });

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);

const rootReducer = (state, action) => {
    return reducers(state, action);
};

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStoreWithMiddleware(persistedReducer);
    let persistor = persistStore(store);
    return { store, persistor };
};