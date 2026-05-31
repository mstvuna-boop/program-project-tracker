const employeesSeed = [
  { name: "מאיר ברסלויר", role: "מחלקת סדנאות", dept: "סדנאות", email: "K.TVUNA@GMAIL.COM", meetingDay: "יום א'", notes: "" },
  { name: "יענקי כץ", role: "מנהל מחלקת סדנאות", dept: "סדנאות", email: "MAZ.TVUNA@GMAIL.COM", meetingDay: "יום א'", notes: "" },
  { name: "מוישי הלד", role: "מנהל מחלקת אימון פרטני", dept: "ליווי פרטני", email: "TVUNACO12@GMAIL.COM", meetingDay: "יום א'", notes: "" },
  { name: "אסתי הלוי", role: "מנהלת משרד", dept: "משרד", email: "TVUNAON@GMAIL.COM", meetingDay: "יום א'", notes: "" },
  { name: "ישראל עדלמאן", role: "מנהל", dept: "מנהל", email: "S.TVUNA@GMAIL.COM", meetingDay: "יום א'", notes: "" }
];

const programsSeed = [
  ["משרד העבודה סדנאות", "מתמשכת", "סדנאות", "יענקי כץ", "יזום ופתיחת סדנאות וניהולו", "גבוהה", "בתהליך"],
  ["רשות כלכלית", "מתמשכת", "סדנאות", "יענקי כץ", "יזום ופתיחת סדנאות וניהולו", "גבוהה", "בתהליך"],
  ["ביטחון תזונתי", "מתמשכת", "סדנאות", "מאיר ברסלויר", "יזום ופתיחת סדנאות וניהולו", "גבוהה", "בתהליך"],
  ["מיחזור משכנתא", "מתמשכת", "משכנתאות", "יענקי כץ", "מחזור משכנתאות למתעניינים", "גבוהה", "בתהליך"],
  ["אפיקי הצלחה סדנאות", "מתמשכת", "סדנאות", "יענקי כץ", "יזום ופתיחת סדנאות וניהולו", "גבוהה", "בתהליך"],
  ["אפיקי הצלחה ליווי פרטני", "מתמשכת", "ליווי פרטני", "מוישי הלד", "מעקב , תפעול, ויזום", "גבוהה", "בתהליך"],
  ["קרן רייכמן סדנאות עוטף ירושלים", "מתמשכת", "סדנאות", "מאיר ברסלויר", "מעקב , תפעול, ויזום", "גבוהה", "בתהליך"],
  ["מפעל הפיס ב סדנאות צפון", "מתמשכת", "סדנאות", "מאיר ברסלויר", "מעקב , תפעול, ויזום", "גבוהה", "בתהליך"],
  ["כיוון בני ברק", "מתמשכת", "סדנאות", "יענקי כץ", "יזום ופתיחת סדנאות וניהולו", "גבוהה", "בתהליך"],
  ["ליווי פרטני כללי", "מתמשכת", "ליווי פרטני", "מוישי הלד", "מכירה , ייזום, ותפעול", "גבוהה", "בתהליך"],
  ["ביתר ליווי פרטני", "מתמשכת", "ליווי פרטני", "מוישי הלד", "מכירה , ייזום, ותפעול", "גבוהה", "בתהליך"],
  ["הכשרת מאמנים חיפה", "מתמשכת", "הכשרות", "מאיר ברסלויר", "מכירה , ייזום,", "גבוהה", "בתהליך"],
  ["הכשרת מאמנים ירושלים", "מתמשכת", "הכשרות", "מאיר ברסלויר", "מכירה , ייזום,", "גבוהה", "בתהליך"],
  ["הכשרת יועצי משכנתא", "מתמשכת", "הכשרות", "מאיר ברסלויר", "מכירה , ייזום,", "גבוהה", "בתהליך"],
  ["דרישות תשלום", "מתמשכת", "משרד", "אסתי הלוי", "תפעול וניהול", "גבוהה", "בתהליך"],
  ["קבלות", "מתמשכת", "משרד", "אסתי הלוי", "תפעול וניהול", "גבוהה", "בתהליך"],
  ["תפעול הכשרות", "מתמשכת", "משרד", "אסתי הלוי", "תפעול וניהול", "גבוהה", "בתהליך"],
  ["תמונות", "מתמשכת", "משרד", "אסתי הלוי", "תפעול וניהול", "גבוהה", "בתהליך"],
  ["נוכחויות", "מתמשכת", "משרד", "אסתי הלוי", "תפעול וניהול", "גבוהה", "בתהליך"],
  ["פורטל עובדים", "מתמשכת", "ניהול", "ישראל עדלמאן", "ניהול", "גבוהה", "בתהליך"],
  ["פורטל שלומי", "מתמשכת", "ניהול", "ישראל עדלמאן", "ניהול", "גבוהה", "בתהליך"],
  ["בנק פועלים", "מתמשכת", "ניהול", "ישראל עדלמאן", "ניהול", "גבוהה", "בתהליך"],
  ["מפעל הפיס", "מתמשכת", "ניהול", "ישראל עדלמאן", "ניהול", "גבוהה", "בתהליך"],
  ["שב\"ס", "מתמשכת", "ניהול", "ישראל עדלמאן", "ניהול", "גבוהה", "בתהליך"],
  ["ביטוח לאומי", "מתמשכת", "ניהול", "ישראל עדלמאן", "ניהול", "גבוהה", "בתהליך"],
  ["גפן", "מתמשכת", "ניהול", "ישראל עדלמאן", "ניהול", "גבוהה", "בתהליך"],
  ["פדרציה", "מתמשכת", "ניהול", "ישראל עדלמאן", "ניהול", "גבוהה", "בתהליך"],
  ["מפתח לתעסוקה", "מתמשכת", "ניהול", "ישראל עדלמאן", "ניהול", "גבוהה", "בתהליך"]
].map((row, index) => ({
  id: index + 1,
  name: row[0],
  type: row[1],
  category: row[2],
  owner: row[3],
  description: row[4],
  priority: row[5],
  status: row[6],
  startDate: "",
  dueDate: ""
}));

