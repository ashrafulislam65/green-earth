const loadCategories = ()=>{
    fetch('https://openapi.programming-hero.com/api/categories')
    .then(res=>res.json())
    .then(data=>displayCategories(data.categories));
}
// manage spinner
const manageSpinner = (status)=>{
    if(status==true){
        document.getElementById('spinner').classList.remove('hidden');
        document.getElementById('tree-card-container').classList.add('hidden');

    }
    else{
        document.getElementById('spinner').classList.add('hidden');
        document.getElementById('tree-card-container').classList.remove('hidden');
    }

}
// load all trees
const loadAllTrees = ()=>{
    const url = `https://openapi.programming-hero.com/api/plants`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayAllTrees(data.plants));
}
const displayAllTrees = (trees)=>{
    const treeCardContainer = document.getElementById('tree-card-container');
    treeCardContainer.innerHTML = "";
    trees.forEach(trees => {
        
        const card = document.createElement('div');
        card.innerHTML = `
         <div class="card bg-base-100 w-full lg:w-[270px] lg:h-[500px] px-[10px] py-[10px] shadow-sm">
                        <figure>
                            <img src="${trees.image}"
                                alt="Shoes" />
                        </figure>
                        <div class="">
                            <h2 onclick="loadTreeDetails(${trees.id})" class="font-bold text-xl py-2">
                                ${trees.name}
                            </h2>
                            <p class="pb-2">${trees.description}</p>

                            <div class="flex justify-between items-center">
                                <div class="badge mb-2 rounded-3xl bg-[#DCFCE7] text-[#15803D]">${trees.category}</div>
                                <div class="font-bold text-lg pb-2">৳${trees.price}</div>
                            </div>

                            <div class="w-11/12 btn rounded-3xl bg-[#15803D] text-[#FFFFFF]">Add to Cart</div>


                        </div>
                    </div>
        `;
        treeCardContainer.append(card);
        
    });

}
loadAllTrees();
const clearActiveBtn = ()=>{
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach((btn)=> btn.classList.remove('bg-green-700', 'text-white'));
}
// load by click category
const loadCategoryTree = (id)=>{
    manageSpinner(true);
    
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        clearActiveBtn();
        const clickBtn = document.getElementById(`category-btn-${id}`);
        clickBtn.classList.add('bg-green-700', 'text-white');
        displayCategoryTree(data.plants)
    });

}
const loadTreeDetails = (id)=>{
    const url = `https://openapi.programming-hero.com/api/plant/${id}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTreeDetails(data.plants));
}
const displayTreeDetails = (tree)=>{
     
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerHTML = `
        <h3 class="text-lg font-bold">${tree.name}</h3>
        <img class="" src="${tree.image}" alt="">
        <p class="font-bold ">Category: ${tree.category}</p>
        <p class="font-semibold">Price: ${tree.price}</p>
        <p class="py-4">Description: ${tree.description}</p>
    `;
    document.getElementById('my_modal_5').showModal();
 }
const displayCategoryTree = (trees)=>{
    
    const treeCardContainer = document.getElementById('tree-card-container');
    treeCardContainer.innerHTML = "";
    trees.forEach(tree => {
        
        const card = document.createElement('div');
        card.innerHTML = `
         <div class="card bg-base-100 w-full lg:w-[270px] lg:h-[500px] px-[10px] py-[10px] shadow-sm">
                        <figure>
                            <img src="${tree.image}"
                                alt="Shoes" />
                        </figure>
                        <div class="">
                            <button onclick="loadTreeDetails(${tree.id})" class="font-bold text-xl py-2">
                                ${tree.name}
                            </button>
                            <p class="pb-2">${tree.description}</p>

                            <div class="flex justify-between items-center">
                                <div class="badge mb-2 rounded-3xl bg-[#DCFCE7] text-[#15803D]">${tree.category}</div>
                                <div class="font-bold text-lg pb-2">৳${tree.price}</div>
                            </div>

                            <div class="w-11/12 btn rounded-3xl bg-[#15803D] text-[#FFFFFF]">Add to Cart</div>


                        </div>
                    </div>
        `;
        treeCardContainer.append(card);
        
    });
    manageSpinner(false);

}
const displayCategories = (categories)=>{
    const categoriesContainer = document.getElementById('categories-container');
     categoriesContainer.innerHTML = "";
    
    for(let category of categories){
        
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `
             <button id="category-btn-${category.id}" onclick="loadCategoryTree(${category.id})" class="w-full  lg:w-[230px] lg:h-[35px] pl-4 rounded text-left  mb-2 category-btn">${category.category_name}</button>
        `;
        
        categoriesContainer.append(categoryDiv);
        
    }
}
loadCategories();