var map = new BMapGL.Map('container'); // 创建Map实例
    map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 12); // 初始化地图,设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放

    var toSearch = new Vue({
        el:"#searchFun",

        data:{
            cityName:"",
            weatherInfoList:[],
            showWea:false,
        },

        methods:{
            theLocation:function() {
                var city = document.getElementById("inputCityName").value;
                if (city != "") {
                    map.centerAndZoom(city, 11);
                }
            },

            searchWeather:function(){
                this.showWea=true;
                console.log(this.cityName+"1");
                var that = this;
                axios.get('https://v0.yiketianqi.com/api?unescape=1&version=v91&appid=43656176&appsecret=I42og6Lm&ext=&cityid=&city='
                +this.cityName).then(function(response) {
                console.log(response.data.data);
                that.weatherInfoList = response.data.data;
            })
            .catch(function(err){})
            },

        }
    })