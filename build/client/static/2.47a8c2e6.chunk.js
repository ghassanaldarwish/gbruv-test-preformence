(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/shared/layout/navbar/Navbar.css":function(e,s,a){},"./src/shared/layout/navbar/NewNavbar.jsx":function(e,s,a){"use strict";a.r(s);var t=a("./node_modules/react/index.js"),n=a.n(t),o=a("./node_modules/react-router-dom/esm/react-router-dom.js"),i=a("./node_modules/uuid/dist/esm-browser/v4.js");let r,l,c,p,m,h,d,u,g,f,y,k,w,b,v,A,E,S;!function(e){e.Link="link",e.Button="button",e.Collapse="collapse"}(r||(r={})),function(e){e.About="/about",e.QAndA="/faq",e.Affiliate="/affiliate",e.OurTeam="/our-team",e.PrivacyPolicy="/privacy-policy",e.Contact="/contact"}(l||(l={})),function(e){e.WheyProtein="/supplements/protein/whey-protein",e.WorkoutPlan="/WorkoutPlan",e.Blogs="/blogs",e.OurCommunity="/our-community",e.Sarms="/sarms",e.Supplements="/supplements",e.Account="/account",e.SupplementReview="/supplements/review",e.FishOil="/supplements/vitamins-and-health/fish-oil-and-omegas",e.Multivitamins="/supplements/vitamins-and-health/multivitamins",e.LCarnitine="/supplements/weight-management/l-carnitine",e.FatBurners="/supplements/weight-management/fat-burners",e.PostWorkoutRecovery="/supplements/performance/post-workout-recovery",e.PreWorkout="/supplements/performance/pre-workout",e.CaseinProtein="/supplements/protein/casein-protein",e.GreensFood="/supplements/vitamins-and-health/greens-food",e.SupplementsPerformanceEnergyEndurance="/supplements/performance/energy-endurance",e.VitaminsAndHealth="/supplements/vitamins-and-health",e.WeightManagement="/supplements/weight-management",e.Performance="/supplements/performance",e.Protein="/supplements/protein",e.WeightGainersProtin="/supplements/protein/weight-gainers",e.MassGainers="/supplements/protein/mass-gainers",e.MealReplacementsProtin="/supplements/protein/meal-replacements",e.ProteinBarsProtin="/supplements/protein/protein-bars",e.PlantProtein="/supplements/protein/plant-protein",e.Creatine="/supplements/performance/creatine",e.AminoAndBcaa="/supplements/performance/amino-and-bcaa",e.LCarnitineKetoAndCla="/supplements/weight-management/l-carnitine-keto-and-cla",e.LowCarbProtein="/supplements/weight-management/low-carb-protein",e.Womens="/womens",e.WomensClothes="/womens/clothes",e.WomensClothesPantsAndLeggings="/womens/clothes/pants-and-leggings",e.WomensClothesCropTops="/womens/clothes/crop-tops",e.WomensClothesHoodiesAndJackets="/womens/clothes/hoodies-and-jackets",e.WomensClothesShorts="/womens/clothes/shorts",e.WomensClothesSportsBras="/womens/clothes/sports-bras",e.WomensClothesSwimwear="/womens/clothes/swimwear",e.WomensClothesTShirtsAndTops="/womens/clothes/t-shirts-and-tops",e.WomensClothesSleevelessandTankTops="/womens/clothes/sleeveless-and-tank-tops",e.WomensClothesUnderwearAndSocks="/womens/clothes/underwear-and-socks",e.WomensAccessories="/womens/accessories",e.WomensAccessoriesSunglassesAndEyewearAccessories="/womens/accessories/sunglasses-and-eyewear",e.WomensAccessoriesScarvesAndWraps="/womens/accessories/scarves-and-wraps",e.WomensAccessoriesGlovesAndMittens="/womens/accessories/gloves-and-mittens",e.WomensAccessoriesHatsAndCaps="/womens/accessories/hats-and-caps",e.WomensAccessoriesEarmuffs="/womens/accessories/earmuffs",e.WomensAccessoriesHandbagAccessories="/womens/accessories/handbag-accessories",e.WomensAccessoriesKeyringsAndKeychains="/womens/accessories/keyrings-and-keychains",e.WomensAccessoriesWalletsAndCardCases="/womens/accessories/wallets-and-card-cases",e.WomensAccessoriesHandBag="/womens/accessories/handbag",e.WomensSportShoes="/womens/sport-shoes",e.WomensSportShoesRunning="/womens/sport-shoes/running",e.WomensSportShoesFitness="/womens/sport-shoes/fitness",e.WomensSportShoesLongDistanceRunning="/womens/sport-shoes/long-distance-running",e.WomensSportShoesLightWeigt="/womens/sport-shoes/light-weight",e.Mens="/mens",e.MensClothes="/mens/clothes",e.MensClothesBaselayers="/mens/clothes/baselayers",e.MensClothesHoodiesAndJackets="/mens/clothes/hoodies-and-jackets",e.MensClothesShorts="/mens/clothes/shorts",e.MensClothesPants="/mens/clothes/pants",e.MensClothesStringers="/mens/clothes/stringers",e.MensClothesTShirtsAndTops="/mens/clothes/t-shirts-and-tops",e.MensClothesSleevelessandTankTops="/mens/clothes/sleeveless-and-tank-tops",e.MensClothesUnderwearAndSocks="/mens/clothes/underwear-and-socks",e.MensAccessoriesHandBag="/mens/accessories/handbag",e.MensAccessories="/mens/accessories",e.MensAccessoriesBelts="/mens/accessories/belts",e.MensAccessoriesSunglassesAndEyewearAccessories="/mens/accessories/sunglasses-and-eyewear",e.MensAccessoriesScarvesAndWraps="/mens/accessories/scarves-and-wraps",e.MensAccessoriesGlovesAndMittens="/mens/accessories/gloves-and-mittens",e.MensAccessoriesHatsAndCaps="/mens/accessories/hats-and-caps",e.MensAccessoriesEarmuffs="/mens/accessories/earmuffs",e.MensAccessoriesHandbagAccessories="/mens/accessories/handbag-accessories",e.MensAccessoriesKeyringsAndKeychains="/mens/accessories/keyrings-and-keychains",e.MensAccessoriesWalletsAndCardCases="/mens/accessories/wallets-and-card-cases",e.MensAccessoriesSuspenders="/mens/accessories/suspenders",e.MensSportShoes="/mens/sport-shoes",e.MensSportShoesLightWeigt="/mens/sport-shoes/light-weight",e.MensSportShoesRunning="/mens/sport-shoes/running",e.MensSportShoesFitnessAndBodyBuilding="/mens/sport-shoes/fitness-and-body-building",e.MensSportShoesLongDistanceRunning="/mens/sport-shoes/long-distance-running"}(c||(c={})),function(e){e.Home="/",e.WheyProtein="/supplements/protein/whey-protein",e.FishOil="/supplements/vitamins-and-health/fish-oil-and-omegas",e.Multivitamins="/supplements/vitamins-and-health/multivitamins",e.LCarnitine="/supplements/weight-management/l-carnitine",e.FatBurners="/supplements/weight-management/fat-burners",e.PostWorkoutRecovery="/supplements/performance/post-workout-recovery",e.PreWorkout="/supplements/performance/pre-workout",e.CaseinProtein="/supplements/protein/casein-protein",e.GreensFood="/supplements/vitamins-and-health/greens-food",e.SupplementsPerformanceEnergyEndurance="/supplements/performance/energy-endurance",e.WeightGainersProtin="/supplements/protein/weight-gainers",e.MassGainers="/supplements/protein/mass-gainers",e.MealReplacementsProtin="/supplements/protein/meal-replacements",e.ProteinBarsProtin="/supplements/protein/protein-bars",e.PlantProtein="/supplements/protein/plant-protein",e.Creatine="/supplements/performance/creatine",e.AminoAndBcaa="/supplements/performance/amino-and-bcaa",e.LCarnitineKetoAndCla="/supplements/weight-management/l-carnitine-keto-and-cla",e.LowCarbProtein="/supplements/weight-management/low-carb-protein",e.WomensClothesPantsAndLeggings="/womens/clothes/pants-and-leggings",e.WomensClothesCropTops="/womens/clothes/crop-tops",e.WomensClothesHoodiesAndJackets="/womens/clothes/hoodies-and-jackets",e.WomensClothesShorts="/womens/clothes/shorts",e.WomensClothesSportsBras="/womens/clothes/sports-bras",e.WomensClothesSwimwear="/womens/clothes/swimwear",e.WomensClothesTShirtsAndTops="/womens/clothes/t-shirts-and-tops",e.WomensClothesSleevelessandTankTops="/womens/clothes/sleeveless-and-tank-tops",e.WomensClothesUnderwearAndSocks="/womens/clothes/underwear-and-socks",e.WomensAccessoriesSunglassesAndEyewearAccessories="/womens/accessories/sunglasses-and-eyewear",e.WomensAccessoriesScarvesAndWraps="/womens/accessories/scarves-and-wraps",e.WomensAccessoriesGlovesAndMittens="/womens/accessories/gloves-and-mittens",e.WomensAccessoriesHatsAndCaps="/womens/accessories/hats-and-caps",e.WomensAccessoriesEarmuffs="/womens/accessories/earmuffs",e.WomensAccessoriesHandbagAccessories="/womens/accessories/handbag-accessories",e.WomensAccessoriesKeyringsAndKeychains="/womens/accessories/keyrings-and-keychains",e.WomensAccessoriesWalletsAndCardCases="/womens/accessories/wallets-and-card-cases",e.WomensAccessoriesHandBag="/womens/accessories/handbag",e.WomensSportShoesRunning="/womens/sport-shoes/running",e.WomensSportShoesFitness="/womens/sport-shoes/fitness",e.WomensSportShoesLongDistanceRunning="/womens/sport-shoes/long-distance-running",e.WomensSportShoesLightWeigt="/womens/sport-shoes/light-weight",e.MensClothesBaselayers="/mens/clothes/baselayers",e.MensClothesHoodiesAndJackets="/mens/clothes/hoodies-and-jackets",e.MensClothesShorts="/mens/clothes/shorts",e.MensClothesPants="/mens/clothes/pants",e.MensClothesStringers="/mens/clothes/stringers",e.MensClothesTShirtsAndTops="/mens/clothes/t-shirts-and-tops",e.MensClothesSleevelessandTankTops="/mens/clothes/sleeveless-and-tank-tops",e.MensClothesUnderwearAndSocks="/mens/clothes/underwear-and-socks",e.MensAccessoriesHandBag="/mens/accessories/handbag",e.MensAccessoriesBelts="/mens/accessories/belts",e.MensAccessoriesSunglassesAndEyewearAccessories="/mens/accessories/sunglasses-and-eyewear",e.MensAccessoriesScarvesAndWraps="/mens/accessories/scarves-and-wraps",e.MensAccessoriesGlovesAndMittens="/mens/accessories/gloves-and-mittens",e.MensAccessoriesHatsAndCaps="/mens/accessories/hats-and-caps",e.MensAccessoriesEarmuffs="/mens/accessories/earmuffs",e.MensAccessoriesHandbagAccessories="/mens/accessories/handbag-accessories",e.MensAccessoriesKeyringsAndKeychains="/mens/accessories/keyrings-and-keychains",e.MensAccessoriesWalletsAndCardCases="/mens/accessories/wallets-and-card-cases",e.MensAccessoriesSuspenders="/mens/accessories/suspenders",e.MensSportShoesLightWeigt="/mens/sport-shoes/light-weight",e.MensSportShoesRunning="/mens/sport-shoes/running",e.MensSportShoesFitnessAndBodyBuilding="/mens/sport-shoes/fitness-and-body-building",e.MensSportShoesLongDistanceRunning="/mens/sport-shoes/long-distance-running"}(p||(p={})),function(e){e.Supplements="supplements",e.Mens="mens",e.Womens="womens"}(m||(m={})),function(e){e.Protein="protein",e.WeightManagement="weight-management",e.Performance="performance",e.VitaminsAndHealth="vitamins-and-health"}(h||(h={})),function(e){e.Whey="whey-protein",e.Casein="casein-protein",e.MassGainers="mass-gainers",e.Plant="plant-protein"}(d||(d={})),function(e){e.LCarnitine="l-carnitine",e.FatBurners="fat-burners",e.LCarnitineKetoAndCla="l-carnitine-keto-and-cla",e.LowCarbProtein="low-carb-protein"}(u||(u={})),function(e){e.PostWorkoutRecovery="post-workout-recovery",e.PreWorkout="pre-workout",e.Creatine="creatine",e.AminoAndBcaa="amino-and-bcaa",e.EnergyEndurance="energy-endurance"}(g||(g={})),function(e){e.FishOil="fish-oil-and-omegas",e.Multivitamins="multivitamins",e.GreensFood="greens-food"}(f||(f={})),function(e){e.Clothes="clothes",e.Accessories="accessories",e.SportShoes="sport-shoes"}(y||(y={})),function(e){e.Clothes="clothes",e.Accessories="accessories",e.SportShoes="sport-shoes"}(k||(k={})),function(e){e.Baselayers="baselayers",e.HoodiesAndJackets="hoodies-and-jackets",e.Shorts="shorts",e.Pants="pants",e.Stringers="stringers",e.TShirtsAndTops="t-shirts-and-tops",e.SleevelessandTankTops="sleeveless-and-tank-tops",e.UnderwearAndSocks="underwear-and-socks"}(w||(w={})),function(e){e.HandBag="handbag",e.Belts="belts",e.SunglassesAndEyewearAccessories="sunglasses-and-eyewear",e.ScarvesAndWraps="scarves-and-wraps",e.GlovesAndMittens="gloves-and-mittens",e.HatsAndCaps="hats-and-caps",e.Earmuffs="earmuffs",e.HandbagAccessories="handbag-accessories",e.KeyringsAndKeychains="keyrings-and-keychains",e.WalletsAndCardCases="wallets-and-card-cases",e.Suspenders="suspenders"}(b||(b={})),function(e){e.LightWeigt="light-weight",e.Running="running",e.FitnessAndBodyBuilding="fitness-and-body-building",e.LongDistanceRunning="long-distance-running"}(v||(v={})),function(e){e.PantsAndLeggings="pants-and-leggings",e.CropTops="crop-tops",e.HoodiesAndJackets="hoodies-and-jackets",e.Shorts="shorts",e.SportsBras="sports-bras",e.Swimwear="swimwear",e.TShirtsAndTops="t-shirts-and-tops",e.SleevelessandTankTops="sleeveless-and-tank-tops",e.UnderwearAndSocks="underwear-and-socks"}(A||(A={})),function(e){e.SunglassesAndEyewear="sunglasses-and-eyewear",e.ScarvesAndWraps="scarves-and-wraps",e.GlovesAndMittens="gloves-and-mittens",e.HatsAndCaps="hats-and-caps",e.Earmuffs="earmuffs",e.HandbagAccessories="handbag-accessories",e.KeyringsAndKeychains="keyrings-and-keychains",e.WalletsAndCardCases="wallets-and-card-cases",e.HandBag="handbag"}(E||(E={})),function(e){e.Running="running",e.Fitness="fitness",e.LongDistanceRunning="long-distance-running",e.LightWeigt="light-weight"}(S||(S={}));const C=[{key:Object(i.a)(),title:"whey protein",affiliate:!0,type:r.Link,path:"/supplements/protein/whey-protein"},{key:Object(i.a)(),title:"casein protein",affiliate:!0,type:r.Link,path:"/supplements/protein/casein-protein"},{key:Object(i.a)(),title:"mass gainers",affiliate:!0,type:r.Link,path:"/supplements/protein/mass-gainers"},{key:Object(i.a)(),title:"plant protein",affiliate:!0,type:r.Link,path:"/supplements/protein/plant-protein"}],j=[{key:Object(i.a)(),title:"pre workout",affiliate:!0,type:r.Link,path:"/supplements/performance/pre-workout"},{key:Object(i.a)(),title:"post workout recovery",affiliate:!0,type:r.Link,path:"/supplements/performance/post-workout-recovery"},{key:Object(i.a)(),title:"energy endurance",affiliate:!0,type:r.Link,path:"/supplements/performance/energy-endurance"},{key:Object(i.a)(),title:"creatine",affiliate:!0,type:r.Link,path:"/supplements/performance/creatine"},{key:Object(i.a)(),title:"amino & bcaa",affiliate:!0,type:r.Link,path:"/supplements/performance/amino-and-bcaa"}],O=[{key:Object(i.a)(),title:"fat burners",affiliate:!0,type:r.Link,path:"/supplements/weight-management/fat-burners"},{key:Object(i.a)(),title:"l-carnitine, keto & cla",affiliate:!0,type:r.Link,path:"/supplements/weight-management/l-carnitine-keto-and-cla"},{key:Object(i.a)(),title:"low carb protein",affiliate:!0,type:r.Link,path:"/supplements/weight-management/low-carb-protein"}],W=[{key:Object(i.a)(),title:"multivitamins",affiliate:!0,type:r.Link,path:"/supplements/vitamins-and-health/multivitamins"},{key:Object(i.a)(),title:"fish oil & omegas",affiliate:!0,type:r.Link,path:"/supplements/vitamins-and-health/fish-oil-and-omegas"},{key:Object(i.a)(),title:"greens food",affiliate:!0,type:r.Link,path:"/supplements/vitamins-and-health/greens-food"}],L=[{key:Object(i.a)(),title:"protein",affiliate:!0,type:r.Collapse,path:"/supplements/protein",options:C},{key:Object(i.a)(),title:"performance",affiliate:!0,type:r.Collapse,path:"/supplements/performance",options:j},{key:Object(i.a)(),title:"weight management",affiliate:!0,type:r.Collapse,path:"/supplements/weight-management",options:O},{key:Object(i.a)(),title:"vitamins & health",affiliate:!0,type:r.Collapse,path:"/supplements/vitamins-and-health",options:W}],M=[{key:Object(i.a)(),title:"baselayers",affiliate:!0,type:r.Link,path:"/mens/clothes/baselayers"},{key:Object(i.a)(),title:"hoodies & jackets",affiliate:!0,type:r.Link,path:"/mens/clothes/hoodies-and-jackets"},{key:Object(i.a)(),title:"shorts",affiliate:!0,type:r.Link,path:"/mens/clothes/shorts"},{key:Object(i.a)(),title:"pants",affiliate:!0,type:r.Link,path:"/mens/clothes/pants"},{key:Object(i.a)(),title:"stringers",affiliate:!0,type:r.Link,path:"/mens/clothes/stringers"},{key:Object(i.a)(),title:"t-Shirts & tops",affiliate:!0,type:r.Link,path:"/mens/clothes/t-shirts-and-tops"},{key:Object(i.a)(),title:"sleeveless & tank tops",affiliate:!0,type:r.Link,path:"/mens/clothes/sleeveless-and-tank-tops"},{key:Object(i.a)(),title:"underwear & socks",affiliate:!0,type:r.Link,path:"/mens/clothes/underwear-and-socks"}],P=[{key:Object(i.a)(),title:"belts",affiliate:!0,type:r.Link,path:"/mens/accessories/belts"},{key:Object(i.a)(),title:"sunglasses & eyewear",affiliate:!0,type:r.Link,path:"/mens/accessories/sunglasses-and-eyewear"},{key:Object(i.a)(),title:"scarves & wraps",affiliate:!0,type:r.Link,path:"/mens/accessories/scarves-and-wraps"},{key:Object(i.a)(),title:"gloves & mittens",affiliate:!0,type:r.Link,path:"/mens/accessories/gloves-and-mittens"},{key:Object(i.a)(),title:"hats & caps",affiliate:!0,type:r.Link,path:"/mens/accessories/hats-and-caps"},{key:Object(i.a)(),title:"earmuffs",affiliate:!0,type:r.Link,path:"/mens/accessories/earmuffs"},{key:Object(i.a)(),title:"handbag ",affiliate:!0,type:r.Link,path:"/mens/accessories/handbag "},{key:Object(i.a)(),title:"keyrings & keychains",affiliate:!0,type:r.Link,path:"/mens/accessories/keyrings-and-keychains"},{key:Object(i.a)(),title:"wallets & card cases",affiliate:!0,type:r.Link,path:"/mens/accessories/wallets-and-card-cases"},{key:Object(i.a)(),title:"suspenders",affiliate:!0,type:r.Link,path:"/mens/accessories/suspenders"}],N=[{key:Object(i.a)(),title:"running",affiliate:!0,type:r.Link,path:"/mens/sport-shoes/running"},{key:Object(i.a)(),title:"fitness & body building",affiliate:!0,type:r.Link,path:"/mens/sport-shoes/fitness-and-body-building"},{key:Object(i.a)(),title:"long distance running",affiliate:!0,type:r.Link,path:"/mens/sport-shoes/long-distance-running"},{key:Object(i.a)(),title:"light weight",affiliate:!0,type:r.Link,path:"/mens/sport-shoes/light-weight"}],T=[{key:Object(i.a)(),title:"clothes",affiliate:!0,type:r.Collapse,path:"/mens/clothes",options:M},{key:Object(i.a)(),title:"accessories",affiliate:!0,type:r.Collapse,path:"/mens/accessories",options:P},{key:Object(i.a)(),title:"sport shoes",affiliate:!0,type:r.Collapse,path:"/mens/sport-shoes",options:N}],B=[{key:Object(i.a)(),title:"crop tops",affiliate:!0,type:r.Link,path:"/womens/clothes/crop-tops"},{key:Object(i.a)(),title:"hoodies & jackets",affiliate:!0,type:r.Link,path:"/womens/clothes/hoodies-and-jackets"},{key:Object(i.a)(),title:"shorts",affiliate:!0,type:r.Link,path:"/womens/clothes/shorts"},{key:Object(i.a)(),title:"pants & leggings",affiliate:!0,type:r.Link,path:"/womens/clothes/pants-and-leggings"},{key:Object(i.a)(),title:"swimwear",affiliate:!0,type:r.Link,path:"/womens/clothes/swimwear"},{key:Object(i.a)(),title:"t-Shirts & tops",affiliate:!0,type:r.Link,path:"/womens/clothes/t-shirts-and-tops"},{key:Object(i.a)(),title:"sleeveless & tank tops",affiliate:!0,type:r.Link,path:"/womens/clothes/sleeveless-and-tank-tops"},{key:Object(i.a)(),title:"underwear & socks",affiliate:!0,type:r.Link,path:"/womens/clothes/underwear-and-socks"}],H=[{key:Object(i.a)(),title:"sunglasses & eyewear",affiliate:!0,type:r.Link,path:"/womens/accessories/sunglasses-and-eyewear"},{key:Object(i.a)(),title:"scarves & wraps",affiliate:!0,type:r.Link,path:"/womens/accessories/scarves-and-wraps"},{key:Object(i.a)(),title:"gloves & mittens",affiliate:!0,type:r.Link,path:"/womens/accessories/gloves-and-mittens"},{key:Object(i.a)(),title:"hats & caps",affiliate:!0,type:r.Link,path:"/womens/accessories/hats-and-caps"},{key:Object(i.a)(),title:"earmuffs",affiliate:!0,type:r.Link,path:"/womens/accessories/earmuffs"},{key:Object(i.a)(),title:"handbag ",affiliate:!0,type:r.Link,path:"/womens/accessories/handbag "},{key:Object(i.a)(),title:"keyrings & keychains",affiliate:!0,type:r.Link,path:"/womens/accessories/keyrings-and-keychains"},{key:Object(i.a)(),title:"wallets & card cases",affiliate:!0,type:r.Link,path:"/womens/accessories/wallets-and-card-cases"}],R=[{key:Object(i.a)(),title:"running",affiliate:!0,type:r.Link,path:"/womens/sport-shoes/running"},{key:Object(i.a)(),title:"fitness",affiliate:!0,type:r.Link,path:"/womens/sport-shoes/fitness"},{key:Object(i.a)(),title:"long distance running",affiliate:!0,type:r.Link,path:"/womens/sport-shoes/long-distance-running"},{key:Object(i.a)(),title:"light weight",affiliate:!0,type:r.Link,path:"/womens/sport-shoes/light-weight"}],F=[{key:Object(i.a)(),title:"clothes",affiliate:!0,type:r.Collapse,path:"/womens/clothes",options:B},{key:Object(i.a)(),title:"accessories",affiliate:!0,type:r.Collapse,path:"/womens/accessories",options:H},{key:Object(i.a)(),title:"sport shoes",affiliate:!0,type:r.Collapse,path:"/womens/sport-shoes",options:R}],K=[{key:Object(i.a)(),title:"supplements",affiliate:!0,type:r.Collapse,path:"/supplements",options:L},{key:Object(i.a)(),title:"mens",affiliate:!0,type:r.Collapse,path:"/mens",options:T},{key:Object(i.a)(),title:"womens",affiliate:!0,type:r.Collapse,path:"/womens",options:F}];var x=()=>{const[e,s]=Object(t.useState)();return Object(t.useEffect)(()=>{s(K)},[e]),{navbar:e}},G=a("./node_modules/react-owl-carousel3/lib/OwlCarousel.js"),D=a.n(G);function J(){return(J=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}const U={loop:!0,nav:!1,dots:!1,autoplayHoverPause:!0,autoplay:!0,animateOut:"slideOutDown",animateIn:"flipInX",items:1,navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"]};class _ extends t.Component{constructor(...e){var s,a,t;super(...e),t={display:!1,panel:!0},(a="state")in(s=this)?Object.defineProperty(s,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[a]=t}componentDidMount(){this.setState({display:!0})}render(){const{panel:e}=this.state;return n.a.createElement("div",{className:"top-panel "+(e?"":"hide")},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"panel-content"},this.state.display?n.a.createElement(D.a,J({className:"top-panel-slides owl-carousel owl-theme"},U),n.a.createElement("div",{className:"single-item-box"},n.a.createElement("p",null,n.a.createElement("strong",null,"Enjoy an extra 20% off")," select sales styles"," ",n.a.createElement(o.a,{href:"#"},n.a.createElement("a",null,"Read More")))),n.a.createElement("div",{className:"single-item-box"},n.a.createElement("p",null,n.a.createElement("strong",null,"Enjoy an extra 20% off")," select sales styles"," ",n.a.createElement(o.a,{href:"#"},n.a.createElement("a",null,"Read More")))),n.a.createElement("div",{className:"single-item-box"},n.a.createElement("p",null,n.a.createElement("strong",null,"Enjoy an extra 20% off")," select sales styles"," ",n.a.createElement(o.a,{href:"#"},n.a.createElement("a",null,"Read More"))))):"",n.a.createElement("i",{onClick:()=>this.setState({panel:!1}),className:"fas fa-times panel-close-btn"}))))}}var Q=_;function V(e,s,a){return s in e?Object.defineProperty(e,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[s]=a,e}class I extends t.Component{constructor(...e){super(...e),V(this,"state",{display:!1}),V(this,"handleWishlist",()=>{this.setState(e=>({display:!e.display}))})}render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"top-header"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"col-lg-7 col-md-6"},n.a.createElement("ul",{className:"top-header-nav"},n.a.createElement("li",null,n.a.createElement("a",{href:l.About},n.a.createElement("a",null,"About"))),n.a.createElement("li",null,n.a.createElement("a",{href:l.OurTeam},n.a.createElement("a",null,"Our Team"))),n.a.createElement("li",null,n.a.createElement("a",{href:l.QAndA},n.a.createElement("a",null,"FAQ's"))),n.a.createElement("li",null,n.a.createElement("a",{href:l.Contact},n.a.createElement("a",null,"Contact"))))),n.a.createElement("div",{className:"col-lg-5 col-md-6"},n.a.createElement("ul",{className:"top-header-right-nav"},n.a.createElement("li",null,n.a.createElement("a",{href:l.PrivacyPolicy},"privacy policy")),n.a.createElement("li",null,n.a.createElement("a",{href:l.Affiliate},"affiliate ",n.a.createElement("i",{className:"fas fa-balance-scale"})))))))))}}var q=I;a("./src/shared/layout/navbar/Navbar.css");var X=()=>n.a.createElement(o.a,{to:"/",className:"Logo"},"Classic Body");s.default=e=>{const s=(e,s)=>n.a.createElement("li",{key:s,className:"nav-item megamenu",style:{width:"auto",boxShadow:"none"}},n.a.createElement(o.a,{href:e.path},n.a.createElement("a",{href:e.path}," ",e.title,n.a.createElement("i",{className:"fas fa-chevron-down faArrowDown"}))),n.a.createElement("ul",{className:"dropdown-menu"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},e.options.map((e,s)=>n.a.createElement("div",{className:"col",key:s},n.a.createElement(o.a,{href:e.path},n.a.createElement("a",{href:e.path},n.a.createElement("h6",{className:"submenu-title"},e.title))),n.a.createElement("ul",{className:"megamenu-submenu"},e.options.map((e,s)=>((e,s)=>n.a.createElement("li",{key:s},n.a.createElement(o.a,{href:e.path},n.a.createElement("a",null,e.title))))(e,s))))),n.a.createElement("div",{className:"col"},n.a.createElement("ul",{className:"megamenu-submenu"},n.a.createElement("li",null,n.a.createElement("div",{className:"aside-trending-products"},n.a.createElement("img",{src:"https://cdn.iconscout.com/icon/free/png-256/nike-15-761696.png",alt:"image"}),n.a.createElement("div",{className:"category"},n.a.createElement("h4",null,"Top Trending")),n.a.createElement("a",{href:"#"})),n.a.createElement("div",{className:"aside-trending-products"},n.a.createElement("img",{src:"https://cdn.iconscout.com/icon/free/png-256/nike-15-761696.png",alt:"image"}),n.a.createElement("div",{className:"category"},n.a.createElement("h4",null,"Popular Products")),n.a.createElement("a",{href:"#"})))))))))),{navbar:a}=x(),[i,r]=Object(t.useState)(!0);Object(t.useEffect)(()=>{},[]);const l=i?"collapse navbar-collapse":"collapse navbar-collapse show",c=i?"navbar-toggler navbar-toggler-right collapsed":"navbar-toggler navbar-toggler-right";return a&&console.log("NEW NAVBAR =====>   ",a),n.a.createElement(n.a.Fragment,null,n.a.createElement(Q,null),n.a.createElement(q,null),a&&n.a.createElement("div",{className:"navbar-area"},n.a.createElement("div",{id:"navbar",className:"comero-nav"},n.a.createElement("div",{className:"container"},n.a.createElement("nav",{className:"navbar navbar-expand-md navbar-light"},n.a.createElement(X,null),n.a.createElement("button",{onClick:()=>{r(!i)},className:c,type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:l,id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav"},a.map((e,a)=>s(e,a)))))))))}}}]);
//# sourceMappingURL=2.47a8c2e6.chunk.js.map