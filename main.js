var now = new Date()

var year = now.getFullYear()
var month = now.getMonth() + 1 // month 从 0 开始
var day = now.getDate()

//console.log(year,month,day)
// 看看获取的时间对不对


// 这个月1号是星期几？

var weekdayOfFirst 

var tempDate = new Date()
tempDate.setDate(1) // 这个月1号

weekdayOfFirst = tempDate.getDay()

//console.log(weekdayOfFirst) // 对的，星期三

//所以我们需要在1号前面补两天

// 我们用一个数组表示我们要显示的天

var days = []

// 显然这个月的所有天，都要被包含到 days 里
// 还是用 while 吧

var t = new Date()
var n = 1
t.setDate(n)

while(t.getMonth() + 1 === month) {
  days.push(new Date(t))
  n += 1
  t.setDate(n)
}

//console.log(days) 
// 看看我们有没有把这个月所有日期包含进来
// 三月 1 ~ 31 都在

//接下来要在前面加2天，这个2是怎么来的？
//因为这个月1号是星期3，所以3-1=2

for(var i=1; i< weekdayOfFirst; i++){
  //i === 1,2
  //days.push() 
  //不能用 push，要用 unshift，才能放在前面
  var d = new Date()
  d.setDate(-i+1)// d.setDate(0) 表示上个月的最后一天
  days.unshift(d) 
}

// console.log(days) 
// 看看

//接下来我们要在后面补齐，因为我们要展示 6 * 7 =
//42 天

// 需要补齐的天数
var left = 42 - days.length

for(var i=0; i< left; i++){
  var d = new Date()
  d.setMonth(d.getMonth()+1)
  //d.setDate(0) // 这个月的最后一天
  //d.setDate(1) // 下个月的第一天
  d.setDate(i+1) // 下个月的第 i + 1 天
  days.push(d)
}
//console.log(days) 
// 看看，是对的，那么接下来就是
//把 days 填充到页面

var eDays = document.querySelector('.days')

eDays.innerHTML = ''
// 我们要用 JS 写 li

var li
for(var i = 0; i< days.length; i++){
  li = document.createElement('li')
  li.innerText = days[i].getDate()
  //我们要区分上个月、这个月和下个月的li
  if(days[i].getMonth() < new Date().getMonth()){
    li.className = 'prevMonth'
  }else if(days[i].getMonth() > new Date().getMonth()){
    li.className = 'nextMonth'
  }
  eDays.appendChild(li)
}