const statusOptions = ["לא התחיל", "בתהליך", "בעיכוב", "בסיכון", "הושלם", "מבוטל"];
const priorityOptions = ["גבוהה", "בינונית", "נמוכה"];
const goalStatusOptions = ["הושלם", "חלקי", "לא הושלם", "נדחה"];
const storeKey = "tvuna-program-tracker-v1";

let state = loadState();
let currentView = "dashboard";
let currentEmployee = employeesSeed[0].name;
let saveTimer = null;
let remoteReady = false;
const apiUrl = window.TRACKER_API_URL || "/api/data";
let dashboardFilters = {
  employee: "כל העובדים",
  meetingDate: "",
  month: ""
};

function loadState() {
  const stored = localStorage.getItem(storeKey);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      return {
        programs: parsed.programs || programsSeed,
        employees: parsed.employees || employeesSeed,
        goals: parsed.goals || []
      };
    } catch {
      localStorage.removeItem(storeKey);
    }
  }
  return { programs: programsSeed, employees: employeesSeed, goals: [] };
}

function saveState() {
  localStorage.setItem(storeKey, JSON.stringify(state));
  if (remoteReady) {
    window.clearTimeout(saveTimer);
    saveTimer = window.setTimeout(saveRemoteState, 250);
  }
}

async function loadRemoteState() {
  try {
    const response = await fetch(apiUrl, { cache: "no-store" });
    if (!response.ok) return false;
    const parsed = await response.json();
    if (parsed.programs || parsed.employees || parsed.goals) {
      state = {
        programs: parsed.programs || programsSeed,
        employees: parsed.employees || employeesSeed,
        goals: parsed.goals || []
      };
      localStorage.setItem(storeKey, JSON.stringify(state));
    }
    remoteReady = true;
    return true;
  } catch {
    remoteReady = false;
    return false;
  }
}

async function saveRemoteState() {
  try {
    await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(state, null, 2)
    });
  } catch {
    remoteReady = false;
  }
}

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function nextWeekStartIso() {
  const date = new Date();
  const daysUntilNextSunday = ((7 - date.getDay()) % 7) || 7;
  date.setDate(date.getDate() + daysUntilNextSunday);
  return date.toISOString().slice(0, 10);
}

function formatDate(value) {
  if (!value) return "";
  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleDateString("he-IL");
}

function formatPercent(value) {
  return `${Math.round((Number(value) || 0) * 100)}%`;
}

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([key, value]) => {
    if (key === "class") node.className = value;
    else if (key === "text") node.textContent = value;
    else if (key === "html") node.innerHTML = value;
    else if (key.startsWith("on")) node.addEventListener(key.slice(2), value);
    else node.setAttribute(key, value);
  });
  children.forEach(child => node.append(child));
  return node;
}

function optionList(options, selected) {
  return options.map(value => `<option value="${escapeHtml(value)}"${value === selected ? " selected" : ""}>${escapeHtml(value)}</option>`).join("");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;");
}

function avg(values) {
  const clean = values.filter(value => value !== "" && value !== null && value !== undefined).map(Number);
  if (!clean.length) return 0;
  return clean.reduce((sum, value) => sum + value, 0) / clean.length;
}

function goalsForProgram(program) {
  return state.goals.filter(goal => goal.program === program.name);
}

function programProgress(program, goals = state.goals, employeeName = "") {
  const sourceGoals = Array.isArray(goals) ? goals : state.goals;
  return avg(sourceGoals
    .filter(goal => goal.program === program.name && (!employeeName || goal.employee === employeeName))
    .map(goal => goal.progress));
}

