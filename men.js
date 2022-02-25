import {navbar,footer} from './components/navbar.js'
let womenDiv = document.getElementById('navbarContainer')
let footerDiv = document.getElementById('footerPage')

womenDiv.innerHTML =navbar()
// footerDiv.innerHTML = footer()

// console.log('menjs')



let mensArr = [
    {
      image_url:
        "https://www.jcrew.com/s7-img-facade/AZ802_WT0002?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
      name: "Men's long-sleeve heart-pocket T-shirt",
      price: "1170",
      strikedoffprice: "2599",
      brandName:"Nike"
    },
    {
      image_url:
        "https://www.jcrew.com/s7-img-facade/AZ661_BK0001?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
      name: "Men's long-sleeve heart-pocket T-shirt ",
      price: "699",
      strikedoffprice:" 999",
      brandName:"adidas"
    },
    {
      image_url:
        "https://www.jcrew.com/s7-img-facade/AZ661_BL7256?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
      name: "Men's long-sleeve heart-pocket T-shirt ",
      price:" 945",
      strikedoffprice:" 2099",
      brandName:"reebok"
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FV8798/MEN_SWIM_SLIPPERS_FV8798_1.jpg.plp",
      name: "Men's long-sleeve heart-pocket T-shirt",
      price: "399",
      strikedoffprice:" 799",
      brandName:"Nike"
    },
    {
      image_url:
        "https://www.jcrew.com/s7-img-facade/AZ927_WQ6197?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
      name: "Men's long-sleeve heart-pocket T-shirt",
      price: "1620",
      strikedoffprice: "3599",
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FV7329/reebok_FV7329_1.jpg.plp ",
      name: " MEN'S REEBOK RUNNING ASTRO BOOSTER SHOES ",
      price: '1440',
      strikedoffprice: "3199",
      brandName:"reebok"
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GD8567/MEN_TRAINING_PANTS_GD8567_1.jpg.plp ",
      name: " MEN'S TRAINING WORKOUT READY ELITAGE PANTS ",
      price: '1999',
      strikedoffprice: "3199",
      brandName:"Nike"
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GQ8758/reebok_GQ8758_1.jpg.plp ",
      name: "MEN'S REEBOK TRAINING  POLO T-SHIRTS TEE  ",
      price:" 769",
      strikedoffprice:" 1099",
      brandName:"reebok"
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GP7180/reebok_GP7180_1.jpg.plp",
      name: "MEN'S REEBOK TRAINING WORKOUT  TEE  ",
      price: "1299",
      strikedoffprice: "1440",
      brandName:"Nike"
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX3924/reebok_EX3924_1.jpg.plp ",
      name: "MEN'S REEBOK SUPER SOFT FLIP SLIPPERS",
      price: "699",
      strikedoffprice: "999",
      brandName:"adidas"
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FW0343/reebok_FW0343_1.jpg.plp ",
      name: "MEN'S REEBOK RUNNING RUN SHOES  ",
      price: "1620",
      strikedoffprice: "3599",
      brandName:"reebok"
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX4285/reebok_EX4285_1.jpg.plp ",
      name: "MEN'S REEBOK RUNNING GENESIS RUNNER SHOES  ",
      price: "1620",
      strikedoffprice: "3599",
      brandName:"reebok"
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FV9519/MEN_SWIM_SLIPPERS_FV9519_1.jpg.plp ",
      name: "MEN'S REEBOK SWIM RUSSLE FLIP SLIPPERS  ",
      price: "599",
      strikedoffprice: "999",
      brandName:"adidas"
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FW0318/reebok_FW0318_1.jpg.plp ",
      name: " MEN'S REEBOK RUNNING TREND RUNNER SHOES",
      price: "1575",
      strikedoffprice: "3499",
      brandName:"reebok"
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-H00024/reebok_H00024_1.jpg.plp ",
      name: "UNISEX REEBOK RUNNING ZIG KINETICA II SHOES  ",
      price: "9999",
      strikedoffprice: "12000",
      brandName:"adidas"
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GK9170/reebok_GK9170_1.jpg.plp ",
      name: " MEN'S REEBOK TRAINING BAS POLO TEE ",
      price: "779",
      strikedoffprice: "1299",
      brandName:"reebok"
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GK9175/reebok_GK9175_1.jpg.plp",
      name: "MEN'S REEBOK TRAINING FOUNDATION  PANTS  ",
      price: "1019",
      strikedoffprice: "1699",
      brandName:"adidas"
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GK9176/reebok_GK9176_1.jpg.plp ",
      name: "MEN'S REEBOK TRAINING FOUNDATION PANTS  ",
      price: "1019",
      strikedoffprice: "1699",
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FW0318/reebok_FW0318_1.jpg.plp ",
      name: " MEN'S REEBOK RUNNING TREND SHOES",
      price: "1575",
      strikedoffprice: "3499",
      brandName:"reebok"
    },
    {
      image_url:
        " https://content.shop4reebok.com/static/Product-G57776/reebok_G57776_1.jpg.plp ",
      name: "  MEN'S REEBOK RUNNING ZTAUR RUN SHOES ",
      price: "3499",
      strikedoffprice: "4999",
    },
    {
      image_url:
        " https://content.shop4reebok.com/static/Product-FV9555/MEN_SWIM_SLIPPERS_FV9555_1.jpg.plp  ",
      name: "MEN'S REEBOK SWIM ULTRA FLIP SLIPPERS   ",
      price: "749",
      strikedoffprice: "1499",
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX3994/reebok_EX3994_1.jpg.plp   ",
      name: "  MEN'S REEBOK SWIM FLEX CONNECT SANDALS ",
      price: "1149",
      strikedoffprice: "2299",
      brandName:"reebok"
    },
    {
      image_url:
        " https://content.shop4reebok.com/static/Product-EX4287/reebok_EX4287_1.jpg.plp  ",
      name: " MEN'S REEBOK RUNNING GENESIS RUNNER SHOE  ",
      price: "1620",
      strikedoffprice: "3599",
    },
    {
      image_url:
        " https://content.shop4reebok.com/static/Product-GK9180/reebok_GK9180_1.jpg.plp  ",
      name: " MEN'S REEBOK TRAINING RUNNER SHORTS  ",
      price: "779",
      strikedoffprice: "1299",
      brandName:"reebok"
    },
    {
      image_url:
        " https://content.shop4reebok.com/static/Product-HB5732/reebok_HB5732_1.jpg.plp  ",
      name: " MEN REEBOK CLASSICS TRACKSUIT HOODIE  ",
      price: "3499",
      strikedoffprice: "4999",
      brandName:"adidas"
    },
    {
      image_url:
        " https://content.shop4reebok.com/static/Product-HB5733/reebok_HB5733_1.jpg.plp  ",
      name: "MEN'S REEBOK CLASSIC TRACKSUIT GOLF HOODIE   ",
      price: "3499",
      strikedoffprice: "4999",
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FQ5364/reebok_FQ5364_1.jpg.plp   ",
      name: " UNISEX REEBOK TRAINING ACTIVE  BAG ",
      price: "1399",
      strikedoffprice: "2799",
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FW0318/reebok_FW0318_1.jpg.plp ",
      name: " MEN'S REEBOK RUNNING TREND RUNNER SHOES",
      price: "1575",
      strikedoffprice: "3499",
      brandName:"adidas"
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-G57705/reebok_G57705_1.jpg.plp",
      name: "UNISEX REEBOK CLASSICS  BASKETBALL SHOES",
      price: "3919",
      strikedoffprice: "5599",
      brandName:"reebok"
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FW0344/reebok_FW0344_1.jpg.plp",
      name: "MEN'S REEBOK RUNNING RUN FUSION  SHOES",
      price: "1620",
      strikedoffprice: "3599",
      brandName:"adidas"
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX4272/reebok_EX4272_1.jpg.plp",
      name: "MEN'S REEBOK RUNNING QUICK DRIFTER SHOES",
      price: "1620",
      strikedoffprice: "3599",
      brandName:"reebok"
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-H02293/reebok_H02293_1.jpg.plp",
      name: "MEN'S REEBOK DYNAMIC ZIGZAG SHOES",
      price: "7599",
      strikedoffprice: "9999",
      brandName:"reebok"
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FV9551/MEN_SWIM_SLIPPERS_FV9551_1.jpg.plp",
      name: "MEN'S REEBOK SWIM SUPERSOFT FLIP SLIPPERS",
      price: "909",
      strikedoffprice: "1299",
      brandName:"reebok"
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-HC3528/reebok_HC3528_1.jpg.plp",
      name: "MEN'S REEBOK TRAINING ACTIVE BASIC POLO TEE",
      price: "779",
      strikedoffprice: "1299",
      brandName:"reebok"
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-HF3794/reebok_HF3794_01.JPG.plp ",
      name: "MEN'S REEBOK TRAINING ACTIVE MOVE TEE ",
      price: "1749",
      strikedoffprice: "2499",
      brandName:"reebok"
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-HG5456/reebok_HG5456_1.jpg.plp",
      name: "MEN'S REEBOK FITNESS TRAINING  SWEATSHIRT",
      price: "10009",
      strikedoffprice: "1799",
      brandName:"adidas"
    },
  ];

  let rightDiv = document.getElementById('rightSide')

