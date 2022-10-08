-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-10-2022 a las 16:34:23
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `oraclewines`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cart`
--

CREATE TABLE `cart` (
  `cart_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `interest`
--

CREATE TABLE `interest` (
  `interest_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `interest`
--

INSERT INTO `interest` (`interest_id`, `name`) VALUES
(1, 'Fiestas'),
(2, 'Casamientos'),
(3, 'Eventos Formales'),
(4, 'Reuniones'),
(5, 'Vida Sana');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `invoice`
--

CREATE TABLE `invoice` (
  `invoice_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `invoice`
--

INSERT INTO `invoice` (`invoice_id`, `name`) VALUES
(1, 'Factura A'),
(2, 'Factura B'),
(3, 'Factura C');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productcategory`
--

CREATE TABLE `productcategory` (
  `productCategory_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productcategory`
--

INSERT INTO `productcategory` (`productCategory_id`, `name`) VALUES
(1, 'Andino'),
(2, 'Patagónico'),
(3, 'Importado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` int(11) NOT NULL,
  `discount` decimal(10,0) DEFAULT NULL,
  `stock` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `awards` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `extra_description` text DEFAULT NULL,
  `rate` int(11) DEFAULT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`product_id`, `name`, `price`, `discount`, `stock`, `category_id`, `awards`, `description`, `extra_description`, `rate`, `image`) VALUES
