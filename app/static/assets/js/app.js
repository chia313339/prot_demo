
const app = Vue.createApp({
    data(){
        return{
            gender: "男",
            job: "內勤人員",
            area: "北部",
            age: "30",
            hosp_room: '單人房',
            hosp_lv: '多數醫院',
            payasyougo: '基礎方案',
            longcare: '1',
            longcare2: '1',
            home_exp: '1',
            serious:'50',
            mydebt: '0',
            mypay_year: '5',
            mypay_value: '1',
            exp_list: [
                {title: "1萬", value: "1"},
                {title: "2萬", value: "2"},
                {title: "3萬", value: "3"},
                {title: "4萬", value: "4"},
                {title: "5萬", value: "5"},
                {title: "6萬", value: "6"},
                {title: "7萬", value: "7"},
                {title: "8萬", value: "8"},
                {title: "9萬", value: "9"},
                {title: "10萬含以上", value: "10"},
            ],
            debt_list: [
                {title: "無", value: "0"},
                {title: "1萬", value: "1"},
                {title: "2萬", value: "2"},
                {title: "3萬", value: "3"},
                {title: "4萬", value: "4"},
                {title: "5萬含以上", value: "5"},
            ],
            pay_year: [
                {title: "5年", value: "5"},
                {title: "6年", value: "6"},
                {title: "7年", value: "7"},
                {title: "8年", value: "8"},
                {title: "9年", value: "9"},
                {title: "10年", value: "10"},
            ],
            pay_value: [
                {title: "100萬", value: "1"},
                {title: "200萬", value: "2"},
                {title: "300萬", value: "3"},
                {title: "400萬", value: "4"},
                {title: "500萬", value: "5"},
                {title: "600萬", value: "6"},
                {title: "700萬", value: "7"},
                {title: "800萬", value: "8"},
                {title: "900萬", value: "9"},
                {title: "1000萬", value: "10"},
            ],
        }
    },
    computed: {
        isMobile() {
            return window.innerWidth < 768; // 根據視窗寬度來判斷是否為手機版
        },
        age_check_under15(){
            return this.age<=15
        },
        prot_hosp(){
            let result = 0;
            let pic = '';
            if(this.area == "北部" & this.hosp_room == "單人房"){
                if(this.hosp_lv == "多數醫院"){result = 5300; pic = 'NS1';}
                if(this.hosp_lv == "部分醫院"){result = 3600; pic = 'NS2';}
                if(this.hosp_lv == "少數醫院"){result = 3000; pic = 'NS3';}
                } 
            if(this.area == "北部" & this.hosp_room == "雙人房"){
                    if(this.hosp_lv == "多數醫院"){result = 2500; pic = 'ND1';}
                    if(this.hosp_lv == "部分醫院"){result = 1800; pic = 'ND2';}
                    if(this.hosp_lv == "少數醫院"){result = 1600; pic = 'ND3';}
                }
            if(this.area == "中部" & this.hosp_room == "單人房"){
                if(this.hosp_lv == "多數醫院"){result = 4500; pic = 'MS1';}
                if(this.hosp_lv == "部分醫院"){result = 2500; pic = 'MS2';}
                if(this.hosp_lv == "少數醫院"){result = 1900; pic = 'MS3';}
                } 
            if(this.area == "中部" & this.hosp_room == "雙人房"){
                    if(this.hosp_lv == "多數醫院"){result = 2300; pic = 'MD1';}
                    if(this.hosp_lv == "部分醫院"){result = 1500; pic = 'MD2';}
                    if(this.hosp_lv == "少數醫院"){result = 1400; pic = 'MD3';}
                }
            if(this.area == "南部" & this.hosp_room == "單人房"){
                if(this.hosp_lv == "多數醫院"){result = 4500; pic = 'SS1';}
                if(this.hosp_lv == "部分醫院"){result = 3900; pic = 'SS2';}
                if(this.hosp_lv == "少數醫院"){result = 3000; pic = 'SS3';}
                }
            if(this.area == "南部" & this.hosp_room == "雙人房"){
                    if(this.hosp_lv == "多數醫院"){result = 2000; pic = 'SD1';}
                    if(this.hosp_lv == "部分醫院"){result = 1600; pic = 'SD2';}
                    if(this.hosp_lv == "少數醫院"){result = 1400; pic = 'SD3';}
                }
            if(this.area == "東部" & this.hosp_room == "單人房"){
                if(this.hosp_lv == "多數醫院"){result = 2400; pic = 'ES1';}
                if(this.hosp_lv == "部分醫院"){result = 2000; pic = 'ES2';}
                if(this.hosp_lv == "少數醫院"){result = 1700; pic = 'ES3';}
                }
            if(this.area == "東部" & this.hosp_room == "雙人房"){
                    if(this.hosp_lv == "多數醫院"){result = 1300; pic = 'ED1';}
                    if(this.hosp_lv == "部分醫院"){result = 1200; pic = 'ED2';}
                    if(this.hosp_lv == "少數醫院"){result = 1000; pic = 'ED3';}
                }
            return {value:result.toLocaleString(), pic:pic}
	
        },
        prot_operation(){
            let result = 0;
            if (this.age >= 0 & this.age <= 5 & this.gender == '男') { result = 1300; pic1 = '5A'; pic2 = '5B'; gender =  'M'}
            if (this.age >= 6 & this.age <= 10 & this.gender == '男') { result = 1300; pic1 = '10A'; pic2 = '10B'; gender =  'M'}
            if (this.age >= 11 & this.age <= 15 & this.gender == '男') { result = 1300; pic1 = '15A'; pic2 = '15B'; gender =  'M'}
            if (this.age >= 16 & this.age <= 20 & this.gender == '男') { result = 1300; pic1 = '20A'; pic2 = '20B'; gender =  'M'}
            if (this.age >= 21 & this.age <= 25 & this.gender == '男') { result = 1300; pic1 = '25A'; pic2 = '25B'; gender =  'M'}
            if (this.age >= 26 & this.age <= 30 & this.gender == '男') { result = 1300; pic1 = '30A'; pic2 = '30B'; gender =  'M'}
            if (this.age >= 31 & this.age <= 35 & this.gender == '男') { result = 1300; pic1 = '35A'; pic2 = '35B'; gender =  'M'}
            if (this.age >= 36 & this.age <= 40 & this.gender == '男') { result = 2100; pic1 = '40A'; pic2 = '40B'; gender =  'M'}
            if (this.age >= 41 & this.age <= 45 & this.gender == '男') { result = 2100; pic1 = '45A'; pic2 = '45B'; gender =  'M'}
            if (this.age >= 46 & this.age <= 50 & this.gender == '男') { result = 2100; pic1 = '50A'; pic2 = '50B'; gender =  'M'}
            if (this.age >= 51 & this.age <= 55 & this.gender == '男') { result = 2100; pic1 = '55A'; pic2 = '55B'; gender =  'M'}
            if (this.age >= 56 & this.age <= 60 & this.gender == '男') { result = 2100; pic1 = '60A'; pic2 = '60B'; gender =  'M'}
            if (this.age >= 61 & this.gender == '男') { result = 1400; pic1 = '65A'; pic2 = '65B'; gender =  'M'}

            if (this.age >= 0 & this.age <= 5 & this.gender == '女') { result = 1300; pic1 = '5A'; pic2 = '5B'; gender =  'F'}
            if (this.age >= 6 & this.age <= 10 & this.gender == '女') { result = 1200; pic1 = '10A'; pic2 = '10B'; gender =  'F'}
            if (this.age >= 11 & this.age <= 15 & this.gender == '女') { result = 1200; pic1 = '15A'; pic2 = '15B'; gender =  'F'}
            if (this.age >= 16 & this.age <= 20 & this.gender == '女') { result = 1200; pic1 = '20A'; pic2 = '20B'; gender =  'F'}
            if (this.age >= 21 & this.age <= 25 & this.gender == '女') { result = 1200; pic1 = '25A'; pic2 = '25B'; gender =  'F'}
            if (this.age >= 26 & this.age <= 30 & this.gender == '女') { result = 1200; pic1 = '30A'; pic2 = '30B'; gender =  'F'}
            if (this.age >= 31 & this.age <= 35 & this.gender == '女') { result = 1400; pic1 = '35A'; pic2 = '35B'; gender =  'F'}
            if (this.age >= 36 & this.age <= 40 & this.gender == '女') { result = 1400; pic1 = '40A'; pic2 = '40B'; gender =  'F'}
            if (this.age >= 41 & this.age <= 45 & this.gender == '女') { result = 1400; pic1 = '45A'; pic2 = '45B'; gender =  'F'}
            if (this.age >= 46 & this.age <= 50 & this.gender == '女') { result = 2100; pic1 = '50A'; pic2 = '50B'; gender =  'F'}
            if (this.age >= 51 & this.age <= 55 & this.gender == '女') { result = 2100; pic1 = '55A'; pic2 = '55B'; gender =  'F'}
            if (this.age >= 56 & this.age <= 60 & this.gender == '女') { result = 2100; pic1 = '60A'; pic2 = '60B'; gender =  'F'}
            if (this.age >= 61 & this.gender == '女') { result = 2100; pic1 = '65A'; pic2 = '65B'; gender =  'F'}
            return {value:result.toLocaleString(), pic1:pic1, pic2:pic2, gender:gender}
        },
        prot_pay(){
            let result = 0;
            if (this.payasyougo == "基礎方案" ) { result = "M10計畫"}
            if (this.payasyougo == "進階方案" ) { result = "M20計畫"}
            if (this.payasyougo == "豐富方案" ) { result = "M30計畫"}
            if (this.age >= 0 & this.age <=4 & this.gender == '男') { pic = 'M0'}
            if (this.age >= 5 & this.age <=9 & this.gender == '男') { pic = 'M5'}
            if (this.age >= 10 & this.age <=14 & this.gender == '男') { pic = 'M10'}
            if (this.age >= 15 & this.age <=19 & this.gender == '男') { pic = 'M15'}
            if (this.age >= 20 & this.age <=24 & this.gender == '男') { pic = 'M20'}
            if (this.age >= 25 & this.age <=29 & this.gender == '男') { pic = 'M25'}
            if (this.age >= 30 & this.age <=34 & this.gender == '男') { pic = 'M30'}
            if (this.age >= 35 & this.age <=39 & this.gender == '男') { pic = 'M35'}
            if (this.age >= 40 & this.age <=44 & this.gender == '男') { pic = 'M40'}
            if (this.age >= 45 & this.age <=49 & this.gender == '男') { pic = 'M45'}
            if (this.age >= 50 & this.age <=54 & this.gender == '男') { pic = 'M50'}
            if (this.age >= 55 & this.age <=59 & this.gender == '男') { pic = 'M55'}
            if (this.age >= 60 & this.age <=64 & this.gender == '男') { pic = 'M60'}
            if (this.age >= 65 & this.age <=69 & this.gender == '男') { pic = 'M65'}
            if (this.age >= 70 & this.age <=74 & this.gender == '男') { pic = 'M70'}
            if (this.age >= 75 & this.gender == '男') { pic = 'M70'}
            if (this.age >= 0 & this.age <=4 & this.gender == '女') { pic = 'F0'}
            if (this.age >= 5 & this.age <=9 & this.gender == '女') { pic = 'F5'}
            if (this.age >= 10 & this.age <=14 & this.gender == '女') { pic = 'F10'}
            if (this.age >= 15 & this.age <=19 & this.gender == '女') { pic = 'F15'}
            if (this.age >= 20 & this.age <=24 & this.gender == '女') { pic = 'F20'}
            if (this.age >= 25 & this.age <=29 & this.gender == '女') { pic = 'F25'}
            if (this.age >= 30 & this.age <=34 & this.gender == '女') { pic = 'F30'}
            if (this.age >= 35 & this.age <=39 & this.gender == '女') { pic = 'F35'}
            if (this.age >= 40 & this.age <=44 & this.gender == '女') { pic = 'F40'}
            if (this.age >= 45 & this.age <=49 & this.gender == '女') { pic = 'F45'}
            if (this.age >= 50 & this.age <=54 & this.gender == '女') { pic = 'F50'}
            if (this.age >= 55 & this.age <=59 & this.gender == '女') { pic = 'F55'}
            if (this.age >= 60 & this.age <=64 & this.gender == '女') { pic = 'F60'}
            if (this.age >= 65 & this.age <=69 & this.gender == '女') { pic = 'F65'}
            if (this.age >= 70 & this.age <=74 & this.gender == '女') { pic = 'F70'}
            if (this.age >= 75 & this.gender == '女') { pic = 'F70'}
            return {value1:result,value2:this.payasyougo, pic:pic, age:this.age}
        },
        prot_serious(){
            let result = 0;
            if (this.serious == "50" ) { result2 = "基礎療程",result1 = "25萬"}
            if (this.serious == "250" ) { result2 = "進階療程",result1 = "300萬"}
            if (this.serious == "500" ) { result2 = "豐富療程",result1 = "500萬"}
            if (this.age >= 0 & this.age <= 9 & this.gender == '男') { pic = 'M0'}
            if (this.age >= 10 & this.age <= 19 & this.gender == '男') { pic = 'M10'}
            if (this.age >= 20 & this.age <= 29 & this.gender == '男') { pic = 'M20'}
            if (this.age >= 30 & this.age <= 39 & this.gender == '男') { pic = 'M30'}
            if (this.age >= 40 & this.age <= 49 & this.gender == '男') { pic = 'M40'}
            if (this.age >= 50 & this.age <= 59 & this.gender == '男') { pic = 'M50'}
            if (this.age >= 60 & this.age <= 69 & this.gender == '男') { pic = 'M60'}
            if (this.age >=70 & this.gender == '男') { pic = 'M70'}
            if (this.age >= 0 & this.age <= 9 & this.gender == '女') { pic = 'F0'}
            if (this.age >= 10 & this.age <= 19 & this.gender == '女') { pic = 'F10'}
            if (this.age >= 20 & this.age <= 29 & this.gender == '女') { pic = 'F20'}
            if (this.age >= 30 & this.age <= 39 & this.gender == '女') { pic = 'F30'}
            if (this.age >= 40 & this.age <= 49 & this.gender == '女') { pic = 'F40'}
            if (this.age >= 50 & this.age <= 59 & this.gender == '女') { pic = 'F50'}
            if (this.age >= 60 & this.age <= 69 & this.gender == '女') { pic = 'F60'}
            if (this.age >=70 & this.gender == '女') { pic = 'F70'}
            return {value:this.serious, value1:result1, value2:result2, pic:pic, age:this.age}
        },
        prot_longcare(){
            let result = 0;
			let s1 = this.longcare;
			let s2 = this.longcare2;
            let way = '';
            if (s1 == 1 ) {
                way = '家庭照護'
                if(s2 == 1) {result = 1}
                if(s2 == 2) {result = 2}
                if(s2 == 3) {result = 3}
                if(s2 == 4) {result = 4}
                if(s2 == 5) {result = 5}
                if(s2 == 6) {result = 6}
                if(s2 == 7) {result = 7}
            }
            if (s1 == 2 ) {result = 7, way = '本國籍看護'}
            if (s1 == 3 ) {result = 3, way = '外國籍看護'}
            if (s1 == 4 ) {result = 2.5, way = '社區日照中心'}
            if (s1 == 5 ) {result = 5.5, way = '安養機構'}
            return {value:result+1, way:way}
        },
        prot_life(){
            let debt = parseInt(this.mydebt);
            let y = parseInt(this.mypay_year);
            let exp = parseInt(this.home_exp);
            let result = (debt+exp) *12 *y;
            let age = this.age
            if (age < 16) { return {value:61.5}}
            if (age >= 16) { 
                return {value:result } 
            }
        },

    },
    mounted(){
        window.app_1 = this
    },
});
app.mount("#app")


