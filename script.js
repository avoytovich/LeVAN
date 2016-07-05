$(document).ready(function() {
    $('.navbar-toggle').click(logo);
    $(document).scroll(on_top);
    $('.avstrijska_sv_small').click(about_AVSsv);
    $('.avstrijska_tem_small').click(about_AVStem);
    $('.california_bil_small').click(about_CALbil);
    $('.california_small').click(about_CAL);
    $('.california_sv_small').click(about_CALsv);
    $('.california_tem_small').click(about_CALtem);
    $('.carolinna_small').click(about_CAR);
    $('.cegljna_small').click(about_CEG);
    $('.copyng_small').click(about_COP);
    $('.coralova_small').click(about_COR);
    $('.corner_small').click(about_CORN);
    $('.garden_trav_small').click(about_GARDtr);
    $('.modena_roz_small').click(about_MODroz);
    $('.modena_sv_small').click(about_MODsv);
    $('.old_small').click(about_OLD);
    $('.old_st_small').click(about_OLDst);
    $('.staruy_myr_small').click(about_STmyr);
    $('.verona_sv_small').click(about_VERsv);
    $('.vushneva_small').click(about_VUSH);
    $('.laying').click(laying);
    $('#home').click(home);
    $('#production').click(production);
    $('.ico').mouseenter(light);
    $('.ico').mouseleave(dark);
    $('#contact').click(contact);
    $('.calculator, .slidecalc').click(calculator);
    $('.about_all figure').hover(figure_light, figure_dark);
    
    
    var price = [];
    price [0] = "5,11"; //Avs_sv
    price [1] = "5,11"; //Avs_tem
    price [2] = "5,15"; //Cal_bil
    price [3] = "5,15"; //Cal
    price [4] = "5,15"; //Cal_sv
    price [5] = "5,15"; //Cal_tem
    price [6] = "371,45"; //Car
    price [7] = "5,20"; //Ceg
    price [8] = "123,82"; //Cop
    price [9] = "5,15"; //Cor
    price [10] = "17,52"; //Corn
    price [11] = "355,98"; //Gar_tr
    price [12] = "318,78"; //Mod_roz
    price [13] = "309,54"; //Mod_sv
    price [14] = "5,25"; //Old
    price [15] = "5,30"; //Old_st
    price [16] = "5,15"; //St_myr
    price [17] = "243,44"; //Ver_sv
    price [18] = "5,20"; //Vush
    price [19] = "5,11"; //Avs_sv
    price [20] = "5,11"; //Avs_sv
    
    var goods = {
        AVSsv:{
        name: "Brick \"avstrijska svitla\"",
        text: "This color is a calm and confident color that provides security, but it is never the center of the attention. Actually this color does not seek attention at all, it prefers to stay in the background, so other colors around it can shine.",
        price: price[0],
        rule: "One metr contains 48 unit with barrier-weight 1 sm \n Weight one metr nearly 15 kg \n Production is packed in carton box which contains 22 unit \n P.S. Production sells only by quantity of carton boxes"
    },
        AVStem:{
        name: "Brick \"avstrijska temna\"",
        text: "This color finds quality in everything – a comfortable home, the best food and drink, as well as loyal friends or a partner. In design, that color is commonly used as a background color. It’s also seen in wood textures and sometimes in stone textures. It helps bring a feeling of warmth and wholesomeness to designs.",
        price: price[1],
        rule: "One metr contains 48 unit with barrier-weight 1 sm \n Weight one metr nearly 15 kg \n Production is packed in carton box which contains 22 unit \n P.S. Production sells only by quantity of carton boxes"
    },
        CALbil:{
        name: "Brick \"california bila\"",
        text: "This color that protects and encourages. It offers a sense of peace and tranquility, comfort and hope, and helps to relieve emotional disturbances. Beige in design is generally used in backgrounds, and is commonly seen in backgrounds with a paper texture. It will take on the characteristics of colors around it, meaning it has little effect in itself on the final impression a design gives when used with other colors.",
        price: price[2],
        rule: "One metr contains 48 unit with barrier-weight 1 sm \n Weight one metr nearly 15 kg \n Production is packed in carton box which contains 22 unit \n P.S. Production sells only by quantity of carton boxes"
    },
        CAL:{
        name: "Brick \"california\"",
        text: "This color is a very hot color. It’s associated with fire, violence, and warfare. It’s also associated with love and passion. That color can actually have a physical effect on people, raising blood pressure and respiration rates. It’s been shown to enhance human metabolism, too. This color can be associated with anger, but is also associated with importance (think of the red carpet at awards shows and celebrity events).",
        price: price[3],
        rule: "One metr contains 48 unit with barrier-weight 1 sm \n Weight one metr nearly 15 kg \n Production is packed in carton box which contains 22 unit \n P.S. Production sells only by quantity of carton boxes"
    },
        CALsv:{
        name: "Brick \"california svitla\"",
        text: "This color is often considered the brightest and most energizing of the warm colors. It’s associated with happiness and sunshine. That color is also associated with hope, as can be seen in some countries when yellow ribbons are displayed by families who have loved ones at war. Yellow is also associated with danger, though not as strongly as red.",
        price: price[4],
        rule: "One metr contains 48 unit with barrier-weight 1 sm \n Weight one metr nearly 15 kg \n Production is packed in carton box which contains 22 unit \n P.S. Production sells only by quantity of carton boxes"
    },
        CALtem:{
        name: "Brick \"california temna\"",
        text: "This color is a very down-to-earth color. It can represent new beginnings and growth. It also signifies renewal and abundance. In design, that color can have a balancing and harmonizing effect, and is very stable. It’s appropriate for designs related to wealth, stability, renewal, and nature. A brighter color is more energizing and vibrant, while darker is more representative of the natural world.",
        price: price[5],
        rule: "One metr contains 48 unit with barrier-weight 1 sm \n Weight one metr nearly 15 kg \n Production is packed in carton box which contains 22 unit \n P.S. Production sells only by quantity of carton boxes"
    },
        CAR:{
        name: "Rock \"carolinna\"",
        text: "This color is also associated with hope, as can be seen in some countries when yellow ribbons are displayed by families who have loved ones at war. That color is also associated with danger, though not as strongly as red. In some countries, yellow has very different connotations. In Egypt, for example, this color is for mourning. In Japan, it represents courage, and in India it’s a color for merchants.",
        price: price[6],
        rule: "Weight one metr nearly 20 kg"
    },
        CEG:{
        name: "Brick \"cegljna\"",
        text: "This color is a very vibrant and energetic color. In its muted forms, it can be associated with the earth and with autumn. Because of its association with the changing seasons, that color can represent change and movement in general. In designs, that color commands attention without being as overpowering as red. It’s often considered more friendly and inviting, and less in-your-face.",
        price: price[7],
        rule: "One metr contains 48 unit with barrier-weight 1 sm \n Weight one metr nearly 15 kg \n Production is packed in carton box which contains 22 unit \n P.S. Production sells only by quantity of carton boxes"
    },
        COP:{
        name: "Stone \"copyng\"",
        text: "In design, this color is generally considered a neutral backdrop that lets other colors in a design have a larger voice. It can help to convey cleanliness and simplicity, though, and is popular in minimalist designs. That color in designs can also portray either winter or summer, depending on the other design motifs and colors that surround it.",
        price: price[8],
        rule: "One unit has dimension 30*48 sm \n Weight one unit nearly 10 kg"
    },
        COR:{
        name: "Brick \"coralova\"",
        text: "Outside the western world, that color has different associations. For example, in China, this color is the color of prosperity and happiness. It can also be used to attract good luck. In other eastern cultures, that color is worn by brides on their wedding days. In South Africa, however, this color is the color of mourning.",
        price: price[9],
        rule: "One metr contains 48 unit with barrier-weight 1 sm \n Weight one metr nearly 15 kg \n Production is packed in carton box which contains 22 unit \n P.S. Production sells only by quantity of carton boxes"
   },
        CORN:{
        name: "Element \"corner\"",
        text: "In design, this color can lend a sense of elegance and calm. When combined with earthy colors like peach or brown, it can take on an earthy quality. It can also be used to lighten darker colors, without the stark contrast of using white.",
        price: price[10],
        rule: "One metr contains 14 unit with barrier-weight 1 sm \n Weight one metr nearly 7 kg \n Production is packed in carton box which contains 27 unit"
   },
        GARDtr:{
        name: "Travertin \"garden path\"",
        text: "This color are sophisticated colors, with some of the warmth of brown and a lot of the coolness of white. They’re generally quiet, and can often evoke a sense of history. That color is a calm color, with some of the pureness associated with white, though it’s a bit warmer.",
        price: price[11],
        rule: "One unit has dimension 30*40 sm \n Weight one metr nearly 10 kg"
   },
        MODroz:{
        name: "Modena \"rozova\"",
        text: "This color is the strongest of the neutral colors. On the positive side, it’s commonly associated with power, elegance, and formality.",
        price: price[12],
        rule: "One unit has dimension 31*15 sm \n Weight one metr nearly 11 kg \n Production is packed in carton box which contains 9 unit \n P.S. Production sells only by quantity of carton boxes"
   },
        MODsv:{
        name: "Modena \"svitla\"",
        text: "In your designs, bright yellow can lend a sense of happiness and cheerfulness. Softer yellows are commonly used as a gender-neutral color for babies (rather than blue or pink) and young children. Light yellows also give a more calm feeling of happiness than bright yellows. Dark yellows and gold-hued yellows can sometimes look antique and be used in designs where a sense of permanence is desired.",
        price: price[13],
        rule: "One unit has dimension 31*15 sm \n Weight one metr nearly 11 kg \n Production is packed in carton box which contains 9 unit \n P.S. Production sells only by quantity of carton boxes"
   },
        OLD:{
        name: "Brick \"old\"",
        text: "This color is commonly used in edgier designs, as well as in very elegant designs. It can be either conservative or modern, traditional or unconventional, depending on the colors it’s combined with. In design, that color is commonly neutrality and can make it easier to convey a sense of sophistication and mystery in a design.",
        price: price[14],
        rule: "One metr contains 48 unit with barrier-weight 1 sm \n Weight one metr nearly 15 kg \n Production is packed in carton box which contains 22 unit \n P.S. Production sells only by quantity of carton boxes"
   },
        OLDst:{
        name: "Brick \"old street\"",
        text: "In design, this color can be a powerful accent color. It can have an overwhelming effect if it’s used too much in designs, especially in its purest form. It’s a great color to use when power or passion want to be portrayed in the design. That color can be very versatile, though, with brighter versions being more energetic and darker shades being more powerful and elegant.",
        price: price[15],
        rule: "One metr contains 48 unit with barrier-weight 1 sm \n Weight one metr nearly 15 kg \n Production is packed in carton box which contains 22 unit \n P.S. Production sells only by quantity of carton boxes"
   },
        STmyr:{
        name: "Brick \"staruy myr\"",
        text: "This is a neutral color, generally considered on the cool end of the color spectrum. It can sometimes be considered moody or depressing. This color can be used in place of white in some designs, and also can be used in place of black. That color is generally conservative and formal, but can also be modern. It is sometimes considered a color of mourning. It’s commonly used in corporate designs, where formality and professionalism are key. It can be a very sophisticated color.",
        price: price[16],
        rule: "One metr contains 48 unit with barrier-weight 1 sm \n Weight one metr nearly 15 kg \n Production is packed in carton box which contains 22 unit \n P.S. Production sells only by quantity of carton boxes"
   },
        VERsv:{
        name: "Verona \"svitla\"",
        text: "This is a very vibrant and energetic color. In its muted forms, it can be associated with the earth and with autumn. Because of its association with the changing seasons, that color can represent change and movement in general.",
        price: price[17],
        rule: "One complect contains 0,749 square metr \n One complect contains: \n 6 unit element \"A\" (dimension 31*15 sm); \n 6 unit element \"B\" (dimension 12*50 sm); \n 4 unit element \"C\" (dimension 5,5*50 sm); \n Weight one metr nearly 12 kg"
   },
        VUSH:{
        name: "Brick \"vushneva\"",
        text: "This color was long associated with royalty. It’s associated with creativity and imagination, too. Dark shades are traditionally associated with wealth and royalty, while lighter are considered more romantic.",
        price: price[18],
        rule: "One metr contains 48 unit with barrier-weight 1 sm \n Weight one metr nearly 15 kg \n Production is packed in carton box which contains 22 unit \n P.S. Production sells only by quantity of carton boxes"
   },
    
    };
    
    

function logo () {
    $('#logo').toggle(1000);
}

function on_top () {
    $('.on_top').fadeIn(3000, function () {
        $('.on_top').fadeOut(5000);
    });
}

function about_AVSsv () {
    $('.about_all').fadeOut(1000);
    $('.discribe_all').fadeIn(1000);
    $('.title').html(goods["AVSsv"]["name"]);
    $('.text').html(goods["AVSsv"]["text"]);
    $('#price').html(goods["AVSsv"]["price"]);
    $('#sale-rules').html(goods["AVSsv"]["rule"]);
    if (!document.getElementById("AVSsvFoto")) {
        $('#price_product').after("<img id=\"AVSsvFoto\" class=\"img-thumbnail img-responsive col-lg-8 col-md-8 col-sm-12 col-xs-12\" src=\"images/large/avstrijska_sv_large.jpg\" alt=\"avstrijska_sv\">");
    }
    $('#AVStemFoto, #CALbilFoto, #CALFoto, #CALsvFoto, #CALtemFoto, #CARFoto, #CEGFoto, #COPFoto, #CORFoto, #CORNFoto, #GARDtrFot, #MODrozFoto, #MODsvFoto, #OLDFoto, #OLDstFoto, #STmyrFoto, #VERsvFoto, #VUSHFoto').remove();
}

function about_AVStem () {
    $('.about_all').fadeOut(1000);
    $('.discribe_all').fadeIn(1000);
    $('.title').html(goods["AVStem"]["name"]);
    $('.text').html(goods["AVStem"]["text"]);
    $('#price').html(goods["AVStem"]["price"]);
    $('#sale-rules').html(goods["AVStem"]["rule"]);
    if (!document.getElementById("AVStemFoto")) {
        $('#price_product').after("<img id=\"AVStemFoto\" class=\"img-thumbnail img-responsive col-lg-8 col-md-8 col-sm-12 col-xs-12\" src=\"images/large/avstrijska_tem_large.jpg\" alt=\"avstrijska_tem\">");
    } 
    $('#AVSsvFoto, #CALbilFoto, #CALFoto, #CALsvFoto, #CALtemFoto, #CARFoto, #CEGFoto, #COPFoto, #CORFoto, #CORNFoto, #GARDtrFot, #MODrozFoto, #MODsvFoto, #OLDFoto, #OLDstFoto, #STmyrFoto, #VERsvFoto, #VUSHFoto').remove();
}

function about_CALbil () {
    $('.about_all').fadeOut(1000);
    $('.discribe_all').fadeIn(1000);
    $('.title').html(goods["CALbil"]["name"]);
    $('.text').html(goods["CALbil"]["text"]);
    $('#price').html(goods["CALbil"]["price"]);
    $('#sale-rules').html(goods["CALbil"]["rule"]);
    if (!document.getElementById("CALbilFoto")) {
        $('#price_product').after("<img id=\"CALbilFoto\" class=\"img-thumbnail img-responsive col-lg-8 col-md-8 col-sm-12 col-xs-12\" src=\"images/large/california_bil_large.jpg\" alt=\"california_bil\">");
    }
    $('#AVStemFoto, #AVSsvFoto, #CALFoto, #CALsvFoto, #CALtemFoto, #CARFoto, #CEGFoto, #COPFoto, #CORFoto, #CORNFoto, #GARDtrFot, #MODrozFoto, #MODsvFoto, #OLDFoto, #OLDstFoto, #STmyrFoto, #VERsvFoto, #VUSHFoto').remove();
}

function about_CAL () {
    $('.about_all').fadeOut(1000);
    $('.discribe_all').fadeIn(1000);
    $('.title').html(goods["CAL"]["name"]);
    $('.text').html(goods["CAL"]["text"]);
    $('#price').html(goods["CAL"]["price"]);
    $('#sale-rules').html(goods["CAL"]["rule"]);
    if (!document.getElementById("CALFoto")) {
        $('#price_product').after("<img id=\"CALFoto\" class=\"img-thumbnail img-responsive col-lg-8 col-md-8 col-sm-12 col-xs-12\" src=\"images/large/california_large.jpg\" alt=\"california\">");
    }
    $('#AVStemFoto, #AVSsvFoto, #CALbilFoto, #CALsvFoto, #CALtemFoto, #CARFoto, #CEGFotov, #CORFoto, #CORNFoto, #GARDtrFot, #MODrozFoto, #MODsvFoto, #OLDFoto, #OLDstFoto, #STmyrFoto, #VERsvFoto, #VUSHFoto').remove();
}

function about_CALsv () {
    $('.about_all').fadeOut(1000);
    $('.discribe_all').fadeIn(1000);
    $('.title').html(goods["CALsv"]["name"]);
    $('.text').html(goods["CALsv"]["text"]);
    $('#price').html(goods["CALsv"]["price"]);
    $('#sale-rules').html(goods["CALsv"]["rule"]);
    if (!document.getElementById("CALsvFoto")) {
        $('#price_product').after("<img id=\"CALsvFoto\" class=\"img-thumbnail img-responsive col-lg-8 col-md-8 col-sm-12 col-xs-12\" src=\"images/large/california_sv_large.jpg\" alt=\"california_sv\">");
    }
    $('#AVStemFoto, #AVSsvFoto, #CALbilFoto, #CALFoto, #CALtemFoto, #CARFoto, #CEGFoto, #COPFoto, #CORFoto, #CORNFoto, #GARDtrFot, #MODrozFoto, #MODsvFoto, #OLDFoto, #OLDstFoto, #STmyrFoto, #VERsvFoto, #VUSHFoto').remove();
}

function about_CALtem () {
    $('.about_all').fadeOut(1000);
    $('.discribe_all').fadeIn(1000);
    $('.title').html(goods["CALtem"]["name"]);
    $('.text').html(goods["CALtem"]["text"]);
    $('#price').html(goods["CALtem"]["price"]);
    $('#sale-rules').html(goods["CALtem"]["rule"]);
    if (!document.getElementById("CALtemFoto")) {
        $('#price_product').after("<img id=\"CALtemFoto\" class=\"img-thumbnail img-responsive col-lg-8 col-md-8 col-sm-12 col-xs-12\" src=\"images/large/california_tem_large.jpg\" alt=\"california_tem\">");
    }
    $('#AVStemFoto, #AVSsvFoto, #CALbilFoto, #CALFoto, #CALsvFoto, #CARFoto, #CEGFoto, #COPFoto, #CORFoto, #CORNFoto, #GARDtrFot, #MODrozFoto, #MODsvFoto, #OLDFoto, #OLDstFoto, #STmyrFoto, #VERsvFoto, #VUSHFoto').remove();
}

function about_CAR () {
    $('.about_all').fadeOut(1000);
    $('.discribe_all').fadeIn(1000);
    $('.title').html(goods["CAR"]["name"]);
    $('.text').html(goods["CAR"]["text"]);
    $('#price').html(goods["CAR"]["price"]);
    $('#sale-rules').html(goods["CAR"]["rule"]);
    if (!document.getElementById("CARFoto")) {
        $('#price_product').after("<img id=\"CARFoto\" class=\"img-thumbnail img-responsive col-lg-8 col-md-8 col-sm-12 col-xs-12\" src=\"images/large/carolinna_large.jpg\" alt=\"carolinna\">");
    }
    $('#AVStemFoto, #AVSsvFoto, #CALbilFoto, #CALFoto, #CALsvFoto, #CALtemFoto, #CEGFoto, #COPFoto, #CORFoto, #CORNFoto, #GARDtrFot, #MODrozFoto, #MODsvFoto, #OLDFoto, #OLDstFoto, #STmyrFoto, #VERsvFoto, #VUSHFoto').remove();
}

function about_CEG () {
    $('.about_all').fadeOut(1000);
    $('.discribe_all').fadeIn(1000);
    $('.title').html(goods["CEG"]["name"]);
    $('.text').html(goods["CEG"]["text"]);
    $('#price').html(goods["CEG"]["price"]);
    $('#sale-rules').html(goods["CEG"]["rule"]);
    if (!document.getElementById("CEGFoto")) {
        $('#price_product').after("<img id=\"CEGFoto\" class=\"img-thumbnail img-responsive col-lg-8 col-md-8 col-sm-12 col-xs-12\" src=\"images/large/cegljna_large.jpg\" alt=\"cegljna\">");
    }
    $('#AVStemFoto, #AVSsvFoto, #CALbilFoto, #CALFoto, #CALsvFoto, #CALtemFoto, #CARFoto, #COPFoto, #CORFoto, #CORNFoto, #GARDtrFot, #MODrozFoto, #MODsvFoto, #OLDFoto, #OLDstFoto, #STmyrFoto, #VERsvFoto, #VUSHFoto').remove();
}

function about_COP () {
    $('.about_all').fadeOut(1000);
    $('.discribe_all').fadeIn(1000);
    $('.title').html(goods["COP"]["name"]);
    $('.text').html(goods["COP"]["text"]);
    $('#price').html(goods["COP"]["price"]);
    $('#sale-rules').html(goods["COP"]["rule"]);
    if (!document.getElementById("COPFoto")) {
        $('#price_product').after("<img id=\"COPFoto\" class=\"img-thumbnail img-responsive col-lg-8 col-md-8 col-sm-12 col-xs-12\" src=\"images/large/copyng_large.jpg\" alt=\"copyng\">");
    }
    $('#AVStemFoto, #AVSsvFoto, #CALbilFoto, #CALFoto, #CALsvFoto, #CALtemFoto, #CARFoto, #CEGFoto, #CORFoto , #CORNFoto, #GARDtrFot, #MODrozFoto, #MODsvFoto, #OLDFoto, #OLDstFoto, #STmyrFoto, #VERsvFoto, #VUSHFoto').remove();
}

function about_COR () {
    $('.about_all').fadeOut(1000);
    $('.discribe_all').fadeIn(1000);
    $('.title').html(goods["COR"]["name"]);
    $('.text').html(goods["COR"]["text"]);
    $('#price').html(goods["COR"]["price"]);
    $('#sale-rules').html(goods["COR"]["rule"]);
    if (!document.getElementById("CORFoto")) {
        $('#price_product').after("<img id=\"CORFoto\" class=\"img-thumbnail img-responsive col-lg-8 col-md-8 col-sm-12 col-xs-12\" src=\"images/large/coralova_large.jpg\" alt=\"coralova\">");
    }
    $('#AVStemFoto, #AVSsvFoto, #CALbilFoto, #CALFoto, #CALsvFoto, #CALtemFoto, #CARFoto, #CEGFoto, #COPFoto, #CORNFoto, #GARDtrFot, #MODrozFoto, #MODsvFoto, #OLDFoto, #OLDstFoto, #STmyrFoto, #VERsvFoto, #VUSHFoto').remove();
}

function about_CORN () {
    $('.about_all').fadeOut(1000);
    $('.discribe_all').fadeIn(1000);
    $('.title').html(goods["CORN"]["name"]);
    $('.text').html(goods["CORN"]["text"]);
    $('#price').html(goods["CORN"]["price"]);
    $('#sale-rules').html(goods["CORN"]["rule"]);
    if (!document.getElementById("CORNFoto")) {
        $('#price_product').after("<img id=\"CORNFoto\" class=\"img-thumbnail img-responsive col-lg-8 col-md-8 col-sm-12 col-xs-12\" src=\"images/large/corner_large.jpg\" alt=\"corner\">");
    }
    $('#AVStemFoto, #AVSsvFoto, #CALbilFoto, #CALFoto, #CALsvFoto, #CALtemFoto, #CARFoto, #CEGFoto, #COPFoto, #CORFoto, #GARDtrFoto, #MODrozFoto, #MODsvFoto, #OLDFoto, #OLDstFoto, #STmyrFoto, #VERsvFoto, #VUSHFoto').remove();
}

function about_GARDtr () {
    $('.about_all').fadeOut(1000);
    $('.discribe_all').fadeIn(1000);
    $('.title').html(goods["GARDtr"]["name"]);
    $('.text').html(goods["GARDtr"]["text"]);
    $('#price').html(goods["GARDtr"]["price"]);
    $('#sale-rules').html(goods["GARDtr"]["rule"]);
    if (!document.getElementById("GARDtrFoto")) {
        $('#price_product').after("<img id=\"GARDtrFoto\" class=\"img-thumbnail img-responsive col-lg-8 col-md-8 col-sm-12 col-xs-12\" src=\"images/large/garden_trav_large.jpg\" alt=\"garden_trav\">");
    }
    $('#AVStemFoto, #AVSsvFoto, #CALbilFoto, #CALFoto, #CALsvFoto, #CALtemFoto, #CARFoto, #CEGFoto, #COPFoto, #CORFoto, #CORNFoto, #MODrozFoto, #MODsvFoto, #OLDFoto, #OLDstFoto, #STmyrFoto, #VERsvFoto, #VUSHFoto').remove();
}

function about_MODroz () {
    $('.about_all').fadeOut(1000);
    $('.discribe_all').fadeIn(1000);
    $('.title').html(goods["MODroz"]["name"]);
    $('.text').html(goods["MODroz"]["text"]);
    $('#price').html(goods["MODroz"]["price"]);
    $('#sale-rules').html(goods["MODroz"]["rule"]);
    if (!document.getElementById("MODrozFoto")) {
        $('#price_product').after("<img id=\"MODrozFoto\" class=\"img-thumbnail img-responsive col-lg-8 col-md-8 col-sm-12 col-xs-12\" src=\"images/large/modena_roz_large.jpg\" alt=\"modena-roz\">");
    }
    $('#AVStemFoto, #AVSsvFoto, #CALbilFoto, #CALFoto, #CALsvFoto, #CALtemFoto, #CARFoto, #CEGFoto, #COPFoto, #CORFoto, #CORNFoto, #GARDtrFoto, #MODsvFoto, #OLDFoto, #OLDstFoto, #STmyrFoto, #VERsvFoto, #VUSHFoto').remove();
}

function about_MODsv () {
    $('.about_all').fadeOut(1000);
    $('.discribe_all').fadeIn(1000);
    $('.title').html(goods["MODsv"]["name"]);
    $('.text').html(goods["MODsv"]["text"]);
    $('#price').html(goods["MODsv"]["price"]);
    $('#sale-rules').html(goods["MODsv"]["rule"]);
    if (!document.getElementById("MODsvFoto")) {
        $('#price_product').after("<img id=\"MODsvFoto\" class=\"img-thumbnail img-responsive col-lg-8 col-md-8 col-sm-12 col-xs-12\" src=\"images/large/modena_sv_large.jpg\" alt=\"modena-sv\">");
    }
    $('#AVStemFoto, #AVSsvFoto, #CALbilFoto, #CALFoto, #CALsvFoto, #CALtemFoto, #CARFoto, #CEGFoto, #COPFoto, #CORFoto, #CORNFoto, #GARDtrFoto , #MODrozFoto, #OLDFoto, #OLDstFoto, #STmyrFoto, #VERsvFoto, #VUSHFoto').remove();
}

function about_OLD () {
    $('.about_all').fadeOut(1000);
    $('.discribe_all').fadeIn(1000);
    $('.title').html(goods["OLD"]["name"]);
    $('.text').html(goods["OLD"]["text"]);
    $('#price').html(goods["OLD"]["price"]);
    $('#sale-rules').html(goods["OLD"]["rule"]);
    if (!document.getElementById("OLDFoto")) {
        $('#price_product').after("<img id=\"OLDFoto\" class=\"img-thumbnail img-responsive col-lg-8 col-md-8 col-sm-12 col-xs-12\" src=\"images/large/old_large.jpg\" alt=\"old\">");
    }
    $('#AVStemFoto, #AVSsvFoto, #CALbilFoto, #CALFoto, #CALsvFoto, #CALtemFoto, #CARFoto, #CEGFoto, #COPFoto, #CORFoto, #CORNFoto, #GARDtrFoto , #MODrozFoto, #MODsvFoto, #OLDstFoto, #STmyrFoto, #VERsvFoto, #VUSHFoto').remove();
}

function about_OLDst () {
    $('.about_all').fadeOut(1000);
    $('.discribe_all').fadeIn(1000);
    $('.title').html(goods["OLDst"]["name"]);
    $('.text').html(goods["OLDst"]["text"]);
    $('#price').html(goods["OLDst"]["price"]);
    $('#sale-rules').html(goods["OLDst"]["rule"]);
    if (!document.getElementById("OLDstFoto")) {
        $('#price_product').after("<img id=\"OLDstFoto\" class=\"img-thumbnail img-responsive col-lg-8 col-md-8 col-sm-12 col-xs-12\" src=\"images/large/old_street_large.jpg\" alt=\"old_street\">");
    }
    $('#AVStemFoto, #AVSsvFoto, #CALbilFoto, #CALFoto, #CALsvFoto, #CALtemFoto, #CARFoto, #CEGFoto, #COPFoto, #CORFoto, #CORNFoto, #GARDtrFoto , #MODrozFoto, #MODsvFoto, #OLDFoto, #STmyrFoto, #VERsvFoto, #VUSHFoto').remove();
}

function about_STmyr () {
    $('.about_all').fadeOut(1000);
    $('.discribe_all').fadeIn(1000);
    $('.title').html(goods["STmyr"]["name"]);
    $('.text').html(goods["STmyr"]["text"]);
    $('#price').html(goods["STmyr"]["price"]);
    $('#sale-rules').html(goods["STmyr"]["rule"]);
    if (!document.getElementById("STmyrFoto")) {
        $('#price_product').after("<img id=\"STmyrFoto\" class=\"img-thumbnail img-responsive col-lg-8 col-md-8 col-sm-12 col-xs-12\" src=\"images/large/st_myr_large.jpg\" alt=\"st_myr\">");
    }
    $('#AVStemFoto, #AVSsvFoto, #CALbilFoto, #CALFoto, #CALsvFoto, #CALtemFoto, #CARFoto, #CEGFoto, #COPFoto, #CORFoto, #CORNFoto, #GARDtrFoto , #MODrozFoto, #MODsvFoto, #OLDFoto, #OLDstFoto, #VERsvFoto, #VUSHFoto').remove();
}

function about_VERsv () {
    $('.about_all').fadeOut(1000);
    $('.discribe_all').fadeIn(1000);
    $('.title').html(goods["VERsv"]["name"]);
    $('.text').html(goods["VERsv"]["text"]);
    $('#price').html(goods["VERsv"]["price"]);
    $('#sale-rules').html(goods["VERsv"]["rule"]);
    if (!document.getElementById("VERsvFoto")) {
        $('#price_product').after("<img id=\"VERsvFoto\" class=\"img-thumbnail img-responsive col-lg-8 col-md-8 col-sm-12 col-xs-12\" src=\"images/large/verona_sv_large.jpg\" alt=\"verona_sv\">");
    }
    $('#AVStemFoto, #AVSsvFoto, #CALbilFoto, #CALFoto, #CALsvFoto, #CALtemFoto, #CARFoto, #CEGFoto, #COPFoto, #CORFoto, #CORNFoto, #GARDtrFoto , #MODrozFoto, #MODsvFoto, #OLDFoto, #OLDstFoto, #STmyrFoto, #VUSHFoto').remove();
}

function about_VUSH () {
    $('.about_all').fadeOut(1000);
    $('.discribe_all').fadeIn(1000);
    $('.title').html(goods["VUSH"]["name"]);
    $('.text').html(goods["VUSH"]["text"]);
    $('#price').html(goods["VUSH"]["price"]);
    $('#sale-rules').html(goods["VUSH"]["rule"]);
    if (!document.getElementById("VUSHFoto")) {
        $('#price_product').after("<img id=\"VUSHFoto\" class=\"img-thumbnail img-responsive col-lg-8 col-md-8 col-sm-12 col-xs-12\" src=\"images/large/vushneva_large.jpg\" alt=\"vushneva\">");
    }
    $('#AVStemFoto, #AVSsvFoto, #CALbilFoto, #CALFoto, #CALsvFoto, #CALtemFoto, #CARFoto, #CEGFoto, #COPFoto, #CORFoto, #CORNFoto, #GARDtrFoto , #MODrozFoto, #MODsvFoto, #OLDFoto, #OLDstFoto, #STmyrFoto, #VERsvFoto').remove();

}


function laying () {
    $('.background_main, .background_notice, .product, .carousel, .contact').fadeOut(1000);
    $('.information').fadeIn(1000)
}

function home () {
    $('.information, .product, .contact').fadeOut(1000);
    $('.background_main, .background_notice, .carousel').fadeIn(1000)
}

function production () {
    $('.background_main, .information, .background_notice, .carousel, .discribe_all, .contact').fadeOut(1000);
    $('.product, .about_all').fadeIn(1000);
}

function contact () {
    $('.background_main, .information, .background_notice, .carousel, .discribe_all, .product').fadeOut(1000);
    $('.contact').fadeIn(1000);
}

function calculator () {
    $(".calc").fadeToggle(1000);
}

function figure_light () {
    $(this).addClass("highlight");
    $('.highlight figcaption').css("background","#E8B71A");
    $('.highlight figcaption').css("font-family","Algerian");
    $('.highlight figcaption').css("color","#DB3340");
}

function figure_dark () {
    $('.highlight figcaption').css("color","#F7EAC8");
    $('.highlight figcaption').css("font-family","Open Sans Condensed");
    $('.highlight figcaption').css("background","#28ABE3");
    $(this).removeClass("highlight");
}

function light () {
    $(this).fadeTo("fast",1);
}

function dark () {
    $(this).fadeTo("fast",0.5);
}



    function testnumlength () {
      if (number.length > 7) {
          $('#total').text("Err");
          number = "";
      }  
    }
    var number ="";
    var newnumber = "";
    var total = "";
    var operator = "";
    $("#total").text("0");
    $("#numbers a, #decimal").not("#clear, #clearall").click(function (){
        newnumber = $(this).text();
        number += newnumber;
        $("#total").text(number);
        testnumlength(number);
    }); 
    $("#clear").click(function(){
        number = '';
        $("#total").text("0");
    });
    $("#clearall").click(function(){
        number = '';
        newnumber = '';
        $("#total").text("0");
    });
    $('#operators a').not("#equals, #decimal").click(function(){
        operator = $(this).text();
             total = number;
             number = "";
             $("#total").text(total+operator);
    });
    $('#equals').click (function() {
        if (operator === "+") {
            total=Number(total);
            number=Number(number);
            total += number;
            if ((total%total.toFixed(2)) === 0) {
                $("#total").text(total);
            } else {
                $("#total").text((total).toFixed(2));
            }
            total="";
            number="";
        } else if (operator === "-") {
            total=Number(total);
            number=Number(number);
            total -= number;
            if ((total%total.toFixed(2)) === 0) {
                $("#total").text(total);
            } else {
                $("#total").text((total).toFixed(2));
            }
            total="";
            number="";
        } else if (operator === "*") {
            total=Number(total);
            number=Number(number);
            total *= number;
            if ((total%total.toFixed(2)) === 0) {
                $("#total").text(total);
            } else {
                $("#total").text((total).toFixed(2));
            }
            total="";
            number="";
        } else if (operator === "/") {
            total=Number(total);
            number=Number(number);
            total /= number;
            if ((total%total.toFixed(2)) === 0) {
                $("#total").text(total);
            } else {
                $("#total").text((total).toFixed(2));
            }
            total="";
            number="";
        }
    });



$(function () {
    var pic = $('.pictures');
    var backgrounds = [
      'url(images/small/avstrijska_sv_small.jpg)', 
      'url(images/small/avstrijska_tem_small.jpg)', 
      'url(images/small/california_bil_small.jpg)', 
      'url(images/small/california_small.jpg)', 
      'url(images/small/california_sv_small.jpg)', 
      'url(images/small/california_tem_small.jpg)',  
      'url(images/small/carolinna_small.jpg)', 
      'url(images/small/cegljna_small.jpg)', 
      'url(images/small/copyng_small.jpg)',  
      'url(images/small/coralova_small.jpg)',  
      'url(images/small/corner_small.jpg)', 
      'url(images/small/garden_trav_small.jpg)',
      'url(images/small/modena_roz_small.jpg)',
      'url(images/small/modena_sv_small.jpg)',
      'url(images/small/old_small.jpg)',
      'url(images/small/old_street_small.jpg)',
      'url(images/small/st_myr_small.jpg)',
      'url(images/small/verona_sv_small.jpg)',
      'url(images/small/vushneva_small.jpg)',];
    var current = 0;

    function nextBackground() {
        pic.css(
            'background',
        backgrounds[current = ++current % backgrounds.length]);

        setTimeout(nextBackground, 5000);
    }
    setTimeout(nextBackground, 5000);
    body.css('background', backgrounds[0]);
});


    var array = [];
    array [0] = "'Success is most often achieved by those who don't know that failure is inevitable'--- Coco Chanel";
    array [1] = "'Things work out best for those who make the best of how things work out'--- John Wooden";
    array [2] = "'Courage is grace under pressure'--- Ernest Hemingway";
    array [3] = "'If you are not willing to risk the usual, you will have to settle for the ordinary'--- Jim Rohn";
    array [4] = "'Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning'--- Albert Einstein";
    array [5] = "'Take up one idea. Make that one idea your life -- think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body be full of that idea, and just leave every other idea alone. This is the way to success'--- Swami Vivekananda";
    array [6] = "'Sometimes you can't see yourself clearly until you see yourself through the eyes of others'--- Ellen DeGeneres";
    array [7] = "'All our dreams can come true if we have the courage to pursue them'--- Walt Disney";
    array [8] = "'It does not matter how slowly you go, so long as you do not stop'--- Confucius";
    array [9] = "'Success is walking from failure to failure with no loss of enthusiasm'--- Winston Churchill";
    array [10] = "'Someone is sitting in the shade today because someone planted a tree a long time ago'--- Warren Buffett";

document.getElementById("citations").innerHTML = array[Math.floor(Math.random()*10)];




document.getElementById('headphone').addEventListener('click', my);

function my () {
    var audio = document.getElementById('audio');
    audio.play();
    document.getElementById('headphone').addEventListener('click', me);
}

function me () {
    var audio = document.getElementById('audio');
    audio.pause();
    document.getElementById('headphone').removeEventListener('click', me);
}


});