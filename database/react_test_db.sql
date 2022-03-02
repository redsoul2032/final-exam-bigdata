-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 02, 2022 at 11:13 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_test_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `province`
--

CREATE TABLE `province` (
  `province_ID` char(2) DEFAULT NULL,
  `province_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `province`
--

INSERT INTO `province` (`province_ID`, `province_name`) VALUES
('30', 'นครราชสีมา'),
('31', 'บุรีรัมย์'),
('32', 'สุรินทร์'),
('33', 'ศรีสะเกษ'),
('34', 'อุบลราชธานี'),
('35', 'ยโสธร'),
('36', 'ชัยภูมิ'),
('37', 'อำนาจเจริญ'),
('39', 'หนองบัวลำภู'),
('40', 'ขอนแก่น'),
('41', 'อุดรธานี'),
('42', 'เลย'),
('43', 'หนองคาย'),
('44', 'มหาสารคาม'),
('45', 'ร้อยเอ็ด'),
('46', 'กาฬสินธุ์'),
('47', 'สกลนคร'),
('48', 'นครพนม'),
('49', 'มุกดาหาร'),
('80', 'นครศรีธรรมราช'),
('81', 'กระบี่'),
('82', 'พังงา'),
('83', 'ภูเก็ต'),
('84', 'สุราษฎร์ธานี'),
('85', 'ระนอง'),
('86', 'ชุมพร'),
('90', 'สงขลา'),
('91', 'สตูล'),
('92', 'ตรัง'),
('93', 'พัทลุง'),
('94', 'ปัตตานี'),
('95', 'ยะลา'),
('96', 'นราธิวาส'),
('11', 'สมุทรปราการ'),
('12', 'นนทบุรี'),
('13', 'ปทุมธานี'),
('14', 'พระนครศรีอยุธยา'),
('15', 'อ่างทอง'),
('16', 'ลพบุรี'),
('17', 'สิงห์บุรี'),
('18', 'ชัยนาท'),
('19', 'สระบุรี'),
('20', 'ชลบุรี'),
('21', 'ระยอง'),
('22', 'จันทบุรี'),
('23', 'ตราด'),
('24', 'ฉะเชิงเทรา'),
('25', 'ปราจีนบุรี'),
('26', 'นครนายก'),
('27', 'สระแก้ว'),
('50', 'เชียงใหม่'),
('51', 'ลำพูน'),
('52', 'ลำปาง'),
('53', 'อุตรดิตถ์'),
('54', 'แพร่'),
('55', 'น่าน'),
('56', 'พะเยา'),
('57', 'เชียงราย'),
('58', 'แม่ฮ่องสอน'),
('60', 'นครสวรรค์'),
('61', 'อุทัยธานี'),
('62', 'กำแพงเพชร'),
('63', 'ตาก'),
('64', 'สุโขทัย'),
('65', 'พิษณุโลก'),
('66', 'พิจิตร'),
('67', 'เพชรบูรณ์'),
('70', 'ราชบุรี'),
('71', 'กาญจนบุรี'),
('72', 'สุพรรณบุรี'),
('73', 'นครปฐม'),
('74', 'สมุทรสาคร'),
('75', 'สมุทรสงคราม'),
('76', 'เพชรบุรี'),
('77', 'ประจวบคีรีขันธ์'),
('38', 'บึงกาฬ'),
('00', 'ไม่กรอกข้อมูล');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `province_ID` char(2) NOT NULL,
  `facebookAddress` varchar(50) NOT NULL,
  `regisTime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `province_ID`, `facebookAddress`, `regisTime`) VALUES
(1, 'ภาณุพงศ์', 'ทองวิลาศ', '18', 'panuphong2543@gmail.com', '2022-03-02 10:03:51'),
(2, '2', '2', '62', 'panuphong2543@gmail.com', '2022-03-02 10:03:44'),
(3, '3', '3', '81', 'panuphong2543@gmail.com', '2022-03-02 10:05:10'),
(4, '4', '4', '00', 'panuphong2543@gmail.com', '2022-03-02 10:13:29'),
(5, '5', '5', '50', 'panuphong2543@gmail.com', '2022-03-02 10:13:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
