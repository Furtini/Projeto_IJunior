-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 04, 2016 at 12:11 PM
-- Server version: 5.7.9
-- PHP Version: 5.6.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sae_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `acoes_estrategicas`
--

DROP TABLE IF EXISTS `acoes_estrategicas`;
CREATE TABLE IF NOT EXISTS `acoes_estrategicas` (
  `ae_ID` int(10) NOT NULL AUTO_INCREMENT,
  `ae_nome` varchar(100) NOT NULL,
  `ae_descricao` varchar(300) NOT NULL,
  `ae_membro_resp` varchar(100) NOT NULL,
  `ae_custo_planejado` int(10) NOT NULL,
  `ae_custo_realizado` int(10) NOT NULL,
  `ae_status` varchar(30) NOT NULL,
  `ae_what` varchar(300) NOT NULL,
  `ae_how` varchar(300) NOT NULL,
  `ae_where` varchar(300) NOT NULL,
  `ae_when` varchar(300) NOT NULL,
  `ae_why` varchar(300) NOT NULL,
  `ae_who` varchar(300) NOT NULL,
  `ae_how_much` varchar(300) NOT NULL,
  PRIMARY KEY (`ae_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `acoes_estrategicas`
--

INSERT INTO `acoes_estrategicas` (`ae_ID`, `ae_nome`, `ae_descricao`, `ae_membro_resp`, `ae_custo_planejado`, `ae_custo_realizado`, `ae_status`, `ae_what`, `ae_how`, `ae_where`, `ae_when`, `ae_why`, `ae_who`, `ae_how_much`) VALUES
(1, 'Ação 1', 'teste', 'fulano', 123, 321, '', 'aaaaaaaa', 'eeeeeeeee', '333333', 'qqqqqq', 'eeeee', 'rrrrrrrrrr', 'aaaaaaaa'),
(2, 'Acção 2', 'teste 2', 'Lucas', 123, 321, '', 'asdasd', 'asdad', 'aaaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaa', 'aaaaaaaa'),
(3, 'Ação 3', 'asd', 'adasd', 13213, 123123, '', 'qqqqqqqq', 'eeeeee', 'rr', 'tta', 'aa', '', '111');

-- --------------------------------------------------------

--
-- Table structure for table `areas`
--

DROP TABLE IF EXISTS `areas`;
CREATE TABLE IF NOT EXISTS `areas` (
  `areas_ID` int(10) NOT NULL AUTO_INCREMENT,
  `areas_nome` varchar(100) NOT NULL,
  PRIMARY KEY (`areas_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `areas`
--

INSERT INTO `areas` (`areas_ID`, `areas_nome`) VALUES
(51, 'Area 7'),
(52, 'Area 1'),
(54, 'Area 3'),
(55, 'Area 9'),
(56, 'Area 6');

-- --------------------------------------------------------

--
-- Table structure for table `atividades`
--

DROP TABLE IF EXISTS `atividades`;
CREATE TABLE IF NOT EXISTS `atividades` (
  `ativ_ID` int(10) NOT NULL AUTO_INCREMENT,
  `ativ_nome` varchar(100) NOT NULL,
  `ativ_data_inicio` date NOT NULL,
  `ativ_term_planejado` date NOT NULL,
  `ativ_term_efetivo` date NOT NULL,
  `ativ_status` varchar(30) NOT NULL,
  `ativ_entr_planejada` date NOT NULL,
  `ativ_entr_realizada` date NOT NULL,
  `ativ_comentarios` varchar(300) NOT NULL,
  PRIMARY KEY (`ativ_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `atividades`
--

INSERT INTO `atividades` (`ativ_ID`, `ativ_nome`, `ativ_data_inicio`, `ativ_term_planejado`, `ativ_term_efetivo`, `ativ_status`, `ativ_entr_planejada`, `ativ_entr_realizada`, `ativ_comentarios`) VALUES
(1, 'Atividade 1', '2016-06-01', '2016-06-02', '2016-06-03', 'Concluida', '2016-06-08', '2016-06-13', 'Ok'),
(2, 'Atividade 2', '2016-06-01', '2016-06-02', '2016-06-03', 'Concluida', '2016-06-08', '2016-06-13', 'Ok');

-- --------------------------------------------------------

--
-- Table structure for table `membros`
--

DROP TABLE IF EXISTS `membros`;
CREATE TABLE IF NOT EXISTS `membros` (
  `membros_ID` int(10) NOT NULL AUTO_INCREMENT,
  `membros_nome` varchar(100) NOT NULL,
  `membros_cargo` varchar(100) NOT NULL,
  PRIMARY KEY (`membros_ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `membros`
--

INSERT INTO `membros` (`membros_ID`, `membros_nome`, `membros_cargo`) VALUES
(1, 'Lucas Furtini', 'chefe'),
(2, 'Lucas', 'limpeza');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
