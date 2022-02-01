/**
 * @desc t_sysuser 用户信息表
 */
import { Column, DataType, Model, Table, Index, HasMany } from 'sequelize-typescript';
import Project from './t_project.model';

@Table({ 'modelName': 't_sysuser', 'timestamps': false })

export default class User extends Model<User> {
  @Column({ 'comment': '自增ID', 'type': DataType.INTEGER, 'primaryKey': true, 'autoIncrement': true, 'allowNull': false })
  public id!: number;
  
  @Column({ 'comment': '用户编号', 'type': DataType.STRING(255), 'unique': true, 'allowNull': false })
  public user_id!: string;
  
  @Column({ 'comment': '用户名/账号', 'type': DataType.STRING(255), 'unique': true, 'allowNull': false })
  public user_name!: string;

  @Column({ 'comment': '邮箱', 'type': DataType.STRING(255) })
  public email!: string;

  @Column({ 'comment': '密码', 'type': DataType.STRING(255) })
  public password!: string;

  @Column({ 'comment': '手机号', 'type': DataType.STRING(255) })
  public phone!: string;

  @Column({ 'comment': '用户权限', 'type': DataType.INTEGER })
  public user_power!: number;

  @Column({ 'comment': '用户积分', 'type': DataType.INTEGER })
  public user_account!: number;

  @Column({ 'comment': '数据创建时间', 'type': DataType.DATE })
  public readonly create_time!: Date;

  @Column({ 'comment': '数据更新时间', 'type': DataType.DATE })
  public readonly modify_time!: Date;

  @HasMany(() => Project, { 'sourceKey': 'user_name', 'foreignKey': 'user_name' })
  public project_data!: Project[]
}