function latestGoal(program) {
  return [...goalsForProgram(program)]
    .sort((a, b) => String(b.meetingDate).localeCompare(String(a.meetingDate)))
    [0];
}

function currentWeeklyGoal(program) {
  const latest = [...state.goals]
    .filter(goal => goal.program === program.name && goal.employee === program.owner)
    .sort((a, b) => String(b.meetingDate).localeCompare(String(a.meetingDate)))
    [0];
  return latest?.goal || "";
}

function latestNote(program) {
  return latestGoal(program)?.notes || "";
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function setView(view, employeeName = currentEmployee) {
  currentView = view;
  currentEmployee = employeeName;
  render();
}

function render() {
  document.getElementById("todayLabel").textContent = `תאריך עדכון: ${new Date().toLocaleDateString("he-IL")}`;
  document.getElementById("storageLabel").textContent = remoteReady ? "שמירה: מאגר מרכזי" : "שמירה: דפדפן מקומי";
  renderNav();
  document.querySelectorAll(".view").forEach(view => view.classList.remove("active"));
  if (currentView === "dashboard") renderDashboard();
  if (currentView === "programs") renderPrograms();
  if (currentView === "employees") renderEmployees();
  if (currentView === "goals") renderGoals();
  if (currentView === "employee") renderEmployee(currentEmployee);
}

function renderNav() {
  const navItems = [
    ["dashboard", "דשבורד"],
    ["programs", "תכניות ופרויקטים"],
    ["employees", "עובדים"],
    ["goals", "יעדים שבועיים"],
    ...state.employees.map(employee => [`employee:${employee.name}`, employee.name])
  ];
  const nav = document.getElementById("nav");
  nav.innerHTML = "";
  navItems.forEach(([id, label]) => {
    const isEmployee = id.startsWith("employee:");
    const active = isEmployee ? currentView === "employee" && currentEmployee === label : currentView === id;
    nav.append(el("button", {
      class: active ? "active" : "",
      onclick: () => isEmployee ? setView("employee", label) : setView(id),
      html: `<span>${escapeHtml(label)}</span><span>${active ? "●" : "○"}</span>`
    }));
  });
}

function pageHeader(title, subtitle = "", actions = []) {
  return el("div", { class: "page-head" }, [
    el("div", {}, [
      el("h2", { text: title }),
      subtitle ? el("p", { text: subtitle }) : document.createTextNode("")
    ]),
    el("div", { class: "toolbar" }, actions)
  ]);
}

function kpi(title, value, style) {
  return el("div", { class: `kpi ${style}` }, [
    el("div", { class: "kpi-title", text: title }),
    el("div", { class: "kpi-value", text: value })
  ]);
}

function renderDashboard() {
  const view = document.getElementById("viewDashboard");
  view.className = "view active";
  const filteredGoals = getDashboardGoals();
  const scopedPrograms = getDashboardPrograms(filteredGoals);
  const hasGoalFilter = dashboardFilters.employee !== "כל העובדים" || dashboardFilters.meetingDate || dashboardFilters.month;
  const total = scopedPrograms.length;
  const inProgress = scopedPrograms.filter(p => p.status === "בתהליך").length;
  const done = scopedPrograms.filter(p => p.status === "הושלם").length;
  const risk = scopedPrograms.filter(p => p.status === "בעיכוב" || p.status === "בסיכון").length;
  const progress = avg(filteredGoals.map(goal => goal.progress));
  view.innerHTML = "";
  view.append(
    pageHeader("דשבורד ניהול תכניות ופרויקטים", `תאריך עדכון: ${new Date().toLocaleDateString("he-IL")}`),
    dashboardFilterPanel(),
    el("div", { class: "kpi-grid" }, [
      kpi(hasGoalFilter ? "תכניות במסנן" : "סה\"כ תכניות/פרויקטים", total, "blue"),
      kpi("בתהליך", inProgress, "yellow"),
      kpi("הושלם", done, "green"),
      kpi("בעיכוב/בסיכון", risk, "red"),
      kpi("התקדמות יעדים ממוצעת", formatPercent(progress), "navy")
    ]),
    el("div", { class: "grid-two" }, [
      panel("התפלגות סטטוסים", statusDistributionTable(scopedPrograms)),
      panel("התקדמות לפי עובד", employeeProgressTable(filteredGoals, scopedPrograms, hasGoalFilter))
    ])
  );
}

function getDashboardGoals() {
  return state.goals.filter(goal => {
    const byEmployee = dashboardFilters.employee === "כל העובדים" || goal.employee === dashboardFilters.employee;
    const byDate = !dashboardFilters.meetingDate || goal.meetingDate === dashboardFilters.meetingDate;
    const byMonth = !dashboardFilters.month || String(goal.meetingDate || "").startsWith(dashboardFilters.month);
    return byEmployee && byDate && byMonth;
  });
}

function getDashboardPrograms(filteredGoals) {
  if (dashboardFilters.meetingDate || dashboardFilters.month) {
    const names = new Set(filteredGoals.map(goal => goal.program));
    return state.programs.filter(program => names.has(program.name));
  }
  if (dashboardFilters.employee !== "כל העובדים") {
    return state.programs.filter(program => program.owner === dashboardFilters.employee);
  }
  return state.programs;
}

function dashboardFilterPanel() {
  const dates = [...new Set(state.goals.map(goal => goal.meetingDate).filter(Boolean))].sort().reverse();
  const months = [...new Set(state.goals.map(goal => String(goal.meetingDate || "").slice(0, 7)).filter(Boolean))].sort().reverse();
  const body = el("div", { class: "dashboard-filters" }, [
    el("label", {}, [
      el("span", { text: "עובד" }),
      selectControl("employee", ["כל העובדים", ...state.employees.map(employee => employee.name)], dashboardFilters.employee)
    ]),
    el("label", {}, [
      el("span", { text: "תאריך פגישה" }),
      selectControl("meetingDate", ["", ...dates], dashboardFilters.meetingDate, "כל התאריכים", formatDate)
    ]),
    el("label", {}, [
      el("span", { text: "חודש" }),
      selectControl("month", ["", ...months], dashboardFilters.month, "כל החודשים", formatMonth)
    ]),
    el("div", { class: "toolbar" }, [
      el("button", {
        class: "secondary",
        text: "נקה סינון",
        onclick: () => {
          dashboardFilters = { employee: "כל העובדים", meetingDate: "", month: "" };
          renderDashboard();
        }
      })
    ])
  ]);
  body.querySelectorAll("[data-dashboard-filter]").forEach(input => {
    input.addEventListener("change", () => {
      dashboardFilters[input.dataset.dashboardFilter] = input.value;
      renderDashboard();
    });
  });
  return panel("סינון דשבורד", body);
}

function selectControl(field, options, selected, emptyLabel, formatter = value => value) {
  const select = el("select", { "data-dashboard-filter": field });
  select.innerHTML = options.map(value => {
    const label = value === "" && emptyLabel ? emptyLabel : formatter(value);
    return `<option value="${escapeHtml(value)}"${value === selected ? " selected" : ""}>${escapeHtml(label)}</option>`;
  }).join("");
  return select;
}

function formatMonth(value) {
  if (!value) return "";
  const [year, month] = value.split("-");
  return `${month}/${year}`;
}

function panel(title, content) {
  return el("section", { class: "panel" }, [
    el("div", { class: "panel-title", text: title }),
    el("div", { class: "panel-body" }, [content])
  ]);
}

function statusDistributionTable(programs = state.programs) {
  const rows = statusOptions.map(status => [status, programs.filter(program => program.status === status).length]);
  return simpleTable(["סטטוס", "כמות"], rows);
}

function employeeProgressTable(filteredGoals = state.goals, scopedPrograms = state.programs) {
  const employees = dashboardFilters.employee === "כל העובדים"
    ? state.employees
    : state.employees.filter(employee => employee.name === dashboardFilters.employee);
  const rows = employees.map(employee => {
    const programs = scopedPrograms.filter(program => program.owner === employee.name);
    const employeeGoals = filteredGoals.filter(goal => goal.employee === employee.name);
    const delayed = programs.filter(program => ["בעיכוב", "בסיכון"].includes(program.status)).length;
    return [
      employee.name,
      programs.length,
      programs.filter(program => program.status === "הושלם").length,
      programs.filter(program => program.status === "בתהליך").length,
      delayed,
      formatPercent(avg(employeeGoals.map(goal => goal.progress))),
      `<button class="link-button" data-employee="${escapeHtml(employee.name)}">פתח</button>`
    ];
  });
  const table = simpleTable(["עובד", "מס' תכניות", "הושלם", "בתהליך", "בעיכוב/בסיכון", "התקדמות ממוצעת", "פתח גליון"], rows, true);
  table.querySelectorAll("[data-employee]").forEach(button => {
    button.addEventListener("click", () => setView("employee", button.dataset.employee));
  });
  return table;
}

function simpleTable(headers, rows, html = false) {
  const wrap = el("div", { class: "table-wrap" });
  const table = el("table");
  table.innerHTML = `
    <thead><tr>${headers.map(header => `<th>${escapeHtml(header)}</th>`).join("")}</tr></thead>
    <tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${html ? cell : escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}</tbody>
  `;
  wrap.append(table);
  return wrap;
}

function renderPrograms() {
  const view = document.getElementById("viewPrograms");
  view.className = "view active";
  view.innerHTML = "";
  view.append(
    pageHeader("תכניות ופרויקטים", "", [el("button", { text: "הוסף תכנית", onclick: addProgram })]),
    panel("tblתכניות", programsTable())
  );
}

function programsTable() {
  const wrap = el("div", { class: "table-wrap" });
  const table = el("table");
  const headers = ["מז\"ה", "שם התכנית / הפרויקט", "סוג", "קטגוריה / פרויקט אב", "אחראי", "תיאור / יעד כולל", "עדיפות", "סטטוס", "% התקדמות", "תאריך התחלה", "תאריך יעד", "יעד שבועי נוכחי", "הערות כלליות"];
  table.innerHTML = `<thead><tr>${headers.map(h => `<th>${escapeHtml(h)}</th>`).join("")}</tr></thead><tbody></tbody>`;
  const tbody = table.querySelector("tbody");
  state.programs.forEach((program, index) => {
    const tr = el("tr");
    const progress = programProgress(program);
    tr.innerHTML = `
      <td class="number">${index + 1}</td>
      <td><input value="${escapeHtml(program.name)}" data-field="name" data-index="${index}"></td>
      <td><input value="${escapeHtml(program.type)}" data-field="type" data-index="${index}"></td>
      <td><input value="${escapeHtml(program.category)}" data-field="category" data-index="${index}"></td>
      <td><select data-field="owner" data-index="${index}">${optionList(state.employees.map(e => e.name), program.owner)}</select></td>
      <td><textarea data-field="description" data-index="${index}">${escapeHtml(program.description)}</textarea></td>
      <td><select data-field="priority" data-index="${index}">${optionList(priorityOptions, program.priority)}</select></td>
      <td><select data-field="status" data-index="${index}">${optionList(statusOptions, program.status)}</select></td>
      <td class="progress-cell">${progressBar(progress)}</td>
      <td><input type="date" value="${escapeHtml(program.startDate)}" data-field="startDate" data-index="${index}"></td>
      <td><input type="date" value="${escapeHtml(program.dueDate)}" data-field="dueDate" data-index="${index}"></td>
      <td>${escapeHtml(currentWeeklyGoal(program))}</td>
      <td>${escapeHtml(latestNote(program))}</td>
    `;
    tbody.append(tr);
  });
  table.querySelectorAll("[data-field]").forEach(input => input.addEventListener("change", updateProgram));
  wrap.append(table);
  return wrap;
}

function progressBar(value) {
  const actual = Math.max(0, Number(value) || 0);
  const width = Math.min(1, actual);
  const color = actual < .34 ? "#ffc7ce" : actual < .75 ? "#ffeb9c" : "#c6efce";
  return `<div class="progress-track"><div class="progress-fill" style="width:${width * 100}%;background:${color}">${formatPercent(actual)}</div></div>`;
}

function updateProgram(event) {
  const index = Number(event.target.dataset.index);
  const field = event.target.dataset.field;
  state.programs[index][field] = event.target.value;
  saveState();
  render();
}

function addProgram() {
  state.programs.push({
    id: state.programs.length + 1,
    name: "תכנית חדשה",
    type: "מתמשכת",
    category: "",
    owner: state.employees[0]?.name || "",
    description: "",
    priority: "גבוהה",
    status: "לא התחיל",
    startDate: "",
    dueDate: ""
  });
  saveState();
  renderPrograms();
  showToast("נוספה תכנית חדשה");
}

function renderEmployees() {
  const view = document.getElementById("viewEmployees");
  view.className = "view active";
  view.innerHTML = "";
  const rows = state.employees.map(employee => [employee.name, employee.role, employee.dept, employee.email, employee.meetingDay, employee.notes]);
  view.append(pageHeader("רשימת עובדים"), panel("tblעובדים", simpleTable(["שם העובד", "תפקיד", "מחלקה", "דוא\"ל", "יום פגישה שבועי", "הערות"], rows)));
}

function renderGoals() {
  const view = document.getElementById("viewGoals");
  view.className = "view active";
  view.innerHTML = "";
  view.append(
    pageHeader("יעדים שבועיים ולוג פגישות", "כל שורה = יעד שבועי אחד לתכנית/פרויקט. תכנית יכולה לקבל כמה יעדים בתאריכים שונים.", [
      el("button", { text: "הוסף יעד", onclick: () => addGoal() })
    ]),
    panel("tblיעדים", goalsTable(state.goals, true))
  );
}

function goalsTable(goals, editable) {
  const wrap = el("div", { class: "table-wrap" });
  const table = el("table");
  const headers = ["תאריך פגישה", "שבוע (תאריך התחלה)", "עובד", "תכנית / פרויקט", "יעד לשבוע", "סטטוס יעד", "ציון 1-10", "% התקדמות בשבוע", "הערות מהפגישה", "מכשולים / תמיכה נדרשת"];
  table.innerHTML = `<thead><tr>${headers.map(h => `<th>${escapeHtml(h)}</th>`).join("")}</tr></thead><tbody></tbody>`;
  const tbody = table.querySelector("tbody");
  goals.forEach(goal => {
    const index = state.goals.findIndex(item => item.id === goal.id);
    const tr = el("tr");
    const input = (field, type = "text") => `<input type="${type}" value="${escapeHtml(goal[field] || "")}" data-goal="${index}" data-field="${field}">`;
    tr.innerHTML = editable ? `
      <td>${input("meetingDate", "date")}</td>
      <td>${input("weekStart", "date")}</td>
      <td><select data-goal="${index}" data-field="employee">${optionList(state.employees.map(e => e.name), goal.employee)}</select></td>
      <td><select data-goal="${index}" data-field="program">${optionList(state.programs.map(p => p.name), goal.program)}</select></td>
      <td><textarea data-goal="${index}" data-field="goal">${escapeHtml(goal.goal || "")}</textarea></td>
      <td><select data-goal="${index}" data-field="goalStatus">${optionList(goalStatusOptions, goal.goalStatus)}</select></td>
      <td><input type="number" min="0" step="0.1" value="${escapeHtml(goal.score || "")}" data-goal="${index}" data-field="score"></td>
      <td class="progress-cell">${progressBar(goal.progress || 0)}</td>
      <td><textarea data-goal="${index}" data-field="notes">${escapeHtml(goal.notes || "")}</textarea></td>
      <td><textarea data-goal="${index}" data-field="support">${escapeHtml(goal.support || "")}</textarea></td>
    ` : `
      <td>${formatDate(goal.meetingDate)}</td>
      <td>${formatDate(goal.weekStart)}</td>
      <td>${escapeHtml(goal.employee)}</td>
      <td>${escapeHtml(goal.program)}</td>
      <td>${escapeHtml(goal.goal)}</td>
      <td>${escapeHtml(goal.goalStatus || "-")}</td>
      <td>${escapeHtml(goal.score || "-")}</td>
      <td>${formatPercent(goal.progress || 0)}</td>
      <td>${escapeHtml(goal.notes || "")}</td>
      <td>${escapeHtml(goal.support || "")}</td>
    `;
    tbody.append(tr);
  });
  table.querySelectorAll("[data-goal]").forEach(input => input.addEventListener("change", updateGoal));
  wrap.append(table);
  return wrap;
}

function addGoal(seed = {}) {
  state.goals.push({
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random()),
    meetingDate: seed.meetingDate || todayIso(),
    weekStart: seed.weekStart || todayIso(),
    employee: seed.employee || state.employees[0]?.name || "",
    program: seed.program || state.programs[0]?.name || "",
    goal: seed.goal || "",
    goalStatus: seed.goalStatus || "חלקי",
    score: seed.score || "",
    progress: seed.progress || 0,
    notes: seed.notes || "",
    support: seed.support || ""
  });
  saveState();
  render();
  showToast("היעד נשמר");
}

