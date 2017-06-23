-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Jun 23, 2017 at 12:25 PM
-- Server version: 5.5.42
-- PHP Version: 7.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `schoolstd`
--

-- --------------------------------------------------------

--
-- Table structure for table `schoolstudents`
--

CREATE TABLE `schoolstudents` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `fathername` varchar(255) NOT NULL,
  `rollno` varchar(255) NOT NULL,
  `degree` varchar(255) NOT NULL,
  `branch` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `schoolstudents`
--

INSERT INTO `schoolstudents` (`id`, `name`, `fathername`, `rollno`, `degree`, `branch`) VALUES
(64, 'Vijendiran', 'Dharmaraj', '12', 'BE', 'CSE'),
(65, 'Dinesh', 'Subramanian', '14', 'BE', 'Civil'),
(75, 'Gunal', 'Ramanujam', '18', 'BE', 'ECE'),
(76, 'Tamilvanan', 'karuppaiya', '19', 'Bsc', 'Agree'),
(77, 'Mathavan', 'Raj', '10', 'Msc', 'Cse'),
(81, 'Ashwin', 'Baskaran', '07', 'BE', 'Mech'),
(83, 'Krishna Premi', 'Venkatesan', '08', 'BE', 'IT'),
(84, 'Rajesh', 'Thennarasu', '09', 'BE', 'Civil');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `schoolstudents`
--
ALTER TABLE `schoolstudents`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `schoolstudents`
--
ALTER TABLE `schoolstudents`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=85;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
