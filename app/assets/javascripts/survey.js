$(() => {
  loadSurveys();
});

let categories = [];

var surveyJSON = { "pages": [{ "name": "yard", "elements": [{ "type": "radiogroup", "name": "lawn_size", "title": "Will you choose to reduce the size of your lawn?", "choices": ["yes", "no"], "colCount": 2 }, { "type": "radiogroup", "name": "mower_type", "title": "Do you use a gas mower?", "choices": ["yes", "no"], "colCount": 2 }, { "type": "radiogroup", "name": "mower_switch", "visibleIf": "{mower_type} = \"yes\"", "title": "Will you choose to switch away from a gas mower?", "choices": ["yes", "no"], "colCount": 2 }, { "type": "radiogroup", "name": "mowing_frequency", "visibleIf": "{mower_type} = \"yes\"", "title": "Will you choose to mow your lawn less in the summer?", "choices": ["yes", "no"], "colCount": 2 }, { "type": "radiogroup", "name": "fertilizer", "title": "Do you use fertilizer on your yard?", "choices": ["yes", "no"], "colCount": 2 }, { "type": "radiogroup", "name": "fertilizer_frequency", "visibleIf": "{fertilizer} = \"yes\"", "title": "Will you choose to reduce you fertilizer applications this year?", "choices": ["yes", "no"], "colCount": 2 }, { "type": "radiogroup", "name": "leaf_cleanup", "title": "Do you use a gas blower to clean leaves?", "choices": ["yes", "no"], "colCount": 2 }, { "type": "radiogroup", "name": "leaf_cleanup_gas_blower_use", "visibleIf": "{leaf_cleanup} = \"yes\"", "title": "Will you choose to replace your gas blower?", "choices": ["yes", "no"], "colCount": 2 }], "title": "Yard / Landscaping" }, { "name": "weatherization", "elements": [{ "type": "radiogroup", "name": "weatherized", "title": "Is your home well insulated/weatherized?", "choices": ["yes", "no"], "colCount": 2 }, { "type": "radiogroup", "name": "energy_audit", "visibleIf": "{weatherized} = \"no\"", "title": "Will you choose to sign up for a free heating system assessment?", "choices": ["yes", "no"], "colCount": 2 }, { "type": "radiogroup", "name": "insulate_home", "visibleIf": "{weatherized} = \"no\"", "title": "Will you choose to better insulate your home?", "choices": ["yes", "no"], "colCount": 2 }, { "type": "radiogroup", "name": "install_programmable_thermostats", "title": "Will you choose to install programmable thermostats?", "choices": ["yes", "no"], "colCount": 2 }], "title": "Weatherization and Thermostats" }, { "name": "heating", "elements": [{ "type": "radiogroup", "name": "heating_system_type1", "title": "What type of heating system do you have?", "hasOther": true, "choices": ["oil furnace", "forced hot air", "baseboard water", "wood fireplace", "solar"] }, { "type": "radiogroup", "name": "insulate_home1", "title": "Will you choose to better insulate your home?", "choices": ["yes", "no"], "colCount": 2 }, { "type": "radiogroup", "name": "upgrade_heating_system", "title": "Will you choose to upgrade to a more efficient boiler/furnace?", "choices": ["yes", "no"], "colCount": 2 }, { "type": "radiogroup", "name": "install_heat_pump", "title": "Will you choose to switch from oil to heat pump?", "choices": ["yes", "no"], "colCount": 2 }], "title": "Heating and Cooling systems" }, { "name": "water", "elements": [{ "type": "radiogroup", "name": "water_heater_type", "title": "What type of water heater do you have in your home?", "choices": [{ "value": "storage_tank", "text": "Conventional Storage Tank " }, { "value": "tankless", "text": "Tankless (On-Demand)" }, { "value": "heat_pump", "text": "Heat Pump (Hybrid) " }, { "value": "solar", "text": "Solar Powered" }, { "value": "condensing", "text": "Condensing" }] }, { "type": "radiogroup", "name": "hot_water_assessment", "title": "Will you choose to sign up for a free hot water assessment?", "choices": ["yes", "no"], "colCount": 2 }, { "type": "radiogroup", "name": "replace_water_heater", "title": "Will you choose to replace your current water heater w/ heat pump?", "choices": ["yes", "no"], "colCount": 2 }], "title": "Water Heating" }, { "name": "solar", "elements": [{ "type": "radiogroup", "name": "solar_panels", "title": "Do you have a solar panel array?", "choices": ["yes", "no"] }, { "type": "radiogroup", "name": "solar_assessment", "visibleIf": "{solar_panels} = \"no\"", "title": "Will you choose to sign up for a free solar assessment?", "choices": ["yes", "no"] }, { "type": "radiogroup", "name": "question1", "visibleIf": "{solar_panels} = \"no\"", "title": "Will you choose to install a solar panel array?", "choices": ["yes", "no"] }], "title": "Solar Power" }, { "name": "lighting", "elements": [{ "type": "radiogroup", "name": "bulbs_incandescent", "title": "Do you have more than 10 incandescent/halogen bulbs in your home?", "choices": ["yes", "no"], "colCount": 2 }, { "type": "radiogroup", "name": "bulbs_fluorescent_cfl", "title": "Do you have more than 10 fluorescent/CFL bulbs in your home?", "choices": ["yes", "no"], "colCount": 2 }, { "type": "radiogroup", "name": "bulbs_swap", "title": "Will you choose to sign up for a free light bulb swap?", "choices": ["yes", "no"], "colCount": 2 }, { "type": "radiogroup", "name": "bulbs_replace_leds", "title": "Will you choose to replace your bulbs with LED bulbs", "choices": ["none", "some", "half", "all"], "colCount": 4 }], "title": "Lighting" }, { "name": "appliances", "elements": [{ "type": "radiogroup", "name": "appliances_refrigerator", "title": "Will you choose to upgrade to an Energy Star model refrigerator? ", "choices": ["I already use a Energy Star Product", "yes", "no"], "colCount": 3 }, { "type": "radiogroup", "name": "appliances_washer", "title": "Will you choose to upgrade to an Energy Star model washer? ", "choices": ["I already use a Energy Star Product", "yes", "no"], "colCount": 3 }, { "type": "radiogroup", "name": "cold_water_wash_loads", "title": "Will you choose to use replace hot water washes with cold washes?", "choices": ["no", "once per week", "twice per week", "three times per week"], "colCount": 4 }, { "type": "radiogroup", "name": "question2", "title": "Will you choose to use dry clothes by line or rack dry instead of a dryer?", "choices": ["no", "once per week", "twice per week", "three times per week"], "colCount": 4 }, { "type": "radiogroup", "name": "extra_refrigerator", "title": "Do you have an extra refrigerator?", "choices": ["yes", "no"], "colCount": 2 }, { "type": "radiogroup", "name": "extra_refrigerator_age", "visibleIf": "{extra_refrigerator} = \"yes\"", "title": "What is the age of your extra refrigerator?", "choices": [">20 years old", "15-20 years old", "10-15 years old", "0-10 years old"], "colCount": 4 }, { "type": "radiogroup", "name": "extra_refrigerator_pickup", "visibleIf": "{extra_refrigerator} = \"yes\"", "title": "Will you choose to sign up for a free extra refrigerator pick-up?", "choices": ["yes", "no"], "colCount": 2 }, { "type": "radiogroup", "name": "unplug_refrigerator", "visibleIf": "{extra_refrigerator} = \"yes\"", "title": "Will you choose to unplug your extra fridge temporarily?", "choices": ["yes", "no"], "colCount": 2 }, { "type": "radiogroup", "name": "smart_power_strips", "title": "Will you choose to install smart power strips to kill phantom loads?", "choices": ["yes", "no"], "colCount": 2 }, { "type": "radiogroup", "name": "question3", "title": "Will you choose to install an electricity monitor to find energy hogs?", "choices": ["yes", "no"], "colCount": 2 }], "title": "Home Appliances" }, { "name": "transportation", "elements": [{ "type": "rating", "name": "mileage_reduction", "title": "By how many miles are you willing to reduce the miles you travel by car/auto each year?", "rateMin": 0, "rateMax": 20000, "rateStep": 5000, "minRateDescription": "No reduction in mileage", "maxRateDescription": "reduction in mileage" }], "title": "Transportation" }], "showQuestionNumbers": "off" }

