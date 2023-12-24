import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema, rules } from '@ioc:Adonis/Core/Validator';

import Blog from 'App/Models/Blog';

export default class BLogsController {
  // Create a new blog entry
  public async create({ request, response }: HttpContextContract) {
    const req = await request.validate({
        schema: schema.create({
          author: schema.string(),
          title: schema.string(),
          content: schema.string(),
        }),
        messages: {
          'author.required': 'Author name is required',
          'title.required': 'Title is required',
          'content.required': 'Content is required',
        },
      });

      const blog = new Blog();
      blog.author = req.author;
      blog.content = req.content;
      blog.title = req.title;
      await blog.save();

      return response.redirect('/');

  }

  // Get all blog entries
  public async getAll({ response }: HttpContextContract) {
    try {
      const blogs = await Blog.all();
      return response.json(blogs);
    } catch (error) {
      console.error(error);
      return response.status(500).send('Internal Server Error');
    }
  }

  // Update a blog entry
  // public async update({ params, request, response, view }: HttpContextContract) {
  //   const blog = await Blog.findOrFail(params.id);

  //   const req = await request.validate({
  //     schema: schema.create({
  //       author: schema.string(),
  //       title: schema.string(),
  //       content: schema.string(),
  //     }),
  //     messages: {
  //       'author.required': 'Author name is required',
  //       'title.required': 'Title is required',
  //       'content.required': 'Content is required',
  //     },
  //   });

  //   blog.author = req.author;
  //   blog.content = req.content;
  //   blog.title = req.title;
  //   await blog.save();

  //   return view.render('blog.update_blog', { blog });

  // }

  public async update({ params, view }: HttpContextContract) {
    try {
      const blog = await Blog.findOrFail(params.id);
      return view.render('blog', { blog:blog });
    } catch (error) {
      console.error(error);
      // Handle the error, e.g., redirect to an error page or send a response
    }
  }



  // Delete a blog entry
  public async delete({ params, response }: HttpContextContract) {
    try {
      const blog = await Blog.findOrFail(params.id);
      await blog.delete();

      return response.redirect('/');
    } catch (error) {
      console.error(error);
      return response.status(500).send('Internal Server Error');
    }
  }
}

