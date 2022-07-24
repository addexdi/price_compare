/* var itemTemplate = '<tr><td class="store"><strong>{{storename}}</strong></td><td class="price">Rs. {{price}}</td><td class="uri"><a target="_blank" href="{{uri}}">Go to Store</a></td></tr>';
var collection = '';

function OnSuccess(data) {
    // do something with the data
    var element = '';
    for (i = 0; i < data.count ; i++) {
    element = itemTemplate.replace(/{{storename}}/g, data.data[i].Seller_Name);
    element = element.replace(/{{price}}/g, data.data[i].Best_Price);
    element = element.replace(/{{uri}}/g, data.data[i].Uri);
    collection += element;    
    }
    $('#price-list').html(collection);
    
}
$.ajax({
    type: "GET",
    url: "http://www.pricetree.com/dev/api.ashx?pricetreeId=4334&apikey=7770AD31-382F-4D32-8C36-3743C0271699&v=1",
    dataType: "json",
    success: OnSuccess
});
*/
var request = require("request");

request("http://www.pricetree.com/dev/api.ashx?pricetreeId=11072&apikey=7770AD31-382F-4D32-8C36-3743C0271699", 
function(err, response, body) {
  console.log(body);
});