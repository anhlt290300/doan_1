const bags_01_image01 = require('../images/bags/tui01_1.jpg')
const bags_01_image02 = require('../images/bags/tui01_2.jpg')

const bags_02_image01 = require('../images/bags/tui02_1.jpg')
const bags_02_image02 = require('../images/bags/tui02_2.jpg')

const bags_03_image01 = require('../images/bags/tui03_1.jpg')
const bags_03_image02 = require('../images/bags/tui03_2.jpg')

const bags_04_image01 = require('../images/bags/tui04_1.jpg')
const bags_04_image02 = require('../images/bags/tui04_2.jpg')

const bags_05_image01 = require('../images/bags/tui05_1.jpg')
const bags_05_image02 = require('../images/bags/tui05_2.jpg')

const bags_06_image01 = require('../images/bags/tui06_1.jpg')
const bags_06_image02 = require('../images/bags/tui06_2.jpg')

const bags_07_image01 = require('../images/bags/tui07_1.jpg')
const bags_07_image02 = require('../images/bags/tui07_2.jpg')

const backpack_01_image01 = require('../images/backpack/balo01_1.jpg')
const backpack_01_image02 = require('../images/backpack/balo01_2.jpg')

const backpack_02_image01 = require('../images/backpack/balo02_1.jpg')
const backpack_02_image02 = require('../images/backpack/balo02_2.jpg')

const backpack_03_image01 = require('../images/backpack/balo03_1.jpg')
const backpack_03_image02 = require('../images/backpack/balo03_2.jpg')

const wallet_01_image01 = require('../images/wallet/vi01_1.jpg')
const wallet_01_image02 = require('../images/wallet/vi01_2.jpg')

const wallet_02_image01 = require('../images/wallet/vi02_1.jpg')
const wallet_02_image02 = require('../images/wallet/vi02_2.jpg')

const wallet_03_image01 = require('../images/wallet/vi03_1.jpg')
const wallet_03_image02 = require('../images/wallet/vi03_2.jpg')

const wallet_04_image01 = require('../images/wallet/vi04_1.png')
const wallet_04_image02 = require('../images/wallet/vi04_2.jpg')

