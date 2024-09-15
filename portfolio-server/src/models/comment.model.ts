import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'comment',
  modelName: 'Comment',
})
export class Comment extends Model {
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
  })
  id?: number;

  @Column(DataType.TEXT)
  message?: string;

  @Column(DataType.ARRAY(DataType.STRING))
  likes?: string[];

  @Column(DataType.INTEGER)
  visits?: number;

  @Column(DataType.STRING)
  userId?: string;

  @Column(DataType.STRING)
  author?: string;

  @Column(DataType.TEXT)
  authorImage?: string;
}

export default Comment;
