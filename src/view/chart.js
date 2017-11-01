import echart from 'echarts'
var mydom = document.createElement('div')
mydom.id = 'charttest'
mydom.style = "height:400px"
document.body.appendChild(mydom)
var mychart = function(){
var Chart = echart.init(document.getElementById('charttest'))

var option = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};

 Chart.setOption(option)
}

export default mychart