// Servidor del sistema funcionando dentro del navegador (versión demo web, datos ficticios).
// Archivo generado por scripts/demo/armar-demo-web.js: no editar a mano.
(function () {
  "use strict";
  var PREFIX = "panol-etha-demo-web:";
  var TOKEN_KEY = PREFIX + "token";
  var STATIC_FILES = { "/app/demo/datos-demo.json": "{\"descripcion\":\"Datos FICTICIOS para la versión demo del sistema de pañol. Las fechas se corren al día en que se instala la demo.\",\"generadoEl\":\"2026-11-20T15:00:00.000Z\",\"contraseña\":\"demo2026\",\"db\":{\"items\":[{\"id\":\"66d4eab6-3c8f-4742-8362-4eb0389a34f1\",\"name\":\"DELANTALES CON CROMO\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-038\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":5,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T12:16:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"ebb7d368-95b1-4517-98bf-0716324c27d4\",\"name\":\"DELANTALES SIMPLES\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-034\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":28,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T11:17:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"0cfc5ca8-5f80-4d10-bb36-f93c579eae95\",\"name\":\"JUEGO DE IMPACT DRIVER 14 PCS PARA AFLOJAR TORNILLOS\",\"category\":\"Herramientas manuales\",\"code\":\"HM-054\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T19:47:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"6b22769b-ebe8-4d37-baf5-212411b996ff\",\"name\":\"JUEGO DE COMPRECIMETRO\",\"category\":\"Instrumentos de medición\",\"code\":\"IM-008\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T14:13:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"a11d60c4-26f5-4375-b282-675ff3382d17\",\"name\":\"PUNTO DE PRUEBA CON VOLTIMETRO\",\"category\":\"Instrumentos de medición\",\"code\":\"IM-007\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":2,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T11:13:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"ffb0571e-1031-4bdd-9033-ba626356b8f7\",\"name\":\"PISTOLA PUESTA A PUNTO\",\"category\":\"Instrumentos de medición\",\"code\":\"IM-006\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T13:39:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"795f2568-87ed-4e61-9dd3-dcc01e6a439a\",\"name\":\"CAJA DE HERRAMIENTAS CROSS MASTER\",\"category\":\"Herramientas manuales\",\"code\":\"HM-053\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"caja\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T19:42:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"1b81b82e-1684-44cc-915f-6a04a528d3f5\",\"name\":\"MASCARAS DE SOLDAR\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-033\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":11,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T15:10:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"1141d238-f58f-4791-846a-a48dde282f01\",\"name\":\"MASCARAS FACIALES ( 2 SIN PLASTICO)\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-032\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":10,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T19:41:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"310af3e7-8826-49be-81a9-522d9277bc79\",\"name\":\"GUANTES BAQUETA\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-031\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":6,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T12:23:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"57d60373-a923-4c6e-9213-d96f5b780e06\",\"name\":\"GUANTES PARA SOLDAR ( INDURA)\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-030\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":27,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T19:12:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"ae55fa42-cfa4-4eb0-be81-ae9d0b886e55\",\"name\":\"DISCO DE 115MM\",\"category\":\"Consumibles\",\"code\":\"CO-042\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":5,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T17:32:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"41b26b15-1836-4a97-b880-76e942221001\",\"name\":\"DISCO DE DEBASTE 115.0 X 6.4 X 22.2MM CAJA ABIERTA 6 UNIDADES\",\"category\":\"Consumibles\",\"code\":\"CO-041\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T15:18:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"db25c62b-52b7-4d71-a376-97cacd0d5a2c\",\"name\":\"DISCO DE DEBASTE 115.0 X 6.4 X 22.2MM CAJA DE 10 UNIDADES\",\"category\":\"Consumibles\",\"code\":\"CO-040\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T16:05:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"c16d4e66-35df-4313-ac36-e279c53a81c6\",\"name\":\"TALADRO DE PERCUCION 650W ( BOSH)\",\"category\":\"Herramientas eléctricas\",\"code\":\"HE-015\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T15:22:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"6f11f03f-6e8b-45ce-91cf-209b673507e6\",\"name\":\"JUEGO DE MECHA COPA PARA MADERA ( INCOMPLETA)\",\"category\":\"Consumibles\",\"code\":\"CO-039\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T19:36:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"d8cff035-d152-4d84-802a-a9513111c803\",\"name\":\"DISCO ESMERIL GRANO 60 5\\\" DE 5 UNIDADES\",\"category\":\"Consumibles\",\"code\":\"CO-038\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T11:37:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"05255dab-8747-4c6a-9ce8-0748853bdcb5\",\"name\":\"DISCO ESMERIL CON RESPALDO SISTEMA VELCRO GRANO 80 DE 5\\\" DE 5 UNIDADES C/U\",\"category\":\"Consumibles\",\"code\":\"CO-037\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":4,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T19:29:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"87f5e7a9-5a87-4293-aa0c-d06ac0f183c8\",\"name\":\"SOPORTE PARA SIERRA COPA BIMETALICO HSS\",\"category\":\"Herramientas manuales\",\"code\":\"HM-052\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T18:32:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"a5f323e6-f269-49d1-a0d9-c72501326261\",\"name\":\"SIERRA COPA BI-METALICA DE 22MM\",\"category\":\"Herramientas manuales\",\"code\":\"HM-051\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T20:36:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"8f30319c-6e9c-4096-b6fa-7722817a712d\",\"name\":\"SIERRA COPA BI-METALICA DE 25MM\",\"category\":\"Herramientas manuales\",\"code\":\"HM-050\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T16:22:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"9a8ef243-56f4-4efc-8ced-d43c66d7032b\",\"name\":\"SIERRA COPA BI-METALICA DE 32MM\",\"category\":\"Herramientas manuales\",\"code\":\"HM-049\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T16:13:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"05793712-354d-419f-8a72-0075fcf243dd\",\"name\":\"SIERRA COPA BI-METALICA DE 19MM\",\"category\":\"Herramientas manuales\",\"code\":\"HM-048\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T12:32:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"b8edc02d-ec92-40b7-9726-b165d6054ee1\",\"name\":\"SIERRA COPA BI-METALICA DE 16MM\",\"category\":\"Herramientas manuales\",\"code\":\"HM-047\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T11:18:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"8efcae72-8c0f-48e3-9da4-e23bb66bd95a\",\"name\":\"SIERRA COPA BI-METALICA DE 40MM\",\"category\":\"Herramientas manuales\",\"code\":\"HM-046\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T18:50:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"6db3a7c4-8708-4acb-9054-4ff65c11d744\",\"name\":\"SIERRA COPA BI-METALICA DE 51MM\",\"category\":\"Herramientas manuales\",\"code\":\"HM-045\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T17:20:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"823c5509-fb77-4241-9e3c-628bf4e4265a\",\"name\":\"SIERRA COPA BI-METALICA DE 60MM\",\"category\":\"Herramientas manuales\",\"code\":\"HM-044\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T13:18:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"ec6c9f41-f617-430b-9d2f-6acb01f09f20\",\"name\":\"SIERRA COPA BI-METALICA DE 102MM\",\"category\":\"Herramientas manuales\",\"code\":\"HM-043\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T18:17:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"25f1563a-b8f4-4041-ae2d-13f0112930f1\",\"name\":\"SIERRA COPA BI-METALICA DE 76MM\",\"category\":\"Herramientas manuales\",\"code\":\"HM-042\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T17:22:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"a2a0176c-54aa-44d2-9ae3-de7970ab323c\",\"name\":\"JUEGO DE FORMON DE 4 UNIDADES MANGO DE PLASTICO\",\"category\":\"Herramientas manuales\",\"code\":\"HM-041\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T12:41:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"80ec6c56-e8e8-40b1-ae77-c100ac9b732e\",\"name\":\"JUEGO DE BROCA MADERA PLANA DE 6 UNIDADES\",\"category\":\"Herramientas manuales\",\"code\":\"HM-040\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":2,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T18:27:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"784253d8-25d7-4d39-b8bf-9a7e940cd6ba\",\"name\":\"JUEGO DE GUBIAS REFORZADAS SET DE 6 TAMAÑO 7\\\"\",\"category\":\"Herramientas manuales\",\"code\":\"HM-039\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T11:24:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"47ffa3b8-dc52-4e7e-8b7c-34582d923997\",\"name\":\"PARES DE GUANTES DIELECTRICOS\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-029\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":2,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T20:21:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"2fa0dba9-038a-4f35-8aec-e05ee85ff798\",\"name\":\"GAFAS\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-028\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":21,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T16:43:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"72d4468c-65db-4b23-87ab-a0879d3b79ab\",\"name\":\"UNION DOBLE DE 3/4\\\" IPS\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-051\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":10,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T15:08:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"a6a10412-903c-4fa6-9005-71ff88d66b17\",\"name\":\"UNION DOBLE DE 1/2\\\" IPS\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-050\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":10,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T14:13:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"2dc77035-17f2-4967-ba11-d8bee8e1bd97\",\"name\":\"UNION DOBLE DE 1\\\" IPS\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-049\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":5,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T20:46:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"a1723526-13b0-473f-b7e0-d1a249be8017\",\"name\":\"TERRAJA DE 3/4 IPS\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-048\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":2,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T20:28:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"31322edf-f74a-4474-a320-af8880fa1097\",\"name\":\"TERRAJA DE 1/2 IPS\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-047\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":2,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T11:45:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"5b499c84-a6c8-4e55-b463-d82c02d6b2f9\",\"name\":\"TERRAJA DE 1\\\" IPS\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-046\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T20:15:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"d690fba0-1c9c-45c5-b265-502488a6903f\",\"name\":\"TAPONES DE 25\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-045\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":17,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T12:03:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"624f376a-81ee-4040-8fd9-1994e2fb8612\",\"name\":\"T DE 3/4 IPS\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-044\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":10,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T11:14:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"4a9a91d4-3c8d-4216-8410-4a0651ec80eb\",\"name\":\"T DE 3/4 A 1/2 IPS\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-043\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":10,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T11:57:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"efd1b1b4-1286-4ccb-a0a0-17b49509e129\",\"name\":\"T DE 1/2 IPS\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-042\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":11,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T15:47:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"792e72c2-5226-4ee8-936b-2b0f5edab758\",\"name\":\"T DE 1\\\" A 3/4 IPS\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-041\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":8,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T11:40:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"c683cec5-04a8-4c3a-8362-9b50245294b5\",\"name\":\"SELLADOR CHICOS DE HIDRO3\",\"category\":\"Consumibles\",\"code\":\"IS-040\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":6,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T14:06:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"179e74a6-392f-43e6-b097-a7ebc5272923\",\"name\":\"ROLLOS DE TEFLON\",\"category\":\"Consumibles\",\"code\":\"IS-039\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":10,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T14:12:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"e5f98426-42f5-4ac1-9314-72a2d1d7a8c9\",\"name\":\"LUBRICANTE PARA CAÑOS PBC\",\"category\":\"Consumibles\",\"code\":\"IS-038\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":3,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T15:15:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"f1ea7921-898b-444f-9da8-d8e831a76bab\",\"name\":\"LLAVES ESFERICAS DE 3/4\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-037\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":10,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T20:19:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"478c4d39-a08a-472f-9ecf-eec1c03dc692\",\"name\":\"LLAVES ESFERICAS DE 1/2\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-036\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":10,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T11:02:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"b474cf2b-c262-4994-9632-3bc2e5dcd6ad\",\"name\":\"LLAVES DE PASO DE 20 FUSION\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-035\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":5,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T11:48:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"0bb2d02b-2c6f-4260-be93-fca88119a28b\",\"name\":\"CURVAS DE 040 A 45º HH\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-034\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":10,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T18:43:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"e62adc7c-a5ff-4353-bf7e-9da1e2606946\",\"name\":\"CURVAS A 45º DE 63HH\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-033\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":7,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T17:34:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"7b9e7b41-0acb-47ff-88d5-37b165085a3f\",\"name\":\"CURVAS 110 A 45º\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-032\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":4,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T19:07:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"e85c3b33-30f1-4c22-a9e6-38dcb7c34193\",\"name\":\"CUPLAS DE 63\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-031\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":10,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T19:22:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"ef34f3c3-117c-4062-8525-a6e99a944e32\",\"name\":\"CUPLAS DE 25\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-030\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":40,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T17:21:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"d0ff4ef9-171c-48be-8f88-c4007f0b911e\",\"name\":\"CUPLAS DE 20\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-029\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":70,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T14:07:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"84e063f3-443c-49e3-ac7a-1796e11c901f\",\"name\":\"CUPLAS DE 110\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-028\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":10,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T17:56:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"31ae4752-9705-4d00-900d-dd9ee4370981\",\"name\":\"CUPLAS DE 1 \\\" IPS\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-027\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":10,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T14:17:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"0bebe5be-5da2-4b7c-9b02-667969c26d9a\",\"name\":\"CUPLAS DE 040\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-026\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":10,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T12:16:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"0587f072-172a-4517-9301-eb826764f93e\",\"name\":\"CUPLAS CON INSERTO DE 20\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-025\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":20,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T11:55:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"5f6c8a65-5249-40f8-b2fc-3546c97f7df7\",\"name\":\"CUPLAS 3/4 IPS\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-024\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":10,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T17:22:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"fe8d7aaf-1f93-4e96-b066-2a2cb6be000b\",\"name\":\"CUPLAS 1/2 IPS\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-023\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":10,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T20:53:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"01b94250-4a7b-4357-89ec-2d9d1723fa2d\",\"name\":\"CODOS TERMUFUCIN DE 25\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-022\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":50,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T17:40:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"f170400e-4a72-4456-816f-6abc85b6d2b5\",\"name\":\"CODOS TERMOFUCION DE 20\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-021\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":50,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T16:51:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"3a8c02ef-bfb4-49a3-a1e9-3056f0742a15\",\"name\":\"CODOS DE 63 A 90º HH\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-020\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":10,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T14:30:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"a336c399-ef8d-4bda-8f13-4671f186a2d5\",\"name\":\"CODOS DE 3/4 IPS\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-019\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":20,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T13:37:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"3df10348-7697-4b61-b097-1efbe9fb4bc5\",\"name\":\"CODOS DE 110 CON DERIVACION DE 63\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-018\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":3,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T16:10:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"3b85dc47-7ac4-43d3-a2a0-97621fc6c67e\",\"name\":\"CODOS DE 1/2 IPS\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-017\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":22,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T14:57:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"9724da80-35de-4bc1-bc4e-0b31c1200f98\",\"name\":\"CODOS DE 1\\\" IPS\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-016\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":15,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T11:21:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"923e4247-99da-4c77-9b34-562db5101f91\",\"name\":\"CODOS DE 1\\\"  IPS\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-015\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T17:21:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"f7007e82-6f5d-4de1-9681-4e1b8232b597\",\"name\":\"CODOS DE 040 A 90º HH\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-014\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":10,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T17:18:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"f4b3970b-35b9-43eb-998f-72b2c128fb5b\",\"name\":\"CODOS CON INSERTO DE 20\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-013\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":30,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T15:53:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"75fcc5ef-483c-4968-89ee-f5190d2c9904\",\"name\":\"CODOS CON INSERTO DE 1/2 IPS\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-012\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":13,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T13:59:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"e7695df5-2153-47f6-b71f-b9473541bf46\",\"name\":\"CODOS CON INSERT H DE 3/4 X 1/2 IPS\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-011\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":10,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T11:58:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"31f7c9e8-fbac-45ff-be60-0e4a38d68294\",\"name\":\"CODOS BASE DE 110\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-010\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":5,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T15:15:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"b02d3ecf-7670-49bd-bac2-f7afa6d739b4\",\"name\":\"CODOS A 90º  A 110\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-009\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":8,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T11:19:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"32c64bea-e077-4ffe-ab51-cd63a1df445e\",\"name\":\"CAÑOS DE 3/4 IPS\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-008\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":8,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T19:30:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"4ea874d6-fad8-4c42-b22d-0cecfd9e40e4\",\"name\":\"CAÑOS DE 110\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-007\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":8,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T14:25:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"045928f8-f443-44cc-9497-ef30f4e78026\",\"name\":\"CAÑOS DE 1\\\" IPS\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-006\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":6,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T20:53:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"f4c50989-0c1c-46a1-862c-3c50873c43f1\",\"name\":\"CAÑOS DE 040\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-005\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":8,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T18:05:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"9fdc7cf7-a6e2-4cf4-a6f1-855d9c87d8b2\",\"name\":\"BUJES DE 3/4 A MEDIA IPS\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-004\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":10,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T13:20:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"2b0a9a82-77da-4712-9d0a-a0298075502f\",\"name\":\"BUJES DE 1\\\" A 3/4 IPS\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-003\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":10,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T16:57:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"ac895aed-065c-4c09-9c2e-8c5e924dd6d4\",\"name\":\"BOLSAS DE CAÑAMO\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-002\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":10,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T16:39:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"f653dd79-6243-4a99-b148-768b0e1fe800\",\"name\":\"BASTAGOS PARA GRIFO\",\"category\":\"Instalaciones sanitarias\",\"code\":\"IS-001\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":7,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T18:13:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"bc5624d5-9e44-4f8a-bc06-31eac5c0b5e5\",\"name\":\"TORNILLOS\",\"category\":\"Consumibles\",\"code\":\"CO-033\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":600,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T18:17:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"edbed857-79b8-41a0-9f1e-5299fa24265d\",\"name\":\"TENAZAS\",\"category\":\"Herramientas manuales\",\"code\":\"HM-038\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":3,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T12:11:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"9ed0ed6a-4924-4ba6-9754-9de99c7cd34b\",\"name\":\"SERRUCHOS\",\"category\":\"Herramientas manuales\",\"code\":\"HM-037\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":3,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T20:29:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"9fa6afbc-3fc8-4d09-9df5-80f7cf4c9bfd\",\"name\":\"RULETAS DE 3 METROS\",\"category\":\"Herramientas manuales\",\"code\":\"HM-036\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":8,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T17:03:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"de90a36c-8684-45cd-8358-d1a59ada7916\",\"name\":\"REGLA METALICA\",\"category\":\"Herramientas manuales\",\"code\":\"HM-035\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T15:34:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"4bd30e62-ef6a-4344-9cf3-701a42b6d75a\",\"name\":\"PINZAS DE 7\\\"\",\"category\":\"Herramientas manuales\",\"code\":\"HM-034\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":2,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T17:34:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"701a2309-9327-4c46-a9a1-962bf9e9e71c\",\"name\":\"MARTILLOS\",\"category\":\"Herramientas manuales\",\"code\":\"HM-033\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":3,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T11:57:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"8256fd3c-90de-4285-b0d3-cb9173d2ae89\",\"name\":\"LIMAS\",\"category\":\"Herramientas manuales\",\"code\":\"HM-032\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":2,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T14:42:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"b63666df-db9b-43f2-85c1-4c66a56210f2\",\"name\":\"HOJAS DE SIERRA\",\"category\":\"Consumibles\",\"code\":\"CO-032\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":10,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T17:49:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"1ea2e389-0e1a-4c8e-93a5-af37090e1725\",\"name\":\"ESCOFINA\",\"category\":\"Herramientas manuales\",\"code\":\"HM-031\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T12:54:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"c6ba494b-c91d-4498-a662-499f10983946\",\"name\":\"COLA FORTEX DE 1KG\",\"category\":\"Consumibles\",\"code\":\"CO-031\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":7,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T14:46:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"4eb67b03-27c1-44c1-9b20-9bd7700cfd58\",\"name\":\"CAJA DE TALADRO PERCUTOR\",\"category\":\"Herramientas manuales\",\"code\":\"HM-030\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"caja\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T19:09:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"4dabf5be-9e6e-47cb-bd09-5858d7a0ce4a\",\"name\":\"BOTELLA DE AGUARRAS\",\"category\":\"Consumibles\",\"code\":\"CO-030\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":3,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T19:28:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"60804db4-d09e-495e-8fe0-5718f789f213\",\"name\":\"BOLSA DE CLAVO DE 1 1/2\\\"\",\"category\":\"Consumibles\",\"code\":\"CO-029\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"bolsa\",\"stock\":12,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T12:47:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"b5cc580c-22a2-4d75-b340-b4b4899a0305\",\"name\":\"BOLSA DE FROMONES DE MADERA\",\"category\":\"Consumibles\",\"code\":\"CO-028\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"bolsa\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T20:12:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"d1f212d1-40ce-4bfa-bcd7-aecdf358067d\",\"name\":\"BOLSA DE CLAVOS DE 2\\\"\",\"category\":\"Consumibles\",\"code\":\"CO-027\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"bolsa\",\"stock\":4,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T20:34:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"c876b5ed-fac8-4c77-8fc1-bd120a463494\",\"name\":\"BOLSA DE CLAVOS DE 1\\\"\",\"category\":\"Consumibles\",\"code\":\"CO-026\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"bolsa\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T14:37:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"fed7a597-4211-4072-b13c-2d6b2c5995a7\",\"name\":\"BOLSA DE CLAVO 9X25\",\"category\":\"Consumibles\",\"code\":\"CO-025\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"bolsa\",\"stock\":9,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T13:11:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"7f57f792-76f2-451f-8dc2-02d723c15054\",\"name\":\"BARRETAS\",\"category\":\"Herramientas manuales\",\"code\":\"HM-029\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":3,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T15:09:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"e3a91da9-5365-45fd-a114-1e2e5952e2c0\",\"name\":\"BARNIZ MURELLA 1 LITRO\",\"category\":\"Consumibles\",\"code\":\"CO-024\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":4,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T16:16:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"54e8e68a-6a8b-48a9-9da3-b75cf6ae4a2a\",\"name\":\"RULETA DE 5 METROS\",\"category\":\"Herramientas manuales\",\"code\":\"HM-028\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":5,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T20:11:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"f89411f0-8bb4-4ec7-93ec-ea66f01fd72b\",\"name\":\"PINZAS PARA PORTA ELECTRODOS\",\"category\":\"Herramientas manuales\",\"code\":\"HM-027\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":5,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T16:26:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"869fe79f-f305-4db1-a6d9-59d5b63ecaee\",\"name\":\"PINZAS PARA MAS\",\"category\":\"Herramientas manuales\",\"code\":\"HM-026\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":5,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T17:04:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"0369c3db-0f50-4922-a3ba-a1878b9fc6cf\",\"name\":\"PINCELES DE 2\\\"\",\"category\":\"Consumibles\",\"code\":\"CO-023\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":10,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T18:08:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"09820e3b-3ae3-455e-8239-eadd3ca64a9d\",\"name\":\"METROS DE CABLE DE REVESTIMIENTO DE PVC\",\"category\":\"Consumibles\",\"code\":\"CO-022\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"metro\",\"stock\":10,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T16:42:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"cc965e2c-910c-40d5-9574-297f4f138058\",\"name\":\"MECHAS DE 5 MILIMETROS\",\"category\":\"Consumibles\",\"code\":\"CO-021\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":11,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T15:13:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"d94a0353-a84d-4c73-9d04-6b1cb16439c8\",\"name\":\"MASCARAS DE SOLDAR FOTOSENCIBLES\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-027\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":5,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T19:08:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"b2f1037c-06d0-4c0f-928d-0a5eeb8de323\",\"name\":\"JUEGO DE LLAVES EXAGONALES DE 9 LLAVES\",\"category\":\"Herramientas manuales\",\"code\":\"HM-025\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T15:42:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"a26a38e6-fc19-438a-9a76-316e6de1ea79\",\"name\":\"FALSA ESCUADRA\",\"category\":\"Herramientas manuales\",\"code\":\"HM-024\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T18:59:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"f5a7f3d8-d28e-4f61-ba09-ca7725579c8a\",\"name\":\"DISCOS PARA LA MASCARA SENCITIVA\",\"category\":\"Consumibles\",\"code\":\"CO-020\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":20,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T14:20:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"2db9aef0-b0ed-4df2-8afe-e345b74d169d\",\"name\":\"DISCOS DE DESGASTE\",\"category\":\"Consumibles\",\"code\":\"CO-019\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":20,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T13:41:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"de7491fb-6afb-4bb9-8f48-0ea253269509\",\"name\":\"DISCOS DE CORTE\",\"category\":\"Consumibles\",\"code\":\"CO-018\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":50,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T18:43:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"ceab760a-d225-4fd7-8e12-bae4c6082a60\",\"name\":\"CAJA DE ELECTRODOS\",\"category\":\"Consumibles\",\"code\":\"CO-017\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"caja\",\"stock\":5,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T16:47:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"fb8aa0b7-9b30-49b0-80ed-4c4e5da813a9\",\"name\":\"BOLSA DE REMACHE\",\"category\":\"Consumibles\",\"code\":\"CO-016\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"bolsa\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T20:21:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"a8d83c2c-e807-4632-9e37-1f5ec7b2cbb3\",\"name\":\"AMOLADORAS\",\"category\":\"Herramientas eléctricas\",\"code\":\"HE-014\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":3,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T14:37:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"3b41f019-476b-4110-bff4-a4d3d450620b\",\"name\":\"TORNILLOS AUTOPERFORANTES\",\"category\":\"Consumibles\",\"code\":\"CO-015\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":19,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T19:48:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"28fc5e0c-942a-4dea-9e90-7d6f6e61d23d\",\"name\":\"TORNILLOS 4X30\",\"category\":\"Consumibles\",\"code\":\"CO-014\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":53,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T14:54:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"c936be54-ddf7-439f-9ac9-ec059563c88b\",\"name\":\"TORNILLOS 4,5X45\",\"category\":\"Consumibles\",\"code\":\"CO-013\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":51,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T17:18:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"10e5a3fc-9bb8-49d3-9ed3-845dab799c7a\",\"name\":\"TERMOFUSORA\",\"category\":\"Herramientas eléctricas\",\"code\":\"HE-013\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T18:25:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"3be2c92c-d561-4a4f-badd-608448720052\",\"name\":\"TALADRO INDUSTRIAL\",\"category\":\"Herramientas eléctricas\",\"code\":\"HE-012\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T16:14:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"c9f3022f-3d07-468d-8e37-71d5382f8526\",\"name\":\"TALADRO DE PERCUCION\",\"category\":\"Herramientas eléctricas\",\"code\":\"HE-011\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T15:54:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"85b95865-df39-4245-ac3b-e7be8aee3a60\",\"name\":\"TALADRO DE MADERA PLANA (JUEGOS)\",\"category\":\"Herramientas manuales\",\"code\":\"HM-023\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":2,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T14:51:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"e842df7e-7281-47be-afb2-bc9bd17ad86d\",\"name\":\"TALADRO\",\"category\":\"Herramientas eléctricas\",\"code\":\"HE-010\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":2,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T18:14:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"02b0eb3e-5b49-49ef-b39d-2f79ba6a7ae6\",\"name\":\"SOPORTE PARA COPA\",\"category\":\"Herramientas manuales\",\"code\":\"HM-022\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T11:26:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"f4e752a3-62d7-4f0e-ab42-3d37f21d8a2f\",\"name\":\"SOLDADOR INSTANTANEO (CAJA)\",\"category\":\"Herramientas eléctricas\",\"code\":\"HE-009\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":2,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T16:06:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"1ca3b0a8-f827-49f4-ad7e-595252f59e79\",\"name\":\"SERRUCHOS\",\"category\":\"Herramientas manuales\",\"code\":\"HM-021\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":8,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T16:31:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"2edc9c1b-1986-425a-adc6-d5a4e23a954a\",\"name\":\"SIERRAS COPO PARA MADERA (CAJA)\",\"category\":\"Herramientas manuales\",\"code\":\"HM-020\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T12:55:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"d5656727-39ef-441e-8489-cf182df5621c\",\"name\":\"ROTOPERCUTOR\",\"category\":\"Herramientas eléctricas\",\"code\":\"HE-066\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T15:27:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"88831a07-2b11-42eb-8b0b-aa8bd3ab212e\",\"name\":\"REMACHES RAPIDOS (CAJA)\",\"category\":\"Consumibles\",\"code\":\"CO-053\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T20:04:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"495a463e-a9c3-474d-93cd-f468430756d4\",\"name\":\"PROTECTORES AUDITIVOS\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-026\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":268,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T20:57:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"d5d20a5b-8159-49bb-8376-8072ca08ce73\",\"name\":\"MASCARAS FACIALES\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-037\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":16,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T20:59:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"c10dcd3d-cdff-4049-bdd4-51ec703e0b6a\",\"name\":\"MASCARAS DE SOLDAR\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-036\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":16,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T13:54:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"8e235f5a-3194-4091-b349-9b629c124659\",\"name\":\"GUBIAS REFORZADAS (JUEGO)\",\"category\":\"Herramientas manuales\",\"code\":\"HM-019\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T11:56:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"2aa03614-f18f-4394-98e8-ca22da9bed3a\",\"name\":\"GUANTES VAQUETA\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-023\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":20,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T13:12:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"fa386595-6474-47a7-99d8-960dd2b0e2b2\",\"name\":\"GUANTES DE CUERO MANGA LARGA( SIN BOLSA)\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-022\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":8,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T20:13:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"2da35c7e-ebe6-4de3-87ab-5b6a2f394109\",\"name\":\"GUANTES DE CUERO MANGA LARGA (EN BOLSA)\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-021\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":12,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T20:36:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"6bfb35de-964f-4a52-8c93-7e49a6a201b1\",\"name\":\"GUANTES ANTICORTES\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-020\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":13,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T15:02:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"d8583316-6b30-4403-ac03-6edbe5eeec95\",\"name\":\"GAFAS (CAJAS CERRADAS)\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-019\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":9,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T18:05:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"9cede6be-f548-46e1-bd6d-0c57334bf492\",\"name\":\"GAFAS (CAJAS ABIERTAS)\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-035\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":89,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T16:16:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"dbd5589b-f030-46ac-b992-65df3d8c5554\",\"name\":\"FORMON SET 4 PCS MANGO DE PLASTICO\",\"category\":\"Herramientas manuales\",\"code\":\"HM-018\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T16:58:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"7473c34b-8f90-4841-93a8-2ce75fe58901\",\"name\":\"DISCOS DE DESGASTE\",\"category\":\"Consumibles\",\"code\":\"HE-008\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":2,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T14:50:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"c40393a7-447a-4b3f-9316-e91bb3b83966\",\"name\":\"DISCO FLAG\",\"category\":\"Consumibles\",\"code\":\"CO-012\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T15:43:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"2083ce26-f8a4-436a-b199-526334e8ba37\",\"name\":\"DISCO ESMERILL (PARES)\",\"category\":\"Herramientas manuales\",\"code\":\"HM-017\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":15,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T19:22:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"cf032871-ade1-4667-8920-34811fae2a87\",\"name\":\"DELANTALES USADOS\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-025\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":10,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T19:47:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"a6648b88-984f-4698-b26f-265d81c3637f\",\"name\":\"DELANTALES NUEVOS\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-024\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":36,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T15:00:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"0a50ecb8-0ca8-4bd0-b235-076f1ed72705\",\"name\":\"SIERRA COPA (CAJAS)\",\"category\":\"Herramientas manuales\",\"code\":\"HM-016\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"caja\",\"stock\":10,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T13:48:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"251a5b14-419f-4493-9d01-a1987d557bfe\",\"name\":\"CAJAS DE PROTECTOR OPTIME\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-015\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"caja\",\"stock\":10,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T15:12:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"b5ebf4d7-60f3-4a9f-b0b0-caba6c989d82\",\"name\":\"CAJA DE TORNILLOS AUTOPERFORANTES\",\"category\":\"Consumibles\",\"code\":\"CO-009\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"caja\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T11:33:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"498f1aa1-c65c-4194-ad04-81b140ac0579\",\"name\":\"AMOLADORA\",\"category\":\"Herramientas eléctricas\",\"code\":\"HE-007\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T12:38:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"ae28472c-eb5c-4ba8-ac9a-3af6e47dff8e\",\"name\":\"SERRUCHOS\",\"category\":\"Herramientas manuales\",\"code\":\"HM-015\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":2,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T19:44:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"52945731-bcc8-4044-8a43-7901a19a7adf\",\"name\":\"PINZA DE CORTE\",\"category\":\"Herramientas manuales\",\"code\":\"HM-014\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T14:00:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"9dcab1b4-aade-41ae-843f-fc6c420983f8\",\"name\":\"MECHA BROCA (SOPORTE)\",\"category\":\"Herramientas manuales\",\"code\":\"HM-013\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T14:42:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"88612b6f-8e6c-4f7a-93d0-0fc368df677d\",\"name\":\"MASCARAS FACIALES\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-014\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":6,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T15:20:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"a9d642e8-0891-4feb-b69a-96cf35e517ae\",\"name\":\"MAQUINA DE SOLDAR\",\"category\":\"Herramientas eléctricas\",\"code\":\"HE-006\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T18:01:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"58964e61-58a0-4ab1-b51c-a98a69dad8b3\",\"name\":\"GUANTES VAQUETA\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-013\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":42,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T20:35:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"4194b080-fcf3-4259-a887-d8f578efcdcb\",\"name\":\"GUANTES DE CUERO SIN BOLSA\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-012\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":8,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T14:01:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"297312e4-cafd-4d63-bb5e-e40d5d74b76f\",\"name\":\"GUANTES DE CUERO MANGA LARGA EN BOLSA\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-011\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":12,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T20:39:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"3197ac1f-c89d-43cb-83a5-7253fb2f96a1\",\"name\":\"GUANTES ANTICORTES\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-010\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":13,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T13:58:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"a08dd3ac-d3e8-4118-b784-c4675cd1ee80\",\"name\":\"FORMON SET 4PS\",\"category\":\"Herramientas manuales\",\"code\":\"HM-012\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":8,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T13:52:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"9aafd881-8e00-4d6c-b6fa-7f2b4bfcddd8\",\"name\":\"DISCO ESMERILL\",\"category\":\"Consumibles\",\"code\":\"CO-008\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":6,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T15:14:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"4174d895-2805-4ebf-a752-11349e9e6ff3\",\"name\":\"DELANTALES DE SOLDADOR\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-009\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"unidad\",\"stock\":180,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T16:01:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"23cef861-af8f-4325-a797-b60001db3f99\",\"name\":\"CAJA PROTECTORES AUDITIVOS DE CARPINTERIA\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-008\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"caja\",\"stock\":10,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T16:17:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"7ac11d27-f0ec-4264-ae11-52bbb12a3382\",\"name\":\"CAJA DE GAFAS\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-007\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"caja\",\"stock\":13,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T13:40:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"7e90ac00-3248-4ff7-bc71-4c2c3c4fdc0c\",\"name\":\"CAJAS DE SIERRA COPA\",\"category\":\"Herramientas manuales\",\"code\":\"HM-011\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"caja\",\"stock\":10,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T16:26:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"9b8debde-ae1d-42d6-8e42-3637ceb49cb6\",\"name\":\"CAJA DE TRAPOS\",\"category\":\"Consumibles\",\"code\":\"CO-007\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"caja\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T20:48:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"dacc56a4-7fd0-4547-a8ca-34cf69ce4f05\",\"name\":\"CAJA DE TALADRO PANA\",\"category\":\"Herramientas manuales\",\"code\":\"HM-010\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"caja\",\"stock\":2,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T17:13:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"4cbe9906-eb81-4f7b-bb8a-7b9aa00031ee\",\"name\":\"CAJA DE PROTECTORES AUDITIVOS\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-006\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"caja\",\"stock\":3,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T18:41:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"281bf516-c0c8-42e7-b462-135386b78051\",\"name\":\"CAJA DE MECHA COPA\",\"category\":\"Herramientas manuales\",\"code\":\"HM-009\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"caja\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T12:45:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"5b3adfdb-92ea-4569-bc21-2425325b46cf\",\"name\":\"CAJA DE GUBIAS REFORZADAS\",\"category\":\"Herramientas manuales\",\"code\":\"HM-008\",\"subcode\":\"\",\"location\":\"Pañol\",\"unit\":\"caja\",\"stock\":1,\"stockMinimum\":1,\"amount\":100,\"notes\":\"\",\"createdAt\":\"2026-05-25T11:35:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"321e2c8a-0063-4698-af21-652831175497\",\"name\":\"Cable HDMI 3 m\",\"category\":\"Informática\",\"code\":\"IN-005\",\"subcode\":\"\",\"location\":\"Sala de informática\",\"unit\":\"unidad\",\"stock\":6,\"stockMinimum\":3,\"amount\":6500,\"notes\":\"\",\"createdAt\":\"2026-05-25T20:49:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"5ac8dc52-2786-40f0-9bb2-748a9e4dedc7\",\"name\":\"Pendrive 32 GB\",\"category\":\"Informática\",\"code\":\"IN-004\",\"subcode\":\"\",\"location\":\"Sala de informática\",\"unit\":\"unidad\",\"stock\":12,\"stockMinimum\":5,\"amount\":8900,\"notes\":\"\",\"createdAt\":\"2026-05-25T20:25:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"b2e78237-f0ad-42f6-a0eb-6c95b4fdd49f\",\"name\":\"Mouse USB\",\"category\":\"Informática\",\"code\":\"IN-003\",\"subcode\":\"\",\"location\":\"Sala de informática\",\"unit\":\"unidad\",\"stock\":15,\"stockMinimum\":5,\"amount\":7800,\"notes\":\"\",\"createdAt\":\"2026-05-25T15:25:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"2abfaf31-dda5-45d4-b6a0-e899eafc437d\",\"name\":\"Proyector multimedia\",\"category\":\"Informática\",\"code\":\"IN-002\",\"subcode\":\"\",\"location\":\"Sala de informática\",\"unit\":\"unidad\",\"stock\":2,\"stockMinimum\":1,\"amount\":410000,\"notes\":\"\",\"createdAt\":\"2026-05-25T19:12:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"a4d311ae-bc14-4963-b42c-702c581cd5ae\",\"name\":\"Notebook 14\\\"\",\"category\":\"Informática\",\"code\":\"IN-001\",\"subcode\":\"\",\"location\":\"Sala de informática\",\"unit\":\"unidad\",\"stock\":0,\"stockMinimum\":2,\"amount\":720000,\"notes\":\"\",\"createdAt\":\"2026-05-25T19:39:00.000Z\",\"createdBy\":\"Jorge Medina\",\"retiredAt\":\"2026-11-20T20:15:35.885Z\",\"retiredBy\":\"Jorge Medina\"},{\"id\":\"2edd5d23-8a44-47ee-87e6-a9b93415fb93\",\"name\":\"Osciloscopio digital 2 canales\",\"category\":\"Electrónica\",\"code\":\"EL-005\",\"subcode\":\"\",\"location\":\"Laboratorio de electrónica\",\"unit\":\"unidad\",\"stock\":2,\"stockMinimum\":1,\"amount\":480000,\"notes\":\"\",\"createdAt\":\"2026-05-25T12:28:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"834bf7a4-8db3-4c4f-9325-680703352a8e\",\"name\":\"Kit Arduino Uno\",\"category\":\"Electrónica\",\"code\":\"EL-004\",\"subcode\":\"\",\"location\":\"Laboratorio de electrónica\",\"unit\":\"unidad\",\"stock\":10,\"stockMinimum\":4,\"amount\":39571.4286,\"notes\":\"\",\"createdAt\":\"2026-05-25T16:33:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":41000,\"lastPurchaseAt\":\"2026-10-01T15:12:38.000Z\",\"lastPurchaseSupplier\":\"Electro Insumos Andinos\",\"lastPurchaseInvoice\":\"B-0002-00004518\"},{\"id\":\"6061480c-2d69-46cd-b334-beaf8663db52\",\"name\":\"Soldador tipo lápiz 40 W\",\"category\":\"Electrónica\",\"code\":\"EL-003\",\"subcode\":\"\",\"location\":\"Laboratorio de electrónica\",\"unit\":\"unidad\",\"stock\":8,\"stockMinimum\":4,\"amount\":14500,\"notes\":\"\",\"createdAt\":\"2026-05-25T12:49:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"d925879b-8254-42af-a2c0-1199eb989c00\",\"name\":\"Fuente de laboratorio 0-30 V\",\"category\":\"Electrónica\",\"code\":\"EL-002\",\"subcode\":\"\",\"location\":\"Laboratorio de electrónica\",\"unit\":\"unidad\",\"stock\":4,\"stockMinimum\":2,\"amount\":129000,\"notes\":\"\",\"createdAt\":\"2026-05-25T17:41:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"f7c481db-5d82-4c89-91e0-fb5b15922e19\",\"name\":\"Protoboard 830 puntos\",\"category\":\"Electrónica\",\"code\":\"EL-001\",\"subcode\":\"\",\"location\":\"Laboratorio de electrónica\",\"unit\":\"unidad\",\"stock\":14,\"stockMinimum\":6,\"amount\":6725,\"notes\":\"\",\"createdAt\":\"2026-05-25T15:37:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":6480,\"lastPurchaseAt\":\"2026-10-01T15:12:38.000Z\",\"lastPurchaseSupplier\":\"Electro Insumos Andinos\",\"lastPurchaseInvoice\":\"B-0002-00004518\"},{\"id\":\"7b0c770c-ece4-4fd1-9a9a-5339f1871f6b\",\"name\":\"Mecha HSS 6 mm\",\"category\":\"Consumibles\",\"code\":\"CO-006\",\"subcode\":\"\",\"location\":\"Depósito de consumibles\",\"unit\":\"unidad\",\"stock\":30,\"stockMinimum\":12,\"amount\":2008.1081,\"notes\":\"\",\"createdAt\":\"2026-05-25T18:51:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":2100,\"lastPurchaseAt\":\"2026-09-11T14:38:01.000Z\",\"lastPurchaseSupplier\":\"Distribuidora Técnica del Norte SA\",\"lastPurchaseInvoice\":\"A-0012-00031002\"},{\"id\":\"8245ae70-fe9a-4310-8dda-3a5dce87d9e6\",\"name\":\"Lija al agua grano 220\",\"category\":\"Consumibles\",\"code\":\"CO-005\",\"subcode\":\"\",\"location\":\"Depósito de consumibles\",\"unit\":\"unidad\",\"stock\":80,\"stockMinimum\":30,\"amount\":650,\"notes\":\"\",\"createdAt\":\"2026-05-25T18:00:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"1ed4e93f-e1cb-45d8-adde-80f19ed5efd7\",\"name\":\"Estaño 60/40 (rollo 250 g)\",\"category\":\"Consumibles\",\"code\":\"CO-004\",\"subcode\":\"\",\"location\":\"Depósito de consumibles\",\"unit\":\"rollo\",\"stock\":9,\"stockMinimum\":4,\"amount\":18500,\"notes\":\"\",\"createdAt\":\"2026-05-25T15:01:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"cd2870ca-f7fc-4987-90f8-947cd376b0cb\",\"name\":\"Cinta aisladora\",\"category\":\"Consumibles\",\"code\":\"CO-003\",\"subcode\":\"\",\"location\":\"Depósito de consumibles\",\"unit\":\"rollo\",\"stock\":40,\"stockMinimum\":15,\"amount\":992.8571,\"notes\":\"\",\"createdAt\":\"2026-05-25T15:06:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":1050,\"lastPurchaseAt\":\"2026-10-19T14:36:02.000Z\",\"lastPurchaseSupplier\":\"Ferretería El Tornillo SRL\",\"lastPurchaseInvoice\":\"A-0003-00012390\"},{\"id\":\"97f0e575-4c08-4e55-ad64-df88e9651f25\",\"name\":\"Electrodo 2,5 mm (kg)\",\"category\":\"Consumibles\",\"code\":\"CO-002\",\"subcode\":\"\",\"location\":\"Depósito de consumibles\",\"unit\":\"kilogramo\",\"stock\":18,\"stockMinimum\":8,\"amount\":9942.8571,\"notes\":\"\",\"createdAt\":\"2026-05-25T12:45:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":10200,\"lastPurchaseAt\":\"2026-07-31T15:43:32.000Z\",\"lastPurchaseSupplier\":\"Ferretería El Tornillo SRL\",\"lastPurchaseInvoice\":\"A-0003-00012045\"},{\"id\":\"1ebfcad1-69cf-4c11-87b3-12b995b03528\",\"name\":\"Disco de corte 115 mm\",\"category\":\"Consumibles\",\"code\":\"CO-001\",\"subcode\":\"\",\"location\":\"Depósito de consumibles\",\"unit\":\"unidad\",\"stock\":60,\"stockMinimum\":20,\"amount\":1436.9792,\"notes\":\"\",\"createdAt\":\"2026-05-25T20:20:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":1425,\"lastPurchaseAt\":\"2026-07-31T15:43:32.000Z\",\"lastPurchaseSupplier\":\"Ferretería El Tornillo SRL\",\"lastPurchaseInvoice\":\"A-0003-00012045\"},{\"id\":\"fb31d315-662e-484c-a0d8-b95ae8025350\",\"name\":\"Delantal de cuero\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-005\",\"subcode\":\"\",\"location\":\"Armario de seguridad\",\"unit\":\"unidad\",\"stock\":6,\"stockMinimum\":3,\"amount\":22020,\"notes\":\"\",\"createdAt\":\"2026-05-25T13:19:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":22800,\"lastPurchaseAt\":\"2026-08-17T14:07:00.000Z\",\"lastPurchaseSupplier\":\"Seguridad Industrial Puna\",\"lastPurchaseInvoice\":\"A-0001-00007781\"},{\"id\":\"db8ec694-b992-4d97-8aa0-fb36eb10230f\",\"name\":\"Careta de soldar fotosensible\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-004\",\"subcode\":\"\",\"location\":\"Armario de seguridad\",\"unit\":\"unidad\",\"stock\":4,\"stockMinimum\":2,\"amount\":47000,\"notes\":\"\",\"createdAt\":\"2026-05-25T13:06:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"3776a681-3bd1-4daf-aa6a-1eba73e5eaf1\",\"name\":\"Protector auditivo\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-003\",\"subcode\":\"\",\"location\":\"Armario de seguridad\",\"unit\":\"unidad\",\"stock\":13,\"stockMinimum\":6,\"amount\":6214.2857,\"notes\":\"\",\"createdAt\":\"2026-05-25T19:45:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":6400,\"lastPurchaseAt\":\"2026-08-17T14:07:00.000Z\",\"lastPurchaseSupplier\":\"Seguridad Industrial Puna\",\"lastPurchaseInvoice\":\"A-0001-00007781\"},{\"id\":\"a61485e0-e9e9-40bf-b045-1cd608c05b07\",\"name\":\"Guantes de descarne\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-002\",\"subcode\":\"\",\"location\":\"Armario de seguridad\",\"unit\":\"par\",\"stock\":20,\"stockMinimum\":10,\"amount\":5270.5882,\"notes\":\"\",\"createdAt\":\"2026-05-25T18:21:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":5400,\"lastPurchaseAt\":\"2026-07-31T15:43:32.000Z\",\"lastPurchaseSupplier\":\"Ferretería El Tornillo SRL\",\"lastPurchaseInvoice\":\"A-0003-00012045\"},{\"id\":\"bf715ee9-54da-4a85-b129-9ec06d370d8d\",\"name\":\"Antiparras de seguridad\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-001\",\"subcode\":\"\",\"location\":\"Armario de seguridad\",\"unit\":\"unidad\",\"stock\":25,\"stockMinimum\":10,\"amount\":3900,\"notes\":\"\",\"createdAt\":\"2026-05-25T17:24:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"0fcb197b-6595-44df-a869-5e6bdf891166\",\"name\":\"Nivel de burbuja 60 cm\",\"category\":\"Instrumentos de medición\",\"code\":\"IM-005\",\"subcode\":\"\",\"location\":\"Estantería A1\",\"unit\":\"unidad\",\"stock\":5,\"stockMinimum\":2,\"amount\":9900,\"notes\":\"\",\"createdAt\":\"2026-05-25T20:45:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"a9d7b138-a3a8-4b65-a30e-e3bb7cc59fa3\",\"name\":\"Cinta métrica 5 m\",\"category\":\"Instrumentos de medición\",\"code\":\"IM-004\",\"subcode\":\"\",\"location\":\"Estantería A1\",\"unit\":\"unidad\",\"stock\":9,\"stockMinimum\":4,\"amount\":6800,\"notes\":\"\",\"createdAt\":\"2026-05-25T17:13:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"ff78810f-965c-4889-982a-746b1e7c3513\",\"name\":\"Pinza amperométrica\",\"category\":\"Instrumentos de medición\",\"code\":\"IM-003\",\"subcode\":\"\",\"location\":\"Laboratorio de electrónica\",\"unit\":\"unidad\",\"stock\":3,\"stockMinimum\":2,\"amount\":61000,\"notes\":\"\",\"createdAt\":\"2026-05-25T14:45:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"6ca813a7-80ca-4cab-8a78-c4578ce91703\",\"name\":\"Calibre digital 150 mm\",\"category\":\"Instrumentos de medición\",\"code\":\"IM-002\",\"subcode\":\"\",\"location\":\"Estantería A1\",\"unit\":\"unidad\",\"stock\":6,\"stockMinimum\":3,\"amount\":35375,\"notes\":\"\",\"createdAt\":\"2026-05-25T16:03:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":36800,\"lastPurchaseAt\":\"2026-11-11T14:42:03.000Z\",\"lastPurchaseSupplier\":\"Distribuidora Técnica del Norte SA\",\"lastPurchaseInvoice\":\"A-0012-00031577\"},{\"id\":\"5b2ad245-6e91-48cd-94ae-19e199cd2824\",\"name\":\"Multímetro digital\",\"category\":\"Instrumentos de medición\",\"code\":\"IM-001\",\"subcode\":\"\",\"location\":\"Laboratorio de electrónica\",\"unit\":\"unidad\",\"stock\":12,\"stockMinimum\":4,\"amount\":28500,\"notes\":\"\",\"createdAt\":\"2026-05-25T18:58:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"f85b943e-5d04-481c-9e0c-b32f0532b99e\",\"name\":\"Pistola de calor\",\"category\":\"Herramientas eléctricas\",\"code\":\"HE-005\",\"subcode\":\"\",\"location\":\"Estantería A2\",\"unit\":\"unidad\",\"stock\":2,\"stockMinimum\":1,\"amount\":54000,\"notes\":\"\",\"createdAt\":\"2026-05-25T17:07:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"9636fcd8-df32-4d90-8179-4c9a651c3528\",\"name\":\"Soldadora inverter 200 A\",\"category\":\"Herramientas eléctricas\",\"code\":\"HE-004\",\"subcode\":\"\",\"location\":\"Estantería A2\",\"unit\":\"unidad\",\"stock\":2,\"stockMinimum\":1,\"amount\":265000,\"notes\":\"\",\"createdAt\":\"2026-05-25T14:52:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"1ae32bb8-a972-449d-badb-8718b5a8015b\",\"name\":\"Atornillador inalámbrico 12 V\",\"category\":\"Herramientas eléctricas\",\"code\":\"HE-003\",\"subcode\":\"\",\"location\":\"Estantería A2\",\"unit\":\"unidad\",\"stock\":2,\"stockMinimum\":2,\"amount\":98000,\"notes\":\"\",\"createdAt\":\"2026-05-25T16:04:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"b7291595-93d7-4bc5-82ce-f3a3f1eebc81\",\"name\":\"Amoladora angular 115 mm\",\"category\":\"Herramientas eléctricas\",\"code\":\"HE-002\",\"subcode\":\"\",\"location\":\"Estantería A2\",\"unit\":\"unidad\",\"stock\":3,\"stockMinimum\":2,\"amount\":76500,\"notes\":\"\",\"createdAt\":\"2026-05-25T15:46:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"af92aae6-c6ea-4751-b8d8-b82f6f6306e6\",\"name\":\"Taladro percutor 650 W\",\"category\":\"Herramientas eléctricas\",\"code\":\"HE-001\",\"subcode\":\"\",\"location\":\"Estantería A2\",\"unit\":\"unidad\",\"stock\":4,\"stockMinimum\":2,\"amount\":90166.6667,\"notes\":\"\",\"createdAt\":\"2026-05-25T11:28:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":92500,\"lastPurchaseAt\":\"2026-09-11T14:38:01.000Z\",\"lastPurchaseSupplier\":\"Distribuidora Técnica del Norte SA\",\"lastPurchaseInvoice\":\"A-0012-00031002\"},{\"id\":\"db66a821-718c-4ef5-8ec6-ddf15a8b43fd\",\"name\":\"Arco de sierra\",\"category\":\"Herramientas manuales\",\"code\":\"HM-007\",\"subcode\":\"\",\"location\":\"Estantería A1\",\"unit\":\"unidad\",\"stock\":7,\"stockMinimum\":3,\"amount\":11200,\"notes\":\"\",\"createdAt\":\"2026-05-25T13:24:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"f4ebd51e-5400-46f4-b3b1-c53f73f6984c\",\"name\":\"Llave francesa 10\\\"\",\"category\":\"Herramientas manuales\",\"code\":\"HM-006\",\"subcode\":\"\",\"location\":\"Estantería A1\",\"unit\":\"unidad\",\"stock\":5,\"stockMinimum\":2,\"amount\":15400,\"notes\":\"\",\"createdAt\":\"2026-05-25T20:04:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"b4c10941-03e7-45e8-9205-4c798fc1a0d3\",\"name\":\"Pinza universal 8\\\"\",\"category\":\"Herramientas manuales\",\"code\":\"HM-005\",\"subcode\":\"\",\"location\":\"Estantería A1\",\"unit\":\"unidad\",\"stock\":10,\"stockMinimum\":4,\"amount\":9800,\"notes\":\"\",\"createdAt\":\"2026-05-25T19:05:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"2edc8d60-9515-487e-afd7-363d182ec442\",\"name\":\"Martillo de bola 500 g\",\"category\":\"Herramientas manuales\",\"code\":\"HM-004\",\"subcode\":\"\",\"location\":\"Estantería A1\",\"unit\":\"unidad\",\"stock\":8,\"stockMinimum\":3,\"amount\":12900,\"notes\":\"\",\"createdAt\":\"2026-05-25T12:52:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"826fecb7-20bf-4e02-b8f8-b9a2ccc02b92\",\"name\":\"Destornillador Phillips PH2\",\"category\":\"Herramientas manuales\",\"code\":\"HM-003\",\"subcode\":\"\",\"location\":\"Estantería A1\",\"unit\":\"unidad\",\"stock\":12,\"stockMinimum\":5,\"amount\":4433.3333,\"notes\":\"\",\"createdAt\":\"2026-05-25T11:24:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":4700,\"lastPurchaseAt\":\"2026-10-19T14:36:02.000Z\",\"lastPurchaseSupplier\":\"Ferretería El Tornillo SRL\",\"lastPurchaseInvoice\":\"A-0003-00012390\"},{\"id\":\"ddd48e08-9618-4490-a36e-ba89fea347cf\",\"name\":\"Destornillador plano 6 mm\",\"category\":\"Herramientas manuales\",\"code\":\"HM-002\",\"subcode\":\"\",\"location\":\"Estantería A1\",\"unit\":\"unidad\",\"stock\":13,\"stockMinimum\":5,\"amount\":4326.3158,\"notes\":\"\",\"createdAt\":\"2026-05-25T19:30:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":4600,\"lastPurchaseAt\":\"2026-10-19T14:36:02.000Z\",\"lastPurchaseSupplier\":\"Ferretería El Tornillo SRL\",\"lastPurchaseInvoice\":\"A-0003-00012390\"},{\"id\":\"efc41a90-ee21-4a7d-8035-3256edd05770\",\"name\":\"Juego de llaves combinadas 6-22 mm\",\"category\":\"Herramientas manuales\",\"code\":\"HM-001\",\"subcode\":\"\",\"location\":\"Estantería A1\",\"unit\":\"juego\",\"stock\":6,\"stockMinimum\":2,\"amount\":38500,\"notes\":\"\",\"createdAt\":\"2026-05-25T18:19:00.000Z\",\"createdBy\":\"Jorge Medina\"}],\"loans\":[{\"id\":\"4087458d-0d5d-4bfa-a7ba-12edefa6871c\",\"groupId\":\"6802a44e-cb8a-4252-bed7-5f5dc24d5937\",\"itemId\":\"f7c481db-5d82-4c89-91e0-fb5b15922e19\",\"responsibleId\":\"99be1845-272c-43e1-973b-0bdf2713bbc1\",\"borrower\":\"Milagros Álvarez\",\"department\":\"7° 2da\",\"quantity\":2,\"dueDate\":\"2026-11-22\",\"observation\":\"Clase de laboratorio\",\"createdAt\":\"2026-11-18T11:56:18.000Z\",\"createdBy\":\"Lucía Romero\"},{\"id\":\"bd36e0ee-46c0-4d62-9da2-595742bc5ba2\",\"groupId\":\"19063056-eaf7-4d4f-88c1-645d836103b3\",\"itemId\":\"d690fba0-1c9c-45c5-b265-502488a6903f\",\"responsibleId\":\"134d87c8-d0de-48ee-9c08-07bdc96b686e\",\"borrower\":\"Mateo Torres\",\"department\":\"6° 3ra\",\"quantity\":3,\"dueDate\":\"2026-11-15\",\"observation\":\"\",\"createdAt\":\"2026-11-18T11:41:19.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"cfc54913-468e-47cc-9c31-314c0854be3e\",\"groupId\":\"06c0fc6d-1879-4f01-af61-2eddcbf82f85\",\"itemId\":\"1ae32bb8-a972-449d-badb-8718b5a8015b\",\"responsibleId\":\"531c1f19-2431-40f8-a84e-c788b1bed919\",\"borrower\":\"Prof. Andrea Choque\",\"department\":\"Docentes\",\"quantity\":1,\"dueDate\":\"2026-11-15\",\"observation\":\"Armado de tableros eléctricos\",\"createdAt\":\"2026-11-17T12:19:22.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"c76a93fd-9a5d-49e7-9768-73a693ef2f41\",\"groupId\":\"06c0fc6d-1879-4f01-af61-2eddcbf82f85\",\"itemId\":\"ddd48e08-9618-4490-a36e-ba89fea347cf\",\"responsibleId\":\"531c1f19-2431-40f8-a84e-c788b1bed919\",\"borrower\":\"Prof. Andrea Choque\",\"department\":\"Docentes\",\"quantity\":2,\"dueDate\":\"2026-11-24\",\"observation\":\"Armado de tableros eléctricos\",\"createdAt\":\"2026-11-17T12:19:22.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"a26c7385-2e64-4c72-86ac-684f7c54e6e1\",\"groupId\":\"06c0fc6d-1879-4f01-af61-2eddcbf82f85\",\"itemId\":\"826fecb7-20bf-4e02-b8f8-b9a2ccc02b92\",\"responsibleId\":\"531c1f19-2431-40f8-a84e-c788b1bed919\",\"borrower\":\"Prof. Andrea Choque\",\"department\":\"Docentes\",\"quantity\":2,\"dueDate\":\"2026-11-26\",\"observation\":\"Armado de tableros eléctricos\",\"createdAt\":\"2026-11-17T12:19:22.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"49513ada-7caa-4298-a003-604e4bd7054c\",\"groupId\":\"06c0fc6d-1879-4f01-af61-2eddcbf82f85\",\"itemId\":\"a9d7b138-a3a8-4b65-a30e-e3bb7cc59fa3\",\"responsibleId\":\"531c1f19-2431-40f8-a84e-c788b1bed919\",\"borrower\":\"Prof. Andrea Choque\",\"department\":\"Docentes\",\"quantity\":1,\"dueDate\":\"2026-11-27\",\"observation\":\"Armado de tableros eléctricos\",\"createdAt\":\"2026-11-17T12:19:22.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"330e3b49-e0a5-4141-9ce7-dd371af6bf96\",\"groupId\":\"62f9960a-9db5-47e5-909f-659e04ceca8c\",\"itemId\":\"b02d3ecf-7670-49bd-bac2-f7afa6d739b4\",\"responsibleId\":\"777fedd3-13f5-4008-b7ec-3029207eb73f\",\"borrower\":\"Lucía Gutiérrez\",\"department\":\"3° 3ra\",\"quantity\":2,\"dueDate\":\"2026-11-29\",\"observation\":\"\",\"createdAt\":\"2026-11-16T13:01:14.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"054507ff-fe1c-4909-a271-eacc313b68db\",\"groupId\":\"de52dc3e-2d2a-4538-b181-0192135f3957\",\"itemId\":\"3197ac1f-c89d-43cb-83a5-7253fb2f96a1\",\"responsibleId\":\"6ae3fd99-8641-431a-823e-3724a6a18f02\",\"borrower\":\"Camila Ortiz\",\"department\":\"5° 1ra\",\"quantity\":2,\"dueDate\":\"2026-11-20\",\"observation\":\"\",\"createdAt\":\"2026-11-16T11:54:15.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"df02096f-7abb-4f51-b238-e6027e19cb2e\",\"groupId\":\"b70dbb46-d851-4264-a992-3a5765cf47fb\",\"itemId\":\"4bd30e62-ef6a-4344-9cf3-701a42b6d75a\",\"responsibleId\":\"6133d24f-aed4-4f1b-ac15-a36c3e01fa12\",\"borrower\":\"Emma Molina\",\"department\":\"7° 1ra\",\"quantity\":1,\"dueDate\":\"2026-11-16\",\"observation\":\"Clase de laboratorio\",\"createdAt\":\"2026-11-13T11:26:11.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"33c3abef-a940-40a2-930e-85782e5bb912\",\"groupId\":\"ea8d303e-714e-493b-98a0-a748746c2cee\",\"itemId\":\"a1723526-13b0-473f-b7e0-d1a249be8017\",\"responsibleId\":\"59185778-b455-4cc2-9c20-849cf62298d9\",\"borrower\":\"Prof. Silvina Rueda\",\"department\":\"Docentes\",\"quantity\":1,\"dueDate\":\"2026-11-29\",\"observation\":\"Clase de laboratorio\",\"createdAt\":\"2026-11-11T15:12:09.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"821556a2-c32e-4cde-846d-197e2b270726\",\"groupId\":\"ccd38637-2fae-4b8b-8dc0-08d1ab1cd799\",\"itemId\":\"3776a681-3bd1-4daf-aa6a-1eba73e5eaf1\",\"responsibleId\":\"8d270561-ef32-45b9-a7cf-13c35d0f738f\",\"borrower\":\"Felipe Quispe\",\"department\":\"7° 2da\",\"quantity\":1,\"dueDate\":\"2026-11-23\",\"observation\":\"Práctica de taller\",\"createdAt\":\"2026-11-11T15:01:08.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"625b15a3-446c-48c4-b0be-2396f7443ee7\",\"groupId\":\"a59dc305-ebcb-4862-99d8-c10a20cb6012\",\"itemId\":\"d94a0353-a84d-4c73-9d04-6b1cb16439c8\",\"responsibleId\":\"fd24f2e3-3bd0-4a7f-97b0-3a25ab849d98\",\"borrower\":\"Felipe Morales\",\"department\":\"7° 2da\",\"quantity\":3,\"dueDate\":\"2026-11-24\",\"observation\":\"Trabajo final\",\"createdAt\":\"2026-11-10T13:50:05.000Z\",\"createdBy\":\"Lucía Romero\"},{\"id\":\"8ab496e4-9685-436a-a800-3a6ea031a76e\",\"groupId\":\"506cecc0-2d3f-44e1-aafd-6bf60f84602a\",\"itemId\":\"1ae32bb8-a972-449d-badb-8718b5a8015b\",\"responsibleId\":\"2656615e-6278-467a-85ee-0b5b712946b3\",\"borrower\":\"Ing. Ricardo Salinas\",\"department\":\"Docentes\",\"quantity\":1,\"dueDate\":\"2026-11-09\",\"observation\":\"Clase de laboratorio\",\"createdAt\":\"2026-11-06T13:36:01.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"2620f5f2-cc14-4bd1-a096-e9feb1a80d26\",\"groupId\":\"72d09d55-14db-4405-9528-dcfbabe4ab09\",\"itemId\":\"1ca3b0a8-f827-49f4-ad7e-595252f59e79\",\"responsibleId\":\"6d3965be-9531-4f6a-9b9b-823b11d13794\",\"borrower\":\"Thiago López\",\"department\":\"4° 2da\",\"quantity\":3,\"dueDate\":\"2026-11-27\",\"observation\":\"\",\"createdAt\":\"2026-11-03T13:35:47.000Z\",\"createdBy\":\"Lucía Romero\"}],\"activity\":[{\"id\":\"263846bc-acf6-4d65-a40e-0cf6ab6e31a3\",\"type\":\"purchase_request_created\",\"message\":\"Jorge Medina generó un pedido de compra con 2 material(es). Queda a la espera de las firmas de Jefe de taller, Rector y Contable. Observación: Reposición de materiales en alerta de stock.\",\"createdAt\":\"2026-11-19T13:01:50.000Z\"},{\"id\":\"5f9b88fd-0379-42bf-983b-44d290bc9d33\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de BOLSAS DE CAÑAMO (1 unidad) de Emma Vargas. Préstamo cerrado.\",\"createdAt\":\"2026-11-18T20:54:17.000Z\"},{\"id\":\"f88143b1-37ae-4457-890e-d642731d1ee2\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Protoboard 830 puntos (2 unidad) para Milagros Álvarez. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-11-18T11:56:18.000Z\"},{\"id\":\"e754d10a-3336-4cc6-9d38-fdce15811a1d\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de TAPONES DE 25 (3 unidad) para Mateo Torres.\",\"createdAt\":\"2026-11-18T11:41:19.000Z\"},{\"id\":\"23fc6791-1b9e-4868-a157-82a0c43073a5\",\"type\":\"loan_partial_returned\",\"message\":\"Jorge Medina registró una devolución parcial de GUANTES ANTICORTES (1 unidad; quedan 2 unidad) de Camila Ortiz. El préstamo sigue abierto.\",\"createdAt\":\"2026-11-17T16:20:16.000Z\"},{\"id\":\"e421efa4-57f7-4162-8570-edc48ed6d27f\",\"type\":\"purchase_request_approved\",\"message\":\"Ricardo Sosa aprobó como Jefe de taller el pedido B5B22D3C. Falta la firma de Rector.\",\"createdAt\":\"2026-11-17T12:53:49.000Z\"},{\"id\":\"7bde5761-e289-4540-8f3b-d84a992e4875\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Atornillador inalámbrico 12 V (1 unidad), Destornillador plano 6 mm (2 unidad), Destornillador Phillips PH2 (2 unidad), Cinta métrica 5 m (1 unidad) para Prof. Andrea Choque. Observación: Armado de tableros eléctricos.\",\"createdAt\":\"2026-11-17T12:19:23.000Z\"},{\"id\":\"8759872e-85ed-4d15-a6ba-944f374310c1\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de DELANTALES NUEVOS (1 unidad) de Ignacio Álvarez. Préstamo cerrado.\",\"createdAt\":\"2026-11-16T18:29:13.000Z\"},{\"id\":\"9bdf7a3c-2bdf-4cad-88f2-a54bffa1a9b8\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de SERRUCHOS (1 unidad) de Mónica Zerpa. Préstamo cerrado.\",\"createdAt\":\"2026-11-16T17:33:12.000Z\"},{\"id\":\"42c64e58-5fab-4354-84ca-53d7f38525f1\",\"type\":\"purchase_request_created\",\"message\":\"Jorge Medina generó un pedido de compra con 3 material(es). Queda a la espera de las firmas de Jefe de taller, Rector y Contable. Observación: Pedido para el taller de 4° año.\",\"createdAt\":\"2026-11-16T13:38:48.000Z\"},{\"id\":\"c1e479e7-cc15-4ab2-bf92-674e2d3c59ed\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de CODOS A 90º  A 110 (2 unidad) para Lucía Gutiérrez.\",\"createdAt\":\"2026-11-16T13:01:14.000Z\"},{\"id\":\"f5d62f49-0eb1-4afc-99ed-657a394f8b55\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de GUANTES ANTICORTES (3 unidad) para Camila Ortiz.\",\"createdAt\":\"2026-11-16T11:54:15.000Z\"},{\"id\":\"32fa9cc6-f7fb-43d0-b246-672d51ee701d\",\"type\":\"purchase_request_approved\",\"message\":\"Claudia Ibarra aprobó como Contable el pedido A689383A. El pedido quedó aprobado y listo para confirmar con el proveedor.\",\"createdAt\":\"2026-11-14T16:29:47.000Z\"},{\"id\":\"be67e553-136a-4ec3-9df4-afee19f41826\",\"type\":\"item_written_off\",\"message\":\"Jorge Medina dio de baja 6 unidad de Notebook 14\\\" (IN-001) el 14/11/2026 a las 12:19. Motivo: Obsolescencia / desuso. Baja definitiva del material. Observación: Equipos viejos que ya no funcionan; se envían a reciclaje.\",\"createdAt\":\"2026-11-14T15:19:27.000Z\"},{\"id\":\"07e962a5-b8ba-4f54-ae98-4d23ab51b3d2\",\"type\":\"purchase_request_approved\",\"message\":\"Miguel Toconas aprobó como Rector el pedido A689383A. Falta la firma de Contable.\",\"createdAt\":\"2026-11-14T14:52:46.000Z\"},{\"id\":\"8b1788fb-683b-465c-9a11-a1f1685009ee\",\"type\":\"purchase_request_approved\",\"message\":\"Ricardo Sosa aprobó como Jefe de taller el pedido A689383A. Falta la firma de Rector.\",\"createdAt\":\"2026-11-14T11:58:45.000Z\"},{\"id\":\"5f6a93db-f4e6-4012-8899-2bebe95de174\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de DELANTALES NUEVOS (1 unidad) para Ignacio Álvarez. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-11-13T14:45:10.000Z\"},{\"id\":\"56e770bd-0427-4858-8378-7831738f1634\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de PINZAS DE 7\\\" (1 unidad) para Emma Molina. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-11-13T11:26:11.000Z\"},{\"id\":\"39f12086-58a4-4580-bd70-ac291197461f\",\"type\":\"purchase_request_created\",\"message\":\"Jorge Medina generó un pedido de compra con 2 material(es). Queda a la espera de las firmas de Jefe de taller, Rector y Contable. Observación: Equipamiento para el laboratorio de electrónica.\",\"createdAt\":\"2026-11-12T13:21:44.000Z\"},{\"id\":\"3e6c138f-138e-4727-9f4f-c656bf1c325a\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de TERRAJA DE 3/4 IPS (1 unidad) para Prof. Silvina Rueda. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-11-11T15:12:09.000Z\"},{\"id\":\"1c09cfd6-c9b8-4e0d-834d-9c23cd87e58c\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Protector auditivo (1 unidad) para Felipe Quispe. Observación: Práctica de taller.\",\"createdAt\":\"2026-11-11T15:01:08.000Z\"},{\"id\":\"7b42c9b7-c25d-4b51-8f1a-eee385bea23d\",\"type\":\"purchase_invoice_created\",\"message\":\"Jorge Medina registró la factura A-0012-00031577 de Distribuidora Técnica del Norte SA (sin pedido): Calibre digital 150 mm (2). Total factura $73600.00. Observación: Compra directa (demo).\",\"createdAt\":\"2026-11-11T14:42:04.000Z\"},{\"id\":\"0fc80dfd-06ed-4ca9-9fbb-46d2f8cb9db1\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de TORNILLOS 4,5X45 para Felipe Morales (8 unidad(es)). Detalle: Práctica de soldadura.\",\"createdAt\":\"2026-11-10T17:34:07.000Z\"},{\"id\":\"312ed124-c36b-47cd-8079-3495f706bb4a\",\"type\":\"purchase_request_rejected\",\"message\":\"Claudia Ibarra rechazó como Contable el pedido 22A716B9. Motivo: Supera el presupuesto del centro de costos para este mes. Volver a pedir en diciembre..\",\"createdAt\":\"2026-11-10T16:25:43.000Z\"},{\"id\":\"40bcd62f-fe69-494a-bc0b-05aed8989943\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de BOLSAS DE CAÑAMO (1 unidad) para Emma Vargas.\",\"createdAt\":\"2026-11-10T15:28:06.000Z\"},{\"id\":\"768a68f7-ba1f-4c14-9bca-cd043f2d5800\",\"type\":\"purchase_request_approved\",\"message\":\"Miguel Toconas aprobó como Rector el pedido 22A716B9. Falta la firma de Contable.\",\"createdAt\":\"2026-11-10T14:54:42.000Z\"},{\"id\":\"f8849c96-3cd6-4266-a3ad-cd2809ae9d78\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de MASCARAS DE SOLDAR FOTOSENCIBLES (3 unidad) para Felipe Morales. Observación: Trabajo final.\",\"createdAt\":\"2026-11-10T13:50:05.000Z\"},{\"id\":\"a22845b4-d8cf-46b3-a523-8d514ff72e9b\",\"type\":\"purchase_request_approved\",\"message\":\"Ricardo Sosa aprobó como Jefe de taller el pedido 22A716B9. Falta la firma de Rector.\",\"createdAt\":\"2026-11-10T12:28:41.000Z\"},{\"id\":\"8d0a28df-881a-444b-9f64-8ae38d8d85d4\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de CODOS CON INSERTO DE 1/2 IPS (3 unidad) de Arq. Hernán Calizaya. Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-11-09T18:46:02.000Z\"},{\"id\":\"506e17e0-b107-4910-ab9e-2b448a7fdbe4\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de CUPLAS DE 25 (3 unidad) de Prof. Natalia Burgos. Préstamo cerrado.\",\"createdAt\":\"2026-11-09T18:00:03.000Z\"},{\"id\":\"b97d1b5b-1253-4abe-9312-9d8c7b73fc54\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Antiparras de seguridad (1 unidad) de Ing. Ricardo Salinas. Préstamo cerrado. Observación: Se entregó lo que faltaba.\",\"createdAt\":\"2026-11-09T13:56:22.000Z\"},{\"id\":\"69b1d31f-d607-456b-8ff3-302f15db8739\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de ROLLOS DE TEFLON para Agustina Castro (4 unidad(es)). Detalle: Práctica de soldadura.\",\"createdAt\":\"2026-11-09T13:33:04.000Z\"},{\"id\":\"388a94e3-bc51-40ad-8d7b-f6e03f3e4109\",\"type\":\"purchase_request_created\",\"message\":\"Jorge Medina generó un pedido de compra con 2 material(es). Queda a la espera de las firmas de Jefe de taller, Rector y Contable. Observación: Herramientas para el taller de 2° año.\",\"createdAt\":\"2026-11-08T13:20:40.000Z\"},{\"id\":\"a0424197-a4fc-4a68-92f3-4ea04c58b3da\",\"type\":\"loan_partial_returned\",\"message\":\"Jorge Medina registró una devolución parcial de Taladro percutor 650 W (1 unidad), Calibre digital 150 mm (2 unidad), Antiparras de seguridad (3 unidad; quedan 1 unidad) de Ing. Ricardo Salinas. El préstamo sigue abierto. Observación: Falta una unidad, la trae la semana próxima.\",\"createdAt\":\"2026-11-07T18:55:21.000Z\"},{\"id\":\"e9a4d306-0dde-4fd7-b79f-d829325a577c\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de SERRUCHOS (1 unidad) para Mónica Zerpa.\",\"createdAt\":\"2026-11-06T15:12:50.000Z\"},{\"id\":\"4f49c391-57bd-4e19-b5fd-c4e8b20262cf\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Atornillador inalámbrico 12 V (1 unidad) para Ing. Ricardo Salinas. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-11-06T13:36:01.000Z\"},{\"id\":\"2b800078-5a3b-4dfa-87ea-70888d75f171\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de MASCARAS FACIALES (1 unidad) de Mónica Zerpa. Préstamo cerrado.\",\"createdAt\":\"2026-11-04T17:14:48.000Z\"},{\"id\":\"2fad0ceb-fe0a-403e-b8a0-2b72aac677ae\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de CUPLAS DE 25 (3 unidad) para Prof. Natalia Burgos.\",\"createdAt\":\"2026-11-04T13:13:49.000Z\"},{\"id\":\"e0c6d6f2-8a09-431f-859f-8caa39f93876\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Taladro percutor 650 W (1 unidad), Calibre digital 150 mm (2 unidad), Antiparras de seguridad (4 unidad) para Ing. Ricardo Salinas. Observación: Práctica de mecanizado de 5° año.\",\"createdAt\":\"2026-11-04T12:47:20.000Z\"},{\"id\":\"2f12a64c-3ad6-4211-974e-5eba3d8521d7\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pendrive 32 GB (2 unidad) de Benjamín Cruz. Préstamo cerrado.\",\"createdAt\":\"2026-11-03T20:10:46.000Z\"},{\"id\":\"59017fb6-1590-4d3f-a859-4a03baa0105c\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de SERRUCHOS (3 unidad) para Thiago López.\",\"createdAt\":\"2026-11-03T13:35:47.000Z\"},{\"id\":\"1d24bbf0-c732-4c43-a17c-e50e26ba387d\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Kit Arduino Uno (1 unidad) de Lucía Flores. Préstamo cerrado.\",\"createdAt\":\"2026-11-02T19:13:44.000Z\"},{\"id\":\"a09c61c7-208b-4030-a448-1fa1c17d1261\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de DELANTALES CON CROMO (1 unidad) de Emma Molina. Préstamo cerrado.\",\"createdAt\":\"2026-11-02T18:07:42.000Z\"},{\"id\":\"56e41754-48ca-4839-81e8-214d27498b8c\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pinza amperométrica (1 unidad) de Ing. Ricardo Salinas. Préstamo cerrado.\",\"createdAt\":\"2026-11-02T17:00:43.000Z\"},{\"id\":\"b259adf6-11fa-467d-9963-18da93a3041c\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de DISCO DE 115MM para Thiago Quispe (2 unidad(es)). Detalle: Trabajo práctico.\",\"createdAt\":\"2026-11-02T15:12:45.000Z\"},{\"id\":\"f9c846ba-2bba-494b-98a7-32b987872cb6\",\"type\":\"item_written_off\",\"message\":\"Jorge Medina dio de baja 6 unidad de Mecha HSS 6 mm (CO-006) el 01/11/2026 a las 10:53. Motivo: Desgaste / fin de vida útil. Stock restante: 17. Observación: Mechas sin filo después del trimestre.\",\"createdAt\":\"2026-11-01T13:53:26.000Z\"},{\"id\":\"ebeae5ac-b671-49f4-a16d-5343fe9508c1\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Kit Arduino Uno (1 unidad) para Lucía Flores. Observación: Práctica de taller.\",\"createdAt\":\"2026-10-30T13:46:41.000Z\"},{\"id\":\"abd142ab-e560-43d8-ab3c-40a81396487c\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pinza amperométrica (1 unidad) para Ing. Ricardo Salinas.\",\"createdAt\":\"2026-10-29T12:37:40.000Z\"},{\"id\":\"262e951a-6975-402b-b460-3370ce870fb7\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de CODOS CON INSERTO DE 1/2 IPS (3 unidad) para Arq. Hernán Calizaya. Observación: Práctica de taller.\",\"createdAt\":\"2026-10-28T15:25:39.000Z\"},{\"id\":\"5c5ee520-1ab4-40b2-8fbb-bb37aa7db2cc\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pendrive 32 GB (2 unidad) para Benjamín Cruz. Observación: Práctica de taller.\",\"createdAt\":\"2026-10-28T12:19:38.000Z\"},{\"id\":\"98327870-6996-4133-9d23-3b793e632c3c\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de DELANTALES CON CROMO (1 unidad) para Emma Molina.\",\"createdAt\":\"2026-10-27T14:42:37.000Z\"},{\"id\":\"612824e5-34bd-4c34-a916-e6001f88911a\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de DELANTALES NUEVOS (3 unidad) de Camila Vargas. Préstamo cerrado.\",\"createdAt\":\"2026-10-26T19:38:35.000Z\"},{\"id\":\"f3ce889b-5990-465f-a244-2bf5553e219d\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de PARES DE GUANTES DIELECTRICOS (1 unidad) de Camila Álvarez. Préstamo cerrado.\",\"createdAt\":\"2026-10-26T18:53:34.000Z\"},{\"id\":\"aad1b56d-923b-4cb5-8c20-18d7d5d9b522\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de GUANTES PARA SOLDAR ( INDURA) (2 unidad) de Prof. Andrea Choque. Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-10-26T18:53:33.000Z\"},{\"id\":\"e302b41f-8c9c-4136-bdbd-9e4a24fe96e3\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de MASCARAS FACIALES (1 unidad) para Mónica Zerpa.\",\"createdAt\":\"2026-10-26T15:41:36.000Z\"},{\"id\":\"6dad8a6a-9203-4dd0-898a-ef37a73fdc4c\",\"type\":\"loan_partial_returned\",\"message\":\"Jorge Medina registró una devolución parcial de GUANTES PARA SOLDAR ( INDURA) (1 unidad; quedan 2 unidad) de Prof. Andrea Choque. El préstamo sigue abierto.\",\"createdAt\":\"2026-10-23T18:38:31.000Z\"},{\"id\":\"88afe655-c6ce-4fe4-b36c-685420edce9c\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de DELANTALES NUEVOS (3 unidad) para Camila Vargas. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-10-23T12:21:32.000Z\"},{\"id\":\"ddce7c7a-458a-4cf0-a27b-1627d4a55aab\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Delantal de cuero (1 unidad) de Emma Molina. Préstamo cerrado.\",\"createdAt\":\"2026-10-22T20:02:29.000Z\"},{\"id\":\"9934f7cc-9afc-4ece-a03d-199a5f106f6c\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de BOLSA DE CLAVOS DE 2\\\" para Ing. Gustavo Tolaba (1 unidad(es)). Detalle: Práctica de soldadura.\",\"createdAt\":\"2026-10-22T12:29:30.000Z\"},{\"id\":\"7143d7d2-3670-4a3a-859b-419a3111d3c4\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Destornillador plano 6 mm (1 unidad) de Thiago Quispe. Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-10-21T19:48:27.000Z\"},{\"id\":\"58b278e3-223b-4fa0-8768-6264cdfe0215\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de DISCOS PARA LA MASCARA SENCITIVA para Lucía Molina (3 unidad(es)). Detalle: Trabajo práctico.\",\"createdAt\":\"2026-10-21T13:30:28.000Z\"},{\"id\":\"ef4595b6-3c78-491f-a4ef-fbf1c97a44f5\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de HOJAS DE SIERRA para Prof. Andrea Choque (2 unidad(es)).\",\"createdAt\":\"2026-10-20T17:09:26.000Z\"},{\"id\":\"60b33e57-99ef-48f5-acc9-764c13f41ca1\",\"type\":\"purchase_invoice_created\",\"message\":\"Jorge Medina registró la factura A-0003-00012390 de Ferretería El Tornillo SRL (sin pedido): Destornillador plano 6 mm (6), Destornillador Phillips PH2 (6), Cinta aisladora (30). Total factura $87300.00. Observación: Compra directa (demo).\",\"createdAt\":\"2026-10-19T14:36:03.000Z\"},{\"id\":\"e1c395e3-beec-4b0a-9d2c-2545747e1540\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de PARES DE GUANTES DIELECTRICOS (1 unidad) para Camila Álvarez.\",\"createdAt\":\"2026-10-19T12:31:25.000Z\"},{\"id\":\"00e1b0b5-dd9c-4114-8e1c-97eaa5ac31cd\",\"type\":\"item_written_off\",\"message\":\"Jorge Medina dio de baja 1 unidad de Multímetro digital (IM-001) el 17/10/2026 a las 15:58. Motivo: Robo o hurto. Stock restante: 12. Observación: Faltante detectado en el control mensual; se labró acta n.° 14/2026.\",\"createdAt\":\"2026-10-17T18:58:25.000Z\"},{\"id\":\"c9699b7f-ae2f-43d7-8452-d2b54a1e0bf3\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de GUANTES DE CUERO MANGA LARGA EN BOLSA (2 unidad) de Ing. Ricardo Salinas. Préstamo cerrado.\",\"createdAt\":\"2026-10-16T20:44:20.000Z\"},{\"id\":\"53b7ff63-cd7c-477a-95c3-94fb35ef3ce4\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de DISCO ESMERILL para Prof. Natalia Burgos (3 unidad(es)). Detalle: Proyecto de 6° año.\",\"createdAt\":\"2026-10-16T14:57:24.000Z\"},{\"id\":\"a7027b26-3d2b-41b1-898d-7c004139f152\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Delantal de cuero (1 unidad) para Emma Molina. Observación: Trabajo final.\",\"createdAt\":\"2026-10-16T11:59:23.000Z\"},{\"id\":\"8c958696-d4a6-4f5e-bcc6-1be5a393245f\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Destornillador plano 6 mm (1 unidad) para Thiago Quispe.\",\"createdAt\":\"2026-10-16T11:26:22.000Z\"},{\"id\":\"135a785b-6616-4d78-9fef-06140afd605f\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de GUANTES PARA SOLDAR ( INDURA) (3 unidad) para Prof. Andrea Choque.\",\"createdAt\":\"2026-10-16T11:19:21.000Z\"},{\"id\":\"07887f2b-437d-4ce1-88f6-b16da0f30cfd\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de BASTAGOS PARA GRIFO (1 unidad) de Lucía Gutiérrez. Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-10-15T17:24:19.000Z\"},{\"id\":\"0ac91441-d15d-4424-b4ab-d48d5e2f5f84\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de GUANTES PARA SOLDAR ( INDURA) (1 unidad) de Mateo Torres. Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-10-14T19:26:17.000Z\"},{\"id\":\"81a786f0-a23d-453c-8a71-8754c2e61248\",\"type\":\"loan_partial_returned\",\"message\":\"Jorge Medina registró una devolución parcial de GUANTES DE CUERO MANGA LARGA EN BOLSA (1 unidad; quedan 2 unidad) de Ing. Ricardo Salinas. El préstamo sigue abierto. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-10-14T16:51:18.000Z\"},{\"id\":\"cb5136c5-d062-48e3-8845-15ea642a2cbe\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de BUJES DE 3/4 A MEDIA IPS (1 unidad) de Emma Ortiz. Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-10-13T19:55:15.000Z\"},{\"id\":\"6a047f77-a792-4f7e-8201-85cd8d4c2a46\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Soldadora inverter 200 A (1 unidad) de Raúl Villca. Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-10-13T17:21:16.000Z\"},{\"id\":\"5c1dbf38-2ada-4f4e-9bb3-584f1ca084b8\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de T DE 1\\\" A 3/4 IPS (2 unidad) de Thiago Quispe. Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-10-12T18:04:14.000Z\"},{\"id\":\"541e86fe-d7b3-4019-a7fc-a0dd658ecd1f\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de CUPLAS DE 63 (2 unidad) de Catalina Aguirre. Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-10-12T17:46:13.000Z\"},{\"id\":\"e7e3c25c-69fa-4119-8663-3dfb77435fd4\",\"type\":\"loan_partial_returned\",\"message\":\"Jorge Medina registró una devolución parcial de GUANTES PARA SOLDAR ( INDURA) (1 unidad; quedan 1 unidad) de Mateo Torres. El préstamo sigue abierto. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-10-12T16:10:12.000Z\"},{\"id\":\"14e037cc-52ec-4763-8b47-b274de309db2\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de T DE 1\\\" A 3/4 IPS (1 unidad) de Benjamín Cruz. Préstamo cerrado.\",\"createdAt\":\"2026-10-09T18:16:11.000Z\"},{\"id\":\"e73a55af-44ad-4f7e-a264-a4eac471cc7c\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de GUANTES DE CUERO MANGA LARGA EN BOLSA (3 unidad) de Lucía Molina. Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-10-09T18:10:10.000Z\"},{\"id\":\"3d72a35e-08e4-4de4-b406-d2ff62bb5d83\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Protoboard 830 puntos (2 unidad) de Prof. Silvina Rueda. Préstamo cerrado.\",\"createdAt\":\"2026-10-08T20:47:05.000Z\"},{\"id\":\"0690b491-4319-4764-a7c0-dfaa4065c95f\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Soldadora inverter 200 A (1 unidad) para Raúl Villca.\",\"createdAt\":\"2026-10-08T15:26:08.000Z\"},{\"id\":\"84556169-47ad-4bf2-8ee5-464eaad09364\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de BUJES DE 3/4 A MEDIA IPS (1 unidad) para Emma Ortiz. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-10-08T14:34:06.000Z\"},{\"id\":\"631bc501-afb5-4b23-96e3-1687d76b401b\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de T DE 1\\\" A 3/4 IPS (1 unidad) para Benjamín Cruz. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-10-08T13:33:07.000Z\"},{\"id\":\"813c6839-1968-42e6-8e61-42bfbee9c426\",\"type\":\"stock_entry_created\",\"message\":\"Jorge Medina registró un ingreso por donacion de Guantes de descarne (2). Donante: Cooperadora escolar. Observación: Donación registrada para la demo.\",\"createdAt\":\"2026-10-08T13:30:09.000Z\"},{\"id\":\"52079793-779c-4bf9-be4c-7acf10c722cf\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de UNION DOBLE DE 1/2\\\" IPS (1 unidad) de Lucía Gutiérrez. Préstamo cerrado.\",\"createdAt\":\"2026-10-07T19:20:03.000Z\"},{\"id\":\"2ca4a918-88af-49a3-becc-9c715b658f1e\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de CUPLAS DE 1 \\\" IPS (1 unidad) de Milagros Álvarez. Préstamo cerrado.\",\"createdAt\":\"2026-10-07T19:09:50.000Z\"},{\"id\":\"293776ea-4e00-4936-b5c4-63973f2cf5bc\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Arco de sierra (1 unidad) de Facundo Álvarez. Préstamo cerrado.\",\"createdAt\":\"2026-10-07T18:32:01.000Z\"},{\"id\":\"35221138-43d0-470d-adcb-fcaf357e5ebf\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de AMOLADORAS (1 unidad) de Facundo Álvarez. Préstamo cerrado.\",\"createdAt\":\"2026-10-07T17:34:02.000Z\"},{\"id\":\"9a877634-5352-4ff1-8efa-30e2ee4b5623\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de GUANTES DE CUERO MANGA LARGA EN BOLSA (3 unidad) para Lucía Molina.\",\"createdAt\":\"2026-10-07T13:29:04.000Z\"},{\"id\":\"797e1e18-37a5-475d-9bc2-2258eab3cdf6\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de UNION DOBLE DE 1/2\\\" IPS (1 unidad) para Lucía Gutiérrez.\",\"createdAt\":\"2026-10-06T14:25:49.000Z\"},{\"id\":\"17139a03-ced9-4e33-8cf7-9351de86a6c3\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de BASTAGOS PARA GRIFO (1 unidad) para Lucía Gutiérrez.\",\"createdAt\":\"2026-10-06T12:00:48.000Z\"},{\"id\":\"75aadf5c-5ac6-4b05-b3f7-950edf43c16f\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de GUANTES DE CUERO MANGA LARGA EN BOLSA (3 unidad) para Ing. Ricardo Salinas.\",\"createdAt\":\"2026-10-06T11:03:47.000Z\"},{\"id\":\"fd8ab35f-5725-4bfe-902b-ba4dfa146c9a\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pinza amperométrica (1 unidad) de Martina Martínez. Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-10-05T20:09:42.000Z\"},{\"id\":\"f4415967-ee54-4c05-93ca-1c6a2d06c2cf\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de CODOS CON INSERTO DE 20 (2 unidad) de Santiago Quispe. Préstamo cerrado.\",\"createdAt\":\"2026-10-05T19:14:38.000Z\"},{\"id\":\"6c26a222-45a5-4aa0-ad25-18f2b79d6ffd\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de CUPLAS DE 20 (1 unidad) de Ing. Gustavo Tolaba. Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-10-05T18:17:39.000Z\"},{\"id\":\"0c994ca4-70d1-4023-80a1-99e7d68e999a\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de SERRUCHOS (1 unidad) de Mónica Zerpa. Préstamo cerrado.\",\"createdAt\":\"2026-10-05T18:07:41.000Z\"},{\"id\":\"d8195e9b-702e-4b08-8ad6-bc2ac708d7ad\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Disco de corte 115 mm para Milagros Álvarez (3 unidad(es)). Detalle: Proyecto de 6° año.\",\"createdAt\":\"2026-10-05T17:09:46.000Z\"},{\"id\":\"e91daf0b-dc0c-4e6b-914f-f9c0a39fc1b1\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de FORMON SET 4PS (3 unidad) de Mónica Zerpa. Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-10-05T16:20:40.000Z\"},{\"id\":\"9c0b930f-d1ca-45a3-9e44-eae847c766f1\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de AMOLADORAS (1 unidad) para Facundo Álvarez. Observación: Práctica de taller.\",\"createdAt\":\"2026-10-05T14:31:45.000Z\"},{\"id\":\"3d3a614f-5d25-44dc-9644-038371e4ef7a\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Arco de sierra (1 unidad) para Facundo Álvarez. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-10-05T13:26:44.000Z\"},{\"id\":\"3a3973b8-3a54-4089-95fc-db371ce67075\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de T DE 1\\\" A 3/4 IPS (2 unidad) para Thiago Quispe.\",\"createdAt\":\"2026-10-05T12:48:43.000Z\"},{\"id\":\"02b9ebf1-fb91-4eea-b466-958f6050de52\",\"type\":\"loan_partial_returned\",\"message\":\"Jorge Medina registró una devolución parcial de CODOS CON INSERTO DE 20 (1 unidad; quedan 2 unidad) de Santiago Quispe. El préstamo sigue abierto.\",\"createdAt\":\"2026-10-02T18:53:34.000Z\"},{\"id\":\"9325938b-bf4f-4a1e-8c96-a63ff81716aa\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de CUPLAS DE 63 (2 unidad) para Catalina Aguirre. Observación: Práctica de taller.\",\"createdAt\":\"2026-10-02T15:57:35.000Z\"},{\"id\":\"c39e9bcc-0945-4917-8dae-a7e0c29aa3f5\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Pinza amperométrica (1 unidad) para Martina Martínez. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-10-02T15:54:37.000Z\"},{\"id\":\"eb436311-59c0-49ba-8fd4-3a7a7ac7db13\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Protoboard 830 puntos (2 unidad) para Prof. Silvina Rueda.\",\"createdAt\":\"2026-10-02T14:43:36.000Z\"},{\"id\":\"18859052-f962-4d20-bbad-192e37d91cfd\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de DELANTALES USADOS (3 unidad) de Camila Álvarez. Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-10-01T16:15:29.000Z\"},{\"id\":\"36877e4c-35e4-4232-9f0f-39e91f6faae8\",\"type\":\"stock_entry_created\",\"message\":\"Jorge Medina registró un ingreso por compra de Kit Arduino Uno (4), Protoboard 830 puntos (10). Proveedor: Electro Insumos Andinos.\",\"createdAt\":\"2026-10-01T15:12:39.000Z\"},{\"id\":\"1ccaee5a-f131-4d7b-8d92-5eaf2235dcf1\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de BARNIZ MURELLA 1 LITRO para Ignacio Álvarez (1 unidad(es)). Detalle: Trabajo práctico.\",\"createdAt\":\"2026-10-01T14:37:33.000Z\"},{\"id\":\"47593935-d3a5-4bd2-a273-bcff471d54d1\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de SERRUCHOS (1 unidad) para Mónica Zerpa.\",\"createdAt\":\"2026-10-01T12:45:32.000Z\"},{\"id\":\"67ef8b53-1708-4b9b-8a2c-13901401bb6e\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de FORMON SET 4PS (3 unidad) para Mónica Zerpa. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-10-01T12:40:31.000Z\"},{\"id\":\"416452ae-761e-4547-9019-367d36f6f50f\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de GUANTES PARA SOLDAR ( INDURA) (2 unidad) para Mateo Torres.\",\"createdAt\":\"2026-10-01T12:30:30.000Z\"},{\"id\":\"9d7441d4-1c0b-4e32-ac44-9aed8a6ba9aa\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Kit Arduino Uno (2 unidad) de Emma Vargas. Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-09-30T19:47:25.000Z\"},{\"id\":\"659e5ed6-6f3d-402f-92af-c902a343bafc\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de CAJA DE ELECTRODOS para Mónica Zerpa (1 unidad(es)).\",\"createdAt\":\"2026-09-30T13:38:28.000Z\"},{\"id\":\"e6248572-302f-41ad-86ec-10312c61ffe3\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de DELANTALES USADOS (3 unidad) para Camila Álvarez.\",\"createdAt\":\"2026-09-30T12:36:26.000Z\"},{\"id\":\"40011379-5b7a-4e33-9656-4bcad361f432\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de CUPLAS DE 20 (1 unidad) para Ing. Gustavo Tolaba.\",\"createdAt\":\"2026-09-30T12:11:27.000Z\"},{\"id\":\"1eb796a2-6e9b-46ec-a6a2-d425ffb5fdac\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de CAÑOS DE 1\\\" IPS (1 unidad) de Lucía Gutiérrez. Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-09-29T17:44:22.000Z\"},{\"id\":\"2bbcda4a-959a-4095-bd63-39a600159546\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de CUPLAS DE 1 \\\" IPS (1 unidad) para Milagros Álvarez.\",\"createdAt\":\"2026-09-29T15:46:23.000Z\"},{\"id\":\"0b5dec7f-0c51-4f69-a05c-08323d0daba3\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Mecha HSS 6 mm para Raúl Villca (4 unidad(es)). Detalle: Mantenimiento.\",\"createdAt\":\"2026-09-29T14:58:24.000Z\"},{\"id\":\"52732635-8b03-4bef-a428-4f0dc7b2355c\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de CUPLAS DE 040 (1 unidad) de Emma Ortiz. Préstamo cerrado.\",\"createdAt\":\"2026-09-28T18:54:19.000Z\"},{\"id\":\"f6185bce-24ad-4fae-8c50-db039a3d370a\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de PINZAS DE 7\\\" (1 unidad) de Catalina Aguirre. Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-09-28T18:47:20.000Z\"},{\"id\":\"de4014f0-e9b9-4c85-ab6d-55052d37531f\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de SERRUCHOS (3 unidad) de Facundo Álvarez. Préstamo cerrado.\",\"createdAt\":\"2026-09-28T16:06:21.000Z\"},{\"id\":\"f0ec2b68-f196-441a-8f84-cec204856645\",\"type\":\"purchase_request_confirmed\",\"message\":\"Jorge Medina confirmó en forma parcial el pedido 90FC26B5 con Electro Insumos Andinos: Kit Arduino Uno (6), Protoboard 830 puntos (10). Total factura $310800.00. Observación: Confirmación de la demo.\",\"createdAt\":\"2026-09-26T14:27:38.000Z\"},{\"id\":\"4f18f7c0-c579-42a4-b4b2-a07d68cefb77\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de SERRUCHOS (3 unidad) para Facundo Álvarez.\",\"createdAt\":\"2026-09-25T14:05:17.000Z\"},{\"id\":\"3e01cc36-cedf-462f-9fdc-0b11c20512a9\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de DISCOS PARA LA MASCARA SENCITIVA para Santiago Suárez (3 unidad(es)). Detalle: Práctica de soldadura.\",\"createdAt\":\"2026-09-25T13:34:18.000Z\"},{\"id\":\"3b2af242-170b-4c58-a87b-84f9e0169485\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de TERRAJA DE 3/4 IPS (1 unidad) de Benjamín Cruz. Préstamo cerrado.\",\"createdAt\":\"2026-09-24T18:31:16.000Z\"},{\"id\":\"3e96bf5a-a01a-40c7-a171-6fd7d25a7b44\",\"type\":\"purchase_request_approved\",\"message\":\"Claudia Ibarra aprobó como Contable el pedido 90FC26B5. El pedido quedó aprobado y listo para confirmar con el proveedor.\",\"createdAt\":\"2026-09-23T16:37:37.000Z\"},{\"id\":\"24599ecd-59e4-4e33-9c9b-2dd9adf299a0\",\"type\":\"purchase_request_approved\",\"message\":\"Miguel Toconas aprobó como Rector el pedido 90FC26B5. Falta la firma de Contable.\",\"createdAt\":\"2026-09-23T14:21:36.000Z\"},{\"id\":\"425068c1-cfab-4d57-904f-f7bf0aeb86ee\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de CODOS CON INSERTO DE 20 (3 unidad) para Santiago Quispe.\",\"createdAt\":\"2026-09-23T14:20:15.000Z\"},{\"id\":\"b4813b42-c18f-4512-8be7-0dce5bb7f2ec\",\"type\":\"purchase_request_approved\",\"message\":\"Ricardo Sosa aprobó como Jefe de taller el pedido 90FC26B5. Falta la firma de Rector.\",\"createdAt\":\"2026-09-23T12:11:35.000Z\"},{\"id\":\"c8249e22-b2d8-4731-96d5-b2e2220e2600\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de PINZAS DE 7\\\" (1 unidad) para Catalina Aguirre.\",\"createdAt\":\"2026-09-23T11:34:14.000Z\"},{\"id\":\"7d5fdfe2-595f-4516-a602-9abfad6898c9\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de MECHAS DE 5 MILIMETROS para Martina Martínez (2 unidad(es)).\",\"createdAt\":\"2026-09-22T19:41:13.000Z\"},{\"id\":\"ad486ca6-9681-4e21-9010-280caff51f06\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de BUJES DE 3/4 A MEDIA IPS (1 unidad) de Felipe Quispe. Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-09-22T17:05:12.000Z\"},{\"id\":\"8b39c6d9-8241-46fe-9929-bd871a259d30\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de UNION DOBLE DE 1/2\\\" IPS (3 unidad) de Lucía Molina. Préstamo cerrado.\",\"createdAt\":\"2026-09-21T19:14:07.000Z\"},{\"id\":\"383e0706-90fc-4172-b6d6-920df21d9318\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Antiparras de seguridad (1 unidad) de Felipe Quispe. Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-09-21T18:13:09.000Z\"},{\"id\":\"3ce00bda-274b-4a9c-b06b-f2f7f8c1a640\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de GUANTES DE CUERO MANGA LARGA (EN BOLSA) (1 unidad) de Camila Ortiz. Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-09-21T16:28:08.000Z\"},{\"id\":\"e557ec70-6b19-41b8-a8ca-b435349949b3\",\"type\":\"item_written_off\",\"message\":\"Jorge Medina dio de baja 4 unidad de Disco de corte 115 mm (CO-001) el 21/09/2026 a las 11:52. Motivo: Rotura o daño irreparable. Stock restante: 46. Observación: Discos partidos durante la práctica de 3° año.\",\"createdAt\":\"2026-09-21T14:52:24.000Z\"},{\"id\":\"f104a76c-107c-4238-881e-43fc1f578201\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de CUPLAS DE 040 (1 unidad) para Emma Ortiz.\",\"createdAt\":\"2026-09-21T14:32:10.000Z\"},{\"id\":\"e15897bb-68d8-42f2-99a0-4c2afa8ffae5\",\"type\":\"purchase_request_created\",\"message\":\"Jorge Medina generó un pedido de compra con 3 material(es). Queda a la espera de las firmas de Jefe de taller, Rector y Contable. Observación: Laboratorio de electrónica · segundo cuatrimestre.\",\"createdAt\":\"2026-09-21T13:37:34.000Z\"},{\"id\":\"86295f87-93af-4616-9003-31c3ba6a5818\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Kit Arduino Uno (2 unidad) para Emma Vargas. Observación: Trabajo final.\",\"createdAt\":\"2026-09-21T12:41:11.000Z\"},{\"id\":\"456a1cfd-bb72-4792-9878-e7c19e94934a\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de CODOS A 90º  A 110 (1 unidad) de Raúl Villca. Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-09-18T20:30:04.000Z\"},{\"id\":\"8022c2f5-3078-42ee-8856-73475d2a4401\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de RULETAS DE 3 METROS (3 unidad) de Catalina Aguirre. Préstamo cerrado.\",\"createdAt\":\"2026-09-18T19:48:05.000Z\"},{\"id\":\"a4fb3d03-a42e-4504-be22-670b9600523f\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de CAÑOS DE 1\\\" IPS (1 unidad) para Lucía Gutiérrez. Observación: Práctica de taller.\",\"createdAt\":\"2026-09-18T12:16:06.000Z\"},{\"id\":\"6e061db9-759c-47a8-a24b-ff697d5930c3\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de RULETAS DE 3 METROS (3 unidad) para Catalina Aguirre.\",\"createdAt\":\"2026-09-17T13:12:03.000Z\"},{\"id\":\"1d367ff4-a237-4246-9c7c-4a9f0c935d29\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Antiparras de seguridad (1 unidad) para Felipe Quispe. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-09-17T12:10:02.000Z\"},{\"id\":\"a854e84e-8c6e-46b0-9e04-963f10ab94c9\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de GUANTES ANTICORTES (1 unidad) de Milagros Álvarez. Préstamo cerrado.\",\"createdAt\":\"2026-09-16T17:24:50.000Z\"},{\"id\":\"56d6d8b4-9244-4d54-951e-dcc7b6092b3e\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de BUJES DE 3/4 A MEDIA IPS (1 unidad) para Felipe Quispe.\",\"createdAt\":\"2026-09-16T15:07:01.000Z\"},{\"id\":\"ac5d76b0-601e-4a84-b20d-740b2f8cd470\",\"type\":\"stock_entry_created\",\"message\":\"Jorge Medina registró un ingreso por donacion de DELANTALES SIMPLES (5). Donante: Cooperadora escolar. Observación: Donación registrada para la demo.\",\"createdAt\":\"2026-09-15T13:23:49.000Z\"},{\"id\":\"b963797a-b2c7-49c5-96cb-fbff6ebdf620\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de TERRAJA DE 3/4 IPS (1 unidad) para Benjamín Cruz.\",\"createdAt\":\"2026-09-15T13:08:48.000Z\"},{\"id\":\"b95daa6b-5221-49a3-8f4a-ae798fa7fe04\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de CAJA DE PROTECTORES AUDITIVOS (1 caja) de Prof. Andrea Choque. Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-09-14T20:30:45.000Z\"},{\"id\":\"ab9de2dc-0886-43d3-ae19-112d1ea90d51\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Soldadora inverter 200 A (1 unidad) de Camila Vargas. Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-09-14T20:28:44.000Z\"},{\"id\":\"0c6fc3a9-12a8-4c9f-b720-abf1b53114d8\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de CODOS A 90º  A 110 (1 unidad) para Raúl Villca.\",\"createdAt\":\"2026-09-14T13:25:46.000Z\"},{\"id\":\"13eea7db-0adb-4000-a4ab-d51e09c96751\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de GUANTES DE CUERO MANGA LARGA (EN BOLSA) (1 unidad) para Camila Ortiz.\",\"createdAt\":\"2026-09-14T12:04:47.000Z\"},{\"id\":\"38f27bde-c7a4-4297-bc60-bfb81ce4012e\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Atornillador inalámbrico 12 V (1 unidad) de Catalina Aguirre. Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-09-11T18:21:41.000Z\"},{\"id\":\"1a3a0b74-c642-4a5b-bf92-e21f415fb369\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Estaño 60/40 (rollo 250 g) para Agustina Castro (4 unidad(es)). Detalle: Trabajo práctico.\",\"createdAt\":\"2026-09-11T17:20:43.000Z\"},{\"id\":\"290a627b-b34b-49b6-bb17-d6298d524d63\",\"type\":\"purchase_invoice_created\",\"message\":\"Jorge Medina registró la factura A-0012-00031002 de Distribuidora Técnica del Norte SA (sin pedido): Taladro percutor 650 W (2), Mecha HSS 6 mm (20). Total factura $227000.00. Observación: Compra directa (demo).\",\"createdAt\":\"2026-09-11T14:38:02.000Z\"},{\"id\":\"984f8d3e-f2b9-406a-a252-a362c9d122b7\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de UNION DOBLE DE 1/2\\\" IPS (3 unidad) para Lucía Molina. Observación: Trabajo final.\",\"createdAt\":\"2026-09-11T11:51:42.000Z\"},{\"id\":\"30a09b58-6f22-4314-9a71-e52f07a99548\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de CODOS DE 040 A 90º HH (1 unidad) de Facundo Álvarez. Préstamo cerrado.\",\"createdAt\":\"2026-09-09T20:40:39.000Z\"},{\"id\":\"23b331f8-496b-49fd-8abc-79211a744491\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de SIERRA COPA (CAJAS) (3 caja) de Valentina Gutiérrez. Préstamo cerrado.\",\"createdAt\":\"2026-09-09T17:58:40.000Z\"},{\"id\":\"6b007159-d49b-4770-ad29-1aefc1ac5381\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Martillo de bola 500 g (2 unidad) de Prof. Silvina Rueda. Préstamo cerrado.\",\"createdAt\":\"2026-09-08T20:18:36.000Z\"},{\"id\":\"be60bb31-fda2-4b5a-b4e7-89f537ae7333\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de MARTILLOS (1 unidad) de Lucía Molina. Préstamo cerrado.\",\"createdAt\":\"2026-09-08T17:17:35.000Z\"},{\"id\":\"69f118bd-c9c4-4cfa-aae6-e0b408e94819\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de SIERRA COPA (CAJAS) (3 caja) para Valentina Gutiérrez.\",\"createdAt\":\"2026-09-08T13:05:37.000Z\"},{\"id\":\"f173c775-9d79-4334-9f6c-1ad7c85d546d\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de CAJA DE PROTECTORES AUDITIVOS (1 caja) para Prof. Andrea Choque. Observación: Trabajo final.\",\"createdAt\":\"2026-09-08T12:08:38.000Z\"},{\"id\":\"b6510425-f7fe-4d24-bbb6-8c3a45c9ec9f\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de PARES DE GUANTES DIELECTRICOS (1 unidad) de Arq. Hernán Calizaya. Préstamo cerrado.\",\"createdAt\":\"2026-09-07T20:10:32.000Z\"},{\"id\":\"adcd563a-7f1d-443c-a4e7-0a45e32a6fec\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de CAJAS DE SIERRA COPA (3 caja) de Felipe Quispe. Préstamo cerrado.\",\"createdAt\":\"2026-09-07T19:40:31.000Z\"},{\"id\":\"d655b25f-94b9-4fbf-92ce-a2323f795225\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Atornillador inalámbrico 12 V (1 unidad) para Catalina Aguirre.\",\"createdAt\":\"2026-09-07T12:46:33.000Z\"},{\"id\":\"31fda5eb-98b8-43fb-b165-4018d726d615\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de GUANTES ANTICORTES (1 unidad) para Milagros Álvarez.\",\"createdAt\":\"2026-09-07T11:06:34.000Z\"},{\"id\":\"37646dd0-7c5e-4754-833f-abb5de4b8b35\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de MASCARAS FACIALES (3 unidad) de Raúl Villca. Préstamo cerrado.\",\"createdAt\":\"2026-09-04T19:09:29.000Z\"},{\"id\":\"d8d8e3d4-0a46-459d-a46e-a83897279549\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Soldadora inverter 200 A (1 unidad) para Camila Vargas.\",\"createdAt\":\"2026-09-04T14:15:30.000Z\"},{\"id\":\"a14c2de8-dd00-4984-a91e-90925f0a5f5b\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de CODOS DE 040 A 90º HH (1 unidad) para Facundo Álvarez.\",\"createdAt\":\"2026-09-03T15:28:26.000Z\"},{\"id\":\"8157f8e8-e3ee-46bc-8f85-e49ddf04298e\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de PARES DE GUANTES DIELECTRICOS (1 unidad) para Arq. Hernán Calizaya. Observación: Trabajo final.\",\"createdAt\":\"2026-09-03T15:25:28.000Z\"},{\"id\":\"53432191-72de-4613-993d-007a1fc16fd9\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de MASCARAS FACIALES (3 unidad) para Raúl Villca.\",\"createdAt\":\"2026-09-03T13:13:27.000Z\"},{\"id\":\"c33f827f-84b4-4891-8445-c9f62485ec05\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de CODOS TERMUFUCIN DE 25 (3 unidad) de Bautista Castro. Préstamo cerrado.\",\"createdAt\":\"2026-09-02T17:02:22.000Z\"},{\"id\":\"46afe484-538e-4874-a977-bd7789eccad7\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de BOLSA DE CLAVO DE 1 1/2\\\" para Prof. Natalia Burgos (3 unidad(es)). Detalle: Mantenimiento.\",\"createdAt\":\"2026-09-02T17:01:25.000Z\"},{\"id\":\"e51a5b37-87cb-4ff6-89a4-6b5d833f3ff7\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de CAJAS DE SIERRA COPA (3 caja) para Felipe Quispe.\",\"createdAt\":\"2026-09-02T13:19:24.000Z\"},{\"id\":\"de7725be-9525-42bc-9dce-09a91ba93f1f\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Martillo de bola 500 g (2 unidad) para Prof. Silvina Rueda.\",\"createdAt\":\"2026-09-02T12:19:23.000Z\"},{\"id\":\"23d1f853-7ea0-4092-993c-f000b4e53f6b\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de RULETAS DE 3 METROS (1 unidad) de Facundo Álvarez. Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-09-01T16:51:21.000Z\"},{\"id\":\"b22b74ac-5451-4cdb-9997-b7ceb84fdec9\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de BASTAGOS PARA GRIFO (1 unidad) de Lucía Flores. Préstamo cerrado.\",\"createdAt\":\"2026-08-31T19:48:19.000Z\"},{\"id\":\"14074732-046f-479a-960a-e0e0d3da2271\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de T DE 1/2 IPS (2 unidad) de Emma Molina. Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-08-31T18:17:18.000Z\"},{\"id\":\"7bdb1d89-43c6-402b-b305-136027bd40e3\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de MARTILLOS (1 unidad) para Lucía Molina.\",\"createdAt\":\"2026-08-31T14:12:20.000Z\"},{\"id\":\"cf52a689-e6f5-44e9-99bd-d7956d610975\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de BASTAGOS PARA GRIFO (1 unidad) para Lucía Flores. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-08-27T11:50:17.000Z\"},{\"id\":\"9408e452-444d-43c8-b413-dfff2549df13\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de RULETAS DE 3 METROS (1 unidad) para Facundo Álvarez. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-08-26T15:32:15.000Z\"},{\"id\":\"8e2a58ec-8635-4737-af86-d093ac506dff\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de CODOS TERMUFUCIN DE 25 (3 unidad) para Bautista Castro.\",\"createdAt\":\"2026-08-26T12:59:16.000Z\"},{\"id\":\"19bdc857-8ac1-46c9-9ad7-cc77e8bd6d64\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de T DE 1/2 IPS (2 unidad) para Emma Molina.\",\"createdAt\":\"2026-08-25T13:21:14.000Z\"},{\"id\":\"819355e6-bcf8-4db8-9a95-f17492f22390\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de PINZAS DE 7\\\" (1 unidad) de Benjamín Cruz. Préstamo cerrado.\",\"createdAt\":\"2026-08-24T19:50:11.000Z\"},{\"id\":\"ce2dadfa-60d1-4240-bea5-44a284acf267\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de TERRAJA DE 1/2 IPS (1 unidad) de Santiago Suárez. Préstamo cerrado.\",\"createdAt\":\"2026-08-24T19:07:10.000Z\"},{\"id\":\"4dca0856-dcaa-4bb4-bd86-9790897e1c93\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de MASCARAS FACIALES (1 unidad) de Ignacio Cruz. Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-08-24T17:05:12.000Z\"},{\"id\":\"23ab00bc-17e3-4dae-96e2-0627bc842316\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de BOLSA DE CLAVO DE 1 1/2\\\" para Ing. Gustavo Tolaba (2 unidad(es)). Detalle: Trabajo práctico.\",\"createdAt\":\"2026-08-24T12:23:13.000Z\"},{\"id\":\"b7006895-02f3-4685-871c-2e4a9bf5ee01\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de CAJA DE GAFAS (3 caja) de Emma Vargas. Préstamo cerrado.\",\"createdAt\":\"2026-08-21T16:10:08.000Z\"},{\"id\":\"78baedee-f036-431e-bceb-ac7a335c4623\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de MASCARAS FACIALES (1 unidad) para Ignacio Cruz.\",\"createdAt\":\"2026-08-21T11:52:09.000Z\"},{\"id\":\"d9a5e08a-67c2-4003-8149-ba0ea4fd5a61\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de CUPLAS DE 25 (2 unidad) de Ing. Ricardo Salinas. Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-08-19T19:57:06.000Z\"},{\"id\":\"d1737105-974b-4c14-b338-8d545aa23205\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de BUJES DE 3/4 A MEDIA IPS (1 unidad) de Arq. Hernán Calizaya. Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-08-19T16:47:05.000Z\"},{\"id\":\"0c2bf1a8-8ccf-41b1-a0f0-80acf23a69ed\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Mecha HSS 6 mm para Mónica Zerpa (3 unidad(es)). Detalle: Proyecto de 6° año.\",\"createdAt\":\"2026-08-19T14:49:07.000Z\"},{\"id\":\"daecd8a1-8de2-42e6-b3fb-cf7d7f34825d\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de CUPLAS DE 25 (2 unidad) para Ing. Ricardo Salinas. Observación: Práctica de taller.\",\"createdAt\":\"2026-08-18T13:19:04.000Z\"},{\"id\":\"5e00d6f9-03f1-46d2-8aaf-f73627458e1d\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de CUPLAS DE 040 (2 unidad) de Ignacio Cruz. Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-08-17T20:06:49.000Z\"},{\"id\":\"118449c8-95d2-4816-9032-4f3510d70771\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de FORMON SET 4PS (1 unidad) de Emma Vargas. Préstamo cerrado.\",\"createdAt\":\"2026-08-17T19:32:50.000Z\"},{\"id\":\"9c7f25c9-8897-4531-bb33-bf0d4adf48c7\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de GUANTES DE CUERO MANGA LARGA (EN BOLSA) (2 unidad) de Emma Molina. Préstamo cerrado.\",\"createdAt\":\"2026-08-17T17:08:48.000Z\"},{\"id\":\"8210fe0c-6d52-4108-8456-24cd2afcc1ca\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Nivel de burbuja 60 cm (1 unidad) de Ing. Ricardo Salinas. Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-08-17T16:49:01.000Z\"},{\"id\":\"4801efb3-2d03-4982-9316-51bf6ad399ca\",\"type\":\"purchase_invoice_created\",\"message\":\"Jorge Medina registró la factura A-0001-00007781 de Seguridad Industrial Puna (sin pedido): Protector auditivo (8), Delantal de cuero (4). Total factura $142400.00. Observación: Compra directa (demo).\",\"createdAt\":\"2026-08-17T14:07:01.000Z\"},{\"id\":\"7fe77d2e-ac34-4fad-8f63-0f167a94c889\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de PINZAS DE 7\\\" (1 unidad) para Benjamín Cruz. Observación: Práctica de taller.\",\"createdAt\":\"2026-08-17T13:25:02.000Z\"},{\"id\":\"9e35cd18-8243-4325-9f2b-4d8dfcfb5e5f\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de CAJA DE GAFAS (3 caja) para Emma Vargas. Observación: Práctica de taller.\",\"createdAt\":\"2026-08-17T11:48:03.000Z\"},{\"id\":\"fd1c56e8-8e29-44ec-ae14-9040e9c8688d\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de FORMON SET 4PS (1 unidad) para Emma Vargas.\",\"createdAt\":\"2026-08-14T15:59:45.000Z\"},{\"id\":\"1328cca4-d69a-4d4d-96de-321986ceaa11\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de BUJES DE 3/4 A MEDIA IPS (1 unidad) para Arq. Hernán Calizaya. Observación: Trabajo final.\",\"createdAt\":\"2026-08-14T15:47:44.000Z\"},{\"id\":\"a55175eb-bc77-4f79-b2ce-dcda3f479b29\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de TORNILLOS para Prof. Natalia Burgos (1 unidad(es)). Detalle: Trabajo práctico.\",\"createdAt\":\"2026-08-14T12:49:47.000Z\"},{\"id\":\"cf21d136-8881-4e24-a727-a81c0443c9e2\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Nivel de burbuja 60 cm (1 unidad) para Ing. Ricardo Salinas. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-08-14T11:20:46.000Z\"},{\"id\":\"5224abd7-0025-42c3-8159-824ba51997d0\",\"type\":\"loan_partial_returned\",\"message\":\"Jorge Medina registró una devolución parcial de CUPLAS DE 040 (1 unidad; quedan 2 unidad) de Ignacio Cruz. El préstamo sigue abierto. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-08-13T19:44:42.000Z\"},{\"id\":\"3ed4bb7f-e832-414f-8a96-838661ac0e9b\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de TERRAJA DE 1/2 IPS (1 unidad) para Santiago Suárez.\",\"createdAt\":\"2026-08-13T15:35:43.000Z\"},{\"id\":\"a593e1e7-9dab-46ba-bd3e-6baaaacfc312\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Protoboard 830 puntos (3 unidad) de Bautista Castro. Préstamo cerrado.\",\"createdAt\":\"2026-08-12T16:53:39.000Z\"},{\"id\":\"a46ac4f7-49f9-4f69-9ccb-d30d0c40754d\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de GUANTES DE CUERO MANGA LARGA (EN BOLSA) (2 unidad) para Emma Molina. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-08-12T13:15:40.000Z\"},{\"id\":\"f62a0e78-ded9-4150-8ae8-f345adb4bfba\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de CUPLAS DE 040 (3 unidad) para Ignacio Cruz.\",\"createdAt\":\"2026-08-12T12:31:41.000Z\"},{\"id\":\"6afd3fba-e50b-4f02-a1ca-df072119e6d2\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de T DE 1\\\" A 3/4 IPS (2 unidad) de Facundo Castro. Préstamo cerrado.\",\"createdAt\":\"2026-08-10T20:54:37.000Z\"},{\"id\":\"096713ae-d2bd-45a7-8f29-ec15c52fc363\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Protoboard 830 puntos (2 unidad) de Facundo Álvarez. Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-08-10T20:10:33.000Z\"},{\"id\":\"ec947cbf-4e62-4771-83f4-10b492810ef0\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de DELANTALES CON CROMO (1 unidad) de Prof. Natalia Burgos. Préstamo cerrado.\",\"createdAt\":\"2026-08-10T18:39:35.000Z\"},{\"id\":\"1db39775-7e1c-4a4f-9514-bad3570b47e2\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de LLAVES DE PASO DE 20 FUSION (1 unidad) de Mateo Torres. Préstamo cerrado.\",\"createdAt\":\"2026-08-10T18:24:38.000Z\"},{\"id\":\"3b46e2a4-89ef-4da3-97da-2b9c36b5119e\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de TENAZAS (1 unidad) de Valentina Gutiérrez. Préstamo cerrado.\",\"createdAt\":\"2026-08-10T17:51:36.000Z\"},{\"id\":\"417dc25c-2a72-47ee-a57a-0c99f146ced6\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de LLAVES ESFERICAS DE 1/2 (2 unidad) de Lucía Flores. Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-08-10T17:28:34.000Z\"},{\"id\":\"8a4c3f8c-3247-4a43-89b4-b7c0c691d9b1\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de T DE 1\\\" A 3/4 IPS (2 unidad) para Facundo Castro. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-08-07T15:54:30.000Z\"},{\"id\":\"1bbf46fd-b0f0-4e14-9b34-3cca85b3d982\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de LLAVES DE PASO DE 20 FUSION (1 unidad) para Mateo Torres. Observación: Práctica de taller.\",\"createdAt\":\"2026-08-07T15:31:31.000Z\"},{\"id\":\"0c37e322-1e8f-474a-92fa-77b4dfd79709\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de TORNILLOS AUTOPERFORANTES para Ignacio Álvarez (2 unidad(es)). Detalle: Trabajo práctico.\",\"createdAt\":\"2026-08-07T14:30:32.000Z\"},{\"id\":\"99907257-bf72-4781-ae8f-ce7400716311\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de TENAZAS (1 unidad) para Valentina Gutiérrez.\",\"createdAt\":\"2026-08-07T12:34:29.000Z\"},{\"id\":\"f488c26b-a5af-4272-91ef-69aec86cc01f\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de UNION DOBLE DE 3/4\\\" IPS (3 unidad) de Facundo Álvarez. Préstamo cerrado.\",\"createdAt\":\"2026-08-06T20:57:27.000Z\"},{\"id\":\"ceb80854-bc16-4752-abde-bbac28e89aad\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de DELANTALES CON CROMO (1 unidad) para Prof. Natalia Burgos.\",\"createdAt\":\"2026-08-06T11:37:28.000Z\"},{\"id\":\"96bb10dc-3282-4400-9d56-e25b28d91dfa\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de TERRAJA DE 1/2 IPS (1 unidad) de Emma Vargas. Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-08-05T19:55:26.000Z\"},{\"id\":\"4fe9f4b8-efd8-40cd-8637-9d3e1974f1d0\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de PINZAS PARA PORTA ELECTRODOS (1 unidad) de Facundo Álvarez. Préstamo cerrado.\",\"createdAt\":\"2026-08-04T19:49:21.000Z\"},{\"id\":\"226383e5-d7ae-4c91-8f49-2a05802d025b\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de CODOS DE 63 A 90º HH (3 unidad) de Santiago Suárez. Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-08-04T18:59:22.000Z\"},{\"id\":\"cc233f11-ca58-4563-96e1-ed5272532724\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de TORNILLOS AUTOPERFORANTES para Ing. Ricardo Salinas (3 unidad(es)).\",\"createdAt\":\"2026-08-04T14:56:25.000Z\"},{\"id\":\"00b5b01d-0df7-4b4a-bbf7-57ca7a6f1541\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de LLAVES ESFERICAS DE 1/2 (2 unidad) para Lucía Flores. Observación: Trabajo final.\",\"createdAt\":\"2026-08-04T13:20:23.000Z\"},{\"id\":\"cbfad57a-da3b-4bed-a081-e1518f44e3b0\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de TERRAJA DE 1/2 IPS (1 unidad) para Emma Vargas.\",\"createdAt\":\"2026-08-04T11:51:24.000Z\"},{\"id\":\"e920c380-7846-4c29-9675-fd562f03fabf\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de TENAZAS (1 unidad) de Thiago López. Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-08-03T19:39:16.000Z\"},{\"id\":\"97c6d4c7-2802-41ad-a79a-b906b8119b54\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de CUPLAS CON INSERTO DE 20 (1 unidad) de Emma Molina. Préstamo cerrado.\",\"createdAt\":\"2026-08-03T16:03:17.000Z\"},{\"id\":\"eda50a15-e43e-48d5-951b-e96474ef2201\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Protoboard 830 puntos (3 unidad) para Bautista Castro. Observación: Trabajo final.\",\"createdAt\":\"2026-08-03T14:44:19.000Z\"},{\"id\":\"fa90407e-1ce0-4a04-9468-d72e5f1625f4\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Lija al agua grano 220 para Arq. Hernán Calizaya (3 unidad(es)). Detalle: Mantenimiento.\",\"createdAt\":\"2026-08-03T13:51:20.000Z\"},{\"id\":\"78559697-ab60-4c72-8376-909a81fec0d9\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Protoboard 830 puntos (2 unidad) para Facundo Álvarez. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-08-03T12:20:18.000Z\"},{\"id\":\"9bf8e55b-1759-4cba-b2c1-2d6abdc86582\",\"type\":\"stock_entry_created\",\"message\":\"Jorge Medina registró un ingreso por compra de Disco de corte 115 mm (50), Electrodo 2,5 mm (kg) (10), Guantes de descarne (12). Proveedor: Ferretería El Tornillo SRL.\",\"createdAt\":\"2026-07-31T15:43:33.000Z\"},{\"id\":\"101374bc-dd71-4366-8e77-bbe1671d8d48\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de CODOS DE 63 A 90º HH (3 unidad) para Santiago Suárez. Observación: Trabajo final.\",\"createdAt\":\"2026-07-31T12:33:15.000Z\"},{\"id\":\"dc2a2920-16dc-4290-8a58-fe34a9b5c853\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de JUEGO DE BROCA MADERA PLANA DE 6 UNIDADES (1 unidad) de Mateo Torres. Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-07-30T20:16:13.000Z\"},{\"id\":\"c3e60bfc-22be-4d3f-8ebb-28110ead5535\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de UNION DOBLE DE 3/4\\\" IPS (3 unidad) para Facundo Álvarez. Observación: Trabajo final.\",\"createdAt\":\"2026-07-30T13:07:14.000Z\"},{\"id\":\"76f87ede-2846-407e-9d86-199f754db519\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de CUPLAS CON INSERTO DE 20 (1 unidad) para Emma Molina. Observación: Trabajo final.\",\"createdAt\":\"2026-07-29T12:43:12.000Z\"},{\"id\":\"a298d2ca-d2cb-4767-91c4-3e5fd6864ebb\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de BOLSA DE CLAVO 9X25 para Prof. Natalia Burgos (3 unidad(es)).\",\"createdAt\":\"2026-07-28T18:58:11.000Z\"},{\"id\":\"0f565c66-c8a3-4f73-804c-34bac2f130e0\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de PINZAS PARA PORTA ELECTRODOS (1 unidad) para Facundo Álvarez.\",\"createdAt\":\"2026-07-28T11:04:10.000Z\"},{\"id\":\"1eb8ff7f-5777-4f55-9c4f-18c9a5990365\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de CODOS CON INSERT H DE 3/4 X 1/2 IPS (2 unidad) de Prof. Silvina Rueda. Préstamo cerrado.\",\"createdAt\":\"2026-07-27T19:16:07.000Z\"},{\"id\":\"f9f15e12-447e-4b6f-acc1-4f8d24712631\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de CODOS A 90º  A 110 (3 unidad) de Prof. Andrea Choque. Préstamo cerrado.\",\"createdAt\":\"2026-07-27T18:47:05.000Z\"},{\"id\":\"c9840053-9969-4cb5-88f8-684310e21127\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de MASCARAS DE SOLDAR (1 unidad) de Lucía Gutiérrez. Préstamo cerrado.\",\"createdAt\":\"2026-07-27T17:30:06.000Z\"},{\"id\":\"44fe2298-414f-415e-a9c6-055026f67c62\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de TALADRO (1 unidad) de Bautista Castro. Préstamo cerrado.\",\"createdAt\":\"2026-07-27T16:21:04.000Z\"},{\"id\":\"7eab6066-c816-45ba-89c9-b4193a5217d4\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de TENAZAS (1 unidad) para Thiago López.\",\"createdAt\":\"2026-07-27T14:16:09.000Z\"},{\"id\":\"9ac08544-1a9e-477b-9fc4-6cb160643fc3\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de JUEGO DE BROCA MADERA PLANA DE 6 UNIDADES (1 unidad) para Mateo Torres. Observación: Trabajo final.\",\"createdAt\":\"2026-07-27T12:20:08.000Z\"},{\"id\":\"c97eca5f-6af1-4929-b2bb-73d9d500bf23\",\"type\":\"purchase_request_confirmed\",\"message\":\"Jorge Medina confirmó en forma total el pedido 4176BD6E con Ferretería El Tornillo SRL: Disco de corte 115 mm (50), Electrodo 2,5 mm (kg) (10), Guantes de descarne (12). Total factura $238050.00. Observación: Confirmación de la demo.\",\"createdAt\":\"2026-07-26T14:16:32.000Z\"},{\"id\":\"1c74f2e0-81d8-4867-9db1-9940f2006f99\",\"type\":\"purchase_request_approved\",\"message\":\"Claudia Ibarra aprobó como Contable el pedido 4176BD6E. El pedido quedó aprobado y listo para confirmar con el proveedor.\",\"createdAt\":\"2026-07-24T16:36:31.000Z\"},{\"id\":\"2cec8bc6-18fe-4751-8baa-c46bd39e9271\",\"type\":\"purchase_request_approved\",\"message\":\"Miguel Toconas aprobó como Rector el pedido 4176BD6E. Falta la firma de Contable.\",\"createdAt\":\"2026-07-24T14:35:30.000Z\"},{\"id\":\"c9514b3e-1948-4a95-b750-ae821553afaf\",\"type\":\"purchase_request_approved\",\"message\":\"Ricardo Sosa aprobó como Jefe de taller el pedido 4176BD6E. Falta la firma de Rector.\",\"createdAt\":\"2026-07-24T12:06:29.000Z\"},{\"id\":\"c5fe9a32-07b4-496d-8005-10ec9a97baf3\",\"type\":\"purchase_request_created\",\"message\":\"Jorge Medina generó un pedido de compra con 3 material(es). Queda a la espera de las firmas de Jefe de taller, Rector y Contable. Observación: Reposición de insumos de soldadura.\",\"createdAt\":\"2026-07-23T13:52:28.000Z\"},{\"id\":\"6d021885-c94e-42a1-9911-c85af90844d9\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de TENAZAS (1 unidad) de Ing. Ricardo Salinas. Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-07-10T20:18:02.000Z\"},{\"id\":\"2f919a88-8b7a-4d30-8915-1894cd1e9ba1\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de DELANTALES NUEVOS (1 unidad) de Felipe Quispe. Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-07-10T18:23:03.000Z\"},{\"id\":\"f099643f-748d-421b-a6d7-46e1f70110b1\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de CURVAS DE 040 A 45º HH (1 unidad) de Arq. Hernán Calizaya. Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-07-10T17:04:01.000Z\"},{\"id\":\"146b4287-22e2-40c1-93a0-79d71f08edec\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de DELANTALES CON CROMO (1 unidad) de Emma Molina. Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-07-09T19:58:47.000Z\"},{\"id\":\"0d3fe9bf-1c69-4df1-9309-fd8073509bf0\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Disco de corte 115 mm para Martina Martínez (7 unidad(es)). Detalle: Trabajo práctico.\",\"createdAt\":\"2026-07-09T15:26:50.000Z\"},{\"id\":\"bea17b30-fe45-4b1e-8211-7d7f00053b0c\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de DELANTALES NUEVOS (1 unidad) para Felipe Quispe. Observación: Trabajo final.\",\"createdAt\":\"2026-07-09T15:18:48.000Z\"},{\"id\":\"f4e8efd2-f305-40ed-8a18-583cb2ec599b\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de CODOS CON INSERT H DE 3/4 X 1/2 IPS (2 unidad) para Prof. Silvina Rueda.\",\"createdAt\":\"2026-07-09T11:01:49.000Z\"},{\"id\":\"d5a1b626-eb20-48e6-9d8a-15a738196576\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de DELANTALES CON CROMO (1 unidad) para Emma Molina.\",\"createdAt\":\"2026-07-07T12:39:46.000Z\"},{\"id\":\"d38a9eb5-4f01-4d6b-953c-25cd84ed219d\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de LLAVES DE PASO DE 20 FUSION (1 unidad) de Facundo Álvarez. Préstamo cerrado.\",\"createdAt\":\"2026-07-06T19:29:41.000Z\"},{\"id\":\"0702872e-ad65-49cc-bbea-d8acdd0b3072\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de BASTAGOS PARA GRIFO (1 unidad) de Ignacio Cruz. Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-07-06T16:12:42.000Z\"},{\"id\":\"26aa0990-e1b6-4bff-b399-60036e5b5b9d\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de TENAZAS (1 unidad) para Ing. Ricardo Salinas. Observación: Práctica de taller.\",\"createdAt\":\"2026-07-06T15:27:44.000Z\"},{\"id\":\"b5b85c84-4864-4027-8e4f-c90bd1ddb1c0\",\"type\":\"stock_entry_created\",\"message\":\"Jorge Medina registró un ingreso por donacion de CODOS DE 3/4 IPS (5). Donante: Ex alumnos promoción 2015. Observación: Donación registrada para la demo.\",\"createdAt\":\"2026-07-06T13:31:45.000Z\"},{\"id\":\"e8a16aa0-de09-49c0-8559-9d0a150a315e\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de CURVAS DE 040 A 45º HH (1 unidad) para Arq. Hernán Calizaya. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-07-06T12:19:43.000Z\"},{\"id\":\"a5675f67-04ab-43e6-ab57-974ec08a95b5\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de MASCARAS DE SOLDAR (1 unidad) para Lucía Gutiérrez. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-07-03T15:53:39.000Z\"},{\"id\":\"7ba6b9a9-91e3-4714-b8c7-5e666e96999e\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de BASTAGOS PARA GRIFO (1 unidad) para Ignacio Cruz. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-07-03T14:39:40.000Z\"},{\"id\":\"f5d8e710-6084-4ea5-a92e-a552d12a3aed\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de CODOS A 90º  A 110 (3 unidad) para Prof. Andrea Choque. Observación: Práctica de taller.\",\"createdAt\":\"2026-07-03T12:47:38.000Z\"},{\"id\":\"23581dbd-77c3-4303-bc0f-a4a2a8069184\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de TALADRO (1 unidad) para Bautista Castro.\",\"createdAt\":\"2026-07-02T13:06:37.000Z\"},{\"id\":\"6c0e57c7-9164-4e2f-9fde-fe7e85618885\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de MASCARAS FACIALES (1 unidad) de Camila Álvarez. Préstamo cerrado.\",\"createdAt\":\"2026-07-01T16:39:36.000Z\"},{\"id\":\"b2edc508-d09a-42b2-b5da-bd11ff17e75b\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de CAJA DE GAFAS (2 caja) de Agustina Castro. Préstamo cerrado.\",\"createdAt\":\"2026-06-30T16:14:34.000Z\"},{\"id\":\"2b04273a-803a-498f-956a-476a79f43eca\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de LLAVES DE PASO DE 20 FUSION (1 unidad) para Facundo Álvarez.\",\"createdAt\":\"2026-06-30T15:41:35.000Z\"},{\"id\":\"cc17be60-4a71-4922-84fe-cc2be57c6748\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de BASTAGOS PARA GRIFO (1 unidad) de Thiago Quispe. Préstamo cerrado.\",\"createdAt\":\"2026-06-29T20:18:32.000Z\"},{\"id\":\"0264611c-95f5-4329-a0db-59f6c165fae3\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de CUPLAS DE 25 (2 unidad) de Valentina Gutiérrez. Préstamo cerrado.\",\"createdAt\":\"2026-06-29T20:17:33.000Z\"},{\"id\":\"f7bea244-cbdf-49c7-a87e-7087688e6a62\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de LLAVES ESFERICAS DE 3/4 (1 unidad) de Camila Ortiz. Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-06-29T20:11:30.000Z\"},{\"id\":\"500a5265-2533-4990-af36-109c0ca62d3f\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de TERRAJA DE 3/4 IPS (1 unidad) de Mónica Zerpa. Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-06-29T19:43:29.000Z\"},{\"id\":\"02043c1d-d124-476a-9485-78b5979e7a0e\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de CAJA DE PROTECTORES AUDITIVOS (1 caja) de Prof. Silvina Rueda. Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-06-29T17:17:31.000Z\"},{\"id\":\"b42481b0-83da-4809-abeb-67d080290409\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de CUPLAS DE 25 (2 unidad) para Valentina Gutiérrez. Observación: Trabajo final.\",\"createdAt\":\"2026-06-26T14:41:27.000Z\"},{\"id\":\"398a9de0-a7ec-4d7e-a5e5-002b7fc09a74\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de MASCARAS FACIALES (1 unidad) para Camila Álvarez. Observación: Práctica de taller.\",\"createdAt\":\"2026-06-26T13:41:28.000Z\"},{\"id\":\"1b10962c-630e-42b7-92b9-afce0309641f\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de CAJA DE GAFAS (2 caja) para Agustina Castro. Observación: Trabajo final.\",\"createdAt\":\"2026-06-26T11:10:26.000Z\"},{\"id\":\"5f831f2c-516b-4b8b-ad33-bd46519f66db\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de LIMAS (1 unidad) de Felipe Quispe. Préstamo cerrado.\",\"createdAt\":\"2026-06-25T19:00:24.000Z\"},{\"id\":\"0b602399-cdb7-456d-8c18-923df2af9ea9\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de BASTAGOS PARA GRIFO (1 unidad) para Thiago Quispe. Observación: Trabajo final.\",\"createdAt\":\"2026-06-25T14:21:25.000Z\"},{\"id\":\"010f8955-beed-402d-ac40-787c8e44bdfb\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de LIMAS (1 unidad) para Felipe Quispe.\",\"createdAt\":\"2026-06-24T15:11:23.000Z\"},{\"id\":\"6745bbf0-cfa7-4788-b78b-b2769efc01da\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de TERRAJA DE 3/4 IPS (1 unidad) para Mónica Zerpa. Observación: Trabajo final.\",\"createdAt\":\"2026-06-23T14:27:20.000Z\"},{\"id\":\"0f1ee651-d016-49f2-aa8b-5056c62fd3c0\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de LLAVES ESFERICAS DE 3/4 (1 unidad) para Camila Ortiz.\",\"createdAt\":\"2026-06-23T14:11:21.000Z\"},{\"id\":\"16c89477-ff5b-45a5-bd26-943309aeac74\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de CAJA DE PROTECTORES AUDITIVOS (1 caja) para Prof. Silvina Rueda. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-06-23T12:00:22.000Z\"},{\"id\":\"9cd26ae9-955f-4f86-bb8d-bf1e6c40920f\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de CUPLAS DE 63 (3 unidad) de Santiago Suárez. Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-06-22T19:15:19.000Z\"},{\"id\":\"45ef71af-2c59-4c3b-9003-2751a43d459b\",\"type\":\"stock_entry_created\",\"message\":\"Jorge Medina registró un ingreso por donacion de Multímetro digital (1). Donante: Cooperadora escolar. Observación: Donación registrada para la demo.\",\"createdAt\":\"2026-06-18T13:33:18.000Z\"},{\"id\":\"3f317170-4c5d-4e7a-9118-d63285300008\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de ROLLOS DE TEFLON para Prof. Silvina Rueda (2 unidad(es)). Detalle: Trabajo práctico.\",\"createdAt\":\"2026-06-17T12:24:17.000Z\"},{\"id\":\"5a2665e4-e6f3-4e7e-a6a6-12e6ee7a83c7\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de GUANTES PARA SOLDAR ( INDURA) (1 unidad) de Agustina Castro. Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-06-16T16:08:16.000Z\"},{\"id\":\"cf16ff6f-2ac2-4ab5-90ce-55a235c65778\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Careta de soldar fotosensible (1 unidad) de Ignacio Álvarez. Préstamo cerrado.\",\"createdAt\":\"2026-06-15T18:41:14.000Z\"},{\"id\":\"7701934d-ab93-44be-adf9-2dd7201fb620\",\"type\":\"loan_partial_returned\",\"message\":\"Jorge Medina registró una devolución parcial de GUANTES PARA SOLDAR ( INDURA) (1 unidad; quedan 1 unidad) de Agustina Castro. El préstamo sigue abierto.\",\"createdAt\":\"2026-06-15T16:12:13.000Z\"},{\"id\":\"87957dc8-b078-41ed-b255-3a3d28115c8e\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de CUPLAS DE 63 (3 unidad) para Santiago Suárez. Observación: Trabajo final.\",\"createdAt\":\"2026-06-15T13:04:15.000Z\"},{\"id\":\"64661d91-57b5-4005-9f81-2b4323fe263f\",\"type\":\"loan_partial_returned\",\"message\":\"Jorge Medina registró una devolución parcial de GUANTES PARA SOLDAR ( INDURA) (1 unidad; quedan 2 unidad) de Agustina Castro. El préstamo sigue abierto.\",\"createdAt\":\"2026-06-12T19:27:12.000Z\"},{\"id\":\"4c6e7be9-7310-4a84-9b46-9e06887fa731\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de T DE 1\\\" A 3/4 IPS (3 unidad) de Valentina Gutiérrez. Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-06-12T19:20:11.000Z\"},{\"id\":\"32c63d4c-6796-41d6-a1b6-653e87a5b2ca\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de SIERRA COPA (CAJAS) (1 caja) de Prof. Natalia Burgos. Préstamo cerrado.\",\"createdAt\":\"2026-06-11T20:17:08.000Z\"},{\"id\":\"cd2ea980-dd8f-4baa-871f-8f5a5759c00f\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Atornillador inalámbrico 12 V (1 unidad) de Prof. Natalia Burgos. Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-06-11T17:39:09.000Z\"},{\"id\":\"78c59120-3ec4-42b9-b2a9-aa7f9a7b03e8\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de TERRAJA DE 3/4 IPS (1 unidad) de Emma Ortiz. Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-06-11T17:19:10.000Z\"},{\"id\":\"282f62d5-e904-4c52-ac43-0b5e109b7b86\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de GUANTES DE CUERO MANGA LARGA( SIN BOLSA) (3 unidad) de Arq. Hernán Calizaya. Préstamo cerrado.\",\"createdAt\":\"2026-06-11T16:56:07.000Z\"},{\"id\":\"10be7e4d-4a92-410d-b97e-5f35779e1222\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de TERRAJA DE 3/4 IPS (1 unidad) para Emma Ortiz.\",\"createdAt\":\"2026-06-10T13:42:06.000Z\"},{\"id\":\"d1adbfbd-6fcc-4a20-bb9e-577b7db37c97\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de AMOLADORAS (1 unidad) de Prof. Andrea Choque. Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-06-09T20:15:03.000Z\"},{\"id\":\"93a3fdc9-cd65-437f-9452-b846c8dc22e8\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de TERRAJA DE 1/2 IPS (1 unidad) de Santiago Suárez. Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-06-09T19:26:01.000Z\"},{\"id\":\"3cadbe05-f25a-49a3-8e53-36d861ccf434\",\"type\":\"loan_partial_returned\",\"message\":\"Jorge Medina registró una devolución parcial de SIERRA COPA (CAJAS) (1 caja; quedan 1 caja) de Prof. Natalia Burgos. El préstamo sigue abierto.\",\"createdAt\":\"2026-06-09T17:11:04.000Z\"},{\"id\":\"bde2e10f-e6e5-4370-94f6-f6f110374da0\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de TALADRO DE MADERA PLANA (JUEGOS) (1 unidad) de Prof. Silvina Rueda. Préstamo cerrado.\",\"createdAt\":\"2026-06-09T16:36:02.000Z\"},{\"id\":\"2f0089b4-1a4e-4774-a1eb-24be018f908f\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Atornillador inalámbrico 12 V (1 unidad) para Prof. Natalia Burgos.\",\"createdAt\":\"2026-06-09T13:08:05.000Z\"},{\"id\":\"21dd918f-7156-4f8e-9cdd-653d87580c0c\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de CURVAS 110 A 45º (1 unidad) de Facundo Castro. Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-06-08T19:58:45.000Z\"},{\"id\":\"55c2c0a6-0962-4fcd-8ef5-4b128f8880fa\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de DISCO ESMERILL (PARES) (1 unidad) de Martina Martínez. Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-06-08T19:42:46.000Z\"},{\"id\":\"95095e6f-3a62-48eb-a962-c9352c79813f\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de CAJA PROTECTORES AUDITIVOS DE CARPINTERIA (2 caja) de Thiago Quispe. Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-06-08T16:39:47.000Z\"},{\"id\":\"393c4287-bf37-4d82-8148-b7678112c60b\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de GUANTES PARA SOLDAR ( INDURA) (3 unidad) para Agustina Castro. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-06-08T14:40:49.000Z\"},{\"id\":\"43fb04c8-6ce3-41d5-8061-765af0586f7d\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Careta de soldar fotosensible (1 unidad) para Ignacio Álvarez. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-06-08T13:01:50.000Z\"},{\"id\":\"7ea88bcb-1d99-4579-b3a7-4bceb94a6d62\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de SIERRA COPA (CAJAS) (2 caja) para Prof. Natalia Burgos.\",\"createdAt\":\"2026-06-08T12:06:48.000Z\"},{\"id\":\"a4eec8e5-a12e-4649-8c6c-07d46dffa2b5\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de MARTILLOS (1 unidad) de Bautista Castro. Préstamo cerrado.\",\"createdAt\":\"2026-06-05T20:45:44.000Z\"},{\"id\":\"22733ed6-5f47-4aac-9299-ecd94028256f\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de CODOS TERMOFUCION DE 20 (2 unidad) de Lucía Gutiérrez. Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-06-05T19:34:43.000Z\"},{\"id\":\"1db2bb38-3888-421d-be2d-609237c564f1\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de CAJA PROTECTORES AUDITIVOS DE CARPINTERIA (2 caja) para Thiago Quispe.\",\"createdAt\":\"2026-06-04T15:15:42.000Z\"},{\"id\":\"bbceb54d-74cf-4f97-91c5-817e8d1cab6f\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de AMOLADORAS (1 unidad) de Lucía Molina. Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-06-03T16:16:37.000Z\"},{\"id\":\"6d92e751-a583-4389-932c-8ea5c76350fe\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de TALADRO DE MADERA PLANA (JUEGOS) (1 unidad) para Prof. Silvina Rueda. Observación: Práctica de taller.\",\"createdAt\":\"2026-06-03T15:37:39.000Z\"},{\"id\":\"31dba87a-ed6d-4d95-a88b-f5870e788c23\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de T DE 1\\\" A 3/4 IPS (3 unidad) para Valentina Gutiérrez.\",\"createdAt\":\"2026-06-03T15:27:38.000Z\"},{\"id\":\"0c4d6aa5-6fc7-45be-8927-743ffdb60b11\",\"type\":\"stock_entry_created\",\"message\":\"Jorge Medina registró un ingreso por donacion de DISCO ESMERIL GRANO 60 5\\\" DE 5 UNIDADES (1). Donante: Cooperadora escolar. Observación: Donación registrada para la demo.\",\"createdAt\":\"2026-06-03T13:34:41.000Z\"},{\"id\":\"86311b9d-45c2-4387-9bc7-331dcebf2869\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de AMOLADORAS (1 unidad) para Prof. Andrea Choque.\",\"createdAt\":\"2026-06-03T11:40:40.000Z\"},{\"id\":\"92679146-7c35-4d7b-a9f0-7f4700b9e63e\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de GUANTES DE CUERO MANGA LARGA( SIN BOLSA) (3 unidad) para Arq. Hernán Calizaya. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-06-02T15:12:35.000Z\"},{\"id\":\"4c2d013f-b56a-4ab6-a77b-b3fb7e67e7ef\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de MARTILLOS (1 unidad) para Bautista Castro. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-06-02T12:36:36.000Z\"},{\"id\":\"64ecf6d2-5bd0-4d34-b299-a55f38996d4e\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de TERRAJA DE 1/2 IPS (1 unidad) para Santiago Suárez.\",\"createdAt\":\"2026-06-01T15:53:32.000Z\"},{\"id\":\"71ade67a-0ca0-4b64-853b-316a650068d2\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de CURVAS 110 A 45º (1 unidad) para Facundo Castro.\",\"createdAt\":\"2026-06-01T15:49:31.000Z\"},{\"id\":\"a9635e36-fe1d-4cab-bcf1-13ae1e0582f8\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de ROLLOS DE TEFLON para Raúl Villca (1 unidad(es)). Detalle: Mantenimiento.\",\"createdAt\":\"2026-06-01T15:37:34.000Z\"},{\"id\":\"83c253e1-d532-4a98-b9d8-e007cb67fc43\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de DISCO ESMERILL (PARES) (1 unidad) para Martina Martínez.\",\"createdAt\":\"2026-06-01T11:46:33.000Z\"},{\"id\":\"2c219f04-4624-4ca3-ac1b-bbc4ba6c3493\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de AMOLADORAS (1 unidad) para Lucía Molina. Observación: Trabajo final.\",\"createdAt\":\"2026-05-29T15:08:29.000Z\"},{\"id\":\"3ee4c5f6-5c54-4f60-9822-6dd3e5d1c80d\",\"type\":\"stock_entry_created\",\"message\":\"Jorge Medina registró un ingreso por donacion de MAQUINA DE SOLDAR (4). Donante: Empresa local (ficticia). Observación: Donación registrada para la demo.\",\"createdAt\":\"2026-05-29T13:28:30.000Z\"},{\"id\":\"795fcd55-15df-462f-8a71-d9c331c60fea\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de CODOS TERMOFUCION DE 20 (2 unidad) para Lucía Gutiérrez. Observación: Práctica de taller.\",\"createdAt\":\"2026-05-29T13:23:28.000Z\"},{\"id\":\"6d1638bc-6c1a-4c5b-96ca-b03602aba416\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó BOLSA DE CLAVO 9X25 (CO-025) en Pañol.\",\"createdAt\":\"2026-05-25T20:50:25.000Z\"},{\"id\":\"986aca1d-6f26-457f-b559-703544ee7845\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó ROTOPERCUTOR (HE-066) en Pañol.\",\"createdAt\":\"2026-05-25T20:48:45.000Z\"},{\"id\":\"7cc914d3-db33-4964-b96a-cabb6e86c75e\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Kit Arduino Uno (EL-004) en Laboratorio de electrónica.\",\"createdAt\":\"2026-05-25T20:42:47.000Z\"},{\"id\":\"a9b85d2e-006d-4a99-b22b-88ed112ceb6d\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CODOS DE 110 CON DERIVACION DE 63 (IS-018) en Pañol.\",\"createdAt\":\"2026-05-25T20:41:10.000Z\"},{\"id\":\"e635af89-3606-4e36-8129-f2100c43b575\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó JUEGO DE COMPRECIMETRO (IM-008) en Pañol.\",\"createdAt\":\"2026-05-25T20:40:24.000Z\"},{\"id\":\"a5e602e5-aab4-4e50-9dc2-9e4bd1d7c2b0\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CURVAS 110 A 45º (IS-032) en Pañol.\",\"createdAt\":\"2026-05-25T20:40:24.000Z\"},{\"id\":\"92e53ed9-5437-4a53-ba3c-a951ab680ff5\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CUPLAS CON INSERTO DE 20 (IS-025) en Pañol.\",\"createdAt\":\"2026-05-25T20:40:17.000Z\"},{\"id\":\"5948dafa-0868-4101-95ea-d739c10d0486\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó JUEGO DE BROCA MADERA PLANA DE 6 UNIDADES (HM-040) en Pañol.\",\"createdAt\":\"2026-05-25T20:37:47.000Z\"},{\"id\":\"3374b6c9-5209-43d9-892e-2b3f45b8fe4a\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó SERRUCHOS (HM-015) en Pañol.\",\"createdAt\":\"2026-05-25T20:35:23.000Z\"},{\"id\":\"8ce4d3c8-dc0c-4e0d-8e92-3740f94fd51b\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó LLAVES DE PASO DE 20 FUSION (IS-035) en Pañol.\",\"createdAt\":\"2026-05-25T20:34:27.000Z\"},{\"id\":\"b92e18e9-39dc-4760-aa99-55cdf70ce6e0\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó ROLLOS DE TEFLON (IS-039) en Pañol.\",\"createdAt\":\"2026-05-25T20:30:31.000Z\"},{\"id\":\"5618a62f-3331-4949-956d-a02dd86116a8\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó RULETA DE 5 METROS (HM-028) en Pañol.\",\"createdAt\":\"2026-05-25T20:28:22.000Z\"},{\"id\":\"7b7636de-763c-4f86-a2b8-a5a7b2b2f6b9\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó AMOLADORAS (HE-014) en Pañol.\",\"createdAt\":\"2026-05-25T20:25:08.000Z\"},{\"id\":\"19c05585-20e6-4c69-9aaa-77d3088c2f98\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CODOS DE 1\\\"  IPS (IS-015) en Pañol.\",\"createdAt\":\"2026-05-25T20:25:07.000Z\"},{\"id\":\"7b825467-0e3b-471a-bd0b-b814f3532f9e\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CAJA DE GAFAS (SG-007) en Pañol.\",\"createdAt\":\"2026-05-25T20:24:10.000Z\"},{\"id\":\"ec325c6d-c3d6-47f7-97bb-a5889a0481dc\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó TORNILLOS 4X30 (CO-014) en Pañol.\",\"createdAt\":\"2026-05-25T20:23:06.000Z\"},{\"id\":\"69441d9e-2d39-4c0a-bbba-666e181bdd48\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó FALSA ESCUADRA (HM-024) en Pañol.\",\"createdAt\":\"2026-05-25T20:14:14.000Z\"},{\"id\":\"283bd397-c132-452d-8f9c-bacb5d569b52\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CAÑOS DE 3/4 IPS (IS-008) en Pañol.\",\"createdAt\":\"2026-05-25T20:12:50.000Z\"},{\"id\":\"8eed3f04-87e2-4952-8540-fe24aa85afc7\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó DISCO FLAG (CO-012) en Pañol.\",\"createdAt\":\"2026-05-25T20:06:31.000Z\"},{\"id\":\"3d3da26d-629c-451f-8c39-b11e0fa69dc1\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Osciloscopio digital 2 canales (EL-005) en Laboratorio de electrónica.\",\"createdAt\":\"2026-05-25T20:04:48.000Z\"},{\"id\":\"c57b5085-1ec1-4985-9281-2fa3139d6d5f\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó TALADRO DE PERCUCION 650W ( BOSH) (HE-015) en Pañol.\",\"createdAt\":\"2026-05-25T20:03:13.000Z\"},{\"id\":\"c9ab2f27-1f41-4fd6-a9f4-cc6bc4c56c2e\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó TAPONES DE 25 (IS-045) en Pañol.\",\"createdAt\":\"2026-05-25T20:02:37.000Z\"},{\"id\":\"2723340f-7217-4f57-9a1b-f4a4348f7e59\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Llave francesa 10\\\" (HM-006) en Estantería A1.\",\"createdAt\":\"2026-05-25T20:00:21.000Z\"},{\"id\":\"9da7af3c-f79f-4857-afa9-b800a62fafff\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CAÑOS DE 040 (IS-005) en Pañol.\",\"createdAt\":\"2026-05-25T19:54:47.000Z\"},{\"id\":\"4ce629b3-f027-4442-a865-8310a433f62a\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó PINZAS DE 7\\\" (HM-034) en Pañol.\",\"createdAt\":\"2026-05-25T19:52:37.000Z\"},{\"id\":\"5b5c0575-e3c8-4e80-811e-cfd1e5747cb2\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó DISCO ESMERIL GRANO 60 5\\\" DE 5 UNIDADES (CO-038) en Pañol.\",\"createdAt\":\"2026-05-25T19:49:11.000Z\"},{\"id\":\"61b3f290-d45b-4165-abc8-4739670ac906\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó TERRAJA DE 3/4 IPS (IS-048) en Pañol.\",\"createdAt\":\"2026-05-25T19:37:40.000Z\"},{\"id\":\"039c5ef3-49c4-443d-85d5-878897c7b282\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó LIMAS (HM-032) en Pañol.\",\"createdAt\":\"2026-05-25T19:36:35.000Z\"},{\"id\":\"ae18cba3-0027-4a82-9490-e0a1a8f465ae\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Cinta aisladora (CO-003) en Depósito de consumibles.\",\"createdAt\":\"2026-05-25T19:33:40.000Z\"},{\"id\":\"2e122a12-a25b-4e55-88ae-02110af96c06\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó LLAVES ESFERICAS DE 1/2 (IS-036) en Pañol.\",\"createdAt\":\"2026-05-25T19:28:28.000Z\"},{\"id\":\"e640c83f-82ea-4566-b2fb-47283ed82343\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó GAFAS (CAJAS ABIERTAS) (SG-035) en Pañol.\",\"createdAt\":\"2026-05-25T19:27:34.000Z\"},{\"id\":\"444f7843-bc8f-4eae-80d4-d35f93c62c22\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó BOLSA DE FROMONES DE MADERA (CO-028) en Pañol.\",\"createdAt\":\"2026-05-25T19:26:28.000Z\"},{\"id\":\"6d3c6095-ce41-4575-9745-340ea2c62a3b\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó GUANTES DE CUERO MANGA LARGA (EN BOLSA) (SG-021) en Pañol.\",\"createdAt\":\"2026-05-25T19:14:37.000Z\"},{\"id\":\"0078eb71-08eb-47aa-85b5-b0e64198ffdc\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Taladro percutor 650 W (HE-001) en Estantería A2.\",\"createdAt\":\"2026-05-25T19:08:23.000Z\"},{\"id\":\"2c82c56e-39e9-4959-940f-de56aa8873b6\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Fuente de laboratorio 0-30 V (EL-002) en Laboratorio de electrónica.\",\"createdAt\":\"2026-05-25T19:02:45.000Z\"},{\"id\":\"9970bfd3-cb91-4ed9-9cd8-24f48dc400e8\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó DELANTALES NUEVOS (SG-024) en Pañol.\",\"createdAt\":\"2026-05-25T19:02:28.000Z\"},{\"id\":\"f595b793-13eb-4d57-beb4-481559a5940b\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó JUEGO DE LLAVES EXAGONALES DE 9 LLAVES (HM-025) en Pañol.\",\"createdAt\":\"2026-05-25T19:00:15.000Z\"},{\"id\":\"051db2bc-89c7-48d5-a14a-3a0b9100e697\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó SIERRA COPA BI-METALICA DE 25MM (HM-050) en Pañol.\",\"createdAt\":\"2026-05-25T18:58:07.000Z\"},{\"id\":\"a66b474f-0a37-457c-99e8-d97a953d11c5\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Atornillador inalámbrico 12 V (HE-003) en Estantería A2.\",\"createdAt\":\"2026-05-25T18:56:25.000Z\"},{\"id\":\"32075474-94e0-4630-a858-d21e3573f0e0\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó SELLADOR CHICOS DE HIDRO3 (IS-040) en Pañol.\",\"createdAt\":\"2026-05-25T18:53:32.000Z\"},{\"id\":\"59f3fc28-9e6e-40eb-baa4-0159c5346ba7\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó BASTAGOS PARA GRIFO (IS-001) en Pañol.\",\"createdAt\":\"2026-05-25T18:52:43.000Z\"},{\"id\":\"d8393da3-a207-4941-961b-b437f6b65cce\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó FORMON SET 4 PCS MANGO DE PLASTICO (HM-018) en Pañol.\",\"createdAt\":\"2026-05-25T18:51:33.000Z\"},{\"id\":\"2cd36a37-85a2-4e4f-a6e7-e844b5301175\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó JUEGO DE IMPACT DRIVER 14 PCS PARA AFLOJAR TORNILLOS (HM-054) en Pañol.\",\"createdAt\":\"2026-05-25T18:48:25.000Z\"},{\"id\":\"03d88602-d114-4ec5-b1b3-7839aa0d772f\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó GUANTES ANTICORTES (SG-010) en Pañol.\",\"createdAt\":\"2026-05-25T18:47:15.000Z\"},{\"id\":\"3a7ef906-ca47-4219-bb46-c0e853671e6d\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CODOS CON INSERT H DE 3/4 X 1/2 IPS (IS-011) en Pañol.\",\"createdAt\":\"2026-05-25T18:40:03.000Z\"},{\"id\":\"256762fd-6ae8-4d7b-8f26-60eba01b591a\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Electrodo 2,5 mm (kg) (CO-002) en Depósito de consumibles.\",\"createdAt\":\"2026-05-25T18:38:39.000Z\"},{\"id\":\"de595dbd-8f6a-4baa-bbd8-1e91109cd7f0\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó PROTECTORES AUDITIVOS (SG-026) en Pañol.\",\"createdAt\":\"2026-05-25T18:36:43.000Z\"},{\"id\":\"ae2b3f27-7987-4c4b-bab4-2192d9a2a121\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó MASCARAS FACIALES (SG-037) en Pañol.\",\"createdAt\":\"2026-05-25T18:35:42.000Z\"},{\"id\":\"866bccf1-c802-4b8a-975f-15cbf29fdd7d\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Calibre digital 150 mm (IM-002) en Estantería A1.\",\"createdAt\":\"2026-05-25T18:31:29.000Z\"},{\"id\":\"658f1926-d655-4e93-a685-1e94be242aa2\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CODOS DE 1\\\" IPS (IS-016) en Pañol.\",\"createdAt\":\"2026-05-25T18:22:08.000Z\"},{\"id\":\"fa5b8b6f-006a-4f80-b345-9c19a109a842\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó TORNILLOS 4,5X45 (CO-013) en Pañol.\",\"createdAt\":\"2026-05-25T18:20:05.000Z\"},{\"id\":\"c9cd2a0a-97ff-47f8-b6d2-42624c0795ff\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó GUANTES BAQUETA (SG-031) en Pañol.\",\"createdAt\":\"2026-05-25T18:13:18.000Z\"},{\"id\":\"8bb2cc6f-3363-48cc-bba0-22cecf33a23d\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Pinza universal 8\\\" (HM-005) en Estantería A1.\",\"createdAt\":\"2026-05-25T18:09:20.000Z\"},{\"id\":\"e2670fcf-1da2-4987-8f64-ec1f5690fe38\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CUPLAS DE 110 (IS-028) en Pañol.\",\"createdAt\":\"2026-05-25T18:06:20.000Z\"},{\"id\":\"51c9c994-369a-4310-88d7-99e46ab520be\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Mecha HSS 6 mm (CO-006) en Depósito de consumibles.\",\"createdAt\":\"2026-05-25T18:04:43.000Z\"},{\"id\":\"ed7b7ed2-e012-4300-8dd7-6ff8c06b5325\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó GUANTES PARA SOLDAR ( INDURA) (SG-030) en Pañol.\",\"createdAt\":\"2026-05-25T18:03:17.000Z\"},{\"id\":\"ee459c5c-c1d6-418a-a745-1e9575f1e79c\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Notebook 14\\\" (IN-001) en Sala de informática.\",\"createdAt\":\"2026-05-25T17:59:49.000Z\"},{\"id\":\"7c139c62-149e-4824-99db-7bf5e949d04b\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó BOLSA DE CLAVO DE 1 1/2\\\" (CO-029) en Pañol.\",\"createdAt\":\"2026-05-25T17:59:29.000Z\"},{\"id\":\"a451bb33-f596-49e5-8f6c-159f2d5cda53\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Delantal de cuero (SG-005) en Armario de seguridad.\",\"createdAt\":\"2026-05-25T17:56:37.000Z\"},{\"id\":\"3eb441af-73af-4499-9597-42a272e8d5a6\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó MASCARAS DE SOLDAR (SG-033) en Pañol.\",\"createdAt\":\"2026-05-25T17:53:20.000Z\"},{\"id\":\"753404ba-f0b1-40b2-b62e-bfb6ea3fba37\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó MASCARAS DE SOLDAR (SG-036) en Pañol.\",\"createdAt\":\"2026-05-25T17:52:41.000Z\"},{\"id\":\"010639d0-0c98-41fd-a8df-e61fb85eeeab\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó BARRETAS (HM-029) en Pañol.\",\"createdAt\":\"2026-05-25T17:51:24.000Z\"},{\"id\":\"76ab493d-769c-49d1-89d3-5361b6e7216a\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó GUANTES DE CUERO MANGA LARGA EN BOLSA (SG-011) en Pañol.\",\"createdAt\":\"2026-05-25T17:46:16.000Z\"},{\"id\":\"9ef63927-7576-4cf6-b8a6-1452caa5b05b\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Careta de soldar fotosensible (SG-004) en Armario de seguridad.\",\"createdAt\":\"2026-05-25T17:40:36.000Z\"},{\"id\":\"de3a5f53-fdbb-42c7-b7a7-b1c34bb397dc\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CODOS A 90º  A 110 (IS-009) en Pañol.\",\"createdAt\":\"2026-05-25T17:40:01.000Z\"},{\"id\":\"9314fce3-d29d-439c-88dd-a5defec0c877\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó PINZAS PARA PORTA ELECTRODOS (HM-027) en Pañol.\",\"createdAt\":\"2026-05-25T17:39:21.000Z\"},{\"id\":\"59e6abda-85ae-4445-92ef-6f3e46565d60\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó DISCO DE DEBASTE 115.0 X 6.4 X 22.2MM CAJA DE 10 UNIDADES (CO-040) en Pañol.\",\"createdAt\":\"2026-05-25T17:37:14.000Z\"},{\"id\":\"cd61769d-b8ca-4a39-835a-66776d176fb9\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó PUNTO DE PRUEBA CON VOLTIMETRO (IM-007) en Pañol.\",\"createdAt\":\"2026-05-25T17:33:23.000Z\"},{\"id\":\"e3817fed-d1cc-4c00-9ae2-3364efca0978\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Lija al agua grano 220 (CO-005) en Depósito de consumibles.\",\"createdAt\":\"2026-05-25T17:23:42.000Z\"},{\"id\":\"49f61bec-bba4-4d12-a100-c5ce5d675833\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó UNION DOBLE DE 1/2\\\" IPS (IS-050) en Pañol.\",\"createdAt\":\"2026-05-25T17:21:42.000Z\"},{\"id\":\"b6da7e68-47c7-4844-8aee-a7171de272d7\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó TERRAJA DE 1/2 IPS (IS-047) en Pañol.\",\"createdAt\":\"2026-05-25T17:21:39.000Z\"},{\"id\":\"bb69d10c-0b24-417d-9650-dacea8a1ae3a\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Pistola de calor (HE-005) en Estantería A2.\",\"createdAt\":\"2026-05-25T17:21:27.000Z\"},{\"id\":\"72974803-40bc-4fbc-80e0-5aed7196d540\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Amoladora angular 115 mm (HE-002) en Estantería A2.\",\"createdAt\":\"2026-05-25T17:21:24.000Z\"},{\"id\":\"a9f90871-2736-4025-8d20-efb817c6e90f\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CAJA DE TORNILLOS AUTOPERFORANTES (CO-009) en Pañol.\",\"createdAt\":\"2026-05-25T17:20:25.000Z\"},{\"id\":\"865539b9-44dd-42a0-b4f9-fe69b43d1546\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó PISTOLA PUESTA A PUNTO (IM-006) en Pañol.\",\"createdAt\":\"2026-05-25T17:18:22.000Z\"},{\"id\":\"65b805e6-2814-4eaa-a440-7cf7d828c9a9\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó SIERRA COPA BI-METALICA DE 22MM (HM-051) en Pañol.\",\"createdAt\":\"2026-05-25T17:15:08.000Z\"},{\"id\":\"5b85db85-eb8e-4072-86eb-06c490919c6e\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Soldadora inverter 200 A (HE-004) en Estantería A2.\",\"createdAt\":\"2026-05-25T17:11:26.000Z\"},{\"id\":\"7739d695-d965-4830-8e91-ccf7bed2df1d\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó ESCOFINA (HM-031) en Pañol.\",\"createdAt\":\"2026-05-25T17:10:33.000Z\"},{\"id\":\"eaee4dab-ce64-47bf-9d57-68f816e6b7fb\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó DISCOS DE DESGASTE (CO-019) en Pañol.\",\"createdAt\":\"2026-05-25T17:10:12.000Z\"},{\"id\":\"f7e2dd65-4f21-48af-a1a1-efc46b5cc5c6\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó SIERRA COPA BI-METALICA DE 16MM (HM-047) en Pañol.\",\"createdAt\":\"2026-05-25T17:09:04.000Z\"},{\"id\":\"77038e46-fd5a-4806-9c89-af3399047451\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó MECHAS DE 5 MILIMETROS (CO-021) en Pañol.\",\"createdAt\":\"2026-05-25T17:08:17.000Z\"},{\"id\":\"8f367026-82fa-421c-ad10-f0b50ce70890\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó BOTELLA DE AGUARRAS (CO-030) en Pañol.\",\"createdAt\":\"2026-05-25T17:07:30.000Z\"},{\"id\":\"64e9d73d-454d-45a2-95a7-7c38c2b8acc9\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó TERRAJA DE 1\\\" IPS (IS-046) en Pañol.\",\"createdAt\":\"2026-05-25T17:06:38.000Z\"},{\"id\":\"693e4fb6-6a93-40c7-a261-98bf14dffd02\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Estaño 60/40 (rollo 250 g) (CO-004) en Depósito de consumibles.\",\"createdAt\":\"2026-05-25T17:05:41.000Z\"},{\"id\":\"eb284360-544c-4162-876f-92015e326258\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Pendrive 32 GB (IN-004) en Sala de informática.\",\"createdAt\":\"2026-05-25T17:04:02.000Z\"},{\"id\":\"ed6f1e22-ac98-4080-842a-d869f32c6a14\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CAJA DE TALADRO PERCUTOR (HM-030) en Pañol.\",\"createdAt\":\"2026-05-25T17:00:31.000Z\"},{\"id\":\"58c9b25c-b747-4e5f-bc03-0bee221540e7\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó BOLSA DE CLAVOS DE 2\\\" (CO-027) en Pañol.\",\"createdAt\":\"2026-05-25T17:00:27.000Z\"},{\"id\":\"7a963071-9360-4e5c-9c90-632aeb747852\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó PARES DE GUANTES DIELECTRICOS (SG-029) en Pañol.\",\"createdAt\":\"2026-05-25T16:52:45.000Z\"},{\"id\":\"768b28c0-c827-408e-b525-e9cb95b5145a\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Pinza amperométrica (IM-003) en Laboratorio de electrónica.\",\"createdAt\":\"2026-05-25T16:45:30.000Z\"},{\"id\":\"791918e0-cb6a-4e5c-a866-75a09bff4f5f\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó DISCO ESMERILL (CO-008) en Pañol.\",\"createdAt\":\"2026-05-25T16:44:13.000Z\"},{\"id\":\"ef645276-6e19-4d29-90d6-860eb12eda55\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CUPLAS DE 040 (IS-026) en Pañol.\",\"createdAt\":\"2026-05-25T16:33:18.000Z\"},{\"id\":\"36450cf1-255a-4938-bd9e-f46a22aac868\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Arco de sierra (HM-007) en Estantería A1.\",\"createdAt\":\"2026-05-25T16:29:22.000Z\"},{\"id\":\"4e01066a-1d2d-4fc5-b8eb-13ada14da3e2\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó GUBIAS REFORZADAS (JUEGO) (HM-019) en Pañol.\",\"createdAt\":\"2026-05-25T16:22:40.000Z\"},{\"id\":\"8b995878-89e0-4dc7-97e1-46b6c82da723\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó DELANTALES SIMPLES (SG-034) en Pañol.\",\"createdAt\":\"2026-05-25T16:22:26.000Z\"},{\"id\":\"f0107db1-662b-43ad-990e-39e2a2250090\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó DISCOS PARA LA MASCARA SENCITIVA (CO-020) en Pañol.\",\"createdAt\":\"2026-05-25T16:18:13.000Z\"},{\"id\":\"31ed3fb1-1cff-4cfb-913e-e7655945505d\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Nivel de burbuja 60 cm (IM-005) en Estantería A1.\",\"createdAt\":\"2026-05-25T16:17:32.000Z\"},{\"id\":\"1cecbc92-0423-4960-9eef-5a6a3e80aa21\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó SERRUCHOS (HM-037) en Pañol.\",\"createdAt\":\"2026-05-25T16:13:40.000Z\"},{\"id\":\"c688ca0e-3c3c-461b-a87d-bbbdec62a85e\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó TALADRO (HE-010) en Pañol.\",\"createdAt\":\"2026-05-25T16:08:50.000Z\"},{\"id\":\"2bddeb23-6619-40ae-9cf8-708381a78d0c\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Guantes de descarne (SG-002) en Armario de seguridad.\",\"createdAt\":\"2026-05-25T16:07:34.000Z\"},{\"id\":\"e43515de-a77d-4bd8-92e6-c797d12ae7a8\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó SIERRA COPA BI-METALICA DE 76MM (HM-042) en Pañol.\",\"createdAt\":\"2026-05-25T16:06:49.000Z\"},{\"id\":\"cd087e92-ad38-427f-b269-5842e7bc693a\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó SIERRA COPA BI-METALICA DE 19MM (HM-048) en Pañol.\",\"createdAt\":\"2026-05-25T16:05:05.000Z\"},{\"id\":\"4b544cb0-2e75-4181-8048-2e5daba5d80c\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CODOS DE 1/2 IPS (IS-017) en Pañol.\",\"createdAt\":\"2026-05-25T16:03:09.000Z\"},{\"id\":\"48cafdb6-8d88-43f1-9c63-346e34ce6d56\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó TENAZAS (HM-038) en Pañol.\",\"createdAt\":\"2026-05-25T15:57:41.000Z\"},{\"id\":\"754ddd74-6288-4373-bd6e-6be88644d7d5\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Soldador tipo lápiz 40 W (EL-003) en Laboratorio de electrónica.\",\"createdAt\":\"2026-05-25T15:56:46.000Z\"},{\"id\":\"c5cea457-32b0-42db-9750-ab8cc8a5991f\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó LUBRICANTE PARA CAÑOS PBC (IS-038) en Pañol.\",\"createdAt\":\"2026-05-25T15:51:30.000Z\"},{\"id\":\"f5320eab-0e45-4d8e-b1ff-9142ea24b6bf\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CAJA DE ELECTRODOS (CO-017) en Pañol.\",\"createdAt\":\"2026-05-25T15:51:10.000Z\"},{\"id\":\"9f6d8135-346e-49f2-acfe-304ed003362d\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Cable HDMI 3 m (IN-005) en Sala de informática.\",\"createdAt\":\"2026-05-25T15:45:03.000Z\"},{\"id\":\"e1ac3109-3582-4c6d-b0e5-bf2db383fb4a\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó TALADRO DE MADERA PLANA (JUEGOS) (HM-023) en Pañol.\",\"createdAt\":\"2026-05-25T15:44:01.000Z\"},{\"id\":\"fb0f66c9-1147-4960-ae2b-c4b7a398f597\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CUPLAS DE 1 \\\" IPS (IS-027) en Pañol.\",\"createdAt\":\"2026-05-25T15:43:19.000Z\"},{\"id\":\"fe76d25f-5d91-450d-96b1-9a35853171f2\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó TORNILLOS (CO-033) en Pañol.\",\"createdAt\":\"2026-05-25T15:40:42.000Z\"},{\"id\":\"726e2fde-e4a5-44fe-bfdb-3c4af7b5ca15\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó GAFAS (SG-028) en Pañol.\",\"createdAt\":\"2026-05-25T15:36:44.000Z\"},{\"id\":\"ee118d3a-357f-41a5-9414-98c2144011b7\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Disco de corte 115 mm (CO-001) en Depósito de consumibles.\",\"createdAt\":\"2026-05-25T15:32:38.000Z\"},{\"id\":\"e1c19389-c7ed-4bad-924c-a7bd1efe69c3\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó BOLSA DE REMACHE (CO-016) en Pañol.\",\"createdAt\":\"2026-05-25T15:30:09.000Z\"},{\"id\":\"fd9d8550-6e16-4710-93c6-081c445d6184\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó DELANTALES DE SOLDADOR (SG-009) en Pañol.\",\"createdAt\":\"2026-05-25T15:27:12.000Z\"},{\"id\":\"88e1185e-b20d-4f0e-951b-a48c698a248f\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CODOS CON INSERTO DE 1/2 IPS (IS-012) en Pañol.\",\"createdAt\":\"2026-05-25T15:26:04.000Z\"},{\"id\":\"aa223fcc-477f-4bc1-816c-62bb1b8da9ac\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CODOS TERMUFUCIN DE 25 (IS-022) en Pañol.\",\"createdAt\":\"2026-05-25T15:22:14.000Z\"},{\"id\":\"9e9b86a3-d87f-4510-8f56-8eac5ac07646\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó DISCO ESMERIL CON RESPALDO SISTEMA VELCRO GRANO 80 DE 5\\\" DE 5 UNIDADES C/U (CO-037) en Pañol.\",\"createdAt\":\"2026-05-25T15:22:10.000Z\"},{\"id\":\"5e1e9e3f-dc01-4b5d-968b-29cb1a9f4d49\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó DELANTALES USADOS (SG-025) en Pañol.\",\"createdAt\":\"2026-05-25T15:19:29.000Z\"},{\"id\":\"d5df6d0c-cd98-49a8-aba0-bd34e224524a\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CODOS DE 040 A 90º HH (IS-014) en Pañol.\",\"createdAt\":\"2026-05-25T15:16:06.000Z\"},{\"id\":\"b4e48420-0fe9-425c-8162-822677027dfb\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó SOPORTE PARA SIERRA COPA BIMETALICO HSS (HM-052) en Pañol.\",\"createdAt\":\"2026-05-25T15:15:09.000Z\"},{\"id\":\"59d045cf-0373-44e8-9ab3-da7dbd76d45c\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó TALADRO DE PERCUCION (HE-011) en Pañol.\",\"createdAt\":\"2026-05-25T15:13:02.000Z\"},{\"id\":\"47156fa2-1083-45e8-8250-c4b3c5f37ab7\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CAJA DE GUBIAS REFORZADAS (HM-008) en Pañol.\",\"createdAt\":\"2026-05-25T15:12:04.000Z\"},{\"id\":\"08ef5ce2-8942-419f-9a1b-034f5ffe0181\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó HOJAS DE SIERRA (CO-032) en Pañol.\",\"createdAt\":\"2026-05-25T15:10:34.000Z\"},{\"id\":\"e879610f-96aa-400f-b1d1-7bd00d75d816\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Antiparras de seguridad (SG-001) en Armario de seguridad.\",\"createdAt\":\"2026-05-25T15:00:33.000Z\"},{\"id\":\"b7fc6896-458b-43fc-ade3-935468069504\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó LLAVES ESFERICAS DE 3/4 (IS-037) en Pañol.\",\"createdAt\":\"2026-05-25T15:00:29.000Z\"},{\"id\":\"5dfdc54e-f4c5-4335-9291-57e92c66d734\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó MASCARAS FACIALES ( 2 SIN PLASTICO) (SG-032) en Pañol.\",\"createdAt\":\"2026-05-25T14:59:19.000Z\"},{\"id\":\"23c0845a-9b6d-4f81-bc94-3552ac9eeb2a\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó T DE 3/4 IPS (IS-044) en Pañol.\",\"createdAt\":\"2026-05-25T14:58:36.000Z\"},{\"id\":\"608aac2c-7d13-4d18-8b6f-b3cdc3be3a25\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CAJA PROTECTORES AUDITIVOS DE CARPINTERIA (SG-008) en Pañol.\",\"createdAt\":\"2026-05-25T14:58:11.000Z\"},{\"id\":\"c8484447-0520-4f34-bd48-c268a105d3a2\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Cinta métrica 5 m (IM-004) en Estantería A1.\",\"createdAt\":\"2026-05-25T14:50:31.000Z\"},{\"id\":\"0c3f3bff-9ec8-4c5c-bee4-2dddbfdcdb96\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CODOS DE 63 A 90º HH (IS-020) en Pañol.\",\"createdAt\":\"2026-05-25T14:50:12.000Z\"},{\"id\":\"48e02f39-967f-4b1e-8026-7d5fcd183682\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Multímetro digital (IM-001) en Laboratorio de electrónica.\",\"createdAt\":\"2026-05-25T14:43:28.000Z\"},{\"id\":\"714691d2-733f-4ff9-9fcf-9f18912b5391\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó AMOLADORA (HE-007) en Pañol.\",\"createdAt\":\"2026-05-25T14:41:24.000Z\"},{\"id\":\"f367115d-258c-4fc5-ac12-3ddea669276a\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Destornillador plano 6 mm (HM-002) en Estantería A1.\",\"createdAt\":\"2026-05-25T14:40:17.000Z\"},{\"id\":\"866e0c2a-fdd3-454c-bbae-31e67d4d0d7f\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CODOS CON INSERTO DE 20 (IS-013) en Pañol.\",\"createdAt\":\"2026-05-25T14:39:05.000Z\"},{\"id\":\"40e33c8d-d831-4788-9425-08070041cbfd\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CODOS BASE DE 110 (IS-010) en Pañol.\",\"createdAt\":\"2026-05-25T14:38:02.000Z\"},{\"id\":\"b42cf680-056c-49e5-8048-457d7eaa5016\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó T DE 3/4 A 1/2 IPS (IS-043) en Pañol.\",\"createdAt\":\"2026-05-25T14:28:35.000Z\"},{\"id\":\"c066f229-9287-4da9-8a90-80b6ccd8ae49\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó DISCOS DE DESGASTE (HE-008) en Pañol.\",\"createdAt\":\"2026-05-25T14:25:32.000Z\"},{\"id\":\"17dcdf96-8bcc-4ae0-b6e5-39b123c7e548\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó SOLDADOR INSTANTANEO (CAJA) (HE-009) en Pañol.\",\"createdAt\":\"2026-05-25T14:19:48.000Z\"},{\"id\":\"2549b86c-f0a1-41c8-9eaf-63d5294ff47d\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó BUJES DE 3/4 A MEDIA IPS (IS-004) en Pañol.\",\"createdAt\":\"2026-05-25T14:13:46.000Z\"},{\"id\":\"97b43a3d-e093-4bc9-b86a-f6b3ef544dd9\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CAJAS DE PROTECTOR OPTIME (SG-015) en Pañol.\",\"createdAt\":\"2026-05-25T14:12:26.000Z\"},{\"id\":\"b76e8b38-c2c0-4188-b18c-0bf8f9b0b4a8\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CURVAS A 45º DE 63HH (IS-033) en Pañol.\",\"createdAt\":\"2026-05-25T14:12:25.000Z\"},{\"id\":\"91d90b91-0100-4b2d-82b0-68e9d5808f22\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó SERRUCHOS (HM-021) en Pañol.\",\"createdAt\":\"2026-05-25T14:11:47.000Z\"},{\"id\":\"38cf2b34-4128-4a16-96d7-d8cf8a6a2c81\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó RULETAS DE 3 METROS (HM-036) en Pañol.\",\"createdAt\":\"2026-05-25T14:10:39.000Z\"},{\"id\":\"2ae7ed34-f12e-4577-b1ad-c80238e38a7b\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó SIERRA COPA BI-METALICA DE 51MM (HM-045) en Pañol.\",\"createdAt\":\"2026-05-25T14:07:02.000Z\"},{\"id\":\"d4709c1b-8432-4009-8c52-f67e7cfd9153\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CAÑOS DE 110 (IS-007) en Pañol.\",\"createdAt\":\"2026-05-25T14:05:49.000Z\"},{\"id\":\"5d0fb13b-719a-407f-87f2-f988ba77df77\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó TORNILLOS AUTOPERFORANTES (CO-015) en Pañol.\",\"createdAt\":\"2026-05-25T14:04:07.000Z\"},{\"id\":\"4653e7fd-a7cb-45f6-b7fb-b826f5521576\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Protoboard 830 puntos (EL-001) en Laboratorio de electrónica.\",\"createdAt\":\"2026-05-25T14:01:44.000Z\"},{\"id\":\"0141c1ba-ce47-4ffc-9bfc-05970ac2f497\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó SIERRA COPA BI-METALICA DE 60MM (HM-044) en Pañol.\",\"createdAt\":\"2026-05-25T13:58:01.000Z\"},{\"id\":\"29a09f09-c08a-4254-8b06-e9fe4aaca4ef\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó SIERRA COPA (CAJAS) (HM-016) en Pañol.\",\"createdAt\":\"2026-05-25T13:53:27.000Z\"},{\"id\":\"7b8a6179-517c-421d-9b1c-dc49183e7795\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Mouse USB (IN-003) en Sala de informática.\",\"createdAt\":\"2026-05-25T13:50:01.000Z\"},{\"id\":\"4fca8412-6e23-4f6a-9b65-06b29df39699\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó COLA FORTEX DE 1KG (CO-031) en Pañol.\",\"createdAt\":\"2026-05-25T13:47:32.000Z\"},{\"id\":\"52270e42-4bcd-49a1-9888-b59d0cdba47f\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CAJA DE TRAPOS (CO-007) en Pañol.\",\"createdAt\":\"2026-05-25T13:44:08.000Z\"},{\"id\":\"c8ea973d-7436-49fc-9e1b-c3f5d05af198\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó UNION DOBLE DE 3/4\\\" IPS (IS-051) en Pañol.\",\"createdAt\":\"2026-05-25T13:42:43.000Z\"},{\"id\":\"abea93a6-49c1-4473-8cb6-e49f9272d370\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó MECHA BROCA (SOPORTE) (HM-013) en Pañol.\",\"createdAt\":\"2026-05-25T13:42:21.000Z\"},{\"id\":\"bbdb5b6a-4771-4347-b861-765982ffbcf9\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó DISCO DE DEBASTE 115.0 X 6.4 X 22.2MM CAJA ABIERTA 6 UNIDADES (CO-041) en Pañol.\",\"createdAt\":\"2026-05-25T13:39:15.000Z\"},{\"id\":\"cf1ceab4-f6de-4edc-a248-580ebfd27980\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Destornillador Phillips PH2 (HM-003) en Estantería A1.\",\"createdAt\":\"2026-05-25T13:37:18.000Z\"},{\"id\":\"3e3c0a57-ee4e-45ee-8a3a-65f0e4494d30\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó PINZAS PARA MAS (HM-026) en Pañol.\",\"createdAt\":\"2026-05-25T13:35:20.000Z\"},{\"id\":\"7c525719-a95b-496b-a4fc-d192f2e260e4\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó MARTILLOS (HM-033) en Pañol.\",\"createdAt\":\"2026-05-25T13:34:36.000Z\"},{\"id\":\"9d6a844d-cd3d-49d5-822b-048db4bcbd80\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó FORMON SET 4PS (HM-012) en Pañol.\",\"createdAt\":\"2026-05-25T13:22:14.000Z\"},{\"id\":\"e5afaefa-9a90-44e3-ae0d-4a68573e68c9\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CODOS TERMOFUCION DE 20 (IS-021) en Pañol.\",\"createdAt\":\"2026-05-25T13:22:13.000Z\"},{\"id\":\"3d8d4bfb-8e2d-4fbb-aada-360bd887c815\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó SIERRAS COPO PARA MADERA (CAJA) (HM-020) en Pañol.\",\"createdAt\":\"2026-05-25T13:19:46.000Z\"},{\"id\":\"76c18f2b-397e-4779-9ed5-804c64cdad1c\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó BOLSAS DE CAÑAMO (IS-002) en Pañol.\",\"createdAt\":\"2026-05-25T13:17:44.000Z\"},{\"id\":\"be3d20e1-25ac-4fa0-91c5-806b435ce2d1\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó SIERRA COPA BI-METALICA DE 32MM (HM-049) en Pañol.\",\"createdAt\":\"2026-05-25T13:15:06.000Z\"},{\"id\":\"e3ca3fc5-c4d0-44dd-9205-7c734c47dec6\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó MASCARAS DE SOLDAR FOTOSENCIBLES (SG-027) en Pañol.\",\"createdAt\":\"2026-05-25T13:13:16.000Z\"},{\"id\":\"1a025c23-3805-40c7-9272-2cc6fd374766\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó BARNIZ MURELLA 1 LITRO (CO-024) en Pañol.\",\"createdAt\":\"2026-05-25T13:11:23.000Z\"},{\"id\":\"e660852c-c869-487c-8a3a-7299f3759d89\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó GUANTES VAQUETA (SG-023) en Pañol.\",\"createdAt\":\"2026-05-25T13:10:39.000Z\"},{\"id\":\"c65130c4-c026-44fe-84a4-dca0190c5edb\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CUPLAS 1/2 IPS (IS-023) en Pañol.\",\"createdAt\":\"2026-05-25T13:08:15.000Z\"},{\"id\":\"38f6ef18-aea4-4d17-828d-a6c5eabf6e5a\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CAJA DE HERRAMIENTAS CROSS MASTER (HM-053) en Pañol.\",\"createdAt\":\"2026-05-25T13:07:21.000Z\"},{\"id\":\"2798b296-a024-4826-895f-9c48dd0ffeaf\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CAJAS DE SIERRA COPA (HM-011) en Pañol.\",\"createdAt\":\"2026-05-25T13:06:09.000Z\"},{\"id\":\"405f0f4c-c3e9-4154-8b4d-d9285e04399f\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó DELANTALES CON CROMO (SG-038) en Pañol.\",\"createdAt\":\"2026-05-25T13:05:27.000Z\"},{\"id\":\"951d0fd9-766c-4a32-af45-6ce94d975da3\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó DISCO DE 115MM (CO-042) en Pañol.\",\"createdAt\":\"2026-05-25T13:02:16.000Z\"},{\"id\":\"45219a90-b8bc-47e1-92d6-84e0a0249bc4\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó GUANTES VAQUETA (SG-013) en Pañol.\",\"createdAt\":\"2026-05-25T13:01:18.000Z\"},{\"id\":\"2b6616c9-92e8-46f9-906f-6a43bbae2bc6\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CUPLAS DE 63 (IS-031) en Pañol.\",\"createdAt\":\"2026-05-25T13:00:23.000Z\"},{\"id\":\"d2195dd9-9cce-4117-bc27-c8a033eecd8a\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó BUJES DE 1\\\" A 3/4 IPS (IS-003) en Pañol.\",\"createdAt\":\"2026-05-25T12:59:45.000Z\"},{\"id\":\"627092b9-8c3c-4ea4-9a20-8d8a66f680e2\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó SOPORTE PARA COPA (HM-022) en Pañol.\",\"createdAt\":\"2026-05-25T12:54:49.000Z\"},{\"id\":\"91f80953-c38d-4e2b-a4fe-a6f1682e7ee5\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CODOS DE 3/4 IPS (IS-019) en Pañol.\",\"createdAt\":\"2026-05-25T12:54:11.000Z\"},{\"id\":\"d81857c2-587d-473d-9745-856f6c7c21a1\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CUPLAS DE 20 (IS-029) en Pañol.\",\"createdAt\":\"2026-05-25T12:50:21.000Z\"},{\"id\":\"404164b5-fbd2-418b-a4ca-9b9f225031ec\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó JUEGO DE GUBIAS REFORZADAS SET DE 6 TAMAÑO 7\\\" (HM-039) en Pañol.\",\"createdAt\":\"2026-05-25T12:46:46.000Z\"},{\"id\":\"cf733647-d51d-4286-9db5-c52d884915fe\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó SIERRA COPA BI-METALICA DE 102MM (HM-043) en Pañol.\",\"createdAt\":\"2026-05-25T12:42:50.000Z\"},{\"id\":\"6a811dc0-cee1-465a-9c76-1a0d6c866593\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CAÑOS DE 1\\\" IPS (IS-006) en Pañol.\",\"createdAt\":\"2026-05-25T12:41:48.000Z\"},{\"id\":\"70c88b89-6abd-4b98-905e-eb9873f28fe0\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó TALADRO INDUSTRIAL (HE-012) en Pañol.\",\"createdAt\":\"2026-05-25T12:40:03.000Z\"},{\"id\":\"43b823a1-319c-46ee-8467-1b589dd68f95\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CUPLAS DE 25 (IS-030) en Pañol.\",\"createdAt\":\"2026-05-25T12:37:22.000Z\"},{\"id\":\"bd8a81af-1e09-4b18-86b5-a842a78576b4\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó PINCELES DE 2\\\" (CO-023) en Pañol.\",\"createdAt\":\"2026-05-25T12:36:19.000Z\"},{\"id\":\"56e05a10-794a-4053-a4fe-98fade9bbfad\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó JUEGO DE FORMON DE 4 UNIDADES MANGO DE PLASTICO (HM-041) en Pañol.\",\"createdAt\":\"2026-05-25T12:35:48.000Z\"},{\"id\":\"da8d0247-fb52-42fa-96d1-2e0198e7cd70\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó T DE 1\\\" A 3/4 IPS (IS-041) en Pañol.\",\"createdAt\":\"2026-05-25T12:32:33.000Z\"},{\"id\":\"55cacb0e-16fd-4eab-9685-ebd0af5385a0\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó BOLSA DE CLAVOS DE 1\\\" (CO-026) en Pañol.\",\"createdAt\":\"2026-05-25T12:32:26.000Z\"},{\"id\":\"538b2120-827c-4501-b690-e548100580d5\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó GUANTES DE CUERO SIN BOLSA (SG-012) en Pañol.\",\"createdAt\":\"2026-05-25T12:32:17.000Z\"},{\"id\":\"124056a0-f58a-4b87-bda1-8d31cd86f270\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CUPLAS 3/4 IPS (IS-024) en Pañol.\",\"createdAt\":\"2026-05-25T12:30:16.000Z\"},{\"id\":\"fd2f70cf-7691-4566-aa9f-e934407becd3\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Proyector multimedia (IN-002) en Sala de informática.\",\"createdAt\":\"2026-05-25T12:25:50.000Z\"},{\"id\":\"7cfb3025-d3d0-40d7-8465-d52555a80664\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó TERMOFUSORA (HE-013) en Pañol.\",\"createdAt\":\"2026-05-25T12:25:04.000Z\"},{\"id\":\"f4b97cc6-e350-478a-899c-fd2c747ea874\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó REMACHES RAPIDOS (CAJA) (CO-053) en Pañol.\",\"createdAt\":\"2026-05-25T12:24:44.000Z\"},{\"id\":\"a0bf3066-78e5-4501-ac22-47d68f048f6f\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó GAFAS (CAJAS CERRADAS) (SG-019) en Pañol.\",\"createdAt\":\"2026-05-25T12:22:35.000Z\"},{\"id\":\"af8a0154-4a3b-4e8e-93a0-3a7e01e101ea\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CAJA DE MECHA COPA (HM-009) en Pañol.\",\"createdAt\":\"2026-05-25T12:21:05.000Z\"},{\"id\":\"e1c82888-7c7d-4f68-9f72-c7bcc421d80d\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CURVAS DE 040 A 45º HH (IS-034) en Pañol.\",\"createdAt\":\"2026-05-25T12:16:26.000Z\"},{\"id\":\"386b1a58-97f6-4559-b712-1e17ed7d581c\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Protector auditivo (SG-003) en Armario de seguridad.\",\"createdAt\":\"2026-05-25T12:13:35.000Z\"},{\"id\":\"05524451-c0a9-4881-a70b-10061fb8ceca\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó DISCO ESMERILL (PARES) (HM-017) en Pañol.\",\"createdAt\":\"2026-05-25T12:11:30.000Z\"},{\"id\":\"41e13f37-97ec-41ff-8900-54f649cca063\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Juego de llaves combinadas 6-22 mm (HM-001) en Estantería A1.\",\"createdAt\":\"2026-05-25T12:08:16.000Z\"},{\"id\":\"ec30bc2e-45e1-4fe3-905c-4bc032fd6338\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó JUEGO DE MECHA COPA PARA MADERA ( INCOMPLETA) (CO-039) en Pañol.\",\"createdAt\":\"2026-05-25T12:04:12.000Z\"},{\"id\":\"fafba059-7435-4a34-a39f-282681325f01\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó GUANTES DE CUERO MANGA LARGA( SIN BOLSA) (SG-022) en Pañol.\",\"createdAt\":\"2026-05-25T11:54:38.000Z\"},{\"id\":\"a5102af9-7881-46fc-8347-0e31d997648f\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó GUANTES ANTICORTES (SG-020) en Pañol.\",\"createdAt\":\"2026-05-25T11:53:36.000Z\"},{\"id\":\"4d5c8a86-e354-4206-b7db-84a6358beea8\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó T DE 1/2 IPS (IS-042) en Pañol.\",\"createdAt\":\"2026-05-25T11:53:34.000Z\"},{\"id\":\"ac81b5cb-0ee7-49b6-b98a-2a53295bdcab\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó PINZA DE CORTE (HM-014) en Pañol.\",\"createdAt\":\"2026-05-25T11:52:22.000Z\"},{\"id\":\"b19c4554-3e87-4703-bab5-740ecc7d4bad\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó METROS DE CABLE DE REVESTIMIENTO DE PVC (CO-022) en Pañol.\",\"createdAt\":\"2026-05-25T11:45:18.000Z\"},{\"id\":\"25e60d25-ad1a-4899-a008-95d805e0ecaf\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CAJA DE TALADRO PANA (HM-010) en Pañol.\",\"createdAt\":\"2026-05-25T11:38:07.000Z\"},{\"id\":\"5c93068e-7eb7-474c-bc0a-6b7e55243f40\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó UNION DOBLE DE 1\\\" IPS (IS-049) en Pañol.\",\"createdAt\":\"2026-05-25T11:35:41.000Z\"},{\"id\":\"4c44e18a-e293-4b60-aae1-7d8fbe7c33a3\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó SIERRA COPA BI-METALICA DE 40MM (HM-046) en Pañol.\",\"createdAt\":\"2026-05-25T11:31:03.000Z\"},{\"id\":\"a506b5c5-a874-4d88-be82-1c0c4c46983d\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó CAJA DE PROTECTORES AUDITIVOS (SG-006) en Pañol.\",\"createdAt\":\"2026-05-25T11:26:06.000Z\"},{\"id\":\"9b51e044-ab94-489c-994b-57f4e08fb029\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó REGLA METALICA (HM-035) en Pañol.\",\"createdAt\":\"2026-05-25T11:25:38.000Z\"},{\"id\":\"d3a64e62-96ed-4aa7-b55c-f4c0ed631982\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó MASCARAS FACIALES (SG-014) en Pañol.\",\"createdAt\":\"2026-05-25T11:20:20.000Z\"},{\"id\":\"7cd431e0-d585-4fe6-800f-c792711a250c\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó MAQUINA DE SOLDAR (HE-006) en Pañol.\",\"createdAt\":\"2026-05-25T11:15:19.000Z\"},{\"id\":\"c8f0c480-ebdd-4b46-b8e0-a2a3fb5b8f8a\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó DISCOS DE CORTE (CO-018) en Pañol.\",\"createdAt\":\"2026-05-25T11:05:11.000Z\"},{\"id\":\"072cfe64-505b-4ce3-abd8-adf94e508c70\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Martillo de bola 500 g (HM-004) en Estantería A1.\",\"createdAt\":\"2026-05-25T11:00:19.000Z\"},{\"id\":\"6bd0b8e7-f1cf-445a-a06a-7e084004be75\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Ing. Gustavo Tolaba (profesor).\",\"createdAt\":\"2026-05-24T20:21:10.000Z\"},{\"id\":\"63e46965-a238-4974-ae8b-f7d68ba98add\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Thiago Quispe (alumno).\",\"createdAt\":\"2026-05-24T20:02:30.000Z\"},{\"id\":\"e357d07d-d8dc-440a-942f-2bb09016ed1a\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Ignacio Cruz (alumno).\",\"createdAt\":\"2026-05-24T19:44:46.000Z\"},{\"id\":\"3fe228ae-ce90-4ec2-8ee2-2ca4b06281be\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Lucía Molina (alumno).\",\"createdAt\":\"2026-05-24T19:36:50.000Z\"},{\"id\":\"8a6dfb3d-821c-445b-b664-1b3c6ff2a2ad\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Catalina Aguirre (alumno).\",\"createdAt\":\"2026-05-24T19:31:49.000Z\"},{\"id\":\"9f6a05cd-58dd-4205-a43d-252b77ddd3c8\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Ing. Ricardo Salinas (profesor).\",\"createdAt\":\"2026-05-24T19:04:08.000Z\"},{\"id\":\"1126c40a-3b2d-4374-bbe1-a0ba52d6c9ad\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Ignacio Álvarez (alumno).\",\"createdAt\":\"2026-05-24T18:57:35.000Z\"},{\"id\":\"bb48bcbd-17a3-4be1-bf3e-906278403407\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Arq. Hernán Calizaya (profesor).\",\"createdAt\":\"2026-05-24T18:53:12.000Z\"},{\"id\":\"95f4ee3a-9e60-416a-881e-24b5c4ba9748\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Felipe Morales (alumno).\",\"createdAt\":\"2026-05-24T18:52:36.000Z\"},{\"id\":\"1c9e1a94-c2e5-43c9-90d3-6153b78e5f78\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Santiago Quispe (alumno).\",\"createdAt\":\"2026-05-24T18:40:38.000Z\"},{\"id\":\"2c3ad386-f290-4147-82bb-979c7aa9bf37\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Valentina Gutiérrez (alumno).\",\"createdAt\":\"2026-05-24T18:17:48.000Z\"},{\"id\":\"129c84b0-fd80-4e46-9ec7-dd5953fc7fc4\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Facundo Álvarez (alumno).\",\"createdAt\":\"2026-05-24T18:11:42.000Z\"},{\"id\":\"e5809ea3-d1c8-4207-9dc6-9f847f1e0e1b\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Emma Ortiz (alumno).\",\"createdAt\":\"2026-05-24T17:44:40.000Z\"},{\"id\":\"ed5418b9-ba5b-4018-a414-82bc13a23eb0\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Santiago Suárez (alumno).\",\"createdAt\":\"2026-05-24T17:16:06.000Z\"},{\"id\":\"28579e2d-1907-4b77-b2a3-6ddd7d5a0a12\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Emma Vargas (alumno).\",\"createdAt\":\"2026-05-24T17:16:05.000Z\"},{\"id\":\"ba7f2588-d04e-4bc1-9ce2-27b5ae270e9e\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Lucía Gutiérrez (alumno).\",\"createdAt\":\"2026-05-24T17:05:45.000Z\"},{\"id\":\"6a6b521a-918c-4c95-a26b-7bf75c3df390\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Prof. Andrea Choque (profesor).\",\"createdAt\":\"2026-05-24T16:55:09.000Z\"},{\"id\":\"df8ebe68-3a0f-46b0-b0cf-242f28b061d4\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Camila Álvarez (alumno).\",\"createdAt\":\"2026-05-24T16:52:03.000Z\"},{\"id\":\"5ce58498-dd83-4111-a56e-b6d90d4d7c74\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Felipe Quispe (alumno).\",\"createdAt\":\"2026-05-24T16:08:37.000Z\"},{\"id\":\"69848774-959a-4f30-9c9f-60a8e0427863\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Thiago López (alumno).\",\"createdAt\":\"2026-05-24T15:59:44.000Z\"},{\"id\":\"cb7683b5-5307-425a-87ab-3325876f3b66\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Prof. Silvina Rueda (profesor).\",\"createdAt\":\"2026-05-24T15:55:13.000Z\"},{\"id\":\"36fd2afd-3abc-46ed-ab68-1d06d6797b7b\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Lucía Flores (alumno).\",\"createdAt\":\"2026-05-24T15:44:07.000Z\"},{\"id\":\"86c0be0e-651d-4b1d-8c8c-b298db0405d6\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Prof. Natalia Burgos (profesor).\",\"createdAt\":\"2026-05-24T15:14:11.000Z\"},{\"id\":\"db6f2a77-254b-43cd-b962-78efb8b56ba7\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Facundo Castro (alumno).\",\"createdAt\":\"2026-05-24T14:18:32.000Z\"},{\"id\":\"41045915-5d3b-4411-8331-5544112e5fa4\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Mónica Zerpa (administrativo).\",\"createdAt\":\"2026-05-24T14:11:14.000Z\"},{\"id\":\"2c2bbce7-411e-4232-a6f0-a4502cf9cd56\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Camila Vargas (alumno).\",\"createdAt\":\"2026-05-24T14:07:39.000Z\"},{\"id\":\"a5f2ad01-4bd3-4479-a4a3-495407883197\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Agustina Castro (alumno).\",\"createdAt\":\"2026-05-24T14:05:02.000Z\"},{\"id\":\"a448ea34-8660-4c0a-a198-b2b12dac1b1c\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Emma Molina (alumno).\",\"createdAt\":\"2026-05-24T13:27:04.000Z\"},{\"id\":\"2d5a95b8-78ee-4a86-9e93-d084d3422541\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Mateo Gutiérrez (alumno).\",\"createdAt\":\"2026-05-24T13:21:43.000Z\"},{\"id\":\"eacfdf19-c578-44dd-b89b-6b462d11c02d\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Benjamín Cruz (alumno).\",\"createdAt\":\"2026-05-24T12:53:34.000Z\"},{\"id\":\"420282ca-e1f9-4496-9ded-068d1a36bd06\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Camila Ortiz (alumno).\",\"createdAt\":\"2026-05-24T12:44:47.000Z\"},{\"id\":\"2606a535-5ff8-46f2-a94f-2ab25b7deab4\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Bautista Castro (alumno).\",\"createdAt\":\"2026-05-24T12:35:33.000Z\"},{\"id\":\"c7931e6f-edca-4bde-beea-09c649b7f371\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Martina Martínez (alumno).\",\"createdAt\":\"2026-05-24T12:35:31.000Z\"},{\"id\":\"8d1c1b64-7776-49e1-8c5d-e149268fa89c\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Milagros Álvarez (alumno).\",\"createdAt\":\"2026-05-24T12:02:41.000Z\"},{\"id\":\"5bf6cd5f-092f-40c7-9e70-aa750b5fab8d\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Mateo Torres (alumno).\",\"createdAt\":\"2026-05-24T11:33:01.000Z\"},{\"id\":\"87b5700a-9043-4114-ae4a-820bacb57bce\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Raúl Villca (administrativo).\",\"createdAt\":\"2026-05-24T11:28:15.000Z\"},{\"id\":\"f19aea28-acdf-4416-afc1-094e6acac79d\",\"type\":\"supplier_created\",\"message\":\"Jorge Medina cargó el proveedor Seguridad Industrial Puna (CUIT 30-71000999-2).\",\"createdAt\":\"2026-05-23T17:31:29.000Z\"},{\"id\":\"f069b99a-db53-438b-bdda-4736943bed30\",\"type\":\"supplier_created\",\"message\":\"Jorge Medina cargó el proveedor Ferretería El Tornillo SRL (CUIT 30-71000123-1).\",\"createdAt\":\"2026-05-23T16:51:26.000Z\"},{\"id\":\"66715b9d-339e-44dc-a0d9-38bd2459f71f\",\"type\":\"supplier_created\",\"message\":\"Jorge Medina cargó el proveedor Distribuidora Técnica del Norte SA (CUIT 30-71000456-7).\",\"createdAt\":\"2026-05-23T16:24:27.000Z\"},{\"id\":\"0656e3cc-29ad-4249-ad51-9716b98ffb18\",\"type\":\"supplier_created\",\"message\":\"Jorge Medina cargó el proveedor Electro Insumos Andinos (CUIT 20-28000789-8).\",\"createdAt\":\"2026-05-23T13:46:28.000Z\"},{\"id\":\"a9e84a0f-44a9-47c9-86af-259ff86a1208\",\"type\":\"location_created\",\"message\":\"Administración Demo creó la ubicación Armario de seguridad.\",\"createdAt\":\"2026-05-22T19:53:12.000Z\"},{\"id\":\"c6b37c81-92d5-4446-aaa5-22f5fbd80554\",\"type\":\"cost_center_created\",\"message\":\"Administración Demo creó el centro de costos Taller de Electromecánica.\",\"createdAt\":\"2026-05-22T19:51:16.000Z\"},{\"id\":\"a08e916d-f902-473b-87bd-28b2a5695be0\",\"type\":\"orientation_created\",\"message\":\"Administración Demo creó la orientación Química.\",\"createdAt\":\"2026-05-22T19:36:25.000Z\"},{\"id\":\"db0bdbdf-4811-41ef-9890-cd1c86404237\",\"type\":\"location_created\",\"message\":\"Administración Demo creó la ubicación Estantería A1.\",\"createdAt\":\"2026-05-22T18:38:09.000Z\"},{\"id\":\"440aa168-dbe2-4abe-861e-b0da57587c8f\",\"type\":\"location_created\",\"message\":\"Administración Demo creó la ubicación Laboratorio de electrónica.\",\"createdAt\":\"2026-05-22T18:30:11.000Z\"},{\"id\":\"565e03a0-321e-4440-b329-b665108794f6\",\"type\":\"cost_center_created\",\"message\":\"Administración Demo creó el centro de costos Construcciones.\",\"createdAt\":\"2026-05-22T18:21:19.000Z\"},{\"id\":\"5f3ac875-b33d-4966-b0c1-a0376844cb58\",\"type\":\"location_created\",\"message\":\"Administración Demo creó la ubicación Pañol.\",\"createdAt\":\"2026-05-22T18:06:15.000Z\"},{\"id\":\"5aace2ec-84c9-4441-8ea7-8eb69771f810\",\"type\":\"orientation_created\",\"message\":\"Administración Demo creó la orientación Electromecánica.\",\"createdAt\":\"2026-05-22T18:05:21.000Z\"},{\"id\":\"0c28f1a1-0f67-4e47-a6f3-4ffe69545686\",\"type\":\"orientation_created\",\"message\":\"Administración Demo creó la orientación Electricidad.\",\"createdAt\":\"2026-05-22T18:03:22.000Z\"},{\"id\":\"313a79b0-04ba-4228-80e8-b8121b92d4a9\",\"type\":\"orientation_created\",\"message\":\"Administración Demo creó la orientación Administración de empresas.\",\"createdAt\":\"2026-05-22T17:56:23.000Z\"},{\"id\":\"29d8cda9-76d5-4fad-ba6a-695f16062d64\",\"type\":\"location_created\",\"message\":\"Administración Demo creó la ubicación Depósito de consumibles.\",\"createdAt\":\"2026-05-22T17:51:13.000Z\"},{\"id\":\"70314c12-04e2-4f7b-9266-ed201a4c2b93\",\"type\":\"category_created\",\"message\":\"Administración Demo creó la categoría Herramientas eléctricas.\",\"createdAt\":\"2026-05-22T17:51:02.000Z\"},{\"id\":\"435fca28-398a-4865-9bd7-6005d498d055\",\"type\":\"category_created\",\"message\":\"Administración Demo creó la categoría Herramientas manuales.\",\"createdAt\":\"2026-05-22T17:01:01.000Z\"},{\"id\":\"c2fef4b9-7aa4-4d37-8395-bb655d1b1f84\",\"type\":\"location_created\",\"message\":\"Administración Demo creó la ubicación Estantería A2.\",\"createdAt\":\"2026-05-22T15:46:10.000Z\"},{\"id\":\"3e394e8e-968a-42a7-ad28-fc83a1851f8a\",\"type\":\"cost_center_created\",\"message\":\"Administración Demo creó el centro de costos Informática.\",\"createdAt\":\"2026-05-22T15:42:18.000Z\"},{\"id\":\"53f6bd45-dd81-4d10-bf70-64f95926f54f\",\"type\":\"category_created\",\"message\":\"Administración Demo creó la categoría Instrumentos de medición.\",\"createdAt\":\"2026-05-22T15:11:03.000Z\"},{\"id\":\"076105c2-ea1e-45ce-b989-b510e138b8b3\",\"type\":\"category_created\",\"message\":\"Administración Demo creó la categoría Electrónica.\",\"createdAt\":\"2026-05-22T13:45:06.000Z\"},{\"id\":\"6619cf7d-96f5-4b84-a55c-e38911906486\",\"type\":\"category_created\",\"message\":\"Administración Demo creó la categoría Informática.\",\"createdAt\":\"2026-05-22T13:24:07.000Z\"},{\"id\":\"1da523a0-acae-4550-9dd0-271bcb64b265\",\"type\":\"category_created\",\"message\":\"Administración Demo creó la categoría Consumibles.\",\"createdAt\":\"2026-05-22T13:14:05.000Z\"},{\"id\":\"80e6169e-9620-40e8-af76-169610c5239e\",\"type\":\"cost_center_created\",\"message\":\"Administración Demo creó el centro de costos Laboratorio de Química.\",\"createdAt\":\"2026-05-22T13:12:17.000Z\"},{\"id\":\"5522e275-dce3-4ecd-b82d-74e5460cb77a\",\"type\":\"category_created\",\"message\":\"Administración Demo creó la categoría Instalaciones sanitarias.\",\"createdAt\":\"2026-05-22T12:57:08.000Z\"},{\"id\":\"02915b63-e782-41e2-9336-ed28e8ee4b38\",\"type\":\"orientation_created\",\"message\":\"Administración Demo creó la orientación Maestro Mayor de Obra.\",\"createdAt\":\"2026-05-22T11:52:24.000Z\"},{\"id\":\"21f3831a-ab4e-4bb4-a121-4cb606102a38\",\"type\":\"category_created\",\"message\":\"Administración Demo creó la categoría Elementos de seguridad.\",\"createdAt\":\"2026-05-22T11:36:04.000Z\"},{\"id\":\"62401662-7b88-4c52-bfe5-98eaa41bb8f9\",\"type\":\"location_created\",\"message\":\"Administración Demo creó la ubicación Sala de informática.\",\"createdAt\":\"2026-05-22T11:24:14.000Z\"},{\"id\":\"a8acb910-ae05-4a3a-ac4a-6600afb90c18\",\"type\":\"cost_center_created\",\"message\":\"Administración Demo creó el centro de costos Administración.\",\"createdAt\":\"2026-05-22T11:16:20.000Z\"}],\"locations\":[{\"id\":\"09dd9736-2d26-44e3-99dd-11d667d5510c\",\"name\":\"Pañol\",\"description\":\"\",\"createdAt\":\"2026-05-22T18:06:14.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"14fd6efa-000b-4072-96d5-0aa521278373\",\"name\":\"Sala de informática\",\"description\":\"Armario con llave\",\"createdAt\":\"2026-05-22T11:24:13.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"699bde01-b581-4f29-8a4a-1cc3af8dced3\",\"name\":\"Depósito de consumibles\",\"description\":\"Insumos y repuestos\",\"createdAt\":\"2026-05-22T17:51:12.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"4db6bcbe-f24e-424c-9bc6-ef3610f0066b\",\"name\":\"Armario de seguridad\",\"description\":\"Elementos de protección personal\",\"createdAt\":\"2026-05-22T19:53:11.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"3c4d7a02-d32b-4a9b-b3c2-bbdc62838bd3\",\"name\":\"Laboratorio de electrónica\",\"description\":\"Bancos 1 a 6\",\"createdAt\":\"2026-05-22T18:30:10.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"68a709bd-3ebb-4b27-8eb0-d873fdfedd39\",\"name\":\"Estantería A2\",\"description\":\"Taller · herramientas eléctricas\",\"createdAt\":\"2026-05-22T15:46:09.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"4acfeced-86bf-4a30-9308-62a9222a8e2b\",\"name\":\"Estantería A1\",\"description\":\"Taller · herramientas manuales\",\"createdAt\":\"2026-05-22T18:38:08.000Z\",\"createdBy\":\"Administración Demo\"}],\"categories\":[{\"id\":\"8865f692-8d53-4b39-8634-cc11c0b020dd\",\"name\":\"Instalaciones sanitarias\",\"description\":\"\",\"createdAt\":\"2026-05-22T12:57:07.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"70050870-3bfa-4236-87f2-ae6002f56e0a\",\"name\":\"Informática\",\"description\":\"Equipos y accesorios informáticos\",\"createdAt\":\"2026-05-22T13:24:06.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"86867620-d552-4ed1-883f-a3e7dc93b1ae\",\"name\":\"Electrónica\",\"description\":\"Componentes y equipos de laboratorio\",\"createdAt\":\"2026-05-22T13:45:05.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"efa39cf9-7c31-447c-985d-526796d25e79\",\"name\":\"Consumibles\",\"description\":\"Insumos que se gastan con el uso\",\"createdAt\":\"2026-05-22T13:14:04.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"1cf562d9-0bec-49ae-8c67-db133f3c3bb9\",\"name\":\"Elementos de seguridad\",\"description\":\"EPP para prácticas de taller\",\"createdAt\":\"2026-05-22T11:36:03.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"320f3344-bab4-4dc0-8c39-91951c36fa02\",\"name\":\"Instrumentos de medición\",\"description\":\"Multímetros, calibres y medidores\",\"createdAt\":\"2026-05-22T15:11:02.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"c81966a8-21c7-4dd0-ab7a-0a25f4aad6be\",\"name\":\"Herramientas eléctricas\",\"description\":\"Equipos con motor o batería\",\"createdAt\":\"2026-05-22T17:51:01.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"d04e8663-03d3-44cb-b1a4-c9fa6f1766e2\",\"name\":\"Herramientas manuales\",\"description\":\"Llaves, destornilladores, martillos y similares\",\"createdAt\":\"2026-05-22T17:01:00.000Z\",\"createdBy\":\"Administración Demo\"}],\"responsibles\":[{\"id\":\"5668e951-7026-4cbd-ae88-d84cc1baf7ff\",\"type\":\"administrativo\",\"fullName\":\"Raúl Villca\",\"dni\":\"30000733\",\"admissionDate\":\"\",\"course\":\"\",\"division\":\"\",\"orientation\":\"\",\"specialty\":\"\",\"position\":\"Preceptor\",\"address\":\"Pasaje Inventado 30\",\"email\":\"personal2@escuela.demo\",\"phone\":\"388 713-9048\",\"createdAt\":\"2026-11-20T20:15:30.729Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"ff3d1400-1076-4693-87eb-d6c96e0c56d7\",\"type\":\"administrativo\",\"fullName\":\"Mónica Zerpa\",\"dni\":\"30000000\",\"admissionDate\":\"\",\"course\":\"\",\"division\":\"\",\"orientation\":\"\",\"specialty\":\"\",\"position\":\"Secretaria\",\"address\":\"Pasaje Inventado 78\",\"email\":\"personal1@escuela.demo\",\"phone\":\"388 741-8073\",\"createdAt\":\"2026-11-20T20:15:30.725Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"59185778-b455-4cc2-9c20-849cf62298d9\",\"type\":\"profesor\",\"fullName\":\"Prof. Silvina Rueda\",\"dni\":\"25004555\",\"admissionDate\":\"\",\"course\":\"\",\"division\":\"\",\"orientation\":\"\",\"specialty\":\"Física\",\"position\":\"\",\"address\":\"Av. Imaginaria 993\",\"email\":\"docente6@escuela.demo\",\"phone\":\"388 612-1653\",\"createdAt\":\"2026-11-20T20:15:30.722Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"649a5195-baf1-4068-9d13-3127c5cdffe3\",\"type\":\"profesor\",\"fullName\":\"Arq. Hernán Calizaya\",\"dni\":\"25003644\",\"admissionDate\":\"\",\"course\":\"\",\"division\":\"\",\"orientation\":\"\",\"specialty\":\"Construcciones\",\"position\":\"\",\"address\":\"Av. Imaginaria 453\",\"email\":\"docente5@escuela.demo\",\"phone\":\"388 626-2246\",\"createdAt\":\"2026-11-20T20:15:30.718Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"ad28fa86-c1cb-4f00-ac41-6979ea9bf9bc\",\"type\":\"profesor\",\"fullName\":\"Prof. Natalia Burgos\",\"dni\":\"25002733\",\"admissionDate\":\"\",\"course\":\"\",\"division\":\"\",\"orientation\":\"\",\"specialty\":\"Informática\",\"position\":\"\",\"address\":\"Av. Imaginaria 1586\",\"email\":\"docente4@escuela.demo\",\"phone\":\"388 648-9147\",\"createdAt\":\"2026-11-20T20:15:30.714Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"7b38a507-b10a-4a73-a611-ac1f3d54f00b\",\"type\":\"profesor\",\"fullName\":\"Ing. Gustavo Tolaba\",\"dni\":\"25001822\",\"admissionDate\":\"\",\"course\":\"\",\"division\":\"\",\"orientation\":\"\",\"specialty\":\"Electrónica\",\"position\":\"\",\"address\":\"Av. Imaginaria 1456\",\"email\":\"docente3@escuela.demo\",\"phone\":\"388 641-8535\",\"createdAt\":\"2026-11-20T20:15:30.710Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"531c1f19-2431-40f8-a84e-c788b1bed919\",\"type\":\"profesor\",\"fullName\":\"Prof. Andrea Choque\",\"dni\":\"25000911\",\"admissionDate\":\"\",\"course\":\"\",\"division\":\"\",\"orientation\":\"\",\"specialty\":\"Química\",\"position\":\"\",\"address\":\"Av. Imaginaria 339\",\"email\":\"docente2@escuela.demo\",\"phone\":\"388 620-6848\",\"createdAt\":\"2026-11-20T20:15:30.706Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"2656615e-6278-467a-85ee-0b5b712946b3\",\"type\":\"profesor\",\"fullName\":\"Ing. Ricardo Salinas\",\"dni\":\"25000000\",\"admissionDate\":\"\",\"course\":\"\",\"division\":\"\",\"orientation\":\"\",\"specialty\":\"Electromecánica\",\"position\":\"\",\"address\":\"Av. Imaginaria 1071\",\"email\":\"docente1@escuela.demo\",\"phone\":\"388 655-8391\",\"createdAt\":\"2026-11-20T20:15:30.702Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"a0449a33-df64-4061-bf70-2fd8e953eb4f\",\"type\":\"alumno\",\"fullName\":\"Lucía Flores\",\"dni\":\"46003764\",\"admissionDate\":\"2021-03-01\",\"course\":\"6°\",\"division\":\"2da\",\"orientation\":\"Maestro Mayor de Obra\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 479\",\"email\":\"lucia.27@alumnos.demo\",\"phone\":\"388 566-6718\",\"createdAt\":\"2026-11-20T20:15:30.698Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"2acc8833-b8e6-4c10-af1d-216f09ae95b6\",\"type\":\"alumno\",\"fullName\":\"Santiago Suárez\",\"dni\":\"46003653\",\"admissionDate\":\"2021-03-01\",\"course\":\"6°\",\"division\":\"3ra\",\"orientation\":\"Maestro Mayor de Obra\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 507\",\"email\":\"santiago.26@alumnos.demo\",\"phone\":\"388 540-5792\",\"createdAt\":\"2026-11-20T20:15:30.694Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"75b550cb-8938-4378-9ba7-56beaa7f9a5f\",\"type\":\"alumno\",\"fullName\":\"Emma Vargas\",\"dni\":\"46003476\",\"admissionDate\":\"2022-03-01\",\"course\":\"5°\",\"division\":\"1ra\",\"orientation\":\"Química\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 983\",\"email\":\"emma.25@alumnos.demo\",\"phone\":\"388 546-3991\",\"createdAt\":\"2026-11-20T20:15:30.690Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"6133d24f-aed4-4f1b-ac15-a36c3e01fa12\",\"type\":\"alumno\",\"fullName\":\"Emma Molina\",\"dni\":\"46003387\",\"admissionDate\":\"2020-03-01\",\"course\":\"7°\",\"division\":\"1ra\",\"orientation\":\"Química\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 811\",\"email\":\"emma.24@alumnos.demo\",\"phone\":\"388 548-3464\",\"createdAt\":\"2026-11-20T20:15:30.687Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"8b971674-372b-44e8-861a-cd900dd7b5db\",\"type\":\"alumno\",\"fullName\":\"Camila Álvarez\",\"dni\":\"46003234\",\"admissionDate\":\"2021-03-01\",\"course\":\"6°\",\"division\":\"1ra\",\"orientation\":\"Electromecánica\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 897\",\"email\":\"camila.23@alumnos.demo\",\"phone\":\"388 541-9628\",\"createdAt\":\"2026-11-20T20:15:30.683Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"878c1bd1-d48e-485e-a88b-8de747c2bd88\",\"type\":\"alumno\",\"fullName\":\"Agustina Castro\",\"dni\":\"46003069\",\"admissionDate\":\"2024-03-01\",\"course\":\"3°\",\"division\":\"3ra\",\"orientation\":\"Electromecánica\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 996\",\"email\":\"agustina.22@alumnos.demo\",\"phone\":\"388 590-8241\",\"createdAt\":\"2026-11-20T20:15:30.679Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"134d87c8-d0de-48ee-9c08-07bdc96b686e\",\"type\":\"alumno\",\"fullName\":\"Mateo Torres\",\"dni\":\"46002921\",\"admissionDate\":\"2021-03-01\",\"course\":\"6°\",\"division\":\"3ra\",\"orientation\":\"Electricidad\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 843\",\"email\":\"mateo.21@alumnos.demo\",\"phone\":\"388 582-5663\",\"createdAt\":\"2026-11-20T20:15:30.676Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"e831ed5d-311b-42e7-9fcf-2d3b267de51f\",\"type\":\"alumno\",\"fullName\":\"Lucía Molina\",\"dni\":\"46002815\",\"admissionDate\":\"2020-03-01\",\"course\":\"7°\",\"division\":\"3ra\",\"orientation\":\"Electricidad\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 614\",\"email\":\"lucia.20@alumnos.demo\",\"phone\":\"388 526-9621\",\"createdAt\":\"2026-11-20T20:15:30.672Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"7bbb2b1f-5df1-40ed-981d-d0cf156f54ad\",\"type\":\"alumno\",\"fullName\":\"Catalina Aguirre\",\"dni\":\"46002644\",\"admissionDate\":\"2024-03-01\",\"course\":\"3°\",\"division\":\"3ra\",\"orientation\":\"Electricidad\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 847\",\"email\":\"catalina.19@alumnos.demo\",\"phone\":\"388 594-5128\",\"createdAt\":\"2026-11-20T20:15:30.669Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"bbc87ae0-78ff-4101-af28-bbaef666b846\",\"type\":\"alumno\",\"fullName\":\"Valentina Gutiérrez\",\"dni\":\"46002499\",\"admissionDate\":\"2020-03-01\",\"course\":\"7°\",\"division\":\"3ra\",\"orientation\":\"Electromecánica\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 675\",\"email\":\"valentina.18@alumnos.demo\",\"phone\":\"388 514-5697\",\"createdAt\":\"2026-11-20T20:15:30.666Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"6ae3fd99-8641-431a-823e-3724a6a18f02\",\"type\":\"alumno\",\"fullName\":\"Camila Ortiz\",\"dni\":\"46002403\",\"admissionDate\":\"2022-03-01\",\"course\":\"5°\",\"division\":\"1ra\",\"orientation\":\"Química\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 899\",\"email\":\"camila.17@alumnos.demo\",\"phone\":\"388 570-2855\",\"createdAt\":\"2026-11-20T20:15:30.663Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"c7ac4285-50fa-4d96-b317-bd37b5bdee33\",\"type\":\"alumno\",\"fullName\":\"Ignacio Cruz\",\"dni\":\"46002252\",\"admissionDate\":\"2024-03-01\",\"course\":\"3°\",\"division\":\"1ra\",\"orientation\":\"Administración de empresas\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 47\",\"email\":\"ignacio.16@alumnos.demo\",\"phone\":\"388 591-5191\",\"createdAt\":\"2026-11-20T20:15:30.660Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"777fedd3-13f5-4008-b7ec-3029207eb73f\",\"type\":\"alumno\",\"fullName\":\"Lucía Gutiérrez\",\"dni\":\"46002078\",\"admissionDate\":\"2024-03-01\",\"course\":\"3°\",\"division\":\"3ra\",\"orientation\":\"Química\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 767\",\"email\":\"lucia.15@alumnos.demo\",\"phone\":\"388 536-8098\",\"createdAt\":\"2026-11-20T20:15:30.657Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"6d3965be-9531-4f6a-9b9b-823b11d13794\",\"type\":\"alumno\",\"fullName\":\"Thiago López\",\"dni\":\"46001999\",\"admissionDate\":\"2023-03-01\",\"course\":\"4°\",\"division\":\"2da\",\"orientation\":\"Maestro Mayor de Obra\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 248\",\"email\":\"thiago.14@alumnos.demo\",\"phone\":\"388 537-1401\",\"createdAt\":\"2026-11-20T20:15:30.654Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"a2db82f1-deec-467b-ada0-e497d17f50dc\",\"type\":\"alumno\",\"fullName\":\"Mateo Gutiérrez\",\"dni\":\"46001826\",\"admissionDate\":\"2021-03-01\",\"course\":\"6°\",\"division\":\"3ra\",\"orientation\":\"Electromecánica\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 574\",\"email\":\"mateo.13@alumnos.demo\",\"phone\":\"388 562-7813\",\"createdAt\":\"2026-11-20T20:15:30.651Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"9eaf1ca5-fde0-410a-abb7-df2bee500004\",\"type\":\"alumno\",\"fullName\":\"Facundo Álvarez\",\"dni\":\"46001663\",\"admissionDate\":\"2022-03-01\",\"course\":\"5°\",\"division\":\"1ra\",\"orientation\":\"Electricidad\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 980\",\"email\":\"facundo.12@alumnos.demo\",\"phone\":\"388 540-4384\",\"createdAt\":\"2026-11-20T20:15:30.649Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"99be1845-272c-43e1-973b-0bdf2713bbc1\",\"type\":\"alumno\",\"fullName\":\"Milagros Álvarez\",\"dni\":\"46001532\",\"admissionDate\":\"2020-03-01\",\"course\":\"7°\",\"division\":\"2da\",\"orientation\":\"Electromecánica\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 576\",\"email\":\"milagros.11@alumnos.demo\",\"phone\":\"388 567-5791\",\"createdAt\":\"2026-11-20T20:15:30.646Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"fa089b4c-5a01-492e-8e52-26275358e022\",\"type\":\"alumno\",\"fullName\":\"Emma Ortiz\",\"dni\":\"46001404\",\"admissionDate\":\"2021-03-01\",\"course\":\"6°\",\"division\":\"2da\",\"orientation\":\"Química\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 531\",\"email\":\"emma.10@alumnos.demo\",\"phone\":\"388 570-2447\",\"createdAt\":\"2026-11-20T20:15:30.643Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"fbfc3865-947a-4c5c-bdb4-ab160a30da2c\",\"type\":\"alumno\",\"fullName\":\"Camila Vargas\",\"dni\":\"46001271\",\"admissionDate\":\"2022-03-01\",\"course\":\"5°\",\"division\":\"2da\",\"orientation\":\"Administración de empresas\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 625\",\"email\":\"camila.9@alumnos.demo\",\"phone\":\"388 563-4945\",\"createdAt\":\"2026-11-20T20:15:30.639Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"be1218c0-788f-4eb8-8f68-a4df086ff759\",\"type\":\"alumno\",\"fullName\":\"Santiago Quispe\",\"dni\":\"46001161\",\"admissionDate\":\"2023-03-01\",\"course\":\"4°\",\"division\":\"1ra\",\"orientation\":\"Química\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 286\",\"email\":\"santiago.8@alumnos.demo\",\"phone\":\"388 542-9118\",\"createdAt\":\"2026-11-20T20:15:30.636Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"8d270561-ef32-45b9-a7cf-13c35d0f738f\",\"type\":\"alumno\",\"fullName\":\"Felipe Quispe\",\"dni\":\"46001057\",\"admissionDate\":\"2020-03-01\",\"course\":\"7°\",\"division\":\"2da\",\"orientation\":\"Electricidad\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 81\",\"email\":\"felipe.7@alumnos.demo\",\"phone\":\"388 565-1233\",\"createdAt\":\"2026-11-20T20:15:30.633Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"fd24f2e3-3bd0-4a7f-97b0-3a25ab849d98\",\"type\":\"alumno\",\"fullName\":\"Felipe Morales\",\"dni\":\"46000885\",\"admissionDate\":\"2020-03-01\",\"course\":\"7°\",\"division\":\"2da\",\"orientation\":\"Administración de empresas\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 763\",\"email\":\"felipe.6@alumnos.demo\",\"phone\":\"388 520-6685\",\"createdAt\":\"2026-11-20T20:15:30.630Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"cd7f3c66-62ee-4ed9-8cb6-c62ff5dcf24c\",\"type\":\"alumno\",\"fullName\":\"Ignacio Álvarez\",\"dni\":\"46000722\",\"admissionDate\":\"2020-03-01\",\"course\":\"7°\",\"division\":\"3ra\",\"orientation\":\"Administración de empresas\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 319\",\"email\":\"ignacio.5@alumnos.demo\",\"phone\":\"388 583-9579\",\"createdAt\":\"2026-11-20T20:15:30.627Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"59659aa2-d7d9-42d9-879d-7496669176e3\",\"type\":\"alumno\",\"fullName\":\"Benjamín Cruz\",\"dni\":\"46000616\",\"admissionDate\":\"2022-03-01\",\"course\":\"5°\",\"division\":\"1ra\",\"orientation\":\"Electricidad\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 938\",\"email\":\"benjamin.4@alumnos.demo\",\"phone\":\"388 584-4643\",\"createdAt\":\"2026-11-20T20:15:30.624Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"18988aa1-80cd-485d-ae4c-ec11a1708597\",\"type\":\"alumno\",\"fullName\":\"Bautista Castro\",\"dni\":\"46000466\",\"admissionDate\":\"2020-03-01\",\"course\":\"7°\",\"division\":\"3ra\",\"orientation\":\"Electromecánica\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 155\",\"email\":\"bautista.3@alumnos.demo\",\"phone\":\"388 593-6373\",\"createdAt\":\"2026-11-20T20:15:30.621Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"75da0d7b-84e2-4c04-b1dd-f4906f5b7eb1\",\"type\":\"alumno\",\"fullName\":\"Facundo Castro\",\"dni\":\"46000295\",\"admissionDate\":\"2020-03-01\",\"course\":\"7°\",\"division\":\"2da\",\"orientation\":\"Administración de empresas\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 878\",\"email\":\"facundo.2@alumnos.demo\",\"phone\":\"388 562-5693\",\"createdAt\":\"2026-11-20T20:15:30.618Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"2cd3f8e2-8cfb-4e2a-b452-5bf81bad9e53\",\"type\":\"alumno\",\"fullName\":\"Martina Martínez\",\"dni\":\"46000180\",\"admissionDate\":\"2022-03-01\",\"course\":\"5°\",\"division\":\"1ra\",\"orientation\":\"Química\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 553\",\"email\":\"martina.1@alumnos.demo\",\"phone\":\"388 586-2152\",\"createdAt\":\"2026-11-20T20:15:30.611Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"4145475e-5b46-4973-89e1-69e030b11702\",\"type\":\"alumno\",\"fullName\":\"Thiago Quispe\",\"dni\":\"46000084\",\"admissionDate\":\"2024-03-01\",\"course\":\"3°\",\"division\":\"1ra\",\"orientation\":\"Química\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 170\",\"email\":\"thiago.0@alumnos.demo\",\"phone\":\"388 567-8217\",\"createdAt\":\"2026-11-20T20:15:30.608Z\",\"createdBy\":\"Jorge Medina\"}],\"consumptions\":[{\"id\":\"e3cee4d5-f57a-4dc1-8efe-0ec7b73de129\",\"itemId\":\"c936be54-ddf7-439f-9ac9-ec059563c88b\",\"responsibleId\":\"fd24f2e3-3bd0-4a7f-97b0-3a25ab849d98\",\"responsible\":\"Felipe Morales\",\"department\":\"7° 2da\",\"costCenter\":\"Administración\",\"quantity\":8,\"detail\":\"Práctica de soldadura\",\"createdAt\":\"2026-11-10T17:34:06.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"3dc1c8e7-8f09-49b5-837c-ea3d1bc38359\",\"itemId\":\"179e74a6-392f-43e6-b097-a7ebc5272923\",\"responsibleId\":\"878c1bd1-d48e-485e-a88b-8de747c2bd88\",\"responsible\":\"Agustina Castro\",\"department\":\"3° 3ra\",\"costCenter\":\"Informática\",\"quantity\":4,\"detail\":\"Práctica de soldadura\",\"createdAt\":\"2026-11-09T13:33:03.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"dbb11e9e-4194-4844-87bd-7ad2e901e717\",\"itemId\":\"ae55fa42-cfa4-4eb0-be81-ae9d0b886e55\",\"responsibleId\":\"4145475e-5b46-4973-89e1-69e030b11702\",\"responsible\":\"Thiago Quispe\",\"department\":\"3° 1ra\",\"costCenter\":\"Laboratorio de Química\",\"quantity\":2,\"detail\":\"Trabajo práctico\",\"createdAt\":\"2026-11-02T15:12:44.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"59ac0388-c4dc-4207-b3b0-1320c615237d\",\"itemId\":\"d1f212d1-40ce-4bfa-bcd7-aecdf358067d\",\"responsibleId\":\"7b38a507-b10a-4a73-a611-ac1f3d54f00b\",\"responsible\":\"Ing. Gustavo Tolaba\",\"department\":\"Docentes\",\"costCenter\":\"Laboratorio de Química\",\"quantity\":1,\"detail\":\"Práctica de soldadura\",\"createdAt\":\"2026-10-22T12:29:29.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"b8f03c9b-5129-4306-b497-83640c77afdb\",\"itemId\":\"f5a7f3d8-d28e-4f61-ba09-ca7725579c8a\",\"responsibleId\":\"e831ed5d-311b-42e7-9fcf-2d3b267de51f\",\"responsible\":\"Lucía Molina\",\"department\":\"7° 3ra\",\"costCenter\":\"Taller de Electromecánica\",\"quantity\":3,\"detail\":\"Trabajo práctico\",\"createdAt\":\"2026-10-21T13:30:27.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"c7dc37f2-66be-4ad5-b7b3-beba2b4db4e5\",\"itemId\":\"b63666df-db9b-43f2-85c1-4c66a56210f2\",\"responsibleId\":\"531c1f19-2431-40f8-a84e-c788b1bed919\",\"responsible\":\"Prof. Andrea Choque\",\"department\":\"Docentes\",\"costCenter\":\"Informática\",\"quantity\":2,\"detail\":\"\",\"createdAt\":\"2026-10-20T17:09:25.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"5ca1a033-018b-433e-9651-eb09498ae6b1\",\"itemId\":\"9aafd881-8e00-4d6c-b6fa-7f2b4bfcddd8\",\"responsibleId\":\"ad28fa86-c1cb-4f00-ac41-6979ea9bf9bc\",\"responsible\":\"Prof. Natalia Burgos\",\"department\":\"Docentes\",\"costCenter\":\"Informática\",\"quantity\":3,\"detail\":\"Proyecto de 6° año\",\"createdAt\":\"2026-10-16T14:57:23.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"5f499933-4614-40e6-83a9-b0397264e60c\",\"itemId\":\"1ebfcad1-69cf-4c11-87b3-12b995b03528\",\"responsibleId\":\"99be1845-272c-43e1-973b-0bdf2713bbc1\",\"responsible\":\"Milagros Álvarez\",\"department\":\"7° 2da\",\"costCenter\":\"Construcciones\",\"quantity\":3,\"detail\":\"Proyecto de 6° año\",\"createdAt\":\"2026-10-05T17:09:45.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"245391b5-8685-4590-9e0c-0709efa2de7e\",\"itemId\":\"e3a91da9-5365-45fd-a114-1e2e5952e2c0\",\"responsibleId\":\"cd7f3c66-62ee-4ed9-8cb6-c62ff5dcf24c\",\"responsible\":\"Ignacio Álvarez\",\"department\":\"7° 3ra\",\"costCenter\":\"Informática\",\"quantity\":1,\"detail\":\"Trabajo práctico\",\"createdAt\":\"2026-10-01T14:37:32.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"b194d9a7-a318-4538-992b-6d4b61763e06\",\"itemId\":\"ceab760a-d225-4fd7-8e12-bae4c6082a60\",\"responsibleId\":\"ff3d1400-1076-4693-87eb-d6c96e0c56d7\",\"responsible\":\"Mónica Zerpa\",\"department\":\"Docentes\",\"costCenter\":\"Administración\",\"quantity\":1,\"detail\":\"\",\"createdAt\":\"2026-09-30T13:38:27.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"470b0072-23d6-47eb-8e96-b966263baac3\",\"itemId\":\"7b0c770c-ece4-4fd1-9a9a-5339f1871f6b\",\"responsibleId\":\"5668e951-7026-4cbd-ae88-d84cc1baf7ff\",\"responsible\":\"Raúl Villca\",\"department\":\"Docentes\",\"costCenter\":\"Informática\",\"quantity\":4,\"detail\":\"Mantenimiento\",\"createdAt\":\"2026-09-29T14:58:23.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"0bae320f-f9de-40b7-ac5d-caee1a614259\",\"itemId\":\"f5a7f3d8-d28e-4f61-ba09-ca7725579c8a\",\"responsibleId\":\"2acc8833-b8e6-4c10-af1d-216f09ae95b6\",\"responsible\":\"Santiago Suárez\",\"department\":\"6° 3ra\",\"costCenter\":\"Laboratorio de Química\",\"quantity\":3,\"detail\":\"Práctica de soldadura\",\"createdAt\":\"2026-09-25T13:34:17.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"2feb71ec-6185-4413-a267-ca557dd8a12d\",\"itemId\":\"cc965e2c-910c-40d5-9574-297f4f138058\",\"responsibleId\":\"2cd3f8e2-8cfb-4e2a-b452-5bf81bad9e53\",\"responsible\":\"Martina Martínez\",\"department\":\"5° 1ra\",\"costCenter\":\"Taller de Electromecánica\",\"quantity\":2,\"detail\":\"\",\"createdAt\":\"2026-09-22T19:41:12.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"125e73f2-f17b-46d9-a17e-3742bb4fa803\",\"itemId\":\"1ed4e93f-e1cb-45d8-adde-80f19ed5efd7\",\"responsibleId\":\"878c1bd1-d48e-485e-a88b-8de747c2bd88\",\"responsible\":\"Agustina Castro\",\"department\":\"3° 3ra\",\"costCenter\":\"Informática\",\"quantity\":4,\"detail\":\"Trabajo práctico\",\"createdAt\":\"2026-09-11T17:20:42.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"bbc591de-e009-4051-bb45-071b53a546c8\",\"itemId\":\"60804db4-d09e-495e-8fe0-5718f789f213\",\"responsibleId\":\"ad28fa86-c1cb-4f00-ac41-6979ea9bf9bc\",\"responsible\":\"Prof. Natalia Burgos\",\"department\":\"Docentes\",\"costCenter\":\"Informática\",\"quantity\":3,\"detail\":\"Mantenimiento\",\"createdAt\":\"2026-09-02T17:01:24.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"1f306aa7-885b-47cc-aa9b-8f2e65cd9414\",\"itemId\":\"60804db4-d09e-495e-8fe0-5718f789f213\",\"responsibleId\":\"7b38a507-b10a-4a73-a611-ac1f3d54f00b\",\"responsible\":\"Ing. Gustavo Tolaba\",\"department\":\"Docentes\",\"costCenter\":\"Administración\",\"quantity\":2,\"detail\":\"Trabajo práctico\",\"createdAt\":\"2026-08-24T12:23:12.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"56a3c493-4b33-477c-a1f4-4016faef2d58\",\"itemId\":\"7b0c770c-ece4-4fd1-9a9a-5339f1871f6b\",\"responsibleId\":\"ff3d1400-1076-4693-87eb-d6c96e0c56d7\",\"responsible\":\"Mónica Zerpa\",\"department\":\"Docentes\",\"costCenter\":\"Informática\",\"quantity\":3,\"detail\":\"Proyecto de 6° año\",\"createdAt\":\"2026-08-19T14:49:06.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"2b4548cd-0699-470e-a210-ea4bbf0000b3\",\"itemId\":\"bc5624d5-9e44-4f8a-bc06-31eac5c0b5e5\",\"responsibleId\":\"ad28fa86-c1cb-4f00-ac41-6979ea9bf9bc\",\"responsible\":\"Prof. Natalia Burgos\",\"department\":\"Docentes\",\"costCenter\":\"Administración\",\"quantity\":1,\"detail\":\"Trabajo práctico\",\"createdAt\":\"2026-08-14T12:49:46.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"63d1d215-7f8d-4837-b267-b29ed10f7552\",\"itemId\":\"3b41f019-476b-4110-bff4-a4d3d450620b\",\"responsibleId\":\"cd7f3c66-62ee-4ed9-8cb6-c62ff5dcf24c\",\"responsible\":\"Ignacio Álvarez\",\"department\":\"7° 3ra\",\"costCenter\":\"Administración\",\"quantity\":2,\"detail\":\"Trabajo práctico\",\"createdAt\":\"2026-08-07T14:30:31.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"c91bd513-1125-42e3-91b7-1693f8bbc2de\",\"itemId\":\"3b41f019-476b-4110-bff4-a4d3d450620b\",\"responsibleId\":\"2656615e-6278-467a-85ee-0b5b712946b3\",\"responsible\":\"Ing. Ricardo Salinas\",\"department\":\"Docentes\",\"costCenter\":\"Administración\",\"quantity\":3,\"detail\":\"\",\"createdAt\":\"2026-08-04T14:56:24.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"340f4f89-76d1-411c-a4c9-46b060b3f207\",\"itemId\":\"8245ae70-fe9a-4310-8dda-3a5dce87d9e6\",\"responsibleId\":\"649a5195-baf1-4068-9d13-3127c5cdffe3\",\"responsible\":\"Arq. Hernán Calizaya\",\"department\":\"Docentes\",\"costCenter\":\"Construcciones\",\"quantity\":3,\"detail\":\"Mantenimiento\",\"createdAt\":\"2026-08-03T13:51:19.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"70e94988-a10c-45c5-a387-4723ae441e8d\",\"itemId\":\"fed7a597-4211-4072-b13c-2d6b2c5995a7\",\"responsibleId\":\"ad28fa86-c1cb-4f00-ac41-6979ea9bf9bc\",\"responsible\":\"Prof. Natalia Burgos\",\"department\":\"Docentes\",\"costCenter\":\"Taller de Electromecánica\",\"quantity\":3,\"detail\":\"\",\"createdAt\":\"2026-07-28T18:58:10.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"9008c126-fce7-4944-949d-16ce4f8f8e3d\",\"itemId\":\"1ebfcad1-69cf-4c11-87b3-12b995b03528\",\"responsibleId\":\"2cd3f8e2-8cfb-4e2a-b452-5bf81bad9e53\",\"responsible\":\"Martina Martínez\",\"department\":\"5° 1ra\",\"costCenter\":\"Informática\",\"quantity\":7,\"detail\":\"Trabajo práctico\",\"createdAt\":\"2026-07-09T15:26:49.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"424c6cc2-2f36-4f61-9c96-f3fbf6e82959\",\"itemId\":\"179e74a6-392f-43e6-b097-a7ebc5272923\",\"responsibleId\":\"59185778-b455-4cc2-9c20-849cf62298d9\",\"responsible\":\"Prof. Silvina Rueda\",\"department\":\"Docentes\",\"costCenter\":\"Administración\",\"quantity\":2,\"detail\":\"Trabajo práctico\",\"createdAt\":\"2026-06-17T12:24:16.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"bbcfe286-1eb7-4fa1-aebe-f1e4adef1c74\",\"itemId\":\"179e74a6-392f-43e6-b097-a7ebc5272923\",\"responsibleId\":\"5668e951-7026-4cbd-ae88-d84cc1baf7ff\",\"responsible\":\"Raúl Villca\",\"department\":\"Docentes\",\"costCenter\":\"Construcciones\",\"quantity\":1,\"detail\":\"Mantenimiento\",\"createdAt\":\"2026-06-01T15:37:33.000Z\",\"createdBy\":\"Jorge Medina\"}],\"orientations\":[{\"id\":\"63b802eb-bde6-45d4-a606-d424dd34c6e0\",\"name\":\"Química\",\"description\":\"\",\"createdAt\":\"2026-05-22T19:36:24.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"6a7feeab-66e7-4207-9a6f-5916b5f2877b\",\"name\":\"Maestro Mayor de Obra\",\"description\":\"\",\"createdAt\":\"2026-05-22T11:52:23.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"11d90046-e2a4-4257-bc58-2567abce81a2\",\"name\":\"Administración de empresas\",\"description\":\"\",\"createdAt\":\"2026-05-22T17:56:22.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"b7648ca0-5470-4b4f-8fef-0788a4e090c6\",\"name\":\"Electricidad\",\"description\":\"\",\"createdAt\":\"2026-05-22T18:03:21.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"0e1a8741-cdcc-46b1-820c-31ea928f2ee2\",\"name\":\"Electromecánica\",\"description\":\"\",\"createdAt\":\"2026-05-22T18:05:20.000Z\",\"createdBy\":\"Administración Demo\"}],\"stockEntries\":[{\"id\":\"b32528a6-fbef-4f48-aec8-3305038d2db4\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"6ca813a7-80ca-4cab-8a78-c4578ce91703\",\"itemName\":\"Calibre digital 150 mm\",\"quantity\":2,\"unitCost\":36800,\"totalCost\":73600,\"provider\":\"Distribuidora Técnica del Norte SA\",\"invoice\":\"A-0012-00031577\",\"observation\":\"Compra directa (demo)\",\"purchaseInvoiceId\":\"883f5e1f-32d8-46bc-afc3-e208d1b81f8e\",\"supplierId\":\"abe78dc4-95c4-429b-abac-41f934187073\",\"createdAt\":\"2026-11-11T14:42:03.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"9fc25933-f8b1-4afa-9edd-4282b9aa6a16\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"ddd48e08-9618-4490-a36e-ba89fea347cf\",\"itemName\":\"Destornillador plano 6 mm\",\"quantity\":6,\"unitCost\":4600,\"totalCost\":27600,\"provider\":\"Ferretería El Tornillo SRL\",\"invoice\":\"A-0003-00012390\",\"observation\":\"Compra directa (demo)\",\"purchaseInvoiceId\":\"3b24962a-6e0f-4bd1-9ce9-c9a878616331\",\"supplierId\":\"890a8fad-c5fd-4298-b379-cc13e83f3a2d\",\"createdAt\":\"2026-10-19T14:36:02.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"d2863896-2ebc-4ce3-8c61-852880a1bf8a\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"826fecb7-20bf-4e02-b8f8-b9a2ccc02b92\",\"itemName\":\"Destornillador Phillips PH2\",\"quantity\":6,\"unitCost\":4700,\"totalCost\":28200,\"provider\":\"Ferretería El Tornillo SRL\",\"invoice\":\"A-0003-00012390\",\"observation\":\"Compra directa (demo)\",\"purchaseInvoiceId\":\"3b24962a-6e0f-4bd1-9ce9-c9a878616331\",\"supplierId\":\"890a8fad-c5fd-4298-b379-cc13e83f3a2d\",\"createdAt\":\"2026-10-19T14:36:02.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"bb11f646-9007-49c0-b8aa-0c0d61bac86a\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"cd2870ca-f7fc-4987-90f8-947cd376b0cb\",\"itemName\":\"Cinta aisladora\",\"quantity\":30,\"unitCost\":1050,\"totalCost\":31500,\"provider\":\"Ferretería El Tornillo SRL\",\"invoice\":\"A-0003-00012390\",\"observation\":\"Compra directa (demo)\",\"purchaseInvoiceId\":\"3b24962a-6e0f-4bd1-9ce9-c9a878616331\",\"supplierId\":\"890a8fad-c5fd-4298-b379-cc13e83f3a2d\",\"createdAt\":\"2026-10-19T14:36:02.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"4bac5216-5900-4ce9-b741-89a3a9eaaaf0\",\"entryType\":\"donacion\",\"targetType\":\"existing\",\"itemId\":\"a61485e0-e9e9-40bf-b045-1cd608c05b07\",\"itemName\":\"Guantes de descarne\",\"quantity\":2,\"unitCost\":5200,\"totalCost\":10400,\"donor\":\"Cooperadora escolar\",\"observation\":\"Donación registrada para la demo\",\"createdAt\":\"2026-10-08T13:30:08.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"d2e905e4-ec24-41e9-b1ea-9e7b5dacce3d\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"834bf7a4-8db3-4c4f-9325-680703352a8e\",\"itemName\":\"Kit Arduino Uno\",\"quantity\":4,\"unitCost\":41000,\"totalCost\":164000,\"provider\":\"Electro Insumos Andinos\",\"invoice\":\"B-0002-00004518\",\"observation\":\"\",\"purchaseRequestId\":\"90fc26b5-0d95-43db-84b8-b0082188d855\",\"confirmationId\":\"49f37e3e-5b85-43b2-a985-5821dcfd11a6\",\"supplierId\":\"2bef775c-e48b-403d-8b61-ed4148a7259b\",\"createdAt\":\"2026-10-01T15:12:38.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"615999de-c5cc-4499-886c-d9818c0bd85c\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"f7c481db-5d82-4c89-91e0-fb5b15922e19\",\"itemName\":\"Protoboard 830 puntos\",\"quantity\":10,\"unitCost\":6480,\"totalCost\":64800,\"provider\":\"Electro Insumos Andinos\",\"invoice\":\"B-0002-00004518\",\"observation\":\"\",\"purchaseRequestId\":\"90fc26b5-0d95-43db-84b8-b0082188d855\",\"confirmationId\":\"49f37e3e-5b85-43b2-a985-5821dcfd11a6\",\"supplierId\":\"2bef775c-e48b-403d-8b61-ed4148a7259b\",\"createdAt\":\"2026-10-01T15:12:38.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"b0820309-7f11-4f42-a74d-ea19813f56ff\",\"entryType\":\"donacion\",\"targetType\":\"existing\",\"itemId\":\"ebb7d368-95b1-4517-98bf-0716324c27d4\",\"itemName\":\"DELANTALES SIMPLES\",\"quantity\":5,\"unitCost\":100,\"totalCost\":500,\"donor\":\"Cooperadora escolar\",\"observation\":\"Donación registrada para la demo\",\"createdAt\":\"2026-09-15T13:23:48.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"52962701-6f92-496e-91fc-b5574b920102\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"af92aae6-c6ea-4751-b8d8-b82f6f6306e6\",\"itemName\":\"Taladro percutor 650 W\",\"quantity\":2,\"unitCost\":92500,\"totalCost\":185000,\"provider\":\"Distribuidora Técnica del Norte SA\",\"invoice\":\"A-0012-00031002\",\"observation\":\"Compra directa (demo)\",\"purchaseInvoiceId\":\"99c9cf6a-8ab1-4606-b690-cfcbeb8522f8\",\"supplierId\":\"abe78dc4-95c4-429b-abac-41f934187073\",\"createdAt\":\"2026-09-11T14:38:01.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"d98b2a3c-f21b-4dc4-8365-1c6fdbc62bde\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"7b0c770c-ece4-4fd1-9a9a-5339f1871f6b\",\"itemName\":\"Mecha HSS 6 mm\",\"quantity\":20,\"unitCost\":2100,\"totalCost\":42000,\"provider\":\"Distribuidora Técnica del Norte SA\",\"invoice\":\"A-0012-00031002\",\"observation\":\"Compra directa (demo)\",\"purchaseInvoiceId\":\"99c9cf6a-8ab1-4606-b690-cfcbeb8522f8\",\"supplierId\":\"abe78dc4-95c4-429b-abac-41f934187073\",\"createdAt\":\"2026-09-11T14:38:01.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"533877bc-5e05-4df1-b689-17cc5218816a\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"3776a681-3bd1-4daf-aa6a-1eba73e5eaf1\",\"itemName\":\"Protector auditivo\",\"quantity\":8,\"unitCost\":6400,\"totalCost\":51200,\"provider\":\"Seguridad Industrial Puna\",\"invoice\":\"A-0001-00007781\",\"observation\":\"Compra directa (demo)\",\"purchaseInvoiceId\":\"3f02f52f-f481-4eb2-871e-93ab4d679edd\",\"supplierId\":\"df7d24a6-278b-4214-a3dc-a6961636d3c6\",\"createdAt\":\"2026-08-17T14:07:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"a3a1d7f5-cb6c-4dac-8a54-28d47811e633\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"fb31d315-662e-484c-a0d8-b95ae8025350\",\"itemName\":\"Delantal de cuero\",\"quantity\":4,\"unitCost\":22800,\"totalCost\":91200,\"provider\":\"Seguridad Industrial Puna\",\"invoice\":\"A-0001-00007781\",\"observation\":\"Compra directa (demo)\",\"purchaseInvoiceId\":\"3f02f52f-f481-4eb2-871e-93ab4d679edd\",\"supplierId\":\"df7d24a6-278b-4214-a3dc-a6961636d3c6\",\"createdAt\":\"2026-08-17T14:07:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"a5294b11-e1a3-49b7-bfc6-8c9b79230a16\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"1ebfcad1-69cf-4c11-87b3-12b995b03528\",\"itemName\":\"Disco de corte 115 mm\",\"quantity\":50,\"unitCost\":1425,\"totalCost\":71250,\"provider\":\"Ferretería El Tornillo SRL\",\"invoice\":\"A-0003-00012045\",\"observation\":\"\",\"purchaseRequestId\":\"4176bd6e-b16a-4a64-ab91-41668872accd\",\"confirmationId\":\"9c190833-609d-45bf-95da-32da5e96817e\",\"supplierId\":\"890a8fad-c5fd-4298-b379-cc13e83f3a2d\",\"createdAt\":\"2026-07-31T15:43:32.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"77304ef2-5583-4bb7-8d61-7d0f2e24905c\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"97f0e575-4c08-4e55-ad64-df88e9651f25\",\"itemName\":\"Electrodo 2,5 mm (kg)\",\"quantity\":10,\"unitCost\":10200,\"totalCost\":102000,\"provider\":\"Ferretería El Tornillo SRL\",\"invoice\":\"A-0003-00012045\",\"observation\":\"\",\"purchaseRequestId\":\"4176bd6e-b16a-4a64-ab91-41668872accd\",\"confirmationId\":\"9c190833-609d-45bf-95da-32da5e96817e\",\"supplierId\":\"890a8fad-c5fd-4298-b379-cc13e83f3a2d\",\"createdAt\":\"2026-07-31T15:43:32.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"d20c0098-ee2c-4629-8627-225bfb125fff\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"a61485e0-e9e9-40bf-b045-1cd608c05b07\",\"itemName\":\"Guantes de descarne\",\"quantity\":12,\"unitCost\":5400,\"totalCost\":64800,\"provider\":\"Ferretería El Tornillo SRL\",\"invoice\":\"A-0003-00012045\",\"observation\":\"\",\"purchaseRequestId\":\"4176bd6e-b16a-4a64-ab91-41668872accd\",\"confirmationId\":\"9c190833-609d-45bf-95da-32da5e96817e\",\"supplierId\":\"890a8fad-c5fd-4298-b379-cc13e83f3a2d\",\"createdAt\":\"2026-07-31T15:43:32.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"df2f33bb-06d6-48a2-ad45-b1b68e0e9231\",\"entryType\":\"donacion\",\"targetType\":\"existing\",\"itemId\":\"a336c399-ef8d-4bda-8f13-4671f186a2d5\",\"itemName\":\"CODOS DE 3/4 IPS\",\"quantity\":5,\"unitCost\":100,\"totalCost\":500,\"donor\":\"Ex alumnos promoción 2015\",\"observation\":\"Donación registrada para la demo\",\"createdAt\":\"2026-07-06T13:31:44.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"08f4eb5e-d490-4c59-bf89-1f6d68ff91c3\",\"entryType\":\"donacion\",\"targetType\":\"existing\",\"itemId\":\"5b2ad245-6e91-48cd-94ae-19e199cd2824\",\"itemName\":\"Multímetro digital\",\"quantity\":1,\"unitCost\":28500,\"totalCost\":28500,\"donor\":\"Cooperadora escolar\",\"observation\":\"Donación registrada para la demo\",\"createdAt\":\"2026-06-18T13:33:17.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"a90248f1-2553-466c-bbd0-ba32b1b6c07d\",\"entryType\":\"donacion\",\"targetType\":\"existing\",\"itemId\":\"d8cff035-d152-4d84-802a-a9513111c803\",\"itemName\":\"DISCO ESMERIL GRANO 60 5\\\" DE 5 UNIDADES\",\"quantity\":1,\"unitCost\":100,\"totalCost\":100,\"donor\":\"Cooperadora escolar\",\"observation\":\"Donación registrada para la demo\",\"createdAt\":\"2026-06-03T13:34:40.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"9495df32-1da9-4d61-8644-9839410de909\",\"entryType\":\"donacion\",\"targetType\":\"existing\",\"itemId\":\"a9d642e8-0891-4feb-b69a-96cf35e517ae\",\"itemName\":\"MAQUINA DE SOLDAR\",\"quantity\":4,\"unitCost\":100,\"totalCost\":400,\"donor\":\"Empresa local (ficticia)\",\"observation\":\"Donación registrada para la demo\",\"createdAt\":\"2026-05-29T13:28:29.000Z\",\"createdBy\":\"Jorge Medina\"}],\"purchaseRequests\":[{\"id\":\"916e8aaf-0ac3-4fad-909d-bdfbc9c39cfe\",\"items\":[{\"itemId\":\"ff78810f-965c-4889-982a-746b1e7c3513\",\"itemName\":\"Pinza amperométrica\",\"code\":\"IM-003\",\"subcode\":\"\",\"quantity\":2,\"currentStock\":3,\"stockMinimum\":2,\"amount\":61000},{\"itemId\":\"9636fcd8-df32-4d90-8179-4c9a651c3528\",\"itemName\":\"Soldadora inverter 200 A\",\"code\":\"HE-004\",\"subcode\":\"\",\"quantity\":1,\"currentStock\":2,\"stockMinimum\":1,\"amount\":265000}],\"costCenter\":\"Informática\",\"observation\":\"Reposición de materiales en alerta de stock\",\"status\":\"pending_approval\",\"approval\":{\"steps\":[{\"key\":\"workshop\",\"label\":\"Jefe de taller\",\"status\":\"pending\",\"by\":\"\",\"byUsername\":\"\",\"at\":\"\",\"comment\":\"\"},{\"key\":\"rector\",\"label\":\"Rector\",\"status\":\"pending\",\"by\":\"\",\"byUsername\":\"\",\"at\":\"\",\"comment\":\"\"},{\"key\":\"accounting\",\"label\":\"Contable\",\"status\":\"pending\",\"by\":\"\",\"byUsername\":\"\",\"at\":\"\",\"comment\":\"\"}]},\"confirmations\":[],\"createdAt\":\"2026-11-19T13:01:49.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"b5b22d3c-74eb-4ecc-a68f-902f1d688844\",\"items\":[{\"itemId\":\"bf715ee9-54da-4a85-b129-9ec06d370d8d\",\"itemName\":\"Antiparras de seguridad\",\"code\":\"SG-001\",\"subcode\":\"\",\"quantity\":15,\"currentStock\":25,\"stockMinimum\":10,\"amount\":3900},{\"itemId\":\"db8ec694-b992-4d97-8aa0-fb36eb10230f\",\"itemName\":\"Careta de soldar fotosensible\",\"code\":\"SG-004\",\"subcode\":\"\",\"quantity\":2,\"currentStock\":4,\"stockMinimum\":2,\"amount\":47000},{\"itemId\":\"b7291595-93d7-4bc5-82ce-f3a3f1eebc81\",\"itemName\":\"Amoladora angular 115 mm\",\"code\":\"HE-002\",\"subcode\":\"\",\"quantity\":1,\"currentStock\":3,\"stockMinimum\":2,\"amount\":76500}],\"costCenter\":\"Informática\",\"observation\":\"Pedido para el taller de 4° año\",\"status\":\"pending_approval\",\"approval\":{\"steps\":[{\"key\":\"workshop\",\"label\":\"Jefe de taller\",\"status\":\"approved\",\"by\":\"Ricardo Sosa\",\"byUsername\":\"jefetaller\",\"at\":\"2026-11-17T12:53:48.000Z\",\"comment\":\"\"},{\"key\":\"rector\",\"label\":\"Rector\",\"status\":\"pending\",\"by\":\"\",\"byUsername\":\"\",\"at\":\"\",\"comment\":\"\"},{\"key\":\"accounting\",\"label\":\"Contable\",\"status\":\"pending\",\"by\":\"\",\"byUsername\":\"\",\"at\":\"\",\"comment\":\"\"}]},\"confirmations\":[],\"createdAt\":\"2026-11-16T13:38:47.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"a689383a-c314-4a5c-a98f-700ac9c72e3c\",\"items\":[{\"itemId\":\"2abfaf31-dda5-45d4-b6a0-e899eafc437d\",\"itemName\":\"Proyector multimedia\",\"code\":\"IN-002\",\"subcode\":\"\",\"quantity\":1,\"currentStock\":2,\"stockMinimum\":1,\"amount\":410000},{\"itemId\":\"2edd5d23-8a44-47ee-87e6-a9b93415fb93\",\"itemName\":\"Osciloscopio digital 2 canales\",\"code\":\"EL-005\",\"subcode\":\"\",\"quantity\":2,\"currentStock\":2,\"stockMinimum\":1,\"amount\":480000}],\"costCenter\":\"Taller de Electromecánica\",\"observation\":\"Equipamiento para el laboratorio de electrónica\",\"status\":\"pending\",\"approval\":{\"steps\":[{\"key\":\"workshop\",\"label\":\"Jefe de taller\",\"status\":\"approved\",\"by\":\"Ricardo Sosa\",\"byUsername\":\"jefetaller\",\"at\":\"2026-11-14T11:58:44.000Z\",\"comment\":\"\"},{\"key\":\"rector\",\"label\":\"Rector\",\"status\":\"approved\",\"by\":\"Miguel Toconas\",\"byUsername\":\"director\",\"at\":\"2026-11-14T14:52:45.000Z\",\"comment\":\"\"},{\"key\":\"accounting\",\"label\":\"Contable\",\"status\":\"approved\",\"by\":\"Claudia Ibarra\",\"byUsername\":\"contable\",\"at\":\"2026-11-14T16:29:46.000Z\",\"comment\":\"\"}]},\"confirmations\":[],\"createdAt\":\"2026-11-12T13:21:43.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"22a716b9-f96f-465b-bf64-b1c5699fd68f\",\"items\":[{\"itemId\":\"efc41a90-ee21-4a7d-8035-3256edd05770\",\"itemName\":\"Juego de llaves combinadas 6-22 mm\",\"code\":\"HM-001\",\"subcode\":\"\",\"quantity\":4,\"currentStock\":6,\"stockMinimum\":2,\"amount\":38500},{\"itemId\":\"1ed4e93f-e1cb-45d8-adde-80f19ed5efd7\",\"itemName\":\"Estaño 60/40 (rollo 250 g)\",\"code\":\"CO-004\",\"subcode\":\"\",\"quantity\":25,\"currentStock\":5,\"stockMinimum\":4,\"amount\":18500}],\"costCenter\":\"Construcciones\",\"observation\":\"Herramientas para el taller de 2° año\",\"status\":\"rejected\",\"approval\":{\"steps\":[{\"key\":\"workshop\",\"label\":\"Jefe de taller\",\"status\":\"approved\",\"by\":\"Ricardo Sosa\",\"byUsername\":\"jefetaller\",\"at\":\"2026-11-10T12:28:40.000Z\",\"comment\":\"\"},{\"key\":\"rector\",\"label\":\"Rector\",\"status\":\"approved\",\"by\":\"Miguel Toconas\",\"byUsername\":\"director\",\"at\":\"2026-11-10T14:54:41.000Z\",\"comment\":\"\"},{\"key\":\"accounting\",\"label\":\"Contable\",\"status\":\"rejected\",\"by\":\"Claudia Ibarra\",\"byUsername\":\"contable\",\"at\":\"2026-11-10T16:25:42.000Z\",\"comment\":\"Supera el presupuesto del centro de costos para este mes. Volver a pedir en diciembre.\"}]},\"confirmations\":[],\"createdAt\":\"2026-11-08T13:20:39.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"90fc26b5-0d95-43db-84b8-b0082188d855\",\"items\":[{\"itemId\":\"834bf7a4-8db3-4c4f-9325-680703352a8e\",\"itemName\":\"Kit Arduino Uno\",\"code\":\"EL-004\",\"subcode\":\"\",\"quantity\":6,\"currentStock\":10,\"stockMinimum\":4,\"amount\":39000},{\"itemId\":\"f7c481db-5d82-4c89-91e0-fb5b15922e19\",\"itemName\":\"Protoboard 830 puntos\",\"code\":\"EL-001\",\"subcode\":\"\",\"quantity\":10,\"currentStock\":14,\"stockMinimum\":6,\"amount\":6900},{\"itemId\":\"5b2ad245-6e91-48cd-94ae-19e199cd2824\",\"itemName\":\"Multímetro digital\",\"code\":\"IM-001\",\"subcode\":\"\",\"quantity\":4,\"currentStock\":12,\"stockMinimum\":4,\"amount\":28500}],\"costCenter\":\"Informática\",\"observation\":\"Laboratorio de electrónica · segundo cuatrimestre\",\"status\":\"partially_confirmed\",\"approval\":{\"steps\":[{\"key\":\"workshop\",\"label\":\"Jefe de taller\",\"status\":\"approved\",\"by\":\"Ricardo Sosa\",\"byUsername\":\"jefetaller\",\"at\":\"2026-09-23T12:11:34.000Z\",\"comment\":\"\"},{\"key\":\"rector\",\"label\":\"Rector\",\"status\":\"approved\",\"by\":\"Miguel Toconas\",\"byUsername\":\"director\",\"at\":\"2026-09-23T14:21:35.000Z\",\"comment\":\"\"},{\"key\":\"accounting\",\"label\":\"Contable\",\"status\":\"approved\",\"by\":\"Claudia Ibarra\",\"byUsername\":\"contable\",\"at\":\"2026-09-23T16:37:36.000Z\",\"comment\":\"\"}]},\"confirmations\":[{\"id\":\"49f37e3e-5b85-43b2-a985-5821dcfd11a6\",\"number\":1,\"supplierId\":\"2bef775c-e48b-403d-8b61-ed4148a7259b\",\"supplierName\":\"Electro Insumos Andinos\",\"supplierCuit\":\"20-28000789-8\",\"invoice\":\"B-0002-00004518\",\"observation\":\"Confirmación de la demo\",\"lines\":[{\"itemId\":\"834bf7a4-8db3-4c4f-9325-680703352a8e\",\"itemName\":\"Kit Arduino Uno\",\"code\":\"EL-004\",\"subcode\":\"\",\"quantity\":6,\"unitCost\":41000,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":246000,\"discountAmount\":0,\"subtotal\":246000,\"netUnitCost\":41000,\"receivedQuantity\":4},{\"itemId\":\"f7c481db-5d82-4c89-91e0-fb5b15922e19\",\"itemName\":\"Protoboard 830 puntos\",\"code\":\"EL-001\",\"subcode\":\"\",\"quantity\":10,\"unitCost\":7200,\"discountType\":\"percent\",\"discountValue\":10,\"gross\":72000,\"discountAmount\":7200,\"subtotal\":64800,\"netUnitCost\":6480,\"receivedQuantity\":10}],\"subtotal\":310800,\"withholdings\":0,\"invoiceTotal\":310800,\"totalWarning\":\"\",\"status\":\"partially_received\",\"createdAt\":\"2026-09-26T14:27:37.000Z\",\"createdBy\":\"Jorge Medina\"}],\"createdAt\":\"2026-09-21T13:37:33.000Z\",\"createdBy\":\"Jorge Medina\",\"provider\":\"Electro Insumos Andinos\",\"invoice\":\"B-0002-00004518\",\"fulfillment\":[{\"itemId\":\"834bf7a4-8db3-4c4f-9325-680703352a8e\",\"quantity\":4,\"totalCost\":164000,\"unitCost\":41000},{\"itemId\":\"f7c481db-5d82-4c89-91e0-fb5b15922e19\",\"quantity\":10,\"totalCost\":64800,\"unitCost\":6480}]},{\"id\":\"4176bd6e-b16a-4a64-ab91-41668872accd\",\"items\":[{\"itemId\":\"1ebfcad1-69cf-4c11-87b3-12b995b03528\",\"itemName\":\"Disco de corte 115 mm\",\"code\":\"CO-001\",\"subcode\":\"\",\"quantity\":50,\"currentStock\":46,\"stockMinimum\":20,\"amount\":1450},{\"itemId\":\"97f0e575-4c08-4e55-ad64-df88e9651f25\",\"itemName\":\"Electrodo 2,5 mm (kg)\",\"code\":\"CO-002\",\"subcode\":\"\",\"quantity\":10,\"currentStock\":18,\"stockMinimum\":8,\"amount\":9800},{\"itemId\":\"a61485e0-e9e9-40bf-b045-1cd608c05b07\",\"itemName\":\"Guantes de descarne\",\"code\":\"SG-002\",\"subcode\":\"\",\"quantity\":12,\"currentStock\":22,\"stockMinimum\":10,\"amount\":5200}],\"costCenter\":\"Laboratorio de Química\",\"observation\":\"Reposición de insumos de soldadura\",\"status\":\"completed\",\"approval\":{\"steps\":[{\"key\":\"workshop\",\"label\":\"Jefe de taller\",\"status\":\"approved\",\"by\":\"Ricardo Sosa\",\"byUsername\":\"jefetaller\",\"at\":\"2026-07-24T12:06:28.000Z\",\"comment\":\"\"},{\"key\":\"rector\",\"label\":\"Rector\",\"status\":\"approved\",\"by\":\"Miguel Toconas\",\"byUsername\":\"director\",\"at\":\"2026-07-24T14:35:29.000Z\",\"comment\":\"\"},{\"key\":\"accounting\",\"label\":\"Contable\",\"status\":\"approved\",\"by\":\"Claudia Ibarra\",\"byUsername\":\"contable\",\"at\":\"2026-07-24T16:36:30.000Z\",\"comment\":\"\"}]},\"confirmations\":[{\"id\":\"9c190833-609d-45bf-95da-32da5e96817e\",\"number\":1,\"supplierId\":\"890a8fad-c5fd-4298-b379-cc13e83f3a2d\",\"supplierName\":\"Ferretería El Tornillo SRL\",\"supplierCuit\":\"30-71000123-1\",\"invoice\":\"A-0003-00012045\",\"observation\":\"Confirmación de la demo\",\"lines\":[{\"itemId\":\"1ebfcad1-69cf-4c11-87b3-12b995b03528\",\"itemName\":\"Disco de corte 115 mm\",\"code\":\"CO-001\",\"subcode\":\"\",\"quantity\":50,\"unitCost\":1500,\"discountType\":\"percent\",\"discountValue\":5,\"gross\":75000,\"discountAmount\":3750,\"subtotal\":71250,\"netUnitCost\":1425,\"receivedQuantity\":50},{\"itemId\":\"97f0e575-4c08-4e55-ad64-df88e9651f25\",\"itemName\":\"Electrodo 2,5 mm (kg)\",\"code\":\"CO-002\",\"subcode\":\"\",\"quantity\":10,\"unitCost\":10200,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":102000,\"discountAmount\":0,\"subtotal\":102000,\"netUnitCost\":10200,\"receivedQuantity\":10},{\"itemId\":\"a61485e0-e9e9-40bf-b045-1cd608c05b07\",\"itemName\":\"Guantes de descarne\",\"code\":\"SG-002\",\"subcode\":\"\",\"quantity\":12,\"unitCost\":5400,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":64800,\"discountAmount\":0,\"subtotal\":64800,\"netUnitCost\":5400,\"receivedQuantity\":12}],\"subtotal\":238050,\"withholdings\":0,\"invoiceTotal\":238050,\"totalWarning\":\"\",\"status\":\"received\",\"createdAt\":\"2026-07-26T14:16:31.000Z\",\"createdBy\":\"Jorge Medina\"}],\"createdAt\":\"2026-07-23T13:52:27.000Z\",\"createdBy\":\"Jorge Medina\",\"provider\":\"Ferretería El Tornillo SRL\",\"invoice\":\"A-0003-00012045\",\"fulfillment\":[{\"itemId\":\"1ebfcad1-69cf-4c11-87b3-12b995b03528\",\"quantity\":50,\"totalCost\":71250,\"unitCost\":1425},{\"itemId\":\"97f0e575-4c08-4e55-ad64-df88e9651f25\",\"quantity\":10,\"totalCost\":102000,\"unitCost\":10200},{\"itemId\":\"a61485e0-e9e9-40bf-b045-1cd608c05b07\",\"quantity\":12,\"totalCost\":64800,\"unitCost\":5400}],\"fulfilledAt\":\"2026-11-20T20:15:35.960Z\",\"fulfilledBy\":\"Jorge Medina\"}],\"costCenters\":[{\"id\":\"fc4d5888-dde1-4bfc-ba1c-8b550cead34c\",\"name\":\"Administración\",\"description\":\"Gastos generales\",\"createdAt\":\"2026-05-22T11:16:19.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"77b9f09b-7436-4a9a-9f98-8acad35427dc\",\"name\":\"Construcciones\",\"description\":\"Maestro Mayor de Obras\",\"createdAt\":\"2026-05-22T18:21:18.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"0aedb053-2b75-4086-8281-5f503c5838c9\",\"name\":\"Informática\",\"description\":\"Sala de computación\",\"createdAt\":\"2026-05-22T15:42:17.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"740965b1-a3fd-4e10-b4c8-6163785d1c13\",\"name\":\"Laboratorio de Química\",\"description\":\"Prácticas de laboratorio\",\"createdAt\":\"2026-05-22T13:12:16.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"ab6246a1-a078-4107-8c8e-3b4e5039b214\",\"name\":\"Taller de Electromecánica\",\"description\":\"Prácticas de taller\",\"createdAt\":\"2026-05-22T19:51:15.000Z\",\"createdBy\":\"Administración Demo\"}],\"suppliers\":[{\"id\":\"df7d24a6-278b-4214-a3dc-a6961636d3c6\",\"name\":\"Seguridad Industrial Puna\",\"cuit\":\"30-71000999-2\",\"taxCondition\":\"Responsable Inscripto\",\"address\":\"San Salvador de Jujuy (dirección ficticia)\",\"phone\":\"388 400-4004\",\"email\":\"contacto@segpuna.demo\",\"contact\":\"Paula Ríos\",\"notes\":\"Proveedor ficticio para la demo.\",\"createdAt\":\"2026-11-20T20:15:30.605Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"2bef775c-e48b-403d-8b61-ed4148a7259b\",\"name\":\"Electro Insumos Andinos\",\"cuit\":\"20-28000789-8\",\"taxCondition\":\"Monotributista\",\"address\":\"San Salvador de Jujuy (dirección ficticia)\",\"phone\":\"388 400-3003\",\"email\":\"info@electroandinos.demo\",\"contact\":\"Diego Sosa\",\"notes\":\"Proveedor ficticio para la demo.\",\"createdAt\":\"2026-11-20T20:15:30.602Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"abe78dc4-95c4-429b-abac-41f934187073\",\"name\":\"Distribuidora Técnica del Norte SA\",\"cuit\":\"30-71000456-7\",\"taxCondition\":\"Responsable Inscripto\",\"address\":\"San Salvador de Jujuy (dirección ficticia)\",\"phone\":\"388 400-2002\",\"email\":\"pedidos@dtnorte.demo\",\"contact\":\"Martín Ibarra\",\"notes\":\"Proveedor ficticio para la demo.\",\"createdAt\":\"2026-11-20T20:15:30.600Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"890a8fad-c5fd-4298-b379-cc13e83f3a2d\",\"name\":\"Ferretería El Tornillo SRL\",\"cuit\":\"30-71000123-1\",\"taxCondition\":\"Responsable Inscripto\",\"address\":\"San Salvador de Jujuy (dirección ficticia)\",\"phone\":\"388 400-1001\",\"email\":\"ventas@eltornillo.demo\",\"contact\":\"Carina Vega\",\"notes\":\"Proveedor ficticio para la demo.\",\"createdAt\":\"2026-11-20T20:15:30.597Z\",\"createdBy\":\"Jorge Medina\"}],\"purchaseInvoices\":[{\"id\":\"883f5e1f-32d8-46bc-afc3-e208d1b81f8e\",\"number\":4,\"supplierId\":\"abe78dc4-95c4-429b-abac-41f934187073\",\"supplierName\":\"Distribuidora Técnica del Norte SA\",\"supplierCuit\":\"30-71000456-7\",\"invoice\":\"A-0012-00031577\",\"invoiceDate\":\"2026-11-10\",\"observation\":\"Compra directa (demo)\",\"lines\":[{\"itemId\":\"6ca813a7-80ca-4cab-8a78-c4578ce91703\",\"itemName\":\"Calibre digital 150 mm\",\"code\":\"IM-002\",\"subcode\":\"\",\"quantity\":2,\"unitCost\":36800,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":73600,\"discountAmount\":0,\"subtotal\":73600,\"netUnitCost\":36800}],\"subtotal\":73600,\"withholdings\":0,\"invoiceTotal\":73600,\"totalWarning\":\"\",\"createdAt\":\"2026-11-11T14:42:03.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"3b24962a-6e0f-4bd1-9ce9-c9a878616331\",\"number\":3,\"supplierId\":\"890a8fad-c5fd-4298-b379-cc13e83f3a2d\",\"supplierName\":\"Ferretería El Tornillo SRL\",\"supplierCuit\":\"30-71000123-1\",\"invoice\":\"A-0003-00012390\",\"invoiceDate\":\"2026-10-18\",\"observation\":\"Compra directa (demo)\",\"lines\":[{\"itemId\":\"ddd48e08-9618-4490-a36e-ba89fea347cf\",\"itemName\":\"Destornillador plano 6 mm\",\"code\":\"HM-002\",\"subcode\":\"\",\"quantity\":6,\"unitCost\":4600,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":27600,\"discountAmount\":0,\"subtotal\":27600,\"netUnitCost\":4600},{\"itemId\":\"826fecb7-20bf-4e02-b8f8-b9a2ccc02b92\",\"itemName\":\"Destornillador Phillips PH2\",\"code\":\"HM-003\",\"subcode\":\"\",\"quantity\":6,\"unitCost\":4700,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":28200,\"discountAmount\":0,\"subtotal\":28200,\"netUnitCost\":4700},{\"itemId\":\"cd2870ca-f7fc-4987-90f8-947cd376b0cb\",\"itemName\":\"Cinta aisladora\",\"code\":\"CO-003\",\"subcode\":\"\",\"quantity\":30,\"unitCost\":1050,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":31500,\"discountAmount\":0,\"subtotal\":31500,\"netUnitCost\":1050}],\"subtotal\":87300,\"withholdings\":0,\"invoiceTotal\":87300,\"totalWarning\":\"\",\"createdAt\":\"2026-10-19T14:36:02.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"99c9cf6a-8ab1-4606-b690-cfcbeb8522f8\",\"number\":2,\"supplierId\":\"abe78dc4-95c4-429b-abac-41f934187073\",\"supplierName\":\"Distribuidora Técnica del Norte SA\",\"supplierCuit\":\"30-71000456-7\",\"invoice\":\"A-0012-00031002\",\"invoiceDate\":\"2026-09-10\",\"observation\":\"Compra directa (demo)\",\"lines\":[{\"itemId\":\"af92aae6-c6ea-4751-b8d8-b82f6f6306e6\",\"itemName\":\"Taladro percutor 650 W\",\"code\":\"HE-001\",\"subcode\":\"\",\"quantity\":2,\"unitCost\":92500,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":185000,\"discountAmount\":0,\"subtotal\":185000,\"netUnitCost\":92500},{\"itemId\":\"7b0c770c-ece4-4fd1-9a9a-5339f1871f6b\",\"itemName\":\"Mecha HSS 6 mm\",\"code\":\"CO-006\",\"subcode\":\"\",\"quantity\":20,\"unitCost\":2100,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":42000,\"discountAmount\":0,\"subtotal\":42000,\"netUnitCost\":2100}],\"subtotal\":227000,\"withholdings\":0,\"invoiceTotal\":227000,\"totalWarning\":\"\",\"createdAt\":\"2026-09-11T14:38:01.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"3f02f52f-f481-4eb2-871e-93ab4d679edd\",\"number\":1,\"supplierId\":\"df7d24a6-278b-4214-a3dc-a6961636d3c6\",\"supplierName\":\"Seguridad Industrial Puna\",\"supplierCuit\":\"30-71000999-2\",\"invoice\":\"A-0001-00007781\",\"invoiceDate\":\"2026-08-16\",\"observation\":\"Compra directa (demo)\",\"lines\":[{\"itemId\":\"3776a681-3bd1-4daf-aa6a-1eba73e5eaf1\",\"itemName\":\"Protector auditivo\",\"code\":\"SG-003\",\"subcode\":\"\",\"quantity\":8,\"unitCost\":6400,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":51200,\"discountAmount\":0,\"subtotal\":51200,\"netUnitCost\":6400},{\"itemId\":\"fb31d315-662e-484c-a0d8-b95ae8025350\",\"itemName\":\"Delantal de cuero\",\"code\":\"SG-005\",\"subcode\":\"\",\"quantity\":4,\"unitCost\":22800,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":91200,\"discountAmount\":0,\"subtotal\":91200,\"netUnitCost\":22800}],\"subtotal\":142400,\"withholdings\":0,\"invoiceTotal\":142400,\"totalWarning\":\"\",\"createdAt\":\"2026-08-17T14:07:00.000Z\",\"createdBy\":\"Jorge Medina\"}],\"rolePermissions\":[],\"writeOffs\":[{\"id\":\"d92113be-92e8-4b72-a4b4-572a52dd5a7e\",\"itemId\":\"a4d311ae-bc14-4963-b42c-702c581cd5ae\",\"itemName\":\"Notebook 14\\\"\",\"itemCode\":\"IN-001\",\"quantity\":6,\"unit\":\"unidad\",\"unitCost\":720000,\"reason\":\"Obsolescencia / desuso\",\"observation\":\"Equipos viejos que ya no funcionan; se envían a reciclaje\",\"date\":\"2026-11-14\",\"time\":\"12:19\",\"retire\":true,\"createdAt\":\"2026-11-14T15:19:26.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"4cc551bf-eb76-490d-b8ea-101ff4985364\",\"itemId\":\"7b0c770c-ece4-4fd1-9a9a-5339f1871f6b\",\"itemName\":\"Mecha HSS 6 mm\",\"itemCode\":\"CO-006\",\"quantity\":6,\"unit\":\"unidad\",\"unitCost\":1900,\"reason\":\"Desgaste / fin de vida útil\",\"observation\":\"Mechas sin filo después del trimestre\",\"date\":\"2026-11-01\",\"time\":\"10:53\",\"retire\":false,\"createdAt\":\"2026-11-01T13:53:25.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"8b2aef38-4112-4fe4-8325-5a9e7c0ab3f9\",\"itemId\":\"5b2ad245-6e91-48cd-94ae-19e199cd2824\",\"itemName\":\"Multímetro digital\",\"itemCode\":\"IM-001\",\"quantity\":1,\"unit\":\"unidad\",\"unitCost\":28500,\"reason\":\"Robo o hurto\",\"observation\":\"Faltante detectado en el control mensual; se labró acta n.° 14/2026\",\"date\":\"2026-10-17\",\"time\":\"15:58\",\"retire\":false,\"createdAt\":\"2026-10-17T18:58:24.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"95ac44f5-c1d8-47b2-98ab-c76b28e148ad\",\"itemId\":\"1ebfcad1-69cf-4c11-87b3-12b995b03528\",\"itemName\":\"Disco de corte 115 mm\",\"itemCode\":\"CO-001\",\"quantity\":4,\"unit\":\"unidad\",\"unitCost\":1450,\"reason\":\"Rotura o daño irreparable\",\"observation\":\"Discos partidos durante la práctica de 3° año\",\"date\":\"2026-09-21\",\"time\":\"11:52\",\"retire\":false,\"createdAt\":\"2026-09-21T14:52:23.000Z\",\"createdBy\":\"Jorge Medina\"}]},\"users\":[{\"id\":\"f3bbfcbc-7b62-4461-8475-93dfa2a90907\",\"username\":\"admin\",\"name\":\"Administración Demo\",\"role\":\"admin\",\"password\":\"demo$demo2026\",\"mustChangePassword\":false},{\"id\":\"3da690e0-469a-4ac5-b781-c0e1bb1881f5\",\"username\":\"director\",\"name\":\"Miguel Toconas\",\"role\":\"directivo\",\"password\":\"demo$demo2026\",\"mustChangePassword\":false},{\"id\":\"1777ffe7-4985-4c74-91b3-1daef8bf8de3\",\"username\":\"jefetaller\",\"name\":\"Ricardo Sosa\",\"role\":\"jefe_taller\",\"password\":\"demo$demo2026\",\"mustChangePassword\":false},{\"id\":\"9e1f67dd-1d8f-4f0a-878c-574ec3d927b6\",\"username\":\"contable\",\"name\":\"Claudia Ibarra\",\"role\":\"contable\",\"password\":\"demo$demo2026\",\"mustChangePassword\":false},{\"id\":\"ccdbb9e6-8f55-4eca-8ace-69165c5e3d31\",\"username\":\"panolero\",\"name\":\"Jorge Medina\",\"role\":\"panolero\",\"password\":\"demo$demo2026\",\"mustChangePassword\":false},{\"id\":\"78cbdd7d-3c31-471c-b112-6bf015c46006\",\"username\":\"docente\",\"name\":\"Lucía Romero\",\"role\":\"docente\",\"password\":\"demo$demo2026\",\"mustChangePassword\":false},{\"id\":\"f6d845b9-166a-4b0e-a5ca-797410d3aea0\",\"username\":\"administrativo\",\"name\":\"Sergio Paz\",\"role\":\"administrativo\",\"password\":\"demo$demo2026\",\"mustChangePassword\":false}]}" };

  // Versión de los datos de partida: si se publica una demo con otros datos (materiales, usuarios, etc.),
  // el navegador descarta lo guardado de la versión anterior y arranca con los datos nuevos.
  var DATA_VERSION = "a1fa041f7aed";
  try {
    if (localStorage.getItem(PREFIX + "version") !== DATA_VERSION) {
      Object.keys(localStorage).forEach(function (name) { if (name.indexOf(PREFIX) === 0) localStorage.removeItem(name); });
      try { sessionStorage.removeItem(TOKEN_KEY); } catch (ignored) {}
      localStorage.setItem(PREFIX + "version", DATA_VERSION);
    }
  } catch (ignored) {}

  // --- Entorno de Node simulado ---------------------------------------------------
  var nativeSetTimeout = window.setTimeout.bind(window);
  var nativeSetInterval = window.setInterval.bind(window);
  function timer(id) { return { unref: function () { return this; }, ref: function () { return this; }, id: id }; }
  var setTimeout = function (fn, ms) { return timer(nativeSetTimeout(fn, ms)); };
  var setInterval = function (fn, ms) { return timer(nativeSetInterval(fn, ms)); };
  var process = {
    env: { STORAGE_MODE: "json", DEMO_MODE: "true", DATA_DIR: "/data", PORT: "0" },
    pid: 1, version: "v22-navegador", platform: "browser",
    cwd: function () { return "/app"; }, emitWarning: function () {},
  };

  var clock = Date.now();
  var mtimes = {};
  function key(file) { return PREFIX + String(file); }
  function enoent(file) { var error = new Error("ENOENT: " + file); error.code = "ENOENT"; return error; }
  function read(file) {
    var value = localStorage.getItem(key(file));
    if (value === null && Object.prototype.hasOwnProperty.call(STATIC_FILES, file)) value = STATIC_FILES[file];
    return value;
  }
  function touch(file) { mtimes[file] = ++clock; }
  // Si otra pestaña guarda cambios, esta vuelve a leerlos.
  window.addEventListener("storage", function (event) {
    if (event.key && event.key.indexOf(PREFIX) === 0) touch(event.key.slice(PREFIX.length));
  });

  var shims = {
    "shim:fs": {
      existsSync: function (file) { return read(file) !== null; },
      statSync: function (file) {
        var value = read(file);
        if (value === null) throw enoent(file);
        return { mtimeMs: mtimes[file] || 1, size: value.length, isFile: function () { return true; }, isDirectory: function () { return false; } };
      },
      readFileSync: function (file) {
        var value = read(file);
        if (value === null) throw enoent(file);
        return value;
      },
      writeFileSync: function (file, data) {
        try {
          localStorage.setItem(key(file), String(data));
        } catch (error) {
          throw new Error("El navegador no tiene más espacio para la demo. Usá «Restablecer datos de la demo» en la pantalla de ingreso.");
        }
        touch(file);
      },
      renameSync: function (from, to) {
        var value = localStorage.getItem(key(from));
        if (value === null) throw enoent(from);
        localStorage.setItem(key(to), value);
        localStorage.removeItem(key(from));
        touch(to);
      },
      rmSync: function (file) { localStorage.removeItem(key(file)); touch(file); },
      mkdirSync: function () {},
      readdirSync: function () { return []; },
    },
    "shim:path": (function () {
      function normalize(value) {
        var parts = [];
        String(value).split("/").forEach(function (part) {
          if (!part || part === ".") return;
          if (part === "..") parts.pop(); else parts.push(part);
        });
        return "/" + parts.join("/");
      }
      return {
        sep: "/",
        join: function () { return normalize(Array.prototype.join.call(arguments, "/")); },
        resolve: function () {
          var result = "";
          Array.prototype.forEach.call(arguments, function (part) { result = String(part).charAt(0) === "/" ? part : result + "/" + part; });
          return normalize(result || "/app");
        },
        normalize: normalize,
        dirname: function (value) { var n = normalize(value); return n.slice(0, n.lastIndexOf("/")) || "/"; },
        basename: function (value) { var n = normalize(value); return n.slice(n.lastIndexOf("/") + 1); },
        extname: function (value) { var b = String(value).split("/").pop(); var i = b.lastIndexOf("."); return i > 0 ? b.slice(i) : ""; },
        relative: function (from, to) { return String(to); },
      };
    })(),
    "shim:crypto": {
      randomUUID: function () { return window.crypto.randomUUID(); },
      randomBytes: function (size) {
        var bytes = window.crypto.getRandomValues(new Uint8Array(size));
        return { toString: function () { return Array.prototype.map.call(bytes, function (b) { return ("0" + b.toString(16)).slice(-2); }).join(""); } };
      },
      createHash: function () {
        var data = "";
        return {
          update: function (value) { data += String(value); return this; },
          digest: function () {
            // Hash no criptográfico (FNV-1a de 4 vueltas): alcanza para identificar sesiones de prueba.
            var out = "";
            for (var round = 0; round < 4; round += 1) {
              var h = 2166136261 ^ round;
              for (var i = 0; i < data.length; i += 1) { h ^= data.charCodeAt(i); h = Math.imul(h, 16777619); }
              out += ("0000000" + (h >>> 0).toString(16)).slice(-8);
            }
            return out;
          },
        };
      },
      scryptSync: function () { throw new Error("No disponible en la demo web."); },
      timingSafeEqual: function (a, b) { return String(a) === String(b); },
    },
    "shim:zlib": { gzipSync: function (value) { return value; } },
  };

  // --- Módulos del servidor ----------------------------------------------------
  var MODULES = {
  "src/app.js": [{"./http/responses":"src/http/responses.js","./http/body":"src/http/body.js","./http/security":"src/http/security.js","./http/static":"src/http/static.js","./http/router":"src/http/router.js","./auth/guards":"src/auth/guards.js","./data/store":"src/data/store.js","./auth/permissions":"src/auth/permissions.js","./routes/auth":"src/routes/auth.js","./routes/dashboard":"src/routes/dashboard.js","./routes/users":"src/routes/users.js","./routes/masterData":"src/routes/masterData.js","./routes/suppliers":"src/routes/suppliers.js","./routes/responsibles":"src/routes/responsibles.js","./routes/items":"src/routes/items.js","./routes/loans":"src/routes/loans.js","./routes/consumptions":"src/routes/consumptions.js","./routes/stockEntries":"src/routes/stockEntries.js","./routes/purchaseRequests":"src/routes/purchaseRequests.js","./routes/purchaseInvoices":"src/routes/purchaseInvoices.js","./routes/permissions":"src/routes/permissions.js"}, function (require, module, exports, __dirname, __filename) {
const { sendJson } = require("./http/responses");
const { readJsonBody } = require("./http/body");
const { applySecurityHeaders, isSameOriginRequest } = require("./http/security");
const { serveStatic } = require("./http/static");
const { createRouter } = require("./http/router");
const { requireAuth, requireRole } = require("./auth/guards");
const { withWriteLock } = require("./data/store");
const { requirePermission } = require("./auth/permissions");

// Cada módulo de rutas registra sus endpoints en el router.
const router = createRouter();
[
  require("./routes/auth"),
  require("./routes/dashboard"),
  require("./routes/users"),
  require("./routes/masterData"),
  require("./routes/suppliers"),
  require("./routes/responsibles"),
  require("./routes/items"),
  require("./routes/loans"),
  require("./routes/consumptions"),
  require("./routes/stockEntries"),
  require("./routes/purchaseRequests"),
  require("./routes/purchaseInvoices"),
  require("./routes/permissions"),
].forEach((routes) => routes.register(router));

// Verifica la sesión y el rol o permiso que pide la ruta. Devuelve null si ya se respondió con un error.
async function authorize(req, res, auth) {
  if (auth === null) {
    return {};
  }
  if (auth && typeof auth === "object" && !Array.isArray(auth) && auth.permission) {
    const session = requireAuth(req, res);
    if (!session) return null;
    return (await requirePermission(res, session, auth.permission)) ? { session } : null;
  }
  const session = auth === "any" ? requireAuth(req, res) : requireRole(req, res, auth);
  return session ? { session } : null;
}

async function handleApi(req, res, url) {
  const found = router.match(req.method, url.pathname);
  if (!found) {
    sendJson(res, 404, { error: "Ruta no encontrada." });
    return;
  }

  const context = await authorize(req, res, found.route.auth);
  if (!context) {
    return;
  }

  await found.route.handler({ req, res, url, params: found.params, session: context.session });
}

function sendError(req, res, error) {
  if (res.headersSent) {
    console.error(error);
    res.end();
    return;
  }

  if (error.name === "ValidationError") {
    sendJson(res, 400, { error: error.message });
    return;
  }

  if (error.statusCode) {
    sendJson(res, error.statusCode, { error: error.message });
    return;
  }

  console.error(`[${new Date().toISOString()}] Error en ${req.method} ${req.url}:`, error);
  sendJson(res, 500, { error: "Ocurrió un error interno. Revisá el registro del servidor." });
}

// Punto de entrada de cada pedido HTTP.
async function handleRequest(req, res) {
  applySecurityHeaders(res);
  try {
    const url = new URL(req.url, "http://localhost");

    if (!url.pathname.startsWith("/api/")) {
      serveStatic(req, res, url);
      return;
    }

    res.setHeader("Cache-Control", "no-store");
    if (!isSameOriginRequest(req)) {
      sendJson(res, 403, { error: "Origen no permitido." });
      return;
    }

    if (req.method === "GET" || req.method === "HEAD") {
      await handleApi(req, res, url);
      return;
    }

    // El cuerpo se lee antes de tomar el turno de escritura: un cliente lento no frena a los demás.
    req.bodyPromise = readJsonBody(req);
    await req.bodyPromise;
    // Las escrituras se serializan para que dos pedidos simultáneos no se pisen los datos.
    await withWriteLock(() => handleApi(req, res, url));
  } catch (error) {
    sendError(req, res, error);
  }
}

module.exports = { handleRequest, router };

}],
  "src/http/responses.js": [{}, function (require, module, exports, __dirname, __filename) {
// Respuestas HTTP y errores que el manejador central convierte en respuestas.

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(data));
}

function sendText(res, statusCode, message) {
  res.writeHead(statusCode, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(message);
}

// Error de validación: se responde 400 con el mensaje.
function validationError(message) {
  const error = new Error(message);
  error.name = "ValidationError";
  return error;
}

// Error con código HTTP explícito (413, 400, etc.).
function httpError(statusCode, message) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}

module.exports = { sendJson, sendText, validationError, httpError };

}],
  "src/http/body.js": [{"../config":"src/config.js","./responses":"src/http/responses.js"}, function (require, module, exports, __dirname, __filename) {
const { MAX_BODY_BYTES } = require("../config");
const { httpError } = require("./responses");

// Lee el cuerpo JSON del pedido con un límite de tamaño. Si ya se leyó, devuelve la misma promesa.
function readJsonBody(req) {
  if (req.bodyPromise) {
    return req.bodyPromise;
  }

  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    let tooLarge = false;

    req.on("data", (chunk) => {
      if (tooLarge) {
        return;
      }
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        tooLarge = true;
        reject(httpError(413, "El contenido enviado es demasiado grande."));
        req.resume();
        return;
      }
      chunks.push(chunk);
    });

    req.on("end", () => {
      if (tooLarge) {
        return;
      }
      const raw = Buffer.concat(chunks).toString("utf8");
      if (!raw) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(raw));
      } catch (error) {
        reject(httpError(400, "JSON inválido."));
      }
    });

    req.on("error", reject);
  });
}

module.exports = { readJsonBody };

}],
  "src/config.js": [{"fs":"shim:fs","path":"shim:path"}, function (require, module, exports, __dirname, __filename) {
const fs = require("fs");
const path = require("path");

// Carpeta raíz de la aplicación (donde están server.js, public/ y data/).
const ROOT_DIR = path.join(__dirname, "..");

function loadEnvFile() {
  const envFile = path.join(ROOT_DIR, ".env");
  if (!fs.existsSync(envFile)) {
    return;
  }

  const lines = fs.readFileSync(envFile, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^"(.*)"$/, "$1");
    if (!(key in process.env)) {
      process.env[key] = value;
    }
  }
}

loadEnvFile();

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(ROOT_DIR, "public");
// DATA_DIR permite usar otra carpeta de datos (por ejemplo, en las pruebas automáticas).
const DATA_DIR = process.env.DATA_DIR ? path.resolve(process.env.DATA_DIR) : path.join(ROOT_DIR, "data");
const DB_FILE = path.join(DATA_DIR, "db.json");
const USERS_FILE = path.join(DATA_DIR, "users.json");
const SESSIONS_FILE = path.join(DATA_DIR, "sessions.json");
const STORAGE_MODE = String(process.env.STORAGE_MODE || "json").trim().toLowerCase();
const USE_MYSQL = STORAGE_MODE === "mysql";
// SQLite embebido (un solo archivo, sin servidor): STORAGE_MODE=sqlite. Usado por la versión demo.
const USE_SQLITE = STORAGE_MODE === "sqlite";
const SQLITE_FILE = process.env.SQLITE_FILE ? path.resolve(ROOT_DIR, process.env.SQLITE_FILE) : path.join(DATA_DIR, "panol.sqlite");
// Versión demo: datos ficticios, cartel "DEMO" y usuarios de prueba visibles en la pantalla de ingreso.
const DEMO_MODE = String(process.env.DEMO_MODE || "false").toLowerCase() === "true";

// --- Seguridad ---
const TLS_CERT_FILE = process.env.TLS_CERT_FILE || "";
const TLS_KEY_FILE = process.env.TLS_KEY_FILE || "";
const USE_HTTPS = Boolean(TLS_CERT_FILE && TLS_KEY_FILE);
const TRUST_PROXY = String(process.env.TRUST_PROXY || "false").toLowerCase() === "true";
const COOKIE_SECURE = USE_HTTPS || String(process.env.COOKIE_SECURE || "false").toLowerCase() === "true";
const SESSION_COOKIE = "panol_session";
const SESSION_TTL_MS = Number(process.env.SESSION_TTL_HOURS || 8) * 60 * 60 * 1000;
const SESSION_IDLE_MS = Number(process.env.SESSION_IDLE_MINUTES || 120) * 60 * 1000;
const MAX_BODY_BYTES = Number(process.env.MAX_BODY_BYTES || 1024 * 1024);
const LOGIN_MAX_FAILS_PER_USER = 5;
const LOGIN_MAX_FAILS_PER_IP = 20;
const LOGIN_WINDOW_MS = 15 * 60 * 1000;
const LOGIN_LOCK_MS = 15 * 60 * 1000;

// --- Roles ---
const VALID_USER_ROLES = ["admin", "directivo", "jefe_taller", "contable", "administrativo", "docente", "panolero"];
const ROLES_WITH_PERSONAL_DATA = ["admin", "panolero", "administrativo", "directivo"];

module.exports = {
  ROOT_DIR,
  PORT,
  PUBLIC_DIR,
  DATA_DIR,
  DB_FILE,
  USERS_FILE,
  SESSIONS_FILE,
  STORAGE_MODE,
  USE_MYSQL,
  USE_SQLITE,
  SQLITE_FILE,
  DEMO_MODE,
  TLS_CERT_FILE,
  TLS_KEY_FILE,
  USE_HTTPS,
  TRUST_PROXY,
  COOKIE_SECURE,
  SESSION_COOKIE,
  SESSION_TTL_MS,
  SESSION_IDLE_MS,
  MAX_BODY_BYTES,
  LOGIN_MAX_FAILS_PER_USER,
  LOGIN_MAX_FAILS_PER_IP,
  LOGIN_WINDOW_MS,
  LOGIN_LOCK_MS,
  VALID_USER_ROLES,
  ROLES_WITH_PERSONAL_DATA,
};

}],
  "src/http/security.js": [{"../config":"src/config.js"}, function (require, module, exports, __dirname, __filename) {
const { USE_HTTPS, COOKIE_SECURE, TRUST_PROXY } = require("../config");

// Encabezados de seguridad en todas las respuestas.
function applySecurityHeaders(res) {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; " +
      "font-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'"
  );
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "no-referrer");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  if (USE_HTTPS || COOKIE_SECURE) {
    res.setHeader("Strict-Transport-Security", "max-age=15552000");
  }
}

// Protección CSRF adicional a la cookie SameSite: rechaza escrituras que vengan de otro sitio.
function isSameOriginRequest(req) {
  if (req.method === "GET" || req.method === "HEAD") {
    return true;
  }

  const origin = req.headers.origin;
  if (!origin) {
    return true;
  }

  try {
    const forwardedHost = TRUST_PROXY ? String(req.headers["x-forwarded-host"] || "").split(",")[0].trim() : "";
    return new URL(origin).host === (forwardedHost || req.headers.host);
  } catch (error) {
    return false;
  }
}

function getClientIp(req) {
  if (TRUST_PROXY) {
    const forwarded = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim();
    if (forwarded) {
      return forwarded;
    }
  }
  return req.socket.remoteAddress || "desconocida";
}

module.exports = { applySecurityHeaders, isSameOriginRequest, getClientIp };

}],
  "src/http/static.js": [{"fs":"shim:fs","path":"shim:path","crypto":"shim:crypto","zlib":"shim:zlib","../config":"src/config.js","./responses":"src/http/responses.js"}, function (require, module, exports, __dirname, __filename) {
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const zlib = require("zlib");
const { PUBLIC_DIR } = require("../config");
const { sendText } = require("./responses");

// Archivos de public/: caché en memoria, gzip y ETag.
const staticCache = new Map();

function serveStatic(req, res, url) {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.setHeader("Allow", "GET, HEAD");
    sendText(res, 405, "Método no permitido.");
    return;
  }

  let pathname;
  try {
    pathname = decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname);
  } catch (error) {
    sendText(res, 400, "Ruta inválida.");
    return;
  }

  const requestedPath = path.normalize(path.join(PUBLIC_DIR, pathname));
  if (!requestedPath.startsWith(PUBLIC_DIR + path.sep)) {
    sendText(res, 403, "Acceso denegado.");
    return;
  }

  let entry;
  try {
    entry = getStaticEntry(requestedPath);
  } catch (error) {
    sendText(res, 404, "Archivo no encontrado.");
    return;
  }

  // "no-cache" = el navegador guarda el archivo pero confirma con el servidor (ETag) que no cambió.
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("ETag", entry.etag);
  res.setHeader("Vary", "Accept-Encoding");

  if (req.headers["if-none-match"] === entry.etag) {
    res.writeHead(304);
    res.end();
    return;
  }

  const acceptsGzip = /\bgzip\b/.test(String(req.headers["accept-encoding"] || ""));
  const body = acceptsGzip && entry.gzip ? entry.gzip : entry.raw;
  const headers = { "Content-Type": entry.contentType, "Content-Length": body.length };
  if (body === entry.gzip) {
    headers["Content-Encoding"] = "gzip";
  }
  res.writeHead(200, headers);
  res.end(req.method === "HEAD" ? undefined : body);
}

function getStaticEntry(filePath) {
  const stats = fs.statSync(filePath);
  if (!stats.isFile()) {
    throw new Error("No es un archivo.");
  }

  const cached = staticCache.get(filePath);
  if (cached && cached.mtimeMs === stats.mtimeMs && cached.size === stats.size) {
    return cached;
  }

  const raw = fs.readFileSync(filePath);
  const contentType = getContentType(filePath);
  const compressible = /^(text\/|application\/(javascript|json))/.test(contentType) && raw.length > 1024;
  const entry = {
    mtimeMs: stats.mtimeMs,
    size: stats.size,
    raw,
    gzip: compressible ? zlib.gzipSync(raw) : null,
    contentType,
    etag: `"${crypto.createHash("sha1").update(raw).digest("hex").slice(0, 20)}"`,
  };
  staticCache.set(filePath, entry);
  return entry;
}

function getContentType(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  const types = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".webp": "image/webp",
  };

  return types[extension] || "application/octet-stream";
}

module.exports = { serveStatic };

}],
  "src/http/router.js": [{}, function (require, module, exports, __dirname, __filename) {
// Router mínimo: rutas declaradas como "MÉTODO /api/recurso/:id" con el rol requerido.
// auth: null = pública, "any" = cualquier usuario con sesión, [roles] = esos roles (admin siempre puede),
// { permission: "clave" } = roles que tengan ese permiso (configurable en "Permisos"; admin siempre puede).

function compile(pattern) {
  const names = [];
  const regex = pattern.replace(/:(\w+)/g, (match, name) => {
    names.push(name);
    return "([^/]+)";
  });
  return { regex: new RegExp(`^${regex}$`), names };
}

function createRouter() {
  const routes = [];

  function add(method, pattern, auth, handler) {
    routes.push({ method, pattern, auth, handler, ...compile(pattern) });
  }

  function match(method, pathname) {
    for (const route of routes) {
      if (route.method !== method) {
        continue;
      }
      const found = route.regex.exec(pathname);
      if (!found) {
        continue;
      }
      const params = {};
      route.names.forEach((name, index) => {
        params[name] = decodeURIComponent(found[index + 1]);
      });
      return { route, params };
    }
    return null;
  }

  return { add, match, routes };
}

module.exports = { createRouter };

}],
  "src/auth/guards.js": [{"../http/responses":"src/http/responses.js","./sessions":"src/auth/sessions.js"}, function (require, module, exports, __dirname, __filename) {
const { sendJson } = require("../http/responses");
const {
  sessions,
  hashToken,
  isSessionExpired,
  persistSessions,
  clearSessionCookie,
  getTokenFromRequest,
} = require("./sessions");

// Rutas permitidas mientras el usuario tiene pendiente el cambio obligatorio de contraseña.
const PASSWORD_CHANGE_ALLOWED_PATHS = new Set(["/api/session", "/api/logout", "/api/me/password"]);

function requireAuth(req, res) {
  const token = getTokenFromRequest(req);
  const tokenHash = hashToken(token);
  const session = token ? sessions.get(tokenHash) : null;

  if (!session || isSessionExpired(session)) {
    if (session) {
      sessions.delete(tokenHash);
      persistSessions();
    }
    clearSessionCookie(res);
    sendJson(res, 401, { error: "Sesión inválida o vencida." });
    return null;
  }

  const now = Date.now();
  if (now - session.lastSeenAt > 60 * 1000) {
    session.lastSeenAt = now;
    persistSessions();
  }

  const pathname = new URL(req.url, "http://localhost").pathname;
  if (session.mustChangePassword && !PASSWORD_CHANGE_ALLOWED_PATHS.has(pathname)) {
    sendJson(res, 403, { error: "Tenés que cambiar tu contraseña antes de continuar.", code: "PASSWORD_CHANGE_REQUIRED" });
    return null;
  }

  return session;
}

function requireRole(req, res, allowedRoles) {
  const session = requireAuth(req, res);
  if (!session) {
    return null;
  }

  if (session.role === "admin") {
    return session;
  }

  if (!allowedRoles.includes(session.role)) {
    sendJson(res, 403, { error: "No tenés permisos para realizar esta acción." });
    return null;
  }

  return session;
}

module.exports = { requireAuth, requireRole };

}],
  "src/auth/sessions.js": [{"fs":"shim:fs","crypto":"shim:crypto","../config":"src/config.js","../data/files":"src/data/files.js","../services/users":"src/services/users.js"}, function (require, module, exports, __dirname, __filename) {
const fs = require("fs");
const crypto = require("crypto");
const {
  SESSIONS_FILE,
  SESSION_COOKIE,
  SESSION_TTL_MS,
  SESSION_IDLE_MS,
  COOKIE_SECURE,
} = require("../config");
const { writeFileAtomic } = require("../data/files");
const { normalizeRole } = require("../services/users");

// Sesiones en memoria, persistidas en data/sessions.json (solo hashes de los tokens).
function hashToken(token) {
  return token ? crypto.createHash("sha256").update(String(token)).digest("hex") : "";
}

function createSession(user) {
  const token = crypto.randomBytes(32).toString("hex");
  const now = Date.now();
  sessions.set(hashToken(token), {
    id: user.id,
    role: normalizeRole(user.role),
    name: user.name,
    username: user.username,
    mustChangePassword: Boolean(user.mustChangePassword),
    createdAt: now,
    lastSeenAt: now,
  });
  persistSessions();
  return token;
}

function publicSession(session) {
  return {
    id: session.id,
    role: session.role,
    name: session.name,
    username: session.username,
    mustChangePassword: Boolean(session.mustChangePassword),
  };
}

function isSessionExpired(session, now = Date.now()) {
  return now - session.createdAt > SESSION_TTL_MS || now - session.lastSeenAt > SESSION_IDLE_MS;
}

function loadSessions() {
  try {
    const stored = JSON.parse(fs.readFileSync(SESSIONS_FILE, "utf8"));
    const now = Date.now();
    return new Map(Object.entries(stored).filter(([, session]) => !isSessionExpired(session, now)));
  } catch (error) {
    return new Map();
  }
}

const sessions = loadSessions();

let persistSessionsTimer = null;
function persistSessions() {
  // Se guardan solo hashes de los tokens: si alguien lee el archivo no puede usar las sesiones.
  if (persistSessionsTimer) {
    return;
  }
  persistSessionsTimer = setTimeout(() => {
    persistSessionsTimer = null;
    try {
      writeFileAtomic(SESSIONS_FILE, JSON.stringify(Object.fromEntries(sessions)));
    } catch (error) {
      console.error("No se pudieron guardar las sesiones:", error.message);
    }
  }, 1000);
  persistSessionsTimer.unref();
}

function setSessionCookie(res, token) {
  const parts = [
    `${SESSION_COOKIE}=${token}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Strict",
    `Max-Age=${Math.floor(SESSION_TTL_MS / 1000)}`,
  ];
  if (COOKIE_SECURE) {
    parts.push("Secure");
  }
  res.setHeader("Set-Cookie", parts.join("; "));
}

function clearSessionCookie(res) {
  res.setHeader("Set-Cookie", `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0${COOKIE_SECURE ? "; Secure" : ""}`);
}

function getTokenFromRequest(req) {
  const cookies = String(req.headers.cookie || "").split(";");
  for (const cookie of cookies) {
    const separatorIndex = cookie.indexOf("=");
    if (separatorIndex === -1) {
      continue;
    }
    if (cookie.slice(0, separatorIndex).trim() === SESSION_COOKIE) {
      const value = cookie.slice(separatorIndex + 1).trim();
      return /^[a-f0-9]{64}$/.test(value) ? value : null;
    }
  }
  return null;
}

// Elimina las sesiones de un usuario (opcionalmente conservando una).
function removeUserSessions(userId, keepTokenHash = null) {
  for (const [tokenHash, session] of sessions.entries()) {
    if (session.id === userId && tokenHash !== keepTokenHash) {
      sessions.delete(tokenHash);
    }
  }
  persistSessions();
}

function purgeExpiredSessions() {
  const now = Date.now();
  let removed = false;
  for (const [tokenHash, session] of sessions.entries()) {
    if (isSessionExpired(session, now)) {
      sessions.delete(tokenHash);
      removed = true;
    }
  }
  if (removed) {
    persistSessions();
  }
}

module.exports = {
  sessions,
  hashToken,
  createSession,
  publicSession,
  isSessionExpired,
  persistSessions,
  setSessionCookie,
  clearSessionCookie,
  getTokenFromRequest,
  removeUserSessions,
  purgeExpiredSessions,
};

}],
  "src/data/files.js": [{"fs":"shim:fs"}, function (require, module, exports, __dirname, __filename) {
const fs = require("fs");

function writeFileAtomic(filePath, content) {
  const tempPath = `${filePath}.${process.pid}.${Date.now()}.tmp`;
  fs.writeFileSync(tempPath, content, "utf8");
  try {
    fs.renameSync(tempPath, filePath);
  } catch (error) {
    // En Windows el antivirus o un editor abierto pueden bloquear el reemplazo: se escribe directo.
    fs.writeFileSync(filePath, content, "utf8");
    fs.rmSync(tempPath, { force: true });
  }
}

function readJsonSync(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8").replace(/^﻿/, ""));
}

module.exports = { writeFileAtomic, readJsonSync };

}],
  "src/services/users.js": [{"crypto":"shim:crypto","../auth/passwords":"src/auth/passwords.js"}, function (require, module, exports, __dirname, __filename) {
const crypto = require("crypto");
const { hashPassword } = require("../auth/passwords");

function createUser(username, password, name, role) {
  return {
    id: crypto.randomUUID(),
    username,
    name,
    role: normalizeRole(role),
    password: hashPassword(password),
  };
}

function normalizeRole(role) {
  const normalized = String(role || "").trim().toLowerCase();
  if (normalized === "preceptor") {
    return "administrativo";
  }
  if (normalized === "docentes") {
    return "docente";
  }
  if (normalized === "directivos" || normalized === "directora" || normalized === "director") {
    return "directivo";
  }
  if (["jefe de taller", "jefe taller", "jefe-taller", "jefetaller", "jefe_de_taller"].includes(normalized)) {
    return "jefe_taller";
  }
  if (normalized === "contador" || normalized === "contadora") {
    return "contable";
  }
  if (normalized === "pañolero") {
    return "panolero";
  }
  return normalized;
}

function sanitizeUser(user) {
  return {
    id: user.id,
    username: user.username,
    name: user.name,
    role: normalizeRole(user.role),
    mustChangePassword: Boolean(user.mustChangePassword),
  };
}

module.exports = { createUser, normalizeRole, sanitizeUser };

}],
  "src/auth/passwords.js": [{"./passwords.real.js":"src/auth/passwords.real.js"}, function (require, module, exports, __dirname, __filename) {

    const real = require("./passwords.real.js");
    module.exports = {
      ...real,
      hashPassword: (password) => "demo$" + String(password || ""),
      verifyPassword: (password, stored) => String(stored || "") === "demo$" + String(password || ""),
    };
}],
  "src/auth/passwords.real.js": [{"crypto":"shim:crypto","../http/responses":"src/http/responses.js"}, function (require, module, exports, __dirname, __filename) {
const crypto = require("crypto");
const { validationError } = require("../http/responses");

const PASSWORD_MIN_LENGTH = 8;
const KNOWN_DEFAULT_PASSWORDS = ["admin123", "panol123", "docente123", "adminis123", "preceptor123"];

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

function verifyPassword(password, stored) {
  const [salt, expected] = String(stored).split(":");
  if (!salt || !expected) {
    return false;
  }

  const actual = crypto.scryptSync(String(password || ""), salt, 64).toString("hex");
  return crypto.timingSafeEqual(Buffer.from(actual, "hex"), Buffer.from(expected, "hex"));
}

function validatePasswordStrength(password, username = "") {
  const value = String(password || "");
  let message = "";
  if (value.length < PASSWORD_MIN_LENGTH) {
    message = `La contraseña tiene que tener al menos ${PASSWORD_MIN_LENGTH} caracteres.`;
  } else if (value.length > 128) {
    message = "La contraseña no puede superar los 128 caracteres.";
  } else if (!/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]/.test(value) || !/\d/.test(value)) {
    message = "La contraseña tiene que combinar letras y números.";
  } else if (username && value.toLowerCase().includes(String(username).toLowerCase())) {
    message = "La contraseña no puede contener el nombre de usuario.";
  } else if (KNOWN_DEFAULT_PASSWORDS.includes(value.toLowerCase())) {
    message = "Esa contraseña es de ejemplo y es pública. Elegí otra.";
  }

  if (message) {
    throw validationError(message);
  }
}

module.exports = { hashPassword, verifyPassword, validatePasswordStrength, KNOWN_DEFAULT_PASSWORDS };

}],
  "src/data/store.js": [{"fs":"shim:fs","crypto":"shim:crypto","../config":"src/config.js","./files":"src/data/files.js","../../lib/storage":"lib/storage.js","../../lib/sqliteStorage":"lib/sqliteStorage.js"}, function (require, module, exports, __dirname, __filename) {
const fs = require("fs");
const crypto = require("crypto");
const { DB_FILE, USERS_FILE, USE_MYSQL, USE_SQLITE, SQLITE_FILE } = require("../config");
const { writeFileAtomic, readJsonSync } = require("./files");

const mysqlStorage = USE_MYSQL ? require("../../lib/storage") : null;
const sqliteStorage = USE_SQLITE ? require("../../lib/sqliteStorage") : null;
const sqliteDocument = (filePath) => (filePath === DB_FILE ? "db" : filePath === USERS_FILE ? "users" : null);

// Persistencia del documento de datos.
// Modo JSON: caché en memoria (se invalida si el archivo cambia en disco) y escritura atómica.
// Modo MySQL: lib/storage.js escribe solo las filas que cambiaron.
const jsonCache = new Map();

function writeJsonSync(filePath, data) {
  writeFileAtomic(filePath, JSON.stringify(data, null, 2));
  jsonCache.delete(filePath);
}

async function readJsonFile(filePath) {
  if (USE_SQLITE && sqliteDocument(filePath)) {
    return sqliteStorage.readDocument(SQLITE_FILE, sqliteDocument(filePath));
  }
  if (USE_MYSQL && (filePath === DB_FILE || filePath === USERS_FILE)) {
    try {
      return filePath === DB_FILE ? await mysqlStorage.readMysqlDb() : await mysqlStorage.readMysqlUsers();
    } catch (error) {
      if (String(error.message || "").includes("doesn't exist")) {
        return filePath === DB_FILE ? mysqlStorage.emptyDb() : [];
      }
      throw error;
    }
  }

  const stats = fs.statSync(filePath);
  const cached = jsonCache.get(filePath);
  if (!cached || cached.mtimeMs !== stats.mtimeMs || cached.size !== stats.size) {
    jsonCache.set(filePath, { mtimeMs: stats.mtimeMs, size: stats.size, data: readJsonSync(filePath) });
  }
  // Se devuelve una copia: si un pedido falla a mitad de camino, la caché no queda modificada.
  return structuredClone(jsonCache.get(filePath).data);
}

async function writeJsonFile(filePath, data) {
  if (USE_SQLITE && sqliteDocument(filePath)) {
    sqliteStorage.writeDocument(SQLITE_FILE, sqliteDocument(filePath), data);
    return;
  }
  if (USE_MYSQL && filePath === DB_FILE) {
    await mysqlStorage.writeMysqlDb(data);
    return;
  }
  if (USE_MYSQL && filePath === USERS_FILE) {
    await mysqlStorage.writeMysqlUsers(data);
    return;
  }

  writeFileAtomic(filePath, JSON.stringify(data, null, 2));
  const stats = fs.statSync(filePath);
  jsonCache.set(filePath, { mtimeMs: stats.mtimeMs, size: stats.size, data: structuredClone(data) });
}

// Atajos con nombre para el resto de la aplicación.
// Completa colecciones agregadas en versiones posteriores (proveedores, confirmaciones de compra).
function normalizeDb(db) {
  if (!Array.isArray(db.suppliers)) db.suppliers = [];
  if (!Array.isArray(db.purchaseInvoices)) db.purchaseInvoices = [];
  if (!Array.isArray(db.rolePermissions)) db.rolePermissions = [];
  if (!Array.isArray(db.writeOffs)) db.writeOffs = [];
  if (!Array.isArray(db.purchaseRequests)) db.purchaseRequests = [];
  db.purchaseRequests.forEach((request) => {
    if (!Array.isArray(request.confirmations)) request.confirmations = [];
  });
  return db;
}

const readDb = async () => normalizeDb(await readJsonFile(DB_FILE));
const writeDb = (db) => writeJsonFile(DB_FILE, db);
const readUsers = () => readJsonFile(USERS_FILE);
const writeUsers = (users) => writeJsonFile(USERS_FILE, users);

// Las escrituras se serializan para que dos pedidos simultáneos no se pisen los datos.
let writeQueue = Promise.resolve();
function withWriteLock(task) {
  const run = writeQueue.then(task, task);
  writeQueue = run.catch(() => {});
  return run;
}

// Agrega un movimiento al registro de actividad (en un documento ya leído).
function addActivity(db, type, message) {
  db.activity.unshift({
    id: crypto.randomUUID(),
    type,
    message,
    createdAt: new Date().toISOString(),
  });
}

async function logActivity(type, message) {
  try {
    const db = await readJsonFile(DB_FILE);
    db.activity.unshift({
      id: crypto.randomUUID(),
      type,
      message,
      createdAt: new Date().toISOString(),
    });
    await writeJsonFile(DB_FILE, db);
  } catch (error) {
    console.error("No se pudo registrar la actividad:", error.message);
  }
}

module.exports = {
  readJsonSync,
  writeJsonSync,
  readJsonFile,
  writeJsonFile,
  readDb,
  writeDb,
  readUsers,
  writeUsers,
  withWriteLock,
  addActivity,
  logActivity,
};

}],
  "lib/storage.js": [{"fs/promises":"missing:fs/promises","./mysql":"lib/mysql.js"}, function (require, module, exports, __dirname, __filename) {
const fs = require("fs/promises");
const { getMysqlPool } = require("./mysql");

// ---------------------------------------------------------------------------
// Persistencia MySQL del Pañol.
//
// El servidor trabaja con un documento en memoria (el mismo formato que data/db.json).
// Leer: se arma el documento con consultas SELECT.
// Escribir: se compara el documento con lo que hay en la base y se ejecutan solo los
// INSERT / UPDATE / DELETE de las filas que cambiaron, dentro de una transacción.
// ---------------------------------------------------------------------------

async function readJsonFromDisk(filePath) {
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw);
}

async function writeJsonToDisk(filePath, data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
}

function toIsoString(value) {
  if (!value) {
    return null;
  }
  if (typeof value === "string" && value.includes("T")) {
    return value;
  }
  // Las fechas de MySQL se guardan y leen en UTC (timezone "Z" en lib/mysql.js).
  const date = typeof value === "string" ? new Date(`${value.replace(" ", "T")}Z`) : new Date(value);
  if (Number.isNaN(date.getTime())) {
    return null;
  }
  return date.toISOString();
}

function toMysqlDateTime(value) {
  const iso = toIsoString(value);
  return iso ? iso.slice(0, 23).replace("T", " ") : null;
}

function toMysqlDate(value) {
  const text = String(value || "").trim();
  return /^\d{4}-\d{2}-\d{2}/.test(text) ? text.slice(0, 10) : null;
}

function textOrNull(value) {
  const text = value === null || value === undefined ? "" : String(value);
  return text === "" ? null : text;
}

function emptyDb() {
  return {
    items: [],
    loans: [],
    consumptions: [],
    stockEntries: [],
    purchaseRequests: [],
    costCenters: [],
    categories: [],
    responsibles: [],
    orientations: [],
    activity: [],
    locations: [],
    rolePermissions: [],
    writeOffs: [],
  };
}

// ---------------------------------------------------------------------------
// Definición de tablas: tipo de cada columna para comparar valores sin falsos cambios.
// str = texto, num = decimal, int = entero/booleano, date = DATE, dt = DATETIME.
// ---------------------------------------------------------------------------
const MASTER_COLUMNS = {
  id: "str",
  name: "str",
  description: "str",
  created_at: "dt",
  created_by: "str",
  updated_at: "dt",
  updated_by: "str",
};

const TABLES = {
  categories: MASTER_COLUMNS,
  locations: MASTER_COLUMNS,
  cost_centers: MASTER_COLUMNS,
  orientations: MASTER_COLUMNS,
  responsibles: {
    id: "str", type: "str", full_name: "str", dni: "str", admission_date: "date", course: "str",
    division: "str", orientation_id: "str", specialty: "str", position: "str", address: "str",
    email: "str", phone: "str", created_at: "dt", created_by: "str", updated_at: "dt", updated_by: "str",
  },
  items: {
    id: "str", name: "str", category_id: "str", code: "str", subcode: "str", location_id: "str",
    stock: "num", stock_minimum: "num", unit_cost: "num", notes: "str",
    created_at: "dt", created_by: "str", updated_at: "dt", updated_by: "str",
    last_purchase_cost: "num", last_purchase_at: "dt", last_purchase_supplier: "str", last_purchase_invoice: "str",
    unit: "str", retired_at: "dt", retired_by: "str",
  },
  loans: {
    id: "str", item_id: "str", responsible_id: "str", borrower_name: "str", department: "str",
    quantity: "num", due_date: "date", observation: "str", created_at: "dt", created_by: "str",
    loan_group_id: "str",
  },
  item_write_offs: {
    id: "str", item_id: "str", item_name: "str", item_code: "str", quantity: "num", unit: "str", unit_cost: "num",
    reason: "str", observation: "str", write_off_date: "date", write_off_time: "str", is_retirement: "int",
    created_at: "dt", created_by: "str",
  },
  consumptions: {
    id: "str", item_id: "str", responsible_id: "str", responsible_name: "str", department: "str",
    cost_center_id: "str", quantity: "num", detail: "str", created_at: "dt", created_by: "str",
  },
  stock_entries: {
    id: "str", entry_type: "str", target_type: "str", item_id: "str", item_name: "str", quantity: "num",
    donor: "str", provider: "str", invoice: "str", purchase_request_id: "str", observation: "str",
    unit_cost: "num", total_cost: "num", created_at: "dt", created_by: "str",
    confirmation_id: "str", supplier_id: "str", purchase_invoice_id: "str",
  },
  suppliers: {
    id: "str", name: "str", cuit: "str", tax_condition: "str", address: "str", phone: "str", email: "str",
    contact: "str", notes: "str", created_at: "dt", created_by: "str", updated_at: "dt", updated_by: "str",
  },
  purchase_confirmations: {
    id: "str", purchase_request_id: "str", number: "int_value", supplier_id: "str", supplier_name: "str",
    supplier_cuit: "str", invoice: "str", observation: "str", subtotal: "num", withholdings: "num",
    invoice_total: "num", total_warning: "str", status: "str", created_at: "dt", created_by: "str",
  },
  purchase_requests: {
    id: "str", cost_center_id: "str", observation: "str", status: "str", provider: "str", invoice: "str",
    created_at: "dt", created_by: "str", fulfilled_at: "dt", fulfilled_by: "str", approvals: "str",
  },
  purchase_invoices: {
    id: "str", number: "int_value", supplier_id: "str", supplier_name: "str", supplier_cuit: "str", invoice: "str",
    observation: "str", subtotal: "num", withholdings: "num", invoice_total: "num", total_warning: "str",
    created_at: "dt", created_by: "str", invoice_date: "date",
  },
  activity_log: { id: "str", event_type: "str", message: "str", created_at: "dt" },
  role_permissions: { id: "str", permissions: "str", updated_at: "dt", updated_by: "str" },
  users: {
    id: "str", username: "str", full_name: "str", role: "str", password_hash: "str",
    must_change_password: "int", password_changed_at: "dt",
  },
};

const CONFIRMATION_LINE_COLUMNS = {
  confirmation_id: "str", item_id: "str", item_name: "str", code: "str", subcode: "str", quantity: "num",
  unit_cost: "num", discount_type: "str", discount_value: "num", gross: "num", discount_amount: "num",
  subtotal: "num", net_unit_cost: "num", received_quantity: "num",
};

const INVOICE_LINE_COLUMNS = {
  invoice_id: "str", item_id: "str", item_name: "str", code: "str", subcode: "str", quantity: "num",
  unit_cost: "num", discount_type: "str", discount_value: "num", gross: "num", discount_amount: "num",
  subtotal: "num", net_unit_cost: "num",
};

const REQUEST_ITEM_COLUMNS = {
  purchase_request_id: "str", item_id: "str", item_name: "str", code: "str", subcode: "str",
  requested_quantity: "num", current_stock: "num", stock_minimum: "num", current_unit_cost: "num",
  fulfilled_quantity: "num", fulfilled_unit_cost: "num", fulfilled_total_cost: "num",
};

// Orden de inserción: primero las tablas referenciadas. Los borrados van en orden inverso.
const DB_TABLE_ORDER = [
  "categories", "locations", "cost_centers", "orientations", "responsibles", "suppliers", "items",
  "loans", "consumptions", "stock_entries", "purchase_requests", "purchase_confirmations", "purchase_invoices", "activity_log", "role_permissions",
  "item_write_offs",
];

// Tablas agregadas por migraciones posteriores: si todavía no existen, se leen vacías,
// y al guardar se avisa en lugar de perder datos en silencio.
const MIGRATION_SUPPLIERS = "2026-11-03-proveedores.sql";
const MIGRATION_INVOICES = "2026-11-03-facturas.sql";
const MIGRATION_PERMISSIONS = "2026-11-03-permisos.sql";
const MIGRATION_INVOICE_DATE = "2026-11-03-fecha-factura.sql";
const MIGRATION_APPROVALS = "2026-11-13-aprobaciones.sql";
const MIGRATION_UNITS_LOANS_WRITEOFFS = "2026-11-19-unidades-prestamos-bajas.sql";
const OPTIONAL_TABLES = new Map([
  ["suppliers", MIGRATION_SUPPLIERS],
  ["purchase_confirmations", MIGRATION_SUPPLIERS],
  ["purchase_confirmation_lines", MIGRATION_SUPPLIERS],
  ["purchase_invoices", MIGRATION_INVOICES],
  ["purchase_invoice_lines", MIGRATION_INVOICES],
  ["role_permissions", MIGRATION_PERMISSIONS],
  ["item_write_offs", MIGRATION_UNITS_LOANS_WRITEOFFS],
]);
// Columnas agregadas a tablas existentes: si faltan y hay datos para guardar en ellas, se avisa.
const OPTIONAL_COLUMNS = {
  items: { columns: ["last_purchase_cost", "last_purchase_at", "last_purchase_supplier", "last_purchase_invoice"], migration: MIGRATION_INVOICES },
  // La unidad "unidad" es la de siempre: no hace falta la migración para guardarla.
  items_units: { table: "items", columns: ["unit", "retired_at", "retired_by"], migration: MIGRATION_UNITS_LOANS_WRITEOFFS, ignore: { unit: "unidad" } },
  loans: { columns: ["loan_group_id"], migration: MIGRATION_UNITS_LOANS_WRITEOFFS },
  stock_entries: { columns: ["purchase_invoice_id"], migration: MIGRATION_INVOICES },
  purchase_invoices: { columns: ["invoice_date"], migration: MIGRATION_INVOICE_DATE },
  purchase_requests: { columns: ["approvals"], migration: MIGRATION_APPROVALS },
};

// Error con código HTTP: el servidor muestra este mensaje al usuario en lugar de un error genérico.
function migrationError(file = MIGRATION_SUPPLIERS) {
  const error = new Error(`Falta ejecutar la migración db/mysql/migrations/${file} en la base MySQL.`);
  error.statusCode = 503;
  return error;
}

// ---------------------------------------------------------------------------
// Columnas realmente presentes en la base (permite funcionar antes y después de la migración).
// ---------------------------------------------------------------------------
let columnInfoPromise = null;

function getColumnInfo() {
  if (!columnInfoPromise) {
    columnInfoPromise = getMysqlPool()
      .query(
        `SELECT TABLE_NAME AS tableName, COLUMN_NAME AS columnName,
                DATETIME_PRECISION AS datetimePrecision, NUMERIC_SCALE AS numericScale
         FROM information_schema.COLUMNS
         WHERE TABLE_SCHEMA = DATABASE()`
      )
      .then(([rows]) => {
        const info = new Map();
        rows.forEach((row) => {
          const table = String(row.tableName).toLowerCase();
          if (!info.has(table)) {
            info.set(table, new Map());
          }
          info.get(table).set(String(row.columnName).toLowerCase(), {
            datetimePrecision: Number(row.datetimePrecision || 0),
            numericScale: row.numericScale === null ? null : Number(row.numericScale),
          });
        });
        if (!info.size) {
          // Base vacía o inexistente: no se guarda en caché para volver a consultar cuando se cree.
          columnInfoPromise = null;
        }
        return info;
      })
      .catch((error) => {
        columnInfoPromise = null;
        throw error;
      });
  }
  return columnInfoPromise;
}

function resetColumnInfoCache() {
  columnInfoPromise = null;
}

function hasColumn(info, table, column) {
  return Boolean(info.get(table)?.has(column));
}

function availableColumns(info, table, spec) {
  const present = info.get(table);
  if (!present) {
    const error = new Error(`Table '${table}' doesn't exist`);
    error.code = "ER_NO_SUCH_TABLE";
    throw error;
  }
  return Object.keys(spec).filter((column) => present.has(column));
}

// Normaliza un valor para comparar lo deseado con lo guardado, con la misma precisión que la columna.
function normalizeValue(type, value, meta) {
  if (value === null || value === undefined || value === "") {
    return null;
  }

  if (type === "num") {
    const number = Number(value);
    if (!Number.isFinite(number)) {
      return null;
    }
    return number.toFixed(meta?.numericScale ?? 2);
  }

  if (type === "int") {
    return Number(value) ? "1" : "0";
  }

  if (type === "int_value") {
    return String(Math.trunc(Number(value)));
  }

  if (type === "date") {
    return toMysqlDate(value);
  }

  if (type === "dt") {
    const iso = toIsoString(value);
    if (!iso) {
      return null;
    }
    // MySQL redondea las fracciones de segundo según la precisión de la columna.
    const precision = Math.min(meta?.datetimePrecision ?? 0, 3);
    const factor = 10 ** (3 - precision);
    const millis = Math.round(new Date(iso).getTime() / factor) * factor;
    const text = new Date(millis).toISOString().replace("T", " ");
    return precision > 0 ? text.slice(0, 20 + precision) : text.slice(0, 19);
  }

  return String(value);
}

function normalizeRow(row, columns, spec, tableMeta) {
  return columns.map((column) => normalizeValue(spec[column], row[column], tableMeta?.get(column)));
}

function chunk(items, size) {
  const result = [];
  for (let index = 0; index < items.length; index += size) {
    result.push(items.slice(index, index + size));
  }
  return result;
}

// Valor a enviar a MySQL: fechas en formato MySQL, el resto tal cual.
function toSqlValue(type, value) {
  if (value === undefined) {
    return null;
  }
  if (type === "dt") {
    return toMysqlDateTime(value);
  }
  if (type === "date") {
    return toMysqlDate(value);
  }
  if (type === "int") {
    return value ? 1 : 0;
  }
  return value;
}

// ---------------------------------------------------------------------------
// Sincronización por diferencias de una tabla con clave primaria "id".
// ---------------------------------------------------------------------------
async function prepareTableSync(connection, info, table, desiredRows, stats) {
  if (OPTIONAL_TABLES.has(table) && !info.get(table)) {
    if (desiredRows.length) throw migrationError(OPTIONAL_TABLES.get(table));
    return { async applyDeletes() {}, async applyUpserts() {} };
  }
  // Columnas opcionales de la tabla (puede haber varias migraciones que agregan columnas a la misma tabla).
  Object.entries(OPTIONAL_COLUMNS)
    .filter(([key, optionalColumns]) => (optionalColumns.table || key) === table && info.get(table))
    .forEach(([, optionalColumns]) => {
      const missing = optionalColumns.columns.filter((column) => !info.get(table).has(column));
      const ignored = optionalColumns.ignore || {};
      const hasValue = (row, column) => row[column] !== null && row[column] !== undefined && row[column] !== "" && row[column] !== ignored[column];
      if (missing.length && desiredRows.some((row) => missing.some((column) => hasValue(row, column)))) {
        throw migrationError(optionalColumns.migration);
      }
    });
  const spec = TABLES[table];
  const columns = availableColumns(info, table, spec);
  const tableMeta = info.get(table);

  const [storedRows] = await connection.query({
    sql: `SELECT ${columns.map((column) => `\`${column}\``).join(", ")} FROM \`${table}\``,
    dateStrings: true,
  });
  const stored = new Map(storedRows.map((row) => [row.id, normalizeRow(row, columns, spec, tableMeta)]));
  const desired = new Map();
  desiredRows.forEach((row) => desired.set(row.id, row));

  const toDelete = [...stored.keys()].filter((id) => !desired.has(id));
  const toInsert = [];
  const toUpdate = [];

  for (const [id, row] of desired) {
    const current = stored.get(id);
    if (!current) {
      toInsert.push(row);
      continue;
    }
    const normalized = normalizeRow(row, columns, spec, tableMeta);
    const changed = columns.filter((column, index) => column !== "id" && normalized[index] !== current[index]);
    if (changed.length) {
      toUpdate.push({ row, changed });
    }
  }

  return {
    async applyDeletes() {
      for (const ids of chunk(toDelete, 200)) {
        await connection.query(`DELETE FROM \`${table}\` WHERE id IN (?)`, [ids]);
      }
      stats.deleted += toDelete.length;
    },
    async applyUpserts() {
      for (const rows of chunk(toInsert, 100)) {
        const values = rows.map((row) => columns.map((column) => toSqlValue(spec[column], row[column])));
        await connection.query(
          `INSERT INTO \`${table}\` (${columns.map((column) => `\`${column}\``).join(", ")}) VALUES ?`,
          [values]
        );
      }
      for (const { row, changed } of toUpdate) {
        await connection.query(
          `UPDATE \`${table}\` SET ${changed.map((column) => `\`${column}\` = ?`).join(", ")} WHERE id = ?`,
          [...changed.map((column) => toSqlValue(spec[column], row[column])), row.id]
        );
      }
      stats.inserted += toInsert.length;
      stats.updated += toUpdate.length;
    },
  };
}

// Filas hijas sin id propio en el documento (ítems de un pedido, renglones de una confirmación):
// si cambia algo de un padre, se reemplazan solo las filas de ese padre.
async function syncChildRows(connection, info, table, spec, parentColumn, desiredByParent, stats) {
  if (OPTIONAL_TABLES.has(table) && !info.get(table)) {
    if ([...desiredByParent.values()].some((rows) => rows.length)) throw migrationError(OPTIONAL_TABLES.get(table));
    return;
  }
  const columns = availableColumns(info, table, spec);
  const tableMeta = info.get(table);
  const [storedRows] = await connection.query({
    sql: `SELECT ${columns.map((column) => `\`${column}\``).join(", ")} FROM \`${table}\` ORDER BY id ASC`,
    dateStrings: true,
  });

  const signature = (rows) => JSON.stringify(rows.map((row) => normalizeRow(row, columns, spec, tableMeta)));
  const storedByParent = new Map();
  storedRows.forEach((row) => {
    if (!storedByParent.has(row[parentColumn])) {
      storedByParent.set(row[parentColumn], []);
    }
    storedByParent.get(row[parentColumn]).push(row);
  });

  const parentIds = new Set([...storedByParent.keys(), ...desiredByParent.keys()]);
  for (const parentId of parentIds) {
    const desired = desiredByParent.get(parentId) || [];
    const stored = storedByParent.get(parentId) || [];
    if (signature(desired) === signature(stored)) {
      continue;
    }
    if (stored.length) {
      await connection.query(`DELETE FROM \`${table}\` WHERE \`${parentColumn}\` = ?`, [parentId]);
      stats.deleted += stored.length;
    }
    if (desired.length) {
      const values = desired.map((row) => columns.map((column) => toSqlValue(spec[column], row[column])));
      await connection.query(
        `INSERT INTO \`${table}\` (${columns.map((column) => `\`${column}\``).join(", ")}) VALUES ?`,
        [values]
      );
      stats.inserted += desired.length;
    }
  }
}

// ---------------------------------------------------------------------------
// Conversión documento -> filas
// ---------------------------------------------------------------------------
function asList(value) {
  return Array.isArray(value) ? value : [];
}

function masterRows(entries) {
  return asList(entries).map((entry) => ({
    id: entry.id,
    name: entry.name,
    description: textOrNull(entry.description),
    created_at: entry.createdAt || new Date().toISOString(),
    created_by: textOrNull(entry.createdBy),
    updated_at: entry.updatedAt || null,
    updated_by: textOrNull(entry.updatedBy),
  }));
}

function buildDbRows(db) {
  const categoryByName = new Map(asList(db.categories).map((entry) => [entry.name, entry.id]));
  const locationByName = new Map(asList(db.locations).map((entry) => [entry.name, entry.id]));
  const costCenterByName = new Map(asList(db.costCenters).map((entry) => [entry.name, entry.id]));
  const orientationByName = new Map(asList(db.orientations).map((entry) => [entry.name, entry.id]));

  const rows = {
    categories: masterRows(db.categories),
    locations: masterRows(db.locations),
    cost_centers: masterRows(db.costCenters),
    orientations: masterRows(db.orientations),
    responsibles: asList(db.responsibles).map((entry) => ({
      id: entry.id,
      type: entry.type,
      full_name: entry.fullName,
      dni: entry.dni,
      admission_date: entry.admissionDate || null,
      course: textOrNull(entry.course),
      division: textOrNull(entry.division),
      orientation_id: orientationByName.get(entry.orientation) || null,
      specialty: textOrNull(entry.specialty),
      position: textOrNull(entry.position),
      address: textOrNull(entry.address),
      email: textOrNull(entry.email),
      phone: textOrNull(entry.phone),
      created_at: entry.createdAt || new Date().toISOString(),
      created_by: textOrNull(entry.createdBy),
      updated_at: entry.updatedAt || null,
      updated_by: textOrNull(entry.updatedBy),
    })),
    items: asList(db.items).map((entry) => ({
      id: entry.id,
      name: entry.name,
      category_id: categoryByName.get(entry.category) || null,
      code: entry.code,
      subcode: textOrNull(entry.subcode),
      location_id: locationByName.get(entry.location) || null,
      stock: Number(entry.stock || 0),
      stock_minimum: Number(entry.stockMinimum || 0),
      unit_cost: Number(entry.amount || 0),
      notes: textOrNull(entry.notes),
      created_at: entry.createdAt || new Date().toISOString(),
      created_by: textOrNull(entry.createdBy),
      updated_at: entry.updatedAt || null,
      updated_by: textOrNull(entry.updatedBy),
      last_purchase_cost: entry.lastPurchaseCost ?? null,
      last_purchase_at: entry.lastPurchaseAt || null,
      last_purchase_supplier: textOrNull(entry.lastPurchaseSupplier),
      last_purchase_invoice: textOrNull(entry.lastPurchaseInvoice),
      unit: entry.unit || "unidad",
      retired_at: entry.retiredAt || null,
      retired_by: textOrNull(entry.retiredBy),
    })),
    item_write_offs: asList(db.writeOffs).map((entry) => ({
      id: entry.id,
      item_id: entry.itemId || null,
      item_name: entry.itemName || "",
      item_code: textOrNull(entry.itemCode),
      quantity: Number(entry.quantity || 0),
      unit: entry.unit || "unidad",
      unit_cost: Number(entry.unitCost || 0),
      reason: entry.reason || "",
      observation: textOrNull(entry.observation),
      write_off_date: entry.date || null,
      write_off_time: textOrNull(entry.time),
      is_retirement: entry.retire ? 1 : 0,
      created_at: entry.createdAt || new Date().toISOString(),
      created_by: textOrNull(entry.createdBy),
    })),
    loans: asList(db.loans).map((entry) => ({
      id: entry.id,
      item_id: entry.itemId,
      responsible_id: entry.responsibleId || null,
      borrower_name: entry.borrower || "",
      department: textOrNull(entry.department),
      quantity: Number(entry.quantity || 0),
      due_date: entry.dueDate || null,
      observation: textOrNull(entry.observation),
      created_at: entry.createdAt || new Date().toISOString(),
      created_by: textOrNull(entry.createdBy),
      loan_group_id: textOrNull(entry.groupId),
    })),
    consumptions: asList(db.consumptions).map((entry) => ({
      id: entry.id,
      item_id: entry.itemId,
      responsible_id: entry.responsibleId || null,
      responsible_name: entry.responsible || "",
      department: textOrNull(entry.department),
      cost_center_id: costCenterByName.get(entry.costCenter) || null,
      quantity: Number(entry.quantity || 0),
      detail: textOrNull(entry.detail),
      created_at: entry.createdAt || new Date().toISOString(),
      created_by: textOrNull(entry.createdBy),
    })),
    stock_entries: asList(db.stockEntries).map((entry) => ({
      id: entry.id,
      entry_type: entry.entryType,
      target_type: entry.targetType,
      item_id: entry.itemId || null,
      item_name: entry.itemName || "",
      quantity: Number(entry.quantity || 0),
      donor: textOrNull(entry.donor),
      provider: textOrNull(entry.provider),
      invoice: textOrNull(entry.invoice),
      purchase_request_id: entry.purchaseRequestId || null,
      observation: textOrNull(entry.observation),
      unit_cost: Number(entry.unitCost ?? entry.amount ?? entry.estimatedUnitCost ?? 0),
      total_cost: Number(entry.totalCost || 0),
      created_at: entry.createdAt || new Date().toISOString(),
      created_by: textOrNull(entry.createdBy),
      confirmation_id: entry.confirmationId || null,
      supplier_id: entry.supplierId || null,
      purchase_invoice_id: entry.purchaseInvoiceId || null,
    })),
    role_permissions: asList(db.rolePermissions).map((entry) => ({
      id: entry.role,
      permissions: asList(entry.permissions).join(","),
      updated_at: entry.updatedAt || null,
      updated_by: textOrNull(entry.updatedBy),
    })),
    purchase_invoices: asList(db.purchaseInvoices).map((entry) => ({
      id: entry.id,
      number: Number(entry.number || 0),
      supplier_id: entry.supplierId || null,
      supplier_name: entry.supplierName || "",
      supplier_cuit: textOrNull(entry.supplierCuit),
      invoice: entry.invoice || "",
      observation: textOrNull(entry.observation),
      subtotal: Number(entry.subtotal || 0),
      withholdings: Number(entry.withholdings || 0),
      invoice_total: Number(entry.invoiceTotal || 0),
      total_warning: textOrNull(entry.totalWarning),
      created_at: entry.createdAt || new Date().toISOString(),
      created_by: textOrNull(entry.createdBy),
      invoice_date: entry.invoiceDate || null,
    })),
    suppliers: asList(db.suppliers).map((entry) => ({
      id: entry.id,
      name: entry.name,
      cuit: entry.cuit,
      tax_condition: textOrNull(entry.taxCondition),
      address: textOrNull(entry.address),
      phone: textOrNull(entry.phone),
      email: textOrNull(entry.email),
      contact: textOrNull(entry.contact),
      notes: textOrNull(entry.notes),
      created_at: entry.createdAt || new Date().toISOString(),
      created_by: textOrNull(entry.createdBy),
      updated_at: entry.updatedAt || null,
      updated_by: textOrNull(entry.updatedBy),
    })),
    purchase_confirmations: asList(db.purchaseRequests).flatMap((request) =>
      asList(request.confirmations).map((entry) => ({
        id: entry.id,
        purchase_request_id: request.id,
        number: Number(entry.number || 0),
        supplier_id: entry.supplierId || null,
        supplier_name: entry.supplierName || "",
        supplier_cuit: textOrNull(entry.supplierCuit),
        invoice: textOrNull(entry.invoice),
        observation: textOrNull(entry.observation),
        subtotal: Number(entry.subtotal || 0),
        withholdings: Number(entry.withholdings || 0),
        invoice_total: Number(entry.invoiceTotal || 0),
        total_warning: textOrNull(entry.totalWarning),
        status: entry.status || "confirmed",
        created_at: entry.createdAt || new Date().toISOString(),
        created_by: textOrNull(entry.createdBy),
      }))
    ),
    purchase_requests: asList(db.purchaseRequests).map((entry) => ({
      id: entry.id,
      cost_center_id: costCenterByName.get(entry.costCenter) || null,
      observation: textOrNull(entry.observation),
      status: entry.status || "pending",
      provider: textOrNull(entry.provider),
      invoice: textOrNull(entry.invoice),
      created_at: entry.createdAt || new Date().toISOString(),
      created_by: textOrNull(entry.createdBy),
      fulfilled_at: entry.fulfilledAt || null,
      fulfilled_by: textOrNull(entry.fulfilledBy),
      // Firmas del pedido (Jefe de taller, Rector, Contable) guardadas como JSON.
      approvals: entry.approval ? JSON.stringify(entry.approval) : null,
    })),
    activity_log: asList(db.activity).map((entry) => ({
      id: entry.id,
      event_type: entry.type || "info",
      message: entry.message || "",
      created_at: entry.createdAt || new Date().toISOString(),
    })),
  };

  const requestItems = new Map();
  asList(db.purchaseRequests).forEach((entry) => {
    const fulfillmentByItem = new Map(asList(entry.fulfillment).map((current) => [current.itemId, current]));
    requestItems.set(
      entry.id,
      asList(entry.items).map((item) => {
        const fulfillment = fulfillmentByItem.get(item.itemId);
        return {
          purchase_request_id: entry.id,
          item_id: item.itemId || null,
          item_name: item.itemName || "",
          code: textOrNull(item.code),
          subcode: textOrNull(item.subcode),
          requested_quantity: Number(item.quantity || 0),
          current_stock: Number(item.currentStock || 0),
          stock_minimum: Number(item.stockMinimum || 0),
          current_unit_cost: Number(item.amount || 0),
          fulfilled_quantity: fulfillment ? fulfillment.quantity ?? null : null,
          fulfilled_unit_cost: fulfillment ? fulfillment.unitCost ?? fulfillment.amount ?? null : null,
          fulfilled_total_cost: fulfillment ? fulfillment.totalCost ?? null : null,
        };
      })
    );
  });

  const confirmationLines = new Map();
  asList(db.purchaseRequests).forEach((request) => {
    asList(request.confirmations).forEach((confirmation) => {
      confirmationLines.set(
        confirmation.id,
        asList(confirmation.lines).map((line) => ({
          confirmation_id: confirmation.id,
          item_id: line.itemId || null,
          item_name: line.itemName || "",
          code: textOrNull(line.code),
          subcode: textOrNull(line.subcode),
          quantity: Number(line.quantity || 0),
          unit_cost: Number(line.unitCost || 0),
          discount_type: line.discountType || "percent",
          discount_value: Number(line.discountValue || 0),
          gross: Number(line.gross || 0),
          discount_amount: Number(line.discountAmount || 0),
          subtotal: Number(line.subtotal || 0),
          net_unit_cost: Number(line.netUnitCost || 0),
          received_quantity: Number(line.receivedQuantity || 0),
        }))
      );
    });
  });

  const invoiceLines = new Map(
    asList(db.purchaseInvoices).map((entry) => [
      entry.id,
      asList(entry.lines).map((line) => ({
        invoice_id: entry.id,
        item_id: line.itemId || null,
        item_name: line.itemName || "",
        code: textOrNull(line.code),
        subcode: textOrNull(line.subcode),
        quantity: Number(line.quantity || 0),
        unit_cost: Number(line.unitCost || 0),
        discount_type: line.discountType || "percent",
        discount_value: Number(line.discountValue || 0),
        gross: Number(line.gross || 0),
        discount_amount: Number(line.discountAmount || 0),
        subtotal: Number(line.subtotal || 0),
        net_unit_cost: Number(line.netUnitCost || 0),
      })),
    ])
  );

  return { rows, requestItems, confirmationLines, invoiceLines };
}

// ---------------------------------------------------------------------------
// Escritura
// ---------------------------------------------------------------------------
async function runInTransaction(work) {
  const connection = await getMysqlPool().getConnection();
  try {
    await connection.beginTransaction();
    // Igual que el modo JSON: la base refleja el documento tal cual, aunque haya referencias
    // históricas a materiales o responsables dados de baja.
    await connection.query("SET FOREIGN_KEY_CHECKS = 0");
    const result = await work(connection);
    await connection.commit();
    return result;
  } catch (error) {
    await connection.rollback().catch(() => {});
    throw error;
  } finally {
    await connection.query("SET FOREIGN_KEY_CHECKS = 1").catch(() => {});
    connection.release();
  }
}

async function writeMysqlDb(db) {
  const info = await getColumnInfo();
  const { rows, requestItems, confirmationLines, invoiceLines } = buildDbRows(db);
  const stats = { inserted: 0, updated: 0, deleted: 0 };

  await runInTransaction(async (connection) => {
    const syncs = [];
    for (const table of DB_TABLE_ORDER) {
      syncs.push(await prepareTableSync(connection, info, table, rows[table], stats));
    }

    // Primero se borran las filas que ya no están (hijos antes que padres),
    // después se insertan y actualizan (padres antes que hijos).
    for (const sync of syncs.slice().reverse()) {
      await sync.applyDeletes();
    }
    for (const sync of syncs) {
      await sync.applyUpserts();
    }
    await syncChildRows(connection, info, "purchase_request_items", REQUEST_ITEM_COLUMNS, "purchase_request_id", requestItems, stats);
    await syncChildRows(connection, info, "purchase_confirmation_lines", CONFIRMATION_LINE_COLUMNS, "confirmation_id", confirmationLines, stats);
    await syncChildRows(connection, info, "purchase_invoice_lines", INVOICE_LINE_COLUMNS, "invoice_id", invoiceLines, stats);
  });

  return stats;
}

const MIGRATION_DIRECTIVOS = "2026-11-03-directivos.sql";
// Rol agregado → migración que lo suma al ENUM de users.role.
const ROLE_MIGRATIONS = { directivo: MIGRATION_DIRECTIVOS, jefe_taller: MIGRATION_APPROVALS, contable: MIGRATION_APPROVALS };

// Roles agregados después de crear la base: la columna users.role es un ENUM y hay que ampliarlo.
async function ensureRolesSupported(users) {
  const roles = [...new Set(asList(users).map((user) => user.role))].filter((role) => ROLE_MIGRATIONS[role]);
  if (!roles.length) return;
  const [rows] = await getMysqlPool().query(
    `SELECT COLUMN_TYPE AS columnType FROM information_schema.COLUMNS
     WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'users' AND COLUMN_NAME = 'role'`
  );
  const columnType = String(rows[0]?.columnType || "");
  if (!/^enum\(/i.test(columnType)) return;
  const missing = roles.find((role) => !columnType.includes(`'${role}'`));
  if (missing) throw migrationError(ROLE_MIGRATIONS[missing]);
}

async function writeMysqlUsers(users) {
  await ensureRolesSupported(users);
  const info = await getColumnInfo();
  const stats = { inserted: 0, updated: 0, deleted: 0 };
  const rows = asList(users).map((user) => ({
    id: user.id,
    username: user.username,
    full_name: user.name,
    role: user.role,
    password_hash: user.password,
    must_change_password: Boolean(user.mustChangePassword),
    password_changed_at: user.passwordChangedAt || null,
  }));

  await runInTransaction(async (connection) => {
    const sync = await prepareTableSync(connection, info, "users", rows, stats);
    await sync.applyDeletes();
    await sync.applyUpserts();
  });

  return stats;
}

// ---------------------------------------------------------------------------
// Lectura
// ---------------------------------------------------------------------------
// Los textos opcionales vuelven como "" (igual que en modo JSON) para no romper comparaciones en la app.
function textOrEmpty(value) {
  return value === null || value === undefined ? "" : String(value);
}

function dateOnly(value) {
  if (!value) {
    return "";
  }
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }
  return String(value).slice(0, 10);
}

// column puede venir con alias de tabla ("i.unit"): se busca sin el alias.
function optionalSelect(info, table, column, alias) {
  return hasColumn(info, table, column.replace(/^\w+\./, "")) ? `, ${column} AS ${alias}` : "";
}

async function readMysqlUsers() {
  const info = await getColumnInfo();
  availableColumns(info, "users", TABLES.users);
  const [rows] = await getMysqlPool().query(`
    SELECT id, username, full_name AS name, role, password_hash AS password
      ${optionalSelect(info, "users", "must_change_password", "mustChangePassword")}
      ${optionalSelect(info, "users", "password_changed_at", "passwordChangedAt")}
    FROM users
    ORDER BY full_name ASC
  `);

  return rows.map((row) => ({
    id: row.id,
    username: row.username,
    name: row.name,
    role: row.role,
    password: row.password,
    mustChangePassword: Boolean(row.mustChangePassword),
    passwordChangedAt: toIsoString(row.passwordChangedAt),
  }));
}

async function readMysqlDb() {
  const info = await getColumnInfo();
  DB_TABLE_ORDER.filter((table) => !OPTIONAL_TABLES.has(table)).forEach((table) => availableColumns(info, table, TABLES[table]));
  const pool = getMysqlPool();
  // Tablas opcionales (agregadas por migraciones): si no existen, se leen vacías.
  const optionalQuery = (table, sql) => (info.get(table) ? pool.query(sql) : Promise.resolve([[]]));

  const masterQuery = (table) => `
    SELECT id, name, description, created_at AS createdAt, created_by AS createdBy
      ${optionalSelect(info, table, "updated_at", "updatedAt")}
      ${optionalSelect(info, table, "updated_by", "updatedBy")}
    FROM ${table}
    ORDER BY name ASC`;

  const [
    categoriesResult,
    locationsResult,
    costCentersResult,
    orientationsResult,
    responsiblesResult,
    itemsResult,
    loansResult,
    consumptionsResult,
    stockEntriesResult,
    purchaseRequestsResult,
    purchaseRequestItemsResult,
    activityResult,
    suppliersResult,
    confirmationsResult,
    confirmationLinesResult,
    invoicesResult,
    rolePermissionsResult,
    invoiceLinesResult,
    writeOffsResult,
  ] = await Promise.all([
    pool.query(masterQuery("categories")),
    pool.query(masterQuery("locations")),
    pool.query(masterQuery("cost_centers")),
    pool.query(masterQuery("orientations")),
    pool.query(`
      SELECT r.id, r.type, r.full_name AS fullName, r.dni, r.admission_date AS admissionDate,
             r.course, r.division, o.name AS orientation, r.specialty, r.position, r.address,
             r.email, r.phone, r.created_at AS createdAt, r.created_by AS createdBy,
             r.updated_at AS updatedAt, r.updated_by AS updatedBy
      FROM responsibles r
      LEFT JOIN orientations o ON o.id = r.orientation_id
      ORDER BY r.full_name ASC
    `),
    pool.query(`
      SELECT i.id, i.name, c.name AS category, i.code, i.subcode, l.name AS location,
             i.stock, i.stock_minimum AS stockMinimum, i.unit_cost AS amount, i.notes,
             i.created_at AS createdAt, i.created_by AS createdBy,
             i.updated_at AS updatedAt, i.updated_by AS updatedBy
             ${optionalSelect(info, "items", "last_purchase_cost", "lastPurchaseCost")}
             ${optionalSelect(info, "items", "last_purchase_at", "lastPurchaseAt")}
             ${optionalSelect(info, "items", "last_purchase_supplier", "lastPurchaseSupplier")}
             ${optionalSelect(info, "items", "last_purchase_invoice", "lastPurchaseInvoice")}
             ${optionalSelect(info, "items", "i.unit", "unit")}
             ${optionalSelect(info, "items", "i.retired_at", "retiredAt")}
             ${optionalSelect(info, "items", "i.retired_by", "retiredBy")}
      FROM items i
      LEFT JOIN categories c ON c.id = i.category_id
      LEFT JOIN locations l ON l.id = i.location_id
      ORDER BY i.created_at DESC, i.name ASC
    `),
    pool.query(`
      SELECT id, item_id AS itemId, responsible_id AS responsibleId, borrower_name AS borrower,
             department, quantity, due_date AS dueDate, observation, created_at AS createdAt,
             created_by AS createdBy
             ${optionalSelect(info, "loans", "loan_group_id", "groupId")}
      FROM loans
      ORDER BY created_at DESC
    `),
    pool.query(`
      SELECT c.id, c.item_id AS itemId, c.responsible_id AS responsibleId,
             c.responsible_name AS responsible, c.department, cc.name AS costCenter,
             c.quantity, c.detail, c.created_at AS createdAt, c.created_by AS createdBy
      FROM consumptions c
      LEFT JOIN cost_centers cc ON cc.id = c.cost_center_id
      ORDER BY c.created_at DESC
    `),
    pool.query(`
      SELECT id, entry_type AS entryType, target_type AS targetType, item_id AS itemId,
             item_name AS itemName, quantity, donor, provider, invoice,
             purchase_request_id AS purchaseRequestId, observation,
             unit_cost AS unitCost, total_cost AS totalCost
             ${optionalSelect(info, "stock_entries", "confirmation_id", "confirmationId")}
             ${optionalSelect(info, "stock_entries", "supplier_id", "supplierId")}
             ${optionalSelect(info, "stock_entries", "purchase_invoice_id", "purchaseInvoiceId")},
             created_at AS createdAt, created_by AS createdBy
      FROM stock_entries
      ORDER BY created_at DESC
    `),
    pool.query(`
      SELECT pr.id, cc.name AS costCenter, pr.observation, pr.status, pr.provider, pr.invoice,
             pr.created_at AS createdAt, pr.created_by AS createdBy,
             pr.fulfilled_at AS fulfilledAt, pr.fulfilled_by AS fulfilledBy
             ${optionalSelect(info, "purchase_requests", "approvals", "approvals")}
      FROM purchase_requests pr
      LEFT JOIN cost_centers cc ON cc.id = pr.cost_center_id
      ORDER BY pr.created_at DESC
    `),
    pool.query(`
      SELECT purchase_request_id AS purchaseRequestId, item_id AS itemId, item_name AS itemName,
             code, subcode, requested_quantity AS quantity, current_stock AS currentStock,
             stock_minimum AS stockMinimum, current_unit_cost AS amount,
             fulfilled_quantity AS fulfilledQuantity, fulfilled_unit_cost AS fulfilledUnitCost,
             fulfilled_total_cost AS fulfilledTotalCost
      FROM purchase_request_items
      ORDER BY id ASC
    `),
    pool.query("SELECT id, event_type AS type, message, created_at AS createdAt FROM activity_log ORDER BY created_at DESC"),
    optionalQuery("suppliers", `
      SELECT id, name, cuit, tax_condition AS taxCondition, address, phone, email, contact, notes,
             created_at AS createdAt, created_by AS createdBy, updated_at AS updatedAt, updated_by AS updatedBy
      FROM suppliers
      ORDER BY name ASC
    `),
    optionalQuery("purchase_confirmations", `
      SELECT id, purchase_request_id AS purchaseRequestId, number, supplier_id AS supplierId,
             supplier_name AS supplierName, supplier_cuit AS supplierCuit, invoice, observation,
             subtotal, withholdings, invoice_total AS invoiceTotal, total_warning AS totalWarning,
             status, created_at AS createdAt, created_by AS createdBy
      FROM purchase_confirmations
      ORDER BY number ASC
    `),
    optionalQuery("purchase_confirmation_lines", `
      SELECT confirmation_id AS confirmationId, item_id AS itemId, item_name AS itemName, code, subcode,
             quantity, unit_cost AS unitCost, discount_type AS discountType, discount_value AS discountValue,
             gross, discount_amount AS discountAmount, subtotal, net_unit_cost AS netUnitCost,
             received_quantity AS receivedQuantity
      FROM purchase_confirmation_lines
      ORDER BY id ASC
    `),
    optionalQuery("purchase_invoices", `
      SELECT id, number, supplier_id AS supplierId, supplier_name AS supplierName, supplier_cuit AS supplierCuit,
             invoice, observation, subtotal, withholdings, invoice_total AS invoiceTotal,
             total_warning AS totalWarning, created_at AS createdAt, created_by AS createdBy
             ${optionalSelect(info, "purchase_invoices", "invoice_date", "invoiceDate")}
      FROM purchase_invoices
      ORDER BY created_at DESC, number DESC
    `),
    optionalQuery("role_permissions", `
      SELECT id, permissions, updated_at AS updatedAt, updated_by AS updatedBy
      FROM role_permissions
      ORDER BY id ASC
    `),
    optionalQuery("purchase_invoice_lines", `
      SELECT invoice_id AS invoiceId, item_id AS itemId, item_name AS itemName, code, subcode, quantity,
             unit_cost AS unitCost, discount_type AS discountType, discount_value AS discountValue, gross,
             discount_amount AS discountAmount, subtotal, net_unit_cost AS netUnitCost
      FROM purchase_invoice_lines
      ORDER BY id ASC
    `),
    optionalQuery("item_write_offs", `
      SELECT id, item_id AS itemId, item_name AS itemName, item_code AS itemCode, quantity, unit,
             unit_cost AS unitCost, reason, observation, write_off_date AS date, write_off_time AS time,
             is_retirement AS retire, created_at AS createdAt, created_by AS createdBy
      FROM item_write_offs
      ORDER BY created_at DESC
    `),
  ]);

  const masterRow = (row) => ({
    id: row.id,
    name: row.name,
    description: textOrEmpty(row.description),
    createdAt: toIsoString(row.createdAt),
    createdBy: textOrEmpty(row.createdBy),
    ...(row.updatedAt ? { updatedAt: toIsoString(row.updatedAt) } : {}),
    ...(row.updatedBy ? { updatedBy: row.updatedBy } : {}),
  });

  const categories = categoriesResult[0].map(masterRow);
  const locations = locationsResult[0].map(masterRow);
  const costCenters = costCentersResult[0].map(masterRow);
  const orientations = orientationsResult[0].map(masterRow);
  const responsibles = responsiblesResult[0].map((row) => ({
    ...row,
    admissionDate: dateOnly(row.admissionDate),
    course: textOrEmpty(row.course),
    division: textOrEmpty(row.division),
    orientation: textOrEmpty(row.orientation),
    specialty: textOrEmpty(row.specialty),
    position: textOrEmpty(row.position),
    address: textOrEmpty(row.address),
    email: textOrEmpty(row.email),
    phone: textOrEmpty(row.phone),
    createdAt: toIsoString(row.createdAt),
    createdBy: textOrEmpty(row.createdBy),
    updatedAt: toIsoString(row.updatedAt),
    updatedBy: textOrEmpty(row.updatedBy),
  }));
  const items = itemsResult[0].map(({ lastPurchaseCost, lastPurchaseAt, lastPurchaseSupplier, lastPurchaseInvoice, unit, retiredAt, retiredBy, ...row }) => ({
    ...row,
    unit: unit || "unidad",
    ...(retiredAt ? { retiredAt: toIsoString(retiredAt), retiredBy: textOrEmpty(retiredBy) } : {}),
    ...(lastPurchaseCost !== null && lastPurchaseCost !== undefined
      ? {
        lastPurchaseCost: Number(lastPurchaseCost),
        lastPurchaseAt: toIsoString(lastPurchaseAt),
        lastPurchaseSupplier: textOrEmpty(lastPurchaseSupplier),
        lastPurchaseInvoice: textOrEmpty(lastPurchaseInvoice),
      }
      : {}),
    category: textOrEmpty(row.category),
    subcode: textOrEmpty(row.subcode),
    location: textOrEmpty(row.location),
    notes: textOrEmpty(row.notes),
    stock: Number(row.stock || 0),
    stockMinimum: Number(row.stockMinimum || 0),
    amount: Number(row.amount || 0),
    createdAt: toIsoString(row.createdAt),
    createdBy: textOrEmpty(row.createdBy),
    updatedAt: toIsoString(row.updatedAt),
    updatedBy: textOrEmpty(row.updatedBy),
  }));
  const loans = loansResult[0].map(({ groupId, ...row }) => ({
    ...row,
    ...(groupId ? { groupId } : {}),
    department: textOrEmpty(row.department),
    observation: textOrEmpty(row.observation),
    quantity: Number(row.quantity || 0),
    dueDate: dateOnly(row.dueDate),
    createdAt: toIsoString(row.createdAt),
    createdBy: textOrEmpty(row.createdBy),
  }));
  const consumptions = consumptionsResult[0].map((row) => ({
    ...row,
    department: textOrEmpty(row.department),
    costCenter: textOrEmpty(row.costCenter),
    detail: textOrEmpty(row.detail),
    quantity: Number(row.quantity || 0),
    createdAt: toIsoString(row.createdAt),
    createdBy: textOrEmpty(row.createdBy),
  }));
  const stockEntries = stockEntriesResult[0].map(({ confirmationId, supplierId, purchaseInvoiceId, ...row }) => ({
    ...row,
    ...(confirmationId ? { confirmationId } : {}),
    ...(supplierId ? { supplierId } : {}),
    ...(purchaseInvoiceId ? { purchaseInvoiceId } : {}),
    donor: textOrEmpty(row.donor),
    provider: textOrEmpty(row.provider),
    invoice: textOrEmpty(row.invoice),
    observation: textOrEmpty(row.observation),
    quantity: Number(row.quantity || 0),
    unitCost: Number(row.unitCost || 0),
    totalCost: Number(row.totalCost || 0),
    createdAt: toIsoString(row.createdAt),
    createdBy: textOrEmpty(row.createdBy),
  }));

  const requestItemsByRequest = new Map();
  purchaseRequestItemsResult[0].forEach((row) => {
    const current = requestItemsByRequest.get(row.purchaseRequestId) || { items: [], fulfillment: [] };
    current.items.push({
      itemId: row.itemId,
      itemName: row.itemName,
      code: textOrEmpty(row.code),
      subcode: textOrEmpty(row.subcode),
      quantity: Number(row.quantity || 0),
      currentStock: Number(row.currentStock || 0),
      stockMinimum: Number(row.stockMinimum || 0),
      amount: Number(row.amount || 0),
    });
    if (row.fulfilledQuantity !== null && row.fulfilledQuantity !== undefined) {
      current.fulfillment.push({
        itemId: row.itemId,
        quantity: Number(row.fulfilledQuantity || 0),
        unitCost: Number(row.fulfilledUnitCost || 0),
        totalCost: Number(row.fulfilledTotalCost || 0),
      });
    }
    requestItemsByRequest.set(row.purchaseRequestId, current);
  });

  const linesByConfirmation = new Map();
  confirmationLinesResult[0].forEach((row) => {
    if (!linesByConfirmation.has(row.confirmationId)) linesByConfirmation.set(row.confirmationId, []);
    linesByConfirmation.get(row.confirmationId).push({
      itemId: row.itemId,
      itemName: row.itemName,
      code: textOrEmpty(row.code),
      subcode: textOrEmpty(row.subcode),
      quantity: Number(row.quantity || 0),
      unitCost: Number(row.unitCost || 0),
      discountType: row.discountType || "percent",
      discountValue: Number(row.discountValue || 0),
      gross: Number(row.gross || 0),
      discountAmount: Number(row.discountAmount || 0),
      subtotal: Number(row.subtotal || 0),
      netUnitCost: Number(row.netUnitCost || 0),
      receivedQuantity: Number(row.receivedQuantity || 0),
    });
  });
  const confirmationsByRequest = new Map();
  confirmationsResult[0].forEach((row) => {
    if (!confirmationsByRequest.has(row.purchaseRequestId)) confirmationsByRequest.set(row.purchaseRequestId, []);
    confirmationsByRequest.get(row.purchaseRequestId).push({
      id: row.id,
      number: Number(row.number || 0),
      supplierId: row.supplierId,
      supplierName: row.supplierName,
      supplierCuit: textOrEmpty(row.supplierCuit),
      invoice: textOrEmpty(row.invoice),
      observation: textOrEmpty(row.observation),
      lines: linesByConfirmation.get(row.id) || [],
      subtotal: Number(row.subtotal || 0),
      withholdings: Number(row.withholdings || 0),
      invoiceTotal: Number(row.invoiceTotal || 0),
      totalWarning: textOrEmpty(row.totalWarning),
      status: row.status,
      createdAt: toIsoString(row.createdAt),
      createdBy: textOrEmpty(row.createdBy),
    });
  });
  const suppliers = suppliersResult[0].map(({ updatedAt, updatedBy, ...row }) => ({
    ...row,
    taxCondition: textOrEmpty(row.taxCondition),
    address: textOrEmpty(row.address),
    phone: textOrEmpty(row.phone),
    email: textOrEmpty(row.email),
    contact: textOrEmpty(row.contact),
    notes: textOrEmpty(row.notes),
    createdAt: toIsoString(row.createdAt),
    createdBy: textOrEmpty(row.createdBy),
    ...(updatedAt ? { updatedAt: toIsoString(updatedAt) } : {}),
    ...(updatedBy ? { updatedBy } : {}),
  }));

  const linesByInvoice = new Map();
  invoiceLinesResult[0].forEach((row) => {
    if (!linesByInvoice.has(row.invoiceId)) linesByInvoice.set(row.invoiceId, []);
    linesByInvoice.get(row.invoiceId).push({
      itemId: row.itemId,
      itemName: row.itemName,
      code: textOrEmpty(row.code),
      subcode: textOrEmpty(row.subcode),
      quantity: Number(row.quantity || 0),
      unitCost: Number(row.unitCost || 0),
      discountType: row.discountType || "percent",
      discountValue: Number(row.discountValue || 0),
      gross: Number(row.gross || 0),
      discountAmount: Number(row.discountAmount || 0),
      subtotal: Number(row.subtotal || 0),
      netUnitCost: Number(row.netUnitCost || 0),
    });
  });
  const purchaseInvoices = invoicesResult[0].map((row) => ({
    id: row.id,
    number: Number(row.number || 0),
    supplierId: row.supplierId,
    supplierName: row.supplierName,
    supplierCuit: textOrEmpty(row.supplierCuit),
    invoice: textOrEmpty(row.invoice),
    observation: textOrEmpty(row.observation),
    lines: linesByInvoice.get(row.id) || [],
    subtotal: Number(row.subtotal || 0),
    withholdings: Number(row.withholdings || 0),
    invoiceTotal: Number(row.invoiceTotal || 0),
    totalWarning: textOrEmpty(row.totalWarning),
    createdAt: toIsoString(row.createdAt),
    createdBy: textOrEmpty(row.createdBy),
    ...(row.invoiceDate ? { invoiceDate: dateOnly(row.invoiceDate) } : {}),
  }));

  const rolePermissions = rolePermissionsResult[0].map((row) => ({
    id: row.id,
    role: row.id,
    permissions: String(row.permissions || "").split(",").filter(Boolean),
    ...(row.updatedAt ? { updatedAt: toIsoString(row.updatedAt) } : {}),
    ...(row.updatedBy ? { updatedBy: row.updatedBy } : {}),
  }));

  const purchaseRequests = purchaseRequestsResult[0].map(({ approvals, ...row }) => {
    const detail = requestItemsByRequest.get(row.id) || { items: [], fulfillment: [] };
    let approval = null;
    try {
      approval = approvals ? JSON.parse(approvals) : null;
    } catch (error) {
      approval = null;
    }
    return {
      ...row,
      ...(approval ? { approval } : {}),
      costCenter: textOrEmpty(row.costCenter),
      observation: textOrEmpty(row.observation),
      provider: textOrEmpty(row.provider),
      invoice: textOrEmpty(row.invoice),
      items: detail.items,
      fulfillment: detail.fulfillment,
      confirmations: confirmationsByRequest.get(row.id) || [],
      createdAt: toIsoString(row.createdAt),
      createdBy: textOrEmpty(row.createdBy),
      fulfilledAt: toIsoString(row.fulfilledAt),
      fulfilledBy: textOrEmpty(row.fulfilledBy),
    };
  });

  const activity = activityResult[0].map((row) => ({
    ...row,
    createdAt: toIsoString(row.createdAt),
  }));

  const writeOffs = writeOffsResult[0].map((row) => ({
    ...row,
    itemCode: textOrEmpty(row.itemCode),
    quantity: Number(row.quantity || 0),
    unit: row.unit || "unidad",
    unitCost: Number(row.unitCost || 0),
    observation: textOrEmpty(row.observation),
    date: dateOnly(row.date),
    time: textOrEmpty(row.time),
    retire: Boolean(row.retire),
    createdAt: toIsoString(row.createdAt),
    createdBy: textOrEmpty(row.createdBy),
  }));

  return {
    suppliers,
    writeOffs,
    purchaseInvoices,
    rolePermissions,
    items,
    loans,
    consumptions,
    stockEntries,
    purchaseRequests,
    costCenters,
    categories,
    responsibles,
    orientations,
    activity,
    locations,
  };
}

module.exports = {
  emptyDb,
  readJsonFromDisk,
  writeJsonToDisk,
  readMysqlUsers,
  writeMysqlUsers,
  readMysqlDb,
  writeMysqlDb,
  resetColumnInfoCache,
  toMysqlDateTime,
};

}],
  "lib/mysql.js": [{"mysql2/promise":"missing:mysql2/promise"}, function (require, module, exports, __dirname, __filename) {
function readMysqlConfig() {
  return {
    host: process.env.MYSQL_HOST || "127.0.0.1",
    port: Number(process.env.MYSQL_PORT || 3306),
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "",
    database: process.env.MYSQL_DATABASE || "panol_etha",
    charset: process.env.MYSQL_CHARSET || "utf8mb4",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    // Fechas y horas en UTC: evita que se corran según la zona horaria del servidor.
    timezone: "Z",
    // Las columnas DATE vuelven como texto "AAAA-MM-DD" en lugar de objetos Date.
    dateStrings: ["DATE"],
    // Desactivado: impide encadenar varias consultas en una sola llamada (reduce el impacto de una inyección SQL).
    multipleStatements: false,
  };
}

let pool;

function getMysqlPool() {
  if (!pool) {
    const mysql = require("mysql2/promise");
    pool = mysql.createPool(readMysqlConfig());
  }
  return pool;
}

async function testMysqlConnection() {
  const connection = await getMysqlPool().getConnection();
  try {
    await connection.ping();
    return true;
  } finally {
    connection.release();
  }
}

module.exports = {
  getMysqlPool,
  readMysqlConfig,
  testMysqlConnection,
};

}],
  "lib/sqliteStorage.js": [{"fs":"shim:fs","path":"shim:path","node:sqlite":"missing:node:sqlite"}, function (require, module, exports, __dirname, __filename) {
// Almacenamiento en SQLite embebido (un solo archivo .sqlite, sin servidor de base de datos).
// Usa el módulo SQLite que trae Node.js (node:sqlite, Node 22.13 o superior): no hay que instalar nada.
//
// Cada colección del sistema (materiales, préstamos, compras, ...) es una tabla con una fila por registro:
//   id TEXT PRIMARY KEY · position INTEGER (orden) · data TEXT (registro completo en JSON)
// Al guardar se escriben solo las filas que cambiaron, dentro de una transacción.
// Además se crean vistas (v_materiales, v_prestamos, ...) con columnas legibles para consultar la base
// desde cualquier visor de SQLite (por ejemplo, DB Browser for SQLite).

const fs = require("fs");
const path = require("path");

let sqlite;
try {
  // Silencia el aviso "ExperimentalWarning" de node:sqlite en las versiones que lo muestran.
  const originalEmit = process.emitWarning;
  process.emitWarning = (warning, ...args) => {
    const text = typeof warning === "string" ? warning : warning?.message || "";
    if (/SQLite/i.test(text)) return;
    return originalEmit.call(process, warning, ...args);
  };
  sqlite = require("node:sqlite");
  process.emitWarning = originalEmit;
} catch (error) {
  const message =
    `Esta versión de Node.js (${process.version}) no incluye SQLite. ` +
    "La versión demo necesita Node.js 22.13 o superior: descargalo de https://nodejs.org (versión LTS).";
  const wrapped = new Error(message);
  wrapped.code = "SQLITE_UNAVAILABLE";
  throw wrapped;
}

const DOCUMENTS = { db: "", users: "users" };
let database = null;
let databaseFile = "";

function open(file) {
  if (database && databaseFile === file) return database;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  database = new sqlite.DatabaseSync(file);
  databaseFile = file;
  database.exec(`
    PRAGMA journal_mode = DELETE;
    PRAGMA synchronous = FULL;
    CREATE TABLE IF NOT EXISTS _colecciones (
      tabla TEXT PRIMARY KEY,
      documento TEXT NOT NULL,
      clave TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS _meta (
      clave TEXT PRIMARY KEY,
      valor TEXT
    );
  `);
  return database;
}

// "purchaseInvoices" -> "purchase_invoices"; los usuarios van en la tabla "users".
function tableName(documentName, key) {
  const snake = key.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase().replace(/[^a-z0-9_]/g, "_");
  return documentName === "users" ? "users" : snake;
}

function ensureTable(db, documentName, key) {
  const table = tableName(documentName, key);
  db.exec(`CREATE TABLE IF NOT EXISTS "${table}" (id TEXT PRIMARY KEY, position INTEGER NOT NULL, data TEXT NOT NULL)`);
  db.prepare("INSERT OR IGNORE INTO _colecciones (tabla, documento, clave) VALUES (?, ?, ?)").run(table, documentName, key);
  return table;
}

function rowId(entry, index) {
  if (entry && typeof entry === "object") {
    if (entry.id !== undefined && entry.id !== null && entry.id !== "") return String(entry.id);
    if (entry.role) return String(entry.role);
  }
  return `#${index}`;
}

function hasData(file) {
  if (!fs.existsSync(file)) return false;
  const db = open(file);
  const tables = db.prepare("SELECT tabla FROM _colecciones").all();
  return tables.some(({ tabla }) => db.prepare(`SELECT 1 FROM "${tabla}" LIMIT 1`).get());
}

// Documento principal ("db") o lista de usuarios ("users").
function readDocument(file, documentName) {
  const db = open(file);
  const collections = db.prepare("SELECT tabla, clave FROM _colecciones WHERE documento = ? ORDER BY tabla").all(documentName);
  if (documentName === "users") {
    const users = collections.find((entry) => entry.tabla === "users");
    return users ? db.prepare('SELECT data FROM "users" ORDER BY position').all().map((row) => JSON.parse(row.data)) : [];
  }
  const document = {};
  for (const { tabla, clave } of collections) {
    document[clave] = db.prepare(`SELECT data FROM "${tabla}" ORDER BY position`).all().map((row) => JSON.parse(row.data));
  }
  const extra = db.prepare("SELECT valor FROM _meta WHERE clave = ?").get(`${documentName}:escalares`);
  if (extra?.valor) Object.assign(document, JSON.parse(extra.valor));
  return document;
}

function syncCollection(db, table, entries, stats) {
  const stored = new Map(db.prepare(`SELECT id, position, data FROM "${table}"`).all().map((row) => [row.id, row]));
  const insert = db.prepare(`INSERT INTO "${table}" (id, position, data) VALUES (?, ?, ?)`);
  const update = db.prepare(`UPDATE "${table}" SET position = ?, data = ? WHERE id = ?`);
  const remove = db.prepare(`DELETE FROM "${table}" WHERE id = ?`);
  const seen = new Set();
  entries.forEach((entry, index) => {
    let id = rowId(entry, index);
    while (seen.has(id)) id = `${id}#${index}`;
    seen.add(id);
    const data = JSON.stringify(entry);
    const current = stored.get(id);
    if (!current) {
      insert.run(id, index, data);
      stats.inserted += 1;
    } else if (current.position !== index || current.data !== data) {
      update.run(index, data, id);
      stats.updated += 1;
    }
  });
  for (const id of stored.keys()) {
    if (!seen.has(id)) {
      remove.run(id);
      stats.deleted += 1;
    }
  }
}

function writeDocument(file, documentName, value) {
  const db = open(file);
  const stats = { inserted: 0, updated: 0, deleted: 0 };
  db.exec("BEGIN IMMEDIATE");
  try {
    if (documentName === "users") {
      syncCollection(db, ensureTable(db, "users", "users"), Array.isArray(value) ? value : [], stats);
    } else {
      const scalars = {};
      for (const [key, entries] of Object.entries(value || {})) {
        if (Array.isArray(entries)) {
          syncCollection(db, ensureTable(db, documentName, key), entries, stats);
        } else {
          scalars[key] = entries;
        }
      }
      // Colecciones que ya no están en el documento: se vacían.
      const present = new Set(Object.keys(value || {}));
      for (const { tabla, clave } of db.prepare("SELECT tabla, clave FROM _colecciones WHERE documento = ?").all(documentName)) {
        if (!present.has(clave)) syncCollection(db, tabla, [], stats);
      }
      db.prepare("INSERT INTO _meta (clave, valor) VALUES (?, ?) ON CONFLICT(clave) DO UPDATE SET valor = excluded.valor")
        .run(`${documentName}:escalares`, JSON.stringify(scalars));
    }
    db.exec("COMMIT");
  } catch (error) {
    db.exec("ROLLBACK");
    throw error;
  }
  ensureViews(db);
  return stats;
}

// Vistas en castellano para consultar la base sin leer JSON.
const VIEWS = {
  v_materiales: ["items", `
    json_extract(data, '$.name') AS material, json_extract(data, '$.code') AS codigo,
    json_extract(data, '$.subcode') AS subcodigo, json_extract(data, '$.category') AS categoria,
    json_extract(data, '$.location') AS ubicacion, json_extract(data, '$.stock') AS stock,
    json_extract(data, '$.stockMinimum') AS stock_minimo, json_extract(data, '$.amount') AS costo_promedio,
    json_extract(data, '$.lastPurchaseCost') AS ultimo_costo, json_extract(data, '$.lastPurchaseSupplier') AS ultimo_proveedor`],
  v_prestamos: ["loans", `
    (SELECT json_extract(i.data, '$.name') FROM items i WHERE i.id = json_extract(loans.data, '$.itemId')) AS material,
    json_extract(data, '$.borrower') AS responsable,
    json_extract(data, '$.department') AS sector, json_extract(data, '$.quantity') AS cantidad,
    json_extract(data, '$.dueDate') AS vence, json_extract(data, '$.createdAt') AS prestado,
    json_extract(data, '$.createdBy') AS registro`],
  v_responsables: ["responsibles", `
    json_extract(data, '$.fullName') AS nombre, json_extract(data, '$.type') AS tipo,
    json_extract(data, '$.dni') AS dni, json_extract(data, '$.course') AS curso,
    json_extract(data, '$.division') AS division, json_extract(data, '$.email') AS email`],
  v_proveedores: ["suppliers", `
    json_extract(data, '$.name') AS razon_social, json_extract(data, '$.cuit') AS cuit,
    json_extract(data, '$.taxCondition') AS condicion_iva, json_extract(data, '$.phone') AS telefono,
    json_extract(data, '$.email') AS email`],
  v_facturas_compra: ["purchase_invoices", `
    json_extract(data, '$.invoice') AS factura, json_extract(data, '$.invoiceDate') AS fecha_factura,
    json_extract(data, '$.supplierName') AS proveedor, json_extract(data, '$.subtotal') AS subtotal,
    json_extract(data, '$.invoiceTotal') AS total, json_extract(data, '$.createdBy') AS registro`],
  v_actividad: ["activity", `
    json_extract(data, '$.createdAt') AS fecha, json_extract(data, '$.type') AS tipo,
    json_extract(data, '$.message') AS detalle`],
  v_usuarios: ["users", `
    json_extract(data, '$.username') AS usuario, json_extract(data, '$.name') AS nombre,
    json_extract(data, '$.role') AS rol`],
};

let viewsReady = false;
function ensureViews(db) {
  if (viewsReady) return;
  const existing = new Set(db.prepare("SELECT name FROM sqlite_master WHERE type IN ('table','view')").all().map((row) => row.name));
  let pending = false;
  for (const [view, [table, columns]] of Object.entries(VIEWS)) {
    if (existing.has(view)) continue;
    if (!existing.has(table)) {
      pending = true;
      continue;
    }
    db.exec(`CREATE VIEW IF NOT EXISTS "${view}" AS SELECT id, ${columns} FROM "${table}" ORDER BY position`);
  }
  viewsReady = !pending;
}

function close() {
  if (database) {
    database.close();
    database = null;
    databaseFile = "";
    viewsReady = false;
  }
}

module.exports = {
  DOCUMENTS,
  open,
  close,
  hasData,
  readDocument,
  writeDocument,
};

}],
  "src/auth/permissions.js": [{"../data/store":"src/data/store.js","../http/responses":"src/http/responses.js"}, function (require, module, exports, __dirname, __filename) {
const { readDb } = require("../data/store");
const { sendJson } = require("../http/responses");

// Permisos por rol, configurables por el administrador desde "Permisos".
// "defaults" reproduce lo que cada rol podía hacer antes de que existiera esta pantalla.
// El administrador tiene siempre todos los permisos; la gestión de usuarios y de permisos
// es exclusiva del administrador y no se puede delegar.
const PERMISSIONS = [
  { key: "loans.create", group: "Préstamos", label: "Registrar préstamos", defaults: ["panolero", "docente", "jefe_taller"] },
  { key: "consumptions.create", group: "Préstamos", label: "Registrar consumos", defaults: ["panolero", "docente", "jefe_taller"] },
  { key: "loans.return", group: "Préstamos", label: "Registrar devoluciones", defaults: ["panolero"] },
  { key: "stock.entries", group: "Inventario", label: "Ingresos al inventario (donación o compra)", defaults: ["panolero"] },
  { key: "items.manage", group: "Inventario", label: "Alta, edición y eliminación de materiales", defaults: ["panolero"] },
  { key: "items.writeOff", group: "Inventario", label: "Dar de baja materiales (rotura, pérdida, vencimiento, etc.)", defaults: ["panolero"] },
  { key: "purchases.requests", group: "Compras", label: "Generar pedidos de compra", defaults: ["panolero", "jefe_taller"] },
  { key: "purchases.approve.workshop", group: "Compras", label: "Aprobar pedidos de compra como Jefe de taller (1.ª firma)", defaults: ["jefe_taller"] },
  { key: "purchases.approve.rector", group: "Compras", label: "Aprobar pedidos de compra como Rector (2.ª firma)", defaults: ["directivo"] },
  { key: "purchases.approve.accounting", group: "Compras", label: "Aprobar pedidos de compra como Contable (3.ª firma)", defaults: ["contable"] },
  { key: "purchases.confirm", group: "Compras", label: "Confirmar pedidos de compra aprobados (proveedor, costos y factura)", defaults: ["panolero", "directivo"] },
  { key: "purchases.invoices", group: "Compras", label: "Cargar facturas de compra sin pedido", defaults: ["panolero"] },
  { key: "masterData.manage", group: "Datos maestros", label: "Categorías, ubicaciones, centros de costos, orientaciones y proveedores", defaults: ["panolero"] },
  { key: "responsibles.manage", group: "Datos maestros", label: "Alta, edición y baja de responsables (alumnos y profesores)", defaults: ["panolero"] },
  { key: "responsibles.personalData", group: "Datos maestros", label: "Ver datos personales de responsables (DNI, domicilio, contacto)", defaults: ["panolero", "administrativo", "directivo"] },
];

const PERMISSION_KEYS = PERMISSIONS.map((permission) => permission.key);
const CONFIGURABLE_ROLES = ["panolero", "docente", "administrativo", "directivo", "jefe_taller", "contable"];
// Jerarquía: el rol de la izquierda tiene siempre, como mínimo, todo lo que tenga el de la derecha.
const ROLE_INHERITS = { directivo: "administrativo" };

function defaultPermissions(role) {
  return PERMISSIONS.filter((permission) => permission.defaults.includes(role)).map((permission) => permission.key);
}

// Permisos propios del rol: lo guardado por el administrador o, si nunca se configuró, los predeterminados.
function ownPermissions(db, role) {
  const stored = (db.rolePermissions || []).find((entry) => entry.role === role);
  const keys = stored ? stored.permissions : defaultPermissions(role);
  return PERMISSION_KEYS.filter((key) => keys.includes(key));
}

// Permisos efectivos: los propios, más los heredados del rol inferior, más los implícitos.
function rolePermissions(db, role, seen = new Set()) {
  if (role === "admin") return PERMISSION_KEYS.slice();
  const set = new Set(ownPermissions(db, role));
  const parent = ROLE_INHERITS[role];
  if (parent && !seen.has(parent)) {
    seen.add(role);
    rolePermissions(db, parent, seen).forEach((key) => set.add(key));
  }
  // Quien edita responsables necesita ver sus datos: si no, al guardar se perderían.
  if (set.has("responsibles.manage")) set.add("responsibles.personalData");
  return PERMISSION_KEYS.filter((key) => set.has(key));
}

function hasPermission(db, role, key) {
  return role === "admin" || rolePermissions(db, role).includes(key);
}

// Matriz completa para la pantalla del administrador.
function permissionMatrix(db) {
  return {
    catalog: PERMISSIONS.map(({ key, group, label, defaults }) => ({ key, group, label, defaults })),
    roles: CONFIGURABLE_ROLES.map((role) => {
      const stored = (db.rolePermissions || []).find((entry) => entry.role === role);
      const parent = ROLE_INHERITS[role] || null;
      return {
        role,
        permissions: rolePermissions(db, role),
        own: ownPermissions(db, role),
        inheritsFrom: parent,
        inherited: parent ? rolePermissions(db, parent) : [],
        customized: Boolean(stored),
        updatedAt: stored?.updatedAt || null,
        updatedBy: stored?.updatedBy || null,
      };
    }),
  };
}

// Guarda de rutas: la sesión ya está validada; responde 403 si el rol no tiene el permiso.
async function requirePermission(res, session, key) {
  if (session.role === "admin") return true;
  const db = await readDb();
  if (hasPermission(db, session.role, key)) return true;
  sendJson(res, 403, { error: "No tenés permisos para realizar esta acción." });
  return false;
}

module.exports = {
  PERMISSIONS,
  PERMISSION_KEYS,
  CONFIGURABLE_ROLES,
  ROLE_INHERITS,
  defaultPermissions,
  ownPermissions,
  rolePermissions,
  hasPermission,
  permissionMatrix,
  requirePermission,
};

}],
  "src/routes/auth.js": [{"../http/responses":"src/http/responses.js","../http/body":"src/http/body.js","../http/security":"src/http/security.js","../data/store":"src/data/store.js","../auth/sessions":"src/auth/sessions.js","../auth/passwords":"src/auth/passwords.js","../auth/loginLimiter":"src/auth/loginLimiter.js","../services/users":"src/services/users.js","../config":"src/config.js","../auth/roles":"src/auth/roles.js","../data/demoSeed":"src/data/demoSeed.js"}, function (require, module, exports, __dirname, __filename) {
const { sendJson } = require("../http/responses");
const { readJsonBody } = require("../http/body");
const { getClientIp } = require("../http/security");
const { logActivity, readUsers, writeUsers } = require("../data/store");
const { clearSessionCookie, createSession, getTokenFromRequest, hashToken, persistSessions, publicSession, sessions, setSessionCookie } = require("../auth/sessions");
const { KNOWN_DEFAULT_PASSWORDS, hashPassword, validatePasswordStrength, verifyPassword } = require("../auth/passwords");
const { clearLoginFailures, getLoginLockMinutes, registerLoginFailure } = require("../auth/loginLimiter");
const { sanitizeUser } = require("../services/users");
const { DEMO_MODE } = require("../config");

const { ROLE_LABELS: DEMO_ROLE_LABELS } = require("../auth/roles");

const DEMO_ROLE_ORDER = ["admin", "directivo", "jefe_taller", "contable", "panolero", "docente", "administrativo"];

// Ingreso, sesión, salida y cambio de contraseña propio.
function register(router) {
  // Versión demo: la pantalla de ingreso muestra los usuarios de prueba (solo con DEMO_MODE=true).
  router.add("GET", "/api/demo", null, async ({ res }) => {
    if (!DEMO_MODE) {
      sendJson(res, 200, { demo: false });
      return;
    }
    const { hasDemoSeed, loadDemoSeed } = require("../data/demoSeed");
    const password = hasDemoSeed() ? loadDemoSeed().password : "";
    const users = (await readUsers())
      .filter((user) => DEMO_ROLE_ORDER.includes(user.role))
      .sort((a, b) => DEMO_ROLE_ORDER.indexOf(a.role) - DEMO_ROLE_ORDER.indexOf(b.role))
      .map((user) => ({ username: user.username, name: user.name, role: DEMO_ROLE_LABELS[user.role] || user.role }));
    sendJson(res, 200, { demo: true, password, users });
  });

  router.add("POST", "/api/login", null, async ({ req, res }) => {
    const body = await readJsonBody(req);
    const username = String(body.username || "").trim().toLowerCase().slice(0, 80);
    const ip = getClientIp(req);

    const lockedMinutes = getLoginLockMinutes(ip, username);
    if (lockedMinutes) {
      sendJson(res, 429, { error: `Demasiados intentos fallidos. Probá de nuevo en ${lockedMinutes} minuto(s).` });
      return;
    }

    const users = await readUsers();
    const user = users.find((entry) => entry.username.toLowerCase() === username);

    if (!user || !verifyPassword(body.password, user.password)) {
      const nowLocked = registerLoginFailure(ip, username);
      await logActivity(
        nowLocked ? "login_locked" : "login_failed",
        nowLocked
          ? `Se bloqueó temporalmente el ingreso del usuario "${username}" desde ${ip} por intentos fallidos.`
          : `Intento de ingreso fallido para el usuario "${username}" desde ${ip}.`
      );
      sendJson(res, 401, { error: "Usuario o contraseña incorrectos." });
      return;
    }

    clearLoginFailures(ip, username);
    // Si entra con una contraseña de ejemplo, se exige el cambio aunque la base no tenga la marca guardada.
    if (KNOWN_DEFAULT_PASSWORDS.includes(String(body.password || "").toLowerCase())) {
      user.mustChangePassword = true;
    }
    const token = createSession(user);
    setSessionCookie(res, token);
    await logActivity("login_success", `${user.name} (${user.username}) inició sesión desde ${ip}.`);
    sendJson(res, 200, { user: { ...sanitizeUser(user), mustChangePassword: Boolean(user.mustChangePassword) } });
  });

  router.add("GET", "/api/session", "any", async ({ res, session }) => {
    sendJson(res, 200, { user: publicSession(session) });
  });

  router.add("POST", "/api/logout", null, async ({ req, res }) => {
    const token = getTokenFromRequest(req);
    if (token) {
      sessions.delete(hashToken(token));
      persistSessions();
    }
    clearSessionCookie(res);
    sendJson(res, 200, { ok: true });
  });

  router.add("POST", "/api/me/password", "any", async ({ req, res, session }) => {
    if (DEMO_MODE) {
      sendJson(res, 400, { error: "En la versión demo no se puede cambiar la contraseña (así todos pueden ingresar con los usuarios de prueba)." });
      return;
    }
    const body = await readJsonBody(req);
    const currentPassword = String(body.currentPassword || "");
    const newPassword = String(body.newPassword || "");
    const users = await readUsers();
    const user = users.find((entry) => entry.id === session.id);

    if (!user) {
      sendJson(res, 404, { error: "El usuario no fue encontrado." });
      return;
    }

    if (!verifyPassword(currentPassword, user.password)) {
      sendJson(res, 400, { error: "La contraseña actual no es correcta." });
      return;
    }

    validatePasswordStrength(newPassword, user.username);
    if (newPassword === currentPassword) {
      sendJson(res, 400, { error: "La nueva contraseña tiene que ser distinta de la actual." });
      return;
    }

    user.password = hashPassword(newPassword);
    user.mustChangePassword = false;
    user.passwordChangedAt = new Date().toISOString();
    await writeUsers(users);

    const currentHash = hashToken(getTokenFromRequest(req));
    for (const [tokenHash, activeSession] of sessions.entries()) {
      if (activeSession.id === user.id && tokenHash !== currentHash) {
        sessions.delete(tokenHash);
      }
    }
    session.mustChangePassword = false;
    persistSessions();

    await logActivity("password_changed", `${user.name} (${user.username}) cambió su contraseña.`);
    sendJson(res, 200, { user: publicSession(session) });
  });
}

module.exports = { register };

}],
  "src/auth/loginLimiter.js": [{"../config":"src/config.js"}, function (require, module, exports, __dirname, __filename) {
const {
  LOGIN_MAX_FAILS_PER_USER,
  LOGIN_MAX_FAILS_PER_IP,
  LOGIN_WINDOW_MS,
  LOGIN_LOCK_MS,
} = require("../config");

// Bloqueo temporal por intentos fallidos de ingreso (por equipo y por usuario+equipo).
const loginAttempts = new Map();

function getAttemptRecord(key) {
  const now = Date.now();
  let record = loginAttempts.get(key);
  if (!record || (now - record.firstFailAt > LOGIN_WINDOW_MS && (!record.lockedUntil || record.lockedUntil < now))) {
    record = { count: 0, firstFailAt: now, lockedUntil: 0 };
    loginAttempts.set(key, record);
  }
  return record;
}

function getLoginLockMinutes(ip, username) {
  const now = Date.now();
  const lockedUntil = Math.max(
    loginAttempts.get(`ip:${ip}`)?.lockedUntil || 0,
    loginAttempts.get(`user:${ip}:${username}`)?.lockedUntil || 0
  );
  return lockedUntil > now ? Math.ceil((lockedUntil - now) / 60000) : 0;
}

function registerLoginFailure(ip, username) {
  let locked = false;
  for (const [key, limit] of [[`ip:${ip}`, LOGIN_MAX_FAILS_PER_IP], [`user:${ip}:${username}`, LOGIN_MAX_FAILS_PER_USER]]) {
    const record = getAttemptRecord(key);
    record.count += 1;
    if (record.count >= limit) {
      record.lockedUntil = Date.now() + LOGIN_LOCK_MS;
      locked = true;
    }
  }
  return locked;
}

function clearLoginFailures(ip, username) {
  loginAttempts.delete(`user:${ip}:${username}`);
}

function purgeExpiredAttempts() {
  const now = Date.now();
  for (const [key, record] of loginAttempts.entries()) {
    if (record.lockedUntil < now && now - record.firstFailAt > LOGIN_WINDOW_MS) {
      loginAttempts.delete(key);
    }
  }
}

module.exports = { getLoginLockMinutes, registerLoginFailure, clearLoginFailures, purgeExpiredAttempts };

}],
  "src/auth/roles.js": [{}, function (require, module, exports, __dirname, __filename) {
// Nombres visibles de los roles (un solo lugar para el servidor).
const ROLE_LABELS = {
  admin: "Administrador",
  directivo: "Directivo",
  jefe_taller: "Jefe de taller",
  contable: "Contable",
  administrativo: "Administrativo",
  docente: "Docente",
  panolero: "Pañolero",
};

const roleLabel = (role) => ROLE_LABELS[role] || String(role || "");

module.exports = { ROLE_LABELS, roleLabel };

}],
  "src/data/demoSeed.js": [{"fs":"shim:fs","path":"shim:path","../config":"src/config.js"}, function (require, module, exports, __dirname, __filename) {
const fs = require("fs");
const path = require("path");
const { ROOT_DIR } = require("../config");

// Datos ficticios de la versión demo (generados con scripts/demo/generar-datos-demo.js).
// Al instalarlos, todas las fechas se corren la misma cantidad de días para que la demo
// siempre parezca actual: préstamos que vencen esta semana, actividad de los últimos meses, etc.
const SEED_FILE = path.join(ROOT_DIR, "demo", "datos-demo.json");
const DAY = 24 * 60 * 60 * 1000;
// "at": fecha de cada firma de aprobación de los pedidos de compra · "retiredAt": baja definitiva de un material.
const DATE_TIME_KEYS = new Set(["createdAt", "updatedAt", "fulfilledAt", "lastPurchaseAt", "passwordChangedAt", "at", "retiredAt"]);
// "date": fecha de cada baja de material.
const DATE_ONLY_KEYS = new Set(["dueDate", "invoiceDate", "date"]);

function shiftDates(value, days) {
  if (Array.isArray(value)) {
    value.forEach((entry) => shiftDates(entry, days));
    return value;
  }
  if (!value || typeof value !== "object") return value;
  for (const [key, current] of Object.entries(value)) {
    if (typeof current === "string" && DATE_TIME_KEYS.has(key)) {
      const date = new Date(current);
      if (!Number.isNaN(date.getTime())) value[key] = new Date(date.getTime() + days * DAY).toISOString();
    } else if (typeof current === "string" && DATE_ONLY_KEYS.has(key) && /^\d{4}-\d{2}-\d{2}$/.test(current)) {
      const date = new Date(`${current}T12:00:00`);
      date.setDate(date.getDate() + days);
      const pad = (number) => String(number).padStart(2, "0");
      value[key] = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    } else if (current && typeof current === "object") {
      shiftDates(current, days);
    }
  }
  return value;
}

function hasDemoSeed() {
  return fs.existsSync(SEED_FILE);
}

function loadDemoSeed(now = new Date()) {
  const seed = JSON.parse(fs.readFileSync(SEED_FILE, "utf8"));
  const generated = new Date(seed.generadoEl);
  const days = Math.max(0, Math.round((now.getTime() - generated.getTime()) / DAY));
  return {
    db: shiftDates(seed.db, days),
    users: shiftDates(seed.users, days),
    password: seed.contraseña,
    shiftedDays: days,
  };
}

module.exports = { SEED_FILE, hasDemoSeed, loadDemoSeed, shiftDates };

}],
  "src/routes/dashboard.js": [{"../http/responses":"src/http/responses.js","../data/store":"src/data/store.js","../services/dashboard":"src/services/dashboard.js"}, function (require, module, exports, __dirname, __filename) {
const { sendJson } = require("../http/responses");
const { readDb } = require("../data/store");
const { buildDashboard } = require("../services/dashboard");

// Datos del panel principal según el rol.
function register(router) {
  router.add("GET", "/api/dashboard", "any", async ({ res, session }) => {
    const db = await readDb();
    sendJson(res, 200, await buildDashboard(db, session));
  });
}

module.exports = { register };

}],
  "src/services/dashboard.js": [{"../auth/permissions":"src/auth/permissions.js","../data/store":"src/data/store.js","../auth/sessions":"src/auth/sessions.js","./users":"src/services/users.js","./responsibles":"src/services/responsibles.js","./validation":"src/services/validation.js","./loanStats":"src/services/loanStats.js","./purchases":"src/services/purchases.js","./items":"src/services/items.js"}, function (require, module, exports, __dirname, __filename) {
const { hasPermission, permissionMatrix, rolePermissions } = require("../auth/permissions");
const { readUsers } = require("../data/store");
const { publicSession } = require("../auth/sessions");
const { sanitizeUser } = require("./users");
const { sanitizeResponsible } = require("./responsibles");
const { startOfToday } = require("./validation");
const { buildLoanStats } = require("./loanStats");
const { approvalState } = require("./purchases");
const { isRetired } = require("./items");

async function buildDashboard(db, session) {
  // Índices por id: evitan recorrer todo el inventario por cada préstamo o consumo.
  const itemsById = new Map(db.items.map((item) => [item.id, item]));
  const canSeePersonalData = hasPermission(db, session.role, "responsibles.personalData");
  const visibleResponsibles = db.responsibles.map((responsible) => sanitizeResponsible(responsible, canSeePersonalData));
  const responsiblesById = new Map(visibleResponsibles.map((responsible) => [responsible.id, responsible]));
  const today = startOfToday();

  const items = db.items.slice().sort((a, b) => a.name.localeCompare(b.name, "es"));
  const loans = db.loans.map((loan) => ({
    ...loan,
    item: itemsById.get(loan.itemId) || null,
    responsible: loan.responsibleId ? responsiblesById.get(loan.responsibleId) || null : null,
    overdue: new Date(`${loan.dueDate}T00:00:00`) < today,
  }));
  const consumptions = db.consumptions
    .map((consumption) => ({
      ...consumption,
      item: itemsById.get(consumption.itemId) || null,
      responsibleData: consumption.responsibleId ? responsiblesById.get(consumption.responsibleId) || null : null,
    }))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const users = session.role === "admin"
    ? (await readUsers())
      .map((user) => sanitizeUser(user))
      .sort((a, b) => a.name.localeCompare(b.name, "es"))
    : [];

  return {
    user: publicSession(session),
    permissions: rolePermissions(db, session.role),
    ...(session.role === "admin" ? { rolePermissions: permissionMatrix(db) } : {}),
    summary: {
      totalItems: items.filter((item) => !isRetired(item)).length,
      activeLoans: loans.length,
      // Los materiales dados de baja definitivamente no generan alerta de stock.
      lowStock: items.filter((item) => !isRetired(item) && item.stock <= Number(item.stockMinimum || 0)).length,
      overdueLoans: loans.filter((loan) => loan.overdue).length,
      pendingPurchaseRequests: db.purchaseRequests.filter((request) => !["completed", "cancelled", "rejected"].includes(request.status)).length,
      // Pedidos cuya próxima firma le corresponde al usuario.
      myPendingApprovals: db.purchaseRequests.filter((request) => {
        const { state, current } = approvalState(request);
        return state === "pending" && current && hasPermission(db, session.role, current.permission);
      }).length,
    },
    items,
    categories: db.categories.slice().sort((a, b) => a.name.localeCompare(b.name, "es")),
    locations: db.locations.slice().sort((a, b) => a.name.localeCompare(b.name, "es")),
    orientations: db.orientations.slice().sort((a, b) => a.name.localeCompare(b.name, "es")),
    costCenters: db.costCenters.slice().sort((a, b) => a.name.localeCompare(b.name, "es")),
    suppliers: (db.suppliers || []).slice().sort((a, b) => a.name.localeCompare(b.name, "es")),
    responsibles: visibleResponsibles.sort((a, b) => a.fullName.localeCompare(b.fullName, "es")),
    users,
    consumptions: consumptions.slice(0, 200),
    stockEntries: db.stockEntries.slice(0, 100),
    writeOffs: (db.writeOffs || []).slice(0, 300),
    purchaseRequests: db.purchaseRequests.slice(0, 100),
    purchaseInvoices: (db.purchaseInvoices || []).slice(0, 100),
    loans,
    loanStats: buildLoanStats(db.activity),
    activity: canSeePersonalData ? db.activity.slice(0, 200) : db.activity.filter((entry) => !String(entry.type || "").startsWith("login_")).slice(0, 200),
  };
}

module.exports = { buildDashboard };

}],
  "src/services/responsibles.js": [{"../http/responses":"src/http/responses.js","./validation":"src/services/validation.js"}, function (require, module, exports, __dirname, __filename) {
const { validationError } = require("../http/responses");
const { requiredText, ensureOrientationExists } = require("./validation");

function buildResponsiblePayload(db, body) {
  const type = requiredResponsibleType(body.type);
  const orientation = type === "alumno" ? requiredText(body.orientation, "La orientación es obligatoria.") : "";
  if (type === "alumno") {
    ensureOrientationExists(db, orientation);
  }

  return {
    type,
    fullName: requiredText(body.fullName, "El nombre y apellido es obligatorio."),
    dni: requiredText(body.dni, "El DNI es obligatorio."),
    admissionDate: type === "alumno" ? requiredText(body.admissionDate, "La fecha de ingreso es obligatoria.") : "",
    course: type === "alumno" ? requiredText(body.course, "El curso actual es obligatorio.") : "",
    division: type === "alumno" ? requiredText(body.division, "La división actual es obligatoria.") : "",
    orientation,
    specialty: type === "profesor" ? requiredText(body.specialty, "La especialidad es obligatoria.") : "",
    position: type === "administrativo" ? requiredText(body.position, "El cargo es obligatorio.") : "",
    address: requiredText(body.address, "El domicilio es obligatorio."),
    email: requiredText(body.email, "El email es obligatorio."),
    phone: requiredText(body.phone, "El celular es obligatorio."),
  };
}

function requiredResponsibleType(value) {
  const type = requiredText(value, "El tipo de responsable es obligatorio.").toLowerCase();
  if (!["alumno", "profesor", "administrativo"].includes(type)) {
    const error = new Error("El tipo de responsable debe ser alumno, profesor o administrativo.");
    error.name = "ValidationError";
    throw error;
  }
  return type;
}

function ensureResponsibleDniAvailable(db, dni, excludedId = null) {
  const normalized = requiredText(dni, "El DNI es obligatorio.");
  const exists = db.responsibles.some((responsible) => responsible.id !== excludedId && responsible.dni === normalized);
  if (exists) {
    const error = new Error("Ya existe un responsable con ese DNI.");
    error.name = "ValidationError";
    throw error;
  }
}

function findResponsibleById(db, responsibleId) {
  const normalized = requiredText(responsibleId, "El responsable es obligatorio.");
  return db.responsibles.find((responsible) => responsible.id === normalized) || null;
}

function sanitizeResponsible(responsible, includePersonalData) {
  if (includePersonalData) {
    return { ...responsible };
  }

  // Sin DNI, domicilio, email, teléfono ni fecha de ingreso para roles que no los necesitan.
  return {
    id: responsible.id,
    type: responsible.type,
    fullName: responsible.fullName,
    course: responsible.course,
    division: responsible.division,
    orientation: responsible.orientation,
    specialty: responsible.specialty,
    position: responsible.position,
  };
}

module.exports = {
  buildResponsiblePayload,
  requiredResponsibleType,
  ensureResponsibleDniAvailable,
  findResponsibleById,
  sanitizeResponsible,
};

}],
  "src/services/validation.js": [{"../http/responses":"src/http/responses.js"}, function (require, module, exports, __dirname, __filename) {
const { validationError } = require("../http/responses");

function requiredText(value, message) {
  const text = String(value || "").trim();
  if (!text) {
    const error = new Error(message);
    error.name = "ValidationError";
    throw error;
  }
  return text;
}

function optionalText(value) {
  return String(value || "").trim();
}

function ensureLocationExists(db, locationName) {
  const normalized = requiredText(locationName, "La ubicación es obligatoria.");
  if (!db.locations.some((location) => location.name === normalized)) {
    const error = new Error("La ubicación seleccionada no existe en datos maestros.");
    error.name = "ValidationError";
    throw error;
  }
}

function ensureCategoryExists(db, categoryName) {
  const normalized = requiredText(categoryName, "La categoría es obligatoria.");
  if (!db.categories.some((category) => category.name === normalized)) {
    const error = new Error("La categoría seleccionada no existe en datos maestros.");
    error.name = "ValidationError";
    throw error;
  }
}

function ensureOrientationExists(db, orientationName) {
  const normalized = requiredText(orientationName, "La orientación es obligatoria.");
  if (!db.orientations.some((orientation) => orientation.name === normalized)) {
    const error = new Error("La orientación seleccionada no existe en datos maestros.");
    error.name = "ValidationError";
    throw error;
  }
}

function startOfToday() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
}

module.exports = {
  requiredText,
  optionalText,
  ensureLocationExists,
  ensureCategoryExists,
  ensureOrientationExists,
  startOfToday,
};

}],
  "src/services/loanStats.js": [{}, function (require, module, exports, __dirname, __filename) {
// Estadística mensual de préstamos y devoluciones a partir del registro de actividad.
// El registro guarda cada préstamo y cada devolución con su fecha desde el inicio del sistema,
// y los préstamos cerrados se eliminan de la lista de activos: por eso es la fuente del historial.
const LOAN_CREATED = "loan_created";
const LOAN_CLOSED = "loan_returned"; // devolución total: el préstamo queda cerrado
const LOAN_PARTIAL = "loan_partial_returned"; // devolución parcial: el préstamo sigue abierto

function monthKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

// Devuelve los últimos `months` meses (incluido el actual) con:
// loans: préstamos registrados · returns: devoluciones registradas (totales + parciales)
// closed: préstamos cerrados · openAtEnd: préstamos abiertos al cierre del mes.
function buildLoanStats(activity, { months = 12, now = new Date() } = {}) {
  const window = [];
  for (let offset = months - 1; offset >= 0; offset -= 1) {
    window.push(monthKey(new Date(now.getFullYear(), now.getMonth() - offset, 1)));
  }
  const byMonth = new Map(window.map((key) => [key, { month: key, loans: 0, returns: 0, closed: 0, openAtEnd: 0 }]));

  // Saldo de préstamos abiertos antes de la ventana y movimientos por mes.
  let openBefore = 0;
  const firstKey = window[0];
  for (const entry of Array.isArray(activity) ? activity : []) {
    const type = entry?.type;
    if (type !== LOAN_CREATED && type !== LOAN_CLOSED && type !== LOAN_PARTIAL) {
      continue;
    }
    const date = new Date(entry.createdAt);
    if (Number.isNaN(date.getTime())) {
      continue;
    }
    const key = monthKey(date);
    const delta = type === LOAN_CREATED ? 1 : type === LOAN_CLOSED ? -1 : 0;
    if (key < firstKey) {
      openBefore += delta;
      continue;
    }
    const bucket = byMonth.get(key);
    if (!bucket) {
      continue; // fechas futuras
    }
    if (type === LOAN_CREATED) bucket.loans += 1;
    if (type === LOAN_CLOSED) {
      bucket.returns += 1;
      bucket.closed += 1;
    }
    if (type === LOAN_PARTIAL) bucket.returns += 1;
  }

  let open = Math.max(openBefore, 0);
  return window.map((key) => {
    const bucket = byMonth.get(key);
    open = Math.max(open + bucket.loans - bucket.closed, 0);
    bucket.openAtEnd = open;
    return bucket;
  });
}

module.exports = { buildLoanStats };

}],
  "src/services/purchases.js": [{"../http/responses":"src/http/responses.js","./costs":"src/services/costs.js"}, function (require, module, exports, __dirname, __filename) {
const { validationError } = require("../http/responses");
const { computeAverageUnitCost } = require("./costs");

// Reglas de compras: confirmación de pedidos (total o parcial) e ingreso de lo confirmado.

const round = (value, decimals = 2) => {
  const factor = 10 ** decimals;
  return Math.round((Number(value) + Number.EPSILON) * factor) / factor;
};

// Renglón de una confirmación: cantidad × costo unitario − bonificación (porcentaje o importe).
function computeLine({ quantity, unitCost, discountType = "percent", discountValue = 0 }, itemName = "el material") {
  const qty = Number(quantity);
  const cost = Number(unitCost);
  const discount = Number(discountValue || 0);
  if (!Number.isFinite(qty) || qty <= 0) throw validationError(`La cantidad de ${itemName} debe ser mayor a cero.`);
  if (!Number.isFinite(cost) || cost < 0) throw validationError(`El costo unitario de ${itemName} no es válido.`);
  if (!["percent", "amount"].includes(discountType)) throw validationError(`El tipo de bonificación de ${itemName} no es válido.`);
  if (!Number.isFinite(discount) || discount < 0) throw validationError(`La bonificación de ${itemName} no es válida.`);

  const gross = round(qty * cost);
  if (discountType === "percent" && discount > 100) throw validationError(`La bonificación de ${itemName} no puede superar el 100%.`);
  const discountAmount = discountType === "percent" ? round((gross * discount) / 100) : round(discount);
  if (discountAmount > gross) throw validationError(`La bonificación de ${itemName} no puede superar el importe del renglón.`);

  const subtotal = round(gross - discountAmount);
  return { quantity: qty, unitCost: round(cost, 4), discountType, discountValue: round(discount, 4), gross, discountAmount, subtotal, netUnitCost: round(subtotal / qty, 4) };
}

// Cantidad confirmada por material en todas las confirmaciones del pedido.
function confirmedByItem(request) {
  const totals = new Map();
  (request.confirmations || []).forEach((confirmation) => {
    confirmation.lines.forEach((line) => totals.set(line.itemId, (totals.get(line.itemId) || 0) + Number(line.quantity)));
  });
  return totals;
}

// Cantidad que falta confirmar de cada material del pedido.
function remainingByItem(request) {
  const confirmed = confirmedByItem(request);
  return new Map(request.items.map((item) => [item.itemId, Math.max(0, Number(item.quantity) - (confirmed.get(item.itemId) || 0))]));
}

function confirmationStatus(confirmation) {
  const pending = confirmation.lines.some((line) => Number(line.receivedQuantity || 0) < Number(line.quantity));
  const anyReceived = confirmation.lines.some((line) => Number(line.receivedQuantity || 0) > 0);
  if (!pending) return "received";
  return anyReceived ? "partially_received" : "confirmed";
}

// ---------------------------------------------------------------------------
// Aprobación del pedido: tres firmas en orden (Jefe de taller → Rector → Contable).
// Recién con las tres firmas el pedido se puede confirmar con el proveedor.
// Cualquiera de los firmantes puede rechazarlo (con motivo) y el pedido queda cerrado.
// Una misma persona no puede firmar dos veces el mismo pedido.
// Los pedidos generados antes de este circuito no tienen "approval" y se consideran aprobados.
// ---------------------------------------------------------------------------
const APPROVAL_STEPS = [
  { key: "workshop", label: "Jefe de taller", permission: "purchases.approve.workshop" },
  { key: "rector", label: "Rector", permission: "purchases.approve.rector" },
  { key: "accounting", label: "Contable", permission: "purchases.approve.accounting" },
];

function newApproval() {
  return { steps: APPROVAL_STEPS.map(({ key, label }) => ({ key, label, status: "pending", by: "", byUsername: "", at: "", comment: "" })) };
}

// Firmas del pedido completas y en el orden del circuito (tolera datos viejos o incompletos).
function approvalSteps(request) {
  if (!request.approval) return null;
  const stored = Array.isArray(request.approval.steps) ? request.approval.steps : [];
  return APPROVAL_STEPS.map(({ key, label, permission }) => {
    const found = stored.find((step) => step.key === key) || {};
    return { key, label, permission, status: found.status || "pending", by: found.by || "", byUsername: found.byUsername || "", at: found.at || "", comment: found.comment || "" };
  });
}

// approved: tiene las tres firmas (o es anterior al circuito) · rejected · pending (con la firma que falta).
function approvalState(request) {
  const steps = approvalSteps(request);
  if (!steps) return { state: "approved", steps: [], current: null };
  const rejected = steps.find((step) => step.status === "rejected");
  if (rejected) return { state: "rejected", steps, current: null, rejected };
  const current = steps.find((step) => step.status !== "approved") || null;
  return { state: current ? "pending" : "approved", steps, current };
}

// Registra la firma (o el rechazo) del paso que corresponde. "can" dice si el usuario tiene un permiso.
function applyApprovalDecision(request, { decision, comment, user, can }) {
  if (!["approve", "reject"].includes(decision)) throw validationError("La decisión no es válida.");
  const status = requestStatus(request);
  if (status === "cancelled") throw validationError("El pedido está cancelado.");
  const { state, steps, current } = approvalState(request);
  if (state === "rejected") throw validationError("El pedido ya fue rechazado.");
  if (state === "approved" || !current) throw validationError("El pedido ya tiene todas las aprobaciones.");
  if (!can(current.permission)) {
    throw validationError(`El pedido está esperando la firma de ${current.label}. Tu usuario no puede firmar ese paso.`);
  }
  const username = String(user.username || "").toLowerCase();
  const alreadySigned = steps.find((step) => step.status === "approved" && step.byUsername && step.byUsername.toLowerCase() === username);
  if (alreadySigned) {
    throw validationError(`Ya firmaste este pedido como ${alreadySigned.label}. Cada firma la tiene que dar una persona distinta.`);
  }
  const text = String(comment || "").trim().slice(0, 500);
  if (decision === "reject" && !text) throw validationError("Indicá el motivo del rechazo.");

  request.approval = {
    steps: steps.map(({ key, label, status: stepStatus, by, byUsername, at, comment: stepComment }) =>
      key === current.key
        ? { key, label, status: decision === "approve" ? "approved" : "rejected", by: user.name, byUsername: user.username, at: new Date().toISOString(), comment: text }
        : { key, label, status: stepStatus, by, byUsername, at, comment: stepComment }
    ),
  };
  request.status = requestStatus(request);
  return { step: current, status: request.status };
}

// Estado del pedido según las firmas, lo confirmado y lo ingresado.
// pending_approval: faltan firmas · rejected: rechazado por un firmante ·
// pending: aprobado, sin confirmar · partially_confirmed: falta confirmar una parte · confirmed: todo confirmado, falta ingresar · completed: todo ingresado.
function requestStatus(request) {
  if (request.status === "cancelled") return "cancelled";
  const approval = approvalState(request).state;
  if (approval === "rejected") return "rejected";
  if (approval === "pending") return "pending_approval";
  const confirmations = request.confirmations || [];
  if (!confirmations.length) {
    return request.status === "completed" ? "completed" : "pending"; // pedidos anteriores a las confirmaciones
  }
  const remaining = [...remainingByItem(request).values()].some((quantity) => quantity > 0);
  if (remaining) return "partially_confirmed";
  const allReceived = confirmations.every((confirmation) => confirmationStatus(confirmation) === "received");
  return allReceived ? "completed" : "confirmed";
}

// Resumen de lo recibido por material (lo usan el PDF del pedido y la base MySQL).
function fulfillmentSummary(request) {
  const byItem = new Map();
  (request.confirmations || []).forEach((confirmation) => {
    confirmation.lines.forEach((line) => {
      const received = Number(line.receivedQuantity || 0);
      if (!received) return;
      const current = byItem.get(line.itemId) || { itemId: line.itemId, quantity: 0, totalCost: 0 };
      current.quantity += received;
      current.totalCost = round(current.totalCost + received * Number(line.netUnitCost));
      byItem.set(line.itemId, current);
    });
  });
  return [...byItem.values()].map((entry) => ({ ...entry, unitCost: round(entry.totalCost / entry.quantity, 4) }));
}

// El total de factura se carga a mano: se avisa si no coincide con subtotal ± retenciones.
// El total se acepta sin aviso si es el subtotal (lo que se calcula por defecto), o el subtotal ± retenciones.
function invoiceTotalWarning(subtotal, withholdings, invoiceTotal) {
  const minus = round(subtotal - withholdings);
  const plus = round(subtotal + withholdings);
  const matches = [round(subtotal), minus, plus].some((expected) => Math.abs(invoiceTotal - expected) < 0.01);
  return matches ? "" : `El total de factura (${invoiceTotal.toFixed(2)}) no coincide con el subtotal menos retenciones (${minus.toFixed(2)}) ni con el subtotal más retenciones (${plus.toFixed(2)}).`;
}

// Aplica una compra recibida al material: suma stock, recalcula el costo promedio ponderado
// (para valorizar el inventario) y registra el último costo de compra con fecha, proveedor y factura.
function applyPurchaseToItem(item, { quantity, netUnitCost, supplierName, invoice, userName, date = new Date().toISOString() }) {
  const previousStock = Number(item.stock);
  item.stock = previousStock + Number(quantity);
  item.amount = round(computeAverageUnitCost(item.amount, previousStock, netUnitCost, quantity), 4);
  item.lastPurchaseCost = round(netUnitCost, 4);
  item.lastPurchaseAt = date;
  item.lastPurchaseSupplier = supplierName || "";
  item.lastPurchaseInvoice = invoice || "";
  item.updatedAt = date;
  item.updatedBy = userName;
  return item;
}

const normalizeInvoice = (value) => String(value || "").replace(/\s+/g, "").toUpperCase();

// Evita cargar dos veces la misma factura del mismo proveedor (directa o desde un pedido confirmado).
function ensureInvoiceNotLoaded(db, supplierId, invoice) {
  const target = normalizeInvoice(invoice);
  const inInvoices = db.purchaseInvoices.some((entry) => entry.supplierId === supplierId && normalizeInvoice(entry.invoice) === target);
  const inConfirmations = db.purchaseRequests.some((request) =>
    (request.confirmations || []).some((entry) => entry.supplierId === supplierId && normalizeInvoice(entry.invoice) === target)
  );
  if (inInvoices || inConfirmations) {
    throw validationError(`La factura ${invoice} de ese proveedor ya fue cargada.`);
  }
}

module.exports = {
  APPROVAL_STEPS,
  newApproval,
  approvalSteps,
  approvalState,
  applyApprovalDecision,
  applyPurchaseToItem,
  ensureInvoiceNotLoaded,
  round,
  computeLine,
  confirmedByItem,
  remainingByItem,
  confirmationStatus,
  requestStatus,
  fulfillmentSummary,
  invoiceTotalWarning,
};

}],
  "src/services/costs.js": [{}, function (require, module, exports, __dirname, __filename) {
function computeAverageUnitCost(currentUnitCost, currentStock, incomingUnitCost, incomingQuantity) {
  const baseUnitCost = Number(currentUnitCost);
  const baseStock = Number(currentStock);
  const nextUnitCost = Number(incomingUnitCost);
  const nextQuantity = Number(incomingQuantity);

  if (!Number.isFinite(nextUnitCost) || nextUnitCost < 0 || !Number.isFinite(nextQuantity) || nextQuantity <= 0) {
    return Number.isFinite(baseUnitCost) ? baseUnitCost : 0;
  }

  if (!Number.isFinite(baseUnitCost) || baseUnitCost <= 0 || !Number.isFinite(baseStock) || baseStock <= 0) {
    return nextUnitCost;
  }

  return ((baseUnitCost * baseStock) + (nextUnitCost * nextQuantity)) / (baseStock + nextQuantity);
}

module.exports = { computeAverageUnitCost };

}],
  "src/services/items.js": [{"../http/responses":"src/http/responses.js"}, function (require, module, exports, __dirname, __filename) {
const { validationError } = require("../http/responses");

// El código interno + subcódigo identifica a cada material (la base MySQL también lo exige).
function ensureItemCodeAvailable(db, code, subcode, excludedId = null) {
  const normalize = (value) => String(value || "").trim().toLowerCase();
  const exists = db.items.some(
    (item) => item.id !== excludedId && normalize(item.code) === normalize(code) && normalize(item.subcode) === normalize(subcode)
  );
  if (exists) {
    throw validationError("Ya existe un material con ese código y subcódigo.");
  }
}

// Unidades de medida disponibles (deben coincidir con public/js/utils/units.js).
// "decimals": admite cantidades con decimales (metros, kilos, litros).
const UNITS = [
  { value: "unidad", label: "Unidad", decimals: false },
  { value: "par", label: "Par", decimals: false },
  { value: "juego", label: "Juego", decimals: false },
  { value: "caja", label: "Caja", decimals: false },
  { value: "paquete", label: "Paquete", decimals: false },
  { value: "bolsa", label: "Bolsa", decimals: false },
  { value: "rollo", label: "Rollo", decimals: false },
  { value: "metro", label: "Metro", decimals: true },
  { value: "kilogramo", label: "Kilogramo", decimals: true },
  { value: "gramo", label: "Gramo", decimals: true },
  { value: "litro", label: "Litro", decimals: true },
  { value: "mililitro", label: "Mililitro", decimals: true },
];
const DEFAULT_UNIT = "unidad";

// Unidad indicada en un alta o edición. Vacía = "unidad" (también para los materiales cargados antes).
function normalizeUnit(value) {
  const unit = String(value || "").trim().toLowerCase();
  if (!unit) return DEFAULT_UNIT;
  if (!UNITS.some((entry) => entry.value === unit)) throw validationError("La unidad de medida no es válida.");
  return unit;
}

const unitLabel = (unit) => (UNITS.find((entry) => entry.value === (unit || DEFAULT_UNIT)) || UNITS[0]).label.toLowerCase();

// Motivos de baja de materiales (deben coincidir con public/js/utils/units.js).
const WRITE_OFF_REASONS = [
  "Rotura o daño irreparable",
  "Desgaste / fin de vida útil",
  "Pérdida o extravío",
  "Robo o hurto",
  "Vencimiento",
  "Obsolescencia / desuso",
  "Donación o transferencia a otra institución",
  "Otro",
];

// Material dado de baja definitivamente: no se presta, no se consume y no genera alertas de stock.
const isRetired = (item) => Boolean(item && item.retiredAt);

function ensureItemActive(item) {
  if (isRetired(item)) throw validationError(`${item.name} está dado de baja.`);
}

// Cantidad válida para el material: mayor a cero y entera si la unidad no admite decimales.
function validQuantity(item, value, label = "La cantidad") {
  const quantity = Number(value);
  if (!Number.isFinite(quantity) || quantity <= 0) throw validationError(`${label} de ${item.name} debe ser mayor a cero.`);
  const unit = UNITS.find((entry) => entry.value === (item.unit || DEFAULT_UNIT)) || UNITS[0];
  if (!unit.decimals && !Number.isInteger(quantity)) throw validationError(`${label} de ${item.name} debe ser un número entero (se mide por ${unit.label.toLowerCase()}).`);
  return Math.round(quantity * 1000) / 1000;
}

module.exports = { ensureItemCodeAvailable, UNITS, DEFAULT_UNIT, normalizeUnit, unitLabel, WRITE_OFF_REASONS, isRetired, ensureItemActive, validQuantity };

}],
  "src/routes/users.js": [{"../config":"src/config.js","../http/responses":"src/http/responses.js","../http/body":"src/http/body.js","../data/store":"src/data/store.js","../auth/sessions":"src/auth/sessions.js","../auth/passwords":"src/auth/passwords.js","../services/users":"src/services/users.js","../services/validation":"src/services/validation.js"}, function (require, module, exports, __dirname, __filename) {
const { VALID_USER_ROLES } = require("../config");
const { sendJson } = require("../http/responses");
const { readJsonBody } = require("../http/body");
const { addActivity, logActivity, readDb, readUsers, writeDb, writeUsers } = require("../data/store");
const { getTokenFromRequest, hashToken, persistSessions, sessions } = require("../auth/sessions");
const { hashPassword, validatePasswordStrength } = require("../auth/passwords");
const { createUser, normalizeRole, sanitizeUser } = require("../services/users");
const { optionalText, requiredText } = require("../services/validation");

// Gestión de usuarios (solo administradores).
function register(router) {
  router.add("POST", "/api/users", ["admin"], async ({ req, res, session }) => {
    const body = await readJsonBody(req);
    const users = await readUsers();
    const name = requiredText(body.name, "El nombre del usuario es obligatorio.");
    const username = requiredText(body.username, "El nombre de usuario es obligatorio.").toLowerCase();
    const password = requiredText(body.password, "La contraseña es obligatoria.");
    const role = normalizeRole(requiredText(body.role, "El rol es obligatorio."));

    if (!VALID_USER_ROLES.includes(role)) {
      sendJson(res, 400, { error: "El rol seleccionado no es válido." });
      return;
    }

    if (users.some((entry) => entry.username.toLowerCase() === username)) {
      sendJson(res, 400, { error: "Ya existe un usuario con ese nombre de acceso." });
      return;
    }

    validatePasswordStrength(password, username);
    const user = createUser(username, password, name, role);
    // La contraseña la eligió el administrador: el usuario la tiene que cambiar en su primer ingreso.
    user.mustChangePassword = true;
    users.unshift(user);
    await writeUsers(users);

    const db = await readDb();
    addActivity(db, "user_created", `${session.name} creó el usuario ${user.username} con rol ${role}.`);
    await writeDb(db);
    sendJson(res, 201, { user: sanitizeUser(user) });
  });

  router.add("PUT", "/api/users/:id", ["admin"], async ({ req, res, params, session }) => {
    const userId = params.id;
    const body = await readJsonBody(req);
    const users = await readUsers();
    const userIndex = users.findIndex((entry) => entry.id === userId);

    if (userIndex === -1) {
      sendJson(res, 404, { error: "El usuario no fue encontrado." });
      return;
    }

    const name = requiredText(body.name, "El nombre del usuario es obligatorio.");
    const username = requiredText(body.username, "El nombre de usuario es obligatorio.").toLowerCase();
    const role = normalizeRole(requiredText(body.role, "El rol es obligatorio."));
    const password = optionalText(body.password);

    if (!VALID_USER_ROLES.includes(role)) {
      sendJson(res, 400, { error: "El rol seleccionado no es válido." });
      return;
    }

    if (users.some((entry, index) => index !== userIndex && entry.username.toLowerCase() === username)) {
      sendJson(res, 400, { error: "Ya existe un usuario con ese nombre de acceso." });
      return;
    }

    const previous = { ...users[userIndex], role: normalizeRole(users[userIndex].role) };
    const isSelf = previous.id === session.id;

    if (previous.role === "admin" && role !== "admin") {
      if (isSelf) {
        sendJson(res, 400, { error: "No podés quitarte a vos mismo el rol de administrador." });
        return;
      }
      const remainingAdmins = users.filter((entry, index) => index !== userIndex && normalizeRole(entry.role) === "admin");
      if (!remainingAdmins.length) {
        sendJson(res, 400, { error: "Tiene que quedar al menos un usuario administrador." });
        return;
      }
    }

    if (password) {
      validatePasswordStrength(password, username);
    }

    users[userIndex].name = name;
    users[userIndex].username = username;
    users[userIndex].role = role;
    if (password) {
      users[userIndex].password = hashPassword(password);
      users[userIndex].passwordChangedAt = new Date().toISOString();
      // Si el administrador restablece la contraseña de otro usuario, ese usuario la tiene que cambiar al ingresar.
      users[userIndex].mustChangePassword = !isSelf;
    }
    await writeUsers(users);

    const currentHash = hashToken(getTokenFromRequest(req));
    for (const [tokenHash, activeSession] of sessions.entries()) {
      if (activeSession.id !== users[userIndex].id) {
        continue;
      }
      if (password && tokenHash !== currentHash) {
        // Una contraseña nueva cierra las otras sesiones abiertas de ese usuario.
        sessions.delete(tokenHash);
        continue;
      }
      Object.assign(activeSession, {
        role: users[userIndex].role,
        name: users[userIndex].name,
        username: users[userIndex].username,
      });
    }
    persistSessions();

    const changes = [];
    if (previous.name !== name) changes.push(`nombre "${previous.name}" → "${name}"`);
    if (previous.username !== username) changes.push(`usuario "${previous.username}" → "${username}"`);
    if (previous.role !== role) changes.push(`rol ${previous.role} → ${role}`);
    if (password) changes.push("restableció la contraseña");
    await logActivity(
      previous.role !== role ? "user_role_changed" : "user_updated",
      `${session.name} actualizó el usuario ${users[userIndex].username}${changes.length ? ` (${changes.join("; ")})` : ""}.`
    );
    sendJson(res, 200, { user: sanitizeUser(users[userIndex]) });
  });

  router.add("DELETE", "/api/users/:id", ["admin"], async ({ res, params, session }) => {
    const userId = params.id;
    const users = await readUsers();
    const userIndex = users.findIndex((entry) => entry.id === userId);

    if (userIndex === -1) {
      sendJson(res, 404, { error: "El usuario no fue encontrado." });
      return;
    }

    if (users[userIndex].id === session.id) {
      sendJson(res, 400, { error: "No podés eliminar el usuario con el que estás logueado." });
      return;
    }

    const [removedUser] = users.splice(userIndex, 1);
    await writeUsers(users);

    for (const [token, activeSession] of sessions.entries()) {
      if (activeSession.id === removedUser.id) {
        sessions.delete(token);
      }
    }
    persistSessions();

    const db = await readDb();
    addActivity(db, "user_deleted", `${session.name} eliminó el usuario ${removedUser.username}.`);
    await writeDb(db);
    sendJson(res, 200, { ok: true });
  });
}

module.exports = { register };

}],
  "src/routes/masterData.js": [{"crypto":"shim:crypto","../http/responses":"src/http/responses.js","../http/body":"src/http/body.js","../data/store":"src/data/store.js","../services/validation":"src/services/validation.js"}, function (require, module, exports, __dirname, __filename) {
const crypto = require("crypto");
const { sendJson } = require("../http/responses");
const { readJsonBody } = require("../http/body");
const { readDb, writeDb, addActivity } = require("../data/store");
const { requiredText, optionalText } = require("../services/validation");

// Datos maestros: ubicaciones, categorías, centros de costos y orientaciones.
// Los cuatro funcionan igual; cambian los textos y qué registros guardan su nombre
// (al renombrar se actualizan, y no se puede eliminar uno que esté en uso).
const MASTER_DATA = [
  {
    route: "/api/locations",
    collection: "locations",
    responseKey: "location",
    eventPrefix: "location",
    noun: "la ubicación",
    nameOf: "de la ubicación",
    notFound: "La ubicación no fue encontrada.",
    duplicate: "Ya existe una ubicación con ese nombre.",
    inUse: "No podés eliminar una ubicación que está asignada a materiales.",
    references: [{ collection: "items", field: "location" }],
  },
  {
    route: "/api/categories",
    collection: "categories",
    responseKey: "category",
    eventPrefix: "category",
    noun: "la categoría",
    nameOf: "de la categoría",
    notFound: "La categoría no fue encontrada.",
    duplicate: "Ya existe una categoría con ese nombre.",
    inUse: "No podés eliminar una categoría que está asignada a materiales.",
    references: [{ collection: "items", field: "category" }],
  },
  {
    route: "/api/cost-centers",
    collection: "costCenters",
    responseKey: "costCenter",
    eventPrefix: "cost_center",
    noun: "el centro de costos",
    nameOf: "del centro de costos",
    notFound: "El centro de costos no fue encontrado.",
    duplicate: "Ya existe un centro de costos con ese nombre.",
    inUse: "No podés eliminar un centro de costos que ya está asignado a pedidos o consumos.",
    references: [
      { collection: "purchaseRequests", field: "costCenter" },
      { collection: "consumptions", field: "costCenter" },
    ],
  },
  {
    route: "/api/orientations",
    collection: "orientations",
    responseKey: "orientation",
    eventPrefix: "orientation",
    noun: "la orientación",
    nameOf: "de la orientación",
    notFound: "La orientación no fue encontrada.",
    duplicate: "Ya existe una orientación con ese nombre.",
    inUse: "No podés eliminar una orientación que está asignada a alumnos.",
    references: [{ collection: "responsibles", field: "orientation", when: (entry) => entry.type === "alumno" }],
  },
];

// Registros que usan el nombre indicado.
function referencesTo(db, config, name) {
  return config.references.flatMap(({ collection, field, when }) =>
    db[collection].filter((entry) => entry[field] === name && (!when || when(entry))).map((entry) => ({ entry, field }))
  );
}

function sameName(a, b) {
  return a.toLowerCase() === b.toLowerCase();
}

function registerMasterData(router, config) {
  const requiredNameMessage = `El nombre ${config.nameOf} es obligatorio.`;

  router.add("POST", config.route, { permission: "masterData.manage" }, async ({ req, res, session }) => {
    const body = await readJsonBody(req);
    const db = await readDb();
    const name = requiredText(body.name, requiredNameMessage);

    if (db[config.collection].some((entry) => sameName(entry.name, name))) {
      sendJson(res, 400, { error: config.duplicate });
      return;
    }

    const record = {
      id: crypto.randomUUID(),
      name,
      description: optionalText(body.description),
      createdAt: new Date().toISOString(),
      createdBy: session.name,
    };

    db[config.collection].unshift(record);
    addActivity(db, `${config.eventPrefix}_created`, `${session.name} creó ${config.noun} ${record.name}.`);
    await writeDb(db);
    sendJson(res, 201, { [config.responseKey]: record });
  });

  router.add("PUT", `${config.route}/:id`, { permission: "masterData.manage" }, async ({ req, res, params, session }) => {
    const body = await readJsonBody(req);
    const db = await readDb();
    const record = db[config.collection].find((entry) => entry.id === params.id);

    if (!record) {
      sendJson(res, 404, { error: config.notFound });
      return;
    }

    const nextName = requiredText(body.name, requiredNameMessage);
    if (db[config.collection].some((entry) => entry.id !== params.id && sameName(entry.name, nextName))) {
      sendJson(res, 400, { error: config.duplicate });
      return;
    }

    const previousName = record.name;
    record.name = nextName;
    record.description = optionalText(body.description);
    record.updatedAt = new Date().toISOString();
    record.updatedBy = session.name;

    // Los registros guardan el nombre: se actualizan para que sigan apuntando al mismo dato maestro.
    referencesTo(db, config, previousName).forEach(({ entry, field }) => {
      entry[field] = nextName;
    });

    addActivity(
      db,
      `${config.eventPrefix}_updated`,
      `${session.name} actualizó ${config.noun} ${previousName} a ${nextName}.`
    );
    await writeDb(db);
    sendJson(res, 200, { [config.responseKey]: record });
  });

  router.add("DELETE", `${config.route}/:id`, { permission: "masterData.manage" }, async ({ res, params, session }) => {
    const db = await readDb();
    const index = db[config.collection].findIndex((entry) => entry.id === params.id);

    if (index === -1) {
      sendJson(res, 404, { error: config.notFound });
      return;
    }

    const record = db[config.collection][index];
    if (referencesTo(db, config, record.name).length) {
      sendJson(res, 400, { error: config.inUse });
      return;
    }

    db[config.collection].splice(index, 1);
    addActivity(db, `${config.eventPrefix}_deleted`, `${session.name} eliminó ${config.noun} ${record.name}.`);
    await writeDb(db);
    sendJson(res, 200, { ok: true });
  });
}

function register(router) {
  MASTER_DATA.forEach((config) => registerMasterData(router, config));
}

module.exports = { register, MASTER_DATA };

}],
  "src/routes/suppliers.js": [{"crypto":"shim:crypto","../http/responses":"src/http/responses.js","../http/body":"src/http/body.js","../data/store":"src/data/store.js","../services/validation":"src/services/validation.js"}, function (require, module, exports, __dirname, __filename) {
const crypto = require("crypto");
const { sendJson, validationError } = require("../http/responses");
const { readJsonBody } = require("../http/body");
const { readDb, writeDb, addActivity } = require("../data/store");
const { requiredText, optionalText } = require("../services/validation");

// Proveedores (datos maestros): se eligen al confirmar un pedido de compra.

const TAX_CONDITIONS = ["Responsable Inscripto", "Monotributista", "Exento", "Consumidor Final"];

// CUIT argentino: 11 dígitos con dígito verificador (módulo 11). Se guarda como XX-XXXXXXXX-X.
function normalizeCuit(value) {
  const digits = String(value || "").replace(/\D/g, "");
  if (digits.length !== 11) {
    throw validationError("El CUIT debe tener 11 dígitos.");
  }
  const weights = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
  const sum = weights.reduce((total, weight, index) => total + weight * Number(digits[index]), 0);
  let check = 11 - (sum % 11);
  if (check === 11) check = 0;
  if (check === 10) check = 9;
  if (check !== Number(digits[10])) {
    throw validationError("El CUIT no es válido (revisá el dígito verificador).");
  }
  return `${digits.slice(0, 2)}-${digits.slice(2, 10)}-${digits[10]}`;
}

function buildSupplierFields(body) {
  const email = optionalText(body.email);
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw validationError("El email del proveedor no es válido.");
  }
  const taxCondition = optionalText(body.taxCondition) || TAX_CONDITIONS[0];
  if (!TAX_CONDITIONS.includes(taxCondition)) {
    throw validationError("La condición frente al IVA no es válida.");
  }
  return {
    name: requiredText(body.name, "La razón social del proveedor es obligatoria."),
    cuit: normalizeCuit(body.cuit),
    taxCondition,
    address: optionalText(body.address),
    phone: optionalText(body.phone),
    email,
    contact: optionalText(body.contact),
    notes: optionalText(body.notes),
  };
}

function ensureUnique(db, fields, excludedId = null) {
  const others = db.suppliers.filter((supplier) => supplier.id !== excludedId);
  if (others.some((supplier) => supplier.cuit === fields.cuit)) {
    throw validationError("Ya existe un proveedor con ese CUIT.");
  }
  if (others.some((supplier) => supplier.name.toLowerCase() === fields.name.toLowerCase())) {
    throw validationError("Ya existe un proveedor con esa razón social.");
  }
}

function isSupplierUsed(db, supplierId) {
  return db.purchaseRequests.some((request) => (request.confirmations || []).some((confirmation) => confirmation.supplierId === supplierId));
}

function register(router) {
  router.add("POST", "/api/suppliers", { permission: "masterData.manage" }, async ({ req, res, session }) => {
    const body = await readJsonBody(req);
    const db = await readDb();
    const fields = buildSupplierFields(body);
    ensureUnique(db, fields);

    const supplier = {
      id: crypto.randomUUID(),
      ...fields,
      createdAt: new Date().toISOString(),
      createdBy: session.name,
    };
    db.suppliers.unshift(supplier);
    addActivity(db, "supplier_created", `${session.name} cargó el proveedor ${supplier.name} (CUIT ${supplier.cuit}).`);
    await writeDb(db);
    sendJson(res, 201, { supplier });
  });

  router.add("PUT", "/api/suppliers/:id", { permission: "masterData.manage" }, async ({ req, res, params, session }) => {
    const body = await readJsonBody(req);
    const db = await readDb();
    const supplier = db.suppliers.find((entry) => entry.id === params.id);
    if (!supplier) {
      sendJson(res, 404, { error: "El proveedor no fue encontrado." });
      return;
    }

    const fields = buildSupplierFields(body);
    ensureUnique(db, fields, supplier.id);
    Object.assign(supplier, fields, { updatedAt: new Date().toISOString(), updatedBy: session.name });
    addActivity(db, "supplier_updated", `${session.name} actualizó el proveedor ${supplier.name}.`);
    await writeDb(db);
    sendJson(res, 200, { supplier });
  });

  router.add("DELETE", "/api/suppliers/:id", { permission: "masterData.manage" }, async ({ res, params, session }) => {
    const db = await readDb();
    const index = db.suppliers.findIndex((entry) => entry.id === params.id);
    if (index === -1) {
      sendJson(res, 404, { error: "El proveedor no fue encontrado." });
      return;
    }
    const supplier = db.suppliers[index];
    if (isSupplierUsed(db, supplier.id)) {
      sendJson(res, 400, { error: "No podés eliminar un proveedor que tiene confirmaciones de compra." });
      return;
    }
    db.suppliers.splice(index, 1);
    addActivity(db, "supplier_deleted", `${session.name} eliminó el proveedor ${supplier.name}.`);
    await writeDb(db);
    sendJson(res, 200, { ok: true });
  });
}

module.exports = { register, normalizeCuit, TAX_CONDITIONS };

}],
  "src/routes/responsibles.js": [{"crypto":"shim:crypto","../http/responses":"src/http/responses.js","../http/body":"src/http/body.js","../data/store":"src/data/store.js","../services/responsibles":"src/services/responsibles.js"}, function (require, module, exports, __dirname, __filename) {
const crypto = require("crypto");
const { sendJson } = require("../http/responses");
const { readJsonBody } = require("../http/body");
const { addActivity, readDb, writeDb } = require("../data/store");
const { buildResponsiblePayload, ensureResponsibleDniAvailable } = require("../services/responsibles");

// Alumnos, profesores y administrativos que retiran materiales.
function register(router) {
  router.add("POST", "/api/responsibles", { permission: "responsibles.manage" }, async ({ req, res, session }) => {
    const body = await readJsonBody(req);
    const db = await readDb();
    const responsible = {
      id: crypto.randomUUID(),
      ...buildResponsiblePayload(db, body),
      createdAt: new Date().toISOString(),
      createdBy: session.name,
    };

    ensureResponsibleDniAvailable(db, responsible.dni);

    db.responsibles.unshift(responsible);
    addActivity(db, "responsible_created", `${session.name} creó el responsable ${responsible.fullName} (${responsible.type}).`);
    await writeDb(db);
    sendJson(res, 201, { responsible });
  });

  router.add("PUT", "/api/responsibles/:id", { permission: "responsibles.manage" }, async ({ req, res, params, session }) => {
    const responsibleId = params.id;
    const body = await readJsonBody(req);
    const db = await readDb();
    const responsible = db.responsibles.find((entry) => entry.id === responsibleId);

    if (!responsible) {
      sendJson(res, 404, { error: "El responsable no fue encontrado." });
      return;
    }

    const nextResponsible = buildResponsiblePayload(db, body);
    ensureResponsibleDniAvailable(db, nextResponsible.dni, responsibleId);

    Object.assign(responsible, nextResponsible, {
      updatedAt: new Date().toISOString(),
      updatedBy: session.name,
    });

    addActivity(db, "responsible_updated", `${session.name} actualizó el responsable ${responsible.fullName}.`);
    await writeDb(db);
    sendJson(res, 200, { responsible });
  });

  router.add("DELETE", "/api/responsibles/:id", { permission: "responsibles.manage" }, async ({ res, params, session }) => {
    const responsibleId = params.id;
    const db = await readDb();
    const responsibleIndex = db.responsibles.findIndex((entry) => entry.id === responsibleId);

    if (responsibleIndex === -1) {
      sendJson(res, 404, { error: "El responsable no fue encontrado." });
      return;
    }

    const [responsible] = db.responsibles.splice(responsibleIndex, 1);
    addActivity(db, "responsible_deleted", `${session.name} eliminó el responsable ${responsible.fullName}.`);
    await writeDb(db);
    sendJson(res, 200, { ok: true });
  });
}

module.exports = { register };

}],
  "src/routes/items.js": [{"crypto":"shim:crypto","../http/responses":"src/http/responses.js","../http/body":"src/http/body.js","../data/store":"src/data/store.js","../services/validation":"src/services/validation.js","../services/items":"src/services/items.js"}, function (require, module, exports, __dirname, __filename) {
const crypto = require("crypto");
const { sendJson } = require("../http/responses");
const { readJsonBody } = require("../http/body");
const { addActivity, readDb, writeDb } = require("../data/store");
const { ensureCategoryExists, ensureLocationExists, optionalText, requiredText } = require("../services/validation");
const { ensureItemCodeAvailable, normalizeUnit, unitLabel, WRITE_OFF_REASONS, isRetired, validQuantity } = require("../services/items");
const { validationError } = require("../http/responses");

// Inventario de materiales.
function register(router) {
  router.add("POST", "/api/items", { permission: "items.manage" }, async ({ req, res, session }) => {
    const body = await readJsonBody(req);
    const db = await readDb();
    ensureCategoryExists(db, body.category);
    ensureLocationExists(db, body.location);
    const amount = Number(body.amount);
    const item = {
      id: crypto.randomUUID(),
      name: requiredText(body.name, "El nombre es obligatorio."),
      category: requiredText(body.category, "La categoría es obligatoria."),
      code: requiredText(body.code, "El código interno es obligatorio."),
      subcode: optionalText(body.subcode),
      location: requiredText(body.location, "La ubicación es obligatoria."),
      unit: normalizeUnit(body.unit),
      stock: Number(body.stock),
      stockMinimum: Number(body.stockMinimum),
      amount,
      notes: optionalText(body.notes),
      createdAt: new Date().toISOString(),
      createdBy: session.name,
    };

    if (!Number.isFinite(item.stock) || item.stock < 0 || !Number.isFinite(item.stockMinimum) || item.stockMinimum < 0 || !Number.isFinite(amount) || amount < 0) {
      sendJson(res, 400, { error: "El stock, el stock mínimo y el importe deben ser números válidos." });
      return;
    }

    ensureItemCodeAvailable(db, item.code, item.subcode);
    db.items.unshift(item);
    addActivity(db, "item_created", `${session.name} cargó ${item.name} (${item.code}${item.subcode ? `-${item.subcode}` : ""}) en ${item.location}.`);
    await writeDb(db);
    sendJson(res, 201, { item });
  });

  router.add("PUT", "/api/items/:id", { permission: "items.manage" }, async ({ req, res, params, session }) => {
    const itemId = params.id;
    const body = await readJsonBody(req);
    const db = await readDb();
    const item = db.items.find((entry) => entry.id === itemId);

    if (!item) {
      sendJson(res, 404, { error: "El material no fue encontrado." });
      return;
    }

    const stock = Number(body.stock);
    const stockMinimum = Number(body.stockMinimum);
    const amount = Number(body.amount);
    if (!Number.isFinite(stock) || stock < 0 || !Number.isFinite(stockMinimum) || stockMinimum < 0 || !Number.isFinite(amount) || amount < 0) {
      sendJson(res, 400, { error: "El stock, el stock mínimo y el importe deben ser números válidos." });
      return;
    }

    item.name = requiredText(body.name, "El nombre es obligatorio.");
    ensureCategoryExists(db, body.category);
    item.category = requiredText(body.category, "La categoría es obligatoria.");
    item.code = requiredText(body.code, "El código interno es obligatorio.");
    item.subcode = optionalText(body.subcode);
    ensureItemCodeAvailable(db, item.code, item.subcode, item.id);
    ensureLocationExists(db, body.location);
    item.location = requiredText(body.location, "La ubicación es obligatoria.");
    item.unit = normalizeUnit(body.unit);
    item.stock = stock;
    item.stockMinimum = stockMinimum;
    item.amount = amount;
    item.notes = optionalText(body.notes);
    item.updatedAt = new Date().toISOString();
    item.updatedBy = session.name;

    addActivity(db, "item_updated", `${session.name} actualizó ${item.name} (${item.code}${item.subcode ? `-${item.subcode}` : ""}).`);
    await writeDb(db);
    sendJson(res, 200, { item });
  });

  router.add("DELETE", "/api/items/:id", { permission: "items.manage" }, async ({ req, res, params, session }) => {
    const itemId = params.id;
    const body = await readJsonBody(req);
    const db = await readDb();
    const itemIndex = db.items.findIndex((entry) => entry.id === itemId);

    if (itemIndex === -1) {
      sendJson(res, 404, { error: "El material no fue encontrado." });
      return;
    }

    if (db.loans.some((loan) => loan.itemId === itemId)) {
      sendJson(res, 400, { error: "No podés eliminar un material con devoluciones pendientes." });
      return;
    }

    const hasActiveLoan = db.loans.some((loan) => loan.itemId === itemId);
    if (hasActiveLoan) {
      sendJson(res, 400, { error: "No podés eliminar un material con préstamos activos." });
      return;
    }

    const reason = requiredText(body.reason, "El motivo de la eliminación es obligatorio.");
    const [item] = db.items.splice(itemIndex, 1);
    // Las bajas registradas quedan en el historial con el nombre y el código del material.
    (db.writeOffs || []).forEach((writeOff) => {
      if (writeOff.itemId === item.id) writeOff.itemId = null;
    });
    addActivity(db, "item_deleted", `${session.name} eliminó ${item.name} (${item.code}${item.subcode ? `-${item.subcode}` : ""}). Motivo de la eliminación: ${reason}.`);
    await writeDb(db);
    sendJson(res, 200, { ok: true });
  });
}

// ---------------------------------------------------------------------------
// Bajas de materiales: descuentan stock y quedan registradas con motivo, observación, fecha y hora.
// "Baja definitiva": da de baja todo el stock y el material deja de usarse (no se presta ni genera alertas).
// ---------------------------------------------------------------------------
function todayLocal() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

function registerWriteOffs(router) {
  router.add("POST", "/api/items/:id/write-offs", { permission: "items.writeOff" }, async ({ req, res, params, session }) => {
    const body = await readJsonBody(req);
    const db = await readDb();
    const item = db.items.find((entry) => entry.id === params.id);
    if (!item) {
      sendJson(res, 404, { error: "El material no fue encontrado." });
      return;
    }
    if (isRetired(item)) throw validationError(`${item.name} ya está dado de baja.`);

    const reason = String(body.reason || "").trim();
    if (!WRITE_OFF_REASONS.includes(reason)) throw validationError("Seleccioná el motivo de la baja.");
    const observation = optionalText(body.observation).slice(0, 500);
    if (reason === "Otro" && !observation) throw validationError("Con el motivo \"Otro\", explicá la baja en la observación.");

    const date = String(body.date || "").trim();
    const time = String(body.time || "").trim();
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(new Date(`${date}T00:00:00`).getTime())) throw validationError("La fecha de la baja no es válida.");
    if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(time)) throw validationError("La hora de la baja no es válida.");
    if (date > todayLocal()) throw validationError("La fecha de la baja no puede ser posterior a hoy.");

    const retire = body.retire === true;
    const quantity = retire ? Number(item.stock) : validQuantity(item, body.quantity, "La cantidad a dar de baja");
    if (quantity > Number(item.stock)) {
      throw validationError(`No podés dar de baja más de lo que hay en stock (${item.stock} ${unitLabel(item.unit)}). Lo prestado se da de baja después de la devolución.`);
    }
    if (retire && db.loans.some((loan) => loan.itemId === item.id)) {
      throw validationError(`${item.name} tiene préstamos sin devolver. Registrá la devolución antes de la baja definitiva.`);
    }
    if (!retire && quantity <= 0) throw validationError("La cantidad a dar de baja debe ser mayor a cero.");

    item.stock = Math.round((Number(item.stock) - quantity) * 1000) / 1000;
    const now = new Date().toISOString();
    if (retire) {
      item.retiredAt = now;
      item.retiredBy = session.name;
    }
    item.updatedAt = now;
    item.updatedBy = session.name;

    const writeOff = {
      id: crypto.randomUUID(),
      itemId: item.id,
      itemName: item.name,
      itemCode: `${item.code}${item.subcode ? `-${item.subcode}` : ""}`,
      quantity,
      unit: item.unit || "unidad",
      unitCost: Number(item.amount || 0),
      reason,
      observation,
      date,
      time,
      retire,
      createdAt: now,
      createdBy: session.name,
    };
    if (!Array.isArray(db.writeOffs)) db.writeOffs = [];
    db.writeOffs.unshift(writeOff);
    addActivity(
      db,
      "item_written_off",
      `${session.name} dio de baja ${quantity} ${unitLabel(item.unit)} de ${item.name} (${writeOff.itemCode}) el ${date.split("-").reverse().join("/")} a las ${time}. Motivo: ${reason}.${retire ? " Baja definitiva del material." : ` Stock restante: ${item.stock}.`}${observation ? ` Observación: ${observation}.` : ""}`
    );
    await writeDb(db);
    sendJson(res, 201, { writeOff, item });
  });

  // Vuelve a habilitar un material dado de baja definitivamente (por ejemplo, si se lo repuso).
  router.add("POST", "/api/items/:id/reactivate", { permission: "items.writeOff" }, async ({ res, params, session }) => {
    const db = await readDb();
    const item = db.items.find((entry) => entry.id === params.id);
    if (!item) {
      sendJson(res, 404, { error: "El material no fue encontrado." });
      return;
    }
    if (!isRetired(item)) throw validationError(`${item.name} no está dado de baja.`);
    delete item.retiredAt;
    delete item.retiredBy;
    item.updatedAt = new Date().toISOString();
    item.updatedBy = session.name;
    addActivity(db, "item_reactivated", `${session.name} volvió a habilitar ${item.name} (${item.code}${item.subcode ? `-${item.subcode}` : ""}).`);
    await writeDb(db);
    sendJson(res, 200, { item });
  });
}

module.exports = { register: (router) => { register(router); registerWriteOffs(router); } };

}],
  "src/routes/loans.js": [{"crypto":"shim:crypto","../http/responses":"src/http/responses.js","../http/body":"src/http/body.js","../data/store":"src/data/store.js","../services/validation":"src/services/validation.js","../services/responsibles":"src/services/responsibles.js","../services/items":"src/services/items.js"}, function (require, module, exports, __dirname, __filename) {
const crypto = require("crypto");
const { sendJson, validationError } = require("../http/responses");
const { readJsonBody } = require("../http/body");
const { addActivity, readDb, writeDb } = require("../data/store");
const { optionalText, requiredText } = require("../services/validation");
const { findResponsibleById } = require("../services/responsibles");
const { ensureItemActive, unitLabel, validQuantity } = require("../services/items");

const round = (value) => Math.round(Number(value) * 1000) / 1000;
const quantityText = (quantity, item) => `${quantity} ${unitLabel(item?.unit)}`;

// Materiales pedidos en un préstamo: lista "items" o, como antes, un solo itemId + quantity.
// Si el mismo material aparece dos veces, se suman las cantidades.
function requestedLines(body) {
  const raw = Array.isArray(body.items) && body.items.length
    ? body.items
    : body.itemId
      ? [{ itemId: body.itemId, quantity: body.quantity }]
      : [];
  if (!raw.length) throw validationError("Agregá al menos un material al préstamo.");
  if (raw.length > 50) throw validationError("Un préstamo puede tener hasta 50 materiales.");
  const merged = new Map();
  raw.forEach((line) => {
    const itemId = String(line?.itemId || "");
    if (!itemId) throw validationError("Hay un material sin seleccionar en el préstamo.");
    const quantity = Number(line.quantity);
    merged.set(itemId, (merged.get(itemId) || 0) + (Number.isFinite(quantity) ? quantity : NaN));
  });
  return [...merged.entries()].map(([itemId, quantity]) => ({ itemId, quantity }));
}

// Aplica la devolución de varias líneas de préstamo de una vez (todas o ninguna).
function applyReturns(db, lines, observation, session) {
  if (!Array.isArray(lines) || !lines.length) throw validationError("Indicá qué materiales se devuelven.");
  const prepared = [];
  const seen = new Set();
  lines.forEach((line) => {
    const loan = db.loans.find((entry) => entry.id === line?.loanId);
    if (!loan) throw validationError("Uno de los préstamos ya no existe. Actualizá la pantalla.");
    if (seen.has(loan.id)) throw validationError("Hay un material repetido en la devolución.");
    seen.add(loan.id);
    const item = db.items.find((entry) => entry.id === loan.itemId);
    const quantity = Number(line.quantity);
    if (!Number.isFinite(quantity) || quantity < 0) throw validationError(`La cantidad a devolver de ${item?.name || "un material"} no es válida.`);
    if (quantity === 0) return;
    const checked = item ? validQuantity(item, quantity, "La cantidad a devolver") : round(quantity);
    if (checked > Number(loan.quantity)) {
      throw validationError(`No podés devolver más de lo pendiente de ${item?.name || "un material"} (${quantityText(loan.quantity, item)}).`);
    }
    prepared.push({ loan, item, quantity: checked });
  });
  if (!prepared.length) throw validationError("Indicá una cantidad a devolver en al menos un material.");

  prepared.forEach(({ loan, item, quantity }) => {
    if (item) item.stock = round(Number(item.stock) + quantity);
    loan.quantity = round(Number(loan.quantity) - quantity);
  });
  db.loans = db.loans.filter((loan) => Number(loan.quantity) > 0);

  // Un mensaje por responsable (normalmente es un solo préstamo).
  const byBorrower = new Map();
  prepared.forEach((entry) => {
    const key = entry.loan.borrower;
    if (!byBorrower.has(key)) byBorrower.set(key, []);
    byBorrower.get(key).push(entry);
  });
  byBorrower.forEach((entries, borrower) => {
    const complete = entries.every(({ loan }) => Number(loan.quantity) === 0)
      && !db.loans.some((loan) => entries.some((entry) => entry.loan.groupId && loan.groupId === entry.loan.groupId));
    const detail = entries
      .map(({ loan, item, quantity }) => `${item ? item.name : "un elemento"} (${quantityText(quantity, item)}${Number(loan.quantity) > 0 ? `; quedan ${quantityText(loan.quantity, item)}` : ""})`)
      .join(", ");
    addActivity(
      db,
      complete ? "loan_returned" : "loan_partial_returned",
      `${session.name} ${complete ? "completó la devolución de" : "registró una devolución parcial de"} ${detail} de ${borrower}. ${complete ? "Préstamo cerrado." : "El préstamo sigue abierto."}${observation ? ` Observación: ${observation}.` : ""}`
    );
  });
  return prepared;
}

// Préstamos (con uno o varios materiales) y devoluciones.
function register(router) {
  router.add("POST", "/api/loans", { permission: "loans.create" }, async ({ req, res, session }) => {
    const body = await readJsonBody(req);
    const db = await readDb();
    const responsible = findResponsibleById(db, body.responsibleId);
    if (!responsible) {
      sendJson(res, 404, { error: "El responsable indicado no existe." });
      return;
    }
    const dueDate = requiredText(body.dueDate, "La fecha de devolución es obligatoria.");
    const lines = requestedLines(body).map(({ itemId, quantity }) => {
      const item = db.items.find((entry) => entry.id === itemId);
      if (!item) throw validationError("Uno de los materiales indicados no existe.");
      ensureItemActive(item);
      const checked = validQuantity(item, quantity);
      if (Number(item.stock) < checked) {
        throw validationError(`No hay stock suficiente de ${item.name}: hay ${quantityText(item.stock, item)} y se piden ${quantityText(checked, item)}.`);
      }
      return { item, quantity: checked };
    });

    // Todos los materiales de la misma operación comparten "groupId": se ven y se devuelven juntos.
    const groupId = crypto.randomUUID();
    const createdAt = new Date().toISOString();
    const department = optionalText(body.department);
    const observation = optionalText(body.observation);
    const loans = lines.map(({ item, quantity }) => {
      item.stock = round(Number(item.stock) - quantity);
      return {
        id: crypto.randomUUID(),
        groupId,
        itemId: item.id,
        responsibleId: responsible.id,
        borrower: responsible.fullName,
        department,
        quantity,
        dueDate,
        observation,
        createdAt,
        createdBy: session.name,
      };
    });

    db.loans.unshift(...loans);
    const detail = lines.map(({ item, quantity }) => `${item.name} (${quantityText(quantity, item)})`).join(", ");
    addActivity(db, "loan_created", `${session.name} registró un préstamo de ${detail} para ${responsible.fullName}.${observation ? ` Observación: ${observation}.` : ""}`);
    await writeDb(db);
    sendJson(res, 201, { groupId, loans, loan: loans[0] });
  });

  // Devolución de varios materiales a la vez: { lines: [{ loanId, quantity }], observation }.
  router.add("POST", "/api/loans/return", { permission: "loans.return" }, async ({ req, res, session }) => {
    const body = await readJsonBody(req);
    const db = await readDb();
    const observation = optionalText(body.observation);
    const prepared = applyReturns(db, body.lines, observation, session);
    await writeDb(db);
    sendJson(res, 200, {
      ok: true,
      returned: prepared.map(({ loan, quantity }) => ({ loanId: loan.id, quantity, pendingQuantity: Number(loan.quantity) })),
    });
  });

  // Devolución de una sola línea (se mantiene por compatibilidad).
  router.add("POST", "/api/loans/:id/return", { permission: "loans.return" }, async ({ req, res, params, session }) => {
    const body = await readJsonBody(req);
    const db = await readDb();
    if (!db.loans.some((entry) => entry.id === params.id)) {
      sendJson(res, 404, { error: "El préstamo no fue encontrado." });
      return;
    }
    const [{ loan }] = applyReturns(db, [{ loanId: params.id, quantity: body.quantity }], optionalText(body.observation), session);
    await writeDb(db);
    sendJson(res, 200, { ok: true, pendingQuantity: Number(loan.quantity) });
  });
}

module.exports = { register };

}],
  "src/routes/consumptions.js": [{"crypto":"shim:crypto","../http/responses":"src/http/responses.js","../http/body":"src/http/body.js","../data/store":"src/data/store.js","../services/validation":"src/services/validation.js","../services/responsibles":"src/services/responsibles.js","../services/items":"src/services/items.js"}, function (require, module, exports, __dirname, __filename) {
const crypto = require("crypto");
const { sendJson } = require("../http/responses");
const { readJsonBody } = require("../http/body");
const { addActivity, readDb, writeDb } = require("../data/store");
const { optionalText } = require("../services/validation");
const { findResponsibleById } = require("../services/responsibles");
const { ensureItemActive } = require("../services/items");

// Consumos de materiales que no se devuelven.
function register(router) {
  router.add("POST", "/api/consumptions", { permission: "consumptions.create" }, async ({ req, res, session }) => {
    const body = await readJsonBody(req);
    const db = await readDb();
    const item = db.items.find((entry) => entry.id === body.itemId);
    const responsible = findResponsibleById(db, body.responsibleId);
    const quantity = Number(body.quantity);
    const costCenter = optionalText(body.costCenter);

    if (!item) {
      sendJson(res, 404, { error: "El elemento indicado no existe." });
      return;
    }
    if (!responsible) {
      sendJson(res, 404, { error: "El responsable indicado no existe." });
      return;
    }
    ensureItemActive(item);

    if (!Number.isFinite(quantity) || quantity <= 0) {
      sendJson(res, 400, { error: "La cantidad debe ser mayor a cero." });
      return;
    }

    if (costCenter && !db.costCenters.some((entry) => entry.name === costCenter)) {
      sendJson(res, 400, { error: "El centro de costos indicado no existe en datos maestros." });
      return;
    }

    if (item.stock < quantity) {
      sendJson(res, 400, { error: "No hay stock suficiente para registrar ese consumo." });
      return;
    }

    item.stock -= quantity;
    const consumption = {
      id: crypto.randomUUID(),
      itemId: item.id,
      responsibleId: responsible.id,
      responsible: responsible.fullName,
      department: optionalText(body.department),
      costCenter,
      quantity,
      detail: optionalText(body.detail),
      createdAt: new Date().toISOString(),
      createdBy: session.name,
    };

    db.consumptions.unshift(consumption);
    addActivity(db, "consumption_created", `${session.name} registró un consumo de ${item.name} para ${consumption.responsible} (${quantity} unidad(es)).${consumption.detail ? ` Detalle: ${consumption.detail}.` : ""}`);
    await writeDb(db);
    sendJson(res, 201, { consumption });
  });
}

module.exports = { register };

}],
  "src/routes/stockEntries.js": [{"crypto":"shim:crypto","../http/responses":"src/http/responses.js","../http/body":"src/http/body.js","../data/store":"src/data/store.js","../services/validation":"src/services/validation.js","../services/costs":"src/services/costs.js","../services/purchases":"src/services/purchases.js","../services/items":"src/services/items.js"}, function (require, module, exports, __dirname, __filename) {
const crypto = require("crypto");
const { sendJson } = require("../http/responses");
const { readJsonBody } = require("../http/body");
const { addActivity, readDb, writeDb } = require("../data/store");
const { ensureCategoryExists, ensureLocationExists, optionalText, requiredText } = require("../services/validation");
const { computeAverageUnitCost } = require("../services/costs");
const { round, confirmationStatus, requestStatus, fulfillmentSummary, applyPurchaseToItem } = require("../services/purchases");
const { ensureItemCodeAvailable, normalizeUnit, ensureItemActive } = require("../services/items");

// Ingresos de stock por donación o compra.
function register(router) {
  router.add("POST", "/api/stock-entries", { permission: "stock.entries" }, async ({ req, res, session }) => {
    const body = await readJsonBody(req);
    const db = await readDb();
    const entryType = requiredText(body.entryType, "El tipo de ingreso es obligatorio.");
    const targetType = optionalText(body.targetType) || "existing";
    const quantity = Number(body.quantity);

    if (!["donacion", "compra"].includes(entryType)) {
      sendJson(res, 400, { error: "El tipo de ingreso indicado no es válido." });
      return;
    }

    if (!["existing", "new"].includes(targetType)) {
      sendJson(res, 400, { error: "La modalidad de ingreso indicada no es válida." });
      return;
    }

    let item = null;
    let createdNewItem = false;
    const createdEntries = [];

    if (entryType === "compra") {
      // Ingreso de mercadería de una confirmación de compra. Puede ser parcial:
      // lo que no se recibe queda pendiente en la confirmación.
      const purchaseRequest = db.purchaseRequests.find((entry) => entry.id === body.purchaseRequestId);
      const confirmation = purchaseRequest?.confirmations.find((entry) => entry.id === body.confirmationId);
      if (!purchaseRequest || !confirmation) {
        sendJson(res, 400, { error: "Seleccioná un pedido de compra confirmado." });
        return;
      }
      if (confirmationStatus(confirmation) === "received") {
        sendJson(res, 400, { error: "Esa confirmación ya fue ingresada por completo." });
        return;
      }

      const items = (Array.isArray(body.items) ? body.items : []).filter((entry) => Number(entry?.quantity) > 0);
      if (!items.length) {
        sendJson(res, 400, { error: "Indicá la cantidad recibida de al menos un material." });
        return;
      }

      const invoice = optionalText(body.invoice) || confirmation.invoice || "";
      for (const entry of items) {
        const line = confirmation.lines.find((current) => current.itemId === entry.itemId);
        const existingItem = db.items.find((current) => current.id === entry.itemId);
        const quantityEntry = Number(entry.quantity);
        if (!line || !existingItem) {
          sendJson(res, 400, { error: "Hay un material que no pertenece a la confirmación o ya no existe en el inventario." });
          return;
        }
        const pendingQuantity = Number(line.quantity) - Number(line.receivedQuantity || 0);
        if (!Number.isFinite(quantityEntry) || quantityEntry > pendingQuantity) {
          sendJson(res, 400, { error: `De ${line.itemName} quedan ${pendingQuantity} unidad(es) por recibir.` });
          return;
        }

        const unitCostEntry = Number(line.netUnitCost);
        applyPurchaseToItem(existingItem, {
          quantity: quantityEntry,
          netUnitCost: unitCostEntry,
          supplierName: confirmation.supplierName,
          invoice,
          userName: session.name,
        });
        line.receivedQuantity = Number(line.receivedQuantity || 0) + quantityEntry;

        createdEntries.push({
          id: crypto.randomUUID(),
          entryType,
          targetType: "existing",
          itemId: existingItem.id,
          itemName: existingItem.name,
          quantity: quantityEntry,
          unitCost: unitCostEntry,
          totalCost: round(quantityEntry * unitCostEntry),
          provider: confirmation.supplierName,
          invoice,
          observation: optionalText(body.observation),
          purchaseRequestId: purchaseRequest.id,
          confirmationId: confirmation.id,
          supplierId: confirmation.supplierId,
          createdAt: new Date().toISOString(),
          createdBy: session.name,
        });
      }

      confirmation.status = confirmationStatus(confirmation);
      if (!confirmation.invoice && invoice) {
        confirmation.invoice = invoice;
      }
      purchaseRequest.status = requestStatus(purchaseRequest);
      purchaseRequest.provider = confirmation.supplierName;
      purchaseRequest.invoice = invoice;
      purchaseRequest.fulfillment = fulfillmentSummary(purchaseRequest);
      if (purchaseRequest.status === "completed") {
        purchaseRequest.fulfilledAt = new Date().toISOString();
        purchaseRequest.fulfilledBy = session.name;
      }
    } else if (targetType === "existing") {
      if (!Number.isFinite(quantity) || quantity <= 0) {
        sendJson(res, 400, { error: "La cantidad ingresada debe ser mayor a cero." });
        return;
      }

      const estimatedUnitCost = Number(body.estimatedUnitCost ?? 0);
      if (!Number.isFinite(estimatedUnitCost) || estimatedUnitCost < 0) {
        sendJson(res, 400, { error: "El costo unitario estimado debe ser un valor válido." });
        return;
      }

      item = db.items.find((entry) => entry.id === body.itemId);
      if (!item) {
        sendJson(res, 404, { error: "El material indicado no existe." });
        return;
      }
      ensureItemActive(item);

      item.stock += quantity;
      item.amount = estimatedUnitCost;
      item.updatedAt = new Date().toISOString();
      item.updatedBy = session.name;

      createdEntries.push({
        id: crypto.randomUUID(),
        entryType,
        targetType,
        itemId: item.id,
        itemName: item.name,
        quantity,
        unitCost: estimatedUnitCost,
        totalCost: quantity * estimatedUnitCost,
        donor: optionalText(body.donor),
        observation: optionalText(body.observation),
        createdAt: new Date().toISOString(),
        createdBy: session.name,
      });
    } else {
      if (!Number.isFinite(quantity) || quantity <= 0) {
        sendJson(res, 400, { error: "La cantidad ingresada debe ser mayor a cero." });
        return;
      }

      ensureCategoryExists(db, body.category);
      ensureLocationExists(db, body.location);

      const stockMinimum = Number(body.stockMinimum);
      const amount = Number(body.amount ?? 0);
      if (!Number.isFinite(stockMinimum) || stockMinimum < 0 || !Number.isFinite(amount) || amount < 0) {
        sendJson(res, 400, { error: "El stock mínimo y el importe deben ser valores válidos." });
        return;
      }

      item = {
        id: crypto.randomUUID(),
        name: requiredText(body.name, "El nombre del material es obligatorio."),
        category: requiredText(body.category, "La categoría es obligatoria."),
        code: requiredText(body.code, "El código interno es obligatorio."),
        subcode: optionalText(body.subcode),
        location: requiredText(body.location, "La ubicación es obligatoria."),
        unit: normalizeUnit(body.unit),
        stock: quantity,
        stockMinimum,
        amount,
        notes: optionalText(body.notes),
        createdAt: new Date().toISOString(),
        createdBy: session.name,
      };

      ensureItemCodeAvailable(db, item.code, item.subcode);
      db.items.unshift(item);
      createdNewItem = true;

      createdEntries.push({
        id: crypto.randomUUID(),
        entryType,
        targetType,
        itemId: item.id,
        itemName: item.name,
        quantity,
        unitCost: amount,
        totalCost: quantity * amount,
        donor: optionalText(body.donor),
        observation: optionalText(body.observation),
        createdAt: new Date().toISOString(),
        createdBy: session.name,
      });
    }

    createdEntries.slice().reverse().forEach((entry) => db.stockEntries.unshift(entry));
    const providerName = entryType === "compra" ? createdEntries[0]?.provider || "" : optionalText(body.provider);
    addActivity(db, "stock_entry_created", `${session.name} registró un ingreso por ${entryType} de ${createdEntries.map((entry) => `${entry.itemName} (${entry.quantity})`).join(", ")}.${createdNewItem ? " Se creó material nuevo." : ""}${providerName ? ` Proveedor: ${providerName}.` : ""}${optionalText(body.donor) ? ` Donante: ${optionalText(body.donor)}.` : ""}${optionalText(body.observation) ? ` Observación: ${optionalText(body.observation)}.` : ""}`);
    await writeDb(db);
    sendJson(res, 201, { stockEntries: createdEntries, item });
  });
}

module.exports = { register };

}],
  "src/routes/purchaseRequests.js": [{"crypto":"shim:crypto","../http/responses":"src/http/responses.js","../http/body":"src/http/body.js","../data/store":"src/data/store.js","../services/validation":"src/services/validation.js","../services/purchases":"src/services/purchases.js","../auth/permissions":"src/auth/permissions.js"}, function (require, module, exports, __dirname, __filename) {
const crypto = require("crypto");
const { sendJson, validationError } = require("../http/responses");
const { readJsonBody } = require("../http/body");
const { addActivity, readDb, writeDb } = require("../data/store");
const { optionalText, requiredText } = require("../services/validation");
const { round, computeLine, remainingByItem, requestStatus, invoiceTotalWarning, ensureInvoiceNotLoaded, newApproval, applyApprovalDecision, approvalState } = require("../services/purchases");
const { hasPermission } = require("../auth/permissions");

// Pedidos de compra.
function register(router) {
  router.add("POST", "/api/purchase-requests", { permission: "purchases.requests" }, async ({ req, res, session }) => {
    const body = await readJsonBody(req);
    const db = await readDb();
    const rawEntries = [
      ...(Array.isArray(body.lowStockItems) ? body.lowStockItems : []),
      ...(Array.isArray(body.manualItems) ? body.manualItems : []),
    ];

    const mergedItems = [];
    rawEntries.forEach((entry) => {
      const item = db.items.find((current) => current.id === entry.itemId);
      const quantity = Number(entry.quantity);

      if (!item || !Number.isFinite(quantity) || quantity <= 0) {
        return;
      }

      const existing = mergedItems.find((current) => current.itemId === item.id);
      if (existing) {
        existing.quantity += quantity;
        return;
      }

      mergedItems.push({
        itemId: item.id,
        itemName: item.name,
        code: item.code,
        subcode: item.subcode,
        quantity,
        currentStock: Number(item.stock),
        stockMinimum: Number(item.stockMinimum ?? 0),
        amount: Number(item.amount ?? 0),
      });
    });

    if (!mergedItems.length) {
      sendJson(res, 400, { error: "Seleccioná al menos un material para generar el pedido." });
      return;
    }

    const costCenter = requiredText(body.costCenter, "El centro de costos es obligatorio.");
    if (!db.costCenters.some((entry) => entry.name === costCenter)) {
      sendJson(res, 400, { error: "El centro de costos seleccionado no existe en datos maestros." });
      return;
    }

    const purchaseRequest = {
      id: crypto.randomUUID(),
      items: mergedItems,
      costCenter,
      observation: optionalText(body.observation),
      status: "pending_approval",
      approval: newApproval(),
      confirmations: [],
      createdAt: new Date().toISOString(),
      createdBy: session.name,
    };

    db.purchaseRequests.unshift(purchaseRequest);
    addActivity(db, "purchase_request_created", `${session.name} generó un pedido de compra con ${mergedItems.length} material(es). Queda a la espera de las firmas de Jefe de taller, Rector y Contable.${purchaseRequest.observation ? ` Observación: ${purchaseRequest.observation}.` : ""}`);
    await writeDb(db);
    sendJson(res, 201, { purchaseRequest });
  });

  // Firma (aprobación o rechazo) del paso que corresponde: Jefe de taller → Rector → Contable.
  router.add("POST", "/api/purchase-requests/:id/approval", "any", async ({ req, res, params, session }) => {
    const body = await readJsonBody(req);
    const db = await readDb();
    const purchaseRequest = db.purchaseRequests.find((entry) => entry.id === params.id);
    if (!purchaseRequest) {
      sendJson(res, 404, { error: "El pedido de compra no fue encontrado." });
      return;
    }
    const permissionKeys = ["purchases.approve.workshop", "purchases.approve.rector", "purchases.approve.accounting"];
    if (!permissionKeys.some((key) => hasPermission(db, session.role, key))) {
      sendJson(res, 403, { error: "Tu usuario no firma pedidos de compra." });
      return;
    }

    const decision = String(body.decision || "");
    const { step, status } = applyApprovalDecision(purchaseRequest, {
      decision,
      comment: body.comment,
      user: session,
      can: (key) => hasPermission(db, session.role, key),
    });
    const requestCode = String(purchaseRequest.id).slice(0, 8).toUpperCase();
    const next = approvalState(purchaseRequest).current;
    const message = decision === "reject"
      ? `${session.name} rechazó como ${step.label} el pedido ${requestCode}. Motivo: ${String(body.comment).trim()}.`
      : `${session.name} aprobó como ${step.label} el pedido ${requestCode}.${next ? ` Falta la firma de ${next.label}.` : " El pedido quedó aprobado y listo para confirmar con el proveedor."}`;
    addActivity(db, decision === "reject" ? "purchase_request_rejected" : "purchase_request_approved", message);
    await writeDb(db);
    sendJson(res, 200, { purchaseRequest, status });
  });

  // Confirmación (total o parcial) de un pedido: proveedor, materiales, costos, bonificaciones,
  // retenciones y total de factura. Lo que no se confirma queda pendiente para otra confirmación.
  router.add("POST", "/api/purchase-requests/:id/confirmations", { permission: "purchases.confirm" }, async ({ req, res, params, session }) => {
    const body = await readJsonBody(req);
    const db = await readDb();
    const purchaseRequest = db.purchaseRequests.find((entry) => entry.id === params.id);

    if (!purchaseRequest) {
      sendJson(res, 404, { error: "El pedido de compra no fue encontrado." });
      return;
    }
    const currentStatus = requestStatus(purchaseRequest);
    if (currentStatus === "pending_approval") {
      const missing = approvalState(purchaseRequest).current;
      sendJson(res, 400, { error: `El pedido todavía no está aprobado: falta la firma de ${missing?.label || "un firmante"}.` });
      return;
    }
    if (currentStatus === "rejected") {
      sendJson(res, 400, { error: "El pedido fue rechazado y no se puede confirmar." });
      return;
    }
    if (["completed", "cancelled", "confirmed"].includes(currentStatus)) {
      sendJson(res, 400, { error: "El pedido ya no tiene materiales pendientes de confirmar." });
      return;
    }

    const supplier = db.suppliers.find((entry) => entry.id === body.supplierId);
    if (!supplier) {
      sendJson(res, 400, { error: "Seleccioná un proveedor de datos maestros." });
      return;
    }

    if (optionalText(body.invoice)) {
      ensureInvoiceNotLoaded(db, supplier.id, optionalText(body.invoice));
    }

    const remaining = remainingByItem(purchaseRequest);
    const requestedLines = (Array.isArray(body.lines) ? body.lines : []).filter((line) => Number(line?.quantity) > 0);
    if (!requestedLines.length) {
      sendJson(res, 400, { error: "Indicá al menos un material con cantidad a confirmar." });
      return;
    }

    const seen = new Set();
    const lines = requestedLines.map((line) => {
      const item = purchaseRequest.items.find((entry) => entry.itemId === line.itemId);
      if (!item || seen.has(line.itemId)) {
        throw validationError("Hay un material que no pertenece al pedido o está repetido.");
      }
      seen.add(line.itemId);
      const computed = computeLine(line, item.itemName);
      const pending = remaining.get(item.itemId) || 0;
      if (computed.quantity > pending) {
        throw validationError(`De ${item.itemName} quedan ${pending} unidad(es) por confirmar.`);
      }
      return {
        itemId: item.itemId,
        itemName: item.itemName,
        code: item.code,
        subcode: item.subcode,
        ...computed,
        receivedQuantity: 0,
      };
    });

    const withholdings = Number(body.withholdings || 0);
    const invoiceTotal = Number(body.invoiceTotal);
    if (!Number.isFinite(withholdings) || withholdings < 0) {
      sendJson(res, 400, { error: "El subtotal de retenciones no es válido." });
      return;
    }
    if (body.invoiceTotal === undefined || body.invoiceTotal === "" || !Number.isFinite(invoiceTotal) || invoiceTotal < 0) {
      sendJson(res, 400, { error: "Ingresá el total de la factura." });
      return;
    }

    const subtotal = round(lines.reduce((sum, line) => sum + line.subtotal, 0));
    const warning = invoiceTotalWarning(subtotal, round(withholdings), round(invoiceTotal));
    const confirmation = {
      id: crypto.randomUUID(),
      number: purchaseRequest.confirmations.length + 1,
      supplierId: supplier.id,
      supplierName: supplier.name,
      supplierCuit: supplier.cuit,
      invoice: optionalText(body.invoice),
      observation: optionalText(body.observation),
      lines,
      subtotal,
      withholdings: round(withholdings),
      invoiceTotal: round(invoiceTotal),
      totalWarning: warning,
      status: "confirmed",
      createdAt: new Date().toISOString(),
      createdBy: session.name,
    };

    purchaseRequest.confirmations.push(confirmation);
    purchaseRequest.status = requestStatus(purchaseRequest);
    const requestCode = String(purchaseRequest.id).slice(0, 8).toUpperCase();
    const kind = purchaseRequest.status === "partially_confirmed" ? "parcial" : "total";
    addActivity(
      db,
      "purchase_request_confirmed",
      `${session.name} confirmó en forma ${kind} el pedido ${requestCode} con ${supplier.name}: ${lines.map((line) => `${line.itemName} (${line.quantity})`).join(", ")}. Total factura $${confirmation.invoiceTotal.toFixed(2)}.${confirmation.observation ? ` Observación: ${confirmation.observation}.` : ""}`
    );
    await writeDb(db);
    sendJson(res, 201, { purchaseRequest, confirmation, warning });
  });
}

module.exports = { register };

}],
  "src/routes/purchaseInvoices.js": [{"crypto":"shim:crypto","../http/responses":"src/http/responses.js","../http/body":"src/http/body.js","../data/store":"src/data/store.js","../services/validation":"src/services/validation.js","../services/purchases":"src/services/purchases.js"}, function (require, module, exports, __dirname, __filename) {
const crypto = require("crypto");
const { sendJson, validationError } = require("../http/responses");
const { readJsonBody } = require("../http/body");
const { readDb, writeDb, addActivity } = require("../data/store");
const { requiredText, optionalText } = require("../services/validation");
const { round, computeLine, invoiceTotalWarning, applyPurchaseToItem, ensureInvoiceNotLoaded } = require("../services/purchases");

// Factura de compra sin pedido: se cargan los mismos datos que al confirmar un pedido
// (proveedor, materiales, costos, bonificaciones, retenciones y total) y la mercadería ingresa al stock.

function register(router) {
  router.add("POST", "/api/purchase-invoices", { permission: "purchases.invoices" }, async ({ req, res, session }) => {
    const body = await readJsonBody(req);
    const db = await readDb();

    const supplier = db.suppliers.find((entry) => entry.id === body.supplierId);
    if (!supplier) {
      sendJson(res, 400, { error: "Seleccioná un proveedor de datos maestros." });
      return;
    }
    const invoice = requiredText(body.invoice, "El número de factura es obligatorio.");
    const invoiceDate = String(body.invoiceDate || "").trim();
    if (!/^\d{4}-\d{2}-\d{2}$/.test(invoiceDate) || Number.isNaN(new Date(`${invoiceDate}T00:00:00`).getTime())) {
      sendJson(res, 400, { error: "Ingresá la fecha de la factura." });
      return;
    }
    const today = new Date();
    const todayText = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
    if (invoiceDate > todayText) {
      sendJson(res, 400, { error: "La fecha de la factura no puede ser posterior a hoy." });
      return;
    }
    ensureInvoiceNotLoaded(db, supplier.id, invoice);

    const requestedLines = (Array.isArray(body.lines) ? body.lines : []).filter((line) => line && line.itemId);
    if (!requestedLines.length) {
      sendJson(res, 400, { error: "Agregá al menos un material a la factura." });
      return;
    }

    const seen = new Set();
    const lines = requestedLines.map((line) => {
      const item = db.items.find((entry) => entry.id === line.itemId);
      if (!item) throw validationError("Hay un material que no existe en el inventario.");
      if (seen.has(item.id)) throw validationError(`${item.name} está repetido en la factura.`);
      seen.add(item.id);
      return {
        itemId: item.id,
        itemName: item.name,
        code: item.code,
        subcode: item.subcode,
        ...computeLine(line, item.name),
      };
    });

    const withholdings = Number(body.withholdings || 0);
    const invoiceTotal = Number(body.invoiceTotal);
    if (!Number.isFinite(withholdings) || withholdings < 0) {
      sendJson(res, 400, { error: "El subtotal de retenciones no es válido." });
      return;
    }
    if (body.invoiceTotal === undefined || body.invoiceTotal === "" || !Number.isFinite(invoiceTotal) || invoiceTotal < 0) {
      sendJson(res, 400, { error: "Ingresá el total de la factura." });
      return;
    }

    const now = new Date().toISOString();
    const subtotal = round(lines.reduce((sum, line) => sum + line.subtotal, 0));
    const warning = invoiceTotalWarning(subtotal, round(withholdings), round(invoiceTotal));
    const purchaseInvoice = {
      id: crypto.randomUUID(),
      number: db.purchaseInvoices.reduce((max, entry) => Math.max(max, Number(entry.number) || 0), 0) + 1,
      supplierId: supplier.id,
      supplierName: supplier.name,
      supplierCuit: supplier.cuit,
      invoice,
      invoiceDate,
      observation: optionalText(body.observation),
      lines,
      subtotal,
      withholdings: round(withholdings),
      invoiceTotal: round(invoiceTotal),
      totalWarning: warning,
      createdAt: now,
      createdBy: session.name,
    };

    // La mercadería ingresa al stock con el costo neto de bonificación.
    const stockEntries = lines.map((line) => {
      const item = db.items.find((entry) => entry.id === line.itemId);
      applyPurchaseToItem(item, { quantity: line.quantity, netUnitCost: line.netUnitCost, supplierName: supplier.name, invoice, userName: session.name, date: now });
      return {
        id: crypto.randomUUID(),
        entryType: "compra",
        targetType: "existing",
        itemId: item.id,
        itemName: item.name,
        quantity: line.quantity,
        unitCost: line.netUnitCost,
        totalCost: line.subtotal,
        provider: supplier.name,
        invoice,
        observation: purchaseInvoice.observation,
        purchaseInvoiceId: purchaseInvoice.id,
        supplierId: supplier.id,
        createdAt: now,
        createdBy: session.name,
      };
    });

    db.purchaseInvoices.unshift(purchaseInvoice);
    stockEntries.slice().reverse().forEach((entry) => db.stockEntries.unshift(entry));
    addActivity(
      db,
      "purchase_invoice_created",
      `${session.name} registró la factura ${invoice} de ${supplier.name} (sin pedido): ${lines.map((line) => `${line.itemName} (${line.quantity})`).join(", ")}. Total factura $${purchaseInvoice.invoiceTotal.toFixed(2)}.${purchaseInvoice.observation ? ` Observación: ${purchaseInvoice.observation}.` : ""}`
    );
    await writeDb(db);
    sendJson(res, 201, { purchaseInvoice, stockEntries, warning });
  });
}

module.exports = { register };

}],
  "src/routes/permissions.js": [{"../http/responses":"src/http/responses.js","../http/body":"src/http/body.js","../data/store":"src/data/store.js","../auth/permissions":"src/auth/permissions.js","../auth/roles":"src/auth/roles.js"}, function (require, module, exports, __dirname, __filename) {
const { sendJson, validationError } = require("../http/responses");
const { readJsonBody } = require("../http/body");
const { readDb, writeDb, addActivity } = require("../data/store");
const { PERMISSIONS, PERMISSION_KEYS, CONFIGURABLE_ROLES, permissionMatrix, rolePermissions } = require("../auth/permissions");

// Permisos por rol: solo el administrador los ve y los cambia.
const { ROLE_LABELS } = require("../auth/roles");

function labelsFor(keys) {
  return keys.map((key) => PERMISSIONS.find((permission) => permission.key === key)?.label || key);
}

function register(router) {
  router.add("GET", "/api/role-permissions", ["admin"], async ({ res }) => {
    sendJson(res, 200, permissionMatrix(await readDb()));
  });

  // Cuerpo: { permissions: [claves] } para guardar, o { reset: true } para volver a los permisos predeterminados.
  router.add("PUT", "/api/role-permissions/:role", ["admin"], async ({ req, res, params, session }) => {
    const role = params.role;
    if (!CONFIGURABLE_ROLES.includes(role)) {
      throw validationError("Ese rol no tiene permisos configurables.");
    }
    const body = await readJsonBody(req);
    const db = await readDb();
    const before = rolePermissions(db, role);
    db.rolePermissions = (db.rolePermissions || []).filter((entry) => entry.role !== role);

    if (body.reset === true) {
      addActivity(db, "permissions_updated", `${session.name} restableció los permisos predeterminados del rol ${ROLE_LABELS[role]}.`);
    } else {
      if (!Array.isArray(body.permissions)) {
        throw validationError("Indicá la lista de permisos del rol.");
      }
      const unknown = body.permissions.filter((key) => !PERMISSION_KEYS.includes(key));
      if (unknown.length) {
        throw validationError(`Permiso desconocido: ${unknown.join(", ")}.`);
      }
      const permissions = PERMISSION_KEYS.filter((key) => body.permissions.includes(key));
      db.rolePermissions.push({ id: role, role, permissions, updatedAt: new Date().toISOString(), updatedBy: session.name });
    }

    const after = rolePermissions(db, role);
    const added = after.filter((key) => !before.includes(key));
    const removed = before.filter((key) => !after.includes(key));
    if (body.reset !== true) {
      const detail = [
        added.length ? `habilitó: ${labelsFor(added).join("; ")}` : "",
        removed.length ? `quitó: ${labelsFor(removed).join("; ")}` : "",
      ].filter(Boolean).join(" · ");
      addActivity(db, "permissions_updated", `${session.name} cambió los permisos del rol ${ROLE_LABELS[role]}${detail ? ` (${detail})` : " (sin cambios)"}.`);
    }

    await writeDb(db);
    sendJson(res, 200, { ...permissionMatrix(db), changed: { role, added, removed } });
  });
}

module.exports = { register };

}]
  };

  var cache = {};
  function load(id) {
    if (shims[id]) return shims[id];
    if (id.indexOf("missing:") === 0) throw new Error("Módulo no disponible en la demo web: " + id.slice(8));
    if (cache[id]) return cache[id].exports;
    var entry = MODULES[id];
    if (!entry) throw new Error("Módulo no encontrado: " + id);
    var module = { exports: {} };
    cache[id] = module;
    var dir = "/app/" + id.slice(0, id.lastIndexOf("/"));
    entry[1].call(module.exports, function (spec) { return load(entry[0][spec] || spec); }, module, module.exports, dir, "/app/" + id);
    return module.exports;
  }

  // --- Datos iniciales -----------------------------------------------------------
  var fsShim = shims["shim:fs"];
  if (!fsShim.existsSync("/data/db.json")) {
    var initial = load("src/data/demoSeed.js").loadDemoSeed();
    fsShim.writeFileSync("/data/db.json", JSON.stringify(initial.db));
    fsShim.writeFileSync("/data/users.json", JSON.stringify(initial.users));
  }
  var app = load("src/app.js");

  // --- Las llamadas a /api/ se atienden acá, sin red ---------------------------------
  var nativeFetch = window.fetch.bind(window);
  window.fetch = function (input, init) {
    init = init || {};
    var url = new URL(typeof input === "string" ? input : input.url, window.location.href);
    var at = url.pathname.indexOf("/api/");
    if (url.origin !== window.location.origin || at === -1) return nativeFetch(input, init);
    var apiPath = url.pathname.slice(at) + url.search;
    var method = String(init.method || (typeof input === "object" && input.method) || "GET").toUpperCase();
    var body = {};
    if (init.body) {
      try { body = JSON.parse(init.body); } catch (error) { body = {}; }
    }
    var token = sessionStorage.getItem(TOKEN_KEY);
    var req = {
      method: method,
      url: apiPath,
      headers: { host: window.location.host, origin: window.location.origin, cookie: token ? "panol_session=" + token : "", "content-type": "application/json" },
      socket: { remoteAddress: "este navegador (demo web)" },
      bodyPromise: Promise.resolve(body),
      on: function () {},
      resume: function () {},
    };
    return new Promise(function (resolve) {
      var headers = {};
      var chunks = "";
      var res = {
        statusCode: 200,
        headersSent: false,
        setHeader: function (name, value) { headers[String(name).toLowerCase()] = value; },
        getHeader: function (name) { return headers[String(name).toLowerCase()]; },
        writeHead: function (status, extra) {
          this.statusCode = status;
          Object.keys(extra || {}).forEach(function (name) { headers[name.toLowerCase()] = extra[name]; });
          this.headersSent = true;
        },
        end: function (chunk) {
          if (chunk !== undefined && chunk !== null) chunks += String(chunk);
          var cookie = String(headers["set-cookie"] || "");
          var match = /panol_session=([^;]*)/.exec(cookie);
          if (match) {
            if (!match[1] || /Max-Age=0/i.test(cookie)) sessionStorage.removeItem(TOKEN_KEY);
            else sessionStorage.setItem(TOKEN_KEY, match[1]);
          }
          var status = this.statusCode;
          resolve(new Response(status === 204 || status === 304 ? null : chunks, {
            status: status,
            headers: { "Content-Type": headers["content-type"] || "application/json; charset=utf-8" },
          }));
        },
      };
      Promise.resolve(app.handleRequest(req, res)).catch(function (error) {
        console.error(error);
        if (!res.headersSent) {
          res.writeHead(500, { "Content-Type": "application/json; charset=utf-8" });
          res.end(JSON.stringify({ error: "Error interno de la demo: " + error.message }));
        }
      });
    });
  };

  // Botón «Restablecer datos de la demo» de la pantalla de ingreso.
  window.__PANOL_DEMO_WEB__ = {
    reset: function () {
      Object.keys(localStorage).forEach(function (name) { if (name.indexOf(PREFIX) === 0) localStorage.removeItem(name); });
      sessionStorage.removeItem(TOKEN_KEY);
      window.location.reload();
    },
  };
})();
