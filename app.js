const STORAGE_KEY = "gestion_prestamos_app_v1";

const state = loadState();

const authScreen = document.getElementById("authScreen");
const loginForm = document.getElementById("loginForm");
const loginUsername = document.getElementById("loginUsername");
const loginPassword = document.getElementById("loginPassword");
const forgotPasswordBtn = document.getElementById("forgotPasswordBtn");
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const appShell = document.querySelector(".app-shell");

const clienteForm = document.getElementById("clienteForm");
const clienteCancelBtn = document.getElementById("clienteCancelBtn");
const clientesTable = document.getElementById("clientesTable");
const historialClienteTitulo = document.getElementById("historialClienteTitulo");
const historialClienteTable = document.getElementById("historialClienteTable");
const clientesSearch = document.getElementById("clientesSearch");
const clientesPager = document.getElementById("clientesPager");
const clientesSemaforoTitulo = document.getElementById("clientesSemaforoTitulo");
const clientesSemaforoSubtitulo = document.getElementById("clientesSemaforoSubtitulo");
const clientesSemaforoTable = document.getElementById("clientesSemaforoTable");
const volverTableroBtn = document.getElementById("volverTableroBtn");
const sessionUserInfo = document.getElementById("sessionUserInfo");
const logoutBtn = document.getElementById("logoutBtn");

const prestamoForm = document.getElementById("prestamoForm");
const prestamoCliente = document.getElementById("prestamoCliente");
const prestamoTipo = document.getElementById("prestamoTipo");
const prestamoMonto = document.getElementById("prestamoMonto");
const prestamoCuotas = document.getElementById("prestamoCuotas");
const prestamoInteres = document.getElementById("prestamoInteres");
const prestamoFecha = document.getElementById("prestamoFecha");
const interesPreview = document.getElementById("interesPreview");
const prestamosTable = document.getElementById("prestamosTable");
const prestamosSearch = document.getElementById("prestamosSearch");
const prestamosPager = document.getElementById("prestamosPager");

const pagoForm = document.getElementById("pagoForm");
const pagoPrestamo = document.getElementById("pagoPrestamo");
const pagoCuota = document.getElementById("pagoCuota");
const pagoMonto = document.getElementById("pagoMonto");
const pagoFecha = document.getElementById("pagoFecha");
const pagoAtrasoInfo = document.getElementById("pagoAtrasoInfo");
const pagosTable = document.getElementById("pagosTable");
const pagosSearch = document.getElementById("pagosSearch");
const pagosPager = document.getElementById("pagosPager");

const refinanciacionForm = document.getElementById("refinanciacionForm");
const refiPrestamo = document.getElementById("refiPrestamo");
const refiTipo = document.getElementById("refiTipo");
const refiCuotas = document.getElementById("refiCuotas");
const refiInteres = document.getElementById("refiInteres");
const refiFecha = document.getElementById("refiFecha");
const refiSaldo = document.getElementById("refiSaldo");
const refisTable = document.getElementById("refisTable");
const refisSearch = document.getElementById("refisSearch");
const refisPager = document.getElementById("refisPager");

const comprobantesTable = document.getElementById("comprobantesTable");
const comprobantesSearch = document.getElementById("comprobantesSearch");
const comprobantesPager = document.getElementById("comprobantesPager");
const usuarioForm = document.getElementById("usuarioForm");
const usuarioCancelBtn = document.getElementById("usuarioCancelBtn");
const usuariosSearch = document.getElementById("usuariosSearch");
const usuariosTable = document.getElementById("usuariosTable");
const usuariosPager = document.getElementById("usuariosPager");
const exportDataBtn = document.getElementById("exportDataBtn");

const kpiClientes = document.getElementById("kpiClientes");
const kpiPrestamosActivos = document.getElementById("kpiPrestamosActivos");
const kpiCuotasVencidas = document.getElementById("kpiCuotasVencidas");
const kpiCobradoMes = document.getElementById("kpiCobradoMes");
const dashboardSemaforo = document.getElementById("dashboardSemaforo");
const dashboardMora = document.getElementById("dashboardMora");
const dashboardSemaforoChart = document.getElementById("dashboardSemaforoChart");
const dashboardCobranzaChart = document.getElementById("dashboardCobranzaChart");
const dashboardEvolucionTable = document.getElementById("dashboardEvolucionTable");
const toastContainer = document.getElementById("toastContainer");
let semaforoFilterActive = null;
let selectedClientHistoryId = null;
const PAGE_SIZE = 10;
const listState = {
  clientes: { query: "", page: 1 },
  prestamos: { query: "", page: 1 },
  pagos: { query: "", page: 1 },
  refis: { query: "", page: 1 },
  comprobantes: { query: "", page: 1 },
  usuarios: { query: "", page: 1 }
};

init();

function init() {
  ensureDefaultAdminUser();
  applySessionVisibility();
  setDefaultDates();
  bindEvents();
  if (isAuthenticated()) renderAll();
}

function bindEvents() {
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;
      activatePanel(target);
    });
  });

  clienteForm.addEventListener("submit", onSaveClient);
  clienteCancelBtn.addEventListener("click", resetClienteForm);

  prestamoForm.addEventListener("submit", onCreateLoan);
  prestamoTipo.addEventListener("change", syncLoanTypeRules);
  prestamoMonto.addEventListener("input", updateInterestPreview);
  prestamoCuotas.addEventListener("input", updateInterestPreview);
  prestamoInteres.addEventListener("input", updateInterestPreview);

  pagoForm.addEventListener("submit", onRegisterPayment);
  pagoPrestamo.addEventListener("change", renderCuotasPendientesSelect);
  pagoCuota.addEventListener("change", () => {
    syncPagoMontoByInstallment();
    updatePagoAtrasoIndicator();
  });
  pagoFecha.addEventListener("change", renderCuotasPendientesSelect);

  refinanciacionForm.addEventListener("submit", onRefinanciar);
  refiPrestamo.addEventListener("change", updateRefiSaldoPreview);
  refiTipo.addEventListener("change", syncRefiTypeRules);
  refiCuotas.addEventListener("input", updateRefiSaldoPreview);
  refiInteres.addEventListener("input", updateRefiSaldoPreview);

  exportDataBtn.addEventListener("click", exportData);
  volverTableroBtn.addEventListener("click", () => activatePanel("dashboard"));
  logoutBtn.addEventListener("click", logout);
  loginForm.addEventListener("submit", onLogin);
  forgotPasswordBtn.addEventListener("click", onForgotPassword);
  usuarioForm.addEventListener("submit", onSaveUser);
  usuarioCancelBtn.addEventListener("click", resetUsuarioForm);

  bindSearchInput(clientesSearch, "clientes");
  bindSearchInput(prestamosSearch, "prestamos");
  bindSearchInput(pagosSearch, "pagos");
  bindSearchInput(refisSearch, "refis");
  bindSearchInput(comprobantesSearch, "comprobantes");
  bindSearchInput(usuariosSearch, "usuarios");
}

function renderAll() {
  if (!isAuthenticated()) return;
  refreshComputedStatuses();
  renderClientOptions();
  renderLoanOptions();
  renderRefiOptions();
  renderClientsTable();
  renderClientLoanHistory();
  renderClientsBySemaforoScreen();
  renderLoansTable();
  renderPagosTable();
  renderRefisTable();
  renderComprobantesTable();
  renderUsersTable();
  renderDashboard();
  renderCuotasPendientesSelect();
  updateInterestPreview();
  updateRefiSaldoPreview();
  persist();
  applySessionVisibility();
}

function bindSearchInput(inputEl, key) {
  if (!inputEl) return;
  inputEl.addEventListener("input", () => {
    listState[key].query = (inputEl.value || "").trim().toLowerCase();
    listState[key].page = 1;
    renderAll();
  });
}

function paginateRows(rows, key) {
  const total = rows.length;
  const pageCount = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const currentPage = clamp(listState[key].page, 1, pageCount);
  listState[key].page = currentPage;
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageRows = rows.slice(start, start + PAGE_SIZE);
  return { total, pageCount, currentPage, pageRows, start };
}