function hosp_detail() {
        const vm = app_1.prot_hosp;
        const age = app_1.age;
        const gender = app_1.gender;
        const src = "/static/assets/images/prot/hosp/" + vm.pic + ".JPG";
        const src2 = "/static/assets/images/prot/hosp/" + vm.pic[0] + ".JPG";

    $("#myhosp").attr("src", src);
    $("#myhosp2").attr("src", src2);
    $('#myhosp_age').text(age.toString().padStart(2, '0'));
    $('#myhosp_gender').text(gender);
    };

function operation_detail() {
    const vm = app_1.prot_operation;
    const age = app_1.age;
    const gender = app_1.gender;
    const src1 = `/static/assets/images/prot/operation/${vm.gender}/${vm.pic1}.JPG`;
    const src2 = `/static/assets/images/prot/operation/${vm.gender}/${vm.pic2}.JPG`;

    $("#myoperation1").attr("src", src1);
    $("#myoperation2").attr("src", src2);
    $('#mmyoperation_age1').text(age.toString().padStart(2, '0'));
    $('#mmyoperation_age2').text(age.toString().padStart(2, '0'));
    };

function pay_detail() {
    const vm = app_1.prot_pay;
    const age = vm.age;
    const src1 = `/static/assets/images/prot/pay/${vm.pic}A.jpg`;
    const src2 = `/static/assets/images/prot/pay/${vm.pic}B.jpg`;
    if(vm.value1 =="M10計畫"){$(".pay_lv1").show();$(".pay_lv2").hide();$(".pay_lv3").hide();}
    if(vm.value1 =="M20計畫"){$(".pay_lv1").show();$(".pay_lv2").show();$(".pay_lv3").hide();}
    if(vm.value1 =="M30計畫"){$(".pay_lv1").show();$(".pay_lv2").show();$(".pay_lv3").show();}

    $("#mypay1").attr("src", src1);
    $("#mypay2").attr("src", src2);
    $('.mypay_age').text(age.toString().padStart(2, '0'));
    $('#mypay_vaule1').text(vm.value1);
    $('#mypay_vaule2').text(vm.value2);
    };

