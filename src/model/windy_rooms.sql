-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 24, 2020 at 07:15 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `windy_rooms`
--

-- --------------------------------------------------------

--
-- Table structure for table `balance`
--

CREATE TABLE `balance` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `balance` int(11) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `class`
--

CREATE TABLE `class` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `class`
--

INSERT INTO `class` (`id`, `name`, `created_on`, `updated_on`) VALUES
(1, 'First Class', '2020-01-22 14:11:16', '2020-01-22 14:11:16'),
(2, 'Bussiness Class', '2020-01-22 14:11:16', '2020-01-22 14:11:16'),
(3, 'Economy Class', '2020-01-22 14:11:16', '2020-01-22 14:11:16');

-- --------------------------------------------------------

--
-- Table structure for table `facilities`
--

CREATE TABLE `facilities` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `facilities`
--

INSERT INTO `facilities` (`id`, `name`, `created_on`, `updated_on`) VALUES
(1, 'Breakfast', '2020-01-22 10:50:31', '2020-01-22 10:50:31'),
(2, 'TV', '2020-01-22 10:50:31', '2020-01-22 10:50:31'),
(3, 'Receptionist 24 Hours', '2020-01-22 10:50:31', '2020-01-22 10:50:31'),
(4, 'Wi-Fi', '2020-01-22 10:50:31', '2020-01-22 10:50:31'),
(5, 'Hot Shower', '2020-01-22 10:50:31', '2020-01-22 10:50:31'),
(6, 'AC', '2020-01-22 10:50:31', '2020-01-22 10:50:31'),
(7, 'Free Mineral Water', '2020-01-22 10:50:31', '2020-01-22 10:50:31'),
(8, 'Toiletries', '2020-01-22 10:50:31', '2020-01-22 10:50:31'),
(9, 'Telephone', '2020-01-22 10:50:31', '2020-01-22 10:50:31'),
(10, 'Room Service', '2020-01-22 10:50:31', '2020-01-22 10:50:31'),
(11, 'Pool', '2020-01-22 10:50:31', '2020-01-22 10:50:31'),
(12, 'Gym', '2020-01-22 10:50:31', '2020-01-22 10:50:31'),
(13, 'Refrigerator', '2020-01-22 10:50:31', '2020-01-22 10:50:31'),
(14, 'Mini Bar', '2020-01-22 10:50:31', '2020-01-22 10:50:31'),
(15, 'Restaurant', '2020-01-22 10:50:31', '2020-01-22 10:50:31');

-- --------------------------------------------------------

--
-- Table structure for table `flight`
--

