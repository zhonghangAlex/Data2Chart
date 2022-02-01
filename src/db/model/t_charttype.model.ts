/**
 * @desc t_charttype 可视化图表类型
 */

import { Column, DataType, Model, Table, Index, HasMany } from 'sequelize-typescript';

@Table({ 'modelName': 't_charttype', 'timestamps': false })

export default class ChartType extends Model<ChartType> {
  @Column({ 'comment': '自增ID', 'type': DataType.INTEGER, 'primaryKey': true, 'autoIncrement': true, 'allowNull': false })
  public id!: number;

  @Column({ 'comment': '图表类型编号', 'type': DataType.STRING(255), 'unique': true, 'allowNull': false })
	public charttype_id!: string

  @Column({ 'comment': '图表类型名称', 'type': DataType.STRING(255) })
  public charttype_name!: string;

  @Column({ 'comment': '图表父类名称', 'type': DataType.STRING(255) })
  public father_charttype_name!: string;

  @Column({ 'comment': '数据创建时间', 'type': DataType.DATE })
  public readonly create_time!: Date;

  @Column({ 'comment': '数据更新时间', 'type': DataType.DATE })
  public readonly modify_time!: Date;
}