

function pageViewRanges (steps) {
  const oldPageViews = document.getElementById('page-views');
  const oldFee = document.getElementById('fee');
  const x = document.getElementById('switchState');  
  
  if (x.checked === false) {
    switch (true) {
      case (steps <= 20):
        oldPageViews.innerHTML = "10k pageviews";
        oldFee.innerHTML = "$8.00";
        break;

      case (steps <= 40):
        oldPageViews.innerHTML = "50k pageviews";
        oldFee.innerHTML = "$12.00";
        break;
      
      case (steps <= 60):
        oldPageViews.innerHTML = "100k pageviews";
        oldFee.innerHTML = "$16.00";
        break;
      
      case (steps <= 80):
        oldPageViews.innerHTML = "500k pageviews";
        oldFee.innerHTML = "$24.00";
        break;
      
      case (steps <= 100):
        oldPageViews.innerHTML = "1M pageviews";
        oldFee.innerHTML = "$36.00";
        break;
    }
  } else {
    switch (true) {
      case (steps <= 20):
        oldPageViews.innerHTML = "10k pageviews";
        oldFee.innerHTML = "$6.00";
        break;

      case (steps <= 40):
        oldPageViews.innerHTML = "50k pageviews";
        oldFee.innerHTML = "$9.00";
        break;
      
      case (steps <= 60):
        oldPageViews.innerHTML = "100k pageviews";
        oldFee.innerHTML = "$12.00";
        break;
      
      case (steps <= 80):
        oldPageViews.innerHTML = "500k pageviews";
        oldFee.innerHTML = "$18.00";
        break;
      
      case (steps <= 100):
        oldPageViews.innerHTML = "1M pageviews";
        oldFee.innerHTML = "$27.00";
        break;
    }
  }
  
}



/*var x = document.getElementById("myRange").value = 1;*/







/*

- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month

*/