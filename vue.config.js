const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require("webpack");

// Teaser URL
// https://sustainability.ikea.kr/ko/

// PT URL
// https://PTest.newideas.kr/ko/

const publicPath = process.env.NODE_ENV === 'production' ? '/' : '/';

//Main Site 공통( PT 제외 ) - ko
const metaTitle = "내가 아끼는 집, 나를 아끼는 집_지속가능한 내일을 위한 노력";
const metaKeyword = "IKEA, Sustainability, 지속가능성, 이케아, 지속가능한생활, IKEALab, 이벤트, 사람과지구, IKEA의노력, 이케아랩, 성수동, 팝업스토어, 홈퍼니싱, 인테리어디자인상담, 워크샵, 플라스틱, 울, 면, 목재, 대나무, IKEAFood, 사람과지구,친환경, 대나무가구,대나무조명,친환경울,친환경면, 친환경목재,FSC, MSS, 재생가능한플라스틱,재활용,아끼기, 이스타드, 탈리카, 지속가능한소비,지속가능한발전,지속가능경영, 지속가능한회사,지속가능, 행복을만드는우리집, 서스테인어빌리티,서스테인어블,워크숍, IKEAFamily,재활용,재사용,재생가능한";

const metaURL = "https://sustainability.ikea.kr/";
const metaShareImage = "https://sustainability.ikea.kr/ko/img/common/img_share_thumb.png";

//Main Site 공통( PT 제외 ) - en
const enMetaTitle = "Good for me, Good for my home. More sustainable tomorrow with IKEA";
const enMetaKeyword = "IKEA, Sustainability, Sustainability, IKEA, Sustainable life, IKEA Lab, Event, People and the Planet, IKEA's dedication, IKEA Lab, Seongsu-dong, Pop-up Store, Home Furnishing, Interior Design Consulting Support, Workshop, Plastic, Wool, Cotton, Wood, Bamboo, IKEA Food, People and the Planet, Eco-friendly, Bamboo Furniture, Bamboo Lamp, Eco-friendly Wool, Eco-friendly Cotton, Eco-friendly Wood, FSC, MSS, Renewable Plastic, Recycling, Saving, ISTAD, TALRIKA, Sustainable Consumption, Sustainable Development, Sustainable Management, Sustainable Corporation, Sustainable, Home of Happiness, Sustainability, Sustainable, Workshop, IKEA Family, Recyclable, Reusable, Regenerable";

const enMetaURL = "https://sustainability.ikea.kr/";
const enMetaShareImage = "https://sustainability.ikea.kr/en/img/common/img_share_thumb.png";

