
document.addEventListener('DOMContentLoaded', () => {

    const dataLinea = {
        labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4', 'Día 5', 'Día 6', 'Día 7'],
        datasets: [{
            label: 'Cantidad de Avisos de Adopción',
            data: [5, 8, 4, 10, 7, 9, 6],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
            fill: false
        }]
    };

    const configLinea = {
        type: 'line',
        data: dataLinea,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Avisos de Adopción por Día'
                }
            }
        }
    };
    new Chart(document.getElementById('graficoLinea'), configLinea);

    const dataTorta = {
        labels: ['Perros', 'Gatos'],
        datasets: [{
            label: 'Total de Avisos por Tipo',
            data: [20, 15],
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
            hoverOffset: 4
        }]
    };

    const configTorta = {
        type: 'pie',
        data: dataTorta,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Total de Avisos por Tipo de Mascota'
                }
            }
        }
    };
    new Chart(document.getElementById('graficoTorta'), configTorta);

    const dataBarras = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [
            {
                label: 'Perros',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgb(255, 99, 132)'
            },
            {
                label: 'Gatos',
                data: [8, 15, 6, 10, 5, 8],
                backgroundColor: 'rgb(54, 162, 235)'
            }
        ]
    };

    const configBarras = {
        type: 'bar',
        data: dataBarras,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Avisos por Tipo y Mes'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Cantidad de Avisos'
                    }
                }
            }
        }
    };
    new Chart(document.getElementById('graficoBarras'), configBarras);
});