function renderPager(container, key, total, currentPage, pageCount, start) {
  if (!container) return;
  if (total === 0) {
    container.innerHTML = "<span class='pager-meta'>Sin resultados</span>";
    return;
  }
  const end = Math.min(total, start + PAGE_SIZE);
  container.innerHTML = `
    <span class="pager-meta">Mostrando ${start + 1}-${end} de ${total}</span>
    <span class="pager-actions">
      <button class="pager-arrow" data-page-action="prev" ${currentPage <= 1 ? "disabled" : ""} type="button" aria-label="Pagina anterior">←</button>
      <span class="pager-meta">Pag. ${currentPage}/${pageCount}</span>
      <button class="pager-arrow" data-page-action="next" ${currentPage >= pageCount ? "disabled" : ""} type="button" aria-label="Pagina siguiente">→</button>
    </span>
  `;
  const prev = container.querySelector("[data-page-action='prev']");
  const next = container.querySelector("[data-page-action='next']");
  if (prev) prev.addEventListener("click", () => {
    listState[key].page = Math.max(1, currentPage - 1);
    renderAll();
  });
  if (next) next.addEventListener("click", () => {
    listState[key].page = Math.min(pageCount, currentPage + 1);
    renderAll();
  });
}

function includesQuery(parts, query) {
  if (!query) return true;
  const haystack = parts.map((p) => String(p || "").toLowerCase()).join(" ");
  return haystack.includes(query);
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return {
      ids: { client: 1, loan: 1, receipt: 1, payment: 1, refi: 1 },
      clients: [],
      loans: [],
      payments: [],
      receipts: [],
      refinances: [],
      users: [],
      session: { currentUserId: null }
    };
  }
  try {
    return JSON.parse(raw);
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return {
      ids: { client: 1, loan: 1, receipt: 1, payment: 1, refi: 1 },
      clients: [],
      loans: [],
      payments: [],
      receipts: [],
      refinances: [],
      users: [],
      session: { currentUserId: null }
    };
  }
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function nextId(type) {
  const value = state.ids[type];
  state.ids[type] += 1;
  return value;
}

function setDefaultDates() {
  const today = dateToInput(new Date());
  prestamoFecha.value = today;
  pagoFecha.value = today;
  refiFecha.value = today;
  setDefaultClientScore();
}

function onSaveClient(event) {
  event.preventDefault();
  const idRaw = document.getElementById("clienteId").value;
  const payload = {
    nombre: document.getElementById("clienteNombre").value.trim(),
    dni: document.getElementById("clienteDni").value.trim(),
    telefono: document.getElementById("clienteTelefono").value.trim(),
    domicilio: document.getElementById("clienteDomicilio").value.trim(),
    score: Number(document.getElementById("clienteScore").value)
  };

  if (!payload.nombre || !payload.dni || !payload.telefono || !payload.domicilio) return;
  payload.score = clamp(payload.score, 0, 100);
  payload.semaforo = semaforoByScore(payload.score);

  if (idRaw) {
    const idx = state.clients.findIndex((c) => c.id === Number(idRaw));
    if (idx >= 0) state.clients[idx] = { ...state.clients[idx], ...payload };
    showToast("Cliente actualizado correctamente.", "success");
  } else {
    state.clients.push({ id: nextId("client"), ...payload, createdAt: new Date().toISOString() });
    showToast("Cliente creado correctamente.", "success");
  }

  resetClienteForm();
  renderAll();
}

function onLogin(event) {
  event.preventDefault();
  const username = (loginUsername.value || "").trim().toLowerCase();
  const password = (loginPassword.value || "").trim();
  const user = state.users.find((u) => u.username.toLowerCase() === username && u.password === password);
  if (!user) {
    showToast("Usuario o clave incorrecta.", "error");
    return;
  }
  state.session.currentUserId = user.id;
  loginForm.reset();
  showToast(`Bienvenido ${user.nombre}.`, "success");
  renderAll();
}

function onForgotPassword() {
  showToast("Contacte al administrador para restablecer la clave del usuario.", "warning");
}

function onCreateLoan(event) {
  event.preventDefault();
  const clientId = Number(prestamoCliente.value);
  const type = prestamoTipo.value;
  const principal = Number(prestamoMonto.value);
  const startDate = prestamoFecha.value;
  let installments = Number(prestamoCuotas.value);

  if (!clientId || !principal || !startDate) return;

  if (type === "weekly") installments = clamp(installments, 1, 10);
  if (type === "monthly") installments = 1;

  const suggestedRate = getInterestRate(principal, installments, type);
  const enteredRate = Number(prestamoInteres.value);
  const interestRate = Number.isFinite(enteredRate) ? clamp(enteredRate, 0, 200) : suggestedRate;
  const interestAmount = roundCurrency((principal * interestRate) / 100);
  const totalAmount = roundCurrency(principal + interestAmount);
  const installmentAmount = roundCurrency(totalAmount / installments);

  const dueDates = buildDueDates(startDate, type, installments);
  const installmentsItems = dueDates.map((date, index) => ({
    number: index + 1,
    dueDate: date,
    amount: index === dueDates.length - 1 ? roundCurrency(totalAmount - installmentAmount * index) : installmentAmount,
    paidAmount: 0,
    status: "pending",
    paymentDate: null,
    paymentReceiptId: null
  }));

  const loan = {
    id: nextId("loan"),
    clientId,
    type,
    principal,
    installments,
    interestRate,
    interestAmount,
    totalAmount,
    startDate,
    status: "active",
    installmentsItems,
    parentLoanId: null,
    createdAt: new Date().toISOString()
  };

  state.loans.push(loan);
  createReceipt({
    type: "loan",
    refId: loan.id,
    clientId: loan.clientId,
    amount: loan.totalAmount,
    detail: `Prestamo ${loan.type === "weekly" ? "semanal" : "mensual"} - ${loan.installments} cuota(s)`,
    date: startDate
  });
  showToast(`Prestamo #${loan.id} creado correctamente.`, "success");

  prestamoForm.reset();
  setDefaultDates();
  prestamoTipo.value = "weekly";
  prestamoCuotas.value = 4;
  syncLoanTypeRules();
  renderAll();
}

function onRegisterPayment(event) {
  event.preventDefault();
  const loanId = Number(pagoPrestamo.value);
  const installmentNumber = Number(pagoCuota.value);
  const amount = Number(pagoMonto.value);
  const paymentDate = pagoFecha.value;
  if (!loanId || !installmentNumber || !amount || !paymentDate) return;

  const loan = state.loans.find((l) => l.id === loanId);
  if (!loan) return;

  const installment = loan.installmentsItems.find((i) => i.number === installmentNumber);
  if (!installment) return;
  const firstPendingInstallment = getFirstPendingInstallment(loan);
  if (!firstPendingInstallment) return;

  if (installment.number !== firstPendingInstallment.number) {
    showToast(`Debe cobrarse primero la cuota ${firstPendingInstallment.number}.`, "warning");
    return;
  }

  if (paymentDate < installment.dueDate) {
    showToast(
      `No puede cobrarse antes del vencimiento (cuota ${installment.number}: ${formatDate(installment.dueDate)}).`,
      "warning"
    );
    return;
  }

  const maxPending = roundCurrency(installment.amount - installment.paidAmount);
  const paymentAmount = roundCurrency(Math.min(maxPending, amount));
  if (paymentAmount <= 0) return;

  const afterPaid = roundCurrency(installment.paidAmount + paymentAmount);
  const shortfall = roundCurrency(installment.amount - afterPaid);
  let carryOverData = null;

  installment.paidAmount = afterPaid;
  installment.paymentDate = paymentDate;

  if (shortfall > 0) {
    carryOverData = movePendingToNextInstallment(loan, installment, shortfall);
    penalizeClientScore(loan.clientId, 7);
  }

  installment.status = installment.paidAmount >= installment.amount ? "paid" : "partial";

  const paymentId = nextId("payment");
  const payment = {
    id: paymentId,
    loanId,
    clientId: loan.clientId,
    installmentNumber,
    amount: paymentAmount,
    date: paymentDate,
    shortfallMoved: carryOverData ? carryOverData.shortfall : 0,
    movedToInstallment: carryOverData ? carryOverData.toInstallment : null
  };
  state.payments.push(payment);

  const receiptDetail = carryOverData
    ? `Cobro parcial cuota ${installmentNumber} prestamo #${loan.id}. Saldo trasladado a cuota ${carryOverData.toInstallment}.`
    : `Cobro cuota ${installmentNumber} prestamo #${loan.id}`;

  const receipt = createReceipt({
    type: "payment",
    refId: paymentId,
    clientId: loan.clientId,
    amount: paymentAmount,
    detail: receiptDetail,
    date: paymentDate,
    extra: carryOverData
      ? {
          partialBalance: carryOverData.shortfall,
          movedToInstallment: carryOverData.toInstallment,
          originalInstallment: installmentNumber
        }
      : null
  });
  installment.paymentReceiptId = receipt.id;

  recomputeLoanStatus(loan);
  if (carryOverData) {
    showToast(
      `Pago parcial registrado. Saldo ${currency(carryOverData.shortfall)} trasladado a cuota ${carryOverData.toInstallment}.`,
      "warning"
    );
  } else {
    showToast("Pago registrado correctamente.", "success");
  }
  pagoForm.reset();
  setDefaultDates();
  renderAll();
}

