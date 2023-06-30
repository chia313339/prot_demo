from flask import render_template
from flask import Flask, request, jsonify
import random

def index():
    return render_template('index.html')

def prot_api():
    data = request.get_json()  # 獲取 JSON 資料
    print(data)
    gender = data.get('gender') 
    area = data.get('area')
    age = int(data.get('age'))
    hosp_room = data.get('hosp_room')
    hosp_lv = data.get('hosp_lv')
    payasyougo = data.get('payasyougo')
    longcare = int(data.get('longcare'))
    longcare2 = int(data.get('longcare2'))
    home_exp = int(data.get('home_exp'))
    serious = data.get('serious')
    mydebt = int(data.get('mydebt'))
    mypay_year = int(data.get('mypay_year'))
    
    hosp_data = get_hosp(area, hosp_room, hosp_lv) # 住院
    operation_data = get_operation(age, gender) # 手術
    pay_data = get_pay(age, gender, payasyougo) #實支
    serious_data = get_serious(age, gender, serious) # 重疾
    longcare_data = get_longcare(longcare, longcare2) # 長照
    life_data = get_life(mydebt, mypay_year, home_exp, age) # 意外、壽險
    
    return jsonify(hosp_data=hosp_data, operation_data=operation_data, pay_data=pay_data, serious_data=serious_data, longcare_data=longcare_data, life_data=life_data)

def get_hosp(area, hosp_room, hosp_lv):
    hosp_value = 0
    hosp_pic1 = ''
    hosp_pic2 = ''
    if area == "北部" and hosp_room == "單人房":
        hosp_pic2 = 'N'
        if hosp_lv == "多數醫院":
            hosp_value = 5300
            hosp_pic1 = 'NS1'
        elif hosp_lv == "部分醫院":
            hosp_value = 3600
            hosp_pic1 = 'NS2'
        elif hosp_lv == "少數醫院":
            hosp_value = 3000
            hosp_pic1 = 'NS3'
    elif area == "北部" and hosp_room == "雙人房":
        hosp_pic2 = 'N'
        if hosp_lv == "多數醫院":
            hosp_value = 2500
            hosp_pic1 = 'ND1'
        elif hosp_lv == "部分醫院":
            hosp_value = 1800
            hosp_pic1 = 'ND2'
        elif hosp_lv == "少數醫院":
            hosp_value = 1600
            hosp_pic1 = 'ND3'
    elif area == "中部" and hosp_room == "單人房":
        hosp_pic2 = 'M'
        if hosp_lv == "多數醫院":
            hosp_value = 4500
            hosp_pic1 = 'MS1'
        elif hosp_lv == "部分醫院":
            hosp_value = 2500
            hosp_pic1 = 'MS2'
        elif hosp_lv == "少數醫院":
            hosp_value = 1900
            hosp_pic1 = 'MS3'
    elif area == "中部" and hosp_room == "雙人房":
        hosp_pic2 = 'M'
        if hosp_lv == "多數醫院":
            hosp_value = 2300
            hosp_pic1 = 'MD1'
        elif hosp_lv == "部分醫院":
            hosp_value = 1500
            hosp_pic1 = 'MD2'
        elif hosp_lv == "少數醫院":
            hosp_value = 1400
            hosp_pic1 = 'MD3'
    elif area == "南部" and hosp_room == "單人房":
        hosp_pic2 = 'S'
        if hosp_lv == "多數醫院":
            hosp_value = 4500
            hosp_pic1 = 'SS1'
        elif hosp_lv == "部分醫院":
            hosp_value = 3900
            hosp_pic1 = 'SS2'
        elif hosp_lv == "少數醫院":
            hosp_value = 3000
            hosp_pic1 = 'SS3'
    elif area == "南部" and hosp_room == "雙人房":
        hosp_pic2 = 'S'
        if hosp_lv == "多數醫院":
            hosp_value = 2000
            hosp_pic1 = 'SD1'
        elif hosp_lv == "部分醫院":
            hosp_value = 1600
            hosp_pic1 = 'SD2'
        elif hosp_lv == "少數醫院":
            hosp_value = 1400
            hosp_pic1 = 'SD3'
    elif area == "東部" and hosp_room == "單人房":
        hosp_pic2 = 'E'
        if hosp_lv == "多數醫院":
            hosp_value = 2400
            hosp_pic1 = 'ES1'
        elif hosp_lv == "部分醫院":
            hosp_value = 2000
            hosp_pic1 = 'ES2'
        elif hosp_lv == "少數醫院":
            hosp_value = 1700
            hosp_pic1 = 'ES3'
    elif area == "東部" and hosp_room == "雙人房":
        hosp_pic2 = 'E'
        if hosp_lv == "多數醫院":
            hosp_value = 1300
            hosp_pic1 = 'ED1'
        elif hosp_lv == "部分醫院":
            hosp_value = 1200
            hosp_pic1 = 'ED2'
        elif hosp_lv == "少數醫院":
            hosp_value = 1000
            hosp_pic1 = 'ED3'

    return {'hosp_value':hosp_value,'hosp_pic1':hosp_pic1,'hosp_pic2':hosp_pic2}

