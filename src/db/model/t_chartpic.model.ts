/**
 * @desc t_chartpic 可视化图表记录表
 */

import { Column, DataType, Model, Table, Index, HasOne } from 'sequelize-typescript';

@Table({ 'modelName': 't_chartpic', 'timestamps': false })

export default class ChartPic extends Model<ChartPic> {
  @Column({ 'comment': '自增ID', 'type': DataType.INTEGER, 'primaryKey': true, 'autoIncrement': true, 'allowNull': false })
  public id!: number;

  @Column({ 'comment': '图表编号', 'type': DataType.STRING(255), 'unique': true })
  public chartpic_id!: string;

  @Column({ 'comment': '项目编号', 'type': DataType.STRING(255), 'allowNull': false })
	public project_id!: string

  @Column({ 'comment': '图表类型', 'type': DataType.STRING(255) })
  public chart_type!: string
  
  @Column({ 'comment': '图表标题数据', 'type': DataType.STRING(255) })
  public chart_title!: string;

  @Column({ 'comment': '项目配置项数据', 'type': DataType.TEXT })
  public vis_config!: string;

  @Column({ 'comment': '水印配置数据', 'type': DataType.TEXT })
  public watermark_config!: string;

  @Column({ 'comment': '导出图片', 'type': DataType.TEXT })
  public export_img!: string;

  @Column({ 'comment': '数据创建时间', 'type': DataType.DATE })
  public readonly create_time!: Date;

  @Column({ 'comment': '数据更新时间', 'type': DataType.DATE })
  public readonly modify_time!: Date;
}