function serious_detail() {
    const vm = app_1.prot_serious;
    const age = vm.age;
    const src1 = `/static/assets/images/prot/serious/${vm.pic}A.JPG`;
    const src2 = `/static/assets/images/prot/serious/${vm.pic}B.JPG`;
    if(vm.value =="50"){$(".serious_lv1").show();$(".serious_lv2").hide();$(".serious_lv3").hide();}
    if(vm.value =="250"){$(".serious_lv1").show();$(".serious_lv2").show();$(".serious_lv3").hide();}
    if(vm.value =="500"){$(".serious_lv1").show();$(".serious_lv2").show();$(".serious_lv3").show();}

    $("#myserious1").attr("src", src1);
    $("#myserious2").attr("src", src2);
    $('.myserious_age').text(age.toString().padStart(2, '0'));
    $('#myserious_vaule1').text(vm.value1);
    $('#myserious_vaule2').text(vm.value2);

    };


function accident_detail() {
    const vm = app_1.prot_life;
    const hosp = app_1.prot_hosp.value;
    const age = app_1.age;
    const gender = app_1.gender;
    const mypay_year = app_1.mypay_year;
    const home_exp = app_1.home_exp;
    const mydebt = app_1.mydebt;

    const imgSrc = age < 16 ? "/static/assets/images/prot/accident/accident2.JPG" : "/static/assets/images/prot/accident/accident1.JPG";
    const value1 = age < 16 ? "61.5萬元" : `${vm.value.toLocaleString()}萬元`;
    const value2 = age < 16 ? "" : `${vm.value.toLocaleString()}萬元`;
    const mypayYearText = age >= 16 ? `${mypay_year}年` : "";
    const homeExpText = age >= 16 ? `${home_exp*12}萬` : "";
    const mydebtText = age >= 16 ? `${mydebt*12}萬` : "";

    $("#myaccident1").attr("src", imgSrc);
    $('#myaccident_value1').text(value1);
    $('#myaccident_value2').text(value2);
    $('#myaccident_mypay_year').text(mypayYearText);
    $('#myaccident_home_exp').text(homeExpText);
    $('#myaccident_mydebt').text(mydebtText);
    $('#myaccident_hosp').text(hosp.toLocaleString()+"元");
    $('#myaccident_pay').text("10萬元");
    $('#myaccident_age').text(age.toString().padStart(2, '0'));
    $('#myaccident_gender').text(gender);
    };