function onRefinanciar(event) {
  event.preventDefault();
  const oldLoanId = Number(refiPrestamo.value);
  let type = refiTipo.value;
  let installments = Number(refiCuotas.value);
  const startDate = refiFecha.value;
  const oldLoan = state.loans.find((l) => l.id === oldLoanId);
  if (!oldLoan || !startDate) return;

  const hasOverdue = oldLoan.installmentsItems.some((item) => isOverdue(item));
  if (!hasOverdue) {
    showToast("Solo se puede refinanciar un prestamo en mora.", "warning");
    return;
  }

  if (type === "monthly") installments = 1;
  if (type === "weekly") installments = clamp(installments, 1, 10);

  const pending = getPendingBalance(oldLoan);
  if (pending <= 0) return;

  const suggestedRate = getInterestRate(pending, installments, type);
  const enteredRate = Number(refiInteres.value);
  const interestRate = Number.isFinite(enteredRate) ? clamp(enteredRate, 0, 200) : suggestedRate;
  const interestAmount = roundCurrency((pending * interestRate) / 100);
  const totalAmount = roundCurrency(pending + interestAmount);
  const installmentAmount = roundCurrency(totalAmount / installments);

  const dueDates = buildDueDates(startDate, type, installments);
  const installmentsItems = dueDates.map((date, index) => ({
    number: index + 1,
    dueDate: date,
    amount: index === dueDates.length - 1 ? roundCurrency(totalAmount - installmentAmount * index) : installmentAmount,
    paidAmount: 0,
    status: "pending",
    paymentDate: null,
    paymentReceiptId: null
  }));

  const newLoan = {
    id: nextId("loan"),
    clientId: oldLoan.clientId,
    type,
    principal: pending,
    installments,
    interestRate,
    interestAmount,
    totalAmount,
    startDate,
    status: "active",
    installmentsItems,
    parentLoanId: oldLoan.id,
    createdAt: new Date().toISOString()
  };
  state.loans.push(newLoan);

  oldLoan.status = "refinanced";

  state.refinances.push({
    id: nextId("refi"),
    oldLoanId: oldLoan.id,
    newLoanId: newLoan.id,
    clientId: oldLoan.clientId,
    amount: pending,
    date: startDate
  });

  createReceipt({
    type: "loan",
    refId: newLoan.id,
    clientId: newLoan.clientId,
    amount: newLoan.totalAmount,
    detail: `Refinanciacion prestamo #${oldLoan.id}`,
    date: startDate
  });
  showToast(`Refinanciacion creada. Nuevo prestamo #${newLoan.id}.`, "success");

  refinanciacionForm.reset();
  setDefaultDates();
  refiTipo.value = "weekly";
  refiCuotas.value = 4;
  syncRefiTypeRules();
  renderAll();
}

function onSaveUser(event) {
  event.preventDefault();
  if (!isAdmin()) {
    showToast("Solo un admin puede gestionar usuarios.", "warning");
    return;
  }
  const idRaw = document.getElementById("usuarioId").value;
  const payload = {
    nombre: document.getElementById("usuarioNombre").value.trim(),
    username: document.getElementById("usuarioUsername").value.trim(),
    rol: document.getElementById("usuarioRol").value,
    password: document.getElementById("usuarioPassword").value
  };
  if (!payload.nombre || !payload.username || !payload.rol || !payload.password) return;
  const duplicated = state.users.find(
    (u) => u.username.toLowerCase() === payload.username.toLowerCase() && String(u.id) !== String(idRaw || "")
  );
  if (duplicated) {
    showToast("Ya existe un usuario con ese nombre de usuario.", "warning");
    return;
  }
  if (idRaw) {
    const idx = state.users.findIndex((u) => u.id === Number(idRaw));
    if (idx >= 0) state.users[idx] = { ...state.users[idx], ...payload };
    showToast("Usuario actualizado.", "success");
  } else {
    state.users.push({ id: nextId("user"), ...payload, createdAt: new Date().toISOString() });
    showToast("Usuario creado.", "success");
  }
  resetUsuarioForm();
  renderAll();
}

function resetClienteForm() {
  clienteForm.reset();
  document.getElementById("clienteId").value = "";
  setDefaultClientScore();
}

function setDefaultClientScore() {
  const scoreInput = document.getElementById("clienteScore");
  if (scoreInput) scoreInput.value = "100";
}

function resetUsuarioForm() {
  usuarioForm.reset();
  document.getElementById("usuarioId").value = "";
}

function renderClientsTable() {
  clientesTable.innerHTML = "";
  const query = listState.clientes.query;
  const filtered = state.clients.filter((client) =>
    includesQuery([client.nombre, client.dni, client.telefono, client.semaforo], query)
  );
  const { total, pageCount, currentPage, pageRows, start } = paginateRows(filtered, "clientes");
  if (!pageRows.length) {
    clientesTable.innerHTML = "<tr><td colspan='5'>No hay clientes para mostrar.</td></tr>";
    renderPager(clientesPager, "clientes", total, currentPage, pageCount, start);
    return;
  }
  pageRows.forEach((client) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${escapeHtml(client.nombre)}</td>
      <td>${escapeHtml(client.dni)}</td>
      <td>${escapeHtml(client.telefono)}</td>
      <td><span class="status-pill status-${client.semaforo}">${labelSemaforo(client.semaforo)}</span></td>
      <td>
        <button class="btn btn-secondary" data-action="history-client" data-id="${client.id}" type="button">Historial</button>
        <button class="btn btn-secondary" data-action="edit-client" data-id="${client.id}" type="button">Editar</button>
        <button class="btn btn-danger" data-action="delete-client" data-id="${client.id}" type="button">Eliminar</button>
      </td>
    `;
    clientesTable.appendChild(tr);
  });
  renderPager(clientesPager, "clientes", total, currentPage, pageCount, start);

  clientesTable.querySelectorAll("[data-action='history-client']").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedClientHistoryId = Number(btn.dataset.id);
      renderClientLoanHistory();
    });
  });

  clientesTable.querySelectorAll("[data-action='edit-client']").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      const client = state.clients.find((c) => c.id === id);
      if (!client) return;
      document.getElementById("clienteId").value = client.id;
      document.getElementById("clienteNombre").value = client.nombre;
      document.getElementById("clienteDni").value = client.dni;
      document.getElementById("clienteTelefono").value = client.telefono;
      document.getElementById("clienteDomicilio").value = client.domicilio;
      document.getElementById("clienteScore").value = client.score;
    });
  });

  clientesTable.querySelectorAll("[data-action='delete-client']").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      const hasLoans = state.loans.some((l) => l.clientId === id);
      if (hasLoans) {
        showToast("No se puede eliminar: el cliente tiene prestamos asociados.", "warning");
        return;
      }
      state.clients = state.clients.filter((c) => c.id !== id);
      showToast("Cliente eliminado correctamente.", "success");
      renderAll();
    });
  });
}

function renderClientLoanHistory() {
  historialClienteTable.innerHTML = "";
  if (!selectedClientHistoryId) {
    historialClienteTitulo.textContent = "Historial de préstamos por cliente";
    historialClienteTable.innerHTML = "<tr><td colspan='8'>Selecciona un cliente para ver su historial.</td></tr>";
    return;
  }
  const client = state.clients.find((c) => c.id === selectedClientHistoryId);
  if (!client) {
    selectedClientHistoryId = null;
    historialClienteTitulo.textContent = "Historial de préstamos por cliente";
    historialClienteTable.innerHTML = "<tr><td colspan='8'>Selecciona un cliente para ver su historial.</td></tr>";
    return;
  }
  const loans = state.loans
    .filter((loan) => loan.clientId === client.id)
    .slice()
    .sort((a, b) => b.id - a.id);
  historialClienteTitulo.textContent = `Historial de préstamos - ${client.nombre}`;
  if (!loans.length) {
    historialClienteTable.innerHTML = "<tr><td colspan='8'>Este cliente no tiene préstamos registrados.</td></tr>";
    return;
  }
  loans.forEach((loan) => {
    const paid = roundCurrency(
      loan.installmentsItems.reduce((acc, item) => acc + Number(item.paidAmount || 0), 0)
    );
    const debt = getPendingBalance(loan);
    const statusClass = loan.status === "defaulted" ? "mora" : loan.status === "closed" ? "cerrado" : "activo";
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>#${loan.id}</td>
      <td>${formatDate(loan.startDate)}</td>
      <td>${loan.type === "weekly" ? "Semanal" : "Mensual"}</td>
      <td>${currency(loan.principal)}</td>
      <td>${currency(loan.totalAmount)}</td>
      <td>${currency(paid)}</td>
      <td>${currency(debt)}</td>
      <td><span class="status-pill status-${statusClass}">${labelLoanStatus(loan.status)}</span></td>
    `;
    historialClienteTable.appendChild(tr);
  });
}

