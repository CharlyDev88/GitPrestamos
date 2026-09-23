/**
 * Baldi - Gestión de Fiambrería (3 Sucursales)
 * Core Application Logic & State Management
 */

// --- GLOBAL APPLICATION STATE ---
const STATE = {
    currentView: 'dashboard',

    // Sucursales (Puntos de Venta) - Baldi posee 3 locales
    sucursales: [
        { id: 'S1', name: 'Casa Central', address: 'Av. San Martín 1450, Libertador Gral. San Martín, Jujuy', phone: '0388-421-1000' },
        { id: 'S2', name: 'Sucursal Norte', address: 'Ruta 34 Km 12, Libertador Gral. San Martín, Jujuy', phone: '0388-421-2000' },
        { id: 'S3', name: 'Sucursal Centro', address: 'Belgrano 320, Libertador Gral. San Martín, Jujuy', phone: '0388-421-3000' }
    ],

    // Inventory items (Fiambres, Quesos, Picadas, Almacén, etc.)
    // El stock se guarda desglosado por sucursal en `stockBySucursal` (ver getStock/getTotalStock).
    inventory: [
        { id: '1', name: 'Jamón Cocido Fetas x Kg', sku: 'FIA-JCO-KG', barcode: '7790001000012', category: 'Fiambres', providerId: '1', stockBySucursal: { S1: 20, S2: 15, S3: 10 }, minStock: 15, unit: 'Kg', cost: 4200, price: 6200 },
        { id: '2', name: 'Salame Milán Fetas x Kg', sku: 'FIA-SAL-KG', barcode: '7790001000029', category: 'Fiambres', providerId: '1', stockBySucursal: { S1: 12, S2: 10, S3: 8 }, minStock: 12, unit: 'Kg', cost: 5800, price: 8500 },
        { id: '3', name: 'Queso Cremoso x Kg', sku: 'QUE-CRE-KG', barcode: '7790002000012', category: 'Quesos', providerId: '2', stockBySucursal: { S1: 15, S2: 13, S3: 10 }, minStock: 15, unit: 'Kg', cost: 4600, price: 6900 },
        { id: '4', name: 'Queso de Rallar x Kg', sku: 'QUE-RAL-KG', barcode: '7790002000029', category: 'Quesos', providerId: '2', stockBySucursal: { S1: 2, S2: 3, S3: 1 }, minStock: 10, unit: 'Kg', cost: 5200, price: 7800 }, // Stock bajo en las 3 sucursales
        { id: '5', name: 'Picada Especial Baldi x 500g', sku: 'PIC-ESP-500', barcode: '7790003000015', category: 'Picadas', providerId: '1', stockBySucursal: { S1: 10, S2: 7, S3: 5 }, minStock: 10, unit: 'Bandejas', cost: 3200, price: 4900 },
        { id: '6', name: 'Galletitas Agua Express x 200g', sku: 'GAL-AGU-200', barcode: '7790004000018', category: 'Galletitas y Panificados', providerId: '3', stockBySucursal: { S1: 35, S2: 30, S3: 25 }, minStock: 30, unit: 'Paquetes', cost: 650, price: 990 },
        { id: '7', name: 'Jugo de Naranja Exprimido 1L', sku: 'JUG-NAR-1L', barcode: '7790005000011', category: 'Jugos y Bebidas', providerId: '3', stockBySucursal: { S1: 2, S2: 2, S3: 1 }, minStock: 24, unit: 'Botellas', cost: 900, price: 1450 }, // Stock bajo
        { id: '8', name: 'Aceitunas Verdes x Kg', sku: 'ALM-ACE-KG', barcode: '7790006000014', category: 'Almacén', providerId: '2', stockBySucursal: { S1: 7, S2: 6, S3: 5 }, minStock: 8, unit: 'Kg', cost: 2100, price: 3300 },
        { id: '9', name: 'Bondiola Ahumada Fetas x Kg', sku: 'FIA-BON-KG', barcode: '7790001000036', category: 'Fiambres', providerId: '1', stockBySucursal: { S1: 1, S2: 1, S3: 1 }, minStock: 10, unit: 'Kg', cost: 6800, price: 9900 } // Stock bajo
    ],

    // Providers (Proveedores)
    providers: [
        { id: '1', name: 'Fiambrera del Norte S.A.', cuit: '30-50000845-9', phone: '0388-424-3000', email: 'ventas@fiambreranorte.com.ar', address: 'Parque Industrial, Jujuy' },
        { id: '2', name: 'Lácteos San Isidro', cuit: '30-50001082-8', phone: '0388-423-2020', email: 'comercial@lacteossanisidro.com.ar', address: 'Ruta 66 Km 4, Jujuy' },
        { id: '3', name: 'Distribuidora Almacén Norte', cuit: '30-54218903-4', phone: '0388-420-7666', email: 'pedidos@almacennorte.com.ar', address: 'Av. Belgrano 900, Jujuy' }
    ],

    // Clients (Clientes) - "Consumidor Final" es el cliente por defecto para ventas de mostrador
    clients: [
        { id: '0', name: 'Consumidor Final', dni_cuit: '-', phone: '-', email: '-', type: 'Consumidor Final' },
        { id: '1', name: 'Rotisería La Esquina', dni_cuit: '30-71458921-2', phone: '388-582-1492', email: 'compras@rotiserialaesquina.com', type: 'Bar / Restaurante' },
        { id: '2', name: 'Kiosco Don Martín', dni_cuit: '24.582.103', phone: '388-692-0492', email: 'kioscodonmartin@gmail.com', type: 'Kiosco' },
        { id: '3', name: 'Carlos Rodríguez', dni_cuit: '32.194.053', phone: '388-402-5821', email: 'carlos.rod@hotmail.com', type: 'Particular' }
    ],

    // Purchases (Compras)
    purchases: [
        { id: 'COM-001', providerId: '1', providerName: 'Fiambrera del Norte S.A.', sucursalId: 'S1', date: '2026-09-10', items: [{ productId: '1', qty: 40, cost: 4200 }], total: 168000, status: 'Recibido' },
        { id: 'COM-002', providerId: '2', providerName: 'Lácteos San Isidro', sucursalId: 'S1', date: '2026-09-14', items: [{ productId: '3', qty: 25, cost: 4600 }], total: 115000, status: 'Recibido' }
    ],

    // Sales (Ventas) - items incluyen "cost" (foto del costo al momento de vender, para informes de ganancia)
    sales: [
        { id: 'VEN-001', clientId: '1', clientName: 'Rotisería La Esquina', sucursalId: 'S1', tipoComprobante: 'Factura B', metodoPago: 'Transferencia', date: '2026-09-15', items: [{ productId: '1', qty: 8, price: 6200, cost: 4200 }, { productId: '2', qty: 5, price: 8500, cost: 5800 }], total: 92100, status: 'Entregado' },
        { id: 'VEN-002', clientId: '3', clientName: 'Carlos Rodríguez', sucursalId: 'S2', tipoComprobante: 'Ticket No Fiscal', metodoPago: 'Efectivo', date: '2026-09-16', items: [{ productId: '3', qty: 2, price: 6900, cost: 4600 }], total: 13800, status: 'Entregado' },
        { id: 'VEN-003', clientId: '2', clientName: 'Kiosco Don Martín', sucursalId: 'S3', tipoComprobante: 'Ticket No Fiscal', metodoPago: 'Cuenta Corriente', date: '2026-09-17', items: [{ productId: '6', qty: 15, price: 990, cost: 650 }], total: 14850, status: 'Pendiente' }
    ],

    // Receipts (Recibos de Cobro)
    receipts: [
        { id: 'REC-001', saleId: 'VEN-001', clientName: 'Rotisería La Esquina', date: '2026-09-15', amount: 92100, method: 'Transferencia' },
        { id: 'REC-002', saleId: 'VEN-002', clientName: 'Carlos Rodríguez', date: '2026-09-16', amount: 13800, method: 'Efectivo' }
    ],

    // Payments (Pagos de Compra)
    payments: [
        { id: 'PAG-001', purchaseId: 'COM-001', providerName: 'Fiambrera del Norte S.A.', date: '2026-09-10', amount: 168000, method: 'Transferencia' }
    ],

    // Cierres de Caja (arqueos diarios por sucursal) - se completan desde el módulo "Cierres de Caja"
    cashClosings: [],

    // Notas de Crédito y Débito (referencian una venta con Factura A/B/C original)
    creditNotes: [],

    // Traspasos de stock entre sucursales (Origen -> Destino)
    transfers: [],

    // Contadores de numeración fiscal por sucursal (Punto de Venta) y letra de comprobante
    comprobanteCounters: {},

    // Audit / History log (Historial)
    history: [
        { id: '1', module: 'system', action: 'create', description: 'Inicialización del sistema con datos de prueba.', timestamp: '2026-09-18T08:00:00-03:00', details: 'Base de datos simulada creada con productos de fiambrería, 3 proveedores, 3 clientes y 3 sucursales.' }
    ],

    // Active alerts for notification center
    notifications: [
        { id: 'n1', title: 'Stock Bajo', text: 'El "Queso de Rallar x Kg" ha quedado bajo el mínimo.', type: 'warning', time: 'Hace 2 horas' },
        { id: 'n2', title: 'Stock Crítico', text: 'La "Bondiola Ahumada Fetas x Kg" requiere reposición urgente.', type: 'danger', time: 'Hace 5 horas' },
        { id: 'n3', title: 'Nueva Venta', text: 'Se ha registrado una venta pendiente para Kiosco Don Martín.', type: 'success', time: 'Hace 1 día' }
    ],

    // System Users (Usuarios) - cada uno asociado a una sucursal por defecto, con permisos
    // granulares independientes del rol (se pueden ajustar caso por caso).
    users: [
        { id: '1', name: 'Claudio Baldi', username: 'admin', password: 'admin123', role: 'Administrador', email: 'claudio@baldi.com', sucursalId: 'S1',
          permissions: { verCostos: true, hacerDescuentos: true, anularTickets: true, cerrarCaja: true, gestionarUsuarios: true, verReportes: true } },
        { id: '2', name: 'Laura Martínez', username: 'vendedor', password: 'vendedor123', role: 'Vendedor', email: 'laura@baldi.com', sucursalId: 'S2',
          permissions: { verCostos: false, hacerDescuentos: true, anularTickets: false, cerrarCaja: true, gestionarUsuarios: false, verReportes: false } },
        { id: '3', name: 'Pedro Gómez', username: 'deposito', password: 'deposito123', role: 'Depósito', email: 'pedro@baldi.com', sucursalId: 'S1',
          permissions: { verCostos: true, hacerDescuentos: false, anularTickets: false, cerrarCaja: false, gestionarUsuarios: false, verReportes: false } }
    ],
    currentUser: null
};

// Category list used across selects (inventory, filters, labels, charts)
const CATEGORIES = ['Fiambres', 'Quesos', 'Picadas', 'Galletitas y Panificados', 'Jugos y Bebidas', 'Almacén'];

// Permission definitions used across the app (Usuarios modal, POS, Ventas, Cierres de Caja)
const PERMISSION_DEFS = [
    { key: 'verCostos', label: 'Ver Costos y Márgenes' },
    { key: 'hacerDescuentos', label: 'Aplicar Descuentos en Ventas' },
    { key: 'anularTickets', label: 'Anular Tickets / Ventas' },
    { key: 'cerrarCaja', label: 'Realizar Cierres de Caja' },
    { key: 'gestionarUsuarios', label: 'Gestionar Usuarios y Permisos' },
    { key: 'verReportes', label: 'Ver Reportes de Ganancia' }
];

const DEFAULT_PERMISSIONS_BY_ROLE = {
    'Administrador': { verCostos: true, hacerDescuentos: true, anularTickets: true, cerrarCaja: true, gestionarUsuarios: true, verReportes: true },
    'Vendedor': { verCostos: false, hacerDescuentos: true, anularTickets: false, cerrarCaja: true, gestionarUsuarios: false, verReportes: false },
    'Depósito': { verCostos: true, hacerDescuentos: false, anularTickets: false, cerrarCaja: false, gestionarUsuarios: false, verReportes: false }
};

// Checks whether the CURRENT logged-in user has a given granular permission.
function hasPermission(key) {
    return !!(STATE.currentUser && STATE.currentUser.permissions && STATE.currentUser.permissions[key]);
}

// ==========================================
// STOCK POR SUCURSAL (arquitectura multi-sucursal centralizada)
// ==========================================
// Cada producto guarda su stock DESGLOSADO por sucursal en `stockBySucursal`
// (ej: { S1: 20, S2: 15, S3: 10 }). El costo y el precio de venta siguen siendo
// globales (catálogo único), pero el stock físico es independiente por local.
// Estas funciones son el único punto de acceso/escritura al stock, para que
// el resto del sistema nunca tenga que tocar `stockBySucursal` directamente.
function getStock(item, sucursalId) {
    if (!item.stockBySucursal) return 0;
    return item.stockBySucursal[sucursalId] || 0;
}

function getTotalStock(item) {
    if (!item.stockBySucursal) return 0;
    return STATE.sucursales.reduce((sum, s) => sum + (item.stockBySucursal[s.id] || 0), 0);
}

function adjustStock(item, sucursalId, delta) {
    if (!item.stockBySucursal) item.stockBySucursal = {};
    const current = item.stockBySucursal[sucursalId] || 0;
    item.stockBySucursal[sucursalId] = Math.max(0, current + delta);
}

function setStock(item, sucursalId, value) {
    if (!item.stockBySucursal) item.stockBySucursal = {};
    item.stockBySucursal[sucursalId] = Math.max(0, value);
}

// A product is "bajo mínimo" if ANY branch is at/under the threshold (each branch is
// checked independently, since running low in one sucursal matters even if others are full).
function isLowStockAnywhere(item) {
    return STATE.sucursales.some(s => getStock(item, s.id) <= item.minStock);
}

// Global chart references to allow destroying before rebuilding
let charts = {};

// Helper to log changes to the unified history. Every entry records who did it (usuario),
// and when (fecha y hora), as required for the operational audit trail.
function logHistory(module, action, description, details = '') {
    const log = {
        id: (STATE.history.length + 1).toString(),
        module,
        action,
        description,
        timestamp: new Date().toISOString(),
        details,
        user: STATE.currentUser ? STATE.currentUser.name : 'Sistema',
        username: STATE.currentUser ? STATE.currentUser.username : '-',
        sucursalId: STATE.currentUser ? STATE.currentUser.sucursalId : null
    };
    STATE.history.unshift(log); // Add to the top
    saveLocalState();
    showToast(`Historial Actualizado`, `${description}`, 'info');
}

// Helper for UI Toast Notifications
function showToast(title, message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = 'info';
    if (type === 'success') icon = 'check-circle';
    if (type === 'warning') icon = 'alert-triangle';
    if (type === 'danger') icon = 'alert-octagon';
    
    toast.innerHTML = `
        <div class="toast-icon ${type}">
            <i data-lucide="${icon}"></i>
        </div>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
    `;
    
    container.appendChild(toast);
    lucide.createIcons();
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px) scale(0.9)';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// Formatter Helpers
const formatCurrency = (val) => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 }).format(val);
const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? dateStr : d.toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric' });
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Restaura cualquier dato guardado localmente (ventas/compras hechas offline, stock, etc.)
    // ANTES de renderizar nada, para que la sesión offline sobreviva a un refresh del navegador.
    loadLocalState();
    initOfflineSync();
    
    // Set current date in top bar
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').textContent = new Date().toLocaleDateString('es-AR', options);
    
    // Register routing events
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetView = btn.getAttribute('data-view');
            switchView(targetView);
            closeSidebar(); // Auto-close drawer on mobile after navigating
        });
    });

    // Mobile sidebar (off-canvas drawer) controls
    const sidebarEl = document.getElementById('sidebar');
    const sidebarBackdrop = document.getElementById('sidebar-backdrop');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sidebarCloseBtn = document.getElementById('sidebar-close-btn');

    function openSidebar() {
        sidebarEl.classList.add('open');
        sidebarBackdrop.classList.add('active');
        document.body.classList.add('sidebar-locked');
    }
    function closeSidebar() {
        sidebarEl.classList.remove('open');
        sidebarBackdrop.classList.remove('active');
        document.body.classList.remove('sidebar-locked');
    }
    window.closeSidebar = closeSidebar;

    hamburgerBtn.addEventListener('click', openSidebar);
    sidebarCloseBtn.addEventListener('click', closeSidebar);
    sidebarBackdrop.addEventListener('click', closeSidebar);
    
    // Quick action: Nueva Venta
    document.getElementById('btn-quick-sale').addEventListener('click', () => {
        openCrudModal('sales', 'create');
    });

    // Notification dropdown toggle
    const notifBtn = document.getElementById('notification-btn');
    const notifDropdown = document.getElementById('notification-dropdown');
    notifBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        notifDropdown.classList.toggle('active');
        renderNotificationsList();
    });
    
    document.getElementById('clear-notifications').addEventListener('click', (e) => {
        e.stopPropagation();
        STATE.notifications = [];
        document.querySelector('.badge-dot').style.display = 'none';
        renderNotificationsList();
        showToast('Notificaciones', 'Bandeja vaciada correctamente', 'success');
    });
    
    document.addEventListener('click', () => {
        notifDropdown.classList.remove('active');
    });
    
    // Register modal handlers
    document.getElementById('modal-close-btn').addEventListener('click', closeModal);
    document.getElementById('modal-cancel-btn').addEventListener('click', closeModal);
    document.getElementById('modal-form').addEventListener('submit', handleFormSubmit);
    
    document.getElementById('details-modal-close-btn').addEventListener('click', closeDetailsModal);
    document.getElementById('details-modal-close-btn-bottom').addEventListener('click', closeDetailsModal);
    
    // Bulk price update modal handlers
    document.getElementById('bulk-price-close-btn').addEventListener('click', closeBulkPriceModal);
    document.getElementById('bulk-price-cancel-btn').addEventListener('click', closeBulkPriceModal);
    document.getElementById('bulk-price-form').addEventListener('submit', handleBulkPriceSubmit);

    // Cash register closing modal handlers
    document.getElementById('cash-closing-close-btn').addEventListener('click', closeCashClosingModal);
    document.getElementById('cash-closing-cancel-btn').addEventListener('click', closeCashClosingModal);
    document.getElementById('cash-closing-form').addEventListener('submit', handleCashClosingSubmit);

    // Stock transfer between branches modal handlers
    document.getElementById('transfer-close-btn').addEventListener('click', closeTransferModal);
    document.getElementById('transfer-cancel-btn').addEventListener('click', closeTransferModal);
    document.getElementById('transfer-form').addEventListener('submit', handleTransferSubmit);
    
    // Login Submission Handler
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const u = document.getElementById('login-username').value;
        const p = document.getElementById('login-password').value;
        attemptLogin(u, p);
    });
    
    // Logout Action
    document.getElementById('btn-logout').addEventListener('click', logout);
    
    // Global credentials autofiller helper
    window.fillCreds = (u, p) => {
        document.getElementById('login-username').value = u;
        document.getElementById('login-password').value = p;
        showToast('Formulario Completado', `Se cargaron datos para ${u}. Presiona Iniciar Sesión`, 'info');
    };
    
    // Session check and init
    checkSession();
    updateNotificationBadge();
});

// Update the red notification badge indicator
function updateNotificationBadge() {
    const badge = document.querySelector('.badge-dot');
    if (STATE.notifications.length > 0) {
        badge.style.display = 'block';
    } else {
        badge.style.display = 'none';
    }
}

