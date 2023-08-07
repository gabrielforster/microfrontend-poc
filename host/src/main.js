import { createApp, defineAsyncComponent } from 'vue'
import './style.css'
import App from './App.vue'

import Customers from 'customers/Customers'
import Invoices from 'invoices/Invoices'

const app = createApp(App)

app.component('Customers', Customers)
app.component('Invoices', Invoices)

app.mount('#app')