(1, 'MOSQUITA MUERTA BLACK', 5000, '10', 20, 1, 1, 'BLEND DE CABERNET 750 cc', 'Del valle de Uco, en barrica de roble de 12 años', 5, 'id1.png'),
(2, 'RUTTINI ROSE DE MALBEC 750 cc', 6899, '15', 0, 1, 2, 'Malbec, año 2020', 'Del valle de Uco, en barrica de roble de 12 años', 5, 'id2.png'),
(3, 'DON MALBEC 750 cc', 9240, '15', 5, 2, 2, 'ESCORIHUELA DON', '', 4, 'image-1661985278377.png'),
(5, 'ALTA VISTA TERROIR SELECTION MALBEC 750 cc', 2632, '20', 10, 1, 10, '750 cc ALTA VISTA TERROIR', '750 cc ALTA VISTA TERROIR', 4, 'image-1662067133996.png'),
(6, 'ANGÉLICA ZAPATA MALBEC ALTA 750cc', 6000, '5', 2, 1, 0, 'Angélica Zapata Malbec es un 100% malbec pero de 5 viñedos distintos', NULL, 4, 'id6.png'),
(7, 'DON MALBEC 750cc', 9240, '10', 30, 1, 1, 'ESCORIAHUELA DON', NULL, 5, 'image-1657242862826.png'),
(8, 'CADUS FINCA VIÑA VIDA MALBEC 750cc', 10899, '10', 0, 1, 2, '750 cc CADUS FINCA', NULL, 4, 'image-1657250205032.png'),
(9, 'ALTA VISTA TERROIR', 2048, '12', 0, 2, 0, 'SELECCION MALBEC 750cc', NULL, 4, 'image-1657251084823.png'),
(12, 'EL ESTECO OLD VINES', 3565, '15', 10, 1, 0, '750cc MALBEC EL ESTECO OLD VINES', NULL, 3, 'image-1657575784743.png'),
(13, 'SAINT FELICIEN BONARDA 750cc', 4160, '5', 10, 1, 0, '750cc SAINT FELICIEN', NULL, 3, 'image-1657926798005.png'),
(14, 'Apuntes - Malbec Organico', 27500, '5', 30, 1, 1, 'Malbec Orgánico es un vino tinto de color violáceo brillante, de aromas sumamente expresivos que recuerdan a frutas rojas como guinda y granada, que se combinan con especias frescas y notas florales que remiten a rosas y violetas.', 'Su paladar es franco, jugoso y fluido, con taninos finos y acidez equilibrada, destacándose una notable tipicidad varietal. Final de boca frutal, de textura suave y gran persistencia aromática.', 1, 'image-1665072758913.png'),
(15, 'BOHÈME Brut Nature', 23436, '10', 24, 1, 5, 'Luigi Bosca Bohème Brut Nature es un espumoso de color dorado brillante. Sus aromas son delicados y elegantes, con notas que recuerdan a frutas blancas, frutos secos y pan tostado.', 'En boca es vivaz y refrescante, de paladar franco y equilibrado, con burbujas finas y persistentes. Es de carácter complejo, con buena estructura y fineza en su paso por boca; un vino sofisticado concebido para celebrar momentos únicos.', 1, 'image-1665072782082.png'),
(16, 'DE SANGRE · White Blend', 16565, '5', 12, 2, 4, 'Luigi Bosca De Sangre White Blend es un corte blanco de color amarillo con reflejos dorados y verdes. Su nariz es expresiva y netamente frutal; se destacan notas florales y de frutos blancos que recuerdan a duraznos, manzanas verdes y flor de azahar.', 'Su entrada en boca es fresca y nítida, de textura untuosa y vibrante, con un equilibrio jugoso. Es de paladar nítido, ágil, delicado y elegante. Final de boca largo y definido.', 1, 'image-1665072823819.png'),
(17, 'Primogénito Malbec', 2200, '5', 36, 1, 3, 'Rojo intenso con tonos violetas, brillante.', 'Nariz frutada con predominio de fruta de carozo, como ciruelas, cerezas y frutas de bayas maduras como frambuesas. Su nariz es fresca y en boca es franco, con muy buena acidez y notas de menta sobre un fondo de vainilla y café.', 1, 'image-1665072941827.png'),
(18, 'Domaine Bousquet Merlot', 1800, '5', 36, 1, 2, 'Color rubí intenso con tonos rojizos.', 'Nariz: Ciruelas y arándanos maduros con notas de chocolate y de especias.  Boca: Ciruelas y arándanos maduros con notas de chocolate y de especia', 1, 'image-1665069946820.png'),
(19, 'Vino Familia Shroeder Saurus Select Merlot', 1860, '5', 36, 1, 1, 'Descripción Saurus Select Merlot  BODEGA Familia Schroeder  TIPO Tinto  VARIEDAD Merlot', 'CORTE Merlot 100 %  ENÓLOGO Leonardo Puppato  ALCOHOL 14,5  UBICACIÓN / ORIGEN San Patricio del Chañar, Neuquén, Argentina', 3, 'image-1665070056094.png'),
(20, 'Vino Aniello 006 Pinot Noir', 16398, '5', 45, 1, 2, 'EN UN IMPRESIONANTE RECODO DEL RÍO QUE DA NOMBRE AL VALLE, SE SITÚA UNO DE LOS VIÑEDOS MÁS ESPECTACULARES DE LA PATAGONIA ARGENTINA. ', 'ANIELLO ES UNA BODEGA FAMILIAR QUE BUSCA PONER EN VALOR LA ANTIGUA TRADICIÓN VITIVINÍCOLA DE LA PATAGONIA, Y EN CONTACTO PERMANENTE CON LAS RAÍCES ITALIANAS DE SUS MIEMBROS.', 3, 'image-1665070248364.png'),
(21, 'Luigi Bosca Malbec Aniversario 120 Años -1500-', 72532, '15', 12, 1, 5, 'Tinto de color rojo violáceo, brillante y profundo. Sus aromas, precisos y complejos a la vez, son intensos, equilibrados y elegantes; de expresión frutal, destacándose la fruta negra, como también notas especiadas y florales.', 'En boca es un vino concentrado, amplio, armónico y suave, con una fluidez destacable y taninos de textura agradable. Presenta un final largo, complejo y persistente en el que se puede apreciar su gran potencial de guarda.', 5, 'image-1665070457491.png'),
(22, 'DE SANGRE · Malbec D.O.C', 19420, '25', 12, 1, 3, 'Luigi Bosca De Sangre - Malbec D.O.C es uno de los primeros vinos argentinos con Denominación de Origen. De color rojo violáceo profundo y brillante, sus aromas son equilibrados, con notas de frutas rojas y negras, y especias dulces. En boca es refrescante y voluptuoso, con taninos finos y delicados.', 'De paladar franco y expresivo, con carácter y tipicidad, y un final profundo con suaves tonos ahumados de la crianza en barricas de roble. Es un gran exponente del varietal y de su terruño, con gran potencial de guarda.', 5, 'image-1665070635287.png'),
(23, 'LUIGI BOSCA · Riesling . Las Compuertas', 17369, '5', 24, 1, 2, 'Luigi Bosca ∙ Riesling ∙ Las Compuertas es pionero entre los varietales argentinos. De color amarillo brillante con reflejos dorados y verdosos.', 'Sus aromas son equilibrados y expresivos; combinan frutas tropicales y flores silvestres. En boca es vivaz y refrescante, con buen cuerpo.', 3, 'image-1665070809314.png'),
(24, 'FINCA LOS NOBLES · Malbec Single Vineyard', 39797, '5', 12, 1, 5, 'Luigi Bosca Los Nobles Malbec es un tinto color rojo violáceo profundo con reflejos rubí.', 'Sus aromas son expresivos e intensos, con notas de frutos rojos y negros, especias dulces, confituras y suaves ahumados de la crianza.', 5, 'image-1665070933361.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `userName` varchar(100) NOT NULL,
  `email` text NOT NULL,
  `bday` date NOT NULL,
  `invoice_id` int(11) NOT NULL,
  `interest_id` int(11) NOT NULL,
  `picture` text NOT NULL,
  `password` text NOT NULL,
  `userCategory_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_id`, `name`, `userName`, `email`, `bday`, `invoice_id`, `interest_id`, `picture`, `password`, `userCategory_id`) VALUES
