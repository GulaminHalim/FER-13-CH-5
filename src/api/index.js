import { handler } from "./handler";


export default({
    LoginAdmin: (body, queryParams) => handler.post('/admin/auth/login', body, {params: queryParams}),
    getCars: (queryParams) => handler.get('/admin/v2/car', {params: queryParams}),
    getOrder: () => handler.get('/admin/v2/order')
});