/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : chenapp

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-10-11 17:13:06
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for register
-- ----------------------------
DROP TABLE IF EXISTS `register`;
CREATE TABLE `register` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(20) NOT NULL,
  `pwd` varchar(32) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of register
-- ----------------------------
INSERT INTO `register` VALUES ('8', '13580131647', '4297f44b13955235245b2497399d7a93');
INSERT INTO `register` VALUES ('9', '13580131795', '4297f44b13955235245b2497399d7a93');

-- ----------------------------
-- Table structure for shopping
-- ----------------------------
DROP TABLE IF EXISTS `shopping`;
CREATE TABLE `shopping` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `sride` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `color` varchar(10) COLLATE utf8mb4_bin NOT NULL,
  `num` int(11) NOT NULL,
  `money` int(100) NOT NULL,
  `titlename` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- ----------------------------
-- Records of shopping
-- ----------------------------
INSERT INTO `shopping` VALUES ('1', '/images/my-order.png', '蓝牙音响', '米白色', '1', '138', ' 鸟语二代');
INSERT INTO `shopping` VALUES ('2', '/images/my-order.png', '蓝牙音响', '米白色', '1', '138', '鸟语二代');
INSERT INTO `shopping` VALUES ('3', '/images/my-order.png', '蓝牙音响', '米白色', '1', '160', '鸟语二代');
INSERT INTO `shopping` VALUES ('4', '/images/my-order.png', '蓝牙音响', '米白色', '1', '138', '鸟语二代');
INSERT INTO `shopping` VALUES ('5', '/images/my-order.png', '蓝牙音响', '米白色', '1', '177', '鸟语二代');
