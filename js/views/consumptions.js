import { consumptionForm, consumptionItemSearch, consumptionResponsibleSearch } from "../dom.js";
import { api } from "../api.js";
import { render, showToast } from "../ui/layout.js";
import { loadDashboard } from "../auth.js";

// Consumos.
export async function handleConsumptionSubmit(event) {
  event.preventDefault();

  try {
    const formData = new FormData(consumptionForm);
    await api("/api/consumptions", {
      method: "POST",
      body: {
        itemId: formData.get("itemId"),
        responsibleId: formData.get("responsibleId"),
        department: formData.get("department"),
        costCenter: formData.get("costCenter"),
        quantity: Number(formData.get("quantity")),
        detail: formData.get("detail"),
      },
    });

    consumptionForm.reset();
    consumptionForm.quantity.value = 1;
    consumptionItemSearch.value = "";
    consumptionResponsibleSearch.value = "";
    await loadDashboard();
    render();
    showToast("success", "Consumo registrado", "El stock se descontó correctamente.");
  } catch (error) {
    showToast("error", "No se pudo registrar el consumo", error.message);
  }
}
