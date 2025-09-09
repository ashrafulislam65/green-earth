const loadCategories = ()=>{
    fetch('https://openapi.programming-hero.com/api/categories')
    .then(res=>res.json())
    .then(data=>displayCategories(data.categories));
}
const displayCategories = (categories)=>{
    const categoriesContainer = document.getElementById('categories-container');
     categoriesContainer.innerHTML = "";
    
    for(let category of categories){
        
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `
             <button class="lg:w-[230px] lg:h-[35px] pl-4 rounded text-left bg-[#15803d] text-[#ffffff] mb-2">${category.category_name}</button>
        `;
        
        categoriesContainer.append(categoryDiv);
        
    }
}
loadCategories();