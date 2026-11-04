// Servidor del sistema funcionando dentro del navegador (versión demo web, datos ficticios).
// Archivo generado por scripts/demo/armar-demo-web.js: no editar a mano.
(function () {
  "use strict";
  var PREFIX = "panol-etha-demo-web:";
  var TOKEN_KEY = PREFIX + "token";
  var STATIC_FILES = { "/app/demo/datos-demo.json": "{\"descripcion\":\"Datos FICTICIOS para la versión demo del sistema de pañol. Las fechas se corren al día en que se instala la demo.\",\"generadoEl\":\"2026-11-04T15:00:00.000Z\",\"contraseña\":\"demo2026\",\"db\":{\"items\":[{\"id\":\"1ccbdfd6-a1e2-4fce-8f3e-021538d30e91\",\"name\":\"Cable HDMI 3 m\",\"category\":\"Informática\",\"code\":\"IN-005\",\"subcode\":\"\",\"location\":\"Sala de informática\",\"stock\":9,\"stockMinimum\":3,\"amount\":6500,\"notes\":\"\",\"createdAt\":\"2026-05-09T15:54:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"306b8a1d-c98c-4b27-bd42-1ffa5c4fff61\",\"name\":\"Pendrive 32 GB\",\"category\":\"Informática\",\"code\":\"IN-004\",\"subcode\":\"\",\"location\":\"Sala de informática\",\"stock\":14,\"stockMinimum\":5,\"amount\":8900,\"notes\":\"\",\"createdAt\":\"2026-05-09T11:54:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"f195c026-3c2c-4524-b343-431b2689f44f\",\"name\":\"Mouse USB\",\"category\":\"Informática\",\"code\":\"IN-003\",\"subcode\":\"\",\"location\":\"Sala de informática\",\"stock\":19,\"stockMinimum\":5,\"amount\":7800,\"notes\":\"\",\"createdAt\":\"2026-05-09T20:54:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"7dcc7465-a15c-4218-a8d0-e8f6dd1e5d34\",\"name\":\"Proyector multimedia\",\"category\":\"Informática\",\"code\":\"IN-002\",\"subcode\":\"\",\"location\":\"Sala de informática\",\"stock\":0,\"stockMinimum\":1,\"amount\":410000,\"notes\":\"\",\"createdAt\":\"2026-05-09T20:14:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"bb3176f9-4661-4333-83e4-4a87dc866919\",\"name\":\"Notebook 14\\\"\",\"category\":\"Informática\",\"code\":\"IN-001\",\"subcode\":\"\",\"location\":\"Sala de informática\",\"stock\":10,\"stockMinimum\":2,\"amount\":720000,\"notes\":\"\",\"createdAt\":\"2026-05-09T20:05:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"5e860a7b-2c6b-48f8-bcb2-41c9535e35ba\",\"name\":\"Osciloscopio digital 2 canales\",\"category\":\"Electrónica\",\"code\":\"EL-005\",\"subcode\":\"\",\"location\":\"Laboratorio de electrónica\",\"stock\":1,\"stockMinimum\":1,\"amount\":480000,\"notes\":\"\",\"createdAt\":\"2026-05-09T20:12:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"c396c76b-6ffe-4620-8e44-d370cc7f8556\",\"name\":\"Kit Arduino Uno\",\"category\":\"Electrónica\",\"code\":\"EL-004\",\"subcode\":\"\",\"location\":\"Laboratorio de electrónica\",\"stock\":18,\"stockMinimum\":4,\"amount\":39444.4444,\"notes\":\"\",\"createdAt\":\"2026-05-09T13:56:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":41000,\"lastPurchaseAt\":\"2026-09-15T15:34:06.000Z\",\"lastPurchaseSupplier\":\"Electro Insumos Andinos\",\"lastPurchaseInvoice\":\"B-0002-00004518\"},{\"id\":\"a8a17ccb-6327-47b0-9460-ac29e1ad9ba9\",\"name\":\"Soldador tipo lápiz 40 W\",\"category\":\"Electrónica\",\"code\":\"EL-003\",\"subcode\":\"\",\"location\":\"Laboratorio de electrónica\",\"stock\":16,\"stockMinimum\":4,\"amount\":14500,\"notes\":\"\",\"createdAt\":\"2026-05-09T13:59:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"3c573d34-074c-4514-a1ae-d90e1d9e67d3\",\"name\":\"Fuente de laboratorio 0-30 V\",\"category\":\"Electrónica\",\"code\":\"EL-002\",\"subcode\":\"\",\"location\":\"Laboratorio de electrónica\",\"stock\":7,\"stockMinimum\":2,\"amount\":129000,\"notes\":\"\",\"createdAt\":\"2026-05-09T17:26:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"e3966f1c-15bb-4317-9441-f177663b8026\",\"name\":\"Protoboard 830 puntos\",\"category\":\"Electrónica\",\"code\":\"EL-001\",\"subcode\":\"\",\"location\":\"Laboratorio de electrónica\",\"stock\":29,\"stockMinimum\":6,\"amount\":6755.1724,\"notes\":\"\",\"createdAt\":\"2026-05-09T11:44:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":6480,\"lastPurchaseAt\":\"2026-09-15T15:34:06.000Z\",\"lastPurchaseSupplier\":\"Electro Insumos Andinos\",\"lastPurchaseInvoice\":\"B-0002-00004518\"},{\"id\":\"77d08dc1-0f3a-40d6-8044-dc9e45719ec3\",\"name\":\"Mecha HSS 6 mm\",\"category\":\"Consumibles\",\"code\":\"CO-006\",\"subcode\":\"\",\"location\":\"Depósito de consumibles\",\"stock\":46,\"stockMinimum\":12,\"amount\":1986.9565,\"notes\":\"\",\"createdAt\":\"2026-05-09T11:31:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":2100,\"lastPurchaseAt\":\"2026-08-26T14:51:09.000Z\",\"lastPurchaseSupplier\":\"Distribuidora Técnica del Norte SA\",\"lastPurchaseInvoice\":\"A-0012-00031002\"},{\"id\":\"68b2a016-3cd5-49e6-b2cb-d3907d8756a1\",\"name\":\"Lija al agua grano 220\",\"category\":\"Consumibles\",\"code\":\"CO-005\",\"subcode\":\"\",\"location\":\"Depósito de consumibles\",\"stock\":63,\"stockMinimum\":30,\"amount\":650,\"notes\":\"\",\"createdAt\":\"2026-05-09T13:34:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"063a365a-11ed-4766-8373-178977d92402\",\"name\":\"Estaño 60/40 (rollo 250 g)\",\"category\":\"Consumibles\",\"code\":\"CO-004\",\"subcode\":\"\",\"location\":\"Depósito de consumibles\",\"stock\":3,\"stockMinimum\":4,\"amount\":18500,\"notes\":\"\",\"createdAt\":\"2026-05-09T20:19:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"1e9fb983-2215-499f-8034-c220699c0f1a\",\"name\":\"Cinta aisladora\",\"category\":\"Consumibles\",\"code\":\"CO-003\",\"subcode\":\"\",\"location\":\"Depósito de consumibles\",\"stock\":57,\"stockMinimum\":15,\"amount\":1002.6316,\"notes\":\"\",\"createdAt\":\"2026-05-09T19:25:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":1050,\"lastPurchaseAt\":\"2026-10-03T14:54:10.000Z\",\"lastPurchaseSupplier\":\"Ferretería El Tornillo SRL\",\"lastPurchaseInvoice\":\"A-0003-00012390\"},{\"id\":\"83741bb8-42c4-48bd-94f1-54e4ba9022a3\",\"name\":\"Electrodo 2,5 mm (kg)\",\"category\":\"Consumibles\",\"code\":\"CO-002\",\"subcode\":\"\",\"location\":\"Depósito de consumibles\",\"stock\":25,\"stockMinimum\":8,\"amount\":9960,\"notes\":\"\",\"createdAt\":\"2026-05-09T18:52:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":10200,\"lastPurchaseAt\":\"2026-07-15T15:13:03.000Z\",\"lastPurchaseSupplier\":\"Ferretería El Tornillo SRL\",\"lastPurchaseInvoice\":\"A-0003-00012045\"},{\"id\":\"13fd7aa0-229b-4f79-9174-a513c2078567\",\"name\":\"Disco de corte 115 mm\",\"category\":\"Consumibles\",\"code\":\"CO-001\",\"subcode\":\"\",\"location\":\"Depósito de consumibles\",\"stock\":108,\"stockMinimum\":20,\"amount\":1438.4259,\"notes\":\"\",\"createdAt\":\"2026-05-09T14:53:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":1425,\"lastPurchaseAt\":\"2026-07-15T15:13:03.000Z\",\"lastPurchaseSupplier\":\"Ferretería El Tornillo SRL\",\"lastPurchaseInvoice\":\"A-0003-00012045\"},{\"id\":\"a71f2741-fe0e-4786-a954-cbe960866894\",\"name\":\"Delantal de cuero\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-005\",\"subcode\":\"\",\"location\":\"Armario de seguridad\",\"stock\":7,\"stockMinimum\":3,\"amount\":22242.8571,\"notes\":\"\",\"createdAt\":\"2026-05-09T18:24:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":22800,\"lastPurchaseAt\":\"2026-08-01T14:21:08.000Z\",\"lastPurchaseSupplier\":\"Seguridad Industrial Puna\",\"lastPurchaseInvoice\":\"A-0001-00007781\"},{\"id\":\"19d54b82-5b53-43ea-9bb5-3d22600bced9\",\"name\":\"Careta de soldar fotosensible\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-004\",\"subcode\":\"\",\"location\":\"Armario de seguridad\",\"stock\":1,\"stockMinimum\":2,\"amount\":47000,\"notes\":\"\",\"createdAt\":\"2026-05-09T11:13:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"615cec83-33c2-4842-bfe9-a112ba4223d3\",\"name\":\"Protector auditivo\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-003\",\"subcode\":\"\",\"location\":\"Armario de seguridad\",\"stock\":11,\"stockMinimum\":6,\"amount\":6318.1818,\"notes\":\"\",\"createdAt\":\"2026-05-09T19:27:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":6400,\"lastPurchaseAt\":\"2026-08-01T14:21:08.000Z\",\"lastPurchaseSupplier\":\"Seguridad Industrial Puna\",\"lastPurchaseInvoice\":\"A-0001-00007781\"},{\"id\":\"2bf152f3-6db0-4ca1-9c34-30b141464d7d\",\"name\":\"Guantes de descarne\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-002\",\"subcode\":\"\",\"location\":\"Armario de seguridad\",\"stock\":29,\"stockMinimum\":10,\"amount\":5282.7586,\"notes\":\"\",\"createdAt\":\"2026-05-09T13:00:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":5400,\"lastPurchaseAt\":\"2026-07-15T15:13:03.000Z\",\"lastPurchaseSupplier\":\"Ferretería El Tornillo SRL\",\"lastPurchaseInvoice\":\"A-0003-00012045\"},{\"id\":\"0b37eef5-1e99-49f1-885d-451175b0a403\",\"name\":\"Antiparras de seguridad\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-001\",\"subcode\":\"\",\"location\":\"Armario de seguridad\",\"stock\":21,\"stockMinimum\":10,\"amount\":3900,\"notes\":\"\",\"createdAt\":\"2026-05-09T16:06:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"c1ed19ef-0271-4df9-bfd8-7c610201a80c\",\"name\":\"Nivel de burbuja 60 cm\",\"category\":\"Instrumentos de medición\",\"code\":\"IM-005\",\"subcode\":\"\",\"location\":\"Estantería A1\",\"stock\":9,\"stockMinimum\":2,\"amount\":9900,\"notes\":\"\",\"createdAt\":\"2026-05-09T17:50:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"226b1799-b389-4659-be09-80edefd4237f\",\"name\":\"Cinta métrica 5 m\",\"category\":\"Instrumentos de medición\",\"code\":\"IM-004\",\"subcode\":\"\",\"location\":\"Estantería A1\",\"stock\":18,\"stockMinimum\":4,\"amount\":6800,\"notes\":\"\",\"createdAt\":\"2026-05-09T18:20:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"67839ef2-412d-4bb7-adbb-ab2b73103282\",\"name\":\"Pinza amperométrica\",\"category\":\"Instrumentos de medición\",\"code\":\"IM-003\",\"subcode\":\"\",\"location\":\"Laboratorio de electrónica\",\"stock\":2,\"stockMinimum\":2,\"amount\":61000,\"notes\":\"\",\"createdAt\":\"2026-05-09T11:22:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"08929418-a2ed-4c71-9088-eadcaeb8783c\",\"name\":\"Calibre digital 150 mm\",\"category\":\"Instrumentos de medición\",\"code\":\"IM-002\",\"subcode\":\"\",\"location\":\"Estantería A1\",\"stock\":12,\"stockMinimum\":3,\"amount\":35216.6667,\"notes\":\"\",\"createdAt\":\"2026-05-09T18:28:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":36800,\"lastPurchaseAt\":\"2026-10-26T14:42:11.000Z\",\"lastPurchaseSupplier\":\"Distribuidora Técnica del Norte SA\",\"lastPurchaseInvoice\":\"A-0012-00031577\"},{\"id\":\"a691c6db-962f-4ccc-865c-622ce3284ed3\",\"name\":\"Multímetro digital\",\"category\":\"Instrumentos de medición\",\"code\":\"IM-001\",\"subcode\":\"\",\"location\":\"Laboratorio de electrónica\",\"stock\":16,\"stockMinimum\":4,\"amount\":28500,\"notes\":\"\",\"createdAt\":\"2026-05-09T14:43:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"86566d4b-2150-468b-be67-67bc9921860c\",\"name\":\"Pistola de calor\",\"category\":\"Herramientas eléctricas\",\"code\":\"HE-005\",\"subcode\":\"\",\"location\":\"Estantería A2\",\"stock\":4,\"stockMinimum\":1,\"amount\":54000,\"notes\":\"\",\"createdAt\":\"2026-05-09T11:58:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"8f796bf9-4bec-4b01-b416-6960cde93c6d\",\"name\":\"Soldadora inverter 200 A\",\"category\":\"Herramientas eléctricas\",\"code\":\"HE-004\",\"subcode\":\"\",\"location\":\"Estantería A2\",\"stock\":1,\"stockMinimum\":1,\"amount\":265000,\"notes\":\"\",\"createdAt\":\"2026-05-09T16:20:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"f52787db-468a-49b4-beb1-d8b07be34fdb\",\"name\":\"Atornillador inalámbrico 12 V\",\"category\":\"Herramientas eléctricas\",\"code\":\"HE-003\",\"subcode\":\"\",\"location\":\"Estantería A2\",\"stock\":6,\"stockMinimum\":2,\"amount\":98000,\"notes\":\"\",\"createdAt\":\"2026-05-09T11:56:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"6ae5fb73-ca3a-4acd-a6d0-5425302f593d\",\"name\":\"Amoladora angular 115 mm\",\"category\":\"Herramientas eléctricas\",\"code\":\"HE-002\",\"subcode\":\"\",\"location\":\"Estantería A2\",\"stock\":9,\"stockMinimum\":2,\"amount\":76500,\"notes\":\"\",\"createdAt\":\"2026-05-09T17:13:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"71f2935f-ec19-4a8b-85cf-8f053a1999f8\",\"name\":\"Taladro percutor 650 W\",\"category\":\"Herramientas eléctricas\",\"code\":\"HE-001\",\"subcode\":\"\",\"location\":\"Estantería A2\",\"stock\":9,\"stockMinimum\":2,\"amount\":89777.7778,\"notes\":\"\",\"createdAt\":\"2026-05-09T20:14:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":92500,\"lastPurchaseAt\":\"2026-08-26T14:51:09.000Z\",\"lastPurchaseSupplier\":\"Distribuidora Técnica del Norte SA\",\"lastPurchaseInvoice\":\"A-0012-00031002\"},{\"id\":\"855d0a92-e6e2-4f8e-940e-157f3c3a712a\",\"name\":\"Arco de sierra\",\"category\":\"Herramientas manuales\",\"code\":\"HM-007\",\"subcode\":\"\",\"location\":\"Estantería A1\",\"stock\":11,\"stockMinimum\":3,\"amount\":11200,\"notes\":\"\",\"createdAt\":\"2026-05-09T19:28:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"22b69bce-a9e5-4a88-8ae9-fad3898a99a3\",\"name\":\"Llave francesa 10\\\"\",\"category\":\"Herramientas manuales\",\"code\":\"HM-006\",\"subcode\":\"\",\"location\":\"Estantería A1\",\"stock\":9,\"stockMinimum\":2,\"amount\":15400,\"notes\":\"\",\"createdAt\":\"2026-05-09T13:32:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"ea0f34fe-5205-4cbd-920c-545986f23568\",\"name\":\"Pinza universal 8\\\"\",\"category\":\"Herramientas manuales\",\"code\":\"HM-005\",\"subcode\":\"\",\"location\":\"Estantería A1\",\"stock\":14,\"stockMinimum\":4,\"amount\":9800,\"notes\":\"\",\"createdAt\":\"2026-05-09T11:33:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"1ca5636d-9827-4170-88bb-8438c2b07110\",\"name\":\"Martillo de bola 500 g\",\"category\":\"Herramientas manuales\",\"code\":\"HM-004\",\"subcode\":\"\",\"location\":\"Estantería A1\",\"stock\":12,\"stockMinimum\":3,\"amount\":12900,\"notes\":\"\",\"createdAt\":\"2026-05-09T13:17:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"27d00d65-b718-41d2-9f69-b7d8434e5c64\",\"name\":\"Destornillador Phillips PH2\",\"category\":\"Herramientas manuales\",\"code\":\"HM-003\",\"subcode\":\"\",\"location\":\"Estantería A1\",\"stock\":24,\"stockMinimum\":5,\"amount\":4400,\"notes\":\"\",\"createdAt\":\"2026-05-09T17:30:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":4700,\"lastPurchaseAt\":\"2026-10-03T14:54:10.000Z\",\"lastPurchaseSupplier\":\"Ferretería El Tornillo SRL\",\"lastPurchaseInvoice\":\"A-0003-00012390\"},{\"id\":\"2d49c52c-fff9-464e-af0c-90ce44465049\",\"name\":\"Destornillador plano 6 mm\",\"category\":\"Herramientas manuales\",\"code\":\"HM-002\",\"subcode\":\"\",\"location\":\"Estantería A1\",\"stock\":23,\"stockMinimum\":5,\"amount\":4304.3478,\"notes\":\"\",\"createdAt\":\"2026-05-09T15:58:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":4600,\"lastPurchaseAt\":\"2026-10-03T14:54:10.000Z\",\"lastPurchaseSupplier\":\"Ferretería El Tornillo SRL\",\"lastPurchaseInvoice\":\"A-0003-00012390\"},{\"id\":\"7fd36ecf-a841-4d59-912d-002293d1a1d3\",\"name\":\"Juego de llaves combinadas 6-22 mm\",\"category\":\"Herramientas manuales\",\"code\":\"HM-001\",\"subcode\":\"\",\"location\":\"Estantería A1\",\"stock\":10,\"stockMinimum\":2,\"amount\":38500,\"notes\":\"\",\"createdAt\":\"2026-05-09T19:37:00.000Z\",\"createdBy\":\"Jorge Medina\"}],\"loans\":[{\"id\":\"5cfccf11-95fa-4136-8edb-6385cdf98dda\",\"itemId\":\"19d54b82-5b53-43ea-9bb5-3d22600bced9\",\"responsibleId\":\"870cc513-2a46-4f6d-b544-f820ff344241\",\"borrower\":\"Santiago Herrera\",\"department\":\"4° 2da\",\"quantity\":1,\"dueDate\":\"2026-11-02\",\"observation\":\"Clase de laboratorio\",\"createdAt\":\"2026-11-03T13:13:01.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"d07849da-c84c-4312-83f5-0586d54ae648\",\"itemId\":\"2bf152f3-6db0-4ca1-9c34-30b141464d7d\",\"responsibleId\":\"47cace58-682d-44df-9dc2-e6dec6e138b4\",\"borrower\":\"Lautaro Gutiérrez\",\"department\":\"5° 2da\",\"quantity\":1,\"dueDate\":\"2026-11-13\",\"observation\":\"Clase de laboratorio\",\"createdAt\":\"2026-11-02T15:09:48.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"f52ffbcd-b326-4dfc-8f8a-ca488041da2c\",\"itemId\":\"7dcc7465-a15c-4218-a8d0-e8f6dd1e5d34\",\"responsibleId\":\"f64bce54-01fa-4f70-ba23-c6236451e091\",\"borrower\":\"Felipe Morales\",\"department\":\"3° 2da\",\"quantity\":1,\"dueDate\":\"2026-11-08\",\"observation\":\"\",\"createdAt\":\"2026-11-02T14:55:49.000Z\",\"createdBy\":\"Lucía Romero\"},{\"id\":\"af8ee02a-913e-4e09-bcb6-400b386dae14\",\"itemId\":\"f52787db-468a-49b4-beb1-d8b07be34fdb\",\"responsibleId\":\"7779849d-8881-4195-9cf6-ab924cae1d8d\",\"borrower\":\"Abril Quispe\",\"department\":\"4° 3ra\",\"quantity\":1,\"dueDate\":\"2026-11-07\",\"observation\":\"\",\"createdAt\":\"2026-11-02T14:03:47.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"a110e340-cd2e-4276-91ab-29c44233003f\",\"itemId\":\"306b8a1d-c98c-4b27-bd42-1ffa5c4fff61\",\"responsibleId\":\"230564cd-fb61-4f67-b296-dfa763fb3aa8\",\"borrower\":\"Lucía Álvarez\",\"department\":\"5° 2da\",\"quantity\":1,\"dueDate\":\"2026-11-11\",\"observation\":\"\",\"createdAt\":\"2026-10-30T14:18:44.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"c55f5574-bf9c-4758-8f25-0ae7bdaffd61\",\"itemId\":\"615cec83-33c2-4842-bfe9-a112ba4223d3\",\"responsibleId\":\"a36c761b-1564-4348-a698-b32d4965ec09\",\"borrower\":\"Emma Suárez\",\"department\":\"3° 1ra\",\"quantity\":3,\"dueDate\":\"2026-11-06\",\"observation\":\"Práctica de taller\",\"createdAt\":\"2026-10-30T12:37:43.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"27465f11-f8d7-4eac-8a6d-d52de8a0cf08\",\"itemId\":\"1ccbdfd6-a1e2-4fce-8f3e-021538d30e91\",\"responsibleId\":\"c744c4e8-f00c-43a9-a85f-711638a73fe2\",\"borrower\":\"Ignacio Herrera\",\"department\":\"6° 2da\",\"quantity\":1,\"dueDate\":\"2026-10-29\",\"observation\":\"Trabajo final\",\"createdAt\":\"2026-10-30T11:19:45.000Z\",\"createdBy\":\"Lucía Romero\"},{\"id\":\"cd908c2d-0c1e-4b94-9ba5-004821e77c6d\",\"itemId\":\"86566d4b-2150-468b-be67-67bc9921860c\",\"responsibleId\":\"c9af0504-3854-44fe-9c1b-adb79c4d2f00\",\"borrower\":\"Tomás Flores\",\"department\":\"7° 1ra\",\"quantity\":1,\"dueDate\":\"2026-11-04\",\"observation\":\"\",\"createdAt\":\"2026-10-29T12:07:42.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"b890a652-0e56-4242-8c70-d1b859bcd842\",\"itemId\":\"306b8a1d-c98c-4b27-bd42-1ffa5c4fff61\",\"responsibleId\":\"3d22736b-d646-492c-95ee-d087951f5f78\",\"borrower\":\"Emma Chávez\",\"department\":\"4° 3ra\",\"quantity\":1,\"dueDate\":\"2026-10-31\",\"observation\":\"\",\"createdAt\":\"2026-10-28T12:06:39.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"b4b29746-3aad-4811-b193-80a6f001b1ea\",\"itemId\":\"226b1799-b389-4659-be09-80edefd4237f\",\"responsibleId\":\"4c5debdd-7e93-4694-a703-963d74d4665d\",\"borrower\":\"Tomás Chávez\",\"department\":\"4° 1ra\",\"quantity\":1,\"dueDate\":\"2026-11-09\",\"observation\":\"\",\"createdAt\":\"2026-10-28T11:03:38.000Z\",\"createdBy\":\"Lucía Romero\"},{\"id\":\"300fefac-e7ee-408e-8bfe-f1473786b498\",\"itemId\":\"2d49c52c-fff9-464e-af0c-90ce44465049\",\"responsibleId\":\"687911d3-673a-4497-81b9-fe086efdaab6\",\"borrower\":\"Agustina Quispe\",\"department\":\"3° 2da\",\"quantity\":2,\"dueDate\":\"2026-11-09\",\"observation\":\"Práctica de taller\",\"createdAt\":\"2026-10-27T15:36:32.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"09bb389a-b71e-422d-a566-c6165f92c152\",\"itemId\":\"71f2935f-ec19-4a8b-85cf-8f053a1999f8\",\"responsibleId\":\"a36c761b-1564-4348-a698-b32d4965ec09\",\"borrower\":\"Emma Suárez\",\"department\":\"3° 1ra\",\"quantity\":1,\"dueDate\":\"2026-11-05\",\"observation\":\"Práctica de taller\",\"createdAt\":\"2026-10-27T14:50:33.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"4e547c77-4b38-4b10-b2bb-33cdf8dd8cd2\",\"itemId\":\"f52787db-468a-49b4-beb1-d8b07be34fdb\",\"responsibleId\":\"7779849d-8881-4195-9cf6-ab924cae1d8d\",\"borrower\":\"Abril Quispe\",\"department\":\"4° 3ra\",\"quantity\":1,\"dueDate\":\"2026-10-26\",\"observation\":\"Trabajo final\",\"createdAt\":\"2026-10-23T12:53:28.000Z\",\"createdBy\":\"Lucía Romero\"},{\"id\":\"b5ecc2f0-c179-4ca9-a461-aa6ab27f5ec3\",\"itemId\":\"86566d4b-2150-468b-be67-67bc9921860c\",\"responsibleId\":\"ef4b2426-1dce-4151-a9b1-11c0b79611ec\",\"borrower\":\"Felipe Martínez\",\"department\":\"4° 1ra\",\"quantity\":1,\"dueDate\":\"2026-11-05\",\"observation\":\"Clase de laboratorio\",\"createdAt\":\"2026-10-21T14:41:24.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"dc07c406-e2d0-434e-937d-4b3cbede7c2e\",\"itemId\":\"e3966f1c-15bb-4317-9441-f177663b8026\",\"responsibleId\":\"5a27a058-75a6-4fd9-a9df-144ccbab185a\",\"borrower\":\"Catalina Torres\",\"department\":\"7° 2da\",\"quantity\":1,\"dueDate\":\"2026-11-13\",\"observation\":\"\",\"createdAt\":\"2026-10-19T13:17:21.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"b297e9a8-daa6-493c-a483-52e11935b579\",\"itemId\":\"3c573d34-074c-4514-a1ae-d90e1d9e67d3\",\"responsibleId\":\"c80c66a1-4572-4bf9-a290-9cee825a121b\",\"borrower\":\"Raúl Villca\",\"department\":\"Docentes\",\"quantity\":1,\"dueDate\":\"2026-11-08\",\"observation\":\"Clase de laboratorio\",\"createdAt\":\"2026-10-15T13:40:12.000Z\",\"createdBy\":\"Jorge Medina\"}],\"activity\":[{\"id\":\"d659d27f-3776-43c1-9e96-b1ff432e34c3\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Careta de soldar fotosensible para Santiago Herrera. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-11-03T13:13:01.000Z\"},{\"id\":\"3c2ea447-b735-4988-bcd5-cb43b9f72f0a\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Guantes de descarne para Lautaro Gutiérrez. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-11-02T15:09:48.000Z\"},{\"id\":\"60ea0fb4-75f6-480b-ba40-9190e93da19c\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Proyector multimedia para Felipe Morales.\",\"createdAt\":\"2026-11-02T14:55:49.000Z\"},{\"id\":\"1acac2d7-cb2f-48f1-bf4b-182b1cb63f6f\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Atornillador inalámbrico 12 V para Abril Quispe.\",\"createdAt\":\"2026-11-02T14:03:47.000Z\"},{\"id\":\"68a6d6ba-8afb-47df-a344-821290ffec4a\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Electrodo 2,5 mm (kg) para Prof. Natalia Burgos (2 unidad(es)).\",\"createdAt\":\"2026-11-02T13:31:50.000Z\"},{\"id\":\"ed25ea21-acbe-4871-87e8-fd0601ed0aa5\",\"type\":\"purchase_request_created\",\"message\":\"Jorge Medina generó un pedido de compra con 3 material(es). Observación: Pedido para el taller de 4° año.\",\"createdAt\":\"2026-10-31T13:47:08.000Z\"},{\"id\":\"8454c273-41c7-42e7-9b12-a4cec5de0597\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Mecha HSS 6 mm para Emma Flores (4 unidad(es)).\",\"createdAt\":\"2026-10-30T14:20:46.000Z\"},{\"id\":\"b10dbc61-65f5-4346-9ba4-9d6f0bef7ac3\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pendrive 32 GB para Lucía Álvarez.\",\"createdAt\":\"2026-10-30T14:18:44.000Z\"},{\"id\":\"7e4030d0-af2f-4139-818a-2253cf8a4e1d\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Protector auditivo para Emma Suárez. Observación: Práctica de taller.\",\"createdAt\":\"2026-10-30T12:37:43.000Z\"},{\"id\":\"3472c84c-da4e-4cb9-850a-948813d0acf1\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Cable HDMI 3 m para Ignacio Herrera. Observación: Trabajo final.\",\"createdAt\":\"2026-10-30T11:19:45.000Z\"},{\"id\":\"32dc610e-0023-4159-8548-665727b32e1e\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Amoladora angular 115 mm de Ing. Gustavo Tolaba (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-10-29T20:22:41.000Z\"},{\"id\":\"32792086-42fe-4ce3-9056-87c520da5c18\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pistola de calor para Tomás Flores.\",\"createdAt\":\"2026-10-29T12:07:42.000Z\"},{\"id\":\"1f05899c-2351-4917-a106-bc552f65d91a\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Mouse USB de Lucía Álvarez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-10-28T18:08:36.000Z\"},{\"id\":\"e19dea89-dc91-4f3a-92f3-70cb3c3b8747\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Llave francesa 10\\\" de Camila Quispe (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-10-28T17:56:37.000Z\"},{\"id\":\"442da807-a331-4178-88bb-d61db59d8282\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pendrive 32 GB para Emma Chávez.\",\"createdAt\":\"2026-10-28T12:06:39.000Z\"},{\"id\":\"848e2bfe-dcf5-44f8-aee3-9c162300faf4\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Amoladora angular 115 mm para Ing. Gustavo Tolaba. Observación: Trabajo final.\",\"createdAt\":\"2026-10-28T11:48:40.000Z\"},{\"id\":\"d5c2699d-76c2-41eb-a319-0785f08a5d44\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Cinta métrica 5 m para Tomás Chávez.\",\"createdAt\":\"2026-10-28T11:03:38.000Z\"},{\"id\":\"7f494994-26f8-4453-b3fc-295a07fe6931\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Destornillador plano 6 mm para Agustina Quispe. Observación: Práctica de taller.\",\"createdAt\":\"2026-10-27T15:36:32.000Z\"},{\"id\":\"5cb780a9-db80-455c-94ce-5e90d28ad1a8\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Taladro percutor 650 W para Emma Suárez. Observación: Práctica de taller.\",\"createdAt\":\"2026-10-27T14:50:33.000Z\"},{\"id\":\"aac7ff0a-f3e8-4b8b-8f7f-50d6d7a11a0a\",\"type\":\"stock_entry_created\",\"message\":\"Jorge Medina registró un ingreso por donacion de Cinta métrica 5 m (2). Donante: Ex alumnos promoción 2015. Observación: Donación registrada para la demo.\",\"createdAt\":\"2026-10-27T13:59:35.000Z\"},{\"id\":\"11f84c57-9578-4c9c-8b02-1b264cf330d6\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Cinta aisladora para Lucía Álvarez (2 unidad(es)). Detalle: Mantenimiento.\",\"createdAt\":\"2026-10-27T13:41:34.000Z\"},{\"id\":\"f881c590-ead6-4259-9737-10888ff564e1\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Cable HDMI 3 m de Tomás Chávez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-10-26T18:18:31.000Z\"},{\"id\":\"fd4ae0c0-92df-4fd8-86ef-595373822410\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Llave francesa 10\\\" de Lautaro Gutiérrez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-10-26T17:36:30.000Z\"},{\"id\":\"ee3410da-3465-4f4b-990a-8da47a52fa8a\",\"type\":\"purchase_invoice_created\",\"message\":\"Jorge Medina registró la factura A-0012-00031577 de Distribuidora Técnica del Norte SA (sin pedido): Calibre digital 150 mm (2). Total factura $73600.00. Observación: Compra directa (demo).\",\"createdAt\":\"2026-10-26T14:42:12.000Z\"},{\"id\":\"9ed84b31-4802-4d6a-b143-2d8903cd4210\",\"type\":\"loan_partial_returned\",\"message\":\"Jorge Medina registró una devolución parcial de Llave francesa 10\\\" de Lautaro Gutiérrez (1 unidad(es)). Quedan 1 unidad(es) pendientes. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-10-23T20:26:27.000Z\"},{\"id\":\"57fa169a-4404-426a-a598-2ee10ab87c2b\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Amoladora angular 115 mm de Lucía Álvarez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-10-23T19:49:26.000Z\"},{\"id\":\"1943c23f-8b93-4502-b357-b4844b4eb235\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Protector auditivo para Felipe Morales (2 unidad(es)).\",\"createdAt\":\"2026-10-23T17:26:29.000Z\"},{\"id\":\"0e5f33bb-edd8-4fc2-b43c-eb5d2a43f4c7\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Atornillador inalámbrico 12 V para Abril Quispe. Observación: Trabajo final.\",\"createdAt\":\"2026-10-23T12:53:28.000Z\"},{\"id\":\"a66f4427-1f3a-4eff-867b-a32c885b006c\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Cinta aisladora para Ignacio Herrera (1 unidad(es)). Detalle: Proyecto de 6° año.\",\"createdAt\":\"2026-10-21T19:36:25.000Z\"},{\"id\":\"f8bc67b5-9a2c-4bf2-bd0d-602ce7cfb837\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pistola de calor para Felipe Martínez. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-10-21T14:41:24.000Z\"},{\"id\":\"edfadb86-611d-480e-81e4-68a7ff1102f2\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Llave francesa 10\\\" para Camila Quispe.\",\"createdAt\":\"2026-10-20T14:14:23.000Z\"},{\"id\":\"b0a7eaef-f308-4856-ba49-a778edd6e14e\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Careta de soldar fotosensible de Abril Quispe (3 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-10-19T19:02:19.000Z\"},{\"id\":\"6ab793ed-1f34-481e-ac7b-1e442f735e70\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Llave francesa 10\\\" de Facundo López (2 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-10-19T16:27:18.000Z\"},{\"id\":\"89c8d66f-713e-40d0-95ce-c41dbf2defe4\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Cable HDMI 3 m para Tomás Chávez.\",\"createdAt\":\"2026-10-19T15:19:22.000Z\"},{\"id\":\"85fc28f8-e106-46f6-982a-87d7ffb38959\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Mouse USB para Lucía Álvarez.\",\"createdAt\":\"2026-10-19T14:41:20.000Z\"},{\"id\":\"f81aab4b-5403-43e4-8a97-e8813dc497a4\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Protoboard 830 puntos para Catalina Torres.\",\"createdAt\":\"2026-10-19T13:17:21.000Z\"},{\"id\":\"2749166b-cb35-4d3a-93cd-2d6a4592e079\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Guantes de descarne para Prof. Natalia Burgos (1 unidad(es)).\",\"createdAt\":\"2026-10-16T19:08:17.000Z\"},{\"id\":\"1c2dbf0d-2380-4189-9393-fc70d8629a70\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Antiparras de seguridad de Martina Cruz (2 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-10-16T16:43:15.000Z\"},{\"id\":\"3dffa879-3a5f-4103-b881-d73529100ebf\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Careta de soldar fotosensible para Abril Quispe. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-10-16T12:48:16.000Z\"},{\"id\":\"0b3b5f52-891c-4c8f-8c09-dff3a8cfd407\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Antiparras de seguridad para Martina Cruz. Observación: Práctica de taller.\",\"createdAt\":\"2026-10-15T14:23:14.000Z\"},{\"id\":\"9a68de23-1d1b-4947-b8a6-4432ad106942\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Fuente de laboratorio 0-30 V para Raúl Villca. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-10-15T13:40:12.000Z\"},{\"id\":\"0b837390-d106-4629-9082-7fc74d3cdcbb\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Llave francesa 10\\\" para Lautaro Gutiérrez. Observación: Trabajo final.\",\"createdAt\":\"2026-10-15T13:34:13.000Z\"},{\"id\":\"a1b5448a-0f7e-40e2-8c74-6631347a6c71\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Cinta métrica 5 m de Lucía Sánchez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-10-14T18:31:10.000Z\"},{\"id\":\"df0894a0-3522-4836-9aa3-fa5537c294eb\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Electrodo 2,5 mm (kg) para Mónica Zerpa (1 unidad(es)). Detalle: Práctica de soldadura.\",\"createdAt\":\"2026-10-14T16:18:11.000Z\"},{\"id\":\"8644d164-d24c-455e-b05b-878449e941a7\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Careta de soldar fotosensible de Lucía Sánchez (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-10-13T18:59:09.000Z\"},{\"id\":\"a852eb0b-5bed-41d5-9f36-d48f8727f7f5\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Careta de soldar fotosensible de Emma Flores (3 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-10-12T19:34:06.000Z\"},{\"id\":\"83eee906-d755-4b8c-a183-ed428b9a539a\",\"type\":\"loan_partial_returned\",\"message\":\"Jorge Medina registró una devolución parcial de Careta de soldar fotosensible de Lucía Sánchez (1 unidad(es)). Quedan 1 unidad(es) pendientes. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-10-12T17:35:07.000Z\"},{\"id\":\"af51a3b0-a87c-437f-9639-23633c53bd74\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Amoladora angular 115 mm para Lucía Álvarez.\",\"createdAt\":\"2026-10-12T11:38:08.000Z\"},{\"id\":\"1078b5fc-ef5f-47e5-820b-39d01fefc329\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Multímetro digital de Ing. Gustavo Tolaba (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-10-09T20:55:01.000Z\"},{\"id\":\"e067357e-6c9d-478d-8fa4-e0cca236cf79\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Amoladora angular 115 mm de Lucía Sánchez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-10-09T20:07:02.000Z\"},{\"id\":\"bef81594-9fbb-4e9f-a461-eb75b4f6a44c\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pinza amperométrica de Arq. Hernán Calizaya (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-10-09T17:14:50.000Z\"},{\"id\":\"04ef0654-2945-4b37-81c0-e1ae0c38140f\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Delantal de cuero de Arq. Hernán Calizaya (2 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-10-09T16:54:03.000Z\"},{\"id\":\"c44a81fe-141f-4f96-8633-9de70cc0e43b\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Llave francesa 10\\\" para Facundo López. Observación: Trabajo final.\",\"createdAt\":\"2026-10-09T15:29:05.000Z\"},{\"id\":\"3b36bd7c-e786-48c6-b926-049dad08517b\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Cinta métrica 5 m para Lucía Sánchez. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-10-09T12:30:04.000Z\"},{\"id\":\"031e890e-67c9-4dc8-83b3-f04d4ea7cc72\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Delantal de cuero para Arq. Hernán Calizaya. Observación: Trabajo final.\",\"createdAt\":\"2026-10-08T14:33:49.000Z\"},{\"id\":\"a5445aca-0fc6-406d-a426-a0b366e88e6d\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Electrodo 2,5 mm (kg) para Mónica Zerpa (2 unidad(es)). Detalle: Mantenimiento.\",\"createdAt\":\"2026-10-07T12:27:48.000Z\"},{\"id\":\"f467c451-ecbd-4839-8547-16dc14173c90\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Lija al agua grano 220 para Arq. Hernán Calizaya (1 unidad(es)).\",\"createdAt\":\"2026-10-06T14:50:47.000Z\"},{\"id\":\"980449df-bc39-46bf-9e93-b9a9f74dd057\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Amoladora angular 115 mm para Lucía Sánchez.\",\"createdAt\":\"2026-10-06T14:36:46.000Z\"},{\"id\":\"e243bea8-e1b6-4ae6-8895-bb05aaa8f96c\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Careta de soldar fotosensible para Lucía Sánchez. Observación: Trabajo final.\",\"createdAt\":\"2026-10-06T14:26:45.000Z\"},{\"id\":\"38b8758b-4eef-4c82-94bc-c7abf636a926\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Soldadora inverter 200 A de Lautaro Cruz (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-10-05T20:19:41.000Z\"},{\"id\":\"bb3fd18e-d51d-4435-914b-0fcecf592d5d\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pistola de calor de Lautaro Cruz (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-10-05T16:46:39.000Z\"},{\"id\":\"b059d3d2-ef16-4349-9514-6b6545c69440\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pistola de calor de Lucía Álvarez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-10-05T16:25:42.000Z\"},{\"id\":\"e710388f-7106-4a9f-9e3b-0db3b62fa627\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Calibre digital 150 mm de Emma Suárez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-10-05T16:02:40.000Z\"},{\"id\":\"1c2d644f-d8d3-4bea-9db3-6ae34c33221e\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Disco de corte 115 mm para Agustina Cruz (4 unidad(es)). Detalle: Práctica de soldadura.\",\"createdAt\":\"2026-10-05T15:35:44.000Z\"},{\"id\":\"8a535f53-8fcb-47f5-a25f-a9978af1ad1f\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Multímetro digital para Ing. Gustavo Tolaba.\",\"createdAt\":\"2026-10-05T11:04:43.000Z\"},{\"id\":\"46b74536-4171-42fa-8e7a-dbec8ddee55e\",\"type\":\"purchase_invoice_created\",\"message\":\"Jorge Medina registró la factura A-0003-00012390 de Ferretería El Tornillo SRL (sin pedido): Destornillador plano 6 mm (6), Destornillador Phillips PH2 (6), Cinta aisladora (30). Total factura $87300.00. Observación: Compra directa (demo).\",\"createdAt\":\"2026-10-03T14:54:11.000Z\"},{\"id\":\"0f890f29-5d94-432e-9b25-f851ec827a5e\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Guantes de descarne de Joaquín Álvarez (2 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-10-02T17:40:36.000Z\"},{\"id\":\"8e8e12ed-903c-4469-badd-35ee16513a6d\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pistola de calor para Lucía Álvarez.\",\"createdAt\":\"2026-10-02T15:16:37.000Z\"},{\"id\":\"2d140be9-ecff-4919-b84b-0de4afabf0f6\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pinza amperométrica para Arq. Hernán Calizaya. Observación: Trabajo final.\",\"createdAt\":\"2026-10-02T11:09:38.000Z\"},{\"id\":\"13461c68-a03c-4659-8647-ed659e6b5a6e\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Llave francesa 10\\\" de Joaquín Chávez (2 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-10-01T19:05:35.000Z\"},{\"id\":\"496806ee-90d7-4c64-a323-a9eb2d484f57\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Taladro percutor 650 W de Prof. Silvina Rueda (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-10-01T16:28:34.000Z\"},{\"id\":\"a8ee6552-d2df-4065-9e6f-44bb4183cbe7\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pinza amperométrica de Catalina Torres (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-09-29T16:52:31.000Z\"},{\"id\":\"73d26170-d6e3-4b00-8786-be41be3ce731\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Llave francesa 10\\\" para Joaquín Chávez. Observación: Práctica de taller.\",\"createdAt\":\"2026-09-29T13:15:33.000Z\"},{\"id\":\"e401e0c4-a4a3-4aef-ab93-567887da8d98\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Careta de soldar fotosensible para Emma Flores.\",\"createdAt\":\"2026-09-29T12:43:32.000Z\"},{\"id\":\"f58b5286-b08b-4340-9e2e-952db3da51d6\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Destornillador plano 6 mm de Felipe Martínez (2 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-09-28T18:49:27.000Z\"},{\"id\":\"a9b2dea2-69d5-4825-ba4e-682f86ab2d21\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Soldadora inverter 200 A de Emma Chávez (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-09-28T17:54:26.000Z\"},{\"id\":\"c2fd1232-60df-4d47-8b54-56462a529514\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Careta de soldar fotosensible de Joaquín Álvarez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-09-28T17:03:25.000Z\"},{\"id\":\"d2493a7c-33ca-4748-bf08-10c6e5a537f3\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Soldadora inverter 200 A para Lautaro Cruz. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-09-28T15:26:28.000Z\"},{\"id\":\"13568ac0-06ec-42f6-a3db-fcf351e9b5df\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Lija al agua grano 220 para Arq. Hernán Calizaya (7 unidad(es)). Detalle: Práctica de soldadura.\",\"createdAt\":\"2026-09-28T14:27:30.000Z\"},{\"id\":\"45645bad-21a5-4cfe-b64c-100c8cac6b77\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Taladro percutor 650 W para Prof. Silvina Rueda. Observación: Trabajo final.\",\"createdAt\":\"2026-09-28T12:49:29.000Z\"},{\"id\":\"43ad308a-22d1-40d8-a653-8167b0fbc793\",\"type\":\"stock_entry_created\",\"message\":\"Jorge Medina registró un ingreso por donacion de Amoladora angular 115 mm (2). Donante: Cooperadora escolar. Observación: Donación registrada para la demo.\",\"createdAt\":\"2026-09-25T13:32:24.000Z\"},{\"id\":\"ace64a04-fbad-4dcd-bb54-4355dc82cf1b\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Destornillador plano 6 mm para Felipe Martínez.\",\"createdAt\":\"2026-09-25T11:46:23.000Z\"},{\"id\":\"6dd6f1f0-2b20-4758-9954-5aa2b0c55f56\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Calibre digital 150 mm para Emma Suárez.\",\"createdAt\":\"2026-09-25T11:30:21.000Z\"},{\"id\":\"3257ace8-069c-4e55-91a6-881b33ea6e41\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Soldadora inverter 200 A para Emma Chávez. Observación: Práctica de taller.\",\"createdAt\":\"2026-09-25T11:20:22.000Z\"},{\"id\":\"1ea151e8-c5d9-49b6-8ba4-482990d7aa8d\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pendrive 32 GB de Felipe Morales (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-09-24T17:44:19.000Z\"},{\"id\":\"291bc772-7d9b-499b-aa92-72c9e0836615\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Soldador tipo lápiz 40 W de Mónica Zerpa (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-09-24T16:31:18.000Z\"},{\"id\":\"4c325ac7-b2cb-4b62-954a-054ca5a8469f\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Cinta aisladora para Emma Chávez (1 unidad(es)).\",\"createdAt\":\"2026-09-24T15:45:20.000Z\"},{\"id\":\"774e71c0-ab8c-4f5b-8664-a84858f50005\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pistola de calor para Lautaro Cruz.\",\"createdAt\":\"2026-09-23T14:54:16.000Z\"},{\"id\":\"be5622c9-44e6-4b04-8440-e4d0a549aa36\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pendrive 32 GB para Felipe Morales.\",\"createdAt\":\"2026-09-23T14:38:17.000Z\"},{\"id\":\"1b173086-bc56-48be-a84c-5b239187f02d\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Cinta aisladora para Lucía Sánchez (4 unidad(es)). Detalle: Trabajo práctico.\",\"createdAt\":\"2026-09-22T12:59:15.000Z\"},{\"id\":\"f1947e49-85a8-4788-9b3b-5a85e45d22d6\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Calibre digital 150 mm de Felipe Suárez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-09-21T19:29:08.000Z\"},{\"id\":\"df7f39fc-03e5-451c-8ba1-5ecf50bae526\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Mouse USB de Emma Flores (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-09-21T19:26:09.000Z\"},{\"id\":\"c1a66128-dffc-42d5-bf0c-30e661c4e2ce\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Llave francesa 10\\\" de Catalina Torres (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-09-21T16:22:07.000Z\"},{\"id\":\"3b69307e-c31e-4378-be9e-77c84f2659a8\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Juego de llaves combinadas 6-22 mm de Felipe Martínez (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-09-21T16:03:10.000Z\"},{\"id\":\"a9b67ac3-e4b6-4c1d-80e2-bd6292a4bd5f\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pinza amperométrica para Catalina Torres.\",\"createdAt\":\"2026-09-21T15:17:11.000Z\"},{\"id\":\"76f9851c-0420-4ccb-9030-04520211c1a4\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Delantal de cuero para Ing. Ricardo Salinas (1 unidad(es)). Detalle: Práctica de soldadura.\",\"createdAt\":\"2026-09-21T14:19:14.000Z\"},{\"id\":\"68916793-ca97-4f69-94df-9131674b75ae\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Soldador tipo lápiz 40 W para Mónica Zerpa.\",\"createdAt\":\"2026-09-21T14:15:13.000Z\"},{\"id\":\"1fff6e17-99fb-453f-9861-1f28e40de4e9\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Guantes de descarne para Joaquín Álvarez. Observación: Trabajo final.\",\"createdAt\":\"2026-09-21T12:51:12.000Z\"},{\"id\":\"2a05603b-c0fe-47be-ad2f-070210bf0962\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Careta de soldar fotosensible de Facundo López (2 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-09-18T18:47:04.000Z\"},{\"id\":\"b5270015-efcd-4aca-884f-55f02b1b5d78\",\"type\":\"loan_partial_returned\",\"message\":\"Jorge Medina registró una devolución parcial de Llave francesa 10\\\" de Catalina Torres (1 unidad(es)). Quedan 1 unidad(es) pendientes.\",\"createdAt\":\"2026-09-18T17:30:02.000Z\"},{\"id\":\"a15b4223-2505-4232-81a6-dcec30931cf3\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Martillo de bola 500 g de Felipe Suárez (2 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-09-18T17:17:03.000Z\"},{\"id\":\"254fb180-6e7a-4691-847d-f0704678449c\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Careta de soldar fotosensible para Joaquín Álvarez. Observación: Práctica de taller.\",\"createdAt\":\"2026-09-18T14:14:06.000Z\"},{\"id\":\"1f5925db-fe79-43bf-b4b4-ee6d9c388484\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Juego de llaves combinadas 6-22 mm para Felipe Martínez.\",\"createdAt\":\"2026-09-18T13:17:05.000Z\"},{\"id\":\"26e00bfc-b0c9-4aec-b503-ae2ce0974e58\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Antiparras de seguridad de Lautaro Cruz (3 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-09-17T20:26:50.000Z\"},{\"id\":\"578b90b8-6015-4f9a-b5ce-038bb5e8dd47\",\"type\":\"loan_partial_returned\",\"message\":\"Jorge Medina registró una devolución parcial de Careta de soldar fotosensible de Facundo López (1 unidad(es)). Quedan 2 unidad(es) pendientes. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-09-17T16:35:01.000Z\"},{\"id\":\"e16039e2-5a18-4ea4-aac4-a8f6fed1d566\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Kit Arduino Uno de Lautaro Álvarez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-09-16T20:39:46.000Z\"},{\"id\":\"e207a68d-e3ae-4ee4-a41d-63bd59857f31\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Antiparras de seguridad de Mónica Zerpa (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-09-16T20:21:47.000Z\"},{\"id\":\"d7fc442f-1291-4577-a749-58483de5940d\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Guantes de descarne de Camila Quispe (2 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-09-16T18:53:49.000Z\"},{\"id\":\"2704d894-c612-47a2-a868-af1d36fd3b5a\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Protector auditivo de Joaquín Martínez (3 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-09-16T16:02:48.000Z\"},{\"id\":\"e6f9b5b1-9587-4de9-9326-32c528c8fff4\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Cinta aisladora para Lucía Álvarez (4 unidad(es)). Detalle: Trabajo práctico.\",\"createdAt\":\"2026-09-15T19:34:45.000Z\"},{\"id\":\"d1a97cf5-ef9c-4ca3-907c-d2e0a309491b\",\"type\":\"stock_entry_created\",\"message\":\"Jorge Medina registró un ingreso por compra de Kit Arduino Uno (4), Protoboard 830 puntos (10). Proveedor: Electro Insumos Andinos.\",\"createdAt\":\"2026-09-15T15:34:07.000Z\"},{\"id\":\"5723f699-4bf0-4174-a8a1-b05d4ccfffc7\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Careta de soldar fotosensible para Facundo López.\",\"createdAt\":\"2026-09-15T13:32:42.000Z\"},{\"id\":\"daf06663-530b-477f-96c4-b6de427797ff\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Mouse USB para Emma Flores. Observación: Trabajo final.\",\"createdAt\":\"2026-09-15T13:25:44.000Z\"},{\"id\":\"6769a495-0be6-4f82-b106-73e463efa425\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Guantes de descarne para Camila Quispe. Observación: Trabajo final.\",\"createdAt\":\"2026-09-15T12:14:43.000Z\"},{\"id\":\"a23ede57-35ad-4aa5-8a6d-9d4040c72f38\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pendrive 32 GB de Lucía Sánchez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-09-14T20:42:37.000Z\"},{\"id\":\"cdef9474-ad57-4015-b173-458979f28954\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Protector auditivo de Lucía Álvarez (3 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-09-14T20:04:41.000Z\"},{\"id\":\"7e0fe5b7-62b8-4bb3-9b30-5ef4f5f4e08f\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Delantal de cuero de Felipe Suárez (2 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-09-14T17:00:40.000Z\"},{\"id\":\"df9419cd-a0c3-4c7f-a4a8-58a320acdb4b\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Antiparras de seguridad de Santiago Herrera (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-09-14T16:33:39.000Z\"},{\"id\":\"20174b6a-3958-4743-aa08-4abc140a3b96\",\"type\":\"loan_partial_returned\",\"message\":\"Jorge Medina registró una devolución parcial de Antiparras de seguridad de Mónica Zerpa (1 unidad(es)). Quedan 1 unidad(es) pendientes.\",\"createdAt\":\"2026-09-14T16:29:38.000Z\"},{\"id\":\"27a7c3a0-6101-4fb0-b3a0-73a0fab31ed1\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Estaño 60/40 (rollo 250 g) para Felipe Suárez (2 unidad(es)). Detalle: Trabajo práctico.\",\"createdAt\":\"2026-09-11T17:46:36.000Z\"},{\"id\":\"4e3c1a93-f2e3-40c7-bf26-ed4f87caa29b\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Nivel de burbuja 60 cm de Lautaro Álvarez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-09-11T17:37:30.000Z\"},{\"id\":\"9f7a0e84-5933-4282-ac8e-bf878a50ef34\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Destornillador Phillips PH2 de Ing. Ricardo Salinas (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-09-11T16:46:32.000Z\"},{\"id\":\"f437f4e6-bd81-484c-955f-80d8d5ecca0e\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Protector auditivo de Emma Chávez (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-09-11T16:03:31.000Z\"},{\"id\":\"03c77f29-31e8-455d-bbfe-55132dac83b9\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Martillo de bola 500 g para Felipe Suárez.\",\"createdAt\":\"2026-09-11T15:23:34.000Z\"},{\"id\":\"f0e3b369-0522-4cda-a279-b2ff8ec83576\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Protector auditivo para Lucía Álvarez. Observación: Práctica de taller.\",\"createdAt\":\"2026-09-11T15:15:33.000Z\"},{\"id\":\"a3c56758-fbf4-4dca-9f9a-81baddbbe242\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Calibre digital 150 mm para Felipe Suárez.\",\"createdAt\":\"2026-09-11T14:06:35.000Z\"},{\"id\":\"8ffc140a-8cbd-46ee-b961-48fc1b82af67\",\"type\":\"purchase_request_confirmed\",\"message\":\"Jorge Medina confirmó en forma parcial el pedido BC183EC9 con Electro Insumos Andinos: Kit Arduino Uno (6), Protoboard 830 puntos (10). Total factura $310800.00. Observación: Confirmación de la demo.\",\"createdAt\":\"2026-09-10T14:43:06.000Z\"},{\"id\":\"58e6ac16-b5fe-4fb7-b48b-a20e1f400aeb\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Protector auditivo para Joaquín Martínez. Observación: Práctica de taller.\",\"createdAt\":\"2026-09-10T14:39:27.000Z\"},{\"id\":\"45c90d5c-877d-4f4e-9b78-c02ad21646ce\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Delantal de cuero para Felipe Suárez.\",\"createdAt\":\"2026-09-10T13:47:29.000Z\"},{\"id\":\"85f567ba-1710-4e9a-a2f1-f3fe939b7170\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Destornillador Phillips PH2 para Ing. Ricardo Salinas. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-09-10T11:49:28.000Z\"},{\"id\":\"e306bc48-a528-4d7e-93cf-2e5f3e3a10e9\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Careta de soldar fotosensible de Catalina Torres (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-09-09T17:40:23.000Z\"},{\"id\":\"9299c743-47fc-4b2c-9446-a8092eec87a8\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Llave francesa 10\\\" para Catalina Torres. Observación: Trabajo final.\",\"createdAt\":\"2026-09-09T14:44:26.000Z\"},{\"id\":\"64dcb845-16a4-4376-9483-ec29397fca2a\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Antiparras de seguridad para Mónica Zerpa. Observación: Trabajo final.\",\"createdAt\":\"2026-09-09T14:18:24.000Z\"},{\"id\":\"fa0273e9-0ad5-4724-866b-938260a29090\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Antiparras de seguridad para Santiago Herrera.\",\"createdAt\":\"2026-09-09T13:13:25.000Z\"},{\"id\":\"5147e71b-cdf1-43ca-8dc7-917a3b61418d\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Llave francesa 10\\\" de Felipe Morales (3 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-09-08T20:59:20.000Z\"},{\"id\":\"44aa6120-f677-41f9-b21a-17d1a1b528e6\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Kit Arduino Uno para Lautaro Álvarez. Observación: Trabajo final.\",\"createdAt\":\"2026-09-08T15:41:21.000Z\"},{\"id\":\"471390d6-8d2b-4562-8065-8003826a9d9b\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pendrive 32 GB para Lucía Sánchez. Observación: Trabajo final.\",\"createdAt\":\"2026-09-08T12:14:22.000Z\"},{\"id\":\"3e246681-2061-471b-b759-0a07c1018d35\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Destornillador Phillips PH2 de Felipe Morales (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-09-07T20:45:16.000Z\"},{\"id\":\"49f9c17d-c115-4346-a126-21b081670dd6\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Arco de sierra de Felipe Suárez (3 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-09-07T18:26:15.000Z\"},{\"id\":\"ccafbf0b-97a6-46a1-a70f-ab4eb5566455\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Protector auditivo para Emma Chávez.\",\"createdAt\":\"2026-09-07T14:15:18.000Z\"},{\"id\":\"eaa9242b-5296-4690-a25f-2314c809a032\",\"type\":\"stock_entry_created\",\"message\":\"Jorge Medina registró un ingreso por donacion de Cinta métrica 5 m (3). Donante: Empresa local (ficticia). Observación: Donación registrada para la demo.\",\"createdAt\":\"2026-09-07T13:05:19.000Z\"},{\"id\":\"bdcbe556-944f-44f6-a491-9748c9337c50\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Antiparras de seguridad para Lautaro Cruz. Observación: Práctica de taller.\",\"createdAt\":\"2026-09-07T12:21:17.000Z\"},{\"id\":\"f783eddf-b902-4e5b-b397-f7f57119c6ba\",\"type\":\"purchase_request_created\",\"message\":\"Jorge Medina generó un pedido de compra con 3 material(es). Observación: Laboratorio de electrónica · segundo cuatrimestre.\",\"createdAt\":\"2026-09-05T13:41:05.000Z\"},{\"id\":\"a2657bb1-de62-425f-b892-4d29aad08ea7\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Taladro percutor 650 W de Catalina Torres (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-09-04T19:40:13.000Z\"},{\"id\":\"e60fa849-2299-42f6-aad6-3d60de559452\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Guantes de descarne de Facundo López (2 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-09-04T17:03:14.000Z\"},{\"id\":\"eb4003f5-8a5e-4b86-9697-148f587b32da\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Soldador tipo lápiz 40 W de Lucía Martínez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-09-03T20:09:09.000Z\"},{\"id\":\"8e44f48b-b3d0-421b-88ad-f15d65b0fce5\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Martillo de bola 500 g de Thiago Aguirre (3 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-09-03T16:44:10.000Z\"},{\"id\":\"fa0876f6-8ef1-4b1b-a05e-f8476d839ba7\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Llave francesa 10\\\" para Felipe Morales.\",\"createdAt\":\"2026-09-03T14:40:12.000Z\"},{\"id\":\"c8fceb6b-4743-493c-beb2-e9cb7268dae3\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Careta de soldar fotosensible para Catalina Torres.\",\"createdAt\":\"2026-09-03T13:32:11.000Z\"},{\"id\":\"13f8e31c-1267-465b-9743-4057499d2c88\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Nivel de burbuja 60 cm para Lautaro Álvarez.\",\"createdAt\":\"2026-09-02T13:07:07.000Z\"},{\"id\":\"aa7b2cf5-5809-49dc-94c6-1c4c09fc5846\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Destornillador Phillips PH2 para Felipe Morales. Observación: Trabajo final.\",\"createdAt\":\"2026-09-02T11:26:08.000Z\"},{\"id\":\"287e75b6-8ea9-4d09-b3f8-e7eb370431f7\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Protector auditivo de Arq. Hernán Calizaya (3 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-09-01T18:05:06.000Z\"},{\"id\":\"df2f582b-f2f0-4b67-81b1-8be470d1dae0\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Taladro percutor 650 W de Martina Cruz (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-08-31T20:43:03.000Z\"},{\"id\":\"19d6ee2b-8321-4743-917d-d170c15f753a\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pinza amperométrica de Camila Quispe (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-08-31T18:41:04.000Z\"},{\"id\":\"3599b968-fc5c-4a92-8cc0-796fc39947ae\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Delantal de cuero de Lucía Álvarez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-08-31T16:59:02.000Z\"},{\"id\":\"190f961a-b36e-42c9-bab6-d3d6387168f8\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Careta de soldar fotosensible de Joaquín Chávez (2 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-08-31T16:58:01.000Z\"},{\"id\":\"f336cc40-af45-447d-8fa6-57abdb1ed380\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Electrodo 2,5 mm (kg) para Arq. Hernán Calizaya (1 unidad(es)). Detalle: Proyecto de 6° año.\",\"createdAt\":\"2026-08-31T15:17:05.000Z\"},{\"id\":\"5ad457eb-c6ac-405b-a931-a9321b2cd838\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Protector auditivo de Raúl Villca (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-08-28T16:01:47.000Z\"},{\"id\":\"208c6327-5506-47aa-873f-17ffc8f761ef\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Soldador tipo lápiz 40 W para Lucía Martínez.\",\"createdAt\":\"2026-08-28T13:54:49.000Z\"},{\"id\":\"030da0b0-380b-4f0f-9fbd-2275d884307f\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Martillo de bola 500 g para Thiago Aguirre.\",\"createdAt\":\"2026-08-28T12:16:50.000Z\"},{\"id\":\"bd3adbe9-9f8b-43c1-bcde-ece3b83a2ddb\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Guantes de descarne para Facundo López. Observación: Trabajo final.\",\"createdAt\":\"2026-08-28T12:03:48.000Z\"},{\"id\":\"92ddca3e-2353-4abe-91e4-7bd61d4f1640\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Careta de soldar fotosensible de Felipe Morales (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-08-27T20:37:43.000Z\"},{\"id\":\"361c6730-5c65-4187-8085-b75ed5c9f2b9\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Osciloscopio digital 2 canales de Emma Suárez (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-08-27T18:58:45.000Z\"},{\"id\":\"a1c96985-a97f-48d6-bca4-7f052105b04b\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Guantes de descarne de Thiago Aguirre (3 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-08-27T18:35:44.000Z\"},{\"id\":\"be287a92-f8fa-40d9-b3f2-a221d9f6261f\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Electrodo 2,5 mm (kg) para Joaquín Chávez (1 unidad(es)). Detalle: Proyecto de 6° año.\",\"createdAt\":\"2026-08-27T15:40:46.000Z\"},{\"id\":\"43d76910-86f5-4ffe-87c6-d6dea68ad1d0\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Delantal de cuero para Mónica Zerpa (1 unidad(es)).\",\"createdAt\":\"2026-08-26T19:53:42.000Z\"},{\"id\":\"3dcbc36a-1670-4f62-84d6-d5052d584635\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pinza amperométrica de Santiago Herrera (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-08-26T18:44:38.000Z\"},{\"id\":\"349c4851-aedf-439e-96c5-ed47e21063a3\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pistola de calor de Prof. Andrea Choque (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-08-26T16:26:39.000Z\"},{\"id\":\"df7e82da-4c34-429c-8961-8b051d3dab4e\",\"type\":\"purchase_invoice_created\",\"message\":\"Jorge Medina registró la factura A-0012-00031002 de Distribuidora Técnica del Norte SA (sin pedido): Taladro percutor 650 W (2), Mecha HSS 6 mm (20). Total factura $227000.00. Observación: Compra directa (demo).\",\"createdAt\":\"2026-08-26T14:51:10.000Z\"},{\"id\":\"a9df2d79-42eb-4b48-8879-398fea878d88\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Arco de sierra para Felipe Suárez. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-08-26T13:40:41.000Z\"},{\"id\":\"f9498b63-f84e-4d81-be7e-9e91bace5630\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Taladro percutor 650 W para Catalina Torres.\",\"createdAt\":\"2026-08-26T13:15:40.000Z\"},{\"id\":\"d2a132bd-0eff-4518-af74-242abe262085\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Protector auditivo para Arq. Hernán Calizaya.\",\"createdAt\":\"2026-08-25T14:46:35.000Z\"},{\"id\":\"b882e6f9-4a5c-4886-b9f1-2604149f647b\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pinza amperométrica para Camila Quispe. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-08-25T13:02:36.000Z\"},{\"id\":\"2d2d18ec-b45b-4d14-b994-882d93d1d8c8\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Osciloscopio digital 2 canales para Emma Suárez. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-08-25T11:38:37.000Z\"},{\"id\":\"061c8d25-0eed-4684-a086-79c6f0f0f6a7\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Soldador tipo lápiz 40 W de Tomás Chávez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-08-24T19:47:30.000Z\"},{\"id\":\"98ce9b17-c42c-4780-bf59-0cae7b5104c6\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Taladro percutor 650 W de Lautaro Cruz (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-08-24T17:29:31.000Z\"},{\"id\":\"5eea3e86-4d9d-461c-b34c-4da2c521019b\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Protector auditivo para Ing. Gustavo Tolaba (3 unidad(es)). Detalle: Trabajo práctico.\",\"createdAt\":\"2026-08-24T16:19:34.000Z\"},{\"id\":\"eac95d43-a2f3-49c7-b31c-e48fad6534b0\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Guantes de descarne para Thiago Aguirre. Observación: Práctica de taller.\",\"createdAt\":\"2026-08-24T15:30:32.000Z\"},{\"id\":\"94ff0ef2-6cd8-45d1-aaf2-a5684699969a\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Protector auditivo para Raúl Villca.\",\"createdAt\":\"2026-08-24T13:25:33.000Z\"},{\"id\":\"b258714c-b884-49d3-832d-0adf75d5eb94\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Notebook 14\\\" de Catalina Torres (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-08-21T19:19:26.000Z\"},{\"id\":\"d19eaa3e-3770-482a-9c6b-e0a9ed89ea5a\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Taladro percutor 650 W para Martina Cruz. Observación: Práctica de taller.\",\"createdAt\":\"2026-08-21T15:41:28.000Z\"},{\"id\":\"936f31ec-6a5c-4af9-a6c7-3a791ce3cee1\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Careta de soldar fotosensible para Felipe Morales.\",\"createdAt\":\"2026-08-21T14:11:29.000Z\"},{\"id\":\"34d7842f-d910-4b10-9e56-8410dc128cf1\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Delantal de cuero para Lucía Álvarez.\",\"createdAt\":\"2026-08-21T11:07:27.000Z\"},{\"id\":\"62b74e62-d26d-4fe0-93e1-e20a5f167edc\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Multímetro digital de Felipe Martínez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-08-20T16:13:22.000Z\"},{\"id\":\"67e7a811-ebc2-499f-8a08-1c2cdc384d30\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Careta de soldar fotosensible para Joaquín Chávez.\",\"createdAt\":\"2026-08-20T15:31:24.000Z\"},{\"id\":\"78b90cef-b401-4037-a28b-54af3e924170\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Notebook 14\\\" para Catalina Torres.\",\"createdAt\":\"2026-08-20T15:13:25.000Z\"},{\"id\":\"09a915db-9b5a-4f75-9985-30465c5218a7\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Taladro percutor 650 W para Lautaro Cruz.\",\"createdAt\":\"2026-08-20T14:56:23.000Z\"},{\"id\":\"e97399bc-9411-444f-b570-dc79cafb1487\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Protoboard 830 puntos de Facundo López (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-08-19T16:38:20.000Z\"},{\"id\":\"a453838e-8537-4dc4-bf89-f644955dfc9d\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Soldador tipo lápiz 40 W para Tomás Chávez.\",\"createdAt\":\"2026-08-19T12:24:21.000Z\"},{\"id\":\"ad82445c-edcf-408b-8219-12604e462b58\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Estaño 60/40 (rollo 250 g) para Tomás Flores (1 unidad(es)). Detalle: Práctica de soldadura.\",\"createdAt\":\"2026-08-18T17:16:19.000Z\"},{\"id\":\"d5423ce8-a529-43d4-90b4-d2c89929661a\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Pinza amperométrica para Santiago Herrera.\",\"createdAt\":\"2026-08-18T12:27:17.000Z\"},{\"id\":\"058dfe6c-3c25-4f8e-996e-e4041aa2c2b2\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Pistola de calor para Prof. Andrea Choque. Observación: Práctica de taller.\",\"createdAt\":\"2026-08-18T12:19:18.000Z\"},{\"id\":\"2c6bc86f-78df-4c24-868b-7592513985fd\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Notebook 14\\\" de Ing. Ricardo Salinas (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-08-17T20:53:14.000Z\"},{\"id\":\"2081e88d-4870-425d-b8f1-c94c3568aa7b\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Guantes de descarne de Lautaro Cruz (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-08-17T16:51:15.000Z\"},{\"id\":\"c7f2b7b6-c41e-4ceb-9e04-21ccc208b24c\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Estaño 60/40 (rollo 250 g) para Facundo López (4 unidad(es)). Detalle: Mantenimiento.\",\"createdAt\":\"2026-08-17T15:52:16.000Z\"},{\"id\":\"728b759a-d0cd-4a18-9e4f-f2c2cefc1d6e\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Protoboard 830 puntos para Facundo López. Observación: Práctica de taller.\",\"createdAt\":\"2026-08-13T14:48:13.000Z\"},{\"id\":\"0fd4da3f-6734-45b8-ac4f-248267427400\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pinza amperométrica de Joaquín Álvarez (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-08-12T17:07:12.000Z\"},{\"id\":\"a99b8c8a-4b17-4fc6-873a-640c9e93966c\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Multímetro digital para Felipe Martínez.\",\"createdAt\":\"2026-08-11T15:43:10.000Z\"},{\"id\":\"c967e20c-5634-417c-a900-9413f5cf3581\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Guantes de descarne para Lautaro Cruz.\",\"createdAt\":\"2026-08-11T12:44:11.000Z\"},{\"id\":\"e928f8d7-1bc2-4ff3-be22-7692a40d3189\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Soldadora inverter 200 A de Ing. Gustavo Tolaba (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-08-10T20:42:08.000Z\"},{\"id\":\"88e8d83e-49af-4407-912e-593a8b102bc7\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Lija al agua grano 220 para Ing. Ricardo Salinas (10 unidad(es)). Detalle: Proyecto de 6° año.\",\"createdAt\":\"2026-08-10T18:59:09.000Z\"},{\"id\":\"3f6c0efd-5b05-4ce3-8199-e82c89d7ce9a\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Careta de soldar fotosensible de Agustina Quispe (2 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-08-10T17:42:07.000Z\"},{\"id\":\"c88b8c7c-3dd2-431c-add3-c0c96df5e93d\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Delantal de cuero de Lucía Sánchez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-08-10T16:34:06.000Z\"},{\"id\":\"7fd0c039-b8ff-42fb-95fa-20ad7b4ea4ed\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Soldadora inverter 200 A para Ing. Gustavo Tolaba.\",\"createdAt\":\"2026-08-07T15:53:04.000Z\"},{\"id\":\"40bc8712-c531-4830-a7b2-b3f27f3fc8cb\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Notebook 14\\\" para Ing. Ricardo Salinas.\",\"createdAt\":\"2026-08-07T15:06:05.000Z\"},{\"id\":\"9e5c1330-46bf-4a96-803c-af13d9bf1cf7\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Atornillador inalámbrico 12 V de Felipe Suárez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-08-05T18:21:49.000Z\"},{\"id\":\"d474fdb8-10f8-4187-a2fd-91da1ff11a96\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Martillo de bola 500 g de Lautaro Gutiérrez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-08-05T17:43:01.000Z\"},{\"id\":\"c48bc974-aef5-4cc9-8126-eed36246b23d\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Osciloscopio digital 2 canales de Thiago Aguirre (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-08-05T16:40:50.000Z\"},{\"id\":\"15d27f87-6b17-4d55-a2e7-8719165ddc60\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Guantes de descarne para Emma Flores (4 unidad(es)). Detalle: Trabajo práctico.\",\"createdAt\":\"2026-08-05T14:59:03.000Z\"},{\"id\":\"f5b5baed-ab00-4499-99eb-af412d80d07b\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pinza amperométrica para Joaquín Álvarez.\",\"createdAt\":\"2026-08-05T13:55:02.000Z\"},{\"id\":\"26bb6c32-5f9c-4596-ae7c-32074e809b7e\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Antiparras de seguridad de Arq. Hernán Calizaya (2 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-08-04T19:19:47.000Z\"},{\"id\":\"37d5f35d-2f8c-4770-b6f0-af1a7c1f1f82\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Martillo de bola 500 g para Lautaro Gutiérrez.\",\"createdAt\":\"2026-08-04T12:46:48.000Z\"},{\"id\":\"f28db62c-2390-457e-84c5-c884e7dded23\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Estaño 60/40 (rollo 250 g) para Mónica Zerpa (1 unidad(es)). Detalle: Práctica de soldadura.\",\"createdAt\":\"2026-08-03T18:23:46.000Z\"},{\"id\":\"ec2e349c-348a-4a8a-8572-d350a4165e5d\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pendrive 32 GB de Abril Quispe (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-08-03T17:44:44.000Z\"},{\"id\":\"230c1d08-41c4-4e72-9104-fdb07571ce7a\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Careta de soldar fotosensible para Agustina Quispe.\",\"createdAt\":\"2026-08-03T15:13:45.000Z\"},{\"id\":\"df0e8c32-66bf-4cac-93e9-47374c3c79cf\",\"type\":\"purchase_invoice_created\",\"message\":\"Jorge Medina registró la factura A-0001-00007781 de Seguridad Industrial Puna (sin pedido): Protector auditivo (8), Delantal de cuero (4). Total factura $142400.00. Observación: Compra directa (demo).\",\"createdAt\":\"2026-08-01T14:21:09.000Z\"},{\"id\":\"a8afd15d-d39d-463b-b6f7-720694de0544\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Pendrive 32 GB para Abril Quispe. Observación: Trabajo final.\",\"createdAt\":\"2026-07-31T13:18:42.000Z\"},{\"id\":\"15d446bc-65fd-4518-84fa-9c46aded0692\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Osciloscopio digital 2 canales para Thiago Aguirre.\",\"createdAt\":\"2026-07-31T11:54:43.000Z\"},{\"id\":\"3bd3d066-8b4b-452a-aa74-61d70cd7a898\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Arco de sierra de Lautaro Gutiérrez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-07-30T19:40:41.000Z\"},{\"id\":\"1cf5e81c-06cb-44bd-9c79-0775022bf786\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Cinta aisladora para Arq. Hernán Calizaya (4 unidad(es)). Detalle: Trabajo práctico.\",\"createdAt\":\"2026-07-29T13:45:40.000Z\"},{\"id\":\"18e2c855-eb43-4615-8472-f57161d7f089\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Delantal de cuero para Lucía Sánchez.\",\"createdAt\":\"2026-07-29T13:31:37.000Z\"},{\"id\":\"e93b2ec2-3042-44d9-bbeb-5f6533cc97a0\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Atornillador inalámbrico 12 V para Felipe Suárez.\",\"createdAt\":\"2026-07-29T12:38:39.000Z\"},{\"id\":\"4d5f8661-28a1-43b3-9727-d042da64276a\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Antiparras de seguridad para Arq. Hernán Calizaya. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-07-29T12:26:38.000Z\"},{\"id\":\"ec7abcbf-687f-4685-ab87-3accccb5cdbe\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pinza amperométrica de Joaquín Chávez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-07-27T20:56:35.000Z\"},{\"id\":\"8ec0da39-f15c-4cf2-beb7-d1fa9965bff3\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pendrive 32 GB de Joaquín Martínez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-07-27T20:06:30.000Z\"},{\"id\":\"1a687843-4a10-4cea-9730-e7bd420125f2\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Protector auditivo de Tomás Chávez (3 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-07-27T19:54:28.000Z\"},{\"id\":\"5210464d-29ae-4941-a4df-3efaa92a35f4\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Antiparras de seguridad de Prof. Andrea Choque (3 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-07-27T19:44:27.000Z\"},{\"id\":\"8b87886f-65e9-432a-95db-10f15c7d7d39\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Delantal de cuero de Lautaro Álvarez (3 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-07-27T17:46:33.000Z\"},{\"id\":\"3861ea2e-9827-4fdc-b20c-ed522c9f4e8a\",\"type\":\"loan_partial_returned\",\"message\":\"Jorge Medina registró una devolución parcial de Arco de sierra de Lautaro Gutiérrez (1 unidad(es)). Quedan 1 unidad(es) pendientes.\",\"createdAt\":\"2026-07-27T17:02:32.000Z\"},{\"id\":\"0f16ce57-193e-4a74-8ecc-a25b28ffe661\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Amoladora angular 115 mm de Mónica Zerpa (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-07-27T16:48:31.000Z\"},{\"id\":\"a54b3202-fca0-4d37-a07a-f9defa470c02\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Osciloscopio digital 2 canales de Catalina Torres (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-07-27T16:24:34.000Z\"},{\"id\":\"5edb2920-3687-4908-96fb-e129d15b014f\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Osciloscopio digital 2 canales de Catalina Torres (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-07-27T16:09:29.000Z\"},{\"id\":\"8883a6ed-a13e-4751-929a-103a0b869d48\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Kit Arduino Uno de Franco Castro (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-07-27T16:08:36.000Z\"},{\"id\":\"b2f02621-74d1-4f3d-8818-176afd3312fb\",\"type\":\"stock_entry_created\",\"message\":\"Jorge Medina registró un ingreso por compra de Disco de corte 115 mm (50), Electrodo 2,5 mm (kg) (10), Guantes de descarne (12). Proveedor: Ferretería El Tornillo SRL.\",\"createdAt\":\"2026-07-15T15:13:04.000Z\"},{\"id\":\"b8971f1e-0e27-4e1b-a220-1e01e6e90008\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Antiparras de seguridad para Santiago Herrera (1 unidad(es)).\",\"createdAt\":\"2026-07-10T19:45:26.000Z\"},{\"id\":\"683c9af6-e8c4-4366-b59e-e53abb93e5de\",\"type\":\"purchase_request_confirmed\",\"message\":\"Jorge Medina confirmó en forma total el pedido 2CF9D62E con Ferretería El Tornillo SRL: Disco de corte 115 mm (50), Electrodo 2,5 mm (kg) (10), Guantes de descarne (12). Total factura $238050.00. Observación: Confirmación de la demo.\",\"createdAt\":\"2026-07-10T14:20:03.000Z\"},{\"id\":\"b76b867a-bab5-4a73-952e-cc7f6fd78de6\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Kit Arduino Uno para Franco Castro. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-07-10T13:32:25.000Z\"},{\"id\":\"78255b18-213b-47d8-afa0-2bf583ce509b\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pinza amperométrica para Joaquín Chávez.\",\"createdAt\":\"2026-07-10T12:42:24.000Z\"},{\"id\":\"1b3312c3-ac2e-4879-baea-f8cec5a4bfe7\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Osciloscopio digital 2 canales para Catalina Torres. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-07-10T12:36:23.000Z\"},{\"id\":\"7426a6d1-91f9-4489-a0f0-594693be84ab\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Disco de corte 115 mm para Mónica Zerpa (1 unidad(es)). Detalle: Práctica de soldadura.\",\"createdAt\":\"2026-07-09T19:19:22.000Z\"},{\"id\":\"f7d5c957-cb1b-487d-bbea-39278da8d51f\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Soldadora inverter 200 A de Emma Chávez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-07-09T17:28:20.000Z\"},{\"id\":\"b1e5b22c-9e7c-4269-8a32-01dc0c79e1ba\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Taladro percutor 650 W de Ing. Gustavo Tolaba (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-07-09T16:49:19.000Z\"},{\"id\":\"6bdb462a-9860-4244-a7f5-3d79bdc5d4d8\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Delantal de cuero para Lautaro Álvarez.\",\"createdAt\":\"2026-07-09T15:54:21.000Z\"},{\"id\":\"763d47ba-0b6e-466a-a76e-16963b9e5468\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Nivel de burbuja 60 cm de Prof. Silvina Rueda (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-07-08T19:19:15.000Z\"},{\"id\":\"54ba64a2-1389-4e93-984c-a3ee7edcfb4e\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Soldador tipo lápiz 40 W de Ing. Ricardo Salinas (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-07-08T18:00:14.000Z\"},{\"id\":\"2a31c906-466a-4aaf-acbc-70b25ecb5ad0\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Llave francesa 10\\\" de Joaquín Martínez (3 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-07-08T17:39:13.000Z\"},{\"id\":\"3fa5dc3a-6b10-4142-bdd6-b132689924b7\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Amoladora angular 115 mm para Mónica Zerpa.\",\"createdAt\":\"2026-07-08T15:45:16.000Z\"},{\"id\":\"072ca975-f32b-4b6c-a66c-acf2e8242793\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Delantal de cuero para Lautaro Álvarez (3 unidad(es)).\",\"createdAt\":\"2026-07-08T14:03:18.000Z\"},{\"id\":\"fe3880ca-fc95-46c7-9df9-218f2dbd310d\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Arco de sierra para Lautaro Gutiérrez.\",\"createdAt\":\"2026-07-08T13:21:17.000Z\"},{\"id\":\"cff3fc88-a86d-4021-9b0a-4c57c4ca9faf\",\"type\":\"purchase_request_created\",\"message\":\"Jorge Medina generó un pedido de compra con 3 material(es). Observación: Reposición de insumos de soldadura.\",\"createdAt\":\"2026-07-07T13:59:02.000Z\"},{\"id\":\"402456a0-e15e-477e-83b0-cda6cd825f27\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Destornillador plano 6 mm de Emma Flores (2 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-07-06T19:12:08.000Z\"},{\"id\":\"1cc50e2d-4e77-49b6-881a-c9382d12c2f3\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Multímetro digital de Joaquín Martínez (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-07-06T17:56:09.000Z\"},{\"id\":\"f83a395a-6e9e-4316-a5a6-224f5a6f73f6\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Osciloscopio digital 2 canales para Catalina Torres. Observación: Práctica de taller.\",\"createdAt\":\"2026-07-06T14:52:11.000Z\"},{\"id\":\"84514c1c-3c17-4cfb-a387-eea8882b16ac\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Pendrive 32 GB para Joaquín Martínez.\",\"createdAt\":\"2026-07-06T14:29:12.000Z\"},{\"id\":\"ebee2b8c-b2e5-4d54-8198-a12afa0e6b86\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Protector auditivo para Tomás Chávez. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-07-06T13:24:10.000Z\"},{\"id\":\"6c30d047-7d53-4d1d-8b18-f0719aece2b5\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Estaño 60/40 (rollo 250 g) para Thiago Aguirre (2 unidad(es)). Detalle: Práctica de soldadura.\",\"createdAt\":\"2026-07-03T19:04:07.000Z\"},{\"id\":\"deae5492-11f3-43b3-be8e-61cce379b912\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Protector auditivo de Agustina Quispe (3 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-07-03T17:20:50.000Z\"},{\"id\":\"2de1334b-cf6f-46b9-b090-30cbd2ab2e57\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Martillo de bola 500 g de Thiago Aguirre (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-07-03T16:46:02.000Z\"},{\"id\":\"8055e093-c094-4d7b-9ffa-84a6f5ffa7d8\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Delantal de cuero de Emma Chávez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-07-03T16:44:03.000Z\"},{\"id\":\"c9983d9c-9077-4927-b815-f4ece066effd\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Notebook 14\\\" de Felipe Martínez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-07-03T16:07:01.000Z\"},{\"id\":\"46521772-0cb3-468e-b574-1cbcb8994f4b\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Multímetro digital para Joaquín Martínez. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-07-03T14:08:04.000Z\"},{\"id\":\"b9ab71c8-e713-450a-811e-c742bdec2641\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Antiparras de seguridad para Prof. Andrea Choque. Observación: Práctica de taller.\",\"createdAt\":\"2026-07-03T13:18:06.000Z\"},{\"id\":\"796dc991-229c-4fc5-99fb-1bdaecbc5a2b\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Nivel de burbuja 60 cm para Prof. Silvina Rueda. Observación: Práctica de taller.\",\"createdAt\":\"2026-07-03T11:23:05.000Z\"},{\"id\":\"012f40b7-e206-408a-87ce-9f4520b6a51e\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Taladro percutor 650 W para Ing. Gustavo Tolaba.\",\"createdAt\":\"2026-07-02T15:47:47.000Z\"},{\"id\":\"74aace9f-b3b4-4f9a-a958-b3ffb3b42a2e\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Delantal de cuero para Emma Chávez.\",\"createdAt\":\"2026-07-02T14:11:49.000Z\"},{\"id\":\"62bb2b23-fe6b-4f8b-8046-7060c44180bf\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Soldadora inverter 200 A para Emma Chávez.\",\"createdAt\":\"2026-07-02T12:51:48.000Z\"},{\"id\":\"7e85b719-dfdb-48df-b328-0967fe9d072f\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Delantal de cuero de Catalina Torres (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-07-01T20:37:44.000Z\"},{\"id\":\"900a2fc8-a3d5-4613-ba5c-6e695c9ca829\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Juego de llaves combinadas 6-22 mm de Lucía Álvarez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-07-01T19:52:46.000Z\"},{\"id\":\"e5a0b0fa-7475-4f0d-9a87-c0261565913e\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pendrive 32 GB de Mónica Zerpa (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-07-01T17:55:43.000Z\"},{\"id\":\"bb7e1423-df84-43cb-892d-70340692eb5d\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Taladro percutor 650 W de Ing. Gustavo Tolaba (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-07-01T16:26:45.000Z\"},{\"id\":\"0e3a173b-f344-4e31-95e8-e4142d90aee8\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Delantal de cuero de Abril Quispe (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-06-30T17:16:38.000Z\"},{\"id\":\"94f348df-d6ac-4051-88ad-01d2082967b8\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Soldador tipo lápiz 40 W para Ing. Ricardo Salinas.\",\"createdAt\":\"2026-06-30T15:37:41.000Z\"},{\"id\":\"790d6365-650b-4d6a-a089-b67fd4a53caf\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Lija al agua grano 220 para Catalina Torres (2 unidad(es)).\",\"createdAt\":\"2026-06-30T14:43:42.000Z\"},{\"id\":\"35c71e31-b991-4102-9edf-95a10c137245\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Destornillador plano 6 mm para Emma Flores.\",\"createdAt\":\"2026-06-30T13:44:40.000Z\"},{\"id\":\"b20fd52a-0ffd-419e-86de-104529c70158\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Llave francesa 10\\\" para Joaquín Martínez.\",\"createdAt\":\"2026-06-30T13:02:39.000Z\"},{\"id\":\"d519c88e-7aae-4cb1-bd29-a5a72b45981a\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Protector auditivo de Raúl Villca (2 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-06-29T19:42:30.000Z\"},{\"id\":\"71a4ed98-6f51-422c-9349-ee5c8c253166\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pinza universal 8\\\" de Facundo López (2 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-06-29T18:55:32.000Z\"},{\"id\":\"4c4b7bee-8331-4260-8a13-c51e7baebc74\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Juego de llaves combinadas 6-22 mm de Emma Suárez (3 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-06-29T18:35:33.000Z\"},{\"id\":\"760f8371-4660-47c1-8ad0-9589190d5ad3\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pistola de calor de Prof. Natalia Burgos (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-06-29T18:07:31.000Z\"},{\"id\":\"1b4cae9a-3949-432c-8cea-a65aa1a1aeef\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Amoladora angular 115 mm de Facundo López (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-29T17:30:34.000Z\"},{\"id\":\"8e109d16-afb5-44b5-9726-607bbc7d9e71\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Delantal de cuero para Camila Quispe (2 unidad(es)). Detalle: Proyecto de 6° año.\",\"createdAt\":\"2026-06-29T16:36:37.000Z\"},{\"id\":\"9ccec44a-5164-4930-bed2-552b5495726f\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Martillo de bola 500 g para Thiago Aguirre. Observación: Trabajo final.\",\"createdAt\":\"2026-06-29T15:22:36.000Z\"},{\"id\":\"163516ed-d271-4d53-81ab-a7901428972d\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Juego de llaves combinadas 6-22 mm para Lucía Álvarez.\",\"createdAt\":\"2026-06-29T14:14:35.000Z\"},{\"id\":\"cc0956d6-8e88-4ce1-92c3-b792996b1cbb\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Cinta métrica 5 m de Agustina Cruz (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-26T20:56:26.000Z\"},{\"id\":\"d5770071-90a6-4b47-8be4-9a87958d1c79\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Cable HDMI 3 m de Prof. Natalia Burgos (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-26T17:10:25.000Z\"},{\"id\":\"f1a3afeb-7445-4eab-a383-adae0b2ef328\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Protector auditivo para Agustina Quispe.\",\"createdAt\":\"2026-06-26T15:07:27.000Z\"},{\"id\":\"ef1b3001-3de0-4065-84f5-4d84e395e2f2\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Amoladora angular 115 mm para Facundo López.\",\"createdAt\":\"2026-06-26T14:51:29.000Z\"},{\"id\":\"27618747-43c5-47e2-bd18-55e2a22763e9\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Notebook 14\\\" para Felipe Martínez.\",\"createdAt\":\"2026-06-26T11:26:28.000Z\"},{\"id\":\"e3a26ed2-c13f-45e6-afc7-a7db937f1e84\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Multímetro digital de Lautaro Álvarez (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-06-25T18:30:21.000Z\"},{\"id\":\"aac65986-7053-4434-9091-ba93902ed36d\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Nivel de burbuja 60 cm de Lucía Sánchez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-25T17:49:20.000Z\"},{\"id\":\"e6d339a9-0292-4690-850c-ebd7a194a449\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Juego de llaves combinadas 6-22 mm para Emma Suárez.\",\"createdAt\":\"2026-06-25T13:59:22.000Z\"},{\"id\":\"e66944be-52f2-45a2-bc36-5f06b670584b\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Taladro percutor 650 W para Ing. Gustavo Tolaba.\",\"createdAt\":\"2026-06-25T13:52:23.000Z\"},{\"id\":\"74d73e9a-3acf-42f6-92bc-3dada2680f39\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Delantal de cuero para Abril Quispe. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-06-25T11:42:24.000Z\"},{\"id\":\"674ea242-dd53-415f-a38e-42982403e2d3\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Disco de corte 115 mm para Ing. Gustavo Tolaba (1 unidad(es)).\",\"createdAt\":\"2026-06-24T18:34:19.000Z\"},{\"id\":\"c0da6c36-0702-4de1-bf4d-9a85f5e0f98b\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Cinta métrica 5 m para Agustina Cruz. Observación: Trabajo final.\",\"createdAt\":\"2026-06-24T15:45:18.000Z\"},{\"id\":\"8ceca8ec-7a15-44b6-a68b-6d0742d9078d\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Delantal de cuero para Catalina Torres. Observación: Práctica de taller.\",\"createdAt\":\"2026-06-24T12:47:17.000Z\"},{\"id\":\"1fcc1c63-0f83-4678-a7f0-ea2d5a0903b3\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pendrive 32 GB para Mónica Zerpa.\",\"createdAt\":\"2026-06-24T12:36:16.000Z\"},{\"id\":\"0a2fbad6-e55a-439d-915b-0659011a1ac3\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Protoboard 830 puntos de Lautaro Álvarez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-06-23T18:01:11.000Z\"},{\"id\":\"4aca6d5e-5481-41fe-b986-52dd299e45c2\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Delantal de cuero de Lucía Sánchez (3 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-23T16:45:12.000Z\"},{\"id\":\"1f57bc51-0fa4-4011-95ca-9c907ded4a2c\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pinza universal 8\\\" para Facundo López. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-06-23T15:36:14.000Z\"},{\"id\":\"6208c673-b37d-4697-b0d3-14d4a3846a84\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Cable HDMI 3 m para Prof. Natalia Burgos. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-06-23T13:59:15.000Z\"},{\"id\":\"2dfab7dd-5a30-4945-80bb-c9925ad1ce6b\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Multímetro digital para Lautaro Álvarez.\",\"createdAt\":\"2026-06-23T13:34:13.000Z\"},{\"id\":\"a2af12b5-146b-4898-b77a-3cadc266417c\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Llave francesa 10\\\" de Lucía Sánchez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-22T19:57:05.000Z\"},{\"id\":\"b49a8c5c-5aa4-45ef-aa49-67a873d60cbf\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Amoladora angular 115 mm de Facundo López (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-06-22T19:44:08.000Z\"},{\"id\":\"75aa1673-6808-4965-bd47-d2f7138f62bf\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Soldador tipo lápiz 40 W de Lautaro Álvarez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-22T18:05:09.000Z\"},{\"id\":\"8377b029-b549-48cc-886c-dc09adfe8066\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Nivel de burbuja 60 cm de Thiago Aguirre (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-06-22T17:38:06.000Z\"},{\"id\":\"eb8e0fbe-d56b-4738-9914-f33c908b3840\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Arco de sierra de Lautaro Gutiérrez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-22T17:27:07.000Z\"},{\"id\":\"90a3270b-2d21-4e20-808c-ae79f07308c4\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pistola de calor para Prof. Natalia Burgos. Observación: Trabajo final.\",\"createdAt\":\"2026-06-22T14:52:10.000Z\"},{\"id\":\"10e75fbb-2b8c-4874-a84f-c68f2125b708\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Protoboard 830 puntos de Camila Quispe (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-19T17:01:01.000Z\"},{\"id\":\"2e437901-ae5d-43b2-942b-39267185545b\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Soldador tipo lápiz 40 W para Lautaro Álvarez.\",\"createdAt\":\"2026-06-19T14:48:03.000Z\"},{\"id\":\"33919a01-43c0-4894-842a-592ea2ae679a\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Protector auditivo para Raúl Villca. Observación: Trabajo final.\",\"createdAt\":\"2026-06-19T13:47:04.000Z\"},{\"id\":\"784bcec3-66a5-487f-9ffe-7b36f6616592\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Nivel de burbuja 60 cm para Lucía Sánchez. Observación: Práctica de taller.\",\"createdAt\":\"2026-06-19T11:44:02.000Z\"},{\"id\":\"1b54605b-c5d0-42fd-ae03-48e8f61671e0\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pistola de calor de Arq. Hernán Calizaya (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-06-18T17:30:46.000Z\"},{\"id\":\"af506da6-cd49-4c93-9018-8d0545c406d4\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Osciloscopio digital 2 canales de Mónica Zerpa (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-06-18T17:04:47.000Z\"},{\"id\":\"96b20ae2-c60c-4c9d-b6c4-90b19e92af5c\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Delantal de cuero para Lucía Sánchez.\",\"createdAt\":\"2026-06-18T13:49:50.000Z\"},{\"id\":\"ed840c9d-8436-410e-b52e-d1166a3d8c6c\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Arco de sierra para Lautaro Gutiérrez. Observación: Práctica de taller.\",\"createdAt\":\"2026-06-18T11:21:48.000Z\"},{\"id\":\"e94a92e9-1f8c-43cf-8472-4500ccd3792d\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Amoladora angular 115 mm para Facundo López. Observación: Trabajo final.\",\"createdAt\":\"2026-06-18T11:18:49.000Z\"},{\"id\":\"02dea1fa-81a7-4ab1-aca7-6122da9471a6\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pendrive 32 GB de Lautaro Gutiérrez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-06-17T19:12:42.000Z\"},{\"id\":\"6bc164de-1ab7-4ead-8579-93575443e4fc\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Guantes de descarne para Raúl Villca (1 unidad(es)). Detalle: Trabajo práctico.\",\"createdAt\":\"2026-06-17T17:34:44.000Z\"},{\"id\":\"88eb94a6-ec5e-4a2c-9ddc-f43221f9be60\",\"type\":\"stock_entry_created\",\"message\":\"Jorge Medina registró un ingreso por donacion de Proyector multimedia (3). Donante: Ex alumnos promoción 2015. Observación: Donación registrada para la demo.\",\"createdAt\":\"2026-06-17T13:42:45.000Z\"},{\"id\":\"59214634-4f1c-44b5-b682-25a40b55ecb1\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Osciloscopio digital 2 canales para Mónica Zerpa. Observación: Trabajo final.\",\"createdAt\":\"2026-06-17T11:17:43.000Z\"},{\"id\":\"58c3da5a-641b-4ac5-9e0c-fd29b9ae345b\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pinza amperométrica de Catalina Torres (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-16T16:47:40.000Z\"},{\"id\":\"d5f0b411-061e-4646-9cef-b49dd86be1c9\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Protoboard 830 puntos para Lautaro Álvarez. Observación: Práctica de taller.\",\"createdAt\":\"2026-06-16T13:04:41.000Z\"},{\"id\":\"ac136aa3-e2d4-4c90-b8e8-5ee0f6731403\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Amoladora angular 115 mm de Agustina Cruz (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-15T20:20:36.000Z\"},{\"id\":\"72d12dc7-65d3-4406-a232-4bde6e44d16a\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Guantes de descarne de Emma Flores (2 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-15T19:03:35.000Z\"},{\"id\":\"c71b5c50-1005-4e30-a462-4db1a67c40ff\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Amoladora angular 115 mm de Ignacio Herrera (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-15T17:41:38.000Z\"},{\"id\":\"ce354904-3246-4a57-ae5f-d7b97da17ad3\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Arco de sierra de Joaquín Álvarez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-15T16:33:39.000Z\"},{\"id\":\"75f2f0a8-a7fb-499b-801c-35eac9848fe8\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Proyector multimedia de Agustina Cruz (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-15T16:02:37.000Z\"},{\"id\":\"c8008703-2f80-4a90-adf0-7a5befe03071\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Cinta aisladora para Prof. Silvina Rueda (1 unidad(es)). Detalle: Trabajo práctico.\",\"createdAt\":\"2026-06-12T19:35:34.000Z\"},{\"id\":\"d5bbfeaa-11ee-476a-9f6b-1e55ea18bb8e\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Soldadora inverter 200 A de Joaquín Álvarez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-12T17:06:31.000Z\"},{\"id\":\"a0547932-4d4a-4f2a-8af3-4b6370527448\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Protoboard 830 puntos para Camila Quispe. Observación: Práctica de taller.\",\"createdAt\":\"2026-06-12T15:50:32.000Z\"},{\"id\":\"4fe63287-1fac-4909-b56a-d398d0b292a9\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Nivel de burbuja 60 cm para Thiago Aguirre. Observación: Trabajo final.\",\"createdAt\":\"2026-06-12T14:30:33.000Z\"},{\"id\":\"855fafed-f7e0-4eed-8d73-1c265afcc5a3\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Fuente de laboratorio 0-30 V de Lautaro Gutiérrez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-11T20:13:28.000Z\"},{\"id\":\"f8f8ff52-f0d5-4ec0-bce7-972f637ab78d\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Martillo de bola 500 g de Emma Chávez (2 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-11T18:48:26.000Z\"},{\"id\":\"c1ca27f5-8fd0-4849-9bcc-349134f3252d\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Nivel de burbuja 60 cm de Emma Chávez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-06-11T18:20:27.000Z\"},{\"id\":\"c7187bbd-0645-4bd7-90d9-ec04fdb62ded\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Arco de sierra para Joaquín Álvarez. Observación: Práctica de taller.\",\"createdAt\":\"2026-06-11T13:11:30.000Z\"},{\"id\":\"10fd7041-b411-4bdd-b87a-274d4a223a5f\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Llave francesa 10\\\" para Lucía Sánchez.\",\"createdAt\":\"2026-06-11T12:36:29.000Z\"},{\"id\":\"a1681c0f-f059-4c06-916c-fc8274f856ec\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Protoboard 830 puntos de Lautaro Álvarez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-10T16:36:21.000Z\"},{\"id\":\"a4911aef-66f5-4e2a-88a5-94dc66800b53\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Antiparras de seguridad para Felipe Suárez (3 unidad(es)). Detalle: Trabajo práctico.\",\"createdAt\":\"2026-06-10T15:30:25.000Z\"},{\"id\":\"b3bd723f-af2f-4ca7-8b99-379553940a79\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Amoladora angular 115 mm para Ignacio Herrera.\",\"createdAt\":\"2026-06-10T13:48:24.000Z\"},{\"id\":\"03aebfaa-e3f5-46c6-a1c3-bf1906dae889\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Amoladora angular 115 mm para Agustina Cruz. Observación: Práctica de taller.\",\"createdAt\":\"2026-06-10T11:31:22.000Z\"},{\"id\":\"ebb9b261-05b3-4d76-b902-ac01d50ac315\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Proyector multimedia para Agustina Cruz.\",\"createdAt\":\"2026-06-10T11:12:23.000Z\"},{\"id\":\"95dd3841-f7eb-4e9a-8459-c4d715ceb056\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pinza amperométrica para Catalina Torres. Observación: Trabajo final.\",\"createdAt\":\"2026-06-09T15:24:20.000Z\"},{\"id\":\"2cd7c167-bcea-4c9a-a473-f328b1de458c\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Fuente de laboratorio 0-30 V para Lautaro Gutiérrez. Observación: Práctica de taller.\",\"createdAt\":\"2026-06-09T13:12:19.000Z\"},{\"id\":\"c8c7d528-543f-4967-bb2a-2aa261289cc2\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Delantal de cuero de Franco Castro (2 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-08T20:53:13.000Z\"},{\"id\":\"fc34bbf4-776c-42ba-8788-f0c53cac3cb4\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Llave francesa 10\\\" de Martina Cruz (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-08T20:06:14.000Z\"},{\"id\":\"593be010-5b93-4c5b-ae01-15d731b081f1\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Protector auditivo para Ing. Ricardo Salinas (2 unidad(es)).\",\"createdAt\":\"2026-06-08T18:56:18.000Z\"},{\"id\":\"856c550a-477d-4331-a055-adcbc732c8a3\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pendrive 32 GB para Lautaro Gutiérrez. Observación: Trabajo final.\",\"createdAt\":\"2026-06-08T15:40:16.000Z\"},{\"id\":\"fa5287e3-b524-4c5f-92e5-d69afd567fc3\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pistola de calor para Arq. Hernán Calizaya.\",\"createdAt\":\"2026-06-08T14:29:15.000Z\"},{\"id\":\"9798c5ad-e6d5-4a00-889f-a0de0630453c\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Guantes de descarne para Emma Flores.\",\"createdAt\":\"2026-06-08T12:52:17.000Z\"},{\"id\":\"cdc9809a-42fc-47b3-af73-0b5b6190e7ec\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Proyector multimedia de Prof. Silvina Rueda (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-06-05T20:12:10.000Z\"},{\"id\":\"b50f7b43-0305-4aba-b462-76839368a42e\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Antiparras de seguridad para Agustina Quispe (4 unidad(es)). Detalle: Mantenimiento.\",\"createdAt\":\"2026-06-05T13:16:12.000Z\"},{\"id\":\"8954d5dc-c630-47c2-9042-13ec5b5832bd\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Llave francesa 10\\\" para Martina Cruz. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-06-05T11:01:11.000Z\"},{\"id\":\"57bd45f2-acd9-423d-a922-9008af344167\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Soldadora inverter 200 A para Joaquín Álvarez. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-06-04T14:38:09.000Z\"},{\"id\":\"62f1c351-7b88-4238-baeb-eeeb084e64c0\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Nivel de burbuja 60 cm de Joaquín Álvarez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-03T20:31:05.000Z\"},{\"id\":\"a3bfb825-10f1-469f-9813-ac46079be64f\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Nivel de burbuja 60 cm de Joaquín Álvarez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-03T19:25:04.000Z\"},{\"id\":\"d9734780-96a3-40ce-8ebb-9cbb409783b0\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Delantal de cuero para Franco Castro. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-06-03T15:33:07.000Z\"},{\"id\":\"e888b59e-d83f-44f8-9afa-1392b726187d\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Protoboard 830 puntos para Lautaro Álvarez. Observación: Práctica de taller.\",\"createdAt\":\"2026-06-03T14:35:08.000Z\"},{\"id\":\"ef6e36ea-0f59-4d47-8875-022826766697\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Nivel de burbuja 60 cm para Emma Chávez.\",\"createdAt\":\"2026-06-03T12:50:06.000Z\"},{\"id\":\"e2c6db1b-fe16-4473-8204-8245061d41e2\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Multímetro digital de Agustina Cruz (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-02T17:49:03.000Z\"},{\"id\":\"c16e6d69-b75d-42a6-9b88-5bc473b7362c\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Cable HDMI 3 m de Agustina Quispe (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-01T19:52:49.000Z\"},{\"id\":\"e0fde30f-9608-46b9-8dc6-c36ed716ad7a\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Protector auditivo de Facundo López (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-01T16:15:48.000Z\"},{\"id\":\"eedf3d79-f465-4dff-bb91-b421683d2b8c\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Careta de soldar fotosensible para Prof. Andrea Choque (1 unidad(es)). Detalle: Proyecto de 6° año.\",\"createdAt\":\"2026-06-01T15:09:02.000Z\"},{\"id\":\"6b2e2c4d-63eb-41df-9f99-41db0f8e1215\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Proyector multimedia para Prof. Silvina Rueda. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-06-01T14:43:50.000Z\"},{\"id\":\"8228cc08-7658-40b6-a255-60a96487dfc8\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Martillo de bola 500 g para Emma Chávez. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-06-01T11:55:01.000Z\"},{\"id\":\"81810fd1-29fe-4581-8873-a688152e0653\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Taladro percutor 650 W de Lucía Sánchez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-05-29T19:01:46.000Z\"},{\"id\":\"a5aad3fc-7d05-468f-9fd6-11c07351fd48\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Protector auditivo de Abril Quispe (3 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-05-29T18:32:45.000Z\"},{\"id\":\"2d01280a-c47a-4692-a87f-cfd6f305375e\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Llave francesa 10\\\" de Abril Quispe (3 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-05-29T18:22:43.000Z\"},{\"id\":\"b7396ef3-18da-4182-8f0a-bce118909e86\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Mouse USB de Joaquín Chávez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-05-29T16:24:44.000Z\"},{\"id\":\"e7e820f8-fcc2-47c7-ad35-5a9a79cf5fe8\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Nivel de burbuja 60 cm para Joaquín Álvarez. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-05-29T14:09:47.000Z\"},{\"id\":\"e072c97b-1d91-4240-898b-039b39e76704\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Cable HDMI 3 m para Agustina Quispe. Observación: Práctica de taller.\",\"createdAt\":\"2026-05-28T14:18:42.000Z\"},{\"id\":\"036778c3-b894-485e-a23e-35f895f8b2c0\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Taladro percutor 650 W para Lucía Sánchez.\",\"createdAt\":\"2026-05-28T11:43:41.000Z\"},{\"id\":\"a269826c-ccc1-4c08-964e-c364706b1508\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Proyector multimedia de Facundo López (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-05-27T20:37:37.000Z\"},{\"id\":\"d21c9c8d-f6ff-4441-9725-6bc570ad484e\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Guantes de descarne de Prof. Natalia Burgos (2 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-05-27T20:07:36.000Z\"},{\"id\":\"35221bb6-6ecf-40c9-8430-57fe2723407d\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Arco de sierra de Martina Cruz (2 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-05-27T19:28:35.000Z\"},{\"id\":\"f75a891c-e850-4306-a690-fa19981cfc30\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Protector auditivo para Mónica Zerpa (2 unidad(es)).\",\"createdAt\":\"2026-05-27T18:10:40.000Z\"},{\"id\":\"6ab8908b-6ca6-4c2d-a5ec-cbd686e96c06\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Protector auditivo para Facundo López. Observación: Trabajo final.\",\"createdAt\":\"2026-05-27T14:58:39.000Z\"},{\"id\":\"fc3d781d-74c2-434f-be46-0d2a4d081b09\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Protector auditivo para Abril Quispe.\",\"createdAt\":\"2026-05-27T12:07:38.000Z\"},{\"id\":\"b8ca93c0-a445-4901-a921-1c08f04fb618\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Cinta métrica 5 m de Abril Quispe (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-05-26T20:40:30.000Z\"},{\"id\":\"1c5871c2-70ab-4d5e-ac7b-ecc95035ec49\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Calibre digital 150 mm de Felipe Suárez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-05-26T17:08:31.000Z\"},{\"id\":\"5a38e3b4-8910-4f83-b0a6-533d2d49434a\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Guantes de descarne para Prof. Natalia Burgos. Observación: Práctica de taller.\",\"createdAt\":\"2026-05-26T15:58:32.000Z\"},{\"id\":\"ff235a90-460d-41e1-bce8-dc7d931488af\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Mouse USB para Joaquín Chávez. Observación: Práctica de taller.\",\"createdAt\":\"2026-05-26T12:50:34.000Z\"},{\"id\":\"ffa3dd9d-77a2-469f-a241-6c3b63356365\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Proyector multimedia para Facundo López.\",\"createdAt\":\"2026-05-26T12:28:33.000Z\"},{\"id\":\"c29aa7ee-f351-48d0-8c73-12efd2668b01\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pinza universal 8\\\" de Santiago Herrera (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-05-25T19:27:24.000Z\"},{\"id\":\"7d9c77b8-5271-4325-86ff-90a58f0eb44d\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Taladro percutor 650 W de Raúl Villca (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-05-25T17:55:26.000Z\"},{\"id\":\"cd31aaef-1694-41ae-9dae-cca34828959d\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pinza universal 8\\\" de Tomás Chávez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-05-25T17:39:25.000Z\"},{\"id\":\"d508371f-44c3-485d-949a-0e19552180db\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Multímetro digital para Agustina Cruz.\",\"createdAt\":\"2026-05-25T11:54:27.000Z\"},{\"id\":\"5886c07c-7ee4-4dad-a4e7-063ac11d36e8\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Arco de sierra para Martina Cruz. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-05-25T11:30:28.000Z\"},{\"id\":\"2ee8d894-8bb6-48b5-aaaa-71c25cfc6891\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Nivel de burbuja 60 cm para Joaquín Álvarez. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-05-25T11:06:29.000Z\"},{\"id\":\"2018ec85-dfee-41d4-a9ab-7201f5e0831c\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Soldadora inverter 200 A de Prof. Natalia Burgos (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-05-22T17:06:22.000Z\"},{\"id\":\"5343fbbd-3826-453e-8fba-903045ef2fce\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Taladro percutor 650 W para Raúl Villca. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-05-22T12:05:23.000Z\"},{\"id\":\"564e86e2-d4d5-4474-ab64-d62732cfa830\",\"type\":\"loan_partial_returned\",\"message\":\"Jorge Medina registró una devolución parcial de Pinza universal 8\\\" de Santiago Herrera (1 unidad(es)). Quedan 1 unidad(es) pendientes.\",\"createdAt\":\"2026-05-21T19:00:19.000Z\"},{\"id\":\"726bf227-a55a-4139-9ddb-e042728b7772\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Calibre digital 150 mm para Felipe Suárez.\",\"createdAt\":\"2026-05-21T13:57:21.000Z\"},{\"id\":\"7974ad03-1916-4a55-8a9b-0d87e1255fd4\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Llave francesa 10\\\" para Abril Quispe. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-05-21T13:50:20.000Z\"},{\"id\":\"35e4561b-1fe2-4ade-85d4-899801fedc4b\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Cinta métrica 5 m de Emma Suárez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-05-20T16:16:15.000Z\"},{\"id\":\"dcf61706-2e47-47dd-a603-2201d9c9d7ee\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Cinta métrica 5 m para Abril Quispe.\",\"createdAt\":\"2026-05-20T15:50:17.000Z\"},{\"id\":\"400a1c6d-9ca9-422b-927b-a4bdc2ee24f5\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Pinza universal 8\\\" para Tomás Chávez. Observación: Práctica de taller.\",\"createdAt\":\"2026-05-20T13:36:16.000Z\"},{\"id\":\"e3fe713d-8ff9-41a5-a3b1-58417ab571d9\",\"type\":\"stock_entry_created\",\"message\":\"Jorge Medina registró un ingreso por donacion de Soldador tipo lápiz 40 W (4). Donante: Empresa local (ficticia). Observación: Donación registrada para la demo.\",\"createdAt\":\"2026-05-20T13:26:18.000Z\"},{\"id\":\"c59304d4-2b5f-48f1-a812-a3aee67904cf\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Soldadora inverter 200 A para Prof. Natalia Burgos.\",\"createdAt\":\"2026-05-19T15:25:13.000Z\"},{\"id\":\"1d40d415-c521-40f7-a6a2-5c358c0cf6fe\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Pinza universal 8\\\" para Santiago Herrera.\",\"createdAt\":\"2026-05-19T14:10:12.000Z\"},{\"id\":\"90226315-99ef-40ff-9fef-9ac67d4e0ddc\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Lija al agua grano 220 para Prof. Silvina Rueda (1 unidad(es)).\",\"createdAt\":\"2026-05-19T13:31:14.000Z\"},{\"id\":\"40acea79-8f81-403b-a3ea-e3529422f6f2\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Arco de sierra de Agustina Quispe (3 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-05-18T18:47:10.000Z\"},{\"id\":\"b4219732-78e6-4a55-a691-a1dc2b360ff0\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Protector auditivo de Joaquín Álvarez (3 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-05-18T17:41:09.000Z\"},{\"id\":\"83fa16f5-3e25-4e4c-a314-b28dbdb4436d\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Mecha HSS 6 mm para Ing. Gustavo Tolaba (4 unidad(es)). Detalle: Trabajo práctico.\",\"createdAt\":\"2026-05-18T14:11:11.000Z\"},{\"id\":\"175601bc-7171-440f-8c5b-954052d095ae\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Careta de soldar fotosensible para Agustina Quispe (2 unidad(es)). Detalle: Trabajo práctico.\",\"createdAt\":\"2026-05-15T18:27:07.000Z\"},{\"id\":\"74b59dff-01fa-4851-8715-df16d346cb04\",\"type\":\"stock_entry_created\",\"message\":\"Jorge Medina registró un ingreso por donacion de Proyector multimedia (2). Donante: Cooperadora escolar. Observación: Donación registrada para la demo.\",\"createdAt\":\"2026-05-15T13:48:08.000Z\"},{\"id\":\"2017e09f-0615-4ae4-96ca-39753e958c22\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Arco de sierra para Agustina Quispe.\",\"createdAt\":\"2026-05-15T12:11:06.000Z\"},{\"id\":\"bdcba5a5-f894-4b6b-9dca-42362438eac8\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Protector auditivo para Raúl Villca (3 unidad(es)). Detalle: Proyecto de 6° año.\",\"createdAt\":\"2026-05-14T19:35:05.000Z\"},{\"id\":\"f4aa5623-2541-4ce7-9e7c-726c61869cb9\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Destornillador plano 6 mm de Franco Castro (3 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-05-14T16:02:04.000Z\"},{\"id\":\"e235488a-84db-4c26-9410-c1fefe6e4728\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Destornillador plano 6 mm para Franco Castro.\",\"createdAt\":\"2026-05-13T15:24:02.000Z\"},{\"id\":\"9fe45ccd-3bbc-49f1-a388-418c093caf32\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Cinta métrica 5 m para Emma Suárez. Observación: Trabajo final.\",\"createdAt\":\"2026-05-13T12:44:03.000Z\"},{\"id\":\"4f642a3f-94a7-4c91-9141-09d25f344450\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Protector auditivo para Joaquín Álvarez.\",\"createdAt\":\"2026-05-13T11:21:01.000Z\"},{\"id\":\"7e9ecb80-ed11-43af-b41a-99c8ee28e2dd\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Proyector multimedia (IN-002) en Sala de informática.\",\"createdAt\":\"2026-05-09T20:42:47.000Z\"},{\"id\":\"b3cb2029-9813-476f-8ebe-bf81335f2b1e\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Mouse USB (IN-003) en Sala de informática.\",\"createdAt\":\"2026-05-09T20:04:48.000Z\"},{\"id\":\"264bfb8b-0808-4bc2-b4d8-0d87d3f2968f\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Amoladora angular 115 mm (HE-002) en Estantería A2.\",\"createdAt\":\"2026-05-09T20:00:21.000Z\"},{\"id\":\"eadaf3a1-7923-4c73-b68c-afeb02d05d9b\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Mecha HSS 6 mm (CO-006) en Depósito de consumibles.\",\"createdAt\":\"2026-05-09T19:33:40.000Z\"},{\"id\":\"46f8aac7-b064-474c-8e2b-f39015d01bc1\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Soldadora inverter 200 A (HE-004) en Estantería A2.\",\"createdAt\":\"2026-05-09T19:08:23.000Z\"},{\"id\":\"ce756d6a-4599-4c13-9cb0-6bb1f9fa0e08\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Osciloscopio digital 2 canales (EL-005) en Laboratorio de electrónica.\",\"createdAt\":\"2026-05-09T19:02:45.000Z\"},{\"id\":\"9daa0779-53e7-4da5-aaa7-71c23288c299\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Multímetro digital (IM-001) en Laboratorio de electrónica.\",\"createdAt\":\"2026-05-09T18:56:25.000Z\"},{\"id\":\"72a4d405-1d6d-4db0-848f-8af6069b975b\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Lija al agua grano 220 (CO-005) en Depósito de consumibles.\",\"createdAt\":\"2026-05-09T18:38:39.000Z\"},{\"id\":\"d2df9217-ce34-4348-a629-32fafa8c4a0a\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Nivel de burbuja 60 cm (IM-005) en Estantería A1.\",\"createdAt\":\"2026-05-09T18:31:29.000Z\"},{\"id\":\"31675849-35b0-4294-8097-ae091d432245\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Taladro percutor 650 W (HE-001) en Estantería A2.\",\"createdAt\":\"2026-05-09T18:09:20.000Z\"},{\"id\":\"178f4c25-d94f-4ec9-b54f-e3ac13ea4a7a\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Soldador tipo lápiz 40 W (EL-003) en Laboratorio de electrónica.\",\"createdAt\":\"2026-05-09T18:04:43.000Z\"},{\"id\":\"0eb5ed2c-eb1b-4f7a-afbd-5f162e6c88fb\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Juego de llaves combinadas 6-22 mm (HM-001) en Estantería A1.\",\"createdAt\":\"2026-05-09T18:04:13.000Z\"},{\"id\":\"3583f34e-8477-4537-95be-73509dc56c5f\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Pendrive 32 GB (IN-004) en Sala de informática.\",\"createdAt\":\"2026-05-09T17:59:49.000Z\"},{\"id\":\"084f7669-a32d-42da-9119-d36285dd5e10\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Cinta aisladora (CO-003) en Depósito de consumibles.\",\"createdAt\":\"2026-05-09T17:56:37.000Z\"},{\"id\":\"9a13730d-c176-41a0-9fed-671c9c36ce36\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Electrodo 2,5 mm (kg) (CO-002) en Depósito de consumibles.\",\"createdAt\":\"2026-05-09T17:40:36.000Z\"},{\"id\":\"1ddf008f-9c38-4d1e-8f15-d4a54cfc3fe5\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Fuente de laboratorio 0-30 V (EL-002) en Laboratorio de electrónica.\",\"createdAt\":\"2026-05-09T17:23:42.000Z\"},{\"id\":\"d29cd975-a490-4b3b-838e-e253f76d02bc\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Pinza amperométrica (IM-003) en Laboratorio de electrónica.\",\"createdAt\":\"2026-05-09T17:21:27.000Z\"},{\"id\":\"dea125e3-9a8b-4e31-990e-6eeb5d40c08e\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Pistola de calor (HE-005) en Estantería A2.\",\"createdAt\":\"2026-05-09T17:21:24.000Z\"},{\"id\":\"6a078d7b-2f2b-46db-8123-c000c415ca83\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Calibre digital 150 mm (IM-002) en Estantería A1.\",\"createdAt\":\"2026-05-09T17:11:26.000Z\"},{\"id\":\"a0c27587-838a-4f2d-ad15-6a581e844199\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Protoboard 830 puntos (EL-001) en Laboratorio de electrónica.\",\"createdAt\":\"2026-05-09T17:05:41.000Z\"},{\"id\":\"1504aae4-45e2-43cc-b5ae-6f844e113e9c\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Antiparras de seguridad (SG-001) en Armario de seguridad.\",\"createdAt\":\"2026-05-09T16:45:30.000Z\"},{\"id\":\"8735b111-038c-4799-a643-e3676978c6b4\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Atornillador inalámbrico 12 V (HE-003) en Estantería A2.\",\"createdAt\":\"2026-05-09T16:29:22.000Z\"},{\"id\":\"7b051b44-e0e9-4277-a4fb-3982a8d9e994\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Protector auditivo (SG-003) en Armario de seguridad.\",\"createdAt\":\"2026-05-09T16:17:32.000Z\"},{\"id\":\"03c06dd1-4410-4510-88fb-a1457ae283c8\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Delantal de cuero (SG-005) en Armario de seguridad.\",\"createdAt\":\"2026-05-09T16:07:34.000Z\"},{\"id\":\"0f836d1c-b343-488e-97cb-1b7a30e32e41\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Notebook 14\\\" (IN-001) en Sala de informática.\",\"createdAt\":\"2026-05-09T15:56:46.000Z\"},{\"id\":\"514a78fd-85d9-48a5-ab20-27fc9fc3e1f1\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Estaño 60/40 (rollo 250 g) (CO-004) en Depósito de consumibles.\",\"createdAt\":\"2026-05-09T15:32:38.000Z\"},{\"id\":\"7b6246e0-fc40-478e-b7d9-fbab9e832980\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Destornillador plano 6 mm (HM-002) en Estantería A1.\",\"createdAt\":\"2026-05-09T15:17:14.000Z\"},{\"id\":\"84453404-0233-468f-b135-99f9982e1518\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Careta de soldar fotosensible (SG-004) en Armario de seguridad.\",\"createdAt\":\"2026-05-09T15:00:33.000Z\"},{\"id\":\"ee4ec15d-a010-4d66-a057-fdf7a898c72e\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Guantes de descarne (SG-002) en Armario de seguridad.\",\"createdAt\":\"2026-05-09T14:50:31.000Z\"},{\"id\":\"fb953687-46b5-4201-b6ee-a0028f981259\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Cinta métrica 5 m (IM-004) en Estantería A1.\",\"createdAt\":\"2026-05-09T14:43:28.000Z\"},{\"id\":\"02ea7ee3-7234-46f8-a221-87afeab39866\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Pinza universal 8\\\" (HM-005) en Estantería A1.\",\"createdAt\":\"2026-05-09T14:40:17.000Z\"},{\"id\":\"76d6d268-5823-4136-8c1f-c99e67434ec5\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Kit Arduino Uno (EL-004) en Laboratorio de electrónica.\",\"createdAt\":\"2026-05-09T14:01:44.000Z\"},{\"id\":\"80ab5e91-f24a-4fa6-9b8c-2b218c83a556\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Llave francesa 10\\\" (HM-006) en Estantería A1.\",\"createdAt\":\"2026-05-09T13:37:18.000Z\"},{\"id\":\"c3e0024d-cfc4-489d-a950-78f67449280e\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Cable HDMI 3 m (IN-005) en Sala de informática.\",\"createdAt\":\"2026-05-09T12:25:50.000Z\"},{\"id\":\"cf47ff2f-899b-4ff3-9aeb-f168ba93ad58\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Disco de corte 115 mm (CO-001) en Depósito de consumibles.\",\"createdAt\":\"2026-05-09T12:13:35.000Z\"},{\"id\":\"87bed04a-2792-4493-978f-7d700816d5d2\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Martillo de bola 500 g (HM-004) en Estantería A1.\",\"createdAt\":\"2026-05-09T12:08:16.000Z\"},{\"id\":\"116a7ff2-a1b3-46c6-b278-8688d2ba7bdf\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Destornillador Phillips PH2 (HM-003) en Estantería A1.\",\"createdAt\":\"2026-05-09T11:53:15.000Z\"},{\"id\":\"84c29867-3168-436d-995b-f98665b2f607\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Arco de sierra (HM-007) en Estantería A1.\",\"createdAt\":\"2026-05-09T11:00:19.000Z\"},{\"id\":\"74376e07-97d3-4d32-a6e2-4c05ba46232b\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Felipe Morales (alumno).\",\"createdAt\":\"2026-05-08T20:53:50.000Z\"},{\"id\":\"2edf4d6a-a416-4c7b-9434-ee75b34213a1\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Abril Quispe (alumno).\",\"createdAt\":\"2026-05-08T20:49:32.000Z\"},{\"id\":\"64f7b2d3-2501-4f4a-acba-538ae4869936\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Prof. Silvina Rueda (profesor).\",\"createdAt\":\"2026-05-08T20:42:10.000Z\"},{\"id\":\"960f1edb-6a47-4166-9491-a5aef35ae65c\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Martina Cruz (alumno).\",\"createdAt\":\"2026-05-08T20:20:40.000Z\"},{\"id\":\"93f2b4ad-23bf-4810-b996-7937a1928005\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Santiago Herrera (alumno).\",\"createdAt\":\"2026-05-08T19:56:47.000Z\"},{\"id\":\"d78cd0cf-71b1-456d-986b-5e67ef02eead\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Emma Chávez (alumno).\",\"createdAt\":\"2026-05-08T19:48:49.000Z\"},{\"id\":\"2dbb8af4-c5ea-48da-83f2-70b207ffbd03\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Tomás Flores (alumno).\",\"createdAt\":\"2026-05-08T19:40:45.000Z\"},{\"id\":\"0d8c496e-88d5-446b-87b4-94d5788d3254\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Joaquín Martínez (alumno).\",\"createdAt\":\"2026-05-08T19:34:30.000Z\"},{\"id\":\"6264a6f4-11ba-448d-a71f-7b9f1f1ecaa6\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Ing. Gustavo Tolaba (profesor).\",\"createdAt\":\"2026-05-08T19:34:07.000Z\"},{\"id\":\"dba9510a-d9ba-481b-92b0-651151fb8e7e\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Arq. Hernán Calizaya (profesor).\",\"createdAt\":\"2026-05-08T19:28:09.000Z\"},{\"id\":\"c8c37222-f699-4448-b56b-7bf4242cbccf\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Agustina Quispe (alumno).\",\"createdAt\":\"2026-05-08T19:20:01.000Z\"},{\"id\":\"a63c6842-7fef-4a18-9cc7-f8cb2764a62c\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Felipe Martínez (alumno).\",\"createdAt\":\"2026-05-08T18:41:27.000Z\"},{\"id\":\"ed928b3c-a7ea-4816-8d90-453a7ea8ca56\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Joaquín Chávez (alumno).\",\"createdAt\":\"2026-05-08T18:17:43.000Z\"},{\"id\":\"63b136f2-285d-401d-b74c-48e07cb8057c\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Lautaro Álvarez (alumno).\",\"createdAt\":\"2026-05-08T18:06:34.000Z\"},{\"id\":\"c7e80675-d491-4c73-8258-46ba9db7a2c8\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Prof. Natalia Burgos (profesor).\",\"createdAt\":\"2026-05-08T17:55:08.000Z\"},{\"id\":\"582c7b07-5f9f-4959-b5b3-71107bccdd52\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Prof. Andrea Choque (profesor).\",\"createdAt\":\"2026-05-08T17:53:06.000Z\"},{\"id\":\"06163d38-21ab-4ee8-b327-bb04f163138a\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Ing. Ricardo Salinas (profesor).\",\"createdAt\":\"2026-05-08T17:38:05.000Z\"},{\"id\":\"84ba174d-32ce-46c0-9463-512475ec1eb5\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Lucía Álvarez (alumno).\",\"createdAt\":\"2026-05-08T17:35:37.000Z\"},{\"id\":\"9cb634d6-e47d-4820-b2ee-130b77a2103e\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Tomás Chávez (alumno).\",\"createdAt\":\"2026-05-08T17:10:48.000Z\"},{\"id\":\"49d709d5-5231-4315-b37d-21fc5d2ee8c8\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Thiago Aguirre (alumno).\",\"createdAt\":\"2026-05-08T17:03:46.000Z\"},{\"id\":\"52dba783-9f83-4b02-a64d-c027c8e85a01\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Emma Flores (alumno).\",\"createdAt\":\"2026-05-08T16:51:29.000Z\"},{\"id\":\"4bb3c2b5-a44e-4c87-b01a-637838adde63\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Lucía Martínez (alumno).\",\"createdAt\":\"2026-05-08T16:40:38.000Z\"},{\"id\":\"74aca131-7386-4a27-8ba0-3ad3eba7e0f9\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Joaquín Álvarez (alumno).\",\"createdAt\":\"2026-05-08T16:38:39.000Z\"},{\"id\":\"47240d42-d424-4e13-9e60-b4a1f5ab95de\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Emma Suárez (alumno).\",\"createdAt\":\"2026-05-08T16:34:41.000Z\"},{\"id\":\"f55ff8f2-e5c1-43fb-8f4c-3da393b1422f\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Ignacio Herrera (alumno).\",\"createdAt\":\"2026-05-08T16:20:04.000Z\"},{\"id\":\"b293f02c-ca70-45fc-a873-45feff87422f\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Lucía Sánchez (alumno).\",\"createdAt\":\"2026-05-08T14:48:33.000Z\"},{\"id\":\"a3891d9e-5391-45af-a903-1fbff0e5433f\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Lautaro Cruz (alumno).\",\"createdAt\":\"2026-05-08T13:21:36.000Z\"},{\"id\":\"fd52fc64-2964-4064-a3f0-a25e465cca1d\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Facundo López (alumno).\",\"createdAt\":\"2026-05-08T13:18:42.000Z\"},{\"id\":\"59c43904-eb9e-432d-99ab-b52fe3cd7b6c\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Felipe Suárez (alumno).\",\"createdAt\":\"2026-05-08T12:55:31.000Z\"},{\"id\":\"cac2dd8e-21bb-48ac-b2dc-483abf42e12d\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Catalina Torres (alumno).\",\"createdAt\":\"2026-05-08T12:52:02.000Z\"},{\"id\":\"18e4ab78-d5ea-44b9-9017-6e9f69b11931\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Agustina Cruz (alumno).\",\"createdAt\":\"2026-05-08T12:38:28.000Z\"},{\"id\":\"cb8921b2-1517-4d67-936b-20801840b12d\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Mónica Zerpa (administrativo).\",\"createdAt\":\"2026-05-08T12:26:11.000Z\"},{\"id\":\"8ff183fa-eea7-481b-8809-8e041d4822f9\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Camila Quispe (alumno).\",\"createdAt\":\"2026-05-08T11:54:44.000Z\"},{\"id\":\"a07c56f2-8efd-49da-aa18-0fdfd53b2a9c\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Lautaro Gutiérrez (alumno).\",\"createdAt\":\"2026-05-08T11:53:03.000Z\"},{\"id\":\"7a0440f9-b064-4cdc-8050-316354cf78b3\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Franco Castro (alumno).\",\"createdAt\":\"2026-05-08T11:36:35.000Z\"},{\"id\":\"7bf47b28-219b-4d78-8a69-a35df076a26d\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Raúl Villca (administrativo).\",\"createdAt\":\"2026-05-08T11:19:12.000Z\"},{\"id\":\"101332a5-91cc-4cae-a3ae-4a78beda04d5\",\"type\":\"supplier_created\",\"message\":\"Jorge Medina cargó el proveedor Electro Insumos Andinos (CUIT 20-28000789-8).\",\"createdAt\":\"2026-05-07T19:36:25.000Z\"},{\"id\":\"6f294198-e5e5-4eda-83f5-a45ec6183e88\",\"type\":\"supplier_created\",\"message\":\"Jorge Medina cargó el proveedor Ferretería El Tornillo SRL (CUIT 30-71000123-1).\",\"createdAt\":\"2026-05-07T17:56:23.000Z\"},{\"id\":\"d3407c7f-4b96-4dfa-ae67-b50f88c0fbe6\",\"type\":\"supplier_created\",\"message\":\"Jorge Medina cargó el proveedor Seguridad Industrial Puna (CUIT 30-71000999-2).\",\"createdAt\":\"2026-05-07T16:51:26.000Z\"},{\"id\":\"35d1a7fd-882f-440b-a175-aea59420f88e\",\"type\":\"supplier_created\",\"message\":\"Jorge Medina cargó el proveedor Distribuidora Técnica del Norte SA (CUIT 30-71000456-7).\",\"createdAt\":\"2026-05-07T11:52:24.000Z\"},{\"id\":\"b229358e-f626-4f69-960e-d9db0a5c7329\",\"type\":\"location_created\",\"message\":\"Administración Demo creó la ubicación Laboratorio de electrónica.\",\"createdAt\":\"2026-05-06T19:53:12.000Z\"},{\"id\":\"1b30fe17-b127-484a-80ea-eebd2af7078b\",\"type\":\"cost_center_created\",\"message\":\"Administración Demo creó el centro de costos Informática.\",\"createdAt\":\"2026-05-06T19:51:16.000Z\"},{\"id\":\"2e8349df-f0d2-436b-950a-6138014a2f55\",\"type\":\"location_created\",\"message\":\"Administración Demo creó la ubicación Estantería A2.\",\"createdAt\":\"2026-05-06T18:38:09.000Z\"},{\"id\":\"a70e62e6-93ad-4e63-bd85-9de10382a497\",\"type\":\"location_created\",\"message\":\"Administración Demo creó la ubicación Depósito de consumibles.\",\"createdAt\":\"2026-05-06T18:30:11.000Z\"},{\"id\":\"d7b0942b-b0fa-4967-a8d9-03954d143675\",\"type\":\"orientation_created\",\"message\":\"Administración Demo creó la orientación Técnico Electromecánico.\",\"createdAt\":\"2026-05-06T18:21:19.000Z\"},{\"id\":\"5d8b45e1-5f08-4ee0-a5f0-41f397bf1357\",\"type\":\"cost_center_created\",\"message\":\"Administración Demo creó el centro de costos Laboratorio de Química.\",\"createdAt\":\"2026-05-06T18:06:15.000Z\"},{\"id\":\"4d846c46-196e-4397-b49b-2a774cce9a3b\",\"type\":\"orientation_created\",\"message\":\"Administración Demo creó la orientación Técnico en Informática.\",\"createdAt\":\"2026-05-06T18:05:21.000Z\"},{\"id\":\"5a9e5c7f-b90b-41bb-845e-f57f6cbbd8de\",\"type\":\"orientation_created\",\"message\":\"Administración Demo creó la orientación Maestro Mayor de Obras.\",\"createdAt\":\"2026-05-06T18:03:22.000Z\"},{\"id\":\"6083ae71-d857-4c2a-a472-8993f4ec9dc4\",\"type\":\"location_created\",\"message\":\"Administración Demo creó la ubicación Sala de informática.\",\"createdAt\":\"2026-05-06T17:51:13.000Z\"},{\"id\":\"0a1aefc7-4e58-4ae4-95fb-ebb0c02ae518\",\"type\":\"category_created\",\"message\":\"Administración Demo creó la categoría Herramientas eléctricas.\",\"createdAt\":\"2026-05-06T17:51:02.000Z\"},{\"id\":\"3b7c7d8e-7b80-41a2-b328-53e69fdbcb56\",\"type\":\"category_created\",\"message\":\"Administración Demo creó la categoría Herramientas manuales.\",\"createdAt\":\"2026-05-06T17:01:01.000Z\"},{\"id\":\"37affeb5-15d1-40a5-8706-861927a8d767\",\"type\":\"location_created\",\"message\":\"Administración Demo creó la ubicación Armario de seguridad.\",\"createdAt\":\"2026-05-06T15:46:10.000Z\"},{\"id\":\"7afdc580-c5a4-4225-b553-842cd0427758\",\"type\":\"cost_center_created\",\"message\":\"Administración Demo creó el centro de costos Administración.\",\"createdAt\":\"2026-05-06T15:42:18.000Z\"},{\"id\":\"e6aa63cc-0edb-4835-b0a9-bc1cf742d074\",\"type\":\"category_created\",\"message\":\"Administración Demo creó la categoría Instrumentos de medición.\",\"createdAt\":\"2026-05-06T15:11:03.000Z\"},{\"id\":\"a7da1a08-3fbe-4640-a9b1-5e566d1bf751\",\"type\":\"category_created\",\"message\":\"Administración Demo creó la categoría Electrónica.\",\"createdAt\":\"2026-05-06T13:45:06.000Z\"},{\"id\":\"67e8ef06-12e0-41e3-bc5d-84bc6320b365\",\"type\":\"category_created\",\"message\":\"Administración Demo creó la categoría Informática.\",\"createdAt\":\"2026-05-06T13:24:07.000Z\"},{\"id\":\"48faa4ef-d080-4e48-8bc8-cd0df0777af6\",\"type\":\"category_created\",\"message\":\"Administración Demo creó la categoría Consumibles.\",\"createdAt\":\"2026-05-06T13:14:05.000Z\"},{\"id\":\"cefe383e-e9d1-4866-b0cb-aa981b299c37\",\"type\":\"cost_center_created\",\"message\":\"Administración Demo creó el centro de costos Construcciones.\",\"createdAt\":\"2026-05-06T13:12:17.000Z\"},{\"id\":\"554b06ac-746d-4b6d-8343-090ea9b8cfec\",\"type\":\"location_created\",\"message\":\"Administración Demo creó la ubicación Estantería A1.\",\"createdAt\":\"2026-05-06T12:57:08.000Z\"},{\"id\":\"58ee6c20-a3fe-4cdf-a69e-fa99f49afb44\",\"type\":\"category_created\",\"message\":\"Administración Demo creó la categoría Elementos de seguridad.\",\"createdAt\":\"2026-05-06T11:36:04.000Z\"},{\"id\":\"224d8ef6-ef6b-4d38-87cc-410e8880f393\",\"type\":\"cost_center_created\",\"message\":\"Administración Demo creó el centro de costos Taller de Electromecánica.\",\"createdAt\":\"2026-05-06T11:24:14.000Z\"},{\"id\":\"2f737cb0-81d3-4ff0-b923-a1969f3ee20d\",\"type\":\"orientation_created\",\"message\":\"Administración Demo creó la orientación Técnico Químico.\",\"createdAt\":\"2026-05-06T11:16:20.000Z\"}],\"locations\":[{\"id\":\"63ef9c8c-0a89-4bc4-82e5-d3495b81c523\",\"name\":\"Sala de informática\",\"description\":\"Armario con llave\",\"createdAt\":\"2026-05-06T17:51:12.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"09126f7b-985c-4dd7-8cbd-4620ce80a0a8\",\"name\":\"Laboratorio de electrónica\",\"description\":\"Bancos 1 a 6\",\"createdAt\":\"2026-05-06T19:53:11.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"fa8c201c-08eb-45b3-aa56-86987945ecae\",\"name\":\"Depósito de consumibles\",\"description\":\"Insumos y repuestos\",\"createdAt\":\"2026-05-06T18:30:10.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"e0f0960a-eb69-4a13-b26d-1c7d23e891ee\",\"name\":\"Armario de seguridad\",\"description\":\"Elementos de protección personal\",\"createdAt\":\"2026-05-06T15:46:09.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"bc21ec52-3ffd-4718-889e-ef1f544dbd4a\",\"name\":\"Estantería A2\",\"description\":\"Taller · herramientas eléctricas\",\"createdAt\":\"2026-05-06T18:38:08.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"390edd55-359a-4b3a-9a47-eb2fc92cf11c\",\"name\":\"Estantería A1\",\"description\":\"Taller · herramientas manuales\",\"createdAt\":\"2026-05-06T12:57:07.000Z\",\"createdBy\":\"Administración Demo\"}],\"categories\":[{\"id\":\"0fb2e970-e72b-4569-aada-9915f982a07b\",\"name\":\"Informática\",\"description\":\"Equipos y accesorios informáticos\",\"createdAt\":\"2026-05-06T13:24:06.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"2d994083-b06c-44ab-9ec6-2d298f803f1f\",\"name\":\"Electrónica\",\"description\":\"Componentes y equipos de laboratorio\",\"createdAt\":\"2026-05-06T13:45:05.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"4fb54e93-94e0-4ebe-910c-83827f31c55f\",\"name\":\"Consumibles\",\"description\":\"Insumos que se gastan con el uso\",\"createdAt\":\"2026-05-06T13:14:04.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"03bce764-21b1-498d-882d-a7bc0c9c748c\",\"name\":\"Elementos de seguridad\",\"description\":\"EPP para prácticas de taller\",\"createdAt\":\"2026-05-06T11:36:03.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"969683e3-5e71-4f21-8919-c868d09d37fe\",\"name\":\"Instrumentos de medición\",\"description\":\"Multímetros, calibres y medidores\",\"createdAt\":\"2026-05-06T15:11:02.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"4cd57d04-e52d-4d7f-9a71-17de4b80ff64\",\"name\":\"Herramientas eléctricas\",\"description\":\"Equipos con motor o batería\",\"createdAt\":\"2026-05-06T17:51:01.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"c9833fe5-1c4b-49b0-bf3c-eab461cc22e6\",\"name\":\"Herramientas manuales\",\"description\":\"Llaves, destornilladores, martillos y similares\",\"createdAt\":\"2026-05-06T17:01:00.000Z\",\"createdBy\":\"Administración Demo\"}],\"responsibles\":[{\"id\":\"c80c66a1-4572-4bf9-a290-9cee825a121b\",\"type\":\"administrativo\",\"fullName\":\"Raúl Villca\",\"dni\":\"30000733\",\"admissionDate\":\"\",\"course\":\"\",\"division\":\"\",\"orientation\":\"\",\"specialty\":\"\",\"position\":\"Preceptor\",\"address\":\"Pasaje Inventado 20\",\"email\":\"personal2@escuela.demo\",\"phone\":\"388 780-4134\",\"createdAt\":\"2026-11-04T03:05:22.472Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"d62e92bf-3ee7-42fc-89e5-2858a20ba2e2\",\"type\":\"administrativo\",\"fullName\":\"Mónica Zerpa\",\"dni\":\"30000000\",\"admissionDate\":\"\",\"course\":\"\",\"division\":\"\",\"orientation\":\"\",\"specialty\":\"\",\"position\":\"Secretaria\",\"address\":\"Pasaje Inventado 93\",\"email\":\"personal1@escuela.demo\",\"phone\":\"388 752-1233\",\"createdAt\":\"2026-11-04T03:05:22.468Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"9c123896-8f1e-4f14-9053-2fb0f4f7b954\",\"type\":\"profesor\",\"fullName\":\"Prof. Silvina Rueda\",\"dni\":\"25004555\",\"admissionDate\":\"\",\"course\":\"\",\"division\":\"\",\"orientation\":\"\",\"specialty\":\"Física\",\"position\":\"\",\"address\":\"Av. Imaginaria 1804\",\"email\":\"docente6@escuela.demo\",\"phone\":\"388 626-2652\",\"createdAt\":\"2026-11-04T03:05:22.464Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"7f17f03f-7c6b-4526-8ea4-29887f28dff8\",\"type\":\"profesor\",\"fullName\":\"Arq. Hernán Calizaya\",\"dni\":\"25003644\",\"admissionDate\":\"\",\"course\":\"\",\"division\":\"\",\"orientation\":\"\",\"specialty\":\"Construcciones\",\"position\":\"\",\"address\":\"Av. Imaginaria 546\",\"email\":\"docente5@escuela.demo\",\"phone\":\"388 680-4876\",\"createdAt\":\"2026-11-04T03:05:22.460Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"fa776789-3d79-4a26-8d0a-784ec6a1d019\",\"type\":\"profesor\",\"fullName\":\"Prof. Natalia Burgos\",\"dni\":\"25002733\",\"admissionDate\":\"\",\"course\":\"\",\"division\":\"\",\"orientation\":\"\",\"specialty\":\"Informática\",\"position\":\"\",\"address\":\"Av. Imaginaria 768\",\"email\":\"docente4@escuela.demo\",\"phone\":\"388 674-4112\",\"createdAt\":\"2026-11-04T03:05:22.457Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"ea7a4198-bdeb-4794-837b-ae0e73d65f16\",\"type\":\"profesor\",\"fullName\":\"Ing. Gustavo Tolaba\",\"dni\":\"25001822\",\"admissionDate\":\"\",\"course\":\"\",\"division\":\"\",\"orientation\":\"\",\"specialty\":\"Electrónica\",\"position\":\"\",\"address\":\"Av. Imaginaria 1871\",\"email\":\"docente3@escuela.demo\",\"phone\":\"388 621-2035\",\"createdAt\":\"2026-11-04T03:05:22.453Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"bc084837-1c33-4e25-a3a2-822ae0218fbb\",\"type\":\"profesor\",\"fullName\":\"Prof. Andrea Choque\",\"dni\":\"25000911\",\"admissionDate\":\"\",\"course\":\"\",\"division\":\"\",\"orientation\":\"\",\"specialty\":\"Química\",\"position\":\"\",\"address\":\"Av. Imaginaria 258\",\"email\":\"docente2@escuela.demo\",\"phone\":\"388 655-5586\",\"createdAt\":\"2026-11-04T03:05:22.449Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"923a5e90-735c-4a78-b8e0-69b75064b382\",\"type\":\"profesor\",\"fullName\":\"Ing. Ricardo Salinas\",\"dni\":\"25000000\",\"admissionDate\":\"\",\"course\":\"\",\"division\":\"\",\"orientation\":\"\",\"specialty\":\"Electromecánica\",\"position\":\"\",\"address\":\"Av. Imaginaria 1470\",\"email\":\"docente1@escuela.demo\",\"phone\":\"388 652-6652\",\"createdAt\":\"2026-11-04T03:05:22.446Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"c744c4e8-f00c-43a9-a85f-711638a73fe2\",\"type\":\"alumno\",\"fullName\":\"Ignacio Herrera\",\"dni\":\"46003752\",\"admissionDate\":\"2021-03-01\",\"course\":\"6°\",\"division\":\"2da\",\"orientation\":\"Técnico Electromecánico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 651\",\"email\":\"ignacio.27@alumnos.demo\",\"phone\":\"388 554-7654\",\"createdAt\":\"2026-11-04T03:05:22.442Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"47cace58-682d-44df-9dc2-e6dec6e138b4\",\"type\":\"alumno\",\"fullName\":\"Lautaro Gutiérrez\",\"dni\":\"46003660\",\"admissionDate\":\"2022-03-01\",\"course\":\"5°\",\"division\":\"2da\",\"orientation\":\"Técnico Químico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 411\",\"email\":\"lautaro.26@alumnos.demo\",\"phone\":\"388 595-7512\",\"createdAt\":\"2026-11-04T03:05:22.439Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"5a27a058-75a6-4fd9-a9df-144ccbab185a\",\"type\":\"alumno\",\"fullName\":\"Catalina Torres\",\"dni\":\"46003506\",\"admissionDate\":\"2020-03-01\",\"course\":\"7°\",\"division\":\"2da\",\"orientation\":\"Técnico Químico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 461\",\"email\":\"catalina.25@alumnos.demo\",\"phone\":\"388 530-6015\",\"createdAt\":\"2026-11-04T03:05:22.435Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"687911d3-673a-4497-81b9-fe086efdaab6\",\"type\":\"alumno\",\"fullName\":\"Agustina Quispe\",\"dni\":\"46003383\",\"admissionDate\":\"2024-03-01\",\"course\":\"3°\",\"division\":\"2da\",\"orientation\":\"Técnico en Informática\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 456\",\"email\":\"agustina.24@alumnos.demo\",\"phone\":\"388 599-8646\",\"createdAt\":\"2026-11-04T03:05:22.432Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"f64bce54-01fa-4f70-ba23-c6236451e091\",\"type\":\"alumno\",\"fullName\":\"Felipe Morales\",\"dni\":\"46003231\",\"admissionDate\":\"2024-03-01\",\"course\":\"3°\",\"division\":\"2da\",\"orientation\":\"Técnico Químico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 651\",\"email\":\"felipe.23@alumnos.demo\",\"phone\":\"388 555-8838\",\"createdAt\":\"2026-11-04T03:05:22.428Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"3d22736b-d646-492c-95ee-d087951f5f78\",\"type\":\"alumno\",\"fullName\":\"Emma Chávez\",\"dni\":\"46003066\",\"admissionDate\":\"2023-03-01\",\"course\":\"4°\",\"division\":\"3ra\",\"orientation\":\"Técnico en Informática\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 202\",\"email\":\"emma.22@alumnos.demo\",\"phone\":\"388 540-1856\",\"createdAt\":\"2026-11-04T03:05:22.425Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"4c5debdd-7e93-4694-a703-963d74d4665d\",\"type\":\"alumno\",\"fullName\":\"Tomás Chávez\",\"dni\":\"46002972\",\"admissionDate\":\"2023-03-01\",\"course\":\"4°\",\"division\":\"1ra\",\"orientation\":\"Técnico Químico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 732\",\"email\":\"tomas.21@alumnos.demo\",\"phone\":\"388 515-5950\",\"createdAt\":\"2026-11-04T03:05:22.422Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"870cc513-2a46-4f6d-b544-f820ff344241\",\"type\":\"alumno\",\"fullName\":\"Santiago Herrera\",\"dni\":\"46002786\",\"admissionDate\":\"2023-03-01\",\"course\":\"4°\",\"division\":\"2da\",\"orientation\":\"Maestro Mayor de Obras\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 962\",\"email\":\"santiago.20@alumnos.demo\",\"phone\":\"388 584-6436\",\"createdAt\":\"2026-11-04T03:05:22.418Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"149e8c8d-68a6-492d-8bed-fe586d06ffdd\",\"type\":\"alumno\",\"fullName\":\"Thiago Aguirre\",\"dni\":\"46002655\",\"admissionDate\":\"2024-03-01\",\"course\":\"3°\",\"division\":\"1ra\",\"orientation\":\"Maestro Mayor de Obras\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 106\",\"email\":\"thiago.19@alumnos.demo\",\"phone\":\"388 583-5764\",\"createdAt\":\"2026-11-04T03:05:22.412Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"c9af0504-3854-44fe-9c1b-adb79c4d2f00\",\"type\":\"alumno\",\"fullName\":\"Tomás Flores\",\"dni\":\"46002487\",\"admissionDate\":\"2020-03-01\",\"course\":\"7°\",\"division\":\"1ra\",\"orientation\":\"Técnico Químico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 853\",\"email\":\"tomas.18@alumnos.demo\",\"phone\":\"388 576-3557\",\"createdAt\":\"2026-11-04T03:05:22.410Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"73b244ec-396b-4bd0-ba61-abacfd088055\",\"type\":\"alumno\",\"fullName\":\"Camila Quispe\",\"dni\":\"46002376\",\"admissionDate\":\"2022-03-01\",\"course\":\"5°\",\"division\":\"2da\",\"orientation\":\"Técnico en Informática\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 457\",\"email\":\"camila.17@alumnos.demo\",\"phone\":\"388 522-7714\",\"createdAt\":\"2026-11-04T03:05:22.407Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"7c6a3c2c-1e9b-48dc-8754-ba9fed391d68\",\"type\":\"alumno\",\"fullName\":\"Joaquín Chávez\",\"dni\":\"46002271\",\"admissionDate\":\"2020-03-01\",\"course\":\"7°\",\"division\":\"3ra\",\"orientation\":\"Técnico Electromecánico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 184\",\"email\":\"joaquin.16@alumnos.demo\",\"phone\":\"388 588-7616\",\"createdAt\":\"2026-11-04T03:05:22.404Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"5a2ac4d9-8caa-4dd7-97cd-b121e26a5189\",\"type\":\"alumno\",\"fullName\":\"Facundo López\",\"dni\":\"46002060\",\"admissionDate\":\"2021-03-01\",\"course\":\"6°\",\"division\":\"2da\",\"orientation\":\"Técnico Químico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 186\",\"email\":\"facundo.15@alumnos.demo\",\"phone\":\"388 571-1857\",\"createdAt\":\"2026-11-04T03:05:22.402Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"a36c761b-1564-4348-a698-b32d4965ec09\",\"type\":\"alumno\",\"fullName\":\"Emma Suárez\",\"dni\":\"46001993\",\"admissionDate\":\"2024-03-01\",\"course\":\"3°\",\"division\":\"1ra\",\"orientation\":\"Técnico Químico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 223\",\"email\":\"emma.14@alumnos.demo\",\"phone\":\"388 551-9961\",\"createdAt\":\"2026-11-04T03:05:22.399Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"6eea03cc-8f5b-4ee4-aa8d-0346b3dd0193\",\"type\":\"alumno\",\"fullName\":\"Martina Cruz\",\"dni\":\"46001819\",\"admissionDate\":\"2023-03-01\",\"course\":\"4°\",\"division\":\"1ra\",\"orientation\":\"Técnico Químico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 643\",\"email\":\"martina.13@alumnos.demo\",\"phone\":\"388 535-4154\",\"createdAt\":\"2026-11-04T03:05:22.397Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"b6b8f17b-67eb-47a1-ac05-befc0d8c5aa0\",\"type\":\"alumno\",\"fullName\":\"Joaquín Álvarez\",\"dni\":\"46001697\",\"admissionDate\":\"2024-03-01\",\"course\":\"3°\",\"division\":\"3ra\",\"orientation\":\"Técnico Químico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 470\",\"email\":\"joaquin.12@alumnos.demo\",\"phone\":\"388 577-2765\",\"createdAt\":\"2026-11-04T03:05:22.394Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"ffe726dd-406b-4056-88d2-d515268fb425\",\"type\":\"alumno\",\"fullName\":\"Lucía Martínez\",\"dni\":\"46001523\",\"admissionDate\":\"2020-03-01\",\"course\":\"7°\",\"division\":\"3ra\",\"orientation\":\"Técnico Químico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 818\",\"email\":\"lucia.11@alumnos.demo\",\"phone\":\"388 522-1429\",\"createdAt\":\"2026-11-04T03:05:22.391Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"230564cd-fb61-4f67-b296-dfa763fb3aa8\",\"type\":\"alumno\",\"fullName\":\"Lucía Álvarez\",\"dni\":\"46001414\",\"admissionDate\":\"2022-03-01\",\"course\":\"5°\",\"division\":\"2da\",\"orientation\":\"Técnico en Informática\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 633\",\"email\":\"lucia.10@alumnos.demo\",\"phone\":\"388 566-7727\",\"createdAt\":\"2026-11-04T03:05:22.388Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"b346d5bc-a0bf-4d94-b5dd-c50926d9f12c\",\"type\":\"alumno\",\"fullName\":\"Lautaro Cruz\",\"dni\":\"46001323\",\"admissionDate\":\"2020-03-01\",\"course\":\"7°\",\"division\":\"2da\",\"orientation\":\"Técnico Electromecánico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 484\",\"email\":\"lautaro.9@alumnos.demo\",\"phone\":\"388 539-2133\",\"createdAt\":\"2026-11-04T03:05:22.385Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"6a5adae1-f660-4088-abe5-ae1478fbdfea\",\"type\":\"alumno\",\"fullName\":\"Franco Castro\",\"dni\":\"46001099\",\"admissionDate\":\"2023-03-01\",\"course\":\"4°\",\"division\":\"2da\",\"orientation\":\"Técnico Electromecánico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 225\",\"email\":\"franco.8@alumnos.demo\",\"phone\":\"388 578-7028\",\"createdAt\":\"2026-11-04T03:05:22.382Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"81ce71d4-fc3e-4139-af5c-1f6117433fe8\",\"type\":\"alumno\",\"fullName\":\"Lautaro Álvarez\",\"dni\":\"46001022\",\"admissionDate\":\"2022-03-01\",\"course\":\"5°\",\"division\":\"2da\",\"orientation\":\"Técnico Electromecánico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 953\",\"email\":\"lautaro.7@alumnos.demo\",\"phone\":\"388 555-2276\",\"createdAt\":\"2026-11-04T03:05:22.378Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"68881ca7-e0e1-45c1-8732-a9c9042ce415\",\"type\":\"alumno\",\"fullName\":\"Lucía Sánchez\",\"dni\":\"46000917\",\"admissionDate\":\"2022-03-01\",\"course\":\"5°\",\"division\":\"2da\",\"orientation\":\"Maestro Mayor de Obras\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 894\",\"email\":\"lucia.6@alumnos.demo\",\"phone\":\"388 581-8840\",\"createdAt\":\"2026-11-04T03:05:22.375Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"7779849d-8881-4195-9cf6-ab924cae1d8d\",\"type\":\"alumno\",\"fullName\":\"Abril Quispe\",\"dni\":\"46000726\",\"admissionDate\":\"2023-03-01\",\"course\":\"4°\",\"division\":\"3ra\",\"orientation\":\"Técnico Químico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 917\",\"email\":\"abril.5@alumnos.demo\",\"phone\":\"388 577-9619\",\"createdAt\":\"2026-11-04T03:05:22.372Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"84d0d607-a2f2-41b4-8404-67f333a89737\",\"type\":\"alumno\",\"fullName\":\"Felipe Suárez\",\"dni\":\"46000608\",\"admissionDate\":\"2024-03-01\",\"course\":\"3°\",\"division\":\"1ra\",\"orientation\":\"Técnico Electromecánico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 435\",\"email\":\"felipe.4@alumnos.demo\",\"phone\":\"388 526-9042\",\"createdAt\":\"2026-11-04T03:05:22.370Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"de049e45-0859-4786-8016-d5ef45162524\",\"type\":\"alumno\",\"fullName\":\"Joaquín Martínez\",\"dni\":\"46000463\",\"admissionDate\":\"2022-03-01\",\"course\":\"5°\",\"division\":\"2da\",\"orientation\":\"Técnico en Informática\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 814\",\"email\":\"joaquin.3@alumnos.demo\",\"phone\":\"388 524-6299\",\"createdAt\":\"2026-11-04T03:05:22.366Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"4e460f14-6f1b-4ec2-b18e-a68209d91b51\",\"type\":\"alumno\",\"fullName\":\"Emma Flores\",\"dni\":\"46000287\",\"admissionDate\":\"2020-03-01\",\"course\":\"7°\",\"division\":\"3ra\",\"orientation\":\"Técnico en Informática\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 995\",\"email\":\"emma.2@alumnos.demo\",\"phone\":\"388 542-3718\",\"createdAt\":\"2026-11-04T03:05:22.364Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"67766147-ff92-43c7-b885-371f63d625a2\",\"type\":\"alumno\",\"fullName\":\"Agustina Cruz\",\"dni\":\"46000217\",\"admissionDate\":\"2020-03-01\",\"course\":\"7°\",\"division\":\"1ra\",\"orientation\":\"Técnico Químico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 574\",\"email\":\"agustina.1@alumnos.demo\",\"phone\":\"388 524-6345\",\"createdAt\":\"2026-11-04T03:05:22.360Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"ef4b2426-1dce-4151-a9b1-11c0b79611ec\",\"type\":\"alumno\",\"fullName\":\"Felipe Martínez\",\"dni\":\"46000053\",\"admissionDate\":\"2023-03-01\",\"course\":\"4°\",\"division\":\"1ra\",\"orientation\":\"Técnico Electromecánico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 24\",\"email\":\"felipe.0@alumnos.demo\",\"phone\":\"388 595-1376\",\"createdAt\":\"2026-11-04T03:05:22.357Z\",\"createdBy\":\"Jorge Medina\"}],\"consumptions\":[{\"id\":\"6ca9c30a-30e2-4e7d-8f2e-639230945917\",\"itemId\":\"83741bb8-42c4-48bd-94f1-54e4ba9022a3\",\"responsibleId\":\"fa776789-3d79-4a26-8d0a-784ec6a1d019\",\"responsible\":\"Prof. Natalia Burgos\",\"department\":\"Docentes\",\"costCenter\":\"Laboratorio de Química\",\"quantity\":2,\"detail\":\"\",\"createdAt\":\"2026-11-02T13:31:49.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"879ecfa6-d8ca-462f-93fc-f90d7258e7ea\",\"itemId\":\"77d08dc1-0f3a-40d6-8044-dc9e45719ec3\",\"responsibleId\":\"4e460f14-6f1b-4ec2-b18e-a68209d91b51\",\"responsible\":\"Emma Flores\",\"department\":\"7° 3ra\",\"costCenter\":\"Informática\",\"quantity\":4,\"detail\":\"\",\"createdAt\":\"2026-10-30T14:20:45.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"88d4babd-afc8-484f-b6fb-b042886f8cd3\",\"itemId\":\"1e9fb983-2215-499f-8034-c220699c0f1a\",\"responsibleId\":\"230564cd-fb61-4f67-b296-dfa763fb3aa8\",\"responsible\":\"Lucía Álvarez\",\"department\":\"5° 2da\",\"costCenter\":\"Construcciones\",\"quantity\":2,\"detail\":\"Mantenimiento\",\"createdAt\":\"2026-10-27T13:41:33.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"49ebe119-fe33-444a-8729-084a10347f22\",\"itemId\":\"615cec83-33c2-4842-bfe9-a112ba4223d3\",\"responsibleId\":\"f64bce54-01fa-4f70-ba23-c6236451e091\",\"responsible\":\"Felipe Morales\",\"department\":\"3° 2da\",\"costCenter\":\"Taller de Electromecánica\",\"quantity\":2,\"detail\":\"\",\"createdAt\":\"2026-10-23T17:26:28.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"b8df53d6-244a-46b7-a753-89a839107062\",\"itemId\":\"1e9fb983-2215-499f-8034-c220699c0f1a\",\"responsibleId\":\"c744c4e8-f00c-43a9-a85f-711638a73fe2\",\"responsible\":\"Ignacio Herrera\",\"department\":\"6° 2da\",\"costCenter\":\"Construcciones\",\"quantity\":1,\"detail\":\"Proyecto de 6° año\",\"createdAt\":\"2026-10-21T19:36:24.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"9f667df8-7c1c-45e7-b86c-ac94807891b5\",\"itemId\":\"2bf152f3-6db0-4ca1-9c34-30b141464d7d\",\"responsibleId\":\"fa776789-3d79-4a26-8d0a-784ec6a1d019\",\"responsible\":\"Prof. Natalia Burgos\",\"department\":\"Docentes\",\"costCenter\":\"Construcciones\",\"quantity\":1,\"detail\":\"\",\"createdAt\":\"2026-10-16T19:08:16.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"0b9ac22b-54d2-4b81-aca7-19b5cc99674c\",\"itemId\":\"83741bb8-42c4-48bd-94f1-54e4ba9022a3\",\"responsibleId\":\"d62e92bf-3ee7-42fc-89e5-2858a20ba2e2\",\"responsible\":\"Mónica Zerpa\",\"department\":\"Docentes\",\"costCenter\":\"Construcciones\",\"quantity\":1,\"detail\":\"Práctica de soldadura\",\"createdAt\":\"2026-10-14T16:18:10.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"fe06f356-8801-4055-b100-bb4104e4acfd\",\"itemId\":\"83741bb8-42c4-48bd-94f1-54e4ba9022a3\",\"responsibleId\":\"d62e92bf-3ee7-42fc-89e5-2858a20ba2e2\",\"responsible\":\"Mónica Zerpa\",\"department\":\"Docentes\",\"costCenter\":\"Administración\",\"quantity\":2,\"detail\":\"Mantenimiento\",\"createdAt\":\"2026-10-07T12:27:47.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"8d0b1be9-a06c-4f4a-9a36-15bffb4acc5c\",\"itemId\":\"68b2a016-3cd5-49e6-b2cb-d3907d8756a1\",\"responsibleId\":\"7f17f03f-7c6b-4526-8ea4-29887f28dff8\",\"responsible\":\"Arq. Hernán Calizaya\",\"department\":\"Docentes\",\"costCenter\":\"Construcciones\",\"quantity\":1,\"detail\":\"\",\"createdAt\":\"2026-10-06T14:50:46.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"6bc5c381-501d-4583-9b0e-3f7904e037d4\",\"itemId\":\"13fd7aa0-229b-4f79-9174-a513c2078567\",\"responsibleId\":\"67766147-ff92-43c7-b885-371f63d625a2\",\"responsible\":\"Agustina Cruz\",\"department\":\"7° 1ra\",\"costCenter\":\"Laboratorio de Química\",\"quantity\":4,\"detail\":\"Práctica de soldadura\",\"createdAt\":\"2026-10-05T15:35:43.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"23b46706-a9bc-4109-aaa8-934d1a088ed3\",\"itemId\":\"68b2a016-3cd5-49e6-b2cb-d3907d8756a1\",\"responsibleId\":\"7f17f03f-7c6b-4526-8ea4-29887f28dff8\",\"responsible\":\"Arq. Hernán Calizaya\",\"department\":\"Docentes\",\"costCenter\":\"Taller de Electromecánica\",\"quantity\":7,\"detail\":\"Práctica de soldadura\",\"createdAt\":\"2026-09-28T14:27:29.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"da7eae34-c7c6-4f46-bfdf-8afa97e888c5\",\"itemId\":\"1e9fb983-2215-499f-8034-c220699c0f1a\",\"responsibleId\":\"3d22736b-d646-492c-95ee-d087951f5f78\",\"responsible\":\"Emma Chávez\",\"department\":\"4° 3ra\",\"costCenter\":\"Construcciones\",\"quantity\":1,\"detail\":\"\",\"createdAt\":\"2026-09-24T15:45:19.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"768fcf7f-af0e-4b4b-9645-15736300b016\",\"itemId\":\"1e9fb983-2215-499f-8034-c220699c0f1a\",\"responsibleId\":\"68881ca7-e0e1-45c1-8732-a9c9042ce415\",\"responsible\":\"Lucía Sánchez\",\"department\":\"5° 2da\",\"costCenter\":\"Construcciones\",\"quantity\":4,\"detail\":\"Trabajo práctico\",\"createdAt\":\"2026-09-22T12:59:14.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"718b7628-c1e5-4fb7-b5b9-c2ca454d0ff0\",\"itemId\":\"a71f2741-fe0e-4786-a954-cbe960866894\",\"responsibleId\":\"923a5e90-735c-4a78-b8e0-69b75064b382\",\"responsible\":\"Ing. Ricardo Salinas\",\"department\":\"Docentes\",\"costCenter\":\"Informática\",\"quantity\":1,\"detail\":\"Práctica de soldadura\",\"createdAt\":\"2026-09-21T14:19:13.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"4a264941-86e2-4ce3-8ede-f142887526f3\",\"itemId\":\"1e9fb983-2215-499f-8034-c220699c0f1a\",\"responsibleId\":\"230564cd-fb61-4f67-b296-dfa763fb3aa8\",\"responsible\":\"Lucía Álvarez\",\"department\":\"5° 2da\",\"costCenter\":\"Laboratorio de Química\",\"quantity\":4,\"detail\":\"Trabajo práctico\",\"createdAt\":\"2026-09-15T19:34:44.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"e38ddcce-a956-4d63-9a33-79bf3a896ffb\",\"itemId\":\"063a365a-11ed-4766-8373-178977d92402\",\"responsibleId\":\"84d0d607-a2f2-41b4-8404-67f333a89737\",\"responsible\":\"Felipe Suárez\",\"department\":\"3° 1ra\",\"costCenter\":\"Informática\",\"quantity\":2,\"detail\":\"Trabajo práctico\",\"createdAt\":\"2026-09-11T17:46:35.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"030339eb-3407-4de2-b9e1-1dd09a0a15b9\",\"itemId\":\"83741bb8-42c4-48bd-94f1-54e4ba9022a3\",\"responsibleId\":\"7f17f03f-7c6b-4526-8ea4-29887f28dff8\",\"responsible\":\"Arq. Hernán Calizaya\",\"department\":\"Docentes\",\"costCenter\":\"Construcciones\",\"quantity\":1,\"detail\":\"Proyecto de 6° año\",\"createdAt\":\"2026-08-31T15:17:04.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"c5f508e3-3ba4-49a4-9bdd-8b03d897baae\",\"itemId\":\"83741bb8-42c4-48bd-94f1-54e4ba9022a3\",\"responsibleId\":\"7c6a3c2c-1e9b-48dc-8754-ba9fed391d68\",\"responsible\":\"Joaquín Chávez\",\"department\":\"7° 3ra\",\"costCenter\":\"Informática\",\"quantity\":1,\"detail\":\"Proyecto de 6° año\",\"createdAt\":\"2026-08-27T15:40:45.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"24591eae-5a72-41d1-a393-1658ea0701ea\",\"itemId\":\"a71f2741-fe0e-4786-a954-cbe960866894\",\"responsibleId\":\"d62e92bf-3ee7-42fc-89e5-2858a20ba2e2\",\"responsible\":\"Mónica Zerpa\",\"department\":\"Docentes\",\"costCenter\":\"Construcciones\",\"quantity\":1,\"detail\":\"\",\"createdAt\":\"2026-08-26T19:53:41.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"237c0a9a-4db3-4e18-85b5-5e4a7b7c41e2\",\"itemId\":\"615cec83-33c2-4842-bfe9-a112ba4223d3\",\"responsibleId\":\"ea7a4198-bdeb-4794-837b-ae0e73d65f16\",\"responsible\":\"Ing. Gustavo Tolaba\",\"department\":\"Docentes\",\"costCenter\":\"Taller de Electromecánica\",\"quantity\":3,\"detail\":\"Trabajo práctico\",\"createdAt\":\"2026-08-24T16:19:33.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"e4c377b7-9c13-4deb-8d37-dac52a709e73\",\"itemId\":\"063a365a-11ed-4766-8373-178977d92402\",\"responsibleId\":\"c9af0504-3854-44fe-9c1b-adb79c4d2f00\",\"responsible\":\"Tomás Flores\",\"department\":\"7° 1ra\",\"costCenter\":\"Administración\",\"quantity\":1,\"detail\":\"Práctica de soldadura\",\"createdAt\":\"2026-08-18T17:16:18.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"5f9a40ec-3e9c-4976-97af-0338b41560f5\",\"itemId\":\"063a365a-11ed-4766-8373-178977d92402\",\"responsibleId\":\"5a2ac4d9-8caa-4dd7-97cd-b121e26a5189\",\"responsible\":\"Facundo López\",\"department\":\"6° 2da\",\"costCenter\":\"Administración\",\"quantity\":4,\"detail\":\"Mantenimiento\",\"createdAt\":\"2026-08-17T15:52:15.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"8397fccb-0254-4aed-8895-464bbf0a1e2f\",\"itemId\":\"68b2a016-3cd5-49e6-b2cb-d3907d8756a1\",\"responsibleId\":\"923a5e90-735c-4a78-b8e0-69b75064b382\",\"responsible\":\"Ing. Ricardo Salinas\",\"department\":\"Docentes\",\"costCenter\":\"Taller de Electromecánica\",\"quantity\":10,\"detail\":\"Proyecto de 6° año\",\"createdAt\":\"2026-08-10T18:59:08.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"9b008f09-1ae3-4c36-9af4-74c73a110a10\",\"itemId\":\"2bf152f3-6db0-4ca1-9c34-30b141464d7d\",\"responsibleId\":\"4e460f14-6f1b-4ec2-b18e-a68209d91b51\",\"responsible\":\"Emma Flores\",\"department\":\"7° 3ra\",\"costCenter\":\"Taller de Electromecánica\",\"quantity\":4,\"detail\":\"Trabajo práctico\",\"createdAt\":\"2026-08-05T14:59:02.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"87bfb46d-4f28-45ff-831b-dc1eb03abd74\",\"itemId\":\"063a365a-11ed-4766-8373-178977d92402\",\"responsibleId\":\"d62e92bf-3ee7-42fc-89e5-2858a20ba2e2\",\"responsible\":\"Mónica Zerpa\",\"department\":\"Docentes\",\"costCenter\":\"Laboratorio de Química\",\"quantity\":1,\"detail\":\"Práctica de soldadura\",\"createdAt\":\"2026-08-03T18:23:45.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"24194ac1-8490-43d6-a7d0-53700cf13842\",\"itemId\":\"1e9fb983-2215-499f-8034-c220699c0f1a\",\"responsibleId\":\"7f17f03f-7c6b-4526-8ea4-29887f28dff8\",\"responsible\":\"Arq. Hernán Calizaya\",\"department\":\"Docentes\",\"costCenter\":\"Informática\",\"quantity\":4,\"detail\":\"Trabajo práctico\",\"createdAt\":\"2026-07-29T13:45:39.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"ab4e0bd5-5c7f-4818-9480-4299e690fe3f\",\"itemId\":\"0b37eef5-1e99-49f1-885d-451175b0a403\",\"responsibleId\":\"870cc513-2a46-4f6d-b544-f820ff344241\",\"responsible\":\"Santiago Herrera\",\"department\":\"4° 2da\",\"costCenter\":\"Laboratorio de Química\",\"quantity\":1,\"detail\":\"\",\"createdAt\":\"2026-07-10T19:45:25.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"ed30be7b-c94e-4f77-b29f-b2ebbd1a2d17\",\"itemId\":\"13fd7aa0-229b-4f79-9174-a513c2078567\",\"responsibleId\":\"d62e92bf-3ee7-42fc-89e5-2858a20ba2e2\",\"responsible\":\"Mónica Zerpa\",\"department\":\"Docentes\",\"costCenter\":\"Laboratorio de Química\",\"quantity\":1,\"detail\":\"Práctica de soldadura\",\"createdAt\":\"2026-07-09T19:19:21.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"d891e1dd-e485-44c5-bca0-d58dcd3085a1\",\"itemId\":\"a71f2741-fe0e-4786-a954-cbe960866894\",\"responsibleId\":\"81ce71d4-fc3e-4139-af5c-1f6117433fe8\",\"responsible\":\"Lautaro Álvarez\",\"department\":\"5° 2da\",\"costCenter\":\"Administración\",\"quantity\":3,\"detail\":\"\",\"createdAt\":\"2026-07-08T14:03:17.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"56ae81e1-4b0c-4d9a-abee-405438f543a2\",\"itemId\":\"063a365a-11ed-4766-8373-178977d92402\",\"responsibleId\":\"149e8c8d-68a6-492d-8bed-fe586d06ffdd\",\"responsible\":\"Thiago Aguirre\",\"department\":\"3° 1ra\",\"costCenter\":\"Administración\",\"quantity\":2,\"detail\":\"Práctica de soldadura\",\"createdAt\":\"2026-07-03T19:04:06.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"8c8f7493-bd82-4f67-9ef0-3271be7bad04\",\"itemId\":\"68b2a016-3cd5-49e6-b2cb-d3907d8756a1\",\"responsibleId\":\"5a27a058-75a6-4fd9-a9df-144ccbab185a\",\"responsible\":\"Catalina Torres\",\"department\":\"7° 2da\",\"costCenter\":\"Construcciones\",\"quantity\":2,\"detail\":\"\",\"createdAt\":\"2026-06-30T14:43:41.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"aacb8815-294b-4e92-b6f1-daf4ad4dae2b\",\"itemId\":\"a71f2741-fe0e-4786-a954-cbe960866894\",\"responsibleId\":\"73b244ec-396b-4bd0-ba61-abacfd088055\",\"responsible\":\"Camila Quispe\",\"department\":\"5° 2da\",\"costCenter\":\"Informática\",\"quantity\":2,\"detail\":\"Proyecto de 6° año\",\"createdAt\":\"2026-06-29T16:36:36.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"cd415297-9ef4-4c82-9c64-60f6c8807020\",\"itemId\":\"13fd7aa0-229b-4f79-9174-a513c2078567\",\"responsibleId\":\"ea7a4198-bdeb-4794-837b-ae0e73d65f16\",\"responsible\":\"Ing. Gustavo Tolaba\",\"department\":\"Docentes\",\"costCenter\":\"Informática\",\"quantity\":1,\"detail\":\"\",\"createdAt\":\"2026-06-24T18:34:18.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"7857ada5-b319-4e95-8e12-148663dc8a09\",\"itemId\":\"2bf152f3-6db0-4ca1-9c34-30b141464d7d\",\"responsibleId\":\"c80c66a1-4572-4bf9-a290-9cee825a121b\",\"responsible\":\"Raúl Villca\",\"department\":\"Docentes\",\"costCenter\":\"Laboratorio de Química\",\"quantity\":1,\"detail\":\"Trabajo práctico\",\"createdAt\":\"2026-06-17T17:34:43.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"95dde556-64d0-4e87-89a7-490132f86285\",\"itemId\":\"1e9fb983-2215-499f-8034-c220699c0f1a\",\"responsibleId\":\"9c123896-8f1e-4f14-9053-2fb0f4f7b954\",\"responsible\":\"Prof. Silvina Rueda\",\"department\":\"Docentes\",\"costCenter\":\"Informática\",\"quantity\":1,\"detail\":\"Trabajo práctico\",\"createdAt\":\"2026-06-12T19:35:33.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"edf4fb33-d133-46ec-9ffe-e500288159bd\",\"itemId\":\"0b37eef5-1e99-49f1-885d-451175b0a403\",\"responsibleId\":\"84d0d607-a2f2-41b4-8404-67f333a89737\",\"responsible\":\"Felipe Suárez\",\"department\":\"3° 1ra\",\"costCenter\":\"Informática\",\"quantity\":3,\"detail\":\"Trabajo práctico\",\"createdAt\":\"2026-06-10T15:30:24.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"e8e70e6b-3306-4e55-819b-ac7a5f076f46\",\"itemId\":\"615cec83-33c2-4842-bfe9-a112ba4223d3\",\"responsibleId\":\"923a5e90-735c-4a78-b8e0-69b75064b382\",\"responsible\":\"Ing. Ricardo Salinas\",\"department\":\"Docentes\",\"costCenter\":\"Taller de Electromecánica\",\"quantity\":2,\"detail\":\"\",\"createdAt\":\"2026-06-08T18:56:17.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"c26497da-f2bf-4360-84d4-5f1983492c22\",\"itemId\":\"0b37eef5-1e99-49f1-885d-451175b0a403\",\"responsibleId\":\"687911d3-673a-4497-81b9-fe086efdaab6\",\"responsible\":\"Agustina Quispe\",\"department\":\"3° 2da\",\"costCenter\":\"Taller de Electromecánica\",\"quantity\":4,\"detail\":\"Mantenimiento\",\"createdAt\":\"2026-06-05T13:16:11.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"5c14f0fe-fe8b-413f-9da0-605b2bdca70f\",\"itemId\":\"19d54b82-5b53-43ea-9bb5-3d22600bced9\",\"responsibleId\":\"bc084837-1c33-4e25-a3a2-822ae0218fbb\",\"responsible\":\"Prof. Andrea Choque\",\"department\":\"Docentes\",\"costCenter\":\"Taller de Electromecánica\",\"quantity\":1,\"detail\":\"Proyecto de 6° año\",\"createdAt\":\"2026-06-01T15:09:01.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"a65c3bdd-5dd8-4374-92e9-e25e851e3976\",\"itemId\":\"615cec83-33c2-4842-bfe9-a112ba4223d3\",\"responsibleId\":\"d62e92bf-3ee7-42fc-89e5-2858a20ba2e2\",\"responsible\":\"Mónica Zerpa\",\"department\":\"Docentes\",\"costCenter\":\"Taller de Electromecánica\",\"quantity\":2,\"detail\":\"\",\"createdAt\":\"2026-05-27T18:10:39.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"3b7a9e6b-f836-475b-8680-c450f7eb954a\",\"itemId\":\"68b2a016-3cd5-49e6-b2cb-d3907d8756a1\",\"responsibleId\":\"9c123896-8f1e-4f14-9053-2fb0f4f7b954\",\"responsible\":\"Prof. Silvina Rueda\",\"department\":\"Docentes\",\"costCenter\":\"Laboratorio de Química\",\"quantity\":1,\"detail\":\"\",\"createdAt\":\"2026-05-19T13:31:13.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"0cb9fb3f-50a7-4961-bf69-e6c4ed95bd2b\",\"itemId\":\"77d08dc1-0f3a-40d6-8044-dc9e45719ec3\",\"responsibleId\":\"ea7a4198-bdeb-4794-837b-ae0e73d65f16\",\"responsible\":\"Ing. Gustavo Tolaba\",\"department\":\"Docentes\",\"costCenter\":\"Laboratorio de Química\",\"quantity\":4,\"detail\":\"Trabajo práctico\",\"createdAt\":\"2026-05-18T14:11:10.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"87e60f53-21fc-43ec-a110-b394eaa492cf\",\"itemId\":\"19d54b82-5b53-43ea-9bb5-3d22600bced9\",\"responsibleId\":\"687911d3-673a-4497-81b9-fe086efdaab6\",\"responsible\":\"Agustina Quispe\",\"department\":\"3° 2da\",\"costCenter\":\"Taller de Electromecánica\",\"quantity\":2,\"detail\":\"Trabajo práctico\",\"createdAt\":\"2026-05-15T18:27:06.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"86ac2a30-9ae8-453a-bcd1-0c631e1b0c4c\",\"itemId\":\"615cec83-33c2-4842-bfe9-a112ba4223d3\",\"responsibleId\":\"c80c66a1-4572-4bf9-a290-9cee825a121b\",\"responsible\":\"Raúl Villca\",\"department\":\"Docentes\",\"costCenter\":\"Laboratorio de Química\",\"quantity\":3,\"detail\":\"Proyecto de 6° año\",\"createdAt\":\"2026-05-14T19:35:04.000Z\",\"createdBy\":\"Jorge Medina\"}],\"orientations\":[{\"id\":\"e2167821-2417-4c1a-92a6-01a996a38b2a\",\"name\":\"Maestro Mayor de Obras\",\"description\":\"\",\"createdAt\":\"2026-05-06T18:03:21.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"c9c647f9-f667-42a0-b413-ebd20da3fa6d\",\"name\":\"Técnico en Informática\",\"description\":\"\",\"createdAt\":\"2026-05-06T18:05:20.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"56671c96-7dca-4f5a-a822-23b080d36085\",\"name\":\"Técnico Químico\",\"description\":\"\",\"createdAt\":\"2026-05-06T11:16:19.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"53207308-23ea-4d8f-a8ac-d7ede7d8022f\",\"name\":\"Técnico Electromecánico\",\"description\":\"\",\"createdAt\":\"2026-05-06T18:21:18.000Z\",\"createdBy\":\"Administración Demo\"}],\"stockEntries\":[{\"id\":\"798dd95b-dadb-46c9-b10e-3bde9ab0e87a\",\"entryType\":\"donacion\",\"targetType\":\"existing\",\"itemId\":\"226b1799-b389-4659-be09-80edefd4237f\",\"itemName\":\"Cinta métrica 5 m\",\"quantity\":2,\"unitCost\":6800,\"totalCost\":13600,\"donor\":\"Ex alumnos promoción 2015\",\"observation\":\"Donación registrada para la demo\",\"createdAt\":\"2026-10-27T13:59:34.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"4a2695da-d148-452c-997c-347bbdabbed1\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"08929418-a2ed-4c71-9088-eadcaeb8783c\",\"itemName\":\"Calibre digital 150 mm\",\"quantity\":2,\"unitCost\":36800,\"totalCost\":73600,\"provider\":\"Distribuidora Técnica del Norte SA\",\"invoice\":\"A-0012-00031577\",\"observation\":\"Compra directa (demo)\",\"purchaseInvoiceId\":\"04884acc-673e-4f0d-8808-d655e39f4c72\",\"supplierId\":\"070c22b1-8988-41c9-a64e-2cb9aa16278c\",\"createdAt\":\"2026-10-26T14:42:11.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"9b1fe505-f856-400d-af95-4c147dae7613\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"2d49c52c-fff9-464e-af0c-90ce44465049\",\"itemName\":\"Destornillador plano 6 mm\",\"quantity\":6,\"unitCost\":4600,\"totalCost\":27600,\"provider\":\"Ferretería El Tornillo SRL\",\"invoice\":\"A-0003-00012390\",\"observation\":\"Compra directa (demo)\",\"purchaseInvoiceId\":\"16c54b06-fb27-4ab6-b1e8-273b53624777\",\"supplierId\":\"effbc74d-c23f-4c86-b1a9-025fa7db3803\",\"createdAt\":\"2026-10-03T14:54:10.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"bb205356-d64d-43e9-913c-07322b9a0b63\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"27d00d65-b718-41d2-9f69-b7d8434e5c64\",\"itemName\":\"Destornillador Phillips PH2\",\"quantity\":6,\"unitCost\":4700,\"totalCost\":28200,\"provider\":\"Ferretería El Tornillo SRL\",\"invoice\":\"A-0003-00012390\",\"observation\":\"Compra directa (demo)\",\"purchaseInvoiceId\":\"16c54b06-fb27-4ab6-b1e8-273b53624777\",\"supplierId\":\"effbc74d-c23f-4c86-b1a9-025fa7db3803\",\"createdAt\":\"2026-10-03T14:54:10.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"737e086b-771b-49e8-8288-5fd769bb7960\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"1e9fb983-2215-499f-8034-c220699c0f1a\",\"itemName\":\"Cinta aisladora\",\"quantity\":30,\"unitCost\":1050,\"totalCost\":31500,\"provider\":\"Ferretería El Tornillo SRL\",\"invoice\":\"A-0003-00012390\",\"observation\":\"Compra directa (demo)\",\"purchaseInvoiceId\":\"16c54b06-fb27-4ab6-b1e8-273b53624777\",\"supplierId\":\"effbc74d-c23f-4c86-b1a9-025fa7db3803\",\"createdAt\":\"2026-10-03T14:54:10.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"2626d9d3-194d-4e67-915a-42bce5131d09\",\"entryType\":\"donacion\",\"targetType\":\"existing\",\"itemId\":\"6ae5fb73-ca3a-4acd-a6d0-5425302f593d\",\"itemName\":\"Amoladora angular 115 mm\",\"quantity\":2,\"unitCost\":76500,\"totalCost\":153000,\"donor\":\"Cooperadora escolar\",\"observation\":\"Donación registrada para la demo\",\"createdAt\":\"2026-09-25T13:32:23.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"d0f06538-dd48-4078-917c-76a2d09a90cc\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"c396c76b-6ffe-4620-8e44-d370cc7f8556\",\"itemName\":\"Kit Arduino Uno\",\"quantity\":4,\"unitCost\":41000,\"totalCost\":164000,\"provider\":\"Electro Insumos Andinos\",\"invoice\":\"B-0002-00004518\",\"observation\":\"\",\"purchaseRequestId\":\"bc183ec9-7062-4d88-9c43-e97cfb27cc5d\",\"confirmationId\":\"a7539e33-0941-4ab7-a4f3-461b79056d82\",\"supplierId\":\"f5f3cc65-c16c-4e63-ab62-3128387ca599\",\"createdAt\":\"2026-09-15T15:34:06.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"322e439b-342f-450b-8781-cf2ee54872a2\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"e3966f1c-15bb-4317-9441-f177663b8026\",\"itemName\":\"Protoboard 830 puntos\",\"quantity\":10,\"unitCost\":6480,\"totalCost\":64800,\"provider\":\"Electro Insumos Andinos\",\"invoice\":\"B-0002-00004518\",\"observation\":\"\",\"purchaseRequestId\":\"bc183ec9-7062-4d88-9c43-e97cfb27cc5d\",\"confirmationId\":\"a7539e33-0941-4ab7-a4f3-461b79056d82\",\"supplierId\":\"f5f3cc65-c16c-4e63-ab62-3128387ca599\",\"createdAt\":\"2026-09-15T15:34:06.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"359f78ec-943d-43cc-a289-a45d4225ec8b\",\"entryType\":\"donacion\",\"targetType\":\"existing\",\"itemId\":\"226b1799-b389-4659-be09-80edefd4237f\",\"itemName\":\"Cinta métrica 5 m\",\"quantity\":3,\"unitCost\":6800,\"totalCost\":20400,\"donor\":\"Empresa local (ficticia)\",\"observation\":\"Donación registrada para la demo\",\"createdAt\":\"2026-09-07T13:05:18.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"7eea3b39-055b-4d8f-8385-aa297a1822d2\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"71f2935f-ec19-4a8b-85cf-8f053a1999f8\",\"itemName\":\"Taladro percutor 650 W\",\"quantity\":2,\"unitCost\":92500,\"totalCost\":185000,\"provider\":\"Distribuidora Técnica del Norte SA\",\"invoice\":\"A-0012-00031002\",\"observation\":\"Compra directa (demo)\",\"purchaseInvoiceId\":\"abd55f94-af0b-4f78-b81e-1af43191ce3c\",\"supplierId\":\"070c22b1-8988-41c9-a64e-2cb9aa16278c\",\"createdAt\":\"2026-08-26T14:51:09.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"42491725-ca44-45dc-a89b-70c41638639e\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"77d08dc1-0f3a-40d6-8044-dc9e45719ec3\",\"itemName\":\"Mecha HSS 6 mm\",\"quantity\":20,\"unitCost\":2100,\"totalCost\":42000,\"provider\":\"Distribuidora Técnica del Norte SA\",\"invoice\":\"A-0012-00031002\",\"observation\":\"Compra directa (demo)\",\"purchaseInvoiceId\":\"abd55f94-af0b-4f78-b81e-1af43191ce3c\",\"supplierId\":\"070c22b1-8988-41c9-a64e-2cb9aa16278c\",\"createdAt\":\"2026-08-26T14:51:09.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"17675754-7514-48d2-80a0-110fd596d27f\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"615cec83-33c2-4842-bfe9-a112ba4223d3\",\"itemName\":\"Protector auditivo\",\"quantity\":8,\"unitCost\":6400,\"totalCost\":51200,\"provider\":\"Seguridad Industrial Puna\",\"invoice\":\"A-0001-00007781\",\"observation\":\"Compra directa (demo)\",\"purchaseInvoiceId\":\"8de587db-95c7-4ab6-8070-f9ac3ea0a3ea\",\"supplierId\":\"09e26c9e-ff55-4886-a4b8-4252faf1695f\",\"createdAt\":\"2026-08-01T14:21:08.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"7a9fcf9b-a6b4-41c3-a37d-ad28aa78470d\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"a71f2741-fe0e-4786-a954-cbe960866894\",\"itemName\":\"Delantal de cuero\",\"quantity\":4,\"unitCost\":22800,\"totalCost\":91200,\"provider\":\"Seguridad Industrial Puna\",\"invoice\":\"A-0001-00007781\",\"observation\":\"Compra directa (demo)\",\"purchaseInvoiceId\":\"8de587db-95c7-4ab6-8070-f9ac3ea0a3ea\",\"supplierId\":\"09e26c9e-ff55-4886-a4b8-4252faf1695f\",\"createdAt\":\"2026-08-01T14:21:08.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"db7d1c65-cadc-4e65-b298-923584d37adc\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"13fd7aa0-229b-4f79-9174-a513c2078567\",\"itemName\":\"Disco de corte 115 mm\",\"quantity\":50,\"unitCost\":1425,\"totalCost\":71250,\"provider\":\"Ferretería El Tornillo SRL\",\"invoice\":\"A-0003-00012045\",\"observation\":\"\",\"purchaseRequestId\":\"2cf9d62e-fbc2-4493-8e80-56d5cc580dc2\",\"confirmationId\":\"0c329799-84f7-480e-896c-f21d45e1a2e3\",\"supplierId\":\"effbc74d-c23f-4c86-b1a9-025fa7db3803\",\"createdAt\":\"2026-07-15T15:13:03.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"98a0627f-0d65-4881-aaed-1d58ae0d71b4\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"83741bb8-42c4-48bd-94f1-54e4ba9022a3\",\"itemName\":\"Electrodo 2,5 mm (kg)\",\"quantity\":10,\"unitCost\":10200,\"totalCost\":102000,\"provider\":\"Ferretería El Tornillo SRL\",\"invoice\":\"A-0003-00012045\",\"observation\":\"\",\"purchaseRequestId\":\"2cf9d62e-fbc2-4493-8e80-56d5cc580dc2\",\"confirmationId\":\"0c329799-84f7-480e-896c-f21d45e1a2e3\",\"supplierId\":\"effbc74d-c23f-4c86-b1a9-025fa7db3803\",\"createdAt\":\"2026-07-15T15:13:03.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"1d7f5389-7b40-4d91-86c6-6ca9860a0d69\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"2bf152f3-6db0-4ca1-9c34-30b141464d7d\",\"itemName\":\"Guantes de descarne\",\"quantity\":12,\"unitCost\":5400,\"totalCost\":64800,\"provider\":\"Ferretería El Tornillo SRL\",\"invoice\":\"A-0003-00012045\",\"observation\":\"\",\"purchaseRequestId\":\"2cf9d62e-fbc2-4493-8e80-56d5cc580dc2\",\"confirmationId\":\"0c329799-84f7-480e-896c-f21d45e1a2e3\",\"supplierId\":\"effbc74d-c23f-4c86-b1a9-025fa7db3803\",\"createdAt\":\"2026-07-15T15:13:03.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"913da3b9-1ad6-40ca-8b12-7029a8e087cc\",\"entryType\":\"donacion\",\"targetType\":\"existing\",\"itemId\":\"7dcc7465-a15c-4218-a8d0-e8f6dd1e5d34\",\"itemName\":\"Proyector multimedia\",\"quantity\":3,\"unitCost\":410000,\"totalCost\":1230000,\"donor\":\"Ex alumnos promoción 2015\",\"observation\":\"Donación registrada para la demo\",\"createdAt\":\"2026-06-17T13:42:44.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"a0e73771-9e90-48ed-808c-41877135a98c\",\"entryType\":\"donacion\",\"targetType\":\"existing\",\"itemId\":\"a8a17ccb-6327-47b0-9460-ac29e1ad9ba9\",\"itemName\":\"Soldador tipo lápiz 40 W\",\"quantity\":4,\"unitCost\":14500,\"totalCost\":58000,\"donor\":\"Empresa local (ficticia)\",\"observation\":\"Donación registrada para la demo\",\"createdAt\":\"2026-05-20T13:26:17.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"51b62d95-997c-4f5c-925c-220cf3efd4cf\",\"entryType\":\"donacion\",\"targetType\":\"existing\",\"itemId\":\"7dcc7465-a15c-4218-a8d0-e8f6dd1e5d34\",\"itemName\":\"Proyector multimedia\",\"quantity\":2,\"unitCost\":410000,\"totalCost\":820000,\"donor\":\"Cooperadora escolar\",\"observation\":\"Donación registrada para la demo\",\"createdAt\":\"2026-05-15T13:48:07.000Z\",\"createdBy\":\"Jorge Medina\"}],\"purchaseRequests\":[{\"id\":\"6f67f534-ffb5-4891-97f7-48144c3b91d3\",\"items\":[{\"itemId\":\"0b37eef5-1e99-49f1-885d-451175b0a403\",\"itemName\":\"Antiparras de seguridad\",\"code\":\"SG-001\",\"subcode\":\"\",\"quantity\":15,\"currentStock\":21,\"stockMinimum\":10,\"amount\":3900},{\"itemId\":\"19d54b82-5b53-43ea-9bb5-3d22600bced9\",\"itemName\":\"Careta de soldar fotosensible\",\"code\":\"SG-004\",\"subcode\":\"\",\"quantity\":2,\"currentStock\":4,\"stockMinimum\":2,\"amount\":47000},{\"itemId\":\"6ae5fb73-ca3a-4acd-a6d0-5425302f593d\",\"itemName\":\"Amoladora angular 115 mm\",\"code\":\"HE-002\",\"subcode\":\"\",\"quantity\":1,\"currentStock\":9,\"stockMinimum\":2,\"amount\":76500}],\"costCenter\":\"Construcciones\",\"observation\":\"Pedido para el taller de 4° año\",\"status\":\"pending\",\"confirmations\":[],\"createdAt\":\"2026-10-31T13:47:07.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"bc183ec9-7062-4d88-9c43-e97cfb27cc5d\",\"items\":[{\"itemId\":\"c396c76b-6ffe-4620-8e44-d370cc7f8556\",\"itemName\":\"Kit Arduino Uno\",\"code\":\"EL-004\",\"subcode\":\"\",\"quantity\":6,\"currentStock\":14,\"stockMinimum\":4,\"amount\":39000},{\"itemId\":\"e3966f1c-15bb-4317-9441-f177663b8026\",\"itemName\":\"Protoboard 830 puntos\",\"code\":\"EL-001\",\"subcode\":\"\",\"quantity\":10,\"currentStock\":19,\"stockMinimum\":6,\"amount\":6900},{\"itemId\":\"a691c6db-962f-4ccc-865c-622ce3284ed3\",\"itemName\":\"Multímetro digital\",\"code\":\"IM-001\",\"subcode\":\"\",\"quantity\":4,\"currentStock\":16,\"stockMinimum\":4,\"amount\":28500}],\"costCenter\":\"Construcciones\",\"observation\":\"Laboratorio de electrónica · segundo cuatrimestre\",\"status\":\"partially_confirmed\",\"confirmations\":[{\"id\":\"a7539e33-0941-4ab7-a4f3-461b79056d82\",\"number\":1,\"supplierId\":\"f5f3cc65-c16c-4e63-ab62-3128387ca599\",\"supplierName\":\"Electro Insumos Andinos\",\"supplierCuit\":\"20-28000789-8\",\"invoice\":\"B-0002-00004518\",\"observation\":\"Confirmación de la demo\",\"lines\":[{\"itemId\":\"c396c76b-6ffe-4620-8e44-d370cc7f8556\",\"itemName\":\"Kit Arduino Uno\",\"code\":\"EL-004\",\"subcode\":\"\",\"quantity\":6,\"unitCost\":41000,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":246000,\"discountAmount\":0,\"subtotal\":246000,\"netUnitCost\":41000,\"receivedQuantity\":4},{\"itemId\":\"e3966f1c-15bb-4317-9441-f177663b8026\",\"itemName\":\"Protoboard 830 puntos\",\"code\":\"EL-001\",\"subcode\":\"\",\"quantity\":10,\"unitCost\":7200,\"discountType\":\"percent\",\"discountValue\":10,\"gross\":72000,\"discountAmount\":7200,\"subtotal\":64800,\"netUnitCost\":6480,\"receivedQuantity\":10}],\"subtotal\":310800,\"withholdings\":0,\"invoiceTotal\":310800,\"totalWarning\":\"\",\"status\":\"partially_received\",\"createdAt\":\"2026-09-10T14:43:05.000Z\",\"createdBy\":\"Jorge Medina\"}],\"createdAt\":\"2026-09-05T13:41:04.000Z\",\"createdBy\":\"Jorge Medina\",\"provider\":\"Electro Insumos Andinos\",\"invoice\":\"B-0002-00004518\",\"fulfillment\":[{\"itemId\":\"c396c76b-6ffe-4620-8e44-d370cc7f8556\",\"quantity\":4,\"totalCost\":164000,\"unitCost\":41000},{\"itemId\":\"e3966f1c-15bb-4317-9441-f177663b8026\",\"quantity\":10,\"totalCost\":64800,\"unitCost\":6480}]},{\"id\":\"2cf9d62e-fbc2-4493-8e80-56d5cc580dc2\",\"items\":[{\"itemId\":\"13fd7aa0-229b-4f79-9174-a513c2078567\",\"itemName\":\"Disco de corte 115 mm\",\"code\":\"CO-001\",\"subcode\":\"\",\"quantity\":50,\"currentStock\":58,\"stockMinimum\":20,\"amount\":1450},{\"itemId\":\"83741bb8-42c4-48bd-94f1-54e4ba9022a3\",\"itemName\":\"Electrodo 2,5 mm (kg)\",\"code\":\"CO-002\",\"subcode\":\"\",\"quantity\":10,\"currentStock\":15,\"stockMinimum\":8,\"amount\":9800},{\"itemId\":\"2bf152f3-6db0-4ca1-9c34-30b141464d7d\",\"itemName\":\"Guantes de descarne\",\"code\":\"SG-002\",\"subcode\":\"\",\"quantity\":12,\"currentStock\":17,\"stockMinimum\":10,\"amount\":5200}],\"costCenter\":\"Laboratorio de Química\",\"observation\":\"Reposición de insumos de soldadura\",\"status\":\"completed\",\"confirmations\":[{\"id\":\"0c329799-84f7-480e-896c-f21d45e1a2e3\",\"number\":1,\"supplierId\":\"effbc74d-c23f-4c86-b1a9-025fa7db3803\",\"supplierName\":\"Ferretería El Tornillo SRL\",\"supplierCuit\":\"30-71000123-1\",\"invoice\":\"A-0003-00012045\",\"observation\":\"Confirmación de la demo\",\"lines\":[{\"itemId\":\"13fd7aa0-229b-4f79-9174-a513c2078567\",\"itemName\":\"Disco de corte 115 mm\",\"code\":\"CO-001\",\"subcode\":\"\",\"quantity\":50,\"unitCost\":1500,\"discountType\":\"percent\",\"discountValue\":5,\"gross\":75000,\"discountAmount\":3750,\"subtotal\":71250,\"netUnitCost\":1425,\"receivedQuantity\":50},{\"itemId\":\"83741bb8-42c4-48bd-94f1-54e4ba9022a3\",\"itemName\":\"Electrodo 2,5 mm (kg)\",\"code\":\"CO-002\",\"subcode\":\"\",\"quantity\":10,\"unitCost\":10200,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":102000,\"discountAmount\":0,\"subtotal\":102000,\"netUnitCost\":10200,\"receivedQuantity\":10},{\"itemId\":\"2bf152f3-6db0-4ca1-9c34-30b141464d7d\",\"itemName\":\"Guantes de descarne\",\"code\":\"SG-002\",\"subcode\":\"\",\"quantity\":12,\"unitCost\":5400,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":64800,\"discountAmount\":0,\"subtotal\":64800,\"netUnitCost\":5400,\"receivedQuantity\":12}],\"subtotal\":238050,\"withholdings\":0,\"invoiceTotal\":238050,\"totalWarning\":\"\",\"status\":\"received\",\"createdAt\":\"2026-07-10T14:20:02.000Z\",\"createdBy\":\"Jorge Medina\"}],\"createdAt\":\"2026-07-07T13:59:01.000Z\",\"createdBy\":\"Jorge Medina\",\"provider\":\"Ferretería El Tornillo SRL\",\"invoice\":\"A-0003-00012045\",\"fulfillment\":[{\"itemId\":\"13fd7aa0-229b-4f79-9174-a513c2078567\",\"quantity\":50,\"totalCost\":71250,\"unitCost\":1425},{\"itemId\":\"83741bb8-42c4-48bd-94f1-54e4ba9022a3\",\"quantity\":10,\"totalCost\":102000,\"unitCost\":10200},{\"itemId\":\"2bf152f3-6db0-4ca1-9c34-30b141464d7d\",\"quantity\":12,\"totalCost\":64800,\"unitCost\":5400}],\"fulfilledAt\":\"2026-11-04T03:05:25.895Z\",\"fulfilledBy\":\"Jorge Medina\"}],\"costCenters\":[{\"id\":\"e20639fb-2929-4299-81c5-622bd711ccee\",\"name\":\"Administración\",\"description\":\"Gastos generales\",\"createdAt\":\"2026-05-06T15:42:17.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"38f4247a-5fb3-43d7-a280-e37b7e808ea4\",\"name\":\"Construcciones\",\"description\":\"Maestro Mayor de Obras\",\"createdAt\":\"2026-05-06T13:12:16.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"ffde64dd-d033-46cc-840c-f5eb39b792f0\",\"name\":\"Informática\",\"description\":\"Sala de computación\",\"createdAt\":\"2026-05-06T19:51:15.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"5653c7eb-3d1c-45d9-a63a-4d042a841036\",\"name\":\"Laboratorio de Química\",\"description\":\"Prácticas de laboratorio\",\"createdAt\":\"2026-05-06T18:06:14.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"d20c5090-7d38-4617-984f-483cf08c2b38\",\"name\":\"Taller de Electromecánica\",\"description\":\"Prácticas de taller\",\"createdAt\":\"2026-05-06T11:24:13.000Z\",\"createdBy\":\"Administración Demo\"}],\"suppliers\":[{\"id\":\"09e26c9e-ff55-4886-a4b8-4252faf1695f\",\"name\":\"Seguridad Industrial Puna\",\"cuit\":\"30-71000999-2\",\"taxCondition\":\"Responsable Inscripto\",\"address\":\"San Salvador de Jujuy (dirección ficticia)\",\"phone\":\"388 400-4004\",\"email\":\"contacto@segpuna.demo\",\"contact\":\"Paula Ríos\",\"notes\":\"Proveedor ficticio para la demo.\",\"createdAt\":\"2026-11-04T03:05:22.354Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"f5f3cc65-c16c-4e63-ab62-3128387ca599\",\"name\":\"Electro Insumos Andinos\",\"cuit\":\"20-28000789-8\",\"taxCondition\":\"Monotributista\",\"address\":\"San Salvador de Jujuy (dirección ficticia)\",\"phone\":\"388 400-3003\",\"email\":\"info@electroandinos.demo\",\"contact\":\"Diego Sosa\",\"notes\":\"Proveedor ficticio para la demo.\",\"createdAt\":\"2026-11-04T03:05:22.351Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"070c22b1-8988-41c9-a64e-2cb9aa16278c\",\"name\":\"Distribuidora Técnica del Norte SA\",\"cuit\":\"30-71000456-7\",\"taxCondition\":\"Responsable Inscripto\",\"address\":\"San Salvador de Jujuy (dirección ficticia)\",\"phone\":\"388 400-2002\",\"email\":\"pedidos@dtnorte.demo\",\"contact\":\"Martín Ibarra\",\"notes\":\"Proveedor ficticio para la demo.\",\"createdAt\":\"2026-11-04T03:05:22.349Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"effbc74d-c23f-4c86-b1a9-025fa7db3803\",\"name\":\"Ferretería El Tornillo SRL\",\"cuit\":\"30-71000123-1\",\"taxCondition\":\"Responsable Inscripto\",\"address\":\"San Salvador de Jujuy (dirección ficticia)\",\"phone\":\"388 400-1001\",\"email\":\"ventas@eltornillo.demo\",\"contact\":\"Carina Vega\",\"notes\":\"Proveedor ficticio para la demo.\",\"createdAt\":\"2026-11-04T03:05:22.346Z\",\"createdBy\":\"Jorge Medina\"}],\"purchaseInvoices\":[{\"id\":\"04884acc-673e-4f0d-8808-d655e39f4c72\",\"number\":4,\"supplierId\":\"070c22b1-8988-41c9-a64e-2cb9aa16278c\",\"supplierName\":\"Distribuidora Técnica del Norte SA\",\"supplierCuit\":\"30-71000456-7\",\"invoice\":\"A-0012-00031577\",\"invoiceDate\":\"2026-10-25\",\"observation\":\"Compra directa (demo)\",\"lines\":[{\"itemId\":\"08929418-a2ed-4c71-9088-eadcaeb8783c\",\"itemName\":\"Calibre digital 150 mm\",\"code\":\"IM-002\",\"subcode\":\"\",\"quantity\":2,\"unitCost\":36800,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":73600,\"discountAmount\":0,\"subtotal\":73600,\"netUnitCost\":36800}],\"subtotal\":73600,\"withholdings\":0,\"invoiceTotal\":73600,\"totalWarning\":\"\",\"createdAt\":\"2026-10-26T14:42:11.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"16c54b06-fb27-4ab6-b1e8-273b53624777\",\"number\":3,\"supplierId\":\"effbc74d-c23f-4c86-b1a9-025fa7db3803\",\"supplierName\":\"Ferretería El Tornillo SRL\",\"supplierCuit\":\"30-71000123-1\",\"invoice\":\"A-0003-00012390\",\"invoiceDate\":\"2026-10-02\",\"observation\":\"Compra directa (demo)\",\"lines\":[{\"itemId\":\"2d49c52c-fff9-464e-af0c-90ce44465049\",\"itemName\":\"Destornillador plano 6 mm\",\"code\":\"HM-002\",\"subcode\":\"\",\"quantity\":6,\"unitCost\":4600,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":27600,\"discountAmount\":0,\"subtotal\":27600,\"netUnitCost\":4600},{\"itemId\":\"27d00d65-b718-41d2-9f69-b7d8434e5c64\",\"itemName\":\"Destornillador Phillips PH2\",\"code\":\"HM-003\",\"subcode\":\"\",\"quantity\":6,\"unitCost\":4700,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":28200,\"discountAmount\":0,\"subtotal\":28200,\"netUnitCost\":4700},{\"itemId\":\"1e9fb983-2215-499f-8034-c220699c0f1a\",\"itemName\":\"Cinta aisladora\",\"code\":\"CO-003\",\"subcode\":\"\",\"quantity\":30,\"unitCost\":1050,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":31500,\"discountAmount\":0,\"subtotal\":31500,\"netUnitCost\":1050}],\"subtotal\":87300,\"withholdings\":0,\"invoiceTotal\":87300,\"totalWarning\":\"\",\"createdAt\":\"2026-10-03T14:54:10.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"abd55f94-af0b-4f78-b81e-1af43191ce3c\",\"number\":2,\"supplierId\":\"070c22b1-8988-41c9-a64e-2cb9aa16278c\",\"supplierName\":\"Distribuidora Técnica del Norte SA\",\"supplierCuit\":\"30-71000456-7\",\"invoice\":\"A-0012-00031002\",\"invoiceDate\":\"2026-08-25\",\"observation\":\"Compra directa (demo)\",\"lines\":[{\"itemId\":\"71f2935f-ec19-4a8b-85cf-8f053a1999f8\",\"itemName\":\"Taladro percutor 650 W\",\"code\":\"HE-001\",\"subcode\":\"\",\"quantity\":2,\"unitCost\":92500,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":185000,\"discountAmount\":0,\"subtotal\":185000,\"netUnitCost\":92500},{\"itemId\":\"77d08dc1-0f3a-40d6-8044-dc9e45719ec3\",\"itemName\":\"Mecha HSS 6 mm\",\"code\":\"CO-006\",\"subcode\":\"\",\"quantity\":20,\"unitCost\":2100,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":42000,\"discountAmount\":0,\"subtotal\":42000,\"netUnitCost\":2100}],\"subtotal\":227000,\"withholdings\":0,\"invoiceTotal\":227000,\"totalWarning\":\"\",\"createdAt\":\"2026-08-26T14:51:09.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"8de587db-95c7-4ab6-8070-f9ac3ea0a3ea\",\"number\":1,\"supplierId\":\"09e26c9e-ff55-4886-a4b8-4252faf1695f\",\"supplierName\":\"Seguridad Industrial Puna\",\"supplierCuit\":\"30-71000999-2\",\"invoice\":\"A-0001-00007781\",\"invoiceDate\":\"2026-07-31\",\"observation\":\"Compra directa (demo)\",\"lines\":[{\"itemId\":\"615cec83-33c2-4842-bfe9-a112ba4223d3\",\"itemName\":\"Protector auditivo\",\"code\":\"SG-003\",\"subcode\":\"\",\"quantity\":8,\"unitCost\":6400,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":51200,\"discountAmount\":0,\"subtotal\":51200,\"netUnitCost\":6400},{\"itemId\":\"a71f2741-fe0e-4786-a954-cbe960866894\",\"itemName\":\"Delantal de cuero\",\"code\":\"SG-005\",\"subcode\":\"\",\"quantity\":4,\"unitCost\":22800,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":91200,\"discountAmount\":0,\"subtotal\":91200,\"netUnitCost\":22800}],\"subtotal\":142400,\"withholdings\":0,\"invoiceTotal\":142400,\"totalWarning\":\"\",\"createdAt\":\"2026-08-01T14:21:08.000Z\",\"createdBy\":\"Jorge Medina\"}],\"rolePermissions\":[]},\"users\":[{\"id\":\"7340453c-49dd-46c1-8262-126964ca071e\",\"username\":\"admin\",\"name\":\"Administración Demo\",\"role\":\"admin\",\"password\":\"demo$demo2026\",\"mustChangePassword\":false},{\"id\":\"6128929f-bfbd-45ea-ba3b-fdc587bca69f\",\"username\":\"directora\",\"name\":\"María Fernández\",\"role\":\"directivo\",\"password\":\"demo$demo2026\",\"mustChangePassword\":false},{\"id\":\"a683b9e2-10f8-459b-b366-51184189759d\",\"username\":\"panolero\",\"name\":\"Jorge Medina\",\"role\":\"panolero\",\"password\":\"demo$demo2026\",\"mustChangePassword\":false},{\"id\":\"e83dc15c-6b43-4e30-aafb-23d5aa21eaed\",\"username\":\"docente\",\"name\":\"Lucía Romero\",\"role\":\"docente\",\"password\":\"demo$demo2026\",\"mustChangePassword\":false},{\"id\":\"d6bd14c4-9667-4aa9-84e8-d36487e53fe6\",\"username\":\"administrativo\",\"name\":\"Sergio Paz\",\"role\":\"administrativo\",\"password\":\"demo$demo2026\",\"mustChangePassword\":false}]}" };

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
const VALID_USER_ROLES = ["admin", "directivo", "administrativo", "docente", "panolero"];
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
  },
  loans: {
    id: "str", item_id: "str", responsible_id: "str", borrower_name: "str", department: "str",
    quantity: "num", due_date: "date", observation: "str", created_at: "dt", created_by: "str",
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
    created_at: "dt", created_by: "str", fulfilled_at: "dt", fulfilled_by: "str",
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
];

// Tablas agregadas por migraciones posteriores: si todavía no existen, se leen vacías,
// y al guardar se avisa en lugar de perder datos en silencio.
const MIGRATION_SUPPLIERS = "2026-11-03-proveedores.sql";
const MIGRATION_INVOICES = "2026-11-03-facturas.sql";
const MIGRATION_PERMISSIONS = "2026-11-03-permisos.sql";
const MIGRATION_INVOICE_DATE = "2026-11-03-fecha-factura.sql";
const OPTIONAL_TABLES = new Map([
  ["suppliers", MIGRATION_SUPPLIERS],
  ["purchase_confirmations", MIGRATION_SUPPLIERS],
  ["purchase_confirmation_lines", MIGRATION_SUPPLIERS],
  ["purchase_invoices", MIGRATION_INVOICES],
  ["purchase_invoice_lines", MIGRATION_INVOICES],
  ["role_permissions", MIGRATION_PERMISSIONS],
]);
// Columnas agregadas a tablas existentes: si faltan y hay datos para guardar en ellas, se avisa.
const OPTIONAL_COLUMNS = {
  items: { columns: ["last_purchase_cost", "last_purchase_at", "last_purchase_supplier", "last_purchase_invoice"], migration: MIGRATION_INVOICES },
  stock_entries: { columns: ["purchase_invoice_id"], migration: MIGRATION_INVOICES },
  purchase_invoices: { columns: ["invoice_date"], migration: MIGRATION_INVOICE_DATE },
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
  const optionalColumns = OPTIONAL_COLUMNS[table];
  if (optionalColumns && info.get(table)) {
    const missing = optionalColumns.columns.filter((column) => !info.get(table).has(column));
    if (missing.length && desiredRows.some((row) => missing.some((column) => row[column] !== null && row[column] !== undefined && row[column] !== ""))) {
      throw migrationError(optionalColumns.migration);
    }
  }
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

// Roles agregados después de crear la base: la columna users.role es un ENUM y hay que ampliarlo.
async function ensureRolesSupported(users) {
  const roles = [...new Set(asList(users).map((user) => user.role))];
  if (!roles.includes("directivo")) return;
  const [rows] = await getMysqlPool().query(
    `SELECT COLUMN_TYPE AS columnType FROM information_schema.COLUMNS
     WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'users' AND COLUMN_NAME = 'role'`
  );
  const columnType = String(rows[0]?.columnType || "");
  if (/^enum\(/i.test(columnType) && !columnType.includes("'directivo'")) {
    throw migrationError(MIGRATION_DIRECTIVOS);
  }
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

function optionalSelect(info, table, column, alias) {
  return hasColumn(info, table, column) ? `, ${column} AS ${alias}` : "";
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
      FROM items i
      LEFT JOIN categories c ON c.id = i.category_id
      LEFT JOIN locations l ON l.id = i.location_id
      ORDER BY i.created_at DESC, i.name ASC
    `),
    pool.query(`
      SELECT id, item_id AS itemId, responsible_id AS responsibleId, borrower_name AS borrower,
             department, quantity, due_date AS dueDate, observation, created_at AS createdAt,
             created_by AS createdBy
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
  const items = itemsResult[0].map(({ lastPurchaseCost, lastPurchaseAt, lastPurchaseSupplier, lastPurchaseInvoice, ...row }) => ({
    ...row,
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
  const loans = loansResult[0].map((row) => ({
    ...row,
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

  const purchaseRequests = purchaseRequestsResult[0].map((row) => {
    const detail = requestItemsByRequest.get(row.id) || { items: [], fulfillment: [] };
    return {
      ...row,
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

  return {
    suppliers,
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
  { key: "loans.create", group: "Préstamos", label: "Registrar préstamos", defaults: ["panolero", "docente"] },
  { key: "consumptions.create", group: "Préstamos", label: "Registrar consumos", defaults: ["panolero", "docente"] },
  { key: "loans.return", group: "Préstamos", label: "Registrar devoluciones", defaults: ["panolero"] },
  { key: "stock.entries", group: "Inventario", label: "Ingresos al inventario (donación o compra)", defaults: ["panolero"] },
  { key: "items.manage", group: "Inventario", label: "Alta, edición y baja de materiales", defaults: ["panolero"] },
  { key: "purchases.requests", group: "Compras", label: "Generar pedidos de compra", defaults: ["panolero"] },
  { key: "purchases.confirm", group: "Compras", label: "Confirmar pedidos de compra", defaults: ["panolero", "directivo"] },
  { key: "purchases.invoices", group: "Compras", label: "Cargar facturas de compra sin pedido", defaults: ["panolero"] },
  { key: "masterData.manage", group: "Datos maestros", label: "Categorías, ubicaciones, centros de costos, orientaciones y proveedores", defaults: ["panolero"] },
  { key: "responsibles.manage", group: "Datos maestros", label: "Alta, edición y baja de responsables (alumnos y profesores)", defaults: ["panolero"] },
  { key: "responsibles.personalData", group: "Datos maestros", label: "Ver datos personales de responsables (DNI, domicilio, contacto)", defaults: ["panolero", "administrativo", "directivo"] },
];

const PERMISSION_KEYS = PERMISSIONS.map((permission) => permission.key);
const CONFIGURABLE_ROLES = ["panolero", "docente", "administrativo", "directivo"];
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
  "src/routes/auth.js": [{"../http/responses":"src/http/responses.js","../http/body":"src/http/body.js","../http/security":"src/http/security.js","../data/store":"src/data/store.js","../auth/sessions":"src/auth/sessions.js","../auth/passwords":"src/auth/passwords.js","../auth/loginLimiter":"src/auth/loginLimiter.js","../services/users":"src/services/users.js","../config":"src/config.js","../data/demoSeed":"src/data/demoSeed.js"}, function (require, module, exports, __dirname, __filename) {
const { sendJson } = require("../http/responses");
const { readJsonBody } = require("../http/body");
const { getClientIp } = require("../http/security");
const { logActivity, readUsers, writeUsers } = require("../data/store");
const { clearSessionCookie, createSession, getTokenFromRequest, hashToken, persistSessions, publicSession, sessions, setSessionCookie } = require("../auth/sessions");
const { KNOWN_DEFAULT_PASSWORDS, hashPassword, validatePasswordStrength, verifyPassword } = require("../auth/passwords");
const { clearLoginFailures, getLoginLockMinutes, registerLoginFailure } = require("../auth/loginLimiter");
const { sanitizeUser } = require("../services/users");
const { DEMO_MODE } = require("../config");

const DEMO_ROLE_ORDER = ["admin", "directivo", "panolero", "docente", "administrativo"];
const DEMO_ROLE_LABELS = { admin: "Administrador", directivo: "Directivo", panolero: "Pañolero", docente: "Docente", administrativo: "Administrativo" };

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
  "src/data/demoSeed.js": [{"fs":"shim:fs","path":"shim:path","../config":"src/config.js"}, function (require, module, exports, __dirname, __filename) {
const fs = require("fs");
const path = require("path");
const { ROOT_DIR } = require("../config");

// Datos ficticios de la versión demo (generados con scripts/demo/generar-datos-demo.js).
// Al instalarlos, todas las fechas se corren la misma cantidad de días para que la demo
// siempre parezca actual: préstamos que vencen esta semana, actividad de los últimos meses, etc.
const SEED_FILE = path.join(ROOT_DIR, "demo", "datos-demo.json");
const DAY = 24 * 60 * 60 * 1000;
const DATE_TIME_KEYS = new Set(["createdAt", "updatedAt", "fulfilledAt", "lastPurchaseAt", "passwordChangedAt"]);
const DATE_ONLY_KEYS = new Set(["dueDate", "invoiceDate"]);

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
  "src/services/dashboard.js": [{"../auth/permissions":"src/auth/permissions.js","../data/store":"src/data/store.js","../auth/sessions":"src/auth/sessions.js","./users":"src/services/users.js","./responsibles":"src/services/responsibles.js","./validation":"src/services/validation.js","./loanStats":"src/services/loanStats.js"}, function (require, module, exports, __dirname, __filename) {
const { hasPermission, permissionMatrix, rolePermissions } = require("../auth/permissions");
const { readUsers } = require("../data/store");
const { publicSession } = require("../auth/sessions");
const { sanitizeUser } = require("./users");
const { sanitizeResponsible } = require("./responsibles");
const { startOfToday } = require("./validation");
const { buildLoanStats } = require("./loanStats");

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
      totalItems: items.length,
      activeLoans: loans.length,
      lowStock: items.filter((item) => item.stock <= Number(item.stockMinimum || 0)).length,
      overdueLoans: loans.filter((loan) => loan.overdue).length,
      pendingPurchaseRequests: db.purchaseRequests.filter((request) => request.status !== "completed").length,
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
const { ensureItemCodeAvailable } = require("../services/items");

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

    const reason = requiredText(body.reason, "El motivo de baja es obligatorio.");
    const [item] = db.items.splice(itemIndex, 1);
    addActivity(db, "item_deleted", `${session.name} eliminó ${item.name} (${item.code}${item.subcode ? `-${item.subcode}` : ""}). Motivo de baja: ${reason}.`);
    await writeDb(db);
    sendJson(res, 200, { ok: true });
  });
}

module.exports = { register };

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

module.exports = { ensureItemCodeAvailable };

}],
  "src/routes/loans.js": [{"crypto":"shim:crypto","../http/responses":"src/http/responses.js","../http/body":"src/http/body.js","../data/store":"src/data/store.js","../services/validation":"src/services/validation.js","../services/responsibles":"src/services/responsibles.js"}, function (require, module, exports, __dirname, __filename) {
const crypto = require("crypto");
const { sendJson } = require("../http/responses");
const { readJsonBody } = require("../http/body");
const { addActivity, readDb, writeDb } = require("../data/store");
const { optionalText, requiredText } = require("../services/validation");
const { findResponsibleById } = require("../services/responsibles");

// Préstamos y devoluciones.
function register(router) {
  router.add("POST", "/api/loans", { permission: "loans.create" }, async ({ req, res, session }) => {
    const body = await readJsonBody(req);
    const db = await readDb();
    const item = db.items.find((entry) => entry.id === body.itemId);
    const responsible = findResponsibleById(db, body.responsibleId);
    const quantity = Number(body.quantity);

    if (!item) {
      sendJson(res, 404, { error: "El elemento indicado no existe." });
      return;
    }
    if (!responsible) {
      sendJson(res, 404, { error: "El responsable indicado no existe." });
      return;
    }

    if (!Number.isFinite(quantity) || quantity <= 0) {
      sendJson(res, 400, { error: "La cantidad debe ser mayor a cero." });
      return;
    }

    if (item.stock < quantity) {
      sendJson(res, 400, { error: "No hay stock suficiente para ese préstamo." });
      return;
    }

    item.stock -= quantity;
    const loan = {
      id: crypto.randomUUID(),
      itemId: item.id,
      responsibleId: responsible.id,
      borrower: responsible.fullName,
      department: optionalText(body.department),
      quantity,
      dueDate: requiredText(body.dueDate, "La fecha de devolución es obligatoria."),
      observation: optionalText(body.observation),
      createdAt: new Date().toISOString(),
      createdBy: session.name,
    };

    db.loans.unshift(loan);
    addActivity(db, "loan_created", `${session.name} registró un préstamo de ${item.name} para ${loan.borrower}.${loan.observation ? ` Observación: ${loan.observation}.` : ""}`);
    await writeDb(db);
    sendJson(res, 201, { loan });
  });

  router.add("POST", "/api/loans/:id/return", { permission: "loans.return" }, async ({ req, res, params, session }) => {
    const loanId = params.id;
    const body = await readJsonBody(req);
    const db = await readDb();
    const loanIndex = db.loans.findIndex((entry) => entry.id === loanId);

    if (loanIndex === -1) {
      sendJson(res, 404, { error: "El préstamo no fue encontrado." });
      return;
    }

    const loan = db.loans[loanIndex];
    const item = db.items.find((entry) => entry.id === loan.itemId);
    const returnQuantity = Number(body.quantity);
    const observation = optionalText(body.observation);

    if (!Number.isFinite(returnQuantity) || returnQuantity <= 0) {
      sendJson(res, 400, { error: "La cantidad a devolver debe ser mayor a cero." });
      return;
    }

    if (returnQuantity > loan.quantity) {
      sendJson(res, 400, { error: "No podés devolver más unidades que las pendientes." });
      return;
    }

    if (item) {
      item.stock += returnQuantity;
    }

    loan.quantity -= returnQuantity;
    if (loan.quantity === 0) {
      db.loans.splice(loanIndex, 1);
    }

    const actionText = loan.quantity === 0 ? "completó la devolución de" : "registró una devolución parcial de";
    const detailText = loan.quantity === 0 ? "Préstamo cerrado." : `Quedan ${loan.quantity} unidad(es) pendientes.`;
    const observationText = observation ? ` Observación: ${observation}.` : "";

    addActivity(
      db,
      loan.quantity === 0 ? "loan_returned" : "loan_partial_returned",
      `${session.name} ${actionText} ${item ? item.name : "un elemento"} de ${loan.borrower} (${returnQuantity} unidad(es)). ${detailText}${observationText}`
    );
    await writeDb(db);
    sendJson(res, 200, { ok: true, pendingQuantity: loan.quantity });
  });
}

module.exports = { register };

}],
  "src/routes/consumptions.js": [{"crypto":"shim:crypto","../http/responses":"src/http/responses.js","../http/body":"src/http/body.js","../data/store":"src/data/store.js","../services/validation":"src/services/validation.js","../services/responsibles":"src/services/responsibles.js"}, function (require, module, exports, __dirname, __filename) {
const crypto = require("crypto");
const { sendJson } = require("../http/responses");
const { readJsonBody } = require("../http/body");
const { addActivity, readDb, writeDb } = require("../data/store");
const { optionalText } = require("../services/validation");
const { findResponsibleById } = require("../services/responsibles");

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
const { ensureItemCodeAvailable } = require("../services/items");

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

// Estado del pedido según lo confirmado y lo ingresado.
// pending: sin confirmar · partially_confirmed: falta confirmar una parte · confirmed: todo confirmado, falta ingresar · completed: todo ingresado.
function requestStatus(request) {
  if (request.status === "cancelled") return "cancelled";
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
  "src/routes/purchaseRequests.js": [{"crypto":"shim:crypto","../http/responses":"src/http/responses.js","../http/body":"src/http/body.js","../data/store":"src/data/store.js","../services/validation":"src/services/validation.js","../services/purchases":"src/services/purchases.js"}, function (require, module, exports, __dirname, __filename) {
const crypto = require("crypto");
const { sendJson, validationError } = require("../http/responses");
const { readJsonBody } = require("../http/body");
const { addActivity, readDb, writeDb } = require("../data/store");
const { optionalText, requiredText } = require("../services/validation");
const { round, computeLine, remainingByItem, requestStatus, invoiceTotalWarning, ensureInvoiceNotLoaded } = require("../services/purchases");

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
      status: "pending",
      confirmations: [],
      createdAt: new Date().toISOString(),
      createdBy: session.name,
    };

    db.purchaseRequests.unshift(purchaseRequest);
    addActivity(db, "purchase_request_created", `${session.name} generó un pedido de compra con ${mergedItems.length} material(es).${purchaseRequest.observation ? ` Observación: ${purchaseRequest.observation}.` : ""}`);
    await writeDb(db);
    sendJson(res, 201, { purchaseRequest });
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
    if (["completed", "cancelled", "confirmed"].includes(requestStatus(purchaseRequest))) {
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
  "src/routes/permissions.js": [{"../http/responses":"src/http/responses.js","../http/body":"src/http/body.js","../data/store":"src/data/store.js","../auth/permissions":"src/auth/permissions.js"}, function (require, module, exports, __dirname, __filename) {
const { sendJson, validationError } = require("../http/responses");
const { readJsonBody } = require("../http/body");
const { readDb, writeDb, addActivity } = require("../data/store");
const { PERMISSIONS, PERMISSION_KEYS, CONFIGURABLE_ROLES, permissionMatrix, rolePermissions } = require("../auth/permissions");

// Permisos por rol: solo el administrador los ve y los cambia.
const ROLE_LABELS = { panolero: "Pañolero", docente: "Docente", administrativo: "Administrativo", directivo: "Directivo" };

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
