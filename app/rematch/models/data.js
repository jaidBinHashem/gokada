export default {
  state: {
    users: [],
    lastUpdatedTime: null,
    serverUpdateTime: null,
  },
  reducers: {
    setData(state, payload) {
      return {
        ...state,
        users: payload,
        lastUpdatedTime: new Date(),
      };
    },
    setNewServerDate(state, payload) {
      return {
        ...state,
        serverUpdateTime: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async loadData() {
      let response = await fetch('https://pastebin.com/raw/EuC45g2M', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      let data = await response.json();
      dispatch.data.setData(data);
    },
    async checkLastUpdated() {
      let response = await fetch('https://pastebin.com/raw/sBtiMjeY', {
        headers: {
          'Content-Type': 'application/json',
          'cache-control': 'no-cache',
          pragma: 'no-cache',
          Accept: 'application/json',
        },
      });

      let {lastUpdated: newServerUpdateTime} = await response.json();
      dispatch.data.setNewServerDate(newServerUpdateTime);
    },
  }),
};