function updateGoal(event) {
  const index = Number(event.target.dataset.goal);
  const field = event.target.dataset.field;
  state.goals[index][field] = event.target.value;
  if (field === "score") {
    const score = Number(event.target.value);
    state.goals[index].progress = score ? Math.max(0, score) / 10 : 0;
  }
  saveState();
  render();
}

function renderEmployee(name) {
  const view = document.getElementById("viewEmployee");
  view.className = "view active";
  const employeePrograms = state.programs.filter(program => program.owner === name);
  const employeeGoals = state.goals.filter(goal => goal.employee === name);
  const dates = [...new Set(employeeGoals.map(goal => goal.meetingDate).filter(Boolean))].sort().reverse();
  const selectedDate = sessionStorage.getItem(`date:${name}`) || "כל הפגישות";
  const shownGoals = selectedDate === "כל הפגישות" ? employeeGoals : employeeGoals.filter(goal => goal.meetingDate === selectedDate);
  const shownProgramNames = new Set(shownGoals.map(goal => goal.program));
  const shownPrograms = selectedDate === "כל הפגישות"
    ? employeePrograms
    : employeePrograms.filter(program => shownProgramNames.has(program.name));
  view.innerHTML = "";
  view.append(
    pageHeader(name, `תאריך פגישה: ${new Date().toLocaleDateString("he-IL")}`, [
      el("button", { text: "הורד אקסל לשבוע הקרוב", onclick: () => downloadEmployeeExcel(name) })
    ]),
    el("div", { class: "kpi-grid" }, [
      kpi("תכניות", shownPrograms.length, "blue"),
      kpi("יעדים", shownGoals.length, "yellow"),
      kpi("בעיכוב", shownPrograms.filter(p => ["בעיכוב", "בסיכון"].includes(p.status)).length, "red"),
      kpi("% התקדמות", formatPercent(avg(shownGoals.map(goal => goal.progress))), "navy")
    ]),
    employeeMeetingPanel(name, dates, selectedDate, shownGoals),
    nextWeekPanel(name)
  );
}