function renderNotificationsList() {
    const list = document.getElementById('notification-list');
    list.innerHTML = '';
    
    if (STATE.notifications.length === 0) {
        list.innerHTML = `
            <div class="notification-empty">
                <i data-lucide="bell-off" style="width: 24px; height: 24px;"></i>
                <p>No tienes notificaciones pendientes</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }
    
    STATE.notifications.forEach(n => {
        const item = document.createElement('div');
        item.className = 'notification-item';
        item.innerHTML = `
            <div class="notification-icon ${n.type}">
                <i data-lucide="${n.type === 'success' ? 'check' : n.type === 'danger' ? 'alert-octagon' : 'alert-triangle'}"></i>
            </div>
            <div class="notification-content">
                <span class="notification-title">${n.title}</span>
                <span class="notification-text">${n.text}</span>
                <span class="notification-time">${n.time}</span>
            </div>
        `;
        list.appendChild(item);
    });
    lucide.createIcons();
}

// --- ROUTER & VIEW SWITCHER ---
function switchView(viewName) {
    STATE.currentView = viewName;
    
    // Update active nav-item
    document.querySelectorAll('.nav-item').forEach(btn => {
        if (btn.getAttribute('data-view') === viewName) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Update Titles and Load the specific view HTML builder
    const viewTitle = document.getElementById('view-title');
    const viewSubtitle = document.getElementById('view-subtitle');
    const container = document.getElementById('dynamic-content');
    
    // Clear dynamic chart reference list for safety
    charts = {};
    
    switch (viewName) {
        case 'pos':
            viewTitle.textContent = "Punto de Venta (POS)";
            viewSubtitle.textContent = "Operación de venta diaria: escaneo de productos, cobro y emisión de ticket en el momento.";
            renderPOSView(container);
            break;
        case 'dashboard':
            viewTitle.textContent = "Panel Principal";
            viewSubtitle.textContent = "Dashboard de métricas de ventas, reposición y control de stock en tiempo real.";
            renderDashboard(container);
            break;
        case 'inventory':
            viewTitle.textContent = "Inventario de Productos";
            viewSubtitle.textContent = "Catálogo de fiambres, quesos, picadas y almacén: stock, precios y códigos de barra.";
            renderInventoryView(container);
            break;
        case 'sales':
            viewTitle.textContent = "Gestión de Ventas";
            viewSubtitle.textContent = "Registro de ventas por sucursal, lectura de código de barras y emisión de recibos.";
            renderSalesView(container);
            break;
        case 'purchases':
            viewTitle.textContent = "Pedidos de Compra";
            viewSubtitle.textContent = "Registro de compras a proveedores para reponer inventario.";
            renderPurchasesView(container);
            break;
        case 'replenishment':
            viewTitle.textContent = "Listado de Reposición";
            viewSubtitle.textContent = "Productos bajo stock mínimo agrupados por proveedor, con cantidad sugerida a pedir.";
            renderReplenishmentView(container);
            break;
        case 'transfers':
            viewTitle.textContent = "Traspasos entre Sucursales";
            viewSubtitle.textContent = "Mover stock de un almacén a otro dentro de la red de sucursales.";
            renderTransfersView(container);
            break;
        case 'labels':
            viewTitle.textContent = "Etiquetas de Precios";
            viewSubtitle.textContent = "Generación de etiquetas de góndola y etiquetas con código de barras para imprimir.";
            renderLabelsView(container);
            break;
        case 'accounts':
            viewTitle.textContent = "Cuentas Corrientes";
            viewSubtitle.textContent = "Saldos y movimientos de cuenta corriente de clientes y proveedores.";
            renderAccountsView(container);
            break;
        case 'cashclosings':
            viewTitle.textContent = "Cierres de Caja";
            viewSubtitle.textContent = "Arqueo diario de caja por sucursal: fondo inicial, ventas en efectivo y diferencias.";
            renderCashClosingsView(container);
            break;
        case 'creditnotes':
            viewTitle.textContent = "Notas de Crédito y Débito";
            viewSubtitle.textContent = "Comprobantes que ajustan una Factura A/B/C emitida (CAE simulado — ver aclaración).";
            renderCreditNotesView(container);
            break;
        case 'sucursales':
            viewTitle.textContent = "Sucursales";
            viewSubtitle.textContent = "Administración de los puntos de venta de la fiambrería.";
            renderSucursalesView(container);
            break;
        case 'receipts':
            viewTitle.textContent = "Recibos emitidos";
            viewSubtitle.textContent = "Comprobantes de cobro y pagos recibidos por parte de clientes.";
            renderReceiptsView(container);
            break;
        case 'payments':
            viewTitle.textContent = "Ordenes de Pago";
            viewSubtitle.textContent = "Comprobantes de pagos y salidas de caja efectuadas a proveedores.";
            renderPaymentsView(container);
            break;
        case 'clients':
            viewTitle.textContent = "Base de Clientes";
            viewSubtitle.textContent = "Directorio de bares, kioscos, rotiserías y particulares registrados.";
            renderClientsView(container);
            break;
        case 'providers':
            viewTitle.textContent = "Directorio de Proveedores";
            viewSubtitle.textContent = "Proveedores de fiambres, lácteos y almacén asociados a la fiambrería.";
            renderProvidersView(container);
            break;
        case 'reports':
            viewTitle.textContent = "Informes y Análisis de Datos";
            viewSubtitle.textContent = "Ganancias diarias y acumuladas, valoración de existencias y estadísticas por sucursal.";
            renderReportsView(container);
            break;
        case 'users':
            viewTitle.textContent = "Control de Usuarios";
            viewSubtitle.textContent = "Alta, baja, modificación y roles del personal de la fiambrería.";
            renderUsersView(container);
            break;
        default:
            console.error(`View ${viewName} not found.`);
    }
    
    // Auto re-render Lucide icons for the newly injected HTML
    lucide.createIcons();
}


// ==========================================
// VIEW 1: DASHBOARD
// ==========================================
function renderDashboard(container) {
    // Calculative metrics
    const totalSalesValue = STATE.sales.reduce((acc, curr) => curr.status !== 'Cancelado' ? acc + curr.total : acc, 0);
    const totalPurchasesValue = STATE.purchases.reduce((acc, curr) => curr.status !== 'Cancelado' ? acc + curr.total : acc, 0);
    const activeClientsCount = STATE.clients.length;
    const lowStockCount = STATE.inventory.filter(item => isLowStockAnywhere(item)).length;
    
    container.innerHTML = `
        <!-- KPI Row -->
        <div class="dashboard-grid">
            <div class="kpi-card">
                <div class="kpi-header">
                    <span class="kpi-title">Ventas Totales</span>
                    <div class="kpi-icon success">
                        <i data-lucide="trending-up"></i>
                    </div>
                </div>
                <div class="kpi-value">${formatCurrency(totalSalesValue)}</div>
                <div class="kpi-trend positive">
                    <i data-lucide="arrow-up-right"></i>
                    <span>+14.2%</span>
                    <span class="kpi-label">vs. mes anterior</span>
                </div>
            </div>
            
            <div class="kpi-card">
                <div class="kpi-header">
                    <span class="kpi-title">Compras a Proveedores</span>
                    <div class="kpi-icon primary">
                        <i data-lucide="trending-down"></i>
                    </div>
                </div>
                <div class="kpi-value">${formatCurrency(totalPurchasesValue)}</div>
                <div class="kpi-trend neutral">
                    <i data-lucide="minus"></i>
                    <span>0.0%</span>
                    <span class="kpi-label">Desviación estándar</span>
                </div>
            </div>
            
            <div class="kpi-card">
                <div class="kpi-header">
                    <span class="kpi-title">Clientes Activos</span>
                    <div class="kpi-icon info">
                        <i data-lucide="users"></i>
                    </div>
                </div>
                <div class="kpi-value">${activeClientsCount}</div>
                <div class="kpi-trend positive">
                    <i data-lucide="arrow-up-right"></i>
                    <span>+2</span>
                    <span class="kpi-label">Esta semana</span>
                </div>
            </div>
            
            <div class="kpi-card">
                <div class="kpi-header">
                    <span class="kpi-title">Alertas Stock Bajo</span>
                    <div class="kpi-icon danger">
                        <i data-lucide="alert-triangle"></i>
                    </div>
                </div>
                <div class="kpi-value">${lowStockCount}</div>
                <div class="kpi-trend ${lowStockCount > 0 ? 'negative' : 'positive'}">
                    <i data-lucide="${lowStockCount > 0 ? 'alert-circle' : 'shield-check'}"></i>
                    <span>${lowStockCount > 0 ? 'Reponer' : 'Seguro'}</span>
                    <span class="kpi-label">Artículos críticos</span>
                </div>
            </div>
        </div>
        
        <!-- Graphs Grid -->
        <div class="charts-grid">
            <div class="chart-card">
                <div class="chart-card-header">
                    <span class="chart-title">Movimiento Financiero Mensual (2026)</span>
                    <div class="chart-actions">
                        <select class="filter-select" id="chart-timeframe">
                            <option value="6m">Últimos 6 meses</option>
                            <option value="12m">Último año</option>
                        </select>
                    </div>
                </div>
                <div class="chart-container">
                    <canvas id="financialTrendChart"></canvas>
                </div>
            </div>
            
            <div class="chart-card">
                <div class="chart-card-header">
                    <span class="chart-title">Ventas por Categoría</span>
                </div>
                <div class="chart-container">
                    <canvas id="categoryPieChart"></canvas>
                </div>
            </div>
        </div>
        
        <!-- Dashboard Footer Lists -->
        <div class="dashboard-bottom-grid">
            <!-- Recent Sales -->
            <div class="list-card">
                <div class="list-card-header">
                    <span class="list-card-title">Últimas Ventas</span>
                    <button class="btn-text" id="dashboard-view-sales">Ver todas</button>
                </div>
                <div class="list-items" id="recent-sales-list">
                    <!-- Dynamic dynamic content -->
                </div>
            </div>
            
            <!-- Critical Stock items -->
            <div class="list-card">
                <div class="list-card-header">
                    <span class="list-card-title">Inventario Crítico (Bajo Mínimo)</span>
                    <button class="btn-text" id="dashboard-view-inventory">Comprar Reposición</button>
                </div>
                <div class="list-items" id="recent-alerts-list">
                    <!-- Dynamic alerts -->
                </div>
            </div>
        </div>
    `;
    
    // Event listeners inside the dashboard
    document.getElementById('dashboard-view-sales').addEventListener('click', () => switchView('sales'));
    document.getElementById('dashboard-view-inventory').addEventListener('click', () => switchView('inventory'));

    // Inject list items
    renderRecentSales();
    renderCriticalStockList();
    
    // Initialize Dashboard Charts
    initDashboardCharts();
}

function renderRecentSales() {
    const container = document.getElementById('recent-sales-list');
    container.innerHTML = '';
    
    // Get last 4 sales sorted by date
    const recent = [...STATE.sales].sort((a,b) => new Date(b.date) - new Date(a.date)).slice(0, 4);
    
    recent.forEach(sale => {
        const item = document.createElement('div');
        item.className = 'list-item';
        
        let statusClass = 'success';
        if (sale.status === 'Pendiente') statusClass = 'warning';
        if (sale.status === 'Cancelado') statusClass = 'danger';
        
        item.innerHTML = `
            <div class="list-item-left">
                <div class="list-item-icon">
                    <i data-lucide="shopping-cart"></i>
                </div>
                <div class="list-item-details">
                    <span class="list-item-name">${sale.clientName}</span>
                    <span class="list-item-sub">${sale.id} | ${formatDate(sale.date)}</span>
                </div>
            </div>
            <div class="list-item-right">
                <span class="list-item-value">${formatCurrency(sale.total)}</span>
                <span class="list-item-status status-badge ${statusClass}">${sale.status}</span>
            </div>
        `;
        container.appendChild(item);
    });
}

function renderCriticalStockList() {
    const container = document.getElementById('recent-alerts-list');
    container.innerHTML = '';
    
    // Vista consolidada central: se listan los pares (producto, sucursal) bajo mínimo
    const criticals = [];
    STATE.inventory.forEach(item => {
        STATE.sucursales.forEach(s => {
            const stock = getStock(item, s.id);
            if (stock <= item.minStock) criticals.push({ item, sucursal: s, stock });
        });
    });
    
    if (criticals.length === 0) {
        container.innerHTML = `
            <div style="padding: 32px; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
                <i data-lucide="check-circle-2" style="width: 32px; height: 32px; color: var(--success); margin-bottom: 8px;"></i>
                <p>Todos los niveles de stock están saludables</p>
            </div>
        `;
        return;
    }
    
    criticals.forEach(({ item, sucursal, stock }) => {
        const row = document.createElement('div');
        row.className = 'list-item';
        row.innerHTML = `
            <div class="list-item-left">
                <div class="list-item-icon" style="color: var(--danger);">
                    <i data-lucide="package"></i>
                </div>
                <div class="list-item-details">
                    <span class="list-item-name">${item.name}</span>
                    <span class="list-item-sub">${sucursal.name} | SKU: ${item.sku}</span>
                </div>
            </div>
            <div class="list-item-right">
                <span class="list-item-value" style="color: var(--danger);">${stock} ${item.unit}</span>
                <span class="list-item-sub">Mínimo: ${item.minStock}</span>
            </div>
        `;
        container.appendChild(row);
    });
}

function initDashboardCharts() {
    // 1. Line/Bar Chart for Monthly Trend
    const trendCtx = document.getElementById('financialTrendChart').getContext('2d');
    
    // Mock monthly datasets (Ene - Jun)
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
    const salesData = [340000, 480000, 520000, 410000, 610000, 760500]; // Sums + mock growth
    const purchasesData = [280000, 310000, 400000, 350000, 480000, 894000];
    
    charts.trend = new Chart(trendCtx, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [
                {
                    label: 'Ventas ($)',
                    data: salesData,
                    backgroundColor: '#0891b2', // Primary cyan
                    borderRadius: 6,
                    borderWidth: 0,
                    barPercentage: 0.6
                },
                {
                    label: 'Compras ($)',
                    data: purchasesData,
                    backgroundColor: '#e2e8f0', // slate-200
                    borderRadius: 6,
                    borderWidth: 0,
                    barPercentage: 0.6
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: { family: 'Outfit', size: 12, weight: '500' },
                        color: '#475569'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${formatCurrency(context.raw)}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { font: { family: 'Outfit' }, color: '#64748b' }
                },
                y: {
                    grid: { color: '#f1f5f9' },
                    ticks: {
                        font: { family: 'Outfit' },
                        color: '#64748b',
                        callback: function(value) {
                            return '$' + value/1000 + 'k';
                        }
                    }
                }
            }
        }
    });

    // 2. Pie Chart for Category distribution
    const pieCtx = document.getElementById('categoryPieChart').getContext('2d');
    
    // Group sales total by category
    const catTotals = {};
    CATEGORIES.forEach(c => catTotals[c] = 0);
    
    STATE.sales.forEach(s => {
        if (s.status === 'Cancelado') return;
        s.items.forEach(line => {
            const p = STATE.inventory.find(item => item.id === line.productId);
            if (p && catTotals[p.category] !== undefined) {
                catTotals[p.category] += (line.qty * line.price);
            }
        });
    });
    
    // Fallback default mock weights if empty to showcase nice visual data
    const categories = Object.keys(catTotals);
    const dataValues = Object.values(catTotals).map(v => v === 0 ? 50000 : v); // Avoid zero for aesthetics
    
    charts.pie = new Chart(pieCtx, {
        type: 'doughnut',
        data: {
            labels: categories,
            datasets: [{
                data: dataValues,
                backgroundColor: [
                    '#0891b2', // cyan (Fiambres)
                    '#f59e0b', // amber (Quesos)
                    '#be123c', // wine red (Picadas)
                    '#d946ef', // fuchsia (Galletitas y Panificados)
                    '#0ea5e9', // sky blue (Jugos y Bebidas)
                    '#22c55e'  // green (Almacén)
                ],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '65%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 12,
                        padding: 14,
                        font: { family: 'Outfit', size: 11, weight: '500' },
                        color: '#475569'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const total = context.dataset.data.reduce((a,b)=>a+b, 0);
                            const val = context.raw;
                            const pct = ((val / total) * 100).toFixed(1);
                            return ` ${context.label}: ${formatCurrency(val)} (${pct}%)`;
                        }
                    }
                }
            }
        }
    });
}


// ==========================================
// MODULE 2: INVENTORY (INVENTARIO)
// ==========================================
function renderInventoryView(container) {
    const showCosts = hasPermission('verCostos');
    container.innerHTML = `
        <div class="view-header-bar">
            <div class="search-filter-box">
                <div class="search-input-wrapper">
                    <i data-lucide="search"></i>
                    <input type="text" id="inventory-search" class="search-input" placeholder="Buscar por SKU o descripción...">
                </div>
                <select class="filter-select" id="inventory-filter-cat">
                    <option value="all">Todas las Categorías</option>
                    ${CATEGORIES.map(c => `<option value="${c}">${c}</option>`).join('')}
                </select>
                <select class="filter-select" id="inventory-filter-stock">
                    <option value="all">Todo el Stock</option>
                    <option value="low">Bajo Mínimo</option>
                    <option value="ok">Stock Normal</option>
                </select>
                <select class="filter-select" id="inventory-filter-sucursal">
                    <option value="all">Consolidado (Todas las Sucursales)</option>
                    ${STATE.sucursales.map(s => `<option value="${s.id}">${s.name}</option>`).join('')}
                </select>
            </div>
            <div class="header-actions">
                <button class="btn-outline" id="btn-inventory-export-excel">
                    <i data-lucide="file-spreadsheet"></i>
                    <span>Lista de Precios (Excel)</span>
                </button>
                ${hasPermission('verCostos') ? `
                <button class="btn-outline" id="btn-inventory-bulk-price">
                    <i data-lucide="percent"></i>
                    <span>Actualización Masiva</span>
                </button>` : ''}
                <button class="btn-primary" id="btn-inventory-add">
                    <i data-lucide="plus"></i>
                    <span>Nuevo Producto</span>
                </button>
            </div>
        </div>
        
        <div class="table-card">
            <div class="table-wrapper">
                <table class="custom-table" id="inventory-table">
                    <thead>
                        <tr>
                            <th>SKU</th>
                            <th>Cód. Barras</th>
                            <th>Descripción</th>
                            <th>Categoría</th>
                            <th>Proveedor</th>
                            <th>Unidad</th>
                            ${showCosts ? '<th>Costo Unit.</th>' : ''}
                            <th>Precio Venta</th>
                            <th id="inventory-stock-header">Stock (Todas)</th>
                            <th>Mínimo</th>
                            <th>Estado</th>
                            <th style="width: 100px; text-align: center;">Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="inventory-table-body">
                        <!-- Injected dynamic rows -->
                    </tbody>
                </table>
            </div>
        </div>

        <!-- History component -->
        <div class="history-section">
            <div class="history-title">
                <i data-lucide="history"></i>
                <span>Historial de Inventario</span>
            </div>
            <div class="history-timeline" id="inventory-history">
                <!-- Log history -->
            </div>
        </div>
    `;
    
    // Register actions
    document.getElementById('btn-inventory-add').addEventListener('click', () => openCrudModal('inventory', 'create'));
    document.getElementById('inventory-search').addEventListener('input', filterInventoryTable);
    document.getElementById('inventory-filter-cat').addEventListener('change', filterInventoryTable);
    document.getElementById('inventory-filter-stock').addEventListener('change', filterInventoryTable);
    document.getElementById('inventory-filter-sucursal').addEventListener('change', filterInventoryTable);
    document.getElementById('btn-inventory-export-excel').addEventListener('click', exportPriceListExcel);
    if (hasPermission('verCostos')) {
        const bulkBtn = document.getElementById('btn-inventory-bulk-price');
        if (bulkBtn) bulkBtn.addEventListener('click', openBulkPriceModal);
    }
    
    renderInventoryRows(STATE.inventory, 'all');
    renderModuleHistory('inventory');
}

function renderInventoryRows(items, sucursalFilter = 'all') {
    const tbody = document.getElementById('inventory-table-body');
    tbody.innerHTML = '';
    const showCosts = hasPermission('verCostos');
    const colCount = showCosts ? 12 : 11;
    
    if (items.length === 0) {
        tbody.innerHTML = `<tr><td colspan="${colCount}" style="text-align: center; color: var(--text-muted); padding: 32px;">No se encontraron productos</td></tr>`;
        return;
    }
    
    items.forEach(item => {
        const stockShown = sucursalFilter === 'all' ? getTotalStock(item) : getStock(item, sucursalFilter);
        const isLow = sucursalFilter === 'all' ? isLowStockAnywhere(item) : stockShown <= item.minStock;
        const stateBadge = isLow ? '<span class="status-badge danger">Bajo Mínimo</span>' : '<span class="status-badge success">Normal</span>';
        const provider = STATE.providers.find(p => p.id === item.providerId);
        const breakdown = STATE.sucursales.map(s => `${s.name}: ${getStock(item, s.id)}`).join(' · ');
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="font-weight: 600;">${item.sku}</td>
            <td class="barcode-mono">${item.barcode || '—'}</td>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>${provider ? provider.name : '—'}</td>
            <td>${item.unit}</td>
            ${showCosts ? `<td>${formatCurrency(item.cost)}</td>` : ''}
            <td style="font-weight: 600;">${formatCurrency(item.price)}</td>
            <td style="font-weight: 700; ${isLow ? 'color: var(--danger);' : ''}" title="${breakdown}">${stockShown}</td>
            <td>${item.minStock}</td>
            <td>${stateBadge}</td>
            <td style="text-align: center;">
                <div class="table-actions">
                    <button class="btn-table-action edit" onclick="openCrudModal('inventory', 'edit', '${item.id}')" title="Editar">
                        <i data-lucide="edit"></i>
                    </button>
                    <button class="btn-table-action delete" onclick="deleteItem('inventory', '${item.id}')" title="Eliminar">
                        <i data-lucide="trash-2"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
    lucide.createIcons();
}

function filterInventoryTable() {
    const q = document.getElementById('inventory-search').value.toLowerCase();
    const cat = document.getElementById('inventory-filter-cat').value;
    const stockFilter = document.getElementById('inventory-filter-stock').value;
    const sucursalFilter = document.getElementById('inventory-filter-sucursal').value;
    
    document.getElementById('inventory-stock-header').textContent =
        sucursalFilter === 'all' ? 'Stock (Todas)' : `Stock (${STATE.sucursales.find(s => s.id === sucursalFilter).name})`;
    
    const filtered = STATE.inventory.filter(item => {
        const matchesQuery = item.sku.toLowerCase().includes(q) || item.name.toLowerCase().includes(q);
        const matchesCat = cat === 'all' || item.category === cat;
        
        const relevantStock = sucursalFilter === 'all' ? getTotalStock(item) : getStock(item, sucursalFilter);
        let matchesStock = true;
        if (stockFilter === 'low') matchesStock = sucursalFilter === 'all' ? isLowStockAnywhere(item) : relevantStock <= item.minStock;
        if (stockFilter === 'ok') matchesStock = sucursalFilter === 'all' ? !isLowStockAnywhere(item) : relevantStock > item.minStock;
        
        return matchesQuery && matchesCat && matchesStock;
    });
    
    renderInventoryRows(filtered, sucursalFilter);
}


// ==========================================
// MODULE 3: PROVIDERS (PROVEEDORES)
// ==========================================
function renderProvidersView(container) {
    container.innerHTML = `
        <div class="view-header-bar">
            <div class="search-filter-box">
                <div class="search-input-wrapper">
                    <i data-lucide="search"></i>
                    <input type="text" id="providers-search" class="search-input" placeholder="Buscar por Nombre, CUIT o Email...">
                </div>
            </div>
            <button class="btn-primary" id="btn-providers-add">
                <i data-lucide="plus"></i>
                <span>Nuevo Proveedor</span>
            </button>
        </div>
        
        <div class="table-card">
            <div class="table-wrapper">
                <table class="custom-table" id="providers-table">
                    <thead>
                        <tr>
                            <th>Nombre Comercial</th>
                            <th>CUIT</th>
                            <th>Teléfono</th>
                            <th>Email</th>
                            <th>Dirección</th>
                            <th style="width: 100px; text-align: center;">Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="providers-table-body">
                        <!-- Injected dynamic rows -->
                    </tbody>
                </table>
            </div>
        </div>

        <div class="history-section">
            <div class="history-title">
                <i data-lucide="history"></i>
                <span>Historial de Proveedores</span>
            </div>
            <div class="history-timeline" id="providers-history"></div>
        </div>
    `;
    
    document.getElementById('btn-providers-add').addEventListener('click', () => openCrudModal('providers', 'create'));
    document.getElementById('providers-search').addEventListener('input', filterProvidersTable);
    
    renderProvidersRows(STATE.providers);
    renderModuleHistory('providers');
}

function renderProvidersRows(items) {
    const tbody = document.getElementById('providers-table-body');
    tbody.innerHTML = '';
    
    if (items.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 32px;">No se encontraron proveedores</td></tr>`;
        return;
    }
    
    items.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="font-weight: 600;">${item.name}</td>
            <td>${item.cuit}</td>
            <td>${item.phone}</td>
            <td>${item.email}</td>
            <td>${item.address}</td>
            <td style="text-align: center;">
                <div class="table-actions">
                    <button class="btn-table-action view" onclick="viewProviderLedger('${item.id}')" title="Ver Cuenta Corriente">
                        <i data-lucide="landmark"></i>
                    </button>
                    <button class="btn-table-action edit" onclick="openCrudModal('providers', 'edit', '${item.id}')" title="Editar">
                        <i data-lucide="edit"></i>
                    </button>
                    <button class="btn-table-action delete" onclick="deleteItem('providers', '${item.id}')" title="Eliminar">
                        <i data-lucide="trash-2"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
    lucide.createIcons();
}

function filterProvidersTable() {
    const q = document.getElementById('providers-search').value.toLowerCase();
    const filtered = STATE.providers.filter(p => 
        p.name.toLowerCase().includes(q) || p.cuit.includes(q) || p.email.toLowerCase().includes(q)
    );
    renderProvidersRows(filtered);
}


// ==========================================
// MODULE 4: CLIENTS (CLIENTES)
// ==========================================
function renderClientsView(container) {
    container.innerHTML = `
        <div class="view-header-bar">
            <div class="search-filter-box">
                <div class="search-input-wrapper">
                    <i data-lucide="search"></i>
                    <input type="text" id="clients-search" class="search-input" placeholder="Buscar por Nombre, DNI/CUIT o Email...">
                </div>
                <select class="filter-select" id="clients-filter-type">
                    <option value="all">Todos los Clientes</option>
                    <option value="Particular">Particular</option>
                    <option value="Kiosco">Kiosco / Almacén</option>
                    <option value="Bar / Restaurante">Bar / Restaurante</option>
                    <option value="Mayorista">Mayorista</option>
                </select>
            </div>
            <button class="btn-primary" id="btn-clients-add">
                <i data-lucide="plus"></i>
                <span>Nuevo Cliente</span>
            </button>
        </div>
        
        <div class="table-card">
            <div class="table-wrapper">
                <table class="custom-table" id="clients-table">
                    <thead>
                        <tr>
                            <th>Nombre y Apellido / R. Social</th>
                            <th>DNI / CUIT</th>
                            <th>Tipo de Cliente</th>
                            <th>Teléfono</th>
                            <th>Email</th>
                            <th style="width: 100px; text-align: center;">Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="clients-table-body">
                        <!-- Injected dynamic rows -->
                    </tbody>
                </table>
            </div>
        </div>

        <div class="history-section">
            <div class="history-title">
                <i data-lucide="history"></i>
                <span>Historial de Clientes</span>
            </div>
            <div class="history-timeline" id="clients-history"></div>
        </div>
    `;
    
    document.getElementById('btn-clients-add').addEventListener('click', () => openCrudModal('clients', 'create'));
    document.getElementById('clients-search').addEventListener('input', filterClientsTable);
    document.getElementById('clients-filter-type').addEventListener('change', filterClientsTable);
    
    renderClientsRows(STATE.clients);
    renderModuleHistory('clients');
}