def get_operation(age, gender):
    operation_value = 0
    operation_pic1 = ''
    operation_pic2 = ''

    if age >= 0 and age <= 5 and gender == '男':
        operation_value = 1300
        operation_pic1 = '5A'
        operation_pic2 = '5B'
    elif age >= 6 and age <= 10 and gender == '男':
        operation_value = 1300
        operation_pic1 = '10A'
        operation_pic2 = '10B'       
    elif age >= 11 and age <= 15 and gender == '男':
        operation_value = 1300
        operation_pic1 = '15A'
        operation_pic2 = '15B'        
    elif age >= 16 and age <= 20 and gender == '男':
        operation_value = 1300
        operation_pic1 = '20A'
        operation_pic2 = '20B'        
    elif age >= 21 and age <= 25 and gender == '男':
        operation_value = 1300
        operation_pic1 = '25A'
        operation_pic2 = '25B'        
    elif age >= 26 and age <= 30 and gender == '男':
        operation_value = 1300
        operation_pic1 = '30A'
        operation_pic2 = '30B'        
    elif age >= 31 and age <= 35 and gender == '男':
        operation_value = 1300
        operation_pic1 = '35A'
        operation_pic2 = '35B'        
    elif age >= 36 and age <= 40 and gender == '男':
        operation_value = 2100
        operation_pic1 = '40A'
        operation_pic2 = '40B'        
    elif age >= 41 and age <= 45 and gender == '男':
        operation_value = 2100
        operation_pic1 = '45A'
        operation_pic2 = '45B'        
    elif age >= 46 and age <= 50 and gender == '男':
        operation_value = 2100
        operation_pic1 = '50A'
        operation_pic2 = '50B'        
    elif age >= 51 and age <= 55 and gender == '男':
        operation_value = 2100
        operation_pic1 = '55A'
        operation_pic2 = '55B'        
    elif age >= 56 and age <= 60 and gender == '男':
        operation_value = 2100
        operation_pic1 = '60A'
        operation_pic2 = '60B'        
    elif age >= 61 and gender == '男':
        operation_value = 1400
        operation_pic1 = '65A'
        operation_pic2 = '65B'
        
    elif age >= 0 and age <= 5 and gender == '女':
        operation_value = 1300
        operation_pic1 = '5A'
        operation_pic2 = '5B'        
    elif age >= 6 and age <= 10 and gender == '女':
        operation_value = 1200
        operation_pic1 = '10A'
        operation_pic2 = '10B'        
    elif age >= 11 and age <= 15 and gender == '女':
        operation_value = 1200
        operation_pic1 = '15A'
        operation_pic2 = '15B'        
    elif age >= 16 and age <= 20 and gender == '女':
        operation_value = 1500
        operation_pic1 = '20A'
        operation_pic2 = '20B'        
    elif age >= 21 and age <= 25 and gender == '女':
        operation_value = 1500
        operation_pic1 = '25A'
        operation_pic2 = '25B'        
    elif age >= 26 and age <= 30 and gender == '女':
        operation_value = 1500
        operation_pic1 = '30A'
        operation_pic2 = '30B'        
    elif age >= 31 and age <= 35 and gender == '女':
        operation_value = 1500
        operation_pic1 = '35A'
        operation_pic2 = '35B'        
    elif age >= 36 and age <= 40 and gender == '女':
        operation_value = 1500
        operation_pic1 = '40A'
        operation_pic2 = '40B'        
    elif age >= 41 and age <= 45 and gender == '女':
        operation_value = 1500
        operation_pic1 = '45A'
        operation_pic2 = '45B'        
    elif age >= 46 and age <= 50 and gender == '女':
        operation_value = 2100
        operation_pic1 = '50A'
        operation_pic2 = '50B'        
    elif age >= 51 and age <= 55 and gender == '女':
        operation_value = 2100
        operation_pic1 = '55A'
        operation_pic2 = '55B'        
    elif age >= 56 and age <= 60 and gender == '女':
        operation_value = 2100
        operation_pic1 = '60A'
        operation_pic2 = '60B'        
    elif age >= 61 and gender == '女':
        operation_value = 2100
        operation_pic1 = '65A'
        operation_pic2 = '65B'
		
    if gender == '男':
        operation_pic1 = 'M/'+operation_pic1
        operation_pic2 = 'M/'+operation_pic2
    else:
        operation_pic1 = 'F/'+operation_pic1
        operation_pic2 = 'F/'+operation_pic2
        
    return {'operation_value':operation_value,'operation_pic1':operation_pic1,'operation_pic2':operation_pic2}

