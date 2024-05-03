let categories=[
    {
        id:1,
        name:"homme",
        parent_id:0
    },
    {
        id:2,
        name:"chaussure homme",
        parent_id:1
    },
    {
        id:3,
        name:"veste homme",
        parent_id:1
    },
    {
        id:4,
        name:"femme",
        parent_id:0
    },
    {
        id:5,
        name:"costume",
        parent_id:3
    },
    {
        id:6,
        name:"robe",
        parent_id:4
    },
    {
        id:7,
        name:"collier",
        parent_id:4
    }
]
var current_parent=null;

var cate_choosed=null;



function openPopup(){
    let pop= document.getElementById("popup-parent");
        pop.classList.remove("hidden");

    if(cate_choosed){
        console.log({cate_choosed})
        displaySubCategorie(cate_choosed);
    }else{
        displayCategorie(getFirstCategories());
    }
   
}




function closePopup(){
    let pop= document.getElementById("popup-parent");
    pop.classList.add("hidden");
}



function chooseCategorie(){
    cate_choosed=current_parent;
    let el= document.getElementById("cate-choosed");
    el.innerText=cate_choosed.name;
    closePopup();
}


function displaySubCategorie(cateParent){
    let cates=[];
    for(let i=0;i<categories.length;i++){
        let cate=categories[i];
        if(cate.parent_id==cateParent.id){
            cates.push(cate);
        }
    }
    displayCategorie(cates,cateParent);
    console.log({current_parent});
   
}
function displayPreviousCategorie(){
   
    let cateParent=getParentOfCate(current_parent);
    if(cateParent){
        let cates=[];
        for(let i=0;i<categories.length;i++){
            let cate=categories[i];
            if(cate.parent_id==cateParent.id){
                cates.push(cate);
            }
        }
        displayCategorie(cates,cateParent);
    }else{
        displayCategorie(getFirstCategories());
    }
    
   
}

function displayCategorie(categories,cateParent){
    let list= document.getElementById("list");
    current_parent=cateParent;

    list.innerHTML="";

    if(cateParent){
        let element=document.createElement("span");
        element.innerText=cateParent.name;
        element.classList.add("parent");
        element.onclick=function(){
            displayPreviousCategorie();
        }
        list.appendChild(element);
    }
   
    for(let i=0;i<categories.length;i++){
        let cate=categories[i];
        let element=document.createElement("span");
        element.innerText=cate.name;
        element.onclick=function(){
            displaySubCategorie(cate);
        }
        list.appendChild(element);
    }
}

function getFirstCategories(){
    let cates=[];
    for(let i=0;i<categories.length;i++){
        let cate=categories[i];
        if(cate.parent_id==0){
            cates.push(cate);
        }
    }
    return cates;
}

function getParentOfCate(categorie){
    let parent=null;
    for(let i=0;i<categories.length;i++){
        let cate=categories[i];
        if(cate.id==categorie.parent_id){
            parent=cate;
            break;
        }
    }
    return parent;
}