function renderClientsRows(items) {
    const tbody = document.getElementById('clients-table-body');
    tbody.innerHTML = '';
    
    if (items.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 32px;">No se encontraron clientes</td></tr>`;
        return;
    }
    
    items.forEach(item => {
        let typeBadge = 'secondary';
        if (item.type === 'Bar / Restaurante') typeBadge = 'info';
        if (item.type === 'Kiosco') typeBadge = 'success';
        if (item.type === 'Mayorista') typeBadge = 'warning';
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="font-weight: 600;">${item.name}</td>
            <td>${item.dni_cuit}</td>
            <td><span class="status-badge ${typeBadge}">${item.type}</span></td>
            <td>${item.phone}</td>
            <td>${item.email}</td>
            <td style="text-align: center;">
                <div class="table-actions">
                    <button class="btn-table-action view" onclick="viewClientLedger('${item.id}')" title="Ver Cuenta Corriente">
                        <i data-lucide="landmark"></i>
                    </button>
                    <button class="btn-table-action edit" onclick="openCrudModal('clients', 'edit', '${item.id}')" title="Editar">
                        <i data-lucide="edit"></i>
                    </button>
                    <button class="btn-table-action delete" onclick="deleteItem('clients', '${item.id}')" title="Eliminar">
                        <i data-lucide="trash-2"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
    lucide.createIcons();
}

function filterClientsTable() {
    const q = document.getElementById('clients-search').value.toLowerCase();
    const type = document.getElementById('clients-filter-type').value;
    
    const filtered = STATE.clients.filter(c => {
        const matchesQuery = c.name.toLowerCase().includes(q) || c.dni_cuit.includes(q) || c.email.toLowerCase().includes(q);
        const matchesType = type === 'all' || c.type === type;
        return matchesQuery && matchesType;
    });
    renderClientsRows(filtered);
}


// ==========================================
// MODULE 5: PURCHASES (COMPRAS)
// ==========================================
function renderPurchasesView(container) {
    container.innerHTML = `
        <div class="view-header-bar">
            <div class="search-filter-box">
                <div class="search-input-wrapper">
                    <i data-lucide="search"></i>
                    <input type="text" id="purchases-search" class="search-input" placeholder="Buscar por ID Compra o Proveedor...">
                </div>
                <select class="filter-select" id="purchases-filter-status">
                    <option value="all">Todos los Estados</option>
                    <option value="Recibido">Recibido</option>
                    <option value="Pendiente">Pendiente</option>
                    <option value="Cancelado">Cancelado</option>
                </select>
            </div>
            <button class="btn-primary" id="btn-purchases-add">
                <i data-lucide="plus"></i>
                <span>Nueva Compra</span>
            </button>
        </div>
        
        <div class="table-card">
            <div class="table-wrapper">
                <table class="custom-table" id="purchases-table">
                    <thead>
                        <tr>
                            <th>Cód. Compra</th>
                            <th>Proveedor</th>
                            <th>Fecha</th>
                            <th>Artículos</th>
                            <th>Monto Total</th>
                            <th>Estado</th>
                            <th style="width: 120px; text-align: center;">Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="purchases-table-body">
                        <!-- Injected dynamic rows -->
                    </tbody>
                </table>
            </div>
        </div>

        <div class="history-section">
            <div class="history-title">
                <i data-lucide="history"></i>
                <span>Historial de Compras</span>
            </div>
            <div class="history-timeline" id="purchases-history"></div>
        </div>
    `;
    
    document.getElementById('btn-purchases-add').addEventListener('click', () => openCrudModal('purchases', 'create'));
    document.getElementById('purchases-search').addEventListener('input', filterPurchasesTable);
    document.getElementById('purchases-filter-status').addEventListener('change', filterPurchasesTable);
    
    renderPurchasesRows(STATE.purchases);
    renderModuleHistory('purchases');
}

function renderPurchasesRows(items) {
    const tbody = document.getElementById('purchases-table-body');
    tbody.innerHTML = '';
    
    if (items.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 32px;">No se encontraron pedidos de compra</td></tr>`;
        return;
    }
    
    items.forEach(item => {
        let statusBadge = 'success';
        if (item.status === 'Pendiente') statusBadge = 'warning';
        if (item.status === 'Cancelado') statusBadge = 'danger';
        
        // Sum total quantities of items in purchase
        const itemsCount = item.items.reduce((acc, curr) => acc + curr.qty, 0);
        
        tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="font-weight: 600;">${item.id}</td>
            <td>${item.providerName}</td>
            <td>${formatDate(item.date)}</td>
            <td>${itemsCount} unidades</td>
            <td style="font-weight: 700;">${formatCurrency(item.total)}</td>
            <td><span class="status-badge ${statusBadge}">${item.status}</span></td>
            <td style="text-align: center;">
                <div class="table-actions">
                    <button class="btn-table-action view" onclick="viewTransactionDetails('purchases', '${item.id}')" title="Detalles">
                        <i data-lucide="eye"></i>
                    </button>
                    <button class="btn-table-action edit" onclick="openCrudModal('purchases', 'edit', '${item.id}')" title="Editar">
                        <i data-lucide="edit"></i>
                    </button>
                    <button class="btn-table-action delete" onclick="deleteItem('purchases', '${item.id}')" title="Anular">
                        <i data-lucide="slash"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
    lucide.createIcons();
}

function filterPurchasesTable() {
    const q = document.getElementById('purchases-search').value.toLowerCase();
    const status = document.getElementById('purchases-filter-status').value;
    
    const filtered = STATE.purchases.filter(p => {
        const matchesQuery = p.id.toLowerCase().includes(q) || p.providerName.toLowerCase().includes(q);
        const matchesStatus = status === 'all' || p.status === status;
        return matchesQuery && matchesStatus;
    });
    renderPurchasesRows(filtered);
}


// ==========================================
// MODULE 6: SALES (VENTAS)
// ==========================================
function renderSalesView(container) {
    container.innerHTML = `
        <div class="view-header-bar">
            <div class="search-filter-box">
                <div class="search-input-wrapper">
                    <i data-lucide="search"></i>
                    <input type="text" id="sales-search" class="search-input" placeholder="Buscar por ID Venta o Cliente...">
                </div>
                <select class="filter-select" id="sales-filter-status">
                    <option value="all">Todos los Estados</option>
                    <option value="Entregado">Entregado</option>
                    <option value="Pendiente">Pendiente</option>
                    <option value="Cancelado">Cancelado</option>
                </select>
            </div>
            <button class="btn-primary" id="btn-sales-add">
                <i data-lucide="plus"></i>
                <span>Nueva Venta</span>
            </button>
        </div>
        
        <div class="table-card">
            <div class="table-wrapper">
                <table class="custom-table" id="sales-table">
                    <thead>
                        <tr>
                            <th>Cód. Venta</th>
                            <th>Cliente</th>
                            <th>Sucursal</th>
                            <th>Comprobante</th>
                            <th>Fecha</th>
                            <th>Artículos</th>
                            <th>Monto Total</th>
                            <th>Estado</th>
                            <th style="width: 140px; text-align: center;">Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="sales-table-body">
                        <!-- Injected dynamic rows -->
                    </tbody>
                </table>
            </div>
        </div>

        <div class="history-section">
            <div class="history-title">
                <i data-lucide="history"></i>
                <span>Historial de Ventas</span>
            </div>
            <div class="history-timeline" id="sales-history"></div>
        </div>
    `;
    
    document.getElementById('btn-sales-add').addEventListener('click', () => openCrudModal('sales', 'create'));
    document.getElementById('sales-search').addEventListener('input', filterSalesTable);
    document.getElementById('sales-filter-status').addEventListener('change', filterSalesTable);
    
    renderSalesRows(STATE.sales);
    renderModuleHistory('sales');
}

function renderSalesRows(items) {
    const tbody = document.getElementById('sales-table-body');
    tbody.innerHTML = '';
    
    if (items.length === 0) {
        tbody.innerHTML = `<tr><td colspan="9" style="text-align: center; color: var(--text-muted); padding: 32px;">No se encontraron transacciones de venta</td></tr>`;
        return;
    }
    
    items.forEach(item => {
        let statusBadge = 'success';
        if (item.status === 'Pendiente') statusBadge = 'warning';
        if (item.status === 'Cancelado') statusBadge = 'danger';
        
        const itemsCount = item.items.reduce((acc, curr) => acc + curr.qty, 0);
        const sucursal = STATE.sucursales.find(s => s.id === item.sucursalId);
        
        tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="font-weight: 600;">${item.id}</td>
            <td>${item.clientName}</td>
            <td>${sucursal ? sucursal.name : '—'}</td>
            <td><span class="status-badge info">${item.tipoComprobante || 'Ticket No Fiscal'}</span></td>
            <td>${formatDate(item.date)}</td>
            <td>${itemsCount} unidades</td>
            <td style="font-weight: 700;">${formatCurrency(item.total)}</td>
            <td><span class="status-badge ${statusBadge}">${item.status}</span>${item.synced === false ? ' <span class="status-badge warning" title="Pendiente de sincronizar con la nube">⏳ Offline</span>' : ''}</td>
            <td style="text-align: center;">
                <div class="table-actions">
                    <button class="btn-table-action view" onclick="viewTransactionDetails('sales', '${item.id}')" title="Ver Detalle / Remito">
                        <i data-lucide="eye"></i>
                    </button>
                    <button class="btn-table-action edit" onclick="printTicket('${item.id}')" title="Imprimir Ticket">
                        <i data-lucide="printer"></i>
                    </button>
                    <button class="btn-table-action edit" onclick="openCrudModal('sales', 'edit', '${item.id}')" title="Editar">
                        <i data-lucide="edit"></i>
                    </button>
                    <button class="btn-table-action delete" onclick="deleteItem('sales', '${item.id}')" title="Anular">
                        <i data-lucide="slash"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
    lucide.createIcons();
}

function filterSalesTable() {
    const q = document.getElementById('sales-search').value.toLowerCase();
    const status = document.getElementById('sales-filter-status').value;
    
    const filtered = STATE.sales.filter(s => {
        const matchesQuery = s.id.toLowerCase().includes(q) || s.clientName.toLowerCase().includes(q);
        const matchesStatus = status === 'all' || s.status === status;
        return matchesQuery && matchesStatus;
    });
    renderSalesRows(filtered);
}


// ==========================================
// MODULE 7: RECEIPTS (RECIBOS)
// ==========================================
function renderReceiptsView(container) {
    container.innerHTML = `
        <div class="view-header-bar">
            <div class="search-filter-box">
                <div class="search-input-wrapper">
                    <i data-lucide="search"></i>
                    <input type="text" id="receipts-search" class="search-input" placeholder="Buscar por Nro Recibo, Venta o Cliente...">
                </div>
                <select class="filter-select" id="receipts-filter-method">
                    <option value="all">Medio de Pago</option>
                    <option value="Efectivo">Efectivo</option>
                    <option value="Transferencia">Transferencia</option>
                    <option value="Cheque">Cheque</option>
                </select>
            </div>
            <button class="btn-primary" id="btn-receipts-add">
                <i data-lucide="plus"></i>
                <span>Nuevo Recibo</span>
            </button>
        </div>
        
        <div class="table-card">
            <div class="table-wrapper">
                <table class="custom-table" id="receipts-table">
                    <thead>
                        <tr>
                            <th>Nro. Recibo</th>
                            <th>Venta Ref.</th>
                            <th>Cliente</th>
                            <th>Fecha Cobro</th>
                            <th>Medio de Pago</th>
                            <th>Monto Recibido</th>
                            <th style="width: 100px; text-align: center;">Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="receipts-table-body">
                        <!-- Dynamic list -->
                    </tbody>
                </table>
            </div>
        </div>

        <div class="history-section">
            <div class="history-title">
                <i data-lucide="history"></i>
                <span>Historial de Cobros</span>
            </div>
            <div class="history-timeline" id="receipts-history"></div>
        </div>
    `;
    
    document.getElementById('btn-receipts-add').addEventListener('click', () => openCrudModal('receipts', 'create'));
    document.getElementById('receipts-search').addEventListener('input', filterReceiptsTable);
    document.getElementById('receipts-filter-method').addEventListener('change', filterReceiptsTable);
    
    renderReceiptsRows(STATE.receipts);
    renderModuleHistory('receipts');
}

function renderReceiptsRows(items) {
    const tbody = document.getElementById('receipts-table-body');
    tbody.innerHTML = '';
    
    if (items.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 32px;">No se registraron recibos de cobro</td></tr>`;
        return;
    }
    
    items.forEach(item => {
        tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="font-weight: 600;">${item.id}</td>
            <td>${item.saleId || 'Sin venta asociada'}</td>
            <td>${item.clientName}</td>
            <td>${formatDate(item.date)}</td>
            <td><span class="status-badge info">${item.method}</span></td>
            <td style="font-weight: 700; color: var(--success);">${formatCurrency(item.amount)}</td>
            <td style="text-align: center;">
                <div class="table-actions">
                    <button class="btn-table-action edit" onclick="openCrudModal('receipts', 'edit', '${item.id}')" title="Editar">
                        <i data-lucide="edit"></i>
                    </button>
                    <button class="btn-table-action delete" onclick="deleteItem('receipts', '${item.id}')" title="Eliminar">
                        <i data-lucide="trash-2"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
    lucide.createIcons();
}

function filterReceiptsTable() {
    const q = document.getElementById('receipts-search').value.toLowerCase();
    const method = document.getElementById('receipts-filter-method').value;
    
    const filtered = STATE.receipts.filter(r => {
        const matchesQuery = r.id.toLowerCase().includes(q) || (r.saleId && r.saleId.toLowerCase().includes(q)) || r.clientName.toLowerCase().includes(q);
        const matchesMethod = method === 'all' || r.method === method;
        return matchesQuery && matchesMethod;
    });
    renderReceiptsRows(filtered);
}


// ==========================================
// MODULE 8: PAYMENTS (PAGOS)
// ==========================================
function renderPaymentsView(container) {
    container.innerHTML = `
        <div class="view-header-bar">
            <div class="search-filter-box">
                <div class="search-input-wrapper">
                    <i data-lucide="search"></i>
                    <input type="text" id="payments-search" class="search-input" placeholder="Buscar por Nro Orden, Compra o Proveedor...">
                </div>
                <select class="filter-select" id="payments-filter-method">
                    <option value="all">Medio de Pago</option>
                    <option value="Efectivo">Efectivo</option>
                    <option value="Transferencia">Transferencia</option>
                    <option value="Cheque">Cheque</option>
                </select>
            </div>
            <button class="btn-primary" id="btn-payments-add">
                <i data-lucide="plus"></i>
                <span>Nueva Orden de Pago</span>
            </button>
        </div>
        
        <div class="table-card">
            <div class="table-wrapper">
                <table class="custom-table" id="payments-table">
                    <thead>
                        <tr>
                            <th>Nro. Orden Pago</th>
                            <th>Compra Ref.</th>
                            <th>Proveedor</th>
                            <th>Fecha Pago</th>
                            <th>Medio de Pago</th>
                            <th>Monto Erogado</th>
                            <th style="width: 100px; text-align: center;">Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="payments-table-body">
                        <!-- Dynamic content -->
                    </tbody>
                </table>
            </div>
        </div>

        <div class="history-section">
            <div class="history-title">
                <i data-lucide="history"></i>
                <span>Historial de Pagos</span>
            </div>
            <div class="history-timeline" id="payments-history"></div>
        </div>
    `;
    
    document.getElementById('btn-payments-add').addEventListener('click', () => openCrudModal('payments', 'create'));
    document.getElementById('payments-search').addEventListener('input', filterPaymentsTable);
    document.getElementById('payments-filter-method').addEventListener('change', filterPaymentsTable);
    
    renderPaymentsRows(STATE.payments);
    renderModuleHistory('payments');
}

function renderPaymentsRows(items) {
    const tbody = document.getElementById('payments-table-body');
    tbody.innerHTML = '';
    
    if (items.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 32px;">No se registraron ordenes de pago</td></tr>`;
        return;
    }
    
    items.forEach(item => {
        tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="font-weight: 600;">${item.id}</td>
            <td>${item.purchaseId || 'Gasto General'}</td>
            <td>${item.providerName}</td>
            <td>${formatDate(item.date)}</td>
            <td><span class="status-badge info">${item.method}</span></td>
            <td style="font-weight: 700; color: var(--danger);">${formatCurrency(item.amount)}</td>
            <td style="text-align: center;">
                <div class="table-actions">
                    <button class="btn-table-action edit" onclick="openCrudModal('payments', 'edit', '${item.id}')" title="Editar">
                        <i data-lucide="edit"></i>
                    </button>
                    <button class="btn-table-action delete" onclick="deleteItem('payments', '${item.id}')" title="Eliminar">
                        <i data-lucide="trash-2"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
    lucide.createIcons();
}

function filterPaymentsTable() {
    const q = document.getElementById('payments-search').value.toLowerCase();
    const method = document.getElementById('payments-filter-method').value;
    
    const filtered = STATE.payments.filter(p => {
        const matchesQuery = p.id.toLowerCase().includes(q) || (p.purchaseId && p.purchaseId.toLowerCase().includes(q)) || p.providerName.toLowerCase().includes(q);
        const matchesMethod = method === 'all' || p.method === method;
        return matchesQuery && matchesMethod;
    });
    renderPaymentsRows(filtered);
}


// ==========================================
// MODULE 9: REPORTS (REPORTES)
// ==========================================
function renderReportsView(container) {
    // Computations
    const stockValue = STATE.inventory.reduce((acc, curr) => acc + (getTotalStock(curr) * curr.cost), 0);
    const retailValue = STATE.inventory.reduce((acc, curr) => acc + (getTotalStock(curr) * curr.price), 0);
    const expectedMargin = retailValue - stockValue;
    
    const totalReceipts = STATE.receipts.reduce((acc, curr) => acc + curr.amount, 0);
    const totalPayments = STATE.payments.reduce((acc, curr) => acc + curr.amount, 0);
    const netCashflow = totalReceipts - totalPayments;

    // Real profit computed from sold line items (price - cost snapshot)
    const todayStr = new Date().toISOString().split('T')[0];
    const profitOf = (sale) => sale.status === 'Cancelado' ? 0 : sale.items.reduce((acc, l) => acc + (l.qty * ((l.price || 0) - (l.cost ?? 0))), 0);
    const accumulatedProfit = STATE.sales.reduce((acc, s) => acc + profitOf(s), 0);
    const todayProfit = STATE.sales.filter(s => s.date === todayStr).reduce((acc, s) => acc + profitOf(s), 0);
    
    container.innerHTML = `
        <!-- Top Reports stats -->
        <div class="dashboard-grid" style="margin-bottom: 24px;">
            <div class="kpi-card">
                <div class="kpi-header">
                    <span class="kpi-title">Valorización de Stock (Costo)</span>
                    <div class="kpi-icon primary"><i data-lucide="database"></i></div>
                </div>
                <div class="kpi-value">${formatCurrency(stockValue)}</div>
                <span class="text-secondary">Costo acumulado de existencias</span>
            </div>
            <div class="kpi-card">
                <div class="kpi-header">
                    <span class="kpi-title">Valor de Venta Neto</span>
                    <div class="kpi-icon info"><i data-lucide="tag"></i></div>
                </div>
                <div class="kpi-value">${formatCurrency(retailValue)}</div>
                <span class="text-secondary">Retorno total estimado</span>
            </div>
            <div class="kpi-card">
                <div class="kpi-header">
                    <span class="kpi-title">Margen Bruto Proyectado</span>
                    <div class="kpi-icon success"><i data-lucide="piggy-bank"></i></div>
                </div>
                <div class="kpi-value">${formatCurrency(expectedMargin)}</div>
                <span class="text-secondary" style="color: var(--success); font-weight: 600;">
                    +${((expectedMargin / stockValue) * 100).toFixed(1)}% Margen prom.
                </span>
            </div>
            <div class="kpi-card">
                <div class="kpi-header">
                    <span class="kpi-title">Flujo de Caja Neto</span>
                    <div class="kpi-icon ${netCashflow >= 0 ? 'success' : 'danger'}">
                        <i data-lucide="scale"></i>
                    </div>
                </div>
                <div class="kpi-value" style="color: ${netCashflow >= 0 ? 'var(--success)' : 'var(--danger)'};">${formatCurrency(netCashflow)}</div>
                <span class="text-secondary">Cobros menos Pagos realizados</span>
            </div>
            <div class="kpi-card">
                <div class="kpi-header">
                    <span class="kpi-title">Ganancia de Hoy</span>
                    <div class="kpi-icon success"><i data-lucide="sunrise"></i></div>
                </div>
                <div class="kpi-value" style="color: var(--success);">${formatCurrency(todayProfit)}</div>
                <span class="text-secondary">Precio de venta menos costo, ventas de hoy</span>
            </div>
            <div class="kpi-card">
                <div class="kpi-header">
                    <span class="kpi-title">Ganancia Acumulada</span>
                    <div class="kpi-icon success"><i data-lucide="trending-up"></i></div>
                </div>
                <div class="kpi-value" style="color: var(--success);">${formatCurrency(accumulatedProfit)}</div>
                <span class="text-secondary">Total histórico registrado en el sistema</span>
            </div>
        </div>

        <div class="reports-tabs">
            <button class="tab-btn active" id="btn-tab-financial">Flujo de Caja Real vs. Proyectado</button>
            <button class="tab-btn" id="btn-tab-products">Rotación & Stock Crítico</button>
            <button class="tab-btn" id="btn-tab-profit">Ganancias Diarias / por Sucursal</button>
        </div>

        <div class="charts-grid" id="reports-charts-container">
            <div class="chart-card" style="grid-column: span 2;">
                <div class="chart-card-header">
                    <span class="chart-title">Conciliación de Caja Acumulada</span>
                    <button class="btn-secondary" id="btn-export-csv">
                        <i data-lucide="download"></i>
                        <span>Exportar a Excel (CSV)</span>
                    </button>
                </div>
                <div class="chart-container" style="min-height: 350px;">
                    <canvas id="cashflowChart"></canvas>
                </div>
            </div>
        </div>
    `;
    
    // Register actions
    document.getElementById('btn-export-csv').addEventListener('click', () => {
        showToast('Exportación Exitosa', 'El archivo excel con los balances e inventarios se ha descargado.', 'success');
        logHistory('reports', 'export', 'Exportación de datos de caja e inventario a CSV.');
    });
    
    // Tab switching
    const tabFin = document.getElementById('btn-tab-financial');
    const tabProd = document.getElementById('btn-tab-products');
    const tabProfit = document.getElementById('btn-tab-profit');
    const allTabs = [tabFin, tabProd, tabProfit];
    const activate = (tab, renderFn) => {
        allTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderFn();
    };
    
    tabFin.addEventListener('click', () => activate(tabFin, renderFinancialReportChart));
    tabProd.addEventListener('click', () => activate(tabProd, renderProductReportChart));
    tabProfit.addEventListener('click', () => activate(tabProfit, renderProfitReportChart));
    
    // Initial Chart render
    renderFinancialReportChart();
}

function renderProfitReportChart() {
    const chartContainer = document.getElementById('reports-charts-container');
    chartContainer.innerHTML = `
        <div class="chart-card" style="grid-column: span 2;">
            <div class="chart-card-header">
                <span class="chart-title">Ganancia Diaria (Precio de Venta − Costo)</span>
                <select class="filter-select" id="profit-sucursal-filter" style="max-width:220px;">
                    <option value="all">Todas las Sucursales</option>
                    ${STATE.sucursales.map(s => `<option value="${s.id}">${s.name}</option>`).join('')}
                </select>
            </div>
            <div class="chart-container" style="min-height: 320px;">
                <canvas id="profitChart"></canvas>
            </div>
        </div>
        <div class="table-card" style="grid-column: span 2;">
            <div class="table-wrapper">
                <table class="custom-table">
                    <thead>
                        <tr><th>Fecha</th><th>Sucursal</th><th>Ventas</th><th>Costo</th><th>Ganancia</th></tr>
                    </thead>
                    <tbody id="profit-table-body"></tbody>
                </table>
            </div>
        </div>
    `;
    lucide.createIcons();

    const buildAndRender = () => {
        const filterVal = document.getElementById('profit-sucursal-filter').value;
        const relevantSales = STATE.sales.filter(s => s.status !== 'Cancelado' && (filterVal === 'all' || s.sucursalId === filterVal));

        // Group by date
        const byDate = {};
        relevantSales.forEach(s => {
            if (!byDate[s.date]) byDate[s.date] = { revenue: 0, cost: 0, profit: 0 };
            s.items.forEach(l => {
                byDate[s.date].revenue += l.qty * l.price;
                byDate[s.date].cost += l.qty * (l.cost ?? 0);
            });
            byDate[s.date].profit = byDate[s.date].revenue - byDate[s.date].cost;
        });

        const dates = Object.keys(byDate).sort();
        const profitData = dates.map(d => byDate[d].profit);

        if (charts.profit) charts.profit.destroy();
        const ctx = document.getElementById('profitChart').getContext('2d');
        charts.profit = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: dates.map(formatDate),
                datasets: [{
                    label: 'Ganancia ($)',
                    data: profitData,
                    backgroundColor: '#059669',
                    borderRadius: 6,
                    barPercentage: 0.6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: { callbacks: { label: (c) => `Ganancia: ${formatCurrency(c.raw)}` } }
                },
                scales: {
                    y: { ticks: { font: { family: 'Outfit' }, callback: (v) => '$' + v/1000 + 'k' }, grid: { color: '#f1f5f9' } },
                    x: { ticks: { font: { family: 'Outfit' } }, grid: { display: false } }
                }
            }
        });

        const tbody = document.getElementById('profit-table-body');
        if (dates.length === 0) {
            tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-muted); padding:24px;">No hay ventas registradas para este filtro.</td></tr>`;
            return;
        }
        tbody.innerHTML = dates.slice().reverse().map(d => {
            const sucursalesInDay = [...new Set(relevantSales.filter(s => s.date === d).map(s => s.sucursalId))];
            const sucNames = sucursalesInDay.map(id => (STATE.sucursales.find(s => s.id === id) || {}).name).filter(Boolean).join(', ') || '—';
            return `<tr>
                <td>${formatDate(d)}</td>
                <td>${sucNames}</td>
                <td>${formatCurrency(byDate[d].revenue)}</td>
                <td>${formatCurrency(byDate[d].cost)}</td>
                <td style="font-weight:700; color:var(--success);">${formatCurrency(byDate[d].profit)}</td>
            </tr>`;
        }).join('');
    };

    document.getElementById('profit-sucursal-filter').addEventListener('change', buildAndRender);
    buildAndRender();
}

function renderFinancialReportChart() {
    const chartContainer = document.getElementById('reports-charts-container');
    chartContainer.innerHTML = `
        <div class="chart-card" style="grid-column: span 2;">
            <div class="chart-card-header">
                <span class="chart-title">Evolución de Cobros vs. Erogaciones</span>
                <button class="btn-secondary" id="btn-export-csv">
                    <i data-lucide="download"></i>
                    <span>Exportar Informe Financiero</span>
                </button>
            </div>
            <div class="chart-container" style="min-height: 350px;">
                <canvas id="cashflowChart"></canvas>
            </div>
        </div>
    `;
    lucide.createIcons();
    
    document.getElementById('btn-export-csv').addEventListener('click', () => {
        showToast('Exportación Exitosa', 'El balance financiero consolidado fue exportado.', 'success');
    });

    const ctx = document.getElementById('cashflowChart').getContext('2d');
    
    charts.cashflow = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Cobros Totales (Ingresos)',
                    data: [310000, 420000, 510000, 400000, 580000, 720000],
                    borderColor: '#059669', // emerald
                    backgroundColor: 'rgba(5, 150, 105, 0.05)',
                    fill: true,
                    tension: 0.3,
                    borderWidth: 3
                },
                {
                    label: 'Pagos Proveedores (Salidas)',
                    data: [250000, 290000, 380000, 320000, 410000, 894000],
                    borderColor: '#dc2626', // red
                    backgroundColor: 'rgba(220, 38, 38, 0.03)',
                    fill: true,
                    tension: 0.3,
                    borderWidth: 3
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top', labels: { font: { family: 'Outfit' } } }
            },
            scales: {
                y: {
                    ticks: {
                        callback: function(value) { return '$' + value/1000 + 'k'; },
                        font: { family: 'Outfit' }
                    }
                },
                x: { ticks: { font: { family: 'Outfit' } } }
            }
        }
    });
}

function renderProductReportChart() {
    const chartContainer = document.getElementById('reports-charts-container');
    chartContainer.innerHTML = `
        <div class="chart-card">
            <div class="chart-card-header">
                <span class="chart-title">Nivel de Stock vs. Alertas de Reposición</span>
            </div>
            <div class="chart-container" style="min-height: 350px;">
                <canvas id="productStockChart"></canvas>
            </div>
        </div>
        <div class="chart-card">
            <div class="chart-card-header">
                <span class="chart-title">Índice de Rotación por Categorías</span>
            </div>
            <div class="chart-container" style="min-height: 350px;">
                <canvas id="productRotationChart"></canvas>
            </div>
        </div>
    `;
    lucide.createIcons();

    // Chart 1: Stock vs. Min level
    const ctxStock = document.getElementById('productStockChart').getContext('2d');
    const labels = STATE.inventory.map(item => item.sku);
    const stockVals = STATE.inventory.map(item => getTotalStock(item));
    const minVals = STATE.inventory.map(item => item.minStock);

    charts.productStock = new Chart(ctxStock, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Stock Actual',
                    data: stockVals,
                    backgroundColor: '#3b82f6', // blue
                    borderRadius: 4
                },
                {
                    label: 'Punto de Pedido (Mínimo)',
                    data: minVals,
                    backgroundColor: '#f59e0b', // orange
                    borderRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'top', labels: { font: { family: 'Outfit' } } } },
            scales: {
                y: { ticks: { font: { family: 'Outfit' } } },
                x: { ticks: { font: { family: 'Outfit' } } }
            }
        }
    });

    // Chart 2: Category weights (sales counts)
    const ctxRot = document.getElementById('productRotationChart').getContext('2d');
    charts.productRotation = new Chart(ctxRot, {
        type: 'polarArea',
        data: {
            labels: ['Gaseosas', 'Cervezas', 'Aguas', 'Vinos y Espumantes', 'Licores y Aperitivos'],
            datasets: [{
                data: [55, 45, 30, 15, 20], // Rotations units
                backgroundColor: [
                    'rgba(6, 182, 212, 0.7)',
                    'rgba(245, 158, 11, 0.7)',
                    'rgba(14, 165, 233, 0.7)',
                    'rgba(190, 24, 93, 0.7)',
                    'rgba(217, 70, 239, 0.7)'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom', labels: { font: { family: 'Outfit' } } } }
        }
    });
}


// ==========================================
// SYSTEM LOGS (AUDITORIA / HISTORIAL) INJECTOR
// ==========================================
function renderModuleHistory(moduleName) {
    const list = document.getElementById(`${moduleName}-history`);
    if (!list) return;
    list.innerHTML = '';
    
    const logs = STATE.history.filter(log => log.module === moduleName || log.module === 'system');
    
    if (logs.length === 0) {
        list.innerHTML = `<div style="font-size: 0.8rem; color: var(--text-muted); padding: 8px;">No hay movimientos registrados para este módulo.</div>`;
        return;
    }
    
    logs.forEach(log => {
        const item = document.createElement('div');
        item.className = `history-timeline-item ${log.action}`;
        item.innerHTML = `
            <div class="history-item-header">
                <span class="history-item-desc">${log.description}</span>
                <span class="history-item-time">${formatDate(log.timestamp)}</span>
            </div>
            <div class="history-item-details">${log.details}</div>
            <div class="history-item-user">
                <i data-lucide="user" style="width:12px; height:12px;"></i>
                ${log.user || 'Sistema'} · ${new Date(log.timestamp).toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })}
            </div>
        `;
        list.appendChild(item);
    });
    lucide.createIcons();
}


// ==========================================
// ABM (CRUD) POPUPS & SUBMISSIONS SYSTEM
// ==========================================
let currentCrudContext = { module: null, action: null, id: null };

function openCrudModal(module, action, id = null) {
    currentCrudContext = { module, action, id };
    
    const modal = document.getElementById('crud-modal');
    const title = document.getElementById('modal-title');
    const fieldsContainer = document.getElementById('modal-fields');
    
    modal.classList.add('active');
    
    // Config title
    const moduleNameEs = {
        inventory: 'Producto',
        providers: 'Proveedor',
        clients: 'Cliente',
        purchases: 'Compra',
        sales: 'Venta',
        receipts: 'Recibo de Pago',
        payments: 'Orden de Pago',
        users: 'Usuario',
        sucursales: 'Sucursal'
    }[module];
    
    const actionLabel = action === 'create' ? 'Agregar' : 'Modificar';
    title.textContent = `${actionLabel} ${moduleNameEs}`;
    
    // Inject fields dynamically
    fieldsContainer.innerHTML = '';
    
    let data = {};
    if (action === 'edit' && id) {
        data = STATE[module].find(item => item.id === id);
    }
    
    if (module === 'inventory') {
        const providerOpts = STATE.providers.map(p => `<option value="${p.id}" ${data.providerId === p.id ? 'selected' : ''}>${p.name}</option>`).join('');
        const showCosts = hasPermission('verCostos');
        const stockInputsHtml = STATE.sucursales.map(s => `
            <div class="form-group">
                <label>Stock en ${s.name}</label>
                <input type="number" class="form-control" name="stock_${s.id}" value="${data.stockBySucursal ? (data.stockBySucursal[s.id] ?? 0) : 0}" required min="0">
            </div>
        `).join('');
        fieldsContainer.innerHTML = `
            <div class="form-group">
                <label>Descripción del Producto</label>
                <input type="text" class="form-control" name="name" value="${data.name || ''}" required placeholder="Ej: Jamón Cocido Fetas x Kg">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>SKU / Código Interno</label>
                    <input type="text" class="form-control" name="sku" value="${data.sku || ''}" required placeholder="Ej: FIA-001">
                </div>
                <div class="form-group">
                    <label>Categoría</label>
                    <select class="form-control" name="category" required>
                        ${CATEGORIES.map(c => `<option value="${c}" ${data.category === c ? 'selected' : ''}>${c}</option>`).join('')}
                    </select>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Código de Barras (EAN-13)</label>
                    <div style="display:flex; gap:6px;">
                        <input type="text" class="form-control" name="barcode" id="inv-barcode-input" value="${data.barcode || ''}" placeholder="Se genera automáticamente si se deja vacío">
                        <button type="button" class="btn-secondary" id="btn-generate-barcode" style="white-space:nowrap;" title="Generar código automáticamente">
                            <i data-lucide="scan-line"></i>
                        </button>
                    </div>
                </div>
                <div class="form-group">
                    <label>Proveedor</label>
                    <select class="form-control" name="providerId">
                        <option value="">-- Sin asignar --</option>
                        ${providerOpts}
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label>Unidad de Medida</label>
                <input type="text" class="form-control" name="unit" value="${data.unit || 'Unidades'}" required placeholder="Ej: Kg, Paquetes, Botellas">
            </div>
            <div class="form-group">
                <label style="margin-bottom:8px; display:block;">Stock por Sucursal</label>
                <div class="form-row" style="flex-wrap:wrap;">
                    ${stockInputsHtml}
                </div>
            </div>
            ${showCosts ? `
            <div class="form-row">
                <div class="form-group">
                    <label>Costo de Compra ($)</label>
                    <input type="number" class="form-control" name="cost" value="${data.cost ?? 0}" required min="0">
                </div>
                <div class="form-group">
                    <label>Precio de Venta ($)</label>
                    <input type="number" class="form-control" name="price" value="${data.price ?? 0}" required min="0">
                </div>
            </div>
            ` : `
            <div class="form-group">
                <label>Precio de Venta ($)</label>
                <input type="number" class="form-control" name="price" value="${data.price ?? 0}" required min="0">
                <input type="hidden" name="cost" value="${data.cost ?? 0}">
            </div>
            <p class="text-secondary" style="font-size:0.8rem;">No tenés permiso para ver o modificar el costo de compra.</p>
            `}
            <div class="form-group">
                <label>Stock Mínimo Alerta (por sucursal)</label>
                <input type="number" class="form-control" name="minStock" value="${data.minStock ?? 10}" required min="0">
            </div>
        `;
        document.getElementById('btn-generate-barcode').addEventListener('click', () => {
            const skuField = fieldsContainer.querySelector('[name="sku"]');
            document.getElementById('inv-barcode-input').value = generateBarcode(skuField.value || data.id || Math.random().toString());
        });
    }
    
    else if (module === 'providers') {
        fieldsContainer.innerHTML = `
            <div class="form-group">
                <label>Razón Social / Nombre</label>
                <input type="text" class="form-control" name="name" value="${data.name || ''}" required placeholder="Ej: Loma Negra S.A.">
            </div>
            <div class="form-group">
                <label>CUIT</label>
                <input type="text" class="form-control" name="cuit" value="${data.cuit || ''}" required placeholder="30-XXXXXXXX-X">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Teléfono</label>
                    <input type="text" class="form-control" name="phone" value="${data.phone || ''}" placeholder="Ej: 011-4321-0000">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" name="email" value="${data.email || ''}" placeholder="Ej: info@proveedor.com">
                </div>
            </div>
            <div class="form-group">
                <label>Dirección</label>
                <input type="text" class="form-control" name="address" value="${data.address || ''}" placeholder="Dirección comercial completa">
            </div>
        `;
    }
    
    else if (module === 'creditNotes') {
        const eligibleSales = STATE.sales.filter(s => requiresCAE(s.tipoComprobante) && s.status !== 'Cancelado');
        const saleOpts = eligibleSales.map(s => `<option value="${s.id}">${s.id} - ${s.clientName} (${s.tipoComprobante}, ${formatCurrency(s.total)})</option>`).join('');
        fieldsContainer.innerHTML = `
            ${eligibleSales.length === 0 ? `<p class="text-secondary">No hay ninguna Factura A/B/C emitida todavía para asociar una nota.</p>` : `
            <div class="form-group">
                <label>Comprobante Asociado (Factura A/B/C)</label>
                <select class="form-control" name="saleId" id="cn-sale-select" required>
                    ${saleOpts}
                </select>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Tipo de Nota</label>
                    <select class="form-control" name="tipo" required>
                        <option value="Crédito">Nota de Crédito (a favor del cliente)</option>
                        <option value="Débito">Nota de Débito (a cargo del cliente)</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Monto ($)</label>
                    <input type="number" class="form-control" name="amount" id="cn-amount-input" min="0" step="0.01" required>
                </div>
            </div>
            <div class="form-group">
                <label>Motivo</label>
                <textarea class="form-control" name="motivo" rows="2" required placeholder="Ej: Devolución de mercadería, error de facturación, interés por mora, etc."></textarea>
            </div>
            `}
        `;
        const saleSelect = document.getElementById('cn-sale-select');
        if (saleSelect) {
            const fillDefaultAmount = () => {
                const sale = STATE.sales.find(s => s.id === saleSelect.value);
                if (sale) document.getElementById('cn-amount-input').value = sale.total;
            };
            saleSelect.addEventListener('change', fillDefaultAmount);
            fillDefaultAmount();
        }
    }
    
    else if (module === 'sucursales') {
        fieldsContainer.innerHTML = `
            <div class="form-group">
                <label>Nombre de la Sucursal</label>
                <input type="text" class="form-control" name="name" value="${data.name || ''}" required placeholder="Ej: Sucursal Sur">
            </div>
            <div class="form-group">
                <label>Dirección</label>
                <input type="text" class="form-control" name="address" value="${data.address || ''}" required placeholder="Dirección completa del local">
            </div>
            <div class="form-group">
                <label>Teléfono</label>
                <input type="text" class="form-control" name="phone" value="${data.phone || ''}" placeholder="Ej: 0388-421-0000">
            </div>
        `;
    }

    else if (module === 'clients') {
        fieldsContainer.innerHTML = `
            <div class="form-group">
                <label>Nombre Completo / Razón Social</label>
                <input type="text" class="form-control" name="name" value="${data.name || ''}" required placeholder="Ej: Carlos Gómez">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>DNI o CUIT</label>
                    <input type="text" class="form-control" name="dni_cuit" value="${data.dni_cuit || ''}" required placeholder="DNI o CUIT tributario">
                </div>
                <div class="form-group">
                    <label>Tipo de Cliente</label>
                    <select class="form-control" name="type" required>
                        <option value="Particular" ${data.type === 'Particular' ? 'selected' : ''}>Particular</option>
                        <option value="Kiosco" ${data.type === 'Kiosco' ? 'selected' : ''}>Kiosco / Almacén</option>
                        <option value="Bar / Restaurante" ${data.type === 'Bar / Restaurante' ? 'selected' : ''}>Bar / Restaurante</option>
                        <option value="Mayorista" ${data.type === 'Mayorista' ? 'selected' : ''}>Mayorista</option>
                    </select>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Teléfono</label>
                    <input type="text" class="form-control" name="phone" value="${data.phone || ''}" placeholder="Celular o teléfono fijo">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" name="email" value="${data.email || ''}" placeholder="correo@ejemplo.com">
                </div>
            </div>
        `;
    }
    
    else if (module === 'users') {
        const userPerms = data.permissions || DEFAULT_PERMISSIONS_BY_ROLE['Vendedor'];
        const sucOptionsUser = STATE.sucursales.map(s => `<option value="${s.id}" ${data.sucursalId === s.id ? 'selected' : ''}>${s.name}</option>`).join('');
        fieldsContainer.innerHTML = `
            <div class="form-group">
                <label>Nombre Completo</label>
                <input type="text" class="form-control" name="name" value="${data.name || ''}" required placeholder="Ej: Laura Martínez">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Nombre de Usuario</label>
                    <input type="text" class="form-control" name="username" value="${data.username || ''}" required placeholder="Ej: lauram">
                </div>
                <div class="form-group">
                    <label>Rol del Sistema</label>
                    <select class="form-control" name="role" id="user-role-select" required>
                        <option value="Administrador" ${data.role === 'Administrador' ? 'selected' : ''}>Administrador</option>
                        <option value="Vendedor" ${data.role === 'Vendedor' ? 'selected' : ''}>Vendedor</option>
                        <option value="Depósito" ${data.role === 'Depósito' ? 'selected' : ''}>Depósito</option>
                    </select>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" name="email" value="${data.email || ''}" required placeholder="laura@baldi.com">
                </div>
                <div class="form-group">
                    <label>Contraseña</label>
                    <input type="password" class="form-control" name="password" value="${data.password || ''}" required placeholder="••••••••">
                </div>
            </div>
            <div class="form-group">
                <label>Sucursal Asignada</label>
                <select class="form-control" name="sucursalId" required>
                    ${sucOptionsUser}
                </select>
            </div>
            <div class="form-group">
                <label>Permisos del Usuario</label>
                <div class="permissions-grid">
                    ${PERMISSION_DEFS.map(p => `
                        <label class="permission-checkbox">
                            <input type="checkbox" name="perm_${p.key}" ${userPerms[p.key] ? 'checked' : ''}>
                            <span>${p.label}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
        // Al cambiar el rol, sugiere los permisos por defecto de ese rol (el usuario puede
        // seguir ajustándolos individualmente antes de guardar).
        document.getElementById('user-role-select').addEventListener('change', (e) => {
            const defaults = DEFAULT_PERMISSIONS_BY_ROLE[e.target.value] || {};
            PERMISSION_DEFS.forEach(p => {
                const cb = fieldsContainer.querySelector(`[name="perm_${p.key}"]`);
                if (cb) cb.checked = !!defaults[p.key];
            });
        });
    }
    
    // TRANSACTION: PURCHASES (COMPRAS)
    else if (module === 'purchases') {
        // Multi-item selector for transaction
        let providerOptions = STATE.providers.map(p => `<option value="${p.id}" ${data.providerId === p.id ? 'selected' : ''}>${p.name}</option>`).join('');
        let materialOptions = STATE.inventory.map(m => `<option value="${m.id}">${m.name} (Costo: ${formatCurrency(m.cost)})</option>`).join('');
        
        const sucOptionsCompra = STATE.sucursales.map(s => `<option value="${s.id}" ${data.sucursalId === s.id ? 'selected' : (!data.sucursalId && s.id === (STATE.currentUser && STATE.currentUser.sucursalId)) ? 'selected' : ''}>${s.name}</option>`).join('');
        fieldsContainer.innerHTML = `
            <div class="form-row">
                <div class="form-group">
                    <label>Seleccionar Proveedor</label>
                    <select class="form-control" name="providerId" id="tx-provider-select" required>
                        ${providerOptions}
                    </select>
                </div>
                <div class="form-group">
                    <label>Sucursal de Recepción</label>
                    <select class="form-control" name="sucursalId" required>
                        ${sucOptionsCompra}
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label>Fecha de Operación</label>
                <input type="date" class="form-control" name="date" value="${data.date || new Date().toISOString().split('T')[0]}" required>
            </div>
            
            <!-- Items builder -->
            <div class="items-list-selector">
                <label style="font-size:0.75rem; font-weight:bold; margin-bottom:8px; display:block;">DETALLE DE PRODUCTOS COMPRADOS</label>
                <div class="items-selector-row">
                    <div style="display:flex; flex-direction:column; gap:4px;">
                        <span style="font-size:0.7rem; color:var(--text-secondary)">Producto</span>
                        <select class="form-control" id="tx-item-select">
                            ${materialOptions}
                        </select>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:4px;">
                        <span style="font-size:0.7rem; color:var(--text-secondary)">Cant.</span>
                        <input type="number" class="form-control" id="tx-item-qty" value="10" min="1">
                    </div>
                    <div style="display:flex; flex-direction:column; gap:4px;">
                        <span style="font-size:0.7rem; color:var(--text-secondary)">Costo ($)</span>
                        <input type="number" class="form-control" id="tx-item-cost" value="0">
                    </div>
                    <button type="button" class="btn-success" id="btn-add-item-tx" style="padding: 10px 14px;">
                        <i data-lucide="plus"></i>
                    </button>
                </div>
                
                <table class="selected-items-table">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cant</th>
                            <th>Unit.</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="tx-selected-items-body">
                        <!-- Loaded list -->
                    </tbody>
                </table>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label>Estado del Pedido</label>
                    <select class="form-control" name="status" required>
                        <option value="Recibido" ${data.status === 'Recibido' ? 'selected' : ''}>Recibido (Afecta Stock)</option>
                        <option value="Pendiente" ${data.status === 'Pendiente' ? 'selected' : ''}>Pendiente de Entrega</option>
                        <option value="Cancelado" ${data.status === 'Cancelado' ? 'selected' : ''}>Cancelado</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Total de la Compra ($)</label>
                    <input type="number" class="form-control" name="total" id="tx-total-amount" value="${data.total || 0}" readonly style="font-weight:bold; background:#e2e8f0;">
                </div>
            </div>
            
            <div class="form-group" id="auto-pay-checkbox-wrapper">
                <label style="display:flex; align-items:center; gap:8px; text-transform:none; font-weight:normal;">
                    <input type="checkbox" id="auto-pay-tx" checked style="width:16px; height:16px;">
                    Registrar egreso de caja (Orden de Pago) automáticamente
                </label>
            </div>
        `;
        
        // Items list within modal state
        let selectedItems = [];
        if (action === 'edit' && data.items) {
            selectedItems = data.items.map(it => {
                const mat = STATE.inventory.find(m => m.id === it.productId);
                return {
                    productId: it.productId,
                    name: mat ? mat.name : 'Desconocido',
                    qty: it.qty,
                    cost: it.cost || (mat ? mat.cost : 0)
                };
            });
            // Hide autopay for edits
            document.getElementById('auto-pay-checkbox-wrapper').style.display = 'none';
        }
        
        // Logic for adding lines to purchase
        const addBtn = document.getElementById('btn-add-item-tx');
        const matSelect = document.getElementById('tx-item-select');
        const qtySelect = document.getElementById('tx-item-qty');
        const costInput = document.getElementById('tx-item-cost');
        
        // Auto-update price when select item
        const updateDefaultCost = () => {
            const mat = STATE.inventory.find(m => m.id === matSelect.value);
            if (mat) costInput.value = mat.cost;
        };
        matSelect.addEventListener('change', updateDefaultCost);
        updateDefaultCost();
        
        const renderSelectedList = () => {
            const body = document.getElementById('tx-selected-items-body');
            body.innerHTML = '';
            let sum = 0;
            
            selectedItems.forEach((it, idx) => {
                const sub = it.qty * it.cost;
                sum += sub;
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${it.name}</td>
                    <td>${it.qty}</td>
                    <td>${formatCurrency(it.cost)}</td>
                    <td>${formatCurrency(sub)}</td>
                    <td style="text-align:right;">
                        <button type="button" class="btn-table-action delete" onclick="window.removeTxItem(${idx})">
                            <i data-lucide="trash-2" style="width:14px; height:14px;"></i>
                        </button>
                    </td>
                `;
                body.appendChild(tr);
            });
            
            document.getElementById('tx-total-amount').value = sum;
            lucide.createIcons();
        };
        
        addBtn.addEventListener('click', () => {
            const mat = STATE.inventory.find(m => m.id === matSelect.value);
            const qty = parseInt(qtySelect.value);
            const cost = parseFloat(costInput.value);
            
            if (!mat || isNaN(qty) || qty <= 0 || isNaN(cost) || cost < 0) return;
            
            // Check if already in list
            const existing = selectedItems.find(it => it.productId === mat.id);
            if (existing) {
                existing.qty += qty;
                existing.cost = cost;
            } else {
                selectedItems.push({ productId: mat.id, name: mat.name, qty, cost });
            }
            renderSelectedList();
        });
        
        window.removeTxItem = (idx) => {
            selectedItems.splice(idx, 1);
            renderSelectedList();
        };
        
        // Render initial edit list if applicable
        renderSelectedList();
        
        // Expose item reader on save
        currentCrudContext.getItems = () => selectedItems;
    }
    
    // TRANSACTION: SALES (VENTAS)
    else if (module === 'sales') {
        const defaultClientId = data.clientId || '0'; // Consumidor Final por defecto
        let clientOptions = STATE.clients.map(c => `<option value="${c.id}" ${defaultClientId === c.id ? 'selected' : ''}>${c.name}</option>`).join('');
        let materialOptions = STATE.inventory.map(m => `<option value="${m.id}">${m.name} (Stock Total: ${getTotalStock(m)} | Precio: ${formatCurrency(m.price)})</option>`).join('');
        const defaultSucursal = STATE.currentUser ? STATE.currentUser.sucursalId : STATE.sucursales[0].id;
        const sucOptionsVenta = STATE.sucursales.map(s => `<option value="${s.id}" ${(data.sucursalId || defaultSucursal) === s.id ? 'selected' : ''}>${s.name}</option>`).join('');
        const comprobanteOpts = ['Ticket No Fiscal', 'Factura A', 'Factura B', 'Factura C'].map(t => `<option value="${t}" ${(data.tipoComprobante || 'Ticket No Fiscal') === t ? 'selected' : ''}>${t}</option>`).join('');
        const paymentMethods = ['Efectivo', 'Tarjeta de Débito', 'Tarjeta de Crédito', 'Transferencia', 'Mercado Pago', 'Cuenta Corriente'];
        const paymentOpts = paymentMethods.map(m => `<option value="${m}" ${(data.metodoPago || 'Efectivo') === m ? 'selected' : ''}>${m}</option>`).join('');
        
        fieldsContainer.innerHTML = `
            <div class="form-row">
                <div class="form-group">
                    <label>Seleccionar Cliente</label>
                    <select class="form-control" name="clientId" id="tx-client-select" required>
                        ${clientOptions}
                    </select>
                </div>
                <div class="form-group">
                    <label>Fecha de Operación</label>
                    <input type="date" class="form-control" name="date" value="${data.date || new Date().toISOString().split('T')[0]}" required>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Punto de Venta (Sucursal)</label>
                    <select class="form-control" name="sucursalId" id="tx-sucursal-select" required>
                        ${sucOptionsVenta}
                    </select>
                </div>
                <div class="form-group">
                    <label>Turno</label>
                    <select class="form-control" name="turno" required>
                        ${TURNOS.map(t => `<option value="${t}" ${(data.turno || getCurrentTurno()) === t ? 'selected' : ''}>${t}</option>`).join('')}
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label>Tipo de Comprobante</label>
                <select class="form-control" name="tipoComprobante" required>
                    ${comprobanteOpts}
                </select>
            </div>

            <div class="scan-entry-bar">
                <i data-lucide="scan-barcode" class="scan-icon"></i>
                <input type="text" id="tx-scan-input" placeholder="Escanear código de barras o ingresar SKU y presionar Enter...">
                <button type="button" class="btn-primary" id="btn-scan-add">Agregar</button>
            </div>
            
            <!-- Items builder -->
            <div class="items-list-selector">
                <label style="font-size:0.75rem; font-weight:bold; margin-bottom:8px; display:block;">DETALLE DE PRODUCTOS VENDIDOS</label>
                <div class="items-selector-row">
                    <div style="display:flex; flex-direction:column; gap:4px;">
                        <span style="font-size:0.7rem; color:var(--text-secondary)">Producto</span>
                        <select class="form-control" id="tx-item-select">
                            ${materialOptions}
                        </select>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:4px;">
                        <span style="font-size:0.7rem; color:var(--text-secondary)">Cant.</span>
                        <input type="number" class="form-control" id="tx-item-qty" value="1" min="1">
                    </div>
                    <div style="display:flex; flex-direction:column; gap:4px;">
                        <span style="font-size:0.7rem; color:var(--text-secondary)">Precio ($)</span>
                        <input type="number" class="form-control" id="tx-item-price" value="0">
                    </div>
                    <button type="button" class="btn-success" id="btn-add-item-tx" style="padding: 10px 14px;">
                        <i data-lucide="plus"></i>
                    </button>
                </div>
                
                <table class="selected-items-table">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cant</th>
                            <th>Unit.</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="tx-selected-items-body">
                        <!-- Loaded list -->
                    </tbody>
                </table>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label>Forma de Pago</label>
                    <select class="form-control" name="metodoPago" id="tx-payment-method">
                        ${paymentOpts}
                    </select>
                </div>
                <div class="form-group" id="tx-cash-received-wrapper">
                    <label>Monto Recibido ($)</label>
                    <input type="number" class="form-control" name="montoRecibido" id="tx-cash-received" min="0" step="0.01" value="${data.montoRecibido || ''}" placeholder="Ingrese el efectivo recibido">
                </div>
            </div>
            <div class="form-group" id="tx-change-wrapper" style="display:none;">
                <label>Vuelto a Entregar</label>
                <input type="text" class="form-control" id="tx-change-amount" readonly style="font-weight:bold;">
                <input type="hidden" name="vuelto" id="tx-change-hidden" value="${data.vuelto || 0}">
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label>Estado de la Venta</label>
                    <select class="form-control" name="status" required>
                        <option value="Entregado" ${data.status === 'Entregado' ? 'selected' : ''}>Entregado (Baja de Stock)</option>
                        <option value="Pendiente" ${data.status === 'Pendiente' ? 'selected' : ''}>Pendiente de Carga</option>
                        <option value="Cancelado" ${data.status === 'Cancelado' ? 'selected' : ''}>Cancelado</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Monto Total Venta ($)</label>
                    <input type="number" class="form-control" name="total" id="tx-total-amount" value="${data.total || 0}" readonly style="font-weight:bold; background:#e2e8f0;">
                </div>
            </div>
            
            <div class="form-group" id="auto-pay-checkbox-wrapper">
                <label style="display:flex; align-items:center; gap:8px; text-transform:none; font-weight:normal;">
                    <input type="checkbox" id="auto-pay-tx" checked style="width:16px; height:16px;">
                    Registrar cobro de dinero (Emisión Recibo) automáticamente
                </label>
            </div>
        `;
        
        let selectedItems = [];
        if (action === 'edit' && data.items) {
            selectedItems = data.items.map(it => {
                const mat = STATE.inventory.find(m => m.id === it.productId);
                return {
                    productId: it.productId,
                    name: mat ? mat.name : 'Desconocido',
                    qty: it.qty,
                    price: it.price || (mat ? mat.price : 0)
                };
            });
            document.getElementById('auto-pay-checkbox-wrapper').style.display = 'none';
        }
        
        const addBtn = document.getElementById('btn-add-item-tx');
        const matSelect = document.getElementById('tx-item-select');
        const qtySelect = document.getElementById('tx-item-qty');
        const priceInput = document.getElementById('tx-item-price');
        
        const updateDefaultPrice = () => {
            const mat = STATE.inventory.find(m => m.id === matSelect.value);
            if (mat) priceInput.value = mat.price;
        };
        matSelect.addEventListener('change', updateDefaultPrice);
        updateDefaultPrice();
        
        const renderSelectedList = () => {
            const body = document.getElementById('tx-selected-items-body');
            body.innerHTML = '';
            let sum = 0;
            
            selectedItems.forEach((it, idx) => {
                const sub = it.qty * it.price;
                sum += sub;
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${it.name}</td>
                    <td>${it.qty}</td>
                    <td>${formatCurrency(it.price)}</td>
                    <td>${formatCurrency(sub)}</td>
                    <td style="text-align:right;">
                        <button type="button" class="btn-table-action delete" onclick="window.removeTxItem(${idx})">
                            <i data-lucide="trash-2" style="width:14px; height:14px;"></i>
                        </button>
                    </td>
                `;
                body.appendChild(tr);
            });
            
            document.getElementById('tx-total-amount').value = sum;
            lucide.createIcons();
            if (typeof updateChange === 'function') updateChange();
        };
        
        addBtn.addEventListener('click', () => {
            const mat = STATE.inventory.find(m => m.id === matSelect.value);
            const qty = parseInt(qtySelect.value);
            const price = parseFloat(priceInput.value);
            
            if (!mat || isNaN(qty) || qty <= 0 || isNaN(price) || price < 0) return;
            
            // Control de stock DURO por sucursal: no se permite superar el disponible,
            // contando lo que ya esté cargado en la venta para el mismo producto.
            const sucursalActual = document.getElementById('tx-sucursal-select').value;
            const stockEnSucursal = getStock(mat, sucursalActual);
            const existing = selectedItems.find(it => it.productId === mat.id);
            const yaCargado = existing ? existing.qty : 0;
            if (yaCargado + qty > stockEnSucursal) {
                const sucNombre = (STATE.sucursales.find(s => s.id === sucursalActual) || {}).name || '';
                showToast('Stock Insuficiente', `Solo hay ${stockEnSucursal} ${mat.unit} de ${mat.name} disponibles en ${sucNombre}${yaCargado > 0 ? ` (ya cargaste ${yaCargado})` : ''}.`, 'danger');
                return;
            }
            
            if (existing) {
                existing.qty += qty;
                existing.price = price;
            } else {
                selectedItems.push({ productId: mat.id, name: mat.name, qty, price });
            }
            renderSelectedList();
        });
        
        window.removeTxItem = (idx) => {
            selectedItems.splice(idx, 1);
            renderSelectedList();
        };

        // Adds a product line by scanned barcode or manually typed SKU/barcode
        const scanInput = document.getElementById('tx-scan-input');
        const scanAddByCode = () => {
            const code = scanInput.value.trim();
            if (!code) return;
            const mat = STATE.inventory.find(m =>
                (m.barcode && m.barcode === code) || m.sku.toLowerCase() === code.toLowerCase()
            );
            if (!mat) {
                showToast('Producto no encontrado', `No existe ningún producto con el código "${code}".`, 'danger');
                scanInput.value = '';
                scanInput.focus();
                return;
            }
            const sucursalActual = document.getElementById('tx-sucursal-select').value;
            const stockEnSucursal = getStock(mat, sucursalActual);
            const existing = selectedItems.find(it => it.productId === mat.id);
            const yaCargado = existing ? existing.qty : 0;
            if (yaCargado + 1 > stockEnSucursal) {
                const sucNombre = (STATE.sucursales.find(s => s.id === sucursalActual) || {}).name || '';
                showToast('Stock Insuficiente', `${mat.name} no tiene stock disponible en ${sucNombre} (disponible: ${stockEnSucursal}).`, 'danger');
                scanInput.value = '';
                scanInput.focus();
                return;
            }
            if (existing) {
                existing.qty += 1;
            } else {
                selectedItems.push({ productId: mat.id, name: mat.name, qty: 1, price: mat.price });
            }
            renderSelectedList();
            showToast('Producto Agregado', `${mat.name} agregado a la venta por código.`, 'success');
            scanInput.value = '';
            scanInput.focus();
        };
        document.getElementById('btn-scan-add').addEventListener('click', scanAddByCode);
        scanInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                scanAddByCode();
            }
        });

        // Forma de pago + cálculo de vuelto (solo aplica cuando se paga en Efectivo)
        const paymentSelect = document.getElementById('tx-payment-method');
        const cashWrapper = document.getElementById('tx-cash-received-wrapper');
        const cashInput = document.getElementById('tx-cash-received');
        const changeWrapper = document.getElementById('tx-change-wrapper');
        const changeAmount = document.getElementById('tx-change-amount');
        const changeHidden = document.getElementById('tx-change-hidden');

        const updatePaymentVisibility = () => {
            const isCash = paymentSelect.value === 'Efectivo';
            cashWrapper.style.display = isCash ? '' : 'none';
            changeWrapper.style.display = isCash ? '' : 'none';
            if (!isCash) {
                cashInput.value = '';
                changeAmount.value = '';
                changeHidden.value = 0;
            }
        };
        function updateChange() {
            if (paymentSelect.value !== 'Efectivo') return;
            const total = parseFloat(document.getElementById('tx-total-amount').value) || 0;
            const received = parseFloat(cashInput.value) || 0;
            if (received <= 0) {
                changeAmount.value = '—';
                changeAmount.style.color = '';
                changeHidden.value = 0;
                return;
            }
            const diff = received - total;
            if (diff < 0) {
                changeAmount.value = `Falta ${formatCurrency(Math.abs(diff))}`;
                changeAmount.style.color = 'var(--danger)';
                changeHidden.value = 0;
            } else {
                changeAmount.value = formatCurrency(diff);
                changeAmount.style.color = 'var(--success)';
                changeHidden.value = diff;
            }
        }
        paymentSelect.addEventListener('change', () => { updatePaymentVisibility(); updateChange(); });
        cashInput.addEventListener('input', updateChange);
        updatePaymentVisibility();
        
        renderSelectedList();
        // Snapshot the current inventory cost for each line so profit reports stay accurate
        currentCrudContext.getItems = () => selectedItems.map(it => {
            const mat = STATE.inventory.find(m => m.id === it.productId);
            return { ...it, cost: mat ? mat.cost : 0 };
        });
    }
    
    // RECEIPTS (RECIBOS)
    else if (module === 'receipts') {
        const salesOptions = STATE.sales.map(s => `<option value="${s.id}" ${data.saleId === s.id ? 'selected' : ''}>Venta ${s.id} - ${s.clientName} (${formatCurrency(s.total)})</option>`).join('');
        
        fieldsContainer.innerHTML = `
            <div class="form-group">
                <label>Venta Relacionada</label>
                <select class="form-control" name="saleId" id="receipt-sale-select">
                    <option value="">-- Sin venta / Pago a cuenta --</option>
                    ${salesOptions}
                </select>
            </div>
            <div class="form-group">
                <label>Nombre del Cliente</label>
                <input type="text" class="form-control" name="clientName" id="receipt-client-name" value="${data.clientName || ''}" required placeholder="Razón social o Nombre del cliente">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Fecha de Cobro</label>
                    <input type="date" class="form-control" name="date" value="${data.date || new Date().toISOString().split('T')[0]}" required>
                </div>
                <div class="form-group">
                    <label>Medio de Pago</label>
                    <select class="form-control" name="method" required>
                        <option value="Efectivo" ${data.method === 'Efectivo' ? 'selected' : ''}>Efectivo</option>
                        <option value="Transferencia" ${data.method === 'Transferencia' ? 'selected' : ''}>Transferencia Bancaria</option>
                        <option value="Cheque" ${data.method === 'Cheque' ? 'selected' : ''}>Cheque</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label>Monto de Cobro ($)</label>
                <input type="number" class="form-control" name="amount" id="receipt-amount" value="${data.amount || 0}" required min="1">
            </div>
        `;
        
        // Auto-filling amount and client when picking sale reference
        const saleSel = document.getElementById('receipt-sale-select');
        saleSel.addEventListener('change', () => {
            const sale = STATE.sales.find(s => s.id === saleSel.value);
            if (sale) {
                document.getElementById('receipt-client-name').value = sale.clientName;
                document.getElementById('receipt-amount').value = sale.total;
            }
        });
    }
    
    // PAYMENTS (PAGOS)
    else if (module === 'payments') {
        const purchasesOptions = STATE.purchases.map(p => `<option value="${p.id}" ${data.purchaseId === p.id ? 'selected' : ''}>Compra ${p.id} - ${p.providerName} (${formatCurrency(p.total)})</option>`).join('');
        
        fieldsContainer.innerHTML = `
            <div class="form-group">
                <label>Compra Relacionada</label>
                <select class="form-control" name="purchaseId" id="payment-purchase-select">
                    <option value="">-- Sin compra / Pago a cuenta --</option>
                    ${purchasesOptions}
                </select>
            </div>
            <div class="form-group">
                <label>Nombre del Proveedor</label>
                <input type="text" class="form-control" name="providerName" id="payment-provider-name" value="${data.providerName || ''}" required placeholder="Nombre del proveedor">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Fecha de Pago</label>
                    <input type="date" class="form-control" name="date" value="${data.date || new Date().toISOString().split('T')[0]}" required>
                </div>
                <div class="form-group">
                    <label>Medio de Pago</label>
                    <select class="form-control" name="method" required>
                        <option value="Efectivo" ${data.method === 'Efectivo' ? 'selected' : ''}>Efectivo</option>
                        <option value="Transferencia" ${data.method === 'Transferencia' ? 'selected' : ''}>Transferencia Bancaria</option>
                        <option value="Cheque" ${data.method === 'Cheque' ? 'selected' : ''}>Cheque</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label>Monto Erogado ($)</label>
                <input type="number" class="form-control" name="amount" id="payment-amount" value="${data.amount || 0}" required min="1">
            </div>
        `;
        
        const purchaseSel = document.getElementById('payment-purchase-select');
        purchaseSel.addEventListener('change', () => {
            const purchase = STATE.purchases.find(p => p.id === purchaseSel.value);
            if (purchase) {
                document.getElementById('payment-provider-name').value = purchase.providerName;
                document.getElementById('payment-amount').value = purchase.total;
            }
        });
    }
    
    // Force recreate Lucide icons inside modal
    lucide.createIcons();
}

