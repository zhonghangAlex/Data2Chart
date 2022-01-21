/*
 Navicat Premium Data Transfer

 Source Server         : Tencent_DB
 Source Server Type    : MySQL
 Source Server Version : 50718
 Source Host           : sh-cynosdbmysql-grp-okb14uba.sql.tencentcdb.com:25489
 Source Schema         : data2chart

 Target Server Type    : MySQL
 Target Server Version : 50718
 File Encoding         : 65001

 Date: 21/01/2022 15:49:54
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_projects
-- ----------------------------
DROP TABLE IF EXISTS `t_projects`;
CREATE TABLE `t_projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `project_name` varchar(255) DEFAULT NULL COMMENT '项目名',
  `user_name` varchar(255) DEFAULT NULL COMMENT '用户名',
  `data_type` int(11) DEFAULT NULL COMMENT '存储数据类型',
  `data_file` blob COMMENT '存储数据文件',
  `data_string` text COMMENT '存储数据字符',
  `vis_config` text COMMENT '项目配置项数据',
  `export_img` varchar(255) DEFAULT NULL COMMENT '导出图片',
  `share_hash` varchar(255) DEFAULT NULL COMMENT '项目分享hash地址',
  `create_time` datetime DEFAULT NULL COMMENT '数据创建时间',
  `modify_time` datetime DEFAULT NULL COMMENT '数据更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_project_name` (`project_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of t_projects
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_sysusers
-- ----------------------------
DROP TABLE IF EXISTS `t_sysusers`;
CREATE TABLE `t_sysusers` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `user_name` varchar(255) DEFAULT NULL COMMENT '用户名',
  `email` varchar(255) DEFAULT NULL COMMENT '邮箱',
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  `phone` varchar(255) DEFAULT NULL COMMENT '手机号',
  `user_power` int(11) DEFAULT NULL COMMENT '用户权限',
  `user_account` int(11) DEFAULT NULL COMMENT '用户积分',
  `create_time` datetime DEFAULT NULL COMMENT '数据创建时间',
  `modify_time` datetime DEFAULT NULL COMMENT '数据更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_user_name` (`user_name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of t_sysusers
-- ----------------------------
BEGIN;
INSERT INTO `t_sysusers` VALUES (1, 'alexzhli', '715608270@qq.com', 'uw1sxbF4XznfF4yx8l7uXj1AZ46ACT3pHxPLygRNlKg=', '15927093114', 0, 100, '2022-01-21 13:25:18', '2022-01-21 13:25:21');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
