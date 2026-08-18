/**
 * Sidera - Gestión de Distribuidora de Bebidas
 * Core Application Logic & State Management
 */

// --- GLOBAL APPLICATION STATE ---
const STATE = {
    currentView: 'dashboard',
    
    // Inventory items (Bebidas)
    inventory: [
        { id: '1', name: 'Coca-Cola Original 2.25L', sku: 'GAS-COC-225', category: 'Gaseosas', stock: 180, minStock: 60, unit: 'Cajones x6', cost: 4200, price: 5600 },
        { id: '2', name: 'Cerveza Quilmes Clásica 1L', sku: 'CER-QUI-1L', category: 'Cervezas', stock: 90, minStock: 40, unit: 'Cajones x12', cost: 6800, price: 9200 },
        { id: '3', name: 'Agua Mineral Villavicencio 1.5L', sku: 'AGU-VIL-150', category: 'Aguas', stock: 220, minStock: 80, unit: 'Packs x6', cost: 2100, price: 2900 },
        { id: '4', name: 'Fernet Branca 750ml', sku: 'LIC-FER-750', category: 'Licores y Aperitivos', stock: 35, minStock: 15, unit: 'Cajas x6', cost: 8900, price: 12500 },
        { id: '5', name: 'Vino Malbec Trapiche 750ml', sku: 'VIN-TRA-750', category: 'Vinos y Espumantes', stock: 8, minStock: 12, unit: 'Cajas x12', cost: 11000, price: 15800 }, // Stock bajo
        { id: '6', name: 'Gatorade Naranja 500ml', sku: 'ENE-GAT-500', category: 'Isotónicas y Energizantes', stock: 65, minStock: 25, unit: 'Packs x12', cost: 3200, price: 4500 },
        { id: '7', name: 'Sidra Real 725ml', sku: 'SID-REA-725', category: 'Vinos y Espumantes', stock: 5, minStock: 20, unit: 'Cajas x12', cost: 3600, price: 5100 } // Stock bajo
    ],
    
    // Providers (Distribuidoras / Proveedores)
    providers: [
        { id: '1', name: 'Coca-Cola FEMSA Argentina', cuit: '30-50000845-9', phone: '011-4319-3000', email: 'ventas@femsa.com.ar', address: 'Av. del Libertador 1000, CABA' },
        { id: '2', name: 'Cervecería y Maltería Quilmes', cuit: '30-50001082-8', phone: '0800-333-2020', email: 'comercial@quilmes.com.ar', address: 'Av. Andrés Baranda 197, Quilmes' },
        { id: '3', name: 'Bodegas Trapiche S.A.', cuit: '30-54218903-4', phone: '0261-520-7666', email: 'pedidos@trapiche.com.ar', address: 'Nueva Mayorga s/n, Coquimbito, Mendoza' }
    ],
    
    // Clients (Clientes)
    clients: [
        { id: '1', name: 'Restaurante La Parrilla del Che', dni_cuit: '30-71458921-2', phone: '11-5823-1492', email: 'compras@laparrilladelche.com', type: 'Bar / Restaurante' },
        { id: '2', name: 'Kiosco Don Martín', dni_cuit: '24.582.103', phone: '341-692-0492', email: 'kioscodonmartin@gmail.com', type: 'Kiosco' },
        { id: '3', name: 'Carlos Rodríguez', dni_cuit: '32.194.053', phone: '11-4029-5821', email: 'carlos.rod@hotmail.com', type: 'Particular' }
    ],
    
    // Purchases (Compras)
    purchases: [
        { id: 'COM-001', providerId: '1', providerName: 'Coca-Cola FEMSA Argentina', date: '2026-08-10', items: [{ productId: '1', qty: 100, cost: 4200 }], total: 420000, status: 'Recibido' },
        { id: 'COM-002', providerId: '2', providerName: 'Cervecería y Maltería Quilmes', date: '2026-08-14', items: [{ productId: '2', qty: 30, cost: 6800 }], total: 204000, status: 'Recibido' }
    ],
    
    // Sales (Ventas)
    sales: [
        { id: 'VEN-001', clientId: '1', clientName: 'Restaurante La Parrilla del Che', date: '2026-08-15', items: [{ productId: '1', qty: 50, price: 5600 }, { productId: '2', qty: 20, price: 9200 }], total: 464000, status: 'Entregado' },
        { id: 'VEN-002', clientId: '3', clientName: 'Carlos Rodríguez', date: '2026-08-16', items: [{ productId: '3', qty: 20, price: 2900 }], total: 58000, status: 'Entregado' },
        { id: 'VEN-003', clientId: '2', clientName: 'Kiosco Don Martín', date: '2026-08-17', items: [{ productId: '6', qty: 15, price: 4500 }], total: 67500, status: 'Pendiente' }
    ],
    
    // Receipts (Recibos de Cobro)
    receipts: [
        { id: 'REC-001', saleId: 'VEN-001', clientName: 'Restaurante La Parrilla del Che', date: '2026-08-15', amount: 464000, method: 'Transferencia' },
        { id: 'REC-002', saleId: 'VEN-002', clientName: 'Carlos Rodríguez', date: '2026-08-16', amount: 58000, method: 'Efectivo' }
    ],
    
    // Payments (Pagos de Compra)
    payments: [
        { id: 'PAG-001', purchaseId: 'COM-001', providerName: 'Coca-Cola FEMSA Argentina', date: '2026-08-10', amount: 420000, method: 'Transferencia' },
        { id: 'PAG-002', purchaseId: 'COM-002', providerName: 'Cervecería y Maltería Quilmes', date: '2026-08-14', amount: 204000, method: 'Cheque' }
    ],
    
    // Audit / History log (Historial)
    history: [
        { id: '1', module: 'system', action: 'create', description: 'Inicialización del sistema con datos de prueba.', timestamp: '2026-08-18T08:00:00-03:00', details: 'Base de datos simulada creada con 7 bebidas, 3 proveedores y 3 clientes.' }
    ],
    
    // Active alerts for notification center
    notifications: [
        { id: 'n1', title: 'Stock Bajo', text: 'La bebida "Sidra Real 725ml" ha quedado bajo el mínimo.', type: 'warning', time: 'Hace 2 horas' },
        { id: 'n2', title: 'Stock Crítico', text: 'El "Vino Malbec Trapiche 750ml" requiere reposición urgente.', type: 'danger', time: 'Hace 5 horas' },
        { id: 'n3', title: 'Nueva Venta', text: 'Se ha registrado una venta pendiente para Kiosco Don Martín.', type: 'success', time: 'Hace 1 día' }
    ],
    
    // System Users (Usuarios)
    users: [
        { id: '1', name: 'Claudio Vasquez', username: 'admin', password: 'admin123', role: 'Administrador', email: 'claudio@sidera.com' },
        { id: '2', name: 'Laura Martínez', username: 'vendedor', password: 'vendedor123', role: 'Vendedor', email: 'laura@sidera.com' },
        { id: '3', name: 'Pedro Gómez', username: 'deposito', password: 'deposito123', role: 'Depósito', email: 'pedro@sidera.com' }
    ],
    currentUser: null
};