def get_pay(age, gender, payasyougo):
    pay_value = ''
    pic = ''

    if payasyougo == "基礎方案":
        pay_value = "M10計畫"
    elif payasyougo == "進階方案":
        pay_value = "M20計畫"
    elif payasyougo == "豐富方案":
        pay_value = "M30計畫"

    if age >= 0 and age <= 4 and gender == '男':
        pic = 'M0'
    elif age >= 5 and age <= 9 and gender == '男':
        pic = 'M5'
    elif age >= 10 and age <= 14 and gender == '男':
        pic = 'M10'
    elif age >= 15 and age <= 19 and gender == '男':
        pic = 'M15'
    elif age >= 20 and age <= 24 and gender == '男':
        pic = 'M20'
    elif age >= 25 and age <= 29 and gender == '男':
        pic = 'M25'
    elif age >= 30 and age <= 34 and gender == '男':
        pic = 'M30'
    elif age >= 35 and age <= 39 and gender == '男':
        pic = 'M35'
    elif age >= 40 and age <= 44 and gender == '男':
        pic = 'M40'
    elif age >= 45 and age <= 49 and gender == '男':
        pic = 'M45'
    elif age >= 50 and age <= 54 and gender == '男':
        pic = 'M50'
    elif age >= 55 and age <= 59 and gender == '男':
        pic = 'M55'
    elif age >= 60 and age <= 64 and gender == '男':
        pic = 'M60'
    elif age >= 65 and age <= 69 and gender == '男':
        pic = 'M65'
    elif age >= 70 and age <= 74 and gender == '男':
        pic = 'M70'
    elif age >= 75 and gender == '男':
        pic = 'M70'
    elif age >= 0 and age <= 4 and gender == '女':
        pic = 'F0'
    elif age >= 5 and age <= 9 and gender == '女':
        pic = 'F5'
    elif age >= 10 and age <= 14 and gender == '女':
        pic = 'F10'
    elif age >= 15 and age <= 19 and gender == '女':
        pic = 'F15'
    elif age >= 20 and age <= 24 and gender == '女':
        pic = 'F20'
    elif age >= 25 and age <= 29 and gender == '女':
        pic = 'F25'
    elif age >= 30 and age <= 34 and gender == '女':
        pic = 'F30'
    elif age >= 35 and age <= 39 and gender == '女':
        pic = 'F35'
    elif age >= 40 and age <= 44 and gender == '女':
        pic = 'F40'
    elif age >= 45 and age <= 49 and gender == '女':
        pic = 'F45'
    elif age >= 50 and age <= 54 and gender == '女':
        pic = 'F50'
    elif age >= 55 and age <= 59 and gender == '女':
        pic = 'F55'
    elif age >= 60 and age <= 64 and gender == '女':
        pic = 'F60'
    elif age >= 65 and age <= 69 and gender == '女':
        pic = 'F65'
    elif age >= 70 and age <= 74 and gender == '女':
        pic = 'F70'
    elif age >= 75 and gender == '女':
        pic = 'F70'
		
    pay_pic1 = pic+'A'
    pay_pic2 = pic+'B'

    return {"pay_value": pay_value, "pay_pic1": pay_pic1, "pay_pic2": pay_pic2}