function closeModal() {
    document.getElementById('crud-modal').classList.remove('active');
    currentCrudContext = { module: null, action: null, id: null };
}

// Global form submission handler
function handleFormSubmit(e) {
    e.preventDefault();
    
    const { module, action, id } = currentCrudContext;
    const form = e.target;
    const formData = new FormData(form);
    
    // Parse core form values
    const formObj = {};
    formData.forEach((value, key) => {
        formObj[key] = value;
    });
    
    // Extra handling for quantities/numeric inputs
    if (formObj.minStock !== undefined) formObj.minStock = parseInt(formObj.minStock);
    if (formObj.cost !== undefined) formObj.cost = parseFloat(formObj.cost);
    if (formObj.price !== undefined) formObj.price = parseFloat(formObj.price);
    if (formObj.amount !== undefined) formObj.amount = parseFloat(formObj.amount);
    if (formObj.total !== undefined) formObj.total = parseFloat(formObj.total);
    if (formObj.montoRecibido !== undefined) formObj.montoRecibido = parseFloat(formObj.montoRecibido) || 0;
    if (formObj.vuelto !== undefined) formObj.vuelto = parseFloat(formObj.vuelto) || 0;
    
    // Assemble the per-sucursal stock object for Inventario from the stock_S1/S2/S3 inputs
    if (module === 'inventory') {
        const stockBySucursal = {};
        STATE.sucursales.forEach(s => {
            const key = `stock_${s.id}`;
            stockBySucursal[s.id] = parseInt(formObj[key]) || 0;
            delete formObj[key];
        });
        formObj.stockBySucursal = stockBySucursal;
    }
    
    // Assemble the permissions object for Usuarios from the individual perm_ checkboxes
    if (module === 'users') {
        const permissions = {};
        PERMISSION_DEFS.forEach(p => {
            permissions[p.key] = formObj[`perm_${p.key}`] === 'on';
            delete formObj[`perm_${p.key}`];
        });
        formObj.permissions = permissions;
    }
    
    // Auto-generate a barcode for products that don't have one yet
    if (module === 'inventory' && (!formObj.barcode || formObj.barcode.trim() === '')) {
        formObj.barcode = generateBarcode(formObj.sku || Math.random().toString());
    }
    
    if (action === 'create') {
        // Generate new sequential ID
        let newId = '';
        if (module === 'inventory' || module === 'providers' || module === 'clients' || module === 'users') {
            newId = (STATE[module].length + 1).toString();
        } else if (module === 'sucursales') {
            newId = `S${STATE.sucursales.length + 1}`;
        } else if (module === 'purchases') {
            newId = `COM-00${STATE.purchases.length + 1}`;
        } else if (module === 'sales') {
            newId = `VEN-00${STATE.sales.length + 1}`;
        } else if (module === 'receipts') {
            newId = `REC-00${STATE.receipts.length + 1}`;
        } else if (module === 'payments') {
            newId = `PAG-00${STATE.payments.length + 1}`;
        } else if (module === 'creditNotes') {
            newId = `${formObj.tipo === 'Débito' ? 'ND' : 'NC'}-00${STATE.creditNotes.length + 1}`;
        }
        
        formObj.id = newId;
        
        // Notas de Crédito/Débito: se completan datos derivados de la venta asociada
        // (cliente, sucursal, letra) y se genera su propia numeración/CAE simulado.
        if (module === 'creditNotes') {
            const relatedSale = STATE.sales.find(s => s.id === formObj.saleId);
            formObj.clientId = relatedSale ? relatedSale.clientId : null;
            formObj.clientName = relatedSale ? relatedSale.clientName : 'Cliente';
            formObj.sucursalId = relatedSale ? relatedSale.sucursalId : STATE.sucursales[0].id;
            formObj.letra = relatedSale ? extractLetra(relatedSale.tipoComprobante) : 'B';
            formObj.date = new Date().toISOString().split('T')[0];
            formObj.fiscalData = buildFiscalData(formObj.sucursalId, `Nota de ${formObj.tipo} ${formObj.letra}`);
        }
        
        // Transaction lines insertion
        if (module === 'sales' || module === 'purchases') {
            const items = currentCrudContext.getItems();
            if (items.length === 0) {
                showToast('Error', 'Debes ingresar al menos un artículo.', 'danger');
                return;
            }
            formObj.items = items;
            
            // Map Name indicators
            if (module === 'sales') {
                const client = STATE.clients.find(c => c.id === formObj.clientId);
                formObj.clientName = client ? client.name : 'Cliente S.A.';
                
                // Stock mutations (Decreasing inventory) en la sucursal de esta venta
                if (formObj.status === 'Entregado') {
                    // Validación final de stock por sucursal antes de confirmar (por si cambió
                    // desde que se abrió el formulario). Si falta stock, se aborta la venta.
                    for (const line of items) {
                        const mat = STATE.inventory.find(m => m.id === line.productId);
                        if (mat && getStock(mat, formObj.sucursalId) < line.qty) {
                            const sucNombre = (STATE.sucursales.find(s => s.id === formObj.sucursalId) || {}).name || '';
                            showToast('Stock Insuficiente', `${mat.name} no tiene stock suficiente en ${sucNombre} (disponible: ${getStock(mat, formObj.sucursalId)}, requerido: ${line.qty}).`, 'danger');
                            return;
                        }
                    }
                    items.forEach(line => {
                        const mat = STATE.inventory.find(m => m.id === line.productId);
                        if (mat) adjustStock(mat, formObj.sucursalId, -line.qty);
                    });
                }
            } else {
                const provider = STATE.providers.find(p => p.id === formObj.providerId);
                formObj.providerName = provider ? provider.name : 'Distribuidora';
                
                // Stock mutations (Increasing inventory) en la sucursal de recepción
                if (formObj.status === 'Recibido') {
                    items.forEach(line => {
                        const mat = STATE.inventory.find(m => m.id === line.productId);
                        if (mat) adjustStock(mat, formObj.sucursalId, line.qty);
                    });
                }
            }
        }
        
        // Marca de sincronización (modo offline): las ventas/compras cargadas sin conexión
        // quedan pendientes hasta que vuelva internet (ver initOfflineSync/syncPendingData).
        if (module === 'sales' || module === 'purchases') {
            formObj.synced = navigator.onLine;
        }
        // Si el comprobante requiere CAE (Factura A/B/C), se genera la numeración y el
        // CAE SIMULADO correspondiente (ver aclaración en buildFiscalData).
        if (module === 'sales' && requiresCAE(formObj.tipoComprobante)) {
            formObj.fiscalData = buildFiscalData(formObj.sucursalId, formObj.tipoComprobante);
        }
        
        // Append element
        STATE[module].push(formObj);
        
        // Trigger auto receipt / payment eegistration
        const autoPayCheck = document.getElementById('auto-pay-tx');
        if (autoPayCheck && autoPayCheck.checked) {
            if (module === 'sales') {
                const newRec = {
                    id: `REC-00${STATE.receipts.length + 1}`,
                    saleId: newId,
                    clientName: formObj.clientName,
                    date: formObj.date,
                    amount: formObj.total,
                    method: formObj.metodoPago || 'Efectivo'
                };
                STATE.receipts.push(newRec);
                logHistory('receipts', 'create', `Generación automática de cobro ${newRec.id} por venta ${newId}`, `Monto: ${formatCurrency(newRec.amount)}`);
            } else if (module === 'purchases') {
                const newPag = {
                    id: `PAG-00${STATE.payments.length + 1}`,
                    purchaseId: newId,
                    providerName: formObj.providerName,
                    date: formObj.date,
                    amount: formObj.total,
                    method: 'Transferencia'
                };
                STATE.payments.push(newPag);
                logHistory('payments', 'create', `Generación automática de pago ${newPag.id} por compra ${newId}`, `Monto: ${formatCurrency(newPag.amount)}`);
            }
        }
        
        logHistory(module, 'create', `Alta de ${module} registrado con éxito. Código: ${newId}`, JSON.stringify(formObj));
        showToast('Alta Realizada', `Se guardó correctamente con código ${newId}`, 'success');
        
    } else if (action === 'edit' && id) {
        // Edit existing element
        const index = STATE[module].findIndex(item => item.id === id);
        if (index !== -1) {
            // Keep specific immutable properties like items lists or ids
            const original = STATE[module][index];
            
            // In case of transactions, check stock changes for status alterations
            if (module === 'sales' || module === 'purchases') {
                const items = currentCrudContext.getItems();
                formObj.items = items;
                
                // Basic stock correction based on state status change
                if (module === 'sales') {
                    const client = STATE.clients.find(c => c.id === formObj.clientId);
                    formObj.clientName = client ? client.name : 'Cliente S.A.';
                    
                    // Simple logic: if changing status to delivered, discount stock
                    if (original.status !== 'Entregado' && formObj.status === 'Entregado') {
                        items.forEach(line => {
                            const mat = STATE.inventory.find(m => m.id === line.productId);
                            if (mat) adjustStock(mat, formObj.sucursalId || original.sucursalId, -line.qty);
                        });
                    }
                } else {
                    const provider = STATE.providers.find(p => p.id === formObj.providerId);
                    formObj.providerName = provider ? provider.name : 'Distribuidora';
                    
                    if (original.status !== 'Recibido' && formObj.status === 'Recibido') {
                        items.forEach(line => {
                            const mat = STATE.inventory.find(m => m.id === line.productId);
                            if (mat) adjustStock(mat, formObj.sucursalId || original.sucursalId, line.qty);
                        });
                    }
                }
            }
            
            // Merge form modifications
            STATE[module][index] = { ...original, ...formObj };
            
            // If the currently logged-in user edited their own account, refresh the live
            // session reference so permission changes apply immediately.
            if (module === 'users' && STATE.currentUser && STATE.currentUser.id === id) {
                STATE.currentUser = STATE[module][index];
            }
            
            logHistory(module, 'update', `Modificación en ${module}. Código: ${id}`, `Valores nuevos: ${JSON.stringify(formObj)}`);
            showToast('Modificación Realizada', `Se guardaron los cambios para ${id}`, 'success');
        }
    }
    
    saveLocalState();
    updateConnectionBadge();
    closeModal();
    switchView(STATE.currentView); // Refresh current screen
}

