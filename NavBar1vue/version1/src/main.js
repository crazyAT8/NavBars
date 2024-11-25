import { createApp } from 'vue';
import App from './App.vue';
import Navbar from './components/Navbar.vue';

const app = createApp(App);

// Global registration
app.component('Navbar', Navbar);

app.mount('#app');