function employeeMeetingPanel(name, dates, selectedDate, goals) {
  const select = el("select", { class: "meeting-select" });
  select.innerHTML = `<option>כל הפגישות</option>${dates.map(date => `<option value="${date}"${date === selectedDate ? " selected" : ""}>${formatDate(date)}</option>`).join("")}`;
  select.addEventListener("change", () => {
    sessionStorage.setItem(`date:${name}`, select.value);
    renderEmployee(name);
  });
  const body = el("div", {}, [
    el("div", { class: "toolbar", style: "margin-bottom:12px" }, [
      el("strong", { text: "בחר תאריך פגישה לסקירה:" }),
      select
    ]),
    goalsTable(goals, true),
    readableMeetingReport(name, selectedDate, goals)
  ]);
  return panel("יעדים של הפגישה הנבחרת - הזן ציון 1-10", body);
}

function readableMeetingReport(name, selectedDate, goals) {
  const reportGoals = goals.filter(goal => goal.goal || goal.notes || goal.score || goal.support);
  const title = selectedDate === "כל הפגישות"
    ? `דוח קריאה - כל הפגישות של ${name}`
    : `דוח קריאה - פגישה ${formatDate(selectedDate)}`;
  if (!reportGoals.length) {
    return el("section", { class: "goal-report" }, [
      el("h3", { text: title }),
      el("p", { class: "muted-line", text: "אין יעדים להצגה בדוח." })
    ]);
  }
  return el("section", { class: "goal-report" }, [
    el("h3", { text: title }),
    ...reportGoals.map((goal, index) => el("article", { class: "goal-report-item" }, [
      el("div", { class: "goal-report-head" }, [
        el("strong", { text: `${index + 1}. ${goal.program || "ללא תכנית"}` }),
        el("span", { text: `${goal.score || "-"} | ${formatPercent(goal.progress || 0)}` })
      ]),
      el("p", { text: goal.goal || "" }),
      goal.notes ? el("div", { class: "goal-report-notes" }, [
        el("strong", { text: "הערות מהפגישה" }),
        el("p", { text: goal.notes })
      ]) : document.createTextNode(""),
      goal.support ? el("div", { class: "goal-report-notes" }, [
        el("strong", { text: "מכשולים / תמיכה נדרשת" }),
        el("p", { text: goal.support })
      ]) : document.createTextNode("")
    ]))
  ]);
}

