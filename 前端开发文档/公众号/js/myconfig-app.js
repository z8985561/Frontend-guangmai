var version = +new Date();
require.config({
    urlArgs: 'v=' + version, 
    baseUrl: './lib/',
    paths: {
        'jquery': './jquery/jquery-1.11.1.min',
        'jquery.gcjs': './jquery/jquery.gcjs',
        'tpl':'./tmodjs',
        'foxui':'./foxui/js/foxui.min',
        'foxui.picker':'./foxui/js/foxui.picker.min',
        'foxui.citydata':'./foxui/js/foxui.citydata.min',
        'foxui.citydatanew':'./foxui/js/foxui.citydatanew.min',
        'foxui.street':'./foxui/js/foxui.street.min',
        'jquery.qrcode':'./jquery/jquery.qrcode.min',
        'ydb':'./Ydb/YdbOnline',
        'swiper':'./swiper/swiper.min',
        'jquery.fly': './jquery/jquery.fly',
        'core': './core',
        
        'mobile': './mobile',
    },
    shim: {
        'foxui':{
            deps:['jquery']
        },
        'foxui.picker': {
            exports: "foxui",
            deps: ['foxui','foxui.citydata']
        },
		'jquery.gcjs': {
	                 deps:['jquery']
		},
		'jquery.fly': {
	                 deps:['jquery']
		}
    },
    waitSeconds: 0
});