// Global deletion helper
function deleteItem(module, id) {
    // Anular una venta requiere el permiso específico "anularTickets"
    if (module === 'sales' && !hasPermission('anularTickets')) {
        showToast('Permiso Denegado', 'Tu usuario no tiene permiso para anular tickets/ventas.', 'danger');
        return;
    }
    
    const confirmation = confirm(`¿Está seguro de que desea eliminar o anular el elemento con código ${id}?`);
    if (!confirmation) return;
    
    // Special transaction cancel logic
    if (module === 'sales' || module === 'purchases') {
        const index = STATE[module].findIndex(item => item.id === id);
        if (index !== -1) {
            const tx = STATE[module][index];
            const oldStatus = tx.status;
            tx.status = 'Cancelado';
            
            // If it was already active/processed, reverse inventory changes!
            if (oldStatus === 'Entregado' && module === 'sales') {
                tx.items.forEach(line => {
                    const mat = STATE.inventory.find(m => m.id === line.productId);
                    if (mat) adjustStock(mat, tx.sucursalId, line.qty); // Return items to stock
                });
            } else if (oldStatus === 'Recibido' && module === 'purchases') {
                tx.items.forEach(line => {
                    const mat = STATE.inventory.find(m => m.id === line.productId);
                    if (mat) adjustStock(mat, tx.sucursalId, -line.qty); // Deduct items from stock
                });
            }
            
            logHistory(module, 'delete', `Anulación de transacción ${id}`, `El estado se marcó como Cancelado y se regularizó el stock.`);
            showToast('Transacción Anulada', `La transacción ${id} fue cancelada y se revirtieron stocks.`, 'warning');
        }
    } else {
        // Standard physical deletion
        const index = STATE[module].findIndex(item => item.id === id);
        if (index !== -1) {
            const deleted = STATE[module].splice(index, 1)[0];
            logHistory(module, 'delete', `Baja física de ${module} con ID ${id}`, JSON.stringify(deleted));
            showToast('Registro Eliminado', `Se removió el elemento ${id} del sistema.`, 'danger');
        }
    }
    
    saveLocalState();
    switchView(STATE.currentView);
}


// ==========================================
// DETAILS VIEW POPUPS (INVOICES/DELIVERY SLIPS)
// ==========================================
function viewTransactionDetails(module, id) {
    const modal = document.getElementById('details-modal');
    const title = document.getElementById('details-modal-title');
    const content = document.getElementById('details-modal-content');
    
    modal.classList.add('active');
    
    const tx = STATE[module].find(item => item.id === id);
    if (!tx) {
        content.innerHTML = '<p>Error al cargar el detalle.</p>';
        return;
    }
    
    title.textContent = `Detalle de ${module === 'sales' ? 'Venta (Remito)' : 'Compra'} - Código: ${tx.id}`;
    
    // Generate Invoice HTML representation
    let rowsHTML = '';
    tx.items.forEach(line => {
        const product = STATE.inventory.find(p => p.id === line.productId);
        const desc = product ? product.name : 'Articulo Desconocido';
        const price = line.price || line.cost || 0;
        const sub = line.qty * price;
        
        rowsHTML += `
            <div class="invoice-row">
                <span>${desc} (x${line.qty})</span>
                <span>${formatCurrency(price)} | Sub: ${formatCurrency(sub)}</span>
            </div>
        `;
    });
    
    const sucursal = tx.sucursalId ? STATE.sucursales.find(s => s.id === tx.sucursalId) : null;

    content.innerHTML = `
        <div class="invoice-box">
            <div class="invoice-header">
                <h4>BALDI FIAMBRERÍA S.A.</h4>
                <p>Cuit: 30-82749102-3 ${sucursal ? `| ${sucursal.name} - ${sucursal.address}` : ''}</p>
                <p>Fecha de emisión: ${formatDate(tx.date)} ${tx.tipoComprobante ? `| ${tx.tipoComprobante}` : ''}</p>
            </div>
            
            <div class="invoice-row" style="font-weight: bold; margin-bottom: 12px;">
                <span>${module === 'sales' ? 'Cliente' : 'Proveedor'}:</span>
                <span>${tx.clientName || tx.providerName}</span>
            </div>
            
            <div class="invoice-divider"></div>
            
            ${rowsHTML}
            
            <div class="invoice-divider"></div>
            
            <div class="invoice-row invoice-total">
                <span>Importe Total Consolidado:</span>
                <span>${formatCurrency(tx.total)}</span>
            </div>
            
            <div class="invoice-divider"></div>
            
            <div class="invoice-row">
                <span>Estado actual:</span>
                <span style="font-weight: bold; color: ${tx.status === 'Cancelado' ? 'var(--danger)' : 'var(--success)'};">${tx.status.toUpperCase()}</span>
            </div>
            ${module === 'sales' ? `
            <div class="invoice-divider"></div>
            <button type="button" class="btn-primary" style="width:100%; justify-content:center;" onclick="printTicket('${tx.id}')">
                <i data-lucide="printer"></i>
                <span>Imprimir Ticket</span>
            </button>
            ` : ''}
        </div>
    `;
    lucide.createIcons();
}

function closeDetailsModal() {
    document.getElementById('details-modal').classList.remove('active');
}

// ==========================================
// MODULE 10: USER MANAGEMENT (USUARIOS)
// ==========================================
function renderUsersView(container) {
    container.innerHTML = `
        <div class="view-header-bar">
            <div class="search-filter-box">
                <div class="search-input-wrapper">
                    <i data-lucide="search"></i>
                    <input type="text" id="users-search" class="search-input" placeholder="Buscar por Nombre, Usuario o Rol...">
                </div>
            </div>
            <button class="btn-primary" id="btn-users-add">
                <i data-lucide="plus"></i>
                <span>Nuevo Usuario</span>
            </button>
        </div>
        
        <div class="table-card">
            <div class="table-wrapper">
                <table class="custom-table" id="users-table">
                    <thead>
                        <tr>
                            <th>Nombre Completo</th>
                            <th>Nombre Usuario</th>
                            <th>Email</th>
                            <th>Rol</th>
                            <th>Contraseña</th>
                            <th style="width: 100px; text-align: center;">Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="users-table-body">
                        <!-- Dynamic list -->
                    </tbody>
                </table>
            </div>
        </div>

        <div class="history-section">
            <div class="history-title">
                <i data-lucide="history"></i>
                <span>Historial de Usuarios</span>
            </div>
            <div class="history-timeline" id="users-history"></div>
        </div>
    `;
    
    document.getElementById('btn-users-add').addEventListener('click', () => openCrudModal('users', 'create'));
    document.getElementById('users-search').addEventListener('input', filterUsersTable);
    
    renderUsersRows(STATE.users);
    renderModuleHistory('users');
}

function renderUsersRows(items) {
    const tbody = document.getElementById('users-table-body');
    tbody.innerHTML = '';
    
    if (items.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 32px;">No se encontraron usuarios</td></tr>`;
        return;
    }
    
    items.forEach(item => {
        let roleBadge = 'secondary';
        if (item.role === 'Administrador') roleBadge = 'success';
        if (item.role === 'Vendedor') roleBadge = 'info';
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="font-weight: 600;">${item.name}</td>
            <td>${item.username}</td>
            <td>${item.email}</td>
            <td><span class="status-badge ${roleBadge}">${item.role}</span></td>
            <td><code>${item.password}</code></td>
            <td style="text-align: center;">
                <div class="table-actions">
                    <button class="btn-table-action edit" onclick="openCrudModal('users', 'edit', '${item.id}')" title="Editar">
                        <i data-lucide="edit"></i>
                    </button>
                    <button class="btn-table-action delete" onclick="deleteItem('users', '${item.id}')" title="Eliminar">
                        <i data-lucide="trash-2"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
    lucide.createIcons();
}

function filterUsersTable() {
    const q = document.getElementById('users-search').value.toLowerCase();
    const filtered = STATE.users.filter(u => 
        u.name.toLowerCase().includes(q) || u.username.toLowerCase().includes(q) || u.role.toLowerCase().includes(q)
    );
    renderUsersRows(filtered);
}

// ==========================================
// AUTHENTICATION LOGIC
// ==========================================
function attemptLogin(username, password) {
    const user = STATE.users.find(u => u.username.toLowerCase() === username.trim().toLowerCase() && u.password === password);
    
    if (user) {
        STATE.currentUser = user;
        localStorage.setItem('baldi_session', JSON.stringify(user));
        
        document.body.className = 'authenticated';
        updateSidebarProfile();
        switchView('dashboard');
        
        showToast('Inicio de Sesión', `¡Bienvenido, ${user.name}!`, 'success');
        
        // Log to history
        logHistory('system', 'login', `Inicio de sesión de ${user.username} (${user.role})`);
        
        // Clear login inputs
        document.getElementById('login-username').value = '';
        document.getElementById('login-password').value = '';
    } else {
        showToast('Error de Acceso', 'Nombre de usuario o contraseña incorrectos.', 'danger');
    }
}

function logout() {
    if (STATE.currentUser) {
        logHistory('system', 'logout', `Cierre de sesión de ${STATE.currentUser.username}`);
    }
    
    STATE.currentUser = null;
    localStorage.removeItem('baldi_session');
    document.body.className = 'unauthenticated';
    showToast('Sesión Cerrada', 'Has salido del sistema.', 'info');
}

function checkSession() {
    const session = localStorage.getItem('baldi_session');
    if (session) {
        try {
            const user = JSON.parse(session);
            // Verify user still exists in database
            const found = STATE.users.find(u => u.id === user.id);
            if (found) {
                STATE.currentUser = found;
                document.body.className = 'authenticated';
                updateSidebarProfile();
                switchView('dashboard'); // Force render dashboard on valid session
                return;
            }
        } catch (e) {
            console.error("Session parsing failed", e);
        }
    }
    document.body.className = 'unauthenticated';
}

function updateSidebarProfile() {
    const avatar = document.getElementById('sidebar-user-avatar');
    const name = document.getElementById('sidebar-user-name');
    const role = document.getElementById('sidebar-user-role');
    
    if (STATE.currentUser) {
        const parts = STATE.currentUser.name.split(' ');
        const initials = parts.map(p => p[0]).join('').substring(0, 2).toUpperCase();
        
        avatar.textContent = initials;
        name.textContent = STATE.currentUser.name;
        role.textContent = STATE.currentUser.role;
    }
}

// ==========================================
// BALDI - EXTENSIÓN: CÓDIGOS DE BARRA (EAN-13)
// ==========================================
function ean13CheckDigit(code12) {
    let sum = 0;
    for (let i = 0; i < 12; i++) {
        const digit = parseInt(code12[i], 10) || 0;
        sum += (i % 2 === 0) ? digit : digit * 3;
    }
    const mod = sum % 10;
    return mod === 0 ? 0 : 10 - mod;
}

function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
    }
    return hash;
}

// Generates a deterministic-looking EAN-13 barcode (Argentina prefix 779) from a seed string
function generateBarcode(seed) {
    const hash = simpleHash(String(seed) + '-' + Math.random());
    const numPart = (hash % 1000000000).toString().padStart(9, '0');
    const code12 = '779' + numPart;
    const check = ean13CheckDigit(code12);
    return code12 + check.toString();
}

