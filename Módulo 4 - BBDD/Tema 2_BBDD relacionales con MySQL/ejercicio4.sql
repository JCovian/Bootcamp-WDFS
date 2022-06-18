-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 18-06-2022 a las 12:26:31
-- Versión del servidor: 8.0.29-0ubuntu0.20.04.3
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ejercicio4`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `customers`
--

CREATE TABLE `customers` (
  `customer_id` int NOT NULL,
  `customer_details` varchar(128) DEFAULT NULL,
  `name` varchar(64) DEFAULT NULL,
  `address` varchar(128) DEFAULT NULL,
  `phone_number` varchar(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `customers`
--

INSERT INTO `customers` (`customer_id`, `customer_details`, `name`, `address`, `phone_number`) VALUES
(1, 'Autónomo', 'Pepe', 'Oviedo', '985114061'),
(2, 'Autónomo', 'Juan', 'Gijón', '985352005'),
(3, 'Asalariado', 'Elena', 'Sevilla', '652225652'),
(4, 'Autónomo', 'Sara', 'Barcelona', '685225823'),
(5, 'Asalariado', 'John', 'A Coruña', '699256602');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `deliveries`
--

CREATE TABLE `deliveries` (
  `delivery_id` int NOT NULL,
  `sale_id` int DEFAULT NULL,
  `delivery_date` date DEFAULT NULL,
  `other_details` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `deliveries`
--

INSERT INTO `deliveries` (`delivery_id`, `sale_id`, `delivery_date`, `other_details`) VALUES
(1, 1, '2014-03-01', 'Entrega por la tarde'),
(2, 2, '2014-08-23', 'Se envía en grúa'),
(3, 3, '2020-12-24', 'Tapado para sorpresa'),
(4, 4, '2022-06-23', 'Recoge mensajería');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ref_model_types`
--

CREATE TABLE `ref_model_types` (
  `model_type_code` int NOT NULL,
  `parent_model_type_code` int DEFAULT NULL,
  `model_type_name` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `ref_model_types`
--

INSERT INTO `ref_model_types` (`model_type_code`, `parent_model_type_code`, `model_type_name`) VALUES
(1, NULL, 'Furgoneta'),
(2, NULL, 'Moto'),
(3, NULL, 'Turismo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sales`
--

CREATE TABLE `sales` (
  `sales_id` int NOT NULL,
  `customer_id` int DEFAULT NULL,
  `vehicle_id` int DEFAULT NULL,
  `sales_date` date DEFAULT NULL,
  `other_details` varchar(128) DEFAULT NULL,
  `price` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `sales`
--

INSERT INTO `sales` (`sales_id`, `customer_id`, `vehicle_id`, `sales_date`, `other_details`, `price`) VALUES
(1, 1, 5, '2014-02-14', 'Extensión de garantía', 19000),
(2, 2, 2, '2014-08-21', 'Mantenimiento primer año', 6000),
(3, 1, 1, '2020-12-15', 'Cubiertas nuevas', 15900),
(4, 4, 4, '2022-06-10', 'Casco', 21000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehicles`
--

CREATE TABLE `vehicles` (
  `vehicle_id` int NOT NULL,
  `model_type_code` int DEFAULT NULL,
  `vehicle_name` varchar(32) DEFAULT NULL,
  `launch_date` date DEFAULT NULL,
  `other_details` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `vehicles`
--

INSERT INTO `vehicles` (`vehicle_id`, `model_type_code`, `vehicle_name`, `launch_date`, `other_details`) VALUES
(1, 3, 'Peugeot', '2014-02-01', '308 SW'),
(2, 3, 'Renault', '2009-09-15', 'Scenic'),
(3, 1, 'Mercedes', '2021-09-01', 'Vito'),
(4, 2, 'Kawasaki', '2022-03-20', 'Ninja'),
(5, 1, 'VW', '1991-01-30', 'Transporter');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indices de la tabla `deliveries`
--
ALTER TABLE `deliveries`
  ADD PRIMARY KEY (`delivery_id`),
  ADD KEY `sale_id` (`sale_id`);

--
-- Indices de la tabla `ref_model_types`
--
ALTER TABLE `ref_model_types`
  ADD PRIMARY KEY (`model_type_code`),
  ADD KEY `parent_model_type_code` (`parent_model_type_code`);

--
-- Indices de la tabla `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`sales_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `vehicle_id` (`vehicle_id`);

--
-- Indices de la tabla `vehicles`
--
ALTER TABLE `vehicles`
  ADD PRIMARY KEY (`vehicle_id`),
  ADD KEY `model_type_code` (`model_type_code`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `customers`
--
ALTER TABLE `customers`
  MODIFY `customer_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `deliveries`
--
ALTER TABLE `deliveries`
  MODIFY `delivery_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `ref_model_types`
--
ALTER TABLE `ref_model_types`
  MODIFY `model_type_code` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `sales`
--
ALTER TABLE `sales`
  MODIFY `sales_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `vehicles`
--
ALTER TABLE `vehicles`
  MODIFY `vehicle_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `deliveries`
--
ALTER TABLE `deliveries`
  ADD CONSTRAINT `deliveries_ibfk_1` FOREIGN KEY (`sale_id`) REFERENCES `sales` (`sales_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Filtros para la tabla `ref_model_types`
--
ALTER TABLE `ref_model_types`
  ADD CONSTRAINT `ref_model_types_ibfk_1` FOREIGN KEY (`parent_model_type_code`) REFERENCES `ref_model_types` (`model_type_code`);

--
-- Filtros para la tabla `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `sales_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `sales_ibfk_2` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`vehicle_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Filtros para la tabla `vehicles`
--
ALTER TABLE `vehicles`
  ADD CONSTRAINT `vehicles_ibfk_1` FOREIGN KEY (`model_type_code`) REFERENCES `ref_model_types` (`model_type_code`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