function renderLoansTable() {
  prestamosTable.innerHTML = "";
  const query = listState.prestamos.query;
  const filtered = state.loans
    .slice()
    .sort((a, b) => b.id - a.id)
    .filter((loan) => {
      const client = getClientById(loan.clientId);
      return includesQuery(
        [loan.id, client ? client.nombre : "", loan.type === "weekly" ? "semanal" : "mensual", labelLoanStatus(loan.status)],
        query
      );
    });
  const { total, pageCount, currentPage, pageRows, start } = paginateRows(filtered, "prestamos");
  if (!pageRows.length) {
    prestamosTable.innerHTML = "<tr><td colspan='6'>No hay préstamos para mostrar.</td></tr>";
    renderPager(prestamosPager, "prestamos", total, currentPage, pageCount, start);
    return;
  }
  pageRows
    .forEach((loan) => {
      const client = getClientById(loan.clientId);
      const statusClass = loan.status === "defaulted" ? "mora" : loan.status === "closed" ? "cerrado" : "activo";
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>#${loan.id}</td>
        <td>${client ? escapeHtml(client.nombre) : "-"}</td>
        <td>${loan.type === "weekly" ? "Semanal" : "Mensual"}</td>
        <td>${currency(loan.totalAmount)}</td>
        <td><span class="status-pill status-${statusClass}">${labelLoanStatus(loan.status)}</span></td>
        <td>
          <button class="btn btn-secondary" data-action="view-schedule" data-id="${loan.id}" type="button">Cuotas</button>
          <button class="btn btn-secondary" data-action="print-loan" data-id="${loan.id}" type="button">Comprobante</button>
        </td>
      `;
      prestamosTable.appendChild(tr);
    });
  renderPager(prestamosPager, "prestamos", total, currentPage, pageCount, start);

  prestamosTable.querySelectorAll("[data-action='view-schedule']").forEach((btn) => {
    btn.addEventListener("click", () => showLoanSchedule(Number(btn.dataset.id)));
  });
  prestamosTable.querySelectorAll("[data-action='print-loan']").forEach((btn) => {
    btn.addEventListener("click", () => printLatestLoanReceipt(Number(btn.dataset.id)));
  });
}

function renderPagosTable() {
  pagosTable.innerHTML = "";
  const query = listState.pagos.query;
  const filtered = state.payments
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .filter((pay) => {
      const client = getClientById(pay.clientId);
      return includesQuery(
        [pay.date, pay.loanId, client ? client.nombre : "", pay.installmentNumber, pay.amount],
        query
      );
    });
  const { total, pageCount, currentPage, pageRows, start } = paginateRows(filtered, "pagos");
  if (!pageRows.length) {
    pagosTable.innerHTML = "<tr><td colspan='6'>No hay pagos para mostrar.</td></tr>";
    renderPager(pagosPager, "pagos", total, currentPage, pageCount, start);
    return;
  }
  pageRows
    .forEach((pay) => {
      const loan = state.loans.find((l) => l.id === pay.loanId);
      const client = getClientById(pay.clientId);
      const receipt = state.receipts.find((r) => r.type === "payment" && r.refId === pay.id);
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${formatDate(pay.date)}</td>
        <td>#${pay.loanId}</td>
        <td>${client ? escapeHtml(client.nombre) : "-"}</td>
        <td>${pay.installmentNumber}</td>
        <td>${currency(pay.amount)}</td>
        <td>${receipt ? `<button class="btn btn-secondary" data-action="print-receipt" data-id="${receipt.id}" type="button">Imprimir</button>` : "-"}</td>
      `;
      pagosTable.appendChild(tr);
    });
  renderPager(pagosPager, "pagos", total, currentPage, pageCount, start);

  pagosTable.querySelectorAll("[data-action='print-receipt']").forEach((btn) => {
    btn.addEventListener("click", () => printReceiptById(Number(btn.dataset.id)));
  });
}

function renderRefisTable() {
  refisTable.innerHTML = "";
  const query = listState.refis.query;
  const filtered = state.refinances
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .filter((refi) =>
      includesQuery([refi.date, refi.oldLoanId, refi.newLoanId, refi.amount], query)
    );
  const { total, pageCount, currentPage, pageRows, start } = paginateRows(filtered, "refis");
  if (!pageRows.length) {
    refisTable.innerHTML = "<tr><td colspan='4'>No hay refinanciaciones para mostrar.</td></tr>";
    renderPager(refisPager, "refis", total, currentPage, pageCount, start);
    return;
  }
  pageRows
    .forEach((refi) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${formatDate(refi.date)}</td>
        <td>#${refi.oldLoanId}</td>
        <td>#${refi.newLoanId}</td>
        <td>${currency(refi.amount)}</td>
      `;
      refisTable.appendChild(tr);
    });
  renderPager(refisPager, "refis", total, currentPage, pageCount, start);
}

function renderComprobantesTable() {
  comprobantesTable.innerHTML = "";
  const query = listState.comprobantes.query;
  const filtered = state.receipts
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .filter((receipt) => {
      const client = getClientById(receipt.clientId);
      return includesQuery(
        [receipt.date, receipt.type === "loan" ? "prestamo" : "cobro", receipt.detail, client ? client.nombre : "", receipt.amount],
        query
      );
    });
  const { total, pageCount, currentPage, pageRows, start } = paginateRows(filtered, "comprobantes");
  if (!pageRows.length) {
    comprobantesTable.innerHTML = "<tr><td colspan='6'>No hay comprobantes para mostrar.</td></tr>";
    renderPager(comprobantesPager, "comprobantes", total, currentPage, pageCount, start);
    return;
  }
  pageRows
    .forEach((receipt) => {
      const client = getClientById(receipt.clientId);
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${formatDate(receipt.date)}</td>
        <td>${receipt.type === "loan" ? "Prestamo" : "Cobro"}</td>
        <td>${escapeHtml(receipt.detail)}</td>
        <td>${client ? escapeHtml(client.nombre) : "-"}</td>
        <td>${currency(receipt.amount)}</td>
        <td><button class="btn btn-secondary" data-action="print-receipt" data-id="${receipt.id}" type="button">Imprimir</button></td>
      `;
      comprobantesTable.appendChild(tr);
    });
  renderPager(comprobantesPager, "comprobantes", total, currentPage, pageCount, start);

  comprobantesTable.querySelectorAll("[data-action='print-receipt']").forEach((btn) => {
    btn.addEventListener("click", () => printReceiptById(Number(btn.dataset.id)));
  });
}

