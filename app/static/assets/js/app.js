
const app = Vue.createApp({
    data(){
        return{
            gender: "男",
            job: "內勤人員",
            area: "北部",
            age: "30",
            hosp_room: '單人房',
            hosp_lv: '多數病房',
            payasyougo: '10',
            longcare: '1',
            longcare2: '1',
            home_exp: '1',
            serious:'300',
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
                {title: "100萬", value: "1"},
                {title: "200萬", value: "2"},
                {title: "300萬", value: "3"},
                {title: "400萬", value: "4"},
                {title: "500萬", value: "5"},
                {title: "600萬", value: "6"},
                {title: "700萬", value: "7"},
                {title: "800萬", value: "8"},
                {title: "900萬", value: "9"},
                {title: "1000萬含以上", value: "10"},
            ],
            pay_year: [
                {title: "5年", value: "5"},
                {title: "6年", value: "6"},
                {title: "7年", value: "7"},
                {title: "8年", value: "8"},
                {title: "9年", value: "9"},
                {title: "10年", value: "10"},
                {title: "11年", value: "11"},
                {title: "12年", value: "12"},
                {title: "13年", value: "13"},
                {title: "14年", value: "14"},
                {title: "15年", value: "15"}
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
        age_check_under15(){
            return this.age<=15
        },
        age_check_under25(){
            return this.age<25
        },
        age_check_between1624(){
            return (this.age>=16 & this.age<25)
        },
        age_check_over24(){
            return this.age>24
        },
        prot_hosp(){
            let result = 0;
            let pic = '';
            if(this.area == "北部" & this.hosp_room == "單人房"){
                if(this.hosp_lv == "多數病房"){result = 6500; pic = 'NS1';}
                if(this.hosp_lv == "部分病房"){result = 4000; pic = 'NS2';}
                if(this.hosp_lv == "基本病房"){result = 2500; pic = 'NS3';}
                } 
            if(this.area == "北部" & this.hosp_room == "雙人房"){
                    if(this.hosp_lv == "多數病房"){result = 2700; pic = 'ND1';}
                    if(this.hosp_lv == "部分病房"){result = 2000; pic = 'ND2';}
                    if(this.hosp_lv == "基本病房"){result = 1600; pic = 'ND3';}
                }
            if(this.area == "中部" & this.hosp_room == "單人房"){
                if(this.hosp_lv == "多數病房"){result = 4500; pic = 'MS1';}
                if(this.hosp_lv == "部分病房"){result = 2500; pic = 'MS2';}
                if(this.hosp_lv == "基本病房"){result = 1900; pic = 'MS3';}
                } 
            if(this.area == "中部" & this.hosp_room == "雙人房"){
                    if(this.hosp_lv == "多數病房"){result = 2300; pic = 'MD1';}
                    if(this.hosp_lv == "部分病房"){result = 1500; pic = 'MD2';}
                    if(this.hosp_lv == "基本病房"){result = 1400; pic = 'MD3';}
                }
            if(this.area == "南部" & this.hosp_room == "單人房"){
                if(this.hosp_lv == "多數病房"){result = 4500; pic = 'SS1';}
                if(this.hosp_lv == "部分病房"){result = 3900; pic = 'SS2';}
                if(this.hosp_lv == "基本病房"){result = 3000; pic = 'SS3';}
                }
            if(this.area == "南部" & this.hosp_room == "雙人房"){
                    if(this.hosp_lv == "多數病房"){result = 2000; pic = 'SD1';}
                    if(this.hosp_lv == "部分病房"){result = 1600; pic = 'SD2';}
                    if(this.hosp_lv == "基本病房"){result = 1400; pic = 'SD3';}
                }
            if(this.area == "東部" & this.hosp_room == "單人房"){
                if(this.hosp_lv == "多數病房"){result = 2400; pic = 'ES1';}
                if(this.hosp_lv == "部分病房"){result = 2000; pic = 'ES2';}
                if(this.hosp_lv == "基本病房"){result = 1700; pic = 'ES3';}
                }
            if(this.area == "東部" & this.hosp_room == "雙人房"){
                    if(this.hosp_lv == "多數病房"){result = 1300; pic = 'ED1';}
                    if(this.hosp_lv == "部分病房"){result = 1200; pic = 'ED2';}
                    if(this.hosp_lv == "基本病房"){result = 800; pic = 'ED3';}
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

            if (this.age >= 0 & this.age <= 5 & this.gender == '女') { result = 1200; pic1 = '5A'; pic2 = '5B'; gender =  'F'}
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
            if (this.payasyougo == 10 ) { result = "M10計畫"; pic = "10" }
            if (this.payasyougo == 20 ) { result = "M20計畫"; pic = "20" }
            if (this.payasyougo == 30 ) { result = "M30計畫"; pic = "30" }
            return {value:result, pic:pic, gender:this.gender}
        },
        prot_serious(){
            let result = 0;
            if (this.serious == 300 ) { result = 300 }
            if (this.serious == 500 ) { result = 500 }
            let tmp = this.age; tmp2 = this.gender;
            if (tmp >= 70){ tmp = 70}
            if (tmp2 == "男"){ tmp2 = "M"}
            if (tmp2 == "女"){ tmp2 = "F"}
            return {value:result, gender:tmp2, age:10*parseInt(tmp/10)}
        },
        prot_longcare(){
            let result = 0;
			let s1 = this.longcare;
			let s2 = this.longcare2;
            if (s1 == 1 ) {
                if(s2 == 1) {result = 1}
                if(s2 == 2) {result = 2}
                if(s2 == 3) {result = 3}
                if(s2 == 4) {result = 4}
                if(s2 == 5) {result = 5}
                if(s2 == 6) {result = 6}
                if(s2 == 7) {result = 7}
            }
            if (s1 == 2 ) {result = 7}
            if (s1 == 3 ) {result = 3}
            if (s1 == 4 ) {result = 2.5}
            if (s1 == 5 ) {result = 5.5}
            if(result+1 < 3.5){ return {value:3.5} }
            return {value:result+1}
        },
        prot_life(){
            let debt = parseInt(this.mydebt);
            let y = parseInt(this.mypay_year);
            let exp = parseInt(this.home_exp);
            let result = debt*100 + (y * exp * 12);
            let age = this.age
            if (age < 16) { return {value:61.5, age:this.age }}
            if (age >= 16 & age<=24) { return {value:300, age:this.age } }
            if (age > 16 & result < 300 ) { return {value:300, age:this.age } }
            return {value:result.toLocaleString(), age:this.age}
        },

    },
    mounted(){
        window.app_1 = this
    },
});
app.mount("#app")


function hosp_detail(){
    let vm = app_1.prot_hosp
    // console.log(vm)
    $("#myhosp").attr("src", "/static/assets/images/prot/hosp/"+vm.pic+".JPG");
}

function operation_detail(){
    let vm = app_1.prot_operation
    // console.log(vm)
    $("#myoperation1").attr("src", "/static/assets/images/prot/operation/"+vm.gender+"/"+vm.pic1+".JPG");
    $("#myoperation2").attr("src", "/static/assets/images/prot/operation/"+vm.gender+"/"+vm.pic2+".JPG");
}

function pay_detail(){
    let vm = app_1.prot_pay
    // console.log(vm)
    if(vm.gender == "男"){ $("#mypay1").attr("src", "/static/assets/images/prot/pay/M"+vm.pic+".JPG");  }
    if(vm.gender == "女"){ $("#mypay1").attr("src", "/static/assets/images/prot/pay/F"+vm.pic+".JPG");  }
    $("#mypay2").attr("src", "/static/assets/images/prot/pay/PAY.JPG");
}

function serious_detail(){
    let vm = app_1.prot_serious
    // console.log(vm)
    $("#myserious").attr("src", "/static/assets/images/prot/serious/"+vm.value+"/"+vm.gender+vm.age+".JPG");
}

function accident_detail(){
    let vm = app_1.prot_life
    if(vm.age <16){ $("#myaccident").attr("src", "/static/assets/images/prot/accident/accident1.JPG"); $('#myaccident_value').text("61.5") }
    if(vm.age >=16 & vm.age <=24){ $("#myaccident").attr("src", "/static/assets/images/prot/accident/accident2.JPG"); $('#myaccident_value').text(vm.value.toLocaleString()) }
    if(vm.age >24){ $("#myaccident").attr("src", "/static/assets/images/prot/accident/accident3.JPG"); $('#myaccident_value').text(vm.value.toLocaleString()) }
    // console.log(vm)
    
}

function longcare_detail(){
    let vm = app_1.prot_longcare
    // console.log(vm)
    $("#mylongcare").attr("src", "/static/assets/images/prot/longcare/longcare.JPG");
    $('#mylongcare_value').text(vm.value.toLocaleString()) ;
}

function life_detail(){
    let vm = app_1.prot_life
    // console.log(vm)
    if(vm.age <16){ $("#mylife").attr("src", "/static/assets/images/prot/life/life1.JPG"); $('#mylife_value').text("61.5") }
    if(vm.age >=16 & vm.age <=24){ $("#mylife").attr("src", "/static/assets/images/prot/life/life2.JPG"); $('#mylife_value').text(vm.value.toLocaleString()) }
    if(vm.age >24){ $("#mylife").attr("src", "/static/assets/images/prot/life/life3.JPG"); $('#mylife_value').text(vm.value.toLocaleString()) }
}