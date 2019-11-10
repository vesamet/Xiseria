import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    view: 'vault',
    selection: {
      vault: '14bd304a-718e-42bd-a21d-d76aa2869bb3',
      page: ''
    },
    user: {
      firstname: 'Aaricia',
      lastname: 'Quenault'
    },
    vaults: [
      {
        id: '14bd304a-718e-42bd-a21d-d76aa2869bb3',
        name: 'Personal Vault',
        pages: [
          {
            id: 'papa1',
            title: 'Journaux',
            content: [
              { id: '6594b6c3-5f3e-45ef-afb0-142176e4e9ac', type: 'text', value: 'va😃😃l😃u 😃' },
              { id: '6594b6c3-5f3e-45ef-afb0-142176e4e9at', type: 'text', value: 'val😃gulus 😃' },
              { id: '6594b6c3-5f3e-45ef-afb0-142176e4e9ay', type: 'text', value: 'va😃la😃li😃iis 😃' },
            ],
            created_at: null,
            updated_at: null,
          },
          {
            id: '38320dad-fae5-46f0-fgfgfg515',
            title: 'Journal 1',
            content: [
              { id: '6594b6c3-5f3e-45ef-afb0-cvc76e4e9ac', type: 'text', value: 'valar morgu 😃' },
              { id: '6594b6c3-5f3e-45ef-afcvcv2176e4e9at', type: 'text', value: 'valar morgulus 😃' },
              { id: '6594b6c3-5f3e-45ef-cvcv-142176e4e9ay', type: 'text', value: 'va😃lar 😃😃😃😃😃😃morguliiiiis 😃' },
            ],
            parent: 'papa1',
            created_at: null,
            updated_at: null,
          },
          {
            id: '38320dad-fae5-46f0-bf3f-86ecf1ddds5',
            title: 'Journal 2',
            content: [
              { id: '6594b6c3-5fff3e-45ecvcv-142176e4e9ac', type: 'text', value: 'valar morgu 😃' },
              { id: '6594b6c3-5f3ffffgge-45ef-afb0-142176e4e9at', type: 'text', value: 'valar morgulus 😃' },
              { id: '6594b6cdf3-5f3e-45ef-aggfb0-142176e4e9ay', type: 'text', value: 'vala😃😃😃😃r morguliiiiis 😃' },
            ],
            parent: 'papa1',
            created_at: null,
            updated_at: null,
          },
          {
            id: '38320dad-fae5-46f0-gghggh',
            title: 'Journal 3',
            content: [
              { id: '6594b6c3-5f3e-45ef-afb0-fgfh142176e4e9ac', type: 'text', value: 'valar morgu 😃' },
              { id: '6594b6c3-5fgfgf3e-45ef-afb0-142176e4e9at', type: 'text', value: 'valar morgulus 😃' },
              { id: '6594b6c3-5f3e-45ef-afb0-14fgfghh2176e4e9ay', type: 'text', value: 'vala😃😃r morguliiiiis 😃' },
            ],
            parent: 'papa1',
            created_at: null,
            updated_at: null,
          }
        ]
      },
      {
        id: '10bd304a-718e-42bd-a21d-d7dfg2869bb3',
        name: 'Personal Vault 2',
        pages: [
          {
            id: '38320dad-fae5-46f0-bf3f-86ecf15695ddfdf',
            title: 'Journal 3',
            content: [
              { id: '6594b6cffgggg3-5f3e-45ef-afb0-142176e4e9ac', type: 'text', value: 'valar😃 morgu😃 😃' },
              { id: '6594b6c3-5f3e-4hhhgfgg5ef-afb0-142176e4e9at', type: 'text', value: 'valar 😃morgulus 😃' },
              { id: '6594b6c3-5f3e-45ef-afffffb0-142176e4e9ay', type: 'text', value: 'valar m😃😃orguliiiiis 😃' },
            ],
            created_at: null,
            updated_at: null,
          }
        ]
      }
    ],
  },
  getters: {
    pagesTree: state => {
      var vaultKey = -1;
      var selectedVault = state.selection.vault;
      var vaults = state.vaults;

      _.forEach(vaults, function (vault, key) {
        if (vault.id == selectedVault) {
          vaultKey = key;
        }
      });

      function treeify(list, idAttr, parentAttr, childrenAttr) {
        if (!idAttr) idAttr = "id";
        if (!parentAttr) parentAttr = "parent";
        if (!childrenAttr) childrenAttr = "children";
        var treeList = [];
        var lookup = {};
        list.forEach(function (obj) {
          lookup[obj[idAttr]] = obj;
          obj[childrenAttr] = [];
        });
        list.forEach(function (obj) {
          if (obj[parentAttr] != null) {
            lookup[obj[parentAttr]][childrenAttr].push(obj);
          } else {
            treeList.push(obj);
          }
        });
        return treeList;
      }
      return treeify(state.vaults[vaultKey].pages);
    },

    page: state => {
      var vaultKey = -1;
      var pageKey = -1;
      var selectedVault = state.selection.vault;
      var selectedPage = state.selection.page;
      var vaults = state.vaults;

      _.forEach(vaults, function (vault, key) {
        if (vault.id == selectedVault) {
          vaultKey = key;
        }
      });
      var pages = state.vaults[vaultKey].pages;
      _.forEach(pages, function (page, key) {
        if (page.id == selectedPage) {
          pageKey = key;
        }
      });
      return state.vaults[vaultKey].pages[pageKey];
    },
  },
  mutations: {
    updatePage(state, value) {
      // mutate state
      var vaultKey = -1;
      var pageKey = -1;
      var selectedVault = value.vault;
      var selectedPage = value.page;
      var vaults = state.vaults;

      _.forEach(vaults, function (vault, key) {
        if (vault.id == selectedVault) {
          vaultKey = key;
        }
      });
      var pages = state.vaults[vaultKey].pages;
      _.forEach(pages, function (page, key) {
        if (page.id == selectedPage) {
          pageKey = key;
        }
      });

      state.vaults[vaultKey].pages[pageKey].content = value.content
    },
    setVault(state, value) {
      state.selection.vault = value
    },
    setPage(state, value) {
      state.selection.page = value
    },
    setView(state, value) {
      state.view = value
    }
  },
  actions: {
  },
  modules: {
  }
})