def get_serious(age, gender, serious):
    serious_value = ''
    pic = ''

    if serious == "基礎療程":
        serious_value = "50"
    elif serious == "進階療程":
        serious_value = "250"
    elif serious == "豐富療程":
        serious_value = "500"

    if age >= 0 and age <= 9 and gender == '男':
        pic = 'M0'
    elif age >= 10 and age <= 19 and gender == '男':
        pic = 'M10'
    elif age >= 20 and age <= 29 and gender == '男':
        pic = 'M20'
    elif age >= 30 and age <= 39 and gender == '男':
        pic = 'M30'
    elif age >= 40 and age <= 49 and gender == '男':
        pic = 'M40'
    elif age >= 50 and age <= 59 and gender == '男':
        pic = 'M50'
    elif age >= 60 and age <= 69 and gender == '男':
        pic = 'M60'
    elif age >= 70 and gender == '男':
        pic = 'M70'
    elif age >= 0 and age <= 9 and gender == '女':
        pic = 'F0'
    elif age >= 10 and age <= 19 and gender == '女':
        pic = 'F10'
    elif age >= 20 and age <= 29 and gender == '女':
        pic = 'F20'
    elif age >= 30 and age <= 39 and gender == '女':
        pic = 'F30'
    elif age >= 40 and age <= 49 and gender == '女':
        pic = 'F40'
    elif age >= 50 and age <= 59 and gender == '女':
        pic = 'F50'
    elif age >= 60 and age <= 69 and gender == '女':
        pic = 'F60'
    elif age >= 70 and gender == '女':
        pic = 'F70'

    serious_pic1 = pic+'A'
    serious_pic2 = pic+'B'

    return {"serious_value": serious_value, "serious_pic1": serious_pic1, "serious_pic2": serious_pic2}

def get_longcare(longcare, longcare2):
    longcare_value = 0
    longcare_way = ''

    if longcare == 1:
        longcare_way = '家人照護'
        if longcare2 == 1:
            longcare_value = 1
        elif longcare2 == 2:
            longcare_value = 2
        elif longcare2 == 3:
            longcare_value = 3
        elif longcare2 == 4:
            longcare_value = 4
        elif longcare2 == 5:
            longcare_value = 5
        elif longcare2 == 6:
            longcare_value = 6
        elif longcare2 == 7:
            longcare_value = 7
    elif longcare == 2:
        longcare_value = 7
        longcare_way = '本國籍看護'
    elif longcare == 3:
        longcare_value = 3
        longcare_way = '外國籍看護'
    elif longcare == 4:
        longcare_value = 2.5
        longcare_way = '社區日照中心'
    elif longcare == 5:
        longcare_value = 5.5
        longcare_way = '安養機構'

    return {"longcare_value": longcare_value + 1, "longcare_way": longcare_way}

def get_life(mydebt, mypay_year, home_exp, age):
    life_value = (mydebt + home_exp) * 12 * mypay_year

    if age < 16:
        return {"life_value": 61.5}
    elif age >= 16:
        return {"life_value": life_value}