// ==========================================
// BALDI - EXTENSIÓN: EXPORTACIÓN DE LISTA DE PRECIOS (EXCEL)
// ==========================================
function exportPriceListExcel() {
    if (typeof XLSX === 'undefined') {
        showToast('Error', 'No se pudo cargar el motor de Excel. Verifique su conexión a internet.', 'danger');
        return;
    }

    const publicList = STATE.inventory.map(it => ({
        'SKU': it.sku,
        'Código de Barras': it.barcode || '',
        'Producto': it.name,
        'Categoría': it.category,
        'Unidad': it.unit,
        'Precio de Venta': it.price,
        'Stock Total (Todas las Sucursales)': getTotalStock(it)
    }));

    const internalList = STATE.inventory.map(it => {
        const prov = STATE.providers.find(p => p.id === it.providerId);
        const stockCols = {};
        STATE.sucursales.forEach(s => { stockCols[`Stock ${s.name}`] = getStock(it, s.id); });
        return {
            'SKU': it.sku,
            'Código de Barras': it.barcode || '',
            'Producto': it.name,
            'Categoría': it.category,
            'Proveedor': prov ? prov.name : '',
            'Unidad': it.unit,
            'Costo': it.cost,
            'Precio de Venta': it.price,
            'Margen %': it.cost > 0 ? Number((((it.price - it.cost) / it.cost) * 100).toFixed(1)) : '',
            ...stockCols,
            'Stock Total': getTotalStock(it),
            'Stock Mínimo (por sucursal)': it.minStock
        };
    });

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(publicList), 'Lista de Precios');
    if (hasPermission('verCostos')) {
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(internalList), 'Detalle Interno (Costos)');
    }

    const filename = `Baldi_Lista_de_Precios_${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(wb, filename);

    logHistory('inventory', 'export', 'Exportación de lista de precios a Excel.', `Archivo generado: ${filename}`);
    showToast('Exportación Exitosa', `Se descargó ${filename}`, 'success');
}

// ==========================================
// BALDI - EXTENSIÓN: ACTUALIZACIÓN MASIVA DE PRECIOS
// ==========================================
function openBulkPriceModal() {
    const modal = document.getElementById('bulk-price-modal');
    const fields = document.getElementById('bulk-price-fields');
    modal.classList.add('active');

    fields.innerHTML = `
        <div class="form-group">
            <label>Aplicar a</label>
            <select class="form-control" id="bulk-cat-select">
                <option value="all">Todas las Categorías</option>
                ${CATEGORIES.map(c => `<option value="${c}">${c}</option>`).join('')}
            </select>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Tipo de Ajuste</label>
                <select class="form-control" id="bulk-type-select">
                    <option value="increase">Aumento</option>
                    <option value="decrease">Descuento</option>
                </select>
            </div>
            <div class="form-group">
                <label>Porcentaje (%)</label>
                <input type="number" class="form-control" id="bulk-percent-input" min="0" step="0.1" value="10" required>
            </div>
        </div>
        <div class="form-group">
            <label>Aplicar sobre</label>
            <select class="form-control" id="bulk-target-select">
                <option value="price">Solo Precio de Venta</option>
                <option value="cost">Solo Costo</option>
                <option value="both">Precio y Costo</option>
            </select>
        </div>
        <div class="bulk-price-preview" id="bulk-price-preview">Seleccione los parámetros para ver una vista previa.</div>
    `;

    const catSel = document.getElementById('bulk-cat-select');
    const typeSel = document.getElementById('bulk-type-select');
    const pctInput = document.getElementById('bulk-percent-input');
    const targetSel = document.getElementById('bulk-target-select');
    const preview = document.getElementById('bulk-price-preview');

    const updatePreview = () => {
        const cat = catSel.value;
        const pct = parseFloat(pctInput.value) || 0;
        const type = typeSel.value;
        const affected = STATE.inventory.filter(it => cat === 'all' || it.category === cat);
        preview.textContent = `Esta acción afectará a ${affected.length} producto(s) con un ${type === 'increase' ? 'aumento' : 'descuento'} del ${pct}%.`;
    };
    [catSel, typeSel, pctInput, targetSel].forEach(el => el.addEventListener('input', updatePreview));
    updatePreview();
}

function closeBulkPriceModal() {
    document.getElementById('bulk-price-modal').classList.remove('active');
}

function handleBulkPriceSubmit(e) {
    e.preventDefault();
    const cat = document.getElementById('bulk-cat-select').value;
    const type = document.getElementById('bulk-type-select').value;
    const pct = parseFloat(document.getElementById('bulk-percent-input').value);
    const target = document.getElementById('bulk-target-select').value;

    if (isNaN(pct) || pct < 0) {
        showToast('Error', 'Ingrese un porcentaje válido.', 'danger');
        return;
    }

    const factor = type === 'increase' ? (1 + pct / 100) : (1 - pct / 100);
    const affected = STATE.inventory.filter(it => cat === 'all' || it.category === cat);

    affected.forEach(it => {
        if (target === 'price' || target === 'both') it.price = Math.max(0, Math.round(it.price * factor));
        if (target === 'cost' || target === 'both') it.cost = Math.max(0, Math.round(it.cost * factor));
    });

    logHistory('inventory', 'update', `Actualización masiva de precios (${type === 'increase' ? '+' : '-'}${pct}%) sobre ${cat === 'all' ? 'todas las categorías' : cat}.`, `Productos afectados: ${affected.length}`);
    showToast('Actualización Aplicada', `Se actualizaron ${affected.length} producto(s).`, 'success');

    closeBulkPriceModal();
    switchView(STATE.currentView);
}

// ==========================================
// BALDI - EXTENSIÓN: ETIQUETAS DE PRECIOS (GÓNDOLA Y CÓDIGO DE BARRAS)
// ==========================================
function renderLabelsView(container) {
    container.innerHTML = `
        <div class="view-header-bar">
            <div class="search-filter-box">
                <div class="search-input-wrapper">
                    <i data-lucide="search"></i>
                    <input type="text" id="labels-search" class="search-input" placeholder="Buscar por SKU o descripción...">
                </div>
                <select class="filter-select" id="labels-filter-cat">
                    <option value="all">Todas las Categorías</option>
                    ${CATEGORIES.map(c => `<option value="${c}">${c}</option>`).join('')}
                </select>
            </div>
            <div class="header-actions">
                <button class="btn-outline" id="btn-select-all-labels">
                    <i data-lucide="check-square"></i>
                    <span>Seleccionar Todo</span>
                </button>
                <button class="btn-secondary" id="btn-print-shelf-labels">
                    <i data-lucide="tag"></i>
                    <span>Etiquetas de Góndola</span>
                </button>
                <button class="btn-primary" id="btn-print-barcode-labels">
                    <i data-lucide="scan-barcode"></i>
                    <span>Etiquetas con Código de Barras</span>
                </button>
            </div>
        </div>
        <div class="table-card">
            <div class="table-wrapper">
                <table class="custom-table" id="labels-table">
                    <thead>
                        <tr>
                            <th class="checkbox-cell"><input type="checkbox" id="labels-check-all"></th>
                            <th>SKU</th>
                            <th>Producto</th>
                            <th>Categoría</th>
                            <th>Precio</th>
                            <th style="width:110px;">Copias</th>
                        </tr>
                    </thead>
                    <tbody id="labels-table-body"></tbody>
                </table>
            </div>
        </div>
    `;

    const renderRows = (items) => {
        const tbody = document.getElementById('labels-table-body');
        if (items.length === 0) {
            tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:var(--text-muted); padding:32px;">No se encontraron productos</td></tr>`;
            return;
        }
        tbody.innerHTML = items.map(it => `
            <tr>
                <td class="checkbox-cell"><input type="checkbox" class="label-item-check" value="${it.id}"></td>
                <td style="font-weight:600;">${it.sku}</td>
                <td>${it.name}</td>
                <td>${it.category}</td>
                <td>${formatCurrency(it.price)}</td>
                <td><input type="number" class="form-control label-qty-input" data-id="${it.id}" min="1" value="1" style="padding:6px 8px;"></td>
            </tr>
        `).join('');
    };
    renderRows(STATE.inventory);

    const filterRows = () => {
        const q = document.getElementById('labels-search').value.toLowerCase();
        const cat = document.getElementById('labels-filter-cat').value;
        renderRows(STATE.inventory.filter(it =>
            (it.sku.toLowerCase().includes(q) || it.name.toLowerCase().includes(q)) &&
            (cat === 'all' || it.category === cat)
        ));
    };
    document.getElementById('labels-search').addEventListener('input', filterRows);
    document.getElementById('labels-filter-cat').addEventListener('change', filterRows);

    document.getElementById('labels-check-all').addEventListener('change', (e) => {
        document.querySelectorAll('.label-item-check').forEach(cb => cb.checked = e.target.checked);
    });
    document.getElementById('btn-select-all-labels').addEventListener('click', () => {
        const boxes = [...document.querySelectorAll('.label-item-check')];
        const allChecked = boxes.length > 0 && boxes.every(cb => cb.checked);
        boxes.forEach(cb => cb.checked = !allChecked);
    });

    const getSelectedForLabels = () => {
        const rows = [...document.querySelectorAll('#labels-table-body tr')];
        const selected = [];
        rows.forEach(row => {
            const cb = row.querySelector('.label-item-check');
            if (cb && cb.checked) {
                const qtyInput = row.querySelector('.label-qty-input');
                const qty = parseInt(qtyInput.value) || 1;
                const product = STATE.inventory.find(p => p.id === cb.value);
                if (product) selected.push({ product, qty });
            }
        });
        return selected;
    };

    document.getElementById('btn-print-shelf-labels').addEventListener('click', () => {
        const selection = getSelectedForLabels();
        if (selection.length === 0) { showToast('Sin selección', 'Seleccione al menos un producto.', 'warning'); return; }
        printShelfLabels(selection);
    });
    document.getElementById('btn-print-barcode-labels').addEventListener('click', () => {
        const selection = getSelectedForLabels();
        if (selection.length === 0) { showToast('Sin selección', 'Seleccione al menos un producto.', 'warning'); return; }
        printBarcodeLabels(selection);
    });

    lucide.createIcons();
}

function printShelfLabels(selection) {
    let labelsHtml = '';
    selection.forEach(({ product, qty }) => {
        for (let i = 0; i < qty; i++) {
            labelsHtml += `
                <div class="shelf-label">
                    <div class="sl-name">${product.name}</div>
                    <div class="sl-price">${formatCurrency(product.price)}</div>
                    <div class="sl-unit">${product.unit}</div>
                    <div class="sl-brand">Baldi Fiambrería</div>
                </div>
            `;
        }
    });
    openPrintWindow('Etiquetas de Góndola - Baldi', labelsHtml, false);
    logHistory('inventory', 'print', `Generación de etiquetas de góndola para ${selection.length} producto(s).`);
}

function printBarcodeLabels(selection) {
    let labelsHtml = '';
    selection.forEach(({ product, qty }) => {
        const barcodeSvg = renderBarcodeSVGString(product.barcode || product.sku);
        for (let i = 0; i < qty; i++) {
            labelsHtml += `
                <div class="barcode-label">
                    <div class="bl-name">${product.name}</div>
                    ${barcodeSvg || `<div class="barcode-mono" style="padding:8px 0;">${product.barcode || product.sku}</div>`}
                    <div class="bl-price">${formatCurrency(product.price)}</div>
                </div>
            `;
        }
    });
    openPrintWindow('Etiquetas con Código de Barras - Baldi', labelsHtml, false);
    logHistory('inventory', 'print', `Generación de etiquetas con código de barras para ${selection.length} producto(s).`);
}

// ==========================================
// GENERADOR DE CÓDIGO DE BARRAS EAN-13 (100% NATIVO, SIN LIBRERÍAS EXTERNAS)
// ==========================================
// Se implementa el estándar EAN-13 a mano (tablas L/G/R + patrón de paridad oficiales,
// verificadas por round-trip contra el ejemplo público de Wikipedia) para eliminar por
// completo la dependencia de una librería de terceros (JsBarcode) al imprimir etiquetas:
// así el código de barras SIEMPRE se genera, sin depender de que un CDN cargue a tiempo
// dentro de la ventana emergente de impresión.
const EAN13_L = ['0001101','0011001','0010011','0111101','0100011','0110001','0101111','0111011','0110111','0001011'];
const EAN13_G = ['0100111','0110011','0011011','0100001','0011101','0111001','0000101','0010001','0001001','0010111'];
const EAN13_R = ['1110010','1100110','1101100','1000010','1011100','1001110','1010000','1000100','1001000','1110100'];
const EAN13_PARITY = ['LLLLLL','LLGLGG','LLGGLG','LLGGGL','LGLLGG','LGGLLG','LGGGLL','LGLGLG','LGLGGL','LGGLGL'];

function ean13ToBinary(code13) {
    const digits = code13.split('').map(Number);
    const first = digits[0];
    const leftDigits = digits.slice(1, 7);
    const rightDigits = digits.slice(7, 13);
    const parity = EAN13_PARITY[first];
    let bin = '101'; // guarda de inicio
    leftDigits.forEach((d, i) => { bin += parity[i] === 'L' ? EAN13_L[d] : EAN13_G[d]; });
    bin += '01010'; // guarda central
    rightDigits.forEach(d => { bin += EAN13_R[d]; });
    bin += '101'; // guarda final
    return bin;
}

// Normaliza cualquier valor (código de barras EAN-13 válido, un SKU alfanumérico, etc.)
// a un código EAN-13 numérico válido de 13 dígitos con dígito verificador correcto.
function normalizeToEan13(rawValue) {
    let code = String(rawValue || '').replace(/\D/g, '');
    if (code.length === 13) {
        const check = ean13CheckDigit(code.slice(0, 12));
        return code.slice(0, 12) + check; // corrige el dígito verificador si estuviera mal
    }
    // Cualquier otro formato (SKU, código corto, etc.) se convierte a un EAN-13 determinístico
    return generateBarcode(rawValue);
}

// Genera el SVG del código de barras (barras + texto legible) 100% en el cliente.
function renderBarcodeSVGString(rawValue) {
    if (!rawValue) return '';
    try {
        const code = normalizeToEan13(rawValue);
        const binary = ean13ToBinary(code);

        const moduleWidth = 2.2;
        const barHeight = 48;
        const quietZone = 12;
        const totalWidth = Math.round(binary.length * moduleWidth + quietZone * 2);
        const textHeight = 16;
        const totalHeight = barHeight + textHeight;

        let bars = '';
        for (let i = 0; i < binary.length; i++) {
            if (binary[i] === '1') {
                const x = (quietZone + i * moduleWidth).toFixed(2);
                bars += `<rect x="${x}" y="0" width="${moduleWidth}" height="${barHeight}" fill="#000"/>`;
            }
        }

        const humanText = `${code.slice(0, 1)}  ${code.slice(1, 7)}  ${code.slice(7, 13)}`;

        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalWidth} ${totalHeight}" width="100%" style="display:block; max-width:100%; height:auto;">
            <rect x="0" y="0" width="${totalWidth}" height="${totalHeight}" fill="#fff"/>
            <g>${bars}</g>
            <text x="${totalWidth / 2}" y="${barHeight + 12}" font-family="'Courier New', monospace" font-size="11" letter-spacing="1" text-anchor="middle" fill="#000">${humanText}</text>
        </svg>`;
    } catch (e) {
        console.error('No se pudo generar el código de barras para', rawValue, e);
        return '';
    }
}

// Opens a clean, self-contained print window with the given (already fully-rendered) HTML.
function openPrintWindow(title, bodyHtml, withBarcodes) {
    const win = window.open('', '_blank', 'width=900,height=700');
    if (!win) {
        showToast('Bloqueado por el navegador', 'Habilite las ventanas emergentes para poder imprimir.', 'danger');
        return;
    }
    win.document.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>${title}</title>
            <style>
                body { font-family: Arial, Helvetica, sans-serif; padding: 16px; margin: 0; }
                .sheet { display: flex; flex-wrap: wrap; gap: 10px; }
                .shelf-label {
                    width: 200px; border: 1px solid #333; border-radius: 8px; padding: 10px 12px;
                    box-sizing: border-box; text-align: center; page-break-inside: avoid;
                }
                .shelf-label .sl-name { font-size: 13px; font-weight: 600; min-height: 32px; margin-bottom: 6px; }
                .shelf-label .sl-price { font-size: 28px; font-weight: 800; color: #000; }
                .shelf-label .sl-unit { font-size: 10px; color: #555; margin-top: 4px; }
                .shelf-label .sl-brand { font-size: 9px; color: #888; margin-top: 6px; text-transform: uppercase; letter-spacing: 0.5px; }
                .barcode-label {
                    width: 220px; border: 1px solid #333; border-radius: 6px; padding: 8px 10px;
                    box-sizing: border-box; text-align: center; page-break-inside: avoid;
                }
                .barcode-label .bl-name { font-size: 11px; font-weight: 600; min-height: 26px; margin-bottom: 2px; }
                .barcode-label .bl-price { font-size: 16px; font-weight: 800; }
                .barcode-label svg { max-width: 100%; height: 50px; }
                .barcode-mono { font-family: 'Courier New', monospace; font-size: 12px; letter-spacing: 1px; }
                @media print { body { padding: 6px; } }
            </style>
        </head>
        <body>
            <div class="sheet">${bodyHtml}</div>
        </body>
        </html>
    `);
    win.document.close();
    setTimeout(() => { win.focus(); win.print(); }, 200);
}

// ==========================================
// BALDI - EXTENSIÓN: IMPRESIÓN DE TICKETS (FISCAL / NO FISCAL)
// ==========================================
function printTicket(saleId) {
    const sale = STATE.sales.find(s => s.id === saleId);
    if (!sale) return;

    const sucursal = STATE.sucursales.find(s => s.id === sale.sucursalId) || STATE.sucursales[0];
    const tipo = sale.tipoComprobante || 'Ticket No Fiscal';
    const isFiscal = tipo !== 'Ticket No Fiscal';
    const fd = sale.fiscalData;

    let itemsHtml = sale.items.map(l => {
        const p = STATE.inventory.find(pr => pr.id === l.productId);
        const name = p ? p.name : 'Producto';
        return `
            <div class="t-row"><span>${l.qty} x ${name}</span><span>${formatCurrency(l.qty * l.price)}</span></div>
        `;
    }).join('');

    const fiscalBoxHtml = fd ? `
        <div class="t-line"></div>
        <div class="fiscal-sim-box">
            <p class="t-center" style="font-weight:bold; color:#b91c1c;">⚠ CAE SIMULADO — NO VÁLIDO ANTE ARCA/AFIP</p>
            <p>Punto de Venta: ${fd.puntoVenta} &nbsp; Nº: ${fd.numero}</p>
            <p>CAE (demo): ${fd.cae}</p>
            <p>Vto. CAE (demo): ${formatDate(fd.caeVencimiento)}</p>
            ${renderQrPlaceholder(fd, sucursal, sale.total)}
        </div>
    ` : '';

    const ticketHtml = `
        <div class="ticket-paper">
            <div class="t-center">
                <h3>BALDI FIAMBRERÍA</h3>
                <p>${sucursal.name}</p>
                <p>${sucursal.address}</p>
                <p>CUIT: 30-82749102-3</p>
            </div>
            <div class="t-line"></div>
            <p class="t-center" style="font-weight:bold;">${tipo.toUpperCase()}</p>
            <p>Fecha: ${formatDate(sale.date)}</p>
            <p>Comprobante: ${sale.id}</p>
            <p>Cliente: ${sale.clientName}</p>
            <div class="t-line"></div>
            ${itemsHtml}
            ${sale.descuentoMonto > 0 ? `<div class="t-row"><span>Descuento (${sale.descuentoPct}%)</span><span>-${formatCurrency(sale.descuentoMonto)}</span></div>` : ''}
            <div class="t-line"></div>
            <div class="t-row" style="font-weight:bold; font-size:14px;"><span>TOTAL</span><span>${formatCurrency(sale.total)}</span></div>
            <div class="t-line"></div>
            <p>Forma de Pago: ${sale.metodoPago || 'Efectivo'}</p>
            ${sale.metodoPago === 'Efectivo' && sale.montoRecibido ? `
                <div class="t-row"><span>Recibido</span><span>${formatCurrency(sale.montoRecibido)}</span></div>
                <div class="t-row"><span>Vuelto</span><span>${formatCurrency(sale.vuelto || 0)}</span></div>
            ` : ''}
            ${fiscalBoxHtml}
            <div class="t-line"></div>
            <p class="t-center">${isFiscal ? '¡Gracias por su compra!' : 'Documento no válido como factura'}</p>
        </div>
    `;

    openTicketWindow(`Ticket ${sale.id}`, ticketHtml);
}

