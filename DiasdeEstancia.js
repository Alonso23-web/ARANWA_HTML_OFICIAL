// Inicialización del calendario
let currentDate = new Date();
let selectedDate = null;

const monthNames = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

// Función para generar el calendario
function generateCalendar() {
  const calendarElement = document.getElementById('calendar');
  const monthYearElement = document.getElementById('calendar-month-year');
  
  // Limpieza del calendario
  calendarElement.innerHTML = '';

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Mostrar el mes y el año
  monthYearElement.textContent = `${monthNames[month]} ${year}`;

  // Generar la cuadrícula de días de la semana
  const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  daysOfWeek.forEach(day => {
    const dayElement = document.createElement('div');
    dayElement.textContent = day;
    calendarElement.appendChild(dayElement);
  });

  // Generar los días del mes
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const totalCells = firstDayOfMonth + daysInMonth;

  // Rellenar el calendario con los días
  for (let i = 0; i < totalCells; i++) {
    const dayElement = document.createElement('div');
    
    if (i >= firstDayOfMonth) {
      const dayNumber = i - firstDayOfMonth + 1;
      dayElement.textContent = dayNumber;

      // Agregar un evento de clic para seleccionar la fecha
      dayElement.addEventListener('click', () => {
        // Marcar la fecha seleccionada
        const selected = document.querySelector('.selected');
        if (selected) {
          selected.classList.remove('selected');
        }
        dayElement.classList.add('selected');
        selectedDate = new Date(year, month, dayNumber); // Establecer la fecha seleccionada
      });
    }
    
    calendarElement.appendChild(dayElement);
  }
}

// Llamar a la función para generar el calendario al cargar la página
generateCalendar();

// Funciones para cambiar de mes
document.getElementById('prev-month').addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  generateCalendar();
});

document.getElementById('next-month').addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  generateCalendar();
});

// Función para redirigir al apartado de Alojamientos
document.getElementById("update-dates-button").addEventListener("click", () => {
  if (selectedDate) {
    // Redirigir al apartado de Alojamientos
    window.location.href = "alojamientos.html"; // Redirigir a la página de alojamientos
  } else {
    alert("Por favor, selecciona una fecha primero.");
  }
});