function nextWeekPanel(name) {
  const programs = state.programs.filter(program => program.owner === name);
  const rowCountKey = `nextRows:${name}`;
  const draftKey = `nextDraft:${name}`;
  const rowCount = Number(sessionStorage.getItem(rowCountKey) || 1);
  const draft = JSON.parse(sessionStorage.getItem(draftKey) || "[]");
  const programOptions = selected => [
    `<option value="">בחר תכנית</option>`,
    ...programs.map(program => `<option value="${escapeHtml(program.name)}"${program.name === selected ? " selected" : ""}>${escapeHtml(program.name)}</option>`)
  ].join("");
  const rows = Array.from({ length: rowCount }, (_, i) => `
    <tr class="next-week">
      <td><select data-next-program="${i}">${programOptions(draft[i]?.program || "")}</select></td>
      <td colspan="4"><textarea data-next-goal="${i}">${escapeHtml(draft[i]?.goal || "")}</textarea></td>
      <td colspan="3"><textarea data-next-notes="${i}">${escapeHtml(draft[i]?.notes || "")}</textarea></td>
    </tr>
  `).join("");
  const wrap = el("div", {}, [
    el("div", { class: "table-wrap" }, [
      el("table", { html: `
        <thead><tr><th>תכנית</th><th colspan="4">יעד לשבוע הבא</th><th colspan="3">הערות (אופציונלי)</th></tr></thead>
        <tbody>${rows}</tbody>
      `})
    ]),
    el("div", { class: "toolbar", style: "margin-top:12px" }, [
      el("button", {
        class: "secondary",
        text: "הוסף שורות יעד",
        onclick: () => {
          persistNextWeekDraft(name);
          sessionStorage.setItem(rowCountKey, String(rowCount + 5));
          renderEmployee(name);
        }
      }),
      el("button", { text: `שמור יעדים של ${name}`, onclick: () => saveNextWeekGoals(name) })
    ]),
    el("p", { class: "note-green", text: `לשמירת היעדים: מלאו תכנית ויעד ולחצו "שמור יעדים של ${name}"` })
  ]);
  wrap.querySelectorAll("[data-next-program], [data-next-goal], [data-next-notes]").forEach(input => {
    input.addEventListener("input", () => persistNextWeekDraft(name));
    input.addEventListener("change", () => persistNextWeekDraft(name));
  });
  return panel("יעדים לשבוע הבא", wrap);
}

