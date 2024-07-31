indian_states = {
    "andhra pradesh": {
        "capital": "Amaravati",
        "largest_city": "Visakhapatnam",
        "population": 49506799,
        "area_sq_km": 162968,
        "official_language": "Telugu"
    },
    "arunachal pradesh": {
        "capital": "Itanagar",
        "largest_city": "Itanagar",
        "population": 1383727,
        "area_sq_km": 83743,
        "official_language": "English"
    },
    "assam": {
        "capital": "Dispur",
        "largest_city": "Guwahati",
        "population": 35607039,
        "area_sq_km": 78438,
        "official_language": "Assamese"
    },
    "bihar": {
        "capital": "Patna",
        "largest_city": "Patna",
        "population": 124799926,
        "area_sq_km": 94163,
        "official_language": "Hindi"
    },
    "chhattisgarh": {
        "capital": "Raipur",
        "largest_city": "Raipur",
        "population": 29436231,
        "area_sq_km": 135194,
        "official_language": "Hindi"
    },
    "goa": {
        "capital": "Panaji",
        "largest_city": "Vasco da Gama",
        "population": 1586250,
        "area_sq_km": 3702,
        "official_language": "Konkani"
    },
    "gujarat": {
        "capital": "Gandhinagar",
        "largest_city": "Ahmedabad",
        "population": 63872399,
        "area_sq_km": 196024,
        "official_language": "Gujarati"
    },
    "haryana": {
        "capital": "Chandigarh",
        "largest_city": "Faridabad",
        "population": 28941133,
        "area_sq_km": 44212,
        "official_language": "Hindi"
    },
    "himachal pradesh": {
        "capital": "Shimla",
        "largest_city": "Shimla",
        "population": 7309180,
        "area_sq_km": 55673,
        "official_language": "Hindi"
    },
    "jharkhand": {
        "capital": "Ranchi",
        "largest_city": "Jamshedpur",
        "population": 38593948,
        "area_sq_km": 79716,
        "official_language": "Hindi"
    },
    "karnataka": {
        "capital": "Bangalore",
        "largest_city": "Bangalore",
        "population": 67562686,
        "area_sq_km": 191791,
        "official_language": "Kannada"
    },
    "kerala": {
        "capital": "Thiruvananthapuram",
        "largest_city": "Thiruvananthapuram",
        "population": 35699443,
        "area_sq_km": 38863,
        "official_language": "Malayalam"
    },
    "madhya pradesh": {
        "capital": "Bhopal",
        "largest_city": "Indore",
        "population": 85358965,
        "area_sq_km": 308350,
        "official_language": "Hindi"
    },
    "maharashtra": {
        "capital": "Mumbai",
        "largest_city": "Mumbai",
        "population": 123174918,
        "area_sq_km": 307713,
        "official_language": "Marathi"
    },
    "manipur": {
        "capital": "Imphal",
        "largest_city": "Imphal",
        "population": 3091545,
        "area_sq_km": 22327,
        "official_language": "Meiteilon"
    },
    "meghalaya": {
        "capital": "Shillong",
        "largest_city": "Shillong",
        "population": 3366710,
        "area_sq_km": 22429,
        "official_language": "English"
    },
    "mizoram": {
        "capital": "Aizawl",
        "largest_city": "Aizawl",
        "population": 1239244,
        "area_sq_km": 21081,
        "official_language": "Mizo"
    },
    "nagaland": {
        "capital": "Kohima",
        "largest_city": "Dimapur",
        "population": 2249695,
        "area_sq_km": 16579,
        "official_language": "English"
    },
    "odisha": {
        "capital": "Bhubaneswar",
        "largest_city": "Bhubaneswar",
        "population": 46356334,
        "area_sq_km": 155707,
        "official_language": "Odia"
    },
    "punjab": {
        "capital": "Chandigarh",
        "largest_city": "Ludhiana",
        "population": 30141373,
        "area_sq_km": 50362,
        "official_language": "Punjabi"
    },
    "rajasthan": {
        "capital": "Jaipur",
        "largest_city": "Jaipur",
        "population": 81032689,
        "area_sq_km": 342239,
        "official_language": "Hindi"
    },
    "sikkim": {
        "capital": "Gangtok",
        "largest_city": "Gangtok",
        "population": 690251,
        "area_sq_km": 7096,
        "official_language": "Nepali"
    },
    "tamil nadu": {
        "capital": "Chennai",
        "largest_city": "Chennai",
        "population": 77841267,
        "area_sq_km": 130058,
        "official_language": "Tamil"
    },
    "telangana": {
        "capital": "Hyderabad",
        "largest_city": "Hyderabad",
        "population": 39362732,
        "area_sq_km": 112077,
        "official_language": "Telugu"
    },
    "tripura": {
        "capital": "Agartala",
        "largest_city": "Agartala",
        "population": 4169794,
        "area_sq_km": 10486,
        "official_language": "Bengali"
    },
    "uttar pradesh": {
        "capital": "Lucknow",
        "largest_city": "Kanpur",
        "population": 237882725,
        "area_sq_km": 243286,
        "official_language": "Hindi"
    },
    "uttarakhand": {
        "capital": "Dehradun",
        "largest_city": "Dehradun",
        "population": 11082791,
        "area_sq_km": 53483,
        "official_language": "Hindi"
    },
    "west bengal": {
        "capital": "Kolkata",
        "largest_city": "Kolkata",
        "population": 99609303,
        "area_sq_km": 88752,
        "official_language": "Bengali"
    }
}



// events and data handling....

let input =  document.querySelector("input")
let btn = document.querySelector("button")
let resultDiv = document.querySelector('#result')

btn.addEventListener('click',()=>{

let InnerHtml =''
let StateName =  document.querySelector("input").value

const state = indian_states[StateName]


if(!state){
 InnerHtml=`<h3>Opps ${StateName} not found in my dataBase...</h3>`
}else{

 InnerHtml = `

          <h3> Result for ${StateName}  <i class="ri-bubble-chart-line"></i></h3>
           <h4><i class="ri-corner-down-right-line"></i>capital : ${state.capital}</h4>
           <h4><i class="ri-corner-down-right-line"></i>largest city : ${state.largest_city}</h4>
           <h4><i class="ri-corner-down-right-line"></i>population : ${state.population}</h4>
           <h4><i class="ri-corner-down-right-line"></i>area sqKm : ${state.area_sq_km}</h4>
           <h4><i class="ri-corner-down-right-line"></i>official langugae : ${state.official_language}</h4>

 `
}

 resultDiv.innerHTML= InnerHtml
    
})