(5, 'Homero Simpson', 'homero', 'hsimpson@gmail.com', '1970-10-10', 3, 1, 'picture-1658598304517.jpg', '$2a$10$0VQLMFpPwb5xtJcClSfOJev4zwBxGGR9nMhGc7TIJvOjnrgM7p47O', 1),
(6, 'Rocky', 'Balboa', 'elsemental@italiano.com', '1890-12-31', 1, 1, 'picture-1659010135397.jpg', '$2a$10$veRb3rKfwGVUIYaUD7J84.YRqyGdhC.rbjQ/1bb.IHYNa363xfYf.', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `userscategory`
--

CREATE TABLE `userscategory` (
  `userCategory_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `userscategory`
--

INSERT INTO `userscategory` (`userCategory_id`, `name`) VALUES
(1, 'Admin'),
(2, 'Client');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indices de la tabla `interest`
--
ALTER TABLE `interest`
  ADD PRIMARY KEY (`interest_id`);

--
-- Indices de la tabla `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`invoice_id`);

--
-- Indices de la tabla `productcategory`
--
ALTER TABLE `productcategory`
  ADD PRIMARY KEY (`productCategory_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`) USING HASH,
  ADD KEY `invoice_id` (`invoice_id`),
  ADD KEY `interest_id` (`interest_id`),
  ADD KEY `userCategory_id` (`userCategory_id`);

--
-- Indices de la tabla `userscategory`
--
ALTER TABLE `userscategory`
  ADD PRIMARY KEY (`userCategory_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cart`
--
ALTER TABLE `cart`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `productcategory` (`productCategory_id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`invoice_id`) REFERENCES `invoice` (`invoice_id`),
  ADD CONSTRAINT `users_ibfk_2` FOREIGN KEY (`interest_id`) REFERENCES `interest` (`interest_id`),
  ADD CONSTRAINT `users_ibfk_3` FOREIGN KEY (`userCategory_id`) REFERENCES `userscategory` (`userCategory_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
