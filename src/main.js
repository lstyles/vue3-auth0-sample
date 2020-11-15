import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import authConfig from '../auth_config.json'
import { setupAuth } from './auth'

let app = createApp(App).use(store).use(router)

function callbackRedirect(appState) {
  router.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : '/'
  );
}

setupAuth(authConfig, callbackRedirect).then((auth) => {
  app.use(auth).mount('#app')
})