function longcare_detail() {
    const vm = app_1.prot_longcare;
    const age = app_1.age;
    const gender = app_1.gender;

    const value1 = `${vm.value.toLocaleString()}萬`;
    const value2 = `${vm.value.toLocaleString() - 1}萬`;

    $("#mylongcare_value1").text(value1);
    $("#mylongcare_value2").text(value2);
    $("#mylongcare_way").text(vm.way);
    $('#mylongcare_age').text(age.toString().padStart(2, '0'));
    $('#mylongcare_gender').text(gender);
    };


function life_detail() {
    const vm = app_1.prot_life;
    const age = app_1.age;
    const gender = app_1.gender;
    const mypay_year = app_1.mypay_year;
    const home_exp = app_1.home_exp;
    const mydebt = app_1.mydebt;

    const imgSrc = age < 16 ? "/static/assets/images/prot/life/life2.JPG" : "/static/assets/images/prot/life/life1.JPG";
    const value1 = age < 16 ? "61.5萬元" : `${vm.value.toLocaleString()}萬元`;
    const value2 = age < 16 ? "" : `${vm.value.toLocaleString()}萬元`;
    const mypayYearText = age >= 16 ? `${mypay_year}年` : "";
    const homeExpText = age >= 16 ? `${home_exp*12}萬` : "";
    const mydebtText = age >= 16 ? `${mydebt*12}萬` : "";

    $("#mylife").attr("src", imgSrc);
    $('#mylife_value1').text(value1);
    $('#mylife_value2').text(value2);
    $('#mylife_mypay_year').text(mypayYearText);
    $('#mylife_home_exp').text(homeExpText);
    $('#mylife_mydebt').text(mydebtText);
    $('#mylife_age').text(age.toString().padStart(2, '0'));
    $('#mylife_gender').text(gender);
};


    
$(document).ready(function() {
    const chapterAnchors = $('[data-anchor]') // 章節錨點元素
    const $c1div = $('#chapter-position');
    const $c2div = $('.completeness');
    let currentChapterIndex = chapterAnchors.length - 1 // 預設為最後一章
    $(window).scroll(function() {
        const scrollTop = $(window).scrollTop() // 取得目前捲動的距離
        const windowWidth = $(window).width()
        let threshold = 500 // 預設閾值
        if (windowWidth > 768) {
            const windowHeight = $(window).height()
            const chapterHeight = $(chapterAnchors[0]).height() // 假設第一個章節高度代表所有章節高度
            const ratio = chapterHeight / windowHeight
            threshold = Math.ceil(1000 * ratio) // 根據比例計算閾值
        }
        for (let i = 0; i < chapterAnchors.length; i++) {
            const chapterTop = $(chapterAnchors[i]).offset().top - threshold // 調整閾值
            if (scrollTop < chapterTop) {
            currentChapterIndex = i - 1
            break
            }
        }
        // console.log(currentChapterIndex)
        $c1div.text("問卷進度"+currentChapterIndex+"/5")

        if (currentChapterIndex === 0 || currentChapterIndex === 6) {
            $c1div.hide();
            // $c2div.hide();
        } else if (windowWidth < 1200) {
            $c1div.show();
            $c2div.hide();
        } else {
            $c1div.hide();
            $c2div.show();
        }
        
    });

    $(window).resize(function() {
        const windowWidth = $(window).width();
        if (currentChapterIndex === 0 || currentChapterIndex === 6) {
            $c1div.hide();
            // $c2div.hide();
        } else if (windowWidth < 1200) {
            $c1div.show();
            // $c2div.hide();
        } else {
            $c1div.hide();
            // $c2div.show();
        }
    });

})

// function close_modal(modal_name) {
//     var myModal = document.getElementById(modal_name);
//     var bsModal = new bootstrap.Modal(myModal);
//     bsModal.hide();
// }

// function closeModal(modalId) {
//     var modal = document.getElementById(modalId);
//     modal.classList.remove('show');
//     modal.setAttribute('aria-hidden', 'true');
//     modal.style.display = 'none';

//     // Remove backdrop
//     var backdrop = document.querySelector('.modal-backdrop');
//     if (backdrop) {
//         document.body.removeChild(backdrop);
//     }

//     // Enable scrolling on body
//     document.body.classList.remove('modal-open');
// }


function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    modal.style.display = 'none';

    // var modalBackdrop = document.querySelector('.modal-backdrop');
    // if (modalBackdrop) {
    //     modalBackdrop.parentNode.removeChild(modalBackdrop);
    // }

    // document.body.classList.remove('modal-open');
}

function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    modal.style.display = 'block';

    // var modalBackdrop = document.createElement('div');
    // modalBackdrop.classList.add('modal-backdrop', 'fade', 'show');
    // document.body.appendChild(modalBackdrop);

    // document.body.classList.add('modal-open');
}