function renderUsersTable() {
  usuariosTable.innerHTML = "";
  const query = listState.usuarios.query;
  const filtered = state.users
    .slice()
    .sort((a, b) => a.nombre.localeCompare(b.nombre))
    .filter((u) => includesQuery([u.nombre, u.username, u.rol], query));
  const { total, pageCount, currentPage, pageRows, start } = paginateRows(filtered, "usuarios");
  if (!pageRows.length) {
    usuariosTable.innerHTML = "<tr><td colspan='4'>No hay usuarios para mostrar.</td></tr>";
    renderPager(usuariosPager, "usuarios", total, currentPage, pageCount, start);
    return;
  }
  pageRows.forEach((user) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${escapeHtml(user.nombre)}</td>
      <td>${escapeHtml(user.username)}</td>
      <td>${escapeHtml(user.rol)}</td>
      <td>
        <button class="btn btn-secondary" data-action="edit-user" data-id="${user.id}" type="button">Editar</button>
        <button class="btn btn-danger" data-action="delete-user" data-id="${user.id}" type="button">Eliminar</button>
      </td>
    `;
    usuariosTable.appendChild(tr);
  });
  renderPager(usuariosPager, "usuarios", total, currentPage, pageCount, start);

  usuariosTable.querySelectorAll("[data-action='edit-user']").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!isAdmin()) return;
      const user = state.users.find((u) => u.id === Number(btn.dataset.id));
      if (!user) return;
      document.getElementById("usuarioId").value = user.id;
      document.getElementById("usuarioNombre").value = user.nombre;
      document.getElementById("usuarioUsername").value = user.username;
      document.getElementById("usuarioRol").value = user.rol;
      document.getElementById("usuarioPassword").value = user.password;
    });
  });

  usuariosTable.querySelectorAll("[data-action='delete-user']").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!isAdmin()) return;
      const id = Number(btn.dataset.id);
      if (state.session.currentUserId === id) {
        showToast("No puedes eliminar tu propio usuario en sesion.", "warning");
        return;
      }
      state.users = state.users.filter((u) => u.id !== id);
      showToast("Usuario eliminado.", "success");
      renderAll();
    });
  });
}

function renderDashboard() {
  const activeLoans = state.loans.filter((l) => l.status === "active" || l.status === "defaulted");
  const overdueCount = activeLoans.reduce(
    (acc, loan) => acc + loan.installmentsItems.filter((i) => i.status !== "paid" && isOverdue(i)).length,
    0
  );
  const currentMonth = new Date().toISOString().slice(0, 7);
  const collected = state.payments
    .filter((p) => p.date.slice(0, 7) === currentMonth)
    .reduce((acc, p) => acc + p.amount, 0);

  const verdes = state.clients.filter((c) => c.semaforo === "verde").length;
  const amarillos = state.clients.filter((c) => c.semaforo === "amarillo").length;
  const rojos = state.clients.filter((c) => c.semaforo === "rojo").length;
  const totalClientes = Math.max(1, verdes + amarillos + rojos);

  kpiClientes.textContent = String(state.clients.length);
  kpiPrestamosActivos.textContent = String(activeLoans.length);
  kpiCuotasVencidas.textContent = String(overdueCount);
  kpiCobradoMes.textContent = currency(collected);

  dashboardSemaforo.innerHTML = `
    <li>Total clientes evaluados: <strong>${verdes + amarillos + rojos}</strong></li>
  `;
  dashboardSemaforoChart.innerHTML = buildSemaforoPie(verdes, amarillos, rojos, totalClientes);
  dashboardSemaforoChart.querySelectorAll("[data-semaforo]").forEach((btn) => {
    btn.addEventListener("click", () => openClientsSemaforoScreen(btn.dataset.semaforo));
  });

  dashboardMora.innerHTML = "";
  const moraLoans = state.loans.filter((l) => l.status === "defaulted");
  if (!moraLoans.length) {
    dashboardMora.innerHTML = "<li>Sin préstamos en mora.</li>";
  } else {
    moraLoans.slice(0, 6).forEach((loan) => {
      const client = getClientById(loan.clientId);
      const li = document.createElement("li");
      li.textContent = `Prestamo #${loan.id} - ${client ? client.nombre : "-"} - Saldo ${currency(getPendingBalance(loan))}`;
      dashboardMora.appendChild(li);
    });
  }
  renderMoraChart(moraLoans);
  renderMonthlyEvolution();
}

function renderClientOptions() {
  prestamoCliente.innerHTML = "<option value=''>Seleccionar cliente</option>";
  state.clients.forEach((c) => {
    const option = document.createElement("option");
    option.value = String(c.id);
    option.textContent = `${c.nombre} (${c.dni})`;
    prestamoCliente.appendChild(option);
  });
}

function renderLoanOptions() {
  pagoPrestamo.innerHTML = "<option value=''>Seleccionar prestamo</option>";
  state.loans
    .filter((l) => l.status === "active" || l.status === "defaulted")
    .forEach((loan) => {
      const client = getClientById(loan.clientId);
      const option = document.createElement("option");
      option.value = String(loan.id);
      option.textContent = `#${loan.id} - ${client ? client.nombre : "-"} (${labelLoanStatus(loan.status)})`;
      pagoPrestamo.appendChild(option);
    });
}

function renderRefiOptions() {
  refiPrestamo.innerHTML = "<option value=''>Seleccionar préstamo en mora</option>";
  state.loans
    .filter((l) => l.status === "defaulted")
    .forEach((loan) => {
      const client = getClientById(loan.clientId);
      const option = document.createElement("option");
      option.value = String(loan.id);
      option.textContent = `#${loan.id} - ${client ? client.nombre : "-"} - Saldo ${currency(getPendingBalance(loan))}`;
      refiPrestamo.appendChild(option);
    });
}

function renderCuotasPendientesSelect() {
  pagoCuota.innerHTML = "<option value=''>Seleccionar cuota</option>";
  const loanId = Number(pagoPrestamo.value);
  if (!loanId) {
    updatePagoAtrasoIndicator();
    return;
  }
  const loan = state.loans.find((l) => l.id === loanId);
  if (!loan) {
    updatePagoAtrasoIndicator();
    return;
  }
  const referenceDate = pagoFecha.value || dateToInput(new Date());
  loan.installmentsItems
    .slice()
    .sort((a, b) => a.number - b.number)
    .filter((i) => i.status !== "paid")
    .forEach((item) => {
      const pending = roundCurrency(item.amount - item.paidAmount);
      const option = document.createElement("option");
      option.value = String(item.number);
      const delayDays = getDelayDays(item, referenceDate);
      const marker = delayDays > 0 ? `${delayDays} día(s) de atraso` : "En termino";
      option.textContent = `Cuota ${item.number} - Vto ${formatDate(item.dueDate)} - Pendiente ${currency(pending)} - ${marker}`;
      pagoCuota.appendChild(option);
    });
  updatePagoAtrasoIndicator();
}

function syncPagoMontoByInstallment() {
  const loanId = Number(pagoPrestamo.value);
  const installmentNumber = Number(pagoCuota.value);
  if (!loanId || !installmentNumber) return;
  const loan = state.loans.find((l) => l.id === loanId);
  if (!loan) return;
  const installment = loan.installmentsItems.find((i) => i.number === installmentNumber);
  if (!installment) return;
  const pending = roundCurrency(installment.amount - installment.paidAmount);
  pagoMonto.value = String(pending);
}

function updatePagoAtrasoIndicator() {
  const loanId = Number(pagoPrestamo.value);
  const installmentNumber = Number(pagoCuota.value);
  if (!loanId || !installmentNumber) {
    pagoAtrasoInfo.textContent = "Selecciona cuota para ver atraso.";
    pagoAtrasoInfo.className = "atraso-indicator";
    return;
  }
  const loan = state.loans.find((l) => l.id === loanId);
  if (!loan) return;
  const installment = loan.installmentsItems.find((i) => i.number === installmentNumber);
  if (!installment) return;
  const referenceDate = pagoFecha.value || dateToInput(new Date());
  const delayDays = getDelayDays(installment, referenceDate);
  if (delayDays > 0) {
    pagoAtrasoInfo.textContent = `Cuota ${installment.number} vencida hace ${delayDays} dia(s).`;
    pagoAtrasoInfo.className = "atraso-indicator atraso-late";
  } else {
    pagoAtrasoInfo.textContent = `Cuota ${installment.number} en termino. Vence ${formatDate(installment.dueDate)}.`;
    pagoAtrasoInfo.className = "atraso-indicator atraso-ok";
  }
}

function syncLoanTypeRules() {
  if (prestamoTipo.value === "monthly") {
    prestamoCuotas.value = 1;
    prestamoCuotas.max = 1;
    prestamoCuotas.min = 1;
    prestamoCuotas.disabled = true;
  } else {
    prestamoCuotas.disabled = false;
    prestamoCuotas.max = 10;
    prestamoCuotas.min = 1;
    if (Number(prestamoCuotas.value) > 10 || !Number(prestamoCuotas.value)) prestamoCuotas.value = 4;
  }
  const amount = Number(prestamoMonto.value) || 0;
  const installments = prestamoTipo.value === "monthly" ? 1 : clamp(Number(prestamoCuotas.value) || 1, 1, 10);
  const suggestedRate = getInterestRate(amount, installments, prestamoTipo.value);
  if (!prestamoInteres.value) prestamoInteres.value = suggestedRate.toFixed(2);
  updateInterestPreview();
}

