var trace1 = {
    x: [],
    y: [],
    mode: 'markers',
    type: 'scatter',
    name: 'Team A',
    // text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
    marker: { size: 7 }
  };
  
  var trace2 = {
    x: [],
    y: [],
    mode: 'markers',
    type: 'scatter',
    name: 'Team B',
    // text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
    marker: { size: 7 }
  };
  
  var data = [ trace1, trace2 ];
  
  var layout = { 
    xaxis: {
      range: [ 0, 10 ] 
    },
    yaxis: {
      range: [0, 10]
    },
    title:'Generating Random points for Classification purpose'
  };
//   trace1.x.push(12);
//   console.log(trace1.x);
  function autoGenerateNumbersToPlot(){
      //genet=rating numbers between 0 and 10 to plot them
      // Team A would b 5 > x> 0 && 10 > y > 5
      // Team b would b 5 > y> 0 && 10 > x > 5
      //Math.floor(Math.random() * 10) + 0  >> from zero to 10 va
      for(var i = 0;i<100;i++){
        x1 = Math.random() * 5 + 0;
        y1 = Math.random() * 9.5 + 5;
        trace1.x.push(x1);
        trace1.y.push(y1);
      }
      for(var i = 0;i<100;i++){
        y1 = Math.random() * 5 + 0;
        x1 = Math.random() * 4.5 + 5;
        trace2.x.push(x1);
        trace2.y.push(y1);
      }

  }
  autoGenerateNumbersToPlot();
  console.log(trace1.x , trace1.y)
  Plotly.newPlot('myDiv', data, layout);