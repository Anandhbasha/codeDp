
// let newdiv = document.createElement("div")
// let btn = document.createElement("button")
// btn.innerHTML = "Click"
// btn.setAttribute("id","btn")
// btn.style.fontSize = "1.75em"
// btn.style.fontWeight = "bold"
// btn.style.backgroundColor = "red"
// newdiv.appendChild(btn)
// document.body.append(newdiv)


let data = [
    {
        id:1,
        name:"Bala",
        Age:22
    },
    {
       id:2,
        name:"Rithvik",
        Age:21 
    },
    {
       id:3,
        name:"Kavin",
        Age:20
    }
]
let keys = Object.keys(data[0])

data.map((item)=>{
    const value = Object.values(item)
    value.map((ite)=>{
        console.log(ite);
        
    })
    
})



let table = document.createElement("table")
let thead = document.createElement("thead")
let tbody = document.createElement("tbody")
keys.map((item)=>{
    let th = document.createElement("th")
    th.innerHTML = item
    thead.appendChild(th)
})
data.map((item)=>{
    let tr = document.createElement("tr")
    // [1,Bala,22] 
    Object.values(item).map((x)=>{
        let td = document.createElement("td")
        td.innerHTML = x
        tr.appendChild(td)
    })
    tbody.appendChild(tr)
})

document.body.append(table)
table.appendChild(thead)
table.appendChild(tbody)


