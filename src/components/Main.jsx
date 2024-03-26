import reactLogo from '../assets/react.svg'

const reactDescription = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Main() {
  return (
    <div className="main">
      <img src={reactLogo} alt="React Logo" width='100' height={100} />

      <h1 className="main-title">React Essentials</h1>

      <p className="main-para">
        {/* Here we are getting dynamic random Name from reactDescription array and diplaying it */}
        {reactDescription[genRandomInt(2)]} 
        React concepts you will need for almost every app you are going to build!</p>
    </div>
  )
}