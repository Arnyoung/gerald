google.load('visualization', '1', {
    'packages': ['geochart']
});
google.setOnLoadCallback(drawVisualization);

function drawVisualization() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Lat');
    data.addColumn('number', 'Long');
    data.addColumn('number', 'Value');
    data.addColumn({type:'string', role:'tooltip', p:{html:true}});
    data.addRows([
        [57.9371396, 12.5687713, 1, '<strong>Alingsås</strong> - AW'],
        [57.9371396, -71.016556, 1, '<strong>BOS</strong> - General Edward Lawrence Logan International Airport'],
        [39.1753611, -76.6683333, 1, '<strong>BWI</strong> - Baltimore/Washington International Thurgood Marshall Airport'],
        [35.220637, -80.944157, 1, '<strong>CLT</strong> - Charlotte-Douglas International Airport'],
        [38.849367, -77.041127, 1, '<strong>DCA</strong> - Ronald Reagan Washington National Airport'],
        [39.850017, -104.673915, 1, '<strong>DEN</strong> - Denver International Airport'],
        [32.904821, -97.032626, 1, '<strong>DFW</strong> - Dallas/Fort Worth International Airport'],
        [42.224227, -83.359357, 1, '<strong>DTW</strong> - Detroit Metropolitan Wayne County Airport'],
        [40.690486, -74.176968, 1, '<strong>EWR</strong> - Newark Liberty International Airport'],
        [26.0725962, -80.1527414, 1, '<strong>FLL</strong> - Fort Lauderdale-Hollywood International'],
        [21.3186813, -157.9224287, 1, '<strong>HNL</strong> - Honolulu International Airport'],
        [38.952751, -77.447828, 1, '<strong>IAD</strong> - Washington Dulles International Airport'],
        [29.9844444, -95.3414444, 1, '<strong>IAH</strong> - George Bush Intercontinental</strong> - Houston  Airport'],
        [40.6397511, -73.7789256, 1, '<strong>JFK</strong> - John F. Kennedy International Airport'],
        [36.0800556, -115.1522500, 1, '<strong>LAS</strong> - McCarran International Airport'],
        [33.9424955, -118.4080684, 1, '<strong>LAX</strong> - Los Angeles International Airport'],
        [40.7772500, -73.8726111, 1, '<strong>LGA</strong> - New York LaGuardia Airport Airport'],
        [28.4293936, -81.3089931, 1, '<strong>MCO</strong> - Orlando International Airport'],
        [41.7859722, -87.7524167, 1, '<strong>MDW</strong> - Chicago Midway International'],
        [35.0424167, -89.9766667, 1, '<strong>MEM</strong> - Memphis International Airport'],
        [25.7953611, -80.2901111, 1, '<strong>MIA</strong> - Miami International Airport'],
        [44.8819722, -93.2217778, 1, '<strong>MSP</strong> - Minneapolis-St Paul International/Wold-Chamberlain Airport'],
        [41.9816486, -87.9066714, 1, '<strong>ORD</strong> - Chicago O\'Hare International Airport'],
        [39.8722494, -75.2408658, 1, '<strong>PHL</strong> - Philadelphia International Airport'],
        [33.4342778, -112.0115833, 1, '<strong>PHX</strong> - Phoenix Sky Harbor International Airport'],
        [32.7335556, -117.1896667, 1, '<strong>SAN</strong> - San Diego International Airport'],
        [47.4498889, -122.3117778, 1, '<strong>SEA</strong> - Seattle-Tacoma International Airport'],
        [37.6191050, -122.3752372, 1, '<strong>SFO</strong> - San Francisco International Airport'],
        [40.7883878, -111.9777731, 1, '<strong>SLC</strong> - Salt Lake City International Airport'],
        [27.9754722, -82.5332500, 1, '<strong>TPA</strong> - Tampa International Airport']

    ]);
    var options = {
        colorAxis: {
            colors: ['#227616', '#227616']
        },
        backgroundColor: {
            fill: 'transparent',
            stroke: '#ffffff',
            strokeWidth: 1
        },
        datalessRegionColor: '#c0e1f9',
        displayMode: 'markers',
        enableRegionInteractivity: 'true',
        resolution: 'provinces',
        sizeAxis: {
            minSize: 6,
            maxSize: 6
        },
        region: 'SE',
        width: 800,
        tooltip: {
            textStyle: {
                color: '#444444'
            },
            isHtml: true,
            showTitle: false
        },
        legend: 'none'
    };
    var chart = new google.visualization.GeoChart(document.getElementById('visualization'));



    chart.draw(data, options);


}
