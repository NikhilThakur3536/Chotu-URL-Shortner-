export const ChartOptions = () => {
    const pieChartOptions = {
      responsive: true, // Ensures the chart resizes with its container
      maintainAspectRatio: false, // Allows you to control the aspect ratio via CSS
      plugins: {
        legend: {
          position: "top", // Position of the legend (can be 'top', 'bottom', 'left', 'right')
          labels: {
            font: {
              size: 14, // Font size for the legend labels
            },
            color: "#e2e8f0", // Legend label color
          },
        },
        tooltip: {
          enabled: true, // Display tooltips on hover
          callbacks: {
            label: function (context) {
              const label = context.label || "";
              const value = context.raw || 0;
              const total = context.dataset.data.reduce((sum, val) => sum + val, 0);
              const percentage = ((value / total) * 100).toFixed(1); // Calculate percentage
              return `${label}: ${value} (${percentage}%)`;
            },
          },
        },
      },
      layout: {
        padding: {
          top: 20, // Adds padding to the top of the chart
          bottom: 20, // Adds padding to the bottom of the chart
        },
      },
    };
  
    const barChartOptions = {
      plugins: {
        legend: {
          position: "top",
        },
      },
      responsive: true,
      maintainAspectRatio: true,
      layout: {
        padding: {
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        },
      },
      scales: {
        y: {
          ticks: {
            //  step size to 1 to have a gap of 1 between ticks
            stepSize: 1,
            // Ensure values are displayed as whole numbers, not decimals
            callback: function(value) {
              return Number(value).toFixed(0); // This ensures the value is an integer (no decimals)
            },
          },
          beginAtZero: true, // Ensure the Y-axis starts at 0
        },
      },
      elements: {
        rectangle: {
          borderWidth: 2, // Adding border width to Bar chart bars
        },
      },
    };
  
    return { pieChartOptions, barChartOptions }; 
  };
  