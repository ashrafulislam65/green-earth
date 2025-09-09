const loadCategories = ()=>{
    fetch('https://openapi.programming-hero.com/api/categories')
    .then(res=>res.json())
    .then(data=>displayCategories(data.categories));
}
// load by click category
const loadCategoryTree = (id)=>{
    
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayCategoryTree(data.plants));

}
const displayCategoryTree = (trees)=>{
    
    const treeCardContainer = document.getElementById('tree-card-container');
    treeCardContainer.innerHTML = "";
    trees.forEach(tree => {
        console.log(tree);
        const card = document.createElement('div');
        card.innerHTML = `
         <div class="card bg-base-100 w-full lg:w-[270px] lg:h-[500px] px-[10px] py-[10px] shadow-sm">
                        <figure>
                            <img src="${tree.image}"
                                alt="Shoes" />
                        </figure>
                        <div class="">
                            <h2 class="font-bold text-xl py-2">
                                ${tree.name}
                            </h2>
                            <p class="pb-2">${tree.description}</p>

                            <div class="flex justify-between items-center">
                                <div class="badge mb-2 rounded-3xl bg-[#DCFCE7] text-[#15803D]">${tree.category}</div>
                                <div class="font-bold text-lg pb-2">"৳${tree.price}"</div>
                            </div>

                            <div class="w-11/12 btn rounded-3xl bg-[#15803D] text-[#FFFFFF]">Add to Cart</div>


                        </div>
                    </div>
        `;
        treeCardContainer.append(card);
        
    });

}
const displayCategories = (categories)=>{
    const categoriesContainer = document.getElementById('categories-container');
     categoriesContainer.innerHTML = "";
    
    for(let category of categories){
        
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `
             <button onclick="loadCategoryTree(${category.id})" class="w-full  lg:w-[230px] lg:h-[35px] pl-4 rounded text-left bg-[#15803d] text-[#ffffff] mb-2">${category.category_name}</button>
        `;
        
        categoriesContainer.append(categoryDiv);
        
    }
}
loadCategories();