function loadSurveys() {
  surveyJSON.pages.map(page => {
    let categorySurvey = new Survey.Model(page);
    let categorySurveyDiv = $(`#${page.name}`)
    let categoryTabsDiv = $('.survey__category-tabs');
    let category = page.name;
    categories.push(category);

    categorySurveyDiv.Survey({
      model: categorySurvey,
      onComplete: saveCategoryResults,
      category
    });
    categoryTabsDiv.prepend(`<img id="${page.name}" src="/assets/images/${page.name}.png" class="survey__category-tab survey__category-tab-image" />`)
    styleSurveyDivs();
    categoryTabHandler();
  });
}

function styleSurveyDivs() {
  let surveyDivs = document.querySelectorAll('div.sv_body');
  surveyDivs.forEach(div => {
    div.style.border = '0'
  });
}

function saveCategoryResults(userResponse) {
  let responseData = {
    category: userResponse.category,
    data: userResponse.data
  }

  debugger;

  $("#surveyContainer").text(JSON.stringify(userResponse));
  $.post({
    url: '/responses',
    dataType: 'json',
    data: responseData,
  }).done(function (results) {
    console.log('results: ', results);

    debugger;
    $('.survey__points-user-total').text = JSON.stringify(results.data)

  })

  thankyouMessage(userResponse.category);
}

function categoryTabHandler() {
  $('img.survey__category-tab').on('click', function (event) {
    event.preventDefault();

    let categoryViewDiv = $(`div#${event.currentTarget.id}`);
    $('.survey__category-view').css('display', 'none');
    categoryViewDiv.css('display', 'inline');
    document.getElementById(event.currentTarget.id).classList.add('survey__category-tab-selected')
  })
}

function thankyouMessage(category) {
  category = category.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
  $('div.sv_body.sv_completed_page')[0].children[0].innerText = `Thanks for completing the ${category} category!`
}
