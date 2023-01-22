import { createBrowserRouter, RouteObject } from 'react-router-dom'
import { main } from '@/router/main'

const route: RouteObject[] = [...main]

export default createBrowserRouter(route)