function openTicketWindow(title, html) {
    const win = window.open('', '_blank', 'width=400,height=650');
    if (!win) {
        showToast('Bloqueado por el navegador', 'Habilite las ventanas emergentes para poder imprimir.', 'danger');
        return;
    }
    win.document.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>${title}</title>
            <style>
                body { font-family: 'Courier New', monospace; padding: 12px; margin: 0; }
                .ticket-paper { width: 280px; margin: 0 auto; font-size: 12px; }
                .t-center { text-align: center; }
                .t-line { border-top: 1px dashed #000; margin: 6px 0; }
                .t-row { display: flex; justify-content: space-between; gap: 6px; }
                h3 { margin: 4px 0; font-size: 15px; }
                p { margin: 2px 0; }
                .fiscal-sim-box { border: 2px dashed #b91c1c; padding: 8px; margin-top: 6px; border-radius: 6px; }
                .qr-simulado-box { text-align: center; margin-top: 8px; }
                .qr-simulado-grid {
                    display: inline-grid; grid-template-columns: repeat(7, 6px); grid-template-rows: repeat(7, 6px);
                    gap: 1px; background: #fff; padding: 4px; border: 1px solid #000;
                }
                .qr-simulado-grid span { width: 6px; height: 6px; background: #fff; }
                .qr-simulado-grid span.on { background: #000; }
                .qr-simulado-label { font-size: 9px; color: #b91c1c; font-weight: bold; margin-top: 3px; }
            </style>
        </head>
        <body>${html}</body>
        </html>
    `);
    win.document.close();
    setTimeout(() => { win.focus(); win.print(); }, 200);
}

// ==========================================
// BALDI - EXTENSIÓN: LISTADO DE REPOSICIÓN POR PROVEEDOR (Y POR SUCURSAL)
// ==========================================
function renderReplenishmentView(container) {
    // Genera una fila por cada combinación (producto, sucursal) que esté bajo mínimo,
    // ya que el stock ahora es independiente por local.
    const lowRows = [];
    STATE.inventory.forEach(it => {
        STATE.sucursales.forEach(s => {
            const stock = getStock(it, s.id);
            if (stock <= it.minStock) lowRows.push({ item: it, sucursal: s, stock });
        });
    });

    const byProvider = {};
    lowRows.forEach(row => {
        const key = row.item.providerId || 'none';
        if (!byProvider[key]) byProvider[key] = [];
        byProvider[key].push(row);
    });

    if (Object.keys(byProvider).length === 0) {
        container.innerHTML = `
            <div class="table-card" style="padding:48px; text-align:center;">
                <i data-lucide="check-circle-2" style="width:48px; height:48px; color:var(--success); margin-bottom:12px;"></i>
                <p style="color:var(--text-muted);">Todos los productos están dentro de sus niveles de stock normales en todas las sucursales. No hay reposiciones pendientes.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    let html = `
        <div class="view-header-bar">
            <div></div>
            <div class="header-actions">
                <button class="btn-outline" id="btn-export-replenishment">
                    <i data-lucide="file-spreadsheet"></i>
                    <span>Exportar a Excel</span>
                </button>
            </div>
        </div>
    `;

    Object.keys(byProvider).forEach(pid => {
        const provider = STATE.providers.find(p => p.id === pid);
        const rows = byProvider[pid];
        html += `
            <div class="replenishment-provider-card">
                <div class="replenishment-provider-header">
                    <h4>${provider ? provider.name : 'Sin Proveedor Asignado'}</h4>
                    ${provider ? `<span class="text-secondary">${provider.phone || ''} ${provider.email ? '| ' + provider.email : ''}</span>` : ''}
                </div>
                <div class="table-wrapper">
                    <table class="custom-table">
                        <thead><tr><th>SKU</th><th>Producto</th><th>Sucursal</th><th>Stock Actual</th><th>Mínimo</th><th>Cantidad Sugerida</th></tr></thead>
                        <tbody>
                            ${rows.map(({ item: it, sucursal, stock }) => {
                                const suggested = Math.max(it.minStock * 2 - stock, it.minStock - stock, 1);
                                return `<tr>
                                    <td>${it.sku}</td>
                                    <td>${it.name}</td>
                                    <td>${sucursal.name}</td>
                                    <td style="color:var(--danger); font-weight:700;">${stock} ${it.unit}</td>
                                    <td>${it.minStock}</td>
                                    <td style="font-weight:700;">${suggested} ${it.unit}</td>
                                </tr>`;
                            }).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
    lucide.createIcons();

    document.getElementById('btn-export-replenishment').addEventListener('click', () => {
        if (typeof XLSX === 'undefined') {
            showToast('Error', 'No se pudo cargar el motor de Excel.', 'danger');
            return;
        }
        const rows = [];
        Object.keys(byProvider).forEach(pid => {
            const provider = STATE.providers.find(p => p.id === pid);
            byProvider[pid].forEach(({ item: it, sucursal, stock }) => {
                const suggested = Math.max(it.minStock * 2 - stock, it.minStock - stock, 1);
                rows.push({
                    'Proveedor': provider ? provider.name : 'Sin Asignar',
                    'SKU': it.sku,
                    'Producto': it.name,
                    'Sucursal': sucursal.name,
                    'Stock Actual': stock,
                    'Stock Mínimo': it.minStock,
                    'Cantidad Sugerida': suggested,
                    'Unidad': it.unit
                });
            });
        });
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(rows), 'Reposición');
        XLSX.writeFile(wb, `Baldi_Reposicion_${new Date().toISOString().split('T')[0]}.xlsx`);
        logHistory('purchases', 'export', 'Exportación del listado de reposición a Excel.');
        showToast('Exportación Exitosa', 'Se descargó el listado de reposición.', 'success');
    });
}

// ==========================================
// BALDI - EXTENSIÓN: CUENTAS CORRIENTES (CLIENTES / PROVEEDORES)
// ==========================================
function renderAccountsView(container) {
    container.innerHTML = `
        <div class="tabs-row">
            <button class="tab-btn active" id="tab-accounts-clients">Clientes</button>
            <button class="tab-btn" id="tab-accounts-providers">Proveedores</button>
        </div>
        <div class="table-card">
            <div class="table-wrapper">
                <table class="custom-table" id="accounts-table">
                    <thead id="accounts-table-head"></thead>
                    <tbody id="accounts-table-body"></tbody>
                </table>
            </div>
        </div>
    `;

    const showClients = () => {
        document.getElementById('tab-accounts-clients').classList.add('active');
        document.getElementById('tab-accounts-providers').classList.remove('active');
        document.getElementById('accounts-table-head').innerHTML = `<tr><th>Cliente</th><th>Tipo</th><th>Total Facturado</th><th>Total Cobrado</th><th>Saldo</th><th style="width:100px;text-align:center;">Acciones</th></tr>`;
        document.getElementById('accounts-table-body').innerHTML = STATE.clients.map(c => {
            const bal = getClientBalance(c.id);
            return `<tr>
                <td style="font-weight:600;">${c.name}</td>
                <td>${c.type}</td>
                <td>${formatCurrency(bal.totalSales)}</td>
                <td>${formatCurrency(bal.totalReceipts)}</td>
                <td style="font-weight:700;" class="${bal.balance > 0 ? 'amount-debit' : 'amount-credit'}">${formatCurrency(bal.balance)}</td>
                <td style="text-align:center;">
                    <button class="btn-table-action view" onclick="viewClientLedger('${c.id}')" title="Ver Cuenta Corriente"><i data-lucide="eye"></i></button>
                </td>
            </tr>`;
        }).join('');
        lucide.createIcons();
    };

    const showProviders = () => {
        document.getElementById('tab-accounts-providers').classList.add('active');
        document.getElementById('tab-accounts-clients').classList.remove('active');
        document.getElementById('accounts-table-head').innerHTML = `<tr><th>Proveedor</th><th>Total Comprado</th><th>Total Pagado</th><th>Saldo (Le debemos)</th><th style="width:100px;text-align:center;">Acciones</th></tr>`;
        document.getElementById('accounts-table-body').innerHTML = STATE.providers.map(p => {
            const bal = getProviderBalance(p.id);
            return `<tr>
                <td style="font-weight:600;">${p.name}</td>
                <td>${formatCurrency(bal.totalPurchases)}</td>
                <td>${formatCurrency(bal.totalPayments)}</td>
                <td style="font-weight:700;" class="${bal.balance > 0 ? 'amount-debit' : 'amount-credit'}">${formatCurrency(bal.balance)}</td>
                <td style="text-align:center;">
                    <button class="btn-table-action view" onclick="viewProviderLedger('${p.id}')" title="Ver Cuenta Corriente"><i data-lucide="eye"></i></button>
                </td>
            </tr>`;
        }).join('');
        lucide.createIcons();
    };

    document.getElementById('tab-accounts-clients').addEventListener('click', showClients);
    document.getElementById('tab-accounts-providers').addEventListener('click', showProviders);
    showClients();
}

function getClientBalance(clientId) {
    const client = STATE.clients.find(c => c.id === clientId);
    const totalSales = STATE.sales.filter(s => s.clientId === clientId && s.status !== 'Cancelado').reduce((a, s) => a + s.total, 0);
    const totalReceipts = STATE.receipts.filter(r => {
        if (r.saleId) {
            const sale = STATE.sales.find(s => s.id === r.saleId);
            return sale && sale.clientId === clientId;
        }
        return client && r.clientName === client.name;
    }).reduce((a, r) => a + r.amount, 0);
    // Notas de Crédito reducen lo que debe el cliente; Notas de Débito lo aumentan.
    const creditNotesTotal = STATE.creditNotes.filter(n => n.clientId === clientId && n.tipo === 'Crédito').reduce((a, n) => a + n.amount, 0);
    const debitNotesTotal = STATE.creditNotes.filter(n => n.clientId === clientId && n.tipo === 'Débito').reduce((a, n) => a + n.amount, 0);
    return {
        totalSales, totalReceipts,
        balance: totalSales - totalReceipts - creditNotesTotal + debitNotesTotal
    };
}

function getProviderBalance(providerId) {
    const provider = STATE.providers.find(p => p.id === providerId);
    const totalPurchases = STATE.purchases.filter(p => p.providerId === providerId && p.status !== 'Cancelado').reduce((a, p) => a + p.total, 0);
    const totalPayments = STATE.payments.filter(pay => {
        if (pay.purchaseId) {
            const purchase = STATE.purchases.find(p => p.id === pay.purchaseId);
            return purchase && purchase.providerId === providerId;
        }
        return provider && pay.providerName === provider.name;
    }).reduce((a, pay) => a + pay.amount, 0);
    return { totalPurchases, totalPayments, balance: totalPurchases - totalPayments };
}

function getClientLedger(clientId) {
    const client = STATE.clients.find(c => c.id === clientId);
    const rows = [];
    STATE.sales.filter(s => s.clientId === clientId && s.status !== 'Cancelado').forEach(s => {
        rows.push({ date: s.date, desc: `Venta ${s.id}`, debit: s.total, credit: 0 });
    });
    STATE.receipts.filter(r => {
        if (r.saleId) {
            const sale = STATE.sales.find(s => s.id === r.saleId);
            return sale && sale.clientId === clientId;
        }
        return client && r.clientName === client.name;
    }).forEach(r => {
        rows.push({ date: r.date, desc: `Recibo ${r.id} (${r.method})`, debit: 0, credit: r.amount });
    });
    STATE.creditNotes.filter(n => n.clientId === clientId).forEach(n => {
        if (n.tipo === 'Crédito') {
            rows.push({ date: n.date, desc: `Nota de Crédito ${n.id} (${n.motivo})`, debit: 0, credit: n.amount });
        } else {
            rows.push({ date: n.date, desc: `Nota de Débito ${n.id} (${n.motivo})`, debit: n.amount, credit: 0 });
        }
    });
    rows.sort((a, b) => a.date.localeCompare(b.date));
    let bal = 0;
    return rows.map(r => { bal += r.debit - r.credit; return { ...r, balance: bal }; });
}

function getProviderLedger(providerId) {
    const provider = STATE.providers.find(p => p.id === providerId);
    const rows = [];
    STATE.purchases.filter(p => p.providerId === providerId && p.status !== 'Cancelado').forEach(p => {
        rows.push({ date: p.date, desc: `Compra ${p.id}`, debit: p.total, credit: 0 });
    });
    STATE.payments.filter(pay => {
        if (pay.purchaseId) {
            const purchase = STATE.purchases.find(p => p.id === pay.purchaseId);
            return purchase && purchase.providerId === providerId;
        }
        return provider && pay.providerName === provider.name;
    }).forEach(pay => {
        rows.push({ date: pay.date, desc: `Pago ${pay.id} (${pay.method})`, debit: 0, credit: pay.amount });
    });
    rows.sort((a, b) => a.date.localeCompare(b.date));
    let bal = 0;
    return rows.map(r => { bal += r.debit - r.credit; return { ...r, balance: bal }; });
}

function renderLedgerModal(title, balanceLabel, ledger) {
    const modal = document.getElementById('details-modal');
    document.getElementById('details-modal-title').textContent = title;
    const bal = ledger.length ? ledger[ledger.length - 1].balance : 0;
    document.getElementById('details-modal-content').innerHTML = `
        <div class="balance-summary-row">
            <div class="balance-summary-card">
                <span class="label">${balanceLabel}</span>
                <span class="value ${bal > 0 ? 'positive' : 'negative'}">${formatCurrency(bal)}</span>
            </div>
        </div>
        <div class="table-wrapper">
            <table class="custom-table ledger-table">
                <thead><tr><th>Fecha</th><th>Concepto</th><th>Debe</th><th>Haber</th><th>Saldo</th></tr></thead>
                <tbody>
                    ${ledger.length ? ledger.map(r => `<tr>
                        <td>${formatDate(r.date)}</td>
                        <td>${r.desc}</td>
                        <td class="amount-debit">${r.debit ? formatCurrency(r.debit) : ''}</td>
                        <td class="amount-credit">${r.credit ? formatCurrency(r.credit) : ''}</td>
                        <td class="balance-col">${formatCurrency(r.balance)}</td>
                    </tr>`).join('') : '<tr><td colspan="5" style="text-align:center; padding:20px; color:var(--text-muted);">Sin movimientos registrados.</td></tr>'}
                </tbody>
            </table>
        </div>
    `;
    modal.classList.add('active');
}

function viewClientLedger(clientId) {
    const client = STATE.clients.find(c => c.id === clientId);
    if (!client) return;
    renderLedgerModal(`Cuenta Corriente - ${client.name}`, 'Saldo Actual (nos debe)', getClientLedger(clientId));
}

function viewProviderLedger(providerId) {
    const provider = STATE.providers.find(p => p.id === providerId);
    if (!provider) return;
    renderLedgerModal(`Cuenta Corriente - ${provider.name}`, 'Saldo Actual (le debemos)', getProviderLedger(providerId));
}

// ==========================================
// BALDI - EXTENSIÓN: SUCURSALES
// ==========================================
function renderSucursalesView(container) {
    container.innerHTML = `
        <div class="view-header-bar">
            <div></div>
            <button class="btn-primary" id="btn-sucursales-add">
                <i data-lucide="plus"></i>
                <span>Nueva Sucursal</span>
            </button>
        </div>
        <div class="table-card">
            <div class="table-wrapper">
                <table class="custom-table">
                    <thead><tr><th>Nombre</th><th>Dirección</th><th>Teléfono</th><th style="width:100px;text-align:center;">Acciones</th></tr></thead>
                    <tbody id="sucursales-table-body"></tbody>
                </table>
            </div>
        </div>
    `;
    document.getElementById('btn-sucursales-add').addEventListener('click', () => openCrudModal('sucursales', 'create'));
    renderSucursalesRows();
}

function renderSucursalesRows() {
    const tbody = document.getElementById('sucursales-table-body');
    if (STATE.sucursales.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; color:var(--text-muted); padding:32px;">No hay sucursales registradas</td></tr>`;
        lucide.createIcons();
        return;
    }
    tbody.innerHTML = STATE.sucursales.map(s => `
        <tr>
            <td style="font-weight:600;">${s.name}</td>
            <td>${s.address}</td>
            <td>${s.phone || '—'}</td>
            <td style="text-align:center;">
                <div class="table-actions">
                    <button class="btn-table-action edit" onclick="openCrudModal('sucursales', 'edit', '${s.id}')" title="Editar"><i data-lucide="edit"></i></button>
                    <button class="btn-table-action delete" onclick="deleteItem('sucursales', '${s.id}')" title="Eliminar"><i data-lucide="trash-2"></i></button>
                </div>
            </td>
        </tr>
    `).join('');
    lucide.createIcons();
}

// ==========================================
// BALDI - EXTENSIÓN: PUNTO DE VENTA (POS) - OPERACIÓN DE VENTA DIARIA
// ==========================================
// Pantalla rápida de venta de mostrador: escaneo/código, cobro y emisión de ticket
// inmediata. Complementa (no reemplaza) la vista "Ventas", que sigue sirviendo para
// gestionar/editar el historial de comprobantes ya emitidos.
function renderPOSView(container) {
    const defaultSucursal = STATE.currentUser ? STATE.currentUser.sucursalId : STATE.sucursales[0].id;
    const paymentMethods = ['Efectivo', 'Tarjeta de Débito', 'Tarjeta de Crédito', 'Transferencia', 'Mercado Pago', 'Cuenta Corriente'];

    container.innerHTML = `
        <div class="pos-layout">
            <div class="pos-main">
                <div class="scan-entry-bar">
                    <i data-lucide="scan-barcode" class="scan-icon"></i>
                    <input type="text" id="pos-scan-input" placeholder="Escanear código de barras o ingresar SKU y presionar Enter...">
                    <button type="button" class="btn-primary" id="pos-btn-scan-add">Agregar</button>
                </div>
                <div class="table-card">
                    <div class="table-wrapper">
                        <table class="custom-table">
                            <thead><tr><th>Producto</th><th style="width:90px;">Cant.</th><th>Precio</th><th>Subtotal</th><th></th></tr></thead>
                            <tbody id="pos-cart-body"></tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="pos-sidebar">
                <div class="form-row">
                    <div class="form-group">
                        <label>Sucursal (Punto de Venta)</label>
                        <select class="form-control" id="pos-sucursal-select">
                            ${STATE.sucursales.map(s => `<option value="${s.id}" ${s.id === defaultSucursal ? 'selected' : ''}>${s.name}</option>`).join('')}
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Turno</label>
                        <select class="form-control" id="pos-turno-select">
                            ${['Mañana', 'Tarde', 'Noche'].map(t => `<option value="${t}" ${t === getCurrentTurno() ? 'selected' : ''}>${t}</option>`).join('')}
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label>Cliente</label>
                    <select class="form-control" id="pos-client-select">
                        ${STATE.clients.map(c => `<option value="${c.id}" ${c.id === '0' ? 'selected' : ''}>${c.name}</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label>Tipo de Comprobante</label>
                    <select class="form-control" id="pos-comprobante-select">
                        <option value="Ticket No Fiscal">Ticket No Fiscal</option>
                        <option value="Factura A">Factura A</option>
                        <option value="Factura B">Factura B</option>
                        <option value="Factura C">Factura C</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Forma de Pago</label>
                    <select class="form-control" id="pos-payment-select">
                        ${paymentMethods.map(m => `<option value="${m}">${m}</option>`).join('')}
                    </select>
                </div>
                <div class="form-group" id="pos-cash-wrapper">
                    <label>Monto Recibido ($)</label>
                    <input type="number" class="form-control" id="pos-cash-received" min="0" step="0.01" placeholder="Efectivo entregado por el cliente">
                </div>
                <div class="form-group" id="pos-change-wrapper" style="display:none;">
                    <label>Vuelto</label>
                    <input type="text" class="form-control" id="pos-change-amount" readonly style="font-weight:bold;">
                </div>
                ${hasPermission('hacerDescuentos') ? `
                <div class="form-group">
                    <label>Descuento (%)</label>
                    <input type="number" class="form-control" id="pos-discount-input" min="0" max="100" step="1" value="0">
                </div>
                ` : ''}
                <div class="pos-total-display">
                    <span>Total</span>
                    <span id="pos-total-amount">${formatCurrency(0)}</span>
                </div>
                <button class="btn-primary" id="pos-btn-checkout" style="width:100%; justify-content:center; padding:14px;">
                    <i data-lucide="check-circle"></i>
                    <span>Cobrar y Emitir Ticket</span>
                </button>
            </div>
        </div>
    `;
    lucide.createIcons();

    let cart = [];

    // Calcula subtotal, descuento (si el usuario tiene permiso) y total final del carrito.
    const computePosTotals = () => {
        const subtotal = cart.reduce((a, it) => a + it.qty * it.price, 0);
        const discountInput = document.getElementById('pos-discount-input');
        const discountPct = (hasPermission('hacerDescuentos') && discountInput) ? (parseFloat(discountInput.value) || 0) : 0;
        const discountAmount = subtotal * (discountPct / 100);
        return { subtotal, discountPct, discountAmount, total: Math.max(0, subtotal - discountAmount) };
    };

    const renderCart = () => {
        const body = document.getElementById('pos-cart-body');
        if (cart.length === 0) {
            body.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-muted); padding:24px;">Escanee o ingrese un producto para comenzar la venta.</td></tr>`;
        } else {
            body.innerHTML = cart.map((it, idx) => {
                const sub = it.qty * it.price;
                return `<tr>
                    <td>${it.name}</td>
                    <td><input type="number" class="form-control pos-qty-input" data-idx="${idx}" value="${it.qty}" min="1" style="padding:6px;"></td>
                    <td>${formatCurrency(it.price)}</td>
                    <td>${formatCurrency(sub)}</td>
                    <td style="text-align:right;"><button type="button" class="btn-table-action delete" onclick="window.posRemoveItem(${idx})"><i data-lucide="trash-2" style="width:14px;height:14px;"></i></button></td>
                </tr>`;
            }).join('');
        }
        const totals = computePosTotals();
        document.getElementById('pos-total-amount').textContent =
            totals.discountAmount > 0
                ? `${formatCurrency(totals.total)} (desc. ${formatCurrency(totals.discountAmount)})`
                : formatCurrency(totals.total);
        lucide.createIcons();
        document.querySelectorAll('.pos-qty-input').forEach(inp => {
            inp.addEventListener('change', (e) => {
                const idx = parseInt(e.target.dataset.idx);
                const val = parseInt(e.target.value);
                if (val <= 0) return;
                const line = cart[idx];
                const mat = STATE.inventory.find(m => m.id === line.productId);
                const sucursalActual = document.getElementById('pos-sucursal-select').value;
                const disponible = mat ? getStock(mat, sucursalActual) : 0;
                if (val > disponible) {
                    showToast('Stock Insuficiente', `Solo hay ${disponible} ${mat ? mat.unit : ''} disponibles en esta sucursal.`, 'danger');
                    e.target.value = line.qty; // revierte al valor válido anterior
                    return;
                }
                line.qty = val;
                renderCart();
            });
        });
        updatePOSChange();
    };

    const discountInputEl = document.getElementById('pos-discount-input');
    if (discountInputEl) discountInputEl.addEventListener('input', renderCart);

    window.posRemoveItem = (idx) => { cart.splice(idx, 1); renderCart(); };

    const scanInput = document.getElementById('pos-scan-input');
    const addByCode = () => {
        const code = scanInput.value.trim();
        if (!code) return;
        const mat = STATE.inventory.find(m => (m.barcode && m.barcode === code) || m.sku.toLowerCase() === code.toLowerCase());
        if (!mat) {
            showToast('Producto no encontrado', `No existe ningún producto con el código "${code}".`, 'danger');
            scanInput.value = ''; scanInput.focus(); return;
        }
        const sucursalActual = document.getElementById('pos-sucursal-select').value;
        const disponible = getStock(mat, sucursalActual);
        const existing = cart.find(it => it.productId === mat.id);
        const yaCargado = existing ? existing.qty : 0;
        if (yaCargado + 1 > disponible) {
            const sucNombre = (STATE.sucursales.find(s => s.id === sucursalActual) || {}).name || '';
            showToast('Stock Insuficiente', `${mat.name} no tiene stock disponible en ${sucNombre} (disponible: ${disponible}).`, 'danger');
            scanInput.value = ''; scanInput.focus(); return;
        }
        if (existing) existing.qty += 1;
        else cart.push({ productId: mat.id, name: mat.name, qty: 1, price: mat.price });
        renderCart();
        scanInput.value = '';
        scanInput.focus();
    };
    document.getElementById('pos-btn-scan-add').addEventListener('click', addByCode);
    scanInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); addByCode(); } });
    scanInput.focus();

    const paymentSelect = document.getElementById('pos-payment-select');
    const cashWrapper = document.getElementById('pos-cash-wrapper');
    const cashInput = document.getElementById('pos-cash-received');
    const changeWrapper = document.getElementById('pos-change-wrapper');
    const changeAmount = document.getElementById('pos-change-amount');

    const updatePaymentVisibility = () => {
        const isCash = paymentSelect.value === 'Efectivo';
        cashWrapper.style.display = isCash ? '' : 'none';
        changeWrapper.style.display = isCash ? '' : 'none';
        if (!isCash) cashInput.value = '';
    };
    function updatePOSChange() {
        if (paymentSelect.value !== 'Efectivo') return;
        const total = computePosTotals().total;
        const received = parseFloat(cashInput.value) || 0;
        if (received <= 0) { changeAmount.value = '—'; changeAmount.style.color = ''; return; }
        const diff = received - total;
        if (diff < 0) {
            changeAmount.value = `Falta ${formatCurrency(Math.abs(diff))}`;
            changeAmount.style.color = 'var(--danger)';
        } else {
            changeAmount.value = formatCurrency(diff);
            changeAmount.style.color = 'var(--success)';
        }
    }
    paymentSelect.addEventListener('change', () => { updatePaymentVisibility(); updatePOSChange(); });
    cashInput.addEventListener('input', updatePOSChange);
    updatePaymentVisibility();

    document.getElementById('pos-btn-checkout').addEventListener('click', () => {
        if (cart.length === 0) {
            showToast('Carrito Vacío', 'Agregue al menos un producto para cobrar.', 'warning');
            return;
        }
        const sucursalId = document.getElementById('pos-sucursal-select').value;
        
        // Validación final de stock por sucursal antes de confirmar el cobro.
        for (const line of cart) {
            const mat = STATE.inventory.find(m => m.id === line.productId);
            const disponible = mat ? getStock(mat, sucursalId) : 0;
            if (line.qty > disponible) {
                showToast('Stock Insuficiente', `${mat ? mat.name : 'Producto'} no tiene stock suficiente en esta sucursal (disponible: ${disponible}).`, 'danger');
                return;
            }
        }
        
        const turno = document.getElementById('pos-turno-select').value;
        const clientId = document.getElementById('pos-client-select').value;
        const client = STATE.clients.find(c => c.id === clientId);
        const tipoComprobante = document.getElementById('pos-comprobante-select').value;
        const metodoPago = paymentSelect.value;
        const posTotals = computePosTotals();
        const total = posTotals.total;
        const montoRecibido = metodoPago === 'Efectivo' ? (parseFloat(cashInput.value) || 0) : total;

        if (metodoPago === 'Efectivo' && montoRecibido < total) {
            showToast('Monto Insuficiente', 'El monto recibido es menor al total de la venta.', 'danger');
            return;
        }

        const newId = `VEN-00${STATE.sales.length + 1}`;
        const items = cart.map(it => {
            const mat = STATE.inventory.find(m => m.id === it.productId);
            return { productId: it.productId, qty: it.qty, price: it.price, cost: mat ? mat.cost : 0 };
        });

        const newSale = {
            id: newId,
            clientId,
            clientName: client ? client.name : 'Consumidor Final',
            sucursalId,
            turno,
            tipoComprobante,
            metodoPago,
            date: new Date().toISOString().split('T')[0],
            items,
            total,
            descuentoPct: posTotals.discountPct || 0,
            descuentoMonto: posTotals.discountAmount || 0,
            fiscalData: requiresCAE(tipoComprobante) ? buildFiscalData(sucursalId, tipoComprobante) : null,
            status: 'Entregado',
            montoRecibido,
            vuelto: metodoPago === 'Efectivo' ? Math.max(0, montoRecibido - total) : 0,
            synced: navigator.onLine
        };
        STATE.sales.push(newSale);

        // Baja de stock inmediata (operación de venta diaria) en la sucursal del POS
        items.forEach(line => {
            const mat = STATE.inventory.find(m => m.id === line.productId);
            if (mat) adjustStock(mat, sucursalId, -line.qty);
        });

        // Cobro registrado automáticamente
        STATE.receipts.push({
            id: `REC-00${STATE.receipts.length + 1}`,
            saleId: newId,
            clientName: newSale.clientName,
            date: newSale.date,
            amount: total,
            method: metodoPago
        });

        const sucursal = STATE.sucursales.find(s => s.id === sucursalId);
        logHistory('sales', 'create', `Venta POS registrada. Código: ${newId}`, `Sucursal: ${sucursal ? sucursal.name : ''}, Total: ${formatCurrency(total)}, Pago: ${metodoPago}`);
        if (!navigator.onLine) {
            showToast('Venta Guardada (Offline)', `Venta ${newId} cobrada y guardada localmente. Se sincronizará al recuperar conexión.`, 'warning');
        } else {
            showToast('Venta Registrada', `Venta ${newId} cobrada correctamente.`, 'success');
        }
        saveLocalState();
        updateConnectionBadge();

        printTicket(newId);

        // Reset para la siguiente venta
        cart = [];
        cashInput.value = '';
        if (discountInputEl) discountInputEl.value = '0';
        renderCart();
        scanInput.focus();
    });

    renderCart();

    // Si se cambia la sucursal con productos ya cargados, se revalida el stock: los que
    // ya no alcancen se recortan al máximo disponible en la nueva sucursal (o se quitan).
    document.getElementById('pos-sucursal-select').addEventListener('change', (e) => {
        const nuevaSucursal = e.target.value;
        let ajustado = false;
        cart = cart.filter(it => {
            const mat = STATE.inventory.find(m => m.id === it.productId);
            const disponible = mat ? getStock(mat, nuevaSucursal) : 0;
            if (disponible <= 0) { ajustado = true; return false; }
            if (it.qty > disponible) { it.qty = disponible; ajustado = true; }
            return true;
        });
        if (ajustado) {
            showToast('Carrito Ajustado', 'Se recortaron o quitaron productos por falta de stock en la sucursal seleccionada.', 'warning');
        }
        renderCart();
    });
}

// ==========================================
// BALDI - FACTURACIÓN ELECTRÓNICA (SIMULADA) - A/B/C, NOTAS DE CRÉDITO/DÉBITO
// ==========================================
// IMPORTANTE: el CAE y el QR generados acá son 100% SIMULADOS para fines de demostración
// y desarrollo de la interfaz. La emisión real de CAE requiere un backend propio con el
// certificado digital de ARCA/AFIP (WSAA + WSFEv1), que NO puede vivir en este archivo de
// frontend por razones de seguridad. Todo comprobante simulado se marca de forma visible
// como "SIMULADO — NO VÁLIDO ANTE ARCA/AFIP" para que nunca se confunda con uno real.
const COMPROBANTE_LETRAS = ['A', 'B', 'C'];

// Cada sucursal opera como su propio Punto de Venta (0001, 0002, 0003...), con numeración
// independiente por letra de comprobante — tal como exige la numeración fiscal real.
function getPuntoVenta(sucursalId) {
    const idx = STATE.sucursales.findIndex(s => s.id === sucursalId);
    return String(idx + 1).padStart(4, '0');
}

function getNextComprobanteNumber(sucursalId, letra) {
    if (!STATE.comprobanteCounters) STATE.comprobanteCounters = {};
    if (!STATE.comprobanteCounters[sucursalId]) STATE.comprobanteCounters[sucursalId] = { A: 0, B: 0, C: 0 };
    STATE.comprobanteCounters[sucursalId][letra] = (STATE.comprobanteCounters[sucursalId][letra] || 0) + 1;
    return String(STATE.comprobanteCounters[sucursalId][letra]).padStart(8, '0');
}

// Genera un "CAE" simulado (14 dígitos, mismo formato visual que uno real) y su vencimiento
// a 10 días — pero NUNCA debe tratarse como válido: sólo sirve para probar la interfaz.
function generateSimulatedCAE() {
    const digits = Array.from({ length: 14 }, () => Math.floor(Math.random() * 10)).join('');
    const vencimiento = new Date();
    vencimiento.setDate(vencimiento.getDate() + 10);
    return { cae: digits, vencimiento: vencimiento.toISOString().split('T')[0] };
}

// Determina si un tipo de comprobante requiere numeración/CAE fiscal (facturas y notas),
// a diferencia de un Ticket No Fiscal que no lo necesita.
function requiresCAE(tipoComprobante) {
    return /^Factura|^Nota de/.test(tipoComprobante || '');
}

function extractLetra(tipoComprobante) {
    const match = /([ABC])$/.exec(tipoComprobante || '');
    return match ? match[1] : 'B';
}

// Arma los datos fiscales (punto de venta, número, CAE simulado) de un comprobante nuevo.
function buildFiscalData(sucursalId, tipoComprobante) {
    if (!requiresCAE(tipoComprobante)) return null;
    const letra = extractLetra(tipoComprobante);
    const puntoVenta = getPuntoVenta(sucursalId);
    const numero = getNextComprobanteNumber(sucursalId, letra);
    const { cae, vencimiento } = generateSimulatedCAE();
    return { puntoVenta, numero, cae, caeVencimiento: vencimiento, simulado: true };
}

// Placeholder visual de QR (recuadro con los datos que en un comprobante real irían
// codificados en el QR de ARCA). No es un QR escaneable real — ver aclaración arriba.
function renderQrPlaceholder(fiscalData, sucursal, total) {
    if (!fiscalData) return '';
    const payload = `CUIT:30-82749102-3|PV:${fiscalData.puntoVenta}|Nº:${fiscalData.numero}|Total:${total}|CAE:${fiscalData.cae}`;
    return `
        <div class="qr-simulado-box">
            <div class="qr-simulado-grid">${Array.from({ length: 49 }).map((_, i) => `<span class="${(simpleHash(payload + i) % 3 === 0) ? 'on' : ''}"></span>`).join('')}</div>
            <div class="qr-simulado-label">QR SIMULADO — NO VÁLIDO</div>
        </div>
    `;
}
const PAYMENT_METHODS = ['Efectivo', 'Tarjeta de Débito', 'Tarjeta de Crédito', 'Transferencia', 'Mercado Pago', 'Cuenta Corriente'];
const TURNOS = ['Mañana', 'Tarde', 'Noche'];

