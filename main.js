var sum = items.reduce((a, b) => a + b.price, 0) 
{
   avg = sum/items.length
}console.log(avg)
document.querySelector("#answer1").innerHTML = `The avg of all prices is $${avg.toFixed(2)}`

var arr = items.filter(item => item.price > 14.00 && item.price < 18.00)
var names = arr.map(title=>title.title).join("\n") 
console.log(arr)
document.querySelector("#answer2").innerHTML = `${names}`

var cc = items.filter(item => item.currency_code=== 'GBP')
.map(name =>`${name.title} costs &#163;${name.price}`)
document.querySelector("#answer3").innerHTML = `${cc}`   

var wd = items.filter(item => item.materials.includes('wood'))
.map(name => `${name.title}`).join("\n")
document.querySelector("#answer4").innerHTML = `${wd}`

var result = items.filter(item => item.materials.length > 8)
.map(item => `${item.title}, ${item.quantity}, <li>${item.materials}</li>`).join('\n')
document.querySelector("#answer5").innerHTML = `${result}`

var sell = items.filter(item =>item.who_made === ('i_did'))
.map(item => `${item.who_made}`) 
{
   sell.length
}
document.querySelector("#answer6").innerHTML = `${sell.length} were made by there sellers`
