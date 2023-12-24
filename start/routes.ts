/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('blogs')
})
Route.on('/blog/create/').render('blog/create_blog')
Route.on('/blog/update/:id').render('blog/update_blog')
Route.post('blog/create/','BLogsController.create')
Route.get('blog/getall/','BLogsController.getAll')
Route.post('blog/update/:id','BLogsController.update')
Route.get('blog/delete/:id','BLogsController.delete')



