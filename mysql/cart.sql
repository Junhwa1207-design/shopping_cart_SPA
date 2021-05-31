-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: May 31, 2021 at 06:31 PM
-- Server version: 5.7.32
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cart`
--

-- --------------------------------------------------------

--
-- Table structure for table `goods_cart_table`
--

CREATE TABLE `goods_cart_table` (
  `CART_NUM` int(11) NOT NULL,
  `USER_ID` varchar(50) NOT NULL,
  `GDS_NUM` int(11) NOT NULL,
  `CART_STOCK` int(11) NOT NULL,
  `CART_ADD_DATE` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `goods_cart_table`
--

INSERT INTO `goods_cart_table` (`CART_NUM`, `USER_ID`, `GDS_NUM`, `CART_STOCK`, `CART_ADD_DATE`) VALUES
(43, 'test', 71, 2, '2021-05-27 14:01:42'),
(50, 'test', 86, 2, '2021-05-31 12:53:31'),
(52, 'test', 86, 1, '2021-05-31 12:55:51'),
(53, 'test', 86, 2, '2021-05-31 13:08:49'),
(54, 'test', 86, 4, '2021-05-31 13:13:28'),
(55, 'test', 86, 2, '2021-05-31 13:18:31'),
(56, 'test', 76, 2, '2021-05-31 14:20:04');

-- --------------------------------------------------------

--
-- Table structure for table `goods_category_table`
--

CREATE TABLE `goods_category_table` (
  `CATEGORY_NAME` varchar(20) NOT NULL,
  `CATEGORY_CODE` varchar(30) NOT NULL,
  `CATEGORY_REF` varchar(30) DEFAULT NULL,
  `CATEGORY_LEVEL` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='카테고리 테이블';

--
-- Dumping data for table `goods_category_table`
--

INSERT INTO `goods_category_table` (`CATEGORY_NAME`, `CATEGORY_CODE`, `CATEGORY_REF`, `CATEGORY_LEVEL`) VALUES
('Power_tools', '1', '1', 1),
('Hand_tools', '2', '2', 1),
('Storages', '3', '3', 1);

-- --------------------------------------------------------

--
-- Table structure for table `goods_table`
--

CREATE TABLE `goods_table` (
  `GDS_NUM` int(11) NOT NULL COMMENT 'prod_num',
  `GDS_NAME` varchar(50) NOT NULL COMMENT 'prod_name',
  `GDS_CATEGORY_CODE` varchar(30) NOT NULL COMMENT 'category',
  `GDS_PRICE` float NOT NULL COMMENT 'price',
  `GDS_STOCK` varchar(45) DEFAULT NULL COMMENT 'quantity',
  `GDS_DESC` varchar(500) DEFAULT NULL COMMENT 'explain',
  `GDS_IMG` varchar(300) DEFAULT NULL COMMENT 'img',
  `GDS_DATE` datetime DEFAULT CURRENT_TIMESTAMP COMMENT 'upload date',
  `GDS_VIDEO` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `goods_table`
--

INSERT INTO `goods_table` (`GDS_NUM`, `GDS_NAME`, `GDS_CATEGORY_CODE`, `GDS_PRICE`, `GDS_STOCK`, `GDS_DESC`, `GDS_IMG`, `GDS_DATE`, `GDS_VIDEO`) VALUES
(72, '	 Kombo Kits 01: Milwaukee Tool', '1', 529, '12', '<p>M18 18V Lithium-Ion Cordless Combo Tool Kit (6-Tool) w/(2) 3.0 Ah Batteries, (1) Charger, (1) Tool Bag</p>\n', '1622138889783tool_01.jpg', '2021-05-27 14:08:09', 'video/tool_01.mp4'),
(73, '	Kombo Kits 02:RYOBI', '1', 328, '12', '<p>18V ONE+ Lithium-Ion Cordless 6-Tool Combo Kit with (2) Batteries, Charger, and Bag</p>\n', '1622138948670tool_02.jpg', '2021-05-27 14:09:08', 'video/tool_02.mp4'),
(74, '	Kombo Kits 03:DEWALT', '1', 199, '12', '<p>20V MAX Lithium-Ion Cordless Drill/Driver and Impact Combo Kit (2-Tool) with Battery 1.3Ah, Charger and Bag</p>\n', '1622138985583tool_03.jpg', '2021-05-27 14:09:45', 'video/tool_03.mp4'),
(75, '	Kombo Kits 04:MAKITA', '1', 199, '12', '<p>18V Lithium-Ion Cordless Drill and Impact Driver Combo Kit with 2 Batteries & Chargers</p>\n', '1622139020228tool_04.jpg', '2021-05-27 14:10:20', 'video/tool_04.mp4'),
(76, '	Kombo Kits 05:RIDGID', '1', 248, '12', '<p>GEN5X 18V Lithium-Ion Brushless Cordless Drill/Driver and Impact Driver Combo Kit (2-Tool)</p>\n', '1622139055723tool_05.jpg', '2021-05-27 14:10:55', 'video/tool_05.mp4'),
(77, 'DEWALT hammer', '2', 49.98, '12', '<p>DEWALT hammer</p>\n', '1622139165357tool_07.jpg', '2021-05-27 14:12:45', 'video/tool_06.mp4'),
(78, 'Milwaukee Tool:Tape Measure', '2', 14.98, '12', '<p>25 ft. Compact Tape Measure with 12 ft. Reach</p>\n', '1622139220371tool_08.jpg', '2021-05-27 14:13:40', 'video/tool_07.mp4'),
(79, 'DEWALT:Tape Measure', '2', 21.97, '12', '<p>25 ft. x 1-1/8-inch Tape Measure (2-Pack)</p>\n', '1622139265599tool_09.jpg', '2021-05-27 14:14:25', 'video/tool_08.mp4'),
(80, 'STANLEY:Tape Measure', '2', 59.8, '12', '<p>25 ft. x 1-inch Tape Measure</p>\n', '1622139325976tool_10.jpg', '2021-05-27 14:15:25', 'video/tool_09.mp4'),
(81, 'Husky:Tool Storage Chest and Cabinet Combo', '3', 29.8, '12', '<p>27-inch 9-Drawer Mobile Tool Storage Chest and Cabinet Combo in Black</p>\n', '1622139364513tool_11.jpg', '2021-05-27 14:16:04', 'video/tool_10.mp4'),
(82, 'DEWALT:4-DRAWER TOOL CHEST', '3', 39.9, '12', '<p>26-inch WIDE 4-DRAWER TOOL CHEST</p>\n', '1622139397099tool_12.jpg', '2021-05-27 14:16:37', 'video/tool_11.mp4'),
(83, 'Milwaukee Too:Tool Box Storage', '3', 29.8, '12', '<p>22-inch Packout Modular Tool Box Storage System</p>\n', '1622139431094tool_13.jpg', '2021-05-27 14:17:11', 'video/tool_12.mp4'),
(84, 'Husky:Plastic Portable Tool Box', '3', 29.98, '12', '<p>22-inch Plastic Portable Tool Box with Metal Latches in Black</p>\n', '1622139474651tool_14.jpg', '2021-05-27 14:17:54', 'video/tool_13.mp4'),
(85, 'Milwaukee Tool:PACKOUT 10-Compartment', '3', 49, '12', '<p>PACKOUT 10-Compartment Low-Profile Small Parts Tool Organizer</p>\n', '1622139519798tool_15.jpg', '2021-05-27 14:18:39', 'video/tool_14.mp4'),
(86, 'Stiletto hammer', '2', 298, '12', '<p>15oz. TiBone 3 with Milled Face and Curved Handle<br />\n&nbsp;</p>\n', '1622141852866tool_06.jpg', '2021-05-27 14:57:32', 'video/tool_15.mp4');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `goods_cart_table`
--
ALTER TABLE `goods_cart_table`
  ADD PRIMARY KEY (`CART_NUM`);

--
-- Indexes for table `goods_category_table`
--
ALTER TABLE `goods_category_table`
  ADD PRIMARY KEY (`CATEGORY_CODE`);

--
-- Indexes for table `goods_table`
--
ALTER TABLE `goods_table`
  ADD PRIMARY KEY (`GDS_NUM`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `goods_cart_table`
--
ALTER TABLE `goods_cart_table`
  MODIFY `CART_NUM` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `goods_table`
--
ALTER TABLE `goods_table`
  MODIFY `GDS_NUM` int(11) NOT NULL AUTO_INCREMENT COMMENT 'prod_num', AUTO_INCREMENT=87;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