// Global chart references to allow destroying before rebuilding
let charts = {};

// Helper to log changes to the unified history
function logHistory(module, action, description, details = '') {
    const log = {
        id: (STATE.history.length + 1).toString(),
        module,
        action,
        description,
        timestamp: new Date().toISOString(),
        details
    };
    STATE.history.unshift(log); // Add to the top
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
        case 'dashboard':
            viewTitle.textContent = "Panel Principal";
            viewSubtitle.textContent = "Dashboard de métricas de ventas, reposición y control de stock en tiempo real.";
            renderDashboard(container);
            break;
        case 'inventory':
            viewTitle.textContent = "Inventario de Bebidas";
            viewSubtitle.textContent = "Catálogo de productos, control de stock mínimo y alta de bebidas.";
            renderInventoryView(container);
            break;
        case 'sales':
            viewTitle.textContent = "Gestión de Ventas";
            viewSubtitle.textContent = "Registros de ventas de bebidas a clientes y emisión de recibos.";
            renderSalesView(container);
            break;
        case 'purchases':
            viewTitle.textContent = "Pedidos de Compra";
            viewSubtitle.textContent = "Registro de compras a distribuidoras y proveedores para reponer inventario.";
            renderPurchasesView(container);
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
            viewSubtitle.textContent = "Directorio de bares, kioscos, restaurantes y particulares registrados.";
            renderClientsView(container);
            break;
        case 'providers':
            viewTitle.textContent = "Directorio de Proveedores";
            viewSubtitle.textContent = "Distribuidoras y bodegas oficiales asociadas al depósito.";
            renderProvidersView(container);
            break;
        case 'reports':
            viewTitle.textContent = "Informes y Análisis de Datos";
            viewSubtitle.textContent = "KPIs avanzados, valoración de existencias y flujo de caja consolidado.";
            renderReportsView(container);
            break;
        case 'users':
            viewTitle.textContent = "Control de Usuarios";
            viewSubtitle.textContent = "Alta, baja, modificación y roles del personal del depósito.";
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
    const lowStockCount = STATE.inventory.filter(item => item.stock <= item.minStock).length;
    
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
    
    const criticals = STATE.inventory.filter(item => item.stock <= item.minStock);
    
    if (criticals.length === 0) {
        container.innerHTML = `
            <div style="padding: 32px; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
                <i data-lucide="check-circle-2" style="width: 32px; height: 32px; color: var(--success); margin-bottom: 8px;"></i>
                <p>Todos los niveles de stock están saludables</p>
            </div>
        `;
        return;
    }
    
    criticals.forEach(item => {
        const row = document.createElement('div');
        row.className = 'list-item';
        row.innerHTML = `
            <div class="list-item-left">
                <div class="list-item-icon" style="color: var(--danger);">
                    <i data-lucide="package"></i>
                </div>
                <div class="list-item-details">
                    <span class="list-item-name">${item.name}</span>
                    <span class="list-item-sub">SKU: ${item.sku} | Categoría: ${item.category}</span>
                </div>
            </div>
            <div class="list-item-right">
                <span class="list-item-value" style="color: var(--danger);">${item.stock} ${item.unit}</span>
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
    const catTotals = { Gaseosas: 0, Cervezas: 0, Aguas: 0, 'Vinos y Espumantes': 0, 'Licores y Aperitivos': 0, 'Isotónicas y Energizantes': 0 };
    
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
                    '#0891b2', // cyan (Gaseosas)
                    '#f59e0b', // amber (Cervezas)
                    '#0ea5e9', // sky blue (Aguas)
                    '#be123c', // wine red (Vinos y Espumantes)
                    '#d946ef', // fuchsia (Licores y Aperitivos)
                    '#22c55e'  // green (Isotónicas y Energizantes)
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
    container.innerHTML = `
        <div class="view-header-bar">
            <div class="search-filter-box">
                <div class="search-input-wrapper">
                    <i data-lucide="search"></i>
                    <input type="text" id="inventory-search" class="search-input" placeholder="Buscar por SKU o descripción...">
                </div>
                <select class="filter-select" id="inventory-filter-cat">
                    <option value="all">Todas las Categorías</option>
                    <option value="Gaseosas">Gaseosas</option>
                    <option value="Cervezas">Cervezas</option>
                    <option value="Aguas">Aguas</option>
                    <option value="Vinos y Espumantes">Vinos y Espumantes</option>
                    <option value="Licores y Aperitivos">Licores y Aperitivos</option>
                    <option value="Isotónicas y Energizantes">Isotónicas y Energizantes</option>
                </select>
                <select class="filter-select" id="inventory-filter-stock">
                    <option value="all">Todo el Stock</option>
                    <option value="low">Bajo Mínimo</option>
                    <option value="ok">Stock Normal</option>
                </select>
            </div>
            <button class="btn-primary" id="btn-inventory-add">
                <i data-lucide="plus"></i>
                <span>Nueva Bebida</span>
            </button>
        </div>
        
        <div class="table-card">
            <div class="table-wrapper">
                <table class="custom-table" id="inventory-table">
                    <thead>
                        <tr>
                            <th>SKU</th>
                            <th>Descripción</th>
                            <th>Categoría</th>
                            <th>Unidad</th>
                            <th>Costo Unit.</th>
                            <th>Precio Venta</th>
                            <th>Stock</th>
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
    
    renderInventoryRows(STATE.inventory);
    renderModuleHistory('inventory');
}

function renderInventoryRows(items) {
    const tbody = document.getElementById('inventory-table-body');
    tbody.innerHTML = '';
    
    if (items.length === 0) {
        tbody.innerHTML = `<tr><td colspan="10" style="text-align: center; color: var(--text-muted); padding: 32px;">No se encontraron bebidas</td></tr>`;
        return;
    }
    
    items.forEach(item => {
        const isLow = item.stock <= item.minStock;
        const stateBadge = isLow ? '<span class="status-badge danger">Bajo Mínimo</span>' : '<span class="status-badge success">Normal</span>';
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="font-weight: 600;">${item.sku}</td>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>${item.unit}</td>
            <td>${formatCurrency(item.cost)}</td>
            <td style="font-weight: 600;">${formatCurrency(item.price)}</td>
            <td style="font-weight: 700; ${isLow ? 'color: var(--danger);' : ''}">${item.stock}</td>
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
    
    const filtered = STATE.inventory.filter(item => {
        const matchesQuery = item.sku.toLowerCase().includes(q) || item.name.toLowerCase().includes(q);
        const matchesCat = cat === 'all' || item.category === cat;
        
        let matchesStock = true;
        if (stockFilter === 'low') matchesStock = item.stock <= item.minStock;
        if (stockFilter === 'ok') matchesStock = item.stock > item.minStock;
        
        return matchesQuery && matchesCat && matchesStock;
    });
    
    renderInventoryRows(filtered);
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
                            <th>Fecha</th>
                            <th>Artículos</th>
                            <th>Monto Total</th>
                            <th>Estado</th>
                            <th style="width: 120px; text-align: center;">Acciones</th>
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
        tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 32px;">No se encontraron transacciones de venta</td></tr>`;
        return;
    }
    
    items.forEach(item => {
        let statusBadge = 'success';
        if (item.status === 'Pendiente') statusBadge = 'warning';
        if (item.status === 'Cancelado') statusBadge = 'danger';
        
        const itemsCount = item.items.reduce((acc, curr) => acc + curr.qty, 0);
        
        tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="font-weight: 600;">${item.id}</td>
            <td>${item.clientName}</td>
            <td>${formatDate(item.date)}</td>
            <td>${itemsCount} unidades</td>
            <td style="font-weight: 700;">${formatCurrency(item.total)}</td>
            <td><span class="status-badge ${statusBadge}">${item.status}</span></td>
            <td style="text-align: center;">
                <div class="table-actions">
                    <button class="btn-table-action view" onclick="viewTransactionDetails('sales', '${item.id}')" title="Ver Detalle / Remito">
                        <i data-lucide="eye"></i>
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
    const stockValue = STATE.inventory.reduce((acc, curr) => acc + (curr.stock * curr.cost), 0);
    const retailValue = STATE.inventory.reduce((acc, curr) => acc + (curr.stock * curr.price), 0);
    const expectedMargin = retailValue - stockValue;
    
    const totalReceipts = STATE.receipts.reduce((acc, curr) => acc + curr.amount, 0);
    const totalPayments = STATE.payments.reduce((acc, curr) => acc + curr.amount, 0);
    const netCashflow = totalReceipts - totalPayments;
    
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
        </div>

        <div class="reports-tabs">
            <button class="tab-btn active" id="btn-tab-financial">Flujo de Caja Real vs. Proyectado</button>
            <button class="tab-btn" id="btn-tab-products">Rotación & Stock Crítico</button>
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
    
    tabFin.addEventListener('click', () => {
        tabFin.classList.add('active');
        tabProd.classList.remove('active');
        renderFinancialReportChart();
    });
    
    tabProd.addEventListener('click', () => {
        tabFin.classList.remove('active');
        tabProd.classList.add('active');
        renderProductReportChart();
    });
    
    // Initial Chart render
    renderFinancialReportChart();
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
    const stockVals = STATE.inventory.map(item => item.stock);
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
        `;
        list.appendChild(item);
    });
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
        inventory: 'Bebida / Producto',
        providers: 'Proveedor',
        clients: 'Cliente',
        purchases: 'Compra',
        sales: 'Venta',
        receipts: 'Recibo de Pago',
        payments: 'Orden de Pago',
        users: 'Usuario'
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
        fieldsContainer.innerHTML = `
            <div class="form-group">
                <label>Descripción de la Bebida</label>
                <input type="text" class="form-control" name="name" value="${data.name || ''}" required placeholder="Ej: Coca-Cola Original 2.25L">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>SKU / Código</label>
                    <input type="text" class="form-control" name="sku" value="${data.sku || ''}" required placeholder="Ej: GAS-001">
                </div>
                <div class="form-group">
                    <label>Categoría</label>
                    <select class="form-control" name="category" required>
                        <option value="Gaseosas" ${data.category === 'Gaseosas' ? 'selected' : ''}>Gaseosas</option>
                        <option value="Cervezas" ${data.category === 'Cervezas' ? 'selected' : ''}>Cervezas</option>
                        <option value="Aguas" ${data.category === 'Aguas' ? 'selected' : ''}>Aguas</option>
                        <option value="Vinos y Espumantes" ${data.category === 'Vinos y Espumantes' ? 'selected' : ''}>Vinos y Espumantes</option>
                        <option value="Licores y Aperitivos" ${data.category === 'Licores y Aperitivos' ? 'selected' : ''}>Licores y Aperitivos</option>
                        <option value="Isotónicas y Energizantes" ${data.category === 'Isotónicas y Energizantes' ? 'selected' : ''}>Isotónicas y Energizantes</option>
                    </select>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Unidad de Medida</label>
                    <input type="text" class="form-control" name="unit" value="${data.unit || 'Unidades'}" required placeholder="Ej: Cajones x6, Packs x12, Botellas">
                </div>
                <div class="form-group">
                    <label>Stock Inicial</label>
                    <input type="number" class="form-control" name="stock" value="${data.stock ?? 0}" required min="0">
                </div>
            </div>
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
            <div class="form-group">
                <label>Stock Mínimo Alerta</label>
                <input type="number" class="form-control" name="minStock" value="${data.minStock ?? 10}" required min="0">
            </div>
        `;
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
                    <select class="form-control" name="role" required>
                        <option value="Administrador" ${data.role === 'Administrador' ? 'selected' : ''}>Administrador</option>
                        <option value="Vendedor" ${data.role === 'Vendedor' ? 'selected' : ''}>Vendedor</option>
                        <option value="Depósito" ${data.role === 'Depósito' ? 'selected' : ''}>Depósito</option>
                    </select>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" name="email" value="${data.email || ''}" required placeholder="laura@sidera.com">
                </div>
                <div class="form-group">
                    <label>Contraseña</label>
                    <input type="password" class="form-control" name="password" value="${data.password || ''}" required placeholder="••••••••">
                </div>
            </div>
        `;
    }
    
    // TRANSACTION: PURCHASES (COMPRAS)
    else if (module === 'purchases') {
        // Multi-item selector for transaction
        let providerOptions = STATE.providers.map(p => `<option value="${p.id}" ${data.providerId === p.id ? 'selected' : ''}>${p.name}</option>`).join('');
        let materialOptions = STATE.inventory.map(m => `<option value="${m.id}">${m.name} (Costo: ${formatCurrency(m.cost)})</option>`).join('');
        
        fieldsContainer.innerHTML = `
            <div class="form-row">
                <div class="form-group">
                    <label>Seleccionar Proveedor</label>
                    <select class="form-control" name="providerId" id="tx-provider-select" required>
                        ${providerOptions}
                    </select>
                </div>
                <div class="form-group">
                    <label>Fecha de Operación</label>
                    <input type="date" class="form-control" name="date" value="${data.date || new Date().toISOString().split('T')[0]}" required>
                </div>
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
        let clientOptions = STATE.clients.map(c => `<option value="${c.id}" ${data.clientId === c.id ? 'selected' : ''}>${c.name}</option>`).join('');
        let materialOptions = STATE.inventory.map(m => `<option value="${m.id}">${m.name} (Stock: ${m.stock} | Precio: ${formatCurrency(m.price)})</option>`).join('');
        
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
        };
        
        addBtn.addEventListener('click', () => {
            const mat = STATE.inventory.find(m => m.id === matSelect.value);
            const qty = parseInt(qtySelect.value);
            const price = parseFloat(priceInput.value);
            
            if (!mat || isNaN(qty) || qty <= 0 || isNaN(price) || price < 0) return;
            
            // Stock availability check (only warn)
            if (qty > mat.stock) {
                showToast('Stock Insuficiente', `Stock actual de ${mat.name} es ${mat.stock} ${mat.unit}.`, 'warning');
            }
            
            const existing = selectedItems.find(it => it.productId === mat.id);
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
        
        renderSelectedList();
        currentCrudContext.getItems = () => selectedItems;
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
    if (formObj.stock !== undefined) formObj.stock = parseInt(formObj.stock);
    if (formObj.minStock !== undefined) formObj.minStock = parseInt(formObj.minStock);
    if (formObj.cost !== undefined) formObj.cost = parseFloat(formObj.cost);
    if (formObj.price !== undefined) formObj.price = parseFloat(formObj.price);
    if (formObj.amount !== undefined) formObj.amount = parseFloat(formObj.amount);
    if (formObj.total !== undefined) formObj.total = parseFloat(formObj.total);
    
    if (action === 'create') {
        // Generate new sequential ID
        let newId = '';
        if (module === 'inventory' || module === 'providers' || module === 'clients' || module === 'users') {
            newId = (STATE[module].length + 1).toString();
        } else if (module === 'purchases') {
            newId = `COM-00${STATE.purchases.length + 1}`;
        } else if (module === 'sales') {
            newId = `VEN-00${STATE.sales.length + 1}`;
        } else if (module === 'receipts') {
            newId = `REC-00${STATE.receipts.length + 1}`;
        } else if (module === 'payments') {
            newId = `PAG-00${STATE.payments.length + 1}`;
        }
        
        formObj.id = newId;
        
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
                
                // Stock mutations (Decreasing inventory)
                if (formObj.status === 'Entregado') {
                    items.forEach(line => {
                        const mat = STATE.inventory.find(m => m.id === line.productId);
                        if (mat) {
                            mat.stock -= line.qty;
                            if (mat.stock < 0) mat.stock = 0; // prevent negative stock
                        }
                    });
                }
            } else {
                const provider = STATE.providers.find(p => p.id === formObj.providerId);
                formObj.providerName = provider ? provider.name : 'Distribuidora';
                
                // Stock mutations (Increasing inventory)
                if (formObj.status === 'Recibido') {
                    items.forEach(line => {
                        const mat = STATE.inventory.find(m => m.id === line.productId);
                        if (mat) mat.stock += line.qty;
                    });
                }
            }
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
                    method: 'Transferencia'
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
                            if (mat) mat.stock = Math.max(0, mat.stock - line.qty);
                        });
                    }
                } else {
                    const provider = STATE.providers.find(p => p.id === formObj.providerId);
                    formObj.providerName = provider ? provider.name : 'Distribuidora';
                    
                    if (original.status !== 'Recibido' && formObj.status === 'Recibido') {
                        items.forEach(line => {
                            const mat = STATE.inventory.find(m => m.id === line.productId);
                            if (mat) mat.stock += line.qty;
                        });
                    }
                }
            }
            
            // Merge form modifications
            STATE[module][index] = { ...original, ...formObj };
            
            logHistory(module, 'update', `Modificación en ${module}. Código: ${id}`, `Valores nuevos: ${JSON.stringify(formObj)}`);
            showToast('Modificación Realizada', `Se guardaron los cambios para ${id}`, 'success');
        }
    }
    
    closeModal();
    switchView(STATE.currentView); // Refresh current screen
}

// Global deletion helper
function deleteItem(module, id) {
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
                    if (mat) mat.stock += line.qty; // Return items to stock
                });
            } else if (oldStatus === 'Recibido' && module === 'purchases') {
                tx.items.forEach(line => {
                    const mat = STATE.inventory.find(m => m.id === line.productId);
                    if (mat) mat.stock = Math.max(0, mat.stock - line.qty); // Deduct items from stock
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
    
    content.innerHTML = `
        <div class="invoice-box">
            <div class="invoice-header">
                <h4>SIDERA CORRALÓN DIGITAL S.A.</h4>
                <p>Cuit: 30-82749102-3 | Av. San Martín 4900, Rosario</p>
                <p>Fecha de emisión: ${formatDate(tx.date)}</p>
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
        </div>
    `;
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
        localStorage.setItem('sidera_session', JSON.stringify(user));
        
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
    localStorage.removeItem('sidera_session');
    document.body.className = 'unauthenticated';
    showToast('Sesión Cerrada', 'Has salido del sistema.', 'info');
}

function checkSession() {
    const session = localStorage.getItem('sidera_session');
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
