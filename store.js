import {init} from '@rematch/core';
import createRematchPersist from '@rematch/persist';
import AsyncStorage from '@react-native-community/async-storage';

import * as models from './app/rematch/models';

const persistPlugin = createRematchPersist({
  key: 'root',
  storage: AsyncStorage,
  throttle: 5000,
  blacklist: ['navigation'],
  version: 1,
});

const store = init({
  state: {},
  models,
  plugins: [persistPlugin],
});

export default store;
