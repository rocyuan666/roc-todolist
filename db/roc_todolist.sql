/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : roc_todolist

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 11/11/2022 17:16:34
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for roc_matter
-- ----------------------------
DROP TABLE IF EXISTS `roc_matter`;
CREATE TABLE `roc_matter`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'id',
  `userId` bigint(20) NOT NULL COMMENT '用户id',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '事项名称',
  `level` int(255) NOT NULL DEFAULT 1 COMMENT '事项优先级分为：1234 默认1',
  `status` int(255) NOT NULL DEFAULT 0 COMMENT '0待办  1已办 默认0',
  `addtime` datetime(0) NULL DEFAULT NULL COMMENT '添加时间',
  `edittime` datetime(0) NULL DEFAULT NULL COMMENT '修改时间',
  `deltime` datetime(0) NULL DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for roc_user
-- ----------------------------
DROP TABLE IF EXISTS `roc_user`;
CREATE TABLE `roc_user`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'id',
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
  `addtime` datetime(0) NULL DEFAULT NULL COMMENT '添加时间',
  `edittime` datetime(0) NULL DEFAULT NULL COMMENT '编辑时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of roc_user
-- ----------------------------
INSERT INTO `roc_user` VALUES (4, 'rocyuan', '284C3A05AC2CC4898AB9EC716D58D3B6', '2022-11-11 13:58:39', NULL);
INSERT INTO `roc_user` VALUES (5, 'rocyuan666', 'DFF8251F658A29007647B3FCFF85224C', '2022-11-11 14:00:31', NULL);
INSERT INTO `roc_user` VALUES (6, 'yuanpeng', 'C7A1E04F27DDEFA048A4B8295BAF160C', '2022-11-11 16:46:13', NULL);

SET FOREIGN_KEY_CHECKS = 1;
