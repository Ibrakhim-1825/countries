let country = document.querySelector(".country-list")


const render = (arr , list ) => {

    arr.forEach(value => {
    let item = document.createElement("li")
    let img = document.createElement("img")
    let name = document.createElement("h2")
    let capital = document.createElement("p")
    let population = document.createElement("p")
    let id = document.createElement("span")   
    let btnBlock = document.createElement("div")
    let basket = document.createElement("button")
    let like =document.createElement("button")
    let more =document.createElement("button")
    
    item.className = "relative w-[350px] p-4 bg-slate-50 rounded - [10px] ml-[30px] shadow-lg"

    img.src = value.flag
    img.width = "100%"
    img.height = "190px"
    img.className = "w-[100%] h - [190px] rounded -[10px] mb-[10px] shadow-black-lg"


    name.textContent = "Country: " + value.name
    capital.textContent = "Capital: " + value.capital
    population.textContent = "Population: " + value.population
    id.className = "absolute top-0 left-[-50px] w-[50px] h-[50px] border -[5px] border-black-400 decoration-white-500 rounded-[50%] flex items-center justify-center bg-zinc-200 "
    id.textContent = value.id
    btnBlock.className ="flex items-end justify-between"
    like.textContent = "Like"
    like.className = " p-3 border - [1px] border-red-300 rounded-[50%] items-start justify-center"
    basket.textContent = "basket"
    basket.className = " p-3 border - [1px] border-red-300 rounded-[50%] items-start justify-center"
    more.textContent = "More"
    more.className = "p-3 border - [1px] border-red-300 rounded-[50%] items-start justify-center"
    
    
    

    

    name.className ="mb-[8px] text-center"
    capital.className ="mb-[8px] text-center"
    population.className ="mb-[8px] text-center"
    btnBlock.append(like , basket , more)
    item.append(img, name, capital, population, id ,btnBlock)
    list.append(item)
    });

}
render(countrys , country)