function persistNextWeekDraft(name) {
  const rowCount = document.querySelectorAll("[data-next-program]").length;
  const draft = [];
  for (let i = 0; i < rowCount; i += 1) {
    draft.push({
      program: document.querySelector(`[data-next-program="${i}"]`)?.value || "",
      goal: document.querySelector(`[data-next-goal="${i}"]`)?.value || "",
      notes: document.querySelector(`[data-next-notes="${i}"]`)?.value || ""
    });
  }
  sessionStorage.setItem(`nextDraft:${name}`, JSON.stringify(draft));
}

function saveNextWeekGoals(name) {
  persistNextWeekDraft(name);
  const additions = [];
  let count = 0;
  const rowCount = document.querySelectorAll("[data-next-program]").length;
  for (let i = 0; i < rowCount; i += 1) {
    const program = document.querySelector(`[data-next-program="${i}"]`)?.value;
    const goal = document.querySelector(`[data-next-goal="${i}"]`)?.value.trim();
    const notes = document.querySelector(`[data-next-notes="${i}"]`)?.value.trim();
    if (program && goal) {
      additions.push({
        id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random()),
        meetingDate: todayIso(),
        weekStart: nextWeekStartIso(),
        employee: name,
        program,
        goal,
        goalStatus: "חלקי",
        score: "",
        progress: 0,
        notes,
        support: ""
      });
      count += 1;
    }
  }
  state.goals.push(...additions);
  saveState();
  if (count) {
    sessionStorage.removeItem(`nextDraft:${name}`);
    sessionStorage.setItem(`nextRows:${name}`, "1");
  }
  renderEmployee(name);
  showToast(count ? `${count} יעדים נשמרו` : "לא נמצאו יעדים לשמירה");
}

