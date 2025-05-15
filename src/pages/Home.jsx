import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Invesments } from '../components/Invesments';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Invesments />
            </main>
        </>
    );
}
