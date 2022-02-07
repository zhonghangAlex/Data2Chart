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

 Date: 08/02/2022 04:02:53
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_chartpics
-- ----------------------------
DROP TABLE IF EXISTS `t_chartpics`;
CREATE TABLE `t_chartpics` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `chartpic_id` varchar(255) DEFAULT NULL COMMENT '图表编号',
  `project_id` varchar(255) NOT NULL COMMENT '项目编号',
  `chart_type` varchar(255) NOT NULL COMMENT '图表类型编号',
  `vis_config` text COMMENT '项目配置项数据',
  `watermark_config` text COMMENT '水印配置数据',
  `export_img` longtext COMMENT '导出图片',
  `create_time` datetime DEFAULT NULL COMMENT '数据创建时间',
  `modify_time` datetime DEFAULT NULL COMMENT '数据更新时间',
  `chart_title` varchar(255) DEFAULT NULL COMMENT '图表标题数据',
  PRIMARY KEY (`id`),
  UNIQUE KEY `chartpic_id` (`chartpic_id`),
  KEY `project_id` (`project_id`),
  CONSTRAINT `t_chartpics_ibfk_1` FOREIGN KEY (`project_id`) REFERENCES `t_projects` (`project_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of t_chartpics
-- ----------------------------
BEGIN;
INSERT INTO `t_chartpics` VALUES (11, 'd9aca328-2b22-41c0-898c-8d905ec5a51d', '62831342-2e64-47e3-8db6-838e8d66d1de', 'Line', '{}', '{}', NULL, '2022-02-07 22:49:34', '2022-02-07 22:49:34', NULL);
INSERT INTO `t_chartpics` VALUES (12, '902004e8-51df-4380-811a-e983dbe136fc', '32958067-a627-4b64-abaa-43c52734b649', 'Line', '{\n      \"width\": 300,\n      \"height\": 200,\n      \"autoFit\": false,\n      \"xField\": \"year\",\n      \"yField\": \"value\",\n      \"data\": [{\n          \"year\": \"1991\",\n          \"value\": 3\n        },\n        {\n          \"year\": \"1992\",\n          \"value\": 4\n        }]\n    }', '{\"ifOk\": true}', 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq', '2022-02-07 23:02:55', '2022-02-08 02:06:24', '默认标题');
INSERT INTO `t_chartpics` VALUES (13, '7220a737-cd8d-48cb-a464-2f0beac4a4ea', 'f9381375-f2cb-465a-b14d-1f6cd340d3c4', '666', '{}', '{}', NULL, '2022-02-08 00:20:38', '2022-02-08 00:20:38', NULL);
COMMIT;

-- ----------------------------
-- Table structure for t_charttypes
-- ----------------------------
DROP TABLE IF EXISTS `t_charttypes`;
CREATE TABLE `t_charttypes` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `charttype_id` varchar(255) NOT NULL COMMENT '图表类型编号',
  `charttype_name` varchar(255) DEFAULT NULL COMMENT '图表类型名称',
  `father_charttype_name` varchar(255) DEFAULT NULL COMMENT '图表父类名称',
  `create_time` datetime DEFAULT NULL COMMENT '数据创建时间',
  `modify_time` datetime DEFAULT NULL COMMENT '数据更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `charttype_id` (`charttype_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of t_charttypes
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_projects
-- ----------------------------
DROP TABLE IF EXISTS `t_projects`;
CREATE TABLE `t_projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `project_id` varchar(255) NOT NULL COMMENT '项目编号',
  `user_name` varchar(255) NOT NULL COMMENT '用户名',
  `project_name` varchar(255) NOT NULL COMMENT '项目名',
  `data_type` int(11) DEFAULT '1' COMMENT '存储数据类型',
  `data_file` blob COMMENT '存储数据文件',
  `data_string` text COMMENT '存储数据字符',
  `first_finished` int(11) DEFAULT '1' COMMENT '第一步新建项目是否完成',
  `second_finished` int(11) DEFAULT '-1' COMMENT '第二步数据预处理是否完成',
  `third_finished` int(11) DEFAULT '-1' COMMENT '第三步可视化配置是否完成',
  `share_hash` varchar(255) DEFAULT '' COMMENT '项目分享hash地址',
  `create_time` datetime DEFAULT NULL COMMENT '数据创建时间',
  `modify_time` datetime DEFAULT NULL COMMENT '数据更新时间',
  `index_pic` longtext COMMENT '首页图片',
  PRIMARY KEY (`id`),
  UNIQUE KEY `project_id` (`project_id`),
  KEY `user_name` (`user_name`),
  CONSTRAINT `t_projects_ibfk_1` FOREIGN KEY (`user_name`) REFERENCES `t_sysusers` (`user_name`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of t_projects
-- ----------------------------
BEGIN;
INSERT INTO `t_projects` VALUES (6, '32958067-a627-4b64-abaa-43c52734b649', 'alexzhli', 'BUG都写对项目', 1, NULL, '{\n            \"title\": \"demo.csv\",\n            \"data\": [\n                {\n                    \"name\": \"Karry1\",\n                    \"age\": 13,\n                    \"height\": 1.57,\n                    \"weight\": 71,\n                    \"hobby\": \"qw\",\n                    \"comp6\": 3.14\n                },\n                {\n                    \"name\": \"Karry2\",\n                    \"age\": 14,\n                    \"height\": 1.76,\n                    \"weight\": 72,\n                    \"hobby\": \"axqaa\",\n                    \"comp6\": 3.52\n                },\n                {\n                    \"name\": \"Karry3\",\n                    \"age\": 15,\n                    \"height\": 1.78,\n                    \"weight\": 73,\n                    \"hobby\": \"vsc\",\n                    \"comp6\": 3.56\n                }\n            ],\n            \"cols\": [\n                {\n                    \"cid\": 1,\n                    \"cKey\": \"name\",\n                    \"cname\": \"姓名\",\n                    \"type\": \"string\"\n                },\n                {\n                    \"cid\": 2,\n                    \"cKey\": \"age\",\n                    \"cname\": \"年龄\",\n                    \"type\": \"number\"\n                },\n                {\n                    \"cid\": 3,\n                    \"cKey\": \"height\",\n                    \"cname\": \"身高\",\n                    \"type\": \"number\"\n                },\n                {\n                    \"cid\": 4,\n                    \"cKey\": \"weight\",\n                    \"cname\": \"体重\",\n                    \"type\": \"number\"\n                },\n                {\n                    \"cid\": 5,\n                    \"cKey\": \"hobby\",\n                    \"cname\": \"兴趣\",\n                    \"type\": \"string\"\n                },\n                {\n                    \"cid\": 6,\n                    \"cKey\": \"comp6\",\n                    \"cname\": \"随便加了一列\",\n                    \"type\": \"number\"\n                }\n            ]\n        }', 1, 1, 1, '', '2022-02-02 02:14:38', '2022-02-08 01:21:43', 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq');
INSERT INTO `t_projects` VALUES (10, '62831342-2e64-47e3-8db6-838e8d66d1de', 'alexzhli', '测试项目002', 1, NULL, '{}', 1, -1, -1, '', '2022-02-07 22:48:18', '2022-02-07 22:48:18', NULL);
INSERT INTO `t_projects` VALUES (11, 'f9381375-f2cb-465a-b14d-1f6cd340d3c4', 'alexzhli', '测试项目666', 1, NULL, '{}', 1, -1, -1, '', '2022-02-08 00:20:38', '2022-02-08 00:20:38', NULL);
COMMIT;

-- ----------------------------
-- Table structure for t_sysusers
-- ----------------------------
DROP TABLE IF EXISTS `t_sysusers`;
CREATE TABLE `t_sysusers` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `user_id` varchar(255) NOT NULL COMMENT '用户编号',
  `user_name` varchar(255) NOT NULL COMMENT '用户名/账号',
  `email` varchar(255) DEFAULT NULL COMMENT '邮箱',
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  `phone` varchar(255) DEFAULT NULL COMMENT '手机号',
  `user_power` int(11) DEFAULT NULL COMMENT '用户权限',
  `user_account` int(11) DEFAULT NULL COMMENT '用户积分',
  `create_time` datetime DEFAULT NULL COMMENT '数据创建时间',
  `modify_time` datetime DEFAULT NULL COMMENT '数据更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`),
  UNIQUE KEY `user_name` (`user_name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of t_sysusers
-- ----------------------------
BEGIN;
INSERT INTO `t_sysusers` VALUES (1, '666', 'alexzhli', NULL, 'uw1sxbF4XznfF4yx8l7uXj1AZ46ACT3pHxPLygRNlKg=', NULL, NULL, NULL, '2022-02-02 01:27:46', '2022-02-02 01:27:50');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