function syncRefiTypeRules() {
  if (refiTipo.value === "monthly") {
    refiCuotas.value = 1;
    refiCuotas.max = 1;
    refiCuotas.min = 1;
    refiCuotas.disabled = true;
  } else {
    refiCuotas.disabled = false;
    refiCuotas.max = 10;
    refiCuotas.min = 1;
    if (Number(refiCuotas.value) > 10 || !Number(refiCuotas.value)) refiCuotas.value = 4;
  }
  const loanId = Number(refiPrestamo.value);
  const loan = state.loans.find((l) => l.id === loanId);
  const baseAmount = loan ? getPendingBalance(loan) : 0;
  const installments = refiTipo.value === "monthly" ? 1 : clamp(Number(refiCuotas.value) || 1, 1, 10);
  const suggestedRate = getInterestRate(baseAmount, installments, refiTipo.value);
  if (!refiInteres.value) refiInteres.value = suggestedRate.toFixed(2);
  updateRefiSaldoPreview();
}

function updateInterestPreview() {
  const amount = Number(prestamoMonto.value) || 0;
  const type = prestamoTipo.value;
  let installments = Number(prestamoCuotas.value) || 1;
  if (type === "monthly") installments = 1;
  if (!amount) {
    interesPreview.textContent = "Interes estimado: -";
    return;
  }
  const suggestedRate = getInterestRate(amount, installments, type);
  const enteredRate = Number(prestamoInteres.value);
  const appliedRate = Number.isFinite(enteredRate) ? clamp(enteredRate, 0, 200) : suggestedRate;
  const interestAmount = roundCurrency((amount * appliedRate) / 100);
  const total = roundCurrency(amount + interestAmount);
  interesPreview.textContent = `Interes sugerido ${suggestedRate.toFixed(2)}%. Interes aplicado ${appliedRate.toFixed(2)}% (${currency(interestAmount)}). Total ${currency(total)}.`;
}

function updateRefiSaldoPreview() {
  const loanId = Number(refiPrestamo.value);
  if (!loanId) {
    refiSaldo.textContent = "Saldo pendiente: -";
    return;
  }
  const loan = state.loans.find((l) => l.id === loanId);
  if (!loan) return;
  const pending = getPendingBalance(loan);
  const type = refiTipo.value;
  const installments = type === "monthly" ? 1 : clamp(Number(refiCuotas.value) || 1, 1, 10);
  const suggestedRate = getInterestRate(pending, installments, type);
  const enteredRate = Number(refiInteres.value);
  const appliedRate = Number.isFinite(enteredRate) ? clamp(enteredRate, 0, 200) : suggestedRate;
  const total = roundCurrency(pending + (pending * appliedRate) / 100);
  refiSaldo.textContent = `Saldo pendiente: ${currency(pending)}. Interes sugerido ${suggestedRate.toFixed(2)}%. Interes aplicado ${appliedRate.toFixed(2)}%. Total refinanciado estimado: ${currency(total)}.`;
}

function showLoanSchedule(loanId) {
  const loan = state.loans.find((l) => l.id === loanId);
  if (!loan) return;
  const rows = loan.installmentsItems
    .map((item) => {
      const pending = roundCurrency(item.amount - item.paidAmount);
      return `
        <tr>
          <td>${item.number}</td>
          <td>${formatDate(item.dueDate)}</td>
          <td>${currency(item.amount)}</td>
          <td>${currency(item.paidAmount)}</td>
          <td>${currency(pending)}</td>
          <td>${labelInstallment(item)}</td>
        </tr>
      `;
    })
    .join("");

  const html = `
    <html>
    <head>
      <title>Cuotas Préstamo #${loan.id}</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 18px; color: #222; }
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid #ccc; padding: 6px; text-align: left; }
        h2 { margin-top: 0; }
      </style>
    </head>
    <body>
      <h2>Detalle de cuotas - Préstamo #${loan.id}</h2>
      <p>Monto total: ${currency(loan.totalAmount)} | Estado: ${labelLoanStatus(loan.status)}</p>
      <table>
        <thead><tr><th>Cuota</th><th>Vencimiento</th><th>Monto</th><th>Pagado</th><th>Pendiente</th><th>Estado</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </body>
    </html>
  `;
  openPrintable(html);
}

function createReceipt({ type, refId, clientId, amount, detail, date, extra }) {
  const receipt = {
    id: nextId("receipt"),
    type,
    refId,
    clientId,
    amount,
    detail,
    date: date || dateToInput(new Date()),
    extra: extra || null
  };
  state.receipts.push(receipt);
  return receipt;
}

function printLatestLoanReceipt(loanId) {
  const receipt = state.receipts
    .filter((r) => r.type === "loan" && r.refId === loanId)
    .sort((a, b) => (a.id < b.id ? 1 : -1))[0];
  if (receipt) printReceiptById(receipt.id);
}

function printReceiptById(receiptId) {
  const receipt = state.receipts.find((r) => r.id === receiptId);
  if (!receipt) return;
  const client = getClientById(receipt.clientId);
  const html = `
    <html>
    <head>
      <title>Comprobante #${receipt.id}</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; color: #111; }
        .box { border: 2px solid #0d9488; border-radius: 8px; padding: 14px; }
        h2 { margin-top: 0; }
        .line { margin: 6px 0; }
      </style>
    </head>
    <body>
      <div class="box">
        <h2>Comprobante #${receipt.id}</h2>
        <div class="line"><strong>Fecha:</strong> ${formatDate(receipt.date)}</div>
        <div class="line"><strong>Tipo:</strong> ${receipt.type === "loan" ? "Nuevo préstamo / refinanciacion" : "Cobro de cuota"}</div>
        <div class="line"><strong>Cliente:</strong> ${client ? escapeHtml(client.nombre) : "-"}</div>
        <div class="line"><strong>Detalle:</strong> ${escapeHtml(receipt.detail)}</div>
        <div class="line"><strong>Monto:</strong> ${currency(receipt.amount)}</div>
        ${receipt.extra && receipt.extra.partialBalance
          ? `<div class="line"><strong>Saldo trasladado:</strong> ${currency(receipt.extra.partialBalance)} a cuota ${receipt.extra.movedToInstallment}</div>`
          : ""}
      </div>
      <script>window.onload = () => window.print();</script>
    </body>
    </html>
  `;
  openPrintable(html);
}

function openPrintable(html) {
  const popup = window.open("", "_blank", "width=900,height=700");
  if (!popup) return;
  popup.document.open();
  popup.document.write(html);
  popup.document.close();
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `gestion-prestamos-${dateToInput(new Date())}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("Datos exportados correctamente.", "success");
}

function ensureDefaultAdminUser() {
  if (!state.ids.user) state.ids.user = 1;
  if (!Array.isArray(state.users)) state.users = [];
  if (!state.session) state.session = { currentUserId: null };
  if (!state.users.length) {
    state.users.push({
      id: nextId("user"),
      nombre: "Administrador",
      username: "admin",
      password: "admin123",
      rol: "admin",
      createdAt: new Date().toISOString()
    });
    persist();
  }
}

function getCurrentUser() {
  return state.users.find((u) => u.id === state.session.currentUserId) || null;
}

function isAuthenticated() {
  return Boolean(getCurrentUser());
}

function isAdmin() {
  const user = getCurrentUser();
  return Boolean(user && user.rol === "admin");
}

function logout() {
  state.session.currentUserId = null;
  persist();
  applySessionVisibility();
  showToast("Sesion cerrada.", "success");
}

function applySessionVisibility() {
  const user = getCurrentUser();
  const logged = Boolean(user);
  appShell.style.display = logged ? "" : "none";
  authScreen.style.display = logged ? "none" : "grid";
  sessionUserInfo.textContent = logged ? `${user.nombre} (${user.rol})` : "";
  const userTab = Array.from(tabs).find((t) => t.dataset.tab === "usuarios");
  if (userTab) userTab.style.display = isAdmin() ? "" : "none";
  if (!isAdmin() && document.getElementById("usuarios").classList.contains("active")) {
    activatePanel("dashboard");
  }
  if (usuarioForm) {
    const disabled = !isAdmin();
    usuarioForm.querySelectorAll("input,select,button").forEach((el) => {
      if (el.id === "usuarioCancelBtn") return;
      el.disabled = disabled;
    });
  }
}

function showToast(message, type = "success") {
  if (!toastContainer) return;
  const toast = document.createElement("div");
  const safeType = ["success", "warning", "error"].includes(type) ? type : "success";
  toast.className = `toast toast-${safeType}`;
  const icon = safeType === "success" ? "OK" : safeType === "warning" ? "!" : "X";
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span class="toast-message">${escapeHtml(message)}</span>
    <button class="toast-close" type="button" aria-label="Cerrar aviso">×</button>
  `;
  const closeBtn = toast.querySelector(".toast-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      if (toast.parentElement) toast.parentElement.removeChild(toast);
    });
  }
  toastContainer.appendChild(toast);
  setTimeout(() => {
    if (toast.parentElement) toast.parentElement.removeChild(toast);
  }, 3200);
}

