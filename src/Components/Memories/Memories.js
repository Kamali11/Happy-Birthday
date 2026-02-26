import { useState } from "react";

import m1 from "../../Assets/memories/m1.jpeg";
import m2 from "../../Assets/memories/m2.jpeg";
// import m3 from "../../Assets/memories/m3.jpeg";
import m4 from "../../Assets/memories/m4.jpeg";
import m5 from "../../Assets/memories/m5.jpeg";
import m6 from "../../Assets/memories/m6.jpeg";
import m7 from "../../Assets/memories/m7.jpeg";
import m8 from "../../Assets/memories/m8.jpeg";
import m9 from "../../Assets/memories/m9.jpeg";

import m11 from "../../Assets/memories/m11.jpeg";
import m12 from "../../Assets/memories/m12.jpeg";
import m13 from "../../Assets/memories/m13.jpeg";
import m14 from "../../Assets/memories/m14.jpeg";
import m15 from "../../Assets/memories/m15.jpeg";
import m16 from "../../Assets/memories/m16.jpeg";
import m17 from "../../Assets/memories/m17.jpeg";
import m18 from "../../Assets/memories/m18.jpeg";
import m19 from "../../Assets/memories/m19.jpeg";
import m20 from "../../Assets/memories/m20.jpeg";
import m21 from "../../Assets/memories/m21.jpeg";
import m22 from "../../Assets/memories/m22.jpeg";
import m23 from "../../Assets/memories/m23.jpeg";
import m24 from "../../Assets/memories/m24.jpeg";
import m26 from "../../Assets/memories/m26.jpeg";
import m27 from "../../Assets/memories/m27.jpeg";
import m28 from "../../Assets/memories/m28.jpeg";
import m29 from "../../Assets/memories/m29.jpeg";
import m30 from "../../Assets/memories/m30.jpeg";
import m31 from "../../Assets/memories/m31.jpeg";
import m32 from "../../Assets/memories/m32.jpeg";
import m33 from "../../Assets/memories/m33.jpeg";
import m34 from "../../Assets/memories/m34.jpeg";
import m35 from "../../Assets/memories/m35.jpeg";
import m36 from "../../Assets/memories/m36.jpeg";
import m37 from "../../Assets/memories/m37.jpeg";
import m38 from "../../Assets/memories/m38.jpeg";
import m39 from "../../Assets/memories/m39.jpeg";
import m40 from "../../Assets/memories/m40.jpeg";




