import React from 'react';

function plan(city, start_date, end_date) {
    this.city = city;
    this.start_date = start_date;
    this.end_date = end_date;
}


const nyPlan = new plan("new york", "07/19/2019", "07/26/2019");
const laPlan = new plan("los angeles", "06/21/2019", "06/26/2019");
const sfPlan = new plan("san francisco", "06/29/2019", "07/06/2019");
const stPlan = new plan("seattle", "07/1/2019", "07/2/2019");
const sdPlan = new plan("san diego", "06/26/2019", "06/29/2019");
const chPlan = new plan("chicago", "06/30/2019", "07/01/2019");

export const myPlans = [];

myPlans.push(nyPlan);
myPlans.push(laPlan);
myPlans.push(sfPlan);
myPlans.push(stPlan);
myPlans.push(sdPlan);
myPlans.push(chPlan);



export default {
    myPlans,
}
