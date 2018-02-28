/*--Slick--*/
$(document).ready(function(){
  $('.your-class').slick({
    'infinite': true,
    'slidesToShow': 3,
    'slidesToScroll': 1
  });
});
/*--------*/
/*--Charts--*/
$(document).ready(function(){
  var barsChartData = {
    labels: ["300 A.C", "1810","2017", "2018"],
    datasets: [
      {
        label: "Dispositivos",
        backgroundColor: ["#3e95cd", "#8e5ea2","#e8c3b9","#c45850"],
        data: [2478,267,734,784]
      }
    ]
  };

  var barsChart = new Chart('barsSampleChart', {
    type: 'bar',
    data: barsChartData,
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Uso de emojis a lo largo de los años'
      }
    }
  });


  var doughnutChartData = {
    datasets: [{
      data: [10,65],
      backgroundColor: [
        'rgba(221, 225, 73, 0.9)',
        'rgba(35, 161, 222, 0.9)'
      ]
    }],
    labels: [
      'amarillo',
      'azul'
    ]
  };
  var doughnutChart = new Chart('doughnutSampleChart',{
    type: 'doughnut',
    data: doughnutChartData,
    options:{responsive:true,circumference: 2 * Math.PI}
  });
});

/*----------*/
