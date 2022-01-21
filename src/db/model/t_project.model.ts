/**
 * @desc t_project 可视化项目列表
 */

import { Column, DataType, Model, Table, Index, ForeignKey } from 'sequelize-typescript';
import UserData from './t_sysuser.model';

@Table({ 'modelName': 't_project', 'timestamps': false })

export default class Project extends Model<Project> {
  @Column({ 'comment': '自增ID', 'type': DataType.INTEGER, 'primaryKey': true, 'autoIncrement': true, 'allowNull': false })
  public id!: number;

  @Index({ 'name': 'idx_project_name', 'unique': true })
  @Column({ 'comment': '项目名', 'type': DataType.STRING(255) })
  public project_name!: string;

  @ForeignKey(() => { return UserData; })
  @Column({ 'comment': '用户名', 'type': DataType.STRING(255) })
  public user_name!: string;

  @Column({ 'comment': '存储数据类型', 'type': DataType.INTEGER })
  public data_type!: number;

  @Column({ 'comment': '存储数据文件', 'type': DataType.BLOB })
  public data_file!: Buffer;

  @Column({ 'comment': '存储数据字符', 'type': DataType.TEXT })
  public data_string!: string;

  @Column({ 'comment': '项目配置项数据', 'type': DataType.TEXT })
  public vis_config!: string;

  @Column({ 'comment': '导出图片', 'type': DataType.STRING(255) })
  public export_img!: string;

  @Column({ 'comment': '项目分享hash地址', 'type': DataType.STRING(255) })
  public share_hash!: string;

  @Column({ 'comment': '数据创建时间', 'type': DataType.DATE })
  public readonly create_time!: Date;

  @Column({ 'comment': '数据更新时间', 'type': DataType.DATE })
  public readonly modify_time!: Date;
}