export default function Memories() {
    const [selectedMemory, setSelectedMemory] = useState(null);

    const memories = [
        {
            id: 1,
            title: "First Meet 💕",
            image: m1,
            short: "Beautiful day to Trichy",
            full: "First Day Meeting Rendu Perum Payanthude Meet Panna Day, Trichy Pillaiyar kovil ponom",
            position: "object-top"
        },
        {
            id: 2,
            title: "College Meet Day 🌊",
            image: m2,
            short: "First Pic of Our College Together",
            full: "First Picture Namma college onna rendu perum edutha Picture, Certificate vanga vantha day",
            position:"object-cover"
        },
       
         {
            id: 4,
            title: "Temple Day ",
            image: m4,
            short: "Meenakshi Amman Kovil Meet",
            full: "Meenakshi Amman Kovil la Sudhitu Ice cream, nalla suthuna Day",
            position:"object-top"
        },
         {
            id: 5,
            title: "Beach Day ",
            image: m5,
            short: "First time Chennai pona Day",
            full: "Yarukkum theriyama chennai vanthu first time meet panna day, nee madurai vanthu kudidu pona chennai poitu unga v2ku ponom apo edutha picture ",
            position:"object-cover"
        },
         {
            id: 6,
            title: "Diwali Day ",
            image: m6,
            short:"Diwaliku Edutha Picture",
            full: "Diwaliku nee vanthu kudidu unga v2ku ponom, apo diwali annaiku edutha picture",
            position:"object-cover"
        }, {
            id: 7,
            title: "Thanjavur Pona Day",
            image: m7,
            short: "Thanjavur Pogum pothu edutha Picture",
            full: "First time Thanjavurkku ponom Nalla enjoy pannom, Romba Pidicha Meeting",
            position:"object-cover"
        }, {
            id: 8,
            title: "Besant Beach Day 🌊",
            image: m8,
            short: "Unnoda birthday Beach Day",
            full: "Unnoda Birthday ku naa unnaiya thedi chennai vantha apo besant nagar poitu nalla games ellam play pannitu enjoy pannitu last intha picture edutha day",
            position:"object-cover"
        }, {
            id: 9,
            title: "Engagement Day",
            image: m9,
            short: "Secret Engagement Picture",
            full: "Yarukittuyum solllama Thiruvannamalai ku poitu Namma Rendu perukkum onna ring vangitu namma anga engagement pannikitta day, unforgetable moments nadantha place",
            position:"object-top"
        }, , {
            id: 11,
            title: "Dam Day",
            image: m11,
            short: "Dam Pona apo edutha Picture",
            full:"First Time unga family kuda senthu onna Dam pona Day",
            position:"object-top"
        }, {
            id: 12,
            title: "Vellimalai Day ",
            image: m12,
            short: "Periyar falls Picture",
            full: "Namma rendu peru mattum periyar falls poitu konja time spend pannitu anga edutha picture",
            position:"object-cover"
        }, {
            id: 13,
            title: "En Birth Day",
            image: m13,
            short: "AlagarKovil Picture",
            full: "Ennoda Birthday ku Madurai ku nee vantha apo namma priyanka ellarum onna senthu alagarkovil edutha nammaloda picture",
            position:"object-cover"
        }, {
            id: 14,
            title: "Singapore Pona Day",
            image: m14,
            short: "Airport Picture",
            full: "Naa Romba miss panna day May 9 2023, Naa unnaiya annaiku romba aluga vachuruken aanalum annaiku romba miss panni alutha day",
            position:"object-top"
        }, {
            id: 15,
            title: "India Vantha Day",
            image: m15,
            short: "Chennai Airport Picture",
            full: "Romba naal aprm unnaiya patha day romba happie ah iruntha day may 1 2025 unforgettable Day, Kanneer kalantha happieah iruntha naal athu",
            position:"object-cover"
        }, {
            id: 16,
            title: "Gradution Day",
            image: m16,
            short: "College la Edutha Picture",
            full: "Namma Love Success Agi ellarum munnadiyum edutha picture, romba happieah irunthuchu namma onna padicha college la namma rendu perume edir pathirukka matom aana namma annaiku ellerum munnadiyum edutha picture, namma ellam enga onnu sera porom nu sonnagavanga munnadi namma happie ah marriage pannikira porom nu sonna day",
            position:"object-cover"
        }, {
            id: 17,
            title: "Kerala Day",
            image: m17,
            short: "Aazimala Temple Picture",
            full: "First time namma long distance aprm meet panni long trip pona day apo pona temple la edutha picture enoda favourite temple la un kuda varanum nu prey pannitunthen antha asai niravetrivitta day",
            position:"object-cover"
        }, {
            id: 18,
            title: "Purchasing Day",
            image: m18,
            short: "Purchasing Picture",
            full: "Marriage date fix agi namma rendu perukum dress edukka pona day apo namma edutha picture clicks",
            position:"object-cover"
        }, {
            id: 19,
            title: "Invitation Day",
            image: m19,
            short: "Invitation kudkum pothu Picture",
            full: "Namma Marriage ku ennoda friends ku invitation kudukka pona apo edutha picture, antha sariya rain la yum namma rendu perum edutha picture",
            position:"object-top"
        }, {
            id: 20,
            title: "Madapuram Day",
            image: m20,
            short: "Temple Invitation Picture",
            full: "Family oda namma madapuram poitu anga invitation vaikka pona apo eduthaa beautiful picture, one of the my favourite",
            position:"object-cover"
        }, {
            id: 21,
            title: "Pre-Wedding Day",
            image: m21,
            short: "Photo Shoot Picture",
            full: "Othakadai murugan koviluku poitu namma pre wedding phot shoot ku same color dress edutha edutha shoot",
            position:"object-cover"
        }, {
            id: 22,
            title: "Sivan Temple Day",
            image: m22,
            short: "Sivan Temple Edutha Picture",
            full: "Sivan temple ku vanthu invitation vaikkum pothu namma rendu perum onna edutha picture",
            position:"object-cover"
        }, {
            id: 23,
            title: "Free shoot Day",
            image: m23,
            short: "Free Shooting Picture",
            full: "Muthu frnd Freeya namaku edutha kudutha namma eduthukitta second prewedding shooting picture enaku romba pidicha picture ",
            position:"object-cover"
        }, {
            id: 24,
            title: "Nalangu Day",
            image: m24,
            short: "June 5 2025 Nalagu Picture",
            full: "Marriage ku munnadi naal namaku ooru ellarum onna senthu vacha nalangu, enga caste ithu ellam pannathu illai, but enaku ithu ellam vithiyasama irunthuchu one of the best best moments",
            position:"object-cover"
        }, {
            id: 27,
            title: "Marriage Day",
            image: m27,
            short: "Our Best Moments Happened Jun6 2025 ",
            full: "Namma Ivolo naal kanavu kanda naal, Most precious moments for every girl , unakey ennai eluthi kudutha Day Innum enoda kannukullaiye nikkuthu, enna tha ennoda Family ellaraiyum vitutu vanthlum enaku intha moments epovum best",
            position:"object-cover"
        }, {
            id: 26,
            title: "Marriage Day",
            image: m26,
            short: "First Picture",
            full: "Unnoda Pondati aana aprm edutha aprm intha picture the our first picture",
            position:"object-cover"
        }, {
            id: 28,
            title: "Reception Day",
            image: m28,
            short: "Reception edutha First Picture",
            full: "Namma Marriege muduchitu dress changing pannitu namma edutha first picture",
            position:"object-cover"
        }, {
            id: 29,
            title: "Yercurd Day",
            image: m29,
            short: "Yercurd Trip Picture",
            full: "Namaku marriage muduchu namma pona first trip or family trip ithu tha namma enna oru sad news na namma onnume enjoy pannala nee en kuda illave illa romba feel panna day",
            position:"object-cover"
        }, {
            id: 30,
            title: "Random Day",
            image: m30,
            short: "Favourite Picture",
            full: "Random ah edutha apo namaku pidicha namma favourite picture ",
            position:"object-cover"
        }, {
            id: 31,
            title: "Temple Function Day",
            image: m31,
            short: "Kumbapisekam Day",
            full: "unga ooru murugan kovil Kumbapisekathukku edutha picture enaku oru picture",
            position:"object-cover"
        }, {
            id: 32,
            title: "Tirupati Day",
            image: m32,
            short: "Tirupati Edutha Picture",
            full: "Marriage aagitu family ah pona first temple trip, 3 days nalla enjoy panna day",
            position:"object-cover"
        }, {
            id: 33,
            title: "Munnar Day",
            image: m33,
            short: "Munnar Picture",
            full: "College friends trip pottu kudutha Day, munnar poitu tree camp la thangi trekking pona day",
            position:"object-cover"
        }, {
            id: 34,
            title: "Trekking Day",
            image: m34,
            short: "Black banthar la edutha Picture",
            full: "Namma Trekking poitu sun bath view eduthudu black banthar kuda edutha 360 camera la edutha picture",
            position:"object-cover"
        }, {
            id: 35,
            title: "Thali changing Day",
            image: m35,
            short: "Second Marriage Picture",
            full: "Thali pirichu korkkum pothu namaku nadantha memories intha picture",
            position:"object-contain"
        },
         {
            id: 36,
            title: "Diwali Day",
            image: m36,
            short: "Thala Diwali Picture",
            full: "Namma Rendu peroda Thala diwali ku edutha picture, enna oru sad na ennoda v2 la nee vanthu enjoyb pannanum but enoda family situatiion na anga vanthu apo namma enjoy pannitom",
            position:"object-top"
        }, {
            id: 37,
            title: "Deepam Day ",
            image: m37,
            short: "Karthigai deepam Picture",
            full: "Namakunu oru v2 anga namma rendu perum yarum illama karthigai deepam kondunom namma irunthuchu enaku romba pidichhurunthuchu",
            position:"object-cover"
        }, {
            id: 38,
            title:"Ennoda Birth Day",
            image: m38,
            short: "Cake Cutting Picture",
            full: "Naa expect pannatha alavu nee enaku cake cutting panni happie ah edutha picture, unforgetable moments",
            position:"object-cover"
        }, {
            id: 39,
            title: "Pongal Day ",
            image: m39,
            short: "Pongal Picture",
            full: "Pongaluku namma rendu perum saravana stories poitu edutha picture, aana naa una romba miss panna day, en na nee ennaiya vututu unga v2ku kelambuna day",
            position:"object-cover"
        }, {
            id: 40,
            title: "Vellimalai Day",
            image: m40,
            short: "Vellimalai Picture",
            full: "Vellimalai ponom neraiya picture eduthom but ithu ennoda favourite picture",
            position:"object-cover"
        }, 
    ];

    return (
        <div className="mt-16 min-h-screen md:pt-24 bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 p-6">

            <div>
                <h1 className="md:text-4xl text-2xl font-bold text-center love text-green-700 mb-5">
                    💕 Our Beautiful Memories 💕
                </h1>

                <p className="md:text-3xl font-bold mb-5 font1 text-center">Our Memories Start <span className="text-nav">June 30 2022</span> to <span className="text-nav">Feb 27 2025</span> till our last Breath</p>
                <div className="about text-center text-nav font-bold mb-10 text-[11px] md:text-xl">
                    3 Years, 7 Months, 28 Days Going on Still 100 Years With You
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                {memories.map((memory) => (
                    <div
                        key={memory.id}
                        onClick={() => setSelectedMemory(memory)}
                        className="cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
                    >

                        {/* Portrait Image */}
                        <div className="w-full aspect-[3/4]">
                            <img
                                src={memory.image}
                                alt={memory.title}
                                className={`w-full h-full object-cover ${memory.position}`}
                            />
                        </div>

                        {/* Text Content */}
                        <div className="p-4 text-center">
                            <h2 className="text-xl font-bold text-green-800 love tracking-wider">
                                {memory.title}
                            </h2>
                            <p className="text-pink-700 about text-sm mt-1">
                                {memory.short}
                            </p>
                        </div>

                    </div>
                ))}
            </div>

            {/* Popup (Text Only) */}
            {selectedMemory && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">

                    <div className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-2xl">

                        <button
                            onClick={() => setSelectedMemory(null)}
                            className="absolute top-3 right-4 text-xl"
                        >
                            ✖
                        </button>

                        <h2 className="text-xl font-bold text-pink-600 font2 tracking-wider text-center mb-4">
                            {selectedMemory.title}
                        </h2>

                        <p className="text-blue-900 text-center leading-7 about">
                            {selectedMemory.full}
                        </p>

                    </div>
                </div>
            )}

        </div>
    );

}