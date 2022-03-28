import guilermo from '../img/guilermo.svg';
import clearbit from '../img/clearbit.svg';
import bigspring from '../img/bigspring.svg';
import tonkean from '../img/tonkean.svg';
import shake from '../img/shake.svg';
import mine from '../img/mine.svg';

const Testimonials = () => {
    return ( 
        <div className="bg-gradient-to-b from-[#F9F0FF] to-[#E2F1FF] -skew-y-6 mb-28">
            <div className="container py-28 skew-y-6">
                <div className="w-full md:w-6/12 m-auto px-4 text-center">
                    <p className="font-medium text-primary-200 text-lg">
                        "What I love about Qubly is the easy way we can collaborate even if there is a lot of people involved in the process"
                    </p>
                    <img src={guilermo} alt="Guilermo" className="mx-auto mt-6 mb-2"/>
                    <p className="text-primary-200 font-bold">
                        Guilemmor Cabane <br />
                        CTO @ BigSpring
                    </p>
                </div>

                <div className="w-full md:w-10/12 mx-auto mt-16 px-4 hidden md:block">
                    <div className="h-[1px] w-full bg-[#DEC9FA]" />

                    <div className="flex justify-between items-center py-10 px-4">
                        <img src={tonkean} alt="Tonkean" />
                        <img src={bigspring} alt="BigSpring" />
                        <img src={clearbit} alt="Ckearbit" />
                        <img src={mine} alt="Mine" />
                        <img src={shake} alt="Shake" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Testimonials;