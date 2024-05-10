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

  @Column(DataType.STRING)
  message?: string;

  @Column(DataType.STRING)
  likes?: string;

  @Column(DataType.INTEGER)
  visits?: number;

  @Column(DataType.STRING)
  author?: string;

  @Column(DataType.STRING)
  authorImage?: string;
}

export default Comment;
