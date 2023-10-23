import { createApp, createVNode } from 'vue'
import './hub.js'

const Shell = ({ cid }) => createVNode('main', null, 'main')

const app = createApp(Shell, { })
app.config.errorHandler = console.error
app.mount('shell')
