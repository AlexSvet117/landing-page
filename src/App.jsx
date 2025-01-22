import Card from './components/Card.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Nav from './components/Nav.jsx';
import CardContainer from './components/CardContainer.jsx';

function App() {

  const descriptions = [
    "This is the description of the card",
    "This is the description of the card 2",
    "This is the description of the card 3",
    "This is the description of the card 4"
  ]


  return (
    <>
      <Nav/>
      <Hero/>
      <CardContainer>
        <Card titleName={5} text={descriptions[1]} src="https://picsum.photos/200?random=2"/>
        <Card titleName="Excellent View" text={descriptions[2]} src="https://picsum.photos/200?random=3"/>
        <Card titleName="Perfect View" text={descriptions[2]} src="https://picsum.photos/200?random=4"/>
        <Card titleName="Awesome View" text={descriptions[1]} src="https://picsum.photos/200?random=5"/>
        <Card titleName="Excellent View" text={descriptions[2]} src="https://picsum.photos/200?random=6"/>
        <Card src="https://picsum.photos/200?random=7"/>
      </CardContainer>
      <Footer/>
    </>
  );
}

export default App;
