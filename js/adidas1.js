$(function(){
	$('.start').click(function(){
		$(this).css({display:'none'});
		$('.mainbox3').css({'animation':'mainbox3 2s cubic-bezier(0.69, 0.01, 1, 1)','animation-fill-mode':'forwards'});
		// $('.mainbox2').css({'animation':'mainbox2 3s cubic-bezier(0.69, 0.01, 1, 1)','animation-fill-mode':'forwards'});
		$('.show').css({display:'block'});
	})
	$('.shoebig').click(function(){
		if($('.show').hasClass('anima')){
			console.log(1)
			$('.show').removeClass('anima').addClass('anima1');
		}else{
			console.log(2)
			$('.show').removeClass('anima1').addClass('anima');
		}
	})
	var P = [
		{
			x:307,
			y:332,
			z:1062,
			img:'images/l1.png',
			rotY:3,
			rotZ:298,
			sclX:2.32236,
			sclY:1.54824,
		},
		{
			x:'-58',
			y:245,
			z:1640,
			img:'images/l2.png',
			rotY:'-15',
			rotZ:79,
			sclX:1.1623,
			sclY:0.774869,
		},
		{
			x:618,
			y:555,
			z:3051,
			img:'images/l3.png',
			rotY:13,
			rotZ:212,
			sclX:2.96022,
			sclY:1.97348,
		},
		{
			x:136,
			y:'-622',
			z:968,
			img:'images/l4.png',
			rotY:'-14',
			rotZ:324,
			sclX:2.38782,
			sclY:1.59188,
		},
		{
			x:192,
			y:'-197',
			z:2330,
			img:'images/l5.png',
			rotY:0,
			rotZ:128,
			sclX:2.37028,
			sclY:1.58019,
		},
		{
			x:758,
			y:'-613',
			z:1434,
			img:'images/l1.png',
			rotY:10,
			rotZ:163,
			sclX:2.98495,
			sclY:1.98996,
		},
		{
			x:'-660',
			y:240,
			z:3207,
			img:'images/l2.png',
			rotY:7,
			rotZ:116,
			sclX:1.42851,
			sclY:0.952339,
		},
		{
			x:306,
			y:'-697',
			z:3457,
			img:'images/l3.png',
			rotY:3,
			rotZ:224,
			sclX:1.86922,
			sclY:1.24614,
		},
		{
			x:'-346',
			y:'-98',
			z:1719,
			img:'images/l4.png',
			rotY:'-14',
			rotZ:186,
			sclX:0.605836,
			sclY:0.403891,
		},
		{
			x:'-710',
			y:328,
			z:2945,
			img:'images/l1.png',
			rotY:'-4',
			rotZ:340,
			sclX:2.3258,
			sclY:1.55053,
		},
		{
			x:'-790',
			y:241,
			z:1347,
			img:'images/l1.png',
			rotY:'-4',
			rotZ:158,
			sclX:2.72257,
			sclY:1.81505,
		},
		{
			x:'-115',
			y:'-470',
			z:2497,
			img:'images/l3.png',
			rotY:'-12',
			rotZ:304,
			sclX:2.48416,
			sclY:1.65611,
		},
		{
			x:90,
			y:313,
			z:2869,
			img:'images/l1.png',
			rotY:5,
			rotZ:345,
			sclX:0.120795,
			sclY:0.0805299,
		},
		{
			x:521,
			y:522,
			z:1118,
			img:'images/l5.png',
			rotY:12,
			rotZ:284,
			sclX:1.56375,
			sclY:1.0425,
		},
		{
			x:457,
			y:'-456',
			z:2057,
			img:'images/l1.png',
			rotY:14,
			rotZ:157,
			sclX:1.26393,
			sclY:0.842618,
		},
		{
			x:'-508',
			y:794,
			z:4116,
			img:'images/l1.png',
			rotY:13,
			rotZ:305,
			sclX:0.903731,
			sclY:0.602487,
		},
		{
			x:'-689',
			y:238,
			z:694,
			img:'images/l2.png',
			rotY:4,
			rotZ:134,
			sclX:0.837494,
			sclY:0.55833,
		},
		{
			x:641,
			y:'-512',
			z:4101,
			img:'images/l4.png',
			rotY:'-7',
			rotZ:132,
			sclX:0.907312,
			sclY:0.604902,
		},
		{
			x:711,
			y:'-106',
			z:2489,
			img:'images/l1.png',
			rotY:4,
			rotZ:314,
			sclX:2.91197,
			sclY:1.94131,
		},
		{
			x:608,
			y:'-419',
			z:3041,
			img:'images/l2.png',
			rotY:10,
			rotZ:352,
			sclX:0.10844,
			sclY:0.0722936,
		},
		{
			x:'-668',
			y:700,
			z:3495,
			img:'images/l1.png',
			rotY:'-2',
			rotZ:66,
			sclX:2.93965,
			sclY:1.95977,
		},
		{
			x:'-525',
			y:620,
			z:2066,
			img:'images/l3.png',
			rotY:'-7',
			rotZ:98,
			sclX:2.58931,
			sclY:1.72621,
		},
		{
			x:656,
			y:'-766',
			z:1143,
			img:'images/l4.png',
			rotY:'-6',
			rotZ:343,
			sclX:1.43636,
			sclY:0.957571,
		},
		{
			x:278,
			y:'-643',
			z:3101,
			img:'images/l2.png',
			rotY:3,
			rotZ:100,
			sclX:2.97871,
			sclY:1.98581,
		},
		{
			x:133,
			y:'-648',
			z:2986,
			img:'images/l1.png',
			rotY:6,
			rotZ:63,
			sclX:0.615968,
			sclY:0.410645,
		},
		{
			x:'-744',
			y:'-47',
			z:1863,
			img:'images/l2.png',
			rotY:'-14',
			rotZ:116,
			sclX:1.75531,
			sclY:1.17021,
		},
		{
			x:767,
			y:130,
			z:930,
			img:'images/l3.png',
			rotY:'-8',
			rotZ:258,
			sclX:0.0315732,
			sclY:0.021048,
		},
		{
			x:715,
			y:206,
			z:2057,
			img:'images/l4.png',
			rotY:'-12',
			rotZ:169,
			sclX:0.747667,
			sclY:0.498444,
		},
		{
			x:14,
			y:'-676',
			z:3492,
			img:'images/l5.png',
			rotY:10,
			rotZ:92,
			sclX:1.07841,
			sclY:0.718937,
		},
		{
			x:'-355',
			y:120,
			z:3589,
			img:'images/l2.png',
			rotY:'-15',
			rotZ:206,
			sclX:2.16274,
			sclY:1.44183,
		},
	]
	for(var i = 0;i< P.length; i ++){
		$('.show .lian').append('<div class="l'+i+'"></div>');
		$('.l'+i).css({transform:'translate3d('+P[i].x+'px, '+P[i].y+'px, '+P[i].z+'px) rotateX(0deg) rotateY('+P[i].rotY+'deg)  rotateZ('+P[i].rotZ+'deg) scale3d('+P[i].sclX+', '+P[i].sclY+', 1)','background':'url('+P[i].img+')'})
	};
})