function refreshComputedStatuses() {
  state.clients = state.clients.map((c) => ({ ...c, semaforo: semaforoByScore(Number(c.score || 0)) }));
  state.loans.forEach((loan) => recomputeLoanStatus(loan));
}

function recomputeLoanStatus(loan) {
  if (loan.status === "refinanced") return;
  const allPaid = loan.installmentsItems.every((item) => item.paidAmount >= item.amount);
  if (allPaid) {
    loan.status = "closed";
    loan.installmentsItems.forEach((item) => {
      item.status = "paid";
    });
    return;
  }

  let hasOverdue = false;
  loan.installmentsItems.forEach((item) => {
    if (item.paidAmount >= item.amount) {
      item.status = "paid";
    } else if (item.paidAmount > 0) {
      item.status = "partial";
      if (isOverdue(item)) hasOverdue = true;
    } else {
      item.status = isOverdue(item) ? "overdue" : "pending";
      if (item.status === "overdue") hasOverdue = true;
    }
  });

  loan.status = hasOverdue ? "defaulted" : "active";
}

function getClientById(id) {
  return state.clients.find((c) => c.id === id);
}

function getPendingBalance(loan) {
  return roundCurrency(
    loan.installmentsItems.reduce((acc, i) => acc + Math.max(0, i.amount - i.paidAmount), 0)
  );
}

function getFirstPendingInstallment(loan) {
  return loan.installmentsItems
    .slice()
    .filter((item) => item.status !== "paid")
    .sort((a, b) => a.number - b.number)[0];
}

function getInterestRate(amount, installments, type) {
  let base = 0;
  if (amount <= 100000) base = 12;
  else if (amount <= 300000) base = 18;
  else if (amount <= 600000) base = 24;
  else base = 30;

  if (type === "weekly") {
    base += installments * 1.2;
  } else {
    base += 5;
  }
  return Math.min(base, 65);
}

function movePendingToNextInstallment(loan, currentInstallment, shortfall) {
  const roundedShortfall = roundCurrency(shortfall);
  currentInstallment.amount = roundCurrency(currentInstallment.paidAmount);
  currentInstallment.status = "paid";

  let target = loan.installmentsItems.find(
    (item) => item.number > currentInstallment.number && item.status !== "paid"
  );

  if (!target) {
    const maxNumber = loan.installmentsItems.reduce((acc, item) => Math.max(acc, item.number), 0);
    const orderedInstallments = loan.installmentsItems
      .slice()
      .sort((a, b) => (a.number > b.number ? 1 : -1));
    const lastDueDate = orderedInstallments[orderedInstallments.length - 1].dueDate;
    const dueDate = buildNextDueDate(lastDueDate, loan.type);
    target = {
      number: maxNumber + 1,
      dueDate,
      amount: 0,
      paidAmount: 0,
      status: "pending",
      paymentDate: null,
      paymentReceiptId: null
    };
    loan.installmentsItems.push(target);
    loan.installments = loan.installmentsItems.length;
  }

  target.amount = roundCurrency(target.amount + roundedShortfall);
  return {
    shortfall: roundedShortfall,
    toInstallment: target.number
  };
}

function buildNextDueDate(lastDateISO, type) {
  const base = new Date(`${lastDateISO}T00:00:00`);
  if (type === "monthly") base.setMonth(base.getMonth() + 1);
  else base.setDate(base.getDate() + 7);
  return dateToInput(base);
}

function penalizeClientScore(clientId, points) {
  const client = state.clients.find((c) => c.id === clientId);
  if (!client) return;
  client.score = clamp((Number(client.score) || 0) - points, 0, 100);
  client.semaforo = semaforoByScore(client.score);
}

function buildDueDates(startDate, type, installments) {
  const base = new Date(`${startDate}T00:00:00`);
  const dates = [];
  for (let i = 0; i < installments; i += 1) {
    const d = new Date(base);
    if (type === "weekly") d.setDate(base.getDate() + (i + 1) * 7);
    if (type === "monthly") d.setMonth(base.getMonth() + (i + 1));
    dates.push(dateToInput(d));
  }
  return dates;
}

function semaforoByScore(score) {
  if (score >= 75) return "verde";
  if (score >= 45) return "amarillo";
  return "rojo";
}

function labelSemaforo(s) {
  if (s === "verde") return "Cliente Puntual";
  if (s === "amarillo") return "Cliente Bajo riesgo";
  return "Cliente Alto riesgo";
}

function labelLoanStatus(status) {
  if (status === "active") return "Activo";
  if (status === "defaulted") return "En mora";
  if (status === "closed") return "Cerrado";
  if (status === "refinanced") return "Refinanciado";
  return status;
}

function labelInstallment(item) {
  if (item.status === "paid") return "Pagada";
  if (item.status === "partial") return isOverdue(item) ? "Parcial / Vencida" : "Parcial";
  if (item.status === "overdue") return "Vencida";
  return "Pendiente";
}

function isOverdue(installment) {
  const today = dateToInput(new Date());
  return isOverdueByDate(installment, today);
}

function isOverdueByDate(installment, dateISO) {
  return installment.dueDate < dateISO && installment.paidAmount < installment.amount;
}

function getDelayDays(installment, dateISO) {
  const due = new Date(`${installment.dueDate}T00:00:00`);
  const current = new Date(`${dateISO}T00:00:00`);
  const diff = Math.floor((current - due) / 86400000);
  return Math.max(0, diff);
}

function activatePanel(targetId) {
  panels.forEach((panel) => panel.classList.toggle("active", panel.id === targetId));
  const selectedTab = Array.from(tabs).find((tab) => tab.dataset.tab === targetId);
  tabs.forEach((tab) => tab.classList.toggle("active", tab === selectedTab));
}

function openClientsSemaforoScreen(semaforo) {
  semaforoFilterActive = semaforo;
  renderClientsBySemaforoScreen();
  activatePanel("clientesSemaforo");
}

