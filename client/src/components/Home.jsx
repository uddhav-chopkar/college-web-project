import Hero from './Hero'
import EventContainer from './EventContainer'
import Testimonials from './Testimonials'
import CourseCard from './CourseCard'
function Home(){
    return(
        <>
        <Hero/>
        <CourseCard />
        {/* <Programmes/>*/}
        <EventContainer/>
        <Testimonials/>
        </>
    )
}
export default Home