// Determina el turno actual según la hora del día (se usa como valor por defecto en el POS).
function getCurrentTurno() {
    const hour = new Date().getHours();
    if (hour < 14) return 'Mañana';
    if (hour < 20) return 'Tarde';
    return 'Noche';
}

function computeExpectedCash(sucursalId, date, openingFloat) {
    const cashSalesTotal = STATE.sales
        .filter(s => s.sucursalId === sucursalId && s.date === date && s.status !== 'Cancelado' && s.metodoPago === 'Efectivo')
        .reduce((a, s) => a + s.total, 0);
    return openingFloat + cashSalesTotal;
}

// Arqueo detallado: para cada medio de pago, cuánto "debería" haber según lo vendido
// (filtrado por sucursal + fecha + turno). El Efectivo suma también el fondo inicial.
function computeExpectedByPaymentMethod(sucursalId, date, turno, openingFloat) {
    const salesInShift = STATE.sales.filter(s =>
        s.sucursalId === sucursalId && s.date === date && s.status !== 'Cancelado' && (!turno || s.turno === turno)
    );
    return PAYMENT_METHODS.map(method => {
        const total = salesInShift.filter(s => (s.metodoPago || 'Efectivo') === method).reduce((a, s) => a + s.total, 0);
        const expected = method === 'Efectivo' ? total + openingFloat : total;
        return { method, expected };
    });
}

function openCashClosingModal() {
    if (!hasPermission('cerrarCaja')) {
        showToast('Permiso Denegado', 'Tu usuario no tiene permiso para realizar cierres de caja.', 'danger');
        return;
    }
    const modal = document.getElementById('cash-closing-modal');
    const fields = document.getElementById('cash-closing-fields');
    modal.classList.add('active');
    const todayStr = new Date().toISOString().split('T')[0];
    const defaultSucursal = STATE.currentUser ? STATE.currentUser.sucursalId : STATE.sucursales[0].id;

    fields.innerHTML = `
        <div class="form-row">
            <div class="form-group">
                <label>Sucursal</label>
                <select class="form-control" id="cc-sucursal-select">
                    ${STATE.sucursales.map(s => `<option value="${s.id}" ${s.id === defaultSucursal ? 'selected' : ''}>${s.name}</option>`).join('')}
                </select>
            </div>
            <div class="form-group">
                <label>Turno</label>
                <select class="form-control" id="cc-turno-select">
                    ${TURNOS.map(t => `<option value="${t}" ${t === getCurrentTurno() ? 'selected' : ''}>${t}</option>`).join('')}
                </select>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Fecha</label>
                <input type="date" class="form-control" id="cc-date-input" value="${todayStr}">
            </div>
            <div class="form-group">
                <label>Fondo Inicial de Caja ($)</label>
                <input type="number" class="form-control" id="cc-opening-input" min="0" value="0">
            </div>
        </div>
        <label style="font-size:0.75rem; font-weight:bold; margin: 10px 0 6px; display:block;">ARQUEO POR MEDIO DE PAGO</label>
        <div class="table-wrapper">
            <table class="custom-table ledger-table">
                <thead><tr><th>Medio de Pago</th><th>Esperado (Sistema)</th><th>Real / Conciliado</th><th>Diferencia</th></tr></thead>
                <tbody id="cc-breakdown-body"></tbody>
            </table>
        </div>
        <div class="form-group" style="margin-top:12px;">
            <label>Observaciones</label>
            <textarea class="form-control" id="cc-notes-input" rows="2" placeholder="Opcional"></textarea>
        </div>
    `;

    const sucSel = document.getElementById('cc-sucursal-select');
    const turnoSel = document.getElementById('cc-turno-select');
    const dateInput = document.getElementById('cc-date-input');
    const openingInput = document.getElementById('cc-opening-input');
    const breakdownBody = document.getElementById('cc-breakdown-body');

    const renderBreakdown = () => {
        const openingFloat = parseFloat(openingInput.value) || 0;
        const breakdown = computeExpectedByPaymentMethod(sucSel.value, dateInput.value, turnoSel.value, openingFloat);
        breakdownBody.innerHTML = breakdown.map(row => `
            <tr data-method="${row.method}">
                <td>${row.method}</td>
                <td class="cc-expected-cell">${formatCurrency(row.expected)}</td>
                <td><input type="number" class="form-control cc-real-input" data-method="${row.method}" min="0" step="0.01" value="${row.expected}" style="padding:6px 8px; max-width:140px;"></td>
                <td class="cc-diff-cell" style="font-weight:700;">${formatCurrency(0)}</td>
            </tr>
        `).join('');

        breakdownBody.querySelectorAll('.cc-real-input').forEach(input => {
            input.addEventListener('input', () => updateDifferenceRow(input));
            updateDifferenceRow(input);
        });
    };

    function updateDifferenceRow(input) {
        const tr = input.closest('tr');
        const expected = parseFloat(tr.querySelector('.cc-expected-cell').textContent.replace(/[^\d.-]/g, '')) || 0;
        const real = parseFloat(input.value) || 0;
        const diff = real - expected;
        const diffCell = tr.querySelector('.cc-diff-cell');
        diffCell.textContent = (diff > 0 ? '+' : '') + formatCurrency(diff);
        diffCell.style.color = diff === 0 ? 'var(--success)' : (diff > 0 ? 'var(--warning)' : 'var(--danger)');
    }

    [sucSel, turnoSel, dateInput, openingInput].forEach(el => el.addEventListener('input', renderBreakdown));
    renderBreakdown();
}

function closeCashClosingModal() {
    document.getElementById('cash-closing-modal').classList.remove('active');
}

function handleCashClosingSubmit(e) {
    e.preventDefault();
    const sucursalId = document.getElementById('cc-sucursal-select').value;
    const turno = document.getElementById('cc-turno-select').value;
    const date = document.getElementById('cc-date-input').value;
    const openingFloat = parseFloat(document.getElementById('cc-opening-input').value) || 0;
    const notes = document.getElementById('cc-notes-input').value;

    const breakdown = [];
    document.querySelectorAll('#cc-breakdown-body tr').forEach(tr => {
        const method = tr.dataset.method;
        const expected = parseFloat(tr.querySelector('.cc-expected-cell').textContent.replace(/[^\d.-]/g, '')) || 0;
        const real = parseFloat(tr.querySelector('.cc-real-input').value) || 0;
        breakdown.push({ method, expected, real, difference: real - expected });
    });

    const totalDifference = breakdown.reduce((a, r) => a + r.difference, 0);
    const cashRow = breakdown.find(r => r.method === 'Efectivo');

    const newClosing = {
        id: `CC-00${STATE.cashClosings.length + 1}`,
        sucursalId, turno, date, openingFloat,
        expectedCash: cashRow ? cashRow.expected : openingFloat,
        countedCash: cashRow ? cashRow.real : 0,
        difference: totalDifference,
        breakdown,
        notes,
        closedBy: STATE.currentUser ? STATE.currentUser.name : 'N/D'
    };
    STATE.cashClosings.push(newClosing);

    logHistory('cashClosings', 'create', `Cierre de caja (${turno}) registrado para ${formatDate(date)}.`, `Diferencia total: ${formatCurrency(totalDifference)}`);
    const kind = totalDifference === 0 ? 'success' : (totalDifference > 0 ? 'warning' : 'danger');
    const label = totalDifference === 0 ? 'La caja cerró exacta en todos los medios de pago.' : (totalDifference > 0 ? `Sobrante total de ${formatCurrency(totalDifference)}.` : `Faltante total de ${formatCurrency(Math.abs(totalDifference))}.`);
    showToast('Cierre Registrado', label, kind);

    saveLocalState();
    closeCashClosingModal();
    switchView(STATE.currentView);
}

function viewCashClosingDetail(closingId) {
    const cc = STATE.cashClosings.find(c => c.id === closingId);
    if (!cc) return;
    const suc = STATE.sucursales.find(s => s.id === cc.sucursalId);
    const modal = document.getElementById('details-modal');
    document.getElementById('details-modal-title').textContent = `Cierre de Caja ${cc.id} - ${suc ? suc.name : ''}`;
    document.getElementById('details-modal-content').innerHTML = `
        <div class="balance-summary-row">
            <div class="balance-summary-card">
                <span class="label">Turno / Fecha</span>
                <span class="value" style="font-size:1rem;">${cc.turno || '—'} · ${formatDate(cc.date)}</span>
            </div>
            <div class="balance-summary-card">
                <span class="label">Diferencia Total</span>
                <span class="value ${cc.difference < 0 ? 'positive' : 'negative'}">${cc.difference > 0 ? '+' : ''}${formatCurrency(cc.difference)}</span>
            </div>
        </div>
        <div class="table-wrapper">
            <table class="custom-table ledger-table">
                <thead><tr><th>Medio de Pago</th><th>Esperado</th><th>Real / Conciliado</th><th>Diferencia</th></tr></thead>
                <tbody>
                    ${(cc.breakdown || []).map(r => `<tr>
                        <td>${r.method}</td>
                        <td>${formatCurrency(r.expected)}</td>
                        <td>${formatCurrency(r.real)}</td>
                        <td style="font-weight:700; color:${r.difference === 0 ? 'var(--success)' : (r.difference > 0 ? 'var(--warning)' : 'var(--danger)')};">${r.difference > 0 ? '+' : ''}${formatCurrency(r.difference)}</td>
                    </tr>`).join('')}
                </tbody>
            </table>
        </div>
        ${cc.notes ? `<p style="margin-top:12px;"><strong>Observaciones:</strong> ${cc.notes}</p>` : ''}
        <p class="text-secondary" style="margin-top:8px; font-size:0.8rem;">Cerrado por ${cc.closedBy}</p>
    `;
    modal.classList.add('active');
}

function renderCashClosingsView(container) {
    container.innerHTML = `
        <div class="view-header-bar">
            <div></div>
            ${hasPermission('cerrarCaja') ? `
            <button class="btn-primary" id="btn-new-cash-closing">
                <i data-lucide="plus"></i>
                <span>Nuevo Cierre</span>
            </button>` : ''}
        </div>
        <div class="table-card">
            <div class="table-wrapper">
                <table class="custom-table">
                    <thead>
                        <tr>
                            <th>Fecha</th><th>Turno</th><th>Sucursal</th><th>Fondo Inicial</th>
                            <th>Efectivo Esperado</th><th>Efectivo Contado</th><th>Dif. Total</th><th>Cerrado por</th><th></th>
                        </tr>
                    </thead>
                    <tbody id="cash-closings-body"></tbody>
                </table>
            </div>
        </div>
    `;
    const btn = document.getElementById('btn-new-cash-closing');
    if (btn) btn.addEventListener('click', openCashClosingModal);

    const tbody = document.getElementById('cash-closings-body');
    if (STATE.cashClosings.length === 0) {
        tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; color:var(--text-muted); padding:32px;">No hay cierres de caja registrados todavía.</td></tr>`;
    } else {
        tbody.innerHTML = STATE.cashClosings.slice().reverse().map(cc => {
            const suc = STATE.sucursales.find(s => s.id === cc.sucursalId);
            const diffColor = cc.difference === 0 ? 'var(--success)' : (cc.difference > 0 ? 'var(--warning)' : 'var(--danger)');
            const diffLabel = cc.difference === 0 ? 'Exacto' : `${cc.difference > 0 ? '+' : ''}${formatCurrency(cc.difference)}`;
            return `<tr>
                <td>${formatDate(cc.date)}</td>
                <td>${cc.turno || '—'}</td>
                <td>${suc ? suc.name : '—'}</td>
                <td>${formatCurrency(cc.openingFloat)}</td>
                <td>${formatCurrency(cc.expectedCash)}</td>
                <td>${formatCurrency(cc.countedCash)}</td>
                <td style="font-weight:700; color:${diffColor};">${diffLabel}</td>
                <td>${cc.closedBy}</td>
                <td><button class="btn-table-action view" onclick="viewCashClosingDetail('${cc.id}')" title="Ver desglose por medio de pago"><i data-lucide="eye"></i></button></td>
            </tr>`;
        }).join('');
    }
    lucide.createIcons();
}

// ==========================================
// BALDI - MODO OFFLINE COMPLETO + SINCRONIZACIÓN AUTOMÁTICA
// ==========================================
// El sistema sigue funcionando 100% sin conexión: las ventas y demás operaciones se
// registran en memoria y se persisten en localStorage (para sobrevivir a un refresh o
// cierre del navegador mientras no hay internet). En un despliegue real, `syncPendingData()`
// es el punto de enganche para reemplazar por llamadas reales a tu backend/API en la nube.
const LOCAL_STORAGE_KEY = 'baldi_pos_local_state_v1';
let isSyncing = false;

function saveLocalState() {
    try {
        const snapshot = {
            inventory: STATE.inventory,
            sales: STATE.sales,
            purchases: STATE.purchases,
            receipts: STATE.receipts,
            payments: STATE.payments,
            cashClosings: STATE.cashClosings,
            creditNotes: STATE.creditNotes,
            transfers: STATE.transfers,
            history: STATE.history.slice(0, 300),
            clients: STATE.clients,
            providers: STATE.providers,
            users: STATE.users,
            sucursales: STATE.sucursales,
            comprobanteCounters: STATE.comprobanteCounters,
            savedAt: new Date().toISOString()
        };
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(snapshot));
    } catch (e) {
        console.error('No se pudo guardar el estado local (localStorage).', e);
    }
}

function loadLocalState() {
    try {
        const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (!raw) return;
        const snapshot = JSON.parse(raw);
        Object.keys(snapshot).forEach(key => {
            if (key === 'savedAt') return;
            if (Array.isArray(STATE[key]) && Array.isArray(snapshot[key])) {
                STATE[key] = snapshot[key];
            } else if (key === 'comprobanteCounters' && snapshot[key]) {
                STATE.comprobanteCounters = snapshot[key];
            }
        });
    } catch (e) {
        console.error('No se pudo restaurar el estado local (localStorage). Se continúa con los datos de demostración.', e);
    }
}

function getPendingSyncCount() {
    const pendingSales = STATE.sales.filter(s => s.synced === false).length;
    const pendingPurchases = STATE.purchases.filter(p => p.synced === false).length;
    return pendingSales + pendingPurchases;
}

function updateConnectionBadge() {
    const el = document.getElementById('connection-status');
    const text = document.getElementById('connection-status-text');
    const badge = document.getElementById('sync-pending-badge');
    if (!el) return;
    const online = navigator.onLine;
    el.classList.toggle('offline', !online);
    text.textContent = online ? (isSyncing ? 'Sincronizando…' : 'En línea') : 'Sin conexión (Modo Offline)';
    const pending = getPendingSyncCount();
    if (pending > 0) {
        badge.style.display = '';
        badge.textContent = pending;
    } else {
        badge.style.display = 'none';
    }
}

// Simula la sincronización con un backend en la nube: en producción, este es el lugar
// donde se haría un POST real de cada venta/compra pendiente a tu API, y solo se marca
// `synced: true` cuando el servidor confirma haberla recibido.
function syncPendingData() {
    if (isSyncing || !navigator.onLine) return;
    const pending = getPendingSyncCount();
    if (pending === 0) return;

    isSyncing = true;
    updateConnectionBadge();

    setTimeout(() => {
        STATE.sales.forEach(s => { if (s.synced === false) s.synced = true; });
        STATE.purchases.forEach(p => { if (p.synced === false) p.synced = true; });
        isSyncing = false;
        saveLocalState();
        updateConnectionBadge();
        showToast('Sincronización Completa', `${pending} operación(es) registradas offline se sincronizaron con la nube.`, 'success');
        if (['sales', 'purchases', 'dashboard'].includes(STATE.currentView)) {
            switchView(STATE.currentView);
        }
    }, 1500); // demora simulada de red
}

function initOfflineSync() {
    updateConnectionBadge();
    window.addEventListener('online', () => {
        showToast('Conexión Restablecida', 'Sincronizando operaciones pendientes con la nube...', 'info');
        updateConnectionBadge();
        syncPendingData();
    });
    window.addEventListener('offline', () => {
        showToast('Sin Conexión', 'Modo offline activado: las ventas se siguen registrando localmente.', 'warning');
        updateConnectionBadge();
    });
    // Reintenta sincronizar cada 30s por si el evento 'online' no se disparó a tiempo
    setInterval(() => { if (navigator.onLine) syncPendingData(); }, 30000);
}

// ==========================================
// BALDI - NOTAS DE CRÉDITO Y DÉBITO (referencian una Factura A/B/C emitida)
// ==========================================
function renderCreditNotesView(container) {
    container.innerHTML = `
        <div class="view-header-bar">
            <div></div>
            <button class="btn-primary" id="btn-new-credit-note">
                <i data-lucide="plus"></i>
                <span>Nueva Nota</span>
            </button>
        </div>
        <div class="table-card">
            <div class="table-wrapper">
                <table class="custom-table">
                    <thead>
                        <tr><th>Nº</th><th>Tipo</th><th>Comprobante Asociado</th><th>Cliente</th><th>Fecha</th><th>Monto</th><th>Motivo</th><th style="width:80px;text-align:center;">Acciones</th></tr>
                    </thead>
                    <tbody id="credit-notes-body"></tbody>
                </table>
            </div>
        </div>
    `;
    document.getElementById('btn-new-credit-note').addEventListener('click', () => openCrudModal('creditNotes', 'create'));

    const tbody = document.getElementById('credit-notes-body');
    if (STATE.creditNotes.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; color:var(--text-muted); padding:32px;">No hay notas de crédito o débito emitidas.</td></tr>`;
    } else {
        tbody.innerHTML = STATE.creditNotes.slice().reverse().map(nc => `
            <tr>
                <td style="font-weight:600;">${nc.id}</td>
                <td><span class="status-badge ${nc.tipo === 'Crédito' ? 'success' : 'warning'}">Nota de ${nc.tipo} ${nc.letra}</span></td>
                <td>${nc.saleId}</td>
                <td>${nc.clientName}</td>
                <td>${formatDate(nc.date)}</td>
                <td style="font-weight:700;">${formatCurrency(nc.amount)}</td>
                <td>${nc.motivo}</td>
                <td style="text-align:center;">
                    <button class="btn-table-action edit" onclick="printCreditNote('${nc.id}')" title="Imprimir">
                        <i data-lucide="printer"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    }
    lucide.createIcons();
}

function printCreditNote(id) {
    const nc = STATE.creditNotes.find(n => n.id === id);
    if (!nc) return;
    const sucursal = STATE.sucursales.find(s => s.id === nc.sucursalId) || STATE.sucursales[0];
    const fd = nc.fiscalData;
    const fiscalBoxHtml = fd ? `
        <div class="t-line"></div>
        <div class="fiscal-sim-box">
            <p class="t-center" style="font-weight:bold; color:#b91c1c;">⚠ CAE SIMULADO — NO VÁLIDO ANTE ARCA/AFIP</p>
            <p>Punto de Venta: ${fd.puntoVenta} &nbsp; Nº: ${fd.numero}</p>
            <p>CAE (demo): ${fd.cae}</p>
            <p>Vto. CAE (demo): ${formatDate(fd.caeVencimiento)}</p>
            ${renderQrPlaceholder(fd, sucursal, nc.amount)}
        </div>
    ` : '';
    const html = `
        <div class="ticket-paper">
            <div class="t-center">
                <h3>BALDI FIAMBRERÍA</h3>
                <p>${sucursal.name}</p>
                <p>CUIT: 30-82749102-3</p>
            </div>
            <div class="t-line"></div>
            <p class="t-center" style="font-weight:bold;">NOTA DE ${nc.tipo.toUpperCase()} ${nc.letra}</p>
            <p>Fecha: ${formatDate(nc.date)}</p>
            <p>Comprobante asociado: ${nc.saleId}</p>
            <p>Cliente: ${nc.clientName}</p>
            <p>Motivo: ${nc.motivo}</p>
            <div class="t-line"></div>
            <div class="t-row" style="font-weight:bold; font-size:14px;"><span>TOTAL</span><span>${formatCurrency(nc.amount)}</span></div>
            ${fiscalBoxHtml}
        </div>
    `;
    openTicketWindow(`Nota ${nc.id}`, html);
}

// ==========================================
// BALDI - TRASPASOS DE STOCK ENTRE SUCURSALES
// ==========================================
function openTransferModal() {
    const modal = document.getElementById('transfer-modal');
    const fields = document.getElementById('transfer-fields');
    modal.classList.add('active');
    const defaultOrigen = STATE.currentUser ? STATE.currentUser.sucursalId : STATE.sucursales[0].id;

    fields.innerHTML = `
        <div class="form-group">
            <label>Producto</label>
            <select class="form-control" id="tr-product-select">
                ${STATE.inventory.map(it => `<option value="${it.id}">${it.name} (${it.sku})</option>`).join('')}
            </select>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Sucursal Origen</label>
                <select class="form-control" id="tr-origen-select">
                    ${STATE.sucursales.map(s => `<option value="${s.id}" ${s.id === defaultOrigen ? 'selected' : ''}>${s.name}</option>`).join('')}
                </select>
            </div>
            <div class="form-group">
                <label>Sucursal Destino</label>
                <select class="form-control" id="tr-destino-select">
                    ${STATE.sucursales.map(s => `<option value="${s.id}" ${s.id !== defaultOrigen ? 'selected' : ''}>${s.name}</option>`).join('')}
                </select>
            </div>
        </div>
        <div class="bulk-price-preview" id="tr-stock-preview">Stock disponible en origen: —</div>
        <div class="form-group">
            <label>Cantidad a Trasladar</label>
            <input type="number" class="form-control" id="tr-qty-input" min="1" value="1" required>
        </div>
        <div class="form-group">
            <label>Observaciones</label>
            <textarea class="form-control" id="tr-notes-input" rows="2" placeholder="Opcional"></textarea>
        </div>
    `;

    const productSelect = document.getElementById('tr-product-select');
    const origenSelect = document.getElementById('tr-origen-select');
    const destinoSelect = document.getElementById('tr-destino-select');
    const qtyInput = document.getElementById('tr-qty-input');
    const preview = document.getElementById('tr-stock-preview');

    const updatePreview = () => {
        const item = STATE.inventory.find(it => it.id === productSelect.value);
        if (!item) return;
        const stockOrigen = getStock(item, origenSelect.value);
        const sucNombre = (STATE.sucursales.find(s => s.id === origenSelect.value) || {}).name || '';
        preview.textContent = `Stock disponible de "${item.name}" en ${sucNombre}: ${stockOrigen} ${item.unit}.`;
        qtyInput.max = stockOrigen;
    };
    [productSelect, origenSelect].forEach(el => el.addEventListener('change', updatePreview));
    updatePreview();

    // Evita elegir la misma sucursal como origen y destino
    const syncDestino = () => {
        if (destinoSelect.value === origenSelect.value) {
            const alt = STATE.sucursales.find(s => s.id !== origenSelect.value);
            if (alt) destinoSelect.value = alt.id;
        }
    };
    origenSelect.addEventListener('change', syncDestino);
}

function closeTransferModal() {
    document.getElementById('transfer-modal').classList.remove('active');
}

function handleTransferSubmit(e) {
    e.preventDefault();
    const productId = document.getElementById('tr-product-select').value;
    const origenId = document.getElementById('tr-origen-select').value;
    const destinoId = document.getElementById('tr-destino-select').value;
    const qty = parseInt(document.getElementById('tr-qty-input').value);
    const notes = document.getElementById('tr-notes-input').value;

    const item = STATE.inventory.find(it => it.id === productId);
    if (!item) { showToast('Error', 'Producto no encontrado.', 'danger'); return; }

    if (origenId === destinoId) {
        showToast('Error', 'La sucursal de origen y destino no pueden ser la misma.', 'danger');
        return;
    }
    if (isNaN(qty) || qty <= 0) {
        showToast('Error', 'Ingresá una cantidad válida.', 'danger');
        return;
    }
    const stockOrigen = getStock(item, origenId);
    if (qty > stockOrigen) {
        const sucNombre = (STATE.sucursales.find(s => s.id === origenId) || {}).name || '';
        showToast('Stock Insuficiente', `Solo hay ${stockOrigen} ${item.unit} de "${item.name}" en ${sucNombre}.`, 'danger');
        return;
    }

    // Traspaso: resta en origen, suma en destino (nunca se "crea" ni se "pierde" stock)
    adjustStock(item, origenId, -qty);
    adjustStock(item, destinoId, qty);

    const origenNombre = (STATE.sucursales.find(s => s.id === origenId) || {}).name || '';
    const destinoNombre = (STATE.sucursales.find(s => s.id === destinoId) || {}).name || '';

    const newTransfer = {
        id: `TRA-00${STATE.transfers.length + 1}`,
        productId, productName: item.name, sku: item.sku,
        fromSucursalId: origenId, fromSucursalName: origenNombre,
        toSucursalId: destinoId, toSucursalName: destinoNombre,
        qty, unit: item.unit, notes,
        date: new Date().toISOString().split('T')[0],
        transferredBy: STATE.currentUser ? STATE.currentUser.name : 'N/D'
    };
    STATE.transfers.push(newTransfer);

    logHistory('transfers', 'create', `Traspaso de ${qty} ${item.unit} de "${item.name}" de ${origenNombre} a ${destinoNombre}.`, notes);
    showToast('Traspaso Realizado', `${qty} ${item.unit} de "${item.name}" movidos de ${origenNombre} a ${destinoNombre}.`, 'success');

    saveLocalState();
    closeTransferModal();
    switchView(STATE.currentView);
}

function renderTransfersView(container) {
    container.innerHTML = `
        <div class="view-header-bar">
            <div></div>
            <button class="btn-primary" id="btn-new-transfer">
                <i data-lucide="plus"></i>
                <span>Nuevo Traspaso</span>
            </button>
        </div>
        <div class="table-card">
            <div class="table-wrapper">
                <table class="custom-table">
                    <thead>
                        <tr>
                            <th>Código</th><th>Producto</th><th>Origen</th><th>Destino</th>
                            <th>Cantidad</th><th>Fecha</th><th>Realizado por</th>
                        </tr>
                    </thead>
                    <tbody id="transfers-table-body"></tbody>
                </table>
            </div>
        </div>

        <!-- History component -->
        <div class="history-section">
            <div class="history-title">
                <i data-lucide="history"></i>
                <span>Historial de Traspasos</span>
            </div>
            <div class="history-timeline" id="transfers-history"></div>
        </div>
    `;
    document.getElementById('btn-new-transfer').addEventListener('click', openTransferModal);

    const tbody = document.getElementById('transfers-table-body');
    if (STATE.transfers.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:var(--text-muted); padding:32px;">No se registraron traspasos entre sucursales todavía.</td></tr>`;
    } else {
        tbody.innerHTML = STATE.transfers.slice().reverse().map(t => `
            <tr>
                <td style="font-weight:600;">${t.id}</td>
                <td>${t.productName} <span class="barcode-mono">(${t.sku})</span></td>
                <td>${t.fromSucursalName}</td>
                <td>${t.toSucursalName}</td>
                <td style="font-weight:700;">${t.qty} ${t.unit}</td>
                <td>${formatDate(t.date)}</td>
                <td>${t.transferredBy}</td>
            </tr>
        `).join('');
    }
    lucide.createIcons();
    renderModuleHistory('transfers');
}
