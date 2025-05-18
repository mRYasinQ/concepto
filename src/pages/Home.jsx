import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Invesments } from '../components/Invesments';
import { Instructions } from '../components/Instructions';
import { Categories } from '../components/Categories';
import { Populars } from '../components/Populars';
import { Opportunities } from '../components/Opportunities';

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <main className="flex flex-col gap-20 lg:gap-40 first:[&_section]:gap-y-0">
                <Invesments />
                <Instructions />
                <Categories />
                <Populars />
                <Opportunities />
            </main>
        </>
    );
}
