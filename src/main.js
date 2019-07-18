import Vue from 'vue';
import Base from './base.js';
import client from './mixing/client.js';

Vue.mixin(client);

const { app } = Base();

app.$mount('#app');