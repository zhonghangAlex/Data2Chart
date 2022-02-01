/**
 * @desc t_project 可视化项目列表
 */

import { Column, DataType, Model, Table, Index, HasMany, ForeignKey } from 'sequelize-typescript';
import ChartPicData from './t_chartpic.model';

@Table({ 'modelName': 't_project', 'timestamps': false })

export default class Project extends Model<Project> {
  @Column({ 'comment': '自增ID', 'type': DataType.INTEGER, 'primaryKey': true, 'autoIncrement': true, 'allowNull': false })
  public id!: number;

	@Column({ 'comment': '项目编号', 'type': DataType.STRING(255), 'unique': true, 'allowNull': false })
  public project_id!: string

  @Column({ 'comment': '用户名', 'type': DataType.STRING(255), 'allowNull': false})
  public user_name!: string;

  @Column({ 'comment': '项目名', 'type': DataType.STRING(255), 'allowNull': false})
  public project_name!: string;

  @Column({ 'comment': '存储数据类型', 'type': DataType.INTEGER, 'defaultValue': 1 })
  public data_type!: number;

  @Column({ 'comment': '存储数据文件', 'type': DataType.BLOB })
  public data_file!: Buffer;

  @Column({ 'comment': '存储数据字符', 'type': DataType.TEXT, 'defaultValue': '{}' })
  public data_string!: string;

  @Column({ 'comment': '封面图片', 'type': DataType.BLOB })
  public index_pic!: Buffer;

  @Column({ 'comment': '第一步新建项目是否完成', 'type': DataType.INTEGER, 'defaultValue': 1 })
  public first_finished!: number;

  @Column({ 'comment': '第二步数据预处理是否完成', 'type': DataType.INTEGER, 'defaultValue': -1 })
  public second_finished!: number;

  @Column({ 'comment': '第三步可视化配置是否完成', 'type': DataType.INTEGER, 'defaultValue': -1 })
  public third_finished!: number;

  @Column({ 'comment': '项目分享hash地址', 'type': DataType.STRING(255), 'defaultValue': '' })
  public share_hash!: string;

  @Column({ 'comment': '数据创建时间', 'type': DataType.DATE })
  public readonly create_time!: Date;

  @Column({ 'comment': '数据更新时间', 'type': DataType.DATE })
  public readonly modify_time!: Date;

  @HasMany(() => ChartPicData, { 'sourceKey': 'project_id', 'foreignKey': 'project_id' })
  public chartpic_data!: ChartPicData[];
}