function downloadEmployeeExcel(name) {
  const weekStart = nextWeekStartIso();
  const goals = state.goals
    .filter(goal => goal.employee === name && goal.weekStart === weekStart)
    .sort((a, b) => String(a.program).localeCompare(String(b.program), "he"));

  if (!goals.length) {
    showToast("אין יעדים שמורים לשבוע הקרוב");
    return;
  }

  const rows = goals.map((goal, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${escapeHtml(formatDate(goal.weekStart))}</td>
      <td>${escapeHtml(goal.program || "")}</td>
      <td>${escapeHtml(goal.goal || "")}</td>
      <td>${escapeHtml(goal.goalStatus || "")}</td>
      <td>${escapeHtml(goal.score || "")}</td>
      <td>${escapeHtml(formatPercent(goal.progress || 0))}</td>
      <td>${escapeHtml(goal.notes || "")}</td>
      <td>${escapeHtml(goal.support || "")}</td>
    </tr>
  `).join("");

  const html = `
    <!doctype html>
    <html lang="he" dir="rtl">
    <head>
      <meta charset="utf-8">
      <style>
        body, table { font-family: Arial, sans-serif; direction: rtl; }
        h1 { color: #1F4E79; font-size: 22pt; }
        h2 { color: #667085; font-size: 12pt; font-weight: normal; }
        table { border-collapse: collapse; width: 100%; }
        th { background: #1F4E79; color: #fff; font-weight: bold; }
        td, th { border: 1px solid #d9e2ec; padding: 8px; text-align: right; vertical-align: top; }
        td:first-child, th:first-child { text-align: center; }
      </style>
    </head>
    <body>
      <h1>יעדים לשבוע הקרוב - ${escapeHtml(name)}</h1>
      <h2>שבוע שמתחיל בתאריך ${escapeHtml(formatDate(weekStart))}</h2>
      <table>
        <thead>
          <tr>
            <th>מס'</th>
            <th>שבוע</th>
            <th>תכנית / פרויקט</th>
            <th>יעד לשבוע</th>
            <th>סטטוס יעד</th>
            <th>ציון 1-10</th>
            <th>% התקדמות</th>
            <th>הערות</th>
            <th>מכשולים / תמיכה נדרשת</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </body>
    </html>
  `;

  const blob = new Blob(["\ufeff", html], { type: "application/vnd.ms-excel;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = el("a", {
    href: url,
    download: `יעדים שבוע קרוב - ${safeFileName(name)}.xls`
  });
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function safeFileName(value) {
  return String(value).replace(/[\\/:*?"<>|]/g, "-");
}

function setupGlobalActions() {
  document.getElementById("exportBtn").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = el("a", { href: url, download: "מעקב תכניות ופרויקטים.json" });
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  });

  document.getElementById("importFile").addEventListener("change", event => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result);
        state = {
          programs: parsed.programs || state.programs,
          employees: parsed.employees || state.employees,
          goals: parsed.goals || state.goals
        };
        saveState();
        render();
        showToast("הנתונים יובאו בהצלחה");
      } catch {
        showToast("קובץ הייבוא אינו תקין");
      }
    };
    reader.readAsText(file);
  });

  document.getElementById("resetBtn").addEventListener("click", () => {
    if (confirm("לאפס את כל הנתונים המקומיים?")) {
      localStorage.removeItem(storeKey);
      state = loadState();
      render();
      showToast("הנתונים אופסו");
    }
  });
}

async function init() {
  await loadRemoteState();
  setupGlobalActions();
  render();
}

init();
