
const app = Vue.createApp({
    data(){
        return{
            gender: "男", 
            area: "北部",
            age: "30",
            hosp_room: '雙人房',
            hosp_lv: '多數醫院',
            payasyougo: '基礎方案',
            longcare: '1',
            longcare2: '1',
            home_exp: '0',
            serious:'基礎療程',
            mydebt: '0',
            mypay_year: '0',
            exp_list: [
                {title: "無", value: "0"},
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
                {title: "無", value: "0"},
                {title: "1年", value: "1"},
                {title: "2年", value: "2"},
                {title: "3年", value: "3"},
                {title: "4年", value: "4"},
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
            apidata:
                {
                    "hosp_data": {
                        "hosp_pic1": "ND1",
                        "hosp_pic2": "N",
                        "hosp_value": 2500
                    },
                    "life_data": {
                        "life_value": 0
                    },
                    "longcare_data": {
                        "longcare_value": 2,
                        "longcare_way": "家人照護"
                    },
                    "operation_data": {
                        "operation_pic1": "M/30A",
                        "operation_pic2": "M/30B",
                        "operation_value": 1300
                    },
                    "pay_data": {
                        "pay_pic1": "M30A",
                        "pay_pic2": "M30B",
                        "pay_value": "M10計畫"
                    },
                    "serious_data": {
                        "serious_pic1": "M30A",
                        "serious_pic2": "M30B",
                        "serious_value": "50"
                    }
                    }, // 新增一個用於保存 API 返回數據的屬性，先填入預設值
            isoutput: false, // 新增一個屬性來標記是否已從 API 獲取到數據
        }
    },
    computed: {
        isMobile() {
            return window.innerWidth < 768; // 根據視窗寬度來判斷是否為手機版
        },
        age_check_under15(){
            return this.age<=15
        },
    },
    methods:{
        showoutput(){
            console.log('點下去送出囉')

            fetch('/prot_api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    gender: this.gender, 
                    area: this.area,
                    age: this.age,
                    hosp_room: this.hosp_room,
                    hosp_lv: this.hosp_lv,
                    payasyougo: this.payasyougo,
                    longcare: this.longcare,
                    longcare2: this.longcare2,
                    home_exp: this.home_exp,
                    serious: this.serious,
                    mydebt: this.mydebt,
                    mypay_year: this.mypay_year,
                }),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                this.apidata = data; // 將 API 返回的數據保存到 apiData 屬性
                this.isoutput = true; // 將 isDataFetched 設為 true，表示已獲取到數據
                window.location.href = '#myprotection'; // 跳轉到 #myprotection
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
    },
    mounted(){
        window.app_1 = this

    },
});
app.mount("#app")


function hosp_detail() {
        const vm = app_1.apidata.hosp_data;
        const age = app_1.age;
        const gender = app_1.gender;
        const src = "/static/assets/images/prot/hosp/" + vm.hosp_pic1 + ".JPG";
        const src2 = "/static/assets/images/prot/hosp/" + vm.hosp_pic2 + ".JPG";

    $("#myhosp").attr("src", src);
    $("#myhosp2").attr("src", src2);
    $('#myhosp_age').text(age.toString().padStart(2, '0'));
    $('#myhosp_gender').text(gender);
    };

function operation_detail() {
    const vm = app_1.apidata.operation_data;
    const age = app_1.age;
    const src1 = `/static/assets/images/prot/operation/${vm.operation_pic1}.JPG`;
    const src2 = `/static/assets/images/prot/operation/${vm.operation_pic2}.JPG`;

    $("#myoperation1").attr("src", src1);
    $("#myoperation2").attr("src", src2);
    $('#mmyoperation_age1').text(age.toString().padStart(2, '0'));
    $('#mmyoperation_age2').text(age.toString().padStart(2, '0'));
    };

function pay_detail() {
    const vm = app_1.apidata.pay_data;
    const age = app_1.age;
    const payasyougo = app_1.payasyougo;
    const src1 = `/static/assets/images/prot/pay/${vm.pay_pic1}.jpg`;
    const src2 = `/static/assets/images/prot/pay/${vm.pay_pic2}.jpg`;
    if(vm.pay_value =="M10計畫"){$(".pay_lv1").show();$(".pay_lv2").hide();$(".pay_lv3").hide();}
    if(vm.pay_value =="M20計畫"){$(".pay_lv1").show();$(".pay_lv2").show();$(".pay_lv3").hide();}
    if(vm.pay_value =="M30計畫"){$(".pay_lv1").show();$(".pay_lv2").show();$(".pay_lv3").show();}

    $("#mypay1").attr("src", src1);
    $("#mypay2").attr("src", src2);
    $('.mypay_age').text(age.toString().padStart(2, '0'));
    $('#mypay_vaule2').text(payasyougo);
    $('#mypay_vaule1').text(vm.pay_value);
    };

function serious_detail() {
    const vm = app_1.apidata.serious_data;
    const age = app_1.age;
    const serious = app_1.serious;
    const src1 = `/static/assets/images/prot/serious/${vm.serious_pic1}.JPG`;
    const src2 = `/static/assets/images/prot/serious/${vm.serious_pic2}.JPG`;
    if(vm.serious_value =="50"){$(".serious_lv1").show();$(".serious_lv2").hide();$(".serious_lv3").hide();}
    if(vm.serious_value =="250"){$(".serious_lv1").show();$(".serious_lv2").show();$(".serious_lv3").hide();}
    if(vm.serious_value =="500"){$(".serious_lv1").show();$(".serious_lv2").show();$(".serious_lv3").show();}

    $("#myserious1").attr("src", src1);
    $("#myserious2").attr("src", src2);
    $('.myserious_age').text(age.toString().padStart(2, '0'));
    $('#myserious_vaule2').text(serious);
    $('#myserious_vaule1').text(vm.serious_value+"萬元");

    };


function accident_detail() {
    const vm = app_1.apidata.life_data;
    const hosp = app_1.apidata.hosp_data.hosp_value;
    const age = app_1.age;
    const gender = app_1.gender;
    const mypay_year = app_1.mypay_year;
    const home_exp = app_1.home_exp;
    const mydebt = app_1.mydebt;

    const imgSrc = age < 16 ? "/static/assets/images/prot/accident/accident2.JPG" : "/static/assets/images/prot/accident/accident1.JPG";
    const value1 = age < 16 ? "61.5萬元" : `${vm.life_value.toLocaleString()}萬元`;
    const value2 = age < 16 ? "" : `${vm.life_value.toLocaleString()}萬元`;
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
    const vm = app_1.apidata.longcare_data;
    const age = app_1.age;
    const gender = app_1.gender;

    const value1 = `${vm.longcare_value.toLocaleString()}萬`;
    const value2 = `${vm.longcare_value.toLocaleString() - 1}萬`;

    $("#mylongcare_value1").text(value1);
    $("#mylongcare_value2").text(value2);
    $("#mylongcare_way").text(vm.longcare_way);
    $('#mylongcare_age').text(age.toString().padStart(2, '0'));
    $('#mylongcare_gender').text(gender);
    };


function life_detail() {
    const vm = app_1.apidata.life_data;
    const age = app_1.age;
    const gender = app_1.gender;
    const mypay_year = app_1.mypay_year;
    const home_exp = app_1.home_exp;
    const mydebt = app_1.mydebt;

    const imgSrc = age < 16 ? "/static/assets/images/prot/life/life2.JPG" : "/static/assets/images/prot/life/life1.JPG";
    const value1 = age < 16 ? "61.5萬元" : `${vm.life_value.toLocaleString()}萬元`;
    const value2 = age < 16 ? "" : `${vm.life_value.toLocaleString()}萬元`;
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


function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    modal.style.display = 'none';

}

function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    modal.style.display = 'block';

}


