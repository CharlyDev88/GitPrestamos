// Servidor del sistema funcionando dentro del navegador (versión demo web, datos ficticios).
// Archivo generado por scripts/demo/armar-demo-web.js: no editar a mano.
(function () {
  "use strict";
  var PREFIX = "panol-etha-demo-web:";
  var TOKEN_KEY = PREFIX + "token";
  var STATIC_FILES = { "/app/demo/datos-demo.json": "{\"descripcion\":\"Datos FICTICIOS para la versión demo del sistema de pañol. Las fechas se corren al día en que se instala la demo.\",\"generadoEl\":\"2026-11-13T15:00:00.000Z\",\"contraseña\":\"demo2026\",\"db\":{\"items\":[{\"id\":\"404e4be3-6a46-4cf3-8a0e-14aba6248bda\",\"name\":\"Cable HDMI 3 m\",\"category\":\"Informática\",\"code\":\"IN-005\",\"subcode\":\"\",\"location\":\"Sala de informática\",\"stock\":10,\"stockMinimum\":3,\"amount\":6500,\"notes\":\"\",\"createdAt\":\"2026-05-18T20:14:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"fa4a7369-b630-4035-a5be-6727ff653fbf\",\"name\":\"Pendrive 32 GB\",\"category\":\"Informática\",\"code\":\"IN-004\",\"subcode\":\"\",\"location\":\"Sala de informática\",\"stock\":15,\"stockMinimum\":5,\"amount\":8900,\"notes\":\"\",\"createdAt\":\"2026-05-18T20:05:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"3ff9a0d6-4c4c-41b6-a807-ed7065800400\",\"name\":\"Mouse USB\",\"category\":\"Informática\",\"code\":\"IN-003\",\"subcode\":\"\",\"location\":\"Sala de informática\",\"stock\":19,\"stockMinimum\":5,\"amount\":7800,\"notes\":\"\",\"createdAt\":\"2026-05-18T20:12:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"19df5914-0428-466d-83fd-54556df835b5\",\"name\":\"Proyector multimedia\",\"category\":\"Informática\",\"code\":\"IN-002\",\"subcode\":\"\",\"location\":\"Sala de informática\",\"stock\":0,\"stockMinimum\":1,\"amount\":410000,\"notes\":\"\",\"createdAt\":\"2026-05-18T13:56:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"056cde58-0d99-465d-aced-d361a79103e1\",\"name\":\"Notebook 14\\\"\",\"category\":\"Informática\",\"code\":\"IN-001\",\"subcode\":\"\",\"location\":\"Sala de informática\",\"stock\":10,\"stockMinimum\":2,\"amount\":720000,\"notes\":\"\",\"createdAt\":\"2026-05-18T13:59:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"f4d5951b-fa0f-4e43-a1bd-55d7306a5e33\",\"name\":\"Osciloscopio digital 2 canales\",\"category\":\"Electrónica\",\"code\":\"EL-005\",\"subcode\":\"\",\"location\":\"Laboratorio de electrónica\",\"stock\":1,\"stockMinimum\":1,\"amount\":480000,\"notes\":\"\",\"createdAt\":\"2026-05-18T17:26:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"a6c2d2bf-203d-4fd3-9ce6-d5ae2b93320d\",\"name\":\"Kit Arduino Uno\",\"category\":\"Electrónica\",\"code\":\"EL-004\",\"subcode\":\"\",\"location\":\"Laboratorio de electrónica\",\"stock\":16,\"stockMinimum\":4,\"amount\":39500,\"notes\":\"\",\"createdAt\":\"2026-05-18T11:44:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":41000,\"lastPurchaseAt\":\"2026-09-24T15:13:18.000Z\",\"lastPurchaseSupplier\":\"Electro Insumos Andinos\",\"lastPurchaseInvoice\":\"B-0002-00004518\"},{\"id\":\"86c51a3e-ac7d-463b-95f2-7fa5481b6a7a\",\"name\":\"Soldador tipo lápiz 40 W\",\"category\":\"Electrónica\",\"code\":\"EL-003\",\"subcode\":\"\",\"location\":\"Laboratorio de electrónica\",\"stock\":12,\"stockMinimum\":4,\"amount\":14500,\"notes\":\"\",\"createdAt\":\"2026-05-18T11:31:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"baac7a86-44b4-45f9-979e-1c39219bd082\",\"name\":\"Fuente de laboratorio 0-30 V\",\"category\":\"Electrónica\",\"code\":\"EL-002\",\"subcode\":\"\",\"location\":\"Laboratorio de electrónica\",\"stock\":8,\"stockMinimum\":2,\"amount\":129000,\"notes\":\"\",\"createdAt\":\"2026-05-18T13:34:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"2b46e15b-3563-45ed-abd6-79e521971769\",\"name\":\"Protoboard 830 puntos\",\"category\":\"Electrónica\",\"code\":\"EL-001\",\"subcode\":\"\",\"location\":\"Laboratorio de electrónica\",\"stock\":30,\"stockMinimum\":6,\"amount\":6760,\"notes\":\"\",\"createdAt\":\"2026-05-18T20:19:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":6480,\"lastPurchaseAt\":\"2026-09-24T15:13:18.000Z\",\"lastPurchaseSupplier\":\"Electro Insumos Andinos\",\"lastPurchaseInvoice\":\"B-0002-00004518\"},{\"id\":\"8d2466a8-de30-4ed8-afef-8cab0b67c703\",\"name\":\"Mecha HSS 6 mm\",\"category\":\"Consumibles\",\"code\":\"CO-006\",\"subcode\":\"\",\"location\":\"Depósito de consumibles\",\"stock\":51,\"stockMinimum\":12,\"amount\":1978.4314,\"notes\":\"\",\"createdAt\":\"2026-05-18T19:25:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":2100,\"lastPurchaseAt\":\"2026-09-04T14:14:31.000Z\",\"lastPurchaseSupplier\":\"Distribuidora Técnica del Norte SA\",\"lastPurchaseInvoice\":\"A-0012-00031002\"},{\"id\":\"53409754-3d94-43cd-8ba0-a96b481b3b9b\",\"name\":\"Lija al agua grano 220\",\"category\":\"Consumibles\",\"code\":\"CO-005\",\"subcode\":\"\",\"location\":\"Depósito de consumibles\",\"stock\":53,\"stockMinimum\":30,\"amount\":650,\"notes\":\"\",\"createdAt\":\"2026-05-18T18:52:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"b848029a-3798-4ce4-b200-a15b2a66a477\",\"name\":\"Estaño 60/40 (rollo 250 g)\",\"category\":\"Consumibles\",\"code\":\"CO-004\",\"subcode\":\"\",\"location\":\"Depósito de consumibles\",\"stock\":3,\"stockMinimum\":4,\"amount\":18500,\"notes\":\"\",\"createdAt\":\"2026-05-18T14:53:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"b6cf1257-bdd4-498c-bcc4-b0235395b32e\",\"name\":\"Cinta aisladora\",\"category\":\"Consumibles\",\"code\":\"CO-003\",\"subcode\":\"\",\"location\":\"Depósito de consumibles\",\"stock\":69,\"stockMinimum\":15,\"amount\":993.4783,\"notes\":\"\",\"createdAt\":\"2026-05-18T18:24:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":1050,\"lastPurchaseAt\":\"2026-10-12T14:23:32.000Z\",\"lastPurchaseSupplier\":\"Ferretería El Tornillo SRL\",\"lastPurchaseInvoice\":\"A-0003-00012390\"},{\"id\":\"0d6d6bf7-4d3f-4e8c-8314-75e49b984f2a\",\"name\":\"Electrodo 2,5 mm (kg)\",\"category\":\"Consumibles\",\"code\":\"CO-002\",\"subcode\":\"\",\"location\":\"Depósito de consumibles\",\"stock\":22,\"stockMinimum\":8,\"amount\":9981.8182,\"notes\":\"\",\"createdAt\":\"2026-05-18T11:13:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":10200,\"lastPurchaseAt\":\"2026-07-24T15:08:12.000Z\",\"lastPurchaseSupplier\":\"Ferretería El Tornillo SRL\",\"lastPurchaseInvoice\":\"A-0003-00012045\"},{\"id\":\"e2e37655-8702-41ee-80e4-bea9141ef442\",\"name\":\"Disco de corte 115 mm\",\"category\":\"Consumibles\",\"code\":\"CO-001\",\"subcode\":\"\",\"location\":\"Depósito de consumibles\",\"stock\":106,\"stockMinimum\":20,\"amount\":1438.2075,\"notes\":\"\",\"createdAt\":\"2026-05-18T19:27:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":1425,\"lastPurchaseAt\":\"2026-07-24T15:08:12.000Z\",\"lastPurchaseSupplier\":\"Ferretería El Tornillo SRL\",\"lastPurchaseInvoice\":\"A-0003-00012045\"},{\"id\":\"185a72a0-1201-4a15-a4a9-5cbf8b1ba1ee\",\"name\":\"Delantal de cuero\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-005\",\"subcode\":\"\",\"location\":\"Armario de seguridad\",\"stock\":8,\"stockMinimum\":3,\"amount\":22150,\"notes\":\"\",\"createdAt\":\"2026-05-18T13:00:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":22800,\"lastPurchaseAt\":\"2026-08-10T14:42:30.000Z\",\"lastPurchaseSupplier\":\"Seguridad Industrial Puna\",\"lastPurchaseInvoice\":\"A-0001-00007781\"},{\"id\":\"9e7ebc5d-2551-468c-8a3d-f6c84178b21e\",\"name\":\"Careta de soldar fotosensible\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-004\",\"subcode\":\"\",\"location\":\"Armario de seguridad\",\"stock\":1,\"stockMinimum\":2,\"amount\":47000,\"notes\":\"\",\"createdAt\":\"2026-05-18T16:06:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"66eaec4b-e38e-4138-a9b2-3189f586c6c3\",\"name\":\"Protector auditivo\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-003\",\"subcode\":\"\",\"location\":\"Armario de seguridad\",\"stock\":13,\"stockMinimum\":6,\"amount\":6284.6154,\"notes\":\"\",\"createdAt\":\"2026-05-18T17:50:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":6400,\"lastPurchaseAt\":\"2026-08-10T14:42:30.000Z\",\"lastPurchaseSupplier\":\"Seguridad Industrial Puna\",\"lastPurchaseInvoice\":\"A-0001-00007781\"},{\"id\":\"630379b8-a4b6-40a3-ad90-c7fd93fcaaa0\",\"name\":\"Guantes de descarne\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-002\",\"subcode\":\"\",\"location\":\"Armario de seguridad\",\"stock\":27,\"stockMinimum\":10,\"amount\":5288.8889,\"notes\":\"\",\"createdAt\":\"2026-05-18T18:20:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":5400,\"lastPurchaseAt\":\"2026-07-24T15:08:12.000Z\",\"lastPurchaseSupplier\":\"Ferretería El Tornillo SRL\",\"lastPurchaseInvoice\":\"A-0003-00012045\"},{\"id\":\"0ae4e306-9cf7-483c-85dc-3c21aa85c145\",\"name\":\"Antiparras de seguridad\",\"category\":\"Elementos de seguridad\",\"code\":\"SG-001\",\"subcode\":\"\",\"location\":\"Armario de seguridad\",\"stock\":10,\"stockMinimum\":10,\"amount\":3900,\"notes\":\"\",\"createdAt\":\"2026-05-18T11:22:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"5c849aff-e074-4a43-bcb2-f0d66922ee81\",\"name\":\"Nivel de burbuja 60 cm\",\"category\":\"Instrumentos de medición\",\"code\":\"IM-005\",\"subcode\":\"\",\"location\":\"Estantería A1\",\"stock\":9,\"stockMinimum\":2,\"amount\":9900,\"notes\":\"\",\"createdAt\":\"2026-05-18T18:28:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"05ad86b3-f033-40ba-b10f-982e07bf9b9f\",\"name\":\"Cinta métrica 5 m\",\"category\":\"Instrumentos de medición\",\"code\":\"IM-004\",\"subcode\":\"\",\"location\":\"Estantería A1\",\"stock\":13,\"stockMinimum\":4,\"amount\":6800,\"notes\":\"\",\"createdAt\":\"2026-05-18T14:43:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"7880b04e-32d7-4a59-bcc0-c29ba09ba1a2\",\"name\":\"Pinza amperométrica\",\"category\":\"Instrumentos de medición\",\"code\":\"IM-003\",\"subcode\":\"\",\"location\":\"Laboratorio de electrónica\",\"stock\":2,\"stockMinimum\":2,\"amount\":61000,\"notes\":\"\",\"createdAt\":\"2026-05-18T11:58:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"364241ce-3fda-4859-96b3-ddf5c5aa06dc\",\"name\":\"Calibre digital 150 mm\",\"category\":\"Instrumentos de medición\",\"code\":\"IM-002\",\"subcode\":\"\",\"location\":\"Estantería A1\",\"stock\":12,\"stockMinimum\":3,\"amount\":35216.6667,\"notes\":\"\",\"createdAt\":\"2026-05-18T16:20:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":36800,\"lastPurchaseAt\":\"2026-11-04T14:14:33.000Z\",\"lastPurchaseSupplier\":\"Distribuidora Técnica del Norte SA\",\"lastPurchaseInvoice\":\"A-0012-00031577\"},{\"id\":\"81ac2e15-8f46-4837-a01e-b9061189fa2f\",\"name\":\"Multímetro digital\",\"category\":\"Instrumentos de medición\",\"code\":\"IM-001\",\"subcode\":\"\",\"location\":\"Laboratorio de electrónica\",\"stock\":16,\"stockMinimum\":4,\"amount\":28500,\"notes\":\"\",\"createdAt\":\"2026-05-18T11:56:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"21d05d51-17cd-4667-92e6-1b625e226837\",\"name\":\"Pistola de calor\",\"category\":\"Herramientas eléctricas\",\"code\":\"HE-005\",\"subcode\":\"\",\"location\":\"Estantería A2\",\"stock\":3,\"stockMinimum\":1,\"amount\":54000,\"notes\":\"\",\"createdAt\":\"2026-05-18T17:13:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"f453d290-c2ad-407f-9403-f300c712ce4a\",\"name\":\"Soldadora inverter 200 A\",\"category\":\"Herramientas eléctricas\",\"code\":\"HE-004\",\"subcode\":\"\",\"location\":\"Estantería A2\",\"stock\":1,\"stockMinimum\":1,\"amount\":265000,\"notes\":\"\",\"createdAt\":\"2026-05-18T20:14:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"901805fe-3f3d-46da-b146-5b9f7f855e54\",\"name\":\"Atornillador inalámbrico 12 V\",\"category\":\"Herramientas eléctricas\",\"code\":\"HE-003\",\"subcode\":\"\",\"location\":\"Estantería A2\",\"stock\":8,\"stockMinimum\":2,\"amount\":98000,\"notes\":\"\",\"createdAt\":\"2026-05-18T19:28:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"48c7902a-1604-4660-9a24-e4dbc9a398b6\",\"name\":\"Amoladora angular 115 mm\",\"category\":\"Herramientas eléctricas\",\"code\":\"HE-002\",\"subcode\":\"\",\"location\":\"Estantería A2\",\"stock\":6,\"stockMinimum\":2,\"amount\":76500,\"notes\":\"\",\"createdAt\":\"2026-05-18T13:32:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"ecac3a0d-5516-4563-9edd-c89f18c51d5a\",\"name\":\"Taladro percutor 650 W\",\"category\":\"Herramientas eléctricas\",\"code\":\"HE-001\",\"subcode\":\"\",\"location\":\"Estantería A2\",\"stock\":13,\"stockMinimum\":2,\"amount\":89538.4615,\"notes\":\"\",\"createdAt\":\"2026-05-18T11:33:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":92500,\"lastPurchaseAt\":\"2026-09-04T14:14:31.000Z\",\"lastPurchaseSupplier\":\"Distribuidora Técnica del Norte SA\",\"lastPurchaseInvoice\":\"A-0012-00031002\"},{\"id\":\"88cfdc71-1dc4-4504-9fb7-b93f855b2d02\",\"name\":\"Arco de sierra\",\"category\":\"Herramientas manuales\",\"code\":\"HM-007\",\"subcode\":\"\",\"location\":\"Estantería A1\",\"stock\":11,\"stockMinimum\":3,\"amount\":11200,\"notes\":\"\",\"createdAt\":\"2026-05-18T13:17:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"829f2127-f85b-42a6-97ea-feb859920fe7\",\"name\":\"Llave francesa 10\\\"\",\"category\":\"Herramientas manuales\",\"code\":\"HM-006\",\"subcode\":\"\",\"location\":\"Estantería A1\",\"stock\":9,\"stockMinimum\":2,\"amount\":15400,\"notes\":\"\",\"createdAt\":\"2026-05-18T17:30:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"2e2826c8-a6cf-4576-b1eb-c4cd9be7aa41\",\"name\":\"Pinza universal 8\\\"\",\"category\":\"Herramientas manuales\",\"code\":\"HM-005\",\"subcode\":\"\",\"location\":\"Estantería A1\",\"stock\":19,\"stockMinimum\":4,\"amount\":9800,\"notes\":\"\",\"createdAt\":\"2026-05-18T15:58:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"eaaaa0fe-a574-4896-8eb9-bdb855ae2abd\",\"name\":\"Martillo de bola 500 g\",\"category\":\"Herramientas manuales\",\"code\":\"HM-004\",\"subcode\":\"\",\"location\":\"Estantería A1\",\"stock\":12,\"stockMinimum\":3,\"amount\":12900,\"notes\":\"\",\"createdAt\":\"2026-05-18T19:37:00.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"d9e31c63-09ea-4be9-8e87-e1ad731cead4\",\"name\":\"Destornillador Phillips PH2\",\"category\":\"Herramientas manuales\",\"code\":\"HM-003\",\"subcode\":\"\",\"location\":\"Estantería A1\",\"stock\":24,\"stockMinimum\":5,\"amount\":4400,\"notes\":\"\",\"createdAt\":\"2026-05-18T13:45:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":4700,\"lastPurchaseAt\":\"2026-10-12T14:23:32.000Z\",\"lastPurchaseSupplier\":\"Ferretería El Tornillo SRL\",\"lastPurchaseInvoice\":\"A-0003-00012390\"},{\"id\":\"543fecf8-4eac-47ec-bebc-1e3d5aa60e9f\",\"name\":\"Destornillador plano 6 mm\",\"category\":\"Herramientas manuales\",\"code\":\"HM-002\",\"subcode\":\"\",\"location\":\"Estantería A1\",\"stock\":22,\"stockMinimum\":5,\"amount\":4309.0909,\"notes\":\"\",\"createdAt\":\"2026-05-18T17:06:00.000Z\",\"createdBy\":\"Jorge Medina\",\"lastPurchaseCost\":4600,\"lastPurchaseAt\":\"2026-10-12T14:23:32.000Z\",\"lastPurchaseSupplier\":\"Ferretería El Tornillo SRL\",\"lastPurchaseInvoice\":\"A-0003-00012390\"},{\"id\":\"f3f8bc96-1cca-4d2c-a67f-81af2a13f481\",\"name\":\"Juego de llaves combinadas 6-22 mm\",\"category\":\"Herramientas manuales\",\"code\":\"HM-001\",\"subcode\":\"\",\"location\":\"Estantería A1\",\"stock\":7,\"stockMinimum\":2,\"amount\":38500,\"notes\":\"\",\"createdAt\":\"2026-05-18T18:00:00.000Z\",\"createdBy\":\"Jorge Medina\"}],\"loans\":[{\"id\":\"4de8f386-0163-42fd-911f-bab3b009945f\",\"itemId\":\"f4d5951b-fa0f-4e43-a1bd-55d7306a5e33\",\"responsibleId\":\"d0236f0d-060a-41d3-be29-acf2d5c194bf\",\"borrower\":\"Catalina Torres\",\"department\":\"7° 2da\",\"quantity\":1,\"dueDate\":\"2026-11-14\",\"observation\":\"Clase de laboratorio\",\"createdAt\":\"2026-11-12T15:09:05.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"228de935-d605-494c-951d-e083c5bb1f21\",\"itemId\":\"a6c2d2bf-203d-4fd3-9ce6-d5ae2b93320d\",\"responsibleId\":\"f0c08dd7-88e6-4914-b3f2-75febe82813c\",\"borrower\":\"Prof. Andrea Choque\",\"department\":\"Docentes\",\"quantity\":1,\"dueDate\":\"2026-11-09\",\"observation\":\"\",\"createdAt\":\"2026-11-12T12:37:06.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"53160679-52c7-4bcd-818a-540638314ec5\",\"itemId\":\"21d05d51-17cd-4667-92e6-1b625e226837\",\"responsibleId\":\"36cb18c5-b2f8-47ed-929a-58bbceb4657e\",\"borrower\":\"Lucía Álvarez\",\"department\":\"5° 2da\",\"quantity\":1,\"dueDate\":\"2026-11-18\",\"observation\":\"\",\"createdAt\":\"2026-11-05T13:53:01.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"b4c5bf7f-0400-45d7-8040-951a7de8b9db\",\"itemId\":\"21d05d51-17cd-4667-92e6-1b625e226837\",\"responsibleId\":\"54a41a41-5d91-44fe-a600-8d2ebd1bab37\",\"borrower\":\"Tomás Flores\",\"department\":\"7° 1ra\",\"quantity\":1,\"dueDate\":\"2026-11-18\",\"observation\":\"\",\"createdAt\":\"2026-11-04T12:07:48.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"9c902270-ad50-4cce-b403-b04db0f17995\",\"itemId\":\"fa4a7369-b630-4035-a5be-6727ff653fbf\",\"responsibleId\":\"b41b7415-9035-4fab-bce1-d77a5d1606ca\",\"borrower\":\"Agustina Cruz\",\"department\":\"7° 1ra\",\"quantity\":1,\"dueDate\":\"2026-11-22\",\"observation\":\"\",\"createdAt\":\"2026-11-03T12:10:44.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"bc897827-0dcb-4099-a1a6-a9007d1c28e9\",\"itemId\":\"f3f8bc96-1cca-4d2c-a67f-81af2a13f481\",\"responsibleId\":\"a444a540-fb53-4feb-be06-1fa44460b021\",\"borrower\":\"Prof. Natalia Burgos\",\"department\":\"Docentes\",\"quantity\":3,\"dueDate\":\"2026-11-06\",\"observation\":\"\",\"createdAt\":\"2026-11-03T12:06:45.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"a5bbfd69-d44b-4657-ae09-a86e34ac645e\",\"itemId\":\"05ad86b3-f033-40ba-b10f-982e07bf9b9f\",\"responsibleId\":\"d44d980d-af89-491a-9d73-3aa27b690d86\",\"borrower\":\"Arq. Hernán Calizaya\",\"department\":\"Docentes\",\"quantity\":1,\"dueDate\":\"2026-11-05\",\"observation\":\"Práctica de taller\",\"createdAt\":\"2026-11-02T13:22:40.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"01dcb545-6088-4841-9b37-7d30b46b0532\",\"itemId\":\"0ae4e306-9cf7-483c-85dc-3c21aa85c145\",\"responsibleId\":\"a54efc2f-c32b-49e2-93a7-0c2245e4c252\",\"borrower\":\"Franco Castro\",\"department\":\"4° 2da\",\"quantity\":2,\"dueDate\":\"2026-11-17\",\"observation\":\"\",\"createdAt\":\"2026-11-02T12:12:41.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"27200b3d-cfa3-4f94-b8b7-c1dd8858553e\",\"itemId\":\"66eaec4b-e38e-4138-a9b2-3189f586c6c3\",\"responsibleId\":\"ef190897-11f2-4209-a59c-5725ee5cc3bf\",\"borrower\":\"Abril Quispe\",\"department\":\"4° 3ra\",\"quantity\":3,\"dueDate\":\"2026-11-17\",\"observation\":\"Clase de laboratorio\",\"createdAt\":\"2026-11-02T11:24:42.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"46012770-2dc4-48bf-a965-68e29c309f8e\",\"itemId\":\"48c7902a-1604-4660-9a24-e4dbc9a398b6\",\"responsibleId\":\"a54efc2f-c32b-49e2-93a7-0c2245e4c252\",\"borrower\":\"Franco Castro\",\"department\":\"4° 2da\",\"quantity\":1,\"dueDate\":\"2026-11-13\",\"observation\":\"\",\"createdAt\":\"2026-10-30T12:13:36.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"4745b5c6-68d8-4bbb-931d-f1a527cf1466\",\"itemId\":\"21d05d51-17cd-4667-92e6-1b625e226837\",\"responsibleId\":\"d50f5136-d124-4b3c-a61e-028b2f670d8e\",\"borrower\":\"Felipe Martínez\",\"department\":\"4° 1ra\",\"quantity\":1,\"dueDate\":\"2026-11-22\",\"observation\":\"Clase de laboratorio\",\"createdAt\":\"2026-10-29T14:41:32.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"fb030ba4-57fd-49ef-9520-655769149e07\",\"itemId\":\"543fecf8-4eac-47ec-bebc-1e3d5aa60e9f\",\"responsibleId\":\"d0236f0d-060a-41d3-be29-acf2d5c194bf\",\"borrower\":\"Catalina Torres\",\"department\":\"7° 2da\",\"quantity\":3,\"dueDate\":\"2026-11-22\",\"observation\":\"Clase de laboratorio\",\"createdAt\":\"2026-10-28T15:55:27.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"c1d72884-a4cc-46f7-a826-a85d316f4009\",\"itemId\":\"a6c2d2bf-203d-4fd3-9ce6-d5ae2b93320d\",\"responsibleId\":\"0f65064e-045e-4247-beca-0cb81f3ac52f\",\"borrower\":\"Tomás Chávez\",\"department\":\"4° 1ra\",\"quantity\":1,\"dueDate\":\"2026-10-30\",\"observation\":\"Trabajo final\",\"createdAt\":\"2026-10-27T13:11:26.000Z\",\"createdBy\":\"Jorge Medina\"}],\"activity\":[{\"id\":\"e9fcb212-6543-40c9-a693-9c47bd99de77\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Disco de corte 115 mm para Abril Quispe (2 unidad(es)). Detalle: Práctica de soldadura.\",\"createdAt\":\"2026-11-12T16:26:07.000Z\"},{\"id\":\"eeb5a831-b4ae-4596-9b0a-b669dac7b55c\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Osciloscopio digital 2 canales para Catalina Torres. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-11-12T15:09:05.000Z\"},{\"id\":\"b2c76848-6d65-48b0-9ab9-56a9186d8b11\",\"type\":\"purchase_request_created\",\"message\":\"Jorge Medina generó un pedido de compra con 2 material(es). Queda a la espera de las firmas de Jefe de taller, Rector y Contable. Observación: Reposición de materiales en alerta de stock.\",\"createdAt\":\"2026-11-12T13:37:30.000Z\"},{\"id\":\"e182823a-5a11-44ad-96ab-aea5ce264116\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Kit Arduino Uno para Prof. Andrea Choque.\",\"createdAt\":\"2026-11-12T12:37:06.000Z\"},{\"id\":\"4d7d43fe-d668-494d-824b-354a46f2f844\",\"type\":\"loan_partial_returned\",\"message\":\"Jorge Medina registró una devolución parcial de Antiparras de seguridad de Franco Castro (1 unidad(es)). Quedan 2 unidad(es) pendientes. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-11-11T18:34:04.000Z\"},{\"id\":\"ea51a176-31d9-43c0-87a6-f6c58166d2be\",\"type\":\"purchase_request_approved\",\"message\":\"Ricardo Sosa aprobó como Jefe de taller el pedido 1C526FC1. Falta la firma de Rector.\",\"createdAt\":\"2026-11-10T12:53:29.000Z\"},{\"id\":\"c0c601a4-e836-43a6-8447-89e6d1f8aa71\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Notebook 14\\\" de Emma Suárez (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-11-09T18:39:03.000Z\"},{\"id\":\"29af77c9-7716-44f2-b7d4-d0b347b0b439\",\"type\":\"purchase_request_created\",\"message\":\"Jorge Medina generó un pedido de compra con 3 material(es). Queda a la espera de las firmas de Jefe de taller, Rector y Contable. Observación: Pedido para el taller de 4° año.\",\"createdAt\":\"2026-11-09T13:48:28.000Z\"},{\"id\":\"f47873d1-b942-4226-a931-47e5adb8c81e\",\"type\":\"purchase_request_approved\",\"message\":\"Claudia Ibarra aprobó como Contable el pedido E6BBE6D9. El pedido quedó aprobado y listo para confirmar con el proveedor.\",\"createdAt\":\"2026-11-07T16:50:27.000Z\"},{\"id\":\"9211b174-5d30-45b2-8d18-7c91a4b9ab30\",\"type\":\"purchase_request_approved\",\"message\":\"María Fernández aprobó como Rector el pedido E6BBE6D9. Falta la firma de Contable.\",\"createdAt\":\"2026-11-07T14:35:26.000Z\"},{\"id\":\"80740a92-d958-45fa-b7f3-d7fa7658ab1f\",\"type\":\"purchase_request_approved\",\"message\":\"Ricardo Sosa aprobó como Jefe de taller el pedido E6BBE6D9. Falta la firma de Rector.\",\"createdAt\":\"2026-11-07T12:19:25.000Z\"},{\"id\":\"d6bacabd-6ace-4c90-aee9-fa1831999c5d\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Lija al agua grano 220 para Prof. Natalia Burgos (6 unidad(es)). Detalle: Práctica de soldadura.\",\"createdAt\":\"2026-11-06T19:53:02.000Z\"},{\"id\":\"6a81de3d-dba6-46ae-9bbb-0ebbf6e178b0\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Taladro percutor 650 W de Catalina Torres (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-11-05T20:36:49.000Z\"},{\"id\":\"36580792-1b8d-4e6e-ad22-58d55fe6d37e\",\"type\":\"purchase_request_created\",\"message\":\"Jorge Medina generó un pedido de compra con 2 material(es). Queda a la espera de las firmas de Jefe de taller, Rector y Contable. Observación: Equipamiento para el laboratorio de electrónica.\",\"createdAt\":\"2026-11-05T13:54:24.000Z\"},{\"id\":\"2e3378e8-4da6-450b-bee6-38286bfde5bc\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pistola de calor para Lucía Álvarez.\",\"createdAt\":\"2026-11-05T13:53:01.000Z\"},{\"id\":\"215d6979-869c-4c4c-85d4-38e25e89bb04\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Notebook 14\\\" para Emma Suárez.\",\"createdAt\":\"2026-11-05T13:10:50.000Z\"},{\"id\":\"8feb659b-8697-42ba-b1fc-cdf228ab0475\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Amoladora angular 115 mm de Ing. Gustavo Tolaba (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-11-04T20:22:47.000Z\"},{\"id\":\"c72f98c6-abc0-49d4-b62a-7f772d39d733\",\"type\":\"purchase_invoice_created\",\"message\":\"Jorge Medina registró la factura A-0012-00031577 de Distribuidora Técnica del Norte SA (sin pedido): Calibre digital 150 mm (2). Total factura $73600.00. Observación: Compra directa (demo).\",\"createdAt\":\"2026-11-04T14:14:34.000Z\"},{\"id\":\"e580d5d2-83e0-4544-a423-b0fb93ea345c\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pistola de calor para Tomás Flores.\",\"createdAt\":\"2026-11-04T12:07:48.000Z\"},{\"id\":\"b3811c1d-21ef-4dbf-8dec-dedbc90d61a0\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Taladro percutor 650 W de Tomás Flores (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-11-03T17:13:43.000Z\"},{\"id\":\"c3d0c749-6fcf-46b3-a977-8f971fd13f74\",\"type\":\"purchase_request_rejected\",\"message\":\"Claudia Ibarra rechazó como Contable el pedido CBA293AB. Motivo: Supera el presupuesto del centro de costos para este mes. Volver a pedir en diciembre..\",\"createdAt\":\"2026-11-03T16:46:23.000Z\"},{\"id\":\"e4cb3444-d49c-4bf8-9417-1e9a3ca6b243\",\"type\":\"purchase_request_approved\",\"message\":\"María Fernández aprobó como Rector el pedido CBA293AB. Falta la firma de Contable.\",\"createdAt\":\"2026-11-03T14:32:22.000Z\"},{\"id\":\"dc4a8c56-cca0-448e-966c-60c06d3990cf\",\"type\":\"purchase_request_approved\",\"message\":\"Ricardo Sosa aprobó como Jefe de taller el pedido CBA293AB. Falta la firma de Rector.\",\"createdAt\":\"2026-11-03T12:40:21.000Z\"},{\"id\":\"11017868-b9ae-4472-97a9-315d887e2108\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pendrive 32 GB para Agustina Cruz.\",\"createdAt\":\"2026-11-03T12:10:44.000Z\"},{\"id\":\"1e108263-5577-442b-b115-2fe0d4da4a28\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Juego de llaves combinadas 6-22 mm para Prof. Natalia Burgos.\",\"createdAt\":\"2026-11-03T12:06:45.000Z\"},{\"id\":\"0818e66e-1ac5-4f0d-8902-ad6ef4127cdc\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Amoladora angular 115 mm para Ing. Gustavo Tolaba. Observación: Trabajo final.\",\"createdAt\":\"2026-11-03T11:48:46.000Z\"},{\"id\":\"52869a08-3031-41ee-8cd9-79bc4b2ed437\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Careta de soldar fotosensible de Prof. Silvina Rueda (2 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-11-02T19:03:39.000Z\"},{\"id\":\"cbdc5c3e-93f6-4991-8d55-54b27ad4a2bc\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Llave francesa 10\\\" de Lautaro Cruz (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-11-02T16:29:38.000Z\"},{\"id\":\"8dc961cc-d27c-43fd-a148-8008a22d151f\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Cinta métrica 5 m para Arq. Hernán Calizaya. Observación: Práctica de taller.\",\"createdAt\":\"2026-11-02T13:22:40.000Z\"},{\"id\":\"313b78df-3447-4bb9-ab25-6689d91dd966\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Antiparras de seguridad para Franco Castro.\",\"createdAt\":\"2026-11-02T12:12:41.000Z\"},{\"id\":\"4e78be77-cfef-4101-b5fa-1075d305b3d8\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Protector auditivo para Abril Quispe. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-11-02T11:24:42.000Z\"},{\"id\":\"4f5beff0-b35a-42f8-979d-82703ccd1479\",\"type\":\"purchase_request_created\",\"message\":\"Jorge Medina generó un pedido de compra con 2 material(es). Queda a la espera de las firmas de Jefe de taller, Rector y Contable. Observación: Herramientas para el taller de 2° año.\",\"createdAt\":\"2026-11-01T13:41:20.000Z\"},{\"id\":\"e3185068-46b3-4874-bff5-f552bc23b609\",\"type\":\"loan_partial_returned\",\"message\":\"Jorge Medina registró una devolución parcial de Llave francesa 10\\\" de Lautaro Cruz (1 unidad(es)). Quedan 1 unidad(es) pendientes. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-10-30T19:26:34.000Z\"},{\"id\":\"cda55cad-72ed-4aa4-8816-f7c6e85e94d0\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Careta de soldar fotosensible para Prof. Silvina Rueda.\",\"createdAt\":\"2026-10-30T14:10:37.000Z\"},{\"id\":\"8ff381a6-5be3-443c-b75f-a2c046c277a4\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Taladro percutor 650 W para Catalina Torres.\",\"createdAt\":\"2026-10-30T12:28:35.000Z\"},{\"id\":\"77595d21-778a-481c-8955-41452367d6a2\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Amoladora angular 115 mm para Franco Castro.\",\"createdAt\":\"2026-10-30T12:13:36.000Z\"},{\"id\":\"f332113b-20be-433f-8e10-1e91e684c978\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Cinta aisladora para Ignacio Herrera (1 unidad(es)). Detalle: Proyecto de 6° año.\",\"createdAt\":\"2026-10-29T19:36:33.000Z\"},{\"id\":\"7827face-c480-4c0c-ad98-701d610158e4\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Taladro percutor 650 W de Facundo López (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-10-29T17:52:28.000Z\"},{\"id\":\"cd769a9e-d7b0-4704-83cc-1605d016c1cc\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Mouse USB de Emma Chávez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-10-29T17:43:30.000Z\"},{\"id\":\"185254c5-e6bb-44c4-b5b0-0be2c722fe71\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Kit Arduino Uno de Emma Suárez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-10-29T16:37:29.000Z\"},{\"id\":\"e1d11a7b-e067-4f52-9021-923affda7057\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pistola de calor para Felipe Martínez. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-10-29T14:41:32.000Z\"},{\"id\":\"f32ffe74-a9e5-42cc-8339-94707add6cc3\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Taladro percutor 650 W para Tomás Flores. Observación: Práctica de taller.\",\"createdAt\":\"2026-10-29T12:56:31.000Z\"},{\"id\":\"b1659f81-e3a6-4265-b007-6488c36376c5\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Destornillador plano 6 mm para Catalina Torres. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-10-28T15:55:27.000Z\"},{\"id\":\"f671b0b0-ea63-4032-b878-5b8408239ffb\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Kit Arduino Uno para Tomás Chávez. Observación: Trabajo final.\",\"createdAt\":\"2026-10-27T13:11:26.000Z\"},{\"id\":\"defff0b6-2d09-4383-a785-290f17783ab0\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Llave francesa 10\\\" de Ing. Ricardo Salinas (3 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-10-26T18:36:25.000Z\"},{\"id\":\"62dda7f3-0030-42dc-9e40-9b66fe74e3e8\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Antiparras de seguridad de Martina Cruz (2 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-10-23T17:24:22.000Z\"},{\"id\":\"73fdf0f0-398a-49b0-82ea-34794808ff8b\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Multímetro digital de Agustina Cruz (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-10-23T16:25:21.000Z\"},{\"id\":\"f4ef87dd-40f7-4f8f-ad29-9335745b03c6\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Llave francesa 10\\\" para Ing. Ricardo Salinas. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-10-23T15:53:23.000Z\"},{\"id\":\"ec8a721d-37be-41cb-b6d4-7b9aad5fa8da\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Llave francesa 10\\\" para Lautaro Cruz. Observación: Práctica de taller.\",\"createdAt\":\"2026-10-23T14:58:24.000Z\"},{\"id\":\"3c698e91-848f-4221-9a3d-6e362ce8eb06\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Antiparras de seguridad para Martina Cruz. Observación: Práctica de taller.\",\"createdAt\":\"2026-10-22T14:23:20.000Z\"},{\"id\":\"ff91d89d-22c3-4162-9855-35933cf834a5\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Mouse USB para Emma Chávez. Observación: Trabajo final.\",\"createdAt\":\"2026-10-22T13:44:19.000Z\"},{\"id\":\"411fd162-191a-4ccb-ad49-878894609127\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Kit Arduino Uno para Emma Suárez.\",\"createdAt\":\"2026-10-22T12:24:18.000Z\"},{\"id\":\"862e3140-3951-4ab4-964d-648f934b1473\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Guantes de descarne de Felipe Suárez (2 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-10-20T18:43:16.000Z\"},{\"id\":\"f2bd9ffc-0f69-478a-9117-4c97ebe8af45\",\"type\":\"stock_entry_created\",\"message\":\"Jorge Medina registró un ingreso por donacion de Taladro percutor 650 W (3). Donante: Cooperadora escolar. Observación: Donación registrada para la demo.\",\"createdAt\":\"2026-10-20T13:46:17.000Z\"},{\"id\":\"4d06dc94-dce5-4fd1-922f-c1e43fe8ddb7\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pendrive 32 GB de Prof. Andrea Choque (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-10-19T20:29:10.000Z\"},{\"id\":\"fbc61c32-d4fa-464c-aa0e-4d7a61a8c9e2\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Estaño 60/40 (rollo 250 g) para Facundo López (4 unidad(es)).\",\"createdAt\":\"2026-10-19T19:53:15.000Z\"},{\"id\":\"cf826d8d-0f4f-4669-aac8-a52658405d96\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Guantes de descarne de Lucía Martínez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-10-19T18:53:09.000Z\"},{\"id\":\"0b412c89-83e3-43ac-a157-9402529ee997\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Amoladora angular 115 mm de Mónica Zerpa (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-10-19T18:50:07.000Z\"},{\"id\":\"753301de-6d6c-4b6c-af57-e1345e4aa77c\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Guantes de descarne de Felipe Martínez (2 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-10-19T18:17:12.000Z\"},{\"id\":\"6d75bd94-7992-459a-807e-cf80cce80366\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Soldador tipo lápiz 40 W de Camila Quispe (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-10-19T18:00:11.000Z\"},{\"id\":\"c0692582-24fe-495d-bad4-1b2c81854440\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Juego de llaves combinadas 6-22 mm de Joaquín Álvarez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-10-19T16:27:08.000Z\"},{\"id\":\"acc2421a-f6ab-4950-984b-83fbf93a8c8e\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Multímetro digital para Agustina Cruz. Observación: Práctica de taller.\",\"createdAt\":\"2026-10-19T15:01:14.000Z\"},{\"id\":\"38042ac7-42cb-4949-824f-fbe4c0589d45\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Taladro percutor 650 W para Facundo López. Observación: Práctica de taller.\",\"createdAt\":\"2026-10-19T12:35:13.000Z\"},{\"id\":\"bada71a8-0e4a-4f01-8ea7-54e2ed2a5f56\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Taladro percutor 650 W de Ing. Ricardo Salinas (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-10-16T19:54:03.000Z\"},{\"id\":\"9de192a3-0b19-4639-b24b-76b21e30b137\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Guantes de descarne para Felipe Martínez. Observación: Práctica de taller.\",\"createdAt\":\"2026-10-16T15:55:05.000Z\"},{\"id\":\"617e0e6e-1513-4910-8a16-4f20da1a6991\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Electrodo 2,5 mm (kg) para Raúl Villca (3 unidad(es)). Detalle: Trabajo práctico.\",\"createdAt\":\"2026-10-16T14:40:06.000Z\"},{\"id\":\"266ea873-bef9-4515-8cad-6a42651e2144\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Soldador tipo lápiz 40 W para Camila Quispe. Observación: Trabajo final.\",\"createdAt\":\"2026-10-16T14:33:04.000Z\"},{\"id\":\"f3f12be1-a257-4aa9-b4ba-b8407d7832e0\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Destornillador plano 6 mm de Agustina Quispe (3 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-10-15T19:46:49.000Z\"},{\"id\":\"06b2e913-5cd1-495f-90af-0cd04ee5e5e3\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Guantes de descarne de Raúl Villca (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-10-15T17:14:48.000Z\"},{\"id\":\"c221f380-d77b-4544-bd4f-148df9729591\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Guantes de descarne para Lucía Martínez.\",\"createdAt\":\"2026-10-15T14:36:50.000Z\"},{\"id\":\"058b9c72-33cc-4360-92f6-238ad7bbeea3\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Taladro percutor 650 W para Ing. Ricardo Salinas. Observación: Trabajo final.\",\"createdAt\":\"2026-10-15T12:50:01.000Z\"},{\"id\":\"8b500c8b-ec1c-40e3-a113-5d8c980092ce\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pendrive 32 GB para Prof. Andrea Choque. Observación: Trabajo final.\",\"createdAt\":\"2026-10-15T12:03:02.000Z\"},{\"id\":\"73521f48-674b-4e31-b139-da752304a01d\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Destornillador plano 6 mm para Agustina Quispe.\",\"createdAt\":\"2026-10-14T13:15:47.000Z\"},{\"id\":\"dfed878a-1ce7-4c0f-83be-aa4250b34e73\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Protector auditivo para Mónica Zerpa (2 unidad(es)). Detalle: Práctica de soldadura.\",\"createdAt\":\"2026-10-13T14:21:46.000Z\"},{\"id\":\"e6a935a1-3922-4d98-94d8-d475cc9ebf3d\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Destornillador plano 6 mm de Felipe Suárez (2 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-10-12T18:38:41.000Z\"},{\"id\":\"de061890-5c04-461f-870e-9cb7f8583f53\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pistola de calor de Lautaro Cruz (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-10-12T18:04:40.000Z\"},{\"id\":\"a1fd345e-5d7d-4d10-ba5f-89f06bd2c431\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Guantes de descarne de Joaquín Álvarez (2 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-10-12T16:49:39.000Z\"},{\"id\":\"4232754a-a8f8-4a41-b7c5-d8fdf8dfac55\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Juego de llaves combinadas 6-22 mm para Joaquín Álvarez. Observación: Práctica de taller.\",\"createdAt\":\"2026-10-12T14:52:42.000Z\"},{\"id\":\"afb7ab0b-95e5-4e98-b3ea-507ca4a2b327\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Guantes de descarne para Raúl Villca.\",\"createdAt\":\"2026-10-12T14:27:44.000Z\"},{\"id\":\"b39fabd4-b8e8-473e-9279-21ee05c24ebf\",\"type\":\"purchase_invoice_created\",\"message\":\"Jorge Medina registró la factura A-0003-00012390 de Ferretería El Tornillo SRL (sin pedido): Destornillador plano 6 mm (6), Destornillador Phillips PH2 (6), Cinta aisladora (30). Total factura $87300.00. Observación: Compra directa (demo).\",\"createdAt\":\"2026-10-12T14:23:33.000Z\"},{\"id\":\"9b8f19c8-3482-49b6-ab04-c56887dff31f\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Antiparras de seguridad para Lucía Sánchez (1 unidad(es)).\",\"createdAt\":\"2026-10-12T13:02:45.000Z\"},{\"id\":\"381191f5-8733-47ce-94b9-5953c273c016\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Guantes de descarne para Felipe Suárez.\",\"createdAt\":\"2026-10-12T11:40:43.000Z\"},{\"id\":\"c1ed5a0b-2eca-4c89-ab15-bc2545de705b\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Osciloscopio digital 2 canales de Felipe Suárez (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-10-09T16:46:36.000Z\"},{\"id\":\"7a5bdeb7-9c06-4f51-94d7-5e3a1268661e\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Atornillador inalámbrico 12 V de Joaquín Martínez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-10-09T16:21:37.000Z\"},{\"id\":\"555ebd23-bf4d-403c-b58f-8adcac1e5fd0\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Guantes de descarne para Emma Suárez (2 unidad(es)). Detalle: Trabajo práctico.\",\"createdAt\":\"2026-10-09T14:19:38.000Z\"},{\"id\":\"30917bb2-1c64-4be3-8649-d2607e36aa37\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Amoladora angular 115 mm para Mónica Zerpa.\",\"createdAt\":\"2026-10-08T15:41:34.000Z\"},{\"id\":\"86807e80-c5ae-489a-b335-77e45d286480\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Atornillador inalámbrico 12 V para Joaquín Martínez. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-10-08T15:05:35.000Z\"},{\"id\":\"e2935a1c-53aa-4d51-9d63-c7ae175e0904\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Amoladora angular 115 mm de Felipe Morales (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-10-07T18:53:33.000Z\"},{\"id\":\"2749cdaa-4685-44b4-b181-16177e910a58\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Electrodo 2,5 mm (kg) para Arq. Hernán Calizaya (4 unidad(es)). Detalle: Mantenimiento.\",\"createdAt\":\"2026-10-06T14:24:32.000Z\"},{\"id\":\"a1473b23-1a20-4ee6-a9d3-00021a7186ae\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Amoladora angular 115 mm para Felipe Morales. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-10-06T12:21:31.000Z\"},{\"id\":\"ad19aae3-6646-4826-a7ec-fbe9b84d20ad\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Destornillador Phillips PH2 de Emma Suárez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-10-05T20:36:26.000Z\"},{\"id\":\"04fac9d5-074c-43c6-9725-da947b41c59c\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Soldador tipo lápiz 40 W de Mónica Zerpa (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-10-05T20:24:27.000Z\"},{\"id\":\"ac5039b8-7c93-4fad-9704-70629e90def5\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Antiparras de seguridad para Abril Quispe (1 unidad(es)). Detalle: Trabajo práctico.\",\"createdAt\":\"2026-10-05T16:38:30.000Z\"},{\"id\":\"0c687ed6-dac9-46a3-b838-bb0416497245\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Osciloscopio digital 2 canales para Felipe Suárez.\",\"createdAt\":\"2026-10-05T12:20:28.000Z\"},{\"id\":\"12b38928-4985-4080-ba99-02a8c92cb207\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Destornillador plano 6 mm para Felipe Suárez.\",\"createdAt\":\"2026-10-05T11:21:29.000Z\"},{\"id\":\"d5cdfcf4-0a1c-4b14-9647-8bafc56d41ec\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Cinta métrica 5 m de Thiago Aguirre (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-10-02T17:44:24.000Z\"},{\"id\":\"5bafa6dd-8886-45e4-8533-e47f1f1a290c\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Mouse USB de Prof. Natalia Burgos (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-10-02T16:31:23.000Z\"},{\"id\":\"85c6980d-d000-4500-9bb7-eb7ac85a11d6\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pendrive 32 GB de Felipe Morales (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-10-02T16:09:25.000Z\"},{\"id\":\"89f65020-c25c-4e25-9b73-e2af66a2d947\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Llave francesa 10\\\" de Felipe Martínez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-10-01T17:25:20.000Z\"},{\"id\":\"0282fc9b-d9cb-465a-938f-1b0e930b82a5\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pistola de calor de Santiago Herrera (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-10-01T16:59:19.000Z\"},{\"id\":\"641d2e94-baaf-4123-8f34-fa450a52317f\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pistola de calor para Lautaro Cruz.\",\"createdAt\":\"2026-10-01T14:54:21.000Z\"},{\"id\":\"d9ea02f7-df9f-4ae3-9188-e625c970e646\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pendrive 32 GB para Felipe Morales.\",\"createdAt\":\"2026-10-01T14:38:22.000Z\"},{\"id\":\"ae4601af-7d02-4f83-b089-6fab3e50c5a0\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Taladro percutor 650 W de Ignacio Herrera (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-09-30T20:17:14.000Z\"},{\"id\":\"9ab01dba-ce61-45be-a916-8d920dbe2960\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Soldador tipo lápiz 40 W para Mónica Zerpa.\",\"createdAt\":\"2026-09-30T14:15:16.000Z\"},{\"id\":\"87a55ac7-412d-4154-b00c-eb0025ac87b1\",\"type\":\"stock_entry_created\",\"message\":\"Jorge Medina registró un ingreso por donacion de Pinza universal 8\\\" (5). Donante: Ex alumnos promoción 2015. Observación: Donación registrada para la demo.\",\"createdAt\":\"2026-09-30T13:43:18.000Z\"},{\"id\":\"ac2dd7ad-ef36-4c0b-9044-0bc7c6751996\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Guantes de descarne para Joaquín Álvarez. Observación: Trabajo final.\",\"createdAt\":\"2026-09-30T12:51:15.000Z\"},{\"id\":\"1b2741c5-bf5a-4606-a7be-ccd8f546e5aa\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Llave francesa 10\\\" para Felipe Martínez.\",\"createdAt\":\"2026-09-30T12:28:17.000Z\"},{\"id\":\"bf4f1b0c-5482-4fb2-a80e-5cdc68ae14bd\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Mouse USB para Prof. Natalia Burgos.\",\"createdAt\":\"2026-09-29T11:22:12.000Z\"},{\"id\":\"5c54d9f7-9295-49cb-89d3-3f68c2413dfa\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Cinta métrica 5 m para Thiago Aguirre. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-09-29T11:03:13.000Z\"},{\"id\":\"e64d5849-4c4d-4a50-91ce-219190d7fa52\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Taladro percutor 650 W de Felipe Suárez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-09-28T19:37:10.000Z\"},{\"id\":\"0247e36d-4e37-4e6f-934c-bfaa7937df33\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pinza amperométrica de Emma Chávez (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-09-28T18:04:11.000Z\"},{\"id\":\"dc01bf3a-9ea0-4885-897b-c526c41d6866\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Protector auditivo de Joaquín Martínez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-09-25T18:48:06.000Z\"},{\"id\":\"35623a5b-4665-4296-b174-9f07fc45d3c1\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Soldador tipo lápiz 40 W de Camila Quispe (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-09-25T17:58:04.000Z\"},{\"id\":\"3c6dffd4-012d-4a5b-88d8-91f2f465f9b9\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Soldadora inverter 200 A de Lucía Martínez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-09-25T16:30:07.000Z\"},{\"id\":\"77fc9704-4e02-4c49-a62e-aa71ad2d1599\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pistola de calor de Emma Chávez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-09-25T16:00:05.000Z\"},{\"id\":\"ca4075d9-da7d-4606-8712-e2f265c73a87\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Destornillador Phillips PH2 para Emma Suárez. Observación: Práctica de taller.\",\"createdAt\":\"2026-09-25T12:17:08.000Z\"},{\"id\":\"783c78b0-3d8b-44f1-806b-58c698efe652\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Estaño 60/40 (rollo 250 g) para Felipe Martínez (4 unidad(es)). Detalle: Práctica de soldadura.\",\"createdAt\":\"2026-09-25T12:01:09.000Z\"},{\"id\":\"920318c0-8db7-40cc-a093-d62df21217b6\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Antiparras de seguridad para Arq. Hernán Calizaya (4 unidad(es)).\",\"createdAt\":\"2026-09-24T19:23:03.000Z\"},{\"id\":\"11add02c-8345-4383-80b9-6beb8f87dfef\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Taladro percutor 650 W para Ignacio Herrera. Observación: Trabajo final.\",\"createdAt\":\"2026-09-24T15:21:02.000Z\"},{\"id\":\"63d21303-21bf-4e73-a9a8-460f09bbbf3d\",\"type\":\"stock_entry_created\",\"message\":\"Jorge Medina registró un ingreso por compra de Kit Arduino Uno (4), Protoboard 830 puntos (10). Proveedor: Electro Insumos Andinos.\",\"createdAt\":\"2026-09-24T15:13:19.000Z\"},{\"id\":\"bb0fde3b-4c23-4dac-a334-2b30f589bcb9\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Delantal de cuero de Mónica Zerpa (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-09-23T19:20:49.000Z\"},{\"id\":\"c45ad916-d011-45c4-bd90-423aec1462f5\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Calibre digital 150 mm de Lucía Sánchez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-09-23T17:34:48.000Z\"},{\"id\":\"01c57d8a-4fc3-4536-a481-ded33c2625a3\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Pinza amperométrica para Emma Chávez. Observación: Trabajo final.\",\"createdAt\":\"2026-09-23T14:51:01.000Z\"},{\"id\":\"29940fde-e220-4990-a28f-c3aac5183e64\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pistola de calor para Santiago Herrera.\",\"createdAt\":\"2026-09-23T11:04:50.000Z\"},{\"id\":\"820bb53e-6ec6-4039-9dd7-6e99e2e51063\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Kit Arduino Uno de Camila Quispe (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-09-22T16:33:45.000Z\"},{\"id\":\"be798e12-da41-4ef8-9734-79fd3d854e14\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Soldadora inverter 200 A para Lucía Martínez. Observación: Práctica de taller.\",\"createdAt\":\"2026-09-22T14:05:47.000Z\"},{\"id\":\"6c652f4d-644f-43a7-977e-88451f7da26e\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Taladro percutor 650 W para Felipe Suárez.\",\"createdAt\":\"2026-09-22T11:33:46.000Z\"},{\"id\":\"67f8841d-c6c9-4d8a-b4d9-b1c22353c678\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Cable HDMI 3 m de Prof. Silvina Rueda (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-09-21T18:02:40.000Z\"},{\"id\":\"c26e2b1d-c97e-4f99-8e6e-92f6e071e088\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Lija al agua grano 220 para Thiago Aguirre (1 unidad(es)). Detalle: Mantenimiento.\",\"createdAt\":\"2026-09-21T17:02:44.000Z\"},{\"id\":\"e53e969a-1b27-4219-b202-17872d846701\",\"type\":\"loan_partial_returned\",\"message\":\"Jorge Medina registró una devolución parcial de Delantal de cuero de Mónica Zerpa (1 unidad(es)). Quedan 1 unidad(es) pendientes. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-09-21T16:42:41.000Z\"},{\"id\":\"bc981ca0-c865-4388-8658-3a0ffd51fba0\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Notebook 14\\\" de Prof. Silvina Rueda (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-09-21T16:21:42.000Z\"},{\"id\":\"7d643eaf-7f9f-4278-b4f1-4e1fc7ac0e02\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Kit Arduino Uno para Camila Quispe.\",\"createdAt\":\"2026-09-21T14:26:43.000Z\"},{\"id\":\"6f0adbc6-8788-44ab-8c47-9a575d5baffd\",\"type\":\"purchase_request_confirmed\",\"message\":\"Jorge Medina confirmó en forma parcial el pedido 54C08537 con Electro Insumos Andinos: Kit Arduino Uno (6), Protoboard 830 puntos (10). Total factura $310800.00. Observación: Confirmación de la demo.\",\"createdAt\":\"2026-09-19T14:20:18.000Z\"},{\"id\":\"62046536-8e95-4e1d-916a-7105d077258d\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pinza universal 8\\\" de Martina Cruz (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-09-18T20:15:38.000Z\"},{\"id\":\"29477792-84bf-4f6e-92a1-1e4b205a6690\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Arco de sierra de Felipe Suárez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-09-18T16:06:39.000Z\"},{\"id\":\"a891ed3a-452b-4ebc-9cb1-2984bdee2086\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Protector auditivo para Joaquín Martínez. Observación: Trabajo final.\",\"createdAt\":\"2026-09-17T14:47:37.000Z\"},{\"id\":\"5e8a7c3f-6931-4ccd-b8f6-48f6675773ba\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Kit Arduino Uno de Emma Suárez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-09-16T16:59:33.000Z\"},{\"id\":\"d7f0eb6a-31ea-432d-9add-a243065812c2\",\"type\":\"purchase_request_approved\",\"message\":\"Claudia Ibarra aprobó como Contable el pedido 54C08537. El pedido quedó aprobado y listo para confirmar con el proveedor.\",\"createdAt\":\"2026-09-16T16:21:17.000Z\"},{\"id\":\"8440bf9b-505c-4ef5-bfd2-f7ad5a7b3b28\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Soldador tipo lápiz 40 W para Camila Quispe.\",\"createdAt\":\"2026-09-16T15:05:34.000Z\"},{\"id\":\"23e54b34-e024-4933-a551-a9a394231431\",\"type\":\"purchase_request_approved\",\"message\":\"María Fernández aprobó como Rector el pedido 54C08537. Falta la firma de Contable.\",\"createdAt\":\"2026-09-16T14:57:16.000Z\"},{\"id\":\"b59b7736-59d7-4a18-b4fb-ae66265527ad\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pistola de calor para Emma Chávez.\",\"createdAt\":\"2026-09-16T14:39:35.000Z\"},{\"id\":\"a06c8463-9986-42b7-8908-288a2724adac\",\"type\":\"purchase_request_approved\",\"message\":\"Ricardo Sosa aprobó como Jefe de taller el pedido 54C08537. Falta la firma de Rector.\",\"createdAt\":\"2026-09-16T12:44:15.000Z\"},{\"id\":\"ee0daac2-d202-4040-a3bf-c329d5522cee\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Guantes de descarne para Lucía Sánchez (3 unidad(es)). Detalle: Proyecto de 6° año.\",\"createdAt\":\"2026-09-16T12:25:36.000Z\"},{\"id\":\"2c91b789-49f9-4f9e-a150-db73c113145d\",\"type\":\"loan_partial_returned\",\"message\":\"Jorge Medina registró una devolución parcial de Pinza universal 8\\\" de Martina Cruz (1 unidad(es)). Quedan 1 unidad(es) pendientes.\",\"createdAt\":\"2026-09-15T18:11:31.000Z\"},{\"id\":\"f600f0e8-3210-4f2e-bb1f-9f2dcf554ac7\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Notebook 14\\\" para Prof. Silvina Rueda. Observación: Trabajo final.\",\"createdAt\":\"2026-09-15T13:43:32.000Z\"},{\"id\":\"bcc137eb-6d1e-45cd-8834-4660b142eb66\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pinza amperométrica de Tomás Flores (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-09-14T20:30:25.000Z\"},{\"id\":\"02b02589-22ab-4aa0-bc10-cd9cef0c66f1\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Soldadora inverter 200 A de Raúl Villca (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-09-14T19:09:26.000Z\"},{\"id\":\"02495fc7-81a4-4471-93e6-79fa7151e360\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Notebook 14\\\" de Joaquín Martínez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-09-14T19:01:22.000Z\"},{\"id\":\"075f325b-bf06-46dd-9668-c93c99a5dcfe\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pendrive 32 GB de Facundo López (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-09-14T17:38:24.000Z\"},{\"id\":\"12be3ca8-770f-4683-bfe9-2e94279c7191\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Estaño 60/40 (rollo 250 g) para Joaquín Martínez (2 unidad(es)). Detalle: Proyecto de 6° año.\",\"createdAt\":\"2026-09-14T17:12:30.000Z\"},{\"id\":\"02393304-700e-4cdf-ab74-8166c1b64c30\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pinza universal 8\\\" de Prof. Silvina Rueda (2 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-09-14T17:11:21.000Z\"},{\"id\":\"de2e5e85-6040-4a81-9a1f-cfba48f50a9f\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Taladro percutor 650 W de Ing. Ricardo Salinas (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-09-14T16:25:23.000Z\"},{\"id\":\"02def4f5-5355-4b19-8132-dc9f34cd2ed0\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Cable HDMI 3 m para Prof. Silvina Rueda.\",\"createdAt\":\"2026-09-14T15:43:27.000Z\"},{\"id\":\"e4d4f315-34c8-467b-8bba-1e0117a9d4b3\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Calibre digital 150 mm para Lucía Sánchez.\",\"createdAt\":\"2026-09-14T15:21:28.000Z\"},{\"id\":\"d1b52d70-94a8-4d47-ae55-58347e9846d5\",\"type\":\"purchase_request_created\",\"message\":\"Jorge Medina generó un pedido de compra con 3 material(es). Queda a la espera de las firmas de Jefe de taller, Rector y Contable. Observación: Laboratorio de electrónica · segundo cuatrimestre.\",\"createdAt\":\"2026-09-14T13:28:14.000Z\"},{\"id\":\"0de1b08d-cc01-4933-9f00-5f8bcbc01da7\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Delantal de cuero para Mónica Zerpa.\",\"createdAt\":\"2026-09-14T13:22:29.000Z\"},{\"id\":\"d54c5815-ed60-4953-af4f-36b170dc7004\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Martillo de bola 500 g de Camila Quispe (2 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-09-11T19:43:19.000Z\"},{\"id\":\"a659b9c5-98cb-4526-a7d0-741ef5921dc8\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Kit Arduino Uno de Martina Cruz (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-09-11T18:23:18.000Z\"},{\"id\":\"5ed2a7d0-2191-4b8f-bac1-1a7cdb4016c3\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Soldadora inverter 200 A para Raúl Villca.\",\"createdAt\":\"2026-09-11T12:36:20.000Z\"},{\"id\":\"83de13eb-a1f4-4cfc-91bf-e298ff2a1a46\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Amoladora angular 115 mm de Felipe Suárez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-09-10T18:47:14.000Z\"},{\"id\":\"60e4af62-1f15-403c-ac37-efb809e5bfec\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Antiparras de seguridad para Mónica Zerpa (1 unidad(es)).\",\"createdAt\":\"2026-09-10T15:53:17.000Z\"},{\"id\":\"472d9237-3e56-4981-90ae-26158032d063\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pinza amperométrica para Tomás Flores. Observación: Trabajo final.\",\"createdAt\":\"2026-09-10T14:40:16.000Z\"},{\"id\":\"189dcc82-8011-4e0c-9dc5-d3a1afd588cd\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Arco de sierra para Felipe Suárez. Observación: Trabajo final.\",\"createdAt\":\"2026-09-10T13:20:15.000Z\"},{\"id\":\"b7557916-ab51-4879-a22e-c89d2fce5129\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Pendrive 32 GB para Facundo López. Observación: Trabajo final.\",\"createdAt\":\"2026-09-09T14:24:13.000Z\"},{\"id\":\"9bff1ba1-8d96-4acc-a7c1-897ef85ad4f0\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Taladro percutor 650 W para Ing. Ricardo Salinas. Observación: Trabajo final.\",\"createdAt\":\"2026-09-09T12:28:12.000Z\"},{\"id\":\"6656a10d-b48f-4db9-9a44-f67cfee8fee1\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Notebook 14\\\" para Joaquín Martínez. Observación: Trabajo final.\",\"createdAt\":\"2026-09-09T11:27:11.000Z\"},{\"id\":\"a46c3878-f1a0-4a8f-a80e-b053e4178000\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Careta de soldar fotosensible de Emma Suárez (2 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-09-08T17:16:06.000Z\"},{\"id\":\"ea8d4d2b-4bcd-4b49-b798-f6ac6632e08d\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Antiparras de seguridad para Raúl Villca (2 unidad(es)). Detalle: Mantenimiento.\",\"createdAt\":\"2026-09-08T16:09:10.000Z\"},{\"id\":\"1b7dda68-c10e-4406-ba74-94d7bba09374\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Pinza universal 8\\\" para Martina Cruz.\",\"createdAt\":\"2026-09-08T15:41:07.000Z\"},{\"id\":\"b8879aae-fc29-4494-98e5-1c8d0f116c1d\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Martillo de bola 500 g para Camila Quispe. Observación: Práctica de taller.\",\"createdAt\":\"2026-09-08T14:46:09.000Z\"},{\"id\":\"ddd25925-8c38-48a8-9f52-54cc7b7c4368\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pinza universal 8\\\" para Prof. Silvina Rueda.\",\"createdAt\":\"2026-09-08T12:00:08.000Z\"},{\"id\":\"121a4df7-cb8d-4026-b717-6235133baa96\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Mouse USB de Camila Quispe (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-09-07T20:34:03.000Z\"},{\"id\":\"f8ffc10c-dc49-4661-829a-d29209650f44\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Kit Arduino Uno para Emma Suárez.\",\"createdAt\":\"2026-09-07T15:06:05.000Z\"},{\"id\":\"5e9e6bab-1ebc-478d-bda2-e067a695e3c7\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Careta de soldar fotosensible para Emma Suárez. Observación: Práctica de taller.\",\"createdAt\":\"2026-09-07T14:46:04.000Z\"},{\"id\":\"2a53a2c2-cbf0-4275-b43a-5f0051652aa6\",\"type\":\"purchase_invoice_created\",\"message\":\"Jorge Medina registró la factura A-0012-00031002 de Distribuidora Técnica del Norte SA (sin pedido): Taladro percutor 650 W (2), Mecha HSS 6 mm (20). Total factura $227000.00. Observación: Compra directa (demo).\",\"createdAt\":\"2026-09-04T14:14:32.000Z\"},{\"id\":\"e3ecb12d-4a9d-44ed-bc27-e443c127bf76\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Kit Arduino Uno para Martina Cruz. Observación: Trabajo final.\",\"createdAt\":\"2026-09-04T13:58:01.000Z\"},{\"id\":\"e19dfd6b-7a7c-41e5-9ae0-434c26a2210e\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Amoladora angular 115 mm para Felipe Suárez. Observación: Práctica de taller.\",\"createdAt\":\"2026-09-04T13:40:02.000Z\"},{\"id\":\"d00df777-c7f3-41d4-8bde-3666a91313aa\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Destornillador Phillips PH2 de Franco Castro (3 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-09-03T19:51:49.000Z\"},{\"id\":\"8f69b26d-6377-45c9-9611-8a5bb15eb994\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Protector auditivo para Lautaro Gutiérrez (2 unidad(es)). Detalle: Mantenimiento.\",\"createdAt\":\"2026-09-03T19:46:50.000Z\"},{\"id\":\"2391d1e0-adb3-47aa-aab6-e4a3f039fd49\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Soldador tipo lápiz 40 W de Felipe Martínez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-09-02T18:11:48.000Z\"},{\"id\":\"a42a1542-40af-4112-bc40-bcdf9a6d967b\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Nivel de burbuja 60 cm de Lucía Álvarez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-08-31T20:34:44.000Z\"},{\"id\":\"4affe8a1-ba5f-47cf-b51d-3f72ce4cebdc\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Soldador tipo lápiz 40 W de Prof. Silvina Rueda (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-08-31T19:56:46.000Z\"},{\"id\":\"b6b41c78-5f11-4c5f-91dc-8a5501b14aa5\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Cinta métrica 5 m de Lucía Martínez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-08-31T18:16:47.000Z\"},{\"id\":\"b5b040d3-aa01-492a-b4da-449132693d66\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Taladro percutor 650 W de Felipe Morales (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-08-31T17:03:45.000Z\"},{\"id\":\"22e67743-a892-4084-9a3e-58f02ca4e06d\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Atornillador inalámbrico 12 V de Franco Castro (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-08-28T19:28:42.000Z\"},{\"id\":\"27729906-8187-427e-a190-7dd1ab0d8d97\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Soldadora inverter 200 A de Ing. Ricardo Salinas (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-08-28T18:10:41.000Z\"},{\"id\":\"6f9073ab-0530-44ef-938d-808bff88b6b6\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Destornillador Phillips PH2 para Franco Castro. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-08-28T15:23:43.000Z\"},{\"id\":\"27fba258-3631-4688-8ecd-de82c7889619\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Mouse USB para Camila Quispe.\",\"createdAt\":\"2026-08-27T14:58:38.000Z\"},{\"id\":\"5f68e4cd-9b49-4574-978f-27b1c74889a1\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Atornillador inalámbrico 12 V para Franco Castro. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-08-27T12:52:40.000Z\"},{\"id\":\"a2a7478e-b366-4b4a-9f93-e7358dc4783f\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Cinta métrica 5 m para Lucía Martínez. Observación: Práctica de taller.\",\"createdAt\":\"2026-08-27T12:15:39.000Z\"},{\"id\":\"860698a7-ac16-4e6c-b160-04a27b8b669e\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Amoladora angular 115 mm de Emma Chávez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-08-26T20:41:33.000Z\"},{\"id\":\"5180799f-e298-4277-96ef-194606d62efc\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Soldadora inverter 200 A de Camila Quispe (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-08-26T20:07:35.000Z\"},{\"id\":\"701ff15d-70c9-4f3a-944a-70157ef56b19\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Llave francesa 10\\\" de Facundo López (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-08-26T17:38:34.000Z\"},{\"id\":\"0cb13517-538d-454d-9516-9b2815489595\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Soldador tipo lápiz 40 W para Prof. Silvina Rueda. Observación: Práctica de taller.\",\"createdAt\":\"2026-08-26T12:35:37.000Z\"},{\"id\":\"247d857c-5593-4a0f-80a4-bc77e09554cb\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Soldador tipo lápiz 40 W para Felipe Martínez.\",\"createdAt\":\"2026-08-26T12:16:36.000Z\"},{\"id\":\"795ac9b2-024a-4d90-8d71-ab26381e2182\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Soldadora inverter 200 A para Ing. Ricardo Salinas.\",\"createdAt\":\"2026-08-25T12:55:32.000Z\"},{\"id\":\"6a654ba2-94cd-4d1e-ad3e-d49ebcb1f44f\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Taladro percutor 650 W de Mónica Zerpa (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-08-24T19:02:25.000Z\"},{\"id\":\"277c41da-d7e7-499f-9295-6e67e7823e01\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Taladro percutor 650 W de Tomás Chávez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-08-24T17:22:28.000Z\"},{\"id\":\"b03c8f70-2201-40c6-8fe8-ef5f68d155ff\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pinza amperométrica de Lautaro Cruz (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-08-24T17:21:26.000Z\"},{\"id\":\"b92294cf-8482-402c-9a27-f003f87670ea\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pendrive 32 GB de Lucía Martínez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-08-24T17:09:27.000Z\"},{\"id\":\"a06a3e5e-b31e-445d-acce-234b7f10f24c\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Taladro percutor 650 W para Felipe Morales.\",\"createdAt\":\"2026-08-24T15:45:31.000Z\"},{\"id\":\"0ad0d099-486f-4aa7-b777-97a96b17ef0c\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Nivel de burbuja 60 cm para Lucía Álvarez.\",\"createdAt\":\"2026-08-24T15:13:30.000Z\"},{\"id\":\"b5db6af6-a21c-4e15-90c9-5dc0bc706428\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Soldadora inverter 200 A para Camila Quispe.\",\"createdAt\":\"2026-08-24T14:53:29.000Z\"},{\"id\":\"7e7ee2cd-36d0-49d7-9acb-0e5057a544b0\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Taladro percutor 650 W para Tomás Chávez.\",\"createdAt\":\"2026-08-21T14:40:23.000Z\"},{\"id\":\"e215f6dc-349c-4b74-8969-334f7fc37702\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Llave francesa 10\\\" para Facundo López.\",\"createdAt\":\"2026-08-21T12:45:24.000Z\"},{\"id\":\"6db0f9ef-e220-4764-beb4-26d5a9ea9ee8\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Llave francesa 10\\\" de Joaquín Chávez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-08-20T20:25:19.000Z\"},{\"id\":\"6ef53ca7-bb47-48b2-9b1c-b0593db91b58\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Delantal de cuero de Lautaro Álvarez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-08-20T19:30:20.000Z\"},{\"id\":\"7fab12d3-be5c-45b0-84a0-59354358977f\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Disco de corte 115 mm para Ing. Gustavo Tolaba (1 unidad(es)). Detalle: Trabajo práctico.\",\"createdAt\":\"2026-08-20T19:07:22.000Z\"},{\"id\":\"3e27638f-c1a1-4c7a-8553-e20244de45db\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Amoladora angular 115 mm de Felipe Martínez (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-08-20T18:28:18.000Z\"},{\"id\":\"28179e3d-859c-4063-940a-f2792968a4ea\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Taladro percutor 650 W de Joaquín Chávez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-08-20T16:43:21.000Z\"},{\"id\":\"1cc7fdd1-2a02-4d5d-b852-dd8448a22139\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pistola de calor de Lucía Sánchez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-08-18T18:19:14.000Z\"},{\"id\":\"ee304be1-ee7f-4e28-a449-c128c9907421\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pendrive 32 GB para Lucía Martínez. Observación: Trabajo final.\",\"createdAt\":\"2026-08-18T15:53:17.000Z\"},{\"id\":\"256f751d-ea05-49ee-921e-1c12fda0540a\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Taladro percutor 650 W para Joaquín Chávez. Observación: Práctica de taller.\",\"createdAt\":\"2026-08-18T14:01:15.000Z\"},{\"id\":\"e6745af5-d119-4d66-abb0-26b94985c3e6\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Amoladora angular 115 mm para Emma Chávez. Observación: Práctica de taller.\",\"createdAt\":\"2026-08-18T13:09:16.000Z\"},{\"id\":\"6a091229-a7d2-4e92-9da1-3c917e59c598\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Atornillador inalámbrico 12 V de Joaquín Chávez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-08-17T16:48:12.000Z\"},{\"id\":\"9849dd10-3735-4901-9c9e-93b95a78adef\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Martillo de bola 500 g de Arq. Hernán Calizaya (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-08-17T16:01:11.000Z\"},{\"id\":\"4a5c5550-011e-4ee0-bd9f-05df2ad30f42\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Delantal de cuero para Lautaro Álvarez. Observación: Trabajo final.\",\"createdAt\":\"2026-08-17T15:12:13.000Z\"},{\"id\":\"b1efc753-5836-460c-aa11-ac9f446d6fa8\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Lija al agua grano 220 para Ing. Ricardo Salinas (10 unidad(es)). Detalle: Proyecto de 6° año.\",\"createdAt\":\"2026-08-14T18:59:10.000Z\"},{\"id\":\"43b80d69-fe59-41af-b547-36979a86961e\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pinza amperométrica para Lautaro Cruz.\",\"createdAt\":\"2026-08-14T15:42:09.000Z\"},{\"id\":\"dd6bffca-4884-4ea2-b894-069183a6ffbd\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Taladro percutor 650 W para Mónica Zerpa. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-08-14T15:25:07.000Z\"},{\"id\":\"0748b409-d734-4d57-a9b6-6657c3fd2a94\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Atornillador inalámbrico 12 V para Joaquín Chávez.\",\"createdAt\":\"2026-08-14T14:48:08.000Z\"},{\"id\":\"68b05471-64d3-44cc-a91b-7e65eb9dd570\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Destornillador Phillips PH2 de Lautaro Álvarez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-08-13T20:04:04.000Z\"},{\"id\":\"a91e67bb-17bf-4591-b635-a8ffea3a4979\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Electrodo 2,5 mm (kg) para Arq. Hernán Calizaya (1 unidad(es)). Detalle: Trabajo práctico.\",\"createdAt\":\"2026-08-13T14:58:06.000Z\"},{\"id\":\"baaaba72-a57a-47ba-b03a-59afecdafe0f\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Martillo de bola 500 g para Arq. Hernán Calizaya.\",\"createdAt\":\"2026-08-13T11:21:05.000Z\"},{\"id\":\"eab707c3-2755-45b4-bd55-907d63abae50\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pinza universal 8\\\" de Arq. Hernán Calizaya (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-08-12T16:35:02.000Z\"},{\"id\":\"33dc7431-0cc8-4e14-b24a-2428ac4786d1\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Llave francesa 10\\\" para Joaquín Chávez.\",\"createdAt\":\"2026-08-12T13:26:03.000Z\"},{\"id\":\"b80443f3-e4f0-4c70-b78b-14c064151b1e\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Amoladora angular 115 mm de Prof. Natalia Burgos (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-08-11T20:16:50.000Z\"},{\"id\":\"5a4e928a-ed61-472d-a54c-df70c53f77c4\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Destornillador Phillips PH2 de Arq. Hernán Calizaya (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-08-11T19:22:01.000Z\"},{\"id\":\"72c5c877-4d62-494d-b1cc-17853979d3e6\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Soldadora inverter 200 A de Emma Flores (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-08-10T20:34:41.000Z\"},{\"id\":\"756cd066-e969-4e02-91c3-56e3b14bb27c\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Taladro percutor 650 W de Catalina Torres (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-08-10T20:33:44.000Z\"},{\"id\":\"dcebf3ff-c4ed-4a49-b518-2597cffabcf8\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Atornillador inalámbrico 12 V de Agustina Cruz (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-08-10T19:29:40.000Z\"},{\"id\":\"a5fa7ace-c2f5-4ddf-95c6-dda036992688\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Calibre digital 150 mm de Felipe Suárez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-08-10T19:02:45.000Z\"},{\"id\":\"d5561e25-6bd4-4bf6-be1b-852fd1b624ea\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Cable HDMI 3 m de Joaquín Martínez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-08-10T17:49:43.000Z\"},{\"id\":\"e2908ad5-e231-4b46-9c79-a8d54317c888\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Antiparras de seguridad para Prof. Andrea Choque (4 unidad(es)). Detalle: Trabajo práctico.\",\"createdAt\":\"2026-08-10T17:19:49.000Z\"},{\"id\":\"1642105d-5c7c-47eb-b662-64be350c7e45\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Calibre digital 150 mm de Ing. Gustavo Tolaba (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-08-10T17:07:42.000Z\"},{\"id\":\"f3035fb9-9ffb-4ecf-b2e7-f9a1074448e8\",\"type\":\"purchase_invoice_created\",\"message\":\"Jorge Medina registró la factura A-0001-00007781 de Seguridad Industrial Puna (sin pedido): Protector auditivo (8), Delantal de cuero (4). Total factura $142400.00. Observación: Compra directa (demo).\",\"createdAt\":\"2026-08-10T14:42:31.000Z\"},{\"id\":\"18bdaf82-8c9d-4a6c-a4c7-dfdac0f0784c\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Pistola de calor para Lucía Sánchez. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-08-10T13:47:48.000Z\"},{\"id\":\"653248fd-77f6-48b8-b533-523a5895ab61\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Amoladora angular 115 mm para Felipe Martínez. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-08-10T13:17:47.000Z\"},{\"id\":\"4b1f572b-95e0-4b56-92e2-5a0c9591ca4d\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Destornillador Phillips PH2 para Arq. Hernán Calizaya. Observación: Trabajo final.\",\"createdAt\":\"2026-08-10T13:16:46.000Z\"},{\"id\":\"bb6d7986-51c0-4ac5-aa74-aa6942bfc489\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Mouse USB de Lautaro Álvarez (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-08-07T16:33:36.000Z\"},{\"id\":\"d68da1b7-2109-46dd-b878-22a59625355a\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Calibre digital 150 mm para Felipe Suárez.\",\"createdAt\":\"2026-08-07T15:41:37.000Z\"},{\"id\":\"3cf29c44-7286-4970-bb61-418ac3b438ef\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Pinza universal 8\\\" para Arq. Hernán Calizaya. Observación: Trabajo final.\",\"createdAt\":\"2026-08-07T15:24:38.000Z\"},{\"id\":\"045e572a-1bbe-4fe3-b48b-1f4657daa249\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Electrodo 2,5 mm (kg) para Emma Suárez (1 unidad(es)). Detalle: Proyecto de 6° año.\",\"createdAt\":\"2026-08-07T14:34:39.000Z\"},{\"id\":\"e190cfd5-c56e-4085-aa82-30b5adef4078\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Soldadora inverter 200 A de Prof. Natalia Burgos (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-08-06T16:49:33.000Z\"},{\"id\":\"f757701a-788c-4296-a0ea-de6b936b6d56\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Lija al agua grano 220 para Lucía Sánchez (7 unidad(es)). Detalle: Mantenimiento.\",\"createdAt\":\"2026-08-06T13:49:35.000Z\"},{\"id\":\"74d3e65d-2d37-4cf6-b9a0-4993eba2fe54\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Destornillador Phillips PH2 para Lautaro Álvarez. Observación: Práctica de taller.\",\"createdAt\":\"2026-08-06T11:05:34.000Z\"},{\"id\":\"fcc7774b-1afc-4c74-b383-d060aec058f0\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Protector auditivo para Mónica Zerpa (1 unidad(es)). Detalle: Práctica de soldadura.\",\"createdAt\":\"2026-08-05T17:12:32.000Z\"},{\"id\":\"fdd0b1bb-0382-4789-b796-ff1b500a9251\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Soldador tipo lápiz 40 W de Tomás Chávez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-08-04T20:45:27.000Z\"},{\"id\":\"86cdb788-8772-46f4-ac3a-4d10a21969f0\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Martillo de bola 500 g de Prof. Andrea Choque (2 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-08-04T19:57:28.000Z\"},{\"id\":\"2dd76dbb-ceed-4d9d-907f-7a9f12c3eb66\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Mouse USB para Lautaro Álvarez. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-08-04T15:55:29.000Z\"},{\"id\":\"0694bd32-c337-442b-ba73-6233961edc78\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Cable HDMI 3 m para Joaquín Martínez. Observación: Trabajo final.\",\"createdAt\":\"2026-08-04T15:47:30.000Z\"},{\"id\":\"2a3125d4-6a78-433a-bdbc-47a62bd98bf4\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Taladro percutor 650 W para Catalina Torres. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-08-04T11:57:31.000Z\"},{\"id\":\"79e666ef-8fa7-4275-acbf-b73d8eab3a44\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Proyector multimedia de Mónica Zerpa (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-08-03T16:29:21.000Z\"},{\"id\":\"b3e3d05b-fa73-4816-b3bf-addf3ee0c8de\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Delantal de cuero de Lucía Martínez (2 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-08-03T16:17:22.000Z\"},{\"id\":\"9a570862-f2d7-44fb-a981-be7f7e3b00fa\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Disco de corte 115 mm para Catalina Torres (2 unidad(es)). Detalle: Práctica de soldadura.\",\"createdAt\":\"2026-08-03T16:13:26.000Z\"},{\"id\":\"0d87ede8-3cf3-49ae-8027-f3c045cd7dfe\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Soldadora inverter 200 A para Emma Flores.\",\"createdAt\":\"2026-08-03T15:49:23.000Z\"},{\"id\":\"38d3d1dd-1ad8-4f12-8471-88fb8786f1b8\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Amoladora angular 115 mm para Prof. Natalia Burgos.\",\"createdAt\":\"2026-08-03T13:47:25.000Z\"},{\"id\":\"3bee929d-c570-46c6-863e-ee4791bf2bf0\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Calibre digital 150 mm para Ing. Gustavo Tolaba.\",\"createdAt\":\"2026-08-03T13:27:24.000Z\"},{\"id\":\"40cad50a-eada-4b6a-88f0-b82b3b88e0b8\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pendrive 32 GB de Felipe Morales (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-07-31T17:47:16.000Z\"},{\"id\":\"694cab46-4b8d-4b13-a962-55a83814648e\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Protector auditivo para Joaquín Álvarez (2 unidad(es)).\",\"createdAt\":\"2026-07-31T17:23:20.000Z\"},{\"id\":\"9394b45e-2c3a-4616-950f-85d966e9fc17\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Atornillador inalámbrico 12 V para Agustina Cruz.\",\"createdAt\":\"2026-07-31T13:58:19.000Z\"},{\"id\":\"ae849fab-748d-4129-a68e-d7c5ff20422d\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Proyector multimedia para Mónica Zerpa. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-07-31T11:33:17.000Z\"},{\"id\":\"7250b7bd-ebdc-4b5f-83fd-c04db13b3b0e\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Delantal de cuero para Lucía Martínez. Observación: Práctica de taller.\",\"createdAt\":\"2026-07-31T11:22:18.000Z\"},{\"id\":\"da88e7d1-be86-4add-9022-8b93a902f61a\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Mecha HSS 6 mm para Tomás Flores (3 unidad(es)). Detalle: Mantenimiento.\",\"createdAt\":\"2026-07-30T14:39:14.000Z\"},{\"id\":\"39212765-721d-4a18-8927-87915dd5ef5f\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Martillo de bola 500 g para Prof. Andrea Choque. Observación: Práctica de taller.\",\"createdAt\":\"2026-07-30T13:53:13.000Z\"},{\"id\":\"f84e0e55-bc7c-47ad-a3b8-81df42c83a2d\",\"type\":\"stock_entry_created\",\"message\":\"Jorge Medina registró un ingreso por donacion de Lija al agua grano 220 (2). Donante: Cooperadora escolar. Observación: Donación registrada para la demo.\",\"createdAt\":\"2026-07-30T13:46:15.000Z\"},{\"id\":\"8bf393fc-4e86-4f7f-96c5-5cfe5a06b6f5\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pistola de calor de Abril Quispe (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-07-29T19:39:11.000Z\"},{\"id\":\"b7542a0e-65e4-4fae-9d86-a6f8ece1ca5e\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pendrive 32 GB para Felipe Morales. Observación: Trabajo final.\",\"createdAt\":\"2026-07-29T15:13:12.000Z\"},{\"id\":\"e211e242-a7a9-46ee-888c-6d9fc17d745b\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pistola de calor para Abril Quispe. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-07-28T15:59:10.000Z\"},{\"id\":\"64a51c7c-1b9c-43a7-893f-f7621e9c65a5\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Osciloscopio digital 2 canales de Joaquín Álvarez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-07-27T19:49:06.000Z\"},{\"id\":\"df1a16e0-3d1e-4ae5-a7ad-4186996d87d9\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pistola de calor de Camila Quispe (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-07-27T19:22:02.000Z\"},{\"id\":\"817ba78b-8ca4-4855-9049-f1c4b040fbd1\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Cinta métrica 5 m de Arq. Hernán Calizaya (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-07-27T18:48:05.000Z\"},{\"id\":\"3e0fdc22-ab24-4a1c-94b6-457b6f161795\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Guantes de descarne de Ignacio Herrera (3 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-07-27T18:31:47.000Z\"},{\"id\":\"69c8d0f4-0d73-4504-ac5c-efe55df865f2\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Calibre digital 150 mm de Catalina Torres (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-07-27T17:33:07.000Z\"},{\"id\":\"4d3dea69-e3ea-40b4-9c36-2561208432ae\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Soldador tipo lápiz 40 W de Lucía Sánchez (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-07-27T17:20:48.000Z\"},{\"id\":\"40260186-c8b1-4ee2-b615-bd3299bf7e20\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Guantes de descarne de Joaquín Chávez (2 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-07-27T16:51:04.000Z\"},{\"id\":\"a8d67849-06fd-494e-9d7b-bcbfce92ac94\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Soldadora inverter 200 A de Joaquín Chávez (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-07-27T16:46:50.000Z\"},{\"id\":\"5e5d0ea0-ecdc-40f6-9d8c-fb9ecb38c7e8\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Amoladora angular 115 mm de Ignacio Herrera (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-07-27T16:44:01.000Z\"},{\"id\":\"c31b4d2d-01a3-4a3c-a4db-93369931664d\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Atornillador inalámbrico 12 V de Agustina Cruz (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-07-27T16:12:03.000Z\"},{\"id\":\"08988385-9498-4eb8-9c2c-674337aa7a14\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Fuente de laboratorio 0-30 V de Lucía Álvarez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-07-27T16:07:49.000Z\"},{\"id\":\"6b20d567-8f3e-4d95-b70f-b85b76d73ba4\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Calibre digital 150 mm de Joaquín Martínez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-07-27T16:07:46.000Z\"},{\"id\":\"37ec15fd-af61-4ed4-b9c9-c0d8bb9ad566\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Soldadora inverter 200 A para Prof. Natalia Burgos. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-07-27T15:04:09.000Z\"},{\"id\":\"d15d8650-cad5-40a3-9d4b-adc2668960dd\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Soldador tipo lápiz 40 W para Tomás Chávez. Observación: Práctica de taller.\",\"createdAt\":\"2026-07-27T13:18:08.000Z\"},{\"id\":\"2734bc26-1ebb-4448-a2dc-6fabdb06145c\",\"type\":\"stock_entry_created\",\"message\":\"Jorge Medina registró un ingreso por compra de Disco de corte 115 mm (50), Electrodo 2,5 mm (kg) (10), Guantes de descarne (12). Proveedor: Ferretería El Tornillo SRL.\",\"createdAt\":\"2026-07-24T15:08:13.000Z\"},{\"id\":\"22767118-608f-4874-8f0a-c562d7786b73\",\"type\":\"purchase_request_confirmed\",\"message\":\"Jorge Medina confirmó en forma total el pedido 1BDFB792 con Ferretería El Tornillo SRL: Disco de corte 115 mm (50), Electrodo 2,5 mm (kg) (10), Guantes de descarne (12). Total factura $238050.00. Observación: Confirmación de la demo.\",\"createdAt\":\"2026-07-19T14:53:12.000Z\"},{\"id\":\"f05481c6-9d21-4140-975d-f602d0dcffb3\",\"type\":\"purchase_request_approved\",\"message\":\"Claudia Ibarra aprobó como Contable el pedido 1BDFB792. El pedido quedó aprobado y listo para confirmar con el proveedor.\",\"createdAt\":\"2026-07-17T16:12:11.000Z\"},{\"id\":\"5eee6bd6-d27a-415f-a77b-064e5e2c30ac\",\"type\":\"purchase_request_approved\",\"message\":\"María Fernández aprobó como Rector el pedido 1BDFB792. Falta la firma de Contable.\",\"createdAt\":\"2026-07-17T14:25:10.000Z\"},{\"id\":\"5bfb4615-4489-4b93-811f-856fcfbe0da0\",\"type\":\"purchase_request_approved\",\"message\":\"Ricardo Sosa aprobó como Jefe de taller el pedido 1BDFB792. Falta la firma de Rector.\",\"createdAt\":\"2026-07-17T12:39:09.000Z\"},{\"id\":\"b8395cbf-0ef3-46cd-b92f-da3cf2278e0a\",\"type\":\"purchase_request_created\",\"message\":\"Jorge Medina generó un pedido de compra con 3 material(es). Queda a la espera de las firmas de Jefe de taller, Rector y Contable. Observación: Reposición de insumos de soldadura.\",\"createdAt\":\"2026-07-16T13:08:08.000Z\"},{\"id\":\"aa55aa9c-5d4e-4bb3-8755-62f84cec210c\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Juego de llaves combinadas 6-22 mm de Felipe Morales (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-07-10T19:57:42.000Z\"},{\"id\":\"0fd96a58-0839-4ad9-a6c8-9476e58f495b\",\"type\":\"loan_partial_returned\",\"message\":\"Jorge Medina registró una devolución parcial de Guantes de descarne de Joaquín Chávez (1 unidad(es)). Quedan 2 unidad(es) pendientes.\",\"createdAt\":\"2026-07-10T17:55:43.000Z\"},{\"id\":\"37909c26-d27b-461e-829c-220131d6c380\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Osciloscopio digital 2 canales para Joaquín Álvarez.\",\"createdAt\":\"2026-07-10T15:25:44.000Z\"},{\"id\":\"49b38b1c-adef-4000-add8-f160c2d0178b\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Calibre digital 150 mm para Catalina Torres.\",\"createdAt\":\"2026-07-10T12:39:45.000Z\"},{\"id\":\"0f440019-9e66-4941-864f-04b831d282e6\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Mouse USB de Ing. Ricardo Salinas (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-07-09T17:07:38.000Z\"},{\"id\":\"09bd69a4-6e7f-40f5-b61d-bc45f46a06bd\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Guantes de descarne para Joaquín Chávez.\",\"createdAt\":\"2026-07-09T14:58:40.000Z\"},{\"id\":\"f521fc84-97d0-46e0-bcde-b88c138ff9af\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Cinta métrica 5 m para Arq. Hernán Calizaya.\",\"createdAt\":\"2026-07-09T13:52:41.000Z\"},{\"id\":\"e66207b9-6227-4091-8bce-4a0a9c127552\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Atornillador inalámbrico 12 V para Agustina Cruz.\",\"createdAt\":\"2026-07-09T11:05:39.000Z\"},{\"id\":\"209ffaea-7ba2-4fd1-b535-4123dafa8327\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Amoladora angular 115 mm para Ignacio Herrera.\",\"createdAt\":\"2026-07-08T14:21:36.000Z\"},{\"id\":\"e4afe806-3675-4c0b-991b-95ed1ca85e1a\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pistola de calor para Camila Quispe. Observación: Práctica de taller.\",\"createdAt\":\"2026-07-08T13:47:37.000Z\"},{\"id\":\"24699283-26b6-4e0d-ba84-75efdf147711\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Destornillador Phillips PH2 de Joaquín Chávez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-07-07T18:55:33.000Z\"},{\"id\":\"61e63dce-5617-433d-a23d-7dda6704547a\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Delantal de cuero para Arq. Hernán Calizaya (1 unidad(es)). Detalle: Mantenimiento.\",\"createdAt\":\"2026-07-07T18:14:35.000Z\"},{\"id\":\"dc0a6cdb-f093-4045-9226-d4df8592b2bb\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Llave francesa 10\\\" de Lucía Sánchez (2 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-07-07T18:12:32.000Z\"},{\"id\":\"a4bdbf2e-d936-4f95-9885-f1a282577ba7\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Guantes de descarne de Emma Chávez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-07-07T18:10:34.000Z\"},{\"id\":\"1b1891c8-84b1-498b-8d6f-e49d6c31bfe0\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Arco de sierra de Abril Quispe (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-07-06T19:58:24.000Z\"},{\"id\":\"3813b875-6176-40d4-9172-003dada122d8\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Cable HDMI 3 m de Agustina Quispe (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-07-06T19:36:27.000Z\"},{\"id\":\"ee566bf9-7a9d-4185-b9b2-b1974a1a6cfb\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Delantal de cuero para Thiago Aguirre (4 unidad(es)).\",\"createdAt\":\"2026-07-06T18:26:31.000Z\"},{\"id\":\"5034018c-510e-4ebe-90ff-ac9c8389884c\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Llave francesa 10\\\" de Felipe Martínez (2 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-07-06T17:20:25.000Z\"},{\"id\":\"cf434bcf-f0ad-49a2-ac1c-e11fdb82aa4e\",\"type\":\"loan_partial_returned\",\"message\":\"Jorge Medina registró una devolución parcial de Destornillador Phillips PH2 de Joaquín Chávez (1 unidad(es)). Quedan 1 unidad(es) pendientes. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-07-06T16:58:26.000Z\"},{\"id\":\"2e0b25f8-5cb6-47ec-9243-fd0701955a69\",\"type\":\"loan_partial_returned\",\"message\":\"Jorge Medina registró una devolución parcial de Llave francesa 10\\\" de Lucía Sánchez (1 unidad(es)). Quedan 2 unidad(es) pendientes.\",\"createdAt\":\"2026-07-06T16:38:23.000Z\"},{\"id\":\"d737bf4d-5292-4a87-b86b-e9e307b202d9\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Soldadora inverter 200 A para Joaquín Chávez.\",\"createdAt\":\"2026-07-06T14:33:30.000Z\"},{\"id\":\"2f93e730-bac2-4ce6-a135-0e4ca76cc4d2\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Juego de llaves combinadas 6-22 mm para Felipe Morales. Observación: Práctica de taller.\",\"createdAt\":\"2026-07-06T13:15:29.000Z\"},{\"id\":\"b3e184f3-cc7c-4166-ba25-8564ec2eb65f\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Fuente de laboratorio 0-30 V para Lucía Álvarez. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-07-06T11:08:28.000Z\"},{\"id\":\"59a75575-6066-4adb-b8c2-315ff594450e\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Guantes de descarne para Emma Chávez. Observación: Práctica de taller.\",\"createdAt\":\"2026-07-03T15:27:20.000Z\"},{\"id\":\"5689aa85-9018-49af-a8cb-081da4d4bc8d\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Mouse USB para Ing. Ricardo Salinas. Observación: Trabajo final.\",\"createdAt\":\"2026-07-03T15:21:21.000Z\"},{\"id\":\"280df7dd-dcf7-4e75-bc18-f46dbd416c4e\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Cable HDMI 3 m para Agustina Quispe.\",\"createdAt\":\"2026-07-03T12:39:22.000Z\"},{\"id\":\"95133787-8750-4fbc-9ae0-3baa51a5f283\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Proyector multimedia de Emma Chávez (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-07-02T19:39:17.000Z\"},{\"id\":\"cec3c284-8b8a-4fd4-a392-7017e2c0e152\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Lija al agua grano 220 para Tomás Chávez (9 unidad(es)). Detalle: Práctica de soldadura.\",\"createdAt\":\"2026-07-02T16:01:19.000Z\"},{\"id\":\"9ce1315b-92eb-452b-a599-d2277f985c9d\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Soldador tipo lápiz 40 W para Lucía Sánchez.\",\"createdAt\":\"2026-07-02T14:29:18.000Z\"},{\"id\":\"2ba8e3fd-8d05-4d00-a711-35f3a84fad95\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Delantal de cuero de Lucía Sánchez (3 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-07-01T18:59:15.000Z\"},{\"id\":\"8089312f-3c4a-463f-bf53-c4c38bad4f54\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Guantes de descarne para Ignacio Herrera. Observación: Práctica de taller.\",\"createdAt\":\"2026-07-01T15:33:16.000Z\"},{\"id\":\"46e633f5-4155-49ce-8cb2-4d00b63837bb\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Antiparras de seguridad de Ignacio Herrera (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-30T19:24:09.000Z\"},{\"id\":\"5305111c-4ff4-4679-aceb-bd0621444b43\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Protoboard 830 puntos de Lautaro Álvarez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-06-30T19:09:11.000Z\"},{\"id\":\"2c03f489-7133-42ab-b327-f78084137edc\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Fuente de laboratorio 0-30 V de Lautaro Gutiérrez (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-06-30T18:47:10.000Z\"},{\"id\":\"830800be-1b56-48bf-a1d4-ef26ead083f5\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Destornillador Phillips PH2 para Joaquín Chávez.\",\"createdAt\":\"2026-06-30T14:53:14.000Z\"},{\"id\":\"edb936cb-4f0f-4c73-acef-9ef82311165f\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Llave francesa 10\\\" para Felipe Martínez. Observación: Trabajo final.\",\"createdAt\":\"2026-06-30T14:09:12.000Z\"},{\"id\":\"82bde37f-72c1-4012-aac1-a0158524a450\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Calibre digital 150 mm para Joaquín Martínez.\",\"createdAt\":\"2026-06-30T13:06:13.000Z\"},{\"id\":\"7bdc3843-ccda-46a0-83be-442df90d48e9\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Fuente de laboratorio 0-30 V de Mónica Zerpa (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-06-29T19:37:04.000Z\"},{\"id\":\"1edbb63e-6ec6-4941-83eb-abbc93d2ce2d\",\"type\":\"loan_partial_returned\",\"message\":\"Jorge Medina registró una devolución parcial de Antiparras de seguridad de Ignacio Herrera (1 unidad(es)). Quedan 1 unidad(es) pendientes. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-06-29T19:30:02.000Z\"},{\"id\":\"6680a35a-1326-4957-bb23-2dd7afd828d9\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Delantal de cuero para Santiago Herrera (1 unidad(es)). Detalle: Trabajo práctico.\",\"createdAt\":\"2026-06-29T19:25:08.000Z\"},{\"id\":\"80c40f20-cffd-4959-af0b-d7bcba5ba23a\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Atornillador inalámbrico 12 V de Lautaro Cruz (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-29T19:24:03.000Z\"},{\"id\":\"dd058946-eb4d-4048-acf3-75760298bc48\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Proyector multimedia para Emma Chávez. Observación: Trabajo final.\",\"createdAt\":\"2026-06-29T14:43:06.000Z\"},{\"id\":\"d0668bfd-0a59-450e-8108-ebefb503b92b\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Llave francesa 10\\\" para Lucía Sánchez. Observación: Práctica de taller.\",\"createdAt\":\"2026-06-29T13:41:05.000Z\"},{\"id\":\"10a3b1d6-5214-4028-8c5e-3f95646c6ae3\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Arco de sierra para Abril Quispe. Observación: Práctica de taller.\",\"createdAt\":\"2026-06-29T12:21:07.000Z\"},{\"id\":\"21ed81ef-aa08-435c-8d14-accdf6fcab3d\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Delantal de cuero para Lucía Sánchez.\",\"createdAt\":\"2026-06-26T13:49:01.000Z\"},{\"id\":\"8ee1c950-a927-4a40-937c-03e156191470\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pistola de calor de Arq. Hernán Calizaya (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-06-25T16:57:47.000Z\"},{\"id\":\"450a413e-9fb9-4d02-9b6b-02945bdfcf5c\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Electrodo 2,5 mm (kg) para Ing. Gustavo Tolaba (1 unidad(es)). Detalle: Práctica de soldadura.\",\"createdAt\":\"2026-06-25T16:23:50.000Z\"},{\"id\":\"553bd8b4-45c5-4edb-b68c-994f72761270\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Delantal de cuero de Abril Quispe (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-06-25T16:16:49.000Z\"},{\"id\":\"bc47ce31-cff5-4500-af88-5bd852c4937a\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pistola de calor de Emma Flores (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-06-25T16:02:48.000Z\"},{\"id\":\"b7f8a9db-f4b1-40da-8dec-fc01231ddc1f\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Nivel de burbuja 60 cm de Catalina Torres (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-06-24T19:12:42.000Z\"},{\"id\":\"e3db11c9-f549-4b40-b686-5e170e69fd38\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pinza universal 8\\\" de Emma Suárez (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-06-24T18:49:43.000Z\"},{\"id\":\"7470d8fa-c6ab-4c59-ae19-696a392d8ecf\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Guantes de descarne de Joaquín Martínez (3 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-24T16:36:44.000Z\"},{\"id\":\"69cd11db-f008-4e59-ad6c-440e02421fb5\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Delantal de cuero para Abril Quispe. Observación: Práctica de taller.\",\"createdAt\":\"2026-06-24T15:39:45.000Z\"},{\"id\":\"730f1b77-a3a5-4094-bfa6-3ef44fb2c97f\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Antiparras de seguridad para Facundo López (4 unidad(es)). Detalle: Mantenimiento.\",\"createdAt\":\"2026-06-24T15:35:46.000Z\"},{\"id\":\"ec4de24d-2c9b-40b3-831b-d5ea094e4986\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Protector auditivo de Felipe Morales (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-23T19:03:38.000Z\"},{\"id\":\"4f36469f-bbe5-4e5b-9e65-17fd75866a29\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Protoboard 830 puntos para Lautaro Álvarez. Observación: Práctica de taller.\",\"createdAt\":\"2026-06-23T13:04:41.000Z\"},{\"id\":\"7577e62a-b1b6-4679-869a-a787c329f5af\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Pistola de calor para Emma Flores.\",\"createdAt\":\"2026-06-23T12:41:39.000Z\"},{\"id\":\"fb5e8c8b-efd0-4666-a869-e5d255ec9d02\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Guantes de descarne para Joaquín Martínez.\",\"createdAt\":\"2026-06-23T11:47:40.000Z\"},{\"id\":\"eb36df95-7f08-49ac-8f7e-1613c1ce3df5\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Multímetro digital de Prof. Natalia Burgos (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-06-22T18:13:31.000Z\"},{\"id\":\"4f30eb4e-17a9-42dd-b6e2-bf940b0c8c6f\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Amoladora angular 115 mm de Agustina Quispe (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-06-22T16:36:32.000Z\"},{\"id\":\"e638afcc-403e-4e99-a082-d8b6f1f624f7\",\"type\":\"loan_partial_returned\",\"message\":\"Jorge Medina registró una devolución parcial de Pinza universal 8\\\" de Emma Suárez (1 unidad(es)). Quedan 1 unidad(es) pendientes. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-06-22T16:30:34.000Z\"},{\"id\":\"dfebd5c4-80d4-48ca-9c07-26c040d0bc68\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Destornillador Phillips PH2 de Tomás Flores (3 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-22T16:06:33.000Z\"},{\"id\":\"9ed61563-20cb-4953-a84c-0da464e1ea46\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Cinta aisladora para Martina Cruz (4 unidad(es)).\",\"createdAt\":\"2026-06-22T14:48:37.000Z\"},{\"id\":\"12254f92-e971-45ae-aa9b-8f11a5c90bb3\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Fuente de laboratorio 0-30 V para Lautaro Gutiérrez.\",\"createdAt\":\"2026-06-22T14:30:35.000Z\"},{\"id\":\"af6631a1-9b0b-4e24-bfc1-59841c8de1bf\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Fuente de laboratorio 0-30 V para Mónica Zerpa. Observación: Práctica de taller.\",\"createdAt\":\"2026-06-22T11:08:36.000Z\"},{\"id\":\"f9602cdb-90a5-48d7-95d0-9ca6cf77534d\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Nivel de burbuja 60 cm de Emma Chávez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-06-19T16:02:27.000Z\"},{\"id\":\"fd51cfe1-3197-4fbd-aec0-c6e897eaf6fb\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Protector auditivo para Catalina Torres (2 unidad(es)). Detalle: Proyecto de 6° año.\",\"createdAt\":\"2026-06-19T14:36:30.000Z\"},{\"id\":\"9df97481-59b4-45fd-90b0-f652830853b6\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Atornillador inalámbrico 12 V para Lautaro Cruz. Observación: Práctica de taller.\",\"createdAt\":\"2026-06-19T12:19:29.000Z\"},{\"id\":\"dd4a7d0e-24c7-4c18-ba98-c44c3f074675\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pinza universal 8\\\" para Emma Suárez.\",\"createdAt\":\"2026-06-19T11:56:28.000Z\"},{\"id\":\"d0df4791-2687-4fb0-88cf-ae2c181efce9\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pinza amperométrica de Agustina Quispe (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-18T18:26:22.000Z\"},{\"id\":\"82b19f6c-40e8-47dd-a74b-0e05a7cda86f\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Careta de soldar fotosensible para Raúl Villca (2 unidad(es)).\",\"createdAt\":\"2026-06-18T15:30:26.000Z\"},{\"id\":\"2bc1078b-d61e-414a-9be1-39cd0849733a\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Antiparras de seguridad para Ignacio Herrera. Observación: Trabajo final.\",\"createdAt\":\"2026-06-18T14:26:23.000Z\"},{\"id\":\"6e248589-4fb5-4722-beea-823cf781ecc1\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Nivel de burbuja 60 cm para Catalina Torres.\",\"createdAt\":\"2026-06-18T12:30:25.000Z\"},{\"id\":\"151b63a9-9731-4323-b123-21c053e1f05d\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Protector auditivo para Felipe Morales.\",\"createdAt\":\"2026-06-18T12:11:24.000Z\"},{\"id\":\"dfa623e7-84d0-4ffd-adda-805d3516274d\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Pinza universal 8\\\" de Agustina Quispe (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-17T19:57:21.000Z\"},{\"id\":\"c8a3c27a-a734-4757-a03c-8ed05e2b9023\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Delantal de cuero de Franco Castro (2 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-06-16T19:58:17.000Z\"},{\"id\":\"d17865e5-1a9e-4471-8d2f-12de414c651a\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Osciloscopio digital 2 canales de Prof. Andrea Choque (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-06-16T19:42:18.000Z\"},{\"id\":\"343359e0-9b86-42d4-bc69-33d29fc10bb1\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Destornillador Phillips PH2 para Tomás Flores.\",\"createdAt\":\"2026-06-16T13:31:19.000Z\"},{\"id\":\"9093f5b1-1b18-4377-8670-0346b406f90f\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Guantes de descarne para Lautaro Gutiérrez (1 unidad(es)). Detalle: Trabajo práctico.\",\"createdAt\":\"2026-06-16T12:49:20.000Z\"},{\"id\":\"020d0fd3-5d41-4269-83cd-f292c5a0b077\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Multímetro digital de Santiago Herrera (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-15T18:07:13.000Z\"},{\"id\":\"6aeefd85-6ca9-4e1f-becb-acc295c644eb\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Notebook 14\\\" de Emma Suárez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-15T17:12:11.000Z\"},{\"id\":\"2040e34e-1c93-416a-9eaa-e23aa52b8a7c\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Martillo de bola 500 g de Franco Castro (2 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-15T16:40:10.000Z\"},{\"id\":\"cd5b0232-696f-4a26-9662-79515bb5cf39\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Arco de sierra de Felipe Martínez (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-06-15T16:01:12.000Z\"},{\"id\":\"4c4248e2-1965-4996-9ced-4492b28ac0cc\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Amoladora angular 115 mm para Agustina Quispe.\",\"createdAt\":\"2026-06-15T15:06:15.000Z\"},{\"id\":\"7a4a79e7-151e-4e56-9b8f-bd2ea5d0ee18\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pistola de calor para Arq. Hernán Calizaya.\",\"createdAt\":\"2026-06-15T14:29:16.000Z\"},{\"id\":\"3720023f-0308-4cfb-b964-2b791cb74f6f\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Osciloscopio digital 2 canales para Prof. Andrea Choque.\",\"createdAt\":\"2026-06-15T13:19:14.000Z\"},{\"id\":\"371af0b2-b2f1-4bd0-828b-2b1ba35a9bcf\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Protector auditivo de Lautaro Cruz (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-06-12T19:56:07.000Z\"},{\"id\":\"064c7333-cbc4-49ef-afe0-83b16e396ec6\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Multímetro digital de Lucía Álvarez (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-12T18:59:08.000Z\"},{\"id\":\"8e918441-cca7-4147-a257-8379649ad391\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pinza amperométrica para Agustina Quispe. Observación: Práctica de taller.\",\"createdAt\":\"2026-06-12T14:57:09.000Z\"},{\"id\":\"ed651f83-4684-4ab5-9661-bac48b445094\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Delantal de cuero para Franco Castro. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-06-11T15:33:05.000Z\"},{\"id\":\"f3f2abfb-18e7-4796-bf5a-f8c838012d8f\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Multímetro digital para Santiago Herrera.\",\"createdAt\":\"2026-06-11T15:31:03.000Z\"},{\"id\":\"5e5fd7df-92b4-4b29-bc41-bb9c5a789dc9\",\"type\":\"stock_entry_created\",\"message\":\"Jorge Medina registró un ingreso por donacion de Soldadora inverter 200 A (5). Donante: Empresa local (ficticia). Observación: Donación registrada para la demo.\",\"createdAt\":\"2026-06-11T13:51:06.000Z\"},{\"id\":\"57ba3fe4-531e-4d51-af2b-5125900f4fba\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Nivel de burbuja 60 cm para Emma Chávez.\",\"createdAt\":\"2026-06-11T12:50:04.000Z\"},{\"id\":\"c10a0c3d-4f24-4949-8014-136cca767e31\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Notebook 14\\\" para Emma Suárez. Observación: Trabajo final.\",\"createdAt\":\"2026-06-10T14:58:50.000Z\"},{\"id\":\"d7df8c6e-4b9c-464b-a4a5-8d162e8869ae\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Multímetro digital para Prof. Natalia Burgos. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-06-10T11:55:01.000Z\"},{\"id\":\"7dc57df3-a2e2-4bc8-ae43-c4cbddf6fca7\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Arco de sierra para Felipe Martínez. Observación: Trabajo final.\",\"createdAt\":\"2026-06-10T11:06:02.000Z\"},{\"id\":\"7ad2589f-b362-41ab-9de2-060bab58fac7\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Multímetro digital para Lucía Álvarez.\",\"createdAt\":\"2026-06-09T14:38:48.000Z\"},{\"id\":\"0803cf1c-7536-44a6-8518-edfd5790e552\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Pinza universal 8\\\" para Agustina Quispe.\",\"createdAt\":\"2026-06-09T11:15:49.000Z\"},{\"id\":\"e2fcec12-19f5-4016-bc85-31454362eb2f\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Mouse USB de Joaquín Chávez (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-06-08T20:36:45.000Z\"},{\"id\":\"db56a6d2-974b-4f25-ba20-b7ed646ce7c9\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Calibre digital 150 mm de Thiago Aguirre (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-08T19:13:44.000Z\"},{\"id\":\"31c24fdd-42f5-4a8e-8d01-165ba2acc076\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Protector auditivo para Prof. Silvina Rueda (1 unidad(es)). Detalle: Mantenimiento.\",\"createdAt\":\"2026-06-08T17:33:47.000Z\"},{\"id\":\"b29b0883-c8d0-4d83-bf3b-236f73b6ff50\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Martillo de bola 500 g para Franco Castro. Observación: Trabajo final.\",\"createdAt\":\"2026-06-08T14:45:46.000Z\"},{\"id\":\"21275c47-7573-4b2a-88cb-138dab38a0d6\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Llave francesa 10\\\" de Lucía Sánchez (2 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-06-05T17:51:41.000Z\"},{\"id\":\"b207bd99-38ef-4269-80bd-b933874eda94\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Arco de sierra de Lautaro Cruz (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-05T17:26:40.000Z\"},{\"id\":\"570c2032-6370-4895-81ac-61c3b115c8c4\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Osciloscopio digital 2 canales de Lucía Álvarez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-06-05T16:38:43.000Z\"},{\"id\":\"c7f97abf-d847-4a8b-b310-58004bc86425\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Protector auditivo de Prof. Silvina Rueda (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-06-05T16:04:42.000Z\"},{\"id\":\"618d8afa-8343-42fa-a301-8479a39ac0c7\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Proyector multimedia de Facundo López (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-04T17:58:38.000Z\"},{\"id\":\"820b3677-af64-4e8e-9ddd-3d8efba70429\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Notebook 14\\\" de Emma Flores (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-06-04T16:35:36.000Z\"},{\"id\":\"4be20cb6-6c05-4a6e-b7a7-a946558f965c\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Calibre digital 150 mm de Tomás Chávez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-06-04T16:10:37.000Z\"},{\"id\":\"9775d97c-7224-462c-a009-62ac382db44e\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Disco de corte 115 mm para Arq. Hernán Calizaya (3 unidad(es)). Detalle: Proyecto de 6° año.\",\"createdAt\":\"2026-06-04T12:16:39.000Z\"},{\"id\":\"5864d2bd-4949-4cfe-aa96-ee103e5384f2\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Juego de llaves combinadas 6-22 mm de Prof. Silvina Rueda (2 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-06-03T20:58:32.000Z\"},{\"id\":\"8658c679-ddbc-4496-95aa-7993375ea7d4\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Protector auditivo para Lautaro Cruz. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-06-03T14:33:35.000Z\"},{\"id\":\"c8bb75b5-a81c-4217-af50-714f7fe0b8ab\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Mouse USB para Joaquín Chávez. Observación: Práctica de taller.\",\"createdAt\":\"2026-06-03T12:50:34.000Z\"},{\"id\":\"a921d655-0a96-4847-b0ac-ba413a9596ba\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Proyector multimedia para Facundo López.\",\"createdAt\":\"2026-06-03T12:28:33.000Z\"},{\"id\":\"598478f7-20a2-48ce-958a-820e6a5bb019\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Calibre digital 150 mm para Tomás Chávez. Observación: Práctica de taller.\",\"createdAt\":\"2026-06-02T15:06:30.000Z\"},{\"id\":\"a34f8f02-f675-42ae-b7d8-86a59a40cc8b\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Juego de llaves combinadas 6-22 mm para Prof. Silvina Rueda. Observación: Práctica de taller.\",\"createdAt\":\"2026-06-02T12:56:31.000Z\"},{\"id\":\"d5e77c17-1d96-4267-a196-0755ee22649c\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Kit Arduino Uno de Abril Quispe (1 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-01T19:24:25.000Z\"},{\"id\":\"740e1c74-f5be-40e9-9fcc-68a78ee8cb04\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Taladro percutor 650 W de Raúl Villca (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-06-01T19:06:28.000Z\"},{\"id\":\"a60c492f-c34e-4c74-af2f-bc79478b1e3b\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Delantal de cuero de Raúl Villca (3 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-01T18:45:26.000Z\"},{\"id\":\"7e8f20ba-9a87-447a-86cf-0fa12da7faba\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Juego de llaves combinadas 6-22 mm de Raúl Villca (2 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-06-01T18:26:24.000Z\"},{\"id\":\"54eed272-70af-4aff-9537-a512274818e0\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Proyector multimedia de Lucía Martínez (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-06-01T18:03:27.000Z\"},{\"id\":\"72cfb067-6478-47c0-9d93-42362aa7b4b5\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Osciloscopio digital 2 canales para Lucía Álvarez.\",\"createdAt\":\"2026-06-01T12:08:29.000Z\"},{\"id\":\"93d34989-5781-4e43-9c22-8e8fa8687dd0\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Cinta métrica 5 m de Emma Suárez (1 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-05-29T19:14:20.000Z\"},{\"id\":\"089c5b4b-5ded-4a07-9f9d-75c48ea5189d\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Proyector multimedia para Lucía Martínez.\",\"createdAt\":\"2026-05-29T13:13:21.000Z\"},{\"id\":\"95e0704c-c466-443d-a878-93d3a36c4440\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Calibre digital 150 mm para Thiago Aguirre. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-05-29T12:06:22.000Z\"},{\"id\":\"465f4657-e0ec-4b55-98ad-04b5dd16aeb2\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Taladro percutor 650 W para Raúl Villca. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-05-29T12:05:23.000Z\"},{\"id\":\"c2ec45cc-da98-4a99-a911-27aef60f85c5\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Llave francesa 10\\\" para Lucía Sánchez.\",\"createdAt\":\"2026-05-28T15:28:17.000Z\"},{\"id\":\"1151fa06-6b17-45b0-80bc-e6a83e450942\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Delantal de cuero para Raúl Villca. Observación: Trabajo final.\",\"createdAt\":\"2026-05-28T14:00:18.000Z\"},{\"id\":\"620c77df-3c3b-4a26-a26a-d9c242458ec3\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Protector auditivo para Prof. Silvina Rueda. Observación: Práctica de taller.\",\"createdAt\":\"2026-05-28T12:47:19.000Z\"},{\"id\":\"e018f47b-69fc-4d68-ae8d-d5c06cd97c2c\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Protector auditivo de Joaquín Álvarez (3 unidad(es)). Préstamo cerrado. Observación: Devuelto en buen estado.\",\"createdAt\":\"2026-05-27T18:28:14.000Z\"},{\"id\":\"1d022c3c-9c84-4ddb-aafd-2fa49b88c8b6\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Notebook 14\\\" para Emma Flores. Observación: Clase de laboratorio.\",\"createdAt\":\"2026-05-27T13:18:15.000Z\"},{\"id\":\"e3da1796-0975-47d2-8329-e84e7849c140\",\"type\":\"stock_entry_created\",\"message\":\"Jorge Medina registró un ingreso por donacion de Soldadora inverter 200 A (4). Donante: Cooperadora escolar. Observación: Donación registrada para la demo.\",\"createdAt\":\"2026-05-27T13:13:16.000Z\"},{\"id\":\"28bda2e9-5e8e-405e-88ac-4069f2706482\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Taladro percutor 650 W de Raúl Villca (1 unidad(es)). Préstamo cerrado. Observación: Se revisó y está completo.\",\"createdAt\":\"2026-05-26T19:52:10.000Z\"},{\"id\":\"00325ccb-8936-4bcc-8c9c-e1bc4d61b798\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Guantes de descarne para Prof. Natalia Burgos (3 unidad(es)). Detalle: Trabajo práctico.\",\"createdAt\":\"2026-05-26T17:20:13.000Z\"},{\"id\":\"3d57d762-7168-4c1d-891c-e60cb125407f\",\"type\":\"loan_returned\",\"message\":\"Jorge Medina completó la devolución de Destornillador plano 6 mm de Franco Castro (2 unidad(es)). Préstamo cerrado.\",\"createdAt\":\"2026-05-26T16:32:09.000Z\"},{\"id\":\"90d4909e-68f9-4b69-8f7e-eb207bc03901\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Kit Arduino Uno para Abril Quispe.\",\"createdAt\":\"2026-05-26T15:12:11.000Z\"},{\"id\":\"34ef0b5f-9011-4de5-ae24-2804257f132f\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Arco de sierra para Lautaro Cruz. Observación: Trabajo final.\",\"createdAt\":\"2026-05-26T11:27:12.000Z\"},{\"id\":\"a7ac049f-fd20-43ec-938b-a3e8d5052772\",\"type\":\"consumption_created\",\"message\":\"Jorge Medina registró un consumo de Careta de soldar fotosensible para Agustina Quispe (2 unidad(es)). Detalle: Trabajo práctico.\",\"createdAt\":\"2026-05-25T18:27:07.000Z\"},{\"id\":\"9212291e-1489-46af-a120-feba0a696ca1\",\"type\":\"loan_partial_returned\",\"message\":\"Jorge Medina registró una devolución parcial de Destornillador plano 6 mm de Franco Castro (1 unidad(es)). Quedan 2 unidad(es) pendientes.\",\"createdAt\":\"2026-05-25T17:01:04.000Z\"},{\"id\":\"e54701e5-1493-4eda-b422-26f19721e19d\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Juego de llaves combinadas 6-22 mm para Raúl Villca.\",\"createdAt\":\"2026-05-25T14:20:05.000Z\"},{\"id\":\"7599f17c-f28c-425d-a254-45a90e6838bf\",\"type\":\"stock_entry_created\",\"message\":\"Jorge Medina registró un ingreso por donacion de Proyector multimedia (2). Donante: Cooperadora escolar. Observación: Donación registrada para la demo.\",\"createdAt\":\"2026-05-25T13:48:08.000Z\"},{\"id\":\"c0dbdf28-1dcd-4e4e-b52c-2879ed43540c\",\"type\":\"loan_created\",\"message\":\"Jorge Medina registró un préstamo de Taladro percutor 650 W para Raúl Villca.\",\"createdAt\":\"2026-05-25T12:11:06.000Z\"},{\"id\":\"853432f6-5dec-4d3b-be9d-3e9b3829c371\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Destornillador plano 6 mm para Franco Castro.\",\"createdAt\":\"2026-05-22T15:24:02.000Z\"},{\"id\":\"054c4424-a630-4f07-813d-349c3ba5c259\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Cinta métrica 5 m para Emma Suárez. Observación: Trabajo final.\",\"createdAt\":\"2026-05-22T12:44:03.000Z\"},{\"id\":\"9371bf84-2a1e-4d4e-a121-3bb8f1893fae\",\"type\":\"loan_created\",\"message\":\"Lucía Romero registró un préstamo de Protector auditivo para Joaquín Álvarez.\",\"createdAt\":\"2026-05-22T11:21:01.000Z\"},{\"id\":\"bfd95fdc-d1e2-40e6-8c74-0fea2d7ae951\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Proyector multimedia (IN-002) en Sala de informática.\",\"createdAt\":\"2026-05-18T20:42:47.000Z\"},{\"id\":\"65884e0d-4064-41bf-83a4-b6f1429cec61\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Mouse USB (IN-003) en Sala de informática.\",\"createdAt\":\"2026-05-18T20:04:48.000Z\"},{\"id\":\"5ecd072e-2fec-4add-b8b1-6894ca2309ed\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Amoladora angular 115 mm (HE-002) en Estantería A2.\",\"createdAt\":\"2026-05-18T20:00:21.000Z\"},{\"id\":\"705cc4a4-62dc-46ec-b51c-17116fb6edef\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Mecha HSS 6 mm (CO-006) en Depósito de consumibles.\",\"createdAt\":\"2026-05-18T19:33:40.000Z\"},{\"id\":\"b3bca3cc-1ada-4e55-8dbc-73307fe02ce6\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Soldadora inverter 200 A (HE-004) en Estantería A2.\",\"createdAt\":\"2026-05-18T19:08:23.000Z\"},{\"id\":\"45ded93b-59b4-4c4e-890e-945be9c6d070\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Osciloscopio digital 2 canales (EL-005) en Laboratorio de electrónica.\",\"createdAt\":\"2026-05-18T19:02:45.000Z\"},{\"id\":\"5710a0e7-8e17-4491-93e2-a109891e0149\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Multímetro digital (IM-001) en Laboratorio de electrónica.\",\"createdAt\":\"2026-05-18T18:56:25.000Z\"},{\"id\":\"72a6fa49-6a33-48f2-9227-01122e17442c\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Lija al agua grano 220 (CO-005) en Depósito de consumibles.\",\"createdAt\":\"2026-05-18T18:38:39.000Z\"},{\"id\":\"7c3bdc87-b6a5-400d-ab37-e17ae37b35c4\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Nivel de burbuja 60 cm (IM-005) en Estantería A1.\",\"createdAt\":\"2026-05-18T18:31:29.000Z\"},{\"id\":\"ee238753-63dd-4039-a3ea-ee0771c02295\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Taladro percutor 650 W (HE-001) en Estantería A2.\",\"createdAt\":\"2026-05-18T18:09:20.000Z\"},{\"id\":\"691cbad9-e449-46a1-a34c-71f94cea767a\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Soldador tipo lápiz 40 W (EL-003) en Laboratorio de electrónica.\",\"createdAt\":\"2026-05-18T18:04:43.000Z\"},{\"id\":\"789c6ef0-8361-4fb1-8363-331c49bd1002\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Juego de llaves combinadas 6-22 mm (HM-001) en Estantería A1.\",\"createdAt\":\"2026-05-18T18:04:13.000Z\"},{\"id\":\"4f36cf84-8189-4de0-94a3-11211aeadbac\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Pendrive 32 GB (IN-004) en Sala de informática.\",\"createdAt\":\"2026-05-18T17:59:49.000Z\"},{\"id\":\"03bd2387-484e-44d4-8248-2463f3772509\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Cinta aisladora (CO-003) en Depósito de consumibles.\",\"createdAt\":\"2026-05-18T17:56:37.000Z\"},{\"id\":\"a17cded9-96c5-41c7-b229-5fdfce58867e\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Electrodo 2,5 mm (kg) (CO-002) en Depósito de consumibles.\",\"createdAt\":\"2026-05-18T17:40:36.000Z\"},{\"id\":\"127c40ab-1d22-49bb-8663-f00e141e6f0f\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Fuente de laboratorio 0-30 V (EL-002) en Laboratorio de electrónica.\",\"createdAt\":\"2026-05-18T17:23:42.000Z\"},{\"id\":\"bc2200ae-9c5b-4695-96a6-b603104adf28\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Pinza amperométrica (IM-003) en Laboratorio de electrónica.\",\"createdAt\":\"2026-05-18T17:21:27.000Z\"},{\"id\":\"fbe78568-36bd-47ea-b1da-60f890fd8bef\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Pistola de calor (HE-005) en Estantería A2.\",\"createdAt\":\"2026-05-18T17:21:24.000Z\"},{\"id\":\"5d51d2e0-d29f-4d8e-8cb3-f40ff0f1e7d3\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Calibre digital 150 mm (IM-002) en Estantería A1.\",\"createdAt\":\"2026-05-18T17:11:26.000Z\"},{\"id\":\"87986e51-1ddf-49fe-9814-bba71776031a\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Protoboard 830 puntos (EL-001) en Laboratorio de electrónica.\",\"createdAt\":\"2026-05-18T17:05:41.000Z\"},{\"id\":\"9d87a53d-488d-47d3-bf3e-598ceed2202c\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Antiparras de seguridad (SG-001) en Armario de seguridad.\",\"createdAt\":\"2026-05-18T16:45:30.000Z\"},{\"id\":\"0d5460a1-1b1f-4169-b5df-880112e4a3d0\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Atornillador inalámbrico 12 V (HE-003) en Estantería A2.\",\"createdAt\":\"2026-05-18T16:29:22.000Z\"},{\"id\":\"610412e1-688d-4b63-9fd9-5852ecf455dd\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Protector auditivo (SG-003) en Armario de seguridad.\",\"createdAt\":\"2026-05-18T16:17:32.000Z\"},{\"id\":\"31430901-eb38-44e8-b650-02f5d048f0bf\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Delantal de cuero (SG-005) en Armario de seguridad.\",\"createdAt\":\"2026-05-18T16:07:34.000Z\"},{\"id\":\"5a6b5ec7-cff5-4372-8e3a-62c7d392fa4e\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Notebook 14\\\" (IN-001) en Sala de informática.\",\"createdAt\":\"2026-05-18T15:56:46.000Z\"},{\"id\":\"b602e831-6102-4c54-a4c7-e1cf64575218\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Estaño 60/40 (rollo 250 g) (CO-004) en Depósito de consumibles.\",\"createdAt\":\"2026-05-18T15:32:38.000Z\"},{\"id\":\"319d3a87-2715-4ed7-856d-dcfb9e295eb8\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Destornillador plano 6 mm (HM-002) en Estantería A1.\",\"createdAt\":\"2026-05-18T15:17:14.000Z\"},{\"id\":\"7544620e-485b-4218-8c65-dfc283bfd05c\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Careta de soldar fotosensible (SG-004) en Armario de seguridad.\",\"createdAt\":\"2026-05-18T15:00:33.000Z\"},{\"id\":\"c96f856f-acd7-4f9f-bd0a-04ea4afc8edd\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Guantes de descarne (SG-002) en Armario de seguridad.\",\"createdAt\":\"2026-05-18T14:50:31.000Z\"},{\"id\":\"cdf08f49-5d2b-4554-b264-2afb4305b775\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Cinta métrica 5 m (IM-004) en Estantería A1.\",\"createdAt\":\"2026-05-18T14:43:28.000Z\"},{\"id\":\"aff62bc6-b111-445f-a428-d2abf56fbcaf\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Pinza universal 8\\\" (HM-005) en Estantería A1.\",\"createdAt\":\"2026-05-18T14:40:17.000Z\"},{\"id\":\"7ada2c5c-7f6d-4ff9-b88a-9f57a259f289\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Kit Arduino Uno (EL-004) en Laboratorio de electrónica.\",\"createdAt\":\"2026-05-18T14:01:44.000Z\"},{\"id\":\"00e5f256-e95d-469c-baca-286af7e49351\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Llave francesa 10\\\" (HM-006) en Estantería A1.\",\"createdAt\":\"2026-05-18T13:37:18.000Z\"},{\"id\":\"95e731e8-d2c5-4e67-9d8a-3f3bdc6a4d07\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Cable HDMI 3 m (IN-005) en Sala de informática.\",\"createdAt\":\"2026-05-18T12:25:50.000Z\"},{\"id\":\"2e7b4224-ec11-4708-a5a5-277c7f163d16\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Disco de corte 115 mm (CO-001) en Depósito de consumibles.\",\"createdAt\":\"2026-05-18T12:13:35.000Z\"},{\"id\":\"d674e83f-53a1-44c4-86d3-ff8b11d5d44e\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Martillo de bola 500 g (HM-004) en Estantería A1.\",\"createdAt\":\"2026-05-18T12:08:16.000Z\"},{\"id\":\"87692add-50e8-4e2a-81b8-006a9b0bd964\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Destornillador Phillips PH2 (HM-003) en Estantería A1.\",\"createdAt\":\"2026-05-18T11:53:15.000Z\"},{\"id\":\"dfe2597a-ed3e-431c-a290-5468e6506cf2\",\"type\":\"item_created\",\"message\":\"Jorge Medina cargó Arco de sierra (HM-007) en Estantería A1.\",\"createdAt\":\"2026-05-18T11:00:19.000Z\"},{\"id\":\"48c3752a-44a4-42d6-93ac-c306eb123097\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Felipe Morales (alumno).\",\"createdAt\":\"2026-05-17T20:53:50.000Z\"},{\"id\":\"c9806949-027f-4cca-a159-f2f145fd22d8\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Abril Quispe (alumno).\",\"createdAt\":\"2026-05-17T20:49:32.000Z\"},{\"id\":\"d4a05086-b421-409b-8f81-2d98b1a8ef94\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Prof. Silvina Rueda (profesor).\",\"createdAt\":\"2026-05-17T20:42:10.000Z\"},{\"id\":\"bf92460f-5ec1-4d7b-8ae4-b8276e205c28\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Martina Cruz (alumno).\",\"createdAt\":\"2026-05-17T20:20:40.000Z\"},{\"id\":\"62c7a53f-a39b-458f-8388-6faa9acd4c6a\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Santiago Herrera (alumno).\",\"createdAt\":\"2026-05-17T19:56:47.000Z\"},{\"id\":\"3c21703a-9e5d-4dfe-b1a6-8d410b46a4b0\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Emma Chávez (alumno).\",\"createdAt\":\"2026-05-17T19:48:49.000Z\"},{\"id\":\"d6174896-5a23-47cf-a40e-50aa28247b92\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Tomás Flores (alumno).\",\"createdAt\":\"2026-05-17T19:40:45.000Z\"},{\"id\":\"d7df3ab8-1724-481e-8070-8036bca3d52c\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Joaquín Martínez (alumno).\",\"createdAt\":\"2026-05-17T19:34:30.000Z\"},{\"id\":\"1dea526b-ab26-424e-abce-f21156d73652\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Ing. Gustavo Tolaba (profesor).\",\"createdAt\":\"2026-05-17T19:34:07.000Z\"},{\"id\":\"4a5ded05-55d0-433b-8c22-b3ec795f6563\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Arq. Hernán Calizaya (profesor).\",\"createdAt\":\"2026-05-17T19:28:09.000Z\"},{\"id\":\"b5ff884d-ec5c-43a1-b61a-a4ef3596dc25\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Agustina Quispe (alumno).\",\"createdAt\":\"2026-05-17T19:20:01.000Z\"},{\"id\":\"cf1be55f-d18f-4fe0-ad56-c9f8c6009f49\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Felipe Martínez (alumno).\",\"createdAt\":\"2026-05-17T18:41:27.000Z\"},{\"id\":\"9f3869d0-f8ab-4205-856f-80d63437273a\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Joaquín Chávez (alumno).\",\"createdAt\":\"2026-05-17T18:17:43.000Z\"},{\"id\":\"ecaf31c2-3468-4d07-8e34-b70fbf21471b\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Lautaro Álvarez (alumno).\",\"createdAt\":\"2026-05-17T18:06:34.000Z\"},{\"id\":\"8db3ea73-c69f-4bca-bd84-f47aefe8406b\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Prof. Natalia Burgos (profesor).\",\"createdAt\":\"2026-05-17T17:55:08.000Z\"},{\"id\":\"e7a49ef9-85e9-48c0-857e-07ef6cc2c1c5\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Prof. Andrea Choque (profesor).\",\"createdAt\":\"2026-05-17T17:53:06.000Z\"},{\"id\":\"e733e486-844d-4495-83f2-1f70aa326479\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Ing. Ricardo Salinas (profesor).\",\"createdAt\":\"2026-05-17T17:38:05.000Z\"},{\"id\":\"cdbfb953-c838-48c3-a950-043dc3e24f36\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Lucía Álvarez (alumno).\",\"createdAt\":\"2026-05-17T17:35:37.000Z\"},{\"id\":\"7a0dbeb0-3663-4cbd-9ea1-b23d92195f3c\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Tomás Chávez (alumno).\",\"createdAt\":\"2026-05-17T17:10:48.000Z\"},{\"id\":\"0809f122-cc0b-469d-9830-1d2ebe3d6144\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Thiago Aguirre (alumno).\",\"createdAt\":\"2026-05-17T17:03:46.000Z\"},{\"id\":\"11c0d130-f639-4e8f-b6e8-b4c89970c375\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Emma Flores (alumno).\",\"createdAt\":\"2026-05-17T16:51:29.000Z\"},{\"id\":\"d23af438-f447-4acd-b305-ca2b4cb7a961\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Lucía Martínez (alumno).\",\"createdAt\":\"2026-05-17T16:40:38.000Z\"},{\"id\":\"95cd5c85-c2a8-4451-88ea-9067a6ca5e7d\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Joaquín Álvarez (alumno).\",\"createdAt\":\"2026-05-17T16:38:39.000Z\"},{\"id\":\"956c7a53-2ce2-47fe-9721-8f51ecd5e84c\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Emma Suárez (alumno).\",\"createdAt\":\"2026-05-17T16:34:41.000Z\"},{\"id\":\"dc987785-af6e-4360-a80c-3e8a68766497\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Ignacio Herrera (alumno).\",\"createdAt\":\"2026-05-17T16:20:04.000Z\"},{\"id\":\"5d99cd9a-eedd-4e02-b610-e49a4b2e0642\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Lucía Sánchez (alumno).\",\"createdAt\":\"2026-05-17T14:48:33.000Z\"},{\"id\":\"835d3289-35c5-452b-809c-e00fd1486914\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Lautaro Cruz (alumno).\",\"createdAt\":\"2026-05-17T13:21:36.000Z\"},{\"id\":\"9037a31e-046d-4e15-9bac-c45b84ba1e10\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Facundo López (alumno).\",\"createdAt\":\"2026-05-17T13:18:42.000Z\"},{\"id\":\"c14f1934-dd0c-4ea5-8204-32ddec281522\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Felipe Suárez (alumno).\",\"createdAt\":\"2026-05-17T12:55:31.000Z\"},{\"id\":\"fa51454f-9a66-414d-b330-a04e4392391a\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Catalina Torres (alumno).\",\"createdAt\":\"2026-05-17T12:52:02.000Z\"},{\"id\":\"c1b342b3-cc72-4eee-8ebb-88759d3559eb\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Agustina Cruz (alumno).\",\"createdAt\":\"2026-05-17T12:38:28.000Z\"},{\"id\":\"08cc7049-c4eb-421d-879c-3149d61e13c5\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Mónica Zerpa (administrativo).\",\"createdAt\":\"2026-05-17T12:26:11.000Z\"},{\"id\":\"e9cfcb72-02bb-447b-967e-6a3d80f3aeb6\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Camila Quispe (alumno).\",\"createdAt\":\"2026-05-17T11:54:44.000Z\"},{\"id\":\"52702178-23a8-4838-bb65-9e59c615da25\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Lautaro Gutiérrez (alumno).\",\"createdAt\":\"2026-05-17T11:53:03.000Z\"},{\"id\":\"d58e8bfb-bf1f-4968-b6a9-5f7137aab788\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Franco Castro (alumno).\",\"createdAt\":\"2026-05-17T11:36:35.000Z\"},{\"id\":\"28b95923-cc51-41cf-97a1-7d1e82f1d367\",\"type\":\"responsible_created\",\"message\":\"Jorge Medina creó el responsable Raúl Villca (administrativo).\",\"createdAt\":\"2026-05-17T11:19:12.000Z\"},{\"id\":\"cb7502d8-90f2-49db-a8fe-0022eb169198\",\"type\":\"supplier_created\",\"message\":\"Jorge Medina cargó el proveedor Electro Insumos Andinos (CUIT 20-28000789-8).\",\"createdAt\":\"2026-05-16T19:36:25.000Z\"},{\"id\":\"96b662c8-4e8a-458f-b440-66c76b658c69\",\"type\":\"supplier_created\",\"message\":\"Jorge Medina cargó el proveedor Ferretería El Tornillo SRL (CUIT 30-71000123-1).\",\"createdAt\":\"2026-05-16T17:56:23.000Z\"},{\"id\":\"79518ece-f9ef-450a-8107-4031d18c0d64\",\"type\":\"supplier_created\",\"message\":\"Jorge Medina cargó el proveedor Seguridad Industrial Puna (CUIT 30-71000999-2).\",\"createdAt\":\"2026-05-16T16:51:26.000Z\"},{\"id\":\"f38bc965-f8d4-4d30-8bb8-3ee899bd7778\",\"type\":\"supplier_created\",\"message\":\"Jorge Medina cargó el proveedor Distribuidora Técnica del Norte SA (CUIT 30-71000456-7).\",\"createdAt\":\"2026-05-16T11:52:24.000Z\"},{\"id\":\"2bb56e8c-617e-4eaa-9536-3b87d6132fd4\",\"type\":\"location_created\",\"message\":\"Administración Demo creó la ubicación Laboratorio de electrónica.\",\"createdAt\":\"2026-05-15T19:53:12.000Z\"},{\"id\":\"2b6be229-b04e-48d4-85ee-5b2310ffa6be\",\"type\":\"cost_center_created\",\"message\":\"Administración Demo creó el centro de costos Informática.\",\"createdAt\":\"2026-05-15T19:51:16.000Z\"},{\"id\":\"0d919248-2c8e-4e0d-baf8-283a6fc60535\",\"type\":\"location_created\",\"message\":\"Administración Demo creó la ubicación Estantería A2.\",\"createdAt\":\"2026-05-15T18:38:09.000Z\"},{\"id\":\"53ebfafd-5fc2-480f-9b29-624963d38962\",\"type\":\"location_created\",\"message\":\"Administración Demo creó la ubicación Depósito de consumibles.\",\"createdAt\":\"2026-05-15T18:30:11.000Z\"},{\"id\":\"05b7d764-b31e-42d2-9f07-2ebf8191e412\",\"type\":\"orientation_created\",\"message\":\"Administración Demo creó la orientación Técnico Electromecánico.\",\"createdAt\":\"2026-05-15T18:21:19.000Z\"},{\"id\":\"4a4ab142-09a8-4624-ade6-e568635e7221\",\"type\":\"cost_center_created\",\"message\":\"Administración Demo creó el centro de costos Laboratorio de Química.\",\"createdAt\":\"2026-05-15T18:06:15.000Z\"},{\"id\":\"97b7465d-ecae-406f-b594-47fdf9370bb6\",\"type\":\"orientation_created\",\"message\":\"Administración Demo creó la orientación Técnico en Informática.\",\"createdAt\":\"2026-05-15T18:05:21.000Z\"},{\"id\":\"f43cebe7-debc-4d20-b636-ea53ce0fa3a5\",\"type\":\"orientation_created\",\"message\":\"Administración Demo creó la orientación Maestro Mayor de Obras.\",\"createdAt\":\"2026-05-15T18:03:22.000Z\"},{\"id\":\"a0ea3146-fd55-4bb9-83c3-7d8b7ff10f31\",\"type\":\"location_created\",\"message\":\"Administración Demo creó la ubicación Sala de informática.\",\"createdAt\":\"2026-05-15T17:51:13.000Z\"},{\"id\":\"59c7f69d-043b-4d7f-891b-677d3339b3d5\",\"type\":\"category_created\",\"message\":\"Administración Demo creó la categoría Herramientas eléctricas.\",\"createdAt\":\"2026-05-15T17:51:02.000Z\"},{\"id\":\"43bc543b-47b9-4845-90f8-9dc7eadeb503\",\"type\":\"category_created\",\"message\":\"Administración Demo creó la categoría Herramientas manuales.\",\"createdAt\":\"2026-05-15T17:01:01.000Z\"},{\"id\":\"8f0ef976-9d16-4721-8b35-fb5bea18e117\",\"type\":\"location_created\",\"message\":\"Administración Demo creó la ubicación Armario de seguridad.\",\"createdAt\":\"2026-05-15T15:46:10.000Z\"},{\"id\":\"293f0504-0ba6-43ea-9b50-fe828b1a8a98\",\"type\":\"cost_center_created\",\"message\":\"Administración Demo creó el centro de costos Administración.\",\"createdAt\":\"2026-05-15T15:42:18.000Z\"},{\"id\":\"8082d5b9-66ea-4546-b37f-3085c740f693\",\"type\":\"category_created\",\"message\":\"Administración Demo creó la categoría Instrumentos de medición.\",\"createdAt\":\"2026-05-15T15:11:03.000Z\"},{\"id\":\"64390e62-e934-4770-86c5-817a5a004f77\",\"type\":\"category_created\",\"message\":\"Administración Demo creó la categoría Electrónica.\",\"createdAt\":\"2026-05-15T13:45:06.000Z\"},{\"id\":\"3c94adec-0957-47b0-89a8-bc72ef6078f0\",\"type\":\"category_created\",\"message\":\"Administración Demo creó la categoría Informática.\",\"createdAt\":\"2026-05-15T13:24:07.000Z\"},{\"id\":\"379b429e-e83e-4ee3-91a7-abbfa399d1f3\",\"type\":\"category_created\",\"message\":\"Administración Demo creó la categoría Consumibles.\",\"createdAt\":\"2026-05-15T13:14:05.000Z\"},{\"id\":\"bc5f00d7-9321-4ce5-807a-b06700f1df8a\",\"type\":\"cost_center_created\",\"message\":\"Administración Demo creó el centro de costos Construcciones.\",\"createdAt\":\"2026-05-15T13:12:17.000Z\"},{\"id\":\"329cf9e3-4e02-499d-a727-7bec850f702e\",\"type\":\"location_created\",\"message\":\"Administración Demo creó la ubicación Estantería A1.\",\"createdAt\":\"2026-05-15T12:57:08.000Z\"},{\"id\":\"9f7762fa-1fe0-4d14-b94b-d926bca0ba8a\",\"type\":\"category_created\",\"message\":\"Administración Demo creó la categoría Elementos de seguridad.\",\"createdAt\":\"2026-05-15T11:36:04.000Z\"},{\"id\":\"5df6827d-5e27-46e3-bda7-8aee3dc47be2\",\"type\":\"cost_center_created\",\"message\":\"Administración Demo creó el centro de costos Taller de Electromecánica.\",\"createdAt\":\"2026-05-15T11:24:14.000Z\"},{\"id\":\"5262267d-b849-4d37-a988-950a4f8a0531\",\"type\":\"orientation_created\",\"message\":\"Administración Demo creó la orientación Técnico Químico.\",\"createdAt\":\"2026-05-15T11:16:20.000Z\"}],\"locations\":[{\"id\":\"23898179-7dff-4a69-9bb9-27a2f623b11c\",\"name\":\"Sala de informática\",\"description\":\"Armario con llave\",\"createdAt\":\"2026-05-15T17:51:12.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"0d12f249-5810-4b33-bb1f-da73a25e501b\",\"name\":\"Laboratorio de electrónica\",\"description\":\"Bancos 1 a 6\",\"createdAt\":\"2026-05-15T19:53:11.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"01201776-98d3-4713-bdd9-5f6b6e818ad4\",\"name\":\"Depósito de consumibles\",\"description\":\"Insumos y repuestos\",\"createdAt\":\"2026-05-15T18:30:10.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"e171fb6a-d28c-45ca-aa4c-bd96355662c6\",\"name\":\"Armario de seguridad\",\"description\":\"Elementos de protección personal\",\"createdAt\":\"2026-05-15T15:46:09.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"3f297af9-a15a-4b7d-9ed6-9bc9997f3428\",\"name\":\"Estantería A2\",\"description\":\"Taller · herramientas eléctricas\",\"createdAt\":\"2026-05-15T18:38:08.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"cb272735-a5ad-49d0-837a-9577f65dadfc\",\"name\":\"Estantería A1\",\"description\":\"Taller · herramientas manuales\",\"createdAt\":\"2026-05-15T12:57:07.000Z\",\"createdBy\":\"Administración Demo\"}],\"categories\":[{\"id\":\"377ca0c6-9315-4bd1-9b61-e666c45195cf\",\"name\":\"Informática\",\"description\":\"Equipos y accesorios informáticos\",\"createdAt\":\"2026-05-15T13:24:06.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"6ce15d10-7022-47c7-9476-9b8ad1ab86e8\",\"name\":\"Electrónica\",\"description\":\"Componentes y equipos de laboratorio\",\"createdAt\":\"2026-05-15T13:45:05.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"b04f0653-af43-4d2c-80f9-cdc9fc06684f\",\"name\":\"Consumibles\",\"description\":\"Insumos que se gastan con el uso\",\"createdAt\":\"2026-05-15T13:14:04.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"7e35527a-eca9-4193-bb8c-d7975b2a9421\",\"name\":\"Elementos de seguridad\",\"description\":\"EPP para prácticas de taller\",\"createdAt\":\"2026-05-15T11:36:03.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"a72b43d4-2feb-459a-bbd8-071ea9d68cd0\",\"name\":\"Instrumentos de medición\",\"description\":\"Multímetros, calibres y medidores\",\"createdAt\":\"2026-05-15T15:11:02.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"3e449e01-4f0a-4bca-bba7-cbebcbda7b7b\",\"name\":\"Herramientas eléctricas\",\"description\":\"Equipos con motor o batería\",\"createdAt\":\"2026-05-15T17:51:01.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"fe5b2c54-1a7d-469f-863b-720f605757a4\",\"name\":\"Herramientas manuales\",\"description\":\"Llaves, destornilladores, martillos y similares\",\"createdAt\":\"2026-05-15T17:01:00.000Z\",\"createdBy\":\"Administración Demo\"}],\"responsibles\":[{\"id\":\"b17615ce-f6c1-44ae-8d33-48144b7cbf63\",\"type\":\"administrativo\",\"fullName\":\"Raúl Villca\",\"dni\":\"30000733\",\"admissionDate\":\"\",\"course\":\"\",\"division\":\"\",\"orientation\":\"\",\"specialty\":\"\",\"position\":\"Preceptor\",\"address\":\"Pasaje Inventado 20\",\"email\":\"personal2@escuela.demo\",\"phone\":\"388 780-4134\",\"createdAt\":\"2026-11-13T11:22:46.188Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"d1fcd5ca-13c4-488c-b0e5-4a6db063419e\",\"type\":\"administrativo\",\"fullName\":\"Mónica Zerpa\",\"dni\":\"30000000\",\"admissionDate\":\"\",\"course\":\"\",\"division\":\"\",\"orientation\":\"\",\"specialty\":\"\",\"position\":\"Secretaria\",\"address\":\"Pasaje Inventado 93\",\"email\":\"personal1@escuela.demo\",\"phone\":\"388 752-1233\",\"createdAt\":\"2026-11-13T11:22:46.185Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"df821936-b846-4003-8faf-5f383de07df4\",\"type\":\"profesor\",\"fullName\":\"Prof. Silvina Rueda\",\"dni\":\"25004555\",\"admissionDate\":\"\",\"course\":\"\",\"division\":\"\",\"orientation\":\"\",\"specialty\":\"Física\",\"position\":\"\",\"address\":\"Av. Imaginaria 1804\",\"email\":\"docente6@escuela.demo\",\"phone\":\"388 626-2652\",\"createdAt\":\"2026-11-13T11:22:46.180Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"d44d980d-af89-491a-9d73-3aa27b690d86\",\"type\":\"profesor\",\"fullName\":\"Arq. Hernán Calizaya\",\"dni\":\"25003644\",\"admissionDate\":\"\",\"course\":\"\",\"division\":\"\",\"orientation\":\"\",\"specialty\":\"Construcciones\",\"position\":\"\",\"address\":\"Av. Imaginaria 546\",\"email\":\"docente5@escuela.demo\",\"phone\":\"388 680-4876\",\"createdAt\":\"2026-11-13T11:22:46.175Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"a444a540-fb53-4feb-be06-1fa44460b021\",\"type\":\"profesor\",\"fullName\":\"Prof. Natalia Burgos\",\"dni\":\"25002733\",\"admissionDate\":\"\",\"course\":\"\",\"division\":\"\",\"orientation\":\"\",\"specialty\":\"Informática\",\"position\":\"\",\"address\":\"Av. Imaginaria 768\",\"email\":\"docente4@escuela.demo\",\"phone\":\"388 674-4112\",\"createdAt\":\"2026-11-13T11:22:46.171Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"409490d6-9a64-47d9-b153-98dbe71487ed\",\"type\":\"profesor\",\"fullName\":\"Ing. Gustavo Tolaba\",\"dni\":\"25001822\",\"admissionDate\":\"\",\"course\":\"\",\"division\":\"\",\"orientation\":\"\",\"specialty\":\"Electrónica\",\"position\":\"\",\"address\":\"Av. Imaginaria 1871\",\"email\":\"docente3@escuela.demo\",\"phone\":\"388 621-2035\",\"createdAt\":\"2026-11-13T11:22:46.167Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"f0c08dd7-88e6-4914-b3f2-75febe82813c\",\"type\":\"profesor\",\"fullName\":\"Prof. Andrea Choque\",\"dni\":\"25000911\",\"admissionDate\":\"\",\"course\":\"\",\"division\":\"\",\"orientation\":\"\",\"specialty\":\"Química\",\"position\":\"\",\"address\":\"Av. Imaginaria 258\",\"email\":\"docente2@escuela.demo\",\"phone\":\"388 655-5586\",\"createdAt\":\"2026-11-13T11:22:46.163Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"b0e681c5-9ae8-43a5-813a-2eac274e644e\",\"type\":\"profesor\",\"fullName\":\"Ing. Ricardo Salinas\",\"dni\":\"25000000\",\"admissionDate\":\"\",\"course\":\"\",\"division\":\"\",\"orientation\":\"\",\"specialty\":\"Electromecánica\",\"position\":\"\",\"address\":\"Av. Imaginaria 1470\",\"email\":\"docente1@escuela.demo\",\"phone\":\"388 652-6652\",\"createdAt\":\"2026-11-13T11:22:46.159Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"2b4576e3-70af-4318-8879-38d25e9330a8\",\"type\":\"alumno\",\"fullName\":\"Ignacio Herrera\",\"dni\":\"46003752\",\"admissionDate\":\"2021-03-01\",\"course\":\"6°\",\"division\":\"2da\",\"orientation\":\"Técnico Electromecánico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 651\",\"email\":\"ignacio.27@alumnos.demo\",\"phone\":\"388 554-7654\",\"createdAt\":\"2026-11-13T11:22:46.155Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"bd0ed777-b313-468b-a012-8afbfb1fbb7f\",\"type\":\"alumno\",\"fullName\":\"Lautaro Gutiérrez\",\"dni\":\"46003660\",\"admissionDate\":\"2022-03-01\",\"course\":\"5°\",\"division\":\"2da\",\"orientation\":\"Técnico Químico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 411\",\"email\":\"lautaro.26@alumnos.demo\",\"phone\":\"388 595-7512\",\"createdAt\":\"2026-11-13T11:22:46.151Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"d0236f0d-060a-41d3-be29-acf2d5c194bf\",\"type\":\"alumno\",\"fullName\":\"Catalina Torres\",\"dni\":\"46003506\",\"admissionDate\":\"2020-03-01\",\"course\":\"7°\",\"division\":\"2da\",\"orientation\":\"Técnico Químico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 461\",\"email\":\"catalina.25@alumnos.demo\",\"phone\":\"388 530-6015\",\"createdAt\":\"2026-11-13T11:22:46.146Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"10a18b3e-1713-4173-a545-0ae688741c11\",\"type\":\"alumno\",\"fullName\":\"Agustina Quispe\",\"dni\":\"46003383\",\"admissionDate\":\"2024-03-01\",\"course\":\"3°\",\"division\":\"2da\",\"orientation\":\"Técnico en Informática\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 456\",\"email\":\"agustina.24@alumnos.demo\",\"phone\":\"388 599-8646\",\"createdAt\":\"2026-11-13T11:22:46.142Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"5be1dd70-74b8-431f-8cf4-5d72cba3abe4\",\"type\":\"alumno\",\"fullName\":\"Felipe Morales\",\"dni\":\"46003231\",\"admissionDate\":\"2024-03-01\",\"course\":\"3°\",\"division\":\"2da\",\"orientation\":\"Técnico Químico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 651\",\"email\":\"felipe.23@alumnos.demo\",\"phone\":\"388 555-8838\",\"createdAt\":\"2026-11-13T11:22:46.138Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"0dd0eab6-3f92-4e9d-b841-78d03d6fd461\",\"type\":\"alumno\",\"fullName\":\"Emma Chávez\",\"dni\":\"46003066\",\"admissionDate\":\"2023-03-01\",\"course\":\"4°\",\"division\":\"3ra\",\"orientation\":\"Técnico en Informática\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 202\",\"email\":\"emma.22@alumnos.demo\",\"phone\":\"388 540-1856\",\"createdAt\":\"2026-11-13T11:22:46.134Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"0f65064e-045e-4247-beca-0cb81f3ac52f\",\"type\":\"alumno\",\"fullName\":\"Tomás Chávez\",\"dni\":\"46002972\",\"admissionDate\":\"2023-03-01\",\"course\":\"4°\",\"division\":\"1ra\",\"orientation\":\"Técnico Químico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 732\",\"email\":\"tomas.21@alumnos.demo\",\"phone\":\"388 515-5950\",\"createdAt\":\"2026-11-13T11:22:46.130Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"cb195333-df0e-466f-a462-4ee2e4f45e8f\",\"type\":\"alumno\",\"fullName\":\"Santiago Herrera\",\"dni\":\"46002786\",\"admissionDate\":\"2023-03-01\",\"course\":\"4°\",\"division\":\"2da\",\"orientation\":\"Maestro Mayor de Obras\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 962\",\"email\":\"santiago.20@alumnos.demo\",\"phone\":\"388 584-6436\",\"createdAt\":\"2026-11-13T11:22:46.126Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"9ee97eb3-c73d-4714-871f-aac1c3c00ce4\",\"type\":\"alumno\",\"fullName\":\"Thiago Aguirre\",\"dni\":\"46002655\",\"admissionDate\":\"2024-03-01\",\"course\":\"3°\",\"division\":\"1ra\",\"orientation\":\"Maestro Mayor de Obras\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 106\",\"email\":\"thiago.19@alumnos.demo\",\"phone\":\"388 583-5764\",\"createdAt\":\"2026-11-13T11:22:46.123Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"54a41a41-5d91-44fe-a600-8d2ebd1bab37\",\"type\":\"alumno\",\"fullName\":\"Tomás Flores\",\"dni\":\"46002487\",\"admissionDate\":\"2020-03-01\",\"course\":\"7°\",\"division\":\"1ra\",\"orientation\":\"Técnico Químico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 853\",\"email\":\"tomas.18@alumnos.demo\",\"phone\":\"388 576-3557\",\"createdAt\":\"2026-11-13T11:22:46.119Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"230c71c6-317e-4ff8-a765-a9ad413327d1\",\"type\":\"alumno\",\"fullName\":\"Camila Quispe\",\"dni\":\"46002376\",\"admissionDate\":\"2022-03-01\",\"course\":\"5°\",\"division\":\"2da\",\"orientation\":\"Técnico en Informática\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 457\",\"email\":\"camila.17@alumnos.demo\",\"phone\":\"388 522-7714\",\"createdAt\":\"2026-11-13T11:22:46.115Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"e0673170-3bd6-46ac-9868-a736e2c6837a\",\"type\":\"alumno\",\"fullName\":\"Joaquín Chávez\",\"dni\":\"46002271\",\"admissionDate\":\"2020-03-01\",\"course\":\"7°\",\"division\":\"3ra\",\"orientation\":\"Técnico Electromecánico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 184\",\"email\":\"joaquin.16@alumnos.demo\",\"phone\":\"388 588-7616\",\"createdAt\":\"2026-11-13T11:22:46.112Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"a5250563-39ef-47cc-a9d1-78f2222acc52\",\"type\":\"alumno\",\"fullName\":\"Facundo López\",\"dni\":\"46002060\",\"admissionDate\":\"2021-03-01\",\"course\":\"6°\",\"division\":\"2da\",\"orientation\":\"Técnico Químico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 186\",\"email\":\"facundo.15@alumnos.demo\",\"phone\":\"388 571-1857\",\"createdAt\":\"2026-11-13T11:22:46.108Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"e11b795e-4e3b-48b8-92a1-69022d49e8b3\",\"type\":\"alumno\",\"fullName\":\"Emma Suárez\",\"dni\":\"46001993\",\"admissionDate\":\"2024-03-01\",\"course\":\"3°\",\"division\":\"1ra\",\"orientation\":\"Técnico Químico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 223\",\"email\":\"emma.14@alumnos.demo\",\"phone\":\"388 551-9961\",\"createdAt\":\"2026-11-13T11:22:46.105Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"cbb74765-ac7c-40f0-97c9-c1d79e5cd6e3\",\"type\":\"alumno\",\"fullName\":\"Martina Cruz\",\"dni\":\"46001819\",\"admissionDate\":\"2023-03-01\",\"course\":\"4°\",\"division\":\"1ra\",\"orientation\":\"Técnico Químico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 643\",\"email\":\"martina.13@alumnos.demo\",\"phone\":\"388 535-4154\",\"createdAt\":\"2026-11-13T11:22:46.101Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"3955cae4-8a4a-4f08-928c-27336ded1acf\",\"type\":\"alumno\",\"fullName\":\"Joaquín Álvarez\",\"dni\":\"46001697\",\"admissionDate\":\"2024-03-01\",\"course\":\"3°\",\"division\":\"3ra\",\"orientation\":\"Técnico Químico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 470\",\"email\":\"joaquin.12@alumnos.demo\",\"phone\":\"388 577-2765\",\"createdAt\":\"2026-11-13T11:22:46.097Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"510c76ed-727d-48e6-9160-3aae15b88ce7\",\"type\":\"alumno\",\"fullName\":\"Lucía Martínez\",\"dni\":\"46001523\",\"admissionDate\":\"2020-03-01\",\"course\":\"7°\",\"division\":\"3ra\",\"orientation\":\"Técnico Químico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 818\",\"email\":\"lucia.11@alumnos.demo\",\"phone\":\"388 522-1429\",\"createdAt\":\"2026-11-13T11:22:46.094Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"36cb18c5-b2f8-47ed-929a-58bbceb4657e\",\"type\":\"alumno\",\"fullName\":\"Lucía Álvarez\",\"dni\":\"46001414\",\"admissionDate\":\"2022-03-01\",\"course\":\"5°\",\"division\":\"2da\",\"orientation\":\"Técnico en Informática\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 633\",\"email\":\"lucia.10@alumnos.demo\",\"phone\":\"388 566-7727\",\"createdAt\":\"2026-11-13T11:22:46.091Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"4f4f2b98-34b1-404f-a264-f5575e9e8175\",\"type\":\"alumno\",\"fullName\":\"Lautaro Cruz\",\"dni\":\"46001323\",\"admissionDate\":\"2020-03-01\",\"course\":\"7°\",\"division\":\"2da\",\"orientation\":\"Técnico Electromecánico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 484\",\"email\":\"lautaro.9@alumnos.demo\",\"phone\":\"388 539-2133\",\"createdAt\":\"2026-11-13T11:22:46.088Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"a54efc2f-c32b-49e2-93a7-0c2245e4c252\",\"type\":\"alumno\",\"fullName\":\"Franco Castro\",\"dni\":\"46001099\",\"admissionDate\":\"2023-03-01\",\"course\":\"4°\",\"division\":\"2da\",\"orientation\":\"Técnico Electromecánico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 225\",\"email\":\"franco.8@alumnos.demo\",\"phone\":\"388 578-7028\",\"createdAt\":\"2026-11-13T11:22:46.084Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"7c02a9a5-67aa-439d-9644-7f66b5569c00\",\"type\":\"alumno\",\"fullName\":\"Lautaro Álvarez\",\"dni\":\"46001022\",\"admissionDate\":\"2022-03-01\",\"course\":\"5°\",\"division\":\"2da\",\"orientation\":\"Técnico Electromecánico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 953\",\"email\":\"lautaro.7@alumnos.demo\",\"phone\":\"388 555-2276\",\"createdAt\":\"2026-11-13T11:22:46.080Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"f2228494-5fbb-4664-9d0c-85babe096449\",\"type\":\"alumno\",\"fullName\":\"Lucía Sánchez\",\"dni\":\"46000917\",\"admissionDate\":\"2022-03-01\",\"course\":\"5°\",\"division\":\"2da\",\"orientation\":\"Maestro Mayor de Obras\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 894\",\"email\":\"lucia.6@alumnos.demo\",\"phone\":\"388 581-8840\",\"createdAt\":\"2026-11-13T11:22:46.077Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"ef190897-11f2-4209-a59c-5725ee5cc3bf\",\"type\":\"alumno\",\"fullName\":\"Abril Quispe\",\"dni\":\"46000726\",\"admissionDate\":\"2023-03-01\",\"course\":\"4°\",\"division\":\"3ra\",\"orientation\":\"Técnico Químico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 917\",\"email\":\"abril.5@alumnos.demo\",\"phone\":\"388 577-9619\",\"createdAt\":\"2026-11-13T11:22:46.073Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"4efdcbb5-6315-4c90-a9e6-08cc2222ed66\",\"type\":\"alumno\",\"fullName\":\"Felipe Suárez\",\"dni\":\"46000608\",\"admissionDate\":\"2024-03-01\",\"course\":\"3°\",\"division\":\"1ra\",\"orientation\":\"Técnico Electromecánico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 435\",\"email\":\"felipe.4@alumnos.demo\",\"phone\":\"388 526-9042\",\"createdAt\":\"2026-11-13T11:22:46.070Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"3b328b58-8cce-4ad5-9018-958c1ef9c524\",\"type\":\"alumno\",\"fullName\":\"Joaquín Martínez\",\"dni\":\"46000463\",\"admissionDate\":\"2022-03-01\",\"course\":\"5°\",\"division\":\"2da\",\"orientation\":\"Técnico en Informática\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 814\",\"email\":\"joaquin.3@alumnos.demo\",\"phone\":\"388 524-6299\",\"createdAt\":\"2026-11-13T11:22:46.067Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"49fe0af9-80fc-4da7-b364-18349123e200\",\"type\":\"alumno\",\"fullName\":\"Emma Flores\",\"dni\":\"46000287\",\"admissionDate\":\"2020-03-01\",\"course\":\"7°\",\"division\":\"3ra\",\"orientation\":\"Técnico en Informática\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 995\",\"email\":\"emma.2@alumnos.demo\",\"phone\":\"388 542-3718\",\"createdAt\":\"2026-11-13T11:22:46.064Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"b41b7415-9035-4fab-bce1-d77a5d1606ca\",\"type\":\"alumno\",\"fullName\":\"Agustina Cruz\",\"dni\":\"46000217\",\"admissionDate\":\"2020-03-01\",\"course\":\"7°\",\"division\":\"1ra\",\"orientation\":\"Técnico Químico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 574\",\"email\":\"agustina.1@alumnos.demo\",\"phone\":\"388 524-6345\",\"createdAt\":\"2026-11-13T11:22:46.061Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"d50f5136-d124-4b3c-a61e-028b2f670d8e\",\"type\":\"alumno\",\"fullName\":\"Felipe Martínez\",\"dni\":\"46000053\",\"admissionDate\":\"2023-03-01\",\"course\":\"4°\",\"division\":\"1ra\",\"orientation\":\"Técnico Electromecánico\",\"specialty\":\"\",\"position\":\"\",\"address\":\"Calle Ficticia 24\",\"email\":\"felipe.0@alumnos.demo\",\"phone\":\"388 595-1376\",\"createdAt\":\"2026-11-13T11:22:46.058Z\",\"createdBy\":\"Jorge Medina\"}],\"consumptions\":[{\"id\":\"09ed878a-4943-47ac-8f4e-e1503cd10105\",\"itemId\":\"e2e37655-8702-41ee-80e4-bea9141ef442\",\"responsibleId\":\"ef190897-11f2-4209-a59c-5725ee5cc3bf\",\"responsible\":\"Abril Quispe\",\"department\":\"4° 3ra\",\"costCenter\":\"Construcciones\",\"quantity\":2,\"detail\":\"Práctica de soldadura\",\"createdAt\":\"2026-11-12T16:26:06.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"5c4c14af-5157-4f1e-b807-e3bdd973db33\",\"itemId\":\"53409754-3d94-43cd-8ba0-a96b481b3b9b\",\"responsibleId\":\"a444a540-fb53-4feb-be06-1fa44460b021\",\"responsible\":\"Prof. Natalia Burgos\",\"department\":\"Docentes\",\"costCenter\":\"Construcciones\",\"quantity\":6,\"detail\":\"Práctica de soldadura\",\"createdAt\":\"2026-11-06T19:53:01.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"edea5c88-496d-4d02-947f-88d6164b6356\",\"itemId\":\"b6cf1257-bdd4-498c-bcc4-b0235395b32e\",\"responsibleId\":\"2b4576e3-70af-4318-8879-38d25e9330a8\",\"responsible\":\"Ignacio Herrera\",\"department\":\"6° 2da\",\"costCenter\":\"Construcciones\",\"quantity\":1,\"detail\":\"Proyecto de 6° año\",\"createdAt\":\"2026-10-29T19:36:32.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"ff57c0fd-da53-4b44-8d59-ce8478beed4d\",\"itemId\":\"b848029a-3798-4ce4-b200-a15b2a66a477\",\"responsibleId\":\"a5250563-39ef-47cc-a9d1-78f2222acc52\",\"responsible\":\"Facundo López\",\"department\":\"6° 2da\",\"costCenter\":\"Laboratorio de Química\",\"quantity\":4,\"detail\":\"\",\"createdAt\":\"2026-10-19T19:53:14.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"bc812f94-addb-44b3-aef0-b9544219c197\",\"itemId\":\"0d6d6bf7-4d3f-4e8c-8314-75e49b984f2a\",\"responsibleId\":\"b17615ce-f6c1-44ae-8d33-48144b7cbf63\",\"responsible\":\"Raúl Villca\",\"department\":\"Docentes\",\"costCenter\":\"Informática\",\"quantity\":3,\"detail\":\"Trabajo práctico\",\"createdAt\":\"2026-10-16T14:40:05.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"877de1db-add2-4a49-bc0d-d214d1b75371\",\"itemId\":\"66eaec4b-e38e-4138-a9b2-3189f586c6c3\",\"responsibleId\":\"d1fcd5ca-13c4-488c-b0e5-4a6db063419e\",\"responsible\":\"Mónica Zerpa\",\"department\":\"Docentes\",\"costCenter\":\"Administración\",\"quantity\":2,\"detail\":\"Práctica de soldadura\",\"createdAt\":\"2026-10-13T14:21:45.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"efd17a71-52bb-4b8e-aeff-15288dfd142b\",\"itemId\":\"0ae4e306-9cf7-483c-85dc-3c21aa85c145\",\"responsibleId\":\"f2228494-5fbb-4664-9d0c-85babe096449\",\"responsible\":\"Lucía Sánchez\",\"department\":\"5° 2da\",\"costCenter\":\"Laboratorio de Química\",\"quantity\":1,\"detail\":\"\",\"createdAt\":\"2026-10-12T13:02:44.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"c9ca798b-bbf2-4f48-aed1-0a4e1be7beec\",\"itemId\":\"630379b8-a4b6-40a3-ad90-c7fd93fcaaa0\",\"responsibleId\":\"e11b795e-4e3b-48b8-92a1-69022d49e8b3\",\"responsible\":\"Emma Suárez\",\"department\":\"3° 1ra\",\"costCenter\":\"Informática\",\"quantity\":2,\"detail\":\"Trabajo práctico\",\"createdAt\":\"2026-10-09T14:19:37.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"ef2696db-909b-4b32-96ec-0351185e01fd\",\"itemId\":\"0d6d6bf7-4d3f-4e8c-8314-75e49b984f2a\",\"responsibleId\":\"d44d980d-af89-491a-9d73-3aa27b690d86\",\"responsible\":\"Arq. Hernán Calizaya\",\"department\":\"Docentes\",\"costCenter\":\"Laboratorio de Química\",\"quantity\":4,\"detail\":\"Mantenimiento\",\"createdAt\":\"2026-10-06T14:24:31.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"c4a8cf1e-d4d2-47d3-b3e4-4cfedff59f0e\",\"itemId\":\"0ae4e306-9cf7-483c-85dc-3c21aa85c145\",\"responsibleId\":\"ef190897-11f2-4209-a59c-5725ee5cc3bf\",\"responsible\":\"Abril Quispe\",\"department\":\"4° 3ra\",\"costCenter\":\"Taller de Electromecánica\",\"quantity\":1,\"detail\":\"Trabajo práctico\",\"createdAt\":\"2026-10-05T16:38:29.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"3a8392f4-8b0d-4305-86f3-13b7255fdca2\",\"itemId\":\"b848029a-3798-4ce4-b200-a15b2a66a477\",\"responsibleId\":\"d50f5136-d124-4b3c-a61e-028b2f670d8e\",\"responsible\":\"Felipe Martínez\",\"department\":\"4° 1ra\",\"costCenter\":\"Taller de Electromecánica\",\"quantity\":4,\"detail\":\"Práctica de soldadura\",\"createdAt\":\"2026-09-25T12:01:08.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"3070b444-da24-4c56-b2d9-939aa2ce0c0c\",\"itemId\":\"0ae4e306-9cf7-483c-85dc-3c21aa85c145\",\"responsibleId\":\"d44d980d-af89-491a-9d73-3aa27b690d86\",\"responsible\":\"Arq. Hernán Calizaya\",\"department\":\"Docentes\",\"costCenter\":\"Taller de Electromecánica\",\"quantity\":4,\"detail\":\"\",\"createdAt\":\"2026-09-24T19:23:02.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"8c5b5e14-a18a-42d8-b575-12044894819d\",\"itemId\":\"53409754-3d94-43cd-8ba0-a96b481b3b9b\",\"responsibleId\":\"9ee97eb3-c73d-4714-871f-aac1c3c00ce4\",\"responsible\":\"Thiago Aguirre\",\"department\":\"3° 1ra\",\"costCenter\":\"Taller de Electromecánica\",\"quantity\":1,\"detail\":\"Mantenimiento\",\"createdAt\":\"2026-09-21T17:02:43.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"d8072db6-51b6-4aca-9c6d-cd03d748748b\",\"itemId\":\"630379b8-a4b6-40a3-ad90-c7fd93fcaaa0\",\"responsibleId\":\"f2228494-5fbb-4664-9d0c-85babe096449\",\"responsible\":\"Lucía Sánchez\",\"department\":\"5° 2da\",\"costCenter\":\"Laboratorio de Química\",\"quantity\":3,\"detail\":\"Proyecto de 6° año\",\"createdAt\":\"2026-09-16T12:25:35.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"a3038d49-752d-4c54-96a0-8db69e85cb51\",\"itemId\":\"b848029a-3798-4ce4-b200-a15b2a66a477\",\"responsibleId\":\"3b328b58-8cce-4ad5-9018-958c1ef9c524\",\"responsible\":\"Joaquín Martínez\",\"department\":\"5° 2da\",\"costCenter\":\"Laboratorio de Química\",\"quantity\":2,\"detail\":\"Proyecto de 6° año\",\"createdAt\":\"2026-09-14T17:12:29.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"98e7151a-714b-4144-b499-28657055141b\",\"itemId\":\"0ae4e306-9cf7-483c-85dc-3c21aa85c145\",\"responsibleId\":\"d1fcd5ca-13c4-488c-b0e5-4a6db063419e\",\"responsible\":\"Mónica Zerpa\",\"department\":\"Docentes\",\"costCenter\":\"Laboratorio de Química\",\"quantity\":1,\"detail\":\"\",\"createdAt\":\"2026-09-10T15:53:16.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"b7dd3fab-d9c6-42d0-939b-9a1e66cf7560\",\"itemId\":\"0ae4e306-9cf7-483c-85dc-3c21aa85c145\",\"responsibleId\":\"b17615ce-f6c1-44ae-8d33-48144b7cbf63\",\"responsible\":\"Raúl Villca\",\"department\":\"Docentes\",\"costCenter\":\"Informática\",\"quantity\":2,\"detail\":\"Mantenimiento\",\"createdAt\":\"2026-09-08T16:09:09.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"cb650f43-a4f2-41d8-8a17-8d425ad48ef4\",\"itemId\":\"66eaec4b-e38e-4138-a9b2-3189f586c6c3\",\"responsibleId\":\"bd0ed777-b313-468b-a012-8afbfb1fbb7f\",\"responsible\":\"Lautaro Gutiérrez\",\"department\":\"5° 2da\",\"costCenter\":\"Administración\",\"quantity\":2,\"detail\":\"Mantenimiento\",\"createdAt\":\"2026-09-03T19:46:49.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"019966a6-338e-4578-a7d5-75d7e47dbc3b\",\"itemId\":\"e2e37655-8702-41ee-80e4-bea9141ef442\",\"responsibleId\":\"409490d6-9a64-47d9-b153-98dbe71487ed\",\"responsible\":\"Ing. Gustavo Tolaba\",\"department\":\"Docentes\",\"costCenter\":\"Construcciones\",\"quantity\":1,\"detail\":\"Trabajo práctico\",\"createdAt\":\"2026-08-20T19:07:21.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"2cf8e807-96c2-4733-9efa-83e6ea68eff8\",\"itemId\":\"53409754-3d94-43cd-8ba0-a96b481b3b9b\",\"responsibleId\":\"b0e681c5-9ae8-43a5-813a-2eac274e644e\",\"responsible\":\"Ing. Ricardo Salinas\",\"department\":\"Docentes\",\"costCenter\":\"Taller de Electromecánica\",\"quantity\":10,\"detail\":\"Proyecto de 6° año\",\"createdAt\":\"2026-08-14T18:59:09.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"768a628b-e822-46d9-ba77-18decb45b13a\",\"itemId\":\"0d6d6bf7-4d3f-4e8c-8314-75e49b984f2a\",\"responsibleId\":\"d44d980d-af89-491a-9d73-3aa27b690d86\",\"responsible\":\"Arq. Hernán Calizaya\",\"department\":\"Docentes\",\"costCenter\":\"Laboratorio de Química\",\"quantity\":1,\"detail\":\"Trabajo práctico\",\"createdAt\":\"2026-08-13T14:58:05.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"31ebfdf7-365a-4301-9745-6793f9bf5862\",\"itemId\":\"0ae4e306-9cf7-483c-85dc-3c21aa85c145\",\"responsibleId\":\"f0c08dd7-88e6-4914-b3f2-75febe82813c\",\"responsible\":\"Prof. Andrea Choque\",\"department\":\"Docentes\",\"costCenter\":\"Taller de Electromecánica\",\"quantity\":4,\"detail\":\"Trabajo práctico\",\"createdAt\":\"2026-08-10T17:19:48.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"57134054-d98c-4506-bf0e-691b6a1267d7\",\"itemId\":\"0d6d6bf7-4d3f-4e8c-8314-75e49b984f2a\",\"responsibleId\":\"e11b795e-4e3b-48b8-92a1-69022d49e8b3\",\"responsible\":\"Emma Suárez\",\"department\":\"3° 1ra\",\"costCenter\":\"Construcciones\",\"quantity\":1,\"detail\":\"Proyecto de 6° año\",\"createdAt\":\"2026-08-07T14:34:38.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"e30e6d69-9de5-4c76-ade6-7a6cba94225c\",\"itemId\":\"53409754-3d94-43cd-8ba0-a96b481b3b9b\",\"responsibleId\":\"f2228494-5fbb-4664-9d0c-85babe096449\",\"responsible\":\"Lucía Sánchez\",\"department\":\"5° 2da\",\"costCenter\":\"Construcciones\",\"quantity\":7,\"detail\":\"Mantenimiento\",\"createdAt\":\"2026-08-06T13:49:34.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"43c64a1f-402a-4d18-bf77-9cbe19d17992\",\"itemId\":\"66eaec4b-e38e-4138-a9b2-3189f586c6c3\",\"responsibleId\":\"d1fcd5ca-13c4-488c-b0e5-4a6db063419e\",\"responsible\":\"Mónica Zerpa\",\"department\":\"Docentes\",\"costCenter\":\"Construcciones\",\"quantity\":1,\"detail\":\"Práctica de soldadura\",\"createdAt\":\"2026-08-05T17:12:31.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"703b2525-373f-44e6-ac71-a59d74c6f32a\",\"itemId\":\"e2e37655-8702-41ee-80e4-bea9141ef442\",\"responsibleId\":\"d0236f0d-060a-41d3-be29-acf2d5c194bf\",\"responsible\":\"Catalina Torres\",\"department\":\"7° 2da\",\"costCenter\":\"Taller de Electromecánica\",\"quantity\":2,\"detail\":\"Práctica de soldadura\",\"createdAt\":\"2026-08-03T16:13:25.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"b4ab4123-3c95-4237-b043-3a32f00cbe43\",\"itemId\":\"66eaec4b-e38e-4138-a9b2-3189f586c6c3\",\"responsibleId\":\"3955cae4-8a4a-4f08-928c-27336ded1acf\",\"responsible\":\"Joaquín Álvarez\",\"department\":\"3° 3ra\",\"costCenter\":\"Laboratorio de Química\",\"quantity\":2,\"detail\":\"\",\"createdAt\":\"2026-07-31T17:23:19.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"7b639e80-6972-431d-98fb-a14f671ec86b\",\"itemId\":\"8d2466a8-de30-4ed8-afef-8cab0b67c703\",\"responsibleId\":\"54a41a41-5d91-44fe-a600-8d2ebd1bab37\",\"responsible\":\"Tomás Flores\",\"department\":\"7° 1ra\",\"costCenter\":\"Laboratorio de Química\",\"quantity\":3,\"detail\":\"Mantenimiento\",\"createdAt\":\"2026-07-30T14:39:13.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"2c11b64b-a32b-4a20-b837-1c2bc7b0785d\",\"itemId\":\"185a72a0-1201-4a15-a4a9-5cbf8b1ba1ee\",\"responsibleId\":\"d44d980d-af89-491a-9d73-3aa27b690d86\",\"responsible\":\"Arq. Hernán Calizaya\",\"department\":\"Docentes\",\"costCenter\":\"Laboratorio de Química\",\"quantity\":1,\"detail\":\"Mantenimiento\",\"createdAt\":\"2026-07-07T18:14:34.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"b0a14527-9bba-4d01-a4d5-eeb6288dead5\",\"itemId\":\"185a72a0-1201-4a15-a4a9-5cbf8b1ba1ee\",\"responsibleId\":\"9ee97eb3-c73d-4714-871f-aac1c3c00ce4\",\"responsible\":\"Thiago Aguirre\",\"department\":\"3° 1ra\",\"costCenter\":\"Taller de Electromecánica\",\"quantity\":4,\"detail\":\"\",\"createdAt\":\"2026-07-06T18:26:30.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"66127f5d-b92e-4dc9-bca0-3f922c52aaa0\",\"itemId\":\"53409754-3d94-43cd-8ba0-a96b481b3b9b\",\"responsibleId\":\"0f65064e-045e-4247-beca-0cb81f3ac52f\",\"responsible\":\"Tomás Chávez\",\"department\":\"4° 1ra\",\"costCenter\":\"Informática\",\"quantity\":9,\"detail\":\"Práctica de soldadura\",\"createdAt\":\"2026-07-02T16:01:18.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"8e329014-8719-4b30-bc83-9a373ad9edd4\",\"itemId\":\"185a72a0-1201-4a15-a4a9-5cbf8b1ba1ee\",\"responsibleId\":\"cb195333-df0e-466f-a462-4ee2e4f45e8f\",\"responsible\":\"Santiago Herrera\",\"department\":\"4° 2da\",\"costCenter\":\"Taller de Electromecánica\",\"quantity\":1,\"detail\":\"Trabajo práctico\",\"createdAt\":\"2026-06-29T19:25:07.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"1a8c21f1-3745-4b89-8617-419fec5b208c\",\"itemId\":\"0d6d6bf7-4d3f-4e8c-8314-75e49b984f2a\",\"responsibleId\":\"409490d6-9a64-47d9-b153-98dbe71487ed\",\"responsible\":\"Ing. Gustavo Tolaba\",\"department\":\"Docentes\",\"costCenter\":\"Taller de Electromecánica\",\"quantity\":1,\"detail\":\"Práctica de soldadura\",\"createdAt\":\"2026-06-25T16:23:49.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"59f24eb4-744b-404e-bdb6-e9b30808dd8f\",\"itemId\":\"0ae4e306-9cf7-483c-85dc-3c21aa85c145\",\"responsibleId\":\"a5250563-39ef-47cc-a9d1-78f2222acc52\",\"responsible\":\"Facundo López\",\"department\":\"6° 2da\",\"costCenter\":\"Laboratorio de Química\",\"quantity\":4,\"detail\":\"Mantenimiento\",\"createdAt\":\"2026-06-24T15:35:45.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"d8a1ea98-9c64-4c5e-836d-0caa4cd2a157\",\"itemId\":\"b6cf1257-bdd4-498c-bcc4-b0235395b32e\",\"responsibleId\":\"cbb74765-ac7c-40f0-97c9-c1d79e5cd6e3\",\"responsible\":\"Martina Cruz\",\"department\":\"4° 1ra\",\"costCenter\":\"Laboratorio de Química\",\"quantity\":4,\"detail\":\"\",\"createdAt\":\"2026-06-22T14:48:36.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"b157ac6a-e3cb-4ede-9bf6-8a333c3ff992\",\"itemId\":\"66eaec4b-e38e-4138-a9b2-3189f586c6c3\",\"responsibleId\":\"d0236f0d-060a-41d3-be29-acf2d5c194bf\",\"responsible\":\"Catalina Torres\",\"department\":\"7° 2da\",\"costCenter\":\"Laboratorio de Química\",\"quantity\":2,\"detail\":\"Proyecto de 6° año\",\"createdAt\":\"2026-06-19T14:36:29.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"b0697e73-01b0-48eb-8f7f-8a31d46938e4\",\"itemId\":\"9e7ebc5d-2551-468c-8a3d-f6c84178b21e\",\"responsibleId\":\"b17615ce-f6c1-44ae-8d33-48144b7cbf63\",\"responsible\":\"Raúl Villca\",\"department\":\"Docentes\",\"costCenter\":\"Informática\",\"quantity\":2,\"detail\":\"\",\"createdAt\":\"2026-06-18T15:30:25.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"98310b76-1b02-4b52-9056-fe769dc5add1\",\"itemId\":\"630379b8-a4b6-40a3-ad90-c7fd93fcaaa0\",\"responsibleId\":\"bd0ed777-b313-468b-a012-8afbfb1fbb7f\",\"responsible\":\"Lautaro Gutiérrez\",\"department\":\"5° 2da\",\"costCenter\":\"Administración\",\"quantity\":1,\"detail\":\"Trabajo práctico\",\"createdAt\":\"2026-06-16T12:49:19.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"0dd8c17d-369c-45ca-9b6d-74f1dd10a1b6\",\"itemId\":\"66eaec4b-e38e-4138-a9b2-3189f586c6c3\",\"responsibleId\":\"df821936-b846-4003-8faf-5f383de07df4\",\"responsible\":\"Prof. Silvina Rueda\",\"department\":\"Docentes\",\"costCenter\":\"Informática\",\"quantity\":1,\"detail\":\"Mantenimiento\",\"createdAt\":\"2026-06-08T17:33:46.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"aa6d68ec-699b-4d4d-92f3-4d4ca49ffc74\",\"itemId\":\"e2e37655-8702-41ee-80e4-bea9141ef442\",\"responsibleId\":\"d44d980d-af89-491a-9d73-3aa27b690d86\",\"responsible\":\"Arq. Hernán Calizaya\",\"department\":\"Docentes\",\"costCenter\":\"Laboratorio de Química\",\"quantity\":3,\"detail\":\"Proyecto de 6° año\",\"createdAt\":\"2026-06-04T12:16:38.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"55212e97-ade3-407a-b5a5-58064ca1d922\",\"itemId\":\"630379b8-a4b6-40a3-ad90-c7fd93fcaaa0\",\"responsibleId\":\"a444a540-fb53-4feb-be06-1fa44460b021\",\"responsible\":\"Prof. Natalia Burgos\",\"department\":\"Docentes\",\"costCenter\":\"Administración\",\"quantity\":3,\"detail\":\"Trabajo práctico\",\"createdAt\":\"2026-05-26T17:20:12.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"221fb821-af66-466c-8b9c-05d72748d988\",\"itemId\":\"9e7ebc5d-2551-468c-8a3d-f6c84178b21e\",\"responsibleId\":\"10a18b3e-1713-4173-a545-0ae688741c11\",\"responsible\":\"Agustina Quispe\",\"department\":\"3° 2da\",\"costCenter\":\"Taller de Electromecánica\",\"quantity\":2,\"detail\":\"Trabajo práctico\",\"createdAt\":\"2026-05-25T18:27:06.000Z\",\"createdBy\":\"Jorge Medina\"}],\"orientations\":[{\"id\":\"f4829563-92da-40ce-a1d7-7ee891a3ba8f\",\"name\":\"Maestro Mayor de Obras\",\"description\":\"\",\"createdAt\":\"2026-05-15T18:03:21.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"c8f00543-79e9-46d9-876c-441eb307cd8c\",\"name\":\"Técnico en Informática\",\"description\":\"\",\"createdAt\":\"2026-05-15T18:05:20.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"06f7e992-517e-47ae-b343-2b1976a5840e\",\"name\":\"Técnico Químico\",\"description\":\"\",\"createdAt\":\"2026-05-15T11:16:19.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"987b2df8-ab61-4a9a-8266-e9da11d75001\",\"name\":\"Técnico Electromecánico\",\"description\":\"\",\"createdAt\":\"2026-05-15T18:21:18.000Z\",\"createdBy\":\"Administración Demo\"}],\"stockEntries\":[{\"id\":\"bc949a23-42c8-491d-b181-fa6f50deb26d\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"364241ce-3fda-4859-96b3-ddf5c5aa06dc\",\"itemName\":\"Calibre digital 150 mm\",\"quantity\":2,\"unitCost\":36800,\"totalCost\":73600,\"provider\":\"Distribuidora Técnica del Norte SA\",\"invoice\":\"A-0012-00031577\",\"observation\":\"Compra directa (demo)\",\"purchaseInvoiceId\":\"ec46bf9b-6d4d-4fb7-b516-4aeb1e0711b1\",\"supplierId\":\"1b7b05bb-3d0a-464a-baba-331186f99358\",\"createdAt\":\"2026-11-04T14:14:33.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"c8d7b072-4345-4f11-b4a6-86a1852d162a\",\"entryType\":\"donacion\",\"targetType\":\"existing\",\"itemId\":\"ecac3a0d-5516-4563-9edd-c89f18c51d5a\",\"itemName\":\"Taladro percutor 650 W\",\"quantity\":3,\"unitCost\":89000,\"totalCost\":267000,\"donor\":\"Cooperadora escolar\",\"observation\":\"Donación registrada para la demo\",\"createdAt\":\"2026-10-20T13:46:16.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"e3d1bf39-d287-45c7-8ec7-169c90623195\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"543fecf8-4eac-47ec-bebc-1e3d5aa60e9f\",\"itemName\":\"Destornillador plano 6 mm\",\"quantity\":6,\"unitCost\":4600,\"totalCost\":27600,\"provider\":\"Ferretería El Tornillo SRL\",\"invoice\":\"A-0003-00012390\",\"observation\":\"Compra directa (demo)\",\"purchaseInvoiceId\":\"8b0681ea-970e-4054-9e4d-6eba76b71dfe\",\"supplierId\":\"102baeb7-8cf9-4de3-aae4-ea93bafb14d0\",\"createdAt\":\"2026-10-12T14:23:32.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"8351efc4-8f25-4d4a-bb57-2844da26bc5a\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"d9e31c63-09ea-4be9-8e87-e1ad731cead4\",\"itemName\":\"Destornillador Phillips PH2\",\"quantity\":6,\"unitCost\":4700,\"totalCost\":28200,\"provider\":\"Ferretería El Tornillo SRL\",\"invoice\":\"A-0003-00012390\",\"observation\":\"Compra directa (demo)\",\"purchaseInvoiceId\":\"8b0681ea-970e-4054-9e4d-6eba76b71dfe\",\"supplierId\":\"102baeb7-8cf9-4de3-aae4-ea93bafb14d0\",\"createdAt\":\"2026-10-12T14:23:32.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"18cdc4cf-423b-4562-b893-a06a0700b875\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"b6cf1257-bdd4-498c-bcc4-b0235395b32e\",\"itemName\":\"Cinta aisladora\",\"quantity\":30,\"unitCost\":1050,\"totalCost\":31500,\"provider\":\"Ferretería El Tornillo SRL\",\"invoice\":\"A-0003-00012390\",\"observation\":\"Compra directa (demo)\",\"purchaseInvoiceId\":\"8b0681ea-970e-4054-9e4d-6eba76b71dfe\",\"supplierId\":\"102baeb7-8cf9-4de3-aae4-ea93bafb14d0\",\"createdAt\":\"2026-10-12T14:23:32.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"79dcca8a-5cfc-4435-8480-3d0beb0c876e\",\"entryType\":\"donacion\",\"targetType\":\"existing\",\"itemId\":\"2e2826c8-a6cf-4576-b1eb-c4cd9be7aa41\",\"itemName\":\"Pinza universal 8\\\"\",\"quantity\":5,\"unitCost\":9800,\"totalCost\":49000,\"donor\":\"Ex alumnos promoción 2015\",\"observation\":\"Donación registrada para la demo\",\"createdAt\":\"2026-09-30T13:43:17.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"4b5be933-f601-4f62-b051-15a2f49b8b36\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"a6c2d2bf-203d-4fd3-9ce6-d5ae2b93320d\",\"itemName\":\"Kit Arduino Uno\",\"quantity\":4,\"unitCost\":41000,\"totalCost\":164000,\"provider\":\"Electro Insumos Andinos\",\"invoice\":\"B-0002-00004518\",\"observation\":\"\",\"purchaseRequestId\":\"54c08537-56a3-434b-8744-af4d22c7b1d5\",\"confirmationId\":\"93e1152d-c272-47a9-818f-42d61c0fc4cf\",\"supplierId\":\"eaf704ff-5f03-4893-9a11-7e4ca58b3468\",\"createdAt\":\"2026-09-24T15:13:18.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"84f08fdc-8400-44ff-811b-e9493c16252b\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"2b46e15b-3563-45ed-abd6-79e521971769\",\"itemName\":\"Protoboard 830 puntos\",\"quantity\":10,\"unitCost\":6480,\"totalCost\":64800,\"provider\":\"Electro Insumos Andinos\",\"invoice\":\"B-0002-00004518\",\"observation\":\"\",\"purchaseRequestId\":\"54c08537-56a3-434b-8744-af4d22c7b1d5\",\"confirmationId\":\"93e1152d-c272-47a9-818f-42d61c0fc4cf\",\"supplierId\":\"eaf704ff-5f03-4893-9a11-7e4ca58b3468\",\"createdAt\":\"2026-09-24T15:13:18.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"c1f0395d-7088-4c0d-a154-4569bdd357bf\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"ecac3a0d-5516-4563-9edd-c89f18c51d5a\",\"itemName\":\"Taladro percutor 650 W\",\"quantity\":2,\"unitCost\":92500,\"totalCost\":185000,\"provider\":\"Distribuidora Técnica del Norte SA\",\"invoice\":\"A-0012-00031002\",\"observation\":\"Compra directa (demo)\",\"purchaseInvoiceId\":\"d111b168-de43-42c9-b9fe-e918420b6e3a\",\"supplierId\":\"1b7b05bb-3d0a-464a-baba-331186f99358\",\"createdAt\":\"2026-09-04T14:14:31.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"483726ab-5a54-4347-b062-d5b02e09467b\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"8d2466a8-de30-4ed8-afef-8cab0b67c703\",\"itemName\":\"Mecha HSS 6 mm\",\"quantity\":20,\"unitCost\":2100,\"totalCost\":42000,\"provider\":\"Distribuidora Técnica del Norte SA\",\"invoice\":\"A-0012-00031002\",\"observation\":\"Compra directa (demo)\",\"purchaseInvoiceId\":\"d111b168-de43-42c9-b9fe-e918420b6e3a\",\"supplierId\":\"1b7b05bb-3d0a-464a-baba-331186f99358\",\"createdAt\":\"2026-09-04T14:14:31.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"6929d2f8-e93a-4c75-af89-7983b8321fa0\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"66eaec4b-e38e-4138-a9b2-3189f586c6c3\",\"itemName\":\"Protector auditivo\",\"quantity\":8,\"unitCost\":6400,\"totalCost\":51200,\"provider\":\"Seguridad Industrial Puna\",\"invoice\":\"A-0001-00007781\",\"observation\":\"Compra directa (demo)\",\"purchaseInvoiceId\":\"9ee98077-31ed-49e6-aa6f-17101eac0db5\",\"supplierId\":\"d9aa6e30-80aa-45f7-8e76-a6ac350b04ec\",\"createdAt\":\"2026-08-10T14:42:30.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"c5b73e90-70c5-415f-b48d-cf6199e3f6cb\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"185a72a0-1201-4a15-a4a9-5cbf8b1ba1ee\",\"itemName\":\"Delantal de cuero\",\"quantity\":4,\"unitCost\":22800,\"totalCost\":91200,\"provider\":\"Seguridad Industrial Puna\",\"invoice\":\"A-0001-00007781\",\"observation\":\"Compra directa (demo)\",\"purchaseInvoiceId\":\"9ee98077-31ed-49e6-aa6f-17101eac0db5\",\"supplierId\":\"d9aa6e30-80aa-45f7-8e76-a6ac350b04ec\",\"createdAt\":\"2026-08-10T14:42:30.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"74482bbd-badb-4560-a72e-cf0061960ab9\",\"entryType\":\"donacion\",\"targetType\":\"existing\",\"itemId\":\"53409754-3d94-43cd-8ba0-a96b481b3b9b\",\"itemName\":\"Lija al agua grano 220\",\"quantity\":2,\"unitCost\":650,\"totalCost\":1300,\"donor\":\"Cooperadora escolar\",\"observation\":\"Donación registrada para la demo\",\"createdAt\":\"2026-07-30T13:46:14.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"a2f1292a-58a7-4efd-a208-f70739d33c74\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"e2e37655-8702-41ee-80e4-bea9141ef442\",\"itemName\":\"Disco de corte 115 mm\",\"quantity\":50,\"unitCost\":1425,\"totalCost\":71250,\"provider\":\"Ferretería El Tornillo SRL\",\"invoice\":\"A-0003-00012045\",\"observation\":\"\",\"purchaseRequestId\":\"1bdfb792-82ce-4e2d-b4f9-2c9c7a149e41\",\"confirmationId\":\"5a59911b-16d4-4aa7-b798-fa4d11e278da\",\"supplierId\":\"102baeb7-8cf9-4de3-aae4-ea93bafb14d0\",\"createdAt\":\"2026-07-24T15:08:12.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"0eee447e-0c93-4235-9148-2658542acc84\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"0d6d6bf7-4d3f-4e8c-8314-75e49b984f2a\",\"itemName\":\"Electrodo 2,5 mm (kg)\",\"quantity\":10,\"unitCost\":10200,\"totalCost\":102000,\"provider\":\"Ferretería El Tornillo SRL\",\"invoice\":\"A-0003-00012045\",\"observation\":\"\",\"purchaseRequestId\":\"1bdfb792-82ce-4e2d-b4f9-2c9c7a149e41\",\"confirmationId\":\"5a59911b-16d4-4aa7-b798-fa4d11e278da\",\"supplierId\":\"102baeb7-8cf9-4de3-aae4-ea93bafb14d0\",\"createdAt\":\"2026-07-24T15:08:12.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"7e637846-368b-4f5f-9944-1e8fdccb18c4\",\"entryType\":\"compra\",\"targetType\":\"existing\",\"itemId\":\"630379b8-a4b6-40a3-ad90-c7fd93fcaaa0\",\"itemName\":\"Guantes de descarne\",\"quantity\":12,\"unitCost\":5400,\"totalCost\":64800,\"provider\":\"Ferretería El Tornillo SRL\",\"invoice\":\"A-0003-00012045\",\"observation\":\"\",\"purchaseRequestId\":\"1bdfb792-82ce-4e2d-b4f9-2c9c7a149e41\",\"confirmationId\":\"5a59911b-16d4-4aa7-b798-fa4d11e278da\",\"supplierId\":\"102baeb7-8cf9-4de3-aae4-ea93bafb14d0\",\"createdAt\":\"2026-07-24T15:08:12.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"4d5d62dd-6d67-4177-bfc9-b19e7f149893\",\"entryType\":\"donacion\",\"targetType\":\"existing\",\"itemId\":\"f453d290-c2ad-407f-9403-f300c712ce4a\",\"itemName\":\"Soldadora inverter 200 A\",\"quantity\":5,\"unitCost\":265000,\"totalCost\":1325000,\"donor\":\"Empresa local (ficticia)\",\"observation\":\"Donación registrada para la demo\",\"createdAt\":\"2026-06-11T13:51:05.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"d00c3b50-8e6b-4966-ad1d-1f837656116f\",\"entryType\":\"donacion\",\"targetType\":\"existing\",\"itemId\":\"f453d290-c2ad-407f-9403-f300c712ce4a\",\"itemName\":\"Soldadora inverter 200 A\",\"quantity\":4,\"unitCost\":265000,\"totalCost\":1060000,\"donor\":\"Cooperadora escolar\",\"observation\":\"Donación registrada para la demo\",\"createdAt\":\"2026-05-27T13:13:15.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"02c8a88b-3cad-479c-983f-16ac35698424\",\"entryType\":\"donacion\",\"targetType\":\"existing\",\"itemId\":\"19df5914-0428-466d-83fd-54556df835b5\",\"itemName\":\"Proyector multimedia\",\"quantity\":2,\"unitCost\":410000,\"totalCost\":820000,\"donor\":\"Cooperadora escolar\",\"observation\":\"Donación registrada para la demo\",\"createdAt\":\"2026-05-25T13:48:07.000Z\",\"createdBy\":\"Jorge Medina\"}],\"purchaseRequests\":[{\"id\":\"f38e94ea-d8da-4a3b-a663-f1f9c1093caf\",\"items\":[{\"itemId\":\"7880b04e-32d7-4a59-bcc0-c29ba09ba1a2\",\"itemName\":\"Pinza amperométrica\",\"code\":\"IM-003\",\"subcode\":\"\",\"quantity\":2,\"currentStock\":7,\"stockMinimum\":2,\"amount\":61000},{\"itemId\":\"f453d290-c2ad-407f-9403-f300c712ce4a\",\"itemName\":\"Soldadora inverter 200 A\",\"code\":\"HE-004\",\"subcode\":\"\",\"quantity\":1,\"currentStock\":15,\"stockMinimum\":1,\"amount\":265000}],\"costCenter\":\"Laboratorio de Química\",\"observation\":\"Reposición de materiales en alerta de stock\",\"status\":\"pending_approval\",\"approval\":{\"steps\":[{\"key\":\"workshop\",\"label\":\"Jefe de taller\",\"status\":\"pending\",\"by\":\"\",\"byUsername\":\"\",\"at\":\"\",\"comment\":\"\"},{\"key\":\"rector\",\"label\":\"Rector\",\"status\":\"pending\",\"by\":\"\",\"byUsername\":\"\",\"at\":\"\",\"comment\":\"\"},{\"key\":\"accounting\",\"label\":\"Contable\",\"status\":\"pending\",\"by\":\"\",\"byUsername\":\"\",\"at\":\"\",\"comment\":\"\"}]},\"confirmations\":[],\"createdAt\":\"2026-11-12T13:37:29.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"1c526fc1-4f29-41cf-9e76-23e9b1f18c91\",\"items\":[{\"itemId\":\"0ae4e306-9cf7-483c-85dc-3c21aa85c145\",\"itemName\":\"Antiparras de seguridad\",\"code\":\"SG-001\",\"subcode\":\"\",\"quantity\":15,\"currentStock\":10,\"stockMinimum\":10,\"amount\":3900},{\"itemId\":\"9e7ebc5d-2551-468c-8a3d-f6c84178b21e\",\"itemName\":\"Careta de soldar fotosensible\",\"code\":\"SG-004\",\"subcode\":\"\",\"quantity\":2,\"currentStock\":4,\"stockMinimum\":2,\"amount\":47000},{\"itemId\":\"48c7902a-1604-4660-9a24-e4dbc9a398b6\",\"itemName\":\"Amoladora angular 115 mm\",\"code\":\"HE-002\",\"subcode\":\"\",\"quantity\":1,\"currentStock\":6,\"stockMinimum\":2,\"amount\":76500}],\"costCenter\":\"Laboratorio de Química\",\"observation\":\"Pedido para el taller de 4° año\",\"status\":\"pending_approval\",\"approval\":{\"steps\":[{\"key\":\"workshop\",\"label\":\"Jefe de taller\",\"status\":\"approved\",\"by\":\"Ricardo Sosa\",\"byUsername\":\"jefetaller\",\"at\":\"2026-11-10T12:53:28.000Z\",\"comment\":\"\"},{\"key\":\"rector\",\"label\":\"Rector\",\"status\":\"pending\",\"by\":\"\",\"byUsername\":\"\",\"at\":\"\",\"comment\":\"\"},{\"key\":\"accounting\",\"label\":\"Contable\",\"status\":\"pending\",\"by\":\"\",\"byUsername\":\"\",\"at\":\"\",\"comment\":\"\"}]},\"confirmations\":[],\"createdAt\":\"2026-11-09T13:48:27.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"e6bbe6d9-68c0-43a5-b0e1-8086523ad845\",\"items\":[{\"itemId\":\"19df5914-0428-466d-83fd-54556df835b5\",\"itemName\":\"Proyector multimedia\",\"code\":\"IN-002\",\"subcode\":\"\",\"quantity\":1,\"currentStock\":8,\"stockMinimum\":1,\"amount\":410000},{\"itemId\":\"f4d5951b-fa0f-4e43-a1bd-55d7306a5e33\",\"itemName\":\"Osciloscopio digital 2 canales\",\"code\":\"EL-005\",\"subcode\":\"\",\"quantity\":2,\"currentStock\":5,\"stockMinimum\":1,\"amount\":480000}],\"costCenter\":\"Laboratorio de Química\",\"observation\":\"Equipamiento para el laboratorio de electrónica\",\"status\":\"pending\",\"approval\":{\"steps\":[{\"key\":\"workshop\",\"label\":\"Jefe de taller\",\"status\":\"approved\",\"by\":\"Ricardo Sosa\",\"byUsername\":\"jefetaller\",\"at\":\"2026-11-07T12:19:24.000Z\",\"comment\":\"\"},{\"key\":\"rector\",\"label\":\"Rector\",\"status\":\"approved\",\"by\":\"María Fernández\",\"byUsername\":\"directora\",\"at\":\"2026-11-07T14:35:25.000Z\",\"comment\":\"\"},{\"key\":\"accounting\",\"label\":\"Contable\",\"status\":\"approved\",\"by\":\"Claudia Ibarra\",\"byUsername\":\"contable\",\"at\":\"2026-11-07T16:50:26.000Z\",\"comment\":\"\"}]},\"confirmations\":[],\"createdAt\":\"2026-11-05T13:54:23.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"cba293ab-c804-44b8-a790-1a53cb08717d\",\"items\":[{\"itemId\":\"f3f8bc96-1cca-4d2c-a67f-81af2a13f481\",\"itemName\":\"Juego de llaves combinadas 6-22 mm\",\"code\":\"HM-001\",\"subcode\":\"\",\"quantity\":4,\"currentStock\":7,\"stockMinimum\":2,\"amount\":38500},{\"itemId\":\"b848029a-3798-4ce4-b200-a15b2a66a477\",\"itemName\":\"Estaño 60/40 (rollo 250 g)\",\"code\":\"CO-004\",\"subcode\":\"\",\"quantity\":25,\"currentStock\":3,\"stockMinimum\":4,\"amount\":18500}],\"costCenter\":\"Construcciones\",\"observation\":\"Herramientas para el taller de 2° año\",\"status\":\"rejected\",\"approval\":{\"steps\":[{\"key\":\"workshop\",\"label\":\"Jefe de taller\",\"status\":\"approved\",\"by\":\"Ricardo Sosa\",\"byUsername\":\"jefetaller\",\"at\":\"2026-11-03T12:40:20.000Z\",\"comment\":\"\"},{\"key\":\"rector\",\"label\":\"Rector\",\"status\":\"approved\",\"by\":\"María Fernández\",\"byUsername\":\"directora\",\"at\":\"2026-11-03T14:32:21.000Z\",\"comment\":\"\"},{\"key\":\"accounting\",\"label\":\"Contable\",\"status\":\"rejected\",\"by\":\"Claudia Ibarra\",\"byUsername\":\"contable\",\"at\":\"2026-11-03T16:46:22.000Z\",\"comment\":\"Supera el presupuesto del centro de costos para este mes. Volver a pedir en diciembre.\"}]},\"confirmations\":[],\"createdAt\":\"2026-11-01T13:41:19.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"54c08537-56a3-434b-8744-af4d22c7b1d5\",\"items\":[{\"itemId\":\"a6c2d2bf-203d-4fd3-9ce6-d5ae2b93320d\",\"itemName\":\"Kit Arduino Uno\",\"code\":\"EL-004\",\"subcode\":\"\",\"quantity\":6,\"currentStock\":12,\"stockMinimum\":4,\"amount\":39000},{\"itemId\":\"2b46e15b-3563-45ed-abd6-79e521971769\",\"itemName\":\"Protoboard 830 puntos\",\"code\":\"EL-001\",\"subcode\":\"\",\"quantity\":10,\"currentStock\":20,\"stockMinimum\":6,\"amount\":6900},{\"itemId\":\"81ac2e15-8f46-4837-a01e-b9061189fa2f\",\"itemName\":\"Multímetro digital\",\"code\":\"IM-001\",\"subcode\":\"\",\"quantity\":4,\"currentStock\":16,\"stockMinimum\":4,\"amount\":28500}],\"costCenter\":\"Informática\",\"observation\":\"Laboratorio de electrónica · segundo cuatrimestre\",\"status\":\"partially_confirmed\",\"approval\":{\"steps\":[{\"key\":\"workshop\",\"label\":\"Jefe de taller\",\"status\":\"approved\",\"by\":\"Ricardo Sosa\",\"byUsername\":\"jefetaller\",\"at\":\"2026-09-16T12:44:14.000Z\",\"comment\":\"\"},{\"key\":\"rector\",\"label\":\"Rector\",\"status\":\"approved\",\"by\":\"María Fernández\",\"byUsername\":\"directora\",\"at\":\"2026-09-16T14:57:15.000Z\",\"comment\":\"\"},{\"key\":\"accounting\",\"label\":\"Contable\",\"status\":\"approved\",\"by\":\"Claudia Ibarra\",\"byUsername\":\"contable\",\"at\":\"2026-09-16T16:21:16.000Z\",\"comment\":\"\"}]},\"confirmations\":[{\"id\":\"93e1152d-c272-47a9-818f-42d61c0fc4cf\",\"number\":1,\"supplierId\":\"eaf704ff-5f03-4893-9a11-7e4ca58b3468\",\"supplierName\":\"Electro Insumos Andinos\",\"supplierCuit\":\"20-28000789-8\",\"invoice\":\"B-0002-00004518\",\"observation\":\"Confirmación de la demo\",\"lines\":[{\"itemId\":\"a6c2d2bf-203d-4fd3-9ce6-d5ae2b93320d\",\"itemName\":\"Kit Arduino Uno\",\"code\":\"EL-004\",\"subcode\":\"\",\"quantity\":6,\"unitCost\":41000,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":246000,\"discountAmount\":0,\"subtotal\":246000,\"netUnitCost\":41000,\"receivedQuantity\":4},{\"itemId\":\"2b46e15b-3563-45ed-abd6-79e521971769\",\"itemName\":\"Protoboard 830 puntos\",\"code\":\"EL-001\",\"subcode\":\"\",\"quantity\":10,\"unitCost\":7200,\"discountType\":\"percent\",\"discountValue\":10,\"gross\":72000,\"discountAmount\":7200,\"subtotal\":64800,\"netUnitCost\":6480,\"receivedQuantity\":10}],\"subtotal\":310800,\"withholdings\":0,\"invoiceTotal\":310800,\"totalWarning\":\"\",\"status\":\"partially_received\",\"createdAt\":\"2026-09-19T14:20:17.000Z\",\"createdBy\":\"Jorge Medina\"}],\"createdAt\":\"2026-09-14T13:28:13.000Z\",\"createdBy\":\"Jorge Medina\",\"provider\":\"Electro Insumos Andinos\",\"invoice\":\"B-0002-00004518\",\"fulfillment\":[{\"itemId\":\"a6c2d2bf-203d-4fd3-9ce6-d5ae2b93320d\",\"quantity\":4,\"totalCost\":164000,\"unitCost\":41000},{\"itemId\":\"2b46e15b-3563-45ed-abd6-79e521971769\",\"quantity\":10,\"totalCost\":64800,\"unitCost\":6480}]},{\"id\":\"1bdfb792-82ce-4e2d-b4f9-2c9c7a149e41\",\"items\":[{\"itemId\":\"e2e37655-8702-41ee-80e4-bea9141ef442\",\"itemName\":\"Disco de corte 115 mm\",\"code\":\"CO-001\",\"subcode\":\"\",\"quantity\":50,\"currentStock\":56,\"stockMinimum\":20,\"amount\":1450},{\"itemId\":\"0d6d6bf7-4d3f-4e8c-8314-75e49b984f2a\",\"itemName\":\"Electrodo 2,5 mm (kg)\",\"code\":\"CO-002\",\"subcode\":\"\",\"quantity\":10,\"currentStock\":12,\"stockMinimum\":8,\"amount\":9800},{\"itemId\":\"630379b8-a4b6-40a3-ad90-c7fd93fcaaa0\",\"itemName\":\"Guantes de descarne\",\"code\":\"SG-002\",\"subcode\":\"\",\"quantity\":12,\"currentStock\":15,\"stockMinimum\":10,\"amount\":5200}],\"costCenter\":\"Informática\",\"observation\":\"Reposición de insumos de soldadura\",\"status\":\"completed\",\"approval\":{\"steps\":[{\"key\":\"workshop\",\"label\":\"Jefe de taller\",\"status\":\"approved\",\"by\":\"Ricardo Sosa\",\"byUsername\":\"jefetaller\",\"at\":\"2026-07-17T12:39:08.000Z\",\"comment\":\"\"},{\"key\":\"rector\",\"label\":\"Rector\",\"status\":\"approved\",\"by\":\"María Fernández\",\"byUsername\":\"directora\",\"at\":\"2026-07-17T14:25:09.000Z\",\"comment\":\"\"},{\"key\":\"accounting\",\"label\":\"Contable\",\"status\":\"approved\",\"by\":\"Claudia Ibarra\",\"byUsername\":\"contable\",\"at\":\"2026-07-17T16:12:10.000Z\",\"comment\":\"\"}]},\"confirmations\":[{\"id\":\"5a59911b-16d4-4aa7-b798-fa4d11e278da\",\"number\":1,\"supplierId\":\"102baeb7-8cf9-4de3-aae4-ea93bafb14d0\",\"supplierName\":\"Ferretería El Tornillo SRL\",\"supplierCuit\":\"30-71000123-1\",\"invoice\":\"A-0003-00012045\",\"observation\":\"Confirmación de la demo\",\"lines\":[{\"itemId\":\"e2e37655-8702-41ee-80e4-bea9141ef442\",\"itemName\":\"Disco de corte 115 mm\",\"code\":\"CO-001\",\"subcode\":\"\",\"quantity\":50,\"unitCost\":1500,\"discountType\":\"percent\",\"discountValue\":5,\"gross\":75000,\"discountAmount\":3750,\"subtotal\":71250,\"netUnitCost\":1425,\"receivedQuantity\":50},{\"itemId\":\"0d6d6bf7-4d3f-4e8c-8314-75e49b984f2a\",\"itemName\":\"Electrodo 2,5 mm (kg)\",\"code\":\"CO-002\",\"subcode\":\"\",\"quantity\":10,\"unitCost\":10200,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":102000,\"discountAmount\":0,\"subtotal\":102000,\"netUnitCost\":10200,\"receivedQuantity\":10},{\"itemId\":\"630379b8-a4b6-40a3-ad90-c7fd93fcaaa0\",\"itemName\":\"Guantes de descarne\",\"code\":\"SG-002\",\"subcode\":\"\",\"quantity\":12,\"unitCost\":5400,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":64800,\"discountAmount\":0,\"subtotal\":64800,\"netUnitCost\":5400,\"receivedQuantity\":12}],\"subtotal\":238050,\"withholdings\":0,\"invoiceTotal\":238050,\"totalWarning\":\"\",\"status\":\"received\",\"createdAt\":\"2026-07-19T14:53:11.000Z\",\"createdBy\":\"Jorge Medina\"}],\"createdAt\":\"2026-07-16T13:08:07.000Z\",\"createdBy\":\"Jorge Medina\",\"provider\":\"Ferretería El Tornillo SRL\",\"invoice\":\"A-0003-00012045\",\"fulfillment\":[{\"itemId\":\"e2e37655-8702-41ee-80e4-bea9141ef442\",\"quantity\":50,\"totalCost\":71250,\"unitCost\":1425},{\"itemId\":\"0d6d6bf7-4d3f-4e8c-8314-75e49b984f2a\",\"quantity\":10,\"totalCost\":102000,\"unitCost\":10200},{\"itemId\":\"630379b8-a4b6-40a3-ad90-c7fd93fcaaa0\",\"quantity\":12,\"totalCost\":64800,\"unitCost\":5400}],\"fulfilledAt\":\"2026-11-13T11:22:49.981Z\",\"fulfilledBy\":\"Jorge Medina\"}],\"costCenters\":[{\"id\":\"566f254f-460d-4005-b817-a6a7f34a6e9f\",\"name\":\"Administración\",\"description\":\"Gastos generales\",\"createdAt\":\"2026-05-15T15:42:17.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"7190caa4-126c-484d-bf7d-185ce1f6f198\",\"name\":\"Construcciones\",\"description\":\"Maestro Mayor de Obras\",\"createdAt\":\"2026-05-15T13:12:16.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"724bf94d-6996-41e6-ac77-ab841a26b2ec\",\"name\":\"Informática\",\"description\":\"Sala de computación\",\"createdAt\":\"2026-05-15T19:51:15.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"a8423a78-a2bb-4569-b729-9891da149a72\",\"name\":\"Laboratorio de Química\",\"description\":\"Prácticas de laboratorio\",\"createdAt\":\"2026-05-15T18:06:14.000Z\",\"createdBy\":\"Administración Demo\"},{\"id\":\"2eb18bb3-30cb-4138-aa4a-b696d7a41f88\",\"name\":\"Taller de Electromecánica\",\"description\":\"Prácticas de taller\",\"createdAt\":\"2026-05-15T11:24:13.000Z\",\"createdBy\":\"Administración Demo\"}],\"suppliers\":[{\"id\":\"d9aa6e30-80aa-45f7-8e76-a6ac350b04ec\",\"name\":\"Seguridad Industrial Puna\",\"cuit\":\"30-71000999-2\",\"taxCondition\":\"Responsable Inscripto\",\"address\":\"San Salvador de Jujuy (dirección ficticia)\",\"phone\":\"388 400-4004\",\"email\":\"contacto@segpuna.demo\",\"contact\":\"Paula Ríos\",\"notes\":\"Proveedor ficticio para la demo.\",\"createdAt\":\"2026-11-13T11:22:46.054Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"eaf704ff-5f03-4893-9a11-7e4ca58b3468\",\"name\":\"Electro Insumos Andinos\",\"cuit\":\"20-28000789-8\",\"taxCondition\":\"Monotributista\",\"address\":\"San Salvador de Jujuy (dirección ficticia)\",\"phone\":\"388 400-3003\",\"email\":\"info@electroandinos.demo\",\"contact\":\"Diego Sosa\",\"notes\":\"Proveedor ficticio para la demo.\",\"createdAt\":\"2026-11-13T11:22:46.050Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"1b7b05bb-3d0a-464a-baba-331186f99358\",\"name\":\"Distribuidora Técnica del Norte SA\",\"cuit\":\"30-71000456-7\",\"taxCondition\":\"Responsable Inscripto\",\"address\":\"San Salvador de Jujuy (dirección ficticia)\",\"phone\":\"388 400-2002\",\"email\":\"pedidos@dtnorte.demo\",\"contact\":\"Martín Ibarra\",\"notes\":\"Proveedor ficticio para la demo.\",\"createdAt\":\"2026-11-13T11:22:46.045Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"102baeb7-8cf9-4de3-aae4-ea93bafb14d0\",\"name\":\"Ferretería El Tornillo SRL\",\"cuit\":\"30-71000123-1\",\"taxCondition\":\"Responsable Inscripto\",\"address\":\"San Salvador de Jujuy (dirección ficticia)\",\"phone\":\"388 400-1001\",\"email\":\"ventas@eltornillo.demo\",\"contact\":\"Carina Vega\",\"notes\":\"Proveedor ficticio para la demo.\",\"createdAt\":\"2026-11-13T11:22:46.040Z\",\"createdBy\":\"Jorge Medina\"}],\"purchaseInvoices\":[{\"id\":\"ec46bf9b-6d4d-4fb7-b516-4aeb1e0711b1\",\"number\":4,\"supplierId\":\"1b7b05bb-3d0a-464a-baba-331186f99358\",\"supplierName\":\"Distribuidora Técnica del Norte SA\",\"supplierCuit\":\"30-71000456-7\",\"invoice\":\"A-0012-00031577\",\"invoiceDate\":\"2026-11-03\",\"observation\":\"Compra directa (demo)\",\"lines\":[{\"itemId\":\"364241ce-3fda-4859-96b3-ddf5c5aa06dc\",\"itemName\":\"Calibre digital 150 mm\",\"code\":\"IM-002\",\"subcode\":\"\",\"quantity\":2,\"unitCost\":36800,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":73600,\"discountAmount\":0,\"subtotal\":73600,\"netUnitCost\":36800}],\"subtotal\":73600,\"withholdings\":0,\"invoiceTotal\":73600,\"totalWarning\":\"\",\"createdAt\":\"2026-11-04T14:14:33.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"8b0681ea-970e-4054-9e4d-6eba76b71dfe\",\"number\":3,\"supplierId\":\"102baeb7-8cf9-4de3-aae4-ea93bafb14d0\",\"supplierName\":\"Ferretería El Tornillo SRL\",\"supplierCuit\":\"30-71000123-1\",\"invoice\":\"A-0003-00012390\",\"invoiceDate\":\"2026-10-11\",\"observation\":\"Compra directa (demo)\",\"lines\":[{\"itemId\":\"543fecf8-4eac-47ec-bebc-1e3d5aa60e9f\",\"itemName\":\"Destornillador plano 6 mm\",\"code\":\"HM-002\",\"subcode\":\"\",\"quantity\":6,\"unitCost\":4600,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":27600,\"discountAmount\":0,\"subtotal\":27600,\"netUnitCost\":4600},{\"itemId\":\"d9e31c63-09ea-4be9-8e87-e1ad731cead4\",\"itemName\":\"Destornillador Phillips PH2\",\"code\":\"HM-003\",\"subcode\":\"\",\"quantity\":6,\"unitCost\":4700,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":28200,\"discountAmount\":0,\"subtotal\":28200,\"netUnitCost\":4700},{\"itemId\":\"b6cf1257-bdd4-498c-bcc4-b0235395b32e\",\"itemName\":\"Cinta aisladora\",\"code\":\"CO-003\",\"subcode\":\"\",\"quantity\":30,\"unitCost\":1050,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":31500,\"discountAmount\":0,\"subtotal\":31500,\"netUnitCost\":1050}],\"subtotal\":87300,\"withholdings\":0,\"invoiceTotal\":87300,\"totalWarning\":\"\",\"createdAt\":\"2026-10-12T14:23:32.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"d111b168-de43-42c9-b9fe-e918420b6e3a\",\"number\":2,\"supplierId\":\"1b7b05bb-3d0a-464a-baba-331186f99358\",\"supplierName\":\"Distribuidora Técnica del Norte SA\",\"supplierCuit\":\"30-71000456-7\",\"invoice\":\"A-0012-00031002\",\"invoiceDate\":\"2026-09-03\",\"observation\":\"Compra directa (demo)\",\"lines\":[{\"itemId\":\"ecac3a0d-5516-4563-9edd-c89f18c51d5a\",\"itemName\":\"Taladro percutor 650 W\",\"code\":\"HE-001\",\"subcode\":\"\",\"quantity\":2,\"unitCost\":92500,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":185000,\"discountAmount\":0,\"subtotal\":185000,\"netUnitCost\":92500},{\"itemId\":\"8d2466a8-de30-4ed8-afef-8cab0b67c703\",\"itemName\":\"Mecha HSS 6 mm\",\"code\":\"CO-006\",\"subcode\":\"\",\"quantity\":20,\"unitCost\":2100,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":42000,\"discountAmount\":0,\"subtotal\":42000,\"netUnitCost\":2100}],\"subtotal\":227000,\"withholdings\":0,\"invoiceTotal\":227000,\"totalWarning\":\"\",\"createdAt\":\"2026-09-04T14:14:31.000Z\",\"createdBy\":\"Jorge Medina\"},{\"id\":\"9ee98077-31ed-49e6-aa6f-17101eac0db5\",\"number\":1,\"supplierId\":\"d9aa6e30-80aa-45f7-8e76-a6ac350b04ec\",\"supplierName\":\"Seguridad Industrial Puna\",\"supplierCuit\":\"30-71000999-2\",\"invoice\":\"A-0001-00007781\",\"invoiceDate\":\"2026-08-09\",\"observation\":\"Compra directa (demo)\",\"lines\":[{\"itemId\":\"66eaec4b-e38e-4138-a9b2-3189f586c6c3\",\"itemName\":\"Protector auditivo\",\"code\":\"SG-003\",\"subcode\":\"\",\"quantity\":8,\"unitCost\":6400,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":51200,\"discountAmount\":0,\"subtotal\":51200,\"netUnitCost\":6400},{\"itemId\":\"185a72a0-1201-4a15-a4a9-5cbf8b1ba1ee\",\"itemName\":\"Delantal de cuero\",\"code\":\"SG-005\",\"subcode\":\"\",\"quantity\":4,\"unitCost\":22800,\"discountType\":\"percent\",\"discountValue\":0,\"gross\":91200,\"discountAmount\":0,\"subtotal\":91200,\"netUnitCost\":22800}],\"subtotal\":142400,\"withholdings\":0,\"invoiceTotal\":142400,\"totalWarning\":\"\",\"createdAt\":\"2026-08-10T14:42:30.000Z\",\"createdBy\":\"Jorge Medina\"}],\"rolePermissions\":[]},\"users\":[{\"id\":\"1c1b46ce-cb94-461b-aca2-3fdefd951a0d\",\"username\":\"admin\",\"name\":\"Administración Demo\",\"role\":\"admin\",\"password\":\"demo$demo2026\",\"mustChangePassword\":false},{\"id\":\"9a6184fa-95fa-45d4-bef2-e14b755a09ce\",\"username\":\"directora\",\"name\":\"María Fernández\",\"role\":\"directivo\",\"password\":\"demo$demo2026\",\"mustChangePassword\":false},{\"id\":\"90e88df9-15a4-450e-a595-83b1bc41e7f2\",\"username\":\"jefetaller\",\"name\":\"Ricardo Sosa\",\"role\":\"jefe_taller\",\"password\":\"demo$demo2026\",\"mustChangePassword\":false},{\"id\":\"63b84925-01a0-4fd3-8089-2eb527be7d6f\",\"username\":\"contable\",\"name\":\"Claudia Ibarra\",\"role\":\"contable\",\"password\":\"demo$demo2026\",\"mustChangePassword\":false},{\"id\":\"f8e25dd2-3618-45ba-b28c-6e7fe4152e53\",\"username\":\"panolero\",\"name\":\"Jorge Medina\",\"role\":\"panolero\",\"password\":\"demo$demo2026\",\"mustChangePassword\":false},{\"id\":\"068fba39-d273-4d04-8764-a67958109bda\",\"username\":\"docente\",\"name\":\"Lucía Romero\",\"role\":\"docente\",\"password\":\"demo$demo2026\",\"mustChangePassword\":false},{\"id\":\"977cfd38-124a-4256-8099-f185b535b2cc\",\"username\":\"administrativo\",\"name\":\"Sergio Paz\",\"role\":\"administrativo\",\"password\":\"demo$demo2026\",\"mustChangePassword\":false}]}" };

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
];

// Tablas agregadas por migraciones posteriores: si todavía no existen, se leen vacías,
// y al guardar se avisa en lugar de perder datos en silencio.
const MIGRATION_SUPPLIERS = "2026-11-03-proveedores.sql";
const MIGRATION_INVOICES = "2026-11-03-facturas.sql";
const MIGRATION_PERMISSIONS = "2026-11-03-permisos.sql";
const MIGRATION_INVOICE_DATE = "2026-11-03-fecha-factura.sql";
const MIGRATION_APPROVALS = "2026-11-13-aprobaciones.sql";
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
  { key: "loans.create", group: "Préstamos", label: "Registrar préstamos", defaults: ["panolero", "docente", "jefe_taller"] },
  { key: "consumptions.create", group: "Préstamos", label: "Registrar consumos", defaults: ["panolero", "docente", "jefe_taller"] },
  { key: "loans.return", group: "Préstamos", label: "Registrar devoluciones", defaults: ["panolero"] },
  { key: "stock.entries", group: "Inventario", label: "Ingresos al inventario (donación o compra)", defaults: ["panolero"] },
  { key: "items.manage", group: "Inventario", label: "Alta, edición y baja de materiales", defaults: ["panolero"] },
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
// "at": fecha de cada firma de aprobación de los pedidos de compra.
const DATE_TIME_KEYS = new Set(["createdAt", "updatedAt", "fulfilledAt", "lastPurchaseAt", "passwordChangedAt", "at"]);
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
  "src/services/dashboard.js": [{"../auth/permissions":"src/auth/permissions.js","../data/store":"src/data/store.js","../auth/sessions":"src/auth/sessions.js","./users":"src/services/users.js","./responsibles":"src/services/responsibles.js","./validation":"src/services/validation.js","./loanStats":"src/services/loanStats.js","./purchases":"src/services/purchases.js"}, function (require, module, exports, __dirname, __filename) {
const { hasPermission, permissionMatrix, rolePermissions } = require("../auth/permissions");
const { readUsers } = require("../data/store");
const { publicSession } = require("../auth/sessions");
const { sanitizeUser } = require("./users");
const { sanitizeResponsible } = require("./responsibles");
const { startOfToday } = require("./validation");
const { buildLoanStats } = require("./loanStats");
const { approvalState } = require("./purchases");

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
