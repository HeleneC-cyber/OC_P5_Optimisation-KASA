
// Import des composants
import Banner from "../components/banner";
import Card from "../components/card";
// Import img
import bannerHome from './../assets/home.png';
// import lodgings from './../../public/lodging.json';
import lodgings from './../data/lodging.json';

// Import style
import './../style/pages/_home.scss';


const Home = () => {

    // const [lodgingItem, setLodgingItem] = useState([])

    return (
        <>
            <main>
                <Banner nameSrc={bannerHome} nameAlt="côtes rocheuses" />

                <section className="cards-container">
                    {lodgings.map((lodging) => 
                    // lodgingItem = 
                    <Card key={lodging.id} title={lodging.title} id={lodging.id} cover={lodging.cover} />
                    )}

                </section>
            </main>
        </>
    );
};

export default Home;