function renderClientsBySemaforoScreen() {
  const selected = semaforoFilterActive || "verde";
  const label = labelSemaforo(selected);
  const filteredClients = state.clients
    .slice()
    .filter((client) => client.semaforo === selected)
    .sort((a, b) => a.nombre.localeCompare(b.nombre));

  clientesSemaforoTitulo.textContent = "Clientes por score";
  clientesSemaforoSubtitulo.textContent = `Listado de ${label.toLowerCase()}.`;
  clientesSemaforoTable.innerHTML = "";

  if (!filteredClients.length) {
    const tr = document.createElement("tr");
    tr.innerHTML = "<td colspan='9'>No hay clientes en esta categoria.</td>";
    clientesSemaforoTable.appendChild(tr);
    return;
  }

  filteredClients.forEach((client) => {
    const loanSummary = getClientActiveLoanSummary(client.id);
    const activeLoanLabel = loanSummary.hasActiveLoan
      ? `#${loanSummary.loanIds.join(", #")}`
      : "-";
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${escapeHtml(client.nombre)}</td>
      <td>${escapeHtml(client.dni)}</td>
      <td>${escapeHtml(client.telefono)}</td>
      <td>${Number(client.score || 0)}</td>
      <td><span class="status-pill status-${client.semaforo}">${labelSemaforo(client.semaforo)}</span></td>
      <td>${activeLoanLabel}</td>
      <td>${currency(loanSummary.granted)}</td>
      <td>${currency(loanSummary.paid)}</td>
      <td>${currency(loanSummary.debt)}</td>
    `;
    clientesSemaforoTable.appendChild(tr);
  });
}

function getClientActiveLoanSummary(clientId) {
  const activeClientLoans = state.loans.filter(
    (loan) => loan.clientId === clientId && (loan.status === "active" || loan.status === "defaulted")
  );
  if (!activeClientLoans.length) {
    return { hasActiveLoan: false, loanIds: [], granted: 0, paid: 0, debt: 0 };
  }
  const granted = roundCurrency(activeClientLoans.reduce((acc, loan) => acc + loan.principal, 0));
  const paid = roundCurrency(
    activeClientLoans.reduce(
      (acc, loan) => acc + loan.installmentsItems.reduce((sum, item) => sum + Number(item.paidAmount || 0), 0),
      0
    )
  );
  const debt = roundCurrency(activeClientLoans.reduce((acc, loan) => acc + getPendingBalance(loan), 0));
  return {
    hasActiveLoan: true,
    loanIds: activeClientLoans.map((loan) => loan.id),
    granted,
    paid,
    debt
  };
}

function buildChartRow(label, valuePercent, fillClass) {
  const pct = Math.max(0, Math.min(100, Number(valuePercent || 0)));
  return `
    <div class="chart-row">
      <span>${label}</span>
      <span class="chart-track"><span class="chart-fill ${fillClass}" style="width:${pct.toFixed(1)}%"></span></span>
      <span>${pct.toFixed(1)}%</span>
    </div>
  `;
}

function renderMonthlyEvolution() {
  const months = getLastMonths(6);
  const rows = months.map((monthKey) => {
    const newLoans = state.loans.filter(
      (loan) => (loan.startDate || "").slice(0, 7) === monthKey && !loan.parentLoanId
    );
    const refisMonth = state.refinances.filter((refi) => (refi.date || "").slice(0, 7) === monthKey);
    const closedInMonth = state.loans.filter((loan) => {
      if (loan.status !== "closed") return false;
      const paymentDates = loan.installmentsItems
        .map((item) => item.paymentDate)
        .filter(Boolean)
        .sort();
      const lastPaymentDate = paymentDates.length ? paymentDates[paymentDates.length - 1] : "";
      return (lastPaymentDate || "").slice(0, 7) === monthKey;
    });
    const granted = roundCurrency(
      newLoans.reduce((acc, loan) => acc + Number(loan.principal || 0), 0)
    );
    const newCreditsCount = newLoans.length;
    const refiCount = refisMonth.length;
    const finalizedCount = closedInMonth.length;
    const collected = roundCurrency(
      state.payments
        .filter((payment) => (payment.date || "").slice(0, 7) === monthKey)
        .reduce((acc, payment) => acc + Number(payment.amount || 0), 0)
    );
    const defaultedLoans = state.loans.filter(
      (loan) => loan.status === "defaulted" && (loan.startDate || "").slice(0, 7) <= monthKey
    );
    const mora = roundCurrency(defaultedLoans.reduce((acc, loan) => acc + getPendingBalance(loan), 0));
    return { monthKey, granted, newCreditsCount, refiCount, finalizedCount, collected, mora };
  });

  const maxMoney = Math.max(1, ...rows.map((row) => Math.max(row.granted, row.collected, row.mora)));
  const maxCount = Math.max(1, ...rows.map((row) => Math.max(row.newCreditsCount, row.refiCount, row.finalizedCount)));

  dashboardEvolucionTable.innerHTML = "";
  rows.forEach((row) => {
    const gCountPct = (row.newCreditsCount / maxCount) * 100;
    const rCountPct = (row.refiCount / maxCount) * 100;
    const fCountPct = (row.finalizedCount / maxCount) * 100;
    const cPct = (row.collected / maxMoney) * 100;
    const mPct = (row.mora / maxMoney) * 100;
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${formatMonthKey(row.monthKey)}</td>
      <td>${currency(row.granted)}</td>
      <td>${row.newCreditsCount}</td>
      <td>${row.refiCount}</td>
      <td>${row.finalizedCount}</td>
      <td>${currency(row.collected)}</td>
      <td>${currency(row.mora)}</td>
      <td class="evo-cell">
        <div class="evo-stack">
          ${buildEvolutionRowWithValue("Otorgado", gCountPct, "evo-granted", "evo-tag-granted", `${row.newCreditsCount} cred.`)}
          ${buildEvolutionRowWithValue("Refi", rCountPct, "evo-refi", "evo-tag-refi", `${row.refiCount} refi.`)}
          ${buildEvolutionRowWithValue("Finaliz.", fCountPct, "evo-finalizados", "evo-tag-finalizados", `${row.finalizedCount} fin.`)}
          ${buildEvolutionRow("Cobrado", cPct, "evo-collected", "evo-tag-collected")}
          ${buildEvolutionRow("Mora", mPct, "evo-mora", "evo-tag-mora")}
        </div>
      </td>
    `;
    dashboardEvolucionTable.appendChild(tr);
  });
}

function getLastMonths(count) {
  const now = new Date();
  const result = [];
  for (let i = 0; i < count; i += 1) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    result.push(`${y}-${m}`);
  }
  return result;
}

function formatMonthKey(monthKey) {
  const [y, m] = monthKey.split("-");
  return `${m}/${y}`;
}

function buildEvolutionRow(label, valuePercent, fillClass, tagClass) {
  const pct = Math.max(0, Math.min(100, Number(valuePercent || 0)));
  return `
    <div class="evo-row">
      <span class="evo-tag ${tagClass}">${label}</span>
      <span class="evo-track"><span class="evo-fill ${fillClass}" style="width:${pct.toFixed(1)}%"></span></span>
      <span>${pct.toFixed(1)}%</span>
    </div>
  `;
}

function buildEvolutionRowWithValue(label, valuePercent, fillClass, tagClass, valueLabel) {
  const pct = Math.max(0, Math.min(100, Number(valuePercent || 0)));
  return `
    <div class="evo-row">
      <span class="evo-tag ${tagClass}">${label}</span>
      <span class="evo-track"><span class="evo-fill ${fillClass}" style="width:${pct.toFixed(1)}%"></span></span>
      <span>${escapeHtml(valueLabel)}</span>
    </div>
  `;
}

function buildSemaforoRow(label, valuePercent, fillClass, tagClass) {
  const pct = Math.max(0, Math.min(100, Number(valuePercent || 0)));
  return `
    <div class="sem-row">
      <span class="sem-tag ${tagClass}">${label}</span>
      <span class="sem-track"><span class="sem-fill ${fillClass}" style="width:${pct.toFixed(1)}%"></span></span>
      <span>${pct.toFixed(1)}%</span>
    </div>
  `;
}

function buildSemaforoPie(verdes, amarillos, rojos, totalClientes) {
  const safeTotal = Math.max(1, totalClientes);
  const pVerde = (verdes / safeTotal) * 100;
  const pAmarillo = (amarillos / safeTotal) * 100;
  const pRojo = Math.max(0, 100 - pVerde - pAmarillo);
  const gradient = `conic-gradient(
    #10a867 0 ${pVerde.toFixed(2)}%,
    #d5a20a ${pVerde.toFixed(2)}% ${(pVerde + pAmarillo).toFixed(2)}%,
    #d6453a ${(pVerde + pAmarillo).toFixed(2)}% 100%
  )`;

  return `
    <div class="pie-wrap">
      <div class="pie-chart" style="background:${gradient}"></div>
      <div class="pie-legend">
        <button class="pie-btn pie-btn-verde" data-semaforo="verde" type="button">
          <span class="pie-btn-label">Clientes Puntuales</span><span class="pie-btn-value">${verdes}</span>
        </button>
        <button class="pie-btn pie-btn-amarillo" data-semaforo="amarillo" type="button">
          <span class="pie-btn-label">Clientes Bajo riesgo</span><span class="pie-btn-value">${amarillos}</span>
        </button>
        <button class="pie-btn pie-btn-rojo" data-semaforo="rojo" type="button">
          <span class="pie-btn-label">Clientes Alto riesgo</span><span class="pie-btn-value">${rojos}</span>
        </button>
      </div>
    </div>
  `;
}

function renderMoraChart(moraLoans) {
  if (!moraLoans.length) {
    dashboardCobranzaChart.innerHTML = "<div class='sem-stack'><div class='sem-row'><span class='sem-tag sem-tag-verde'>OK</span><span>Sin mora actual.</span><span></span></div></div>";
    return;
  }
  const topLoans = moraLoans
    .map((loan) => ({ loan, pending: getPendingBalance(loan) }))
    .sort((a, b) => b.pending - a.pending)
    .slice(0, 5);
  const maxPending = Math.max(1, ...topLoans.map((item) => item.pending));
  dashboardCobranzaChart.innerHTML = `
    <div class="mora-stack">
      ${topLoans
        .map((item) => {
          const pct = (item.pending / maxPending) * 100;
          return `
            <div class="mora-row">
              <span class="mora-tag">#${item.loan.id}</span>
              <span class="mora-track"><span class="mora-fill" style="width:${pct.toFixed(1)}%"></span></span>
              <span>${currency(item.pending)}</span>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function formatDate(dateISO) {
  if (!dateISO) return "-";
  const [y, m, d] = dateISO.split("-");
  return `${d}/${m}/${y}`;
}

function dateToInput(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function currency(value) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2
  }).format(Number(value || 0));
}

function roundCurrency(value) {
  return Math.round((Number(value) + Number.EPSILON) * 100) / 100;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, Number(value)));
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
