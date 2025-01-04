// Import des composants
import Banner from "../components/banner";
import Card from "../components/card";
// Import img
import bannerHome from './../assets/home.png';
// Import data
import lodgings from './../data/lodging.json';
// Import style
import './../style/pages/_home.scss';


const Home = () => {

    return (
        <>
            <main>
                <Banner nameSrc={bannerHome} nameAlt="côtes rocheuses" title="Chez vous, partout et ailleurs" />

                <section className="cards-container">
                    {lodgings.map((lodging) => 
                    <Card key={lodging.id} title={lodging.title} id={lodging.id} cover={lodging.cover} />
                    )}
                </section>
            </main>
        </>
    );
};

export default Home;