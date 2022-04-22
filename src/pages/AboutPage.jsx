import Card from '../components/shared/Card';

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About this project</h1>
        <p>This a react app to leave feeedback</p>
        <p>Version: 1.0</p>

        <p>
          <a href='/'>Back home</a>
        </p>
      </div>
    </Card>
  );
}
export default AboutPage;