let showMensProduct = (mensArr) => {
    //  console.log('arr:',mensArr)
    rightDiv.innerHTML = null;

    mensArr.forEach(({image_url,name,price, strikedoffprice,})=>{
        // console.log(name,image_url)
        let appendDiv = document.createElement('div');
        appendDiv.setAttribute('class','appendDiv')
        let image = document.createElement('img');
        image.src = image_url
        image.setAttribute('id', 'imageUrl')

        let nameB = document.createElement('p');
        nameB.innerText = name;
        nameB.setAttribute('class','ptagprice')

        let price1 = document.createElement('p');
        price1.innerText = `Rs.${price}`;
        price1.setAttribute('class','ptagprice')

        let priceStrike = document.createElement('p');
        priceStrike.innerText =  `Rs.${strikedoffprice}`;
        priceStrike.setAttribute('class','ptagprice1')

        // let priceDiv = document.createElement('div');
        // priceDiv.setAttribute('class','priceDiv');

        let clickAdd = document.createElement('button')
        clickAdd.innerText = 'Shop Now'
        clickAdd.setAttribute('class','shopBtn')

        let sendToData = {
            image_url,
            name,
            price,
            strikedoffprice,
        };
        clickAdd.onclick = () =>{
           addToCart(sendToData )
           console.log('click')
        }

        // priceDiv.append(price1,priceStrike);

        appendDiv.append(image,nameB,price1,priceStrike,clickAdd)
        rightDiv.append(appendDiv)
    })
}

