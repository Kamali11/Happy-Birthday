import bghome from '../../Assets/home.jpeg'
import videoFile from '../../Assets/page2.mp4'
import MiniGallery from './Minigallery'
import letter1 from '../../Assets/edit1.jpeg'
import letter2 from '../../Assets/edit3.jpeg'
import letter3 from '../../Assets/edit2.jpeg'



export default function Home() {
    return <section className="w-full">
        <div className='mt-20 md:mt-0'>
            <img src={bghome} alt='Home' className='' />
        </div>


        <div className="md:pt-10 p-4">
            <h1 className="text-4xl text-pink-600  font-bold text-center fancy md:mb-10 md-3  tracking-wide">
                Something About You
            </h1>
            <video
                src={videoFile}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-xl"
            />
        </div>

        <div>
            <MiniGallery />
        </div>

        <div className="min-h-screen bg-pink-100 md:pt-24 px-6">

            {/* Title */}
            <h1 className="fancy text-4xl font-bold text-center text-pink-600 mb-3 md:mb-10">
                 My edits 
            </h1>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className=" p-2 rounded-2xl shadow-xl">
                    <img
                        src={letter1}
                        alt="Letter 1"
                        className="w-full h-85 object-cover rounded-lg"
                    />
                </div>

                <div className="p-2 rounded-2xl shadow-xl">
                    <img
                        src={letter2}
                        alt="Letter 2"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                <div className="p-2 rounded-2xl shadow-xl">
                    <img
                        src={letter3}
                        alt="Letter 3"
                        className="w-full h-85 object-cover rounded-lg"
                    />
                </div>

            </div>

        </div>





    </section>
}