module.exports = {
    lintOnSave : false,
    runtimeCompiler: true,
    publicPath: publicPath,

    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/assets/css/scss/_global.scss";
                    @import "@/assets/css/scss/_easing.scss";
                `
            },
        },

        sourceMap : true,
    },

    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src/')
            }
        },

        plugins: [
            new CopyWebpackPlugin([
                {
                    from: path.join(__dirname, './static'),
                    to: path.join(__dirname, './dist/ko'),
                },
                {
                    from: path.join(__dirname, './static'),
                    to: path.join(__dirname, './dist/en'),
                },
            ]),

            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 1
            })
        ],
    },

    filenameHashing: false,
    productionSourceMap: false,

    pages : {
        "teaser" : {
            entry : [ "src/pages/teaser/teaser.js" ],
            template : "public/teaser.html",
            filename : "ko/teaser/index.html",

            title : metaTitle,
            url : metaURL,
            name : "teaser name",
            description : "사람과 지구의 지속가능성에 대한 IKEA의 노력을 확인하세요. IKEA Lab 위치 정보, 이벤트, 워크샵, 홈퍼니싱 컨설팅 상담 예약 안내",
            keywords : metaKeyword,
            share_url : "https://sustainability.ikea.kr/ko/teaser/",
            share_title :"내가 아끼는 집, 나를 아끼는 집_지속가능한 내일을 위한 노력",
            share_image : "https://sustainability.ikea.kr/ko/img/common/img_share_thumb.png",
            locale : "ko_KR",
            faviconurl : "../img/common/favicon.ico",
            language : "ko",
        },

        "en-teaser" : {
            entry : [ "src/pages/teaser/teaser.js" ],
            template : "public/teaser.html",
            filename : "en/teaser/index.html",

            title : enMetaTitle,
            url : enMetaURL,
            name : "teaser name",
            description : "Check out IKEA's commitment for the sustainability of people and the planet. All about IKEA Lab with event, workshop and interior design service.",
            keywords : enMetaKeyword,
            share_url : "https://sustainability.ikea.kr/en/teaser/",
            share_title :"Good for me, Good for my home. More sustainable tomorrow with IKEA",
            share_image : enMetaShareImage,
            locale : "en_US",
            faviconurl : "../img/common/favicon.ico",
            language : "en",
        },

        "main" : {
            entry : [ "src/pages/main/main.js" ],
            template : "public/index.html",
            filename : "ko/index.html",

            title : metaTitle,
            url : metaURL,
            name : "main name",
            description : "IKEA 내가 아끼는 집, 나를 아끼는 집. 사람과 지구를 위한 지속가능한 내일을 위한 IKEA의 노력을 확인하세요. IKEA Lab 위치 정보, 이벤트, 워크샵, 인테리어 디자인 상담 예약 안내 정보 확인 가능합니다.",
            keywords : metaKeyword,
            share_url : "https://sustainability.ikea.kr/ko/",
            share_title :"내가 아끼는 집, 나를 아끼는 집_지속가능한 내일을 위한 노력",
            share_image : metaShareImage,
            locale : "ko_KR",
            faviconurl : "./img/common/favicon.ico",
            language : "ko",
            // chunks: ['chunk-vendors', 'chunk-common', 'index' ]
        },

        "en-main" : {
            entry : [ "src/pages/main/main.js" ],
            template : "public/index.html",
            filename : "en/index.html",

            title : enMetaTitle,
            url : enMetaURL,
            name : "main name",
            description : "Check out IKEA's commitment for the sustainability of people and the planet. All about IKEA Lab with event, workshop and interior design service.",
            keywords : enMetaKeyword,
            share_url : "https://sustainability.ikea.kr/en/",
            share_title :"Good for me, Good for my home. More sustainable tomorrow with IKEA",
            share_image : enMetaShareImage,
            locale : "en_US",
            faviconurl : "./img/common/favicon.ico",
            language : "en",
            // chunks: ['chunk-vendors', 'chunk-common', 'index' ]
        },

        lab : {
            entry : [ "src/pages/lab/lab.js" ],
            template : "public/lab.html",
            filename : "ko/lab/index.html",

            title : metaTitle,
            url : metaURL,
            name : "lab name",
            description : "IKEA Lab이 성수동에 찾아왔어요. IKEA Lab 위치 정보 및 운영 시간, 층별 안내, 이벤트 안내, 워크샵 안내, 인테리어 디자인 상담 예약 안내를 확인할 수 있습니다.",
            keywords : metaKeyword,
            share_url : "https://sustainability.ikea.kr/ko/lab/",
            share_title :"IKEA Lab",
            share_image : metaShareImage,
            locale : "ko_KR",
            faviconurl : "../img/common/favicon.ico",
            language : "ko",
        },

        "en-lab" : {
            entry : [ "src/pages/lab/lab.js" ],
            template : "public/lab.html",
            filename : "en/lab/index.html",

            title : enMetaTitle,
            url : enMetaURL,
            name : "lab name",
            description : "IKEA Lab is now in Seongsu-dong. Check out all about IKEA Lab information including location, business hours, floor guide, event, workshop, and interior design service reservation. ",
            keywords : enMetaKeyword,
            share_url : "https://sustainability.ikea.kr/en/lab/",
            share_title :"IKEA Lab",
            share_image : enMetaShareImage,
            locale : "en_US",
            faviconurl : "../img/common/favicon.ico",
            language : "en",
        },

        sub : {
            entry : [ "src/pages/sub/sub.js" ],
            template : "public/sub.html",
            filename : "ko/sub/index.html",

            title : metaTitle,
            url : metaURL,
            name : "sub name",
            description : "IKEA가 지속가능한 내일을 위해 사용하는 5가지 소재와 환경 기준을 충족하고 사회적 책임을 다하는 식품만을 사용하는 IKEA Food 에 대한 소개 페이지입니다. 재활용 및 재생가능한 플라스틱, RWS 가이드라인을 준수한 울, 지속가능한 소재 대나무, FSC 인증 목재, 윤리적이고 지속가능한 면을 위한 목화, 탄소발자국을 줄이는 IKEA Food에 대해 확인할 수 있습니다. ",
            keywords : metaKeyword,
            share_url : "https://sustainability.ikea.kr/ko/sub/",
            share_title :"지속가능한 소재",
            share_image : metaShareImage,
            locale : "ko_KR",
            faviconurl : "../img/common/favicon.ico",
            language : "ko",
        },

        "en-sub" : {
            entry : [ "src/pages/sub/sub.js" ],
            template : "public/sub.html",
            filename : "en/sub/index.html",

            title : enMetaTitle,
            url : enMetaURL,
            name : "sub name",
            description : "Sustainable Everyday How sustainable is IKEA? Well with home solar, veggie hot dogs and kitchen fronts made of recycled plastic bottles, we want to inspire change. Because, as Ingvar Kamprad said: ‘No method is more effective than the good example.’",
            keywords : enMetaKeyword,
            share_url : "https://www.ikea.com/kr/en/sub/",
            share_title :"Sustainable materials",
            share_image : enMetaShareImage,
            locale : "en_US",
            faviconurl : "../img/common/favicon.ico",
            language : "en",
        },

        "community" : {
            entry : [ "src/pages/detail/detail.js" ],
            template : "public/detail.html",
            filename : "ko/community/index.html",
            pagename : "Community",

            title : metaTitle,
            url : metaURL,
            name : "Community name",
            description : "더 나은 사회를 만들기 위한 IKEA의 노력을 확인해보세요!",
            keywords : metaKeyword,
            share_url : "https://sustainability.ikea.kr/ko/community",
            share_title :"내가 아끼는 사회, 나를 아끼는 사회",
            share_image : metaShareImage,
            locale : "ko_KR",
            faviconurl : "../img/common/favicon.ico",
            language : "ko",
        },

        "en-community" : {
            entry : [ "src/pages/detail/detail.js" ],
            template : "public/detail.html",
            filename : "en/community/index.html",
            pagename : "Community",

            title : enMetaTitle,
            url : enMetaURL,
            name : "Community name",
            description : "Find out what IKEA is doing to make a better society",
            keywords : enMetaKeyword,
            share_url : "https://sustainability.ikea.kr/en/community/",
            share_title :"Good for me, Good for the Society",
            share_image : enMetaShareImage,
            locale : "en_US",
            faviconurl : "../img/common/favicon.ico",
            language : "en",
        },

        "earth" : {
            entry : [ "src/pages/detail/detail.js" ],
            template : "public/detail.html",
            filename : "ko/earth/index.html",
            pagename : "Earth",

            title : metaTitle,
            url : metaURL,
            name : "Earth name",
            description : "도심형 농장 IKEA 파르마레, 100% 전기차 배송, 바이백 서비스 등 지구를 아끼기 위한 IKEA의 노력을 확인하세요. ",
            keywords : metaKeyword,
            share_url : "https://sustainability.ikea.kr/ko/earth/",
            share_title :"내가 아끼는 지구, 나를 아끼는 지구",
            share_image : metaShareImage,
            locale : "ko_KR",
            faviconurl : "../img/common/favicon.ico",
            language : "ko",
        },

        "en-earth" : {
            entry : [ "src/pages/detail/detail.js" ],
            template : "public/detail.html",
            filename : "en/earth/index.html",
            pagename : "Earth",

            title : enMetaTitle,
            url : enMetaURL,
            name : "Earth name",
            description : "Urban farming, IKEA Farmare, 100% electric home delivery, the 'buy-back' service all represent IKEA's commitment to saving the planet. ",
            keywords : enMetaKeyword,
            share_url : "https://www.ikea.com/kr/en/earth/",
            share_title :"Good for me. Good for planet.",
            share_image : enMetaShareImage,
            locale : "en_US",
            faviconurl : "../img/common/favicon.ico",
            language : "en",
        },

        "plastic" : {
            entry : [ "src/pages/detail/detail.js" ],
            template : "public/detail.html",
            filename : "ko/plastic/index.html",
            pagename : "Plastic",

            title : metaTitle,
            url : metaURL,
            name : "Plastic name",
            description : "플라스틱 사용을 줄이고, 재활용 또는 재생 가능한 플라스틱을 위한 IKEA의 노력을 확인해보세요.",
            keywords : metaKeyword,
            share_url : "https://sustainability.ikea.kr/ko/plastic/",
            share_title :"지속가능한 소재 - 플라스틱",
            share_image : metaShareImage,
            locale : "ko_KR",
            faviconurl : "../img/common/favicon.ico",
            language : "ko",
        },
    
        "en-plastic" : {
            entry : [ "src/pages/detail/detail.js" ],
            template : "public/detail.html",
            filename : "en/plastic/index.html",
            pagename : "Plastic",
        
            title : enMetaTitle,
            url : enMetaURL,
            name : "Plastic name",
            description : "Our journey towards only using recycled or renewable based plastic will take some time and require new ways of doing things, but we are determined to take responsibility and find new solutions. Together, we can make a big difference! Find out more now!",
            keywords : enMetaKeyword,
            share_url : "https://sustainability.ikea.kr/en/plastic/",
            share_title :"Sustainable material - Plastic",
            share_image : enMetaShareImage,
            locale : "en_US",
            faviconurl : "../img/common/favicon.ico",
            language : "en",
        },

        "bamboo" : {
            entry : [ "src/pages/detail/detail.js" ],
            template : "public/detail.html",
            filename : "ko/bamboo/index.html",
            pagename : "Bamboo",

            title : metaTitle,
            url : metaURL,
            name : "Bamboo name",
            description : "세상에서 가장 빨리 자라는 나무인 대나무는 재생 능력도 뛰어나고 습기에 강해서  지속 가능한 미래를 위한 중요한 소재입니다. 대나무를 활용하여 IKEA는 어떤 노력을 하고 있는지 확인해보세요.",
            keywords : metaKeyword,
            share_url : "https://sustainability.ikea.kr/ko/bamboo/",
            share_title :"지속가능한 소재 - 대나무",
            share_image : metaShareImage,
            locale : "ko_KR",
            faviconurl : "../img/common/favicon.ico",
            language : "ko",
        },
    
        "en-bamboo" : {
            entry : [ "src/pages/detail/detail.js" ],
            template : "public/detail.html",
            filename : "en/bamboo/index.html",
            pagename : "Bamboo",
        
            title : enMetaTitle,
            url : enMetaURL,
            name : "Bamboo name",
            description : "Bamboo, one of the fastest growing plants in the world, is self-regenerable and moisture tolerant. That's why bamboo is a important material for a sustainable future. Find out more now!",
            keywords : enMetaKeyword,
            share_url : "https://sustainability.ikea.kr/en/bamboo/",
            share_title :"Sustainable material - Bamboo",
            share_image : enMetaShareImage,
            locale : "en_US",
            faviconurl : "../img/common/favicon.ico",
            language : "en",
        },

        "wood" : {
            entry : [ "src/pages/detail/detail.js" ],
            template : "public/detail.html",
            filename : "ko/wood/index.html",
            pagename : "Wood",

            title : metaTitle,
            url : metaURL,
            name : "Wood name",
            description : "FSC 인증을 받은 지속가능한 출처에서 공급받은 목재만을 사용해 제품을 생산하는 것이 IKEA의 궁극적인 목표입니다. 책임감 있는 산림 관리를 위한 IKEA의 노력을 확인해보세요. ",
            keywords : metaKeyword,
            share_url : "https://sustainability.ikea.kr/ko/wood/",
            share_title :"지속가능한 소재 - 목재",
            share_image : metaShareImage,
            locale : "ko_KR",
            faviconurl : "../img/common/favicon.ico",
            language : "ko",
        },
    
        "en-wood" : {
            entry : [ "src/pages/detail/detail.js" ],
            template : "public/detail.html",
            filename : "en/wood/index.html",
            pagename : "Wood",
        
            title : enMetaTitle,
            url : enMetaURL,
            name : "Wood name",
            description : "We're big fan of wood.  As one of the largest users of wood in the retail sector, we always look for ways to use it wisely and to source it according to high set standards. Our long-term goal is that all wood will come from more sustainable sources, defined as recycled or FSC® certified wood, by 2020. Find out more now!",
            keywords : enMetaKeyword,
            share_url : "https://sustainability.ikea.kr/en/wood/",
            share_title :"Sustainable material - Wood",
            share_image : enMetaShareImage,
            locale : "en_US",
            faviconurl : "../img/common/favicon.ico",
            language : "en",
        },

        "wool" : {
            entry : [ "src/pages/detail/detail.js" ],
            template : "public/detail.html",
            filename : "ko/wool/index.html",
            pagename : "Wool",

            title : metaTitle,
            url : metaURL,
            name : "Wool name",
            description : "IKEA는 사람과 동물, 지구에 좋은 영향을 미치고자 책임감 있는 출처에서 공급받은 울만으로 제품을 생산하려는 목표를 세워 실천해오고 있어요. 책임감 있는 울 인증 기준(RWS) 가이드라인을 준수하는 IKEA의 노력을 확인해보세요. ",
            keywords : metaKeyword,
            share_url : "https://sustainability.ikea.kr/ko/wool/",
            share_title :"지속가능한 소재 - 울",
            share_image : metaShareImage,
            locale : "ko_KR",
            faviconurl : "../img/common/favicon.ico",
            language : "ko",
        },
    
        "en-wool" : {
            entry : [ "src/pages/detail/detail.js" ],
            template : "public/detail.html",
            filename : "en/wool/index.html",
            pagename : "Wool",
        
            title : enMetaTitle,
            url : enMetaURL,
            name : "Wool name",
            description : "IKEA wants to have a positive impact on people, animals and the planet, and that’s why we’re on a journey to transform all the wool we use in our products to 100% Responsibly Sourced Wool. Check out IKEA's efforts to follow RWS guidelines that promote responsible wool. Find out more now!",
            keywords : enMetaKeyword,
            share_url : "https://sustainability.ikea.kr/en/wool/",
            share_title :"Sustainable material - Wool",
            share_image : enMetaShareImage,
            locale : "en_US",
            faviconurl : "../img/common/favicon.ico",
            language : "en",
        },

        "cotton" : {
            entry : [ "src/pages/detail/detail.js" ],
            template : "public/detail.html",
            filename : "ko/cotton/index.html",
            pagename : "Cotton",

            title : metaTitle,
            url : metaURL,
            name : "Cotton name",
            description : "IKEA는 산업과 사람, 지구에 유익한 방식으로 목화 재배방식을 변화시키기 위해 WWF 및 다양한 단체와 협력해 Better Cotton 프로젝트(BCI)를 시작했습니다. 지속가능한 면을 위한 IKEA의 노력을 확인해보세요.",
            keywords : metaKeyword,
            share_url : "https://sustainability.ikea.kr/ko/cotton/",
            share_title :"지속가능한 소재 - 면",
            share_image : metaShareImage,
            locale : "ko_KR",
            faviconurl : "../img/common/favicon.ico",
            language : "ko",
        },
    
        "en-cotton" : {
            entry : [ "src/pages/detail/detail.js" ],
            template : "public/detail.html",
            filename : "en/cotton/index.html",
            pagename : "Cotton",
        
            title : enMetaTitle,
            url : enMetaURL,
            name : "Cotton name",
            description : "100% committed to sustainable cotton. We have made a commitment to only use cotton grown in a responsible way in our products, for the benefit of our customers and the planet. Find out more now!",
            keywords : enMetaKeyword,
            share_url : "https://sustainability.ikea.kr/en/cotton/",
            share_title :"Sustainable Material - Cotton",
            share_image : enMetaShareImage,
            locale : "en_US",
            faviconurl : "../img/common/favicon.ico",
            language : "en",
        },

        "food" : {
            entry : [ "src/pages/detail/detail.js" ],
            template : "public/detail.html",
            filename : "ko/food/index.html",
            pagename : "Food",

            title : metaTitle,
            url : metaURL,
            name : "Food name",
            description : "IKEA는 지속가능하면서도 맛있고 균형 잡힌 영양의 식품을 낮은 가격에 제공하고자 합니다. 그래서 엄격한 환경 기준을 통과하고 사회적 책임을 다하는 엄선된 재료만을 사용하고 있어요. 지속가능한 내일을 위한 IKEA Food의 노력을 확인해보세요.",
            keywords : metaKeyword,
            share_url : "https://sustainability.ikea.kr/ko/food/",
            share_title :"지속가능한 내일 - IKEA Food",
            share_image : metaShareImage,
            locale : "ko_KR",
            faviconurl : "../img/common/favicon.ico",
            language : "ko",
        },

        "en-food" : {
            entry : [ "src/pages/detail/detail.js" ],
            template : "public/detail.html",
            filename : "en/food/index.html",
            pagename : "Food",

            title : enMetaTitle,
            url : enMetaURL,
            name : "Food name",
            description : "Delicious food you can trust. IKEA will never compromise on food quality and always aim to offer options that are tasty, affordable, nutritionally balanced and more sustainable. That’s why we’ve challenged ourselves to use ingredients that come from sustainable, responsible, and certified sources. Find out more now!",
            keywords : enMetaKeyword,
            share_url : "https://sustainability.ikea.kr/en/food/",
            share_title :"Sustainable Tomorrow - IKEA Food",
            share_image : enMetaShareImage,
            locale : "en_US",
            faviconurl : "../img/common/favicon.ico",
            language : "en",
        },

        "sustainabilitytest" : {
            entry : [ "src/pages/sustainabilitytest/sustainabilitytest.js" ],
            template : "public/sustainabilitytest.html",
            filename : "ko/sustainabilitytest/index.html",

            title : "2020 지구 특공대 판독기",
            url : "http://ptest.newideas.kr/ko/sustainabilitytest/",
            name : "sustainabilitytest name",
            description : "2020 지구 특공대 판독기 - 지구가… 지금 위험합니다. 지구를 살릴 수 있는 마지막 세대인 당신. 당신은 히어로인가요 빌런인가요? 당신의 일상 속에서 습관적으로 하는 행동에 답이 숨어있습니다. 지금 바로 측정해보세요.",
            keywords : "MBTI테스트, 퍼스널테스트, IKEA, Sustainability, Personal Test, 지구파괴력, 빌런, 히어로, 파괴력측정기, 테스트, MBTI, 문워커, 엿장수, 기미상궁, 미니멀리스트, 바다거북저승사자, 미세먼지공장장, 인간세척기, 아수라, 지구특공대, 특수무기, 지구특공대테스트결과, 지구특공대, 지구특공대무기,인체공학적베개, 클룹스포레,베개, 쿨링젤베개, 사계절베개, 베쉬다, 반사클립, 자건거반사클립, 머그컵, 텀블러, 할렌스크, DIY텀블러, 토르트스메트, 세제, 브러시, 설거지, 세제낭비줄이는법, 순한맛, 홀바르, 분리수거함, IKEA365+, IKEA365, 식품보관용기, 락앤락, 음식보관용기, 음식보관, 수납함, 수납박스, 옷정리, 장난감정리, 베지볼, 탄소발자국, 채소, 테스트결과",
            share_url : "http://ptest.newideas.kr/ko/sustainabilitytest/",
            share_title : "2020 지구 특공대 판독기",
            share_image : "https://ptest.newideas.kr/ko/img/sustainabilitytest/img-share-intro.jpg",
            locale : "ko_KR",
            faviconurl : "../img/common/favicon.ico",
            language : "ko",
        },

        "en-sustainabilitytest" : {
            entry : [ "src/pages/sustainabilitytest/sustainabilitytest.js" ],
            template : "public/sustainabilitytest.html",
            filename : "en/sustainabilitytest/index.html",

            title : "Planetary Special Forces Test 2020",
            url : "http://ptest.newideas.kr/en/sustainabilitytest/",
            name : "sustainabilitytest name",
            description : "Planetary Special Forces Test 2020. The planet is now in danger. You are of the last generation to save the planet. Are you a superhero or a villain? The answer lies in your daily habits. Find out now if you have the special power to heal or destroy the planet.",
            keywords : "MBTI Test, Personal Test, IKEA, Sustainability, Personal Test, Earth-destroying power, Villain, Hero, Earth-destroying power scanner, Test, MBTI, Greta Thunberg, Product Life Saver, Food Taster with a Small Appetite, Minimalist, Angel of Death for Sea Turtles, Fine Dust Manufacturer, Obsessive Compulsive Cleaner, Jekyll and Hyde, Planetary Special Forces, Special Weapon,  Planetary Special Forces Test Result, Planetary Special Forces, Special Weapons for Planetary Special Forces, Ergonomic Pillow, Klubbsporre, Pillow, Cooling Gel Pillow, Pillow for Four Seasons, Beskydda, Reflective Tag, Bicycle Reflective Tag, Mug, Tumbler, HALLANDSK, DIY Tumbler, TÅRTSMET, Dish Soap, Brush, Dishwashing, How to save dish soap, Nice Villain, HÅLLBAR, recycle bin, IKEA365+, IKEA365, Food Container, Lock & Lock, Leftover Container, Storing Food, Storage Drawer, Storage Box, Clothes Storage, Toy Storage, Veggie Balls, Carbon Footprint, Vegetable, Test Result",
            share_url : "http://ptest.newideas.kr/en/sustainabilitytest/",
            share_title : "Planetary Special Forces Test 2020",
            share_image : "https://ptest.newideas.kr/en/img/sustainabilitytest/en-img-share-intro.jpg",
            locale : "en_US",
            faviconurl : "../img/common/favicon.ico",
            language : "en",
        },

        "result-level-1" : {
            entry : [ "src/pages/result/result.js" ],
            template : "public/result.html",
            filename : "ko/result-level-1/index.html",
            pagename : "Result-level-1",

            title : "2020 지구 특공대 판독기",
            url : "http://ptest.newideas.kr/ko/result-level-1/",
            name : "result-level-1 name",
            description : "2020 지구 특공대 판독기 - 지구가… 지금 위험합니다. 지구를 살릴 수 있는 마지막 세대인 당신. 당신은 히어로인가요 빌런인가요? 당신의 일상 속에서 습관적으로 하는 행동에 답이 숨어있습니다. 지금 바로 측정해보세요.",
            keywords : "MBTI테스트, 퍼스널테스트, IKEA, Sustainability, Personal Test, 지구파괴력, 빌런, 히어로, 파괴력측정기, 테스트, MBTI, 문워커, 엿장수, 기미상궁, 미니멀리스트, 바다거북저승사자, 미세먼지공장장, 인간세척기, 아수라, 지구특공대, 특수무기, 지구특공대테스트결과, 지구특공대, 지구특공대무기,인체공학적베개, 클룹스포레,베개, 쿨링젤베개, 사계절베개, 베쉬다, 반사클립, 자건거반사클립, 머그컵, 텀블러, 할렌스크, DIY텀블러, 토르트스메트, 세제, 브러시, 설거지, 세제낭비줄이는법, 순한맛, 홀바르, 분리수거함, IKEA365+, IKEA365, 식품보관용기, 락앤락, 음식보관용기, 음식보관, 수납함, 수납박스, 옷정리, 장난감정리, 베지볼, 탄소발자국, 채소, 테스트결과",
            share_url : "http://ptest.newideas.kr/ko/result-level-1/",
            share_title : "2020 지구 특공대 판독기",
            share_image : "http://ptest.newideas.kr/ko/img/sustainabilitytest/img-share-result1.jpg",
            locale : "ko_KR",
            faviconurl : "../img/common/favicon.ico",
            language : "ko",
        },

        "result-level-2" : {
            entry : [ "src/pages/result/result.js" ],
            template : "public/result.html",
            filename : "ko/result-level-2/index.html",
            pagename : "Result-level-2",

            title : "2020 지구 특공대 판독기",
            url : "http://ptest.newideas.kr/ko/result-level-2/",
            name : "result-level-2 name",
            description : "2020 지구 특공대 판독기 - 지구가… 지금 위험합니다. 지구를 살릴 수 있는 마지막 세대인 당신. 당신은 히어로인가요 빌런인가요? 당신의 일상 속에서 습관적으로 하는 행동에 답이 숨어있습니다. 지금 바로 측정해보세요.",
            keywords : "MBTI테스트, 퍼스널테스트, IKEA, Sustainability, Personal Test, 지구파괴력, 빌런, 히어로, 파괴력측정기, 테스트, MBTI, 문워커, 엿장수, 기미상궁, 미니멀리스트, 바다거북저승사자, 미세먼지공장장, 인간세척기, 아수라, 지구특공대, 특수무기, 지구특공대테스트결과, 지구특공대, 지구특공대무기,인체공학적베개, 클룹스포레,베개, 쿨링젤베개, 사계절베개, 베쉬다, 반사클립, 자건거반사클립, 머그컵, 텀블러, 할렌스크, DIY텀블러, 토르트스메트, 세제, 브러시, 설거지, 세제낭비줄이는법, 순한맛, 홀바르, 분리수거함, IKEA365+, IKEA365, 식품보관용기, 락앤락, 음식보관용기, 음식보관, 수납함, 수납박스, 옷정리, 장난감정리, 베지볼, 탄소발자국, 채소, 테스트결과",
            share_url : "http://ptest.newideas.kr/ko/result-level-2/",
            share_title : "2020 지구 특공대 판독기",
            share_image : "http://ptest.newideas.kr/ko/img/sustainabilitytest/img-share-result2.jpg",
            locale : "ko_KR",
            faviconurl : "../img/common/favicon.ico",
            language : "ko",
        },

        "result-level-3" : {
            entry : [ "src/pages/result/result.js" ],
            template : "public/result.html",
            filename : "ko/result-level-3/index.html",
            pagename : "Result-level-3",

            title : "2020 지구 특공대 판독기",
            url : "http://ptest.newideas.kr/ko/result-level-3/",
            name : "result-level-3 name",
            description : "2020 지구 특공대 판독기 - 지구가… 지금 위험합니다. 지구를 살릴 수 있는 마지막 세대인 당신. 당신은 히어로인가요 빌런인가요? 당신의 일상 속에서 습관적으로 하는 행동에 답이 숨어있습니다. 지금 바로 측정해보세요.",
            keywords : "MBTI테스트, 퍼스널테스트, IKEA, Sustainability, Personal Test, 지구파괴력, 빌런, 히어로, 파괴력측정기, 테스트, MBTI, 문워커, 엿장수, 기미상궁, 미니멀리스트, 바다거북저승사자, 미세먼지공장장, 인간세척기, 아수라, 지구특공대, 특수무기, 지구특공대테스트결과, 지구특공대, 지구특공대무기,인체공학적베개, 클룹스포레,베개, 쿨링젤베개, 사계절베개, 베쉬다, 반사클립, 자건거반사클립, 머그컵, 텀블러, 할렌스크, DIY텀블러, 토르트스메트, 세제, 브러시, 설거지, 세제낭비줄이는법, 순한맛, 홀바르, 분리수거함, IKEA365+, IKEA365, 식품보관용기, 락앤락, 음식보관용기, 음식보관, 수납함, 수납박스, 옷정리, 장난감정리, 베지볼, 탄소발자국, 채소, 테스트결과",
            share_url : "http://ptest.newideas.kr/ko/result-level-3/",
            share_title : "2020 지구 특공대 판독기",
            share_image : "http://ptest.newideas.kr/ko/img/sustainabilitytest/img-share-result3.jpg",
            locale : "ko_KR",
            faviconurl : "../img/common/favicon.ico",
            language : "ko",
        },

        "result-level-4" : {
            entry : [ "src/pages/result/result.js" ],
            template : "public/result.html",
            filename : "ko/result-level-4/index.html",
            pagename : "Result-level-4",

            title : "2020 지구 특공대 판독기",
            url : "http://ptest.newideas.kr/ko/result-level-4/",
            name : "result-level-4 name",
            description : "2020 지구 특공대 판독기 - 지구가… 지금 위험합니다. 지구를 살릴 수 있는 마지막 세대인 당신. 당신은 히어로인가요 빌런인가요? 당신의 일상 속에서 습관적으로 하는 행동에 답이 숨어있습니다. 지금 바로 측정해보세요.",
            keywords : "MBTI테스트, 퍼스널테스트, IKEA, Sustainability, Personal Test, 지구파괴력, 빌런, 히어로, 파괴력측정기, 테스트, MBTI, 문워커, 엿장수, 기미상궁, 미니멀리스트, 바다거북저승사자, 미세먼지공장장, 인간세척기, 아수라, 지구특공대, 특수무기, 지구특공대테스트결과, 지구특공대, 지구특공대무기,인체공학적베개, 클룹스포레,베개, 쿨링젤베개, 사계절베개, 베쉬다, 반사클립, 자건거반사클립, 머그컵, 텀블러, 할렌스크, DIY텀블러, 토르트스메트, 세제, 브러시, 설거지, 세제낭비줄이는법, 순한맛, 홀바르, 분리수거함, IKEA365+, IKEA365, 식품보관용기, 락앤락, 음식보관용기, 음식보관, 수납함, 수납박스, 옷정리, 장난감정리, 베지볼, 탄소발자국, 채소, 테스트결과",
            share_url : "http://ptest.newideas.kr/ko/result-level-4/",
            share_title : "2020 지구 특공대 판독기",
            share_image : "http://ptest.newideas.kr/ko/img/sustainabilitytest/img-share-result4.jpg",
            locale : "ko_KR",
            faviconurl : "../img/common/favicon.ico",
            language : "ko",
        },

        "result-level-5" : {
            entry : [ "src/pages/result/result.js" ],
            template : "public/result.html",
            filename : "ko/result-level-5/index.html",
            pagename : "Result-level-5",

            title : "2020 지구 특공대 판독기",
            url : "http://ptest.newideas.kr/ko/result-level-5/",
            name : "result-level-5 name",
            description : "2020 지구 특공대 판독기 - 지구가… 지금 위험합니다. 지구를 살릴 수 있는 마지막 세대인 당신. 당신은 히어로인가요 빌런인가요? 당신의 일상 속에서 습관적으로 하는 행동에 답이 숨어있습니다. 지금 바로 측정해보세요.",
            keywords : "MBTI테스트, 퍼스널테스트, IKEA, Sustainability, Personal Test, 지구파괴력, 빌런, 히어로, 파괴력측정기, 테스트, MBTI, 문워커, 엿장수, 기미상궁, 미니멀리스트, 바다거북저승사자, 미세먼지공장장, 인간세척기, 아수라, 지구특공대, 특수무기, 지구특공대테스트결과, 지구특공대, 지구특공대무기,인체공학적베개, 클룹스포레,베개, 쿨링젤베개, 사계절베개, 베쉬다, 반사클립, 자건거반사클립, 머그컵, 텀블러, 할렌스크, DIY텀블러, 토르트스메트, 세제, 브러시, 설거지, 세제낭비줄이는법, 순한맛, 홀바르, 분리수거함, IKEA365+, IKEA365, 식품보관용기, 락앤락, 음식보관용기, 음식보관, 수납함, 수납박스, 옷정리, 장난감정리, 베지볼, 탄소발자국, 채소, 테스트결과",
            share_url : "http://ptest.newideas.kr/ko/result-level-5/",
            share_title : "2020 지구 특공대 판독기",
            share_image : "http://ptest.newideas.kr/ko/img/sustainabilitytest/img-share-result5.jpg",
            locale : "ko_KR",
            faviconurl : "../img/common/favicon.ico",
            language : "ko",
        },

        "result-level-6" : {
            entry : [ "src/pages/result/result.js" ],
            template : "public/result.html",
            filename : "ko/result-level-6/index.html",
            pagename : "Result-level-6",

            title : "2020 지구 특공대 판독기",
            url : "http://ptest.newideas.kr/ko/result-level-6/",
            name : "result-level-6 name",
            description : "2020 지구 특공대 판독기 - 지구가… 지금 위험합니다. 지구를 살릴 수 있는 마지막 세대인 당신. 당신은 히어로인가요 빌런인가요? 당신의 일상 속에서 습관적으로 하는 행동에 답이 숨어있습니다. 지금 바로 측정해보세요.",
            keywords : "MBTI테스트, 퍼스널테스트, IKEA, Sustainability, Personal Test, 지구파괴력, 빌런, 히어로, 파괴력측정기, 테스트, MBTI, 문워커, 엿장수, 기미상궁, 미니멀리스트, 바다거북저승사자, 미세먼지공장장, 인간세척기, 아수라, 지구특공대, 특수무기, 지구특공대테스트결과, 지구특공대, 지구특공대무기,인체공학적베개, 클룹스포레,베개, 쿨링젤베개, 사계절베개, 베쉬다, 반사클립, 자건거반사클립, 머그컵, 텀블러, 할렌스크, DIY텀블러, 토르트스메트, 세제, 브러시, 설거지, 세제낭비줄이는법, 순한맛, 홀바르, 분리수거함, IKEA365+, IKEA365, 식품보관용기, 락앤락, 음식보관용기, 음식보관, 수납함, 수납박스, 옷정리, 장난감정리, 베지볼, 탄소발자국, 채소, 테스트결과",
            share_url : "http://ptest.newideas.kr/ko/result-level-6/",
            share_title : "2020 지구 특공대 판독기",
            share_image : "http://ptest.newideas.kr/ko/img/sustainabilitytest/img-share-result6.jpg",
            locale : "ko_KR",
            faviconurl : "../img/common/favicon.ico",
            language : "ko",
        },

        "result-level-7" : {
            entry : [ "src/pages/result/result.js" ],
            template : "public/result.html",
            filename : "ko/result-level-7/index.html",
            pagename : "Result-level-7",

            title : "2020 지구 특공대 판독기",
            url : "http://ptest.newideas.kr/ko/result-level-7/",
            name : "result-level-7 name",
            description : "2020 지구 특공대 판독기 - 지구가… 지금 위험합니다. 지구를 살릴 수 있는 마지막 세대인 당신. 당신은 히어로인가요 빌런인가요? 당신의 일상 속에서 습관적으로 하는 행동에 답이 숨어있습니다. 지금 바로 측정해보세요.",
            keywords : "MBTI테스트, 퍼스널테스트, IKEA, Sustainability, Personal Test, 지구파괴력, 빌런, 히어로, 파괴력측정기, 테스트, MBTI, 문워커, 엿장수, 기미상궁, 미니멀리스트, 바다거북저승사자, 미세먼지공장장, 인간세척기, 아수라, 지구특공대, 특수무기, 지구특공대테스트결과, 지구특공대, 지구특공대무기,인체공학적베개, 클룹스포레,베개, 쿨링젤베개, 사계절베개, 베쉬다, 반사클립, 자건거반사클립, 머그컵, 텀블러, 할렌스크, DIY텀블러, 토르트스메트, 세제, 브러시, 설거지, 세제낭비줄이는법, 순한맛, 홀바르, 분리수거함, IKEA365+, IKEA365, 식품보관용기, 락앤락, 음식보관용기, 음식보관, 수납함, 수납박스, 옷정리, 장난감정리, 베지볼, 탄소발자국, 채소, 테스트결과",
            share_url : "http://ptest.newideas.kr/ko/result-level-7/",
            share_title : "2020 지구 특공대 판독기",
            share_image : "http://ptest.newideas.kr/ko/img/sustainabilitytest/img-share-result7.jpg",
            locale : "ko_KR",
            faviconurl : "../img/common/favicon.ico",
            language : "ko",
        },

        "result-level-8" : {
            entry : [ "src/pages/result/result.js" ],
            template : "public/result.html",
            filename : "ko/result-level-8/index.html",
            pagename : "Result-level-8",

            title : "2020 지구 특공대 판독기",
            url : "http://ptest.newideas.kr/ko/result-level-8/",
            name : "result-level-8 name",
            description : "2020 지구 특공대 판독기 - 지구가… 지금 위험합니다. 지구를 살릴 수 있는 마지막 세대인 당신. 당신은 히어로인가요 빌런인가요? 당신의 일상 속에서 습관적으로 하는 행동에 답이 숨어있습니다. 지금 바로 측정해보세요.",
            keywords : "MBTI테스트, 퍼스널테스트, IKEA, Sustainability, Personal Test, 지구파괴력, 빌런, 히어로, 파괴력측정기, 테스트, MBTI, 문워커, 엿장수, 기미상궁, 미니멀리스트, 바다거북저승사자, 미세먼지공장장, 인간세척기, 아수라, 지구특공대, 특수무기, 지구특공대테스트결과, 지구특공대, 지구특공대무기,인체공학적베개, 클룹스포레,베개, 쿨링젤베개, 사계절베개, 베쉬다, 반사클립, 자건거반사클립, 머그컵, 텀블러, 할렌스크, DIY텀블러, 토르트스메트, 세제, 브러시, 설거지, 세제낭비줄이는법, 순한맛, 홀바르, 분리수거함, IKEA365+, IKEA365, 식품보관용기, 락앤락, 음식보관용기, 음식보관, 수납함, 수납박스, 옷정리, 장난감정리, 베지볼, 탄소발자국, 채소, 테스트결과",
            share_url : "http://ptest.newideas.kr/ko/result-level-8/",
            share_title : "2020 지구 특공대 판독기",
            share_image : "http://ptest.newideas.kr/ko/img/sustainabilitytest/img-share-result8.jpg",
            locale : "ko_KR",
            faviconurl : "../img/common/favicon.ico",
            language : "ko",
        },

        "en-result-level-1" : {
            entry : [ "src/pages/result/result.js" ],
            template : "public/result.html",
            filename : "en/result-level-1/index.html",
            pagename : "Result-level-1",

            title : "Planetary Special Forces Test 2020",
            url : "http://ptest.newideas.kr/en/result-level-1/",
            name : "result-level-1 name",
            description : "Planetary Special Forces Test 2020. The planet is now in danger. You are of the last generation to save the planet. Are you a superhero or a villain? The answer lies in your daily habits. Find out now if you have the special power to heal or destroy the planet.",
            keywords : "MBTI Test, Personal Test, IKEA, Sustainability, Personal Test, Earth-destroying power, Villain, Hero, Earth-destroying power scanner, Test, MBTI, Greta Thunberg, Product Life Saver, Food Taster with a Small Appetite, Minimalist, Angel of Death for Sea Turtles, Fine Dust Manufacturer, Obsessive Compulsive Cleaner, Jekyll and Hyde, Planetary Special Forces, Special Weapon,  Planetary Special Forces Test Result, Planetary Special Forces, Special Weapons for Planetary Special Forces, Ergonomic Pillow, Klubbsporre, Pillow, Cooling Gel Pillow, Pillow for Four Seasons, Beskydda, Reflective Tag, Bicycle Reflective Tag, Mug, Tumbler, HALLANDSK, DIY Tumbler, TÅRTSMET, Dish Soap, Brush, Dishwashing, How to save dish soap, Nice Villain, HÅLLBAR, recycle bin, IKEA365+, IKEA365, Food Container, Lock & Lock, Leftover Container, Storing Food, Storage Drawer, Storage Box, Clothes Storage, Toy Storage, Veggie Balls, Carbon Footprint, Vegetable, Test Result",
            share_url : "http://ptest.newideas.kr/en/result-level-1/",
            share_title :"Planetary Special Forces Test 2020",
            share_image : "http://ptest.newideas.kr/en/img/sustainabilitytest/img-share-result1.jpg",
            locale : "en_US",
            faviconurl : "../img/common/favicon.ico",
            language : "en",
        },

        "en-result-level-2" : {
            entry : [ "src/pages/result/result.js" ],
            template : "public/result.html",
            filename : "en/result-level-2/index.html",
            pagename : "Result-level-2",

            title : "Planetary Special Forces Test 2020",
            url : "http://ptest.newideas.kr/en/result-level-2/",
            name : "result-level-2 name",
            description : "Planetary Special Forces Test 2020. The planet is now in danger. You are of the last generation to save the planet. Are you a superhero or a villain? The answer lies in your daily habits. Find out now if you have the special power to heal or destroy the planet.",
            keywords : "MBTI Test, Personal Test, IKEA, Sustainability, Personal Test, Earth-destroying power, Villain, Hero, Earth-destroying power scanner, Test, MBTI, Greta Thunberg, Product Life Saver, Food Taster with a Small Appetite, Minimalist, Angel of Death for Sea Turtles, Fine Dust Manufacturer, Obsessive Compulsive Cleaner, Jekyll and Hyde, Planetary Special Forces, Special Weapon,  Planetary Special Forces Test Result, Planetary Special Forces, Special Weapons for Planetary Special Forces, Ergonomic Pillow, Klubbsporre, Pillow, Cooling Gel Pillow, Pillow for Four Seasons, Beskydda, Reflective Tag, Bicycle Reflective Tag, Mug, Tumbler, HALLANDSK, DIY Tumbler, TÅRTSMET, Dish Soap, Brush, Dishwashing, How to save dish soap, Nice Villain, HÅLLBAR, recycle bin, IKEA365+, IKEA365, Food Container, Lock & Lock, Leftover Container, Storing Food, Storage Drawer, Storage Box, Clothes Storage, Toy Storage, Veggie Balls, Carbon Footprint, Vegetable, Test Result",
            share_url : "http://ptest.newideas.kr/en/result-level-2/",
            share_title :"Planetary Special Forces Test 2020",
            share_image : "http://ptest.newideas.kr/en/img/sustainabilitytest/img-share-result2.jpg",
            locale : "en_US",
            faviconurl : "../img/common/favicon.ico",
            language : "en",
        },

        "en-result-level-3" : {
            entry : [ "src/pages/result/result.js" ],
            template : "public/result.html",
            filename : "en/result-level-3/index.html",
            pagename : "Result-level-3",

            title : "Planetary Special Forces Test 2020",
            url : "http://ptest.newideas.kr/en/result-level-3/",
            name : "result-level-3 name",
            description : "Planetary Special Forces Test 2020. The planet is now in danger. You are of the last generation to save the planet. Are you a superhero or a villain? The answer lies in your daily habits. Find out now if you have the special power to heal or destroy the planet.",
            keywords : "MBTI Test, Personal Test, IKEA, Sustainability, Personal Test, Earth-destroying power, Villain, Hero, Earth-destroying power scanner, Test, MBTI, Greta Thunberg, Product Life Saver, Food Taster with a Small Appetite, Minimalist, Angel of Death for Sea Turtles, Fine Dust Manufacturer, Obsessive Compulsive Cleaner, Jekyll and Hyde, Planetary Special Forces, Special Weapon,  Planetary Special Forces Test Result, Planetary Special Forces, Special Weapons for Planetary Special Forces, Ergonomic Pillow, Klubbsporre, Pillow, Cooling Gel Pillow, Pillow for Four Seasons, Beskydda, Reflective Tag, Bicycle Reflective Tag, Mug, Tumbler, HALLANDSK, DIY Tumbler, TÅRTSMET, Dish Soap, Brush, Dishwashing, How to save dish soap, Nice Villain, HÅLLBAR, recycle bin, IKEA365+, IKEA365, Food Container, Lock & Lock, Leftover Container, Storing Food, Storage Drawer, Storage Box, Clothes Storage, Toy Storage, Veggie Balls, Carbon Footprint, Vegetable, Test Result",
            share_url : "http://ptest.newideas.kr/en/result-level-3/",
            share_title :"Planetary Special Forces Test 2020",
            share_image : "http://ptest.newideas.kr/en/img/sustainabilitytest/img-share-result3.jpg",
            locale : "en_US",
            faviconurl : "../img/common/favicon.ico",
            language : "en",
        },

        "en-result-level-4" : {
            entry : [ "src/pages/result/result.js" ],
            template : "public/result.html",
            filename : "en/result-level-4/index.html",
            pagename : "Result-level-4",

            title : "Planetary Special Forces Test 2020",
            url : "http://ptest.newideas.kr/en/result-level-4/",
            name : "result-level-4 name",
            description : "Planetary Special Forces Test 2020. The planet is now in danger. You are of the last generation to save the planet. Are you a superhero or a villain? The answer lies in your daily habits. Find out now if you have the special power to heal or destroy the planet.",
            keywords : "MBTI Test, Personal Test, IKEA, Sustainability, Personal Test, Earth-destroying power, Villain, Hero, Earth-destroying power scanner, Test, MBTI, Greta Thunberg, Product Life Saver, Food Taster with a Small Appetite, Minimalist, Angel of Death for Sea Turtles, Fine Dust Manufacturer, Obsessive Compulsive Cleaner, Jekyll and Hyde, Planetary Special Forces, Special Weapon,  Planetary Special Forces Test Result, Planetary Special Forces, Special Weapons for Planetary Special Forces, Ergonomic Pillow, Klubbsporre, Pillow, Cooling Gel Pillow, Pillow for Four Seasons, Beskydda, Reflective Tag, Bicycle Reflective Tag, Mug, Tumbler, HALLANDSK, DIY Tumbler, TÅRTSMET, Dish Soap, Brush, Dishwashing, How to save dish soap, Nice Villain, HÅLLBAR, recycle bin, IKEA365+, IKEA365, Food Container, Lock & Lock, Leftover Container, Storing Food, Storage Drawer, Storage Box, Clothes Storage, Toy Storage, Veggie Balls, Carbon Footprint, Vegetable, Test Result",
            share_url : "http://ptest.newideas.kr/en/result-level-4/",
            share_title :"Planetary Special Forces Test 2020",
            share_image : "http://ptest.newideas.kr/en/img/sustainabilitytest/img-share-result4.jpg",
            locale : "en_US",
            faviconurl : "../img/common/favicon.ico",
            language : "en",
        },

        "en-result-level-5" : {
            entry : [ "src/pages/result/result.js" ],
            template : "public/result.html",
            filename : "en/result-level-5/index.html",
            pagename : "Result-level-5",

            title : "Planetary Special Forces Test 2020",
            url : "http://ptest.newideas.kr/en/result-level-5/",
            name : "result-level-5 name",
            description : "Planetary Special Forces Test 2020. The planet is now in danger. You are of the last generation to save the planet. Are you a superhero or a villain? The answer lies in your daily habits. Find out now if you have the special power to heal or destroy the planet.",
            keywords : "MBTI Test, Personal Test, IKEA, Sustainability, Personal Test, Earth-destroying power, Villain, Hero, Earth-destroying power scanner, Test, MBTI, Greta Thunberg, Product Life Saver, Food Taster with a Small Appetite, Minimalist, Angel of Death for Sea Turtles, Fine Dust Manufacturer, Obsessive Compulsive Cleaner, Jekyll and Hyde, Planetary Special Forces, Special Weapon,  Planetary Special Forces Test Result, Planetary Special Forces, Special Weapons for Planetary Special Forces, Ergonomic Pillow, Klubbsporre, Pillow, Cooling Gel Pillow, Pillow for Four Seasons, Beskydda, Reflective Tag, Bicycle Reflective Tag, Mug, Tumbler, HALLANDSK, DIY Tumbler, TÅRTSMET, Dish Soap, Brush, Dishwashing, How to save dish soap, Nice Villain, HÅLLBAR, recycle bin, IKEA365+, IKEA365, Food Container, Lock & Lock, Leftover Container, Storing Food, Storage Drawer, Storage Box, Clothes Storage, Toy Storage, Veggie Balls, Carbon Footprint, Vegetable, Test Result",
            share_url : "http://ptest.newideas.kr/en/result-level-5/",
            share_title :"Planetary Special Forces Test 2020",
            share_image : "http://ptest.newideas.kr/en/img/sustainabilitytest/img-share-result5.jpg",
            locale : "en_US",
            faviconurl : "../img/common/favicon.ico",
            language : "en",
        },

        "en-result-level-6" : {
            entry : [ "src/pages/result/result.js" ],
            template : "public/result.html",
            filename : "en/result-level-6/index.html",
            pagename : "Result-level-6",

            title : "Planetary Special Forces Test 2020",
            url : "http://ptest.newideas.kr/en/result-level-6/",
            name : "result-level-6 name",
            description : "Planetary Special Forces Test 2020. The planet is now in danger. You are of the last generation to save the planet. Are you a superhero or a villain? The answer lies in your daily habits. Find out now if you have the special power to heal or destroy the planet.",
            keywords : "MBTI Test, Personal Test, IKEA, Sustainability, Personal Test, Earth-destroying power, Villain, Hero, Earth-destroying power scanner, Test, MBTI, Greta Thunberg, Product Life Saver, Food Taster with a Small Appetite, Minimalist, Angel of Death for Sea Turtles, Fine Dust Manufacturer, Obsessive Compulsive Cleaner, Jekyll and Hyde, Planetary Special Forces, Special Weapon,  Planetary Special Forces Test Result, Planetary Special Forces, Special Weapons for Planetary Special Forces, Ergonomic Pillow, Klubbsporre, Pillow, Cooling Gel Pillow, Pillow for Four Seasons, Beskydda, Reflective Tag, Bicycle Reflective Tag, Mug, Tumbler, HALLANDSK, DIY Tumbler, TÅRTSMET, Dish Soap, Brush, Dishwashing, How to save dish soap, Nice Villain, HÅLLBAR, recycle bin, IKEA365+, IKEA365, Food Container, Lock & Lock, Leftover Container, Storing Food, Storage Drawer, Storage Box, Clothes Storage, Toy Storage, Veggie Balls, Carbon Footprint, Vegetable, Test Result",
            share_url : "http://ptest.newideas.kr/en/result-level-6/",
            share_title :"Planetary Special Forces Test 2020",
            share_image : "http://ptest.newideas.kr/en/img/sustainabilitytest/img-share-result6.jpg",
            locale : "en_US",
            faviconurl : "../img/common/favicon.ico",
            language : "en",
        },

        "en-result-level-7" : {
            entry : [ "src/pages/result/result.js" ],
            template : "public/result.html",
            filename : "en/result-level-7/index.html",
            pagename : "Result-level-7",

            title : "Planetary Special Forces Test 2020",
            url : "http://ptest.newideas.kr/en/result-level-7/",
            name : "result-level-7 name",
            description : "Planetary Special Forces Test 2020. The planet is now in danger. You are of the last generation to save the planet. Are you a superhero or a villain? The answer lies in your daily habits. Find out now if you have the special power to heal or destroy the planet.",
            keywords : "MBTI Test, Personal Test, IKEA, Sustainability, Personal Test, Earth-destroying power, Villain, Hero, Earth-destroying power scanner, Test, MBTI, Greta Thunberg, Product Life Saver, Food Taster with a Small Appetite, Minimalist, Angel of Death for Sea Turtles, Fine Dust Manufacturer, Obsessive Compulsive Cleaner, Jekyll and Hyde, Planetary Special Forces, Special Weapon,  Planetary Special Forces Test Result, Planetary Special Forces, Special Weapons for Planetary Special Forces, Ergonomic Pillow, Klubbsporre, Pillow, Cooling Gel Pillow, Pillow for Four Seasons, Beskydda, Reflective Tag, Bicycle Reflective Tag, Mug, Tumbler, HALLANDSK, DIY Tumbler, TÅRTSMET, Dish Soap, Brush, Dishwashing, How to save dish soap, Nice Villain, HÅLLBAR, recycle bin, IKEA365+, IKEA365, Food Container, Lock & Lock, Leftover Container, Storing Food, Storage Drawer, Storage Box, Clothes Storage, Toy Storage, Veggie Balls, Carbon Footprint, Vegetable, Test Result",
            share_url : "http://ptest.newideas.kr/en/result-level-7/",
            share_title :"Planetary Special Forces Test 2020",
            share_image : "http://ptest.newideas.kr/en/img/sustainabilitytest/img-share-result7.jpg",
            locale : "en_US",
            faviconurl : "../img/common/favicon.ico",
            language : "en",
        },

        "en-result-level-8" : {
            entry : [ "src/pages/result/result.js" ],
            template : "public/result.html",
            filename : "en/result-level-8/index.html",
            pagename : "Result-level-8",

            title : "Planetary Special Forces Test 2020",
            url : "http://ptest.newideas.kr/en/result-level-8/",
            name : "result-level-8 name",
            description : "Planetary Special Forces Test 2020. The planet is now in danger. You are of the last generation to save the planet. Are you a superhero or a villain? The answer lies in your daily habits. Find out now if you have the special power to heal or destroy the planet.",
            keywords : "MBTI Test, Personal Test, IKEA, Sustainability, Personal Test, Earth-destroying power, Villain, Hero, Earth-destroying power scanner, Test, MBTI, Greta Thunberg, Product Life Saver, Food Taster with a Small Appetite, Minimalist, Angel of Death for Sea Turtles, Fine Dust Manufacturer, Obsessive Compulsive Cleaner, Jekyll and Hyde, Planetary Special Forces, Special Weapon,  Planetary Special Forces Test Result, Planetary Special Forces, Special Weapons for Planetary Special Forces, Ergonomic Pillow, Klubbsporre, Pillow, Cooling Gel Pillow, Pillow for Four Seasons, Beskydda, Reflective Tag, Bicycle Reflective Tag, Mug, Tumbler, HALLANDSK, DIY Tumbler, TÅRTSMET, Dish Soap, Brush, Dishwashing, How to save dish soap, Nice Villain, HÅLLBAR, recycle bin, IKEA365+, IKEA365, Food Container, Lock & Lock, Leftover Container, Storing Food, Storage Drawer, Storage Box, Clothes Storage, Toy Storage, Veggie Balls, Carbon Footprint, Vegetable, Test Result",
            share_url : "http://ptest.newideas.kr/en/result-level-8/",
            share_title :"Planetary Special Forces Test 2020",
            share_image : "http://ptest.newideas.kr/en/img/sustainabilitytest/img-share-result8.jpg",
            locale : "en_US",
            faviconurl : "../img/common/favicon.ico",
            language : "en",
        },
    }
}