let cart =localStorage.getItem('cart')

if (!cart) {
  cart =[];
  localStorage.setItem('cart',JSON.stringify(cart));
  refreshCartCount(cart)
}
else {
  cart = JSON.parse(cart)
  refreshCartCount(cart)
}

function refreshCartCount(cart) {
  let catCount = document.getElementById('cartCount');
  catCount.innerText = cart.length;
}

let addToCart = (arr ) => {
  let cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(arr)
   
  //  console.log(arrData.length)

    localStorage.setItem('cart', JSON.stringify(cart))

    refreshCartCount(cart)
    // console.log(arr)
}

// filter price low to hig
document.getElementById('selectOpt').addEventListener('change',()=>{
    lowToHigh(mensArr)
})
let lowToHigh = (mensArr) =>{
    let selectvalue = document.getElementById('selectOpt').value;
    // console.log('value:',selectvalue)
    // console.log('arr:',mensArr)
  if (selectvalue) {
    let updateArr = mensArr.sort((a,b)=>{
        if (selectvalue=='low') {
            return a.price -b.price
        }
        else if (selectvalue=='high') {
            return b.price -a.price
        }
        else {
            return null
        }
    })
    showMensProduct(updateArr)
   }
   else {

    // if (selectvalue =='') {
    //      return '';
    // } 
    showMensProduct(mensArr)
    


   }
}




showMensProduct(mensArr)

