import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
// import { TestContext } from '@japa/runner'

export default class Blog extends BaseModel {
  @column({ isPrimary: true })
  public id: number


  @column()
  public title:String

  @column()
  public content:String

  @column()
  public author:String

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
