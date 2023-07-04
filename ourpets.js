
const ourPets = [
    {
        key: 0,
        name: 'Katrine',
        type: 'Cat',
        species: 'British Shorthair',
        desctription: 'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
        img: 'png/pets/pets-katrine.png',
    },
    {
        key: 1,
        name: 'Jennifer',
        type: 'Dog',
        species: 'Labrador',
        desctription: 'Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.',
        img: 'png/pets/pets-jennifer.png',
    },
    {
        key: 2,
        name: 'Woody',
        type: 'Dog',
        species: 'Golden Retriever',
        desctription: 'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',
        img: 'png/pets/pets-woody.png',
    },
    {
        key: 3,
        name: 'Sophia',
        type: 'Dog',
        species: 'Shih tzu',
        desctription: 'Sophia here and I\'m looking for my forever home to live out the best years of my life. I am full of energy. Everyday I\'m learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.',
        img:'png/pets/pets-katrine-1.png',
    },
   
    {
        key: 4,
        name: 'Scarlett',
        type: 'Dog',
        species: 'Jack Russell Terrier',
        desctription: 'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',
        img: 'png/pets/pets-scarlet.png',
    },
   
    {
        key: 5,
        name: 'Timmy',
        type: 'Cat',
        species: 'British Shorthair',
        desctription: 'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.',
        img: 'png/pets/pets-timmy.png',
    },
    {
        key: 6,
        name: 'Freddie',
        type: 'Cat',
        species: 'British Shorthair',
        desctription: 'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.',
        img: 'png/pets/pets-katrine-2.png',
    },
    {
    
        key: 7,
        name: 'Charly',
        type: 'Dog',
        species: 'Jack Russell Terrier',
        desctription: 'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',
        img: 'png/pets/pets-charly.png',
    },
]

let ourPetsCards = document.querySelector('#pets-cards')



document.querySelector('#burger').addEventListener('click', function actionSideBar(){
    if(document.querySelector('#burger').style.transform == 'none'){
        document.querySelector('#burger').style.transform = 'rotate(90deg)'
        
        document.querySelector('#sidebar').style.height = '440px'
        document.querySelector('#nav-420px').style.opacity = '1'
        // document.querySelector('#burger-contain').style.backgroundColor= '#292929';
    }else{
        document.querySelector('#burger').style.transform = 'none'
        
        document.querySelector('#nav-420px').style.opacity = '0'
        document.querySelector('#sidebar').style.height = '0px'
        document.querySelector('#burger-contain').style.backgroundColor= 'inherit';
    }
})

const petSlider = ourPets.slice()


function createOurPetsCard(){
    petSlider.map((i)=>{
            let card = document.createElement('div');
            card.className = 'pet-card';
            ourPetsCards.append(card);
            let eachCard = document.querySelectorAll('.pet-card');
            let img = document.createElement('img');
            let namePet = document.createElement('p');
            let btn = document.createElement('button');
          
         
    
            eachCard.forEach((e)=>{
                e.append(img);
                e.append(namePet);
                e.append(btn);
                img.setAttribute('src', `${i.img}`);
                namePet.innerHTML = `${i.name}`
                btn.innerHTML = 'Learn more'
                btn.className = 'btn modal-open'
                btn.id = `${i.key}`
                // btn.className = ''
                // console.log(pets.indexOf(i))
        
            })
              
        })
     
    
    }
    createOurPetsCard()


    // модалка
    const modals =  document.querySelector('.modals')



    const modalsOverlay = document.createElement('div');
    modalsOverlay.className = 'modal-overlay';
    document.body.append(modalsOverlay);
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    
    const modalOpen = document.querySelectorAll(".modal-open");
    console.log(modalOpen)
    
    modalOpen.forEach((e)=>{e.addEventListener('click', ()=>{
        modals.style.display = 'flex'
        modalsOverlay.style.display = 'flex'
        modals.append(modal);
    
         modal.innerHTML = `
         <img src = ${ourPets[e.id].img} width="230px" height="260px">
         <div id="modal-info">
         <p>Name: ${ourPets[e.id].name}</p>
         <p>Type: ${ourPets[e.id].type}</p>
         <p>Species: ${ourPets[e.id].species}</p>
         <p>Desctription: ${ourPets[e.id].desctription}</p>
         </div>
         `
     
    })
    })
    
    document.querySelector(".modal-overlay").addEventListener('click', ()=>{
        if(modals.style.display == 'flex'){
            modals.style.display = 'none'
            modalsOverlay.style. display = 'none'
        }
    })