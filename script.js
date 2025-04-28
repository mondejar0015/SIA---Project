// Sample data for attendance
const attendanceData = [
    { checkIn: "08:00", checkOut: "17:00", workingHours: 9, breakTime: "1h", extraHour: "0h", status: "Present" },
    { checkIn: "08:15", checkOut: "17:30", workingHours: 9, breakTime: "1h", extraHour: "0.5h", status: "Present" },
    { checkIn: "09:00", checkOut: "18:00", workingHours: 8, breakTime: "1h", extraHour: "0h", status: "Late" },
    { checkIn: "07:50", checkOut: "16:50", workingHours: 9, breakTime: "1h", extraHour: "0h", status: "Present" }
];

// Populate attendance table
const tbody = document.getElementById('attendanceBody');

attendanceData.forEach((item) => {
    const row = document.createElement('tr');

    row.innerHTML = `
        <td><button class="btn btn-primary btn-sm rounded-circle"></button></td>
        <td>${item.checkIn}</td>
        <td>${item.checkOut}</td>
        <td>${item.workingHours}</td>
        <td>${item.breakTime}</td>
        <td>${item.extraHour}</td>
        <td>${item.status}</td>
    `;

    tbody.appendChild(row);
});