CREATE TABLE `flight` (
  `id` int(11) NOT NULL,
  `route_id` int(11) NOT NULL,
  `plane_id` int(11) NOT NULL,
  `class_id` int(11) NOT NULL,
  `ticket_price` int(11) NOT NULL,
  `schedule_id` int(11) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `flight`
--

INSERT INTO `flight` (`id`, `route_id`, `plane_id`, `class_id`, `ticket_price`, `schedule_id`, `created_on`, `updated_on`) VALUES
(1, 1, 1, 1, 1750000, 1, '2020-01-23 21:04:11', '2020-01-23 21:04:11');

-- --------------------------------------------------------

--
-- Table structure for table `guest`
--

CREATE TABLE `guest` (
  `id` int(11) NOT NULL,
  `title_id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `hotel`
--

CREATE TABLE `hotel` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `location_id` int(11) NOT NULL,
  `longitude` varchar(20) NOT NULL,
  `latitude` varchar(20) NOT NULL,
  `description` text NOT NULL,
  `address` varchar(200) NOT NULL,
  `image` varchar(200) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hotel`
--

INSERT INTO `hotel` (`id`, `name`, `location_id`, `longitude`, `latitude`, `description`, `address`, `image`, `created_on`, `updated_on`) VALUES
(1, 'Airy Baranangsiang Riau 39 Bogor', 1, '-6.6084566', '106.8066823', 'Pihak hotel mungkin akan meminta deposit untuk menutupi pembayaran tak terduga.', 'Jalan Riau No. 39, Bogor, Indonesia, 16143', 'airy-baranangsiang.jpeg', '2020-01-22 09:07:43', '2020-01-22 09:07:43'),
(2, 'Airy Syariah Pakuan Ciheuleut 12', 1, '-6.6068945', '106.8086576', 'AIRY SYARIAH adalah pilihan alternatif yang memadukan konsep perhotelan dengan kaidah syariah. Bagi tamu berlawanan jenis, akan diminta untuk menunjukkan dokumen Akta Nikah (bagi pasangan) atau Kartu Keluarga (bagi anggota keluarga yang berbeda jenis kelamin).', 'Jl. Ciheuleut No.12, Baranangsiang, Bogor Tim., Kota Bogor, Jawa Barat 16143, Indonesia', 'Airy Syariah Pakuan Ciheuleut 12 Bogor.jpeg', '2020-01-22 10:29:17', '2020-01-24 18:12:37');

-- --------------------------------------------------------

--
-- Table structure for table `hotel_booking`
--

CREATE TABLE `hotel_booking` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `rooms_id` int(11) NOT NULL,
  `is_booked` int(11) NOT NULL,
  `duration` int(11) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hotel_booking`
--

INSERT INTO `hotel_booking` (`id`, `user_id`, `rooms_id`, `is_booked`, `duration`, `created_on`, `updated_on`) VALUES
(2, 1, 1, 1, 1, '2020-01-23 18:08:27', '2020-01-23 19:54:22'),
(4, 1, 1, 1, 5, '2020-01-23 20:06:50', '2020-01-23 20:11:34');

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`id`, `name`, `created_on`, `updated_on`) VALUES
(1, 'Bogor', '2020-01-22 07:45:00', '2020-01-22 07:45:00'),
(2, 'Jakarta', '2020-01-22 07:45:00', '2020-01-22 07:45:00'),
(3, 'Depok', '2020-01-22 07:45:00', '2020-01-22 07:45:00'),
(4, 'Tangerang', '2020-01-22 07:45:00', '2020-01-22 07:45:00'),
(5, 'Bekasi', '2020-01-22 07:45:00', '2020-01-22 07:45:00');

-- --------------------------------------------------------

--
-- Table structure for table `plane`
--

CREATE TABLE `plane` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `image` varchar(200) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `plane`
--

INSERT INTO `plane` (`id`, `name`, `image`, `created_on`, `updated_on`) VALUES
(1, 'Garuda Indonesia', 'Garuda Indonesia.png', '2020-01-22 13:59:08', '2020-01-22 13:59:08'),
(2, 'Lion Air', 'Lion Air.png', '2020-01-22 14:00:05', '2020-01-22 14:00:05'),
(3, 'Sriwijaya Air', 'Sriwijaya Air.png', '2020-01-22 14:00:19', '2020-01-22 14:00:19'),
(4, 'Citilink', 'Citilink Air.png', '2020-01-22 14:00:33', '2020-01-22 14:00:33'),
(5, 'Batik Air', 'Batik Air.png', '2020-01-22 14:00:57', '2020-01-22 14:00:57'),
(6, 'Air Asia', 'air asia.png', '2020-01-22 14:01:15', '2020-01-22 14:01:15'),
(7, 'Batavia Air', 'Batavia Air.png', '2020-01-22 14:01:37', '2020-01-22 14:01:37'),
(8, 'Wings Air', 'Wings Air.png', '2020-01-22 14:01:57', '2020-01-22 14:01:57'),
(9, 'Xpress Air', 'Xpress Air.png', '2020-01-22 14:02:13', '2020-01-22 14:02:13'),
(10, 'Trans Nusa', 'Trans Nusa Air.png', '2020-01-22 14:02:26', '2020-01-22 14:02:26');

-- --------------------------------------------------------

--
-- Table structure for table `plane_booking`
--

CREATE TABLE `plane_booking` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `flight_id` int(11) NOT NULL,
  `is_booked` int(11) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `revoked_token`
--

CREATE TABLE `revoked_token` (
  `id` int(11) NOT NULL,
  `token` varchar(200) NOT NULL,
  `is_revoked` int(11) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `revoked_token`
--

INSERT INTO `revoked_token` (`id`, `token`, `is_revoked`, `created_on`, `updated_on`) VALUES
(1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im9jcmFuaWF3YW4iLCJpZCI6MSwiaWF0IjoxNTc5NjY5NDAwfQ.a4vcw5-Nv3Coc6W9u4JJtZqQ9hXeWZLbwKsZjhimixc', 1, '2020-01-22 05:03:20', '2020-01-22 05:03:20'),
(2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im9jcmFuaWF3YW4iLCJpZCI6MSwiaWF0IjoxNTc5NjcwNTIxfQ.RzeJ3gMAsJqyxLIjq1PYlWpZo4bbNJonsTyrCwwH2Y4', 1, '2020-01-22 05:22:01', '2020-01-22 05:22:01');

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `id` int(11) NOT NULL,
  `rooms_type_id` int(11) NOT NULL,
  `hotel_id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `images` varchar(250) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`id`, `rooms_type_id`, `hotel_id`, `price`, `images`, `created_on`, `updated_on`) VALUES
(1, 1, 1, 198500, 'baranangsiang3.jpeg, baranangsiang2.jpeg, baranangsiang4.jpeg, baranangsiang1.jpeg, depan.jpeg', '2020-01-23 14:31:31', '2020-01-24 17:31:05'),
(2, 2, 1, 258950, 'baranangsiang3.jpeg, baranangsiang2.jpeg, baranangsiang4.jpeg, baranangsiang1.jpeg, depan.jpeg', '2020-01-24 13:03:50', '2020-01-24 17:29:33'),
(3, 2, 1, 258950, 'baranangsiang3.jpeg, baranangsiang2.jpeg, baranangsiang4.jpeg', '2020-01-24 14:15:20', '2020-01-24 14:15:20');

-- --------------------------------------------------------

--
-- Table structure for table `room_facility`
--

CREATE TABLE `room_facility` (
  `rooms_id` int(11) NOT NULL,
  `facilities_id` int(11) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `room_facility`
--

INSERT INTO `room_facility` (`rooms_id`, `facilities_id`, `created_on`, `updated_on`) VALUES
(1, 1, '2020-01-23 14:57:39', '2020-01-23 14:57:39'),
(1, 2, '2020-01-23 14:57:39', '2020-01-23 14:57:39'),
(1, 3, '2020-01-23 14:57:39', '2020-01-23 14:57:39'),
(1, 4, '2020-01-23 14:57:39', '2020-01-23 14:57:39'),
(1, 5, '2020-01-23 14:57:39', '2020-01-23 14:57:39'),
(1, 6, '2020-01-23 14:57:39', '2020-01-23 14:57:39'),
(1, 7, '2020-01-23 14:57:39', '2020-01-23 14:57:39'),
(1, 8, '2020-01-23 14:57:39', '2020-01-23 14:57:39'),
(1, 9, '2020-01-23 14:57:39', '2020-01-23 14:57:39'),
(1, 10, '2020-01-23 14:57:39', '2020-01-23 14:57:39'),
(1, 11, '2020-01-23 14:57:39', '2020-01-23 14:57:39'),
(1, 12, '2020-01-23 14:57:39', '2020-01-23 14:57:39'),
(2, 1, '2020-01-24 13:37:41', '2020-01-24 13:37:41'),
(2, 2, '2020-01-24 13:37:41', '2020-01-24 13:37:41'),
(2, 3, '2020-01-24 13:37:41', '2020-01-24 13:37:41'),
(2, 4, '2020-01-24 13:37:41', '2020-01-24 13:37:41'),
(3, 1, '2020-01-24 17:50:03', '2020-01-24 17:50:03'),
(3, 2, '2020-01-24 17:50:03', '2020-01-24 17:50:03'),
(3, 5, '2020-01-24 17:50:03', '2020-01-24 17:50:03'),
(3, 4, '2020-01-24 17:50:03', '2020-01-24 17:50:03'),
(3, 6, '2020-01-24 17:50:03', '2020-01-24 17:50:03'),
(3, 7, '2020-01-24 17:50:03', '2020-01-24 17:50:03'),
(3, 8, '2020-01-24 17:50:03', '2020-01-24 17:50:03'),
(3, 10, '2020-01-24 17:50:03', '2020-01-24 17:50:03');

-- --------------------------------------------------------

--
-- Table structure for table `room_type`
--

CREATE TABLE `room_type` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `room_type`
--

INSERT INTO `room_type` (`id`, `name`, `created_on`, `updated_on`) VALUES
(1, 'Airy Rooms Standard Single', '2020-01-22 11:16:01', '2020-01-22 11:16:01'),
(2, 'Airy Rooms Standard Double', '2020-01-22 11:16:01', '2020-01-22 11:16:01'),
(3, 'Airy Rooms Standard Twin', '2020-01-22 11:16:01', '2020-01-22 11:16:01'),
(4, 'Airy Rooms Executive Single', '2020-01-22 11:16:01', '2020-01-22 11:16:01'),
(5, 'Airy Rooms Executive Double', '2020-01-22 11:16:01', '2020-01-22 11:16:01'),
(6, 'Airy Rooms Executive Twin', '2020-01-22 11:16:01', '2020-01-22 11:16:01'),
(7, 'Airy Rooms Superior Double', '2020-01-22 11:16:01', '2020-01-22 11:16:01'),
(8, 'Airy Rooms Superior Twin', '2020-01-22 11:16:01', '2020-01-22 11:16:01'),
(9, 'Airy Rooms Deluxe Double', '2020-01-22 11:16:01', '2020-01-22 11:16:01'),
(10, 'Airy Rooms Deluxe Twin', '2020-01-22 11:16:01', '2020-01-22 11:16:01'),
(11, 'Airy Rooms Suite Family', '2020-01-22 11:16:01', '2020-01-22 11:16:01');

-- --------------------------------------------------------

--
-- Table structure for table `routes`
--

CREATE TABLE `routes` (
  `id` int(11) NOT NULL,
  `origin` varchar(100) NOT NULL,
  `destination` varchar(100) NOT NULL,
  `duration` time NOT NULL DEFAULT current_timestamp(),
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `routes`
--

INSERT INTO `routes` (`id`, `origin`, `destination`, `duration`, `created_on`, `updated_on`) VALUES
(1, 'Jakarta (JKTA)', 'Makassar (UPG)', '02:00:00', '2020-01-22 14:34:14', '2020-01-22 14:34:14'),
(2, 'Jakarta (JKTA)', 'Surabaya (SUB)', '01:30:00', '2020-01-22 14:34:14', '2020-01-22 14:34:14'),
(3, 'Jakarta (JKTA)', 'Bali / Denpasar(DPS)', '01:50:00', '2020-01-22 14:34:14', '2020-01-22 14:34:14'),
(4, 'Jakarta (JKTA)', 'Yogyakarta (JOG)', '01:10:00', '2020-01-22 14:34:14', '2020-01-22 14:34:14'),
(5, 'Jakarta (JKTA)', 'Medan (KNO)', '02:20:00', '2020-01-22 14:34:14', '2020-01-22 14:34:14'),
(6, 'Jakarta (JKTA)', 'Bandung (BDO)', '00:30:00', '2020-01-22 14:34:14', '2020-01-22 14:34:14'),
(7, 'Jakarta (JKTA)', 'Balikpapan (BPN)', '02:05:00', '2020-01-22 14:34:14', '2020-01-22 14:34:14'),
(8, 'Jakarta (JKTA)', 'Banda Aceh (BTJ)', '02:50:00', '2020-01-22 14:34:14', '2020-01-22 14:34:14'),
(9, 'Jakarta (JKTA)', 'Jayapura (DJJ)', '05:15:00', '2020-01-22 14:34:14', '2020-01-22 14:34:14'),
(10, 'Jakarta (JKTA)', 'Labuan Bajo (LBJ)', '02:15:00', '2020-01-22 14:34:14', '2020-01-22 14:34:14');

-- --------------------------------------------------------

--
-- Table structure for table `schedules`
--

CREATE TABLE `schedules` (
  `id` int(11) NOT NULL,
  `departure` datetime NOT NULL,
  `arrived` datetime NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `schedules`
--

INSERT INTO `schedules` (`id`, `departure`, `arrived`, `created_on`, `updated_on`) VALUES
(1, '2020-01-28 07:15:00', '2020-01-28 09:15:00', '2020-01-23 20:35:30', '2020-01-23 20:35:30');

-- --------------------------------------------------------

--
-- Table structure for table `title`
--

CREATE TABLE `title` (
  `id` int(11) NOT NULL,
  `name` varchar(5) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `title`
--

INSERT INTO `title` (`id`, `name`, `created_on`, `updated_on`) VALUES
(1, 'Mr.', '2020-01-21 17:02:04', '2020-01-21 17:02:04'),
(2, 'Mrs.', '2020-01-21 17:02:04', '2020-01-21 17:02:04'),
(3, 'Ms.', '2020-01-21 17:02:04', '2020-01-21 17:02:04');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `title_id` int(11) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `phone_number` int(12) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `image` varchar(200) NOT NULL,
  `first_login` int(11) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `title_id`, `username`, `first_name`, `last_name`, `phone_number`, `email`, `password`, `image`, `first_login`, `created_on`, `updated_on`) VALUES
(1, 1, 'ocraniawan', 'Ocraniawan', 'Patattan', 2147483647, 'ocraniawan@user.com', '$2a$10$dY0bOkkslbv9RaawFqRApO9QpLLVXxL/LhhqfTkduKW3vPW/Nsdl2', 'coffe.jpg', 0, '2020-01-22 05:03:02', '2020-01-22 05:03:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `balance`
--
ALTER TABLE `balance`
  ADD PRIMARY KEY (`id`),
  ADD KEY `balance_ibfk_1` (`user_id`);

--
-- Indexes for table `class`
--
ALTER TABLE `class`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `facilities`
--
ALTER TABLE `facilities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `flight`
--
ALTER TABLE `flight`
  ADD PRIMARY KEY (`id`),
  ADD KEY `class_id` (`class_id`),
  ADD KEY `plane_id` (`plane_id`),
  ADD KEY `route_id` (`route_id`),
  ADD KEY `schedule_id` (`schedule_id`);

--
-- Indexes for table `guest`
--
ALTER TABLE `guest`
  ADD PRIMARY KEY (`id`),
  ADD KEY `title_id` (`title_id`);

--
-- Indexes for table `hotel`
--
ALTER TABLE `hotel`
  ADD PRIMARY KEY (`id`),
  ADD KEY `location_id` (`location_id`);

--
-- Indexes for table `hotel_booking`
--
ALTER TABLE `hotel_booking`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rooms_id` (`rooms_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `plane`
--
ALTER TABLE `plane`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `plane_booking`
--
ALTER TABLE `plane_booking`
  ADD PRIMARY KEY (`id`),
  ADD KEY `flight_id` (`flight_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `revoked_token`
--
ALTER TABLE `revoked_token`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hotel_id` (`hotel_id`),
  ADD KEY `rooms_type_id` (`rooms_type_id`);

--
-- Indexes for table `room_facility`
--
ALTER TABLE `room_facility`
  ADD KEY `rooms_id` (`rooms_id`),
  ADD KEY `facilities_id` (`facilities_id`);

--
-- Indexes for table `room_type`
--
ALTER TABLE `room_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `routes`
--
ALTER TABLE `routes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `schedules`
--
ALTER TABLE `schedules`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `title`
--
ALTER TABLE `title`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `title_id` (`title_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `balance`
--
ALTER TABLE `balance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `class`
--
ALTER TABLE `class`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `facilities`
--
ALTER TABLE `facilities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `flight`
--
ALTER TABLE `flight`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `guest`
--
ALTER TABLE `guest`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `hotel`
--
ALTER TABLE `hotel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `hotel_booking`
--
ALTER TABLE `hotel_booking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `plane`
--
ALTER TABLE `plane`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `plane_booking`
--
ALTER TABLE `plane_booking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `revoked_token`
--
ALTER TABLE `revoked_token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `room_type`
--
ALTER TABLE `room_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `routes`
--
ALTER TABLE `routes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `schedules`
--
ALTER TABLE `schedules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `title`
--
ALTER TABLE `title`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `balance`
--
ALTER TABLE `balance`
  ADD CONSTRAINT `balance_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `flight`
--
ALTER TABLE `flight`
  ADD CONSTRAINT `flight_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `flight_ibfk_2` FOREIGN KEY (`plane_id`) REFERENCES `plane` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `flight_ibfk_3` FOREIGN KEY (`route_id`) REFERENCES `routes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `flight_ibfk_4` FOREIGN KEY (`schedule_id`) REFERENCES `schedules` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `guest`
--
ALTER TABLE `guest`
  ADD CONSTRAINT `guest_ibfk_1` FOREIGN KEY (`title_id`) REFERENCES `title` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `hotel`
--
ALTER TABLE `hotel`
  ADD CONSTRAINT `hotel_ibfk_1` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `hotel_booking`
--
ALTER TABLE `hotel_booking`
  ADD CONSTRAINT `hotel_booking_ibfk_1` FOREIGN KEY (`rooms_id`) REFERENCES `rooms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hotel_booking_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `plane_booking`
--
ALTER TABLE `plane_booking`
  ADD CONSTRAINT `plane_booking_ibfk_1` FOREIGN KEY (`flight_id`) REFERENCES `flight` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `plane_booking_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `rooms`
--
ALTER TABLE `rooms`
  ADD CONSTRAINT `rooms_ibfk_2` FOREIGN KEY (`hotel_id`) REFERENCES `hotel` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rooms_ibfk_4` FOREIGN KEY (`rooms_type_id`) REFERENCES `room_type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `room_facility`
--
ALTER TABLE `room_facility`
  ADD CONSTRAINT `room_facility_ibfk_1` FOREIGN KEY (`rooms_id`) REFERENCES `rooms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `room_facility_ibfk_2` FOREIGN KEY (`facilities_id`) REFERENCES `facilities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`title_id`) REFERENCES `title` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