const products__accessories =[
    {
        title: "MINI DONUT",
        price: '119000',
        image01: bags_01_image01,
        image02: bags_01_image02,
        categorySlug: "bags",
        colors: ["black", "while"],
        slug: "tui-mini-donut",
        size: ["s"],
        description: "Suede Donut sử dụng chất liêu Suede nhập khẩu đem đến sự khác lạ, tinh tế."   
    },
    {
        title: "MINI CRONY",
        price: '119000',
        image01: bags_02_image01,
        image02: bags_02_image02,
        categorySlug: "bags",
        colors: ["black", "while"],
        slug: "tui-mini-crony",
        size: ["s"],
        description: "Phù hợp cho các vật dụng như Iphone Promax , máy tính , bút , thước kẻ, ví tiền."   
    },
    {
        title: "BUDDY",
        price: '179000',
        image01: bags_03_image01,
        image02: bags_03_image02,
        categorySlug: "bags",
        colors: ["black"],
        slug: "tui-buddy",
        size: ["s"],
        description: "Buddy đề cao sự tối giản nên gồm 1 ngăn ngoài và 1 ngăn bên trong."   
    },
    {
        title: "DANE HN",
        price: '149000',
        image01: bags_04_image01,
        image02: bags_04_image02,
        categorySlug: "bags",
        colors: ["black", "while"],
        slug: "tui-dane-hn",
        size: ["s"],
        description: "Túi Suede Dane HN Kiểu dáng hợp thời trang, kích thước form vừa chuẩn đựng các vật dụng  như ví, điện thoại, chìa khóa xe."   
    },
    {
        title: "DANE Q",
        price: '99000',
        image01: bags_05_image01,
        image02: bags_05_image02,
        categorySlug: "bags",
        colors: ["black", "while"],
        slug: "tui-dane-q",
        size: ["s"],
        description: "Dane Q đề cao sự tối giản nên chỉ gồm 1 ngăn."   
    },
    {
        title: "CUSTARD",
        price: '159000',
        image01: bags_06_image01,
        image02: bags_06_image02,
        categorySlug: "bags",
        colors: [ "while"],
        slug: "tui-custard",
        size: ["s"],
        description: "Túi Custard kiểu dáng hợp thời trang, kích thước form vừa chuẩn đựng mỹ phẩm , ví, điện thoại …"   
    },
    {
        title: "SUEDE HOTDOG",
        price: '199000',
        image01: bags_07_image01,
        image02: bags_07_image02,
        categorySlug: "bags",
        colors: ["black", "while"],
        slug: "tui-suede-hotdog",
        size: ["s"],
        description: "Túi Suede Hotdog kiểu dáng hợp thời trang, kích thước form vừa chuẩn đựng các vật dụng nhỏ như ví, điện thoại, chìa khóa xe…"   
    },
    {
        title: "MUFFIN",
        price: '229000',
        image01: backpack_01_image01,
        image02: backpack_01_image02,
        categorySlug: "back-pack",
        colors: ["black", "while"],
        slug: "ba-lo-muffin",
        size: ["s"],
        description: "Backpack đựng được laptop 15’6 inc trở xuống, được trang bị chống sốc, chống nước, chống bụi."   
    },
    {
        title: "CHILD HOOD",
        price: '425000',
        image01: backpack_02_image01,
        image02: backpack_02_image02,
        categorySlug: "back-pack",
        colors: ["black", "while"],
        slug: "ba-lo-child-hood",
        size: ["s"],
        description: "Sản phẩm có 19 ngăn : 15 ngăn bên ngoài ( bao gồm 1 ngăn ở quai đeo , 1 ngăn phía sau ) và 4 ngăn bên trong balo, Đựng được laptop 15’6 in trở xuống, toàn bộ các ngăn bên trong và bên ngoài đều được bổ sung chức năng chống sốc, chống nước, chống bụi.Quai đeo và mặt sau balo được thiết kế với tiêu chí chống gù lưng, nhức mỏi vai khi đeo nhờ miếng đệm rất dày và chắc chắn"   
    },
    {
        title: "CRONY",
        price: '315000',
        image01: backpack_03_image01,
        image02: backpack_03_image02,
        categorySlug: "back-pack",
        colors: ["black", "while"],
        slug: "ba-lo-crony",
        size: ["s"],
        description: "Sản phẩm có 19 ngăn : 15 ngăn bên ngoài ( bao gồm 1 ngăn ở quai đeo , 1 ngăn phía sau ) và 4 ngăn bên trong balo, Đựng được laptop 15’6 in trở xuống, toàn bộ các ngăn bên trong và bên ngoài đều được bổ sung chức năng chống sốc, chống nước, chống bụi.Quai đeo và mặt sau balo được thiết kế với tiêu chí chống gù lưng, nhức mỏi vai khi đeo nhờ miếng đệm rất dày và chắc chắn"   
    },
    {
        title: "WALLET SIGNATURE D",
        price: '275000',
        image01: wallet_01_image01,
        image02: wallet_01_image02,
        categorySlug: "wallet",
        colors: ["black"],
        slug: "vi-signature-d",
        size: ["s"],
        description: "Ví có 11 ngăn bao gồm : 7 ngăn thẻ, 1 ngăn ảnh , 2 ngăn CMND loại cũ, 1 ngăn đựng tiền riêng biệt."   
    },
    {
        title: "CARD HOLDER SIGNATURE",
        price: '185000',
        image01: wallet_02_image01,
        image02: wallet_02_image02,
        categorySlug: "wallet",
        colors: ["black"],
        slug: "vi-holder-signature",
        size: ["s"],
        description: "Ví có 5 ngăn bao gồm : 2 ngăn nhỏ , 2 khe thẻ và 1 ngăn phía sau đựng thẻ , thẻ để xe  rất tiện lợi."   
    },
    {
        title: "WALLET SIGNATURE A",
        price: '275000',
        image01: wallet_03_image01,
        image02: wallet_03_image02,
        categorySlug: "wallet",
        colors: ["white"],
        slug: "vi-signature-a",
        size: ["s"],
        description: "Ví có 8 ngăn bao gồm : 3 ngăn thẻ, 1 ngăn ảnh , 2 ngăn CMND loại cũ, 1 ngăn đựng tiền riêng biệt và 1 ngăn phía sau ví đựng thẻ xe."   
    },
    {
        title: "WALLET SIGNATURE C",
        price: '295000',
        image01: wallet_04_image01,
        image02: wallet_04_image02,
        categorySlug: "wallet",
        colors: ["white"],
        slug: "vi-signature-c",
        size: ["s"],
        description: "Kích thước : 11 x 8 cm Ví có 8 ngăn bao gồm : 3 ngăn thẻ, 1 ngăn ảnh , 2 ngăn CMND loại cũ, 1 ngăn đựng tiền riêng biệt và 1 ngăn phía sau ví đựng thẻ xe. Tặng kèm Giftbox để làm quà tặng khi mua."   
    }

]


const getAllproduct = () => products__accessories

const getProductsBySlug = (name) =>  products__accessories.find(Element => Element.slug ===name)

const getProducts = (count) => {
    const max = products__accessories.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products__accessories.slice(start, start + count)
}

const getCartItemsDetail = (cartItems) =>{
    let res = []
    if(cartItems.length>0){
        cartItems.forEach(e=>{
            res.push({
                ...e,
                product: getProductsBySlug(e.slug)
            })
        })
    }

    return res
}
const accessoriesData={
    getAllproduct,
    getProducts,
    getProductsBySlug,
    getCartItemsDetail
}
export default  accessoriesData;